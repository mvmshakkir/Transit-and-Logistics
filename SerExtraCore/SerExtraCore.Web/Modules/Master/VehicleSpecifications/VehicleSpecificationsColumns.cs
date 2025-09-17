
namespace SerExtraCore.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.VehicleSpecifications")]
    [BasedOnRow(typeof(Entities.VehicleSpecificationsRow), CheckNames = true)]
    public class VehicleSpecificationsColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        public String VehicleVehicleNumber { get; set; }
        public String SpecificationSpecifications { get; set; }
    }
}