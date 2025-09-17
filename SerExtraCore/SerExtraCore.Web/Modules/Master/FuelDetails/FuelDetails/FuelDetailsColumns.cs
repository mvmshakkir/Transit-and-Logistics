using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.FuelDetails.Columns
{
    [ColumnsScript("FuelDetails.FuelDetails")]
    [BasedOnRow(typeof(Entities.FuelDetailsRow), CheckNames = true)]
    public class FuelDetailsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        //public String TsTsNo { get; set; }
        [EditLink]
        public String SupplierName { get; set; }
        [Hidden]
        [EditLink]
        public String PumpName { get; set; }
        public DateTime Date { get; set; }
        public Decimal Qty { get; set; }
        public Decimal LiterRate { get; set; }
        public Decimal TotalAmt { get; set; }
    }
}