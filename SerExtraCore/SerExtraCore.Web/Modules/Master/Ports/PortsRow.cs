
namespace SerExtraCore.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Ports]")]
    [DisplayName("Ports"), InstanceName("Ports")]
    [ReadPermission("Master:Ports")]
    [ModifyPermission("Master:Ports")]
    [LookupScript(Permission ="*")]
    public sealed class PortsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Port Name"), Size(200), NotNull, QuickSearch]
        public String PortName
        {
            get { return Fields.PortName[this]; }
            set { Fields.PortName[this] = value; }
        }

        [DisplayName("Country"), NotNull, ForeignKey("[dbo].[Countries]", "Id"), LeftJoin("jCountry"), TextualField("CountryCountryCode")]
        [LookupEditor(typeof(CountriesRow),InplaceAdd =true)]
        public Int32? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
        }

        [DisplayName("Country Code"), Expression("jCountry.[CountryCode]")]
        public String CountryCountryCode
        {
            get { return Fields.CountryCountryCode[this]; }
            set { Fields.CountryCountryCode[this] = value; }
        }

        [DisplayName("Country Country Name"), Expression("jCountry.[CountryName]")]
        public String CountryCountryName
        {
            get { return Fields.CountryCountryName[this]; }
            set { Fields.CountryCountryName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PortName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PortsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField PortName;
            public Int32Field CountryId;

            public StringField CountryCountryCode;
            public StringField CountryCountryName;
        }
    }
}
