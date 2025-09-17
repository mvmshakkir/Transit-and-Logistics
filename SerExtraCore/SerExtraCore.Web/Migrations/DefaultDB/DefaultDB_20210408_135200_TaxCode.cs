using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210408135200)]
    public class DefaultDB_20210408_135200_TaxCode : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("TaxCode")
             .WithColumn("ID").AsInt32().PrimaryKey().Identity().NotNullable()
             .WithColumn("Name").AsString().NotNullable()
             .WithColumn("Rate").AsDate().NotNullable()
             .WithColumn("Description").AsString(500).Nullable();

            this.Alter.Table("Charges")
                .AddColumn("TaxCodeId").AsInt32().Nullable()
                      .ForeignKey("FK_Charges_TaxCode", "TaxCode", "Id");

        }
    }
}