
namespace SerExtraCore.Accounts.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.ContraRepository;
    using MyRow = Entities.ContraRow;
    using SerExtraCore.Accounts.Entities;
    using Serenity.Web;
    using System;
    using Serenity.Reporting;
    using SerExtraCore.Web.Modules;

    [Route("Services/Accounts/Contra/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ContraController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.PaymentMethod = 1;
           
            request.Entity.VType = 3;
            

            var account=uow.Connection.ById<AccountsRow>(request.Entity.DebitAccountId);

       
            request.Entity.DebitAccountHeadId = account.AccountHeadId;

            

            var accountcr = uow.Connection.ById<AccountsRow>(request.Entity.CreditAccountId);
            request.Entity.CreditAccountHeadId = accountcr.AccountHeadId;

            var k= new DataHelper().GetVoucherNo(uow.Connection, 3);
            request.Entity.VNo = k.voucherno;

            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var account = uow.Connection.ById<AccountsRow>(request.Entity.DebitAccountId);
            request.Entity.DebitAccountHeadId = account.AccountHeadId;
            var accountcr = uow.Connection.ById<AccountsRow>(request.Entity.CreditAccountId);
            request.Entity.CreditAccountHeadId = accountcr.AccountHeadId;

            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            var c = new Criteria("VType") == 3;
            //var k = new ListRequest { Criteria = new Criteria("VType") == 1 };
            request.Criteria = c;
            return new MyRepository().List(connection, request);
        }
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.ContraColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "Contra_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
