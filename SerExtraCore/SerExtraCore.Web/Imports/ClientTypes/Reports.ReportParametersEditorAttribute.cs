using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Reports
{
    public partial class ReportParametersEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Reports.ReportParametersEditor";

        public ReportParametersEditorAttribute()
            : base(Key)
        {
        }
    }
}