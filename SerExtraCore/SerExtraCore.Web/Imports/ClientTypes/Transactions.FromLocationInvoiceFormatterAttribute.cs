using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class FromLocationInvoiceFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "SerExtraCore.Transactions.FromLocationInvoiceFormatter";

        public FromLocationInvoiceFormatterAttribute()
            : base(Key)
        {
        }
    }
}