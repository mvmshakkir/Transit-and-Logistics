
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.InvoiceDueDetails")]
    [BasedOnRow(typeof(Entities.InvoiceDueDetailsRow), CheckNames = true)]
    public class InvoiceDueDetailsForm
    {
        //public Int32 InvoiceId { get; set; }
        [HalfWidth]
        public Int32 DueDays { get; set; }
        [HalfWidth]
        public DateTime DueDate { get; set; }
        [HalfWidth]
        public Decimal Amount { get; set; }
    }
}