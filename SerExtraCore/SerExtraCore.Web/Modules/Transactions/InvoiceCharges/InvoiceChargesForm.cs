
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.InvoiceCharges")]
    [BasedOnRow(typeof(Entities.InvoiceChargesRow), CheckNames = true)]
    public class InvoiceChargesForm
    {
       [HalfWidth]
        [DisplayName("Material")]
        public Int32 ChargeId { get; set; }
        [HalfWidth]
        public DateTime Date { get; set; }
        [HalfWidth]
        public String Description { get; set; }
        [HalfWidth]
        public Decimal Amount { get; set; }
        [HalfWidth]
        public Decimal Qty { get; set; }
        [HalfWidth]
        public Decimal? Total { get; set; }
 
        [HalfWidth]
        public Decimal? DisAmount { get; set; }
        [Hidden]
        [HalfWidth]
        public Decimal TaxableAmount { get; set; }
        [Hidden]
        [HalfWidth]
        public Decimal TaxPer { get; set; }
        [Hidden]
        [HalfWidth]
        public Decimal TaxAmount { get; set; }
        [HalfWidth]
        public Decimal TotalAmount { get; set; }
        [Hidden]
        [HalfWidth]
        public Int32 CurrencyId { get; set; }
        [Hidden]
        [HalfWidth]
        public Decimal ExchangeRate { get; set; }
        [Hidden]
        [HalfWidth]
        public Decimal TotalAmountInLocalCurrency { get; set; }

        [Category("Supplier Payment Details")]
        [HalfWidth]
        public Decimal SupplierAmount { get; set; }
        [HalfWidth]
        public Int32 SupplierId { get; set; }



        [HalfWidth, ReadOnly(true)]
        public Decimal SupplierAdvanceAmount { get; set; }

        [HalfWidth, ReadOnly(true)]
        public Int32 PaymentType { get; set; }

        [HalfWidth, ReadOnly(true)]
        public Int32 AccountId { get; set; }


        [HalfWidth]
        public Int32? SupplierPaymentStatus { get; set; }
    }
}