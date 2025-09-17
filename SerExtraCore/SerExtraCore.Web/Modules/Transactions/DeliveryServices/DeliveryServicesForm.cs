
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SerExtraCore.Transactions.Entities;

    [FormScript("Transactions.DeliveryServices")]
    [BasedOnRow(typeof(Entities.DeliveryServicesRow), CheckNames = true)]
    public class DeliveryServicesForm
    {
        [Category("Trx Details")]
        [HalfWidth]
        public String BillNo { get; set; }
        [HalfWidth]
        public DateTime TrxDate { get; set; }
        [HalfWidth]
        public Int32 PaymentType { get; set; }
        [Category("Delivery")]
        [HalfWidth]
        public Int32 ConsigneeId { get; set; }
        [HalfWidth]
        public Int32 ConsignorId { get; set; }
        [HalfWidth]
        public Int32 ShippingAreaFrom { get; set; }
        [HalfWidth]
        public Int32 ShippingAreaTo { get; set; }
        [HalfWidth]
        public DateTime HandDate { get; set; }
        [HalfWidth]
        public DateTime ReceivedDate { get; set; }
        [Category("Delivery")]
        [DeliveryServiceDetailsEditor]
        public List<DeliveryServiceDetailsRow> DeliveryServiceDetails { get; set; }

        [HalfWidth]
        public Decimal TotalAmount { get; set; }

        [Category("Receiver Details")]
        [HalfWidth]
        public String ReceiverDetails { get; set; }
        [HalfWidth]
        public String IDNo { get; set; }
        [HalfWidth]
        public String ContactNo { get; set; }


        [Category("Payment Details")]
        [HalfWidth]
        public Int32 PaymentTypeA { get; set; }
        [HalfWidth]
        public Int32 AccountId { get; set; }
        [Category("Status")]
        [HalfWidth]
        public Int32 DeliveryStatus { get; set; }

        [Category("Note")]
        [HalfWidth]
        public String Note { get; set; }
        [ReceiptEditor]
        [Visible(false)]
        public List<Accounts.Entities.ReceiptRow> Receipts { get; set; }
    }
}