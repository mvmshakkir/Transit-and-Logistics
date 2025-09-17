using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class ConsignmentVehicleDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Transactions.ConsignmentVehicleDetailsEditor";

        public ConsignmentVehicleDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}