using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210216105900)]
    public class DefaultDB_20210216_105900_PDCType : AutoReversingMigration
    {
        public override void Up()
        {




            Alter.Table("PDCPayments")
               .AddColumn("ChequeType").AsInt32().NotNullable().WithDefaultValue(1);
              



        }
    }
}