using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerExtraCore.Administration
{
    public partial class NotesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerExtraCore.Administration.NotesEditor";

        public NotesEditorAttribute()
            : base(Key)
        {
        }
    }
}