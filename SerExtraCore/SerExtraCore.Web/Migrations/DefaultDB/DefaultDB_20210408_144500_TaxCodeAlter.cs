using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210408_144500)]
    public class DefaultDB_20210408_144500_TaxCodeAlter : AutoReversingMigration
    {
        public override void Up()
        {

            this.Execute.Sql(@"ALTER TABLE TaxCode DROP COLUMN Rate");

            this.Alter.Table("TaxCode")
                .AddColumn("Rate").AsDecimal(18,3).NotNullable();

        }
    }
}