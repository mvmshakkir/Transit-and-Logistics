
namespace SerExtraCore.PDCPayments.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SerExtraCore.Master.Entities;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("PDCPayments"), TableName("[dbo].[PDCPayments]")]
    [DisplayName("PDC"), InstanceName("PDC")]
    [ReadPermission("PDCPayments:PdcPayments")]
    [ModifyPermission("PDCPayments:PdcPayments")]
    public sealed class PdcPaymentsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Pdc Number"), Column("PDCNumber"), Size(255), NotNull, QuickSearch]
        public String PdcNumber
        {
            get { return Fields.PdcNumber[this]; }
            set { Fields.PdcNumber[this] = value; }
        }

        [DisplayName("Trx Date"), NotNull,DefaultValue("today"),QuickFilter,QuickSearch]
        public DateTime? TrxDate
        {
            get { return Fields.TrxDate[this]; }
            set { Fields.TrxDate[this] = value; }
        }

        [DisplayName("Company"), Size(500), NotNull,QuickSearch]
        public String Company
        {
            get { return Fields.Company[this]; }
            set { Fields.Company[this] = value; }
        }

        [DisplayName("Start Date"), NotNull,QuickSearch,QuickFilter]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("Installments"), NotNull]
        public Int32? Installments
        {
            get { return Fields.Installments[this]; }
            set { Fields.Installments[this] = value; }
        }

        [DisplayName("End Date"), NotNull,QuickFilter,QuickSearch]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }

        [DisplayName("Installment Amount"), Size(18), Scale(3), NotNull]
        public Decimal? InstallmentAmount
        {
            get { return Fields.InstallmentAmount[this]; }
            set { Fields.InstallmentAmount[this] = value; }
        }

        [DisplayName("Notes"), Size(500),TextAreaEditor]
        public String Notes
        {
            get { return Fields.Notes[this]; }
            set { Fields.Notes[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PdcNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PdcPaymentsRow()
            : base(Fields)
        {
        }
        [DisplayName("PDC Payment Details"), MasterDetailRelation(foreignKey: "PdcPaymentsId"), NotMapped]
        public List<PdcPaymentDetailsRow> PdcPaymentDetails
        {
            get { return Fields.PdcPaymentDetails[this]; }
            set { Fields.PdcPaymentDetails[this] = value; }
        }
        [DisplayName("SlNo"), NotMapped]
        public Int32? Slno
        {
            get { return Fields.Slno[this]; }
            set { Fields.Slno[this] = value; }
        }
        [DisplayName("PDC Type"), QuickSearch, NotNull]
        public ChequeType? ChequeType
        {
            get { return (ChequeType?)Fields.ChequeType[this]; }
            set { Fields.ChequeType[this] = (int?)value; }
        }

        [DisplayName("Supplier"), ForeignKey("[dbo].[Supplier]", "Id"), LeftJoin("jSupplier"), TextualField("SupplierSupplierName")]

        [LookupEditor(typeof(SupplierRow),InplaceAdd =true)]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }
        [DisplayName("Supplier Name"), Expression("jSupplier.[SupplierName]"), LookupInclude, QuickFilter, QuickSearch]
        public String SupplierSupplierName
        {
            get { return Fields.SupplierSupplierName[this]; }
            set { Fields.SupplierSupplierName[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField PdcNumber;
            public DateTimeField TrxDate;
            public StringField Company;
            public DateTimeField StartDate;
            public Int32Field Installments;
            public DateTimeField EndDate;
            public DecimalField InstallmentAmount;
            public StringField Notes;

            public Int32Field ChequeType;


            public Int32Field Slno;

            public RowListField<PdcPaymentDetailsRow> PdcPaymentDetails;

            public Int32Field SupplierId;
            public StringField SupplierSupplierName;
        }
    }
}
