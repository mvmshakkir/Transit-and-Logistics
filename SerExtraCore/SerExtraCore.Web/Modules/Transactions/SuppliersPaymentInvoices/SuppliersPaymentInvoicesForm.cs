
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.SuppliersPaymentInvoices")]
    [BasedOnRow(typeof(Entities.SuppliersPaymentInvoicesRow), CheckNames = true)]
    public class SuppliersPaymentInvoicesForm
    {
        public Int32 SuppliersPaymentId { get; set; }
        public Int32 InvoiceId { get; set; }
    }
}