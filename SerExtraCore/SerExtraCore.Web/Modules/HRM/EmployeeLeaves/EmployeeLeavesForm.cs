
namespace SerExtraCore.HRM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("HRM.EmployeeLeaves")]
    [BasedOnRow(typeof(Entities.EmployeeLeavesRow), CheckNames = true)]
    public class EmployeeLeavesForm
    {
        [HalfWidth]
        public Int32 EmployeeId { get; set; }
        [HalfWidth]
        public DateTime FromDate { get; set; }
        [HalfWidth]
        public DateTime ToDate { get; set; }
        [HalfWidth]
        public Int32 Days { get; set; }
        public String Remarks { get; set; }
        public String Attachments { get; set; }
    }
}