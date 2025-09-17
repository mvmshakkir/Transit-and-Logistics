using FluentMigrator;
namespace SerExtraCore.Migrations.DefaultDB
{

    [Migration(20240212140700)]
    public class DefaultDB_20240212_1407_AlterConsCharges : AutoReversingMigration
    {
        public override void Up()

        {




            this.Alter.Table("ConsignmentCharges")

      .AlterColumn("ChargeId").AsInt32().Nullable();
          //.ForeignKey("FK_ConsignmentCharges_Currencies", "Currencies", "Id")
      





        }

    }
}