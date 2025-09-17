using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class InvoiceTripDatesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Transactions.InvoiceTripDatesEditor";

        public InvoiceTripDatesEditorAttribute()
            : base(Key)
        {
        }
    }
}