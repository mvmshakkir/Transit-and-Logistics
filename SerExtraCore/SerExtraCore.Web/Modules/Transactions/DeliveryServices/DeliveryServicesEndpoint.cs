
namespace SerExtraCore.Transactions.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.DeliveryServicesRepository;
    using MyRow = Entities.DeliveryServicesRow;
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Web.Modules;
    using SerExtraCore.Administration.Entities;

    [Route("Services/Transactions/DeliveryServices/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class DeliveryServicesController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            if (request.Entity.PaymentTypeA != null)
            {
                if (request.Entity.PaymentTypeA != PymentTypes.Cheque)
                {
                    request.Entity.Receipts = new System.Collections.Generic.List<ReceiptRow>();
                    Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
                    receiptRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 1).voucherno;
                    receiptRow.TrxDate = request.Entity.TrxDate;
                    receiptRow.Amount = request.Entity.TotalAmount;

                    var account = uow.Connection.ById<AccountsRow>(request.Entity.AccountId);
                    receiptRow.DebitAccountHeadId = account.AccountHeadId;
                    receiptRow.DebitAccountId = request.Entity.AccountId;
                    receiptRow.PaymentMethod = (AccountTypes)((int)request.Entity.PaymentType);
                    var config = uow.Connection.ById<ConfigurationRow>(1);
                    receiptRow.CreditAccountHeadId = config.InvoiceCollectionLedgerId;
                    receiptRow.EntityType = request.Entity.Table;
                    receiptRow.VType = 1;
                    receiptRow.CustomerId = request.Entity.ConsigneeId;
                    receiptRow.Remarks = "Delivey Payment  ,Bill No:" + request.Entity.BillNo + "";
                    request.Entity.Receipts.Add(receiptRow);
                }
            }
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            if (request.Entity.PaymentTypeA != null)
            {
                if (request.Entity.PaymentTypeA != PymentTypes.Cheque)
                {
                    if (request.Entity.Receipts == null)
                    {
                        request.Entity.Receipts = new System.Collections.Generic.List<ReceiptRow>();
                    }

                    if (request.Entity.Receipts.Count == 0)
                    {
                        Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
                        receiptRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 1).voucherno;
                        receiptRow.TrxDate = request.Entity.TrxDate;
                        receiptRow.Amount = request.Entity.TotalAmount;

                        var account = uow.Connection.ById<AccountsRow>(request.Entity.AccountId);
                        receiptRow.DebitAccountHeadId = account.AccountHeadId;
                        receiptRow.DebitAccountId = request.Entity.AccountId;
                        receiptRow.PaymentMethod = (AccountTypes)((int)request.Entity.PaymentType);
                        var config = uow.Connection.ById<ConfigurationRow>(1);
                        receiptRow.CreditAccountHeadId = config.InvoiceCollectionLedgerId;
                        receiptRow.EntityType = request.Entity.Table;
                        receiptRow.VType = 1;
                        receiptRow.CustomerId = request.Entity.ConsigneeId;
                        receiptRow.Remarks = "Delivey Payment  ,Bill No:" + request.Entity.BillNo + "";
                        request.Entity.Receipts.Add(receiptRow);
                    }
                    else
                    {
                        request.Entity.Receipts[0].TrxDate = request.Entity.TrxDate;
                        request.Entity.Receipts[0].Amount = request.Entity.TotalAmount;

                        var account = uow.Connection.ById<AccountsRow>(request.Entity.AccountId);
                        request.Entity.Receipts[0].DebitAccountHeadId = account.AccountHeadId;
                        request.Entity.Receipts[0].DebitAccountId = request.Entity.AccountId;
                        request.Entity.Receipts[0].PaymentMethod = (AccountTypes)((int)request.Entity.PaymentType);
                        var config = uow.Connection.ById<ConfigurationRow>(1);
                        request.Entity.Receipts[0].CreditAccountHeadId = config.InvoiceCollectionLedgerId;
                        request.Entity.Receipts[0].EntityType = request.Entity.Table;
                        request.Entity.Receipts[0].CustomerId = request.Entity.ConsigneeId;
                        request.Entity.Receipts[0].Remarks = "Delivey Payment  ,Bill No:" + request.Entity.BillNo + "";
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
            var r= new MyRepository().Retrieve(connection, request);
            return r;
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
        public GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request)
        {
            return new MyRepository().GetNextNumber(connection, request);
        }
    }
}
