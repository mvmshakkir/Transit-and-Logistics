
namespace SerExtraCore.Reports.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SerExtraCore.Reports.Entities;

    [FormScript("Reports.ReportDesigns")]
    [BasedOnRow(typeof(Entities.ReportDesignsRow), CheckNames = true)]
    public class ReportDesignsForm
    {
        [HalfWidth]
        public String Name { get; set; }
        [HalfWidth]
        public String Category { get; set; }
        [HalfWidth]
        public String PermissionKey { get; set; }
        public String Design { get; set; }
        [Category("Parameters")]
        [ReportParametersEditor]
        public List<ReportParametersRow> ReportParameters { get; set; }

        [Category("Data Sets")]
        [HalfWidth]
        [ReportDataSetsEditor]
        public List<ReportDataSetsRow> ReportDataSets { get; set; }

       
    }
}