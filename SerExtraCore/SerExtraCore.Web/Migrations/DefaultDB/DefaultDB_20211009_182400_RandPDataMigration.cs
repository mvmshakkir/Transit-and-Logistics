using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20211009182400)]
    public class DefaultDB_20211009_182400_RandPDataMigration : AutoReversingMigration
    {
        public override void Up()
        {

            this.Execute.Sql(@"insert into MoneyInOut (VType,TrxDate,VNo,AccountHeadId,CustomerId,EmployeeId,SupplierId,VehicleId,Amount,TotalAmount,PaymentMethod,AccountId,Remarks)
(select 1,TrxDate,VNo,CreditAccountHeadId,CustomerId,EmployeeId,SupplierId,VehicleId,Amount,Amount,PaymentMethod,DebitAccountId,Remarks  from journalentries where EntityType is null and vtype =1)
go");

            this.Execute.Sql(@"insert into MoneyInOut (VType,TrxDate,VNo,AccountHeadId,CustomerId,EmployeeId,SupplierId,VehicleId,Amount,TotalAmount,PaymentMethod,AccountId,Remarks)
(select 2,TrxDate,VNo,DebitAccountHeadId,CustomerId,EmployeeId,SupplierId,VehicleId,Amount,Amount,PaymentMethod,CreditAccountId,Remarks  from journalentries where EntityType is null and vtype =2)
go");

        }
    }
}