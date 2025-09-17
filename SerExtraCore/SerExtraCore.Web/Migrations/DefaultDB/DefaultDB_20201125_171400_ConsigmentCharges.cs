using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201125171400)]
    public class DefaultDB_20201125_171400_ConsigmentCharges : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("ConsignmentCharges")
                       .AlterColumn("ConsignmentId").AsInt32().Nullable()
                       .AddColumn("ConsignmentChargesId").AsInt32().Nullable()
                          .ForeignKey("FK_ConsignmentCharges_ConsignmentCharges", "ConsignmentCharges", "Id");

        }
    }
}