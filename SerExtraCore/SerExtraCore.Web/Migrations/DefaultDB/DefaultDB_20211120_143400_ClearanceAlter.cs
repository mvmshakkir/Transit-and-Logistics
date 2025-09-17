using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20211120143400)]
    public class DefaultDB_20211120_143400_ClearanceAlter : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("ClearanceStatus").AddColumn("ChartOrder").AsInt32().NotNullable().WithDefaultValue(1);

            this.Execute.Sql("update ClearanceStatus set ChartOrder=10000 where [Status]='Cleared'");


            this.Execute.Sql("update Clearance set ETA=''");

            this.Alter.Table("Clearance")
                .AlterColumn("ETA").AsDate().Nullable()
                .AddColumn("ETD").AsDate().Nullable();


            this.Execute.Sql(@"IF COL_LENGTH('JournalEntries', 'PDCPaymentDetailsId') IS NULL
BEGIN
    ALTER TABLE[JournalEntries]
    ADD[PDCPaymentDetailsId][int] NULL


    ALTER TABLE[dbo].[JournalEntries]  WITH CHECK ADD  CONSTRAINT[FK_JournalEntries_PDCPaymentDetails] FOREIGN KEY([PDCPaymentDetailsId])

    REFERENCES[dbo].[PDCPaymentDetails]([Id])

END");
        }
    }
}