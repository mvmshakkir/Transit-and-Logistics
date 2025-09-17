using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.ServiceAmount.Forms
{
    [FormScript("ServiceAmount.ServiceAmount")]
    [BasedOnRow(typeof(Entities.ServiceAmountRow), CheckNames = true)]
    public class ServiceAmountForm
    {
        [HalfWidth]
        public Int32 ServiceId { get; set; }
        //public Int32 TsId { get; set; }
        [HalfWidth]
        public Decimal Amount { get; set; }
        
        public String Photo { get; set; }
    }
}