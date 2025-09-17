namespace SerExtraCore.Accounts
{
    using Serenity.Services;
    using System;

    public class BankReconciliationRequest : ListRequest
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public Int32? AccountId { get; set; }
    }
}
