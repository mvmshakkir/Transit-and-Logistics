using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class PurchaseDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Transactions.PurchaseDetailsEditor";

        public PurchaseDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}