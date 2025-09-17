using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Common
{
    public partial class EnumSelectFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "SerExtraCore.Common.EnumSelectFormatter";

        public EnumSelectFormatterAttribute()
            : base(Key)
        {
        }

        public bool AllowClear
        {
            get { return GetOption<bool>("allowClear"); }
            set { SetOption("allowClear", value); }
        }

        public string EmptyItemText
        {
            get { return GetOption<string>("emptyItemText"); }
            set { SetOption("emptyItemText", value); }
        }

        public string EnumKey
        {
            get { return GetOption<string>("enumKey"); }
            set { SetOption("enumKey", value); }
        }
    }
}