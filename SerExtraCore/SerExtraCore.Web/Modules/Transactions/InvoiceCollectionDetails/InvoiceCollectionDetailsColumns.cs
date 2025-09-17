
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.InvoiceCollectionDetails")]
    [BasedOnRow(typeof(Entities.InvoiceCollectionDetailsRow), CheckNames = true)]
    public class InvoiceCollectionDetailsColumns
    {
        [EditLink]
        public String InvoiceInvoiceNo { get; set; }
        [EditLink]
        public Decimal Amount { get; set; }

        //public String ChequeNumber { get; set; }
        //public DateTime ChequeDate { get; set; }
    }
}