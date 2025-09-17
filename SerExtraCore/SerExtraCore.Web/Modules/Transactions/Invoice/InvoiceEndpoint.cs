
namespace SerExtraCore.Transactions.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.InvoiceRepository;
    using MyRow = Entities.InvoiceRow;
    using SerExtraCore.Transactions.Entities;
    using Serenity.Reporting;
    using Serenity.Web;
    using System;
    using System.Linq;
    using Newtonsoft.Json;
    using System.Collections.Generic;
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Web.Modules;
    using SerExtraCore.Administration.Entities;

    [Route("Services/Transactions/Invoice/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class InvoiceController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            decimal duetotal = 0;

            if (request.Entity.InvoiceDues != null)
            {
                if (request.Entity.InvoiceDues.Count > 0)
                {
                    duetotal = request.Entity.InvoiceDues.Sum(i => i.Amount)??0;
                }
            }
            if (duetotal > 0)
            {
                if (request.Entity.BalanceAmount != duetotal)
                {
                    throw new ValidationError("Due total should be equal to total invoice amount");
                }
            }

            var consignid = request.Entity.ConsignmentId;

            // set invoice number
            GetNextNumberRequest getNextNumberRequest = new GetNextNumberRequest();
            getNextNumberRequest.Prefix = "I";
            getNextNumberRequest.Length = 6;
            var c = new MyRepository().GetNextNumber(uow.Connection, getNextNumberRequest);
            request.Entity.InvoiceNo = c.Serial;

            var config = uow.Connection.ById<ConfigurationRow>(1);
            int vno = new DataHelper().GetVoucherNo(uow.Connection, 1).voucherno - 1;

            decimal totaltax = request.Entity.InvoiceVehicleDetails.Sum(i => i.TaxAmount) ?? 0;
            totaltax = totaltax + request.Entity.ChargeDetailList.Sum(i => i.TaxAmount) ?? 0;
            totaltax = totaltax + request.Entity.InvoiceVehicleDetails.Sum(i => i.VehicleCharges.Sum(i => i.TaxAmount)) ?? 0;

            request.Entity.Receipts = new System.Collections.Generic.List<ReceiptRow>();
            Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
            receiptRow.VNo = vno = vno + 1;
            receiptRow.TrxDate = request.Entity.InvoiceDate;
            receiptRow.Amount = request.Entity.TotalAmount- totaltax;


            receiptRow.CreditAccountHeadId = config.InvoiceLedgerId;


            receiptRow.DebitAccountHeadId = config.ReceivableLedgerId;
            receiptRow.EntityType = request.Entity.Table;
            receiptRow.VType = 4;

            receiptRow.CustomerId = request.Entity.Billing;



            receiptRow.PaymentMethod = AccountTypes.Value1;
            receiptRow.Remarks = "Invoice No:"+request.Entity.InvoiceNo+"";
            request.Entity.Receipts.Add(receiptRow);

           

            if (totaltax > 0)
            {
                

                Accounts.Entities.ReceiptRow receipttaxRow = new Accounts.Entities.ReceiptRow();
                receipttaxRow.VNo = vno = vno + 1;
                receipttaxRow.TrxDate = request.Entity.InvoiceDate;
                receipttaxRow.Amount = totaltax;


                receipttaxRow.DebitAccountHeadId = config.ReceivableLedgerId;
              


                receipttaxRow.CreditAccountHeadId = config.TaxLedgerId;


                receipttaxRow.EntityType = request.Entity.Table;
                receipttaxRow.VType = 4;
                receipttaxRow.CustomerId = request.Entity.Billing;
                receipttaxRow.PaymentMethod = AccountTypes.Value1;


                receipttaxRow.Remarks = "Invoice Tax,InvoiceNo:" + request.Entity.InvoiceNo + "";
                request.Entity.Receipts.Add(receipttaxRow);


            }



            var r= new MyRepository().Create(uow, request);
            //var con=uow.Connection.ById<ConsignmentRow>(request.Entity.ConsignmentId);
            //con.Status = ConsignmentStatus.Value2;
            //uow.Connection.UpdateById<ConsignmentRow>(con);
            //var consignmentIds = request.Entity.ConsignmentId;

            //if (consignmentIds != null && consignmentIds.Count > 0)
            //{
            //    foreach (var consignmentId in consignmentIds)
            //    {
            //        var consignment = uow.Connection.ById<ConsignmentRow>(consignmentId);
            //        if (consignment != null)
            //        {
            //            consignment.Status = ConsignmentStatus.Value2;
            //            uow.Connection.UpdateById<ConsignmentRow>(consignment);
            //        }
            //    }
            //}
            var consignmentIds = request.Entity.ConsignmentId; // Assuming you meant ConsignmentIds

            if (consignmentIds != null && consignmentIds.Count > 0)
            {
                foreach (var consignmentId in consignmentIds)
                {
                    // Insert into InvoiceConsignment table
                    string insertSql = "INSERT INTO InvoiceConsignment (InvoiceId, ConsignmentId) VALUES (@InvoiceId, @ConsignmentId)";
                    uow.Connection.Execute(insertSql, new { InvoiceId = request.Entity.Id, ConsignmentId = consignmentId });

                    // Update consignment status
                    string updateSql = "UPDATE Consignment SET Status = @Status WHERE Id = @ConsignmentId";
                    uow.Connection.Execute(updateSql, new { Status = ConsignmentStatus.Value2, ConsignmentId = consignmentId });
                }
            }

            return r;

        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            decimal duetotal = 0;

            if (request.Entity.InvoiceDues != null)
            {
                if (request.Entity.InvoiceDues.Count > 0)
                {
                    duetotal = request.Entity.InvoiceDues.Sum(i => i.Amount) ?? 0;
                }
            }
            if (duetotal > 0)
            {
                if (request.Entity.BalanceAmount != duetotal)
                {
                    throw new ValidationError("Due total should be equal to total invoice amount");
                }
            }
            var invoice = uow.Connection.ById<InvoiceRow>(request.EntityId);
            bool perv = false;
            if (invoice.ConsignmentId != request.Entity.ConsignmentId)
            {
                perv = true;
            }
            decimal totaltax = request.Entity.InvoiceVehicleDetails.Sum(i => i.TaxAmount) ?? 0;
            totaltax = totaltax + request.Entity.ChargeDetailList.Sum(i => i.TaxAmount) ?? 0;
            totaltax = totaltax + request.Entity.InvoiceVehicleDetails.Sum(i => i.VehicleCharges.Sum(i => i.TaxAmount)) ?? 0;
            var config = uow.Connection.ById<ConfigurationRow>(1);
            int vno = new DataHelper().GetVoucherNo(uow.Connection, 1).voucherno - 1;
            if (request.Entity.Receipts.Count!=0)
            {
                if (request.Entity.Receipts.Count > 0)
                {
                    request.Entity.Receipts[0].TrxDate = request.Entity.InvoiceDate;
                    request.Entity.Receipts[0].Amount = request.Entity.TotalAmount - totaltax;



                    request.Entity.Receipts[0].DebitAccountHeadId = config.ReceivableLedgerId;

                    request.Entity.Receipts[0].CreditAccountHeadId = config.InvoiceLedgerId; 

                    request.Entity.Receipts[0].CustomerId = request.Entity.Billing;
                    request.Entity.Receipts[0].Remarks = request.Entity.Remarks;
                    if (request.Entity.Receipts.Count > 1)
                    {
                        if (totaltax > 0)
                        {
                            request.Entity.Receipts[1].TrxDate = request.Entity.InvoiceDate;
                            request.Entity.Receipts[1].Amount = totaltax;



                            request.Entity.Receipts[1].DebitAccountHeadId = config.ReceivableLedgerId;



                            request.Entity.Receipts[1].CreditAccountHeadId = config.TaxLedgerId;


                            request.Entity.Receipts[1].CustomerId = request.Entity.Billing;
                        }
                        else
                        {
                            request.Entity.Receipts.RemoveAt(1);
                        }
                    }
                    else
                    {

                        if (totaltax > 0)
                        {


                            Accounts.Entities.ReceiptRow receipttaxRow = new Accounts.Entities.ReceiptRow();
                            receipttaxRow.VNo = vno = vno + 1;
                            receipttaxRow.TrxDate = request.Entity.InvoiceDate;
                            receipttaxRow.Amount = totaltax;


                            receipttaxRow.DebitAccountHeadId = config.ReceivableLedgerId;



                            receipttaxRow.CreditAccountHeadId = config.TaxLedgerId;


                            receipttaxRow.EntityType = request.Entity.Table;
                            receipttaxRow.VType = 4;
                            receipttaxRow.CustomerId = request.Entity.Billing;
                            receipttaxRow.PaymentMethod = AccountTypes.Value1;


                            receipttaxRow.Remarks = "Invoice Tax,InvoiceNo:" + request.Entity.InvoiceNo + "";
                            request.Entity.Receipts.Add(receipttaxRow);


                        }
                    }
                }
            }
            else
            {
               
               
               

                request.Entity.Receipts = new System.Collections.Generic.List<ReceiptRow>();
                Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
                receiptRow.VNo = vno = vno + 1;
                receiptRow.TrxDate = request.Entity.InvoiceDate;
                receiptRow.Amount = request.Entity.TotalAmount - totaltax;


                receiptRow.CreditAccountHeadId = config.InvoiceLedgerId;


                receiptRow.DebitAccountHeadId = config.ReceivableLedgerId;
                receiptRow.EntityType = request.Entity.Table;
                receiptRow.VType = 4;

                receiptRow.CustomerId = request.Entity.Billing;



                receiptRow.PaymentMethod = AccountTypes.Value1;
                receiptRow.Remarks = request.Entity.Remarks;
                request.Entity.Receipts.Add(receiptRow);



                if (totaltax > 0)
                {


                    Accounts.Entities.ReceiptRow receipttaxRow = new Accounts.Entities.ReceiptRow();
                    receipttaxRow.VNo = vno = vno + 1;
                    receipttaxRow.TrxDate = request.Entity.InvoiceDate;
                    receipttaxRow.Amount = totaltax;


                    receipttaxRow.DebitAccountHeadId = config.ReceivableLedgerId;



                    receipttaxRow.CreditAccountHeadId = config.TaxLedgerId;


                    receipttaxRow.EntityType = request.Entity.Table;
                    receipttaxRow.VType = 4;
                    receipttaxRow.CustomerId = request.Entity.Billing;
                    receipttaxRow.PaymentMethod = AccountTypes.Value1;


                    receipttaxRow.Remarks = "Invoice Tax,InvoiceNo:" + request.Entity.InvoiceNo + "";
                    request.Entity.Receipts.Add(receipttaxRow);


                }
            }


            var r = new MyRepository().Update(uow, request);
            if (perv)
            {
               
                var conpre = uow.Connection.ById<ConsignmentRow>(invoice.ConsignmentId);
                conpre.Status = ConsignmentStatus.Value1;
                uow.Connection.UpdateById<ConsignmentRow>(conpre);

             
                var con = uow.Connection.ById<ConsignmentRow>(request.Entity.ConsignmentId);
                con.Status = ConsignmentStatus.Value2;
                uow.Connection.UpdateById<ConsignmentRow>(con);
            }
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
            var r= new MyRepository().Retrieve(connection, request);
            r.Entity.InvoiceVehicleDetails = r.Entity.InvoiceVehicleDetails.OrderBy(i=>i.StartDate).ToList();
            r.Entity.ChargeDetailList = r.Entity.ChargeDetailList.OrderBy(i=>i.Id).ToList();
            return r;
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {

            var fi = request.EqualityFilter.Where(i => i.Key.Contains("FromLocations")).SingleOrDefault();
            var value = JsonConvert.DeserializeObject<List<int>>(fi.Value.ToString());
            request.EqualityFilter.Remove("FromLocations");

            var to = request.EqualityFilter.Where(i => i.Key.Contains("ToLocations")).SingleOrDefault();
            var valueto = JsonConvert.DeserializeObject<List<int>>(to.Value.ToString());
            request.EqualityFilter.Remove("ToLocations");
            var result= new MyRepository().List(connection, request);

            if (value.Count > 0)
            {
                result.Entities = result.Entities.Where(i => i.InvoiceVehicleDetails.Any(m => value.Contains(m.ShippingAreaFrom ?? 0))).ToList();
            }
            if (valueto.Count > 0)
            {
                result.Entities = result.Entities.Where(i => i.InvoiceVehicleDetails.Any(m => valueto.Contains(m.ShippingAreaTo ?? 0))).ToList();
            }
            //result.Entities = result.Entities.OrderByDescending(i => i.InvoiceNo).ToList();
            return result;
        }
        public GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request)
        {
            return new MyRepository().GetNextNumber(connection, request);
        }
        public string LoginUser(IDbConnection connection)
        {
           return Authorization.UserId;
        }
       
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.InvoiceColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "Invoice_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
