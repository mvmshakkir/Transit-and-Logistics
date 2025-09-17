
namespace SerExtraCore.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.ShippingAreas")]
    [BasedOnRow(typeof(Entities.ShippingAreasRow), CheckNames = true)]
    public class ShippingAreasForm
    {
        public String AreaName { get; set; }
        public String Description { get; set; }
    }
}