using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class ToLocationInvoiceFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "SerExtraCore.Transactions.ToLocationInvoiceFormatter";

        public ToLocationInvoiceFormatterAttribute()
            : base(Key)
        {
        }
    }
}