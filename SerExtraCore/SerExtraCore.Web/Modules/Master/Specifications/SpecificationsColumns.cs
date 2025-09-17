
namespace SerExtraCore.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Specifications")]
    [BasedOnRow(typeof(Entities.SpecificationsRow), CheckNames = true)]
    public class SpecificationsColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public String Specifications { get; set; }
        public String Description { get; set; }
    }
}