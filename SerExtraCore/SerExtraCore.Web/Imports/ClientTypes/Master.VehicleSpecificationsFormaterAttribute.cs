using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Master
{
    public partial class VehicleSpecificationsFormaterAttribute : CustomFormatterAttribute
    {
        public const string Key = "SerExtraCore.Master.VehicleSpecificationsFormater";

        public VehicleSpecificationsFormaterAttribute()
            : base(Key)
        {
        }
    }
}