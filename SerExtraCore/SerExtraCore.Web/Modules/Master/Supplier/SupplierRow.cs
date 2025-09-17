
namespace SerExtraCore.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Supplier]")]
    [DisplayName("Supplier"), InstanceName("Supplier")]
    [ReadPermission("Master:Supplier")]
    [ModifyPermission("Master:Supplier")]
    [LookupScript(Permission = "*")]
    public sealed class SupplierRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Supplier Code"), Size(200), NotNull, QuickSearch]
        public String SupplierCode
        {
            get { return Fields.SupplierCode[this]; }
            set { Fields.SupplierCode[this] = value; }
        }

        [DisplayName("Supplier Name"), Size(200), NotNull, QuickSearch]
        public String SupplierName
        {
            get { return Fields.SupplierName[this]; }
            set { Fields.SupplierName[this] = value; }
        }

        [DisplayName("Address"), Size(500),TextAreaEditor]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Place"), Size(200)]
        public String Place
        {
            get { return Fields.Place[this]; }
            set { Fields.Place[this] = value; }
        }

        [DisplayName("Telephone"), Size(200)]
        public String Telephone
        {
            get { return Fields.Telephone[this]; }
            set { Fields.Telephone[this] = value; }
        }

        [DisplayName("Email"), Size(200),EmailEditor]
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

        [DisplayName("Mobile"), Size(200)]
        public String Mobile
        {
            get { return Fields.Mobile[this]; }
            set { Fields.Mobile[this] = value; }
        }

        [DisplayName("Tax Registration Number"), Size(500), QuickSearch]
        public String TaxRegNo
        {
            get { return Fields.TaxRegNo[this]; }
            set { Fields.TaxRegNo[this] = value; }
        }
        
        [DisplayName("Creation Date")]
        public DateTime? CreationDate
        {
            get { return Fields.CreationDate[this]; }
            set { Fields.CreationDate[this] = value; }
        }

        [DisplayName("Description"), Size(500), TextAreaEditor]
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
            get { return Fields.SupplierName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SupplierRow()
            : base(Fields)
        {
        }
        [DisplayName("SlNo"), NotMapped]
        public Int32? Slno
        {
            get { return Fields.Slno[this]; }
            set { Fields.Slno[this] = value; }
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

        [DisplayName("FullName"), QuickSearch]
        [Expression("CONCAT(T0.[SupplierName], CONCAT(' ', T0.[Mobile]))")]
        [Expression("(T0.SupplierName || ' ' || T0.Mobile)", Dialect = "Sqlite")]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }

        [DisplayName("jVAdjustments"), MasterDetailRelation(foreignKey: "OpeningSupplierId"), NotMapped, AuditLog]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.JVAdjustmentsRow> jVAdjustmentsRow
        {
            get { return Fields.jVAdjustmentsRow[this]; }
            set { Fields.jVAdjustmentsRow[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField SupplierCode;
            public StringField SupplierName;
            public StringField Address;
            public StringField Place;
            public StringField Telephone;
            public StringField Email;
            public StringField ContactPerson;
            public StringField Mobile;
            public StringField TaxRegNo;
            public DateTimeField CreationDate;
            public StringField Description;

            public DateTimeField OpeningDate;
            public DecimalField Opening;


            public RowListField<Accounts.Entities.JVAdjustmentsRow> jVAdjustmentsRow;

            public Int32Field Slno;

            public StringField FullName;
        }
    }
}
