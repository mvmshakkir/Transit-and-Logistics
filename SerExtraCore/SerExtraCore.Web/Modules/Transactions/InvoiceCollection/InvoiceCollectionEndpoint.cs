
namespace SerExtraCore.Transactions.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.InvoiceCollectionRepository;
    using MyRow = Entities.InvoiceCollectionRow;
    using SerExtraCore.Web.Modules;
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Administration.Entities;
    using SerExtraCore.Transactions.Entities;
    using Serenity.Web;
    using Serenity.Reporting;
    using System;

    [Route("Services/Transactions/InvoiceCollection/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class InvoiceCollectionController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            if (request.Entity.PaymentType != PymentTypes.Cheque)
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
                receiptRow.CustomerId = request.Entity.CustomerId;
                receiptRow.Remarks = "Invoice Collection  ,Collection No:" + request.Entity.CollectionNumber + "";
                request.Entity.Receipts.Add(receiptRow);
            }
            else
            {
                foreach (var che in request.Entity.PdcPaymentDetails)
                {
                    if (che.ChequeStatus == ChequeStatus.Cleared)
                    {
                        che.Receipts = new System.Collections.Generic.List<ReceiptRow>();
                        Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
                        receiptRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 1).voucherno;
                        receiptRow.TrxDate = che.Date;
                        receiptRow.Amount = che.Amount;

                        var account = uow.Connection.ById<AccountsRow>(che.AccountId);
                        receiptRow.DebitAccountHeadId = account.AccountHeadId;
                        receiptRow.DebitAccountId = che.AccountId;
                        receiptRow.PaymentMethod = che.PaymentType;
                        var config = uow.Connection.ById<ConfigurationRow>(1);
                        receiptRow.CreditAccountHeadId = config.PDCDepositsLedger;
                        receiptRow.EntityType = che.Table;
                        receiptRow.VType = 1;
                        receiptRow.CustomerId = request.Entity.CustomerId;
                        receiptRow.Remarks = "Cheque No:" + che.ChequeNo + ",Invoice Collection  ,Collection No:" + request.Entity.CollectionNumber + "";
                        che.Receipts.Add(receiptRow);
                    }
                }
            }
            //set CollectionNumber
            GetNextNumberRequest getNextNumberRequest = new GetNextNumberRequest();
            getNextNumberRequest.Prefix = "C";
            getNextNumberRequest.Length = 6;
            var c = new MyRepository().GetNextNumber(uow.Connection, getNextNumberRequest);
            request.Entity.CollectionNumber = c.Serial;

            var r= new MyRepository().Create(uow, request);
            foreach(var k in request.Entity.DetailList)
            {
                InvoiceBalanceRequest invoiceBalanceRequest = new InvoiceBalanceRequest();
                invoiceBalanceRequest.invoiceid = k.InvoiceId ?? 0;
                invoiceBalanceRequest.onlyapproved = true;
                var amount = new DataHelper().InvoiceBalance(uow.Connection, invoiceBalanceRequest);
                if (amount.Balance <= 0)
                {
                    var invoice = uow.Connection.ById<InvoiceRow>(k.InvoiceId ?? 0);
                    invoice.PaymentStatus = PaymentStatus.Value2;
                    uow.Connection.UpdateById<InvoiceRow>(invoice);
                }
                
            }
            return r;
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            RetrieveRequest retrieveRequest = new RetrieveRequest();
            retrieveRequest.EntityId = request.EntityId;
            var exsist = Retrieve(uow.Connection, retrieveRequest);
            if (exsist.Entity.PaymentType != request.Entity.PaymentType)
            {
                if (request.Entity.PaymentType == PymentTypes.Cheque)
                {
                    foreach (var che in request.Entity.PdcPaymentDetails)
                    {
                        if (che.ChequeStatus == ChequeStatus.Cleared)
                        {
                            che.Receipts = new System.Collections.Generic.List<ReceiptRow>();
                            Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
                            receiptRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 1).voucherno;
                            receiptRow.TrxDate = che.Date;
                            receiptRow.Amount = che.Amount;

                            var account = uow.Connection.ById<AccountsRow>(che.AccountId);
                            receiptRow.DebitAccountHeadId = account.AccountHeadId;
                            receiptRow.DebitAccountId = che.AccountId;
                            receiptRow.PaymentMethod = che.PaymentType;
                            var config = uow.Connection.ById<ConfigurationRow>(1);
                            receiptRow.CreditAccountHeadId = config.PDCDepositsLedger;
                            receiptRow.EntityType = che.Table;
                            receiptRow.VType = 1;
                            receiptRow.CustomerId = request.Entity.CustomerId;
                            receiptRow.Remarks = "Cheque No:" + che.ChequeNo + ",Invoice Collection  ,Collection No:" + request.Entity.CollectionNumber + "";
                            che.Receipts.Add(receiptRow);
                        }
                    }
                    if (request.Entity.Receipts.Count > 0)
                    {
                        request.Entity.Receipts = new System.Collections.Generic.List<ReceiptRow>();

                    }
                }
                else
                {
                    if (request.Entity.Receipts.Count > 0)
                    {
                        request.Entity.Receipts[0].TrxDate = request.Entity.TrxDate;
                        request.Entity.Receipts[0].Amount = request.Entity.TotalAmount;
                        var config = uow.Connection.ById<ConfigurationRow>(1);
                        request.Entity.Receipts[0].CreditAccountHeadId = config.InvoiceCollectionLedgerId;
                        request.Entity.Receipts[0].PaymentMethod = (AccountTypes)((int)request.Entity.PaymentType);
                        request.Entity.Receipts[0].CustomerId = request.Entity.CustomerId;
                        var account = uow.Connection.ById<AccountsRow>(request.Entity.AccountId);
                        request.Entity.Receipts[0].DebitAccountHeadId = account.AccountHeadId;
                        request.Entity.Receipts[0].DebitAccountId = request.Entity.AccountId;

                    }
                    else
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
                        receiptRow.CustomerId = request.Entity.CustomerId;
                        receiptRow.Remarks = "Invoice Collection  ,Collection No:" + request.Entity.CollectionNumber + "";
                        request.Entity.Receipts.Add(receiptRow);
                    }
                    foreach (var che in request.Entity.PdcPaymentDetails)
                    {
                        if (che.Receipts != null)
                        {
                            che.Receipts = new System.Collections.Generic.List<ReceiptRow>();
                        }
                    }
                    request.Entity.PdcPaymentDetails = new System.Collections.Generic.List<PDCPayments.Entities.PdcPaymentDetailsRow>();
                }
            }
            else
            {
                if (request.Entity.PaymentType == PymentTypes.Cheque)
                {
                    foreach (var che in request.Entity.PdcPaymentDetails)
                    {
                        if (che.ChequeStatus == ChequeStatus.Cleared)
                        {
                            bool addnew = true;
                            if (che.Receipts != null)
                            {
                                if (che.Receipts.Count > 0)
                                {
                                    che.Receipts[0].TrxDate = che.Date;
                                    che.Receipts[0].Amount = che.Amount;
                                    var config = uow.Connection.ById<ConfigurationRow>(1);
                                    che.Receipts[0].CreditAccountHeadId = config.PDCDepositsLedger;
                                    che.Receipts[0].PaymentMethod = che.PaymentType;
                                    che.Receipts[0].CustomerId = request.Entity.CustomerId;
                                    var account = uow.Connection.ById<AccountsRow>(che.AccountId);
                                    che.Receipts[0].DebitAccountHeadId = account.AccountHeadId;
                                    che.Receipts[0].DebitAccountId = che.AccountId;
                                    addnew = false;

                                }
                            }
                            if (addnew)
                            {
                                che.Receipts = new System.Collections.Generic.List<ReceiptRow>();
                                Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
                                receiptRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 1).voucherno;
                                receiptRow.TrxDate = che.Date;
                                receiptRow.Amount = che.Amount;

                                var account = uow.Connection.ById<AccountsRow>(che.AccountId);
                                receiptRow.DebitAccountHeadId = account.AccountHeadId;
                                receiptRow.DebitAccountId = che.AccountId;
                                receiptRow.PaymentMethod = che.PaymentType;
                                var config = uow.Connection.ById<ConfigurationRow>(1);
                                receiptRow.CreditAccountHeadId = config.PDCDepositsLedger;
                                receiptRow.EntityType = che.Table;
                                receiptRow.VType = 1;
                                receiptRow.CustomerId = request.Entity.CustomerId;
                                receiptRow.Remarks = "Cheque No:" + che.ChequeNo + ",Invoice Collection  ,Collection No:" + request.Entity.CollectionNumber + "";
                                che.Receipts.Add(receiptRow);
                            }
                        }
                        else
                        {
                            if (che.Receipts != null)
                            {
                                che.Receipts = new System.Collections.Generic.List<ReceiptRow>();
                            }
                        }
                    }

                }
                else
                {
                    if (request.Entity.Receipts.Count > 0)
                    {
                        request.Entity.Receipts[0].TrxDate = request.Entity.TrxDate;
                        request.Entity.Receipts[0].Amount = request.Entity.TotalAmount;
                        var config = uow.Connection.ById<ConfigurationRow>(1);
                        request.Entity.Receipts[0].CreditAccountHeadId = config.InvoiceCollectionLedgerId;
                        request.Entity.Receipts[0].PaymentMethod = (AccountTypes)((int)request.Entity.PaymentType);
                        request.Entity.Receipts[0].CustomerId = request.Entity.CustomerId;
                        var account = uow.Connection.ById<AccountsRow>(request.Entity.AccountId);
                        request.Entity.Receipts[0].DebitAccountHeadId = account.AccountHeadId;
                        request.Entity.Receipts[0].DebitAccountId = request.Entity.AccountId;

                    }
                }
            }
           
            var r= new MyRepository().Update(uow, request);
            foreach (var k in request.Entity.DetailList)
            {
                InvoiceBalanceRequest invoiceBalanceRequest = new InvoiceBalanceRequest();
                invoiceBalanceRequest.invoiceid = k.InvoiceId ?? 0;
                invoiceBalanceRequest.onlyapproved = true;
                var amount = new DataHelper().InvoiceBalance(uow.Connection, invoiceBalanceRequest);
                var invoice = uow.Connection.ById<InvoiceRow>(k.InvoiceId ?? 0);
                if (amount.Balance <= 0)
                {
                    
                    invoice.PaymentStatus = PaymentStatus.Value2;
                    
                }
                else
                {
                    invoice.PaymentStatus = PaymentStatus.Value1;
                }
                uow.Connection.UpdateById<InvoiceRow>(invoice);

            }
            return r;
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            var invoicecollectionlist=uow.Connection.List<InvoiceCollectionDetailsRow>(new Criteria("InvoiceCollectionId="+request.EntityId+""));
            
            var r= new MyRepository().Delete(uow, request);
            foreach (var k in invoicecollectionlist)
            {
                InvoiceBalanceRequest invoiceBalanceRequest = new InvoiceBalanceRequest();
                invoiceBalanceRequest.invoiceid = k.InvoiceId ?? 0;
                invoiceBalanceRequest.onlyapproved = true;
                var amount = new DataHelper().InvoiceBalance(uow.Connection, invoiceBalanceRequest);
                var invoice = uow.Connection.ById<InvoiceRow>(k.InvoiceId ?? 0);
                if (amount.Balance <= 0)
                {

                    invoice.PaymentStatus = PaymentStatus.Value2;

                }
                else
                {
                    invoice.PaymentStatus = PaymentStatus.Value1;
                }
                uow.Connection.UpdateById<InvoiceRow>(invoice);

            }
            return r;
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
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
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.InvoiceCollectionColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "InvoiceCollection_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
