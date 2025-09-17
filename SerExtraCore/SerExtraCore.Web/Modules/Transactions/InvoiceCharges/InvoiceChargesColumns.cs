
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.InvoiceCharges")]
    [BasedOnRow(typeof(Entities.InvoiceChargesRow), CheckNames = true)]
    public class InvoiceChargesColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }

        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        //chargename changed to material

        [EditLink]
        public String ChargeChargeName { get; set; }
        [EditLink]
        [HalfWidth]
        public DateTime Date { get; set; }
        [EditLink]
        public String Description { get; set; }
        public Decimal Amount { get; set; }
        public Decimal Qty { get; set; }
        //public Decimal TotalAmount { get; set; }
        //public String CurrencyCurrencyCode { get; set; }
        //public Decimal ExchangeRate { get; set; }
        public Decimal TotalAmountInLocalCurrency { get; set; }
    }
}