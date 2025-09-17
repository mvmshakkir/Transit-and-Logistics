
namespace SerExtraCore.Accounts.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.BankReconciliationRepository;
    using MyRow = Entities.BankReconciliationRow;
    using SerExtraCore.Web.Modules;
    using Serenity.Reporting;
    using Serenity.Web;
    using System;
    using System.Linq;

    [Route("Services/Accounts/BankReconciliation/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize("Accounts:BankReconciliation")]
    public class BankReconciliationController : ServiceEndpoint
    {
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            var r= new MyRepository().List(connection, request);
            return r;



        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.BankReconciliationColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "BankReconciliation_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
        [HttpPost]
        public bool UpdateStatus(IDbConnection connection, UpdateBankStatus request)
        {
            connection.Query("update je set BankReconciliation=case when isnull(je.BankReconciliation,0)=0 then 1 else 0 end from JournalEntries je where Id=" + request.TrxId + "");

            return true;
        }
        [HttpPost]
        public Decimal AccountOpening(IDbConnection connection, AccountOpeningRequest request)
        {
            if (request.AccountId > 0)
            {
                var q = "select sum(case when DebitAccountId=" + request.AccountId + " then Amount else 0 end - case when CreditAccountId=" + request.AccountId + " then Amount else 0 end) as Opening  from JournalEntries where (CreditAccountId=" + request.AccountId + " or DebitAccountId=" + request.AccountId + ") and TrxDate<" + request.FromDate.ToSqlDate() + "";


                    var r = connection.Query<decimal>("select isnull(sum(case when DebitAccountId=" + request.AccountId + " then Amount else 0 end - case when CreditAccountId=" + request.AccountId + " then Amount else 0 end),0) as Opening  from JournalEntries where (CreditAccountId=" + request.AccountId + " or DebitAccountId=" + request.AccountId + ") and TrxDate<" + request.FromDate.ToSqlDate() + "");
                    return r.ToList()[0];
            }
            return 0;
        }
    }
}
