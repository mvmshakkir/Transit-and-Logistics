using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.Services.Columns
{
    [ColumnsScript("Services.Services")]
    [BasedOnRow(typeof(Entities.ServicesRow), CheckNames = true)]
    public class ServicesColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String ServiceName { get; set; }
    }
}