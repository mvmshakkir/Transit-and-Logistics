using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Extr
{
    public partial class ExtrEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Extr.ExtrEditor";

        public ExtrEditorAttribute()
            : base(Key)
        {
        }
    }
}