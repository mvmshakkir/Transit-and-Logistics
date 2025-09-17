using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.UOM.Forms
{
    [FormScript("UOM.UOM")]
    [BasedOnRow(typeof(Entities.UOMRow), CheckNames = true)]
    public class UOMForm
    {
        public String Unit { get; set; }
    }
}