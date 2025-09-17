
namespace SerExtraCore.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.EmployeeType")]
    [BasedOnRow(typeof(Entities.EmployeeTypeRow), CheckNames = true)]
    public class EmployeeTypeForm
    {
        public String Type { get; set; }
        public String Description { get; set; }
    }
}