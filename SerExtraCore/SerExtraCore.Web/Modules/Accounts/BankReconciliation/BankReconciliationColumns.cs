
namespace SerExtraCore.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.BankReconciliationColumns")]
    [BasedOnRow(typeof(Entities.BankReconciliationRow), CheckNames = true)]
    public class BankReconciliationColumns
    {
        public Int32 Id { get; set; }

    
        public DateTime TrxDate { get; set; }
        public String AccountName { get; set; }
        public Int32 VNo { get; set; }
        public String Remarks { get; set; }
        public Decimal Debit { get; set; }
        public Decimal Credit { get; set; }
        public Boolean BankReconciliation { get; set; }



    }
}