using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210622182100)]
    public class DefaultDB_20210622_182100_CustomerStatement : AutoReversingMigration
    {
        public override void Up()
        {

           this.Execute.Sql(@"create view  V_CustomerStatement
as
select 'Consignment' as TrxType,Billing as CustomerId,Date as TrxDate,JobNo as TrxNo,0 as TrxAmount,AdvanceAmount as Received,AdvancePaymentType as PaymentType from Consignment
union all

select 'Invoice' as TrxType,Billing as CustomerId,InvoiceDate as TrxDate,InvoiceNO as TrxNo,TotalAmount as TrxAmount,0 as Received,0 as PaymentType from Invoice

union all

select 'Invoice Collection' as TrxType,CustomerId as CustomerId,TrxDate as TrxDate,CollectionNumber as TrxNo,0 as TrxAmount,TotalAmount as Received,PaymentType as PaymentType from InvoiceCollection

union all
  select 'Receipt' as TrxType,CustomerId as CustomerId,TrxDate as TrxDate,CONVERT(nvarchar, VNo) TrxNo,0 as TrxAmount,Amount as Received,PaymentMethod as PaymentType  from JournalEntries 
 where  EntityType is null and VType=1
 union all
  select 'Payment' as TrxType,CustomerId as CustomerId,TrxDate as TrxDate,CONVERT(nvarchar, VNo) TrxNo,0 as TrxAmount,-1*Amount as Received,PaymentMethod as PaymentType  from JournalEntries 
 where  EntityType is null and VType=2
 go");
        }
    }
}