using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.States.Forms
{
    [FormScript("States.States")]
    [BasedOnRow(typeof(Entities.StatesRow), CheckNames = true)]
    public class StatesForm
    {

        public String Name { get; set; }
        public String Code { get; set; }
        public Int32 CountryId { get; set; }
    }
}