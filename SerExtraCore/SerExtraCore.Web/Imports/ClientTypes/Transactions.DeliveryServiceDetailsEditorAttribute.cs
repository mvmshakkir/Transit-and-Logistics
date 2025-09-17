using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class DeliveryServiceDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Transactions.DeliveryServiceDetailsEditor";

        public DeliveryServiceDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}