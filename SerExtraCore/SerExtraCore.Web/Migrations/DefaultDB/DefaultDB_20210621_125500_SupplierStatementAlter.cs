using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210621125500)]
    public class DefaultDB_20210621_125500_SupplierStatementAlter : AutoReversingMigration
    {
        public override void Up()
        {

           this.Execute.Sql(@"ALTER view V_SupplierStatement
as
select * from(
	select ic.Id as Id,ivd.SupplierId,'Invoice' as TrxType,i.InvoiceDate as TrxDate,i.InvoiceNO as TrxNo,i.WayBillNo,saf.AreaName+'-' + sat.AreaName as Description,'' as InvoiceNo,ivd.SupplierAmount as TrxAmount,0 as Payment,0 as PaymentType
	    from InvoiceVehicleDetails ivd left join ConsignmentVehicleDetails cvd on ivd.ConsignmentVehicleDetailsId=cvd.Id 
		left join Consignment c on c.Id=cvd.ConsignmentId
		left join Invoice i on i.Id=ivd.InvoiceId
		left join ShippingAreas saf on saf.Id=ivd.ShippingAreaFrom
		left join ShippingAreas sat on sat.Id=ivd.ShippingAreaTo
		left join InvoiceCharges ic on ic.InvoiceVehicleDetailId=ivd.Id
		left join Charges ch on ch.Id=ic.ChargeId
	) as x 

	union all
	 select * from(
	select ic.Id,ic.SupplierId,'Invoice' as TrxType,i.InvoiceDate as TrxDate,i.InvoiceNO as TrxNo,i.WayBillNo,saf.AreaName+'-' + sat.AreaName as Description,'' as InvoiceNo,ic.SupplierAmount as TrxAmount,0 as Payment,0 as PaymentType  
	from InvoiceCharges ic inner join InvoiceVehicleDetails ivd on ic.InvoiceChargeVehicleDetailId=ivd.Id
	    left join ConsignmentVehicleDetails cvd on ivd.ConsignmentVehicleDetailsId=cvd.Id 
		left join Consignment c on c.Id=cvd.ConsignmentId
		left join Invoice i on i.Id=ivd.InvoiceId
		left join ShippingAreas saf on saf.Id=ivd.ShippingAreaFrom
		left join ShippingAreas sat on sat.Id=ivd.ShippingAreaTo
		left join Charges ch on ch.Id=ic.ChargeId
	) as x 

	union all

	select * from(
	select ic.Id,ic.SupplierId,'Invoice' as TrxType,i.InvoiceDate as TrxDate,i.InvoiceNO as TrxNo,i.WayBillNo,' ' as Description,'' as InvoiceNo,ic.SupplierAmount as TrxAmount,0 as Payment,0 as PaymentType
	from InvoiceCharges ic inner join Invoice i on ic.InvoiceId=i.Id
		left join Consignment c on c.Id=i.ConsignmentId
	    left join Charges ch on ch.Id=ic.ChargeId
	) as x 

	union all
	select cc.Id as Id,cvd.SupplierId,'Consignment' as TrxType,c.Date as TrxDate,'' as TrxNo,c.WayBillNo,saf.AreaName+'-' + sat.AreaName + '- Advance' as Description,'' as InvoiceNo,0 as TrxAmount,cvd.SupplierAdvanceAmount  as Payment,isnull(cvd.PaymentType,0) as PaymentType
	    from ConsignmentVehicleDetails  cvd 
		inner join Consignment c on c.Id=cvd.ConsignmentId
		left join ShippingAreas saf on saf.Id=cvd.ShippingAreaFrom
		left join ShippingAreas sat on sat.Id=cvd.ShippingAreaTo
		left join ConsignmentCharges cc on cc.ConsignmentVehicleDetailId=cvd.Id
	
    union all
	select ch.Id,ch.SupplierId,'Consignment' as TrxType,c.Date as TrxDate,'' as TrxNo,c.WayBillNo,saf.AreaName+'-' + sat.AreaName + '- Advance' as Description,'' as InvoiceNo,0 as TrxAmount,ch.SupplierAdvanceAmount as Payment,isnull(ch.PaymentType,0) as PaymentType
       from ConsignmentCharges ch
		inner join ConsignmentVehicleDetails  cvd on ch.ConsignmentVehicleDetailId=cvd.Id
		inner join Consignment c on c.Id=cvd.ConsignmentId
		left join ShippingAreas saf on saf.Id=cvd.ShippingAreaFrom
		left join ShippingAreas sat on sat.Id=cvd.ShippingAreaTo
		

	union all

		select ch.Id,ch.SupplierId,'Consignment' as TrxType,c.Date as TrxDate,'' as TrxNo,c.WayBillNo,' Advance ' as Description,'' as InvoiceNo,0 as TrxAmount,ch.SupplierAdvanceAmount as Payment,isnull(PaymentType,0) as PaymentType
       from ConsignmentCharges ch
		
		inner join Consignment c on c.Id=ch.ConsignmentId

		union all

		select Id,SupplierId,'Supplier Payment' as TrxType,Date as TrxDate,'' as TrxNo,'' as WayBillNo,' Payment ' as Description,DocumentNO as InvoiceNo,0 as TrxAmount,TotalAmount as Payment,PaymentType from SuppliersPayment


		union all

		select Id,SupplierId,'Payment' as TrxType,TrxDate as TrxDate,'' as TrxNo,'' as WayBillNo,Remarks as Description,'' as InvoiceNo,0 as TrxAmount,Amount as Payment,PaymentMethod from JournalEntries where VType=2 and EntityType is null
		UNION ALL
		select Id,SupplierId,'Reciept' as TrxType,TrxDate as TrxDate,'' as TrxNo,'' as WayBillNo,Remarks as Description,'' as InvoiceNo,0 as TrxAmount,-1*Amount as Payment,PaymentMethod from JournalEntries where VType=1 and EntityType is null
		GO");
        }
    }
}