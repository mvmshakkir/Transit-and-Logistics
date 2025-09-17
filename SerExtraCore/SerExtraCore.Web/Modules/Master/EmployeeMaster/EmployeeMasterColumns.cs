
namespace SerExtraCore.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.EmployeeMaster")]
    [BasedOnRow(typeof(Entities.EmployeeMasterRow), CheckNames = true)]
    public class EmployeeMasterColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public String EmployeeCode { get; set; }
        public String EmployeeName { get; set; }
        public String Address { get; set; }
        public String CountryCountryName { get; set; }
        public Int32 EmployeeStatus { get; set; }
        public String EmployeeTypeType { get; set; }
        public String DesignationName { get; set; }
        public String ResidentId { get; set; }
        public DateTime RidExpiryDate { get; set; }
        public String PassportNumber { get; set; }
        public DateTime PassportExpiryDate { get; set; }
        public String MobileNumber { get; set; }
        public Decimal BasicSalary { get; set; }
        public Decimal Allowance { get; set; }
    }
}