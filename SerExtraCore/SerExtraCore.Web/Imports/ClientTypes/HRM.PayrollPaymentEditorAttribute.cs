using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.HRM
{
    public partial class PayrollPaymentEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.HRM.PayrollPaymentEditor";

        public PayrollPaymentEditorAttribute()
            : base(Key)
        {
        }
    }
}