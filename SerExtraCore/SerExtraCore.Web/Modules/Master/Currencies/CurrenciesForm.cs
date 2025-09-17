
namespace SerExtraCore.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Currencies")]
    [BasedOnRow(typeof(Entities.CurrenciesRow), CheckNames = true)]
    public class CurrenciesForm
    {
        [HalfWidth]
        public String CurrencyCode { get; set; }
        [HalfWidth]
        public String CurrencyName { get; set; }
        [HalfWidth]
        public Decimal ExchangeRate { get; set; }

        [Category("Units")]
        [HalfWidth]
        public String CurrencyUnit { get; set; }
        [HalfWidth]

        public String SubCurrencyUnit { get; set; }
    }
}