using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.States.Columns
{
    [ColumnsScript("States.States")]
    [BasedOnRow(typeof(Entities.StatesRow), CheckNames = true)]
    public class StatesColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
       
        [EditLink]
        public String Name { get; set; }
        public String Code { get; set; }
        public String CountryCountryCode { get; set; }
    }
}