
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.InvoiceCollectionDetails")]
    [BasedOnRow(typeof(Entities.InvoiceCollectionDetailsRow), CheckNames = true)]
    public class InvoiceCollectionDetailsForm
    {
        //public Int32 InvoiceCollectionId { get; set; }
        [HalfWidth]
        public Int32 InvoiceId { get; set; }
        [HalfWidth]
        public Decimal Amount { get; set; }
        //[HalfWidth]
        //public String ChequeNumber { get; set; }
        //[HalfWidth]
        //public DateTime ChequeDate { get; set; }
    }
}