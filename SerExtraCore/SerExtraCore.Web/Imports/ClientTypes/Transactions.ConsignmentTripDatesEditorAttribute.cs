using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class ConsignmentTripDatesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Transactions.ConsignmentTripDatesEditor";

        public ConsignmentTripDatesEditorAttribute()
            : base(Key)
        {
        }
    }
}