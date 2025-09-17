
namespace SerExtraCore.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.JVAdjustments")]
    [BasedOnRow(typeof(Entities.JVAdjustmentsRow), CheckNames = true)]
    public class JVAdjustmentsColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink, SortOrder(1, descending: true)]

        public DateTime TrxDate { get; set; }
        public Int32 VNo { get; set; }
        public String CustomerCustomerName { get; set; }
        public String EmployeeEmployeeName { get; set; }
        public String VehicleVehicleNumber { get; set; }
        public String DebitAccountHeadDescription { get; set; }
        public String DebitAccountAccountName { get; set; }

        public String CreditAccountHeadDescription { get; set; }
        public String CreditAccountAccountName { get; set; }

        public Decimal Amount { get; set; }
       
        
      
        

       
    }
}