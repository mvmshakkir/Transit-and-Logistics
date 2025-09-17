
namespace SerExtraCore.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Accounts.AccountHeads")]
    [BasedOnRow(typeof(Entities.AccountHeadsRow), CheckNames = true)]
    public class AccountHeadsForm
    {
        [HalfWidth]
        public String Code { get; set; }
        [HalfWidth]
        public String Description { get; set; }
        [HalfWidth]
        public Int32 ParentHeadId { get; set; }
        [HalfWidth]
        public Int32 LedgerType { get; set; }
    }
}