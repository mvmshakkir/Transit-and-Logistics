
namespace SerExtraCore.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.TaxCode")]
    [BasedOnRow(typeof(Entities.TaxCodeRow), CheckNames = true)]
    public class TaxCodeForm
    {
        public String Name { get; set; }
        public Decimal Rate { get; set; }
        public String Description { get; set; }
    }
}