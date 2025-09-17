using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.CommissionPercentage.Columns
{
    [ColumnsScript("CommissionPercentage.CommissionPercentage")]
    [BasedOnRow(typeof(Entities.CommissionPercentageRow), CheckNames = true)]
    public class CommissionPercentageColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }

        [EditLink]

        public Decimal Percentage { get; set; }
    }
}