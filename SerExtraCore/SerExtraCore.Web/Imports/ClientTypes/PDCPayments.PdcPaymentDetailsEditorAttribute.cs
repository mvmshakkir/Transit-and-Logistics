using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.PDCPayments
{
    public partial class PdcPaymentDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.PDCPayments.PdcPaymentDetailsEditor";

        public PdcPaymentDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}