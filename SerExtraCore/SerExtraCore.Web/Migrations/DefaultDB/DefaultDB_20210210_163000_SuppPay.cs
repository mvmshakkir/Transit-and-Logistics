using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210210163000)]
    public class DefaultDB_20210210_163000_SuppPay : AutoReversingMigration
    {
        public override void Up()
        {



            Alter.Table("SuppliersPayment")
                .AddColumn("DocumentNO").AsString().Nullable()
                .AddColumn("Description").AsString().Nullable();

            Alter.Table("Consignment")
                            .AlterColumn("ShipperId").AsInt32().Nullable()
                            .AlterColumn("ConsigneeId").AsInt32().Nullable();


            Alter.Table("Invoice")
                            .AlterColumn("ShipperId").AsInt32().Nullable()
                            .AlterColumn("ConsigneeId").AsInt32().Nullable();

            this.Alter.Table("Configuration")
                .AddColumn("Shipper").AsBoolean().NotNullable().WithDefaultValue(true)
                .AddColumn("Consignee").AsBoolean().NotNullable().WithDefaultValue(true);



        }
    }
}