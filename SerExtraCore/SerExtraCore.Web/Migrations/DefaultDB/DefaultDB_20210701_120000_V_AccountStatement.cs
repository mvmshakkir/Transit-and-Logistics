using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210701120000)]
    public class DefaultDB_20210701_120000_V_AccountStatement : AutoReversingMigration
    {
        public override void Up()
        {
            this.Execute.Sql(@"Create view V_AccountStatement
as
select je.TrxDate,CustomerId,EmployeeId,VehicleId,SupplierId,Amount as Debit,0 as Credit,'Receipt' as TrxType,Remarks,VNo,dah.Description as DebitLedger,cah.Description as CreditLedger,da.AccountName as DebitAccount,ca.AccountName as CreditAccount,DebitAccountHeadId,CreditAccountHeadId,DebitAccountId,CreditAccountId,EntityType
	from JournalEntries je
	left join AccountHeads dah on dah.ID=je.DebitAccountHeadId
	left join AccountHeads cah on cah.ID=je.CreditAccountHeadId
	left join Accounts da on da.ID=je.DebitAccountId
	left join Accounts ca on ca.ID=je.CreditAccountId
	where VType=1
union all
select je.TrxDate,CustomerId,EmployeeId,VehicleId,SupplierId,0 as Debit,Amount as Credit,'Receipt' as TrxType,Remarks,VNo,dah.Description as DebitLedger,cah.Description as CreditLedger,da.AccountName as DebitAccount,ca.AccountName as CreditAccount,DebitAccountHeadId,CreditAccountHeadId,DebitAccountId,CreditAccountId,EntityType
	from JournalEntries je
	left join AccountHeads dah on dah.ID=je.DebitAccountHeadId
	left join AccountHeads cah on cah.ID=je.CreditAccountHeadId
	left join Accounts da on da.ID=je.DebitAccountId
	left join Accounts ca on ca.ID=je.CreditAccountId
	where VType=2
union all
select je.TrxDate,CustomerId,EmployeeId,VehicleId,SupplierId,Amount as Debit,0 as Credit,'Receipt' as TrxType,Remarks,VNo,dah.Description as DebitLedger,cah.Description as CreditLedger,da.AccountName as DebitAccount,ca.AccountName as CreditAccount,DebitAccountHeadId,CreditAccountHeadId,DebitAccountId,CreditAccountId,EntityType
	from JournalEntries je
	left join AccountHeads dah on dah.ID=je.DebitAccountHeadId
	left join AccountHeads cah on cah.ID=je.CreditAccountHeadId
	left join Accounts da on da.ID=je.DebitAccountId
	left join Accounts ca on ca.ID=je.CreditAccountId
	where VType=1
union all
select je.TrxDate,CustomerId,EmployeeId,VehicleId,SupplierId,Amount as Debit,0 as Credit,'Contra' as TrxType,Remarks,VNo,dah.Description as DebitLedger,cah.Description as CreditLedger,da.AccountName as DebitAccount,ca.AccountName as CreditAccount,DebitAccountHeadId,CreditAccountHeadId,DebitAccountId,CreditAccountId,EntityType
	from JournalEntries je
	left join AccountHeads dah on dah.ID=je.DebitAccountHeadId
	left join AccountHeads cah on cah.ID=je.CreditAccountHeadId
	left join Accounts da on da.ID=je.DebitAccountId
	left join Accounts ca on ca.ID=je.CreditAccountId
	where VType=3
union all
select je.TrxDate,CreditCustomerId as CustomerId,CreditEmployeeId as EmployeeId,CreditVehicleId as VehicleId,CreditSupplierId  as SupplierId,0 as Debit,Amount as Credit,'Contra' as TrxType,Remarks,VNo,dah.Description as DebitLedger,cah.Description as CreditLedger,da.AccountName as DebitAccount,ca.AccountName as CreditAccount,DebitAccountHeadId,CreditAccountHeadId,DebitAccountId,CreditAccountId,EntityType
	from JournalEntries je
	left join AccountHeads dah on dah.ID=je.DebitAccountHeadId
	left join AccountHeads cah on cah.ID=je.CreditAccountHeadId
	left join Accounts da on da.ID=je.DebitAccountId
	left join Accounts ca on ca.ID=je.CreditAccountId
	where VType=3
union all
select je.TrxDate,CustomerId,EmployeeId,VehicleId,SupplierId,Amount as Debit,0 as Credit,'JV' as TrxType,Remarks,VNo,dah.Description as DebitLedger,cah.Description as CreditLedger,da.AccountName as DebitAccount,ca.AccountName as CreditAccount,DebitAccountHeadId,CreditAccountHeadId,DebitAccountId,CreditAccountId,EntityType
	from JournalEntries je
	left join AccountHeads dah on dah.ID=je.DebitAccountHeadId
	left join AccountHeads cah on cah.ID=je.CreditAccountHeadId
	left join Accounts da on da.ID=je.DebitAccountId
	left join Accounts ca on ca.ID=je.CreditAccountId
	where VType=4 
union all
select je.TrxDate,CreditCustomerId as CustomerId,CreditEmployeeId as EmployeeId,CreditVehicleId as VehicleId,CreditSupplierId as SupplierId,0 as Debit,Amount as Credit,'JV' as TrxType,Remarks,VNo,dah.Description as DebitLedger,cah.Description as CreditLedger,da.AccountName as DebitAccount,ca.AccountName as CreditAccount,DebitAccountHeadId,CreditAccountHeadId,DebitAccountId,CreditAccountId,EntityType
	from JournalEntries je
	left join AccountHeads dah on dah.ID=je.DebitAccountHeadId
	left join AccountHeads cah on cah.ID=je.CreditAccountHeadId
	left join Accounts da on da.ID=je.DebitAccountId
	left join Accounts ca on ca.ID=je.CreditAccountId
	where VType=4
go");



        }
    }
}