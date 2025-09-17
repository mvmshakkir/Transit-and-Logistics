
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.InvoiceDueDetails")]
    [BasedOnRow(typeof(Entities.InvoiceDueDetailsRow), CheckNames = true)]
    public class InvoiceDueDetailsColumns
    {
        [EditLink]
        
        public Int32 DueDays { get; set; }
        public DateTime DueDate { get; set; }
        public Decimal Amount { get; set; }
    }
}