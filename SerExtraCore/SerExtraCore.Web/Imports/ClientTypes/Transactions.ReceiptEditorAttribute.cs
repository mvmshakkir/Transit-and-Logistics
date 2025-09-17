using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class ReceiptEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Transactions.ReceiptEditor";

        public ReceiptEditorAttribute()
            : base(Key)
        {
        }
    }
}