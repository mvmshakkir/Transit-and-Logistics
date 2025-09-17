using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.ExtraExpense
{
    public partial class ExtraExpenseEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.ExtraExpense.ExtraExpenseEditor";

        public ExtraExpenseEditorAttribute()
            : base(Key)
        {
        }
    }
}
