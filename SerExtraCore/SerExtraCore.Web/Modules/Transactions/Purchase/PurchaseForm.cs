
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
    using SerExtraCore.PDCPayments;

    [FormScript("Transactions.Purchase")]
    [BasedOnRow(typeof(Entities.PurchaseRow), CheckNames = true)]
    public class PurchaseForm
    {
        [Category("Purchase")]
        [HalfWidth]
        public DateTime TrxDate { get; set; }
        [HalfWidth]
        public Int32 SupplierId { get; set; }
        [HalfWidth]
        public Int32 PaymentMode { get; set; }
        [HalfWidth]

        public String RefNo { get; set; }
        [Category("Purchase Details")]
        [PurchaseDetailsEditor]
        public List<PurchaseDetailsRow> PurchaseDetails { get; set; }

        [HalfWidth]
        public Decimal TotalAmount { get; set; }

        [Category("Payment Details")]
        [HalfWidth]
        public Decimal PaidAmount { get; set; }
        [HalfWidth]
        public Int32 PaymentType { get; set; }
        [HalfWidth]
        public Int32 AccountId { get; set; }
        [HalfWidth]
        [PdcPaymentDetailsEditor]

        public RowListField<PDCPayments.Entities.PdcPaymentDetailsRow> PdcPaymentDetails { get; set; }

        [ReceiptEditor]
        [Visible(false)]
        public List<Accounts.Entities.ReceiptRow> Payment { get; set; }
    }
}