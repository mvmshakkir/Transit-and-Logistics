using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class SupplierPaymentInvoiceVehicleDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Transactions.SupplierPaymentInvoiceVehicleDetailsEditor";

        public SupplierPaymentInvoiceVehicleDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}