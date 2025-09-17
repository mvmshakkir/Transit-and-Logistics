
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.ConsignmentTripDates")]
    [BasedOnRow(typeof(Entities.ConsignmentTripDatesRow), CheckNames = true)]
    public class ConsignmentTripDatesColumns
    {
       [EditLink]
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}