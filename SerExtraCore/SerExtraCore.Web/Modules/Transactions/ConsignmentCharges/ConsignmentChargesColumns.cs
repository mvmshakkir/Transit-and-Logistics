
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.ConsignmentCharges")]
    [BasedOnRow(typeof(Entities.ConsignmentChargesRow), CheckNames = true)]
    public class ConsignmentChargesColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public String ChargeChargeName { get; set; }
        [EditLink]
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