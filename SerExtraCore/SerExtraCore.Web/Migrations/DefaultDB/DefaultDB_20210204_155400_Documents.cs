using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20210204155400)]
    public class DefaultDB_20210204_155400_Documents : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("DocumentType")
               .WithColumn("ID").AsInt32().PrimaryKey().Identity().NotNullable()
               .WithColumn("TypeName").AsString(200).NotNullable();

            Create.Table("Documents")
                .WithColumn("ID").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("DocumentTypeId").AsInt32().Nullable()
                   .ForeignKey("FK_Documents_DocumentType", "DocumentType", "ID")
                .WithColumn("TrxDate").AsDate().NotNullable()
                .WithColumn("IssueDate").AsDate().Nullable()
                .WithColumn("ExpiryDate").AsDate().Nullable()
                .WithColumn("DueDate").AsDate().Nullable()
                .WithColumn("Attachments").AsString(500)
                   .Nullable()
                .WithColumn("TrxNo").AsString().NotNullable();
        }
    }
}