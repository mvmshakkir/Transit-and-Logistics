
namespace SerExtraCore.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Accounts.Accounts")]
    [BasedOnRow(typeof(Entities.AccountsRow), CheckNames = true)]
    public class AccountsForm
    {
        [HalfWidth]
        public Int32 Type { get; set; }
        [HalfWidth]
        public String AccountName { get; set; }
        [HalfWidth]
        public String AccountNo { get; set; }
        [HalfWidth]
        public String BankName { get; set; }
        [HalfWidth]
        public String BrachName { get; set; }
        [HalfWidth]
        public Int32 AccountHeadId { get; set; }
    }
}