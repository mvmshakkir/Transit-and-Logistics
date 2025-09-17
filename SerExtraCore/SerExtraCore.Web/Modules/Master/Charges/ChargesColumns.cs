
namespace SerExtraCore.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Charges")]
    [BasedOnRow(typeof(Entities.ChargesRow), CheckNames = true)]
    public class ChargesColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public String ChargeName { get; set; }
        public String Description { get; set; }

        public String TaxCode { get; set; }
    }
}