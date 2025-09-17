
namespace SerExtraCore.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[UserHierarchy]")]
    [DisplayName("User Hierarchy"), InstanceName("User Hierarchy")]
    [ReadPermission("Administration:UserHierarchy")]
    [ModifyPermission("Administration:UserHierarchy")]
    [LookupScript(Permission ="*")]
    public sealed class UserHierarchyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Hierarchy Name"), Size(200), NotNull, QuickSearch]
        public String HierarchyName
        {
            get { return Fields.HierarchyName[this]; }
            set { Fields.HierarchyName[this] = value; }
        }

        [DisplayName("Descrription"), Size(500),TextAreaEditor]
        public String Descrription
        {
            get { return Fields.Descrription[this]; }
            set { Fields.Descrription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.HierarchyName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserHierarchyRow()
            : base(Fields)
        {
        }
        [DisplayName("Hierarchy Order"), NotNull, QuickSearch]
        public Int32? HierarchyOrder
        {
            get { return Fields.HierarchyOrder[this]; }
            set { Fields.HierarchyOrder[this] = value; }
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField HierarchyName;
            public StringField Descrription;
            public Int32Field HierarchyOrder;

        }
    }
}
