using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.UOMAmount.Columns
{
    [ColumnsScript("UOMAmount.UOMAmount")]
    [BasedOnRow(typeof(Entities.UOMAmountRow), CheckNames = true)]

    public class UOMAmountColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }

        //[Hidden]
        //public String Materials { get; set; }
        [EditLink]
        public String UomUnit { get; set; }
        public Decimal Rate { get; set; }
    }
}