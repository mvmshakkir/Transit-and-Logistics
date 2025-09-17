
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.InvoiceTripDates")]
    [BasedOnRow(typeof(Entities.InvoiceTripDatesRow), CheckNames = true)]
    public class InvoiceTripDatesColumns
    {
        [EditLink]
       
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}