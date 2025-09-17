
namespace SerExtraCore.Transactions.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[DeliveryServiceDetails]")]
    [DisplayName("Delivery Service Details"), InstanceName("Delivery Service Details")]
    [ReadPermission("Transactions:DeliveryServices")]
    [ModifyPermission("Transactions:DeliveryServices")]
    public sealed class DeliveryServiceDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Delivery Service"), NotNull, ForeignKey("[dbo].[DeliveryServices]", "Id"), LeftJoin("jDeliveryService"), TextualField("DeliveryServiceBillNo")]
        public Int32? DeliveryServiceId
        {
            get { return Fields.DeliveryServiceId[this]; }
            set { Fields.DeliveryServiceId[this] = value; }
        }

        [DisplayName("Parcel Type"), Size(500), QuickSearch]
        public String ParcelType
        {
            get { return Fields.ParcelType[this]; }
            set { Fields.ParcelType[this] = value; }
        }

        [DisplayName("Parcel Type Other Lang"), Size(500)]
        public String ParcelTypeOtherLang
        {
            get { return Fields.ParcelTypeOtherLang[this]; }
            set { Fields.ParcelTypeOtherLang[this] = value; }
        }

        [DisplayName("Quantity"), Size(18), Scale(3), NotNull]
        public Decimal? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Unit Price"), Size(18), Scale(3), NotNull]
        public Decimal? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Total Amount"), Size(18), Scale(3), NotNull,ReadOnly(true)]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        [DisplayName("Delivery Service Bill No"), Expression("jDeliveryService.[BillNo]")]
        public String DeliveryServiceBillNo
        {
            get { return Fields.DeliveryServiceBillNo[this]; }
            set { Fields.DeliveryServiceBillNo[this] = value; }
        }

        [DisplayName("Delivery Service Trx Date"), Expression("jDeliveryService.[TrxDate]")]
        public DateTime? DeliveryServiceTrxDate
        {
            get { return Fields.DeliveryServiceTrxDate[this]; }
            set { Fields.DeliveryServiceTrxDate[this] = value; }
        }

        [DisplayName("Delivery Service Consignee Id"), Expression("jDeliveryService.[ConsigneeId]")]
        public Int32? DeliveryServiceConsigneeId
        {
            get { return Fields.DeliveryServiceConsigneeId[this]; }
            set { Fields.DeliveryServiceConsigneeId[this] = value; }
        }

        [DisplayName("Delivery Service Consignor Id"), Expression("jDeliveryService.[ConsignorId]")]
        public Int32? DeliveryServiceConsignorId
        {
            get { return Fields.DeliveryServiceConsignorId[this]; }
            set { Fields.DeliveryServiceConsignorId[this] = value; }
        }

        [DisplayName("Delivery Service Shipping Area From"), Expression("jDeliveryService.[ShippingAreaFrom]")]
        public Int32? DeliveryServiceShippingAreaFrom
        {
            get { return Fields.DeliveryServiceShippingAreaFrom[this]; }
            set { Fields.DeliveryServiceShippingAreaFrom[this] = value; }
        }

        [DisplayName("Delivery Service Shipping Area To"), Expression("jDeliveryService.[ShippingAreaTo]")]
        public Int32? DeliveryServiceShippingAreaTo
        {
            get { return Fields.DeliveryServiceShippingAreaTo[this]; }
            set { Fields.DeliveryServiceShippingAreaTo[this] = value; }
        }

        [DisplayName("Delivery Service Hand Date"), Expression("jDeliveryService.[HandDate]")]
        public DateTime? DeliveryServiceHandDate
        {
            get { return Fields.DeliveryServiceHandDate[this]; }
            set { Fields.DeliveryServiceHandDate[this] = value; }
        }

        [DisplayName("Delivery Service Received Date"), Expression("jDeliveryService.[ReceivedDate]")]
        public DateTime? DeliveryServiceReceivedDate
        {
            get { return Fields.DeliveryServiceReceivedDate[this]; }
            set { Fields.DeliveryServiceReceivedDate[this] = value; }
        }

        [DisplayName("Delivery Service Note"), Expression("jDeliveryService.[Note]")]
        public String DeliveryServiceNote
        {
            get { return Fields.DeliveryServiceNote[this]; }
            set { Fields.DeliveryServiceNote[this] = value; }
        }

        [DisplayName("Delivery Service Payment Type"), Expression("jDeliveryService.[PaymentType]")]
        public Int32? DeliveryServicePaymentType
        {
            get { return Fields.DeliveryServicePaymentType[this]; }
            set { Fields.DeliveryServicePaymentType[this] = value; }
        }

        [DisplayName("Delivery Service Total Amount"), Expression("jDeliveryService.[TotalAmount]")]
        public Decimal? DeliveryServiceTotalAmount
        {
            get { return Fields.DeliveryServiceTotalAmount[this]; }
            set { Fields.DeliveryServiceTotalAmount[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ParcelType; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DeliveryServiceDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field DeliveryServiceId;
            public StringField ParcelType;
            public StringField ParcelTypeOtherLang;
            public DecimalField Quantity;
            public DecimalField UnitPrice;
            public DecimalField TotalAmount;

            public StringField DeliveryServiceBillNo;
            public DateTimeField DeliveryServiceTrxDate;
            public Int32Field DeliveryServiceConsigneeId;
            public Int32Field DeliveryServiceConsignorId;
            public Int32Field DeliveryServiceShippingAreaFrom;
            public Int32Field DeliveryServiceShippingAreaTo;
            public DateTimeField DeliveryServiceHandDate;
            public DateTimeField DeliveryServiceReceivedDate;
            public StringField DeliveryServiceNote;
            public Int32Field DeliveryServicePaymentType;
            public DecimalField DeliveryServiceTotalAmount;
        }
    }
}
