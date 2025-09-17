
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.ConsignmentTripDates")]
    [BasedOnRow(typeof(Entities.ConsignmentTripDatesRow), CheckNames = true)]
    public class ConsignmentTripDatesForm
    {
        
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}