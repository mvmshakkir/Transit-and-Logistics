
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.Purchase")]
    [BasedOnRow(typeof(Entities.PurchaseRow), CheckNames = true)]
    public class PurchaseColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public DateTime TrxDate { get; set; }
        [EditLink]
        public String SupplierName { get; set; }
        public String RefNo { get; set; }
        public Int32 PaymentMode { get; set; }
        public Decimal TotalAmount { get; set; }
    }
}