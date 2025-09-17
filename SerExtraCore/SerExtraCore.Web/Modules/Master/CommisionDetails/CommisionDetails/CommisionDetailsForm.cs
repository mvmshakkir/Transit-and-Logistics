using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.CommisionDetails.Forms
{
    [FormScript("CommisionDetails.CommisionDetails")]
    [BasedOnRow(typeof(Entities.CommisionDetailsRow), CheckNames = true)]
    public class CommisionDetailsForm
    {
        //[Hidden]
        //public Int32 TsId { get; set; }
        public Int32 DriverId { get; set; }
        public Int32 PercentageId { get; set; }

        public string MobileNumber {  get; set; }
        //public Decimal CommissionAmount { get; set; }

    }
}