using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.Extr.Forms
{
    [FormScript("Extr.Extr")]
    [BasedOnRow(typeof(Entities.ExtrRow), CheckNames = true)]
    public class ExtrForm
    {
        [Hidden]
        public Int32 Settlementid { get; set; }
        public String Name { get; set; }
        public Decimal Amount { get; set; }
    }
}