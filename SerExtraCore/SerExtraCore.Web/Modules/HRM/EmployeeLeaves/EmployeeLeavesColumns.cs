
namespace SerExtraCore.HRM.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("HRM.EmployeeLeaves")]
    [BasedOnRow(typeof(Entities.EmployeeLeavesRow), CheckNames = true)]
    public class EmployeeLeavesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String EmployeeEmployeeCode { get; set; }
        [EditLink]
        public String EmployeeEmployeeName{ get; set; }
    public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public Int32 Days { get; set; }
        public String Remarks { get; set; }
       
    }
}