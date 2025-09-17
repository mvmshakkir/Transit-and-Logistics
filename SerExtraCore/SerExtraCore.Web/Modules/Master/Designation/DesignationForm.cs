
namespace SerExtraCore.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Designation")]
    [BasedOnRow(typeof(Entities.DesignationRow), CheckNames = true)]
    public class DesignationForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
}