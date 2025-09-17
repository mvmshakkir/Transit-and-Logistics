using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201026273000)]
    public class DefaultDB_20201026_273000_Configration : AutoReversingMigration
    {
        public override void Up()
        {




            this.Alter.Table("Configuration").AddColumn("DefaultCurrency").AsInt32().Nullable()
                   .ForeignKey("FK_Configuration_Currencies", "Currencies", "Id");









        }
    }
}