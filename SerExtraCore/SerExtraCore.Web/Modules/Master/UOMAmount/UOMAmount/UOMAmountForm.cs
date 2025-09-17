using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.UOMAmount.Forms
{
    [FormScript("UOMAmount.UOMAmount")]
    [BasedOnRow(typeof(Entities.UOMAmountRow), CheckNames = true)]
    public class UOMAmountForm
    {
        public Int32 UomId { get; set; }
        public Decimal Rate { get; set; }
        //public Int32 MaterialsId { get; set; }
        
    }
}