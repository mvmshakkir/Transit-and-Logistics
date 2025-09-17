using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.VehicleMovDetails
{
    public partial class VehicleMovDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.VehicleMovDetails.VehicleMovDetailsEditor";

        public VehicleMovDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}