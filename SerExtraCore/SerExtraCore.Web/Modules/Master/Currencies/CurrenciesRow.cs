
namespace SerExtraCore.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Currencies]")]
    [DisplayName("Currencies"), InstanceName("Currencies")]
    [ReadPermission("Master:Currencies")]
    [ModifyPermission("Master:Currencies")]
    [LookupScript(Permission = "*")]
    public sealed class CurrenciesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Currency Code"), Size(200), NotNull, QuickSearch]
        public String CurrencyCode
        {
            get { return Fields.CurrencyCode[this]; }
            set { Fields.CurrencyCode[this] = value; }
        }

        [DisplayName("Currency Name"), Size(200), NotNull]
        public String CurrencyName
        {
            get { return Fields.CurrencyName[this]; }
            set { Fields.CurrencyName[this] = value; }
        }

        [DisplayName("Exchange Rate"), Size(18), Scale(3), NotNull,LookupInclude]
        public Decimal? ExchangeRate
        {
            get { return Fields.ExchangeRate[this]; }
            set { Fields.ExchangeRate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CurrencyCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CurrenciesRow()
            : base(Fields)
        {
        }
        [DisplayName("SlNo"), NotMapped]
        public Int32? Slno
        {
            get { return Fields.Slno[this]; }
            set { Fields.Slno[this] = value; }
        }
        [DisplayName("Currency Unit"), Size(200), QuickSearch]
        public String CurrencyUnit
        {
            get { return Fields.CurrencyUnit[this]; }
            set { Fields.CurrencyUnit[this] = value; }
        }
        [DisplayName("Sub Currency Unit"), Size(200), QuickSearch]
        public String SubCurrencyUnit
        {
            get { return Fields.SubCurrencyUnit[this]; }
            set { Fields.SubCurrencyUnit[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField CurrencyCode;
            public StringField CurrencyName;
            public DecimalField ExchangeRate;

            public StringField CurrencyUnit;
            public StringField SubCurrencyUnit;

            public Int32Field Slno;
        }
    }
}
