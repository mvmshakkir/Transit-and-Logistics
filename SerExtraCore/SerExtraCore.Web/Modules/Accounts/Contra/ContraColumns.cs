
namespace SerExtraCore.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.Contra")]
    [BasedOnRow(typeof(Entities.ContraRow), CheckNames = true)]
    public class ContraColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        //public Int32 VType { get; set; }
        [EditLink]
        public Int32 VNo { get; set; }
        //public String DebitAccountHeadDescription { get; set; }
        //public String CreditAccountHeadDescription { get; set; }
        [EditLink]
        public DateTime TrxDate { get; set; }
        public String DebitAccountAccountName { get; set; }
        public Decimal Amount { get; set; }
        public String CreditAccountAccountName { get; set; }
    }
}