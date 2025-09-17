using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210614125000)]
    public class DefaultDB_20210614_125000_SupplierPaymentReport : AutoReversingMigration
    {
        public override void Up()
        {

           this.Execute.Sql(@"Create view V_SupplierPayment
AS
	select *,isnull(TrxAmount,0)-isnull(Advance,0)-ISNULL(PaidAmount,0) as Balance from(select ivd.SupplierId,'Invoice' as TrxType,c.Date as ConsignmentDate,i.WayBillNo,saf.AreaName as LoadingLoc,sat.AreaName as OffLoadingLoc,ivd.SupplierAmount as TrxAmount,ivd.SupplierAdvanceAmount as Advance,case when ( (select top 1 Id from SuppliersPaymentInvoiceVehicleDetails spd where spd.InvoiceVehicleDetailId=ivd.Id) is null) then 0 else isnull(ivd.SupplierAmount,0)- ISNULL(ivd.SupplierAdvanceAmount,0) end as PaidAmount  from InvoiceVehicleDetails ivd left join ConsignmentVehicleDetails cvd on ivd.ConsignmentVehicleDetailsId=cvd.Id 
		left join Consignment c on c.Id=cvd.ConsignmentId
		left join Invoice i on i.Id=ivd.InvoiceId
		left join ShippingAreas saf on saf.Id=ivd.ShippingAreaFrom
		left join ShippingAreas sat on sat.Id=ivd.ShippingAreaTo
	) as x 

	union all

	select cvd.SupplierId,'Consignment' as TrxType,c.Date as ConsignmentDate,c.WayBillNo,saf.AreaName as LoadingLoc,sat.AreaName as OffLoadingLoc,cvd.SupplierAmount,cvd.SupplierAdvanceAmount as Advance,0 as PaidAmount,isnull(cvd.SupplierAmount,0)-isnull(cvd.SupplierAdvanceAmount,0) as Balance from ConsignmentVehicleDetails  cvd inner join Consignment c on c.Id=cvd.ConsignmentId
		left join ShippingAreas saf on saf.Id=cvd.ShippingAreaFrom
		left join ShippingAreas sat on sat.Id=cvd.ShippingAreaTo
		where cvd.Id not in (select isnull(ConsignmentVehicleDetailsId,0) from InvoiceVehicleDetails) 

	
GO");
        }
    }
}