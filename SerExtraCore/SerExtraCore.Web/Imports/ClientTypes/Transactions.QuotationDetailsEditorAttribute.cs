using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class QuotationDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Transactions.QuotationDetailsEditor";

        public QuotationDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}