using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.UOMAmount
{
    public partial class UOMAmountEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.UOMAmount.UOMAmountEditor";

        public UOMAmountEditorAttribute()
            : base(Key)
        {
        }
    }
}