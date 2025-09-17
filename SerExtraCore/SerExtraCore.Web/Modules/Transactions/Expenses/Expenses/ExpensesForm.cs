using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.Expenses.Forms
{
    [FormScript("Expenses.Expenses")]
    [BasedOnRow(typeof(Entities.ExpensesRow), CheckNames = true)]
    public class ExpensesForm
    {
        //public Int32 TsId { get; set; }
       
        public Int32 VehicleId { get; set; }
        public DateTime Startdate { get; set; }
        
        public DateTime Enddate { get; set; }
        //public Int32 FromPlace { get; set; }
        //public Int32 ToPlace { get; set; }
        public Int32 Expense { get; set; }
        public Decimal Profit { get; set; }
    }
}