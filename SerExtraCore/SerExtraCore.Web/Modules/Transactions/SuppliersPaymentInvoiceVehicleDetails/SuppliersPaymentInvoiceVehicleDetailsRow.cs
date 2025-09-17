
namespace SerExtraCore.Transactions.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[SuppliersPaymentInvoiceVehicleDetails]")]
    [DisplayName("Suppliers Payment Invoice Vehicle Details"), InstanceName("Suppliers Payment Invoice Vehicle Details")]
    [ReadPermission("Transactions:SuppliersPayment")]
    [ModifyPermission("Transactions:SuppliersPayment")]
    [LookupScript(Permission = "*", Expiration = -1)]
    public sealed class SuppliersPaymentInvoiceVehicleDetailsRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Suppliers Payment"), NotNull, ForeignKey("[dbo].[SuppliersPayment]", "Id"), LeftJoin("jSuppliersPayment"), TextualField("SuppliersPaymentCode")]
        public Int32? SuppliersPaymentId
        {
            get { return Fields.SuppliersPaymentId[this]; }
            set { Fields.SuppliersPaymentId[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail"), NotNull, ForeignKey("[dbo].[InvoiceVehicleDetails]", "Id"), LeftJoin("jInvoiceVehicleDetail"), TextualField("FullName"), LookupInclude]
        [LookupEditor(typeof(InvoiceVehicleDetailsRow))]
        public Int32? InvoiceVehicleDetailId
        {
            get { return Fields.InvoiceVehicleDetailId[this]; }
            set { Fields.InvoiceVehicleDetailId[this] = value; }
        }

        [DisplayName("Amount"),LookupInclude]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Suppliers Payment Code"), Expression("jSuppliersPayment.[Code]")]
        public String SuppliersPaymentCode
        {
            get { return Fields.SuppliersPaymentCode[this]; }
            set { Fields.SuppliersPaymentCode[this] = value; }
        }

        [DisplayName("Suppliers Payment Date"), Expression("jSuppliersPayment.[Date]")]
        public DateTime? SuppliersPaymentDate
        {
            get { return Fields.SuppliersPaymentDate[this]; }
            set { Fields.SuppliersPaymentDate[this] = value; }
        }

        [DisplayName("Suppliers Payment Supplier Id"), Expression("jSuppliersPayment.[SupplierId]")]
        public Int32? SuppliersPaymentSupplierId
        {
            get { return Fields.SuppliersPaymentSupplierId[this]; }
            set { Fields.SuppliersPaymentSupplierId[this] = value; }
        }

        [DisplayName("Suppliers Payment Total Amount"), Expression("jSuppliersPayment.[TotalAmount]")]
        public Decimal? SuppliersPaymentTotalAmount
        {
            get { return Fields.SuppliersPaymentTotalAmount[this]; }
            set { Fields.SuppliersPaymentTotalAmount[this] = value; }
        }

        [DisplayName("Suppliers Payment Payment Type"), Expression("jSuppliersPayment.[PaymentType]")]
        public Int32? SuppliersPaymentPaymentType
        {
            get { return Fields.SuppliersPaymentPaymentType[this]; }
            set { Fields.SuppliersPaymentPaymentType[this] = value; }
        }

        [DisplayName("Suppliers Payment Account Id"), Expression("jSuppliersPayment.[AccountId]")]
        public Int32? SuppliersPaymentAccountId
        {
            get { return Fields.SuppliersPaymentAccountId[this]; }
            set { Fields.SuppliersPaymentAccountId[this] = value; }
        }

        [DisplayName("Suppliers Payment Status"), Expression("jSuppliersPayment.[Status]")]
        public Int32? SuppliersPaymentStatus
        {
            get { return Fields.SuppliersPaymentStatus[this]; }
            set { Fields.SuppliersPaymentStatus[this] = value; }
        }

        [DisplayName("Suppliers Payment Status User"), Expression("jSuppliersPayment.[StatusUser]")]
        public Int32? SuppliersPaymentStatusUser
        {
            get { return Fields.SuppliersPaymentStatusUser[this]; }
            set { Fields.SuppliersPaymentStatusUser[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Invoice Id"), Expression("jInvoiceVehicleDetail.[InvoiceId]")]
        public Int32? InvoiceVehicleDetailInvoiceId
        {
            get { return Fields.InvoiceVehicleDetailInvoiceId[this]; }
            set { Fields.InvoiceVehicleDetailInvoiceId[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Vehicle Id"), Expression("jInvoiceVehicleDetail.[VehicleId]")]
        public Int32? InvoiceVehicleDetailVehicleId
        {
            get { return Fields.InvoiceVehicleDetailVehicleId[this]; }
            set { Fields.InvoiceVehicleDetailVehicleId[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Type"), Expression("jInvoiceVehicleDetail.[Type]")]
        public String InvoiceVehicleDetailType
        {
            get { return Fields.InvoiceVehicleDetailType[this]; }
            set { Fields.InvoiceVehicleDetailType[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Vehicle Number"), Expression("jInvoiceVehicleDetail.[VehicleNumber]")]
        public String InvoiceVehicleDetailVehicleNumber
        {
            get { return Fields.InvoiceVehicleDetailVehicleNumber[this]; }
            set { Fields.InvoiceVehicleDetailVehicleNumber[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Driver"), Expression("jInvoiceVehicleDetail.[Driver]")]
        public Int32? InvoiceVehicleDetailDriver
        {
            get { return Fields.InvoiceVehicleDetailDriver[this]; }
            set { Fields.InvoiceVehicleDetailDriver[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Shipping Area From"), Expression("jInvoiceVehicleDetail.[ShippingAreaFrom]")]
        public Int32? InvoiceVehicleDetailShippingAreaFrom
        {
            get { return Fields.InvoiceVehicleDetailShippingAreaFrom[this]; }
            set { Fields.InvoiceVehicleDetailShippingAreaFrom[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Shipping Area To"), Expression("jInvoiceVehicleDetail.[ShippingAreaTo]")]
        public Int32? InvoiceVehicleDetailShippingAreaTo
        {
            get { return Fields.InvoiceVehicleDetailShippingAreaTo[this]; }
            set { Fields.InvoiceVehicleDetailShippingAreaTo[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Type Of Vehicle"), Expression("jInvoiceVehicleDetail.[TypeOfVehicle]")]
        public Int32? InvoiceVehicleDetailTypeOfVehicle
        {
            get { return Fields.InvoiceVehicleDetailTypeOfVehicle[this]; }
            set { Fields.InvoiceVehicleDetailTypeOfVehicle[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Start Date"), Expression("jInvoiceVehicleDetail.[StartDate]")]
        public DateTime? InvoiceVehicleDetailStartDate
        {
            get { return Fields.InvoiceVehicleDetailStartDate[this]; }
            set { Fields.InvoiceVehicleDetailStartDate[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail End Date"), Expression("jInvoiceVehicleDetail.[EndDate]")]
        public DateTime? InvoiceVehicleDetailEndDate
        {
            get { return Fields.InvoiceVehicleDetailEndDate[this]; }
            set { Fields.InvoiceVehicleDetailEndDate[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Driver Name"), Expression("jInvoiceVehicleDetail.[DriverName]")]
        public String InvoiceVehicleDetailDriverName
        {
            get { return Fields.InvoiceVehicleDetailDriverName[this]; }
            set { Fields.InvoiceVehicleDetailDriverName[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Number"), Expression("jInvoiceVehicleDetail.[Number]")]
        public String InvoiceVehicleDetailNumber
        {
            get { return Fields.InvoiceVehicleDetailNumber[this]; }
            set { Fields.InvoiceVehicleDetailNumber[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Resident Id"), Expression("jInvoiceVehicleDetail.[ResidentID]")]
        public String InvoiceVehicleDetailResidentId
        {
            get { return Fields.InvoiceVehicleDetailResidentId[this]; }
            set { Fields.InvoiceVehicleDetailResidentId[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Country Id"), Expression("jInvoiceVehicleDetail.[CountryId]")]
        public Int32? InvoiceVehicleDetailCountryId
        {
            get { return Fields.InvoiceVehicleDetailCountryId[this]; }
            set { Fields.InvoiceVehicleDetailCountryId[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Supplier Amount"), Expression("jInvoiceVehicleDetail.[SupplierAmount]")]
        public Decimal? InvoiceVehicleDetailSupplierAmount
        {
            get { return Fields.InvoiceVehicleDetailSupplierAmount[this]; }
            set { Fields.InvoiceVehicleDetailSupplierAmount[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Supplier Id"), Expression("jInvoiceVehicleDetail.[SupplierId]")]
        public Int32? InvoiceVehicleDetailSupplierId
        {
            get { return Fields.InvoiceVehicleDetailSupplierId[this]; }
            set { Fields.InvoiceVehicleDetailSupplierId[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Supplier Payment Status"), Expression("jInvoiceVehicleDetail.[SupplierPaymentStatus]")]
        public Int32? InvoiceVehicleDetailSupplierPaymentStatus
        {
            get { return Fields.InvoiceVehicleDetailSupplierPaymentStatus[this]; }
            set { Fields.InvoiceVehicleDetailSupplierPaymentStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SuppliersPaymentInvoiceVehicleDetailsRow()
            : base(Fields)
        {
        }
        [DisplayName("Invoice Vehicle Details"),Expression("jInvoiceVehicleDetail.[FullName]"), NotMapped]
        public String InvoiceVehicleDetailFullName
        {
            get { return Fields.InvoiceVehicleDetailFullName[this]; }
            set { Fields.InvoiceVehicleDetailFullName[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field SuppliersPaymentId;
            public Int32Field InvoiceVehicleDetailId;
            public DecimalField Amount;

            public StringField SuppliersPaymentCode;
            public DateTimeField SuppliersPaymentDate;
            public Int32Field SuppliersPaymentSupplierId;
            public DecimalField SuppliersPaymentTotalAmount;
            public Int32Field SuppliersPaymentPaymentType;
            public Int32Field SuppliersPaymentAccountId;
            public Int32Field SuppliersPaymentStatus;
            public Int32Field SuppliersPaymentStatusUser;

            public Int32Field InvoiceVehicleDetailInvoiceId;
            public StringField InvoiceVehicleDetailFullName;
            public Int32Field InvoiceVehicleDetailVehicleId;
            public StringField InvoiceVehicleDetailType;
            public StringField InvoiceVehicleDetailVehicleNumber;
            public Int32Field InvoiceVehicleDetailDriver;
            public Int32Field InvoiceVehicleDetailShippingAreaFrom;
            public Int32Field InvoiceVehicleDetailShippingAreaTo;
            public Int32Field InvoiceVehicleDetailTypeOfVehicle;
            public DateTimeField InvoiceVehicleDetailStartDate;
            public DateTimeField InvoiceVehicleDetailEndDate;
            public StringField InvoiceVehicleDetailDriverName;
            public StringField InvoiceVehicleDetailNumber;
            public StringField InvoiceVehicleDetailResidentId;
            public Int32Field InvoiceVehicleDetailCountryId;
            public DecimalField InvoiceVehicleDetailSupplierAmount;
            public Int32Field InvoiceVehicleDetailSupplierId;
            public Int32Field InvoiceVehicleDetailSupplierPaymentStatus;
        }
    }
}
