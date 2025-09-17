using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class ConsignmentChargeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Transactions.ConsignmentChargeEditor";

        public ConsignmentChargeEditorAttribute()
            : base(Key)
        {
        }
    }
}