using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.Crossing.Forms
{
    [FormScript("Crossing.Crossing")]
    [BasedOnRow(typeof(Entities.CrossingRow), CheckNames = true)]
    public class CrossingForm
    {
        [Hidden]
        //public Int32 Id { get; set; }
        public Int32 Settlementid { get; set; }
        public String Name { get; set; }
        public Decimal Amount { get; set; }
    }
}