using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Reports
{
    public partial class ReportDataSetsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Reports.ReportDataSetsEditor";

        public ReportDataSetsEditorAttribute()
            : base(Key)
        {
        }
    }
}