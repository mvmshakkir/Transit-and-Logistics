using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class InvoiceDueDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Transactions.InvoiceDueDetailsEditor";

        public InvoiceDueDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}