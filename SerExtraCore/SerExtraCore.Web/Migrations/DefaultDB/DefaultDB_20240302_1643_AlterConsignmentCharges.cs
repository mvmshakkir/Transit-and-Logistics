using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240302164300)]
    public class DefaultDB_20240302_1643_AlterConsignmentCharges : AutoReversingMigration
    {
        public override void Up()

        {





			this.Alter.Table("ConsignmentCharges")
	.AddColumn("UOMId").AsInt32().Nullable().ForeignKey("FK_ConsignmentCharges_UOMId", "UOM", "Id");





			;

		}

    }
}