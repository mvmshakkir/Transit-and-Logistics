
namespace SerExtraCore.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.VehicleModels")]
    [BasedOnRow(typeof(Entities.VehicleModelsRow), CheckNames = true)]
    public class VehicleModelsColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public String ModelName { get; set; }
        public String Description { get; set; }
    }
}