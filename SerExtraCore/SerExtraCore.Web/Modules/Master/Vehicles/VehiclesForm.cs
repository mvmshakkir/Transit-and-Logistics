
namespace SerExtraCore.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Vehicles")]
    [BasedOnRow(typeof(Entities.VehiclesRow), CheckNames = true)]
    public class VehiclesForm
    {
        [Category("Vehicle Details")]
        [HalfWidth]
        public Int32 TypeOfVehicle { get; set; }
        [HalfWidth]
        public Int32 SupplierId { get; set; }
        [HalfWidth]
        public Int32 OwnerId { get;}
        [HalfWidth]
        public String VehicleNumber { get; set; }
        [HalfWidth]
        public string HSN {  get; set; }    
        [HalfWidth]
        public String PrimeMover { get; set; }
        [HalfWidth]
        public Int32 VehicleModel { get; set; }
      
        //[HalfWidth]
        //public String RegistraionNumber { get; set; }
        [HalfWidth]
        public String Description { get; set; }
        [Category("Specifications")]
        public List<Int32> VehicleSpecifications { get; set; }
        [Category("Other Details")]
        [HalfWidth]
        public DateTime RegistrationDate { get; set; }
        [HalfWidth]
        public DateTime ExpiryDate { get; set; }
        [HalfWidth]
        public Int32 Driver { get; set; }
        [HalfWidth]
        public Boolean PdoApproved { get; set; }
    }
}