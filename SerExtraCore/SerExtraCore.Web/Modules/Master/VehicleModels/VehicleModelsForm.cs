
namespace SerExtraCore.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.VehicleModels")]
    [BasedOnRow(typeof(Entities.VehicleModelsRow), CheckNames = true)]
    public class VehicleModelsForm
    {
        public String ModelName { get; set; }
        public String Description { get; set; }
    }
}