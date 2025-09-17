using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210622150200)]
    public class DefaultDB_20210622_150200_SupplierTripSheet : AutoReversingMigration
    {
        public override void Up()
        {

           this.Execute.Sql(@"create view SupplierTripSheet
as
select *,isnull(TrxAmount,0)-isnull(Advance,0)-ISNULL(PaidAmount,0) as Balance from(
	select ic.Id as Id,ivd.SupplierId,'Invoice' as TrxType,c.Date as Date,i.WayBillNo,saf.AreaName as LoadingLoc,sat.AreaName as OffLoadingLoc,ivd.SupplierAmount as TrxAmount,ivd.SupplierAdvanceAmount as Advance,case when ( (select top 1 Id from SuppliersPaymentInvoiceVehicleDetails spd where spd.InvoiceVehicleDetailId=ivd.Id) is null) then 0 else isnull(ivd.SupplierAmount,0)- ISNULL(ivd.SupplierAdvanceAmount,0) end as PaidAmount,ic.Description as Description  from InvoiceVehicleDetails ivd left join ConsignmentVehicleDetails cvd on ivd.ConsignmentVehicleDetailsId=cvd.Id 
		left join Consignment c on c.Id=cvd.ConsignmentId
		left join Invoice i on i.Id=ivd.InvoiceId
		left join ShippingAreas saf on saf.Id=ivd.ShippingAreaFrom
		left join ShippingAreas sat on sat.Id=ivd.ShippingAreaTo
		left join InvoiceCharges ic on ic.InvoiceVehicleDetailId=ivd.Id
		left join Charges ch on ch.Id=ic.ChargeId
	) as x 

	union all
	 select *,isnull(TrxAmount,0)-isnull(Advance,0)-ISNULL(PaidAmount,0) as Balance from(
	select ic.Id,ic.SupplierId,'Invoice' as TrxType,c.Date as Date,i.WayBillNo,saf.AreaName as LoadingLoc,sat.AreaName as OffLoadingLoc,ic.SupplierAmount as TrxAmount,ic.SupplierAdvanceAmount as Advance,case when ( (select top 1 Id from SuppliersPaymentInvoiceCharges spd where spd.InvoiceChargesId=ic.Id) is null) then 0 else isnull(ic.SupplierAmount,0)- ISNULL(ic.SupplierAdvanceAmount,0) end as PaidAmount ,ic.Description as Description 
	from InvoiceCharges ic inner join InvoiceVehicleDetails ivd on ic.InvoiceChargeVehicleDetailId=ivd.Id
	    left join ConsignmentVehicleDetails cvd on ivd.ConsignmentVehicleDetailsId=cvd.Id 
		left join Consignment c on c.Id=cvd.ConsignmentId
		left join Invoice i on i.Id=ivd.InvoiceId
		left join ShippingAreas saf on saf.Id=ivd.ShippingAreaFrom
		left join ShippingAreas sat on sat.Id=ivd.ShippingAreaTo
		left join Charges ch on ch.Id=ic.ChargeId
	) as x 

	union all

	select *,isnull(TrxAmount,0)-isnull(Advance,0)-ISNULL(PaidAmount,0) as Balance from(
	select ic.Id,ic.SupplierId,'Invoice' as TrxType,c.Date as Date,i.WayBillNo,'' as LoadingLoc,'' as OffLoadingLoc,ic.SupplierAmount as TrxAmount,ic.SupplierAdvanceAmount as Advance,case when ( (select top 1 Id from SuppliersPaymentInvoiceCharges spd where spd.InvoiceChargesId=ic.Id) is null) then 0 else isnull(ic.SupplierAmount,0)- ISNULL(ic.SupplierAdvanceAmount,0) end as PaidAmount  ,ic.Description as Description
	from InvoiceCharges ic inner join Invoice i on ic.InvoiceId=i.Id
		left join Consignment c on c.Id=i.ConsignmentId
	    left join Charges ch on ch.Id=ic.ChargeId
	) as x 

	union all
	select cc.Id as Id,cvd.SupplierId,'Consignment' as TrxType,c.Date as Date,c.WayBillNo,saf.AreaName as LoadingLoc,sat.AreaName as OffLoadingLoc,cvd.SupplierAmount,cvd.SupplierAdvanceAmount as Advance,0 as PaidAmount ,cc.Description as Description,isnull(cvd.SupplierAmount,0)-isnull(cvd.SupplierAdvanceAmount,0) as Balance
	    from ConsignmentVehicleDetails  cvd 
		inner join Consignment c on c.Id=cvd.ConsignmentId
		left join ShippingAreas saf on saf.Id=cvd.ShippingAreaFrom
		left join ShippingAreas sat on sat.Id=cvd.ShippingAreaTo
		left join ConsignmentCharges cc on cc.ConsignmentChargesId=cvd.Id
		left join Charges ch on ch.Id=cc.ChargeId
		where cvd.Id not in (select isnull(ConsignmentVehicleDetailsId,0) from InvoiceVehicleDetails)
    union all
	select ch.Id,ch.SupplierId,'Consignment' as TrxType,c.Date as Date,c.WayBillNo,saf.AreaName as LoadingLoc,sat.AreaName as OffLoadingLoc,ch.SupplierAmount,ch.SupplierAdvanceAmount as Advance,0 as PaidAmount,ch.Description as Description,isnull(ch.SupplierAmount,0)-isnull(ch.SupplierAdvanceAmount,0) as Balance 
       from ConsignmentCharges ch
		inner join ConsignmentVehicleDetails  cvd on ch.ConsignmentVehicleDetailId=cvd.Id
		inner join Consignment c on c.Id=cvd.ConsignmentId
		left join ShippingAreas saf on saf.Id=cvd.ShippingAreaFrom
		left join ShippingAreas sat on sat.Id=cvd.ShippingAreaTo
		left join Charges charg on charg.Id=ch.ChargeId
		where cvd.Id not in (select isnull(ConsignmentVehicleDetailsId,0) from InvoiceVehicleDetails)

	union all

		select ch.Id,ch.SupplierId,'Consignment' as TrxType,c.Date as Date,c.WayBillNo,'' as LoadingLoc,'' as OffLoadingLoc,ch.SupplierAmount,ch.SupplierAdvanceAmount as Advance,0 as PaidAmount,ch.Description as Description,isnull(ch.SupplierAmount,0)-isnull(ch.SupplierAdvanceAmount,0) as Balance 
        from ConsignmentCharges ch
		inner join Consignment c on c.Id=ch.ConsignmentId
		left join Charges charg on charg.Id=ch.ChargeId
		where c.Id not in (select isnull(ConsignmentId,0) from Invoice)
GO");
        }
    }
}