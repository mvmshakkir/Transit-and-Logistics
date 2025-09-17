using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Crossing
{
    public partial class CrossingEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Crossing.CrossingEditor";

        public CrossingEditorAttribute()
            : base(Key)
        {
        }
    }
}