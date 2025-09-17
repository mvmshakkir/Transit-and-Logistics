
namespace SerExtraCore.HRM.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.PayrollStructuresRepository;
    using MyRow = Entities.PayrollStructuresRow;
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Web.Modules;
    using SerExtraCore.Administration.Entities;
    using System.Linq;

    [Route("Services/HRM/PayrollStructures/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class PayrollStructuresController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            foreach (var payroll in request.Entity.PayrollPayment)
            {
                payroll.Payments = new System.Collections.Generic.List<PaymentRow>();
                Accounts.Entities.PaymentRow receiptRow = new Accounts.Entities.PaymentRow();
                
                int vno= new DataHelper().GetVoucherNo(uow.Connection, 2).voucherno;
                while(true)
                {
                    if(VnoExsist(request, vno))
                    {
                        vno= vno + 1;
                    }
                    else
                    {
                        break;
                    }
                }
                receiptRow.VNo = vno;
                receiptRow.TrxDate = payroll.TrxDate;
                receiptRow.Amount = payroll.Total;

                var account = uow.Connection.ById<AccountsRow>(payroll.AccountId);
                receiptRow.CreditAccountHeadId = account.AccountHeadId;
                receiptRow.CreditAccountId = payroll.AccountId;
                int ptype = (int)payroll.PaymentType;
                receiptRow.PaymentMethod = (AccountTypes)ptype;
                var config = uow.Connection.ById<ConfigurationRow>(1);
                receiptRow.DebitAccountHeadId = config.SalaryLedgerId;
                receiptRow.EntityType = payroll.Table;
                receiptRow.VType = 2;
                receiptRow.EmployeeId = payroll.EmployeeId;
                receiptRow.Remarks = "Payroll StructureName:"+request.Entity.StructureName;
                payroll.Payments.Add(receiptRow);
            }
            return new MyRepository().Create(uow, request);
        }
        public bool VnoExsist(SaveRequest<MyRow> request,int voucherno)
        {
            foreach(var item in request.Entity.PayrollPayment)
            {
                if (item.Payments != null)
                {
                    if (item.Payments.Any(i => i.VNo == voucherno))
                    {
                        return true;
                    }
                }
            }
            return false;

        }
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            foreach (var payroll in request.Entity.PayrollPayment)
            {
                if (payroll.Payments == null)
                {
                    payroll.Payments = new System.Collections.Generic.List<PaymentRow>();
                }
                if (payroll.Payments.Count > 0)
                {
                    payroll.Payments[0].TrxDate = payroll.TrxDate;
                    payroll.Payments[0].Amount = payroll.Total;
                    var config = uow.Connection.ById<ConfigurationRow>(1);
                    payroll.Payments[0].PaymentMethod = (AccountTypes)((int)payroll.PaymentType);
                    payroll.Payments[0].EmployeeId = payroll.EmployeeId;
                    payroll.Payments[0].Remarks = "Payroll StructureName:" + request.Entity.StructureName;
                    var account = uow.Connection.ById<AccountsRow>(payroll.AccountId);
                    payroll.Payments[0].CreditAccountHeadId = account.AccountHeadId;
                    payroll.Payments[0].CreditAccountId = payroll.AccountId;

                }
                else
                {
                    
                    Accounts.Entities.PaymentRow receiptRow = new Accounts.Entities.PaymentRow();
                    int vno = new DataHelper().GetVoucherNo(uow.Connection, 2).voucherno;
                    while (true)
                    {
                        if (VnoExsist(request, vno))
                        {
                            vno = vno + 1;
                        }
                        else
                        {
                            break;
                        }
                    }
                    receiptRow.VNo = vno;
                    
                    receiptRow.TrxDate = payroll.TrxDate;
                    receiptRow.Amount = payroll.Total;

                    var account = uow.Connection.ById<AccountsRow>(payroll.AccountId);
                    receiptRow.CreditAccountHeadId = account.AccountHeadId;
                    receiptRow.CreditAccountId = payroll.AccountId;
                    int ptype = (int)payroll.PaymentType;
                    receiptRow.PaymentMethod = (AccountTypes)ptype;
                    var config = uow.Connection.ById<ConfigurationRow>(1);
                    receiptRow.DebitAccountHeadId = config.SalaryLedgerId;
                    receiptRow.EntityType = payroll.Table;
                    receiptRow.VType = 2;
                    receiptRow.EmployeeId = payroll.EmployeeId;
                    receiptRow.Remarks = "Payroll StructureName:" + request.Entity.StructureName;
                    payroll.Payments.Add(receiptRow);
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
