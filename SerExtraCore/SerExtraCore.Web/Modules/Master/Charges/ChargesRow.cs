
namespace SerExtraCore.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Charges]")]
    [DisplayName("Charges"), InstanceName("Charges")]
    [ReadPermission("Master:Charges")]
    [ModifyPermission("Master:Charges")]
    [LookupScript(Permission = "*")]
    public sealed class ChargesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Charge Name"), Size(200), NotNull, QuickSearch]
        public String ChargeName
        {
            get { return Fields.ChargeName[this]; }
            set { Fields.ChargeName[this] = value; }
        }

        [DisplayName("Description"), Size(500),TextAreaEditor,LookupInclude]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }
        [DisplayName("Chart Order"), LookupInclude]
        public Int32? ChartOrder
        {
            get { return Fields.ChartOrder[this]; }
            set { Fields.ChartOrder[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ChargeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ChargesRow()
            : base(Fields)
        {
        }
        [DisplayName("SlNo"), NotMapped]
        public Int32? Slno
        {
            get { return Fields.Slno[this]; }
            set { Fields.Slno[this] = value; }
        }

        [DisplayName("Tax Per"), Size(18), Scale(3)]
        public Decimal? TaxPer
        {
            get { return Fields.TaxPer[this]; }
            set { Fields.TaxPer[this] = value; }
        }

        [DisplayName("Tax Code"), ForeignKey("[dbo].[TaxCode]", "Id"), LeftJoin("jTaxCode"), TextualField("TaxCode")]
        [LookupEditor(typeof(TaxCodeRow), InplaceAdd = true), QuickFilter, QuickSearch]
        public Int32? TaxCodeId
        {
            get { return Fields.TaxCodeId[this]; }
            set { Fields.TaxCodeId[this] = value; }
        }
        [DisplayName("Tax Code"), Expression("jTaxCode.[Name]"), LookupInclude, QuickFilter, QuickSearch]
        public String TaxCode
        {
            get { return Fields.TaxCode[this]; }
            set { Fields.TaxCode[this] = value; }
        }
        [DisplayName("TaxRate"), Expression("jTaxCode.[Rate]"), LookupInclude, QuickFilter, QuickSearch]
        public Decimal? TaxRate
        {
            get { return Fields.TaxRate[this]; }
            set { Fields.TaxRate[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField ChargeName;
            public StringField Description;
            public Int32Field Slno;

            public Int32Field TaxCodeId;

            public Int32Field ChartOrder;

            public DecimalField TaxPer;

            public StringField TaxCode;
            public DecimalField TaxRate;
        }
    }
}
