using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.UOM.Columns
{
    [ColumnsScript("UOM.UOM")]
    [BasedOnRow(typeof(Entities.UOMRow), CheckNames = true)]
    public class UOMColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String Unit { get; set; }
    }
}