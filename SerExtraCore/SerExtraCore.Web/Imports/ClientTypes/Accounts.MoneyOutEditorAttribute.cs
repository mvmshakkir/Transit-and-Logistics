using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Accounts
{
    public partial class MoneyOutEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Accounts.MoneyOutEditor";

        public MoneyOutEditorAttribute()
            : base(Key)
        {
        }
    }
}