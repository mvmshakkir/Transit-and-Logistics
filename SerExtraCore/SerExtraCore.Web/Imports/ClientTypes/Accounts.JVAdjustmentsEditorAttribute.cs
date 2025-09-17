using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Accounts
{
    public partial class JVAdjustmentsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Accounts.JVAdjustmentsEditor";

        public JVAdjustmentsEditorAttribute()
            : base(Key)
        {
        }
    }
}