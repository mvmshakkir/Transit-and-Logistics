using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.PumpDetails.Columns
{
    [ColumnsScript("PumpDetails.PumpDetails")]
    [BasedOnRow(typeof(Entities.PumpDetailsRow), CheckNames = true)]
    public class PumpDetailsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String PumpName { get; set; }
        public String PumpPlace { get; set; }
        public String Address { get; set; }
    }
}