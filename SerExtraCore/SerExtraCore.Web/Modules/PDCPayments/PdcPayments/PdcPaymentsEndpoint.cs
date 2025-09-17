
namespace SerExtraCore.PDCPayments.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.PdcPaymentsRepository;
    using MyRow = Entities.PdcPaymentsRow;
    using SerExtraCore.Web.Modules;
    using System.Collections.Generic;
    using SerExtraCore.PDCPayments.Entities;
    using System;
    using Serenity.Reporting;
    using Serenity.Web;
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Administration.Entities;

    [Route("Services/PDCPayments/PdcPayments/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class PdcPaymentsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            foreach (var che in request.Entity.PdcPaymentDetails)
            {
                if (che.ChequeStatus == ChequeStatus.Cleared)
                {
                    if (che.ChequeType == ChequeType.Payment)
                    {
                        che.Payment = new System.Collections.Generic.List<PaymentRow>();
                        Accounts.Entities.PaymentRow receiptRow = new Accounts.Entities.PaymentRow();
                        receiptRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 2).voucherno;
                        receiptRow.TrxDate = che.Date;
                        receiptRow.Amount = che.Amount;

                        var account = uow.Connection.ById<AccountsRow>(che.AccountId);
                        receiptRow.CreditAccountHeadId = account.AccountHeadId;
                        receiptRow.CreditAccountId = che.AccountId;
                        int ptype = (int)che.PaymentType;
                        receiptRow.PaymentMethod = (AccountTypes)ptype;
                        var config = uow.Connection.ById<ConfigurationRow>(1);
                        receiptRow.DebitAccountHeadId = config.PDCWithdrawalsLedger;
                        receiptRow.VType = 2;
                        receiptRow.EntityType = che.Table;
                        receiptRow.SupplierId = request.Entity.SupplierId;
                        receiptRow.Remarks = "Cheque No:" + che.ChequeNo + ",PDC Payment,PDC Number:" + request.Entity.PdcNumber + "";
                        che.Payment.Add(receiptRow);
                    }
                    else
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
                       
                        receiptRow.Remarks = "Cheque No:" + che.ChequeNo + ",PDC Receipt,PDC Number:" + request.Entity.PdcNumber + "";
                        che.Receipts.Add(receiptRow);
                    }
                }
            }
            return new MyRepository().Create(uow, request);

        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            foreach (var che in request.Entity.PdcPaymentDetails)
            {
                if (che.ChequeStatus == ChequeStatus.Cleared)
                {
                    if (che.ChequeType == ChequeType.Payment)
                    {
                        if (che.Payment.Count != 0)
                        {
                            che.Payment[0].TrxDate = che.Date;
                            che.Payment[0].Amount = che.Amount;

                            var account = uow.Connection.ById<AccountsRow>(che.AccountId);
                            che.Payment[0].CreditAccountHeadId = account.AccountHeadId;
                            che.Payment[0].CreditAccountId = che.AccountId;
                            int ptype = (int)che.PaymentType;
                            che.Payment[0].PaymentMethod = (AccountTypes)ptype;
                            che.Payment[0].SupplierId = request.Entity.SupplierId;
                            che.Payment[0].Remarks = "Cheque No:" + che.ChequeNo + ",PDC Payment,PDC Number:" + request.Entity.PdcNumber + "";

                        }
                        else
                        {
                            che.Payment = new System.Collections.Generic.List<PaymentRow>();
                            Accounts.Entities.PaymentRow receiptRow = new Accounts.Entities.PaymentRow();
                            receiptRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 2).voucherno;
                            receiptRow.TrxDate = che.Date;
                            receiptRow.Amount = che.Amount;

                            var account = uow.Connection.ById<AccountsRow>(che.AccountId);
                            receiptRow.CreditAccountHeadId = account.AccountHeadId;
                            receiptRow.CreditAccountId = che.AccountId;
                            int ptype = (int)che.PaymentType;
                            receiptRow.PaymentMethod = (AccountTypes)ptype;
                            var config = uow.Connection.ById<ConfigurationRow>(1);
                            receiptRow.DebitAccountHeadId = config.PDCWithdrawalsLedger;
                            receiptRow.VType = 2;
                            receiptRow.EntityType = che.Table;
                            receiptRow.SupplierId = request.Entity.SupplierId;
                            receiptRow.Remarks = "Cheque No:" + che.ChequeNo + ",PDC Payment,PDC Number:" + request.Entity.PdcNumber + "";
                            che.Payment.Add(receiptRow);
                            
                        }
                        if (che.Receipts != null)
                        {
                            if (che.Receipts.Count > 0)
                            {
                                che.Receipts = new System.Collections.Generic.List<ReceiptRow>();
                            }
                        }
                    }
                    else
                    {
                        if (che.Receipts.Count != 0)
                        {

                            che.Receipts[0].TrxDate = che.Date;
                            che.Receipts[0].Amount = che.Amount;
                            var account = uow.Connection.ById<AccountsRow>(che.AccountId);
                            che.Receipts[0].DebitAccountHeadId = account.AccountHeadId;
                            che.Receipts[0].DebitAccountId = che.AccountId;
                            che.Receipts[0].PaymentMethod = che.PaymentType;
                            
                            che.Receipts[0].Remarks = "Cheque No:" + che.ChequeNo + ",PDC Receipt,PDC Number:" + request.Entity.PdcNumber + "";

                        }
                        else
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
                            receiptRow.Remarks = "Cheque No:" + che.ChequeNo + ",PDC Receipt,PDC Number:" + request.Entity.PdcNumber + "";
                            che.Receipts.Add(receiptRow);
                        }
                        if (che.Payment != null)
                        {
                            if (che.Payment.Count > 0)
                            {
                                che.Payment = new System.Collections.Generic.List<PaymentRow>();
                            }
                        }
                    }
                }
                else
                {
                    if (che.Receipts != null)
                    {
                        if (che.Receipts.Count > 0)
                        {
                            che.Receipts = new System.Collections.Generic.List<ReceiptRow>();
                        }
                    }
                    if (che.Payment != null)
                    {
                        if (che.Payment.Count > 0)
                        {
                            che.Payment = new System.Collections.Generic.List<PaymentRow>();
                        }
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
            return new MyRepository().List(connection, request);
        }
        public GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request)
        {
            return new MyRepository().GetNextNumber(connection, request);
        }
        public List<PdcPaymentDetailsRow> GetDateList(IDbConnection connection, MonthDifferenceRequest request)
        {
            List<PdcPaymentDetailsRow> pdcPaymentDetailsRows = new List<PdcPaymentDetailsRow>();
            var lis = new List<DateTime>();
            for (int i = 1; i <= request.numberofmonths; i++)
            {
                PdcPaymentDetailsRow paymentDetailsRow = new PdcPaymentDetailsRow();
                paymentDetailsRow.Date = request.fromdatetime.AddMonths(i);
                paymentDetailsRow.Amount = request.amount;
                paymentDetailsRow.ChequeType = (ChequeType)request.pdctype;
                paymentDetailsRow.ChequeStatus = ChequeStatus.Issued;
                pdcPaymentDetailsRows.Add(paymentDetailsRow);

            }
            return pdcPaymentDetailsRows;
        }
        public MonthDifferenceResponce GetMonthDifference(IDbConnection connection, MonthDifferenceRequest request)
        {
            var result = ((request.todatetime.Year - request.fromdatetime.Year) * 12) + request.todatetime.Month - request.fromdatetime.Month;
            MonthDifferenceResponce monthDifferenceResponce = new MonthDifferenceResponce();
            monthDifferenceResponce.numberofmonths = result;
            return monthDifferenceResponce;
        }
        public MonthDifferenceRequest GetMonthTodate(IDbConnection connection, MonthDifferenceRequest request)
        {
            var result = request.fromdatetime.AddMonths(request.numberofmonths);
            MonthDifferenceRequest monthDifferenceResponce = new MonthDifferenceRequest();
            monthDifferenceResponce.todatetime = result;
            return monthDifferenceResponce;
        }
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.PdcPaymentsColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "PDCPayment_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
