using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SerExtraCore.Master.Entities;
using SerExtraCore.UOM.Entities;
using System;
using System.ComponentModel;
using System.IO;
using static MVC.Views.Master;

namespace SerExtraCore.States.Entities
{
    [ConnectionKey("Default"), Module("States"), TableName("[dbo].[States]")]
    [DisplayName("States"), InstanceName("States")]
    [ReadPermission("Master:States")]
    [ModifyPermission("Master:States")]
    [LookupScript]
    public sealed class StatesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get => Fields.Id[this];
            set => Fields.Id[this] = value;
        }

        [DisplayName("Country"), ForeignKey("[dbo].[Countries]", "Id"), LeftJoin("jCountry"), TextualField("CountryCountryName")]
        [LookupEditor(typeof(CountriesRow), InplaceAdd = true), QuickFilter, QuickSearch]
        public Int32? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
        }

        [DisplayName("Country"), Expression("jCountry.[CountryName]"), LookupInclude, QuickSearch]
        [MinSelectLevel(SelectLevel.List)]
        public String CountryCountryName
        {
            get { return Fields.CountryCountryName[this]; }
            set { Fields.CountryCountryName[this] = value; }
        }


        //[DisplayName("Country"), ForeignKey("[dbo].[Countries]", "Id"), LeftJoin("jCountry"), TextualField("CountryCountryCode")]
        //[LookupEditor(typeof(CountriesRow), InplaceAdd = true), QuickFilter, QuickSearch]
        //public Int32? CountryId
        //{
        //    get => Fields.CountryId[this];
        //    set => Fields.CountryId[this] = value;
        //}

        [DisplayName("Name"), Size(250), LookupInclude,QuickSearch]
        public String Name
        {
            get => Fields.Name[this];
            set => Fields.Name[this] = value;
        }
        [DisplayName("Code"), Size(250), LookupInclude, QuickSearch]
        public String Code
        {
            get => Fields.Code[this];
            set => Fields.Code[this] = value;
        }


        [DisplayName("Country"), Expression("jCountry.[CountryCode]")]
        public String CountryCountryCode
        {
            get => Fields.CountryCountryCode[this];
            set => Fields.CountryCountryCode[this] = value;
        }

        //[DisplayName("Country Country Name"), Expression("jCountry.[CountryName]")]
        //public String CountryCountryName
        //{
        //    get => Fields.CountryCountryName[this];
        //    set => Fields.CountryCountryName[this] = value;
        //}

        IIdField IIdRow.IdField => Fields.Id;

        StringField INameRow.NameField => Fields.Name;

        public static readonly RowFields Fields = new RowFields().Init();

        public StatesRow()
            : base(Fields)
        {
        }


        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CountryId;
            public StringField Name;
            public StringField Code;

            public StringField CountryCountryCode;
            public StringField CountryCountryName;
        }
    }
}
