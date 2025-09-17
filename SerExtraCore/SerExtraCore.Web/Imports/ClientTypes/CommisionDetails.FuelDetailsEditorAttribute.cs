using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.CommisionDetails
{
    public partial class FuelDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.CommisionDetails.FuelDetailsEditor";

        public FuelDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}
