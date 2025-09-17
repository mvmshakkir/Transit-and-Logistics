using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20200929111600)]
    public class DefaultDB_20200929_111600_UserHierarchyOrder : AutoReversingMigration
    {
        public override void Up()
        {
           



            this.Alter.Table("UserHierarchy").AddColumn("HierarchyOrder").AsInt32().NotNullable();


           

        }
    }
}