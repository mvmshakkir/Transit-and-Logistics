using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class InvoiceChargeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Transactions.InvoiceChargeEditor";

        public InvoiceChargeEditorAttribute()
            : base(Key)
        {
        }
    }
}