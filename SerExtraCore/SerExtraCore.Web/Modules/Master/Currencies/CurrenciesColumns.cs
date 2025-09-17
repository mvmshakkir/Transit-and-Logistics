
namespace SerExtraCore.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Currencies")]
    [BasedOnRow(typeof(Entities.CurrenciesRow), CheckNames = true)]
    public class CurrenciesColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public String CurrencyCode { get; set; }
        public String CurrencyName { get; set; }
        public Decimal ExchangeRate { get; set; }
    }
}