
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SerExtraCore.PDCPayments;

    [FormScript("Transactions.InvoiceCollection")]
    [BasedOnRow(typeof(Entities.InvoiceCollectionRow), CheckNames = true)]
    public class InvoiceCollectionForm
    {
        [Category("Transaction Details")]
         [HalfWidth]
        public DateTime TrxDate { get; set; }
        [HalfWidth]
        public String CollectionNumber { get; set; }
        [HalfWidth]
        public Int32 CustomerId { get; set; }
        [Category("Payment Details")]
        [InvoiceCollectonDetailsEditor]
        public List<Entities.InvoiceChargesRow> DetailList { get; set; }
        [HalfWidth]
        public Decimal TotalAmount { get; set; }
        [HalfWidth]
        public Int32 PaymentType { get; set; }
        [HalfWidth]
        public Int32 AccountId { get; set; }
        [PdcPaymentDetailsEditor]

        public RowListField<PDCPayments.Entities.PdcPaymentDetailsRow> PdcPaymentDetails { get; set; }
        [Category("Status")]
        [HalfWidth]
        public Int32 Status { get; set; }
        [HalfWidth]
        public Int32 StatusUser { get; set; }
        
        [ReceiptEditor]
        [Visible(false)]
        public List<Accounts.Entities.ReceiptRow> Receipts { get; set; }
        
    }
}