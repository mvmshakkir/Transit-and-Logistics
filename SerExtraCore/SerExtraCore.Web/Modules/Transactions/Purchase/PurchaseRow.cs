
namespace SerExtraCore.Transactions.Entities
{
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Master.Entities;
    using SerExtraCore.PDCPayments.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[Purchase]")]
    [DisplayName("Purchase"), InstanceName("Purchase")]
    [ReadPermission("Transactions:Purchase")]
    [ModifyPermission("Transactions:Purchase")]
    public sealed class PurchaseRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Trx Date"), NotNull,DefaultValue("today"),QuickFilter,QuickSearch]
        public DateTime? TrxDate
        {
            get { return Fields.TrxDate[this]; }
            set { Fields.TrxDate[this] = value; }
        }

        [DisplayName("Ref No"), Size(255), QuickSearch]
        public String RefNo
        {
            get { return Fields.RefNo[this]; }
            set { Fields.RefNo[this] = value; }
        }

        [DisplayName("Total Amount"), Size(18), Scale(3), NotNull,ReadOnly(true)]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RefNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PurchaseRow()
            : base(Fields)
        {
        }
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "PurchaseId"), NotMapped]
        public List<PurchaseDetailsRow> PurchaseDetails
        {
            get { return Fields.PurchaseDetails[this]; }
            set { Fields.PurchaseDetails[this] = value; }
        }
        [DisplayName("Supplier"), ForeignKey("[dbo].[Supplier]", "Id"), LeftJoin("jSupplier")]
        [LookupEditor(typeof(SupplierRow), InplaceAdd = true),NotNull]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }
        [DisplayName("Supplier Name"), Expression("jSupplier.[SupplierName]"), LookupInclude, QuickFilter, QuickSearch]
        public String SupplierName
        {
            get { return Fields.SupplierName[this]; }
            set { Fields.SupplierName[this] = value; }
        }
        [DisplayName("Payment Mode"), NotNull, LookupInclude, QuickFilter, QuickSearch, DefaultValue(1)]
        public ConsignmentPaymentMode? PaymentMode
        {
            get { return (ConsignmentPaymentMode?)Fields.PaymentMode[this]; }
            set { Fields.PaymentMode[this] = (int?)value; }
        }
        [DisplayName("PaidAmount"), ReadOnly(true), Size(18), Scale(3), AuditLog]
        public Decimal? PaidAmount
        {
            get { return Fields.PaidAmount[this]; }
            set { Fields.PaidAmount[this] = value; }
        }

        [DisplayName("Payment Type"), QuickSearch, QuickFilter]
        public PymentTypes? PaymentType
        {
            get { return (PymentTypes?)Fields.PaymentType[this]; }
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
        [DisplayName("PDC Payment Details"), MasterDetailRelation(foreignKey: "PurchaseId"), NotMapped]
        public List<PdcPaymentDetailsRow> PdcPaymentDetails
        {
            get { return Fields.PdcPaymentDetails[this]; }
            set { Fields.PdcPaymentDetails[this] = value; }
        }
        [DisplayName("Payment"), MasterDetailRelation(foreignKey: "PurchaseId"), NotMapped, AuditLog]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.PaymentRow> Payment
        {
            get { return Fields.Payment[this]; }
            set { Fields.Payment[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField TrxDate;
            public StringField RefNo;
            public DecimalField TotalAmount;

            public RowListField<PurchaseDetailsRow> PurchaseDetails;

            public Int32Field SupplierId;
            public StringField SupplierName;
            public Int32Field PaymentMode;

            public DecimalField PaidAmount;
            public Int32Field PaymentType;
            public Int32Field AccountId;

            public StringField AccountAccountName;

            public RowListField<PdcPaymentDetailsRow> PdcPaymentDetails;

            public RowListField<Accounts.Entities.PaymentRow> Payment;
        }
    }
}
