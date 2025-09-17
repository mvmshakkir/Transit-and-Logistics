using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SerExtraCore.Master.Entities;
using SerExtraCore.States.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace SerExtraCore.Companies.Entities
{
    [ConnectionKey("Default"), Module("Companies"), TableName("[dbo].[Companies]")]
    [DisplayName("Companies"), InstanceName("Companies")]
    [ReadPermission("Master:Companies")]
    [ModifyPermission("Master:Companies")]
    public sealed class CompaniesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get => Fields.Id[this];
            set => Fields.Id[this] = value;
        }

        //[DisplayName("State"), ForeignKey("[dbo].[States]", "Id"), LeftJoin("jState"), TextualField("StateName")]
        //public Int32? StateId
        //{
        //    get => Fields.StateId[this];
        //    set => Fields.StateId[this] = value;
        //}

        [DisplayName("State"), ForeignKey("[dbo].[States]", "Id"), LeftJoin("jState"), TextualField("StateName")]
        [LookupEditor(typeof(StatesRow), InplaceAdd = true), QuickFilter, QuickSearch]
        public Int32? StateId
        {
            get { return Fields.StateId[this]; }
            set { Fields.StateId[this] = value; }
        }

        [DisplayName("State"), Expression("jState.[Name]"), LookupInclude, QuickSearch]
        [MinSelectLevel(SelectLevel.List)]
        public String StateName
        {
            get { return Fields.StateName[this]; }
            set { Fields.StateName[this] = value; }
        }




        [DisplayName("Name"), Size(250), QuickSearch]
        public String Name
        {
            get => Fields.Name[this];
            set => Fields.Name[this] = value;
        }

        [DisplayName("Address"), Size(500)]
        public String Address
        {
            get => Fields.Address[this];
            set => Fields.Address[this] = value;
        }

        [DisplayName("State Country Id"), Expression("jState.[CountryId]")]
        public Int32? StateCountryId
        {
            get => Fields.StateCountryId[this];
            set => Fields.StateCountryId[this] = value;
        }

        //[DisplayName("State Name"), Expression("jState.[Name]")]
        //public String StateName
        //{
        //    get => Fields.StateName[this];
        //    set => Fields.StateName[this] = value;
        //}

        IIdField IIdRow.IdField => Fields.Id;

        StringField INameRow.NameField => Fields.Name;

        public static readonly RowFields Fields = new RowFields().Init();

        public CompaniesRow()
            : base(Fields)
        {
        }


        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field StateId;
            public StringField Name;
            public StringField Address;

            public Int32Field StateCountryId;
            public StringField StateName;
        }
    }
}
