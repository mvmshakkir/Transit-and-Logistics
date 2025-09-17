
namespace SerExtraCore.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Outsource")]
    [BasedOnRow(typeof(Entities.OutsourceRow), CheckNames = true)]
    public class OutsourceColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        public Int32 Name { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}