using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20220826105100)]
    public class DefaultDB_20220826_105100_ReportDesign : AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("CustomLookups", "Id", s => s
               .WithColumn("LookupName").AsString().NotNullable()
               .WithColumn("SqlQuery").AsString(int.MaxValue).NotNullable());

            this.CreateTableWithId32("ReportDesigns", "Id", s => s
                  .WithColumn("Name").AsString().NotNullable()
                  .WithColumn("Design").AsString(int.MaxValue).NotNullable()
                  .WithColumn("Category").AsString().NotNullable().WithDefaultValue("General")
                  .WithColumn("ReportType").AsInt32().NotNullable().WithDefaultValue(1)
                  .WithColumn("PermissionKey").AsString().NotNullable().WithDefaultValue("Reports:Genaral"));


            this.CreateTableWithId32("ReportDataSets", "Id", s => s
                  .WithColumn("ReportDesignId").AsInt32().NotNullable()
                      .ForeignKey("FK_ReportDataSets_ReportDesigns", "ReportDesigns", "Id")
                  .WithColumn("SqlQuery").AsString(int.MaxValue).NotNullable()
                  .WithColumn("DataSetName").AsString().NotNullable());


            this.CreateTableWithId32("ReportParameters", "Id", s => s
                  .WithColumn("ReportDesignId").AsInt32().NotNullable()
                      .ForeignKey("FK_ReportParameters_ReportDesigns", "ReportDesigns", "Id")
                  .WithColumn("ParameterName").AsString().NotNullable()
                  .WithColumn("DataType").AsInt32().NotNullable()
                  .WithColumn("EditorType").AsInt32().NotNullable()
                  .WithColumn("LookupName").AsString().Nullable()
                  .WithColumn("DefaultValue").AsString().Nullable()
                  .WithColumn("IsRequired").AsBoolean().Nullable()
                  .WithColumn("LookupType").AsInt32().Nullable()
                  .WithColumn("CustomSqlQuery").AsString(int.MaxValue).Nullable());

            
        }
    }
}