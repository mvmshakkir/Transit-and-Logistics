using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20220126145600)]
    public class DefaultDB_20220126_145600_MAlter : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("MoneyInOut")
                 .AddColumn("ConsignmentId").AsInt32().Nullable()
                    .ForeignKey("FK_MoneyInOut_Consignment", "Consignment", "Id");
        }
    }
}