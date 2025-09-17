
namespace SerExtraCore.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.ClearanceStatus")]
    [BasedOnRow(typeof(Entities.ClearanceStatusRow), CheckNames = true)]
    public class ClearanceStatusForm
    {
        public String Status { get; set; }
        public Int32 ChartOrder { get; set; }
    }
}