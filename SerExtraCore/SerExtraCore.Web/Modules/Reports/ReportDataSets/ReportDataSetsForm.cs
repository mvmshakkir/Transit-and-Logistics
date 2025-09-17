
namespace SerExtraCore.Reports.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Reports.ReportDataSets")]
    [BasedOnRow(typeof(Entities.ReportDataSetsRow), CheckNames = true)]
    public class ReportDataSetsForm
    {
        public String DataSetName { get; set; }
        public String SqlQuery { get; set; }
        
    }
}