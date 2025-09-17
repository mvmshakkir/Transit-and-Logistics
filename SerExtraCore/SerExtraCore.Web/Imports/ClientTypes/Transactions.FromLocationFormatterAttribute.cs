using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Transactions
{
    public partial class FromLocationFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "SerExtraCore.Transactions.FromLocationFormatter";

        public FromLocationFormatterAttribute()
            : base(Key)
        {
        }
    }
}