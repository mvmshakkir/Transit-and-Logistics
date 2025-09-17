
namespace SerExtraCore.Reports.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Reports"), TableName("[dbo].[ReportDataSets]")]
    [DisplayName("Report Data Sets"), InstanceName("Report Data Sets")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class ReportDataSetsRow : Row, IIdRow, INameRow
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

        [DisplayName("Sql Query"), NotNull, QuickSearch,TextAreaEditor]
        public String SqlQuery
        {
            get { return Fields.SqlQuery[this]; }
            set { Fields.SqlQuery[this] = value; }
        }

        [DisplayName("Data Set Name"), Size(255), NotNull]
        public String DataSetName
        {
            get { return Fields.DataSetName[this]; }
            set { Fields.DataSetName[this] = value; }
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
            get { return Fields.SqlQuery; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ReportDataSetsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ReportDesignId;
            public StringField SqlQuery;
            public StringField DataSetName;

            public StringField ReportDesignName;
            public StringField ReportDesignDesign;
        }
    }
}
