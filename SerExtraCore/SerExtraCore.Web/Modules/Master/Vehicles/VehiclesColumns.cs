
namespace SerExtraCore.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Reporting;

    [ColumnsScript("Master.Vehicles")]
    [BasedOnRow(typeof(Entities.VehiclesRow), CheckNames = true)]
    public class VehiclesColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public String VehicleNumber { get; set; }
        public String PrimeMover { get; set; }

        [EditLink]
        public Int32 TypeOfVehicle { get; set; }
        [EditLink]
        public String SupplierName { get; set; }
        [EditLink]
        public String ModelName { get; set; }
        public String RegistraionNumber { get; set; }
        public String Description { get; set; }
        public DateTime RegistrationDate { get; set; }
        public DateTime ExpiryDate { get; set; }
        public String DriverEmployeeName { get; set; }
        public Boolean PdoApproved { get; set; }
        [Width(250), VehicleSpecificationsFormater]
        public String VehicleSpecifications { get; set; }
    }
}