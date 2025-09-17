
namespace SerExtraCore.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[CustomLookups]")]
    [DisplayName("Custom Lookups"), InstanceName("Custom Lookups")]
    [ReadPermission("Administration:ReportDesigns")]
    [ModifyPermission("Administration:ReportDesigns")]
    [LookupScript(Permission ="*")]
    public sealed class CustomLookupsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Lookup Name"), Size(255), NotNull, QuickSearch]
        public String LookupName
        {
            get { return Fields.LookupName[this]; }
            set { Fields.LookupName[this] = value; }
        }

        [DisplayName("Sql Query"), NotNull,TextAreaEditor]
        public String SqlQuery
        {
            get { return Fields.SqlQuery[this]; }
            set { Fields.SqlQuery[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.LookupName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomLookupsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField LookupName;
            public StringField SqlQuery;
        }
    }
}
