
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.PurchaseDetails")]
    [BasedOnRow(typeof(Entities.PurchaseDetailsRow), CheckNames = true)]
    public class PurchaseDetailsColumns
    {
        [EditLink]
        public String ProductProductCode { get; set; }
        [EditLink]
        public String ProductProductName{ get; set; }
        public Decimal UnitPrice { get; set; }
        public Decimal Quantity { get; set; }
        public Decimal TotalAmount { get; set; }
        public Decimal DisPer { get; set; }
        public Decimal DisAmount { get; set; }
        public Decimal TaxableAmount { get; set; }
        public Decimal TaxPer { get; set; }
        public Decimal TaxAmount { get; set; }
        public Decimal LineTotal { get; set; }
    }
}