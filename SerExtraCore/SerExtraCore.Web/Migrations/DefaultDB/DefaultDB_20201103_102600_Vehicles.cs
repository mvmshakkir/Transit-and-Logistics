using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20201103102600)]
    public class DefaultDB_20201103_102600_Vehicles : AutoReversingMigration
    {
        public override void Up()
        {


            this.Alter.Table("Vehicles")
                       .AddColumn("PrimeMover").AsString(200).Nullable();

        }
    }
}