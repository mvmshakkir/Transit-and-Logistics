using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.VehicleFreight
{
    public partial class VehicleFreightEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.VehicleFreight.VehicleFreightEditor";

        public VehicleFreightEditorAttribute()
            : base(Key)
        {
        }
    }
}