using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.ExtraExp
{
    public partial class FuelDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.ExtraExp.FuelDetailsEditor";

        public FuelDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}
