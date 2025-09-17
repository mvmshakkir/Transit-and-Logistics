using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.Crossing.Columns
{
    [ColumnsScript("Crossing.Crossing")]
    [BasedOnRow(typeof(Entities.CrossingRow), CheckNames = true)]
    public class CrossingColumns
    {
        [Hidden]
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        
        public Int32 Id { get; set; }
        [Hidden]
        public String SettlementidTsNumber { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Decimal Amount { get; set; }
    }
}