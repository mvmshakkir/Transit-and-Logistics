
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.SuppliersPaymentInvoiceCharges")]
    [BasedOnRow(typeof(Entities.SuppliersPaymentInvoiceChargesRow), CheckNames = true)]
    public class SuppliersPaymentInvoiceChargesForm
    {
        //public Int32 SuppliersPaymentId { get; set; }
        [HalfWidth]
        public Int32 InvoiceChargesId { get; set; }
        [HalfWidth]
        public Decimal Amount { get; set; }
    }
}