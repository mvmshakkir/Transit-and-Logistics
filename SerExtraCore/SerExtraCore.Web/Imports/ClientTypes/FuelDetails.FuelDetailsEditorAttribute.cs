using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.FuelDetails
{
    public partial class FuelDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.FuelDetails.FuelDetailsEditor";

        public FuelDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}