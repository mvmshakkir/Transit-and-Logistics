using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20200929105500)]
    public class DefaultDB_20200929_105500_UserHierarchy : AutoReversingMigration
    {
        public override void Up()
        {
           


            this.CreateTableWithId32("UserHierarchy", "Id", s => s
              .WithColumn("HierarchyName").AsString(200).NotNullable()
              .WithColumn("Descrription").AsString(500).Nullable());


            this.Alter.Table("Users").AddColumn("HierarchyId").AsInt32().Nullable()
                 .ForeignKey("FK_Users_UserHierarchy", "UserHierarchy", "ID");


            this.Alter.Table("Configuration").AddColumn("InvoiceCollectionApprovalHierarchyId").AsInt32().Nullable()
                 .ForeignKey("FK_Configuration_InvoiceCollectionUserHierarchy", "UserHierarchy", "ID");

            this.Alter.Table("Configuration").AddColumn("InvoiceApprovalHierarchyId").AsInt32().Nullable()
                .ForeignKey("FK_Configuration_InvoiceUserHierarchy", "UserHierarchy", "ID");

        }
    }
}