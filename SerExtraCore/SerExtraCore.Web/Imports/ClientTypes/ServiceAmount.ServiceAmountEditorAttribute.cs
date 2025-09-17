using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.ServiceAmount
{
    public partial class ServiceAmountEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.ServiceAmount.ServiceAmountEditor";

        public ServiceAmountEditorAttribute()
            : base(Key)
        {
        }
    }
}