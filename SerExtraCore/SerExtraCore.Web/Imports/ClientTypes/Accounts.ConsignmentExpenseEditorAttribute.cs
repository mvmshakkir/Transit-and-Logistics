using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Accounts
{
    public partial class ConsignmentExpenseEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Accounts.ConsignmentExpenseEditor";

        public ConsignmentExpenseEditorAttribute()
            : base(Key)
        {
        }
    }
}