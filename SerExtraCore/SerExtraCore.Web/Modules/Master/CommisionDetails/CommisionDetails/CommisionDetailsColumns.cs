using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.CommisionDetails.Columns
{
    [ColumnsScript("CommisionDetails.CommisionDetails")]
    [BasedOnRow(typeof(Entities.CommisionDetailsRow), CheckNames = true)]
    public class CommisionDetailsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        //public String TsTsNo { get; set; }

        [EditLink]

        public String DriverEmployeeName { get; set; }
      
        public String MobileNumber { get; set; }
        public Decimal Percentage { get; set; }
        //public Decimal CommissionAmount { get; set; }
       



    }
}