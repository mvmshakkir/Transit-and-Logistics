
namespace SerExtraCore.Reports.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Reports.ReportParameters")]
    [BasedOnRow(typeof(Entities.ReportParametersRow), CheckNames = true)]
    public class ReportParametersForm
    {
        [Category("Editor Details")]
        [EditLink]
        [HalfWidth]
        public String ParameterName { get; set; }
        [HalfWidth]
        public Int32 DataType { get; set; }
        [HalfWidth]
        public Int32 EditorType { get; set; }

        [Category("Lookup Details")]
        [HalfWidth]
        public Int32 LookupType { get; set; }
        [HalfWidth]
        public String LookupName { get; set; }
        [HalfWidth]
        public Int32? CustomLookupId { get; set; }

        [Category("Other Details")]
        [HalfWidth]
        public String DefaultValue { get; set; }
        [HalfWidth]
        public Boolean? IsRequired { get; set; }
    }
}