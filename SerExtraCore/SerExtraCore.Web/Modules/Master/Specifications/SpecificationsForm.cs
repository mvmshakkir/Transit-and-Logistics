
namespace SerExtraCore.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Specifications")]
    [BasedOnRow(typeof(Entities.SpecificationsRow), CheckNames = true)]
    public class SpecificationsForm
    {
        public String Specifications { get; set; }
        public String Description { get; set; }
    }
}