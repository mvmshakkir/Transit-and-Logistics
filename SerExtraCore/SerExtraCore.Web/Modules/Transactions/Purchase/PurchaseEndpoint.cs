
namespace SerExtraCore.Transactions.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.PurchaseRepository;
    using MyRow = Entities.PurchaseRow;
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Web.Modules;
    using SerExtraCore.Administration.Entities;
    using System.Linq;

    [Route("Services/Transactions/Purchase/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class PurchaseController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            if (request.Entity.PaidAmount > 0)
            {
                if (request.Entity.PaymentType != PymentTypes.Cheque)
                {
                    request.Entity.Payment = new System.Collections.Generic.List<PaymentRow>();
                    Accounts.Entities.PaymentRow receiptRow = new Accounts.Entities.PaymentRow();
                    receiptRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 2).voucherno;
                    receiptRow.TrxDate = request.Entity.TrxDate;
                    receiptRow.Amount = request.Entity.PaidAmount;

                    var account = uow.Connection.ById<AccountsRow>(request.Entity.AccountId);
                    receiptRow.CreditAccountHeadId = account.AccountHeadId;
                    receiptRow.CreditAccountId = request.Entity.AccountId;
                    receiptRow.PaymentMethod = (AccountTypes)((int)request.Entity.PaymentType);
                    var config = uow.Connection.ById<ConfigurationRow>(1);
                    receiptRow.DebitAccountHeadId = config.PurchaseLedgerId;
                    receiptRow.EntityType = request.Entity.Table;
                    receiptRow.VType = 2;
                    receiptRow.SupplierId = request.Entity.SupplierId;
                    receiptRow.Remarks = "Purchase Payment  ,Purchase No:" + request.Entity.RefNo + "";
                    request.Entity.Payment.Add(receiptRow);
                }
                else
                {
                    if (request.Entity.PdcPaymentDetails.Sum(i => i.Amount) != request.Entity.PaidAmount)
                    {
                        throw new ValidationError("Total PDC Amount should be equal to paid amount", "Total PDC Amount should be equal to paid amount");
                    }
                    foreach (var che in request.Entity.PdcPaymentDetails)
                    {
                        if (che.ChequeStatus == ChequeStatus.Cleared)
                        {
                            che.Payment = new System.Collections.Generic.List<PaymentRow>();
                            Accounts.Entities.PaymentRow receiptRow = new Accounts.Entities.PaymentRow();
                            receiptRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 2).voucherno;
                            receiptRow.TrxDate = che.Date;
                            receiptRow.Amount = che.Amount;

                            var account = uow.Connection.ById<AccountsRow>(che.AccountId);
                            receiptRow.CreditAccountHeadId = account.AccountHeadId;
                            receiptRow.CreditAccountId = che.AccountId;
                            receiptRow.PaymentMethod = che.PaymentType;
                            var config = uow.Connection.ById<ConfigurationRow>(1);
                            receiptRow.DebitAccountHeadId = config.PDCWithdrawalsLedger;
                            receiptRow.EntityType = che.Table;
                            receiptRow.VType = 2;
                            receiptRow.SupplierId = request.Entity.SupplierId;
                            receiptRow.Remarks = "Cheque No:" + che.ChequeNo + ",Purchase Payment, Purchase No: " + request.Entity.RefNo + "";
                            che.Payment.Add(receiptRow);
                        }
                    }
                }
            }
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            if (request.Entity.PaymentType == PymentTypes.Cheque)
            {
                if (request.Entity.PdcPaymentDetails.Sum(i => i.Amount) != request.Entity.PaidAmount)
                {
                    throw new ValidationError("Total PDC Amount should be equal to paid amount", "Total PDC Amount should be equal to paid amount");
                }
            }
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
                            che.Payment = new System.Collections.Generic.List<PaymentRow>();
                            Accounts.Entities.PaymentRow receiptRow = new Accounts.Entities.PaymentRow();
                            receiptRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 2).voucherno;
                            receiptRow.TrxDate = che.Date;
                            receiptRow.Amount = che.Amount;

                            var account = uow.Connection.ById<AccountsRow>(che.AccountId);
                            receiptRow.CreditAccountHeadId = account.AccountHeadId;
                            receiptRow.CreditAccountId = che.AccountId;
                            receiptRow.PaymentMethod = che.PaymentType;
                            var config = uow.Connection.ById<ConfigurationRow>(1);
                            receiptRow.DebitAccountHeadId = config.PDCWithdrawalsLedger;
                            receiptRow.EntityType = che.Table;
                            receiptRow.VType = 2;
                            receiptRow.SupplierId = request.Entity.SupplierId;
                            receiptRow.Remarks = "Cheque No:" + che.ChequeNo + ",Purchase Payment, Purchase No: " + request.Entity.RefNo + "";
                            che.Payment.Add(receiptRow);
                        }
                    }
                    if (request.Entity.Payment.Count > 0)
                    {
                        request.Entity.Payment = new System.Collections.Generic.List<PaymentRow>();

                    }
                }
                else
                {
                    if (request.Entity.Payment.Count > 0)
                    {
                        request.Entity.Payment[0].TrxDate = request.Entity.TrxDate;
                        request.Entity.Payment[0].Amount = request.Entity.PaidAmount;
                        var config = uow.Connection.ById<ConfigurationRow>(1);
                        request.Entity.Payment[0].DebitAccountHeadId = config.PurchaseLedgerId;
                        request.Entity.Payment[0].PaymentMethod = (AccountTypes)((int)request.Entity.PaymentType);
                        request.Entity.Payment[0].SupplierId = request.Entity.SupplierId;
                        var account = uow.Connection.ById<AccountsRow>(request.Entity.AccountId);
                        request.Entity.Payment[0].CreditAccountHeadId = account.AccountHeadId;
                        request.Entity.Payment[0].CreditAccountId = request.Entity.AccountId;

                    }
                    else
                    {
                        request.Entity.Payment = new System.Collections.Generic.List<PaymentRow>();
                        Accounts.Entities.PaymentRow receiptRow = new Accounts.Entities.PaymentRow();
                        receiptRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 2).voucherno;
                        receiptRow.TrxDate = request.Entity.TrxDate;
                        receiptRow.Amount = request.Entity.PaidAmount;

                        var account = uow.Connection.ById<AccountsRow>(request.Entity.AccountId);
                        receiptRow.CreditAccountHeadId = account.AccountHeadId;
                        receiptRow.CreditAccountId = request.Entity.AccountId;
                        receiptRow.PaymentMethod = (AccountTypes)((int)request.Entity.PaymentType);
                        var config = uow.Connection.ById<ConfigurationRow>(1);
                        receiptRow.CreditAccountHeadId = config.PurchaseLedgerId;
                        receiptRow.EntityType = request.Entity.Table;
                        receiptRow.VType = 2;
                        receiptRow.SupplierId = request.Entity.SupplierId;
                        receiptRow.Remarks = "Purchase Payment  ,Purchase No:" + request.Entity.RefNo + "";
                        request.Entity.Payment.Add(receiptRow);
                    }
                    foreach (var che in request.Entity.PdcPaymentDetails)
                    {
                        if (che.Payment != null)
                        {
                            che.Payment = new System.Collections.Generic.List<PaymentRow>();
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
                            if (che.Payment != null)
                            {
                                if (che.Payment.Count > 0)
                                {
                                    che.Payment[0].TrxDate = che.Date;
                                    che.Payment[0].Amount = che.Amount;
                                    var config = uow.Connection.ById<ConfigurationRow>(1);
                                    che.Payment[0].DebitAccountHeadId = config.PDCWithdrawalsLedger;
                                    che.Payment[0].PaymentMethod = che.PaymentType;
                                    che.Payment[0].SupplierId = request.Entity.SupplierId;
                                    var account = uow.Connection.ById<AccountsRow>(che.AccountId);
                                    che.Payment[0].CreditAccountHeadId = account.AccountHeadId;
                                    che.Payment[0].CreditAccountId = che.AccountId;
                                    che.Payment[0].Remarks = "Cheque No:" + che.ChequeNo + ",Purchase Payment, Purchase No: " + request.Entity.RefNo + "";
                                    addnew = false;

                                }
                            }
                            if (addnew)
                            {
                                che.Payment = new System.Collections.Generic.List<PaymentRow>();
                                Accounts.Entities.PaymentRow receiptRow = new Accounts.Entities.PaymentRow();
                                receiptRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 2).voucherno;
                                receiptRow.TrxDate = che.Date;
                                receiptRow.Amount = che.Amount;

                                var account = uow.Connection.ById<AccountsRow>(che.AccountId);
                                receiptRow.CreditAccountHeadId = account.AccountHeadId;
                                receiptRow.CreditAccountId = che.AccountId;
                                receiptRow.PaymentMethod = che.PaymentType;
                                var config = uow.Connection.ById<ConfigurationRow>(1);
                                receiptRow.DebitAccountHeadId = config.PDCWithdrawalsLedger;
                                receiptRow.EntityType = che.Table;
                                receiptRow.VType = 2;
                                receiptRow.SupplierId = request.Entity.SupplierId;
                                receiptRow.Remarks = "Cheque No:" + che.ChequeNo + ",Purchase Payment, Purchase No: " + request.Entity.RefNo + "";
                                che.Payment.Add(receiptRow);
                            }
                        }
                        else
                        {
                            if (che.Payment != null)
                            {
                                che.Payment = new System.Collections.Generic.List<PaymentRow>();
                            }
                        }
                    }

                }
                else
                {
                    if (request.Entity.Payment.Count > 0)
                    {
                        request.Entity.Payment[0].TrxDate = request.Entity.TrxDate;
                        request.Entity.Payment[0].Amount = request.Entity.PaidAmount;
                        var config = uow.Connection.ById<ConfigurationRow>(1);
                        request.Entity.Payment[0].DebitAccountHeadId = config.PurchaseLedgerId;
                        request.Entity.Payment[0].PaymentMethod = (AccountTypes)((int)request.Entity.PaymentType);
                        request.Entity.Payment[0].SupplierId = request.Entity.SupplierId;
                        var account = uow.Connection.ById<AccountsRow>(request.Entity.AccountId);
                        request.Entity.Payment[0].CreditAccountHeadId = account.AccountHeadId;
                        request.Entity.Payment[0].CreditAccountId = request.Entity.AccountId;
                        request.Entity.Payment[0].Remarks = "Purchase Payment  ,Purchase No:" + request.Entity.RefNo + "";

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
    }
}
