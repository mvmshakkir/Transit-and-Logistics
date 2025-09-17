
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.InvoiceCollection")]
    [BasedOnRow(typeof(Entities.InvoiceCollectionRow), CheckNames = true)]
    public class InvoiceCollectionColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]

        public DateTime TrxDate { get; set; }
        [EditLink]
        public String CollectionNumber { get; set; }
        [EditLink]
        public String CustomerCustomerName { get; set; }
        public Decimal TotalAmount { get; set; }
        public Int32 PaymentType { get; set; }
        public String AccountAccountName { get; set; }
        public Int32 Status { get; set; }
        public String StatusUserUsername { get; set; }
    }
}