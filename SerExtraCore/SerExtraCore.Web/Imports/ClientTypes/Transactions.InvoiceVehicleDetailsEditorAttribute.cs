using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class InvoiceVehicleDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Transactions.InvoiceVehicleDetailsEditor";

        public InvoiceVehicleDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}