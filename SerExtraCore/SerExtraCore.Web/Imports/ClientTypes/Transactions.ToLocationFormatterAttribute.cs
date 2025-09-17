using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class ToLocationFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "SerExtraCore.Transactions.ToLocationFormatter";

        public ToLocationFormatterAttribute()
            : base(Key)
        {
        }
    }
}