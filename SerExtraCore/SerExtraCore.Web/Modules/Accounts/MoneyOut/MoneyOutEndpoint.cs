 

namespace SerExtraCore.Accounts.Endpoints
{
    using Newtonsoft.Json;
    using System.Net.Http;
    using System.Text;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.MoneyOutRepository;
    using MyRow = Entities.MoneyOutRow;
    using SerExtraCore.Web.Modules;
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Administration.Entities;
    using System.Collections.Generic;

    [Route("Services/Accounts/MoneyOut/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class MoneyOutController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.VNo = new DataHelper().GeRANDPNo(uow.Connection, 2).voucherno;

            var account = uow.Connection.ById<AccountsRow>(request.Entity.AccountId);
            int vno = new DataHelper().GetVoucherNo(uow.Connection, 2).voucherno - 1;

            request.Entity.Payments = new System.Collections.Generic.List<PaymentRow>();
            Accounts.Entities.PaymentRow paymentRow = new Accounts.Entities.PaymentRow();
            paymentRow.VNo = vno = vno + 1;
            paymentRow.TrxDate = request.Entity.TrxDate;
            paymentRow.Amount = request.Entity.Amount;


            paymentRow.CreditAccountHeadId = account.AccountHeadId;
            paymentRow.CreditAccountId = request.Entity.AccountId;
            paymentRow.PaymentMethod = (AccountTypes)((int)request.Entity.PaymentMethod);


            paymentRow.DebitAccountHeadId = request.Entity.AccountHeadId;
            paymentRow.EntityType = request.Entity.Table;
            paymentRow.VType = 2;

            paymentRow.CustomerId = request.Entity.CustomerId;
            paymentRow.EmployeeId = request.Entity.EmployeeId;

            paymentRow.VehicleId = request.Entity.VehicleId;
            paymentRow.SupplierId = request.Entity.SupplierId;
            paymentRow.ConsignmentId = request.Entity.ConsignmentId;

            paymentRow.Remarks = request.Entity.Remarks;
            request.Entity.Payments.Add(paymentRow);


            if (request.Entity.TaxAmount > 0)
            {
                var config = uow.Connection.ById<ConfigurationRow>(1);

                Accounts.Entities.PaymentRow paymenttaxRow = new Accounts.Entities.PaymentRow();
                paymenttaxRow.VNo = vno = vno + 1;
                paymenttaxRow.TrxDate = request.Entity.TrxDate;
                paymenttaxRow.Amount = request.Entity.TaxAmount;


                paymenttaxRow.CreditAccountHeadId = account.AccountHeadId;
                paymenttaxRow.CreditAccountId = request.Entity.AccountId;
                paymenttaxRow.PaymentMethod = (AccountTypes)((int)request.Entity.PaymentMethod);


                paymenttaxRow.DebitAccountHeadId = config.TaxLedgerId;
                paymenttaxRow.EntityType = request.Entity.Table;
                paymenttaxRow.VType = 2;

                paymenttaxRow.CustomerId = request.Entity.CustomerId;
                paymenttaxRow.EmployeeId = request.Entity.EmployeeId;
                paymenttaxRow.VehicleId = request.Entity.VehicleId;
                paymenttaxRow.SupplierId = request.Entity.SupplierId;



                paymenttaxRow.Remarks = "Payment Tax,VNo:" + request.Entity.VNo + "";
                request.Entity.Payments.Add(paymenttaxRow);


            }


            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            if (request.Entity.Payments.Count > 0)
            {
                request.Entity.Payments[0].TrxDate = request.Entity.TrxDate;
                request.Entity.Payments[0].Amount = request.Entity.Amount;

                var account = uow.Connection.ById<AccountsRow>(request.Entity.AccountId);
                request.Entity.Payments[0].CreditAccountHeadId = account.AccountHeadId;
                request.Entity.Payments[0].CreditAccountId = request.Entity.AccountId;
                request.Entity.Payments[0].PaymentMethod = (AccountTypes)((int)request.Entity.PaymentMethod);


                request.Entity.Payments[0].DebitAccountHeadId = request.Entity.AccountHeadId;

                request.Entity.Payments[0].CustomerId = request.Entity.CustomerId;
                request.Entity.Payments[0].EmployeeId = request.Entity.EmployeeId;
                request.Entity.Payments[0].SupplierId = request.Entity.SupplierId;
                request.Entity.Payments[0].VehicleId = request.Entity.VehicleId;
                request.Entity.Payments[0].ConsignmentId = request.Entity.ConsignmentId;
                request.Entity.Payments[0].Remarks = request.Entity.Remarks;
                if (request.Entity.Payments.Count > 1)
                {
                    request.Entity.Payments[1].TrxDate = request.Entity.TrxDate;
                    request.Entity.Payments[1].Amount = request.Entity.TaxAmount;


                    request.Entity.Payments[1].CreditAccountHeadId = account.AccountHeadId;
                    request.Entity.Payments[1].CreditAccountId = request.Entity.AccountId;
                    request.Entity.Payments[1].PaymentMethod = (AccountTypes)((int)request.Entity.PaymentMethod);


                    request.Entity.Payments[1].CustomerId = request.Entity.CustomerId;
                    request.Entity.Payments[1].EmployeeId = request.Entity.EmployeeId;
                    request.Entity.Payments[1].EmployeeId = request.Entity.EmployeeId;
                    request.Entity.Payments[1].ConsignmentId = request.Entity.ConsignmentId;
                    request.Entity.Payments[1].VehicleId = request.Entity.VehicleId;
                }
                else
                {
                    if (request.Entity.TaxAmount > 0)
                    {
                        var config = uow.Connection.ById<ConfigurationRow>(1);

                        Accounts.Entities.PaymentRow paymenttaxRow = new Accounts.Entities.PaymentRow();
                        paymenttaxRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 2).voucherno;
                        paymenttaxRow.TrxDate = request.Entity.TrxDate;
                        paymenttaxRow.Amount = request.Entity.TaxAmount;


                        paymenttaxRow.CreditAccountHeadId = account.AccountHeadId;
                        paymenttaxRow.CreditAccountId = request.Entity.AccountId;
                        paymenttaxRow.PaymentMethod = (AccountTypes)((int)request.Entity.PaymentMethod);


                        paymenttaxRow.DebitAccountHeadId = config.TaxLedgerId;
                        paymenttaxRow.EntityType = request.Entity.Table;
                        paymenttaxRow.VType = 2;

                        paymenttaxRow.CustomerId = request.Entity.CustomerId;
                        paymenttaxRow.EmployeeId = request.Entity.EmployeeId;
                        paymenttaxRow.VehicleId = request.Entity.VehicleId;
                        paymenttaxRow.SupplierId = request.Entity.SupplierId;
                        paymenttaxRow.ConsignmentId = request.Entity.ConsignmentId;


                        paymenttaxRow.Remarks = "Payment Tax,VNo:" + request.Entity.VNo + "";
                        request.Entity.Payments.Add(paymenttaxRow);
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
            request.EqualityFilter.Add("VType", 2);
            return new MyRepository().List(connection, request);
        }
    }
}
