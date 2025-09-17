
namespace SerExtraCore.Master.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.CustomersRepository;
    using MyRow = Entities.CustomersRow;
    using Serenity.Reporting;
    using Serenity.Web;
    using System;
    using SerExtraCore.Web.Modules;
    using SerExtraCore.Administration.Entities;
    using SerExtraCore.Accounts.Entities;

    [Route("Services/Master/Customers/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CustomersController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            if (new DataHelper().CheckCustomerExsist(uow.Connection, request.Entity.CustomerName))
            {
                throw new ValidationError("Customer name already exists", "Customer name already exists");
            }
            //SET CUSTOMER CODE
            GetNextNumberRequest getNextNumberRequest = new GetNextNumberRequest();
            getNextNumberRequest.Prefix = "C";
            getNextNumberRequest.Length = 6;
            var c = new MyRepository().GetNextNumber(uow.Connection, getNextNumberRequest);
            request.Entity.CustomerCode = c.Serial;

            if (request.Entity.Opening != null)
            {

                if (request.Entity.Opening != 0)
                {
                    var config = uow.Connection.ById<ConfigurationRow>(1);
                    if (config.CustomerOpeningLedgerId == null)
                    {
                        throw new ValidationError("Please select Customer Opening Ledger", "Please select Customer Opening Ledger in Confoguration");
                    }
                    else
                    {
                        if (config.OpeningLedgerId == null)
                        {
                            throw new ValidationError("Please select Opening Ledger", "Please select Opening Ledger in Confoguration");
                        }
                        else
                        {

                            
                            var k = new DataHelper().GetVoucherNo(uow.Connection, 4);
                            request.Entity.jVAdjustmentsRow = new System.Collections.Generic.List<JVAdjustmentsRow>();
                            request.Entity.jVAdjustmentsRow.Add(new JVAdjustmentsRow { DebitAccountHeadId = config.CustomerOpeningLedgerId,CreditAccountHeadId=config.OpeningLedgerId,Amount=request.Entity.Opening,TrxDate=request.Entity.OpeningDate,VType=4,PaymentMethod= AccountTypes.Value1 ,VNo=k.voucherno,EntityType=request.Entity.Table,Remarks="Customer Opening(Customer Code:"+request.Entity.CustomerCode+",Name:"+request.Entity.CustomerName+"))"});


                        }
                    }
                }
            }
            
            var r= new MyRepository().Create(uow, request);
            var sql = "update JournalEntries set CustomerId=" + r.EntityId + " where OpeningCustomerId=" + r.EntityId + "";
            uow.Connection.Execute(sql);
            return r;
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            if (new DataHelper().CheckCustomerExsist(uow.Connection, request.Entity.CustomerName, request.Entity.Id??0))
            {
                throw new ValidationError("Customer name already exists", "Customer name already exists");
            }
            if (request.Entity.Opening != null)
            {
                if (request.Entity.jVAdjustmentsRow.Count > 0)
                {
                    request.Entity.jVAdjustmentsRow[0].Amount = request.Entity.Opening;
                    request.Entity.jVAdjustmentsRow[0].TrxDate = request.Entity.OpeningDate;
                    request.Entity.jVAdjustmentsRow[0].Remarks = "Customer Opening(Customer Code:" + request.Entity.CustomerCode + ",Name:" + request.Entity.CustomerName + "))";
                }
                else
                {
                    var config = uow.Connection.ById<ConfigurationRow>(1);
                    if (config.CustomerOpeningLedgerId == null)
                    {
                        throw new ValidationError("Please select Customer Opening Ledger", "Please select Customer Opening Ledger in Confoguration");
                    }
                    else
                    {
                        if (config.OpeningLedgerId == null)
                        {
                            throw new ValidationError("Please select Opening Ledger", "Please select Opening Ledger in Confoguration");
                        }
                        else
                        {


                            var k = new DataHelper().GetVoucherNo(uow.Connection, 4);
                            request.Entity.jVAdjustmentsRow = new System.Collections.Generic.List<JVAdjustmentsRow>();
                            request.Entity.jVAdjustmentsRow.Add(new JVAdjustmentsRow { DebitAccountHeadId = config.CustomerOpeningLedgerId, CreditAccountHeadId = config.OpeningLedgerId, Amount = request.Entity.Opening, TrxDate = request.Entity.OpeningDate, VType = 4, PaymentMethod = AccountTypes.Value1, VNo = k.voucherno, EntityType = request.Entity.Table, Remarks = "Customer Opening(Customer Code:" + request.Entity.CustomerCode + ",Name:" + request.Entity.CustomerName + "))" });

                        }
                    }
                }
            }
            else
            {
                request.Entity.jVAdjustmentsRow = new System.Collections.Generic.List<JVAdjustmentsRow>();
            }
            var r= new MyRepository().Update(uow, request);
            var sql = "update JournalEntries set CustomerId=" + r.EntityId + " where OpeningCustomerId=" + r.EntityId + "";
            uow.Connection.Execute(sql);
            return r;
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
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.CustomersColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "Customers_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}

