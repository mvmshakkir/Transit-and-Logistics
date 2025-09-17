
namespace SerExtraCore.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.Accounts")]
    [BasedOnRow(typeof(Entities.AccountsRow), CheckNames = true)]
    public class AccountsColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public Int32 Type { get; set; }
        [EditLink]
        public String AccountName { get; set; }
        [EditLink]
        public String AccountNo { get; set; }
        public String BankName { get; set; }
        public String BrachName { get; set; }
        public String AccountHeadDescription { get; set; }
    }
}