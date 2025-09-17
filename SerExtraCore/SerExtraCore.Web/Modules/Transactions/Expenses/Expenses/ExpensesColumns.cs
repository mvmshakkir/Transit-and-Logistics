using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.Expenses.Columns
{
    [ColumnsScript("Expenses.Expenses")]
    [BasedOnRow(typeof(Entities.ExpensesRow), CheckNames = true)]
    public class ExpensesColumns
    {
        /*EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]*/
        //public Int32 Id { get; set; }
       
        //public String TsTsNo { get; set; }
        //public String FromPlaceAreaName { get; set; }
        //public String ToPlaceAreaName { get; set; }
        [EditLink]
        public String VehicleNumber { get; set; }
        [SortOrder(1, descending: true)]
        public DateTime Startdate { get; set; }
        public DateTime Enddate { get; set; }
        public String ExpenseRemarks { get; set; }
       
    }
}