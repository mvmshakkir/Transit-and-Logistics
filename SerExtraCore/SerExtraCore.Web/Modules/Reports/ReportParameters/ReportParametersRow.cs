
namespace SerExtraCore.Reports.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SerExtraCore.Administration.Entities;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Reports"), TableName("[dbo].[ReportParameters]")]
    [DisplayName("Report Parameters"), InstanceName("Report Parameters")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class ReportParametersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Report Design"), NotNull, ForeignKey("[dbo].[ReportDesigns]", "Id"), LeftJoin("jReportDesign"), TextualField("ReportDesignName")]
        public Int32? ReportDesignId
        {
            get { return Fields.ReportDesignId[this]; }
            set { Fields.ReportDesignId[this] = value; }
        }

        [DisplayName("Parameter Name"), Size(255), NotNull, QuickSearch]
        public String ParameterName
        {
            get { return Fields.ParameterName[this]; }
            set { Fields.ParameterName[this] = value; }
        }

        [DisplayName("Data Type"), NotNull]
        public ParameterDataTypes? DataType
        {
            get { return (ParameterDataTypes?)Fields.DataType[this]; }
            set { Fields.DataType[this] = (Int32?)value; }
        }

        [DisplayName("Editor Type"), NotNull]
        public ParameterEditorTypes? EditorType
        {
            get { return (ParameterEditorTypes?)Fields.EditorType[this]; }
            set { Fields.EditorType[this] = (Int32?)value; }
        }
        [DisplayName("Custom Lookup"), ForeignKey("[dbo].[CustomLookups]", "Id"), LeftJoin("jCustomLookups")]
        [LookupEditor(typeof(CustomLookupsRow),InplaceAdd =true)]
        public Int32? CustomLookupId
        {
            get { return Fields.CustomLookupId[this]; }
            set { Fields.CustomLookupId[this] = value; }
        }
        [DisplayName("Lookup Name"), Size(255)]
        public String LookupName
        {
            get { return Fields.LookupName[this]; }
            set { Fields.LookupName[this] = value; }
        }
        [DisplayName("Lookup Type")]
        public LookupType? LookupType
        {
            get { return (LookupType?)Fields.LookupType[this]; }
            set { Fields.LookupType[this] = (Int32?)value; }
        }

        [DisplayName("Default Value"), Size(255)]
        public String DefaultValue
        {
            get { return Fields.DefaultValue[this]; }
            set { Fields.DefaultValue[this] = value; }
        }

        [DisplayName("Report Design Name"), Expression("jReportDesign.[Name]")]
        public String ReportDesignName
        {
            get { return Fields.ReportDesignName[this]; }
            set { Fields.ReportDesignName[this] = value; }
        }

        [DisplayName("Report Design Design"), Expression("jReportDesign.[Design]")]
        public String ReportDesignDesign
        {
            get { return Fields.ReportDesignDesign[this]; }
            set { Fields.ReportDesignDesign[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ParameterName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ReportParametersRow()
            : base(Fields)
        {
        }

        [DisplayName("Is Required")]
        public Boolean? IsRequired
        {
            get { return Fields.IsRequired[this]; }
            set { Fields.IsRequired[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ReportDesignId;
            public StringField ParameterName;
            public Int32Field DataType;
            public Int32Field EditorType;
            public StringField LookupName;
            public StringField DefaultValue;

            public BooleanField IsRequired;
            public Int32Field LookupType;
            public Int32Field CustomLookupId;


            public StringField ReportDesignName;
            public StringField ReportDesignDesign;
        }
    }
}
