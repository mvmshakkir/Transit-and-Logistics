using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20231009_111800)]
    public class DefaultDB_20231009_111800_JVBankReconciliation : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("JournalEntries")
                    .AddColumn("BankReconciliation").AsBoolean().Nullable();

            this.Execute.Sql(@"CREATE PROCEDURE [dbo].[BankReconciliation] 
	-- Add the parameters for the stored procedure here
	 @AccountId int = 0, 
	 @FromDate Date,
	 @ToDate Date
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
select jv.Id,VNo,a.AccountName,TrxDate,Remarks,case when DebitAccountId=@accountid then Amount else 0 end As Debit,case when CreditAccountId=@accountid then Amount else 0 end As Credit,BankReconciliation from journalentries jv
left join Accounts a on a.Id=@accountid
where (DebitAccountId=@accountid or CreditAccountId=@accountid) and TrxDate >=case when @FromDate is null then TrxDate else @FromDate end  and TrxDate <=case when @ToDate is null then TrxDate else @ToDate end
END");

        }
    }
}