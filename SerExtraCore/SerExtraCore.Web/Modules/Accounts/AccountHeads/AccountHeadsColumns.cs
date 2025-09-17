
namespace SerExtraCore.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.AccountHeads")]
    [BasedOnRow(typeof(Entities.AccountHeadsRow), CheckNames = true)]
    public class AccountHeadsColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public String Code { get; set; }
        public String Description { get; set; }
        public String ParentHeadDescription { get; set; }
        public Int32 LedgerType { get; set; }
    }
}