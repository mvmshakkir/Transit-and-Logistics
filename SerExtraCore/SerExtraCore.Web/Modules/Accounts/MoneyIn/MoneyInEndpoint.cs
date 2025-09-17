
namespace SerExtraCore.Accounts.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.MoneyInRepository;
    using MyRow = Entities.MoneyInRow;
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Web.Modules;
    using SerExtraCore.Administration.Entities;

    [Route("Services/Accounts/MoneyIn/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class MoneyInController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.VNo = new DataHelper().GeRANDPNo(uow.Connection, 1).voucherno;

            var account = uow.Connection.ById<AccountsRow>(request.Entity.AccountId);
            int vno = new DataHelper().GetVoucherNo(uow.Connection, 1).voucherno - 1;

            request.Entity.Receipts = new System.Collections.Generic.List<ReceiptRow>();
            Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
            receiptRow.VNo = vno = vno + 1;
            receiptRow.TrxDate = request.Entity.TrxDate;
            receiptRow.Amount = request.Entity.Amount;

            //receiptRow.TsId = request.Entity.TsId;

            receiptRow.DebitAccountHeadId = account.AccountHeadId;
            receiptRow.DebitAccountId = request.Entity.AccountId;
            receiptRow.PaymentMethod = (AccountTypes)((int)request.Entity.PaymentMethod);


            receiptRow.CreditAccountHeadId = request.Entity.AccountHeadId;
            receiptRow.EntityType = request.Entity.Table;
            receiptRow.VType = 1;

            receiptRow.CustomerId = request.Entity.CustomerId;
            receiptRow.EmployeeId = request.Entity.EmployeeId;



            receiptRow.Remarks = request.Entity.Remarks;
            request.Entity.Receipts.Add(receiptRow);


            if (request.Entity.TaxAmount > 0)
            {
                var config = uow.Connection.ById<ConfigurationRow>(1);

                Accounts.Entities.ReceiptRow receipttaxRow = new Accounts.Entities.ReceiptRow();
                receipttaxRow.VNo = vno = vno + 1;
                receipttaxRow.TrxDate = request.Entity.TrxDate;
                receipttaxRow.Amount = request.Entity.TaxAmount;


                receipttaxRow.DebitAccountHeadId = account.AccountHeadId;
                receipttaxRow.DebitAccountId = request.Entity.AccountId;
                receipttaxRow.PaymentMethod = (AccountTypes)((int)request.Entity.PaymentMethod);


                receipttaxRow.CreditAccountHeadId = config.TaxLedgerId;
                receipttaxRow.EntityType = request.Entity.Table;
                receipttaxRow.VType = 1;

                receipttaxRow.CustomerId = request.Entity.CustomerId;
                receipttaxRow.EmployeeId = request.Entity.EmployeeId;



                receipttaxRow.Remarks = "Receipt Tax,VNo:" + request.Entity.VNo + "";
                request.Entity.Receipts.Add(receipttaxRow);


            }
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            if (request.Entity.Receipts.Count > 0)
            {
                request.Entity.Receipts[0].TrxDate = request.Entity.TrxDate;
                request.Entity.Receipts[0].Amount = request.Entity.Amount;

                var account = uow.Connection.ById<AccountsRow>(request.Entity.AccountId);
                request.Entity.Receipts[0].DebitAccountHeadId = account.AccountHeadId;
                request.Entity.Receipts[0].DebitAccountId = request.Entity.AccountId;
                request.Entity.Receipts[0].PaymentMethod = (AccountTypes)((int)request.Entity.PaymentMethod);


                request.Entity.Receipts[0].CreditAccountHeadId = request.Entity.AccountHeadId;

                request.Entity.Receipts[0].CustomerId = request.Entity.CustomerId;
                request.Entity.Receipts[0].EmployeeId = request.Entity.EmployeeId;
                request.Entity.Receipts[0].Remarks = request.Entity.Remarks;
                if (request.Entity.Receipts.Count > 1)
                {
                    request.Entity.Receipts[1].TrxDate = request.Entity.TrxDate;
                    request.Entity.Receipts[1].Amount = request.Entity.TaxAmount;


                    request.Entity.Receipts[1].DebitAccountHeadId = account.AccountHeadId;
                    request.Entity.Receipts[1].DebitAccountId = request.Entity.AccountId;
                    request.Entity.Receipts[1].PaymentMethod = (AccountTypes)((int)request.Entity.PaymentMethod);


                    request.Entity.Receipts[1].CustomerId = request.Entity.CustomerId;
                    request.Entity.Receipts[1].EmployeeId = request.Entity.EmployeeId;
                }
                else
                {
                    if (request.Entity.TaxAmount > 0)
                    {
                        var config = uow.Connection.ById<ConfigurationRow>(1);

                        Accounts.Entities.ReceiptRow receipttaxRow = new Accounts.Entities.ReceiptRow();
                        receipttaxRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 1).voucherno;
                        receipttaxRow.TrxDate = request.Entity.TrxDate;
                        receipttaxRow.Amount = request.Entity.TaxAmount;


                        receipttaxRow.DebitAccountHeadId = account.AccountHeadId;
                        receipttaxRow.DebitAccountId = request.Entity.AccountId;
                        receipttaxRow.PaymentMethod = (AccountTypes)((int)request.Entity.PaymentMethod);


                        receipttaxRow.CreditAccountHeadId = config.TaxLedgerId;
                        receipttaxRow.EntityType = request.Entity.Table;
                        receipttaxRow.VType = 1;

                        receipttaxRow.CustomerId = request.Entity.CustomerId;
                        receipttaxRow.EmployeeId = request.Entity.EmployeeId;



                        receipttaxRow.Remarks = "Receipt Tax,VNo:" + request.Entity.VNo + "";
                        request.Entity.Receipts.Add(receipttaxRow);
                    }
                }
            }

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
            var c = new Criteria("VType") == 1;
            if (request.EqualityFilter == null)
            {
                request.EqualityFilter = new System.Collections.Generic.Dictionary<string, object>();
            }
            //var k = new ListRequest { Criteria = new Criteria("VType") == 1 };
            request.EqualityFilter.Add("VType", 1);
            return new MyRepository().List(connection, request);
        }
    }
}
