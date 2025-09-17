using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{             
    [Migration(20240719172400)] 
    public class DefaultDB_20240719_1724_InvoiceConsignmentIdNull : AutoReversingMigration
    {
        public override void Up()
        {

            Alter.Table("Invoice")
                .AlterColumn("ConsignmentId").AsInt32().Nullable();


        }
    }
}
