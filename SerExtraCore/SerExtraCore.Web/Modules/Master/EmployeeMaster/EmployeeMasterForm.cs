
namespace SerExtraCore.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.EmployeeMaster")]
    [BasedOnRow(typeof(Entities.EmployeeMasterRow), CheckNames = true)]
    public class EmployeeMasterForm
    {
        [Category("Personal Details")]
        [HalfWidth]
        public String EmployeeCode { get; set; }
        [HalfWidth]
        public String EmployeeName { get; set; }
        [HalfWidth]
        public String Address { get; set; }
        [HalfWidth]

        public Int32 CountryId { get; set; }
        [HalfWidth]
        public String MobileNumber { get; set; }
        [Category("Employee Details")]
        [HalfWidth]
        public Int32 EmployeeTypeId { get; set; }
        [HalfWidth]
        public Int32 DesignationId { get; set; }
        [HalfWidth]
        public Int32 EmployeeStatus { get; set; }
       
        [Category("Document Details")]
        [HalfWidth]
        public String ResidentId { get; set; }
        [HalfWidth]
        public DateTime RidExpiryDate { get; set; }
        [HalfWidth]
        public String PassportNumber { get; set; }
        [HalfWidth]
        public DateTime PassportExpiryDate { get; set; }
       
        [Category("Payment Details")]
        [HalfWidth]
        public Decimal BasicSalary { get; set; }
        [HalfWidth]
        public Decimal Allowance { get; set; }
    }
}