using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.Extr.Columns
{
    [ColumnsScript("Extr.Extr")]
    [BasedOnRow(typeof(Entities.ExtrRow), CheckNames = true)]
    public class ExtrColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Hidden]
        public Int32 Id { get; set; }
        [Hidden]
        public String SettlementidTsNumber { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Decimal Amount { get; set; }
    }
}