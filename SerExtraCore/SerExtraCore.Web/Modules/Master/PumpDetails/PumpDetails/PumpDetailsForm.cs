using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.PumpDetails.Forms
{
    [FormScript("PumpDetails.PumpDetails")]
    [BasedOnRow(typeof(Entities.PumpDetailsRow), CheckNames = true)]
    public class PumpDetailsForm
    {

        public String PumpName { get; set; }
        public String PumpPlace { get; set; }
        public String Address { get; set; }
    }
}