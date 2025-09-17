using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201026272000)]
    public class DefaultDB_20201026_272000_ConsigmentAlter : AutoReversingMigration
    {
        public override void Up()
        {




            this.Alter.Table("Consignment")
            .AddColumn("StartDate").AsDateTime().Nullable()
            .AddColumn("EndDate").AsDateTime().Nullable();


            this.Alter.Table("Invoice")
            .AddColumn("StartDate").AsDateTime().Nullable()
            .AddColumn("EndDate").AsDateTime().Nullable();
            






        }
    }
}