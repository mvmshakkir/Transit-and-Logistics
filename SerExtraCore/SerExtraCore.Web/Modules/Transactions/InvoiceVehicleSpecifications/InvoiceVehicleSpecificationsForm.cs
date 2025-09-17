
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.InvoiceVehicleSpecifications")]
    [BasedOnRow(typeof(Entities.InvoiceVehicleSpecificationsRow), CheckNames = true)]
    public class InvoiceVehicleSpecificationsForm
    {
        public Int32 InvoiceVehicleDetailId { get; set; }
        public Int32 SpecificationId { get; set; }
    }
}