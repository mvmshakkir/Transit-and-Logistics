using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.Services.Forms
{
    [FormScript("Services.Services")]
    [BasedOnRow(typeof(Entities.ServicesRow), CheckNames = true)]
    public class ServicesForm
    {
        [HalfWidth]
        public String ServiceName { get; set; }
    }
}