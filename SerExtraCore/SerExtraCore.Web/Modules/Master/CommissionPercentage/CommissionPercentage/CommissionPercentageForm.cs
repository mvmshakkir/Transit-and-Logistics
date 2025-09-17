using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.CommissionPercentage.Forms
{
    [FormScript("CommissionPercentage.CommissionPercentage")]
    [BasedOnRow(typeof(Entities.CommissionPercentageRow), CheckNames = true)]
    public class CommissionPercentageForm
    {
        public Decimal Percentage { get; set; }
    }
}