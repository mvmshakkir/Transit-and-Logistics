using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class CustomerInvoiceLookupEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "SerExtraCore.Transactions.CustomerInvoiceLookupEditor";

        public CustomerInvoiceLookupEditorAttribute()
            : base(Key)
        {
        }
    }
}