
namespace SerExtraCore.Transactions.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[InvoiceTripDates]")]
    [DisplayName("Invoice Trip Dates"), InstanceName("Invoice Trip Dates")]
    [ReadPermission("Transactions:Invoice")]
    [ModifyPermission("Transactions:Invoice")]
    public sealed class InvoiceTripDatesRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Invoice"), NotNull, ForeignKey("[dbo].[Invoice]", "Id"), LeftJoin("jInvoice"), TextualField("InvoiceInvoiceNo")]
        public Int32? InvoiceId
        {
            get { return Fields.InvoiceId[this]; }
            set { Fields.InvoiceId[this] = value; }
        }

        [DisplayName("Start Date"),NotNull, DateTimeEditor]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("End Date"),NotNull, DateTimeEditor]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }

        [DisplayName("Invoice Invoice Date"), Expression("jInvoice.[InvoiceDate]")]
        public DateTime? InvoiceInvoiceDate
        {
            get { return Fields.InvoiceInvoiceDate[this]; }
            set { Fields.InvoiceInvoiceDate[this] = value; }
        }

        [DisplayName("Invoice Invoice No"), Expression("jInvoice.[InvoiceNO]")]
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

        [DisplayName("Invoice Payment Mode"), Expression("jInvoice.[PaymentMode]")]
        public Int32? InvoicePaymentMode
        {
            get { return Fields.InvoicePaymentMode[this]; }
            set { Fields.InvoicePaymentMode[this] = value; }
        }

        [DisplayName("Invoice Billing"), Expression("jInvoice.[Billing]")]
        public Int32? InvoiceBilling
        {
            get { return Fields.InvoiceBilling[this]; }
            set { Fields.InvoiceBilling[this] = value; }
        }

        [DisplayName("Invoice Start Date"), Expression("jInvoice.[StartDate]")]
        public DateTime? InvoiceStartDate
        {
            get { return Fields.InvoiceStartDate[this]; }
            set { Fields.InvoiceStartDate[this] = value; }
        }

        [DisplayName("Invoice End Date"), Expression("jInvoice.[EndDate]")]
        public DateTime? InvoiceEndDate
        {
            get { return Fields.InvoiceEndDate[this]; }
            set { Fields.InvoiceEndDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InvoiceTripDatesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field InvoiceId;
            public DateTimeField StartDate;
            public DateTimeField EndDate;

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
            public Int32Field InvoicePaymentMode;
            public Int32Field InvoiceBilling;
            public DateTimeField InvoiceStartDate;
            public DateTimeField InvoiceEndDate;
        }
    }
}
