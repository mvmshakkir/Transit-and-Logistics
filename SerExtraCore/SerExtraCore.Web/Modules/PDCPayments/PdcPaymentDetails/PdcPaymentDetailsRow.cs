
namespace SerExtraCore.PDCPayments.Entities
{
    using SerExtraCore.Accounts.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("PDCPayments"), TableName("[dbo].[PDCPaymentDetails]")]
    [DisplayName("Pdc Details"), InstanceName("Pdc Details")]
    [ReadPermission("PDCPayments:PdcPayments")]
    [ModifyPermission("PDCPayments:PdcPayments")]
    public sealed class PdcPaymentDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Pdc Payments"), Column("PDCPaymentsId"), ForeignKey("[dbo].[PDCPayments]", "Id"), LeftJoin("jPdcPayments"), TextualField("PdcPaymentsPdcNumber")]
        public Int32? PdcPaymentsId
        {
            get { return Fields.PdcPaymentsId[this]; }
            set { Fields.PdcPaymentsId[this] = value; }
        }

        [DisplayName("Date"), NotNull]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Cheque No"), Column("ChequeNO"), Size(500), QuickSearch]
        public String ChequeNo
        {
            get { return Fields.ChequeNo[this]; }
            set { Fields.ChequeNo[this] = value; }
        }

        [DisplayName("Amount"), Size(18), Scale(3), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Pdc Payments Pdc Number"), Expression("jPdcPayments.[PDCNumber]")]
        public String PdcPaymentsPdcNumber
        {
            get { return Fields.PdcPaymentsPdcNumber[this]; }
            set { Fields.PdcPaymentsPdcNumber[this] = value; }
        }

        [DisplayName("Pdc Payments Trx Date"), Expression("jPdcPayments.[TrxDate]")]
        public DateTime? PdcPaymentsTrxDate
        {
            get { return Fields.PdcPaymentsTrxDate[this]; }
            set { Fields.PdcPaymentsTrxDate[this] = value; }
        }

        [DisplayName("Pdc Payments Company"), Expression("jPdcPayments.[Company]")]
        public String PdcPaymentsCompany
        {
            get { return Fields.PdcPaymentsCompany[this]; }
            set { Fields.PdcPaymentsCompany[this] = value; }
        }

        [DisplayName("Pdc Payments Start Date"), Expression("jPdcPayments.[StartDate]")]
        public DateTime? PdcPaymentsStartDate
        {
            get { return Fields.PdcPaymentsStartDate[this]; }
            set { Fields.PdcPaymentsStartDate[this] = value; }
        }

        [DisplayName("Pdc Payments Installments"), Expression("jPdcPayments.[Installments]")]
        public Int32? PdcPaymentsInstallments
        {
            get { return Fields.PdcPaymentsInstallments[this]; }
            set { Fields.PdcPaymentsInstallments[this] = value; }
        }

        [DisplayName("Pdc Payments End Date"), Expression("jPdcPayments.[EndDate]")]
        public DateTime? PdcPaymentsEndDate
        {
            get { return Fields.PdcPaymentsEndDate[this]; }
            set { Fields.PdcPaymentsEndDate[this] = value; }
        }

        [DisplayName("Pdc Payments Installment Amount"), Expression("jPdcPayments.[InstallmentAmount]")]
        public Decimal? PdcPaymentsInstallmentAmount
        {
            get { return Fields.PdcPaymentsInstallmentAmount[this]; }
            set { Fields.PdcPaymentsInstallmentAmount[this] = value; }
        }

        [DisplayName("Pdc Payments Notes"), Expression("jPdcPayments.[Notes]")]
        public String PdcPaymentsNotes
        {
            get { return Fields.PdcPaymentsNotes[this]; }
            set { Fields.PdcPaymentsNotes[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ChequeNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PdcPaymentDetailsRow()
            : base(Fields)
        {
        }
        [DisplayName("InvoiceCollection"), ForeignKey("[dbo].[InvoiceCollection]", "Id"), LeftJoin("jInvoiceCollection")]
        public Int32? InvoiceCollectionId
        {
            get { return Fields.InvoiceCollectionId[this]; }
            set { Fields.InvoiceCollectionId[this] = value; }
        }
        [DisplayName("SuppliersPayment"), ForeignKey("[dbo].[SuppliersPayment]", "Id"), LeftJoin("jSuppliersPayment")]
        public Int32? SuppliersPaymentId
        {
            get { return Fields.SuppliersPaymentId[this]; }
            set { Fields.SuppliersPaymentId[this] = value; }
        }

        [DisplayName("Cheque Status"), QuickSearch]
        public ChequeStatus? ChequeStatus
        {
            get { return (ChequeStatus?)Fields.ChequeStatus[this]; }
            set { Fields.ChequeStatus[this] = (int?)value; }
        }
        [DisplayName("ChequeType"), QuickSearch,NotNull]
        public ChequeType? ChequeType
        {
            get { return (ChequeType?)Fields.ChequeType[this]; }
            set { Fields.ChequeType[this] = (int?)value; }
        }
        [DisplayName("Status Date"), QuickSearch]
        public DateTime? StatusDate
        {
            get { return Fields.StatusDate[this]; }
            set { Fields.StatusDate[this] = value; }
        }
        //[DisplayName("Payments"), MasterDetailRelation(foreignKey: "PDCPaymentDetailsId"), NotMapped, MinSelectLevel(SelectLevel.List)]
        //public List<Accounts.Entities.PaymentRow> Payments
        //{
        //    get { return Fields.Payments[this]; }
        //    set { Fields.Payments[this] = value; }
        //}

        [DisplayName("Payment Type"), QuickSearch, QuickFilter]
        public AccountTypes? PaymentType
        {
            get { return (AccountTypes?)Fields.PaymentType[this]; }
            set { Fields.PaymentType[this] = (int?)value; }
        }

        [DisplayName("Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jAccount"), TextualField("AccountAccountName")]
        [LookupEditor(typeof(AccountsRow), CascadeField = "Type", CascadeFrom = "PaymentType")]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }
        [DisplayName("Account Name"), Expression("jAccount.[AccountName]"), QuickFilter, QuickSearch]
        public String AccountAccountName
        {
            get { return Fields.AccountAccountName[this]; }
            set { Fields.AccountAccountName[this] = value; }
        }

        [DisplayName("Receipt"), MasterDetailRelation(foreignKey: "PDCReceiptDetailsId"), NotMapped, AuditLog]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.ReceiptRow> Receipts
        {
            get { return Fields.Receipts[this]; }
            set { Fields.Receipts[this] = value; }
        }

        [DisplayName("Payments"), MasterDetailRelation(foreignKey: "PDCPaymentDetailsId"), NotMapped, AuditLog]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.PaymentRow> Payment
        {
            get { return Fields.Payment[this]; }
            set { Fields.Payment[this] = value; }
        }
        [DisplayName("Consignment Advance"), ForeignKey("[dbo].[Consignment]", "Id"), LeftJoin("jConsignment")]
        public Int32? ConsignmentAdvanceId
        {
            get { return Fields.ConsignmentAdvanceId[this]; }
            set { Fields.ConsignmentAdvanceId[this] = value; }
        }
        [DisplayName("Purchase"), ForeignKey("[dbo].[Purchase]", "Id"), LeftJoin("jPurchase")]
        public Int32? PurchaseId
        {
            get { return Fields.PurchaseId[this]; }
            set { Fields.PurchaseId[this] = value; }
        }
        [DisplayName("MoneyInOutId"), ForeignKey("[dbo].[MoneyInOut]", "Id"), LeftJoin("jMoneyInOut")]
        public Int32? MoneyInOutId
        {
            get { return Fields.MoneyInOutId[this]; }
            set { Fields.MoneyInOutId[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field PdcPaymentsId;
            public DateTimeField Date;
            public StringField ChequeNo;
            public DecimalField Amount;

          //  public RowListField<Accounts.Entities.PaymentRow> Payments;
            public RowListField<Accounts.Entities.ReceiptRow> Receipts;
            public RowListField<Accounts.Entities.PaymentRow> Payment;

            public Int32Field PaymentType;
            public Int32Field AccountId;

            public Int32Field ChequeStatus;
            public DateTimeField StatusDate;
            public Int32Field ChequeType;
            public Int32Field SuppliersPaymentId;
            public Int32Field InvoiceCollectionId;
            public Int32Field ConsignmentAdvanceId;

            public Int32Field PurchaseId;
            public Int32Field MoneyInOutId;


            public StringField AccountAccountName;


            public StringField PdcPaymentsPdcNumber;
            public DateTimeField PdcPaymentsTrxDate;
            public StringField PdcPaymentsCompany;
            public DateTimeField PdcPaymentsStartDate;
            public Int32Field PdcPaymentsInstallments;
            public DateTimeField PdcPaymentsEndDate;
            public DecimalField PdcPaymentsInstallmentAmount;
            public StringField PdcPaymentsNotes;
        }
    }
}
