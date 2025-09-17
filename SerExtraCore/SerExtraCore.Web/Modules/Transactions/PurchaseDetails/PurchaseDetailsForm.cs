
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.PurchaseDetails")]
    [BasedOnRow(typeof(Entities.PurchaseDetailsRow), CheckNames = true)]
    public class PurchaseDetailsForm
    {
        [HalfWidth]
        public Int32 ProductId { get; set; }
        [HalfWidth]
        public Decimal UnitPrice { get; set; }
        [HalfWidth]
        public Decimal Quantity { get; set; }
        [HalfWidth]
        public Decimal TotalAmount { get; set; }
        [HalfWidth]
        public Decimal DisPer { get; set; }
        [HalfWidth]
        public Decimal DisAmount { get; set; }
        [HalfWidth]
        public Decimal TaxableAmount { get; set; }
        [HalfWidth]
        public Decimal TaxPer { get; set; }
        [HalfWidth]
        public Decimal TaxAmount { get; set; }
        [HalfWidth]
        public Decimal LineTotal { get; set; }
    }
}