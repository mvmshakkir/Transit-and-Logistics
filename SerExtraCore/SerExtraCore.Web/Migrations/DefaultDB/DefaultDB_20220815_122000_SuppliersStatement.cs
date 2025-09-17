using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20220815122000)]
    public class DefaultDB_20220815_122000_SuppliersStatement : AutoReversingMigration
    {
        public override void Up()
        {
            this.Execute.Sql(@"
Alter View V_SupplierStatement
as
select * from(
	select con.Date as ConsignmentDate,con.JobNo as ConsignmentJobNo,ic.Id as Id,ivd.SupplierId,'Invoice' as TrxType,i.InvoiceDate as TrxDate,i.InvoiceNO as TrxNo,i.WayBillNo,saf.AreaName+'-' + sat.AreaName as Description,'' as InvoiceNo,ivd.SupplierAmount as TrxAmount,0 as Payment,0 as PaymentType
	    from InvoiceVehicleDetails ivd left join ConsignmentVehicleDetails cvd on ivd.ConsignmentVehicleDetailsId=cvd.Id 
		left join Consignment c on c.Id=cvd.ConsignmentId
		left join Invoice i on i.Id=ivd.InvoiceId
		left join ShippingAreas saf on saf.Id=ivd.ShippingAreaFrom
		left join ShippingAreas sat on sat.Id=ivd.ShippingAreaTo
		left join InvoiceCharges ic on ic.InvoiceVehicleDetailId=ivd.Id
		left join Charges ch on ch.Id=ic.ChargeId
		left join Consignment con on con.Id=i.ConsignmentId
	) as x 
	union all
	 select * from(
	select con.Date as ConsignmentDate,con.JobNo as ConsignmentJobNo,ic.Id,ic.SupplierId,'Invoice' as TrxType,i.InvoiceDate as TrxDate,i.InvoiceNO as TrxNo,i.WayBillNo,saf.AreaName+'-' + sat.AreaName as Description,'' as InvoiceNo,ic.SupplierAmount as TrxAmount,0 as Payment,0 as PaymentType  
	from InvoiceCharges ic inner join InvoiceVehicleDetails ivd on ic.InvoiceChargeVehicleDetailId=ivd.Id
	    left join ConsignmentVehicleDetails cvd on ivd.ConsignmentVehicleDetailsId=cvd.Id 
		left join Consignment c on c.Id=cvd.ConsignmentId
		left join Invoice i on i.Id=ivd.InvoiceId
		left join ShippingAreas saf on saf.Id=ivd.ShippingAreaFrom
		left join ShippingAreas sat on sat.Id=ivd.ShippingAreaTo
		left join Charges ch on ch.Id=ic.ChargeId
		left join Consignment con on con.Id=i.ConsignmentId
	) as x 
	union all
	select * from(
	select C.Date as ConsignmentDate,C.JobNo as ConsignmentJobNo,ic.Id,ic.SupplierId,'Invoice' as TrxType,i.InvoiceDate as TrxDate,i.InvoiceNO as TrxNo,i.WayBillNo,' ' as Description,'' as InvoiceNo,ic.SupplierAmount as TrxAmount,0 as Payment,0 as PaymentType
	from InvoiceCharges ic inner join Invoice i on ic.InvoiceId=i.Id
		left join Consignment c on c.Id=i.ConsignmentId
	    left join Charges ch on ch.Id=ic.ChargeId
	) as x 
	union all
	select C.Date as ConsignmentDate,C.JobNo as ConsignmentJobNo,cc.Id as Id,cvd.SupplierId,'Consignment' as TrxType,c.Date as TrxDate,'' as TrxNo,c.WayBillNo,saf.AreaName+'-' + sat.AreaName + '- Advance' as Description,'' as InvoiceNo,0 as TrxAmount,cvd.SupplierAdvanceAmount  as Payment,isnull(cvd.PaymentType,0) as PaymentType
	    from ConsignmentVehicleDetails  cvd 
		inner join Consignment c on c.Id=cvd.ConsignmentId
		left join ShippingAreas saf on saf.Id=cvd.ShippingAreaFrom
		left join ShippingAreas sat on sat.Id=cvd.ShippingAreaTo
		left join ConsignmentCharges cc on cc.ConsignmentVehicleDetailId=cvd.Id
	
    union all
	select C.Date as ConsignmentDate,C.JobNo as ConsignmentJobNo,ch.Id,ch.SupplierId,'Consignment' as TrxType,c.Date as TrxDate,'' as TrxNo,c.WayBillNo,saf.AreaName+'-' + sat.AreaName + '- Advance' as Description,'' as InvoiceNo,0 as TrxAmount,ch.SupplierAdvanceAmount as Payment,isnull(ch.PaymentType,0) as PaymentType
       from ConsignmentCharges ch
		inner join ConsignmentVehicleDetails  cvd on ch.ConsignmentVehicleDetailId=cvd.Id
		inner join Consignment c on c.Id=cvd.ConsignmentId
		left join ShippingAreas saf on saf.Id=cvd.ShippingAreaFrom
		left join ShippingAreas sat on sat.Id=cvd.ShippingAreaTo
		
	union all
		select C.Date as ConsignmentDate,C.JobNo as ConsignmentJobNo,ch.Id,ch.SupplierId,'Consignment' as TrxType,c.Date as TrxDate,'' as TrxNo,c.WayBillNo,' Advance ' as Description,'' as InvoiceNo,0 as TrxAmount,ch.SupplierAdvanceAmount as Payment,isnull(PaymentType,0) as PaymentType
       from ConsignmentCharges ch
		
		inner join Consignment c on c.Id=ch.ConsignmentId
		union all
		select NULL as ConsignmentDate,'' as ConsignmentJobNo,Id,SupplierId,'Supplier Payment' as TrxType,Date as TrxDate,'' as TrxNo,'' as WayBillNo,' Payment ' as Description,DocumentNO as InvoiceNo,0 as TrxAmount,TotalAmount as Payment,PaymentType from SuppliersPayment
		union all
		select NULL as ConsignmentDate,'' as ConsignmentJobNo,Id,SupplierId,'Payment' as TrxType,TrxDate as TrxDate,'' as TrxNo,'' as WayBillNo,Remarks as Description,'' as InvoiceNo,0 as TrxAmount,TotalAmount as Payment,PaymentMethod from MoneyInOut where VType=2 
		UNION ALL
		select NULL as ConsignmentDate,'' as ConsignmentJobNo,Id,SupplierId,'Reciept' as TrxType,TrxDate as TrxDate,'' as TrxNo,'' as WayBillNo,Remarks as Description,'' as InvoiceNo,0 as TrxAmount,-1*TotalAmount as Payment,PaymentMethod from MoneyInOut where VType=1 
		union all
		select NULL as ConsignmentDate,'' as ConsignmentJobNo,Id,Id,'Supplier Opening' as TrxType,OpeningDate as TrxDate,'' as TrxNo,'' as WayBillNo,'' as Description,'' as InvoiceNo,Opening as TrxAmount,0 as Payment,0 as PaymentMethod from Supplier where Opening is not null

GO


");
        }
    }
}