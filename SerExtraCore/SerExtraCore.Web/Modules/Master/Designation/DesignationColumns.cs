
namespace SerExtraCore.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Designation")]
    [BasedOnRow(typeof(Entities.DesignationRow), CheckNames = true)]
    public class DesignationColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
    }
}