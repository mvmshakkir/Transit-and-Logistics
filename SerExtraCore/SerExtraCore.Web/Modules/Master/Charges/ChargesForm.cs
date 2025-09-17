
namespace SerExtraCore.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Charges")]
    [BasedOnRow(typeof(Entities.ChargesRow), CheckNames = true)]
    public class ChargesForm
    {
        public String ChargeName { get; set; }
        public String Description { get; set; }
        public  Int32 ChartOrder { get; set; }
        public Int32 TaxCodeId { get; set; }
    }
}