
namespace SerExtraCore.Reports.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Reports"), TableName("[dbo].[ReportDesigns]")]
    [DisplayName("Report Designs"), InstanceName("Report Designs")]
    [ReadPermission("Administration:ReportDesigns")]
    [ModifyPermission("Administration:ReportDesigns")]
    [LookupScript(Permission ="*")]
    public sealed class ReportDesignsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(255), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Design"), NotNull,TextAreaEditor]
        public String Design
        {
            get { return Fields.Design[this]; }
            set { Fields.Design[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ReportDesignsRow()
            : base(Fields)
        {
        }
        [DisplayName("Report Data Sets"), MasterDetailRelation(foreignKey: "ReportDesignId"), NotMapped]
        public List<ReportDataSetsRow> ReportDataSets
        {
            get { return Fields.ReportDataSets[this]; }
            set { Fields.ReportDataSets[this] = value; }
        }
        [DisplayName("Report Parameters"), MasterDetailRelation(foreignKey: "ReportDesignId"), NotMapped]
        public List<ReportParametersRow> ReportParameters
        {
            get { return Fields.ReportParameters[this]; }
            set { Fields.ReportParameters[this] = value; }
        }


        [DisplayName("Category"), NotNull, QuickSearch]
        public String Category
        {
            get { return Fields.Category[this]; }
            set { Fields.Category[this] = value; }
        }
        [DisplayName("PermissionKey"), NotNull, QuickSearch,LookupInclude]
        public String PermissionKey
        {
            get { return Fields.PermissionKey[this]; }
            set { Fields.PermissionKey[this] = value; }
        }
        [DisplayName("Report Type")]
        public Int32? ReportType
        {
            get { return Fields.ReportType[this]; }
            set { Fields.ReportType[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Design;

            public StringField Category;
            public StringField PermissionKey;
            public Int32Field ReportType;


            public RowListField<ReportDataSetsRow> ReportDataSets;
            public RowListField<ReportParametersRow> ReportParameters;
        }
    }
}
