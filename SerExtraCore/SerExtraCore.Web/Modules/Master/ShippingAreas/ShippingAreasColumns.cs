
namespace SerExtraCore.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.ShippingAreas")]
    [BasedOnRow(typeof(Entities.ShippingAreasRow), CheckNames = true)]
    public class ShippingAreasColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public String AreaName { get; set; }
        public String Description { get; set; }
    }
}