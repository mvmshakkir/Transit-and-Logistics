
namespace SerExtraCore.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SerExtraCore.States.Entities;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Customers]")]
    [DisplayName("Customers"), InstanceName("Customers")]
    [ReadPermission("Master:Customers")]
    [ModifyPermission("Master:Customers")]
    [LookupScript(Permission = "*")]
    public sealed class CustomersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

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










        [DisplayName("Customer Code"), Size(200), NotNull, QuickSearch]
        public String CustomerCode
        {
            get { return Fields.CustomerCode[this]; }
            set { Fields.CustomerCode[this] = value; }
        }

        [DisplayName("Customer Name"), Size(200), NotNull,QuickSearch]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [DisplayName("Address"), Size(500),TextAreaEditor]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Place"), Size(200),QuickSearch]
        public String Place
        {
            get { return Fields.Place[this]; }
            set { Fields.Place[this] = value; }
        }

        [DisplayName("Telephone"), Size(200),QuickSearch]
        public String Telephone
        {
            get { return Fields.Telephone[this]; }
            set { Fields.Telephone[this] = value; }
        }

        [DisplayName("Email"), Size(200),EmailAddressEditor,QuickSearch]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Contact Person"), Size(200)]
        public String ContactPerson
        {
            get { return Fields.ContactPerson[this]; }
            set { Fields.ContactPerson[this] = value; }
        }

        [DisplayName("Mobile"), Size(200),QuickSearch]
        public String Mobile
        {
            get { return Fields.Mobile[this]; }
            set { Fields.Mobile[this] = value; }
        }

        [DisplayName("Creation Date"),QuickFilter]
        public DateTime? CreationDate
        {
            get { return Fields.CreationDate[this]; }
            set { Fields.CreationDate[this] = value; }
        }

        [DisplayName("Description"), Size(500),TextAreaEditor,LookupInclude]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FullName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomersRow()
            : base(Fields)
        {
        }
        [DisplayName("FullName"), QuickSearch]
        [Expression("CONCAT(T0.[CustomerName], CONCAT(' ', T0.[Mobile]))")]
        [Expression("(T0.CustomerName || ' ' || T0.Mobile)", Dialect = "Sqlite")]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }
        [DisplayName("SlNo"), NotMapped]
        public Int32? Slno
        {
            get { return Fields.Slno[this]; }
            set { Fields.Slno[this] = value; }
        }
        [DisplayName("Due Days")]
        public Int32? DueDays
        {
            get { return Fields.DueDays[this]; }
            set { Fields.DueDays[this] = value; }
        }

        [DisplayName("Opening Date"), QuickFilter]
        public DateTime? OpeningDate
        {
            get { return Fields.OpeningDate[this]; }
            set { Fields.OpeningDate[this] = value; }
        }
        [DisplayName("Opening Balance"), QuickFilter]
        public Decimal? Opening
        {
            get { return Fields.Opening[this]; }
            set { Fields.Opening[this] = value; }
        }

        [DisplayName("Tax Registration Number"), Size(500), QuickSearch]
        public String TaxRegNo
        {
            get { return Fields.TaxRegNo[this]; }
            set { Fields.TaxRegNo[this] = value; }
        }

        [DisplayName("jVAdjustments"), MasterDetailRelation(foreignKey: "OpeningCustomerId"), NotMapped, AuditLog]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.JVAdjustmentsRow> jVAdjustmentsRow
        {
            get { return Fields.jVAdjustmentsRow[this]; }
            set { Fields.jVAdjustmentsRow[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField CustomerCode;
            public StringField CustomerName;
            public StringField Address;
            public StringField Place;
            public StringField Telephone;
            public StringField Email;
            public StringField ContactPerson;
            public StringField Mobile;
            public DateTimeField CreationDate;
            public StringField Description;
            public Int32Field DueDays;
            public StringField TaxRegNo;

            
            public RowListField<Accounts.Entities.JVAdjustmentsRow> jVAdjustmentsRow;

            public DateTimeField OpeningDate;
            public DecimalField Opening;

            public Int32Field Slno;

            public StringField FullName;


            public Int32Field StateId;
            public StringField StateName;




        }
    }
}
