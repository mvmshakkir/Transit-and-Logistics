
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.ConsignmentVehicleSpecifications")]
    [BasedOnRow(typeof(Entities.ConsignmentVehicleSpecificationsRow), CheckNames = true)]
    public class ConsignmentVehicleSpecificationsForm
    {
        public Int32 ConsignmentVehicleDetailId { get; set; }
        public Int32 SpecificationId { get; set; }
    }
}