
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.InvoiceTripDates")]
    [BasedOnRow(typeof(Entities.InvoiceTripDatesRow), CheckNames = true)]
    public class InvoiceTripDatesForm
    {
[HalfWidth]
        //public Int32 InvoiceId { get; set; }
        public DateTime StartDate { get; set; }
        [HalfWidth]
        public DateTime EndDate { get; set; }
    }
}