using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210614160800)]
    public class DefaultDB_20210614_160800_CurrencyUnit : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("Currencies")
                .AddColumn("CurrencyUnit").AsString().Nullable()
                .AddColumn("SubCurrencyUnit").AsString().Nullable();
        }
    }
}