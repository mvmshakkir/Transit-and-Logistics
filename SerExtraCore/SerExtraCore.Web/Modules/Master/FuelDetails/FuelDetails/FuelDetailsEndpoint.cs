using Serenity;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using MyRepository = SerExtraCore.FuelDetails.Repositories.FuelDetailsRepository;
using MyRow = SerExtraCore.FuelDetails.Entities.FuelDetailsRow;
using SerExtraCore.Accounts.Entities;
using SerExtraCore.Administration.Entities;
using SerExtraCore.Web.Modules;

namespace SerExtraCore.FuelDetails.Endpoints
{
    [Route("Services/FuelDetails/FuelDetails/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class FuelDetailsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            request.Entity.Expenses = new System.Collections.Generic.List<PaymentRow>();


            var config = uow.Connection.ById<ConfigurationRow>(1);
            int creditvno = new DataHelper().GetVoucherNo(uow.Connection, 4).voucherno - 1;



            int cashvno = new DataHelper().GetVoucherNo(uow.Connection, 1).voucherno - 1;





            //if (request.Entity.TotalAmt > 0)
            //{


            //    Accounts.Entities.PaymentRow paymentRow = new Accounts.Entities.PaymentRow();
            //    paymentRow.VNo = creditvno = creditvno + 1;
            //    paymentRow.TrxDate = request.Entity.Date;
            //    paymentRow.Amount = request.Entity.TotalAmt;
            //    paymentRow.SupplierId = request.Entity.Supplierid;
            //    //int? lastFreightId = request.Entity.VehicleFreight.OrderByDescending(i => i.Id).FirstOrDefault()?.Id;

            //    //receiptRow.FreightId=item.Id;
            //    // receiptRow.PaymentMethod =AccountTypes.Value1;
            //    //var account = uow.Connection.ById<AccountsRow>(item1.DebitAccountId);
            //    //paymentRow.CreditAccountHeadId = account.AccountHeadId;
            //    // receiptRow.CreditAccountId = l.AccountId;
            //    paymentRow.DebitAccountId = null;

            //    paymentRow.CreditAccountId = null;

            //    paymentRow.CreditAccountHeadId = config.InvoiceLedgerId;


            //    paymentRow.DebitAccountHeadId = config.ReceivableLedgerId;
            //    paymentRow.EntityType = request.Entity.Table;
            //    paymentRow.VType = 4;

            //    paymentRow.CustomerId = request.Entity.PumpId;



            //    paymentRow.PaymentMethod = AccountTypes.Value1;
            //    paymentRow.Remarks = "Tripsheet No:" + request.Entity.TsNo + "";
            //    request.Entity.Expenses.Add(paymentRow);
            //}
                return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
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
