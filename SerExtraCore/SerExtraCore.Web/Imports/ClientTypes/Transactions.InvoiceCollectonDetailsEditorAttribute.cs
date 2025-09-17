using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class InvoiceCollectonDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Transactions.InvoiceCollectonDetailsEditor";

        public InvoiceCollectonDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}