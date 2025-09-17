
namespace SerExtraCore.Transactions.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[InvoiceCollectionDetails]")]
    [DisplayName("Invoice Collection Details"), InstanceName("Invoice Collection Details")]
    [ReadPermission("Transactions:InvoiceCollection")]
    [ModifyPermission("Transactions:InvoiceCollection")]
    public sealed class InvoiceCollectionDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Invoice Collection"), NotNull, ForeignKey("[dbo].[InvoiceCollection]", "Id"), LeftJoin("jInvoiceCollection"), TextualField("InvoiceCollectionCollectionNumber")]
        public Int32? InvoiceCollectionId
        {
            get { return Fields.InvoiceCollectionId[this]; }
            set { Fields.InvoiceCollectionId[this] = value; }
        }

        [DisplayName("Invoice"), NotNull, ForeignKey("[dbo].[Invoice]", "Id"), LeftJoin("jInvoice"), TextualField("InvoiceInvoiceNo")]
        [CustomerInvoiceLookupEditor]
        public Int32? InvoiceId
        {
            get { return Fields.InvoiceId[this]; }
            set { Fields.InvoiceId[this] = value; }
        }

        [DisplayName("Amount"), Size(18), Scale(3), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Cheque Number"), Size(500), QuickSearch]
        public String ChequeNumber
        {
            get { return Fields.ChequeNumber[this]; }
            set { Fields.ChequeNumber[this] = value; }
        }

        [DisplayName("Cheque Date")]
        public DateTime? ChequeDate
        {
            get { return Fields.ChequeDate[this]; }
            set { Fields.ChequeDate[this] = value; }
        }

        [DisplayName("Invoice Collection Trx Date"), Expression("jInvoiceCollection.[TrxDate]")]
        public DateTime? InvoiceCollectionTrxDate
        {
            get { return Fields.InvoiceCollectionTrxDate[this]; }
            set { Fields.InvoiceCollectionTrxDate[this] = value; }
        }

        [DisplayName("Invoice Collection Collection Number"), Expression("jInvoiceCollection.[CollectionNumber]")]
        public String InvoiceCollectionCollectionNumber
        {
            get { return Fields.InvoiceCollectionCollectionNumber[this]; }
            set { Fields.InvoiceCollectionCollectionNumber[this] = value; }
        }

        [DisplayName("Invoice Collection Customer Id"), Expression("jInvoiceCollection.[CustomerId]")]
        public Int32? InvoiceCollectionCustomerId
        {
            get { return Fields.InvoiceCollectionCustomerId[this]; }
            set { Fields.InvoiceCollectionCustomerId[this] = value; }
        }

        [DisplayName("Invoice Collection Total Amount"), Expression("jInvoiceCollection.[TotalAmount]")]
        public Decimal? InvoiceCollectionTotalAmount
        {
            get { return Fields.InvoiceCollectionTotalAmount[this]; }
            set { Fields.InvoiceCollectionTotalAmount[this] = value; }
        }

        [DisplayName("Invoice Collection Payment Type"), Expression("jInvoiceCollection.[PaymentType]")]
        public Int32? InvoiceCollectionPaymentType
        {
            get { return Fields.InvoiceCollectionPaymentType[this]; }
            set { Fields.InvoiceCollectionPaymentType[this] = value; }
        }

        [DisplayName("Invoice Collection Account Id"), Expression("jInvoiceCollection.[AccountId]")]
        public Int32? InvoiceCollectionAccountId
        {
            get { return Fields.InvoiceCollectionAccountId[this]; }
            set { Fields.InvoiceCollectionAccountId[this] = value; }
        }

        [DisplayName("Invoice Collection Status"), Expression("jInvoiceCollection.[Status]")]
        public Int32? InvoiceCollectionStatus
        {
            get { return Fields.InvoiceCollectionStatus[this]; }
            set { Fields.InvoiceCollectionStatus[this] = value; }
        }

        [DisplayName("Invoice Collection Status User"), Expression("jInvoiceCollection.[StatusUser]")]
        public Int32? InvoiceCollectionStatusUser
        {
            get { return Fields.InvoiceCollectionStatusUser[this]; }
            set { Fields.InvoiceCollectionStatusUser[this] = value; }
        }

        [DisplayName("Invoice Invoice Date"), Expression("jInvoice.[InvoiceDate]")]
        public DateTime? InvoiceInvoiceDate
        {
            get { return Fields.InvoiceInvoiceDate[this]; }
            set { Fields.InvoiceInvoiceDate[this] = value; }
        }

        [DisplayName("Invoice No"), Expression("jInvoice.[InvoiceNO]"),MinSelectLevel(SelectLevel.List)]
        public String InvoiceInvoiceNo
        {
            get { return Fields.InvoiceInvoiceNo[this]; }
            set { Fields.InvoiceInvoiceNo[this] = value; }
        }

        [DisplayName("Invoice Consignment Id"), Expression("jInvoice.[ConsignmentId]")]
        public Int32? InvoiceConsignmentId
        {
            get { return Fields.InvoiceConsignmentId[this]; }
            set { Fields.InvoiceConsignmentId[this] = value; }
        }

        [DisplayName("Invoice Consignment Date"), Expression("jInvoice.[ConsignmentDate]")]
        public DateTime? InvoiceConsignmentDate
        {
            get { return Fields.InvoiceConsignmentDate[this]; }
            set { Fields.InvoiceConsignmentDate[this] = value; }
        }

        [DisplayName("Invoice Way Bill No"), Expression("jInvoice.[WayBillNo]")]
        public String InvoiceWayBillNo
        {
            get { return Fields.InvoiceWayBillNo[this]; }
            set { Fields.InvoiceWayBillNo[this] = value; }
        }

        [DisplayName("Invoice Job No"), Expression("jInvoice.[JobNo]")]
        public String InvoiceJobNo
        {
            get { return Fields.InvoiceJobNo[this]; }
            set { Fields.InvoiceJobNo[this] = value; }
        }

        [DisplayName("Invoice Client Job No"), Expression("jInvoice.[ClientJobNo]")]
        public String InvoiceClientJobNo
        {
            get { return Fields.InvoiceClientJobNo[this]; }
            set { Fields.InvoiceClientJobNo[this] = value; }
        }

        [DisplayName("Invoice Shipper Id"), Expression("jInvoice.[ShipperId]")]
        public Int32? InvoiceShipperId
        {
            get { return Fields.InvoiceShipperId[this]; }
            set { Fields.InvoiceShipperId[this] = value; }
        }

        [DisplayName("Invoice Consignee Id"), Expression("jInvoice.[ConsigneeId]")]
        public Int32? InvoiceConsigneeId
        {
            get { return Fields.InvoiceConsigneeId[this]; }
            set { Fields.InvoiceConsigneeId[this] = value; }
        }

        [DisplayName("Invoice Vehicle Id"), Expression("jInvoice.[VehicleId]")]
        public Int32? InvoiceVehicleId
        {
            get { return Fields.InvoiceVehicleId[this]; }
            set { Fields.InvoiceVehicleId[this] = value; }
        }

        [DisplayName("Invoice Type"), Expression("jInvoice.[Type]")]
        public String InvoiceType
        {
            get { return Fields.InvoiceType[this]; }
            set { Fields.InvoiceType[this] = value; }
        }

        [DisplayName("Invoice Vehicle Number"), Expression("jInvoice.[VehicleNumber]")]
        public String InvoiceVehicleNumber
        {
            get { return Fields.InvoiceVehicleNumber[this]; }
            set { Fields.InvoiceVehicleNumber[this] = value; }
        }

        [DisplayName("Invoice Driver"), Expression("jInvoice.[Driver]")]
        public Int32? InvoiceDriver
        {
            get { return Fields.InvoiceDriver[this]; }
            set { Fields.InvoiceDriver[this] = value; }
        }

        [DisplayName("Invoice Payment"), Expression("jInvoice.[Payment]")]
        public Int32? InvoicePayment
        {
            get { return Fields.InvoicePayment[this]; }
            set { Fields.InvoicePayment[this] = value; }
        }

        [DisplayName("Invoice Type Of Pkg"), Expression("jInvoice.[TypeOfPkg]")]
        public String InvoiceTypeOfPkg
        {
            get { return Fields.InvoiceTypeOfPkg[this]; }
            set { Fields.InvoiceTypeOfPkg[this] = value; }
        }

        [DisplayName("Invoice Total Volume"), Expression("jInvoice.[TotalVolume]")]
        public String InvoiceTotalVolume
        {
            get { return Fields.InvoiceTotalVolume[this]; }
            set { Fields.InvoiceTotalVolume[this] = value; }
        }

        [DisplayName("Invoice Total Weight"), Expression("jInvoice.[TotalWeight]")]
        public String InvoiceTotalWeight
        {
            get { return Fields.InvoiceTotalWeight[this]; }
            set { Fields.InvoiceTotalWeight[this] = value; }
        }

        [DisplayName("Invoice Total No Of Pkgs"), Expression("jInvoice.[TotalNoOfPkgs]")]
        public String InvoiceTotalNoOfPkgs
        {
            get { return Fields.InvoiceTotalNoOfPkgs[this]; }
            set { Fields.InvoiceTotalNoOfPkgs[this] = value; }
        }

        [DisplayName("Invoice Shipping Area From"), Expression("jInvoice.[ShippingAreaFrom]")]
        public Int32? InvoiceShippingAreaFrom
        {
            get { return Fields.InvoiceShippingAreaFrom[this]; }
            set { Fields.InvoiceShippingAreaFrom[this] = value; }
        }

        [DisplayName("Invoice Shipping Area To"), Expression("jInvoice.[ShippingAreaTo]")]
        public Int32? InvoiceShippingAreaTo
        {
            get { return Fields.InvoiceShippingAreaTo[this]; }
            set { Fields.InvoiceShippingAreaTo[this] = value; }
        }

        [DisplayName("Invoice Total Amount"), Expression("jInvoice.[TotalAmount]")]
        public Decimal? InvoiceTotalAmount
        {
            get { return Fields.InvoiceTotalAmount[this]; }
            set { Fields.InvoiceTotalAmount[this] = value; }
        }

        [DisplayName("Invoice Driver Km From"), Expression("jInvoice.[DriverKMFrom]")]
        public Decimal? InvoiceDriverKmFrom
        {
            get { return Fields.InvoiceDriverKmFrom[this]; }
            set { Fields.InvoiceDriverKmFrom[this] = value; }
        }

        [DisplayName("Invoice Driver Km To"), Expression("jInvoice.[DriverKMTo]")]
        public Decimal? InvoiceDriverKmTo
        {
            get { return Fields.InvoiceDriverKmTo[this]; }
            set { Fields.InvoiceDriverKmTo[this] = value; }
        }

        [DisplayName("Invoice Gpskm From"), Expression("jInvoice.[GPSKMFrom]")]
        public Decimal? InvoiceGpskmFrom
        {
            get { return Fields.InvoiceGpskmFrom[this]; }
            set { Fields.InvoiceGpskmFrom[this] = value; }
        }

        [DisplayName("Invoice Gpskm To"), Expression("jInvoice.[GPSKMTo]")]
        public Decimal? InvoiceGpskmTo
        {
            get { return Fields.InvoiceGpskmTo[this]; }
            set { Fields.InvoiceGpskmTo[this] = value; }
        }

        [DisplayName("Invoice Status"), Expression("jInvoice.[Status]")]
        public Int32? InvoiceStatus
        {
            get { return Fields.InvoiceStatus[this]; }
            set { Fields.InvoiceStatus[this] = value; }
        }

        [DisplayName("Invoice Status User"), Expression("jInvoice.[StatusUser]")]
        public Int32? InvoiceStatusUser
        {
            get { return Fields.InvoiceStatusUser[this]; }
            set { Fields.InvoiceStatusUser[this] = value; }
        }

        [DisplayName("Invoice Payment Status"), Expression("jInvoice.[PaymentStatus]")]
        public Int32? InvoicePaymentStatus
        {
            get { return Fields.InvoicePaymentStatus[this]; }
            set { Fields.InvoicePaymentStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ChequeNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InvoiceCollectionDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field InvoiceCollectionId;
            public Int32Field InvoiceId;
            public DecimalField Amount;
            public StringField ChequeNumber;
            public DateTimeField ChequeDate;

            public DateTimeField InvoiceCollectionTrxDate;
            public StringField InvoiceCollectionCollectionNumber;
            public Int32Field InvoiceCollectionCustomerId;
            public DecimalField InvoiceCollectionTotalAmount;
            public Int32Field InvoiceCollectionPaymentType;
            public Int32Field InvoiceCollectionAccountId;
            public Int32Field InvoiceCollectionStatus;
            public Int32Field InvoiceCollectionStatusUser;

            public DateTimeField InvoiceInvoiceDate;
            public StringField InvoiceInvoiceNo;
            public Int32Field InvoiceConsignmentId;
            public DateTimeField InvoiceConsignmentDate;
            public StringField InvoiceWayBillNo;
            public StringField InvoiceJobNo;
            public StringField InvoiceClientJobNo;
            public Int32Field InvoiceShipperId;
            public Int32Field InvoiceConsigneeId;
            public Int32Field InvoiceVehicleId;
            public StringField InvoiceType;
            public StringField InvoiceVehicleNumber;
            public Int32Field InvoiceDriver;
            public Int32Field InvoicePayment;
            public StringField InvoiceTypeOfPkg;
            public StringField InvoiceTotalVolume;
            public StringField InvoiceTotalWeight;
            public StringField InvoiceTotalNoOfPkgs;
            public Int32Field InvoiceShippingAreaFrom;
            public Int32Field InvoiceShippingAreaTo;
            public DecimalField InvoiceTotalAmount;
            public DecimalField InvoiceDriverKmFrom;
            public DecimalField InvoiceDriverKmTo;
            public DecimalField InvoiceGpskmFrom;
            public DecimalField InvoiceGpskmTo;
            public Int32Field InvoiceStatus;
            public Int32Field InvoiceStatusUser;
            public Int32Field InvoicePaymentStatus;
        }
    }
}
