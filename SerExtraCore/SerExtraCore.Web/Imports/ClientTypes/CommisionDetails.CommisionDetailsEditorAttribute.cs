using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.CommisionDetails
{
    public partial class CommisionDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.CommisionDetails.CommisionDetailsEditor";

        public CommisionDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}