
namespace SerExtraCore.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.VehicleSpecifications")]
    [BasedOnRow(typeof(Entities.VehicleSpecificationsRow), CheckNames = true)]
    public class VehicleSpecificationsForm
    {
        public Int32 VehicleId { get; set; }
        public Int32 SpecificationId { get; set; }


    }
}