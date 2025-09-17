using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20220826_173100)]
    public class DefaultDB_20220826_173100_ReportDesignAlter : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("ReportParameters")
                     .AddColumn("CustomLookupId").AsInt32().Nullable()
                     .ForeignKey("FK_ReportParameters_CustomLookups", "CustomLookups", "Id");



        }
    }
}