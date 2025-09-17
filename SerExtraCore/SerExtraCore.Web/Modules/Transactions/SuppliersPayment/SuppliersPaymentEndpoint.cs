
namespace SerExtraCore.Transactions.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.SuppliersPaymentRepository;
    using MyRow = Entities.SuppliersPaymentRow;
    using Serenity.Reporting;
    using Serenity.Web;
    using System;
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Web.Modules;
    using SerExtraCore.Administration.Entities;
    using SerExtraCore.Transactions.Entities;
    using System.Linq;
    using System.Collections.Generic;

    [Route("Services/Transactions/SuppliersPayment/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class SuppliersPaymentController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            decimal duetotal = 0;

            if (request.Entity.PdcPaymentDetails != null)
            {
                if (request.Entity.PdcPaymentDetails.Count > 0)
                {
                    List<int> codes = new List<int>();

                    codes.Add(1);
                    codes.Add(2);
                    duetotal = request.Entity.PdcPaymentDetails.Where(k=>k.ChequeStatus!=ChequeStatus.Canceled).Sum(i => i.Amount) ?? 0;
                }
            }
            if (request.Entity.PaymentType == PymentTypes.Cheque)
            {

                if (request.Entity.TotalAmount != duetotal)
                {
                    throw new ValidationError("Total PDC should be equal to supplier total amount");
                }

            }
            if (request.Entity.PaymentType != PymentTypes.Cheque)
            {
                request.Entity.Payments = new System.Collections.Generic.List<PaymentRow>();
                Accounts.Entities.PaymentRow receiptRow = new Accounts.Entities.PaymentRow();
                receiptRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 2).voucherno;
                receiptRow.TrxDate = request.Entity.Date;
                receiptRow.Amount = request.Entity.TotalAmount;

                var account = uow.Connection.ById<AccountsRow>(request.Entity.AccountId);
                receiptRow.CreditAccountHeadId = account.AccountHeadId;
                receiptRow.CreditAccountId = request.Entity.AccountId;
                int ptype = (int)request.Entity.PaymentType;
                receiptRow.PaymentMethod = (AccountTypes)ptype;
                var config = uow.Connection.ById<ConfigurationRow>(1);
                receiptRow.DebitAccountHeadId = config.SupplierPaymentLedgerId;
                receiptRow.EntityType = request.Entity.Table;
                receiptRow.VType = 2;
                receiptRow.SupplierId = request.Entity.SupplierId;
                receiptRow.EntityType = request.Entity.Table;
                receiptRow.Remarks = "Supplier Payment  ,Payment Code:" + request.Entity.Code + "";
                request.Entity.Payments.Add(receiptRow);
            }
            else
            {
                foreach(var che in request.Entity.PdcPaymentDetails)
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
                        int ptype = (int)che.PaymentType;
                        receiptRow.PaymentMethod = (AccountTypes)ptype;
                        var config = uow.Connection.ById<ConfigurationRow>(1);
                        receiptRow.DebitAccountHeadId = config.PDCWithdrawalsLedger;
                        receiptRow.EntityType = che.Table;
                        receiptRow.VType = 2;
                        receiptRow.SupplierId = request.Entity.SupplierId;
                        receiptRow.EntityType = che.Table;
                        receiptRow.Remarks = "Cheque No:"+che.ChequeNo+",Supplier Payment  ,Payment Code:" + request.Entity.Code + "";
                        che.Payment.Add(receiptRow);
                    }
                }
            }
            //set Code
            GetNextNumberRequest getNextNumberRequest = new GetNextNumberRequest();
            getNextNumberRequest.Prefix = "SP";
            getNextNumberRequest.Length = 7;
            var c = new MyRepository().GetNextNumber(uow.Connection, getNextNumberRequest);
            request.Entity.Code = c.Serial;

            var r = new MyRepository().Create(uow, request);

            foreach (var k in request.Entity.InvoiceVehicleDetails)
            {
                var invoice = uow.Connection.ById<InvoiceVehicleDetailsRow>(k.InvoiceVehicleDetailId);
                var supplieramount = invoice.SupplierAmount??0;
                var supplieradvance = invoice.SupplierAdvanceAmount??0;
                var supplierpayment = k.Amount??0;
                var paid=uow.Connection.List<SuppliersPaymentInvoiceVehicleDetailsRow>().Where(x => x.InvoiceVehicleDetailId == k.InvoiceVehicleDetailId).Sum(x => x.Amount??0);
                if(paid >= (supplieramount-supplieradvance))
                {
                    invoice.SupplierPaymentStatus = PaymentStatus.Value2;
                    uow.Connection.UpdateById<InvoiceVehicleDetailsRow>(invoice);
                }
            }
            foreach (var k in request.Entity.InvoiceCharges)
            {
                var invoice = uow.Connection.ById<InvoiceChargesRow>(k.InvoiceChargesId);
                var supplieramount = invoice.SupplierAmount ?? 0;
                var supplieradvance = invoice.SupplierAdvanceAmount ?? 0;
                var supplierpayment = k.Amount ?? 0;
                var paid = uow.Connection.List<SuppliersPaymentInvoiceChargesRow>().Where(x => x.InvoiceChargesId == k.InvoiceChargesId).Sum(x => x.Amount ?? 0);
                if (paid >= (supplieramount - supplieradvance))
                {
                    invoice.SupplierPaymentStatus = PaymentStatus.Value2;
                    uow.Connection.UpdateById<InvoiceChargesRow>(invoice);
                }
                
            }

            return r;
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //RetrieveRequest retrieveRequest = new RetrieveRequest();
            //retrieveRequest.EntityId = request.EntityId;
            decimal duetotal = 0;

            if (request.Entity.PdcPaymentDetails != null)
            {
                if (request.Entity.PdcPaymentDetails.Count > 0)
                {
                    List<int> codes = new List<int>();

                    codes.Add(1);
                    codes.Add(2);
                    duetotal = request.Entity.PdcPaymentDetails.Where(k => k.ChequeStatus != ChequeStatus.Canceled).Sum(i => i.Amount) ?? 0;
                }
            }
            if (request.Entity.PaymentType == PymentTypes.Cheque)
            {

                if (request.Entity.TotalAmount != duetotal)
                {
                    throw new ValidationError("Total PDC should be equal to supplier total amount");
                }

            }
            var exsist = uow.Connection.ById<SuppliersPaymentRow>(request.EntityId); /*Retrieve(uow.Connection, retrieveRequest);*/
            if (exsist.PaymentType != request.Entity.PaymentType)
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
                            int ptype = (int)che.PaymentType;
                            receiptRow.PaymentMethod = (AccountTypes)ptype;
                            var config = uow.Connection.ById<ConfigurationRow>(1);
                            receiptRow.DebitAccountHeadId = config.PDCWithdrawalsLedger;
                            receiptRow.EntityType = che.Table;
                            receiptRow.VType = 2;
                            receiptRow.SupplierId = request.Entity.SupplierId;
                            receiptRow.EntityType = che.Table;
                            receiptRow.Remarks = "Cheque No:" + che.ChequeNo + ",Supplier Payment  ,Payment Code:" + request.Entity.Code + "";
                            che.Payment.Add(receiptRow);
                        }
                    }
                    if (request.Entity.Payments.Count > 0)
                    {
                        request.Entity.Payments = new System.Collections.Generic.List<PaymentRow>();

                    }
                }
                else
                {
                    if (request.Entity.Payments.Count > 0)
                    {
                        request.Entity.Payments[0].TrxDate = request.Entity.Date;
                        request.Entity.Payments[0].Amount = request.Entity.TotalAmount;
                        var config = uow.Connection.ById<ConfigurationRow>(1);
                        request.Entity.Payments[0].DebitAccountHeadId = config.SupplierPaymentLedgerId; ;
                        request.Entity.Payments[0].PaymentMethod = (AccountTypes)((int)request.Entity.PaymentType);
                        request.Entity.Payments[0].SupplierId = request.Entity.SupplierId;
                        var account = uow.Connection.ById<AccountsRow>(request.Entity.AccountId);
                        request.Entity.Payments[0].CreditAccountHeadId = account.AccountHeadId;
                        request.Entity.Payments[0].CreditAccountId = request.Entity.AccountId;

                    }
                    else
                    {
                        request.Entity.Payments = new System.Collections.Generic.List<PaymentRow>();
                        Accounts.Entities.PaymentRow receiptRow = new Accounts.Entities.PaymentRow();
                        receiptRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 2).voucherno;
                        receiptRow.TrxDate = request.Entity.Date;
                        receiptRow.Amount = request.Entity.TotalAmount;

                        var account = uow.Connection.ById<AccountsRow>(request.Entity.AccountId);
                        receiptRow.CreditAccountHeadId = account.AccountHeadId;
                        receiptRow.CreditAccountId = request.Entity.AccountId;
                        int ptype = (int)request.Entity.PaymentType;
                        receiptRow.PaymentMethod = (AccountTypes)ptype;
                        var config = uow.Connection.ById<ConfigurationRow>(1);
                        receiptRow.DebitAccountHeadId = config.SupplierPaymentLedgerId;
                        receiptRow.EntityType = request.Entity.Table;
                        receiptRow.VType = 2;
                        receiptRow.SupplierId = request.Entity.SupplierId;
                        receiptRow.EntityType = request.Entity.Table;
                        receiptRow.Remarks = "Supplier Payment  ,Payment Code:" + request.Entity.Code + "";
                        request.Entity.Payments.Add(receiptRow);
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
                                    che.Payment[0].DebitAccountHeadId = config.PDCWithdrawalsLedger; ;
                                    che.Payment[0].PaymentMethod = (AccountTypes)((int)che.PaymentType);
                                    che.Payment[0].SupplierId = request.Entity.SupplierId;
                                    var account = uow.Connection.ById<AccountsRow>(che.AccountId);
                                    che.Payment[0].CreditAccountHeadId = account.AccountHeadId;
                                    che.Payment[0].CreditAccountId = che.AccountId;
                                    addnew = false;

                                }
                            }
                            if(addnew)
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
                                receiptRow.EntityType = che.Table;
                                receiptRow.VType = 2;
                                receiptRow.SupplierId = request.Entity.SupplierId;
                                receiptRow.EntityType = che.Table;
                                receiptRow.Remarks = "Cheque No:" + che.ChequeNo + ",Supplier Payment  ,Payment Code:" + request.Entity.Code + "";
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
                    if (request.Entity.Payments != null)
                    {
                        if (request.Entity.Payments.Count > 0)
                        {
                            request.Entity.Payments[0].TrxDate = request.Entity.Date;
                            request.Entity.Payments[0].Amount = request.Entity.TotalAmount;
                            var config = uow.Connection.ById<ConfigurationRow>(1);
                            request.Entity.Payments[0].DebitAccountHeadId = config.SupplierPaymentLedgerId; ;
                            request.Entity.Payments[0].PaymentMethod = (AccountTypes)((int)request.Entity.PaymentType);
                            request.Entity.Payments[0].SupplierId = request.Entity.SupplierId;
                            var account = uow.Connection.ById<AccountsRow>(request.Entity.AccountId);
                            request.Entity.Payments[0].CreditAccountHeadId = account.AccountHeadId;
                            request.Entity.Payments[0].CreditAccountId = request.Entity.AccountId;

                        }
                    }
                }
            }
            var list = uow.Connection.List<SuppliersPaymentInvoiceVehicleDetailsRow>(new Criteria("SuppliersPaymentId=" + request.EntityId + ""));
            foreach (var k in list)
            {

                var invoice = uow.Connection.ById<InvoiceVehicleDetailsRow>(k.InvoiceVehicleDetailId);
                invoice.SupplierPaymentStatus = PaymentStatus.Value1;
                uow.Connection.UpdateById<InvoiceVehicleDetailsRow>(invoice);

            }
            var listchar = uow.Connection.List<SuppliersPaymentInvoiceChargesRow>(new Criteria("SuppliersPaymentId=" + request.EntityId + ""));
            foreach (var k in listchar)
            {

                var invoice = uow.Connection.ById<InvoiceChargesRow>(k.InvoiceChargesId);
                invoice.SupplierPaymentStatus = PaymentStatus.Value1;
                uow.Connection.UpdateById<InvoiceChargesRow>(invoice);

            }

            //deleteed vehicledetails
            var exlist = uow.Connection.List<SuppliersPaymentInvoiceVehicleDetailsRow>().Where(x => x.SuppliersPaymentId == request.Entity.Id).ToList();


            foreach (var exchild in exlist.Where(p => !request.Entity.InvoiceVehicleDetails.Any(p2 => p2.Id == p.Id)))
            {
                var invoice = uow.Connection.ById<InvoiceVehicleDetailsRow>(exchild.InvoiceVehicleDetailId);
                var supplieramount = invoice.SupplierAmount ?? 0;
                var supplieradvance = invoice.SupplierAdvanceAmount ?? 0;
                var supplierpayment = exchild.Amount ?? 0;
                var paid = uow.Connection.List<SuppliersPaymentInvoiceVehicleDetailsRow>().Where(x => x.InvoiceVehicleDetailId == exchild.InvoiceVehicleDetailId).Sum(x => x.Amount ?? 0);
                paid = paid - exchild.Amount ?? 0;
                if (paid >= (supplieramount - supplieradvance))
                {
                    invoice.SupplierPaymentStatus = PaymentStatus.Value2;
                    uow.Connection.UpdateById<InvoiceVehicleDetailsRow>(invoice);
                }
                else
                {
                    invoice.SupplierPaymentStatus = PaymentStatus.Value1;
                    uow.Connection.UpdateById<InvoiceVehicleDetailsRow>(invoice);
                }
            }
            //end


            //deleted charges
            var exlistcharges = uow.Connection.List<SuppliersPaymentInvoiceChargesRow>().Where(x => x.SuppliersPaymentId == request.Entity.Id).ToList();


            foreach (var exchild in exlistcharges.Where(p => !request.Entity.InvoiceCharges.Any(p2 => p2.Id == p.Id)))
            {
                var invoice = uow.Connection.ById<InvoiceChargesRow>(exchild.InvoiceChargesId);
                var supplieramount = invoice.SupplierAmount ?? 0;
                var supplieradvance = invoice.SupplierAdvanceAmount ?? 0;
                var supplierpayment = exchild.Amount ?? 0;
                var paid = uow.Connection.List<SuppliersPaymentInvoiceChargesRow>().Where(x => x.InvoiceChargesId == exchild.InvoiceChargesId).Sum(x => x.Amount ?? 0);
                paid = paid - exchild.Amount ?? 0;
                if (paid >= (supplieramount - supplieradvance))
                {
                    invoice.SupplierPaymentStatus = PaymentStatus.Value2;
                    uow.Connection.UpdateById<InvoiceChargesRow>(invoice);

                }
                else
                {
                    invoice.SupplierPaymentStatus = PaymentStatus.Value1;
                    uow.Connection.UpdateById<InvoiceChargesRow>(invoice);
                }
            }
            //end

            var r = new MyRepository().Update(uow, request);








            foreach (var k in request.Entity.InvoiceVehicleDetails)
            {
                bool changed = false;
                if (k.Id > 0)
                {
                    var exdeatils = uow.Connection.ById<SuppliersPaymentInvoiceVehicleDetailsRow>(k.Id);

                    if (exdeatils.InvoiceVehicleDetailId != k.InvoiceVehicleDetailId)
                    {
                        changed = true;

                        if (changed)
                        {
                            var invoice1 = uow.Connection.ById<InvoiceVehicleDetailsRow>(exdeatils.InvoiceVehicleDetailId);
                            var supplieramount1 = invoice1.SupplierAmount ?? 0;
                            var supplieradvance1 = invoice1.SupplierAdvanceAmount ?? 0;
                            var supplierpayment1 = k.Amount ?? 0;
                            var paid1 = uow.Connection.List<SuppliersPaymentInvoiceVehicleDetailsRow>().Where(x => x.InvoiceVehicleDetailId == k.InvoiceVehicleDetailId).Sum(x => x.Amount ?? 0);
                            paid1 = paid1 - exdeatils.Amount ?? 0;
                            if (paid1 >= (supplieramount1 - supplieradvance1))
                            {
                                invoice1.SupplierPaymentStatus = PaymentStatus.Value2;
                                uow.Connection.UpdateById<InvoiceVehicleDetailsRow>(invoice1);
                            }
                            else
                            {
                                invoice1.SupplierPaymentStatus = PaymentStatus.Value1;
                                uow.Connection.UpdateById<InvoiceVehicleDetailsRow>(invoice1);
                            }
                        }
                    }

                }


                var invoice = uow.Connection.ById<InvoiceVehicleDetailsRow>(k.InvoiceVehicleDetailId);
                var supplieramount = invoice.SupplierAmount ?? 0;
                var supplieradvance = invoice.SupplierAdvanceAmount ?? 0;
                var supplierpayment = k.Amount ?? 0;
                var paid = uow.Connection.List<SuppliersPaymentInvoiceVehicleDetailsRow>().Where(x => x.InvoiceVehicleDetailId == k.InvoiceVehicleDetailId).Sum(x => x.Amount ?? 0);
                if (k.Id > 0)
                {
                    var exdeatils = uow.Connection.ById<SuppliersPaymentInvoiceVehicleDetailsRow>(k.Id);
                    paid = paid - exdeatils.Amount ?? 0;
                }
                paid = paid + k.Amount ?? 0;
                if (paid >= (supplieramount - supplieradvance))
                {
                    invoice.SupplierPaymentStatus = PaymentStatus.Value2;
                    uow.Connection.UpdateById<InvoiceVehicleDetailsRow>(invoice);
                }
                else
                {
                    invoice.SupplierPaymentStatus = PaymentStatus.Value1;
                    uow.Connection.UpdateById<InvoiceVehicleDetailsRow>(invoice);
                }

            }
            foreach (var k in request.Entity.InvoiceCharges)
            {
                bool changed = false;
                if (k.Id > 0)
                {
                    var exdeatils = uow.Connection.ById<SuppliersPaymentInvoiceChargesRow>(k.Id);

                    if (exdeatils.InvoiceChargesId != k.InvoiceChargesId)
                    {
                        changed = true;

                        if (changed)
                        {
                            var invoice1 = uow.Connection.ById<InvoiceChargesRow>(exdeatils.InvoiceChargesId);
                            var supplieramount1 = invoice1.SupplierAmount ?? 0;
                            var supplieradvance1 = invoice1.SupplierAdvanceAmount ?? 0;
                            var supplierpayment1 = exdeatils.Amount ?? 0;
                            var paid1 = uow.Connection.List<SuppliersPaymentInvoiceChargesRow>().Where(x => x.InvoiceChargesId == exdeatils.InvoiceChargesId).Sum(x => x.Amount ?? 0);
                            paid1 = paid1 - exdeatils.Amount ?? 0;
                            if (paid1 >= (supplieramount1 - supplieradvance1))
                            {
                                invoice1.SupplierPaymentStatus = PaymentStatus.Value2;
                                uow.Connection.UpdateById<InvoiceChargesRow>(invoice1);

                            }
                            else
                            {
                                invoice1.SupplierPaymentStatus = PaymentStatus.Value1;
                                uow.Connection.UpdateById<InvoiceChargesRow>(invoice1);
                            }
                        }
                    }

                }
                var invoice = uow.Connection.ById<InvoiceChargesRow>(k.InvoiceChargesId);
                var supplieramount = invoice.SupplierAmount ?? 0;
                var supplieradvance = invoice.SupplierAdvanceAmount ?? 0;
                var supplierpayment = k.Amount ?? 0;
                var paid = uow.Connection.List<SuppliersPaymentInvoiceChargesRow>().Where(x => x.InvoiceChargesId == k.InvoiceChargesId).Sum(x => x.Amount ?? 0);
                if (k.Id > 0)
                {
                    var exdeatils = uow.Connection.ById<SuppliersPaymentInvoiceChargesRow>(k.Id);
                    paid = paid - exdeatils.Amount ?? 0;
                }
                paid = paid + k.Amount ?? 0;
                if (paid >= (supplieramount - supplieradvance))
                {
                    invoice.SupplierPaymentStatus = PaymentStatus.Value2;
                    uow.Connection.UpdateById<InvoiceChargesRow>(invoice);

                }
                else
                {
                    invoice.SupplierPaymentStatus = PaymentStatus.Value1;
                    uow.Connection.UpdateById<InvoiceChargesRow>(invoice);
                }


            }
            return r;
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            var list= uow.Connection.List<SuppliersPaymentInvoiceVehicleDetailsRow>(new Criteria("SuppliersPaymentId="+request.EntityId+""));


            foreach (var k in list)
            {

                

                var invoice = uow.Connection.ById<InvoiceVehicleDetailsRow>(k.InvoiceVehicleDetailId);
                var supplieramount = invoice.SupplierAmount ?? 0;
                var supplieradvance = invoice.SupplierAdvanceAmount ?? 0;
                var supplierpayment = k.Amount ?? 0;
                var paid = uow.Connection.List<SuppliersPaymentInvoiceVehicleDetailsRow>().Where(x => x.InvoiceVehicleDetailId == k.InvoiceVehicleDetailId).Sum(x => x.Amount ?? 0);
                paid = paid - k.Amount??0;
                if (paid >= (supplieramount - supplieradvance))
                {
                    invoice.SupplierPaymentStatus = PaymentStatus.Value2;
                    uow.Connection.UpdateById<InvoiceVehicleDetailsRow>(invoice);
                }
                else
                {
                    invoice.SupplierPaymentStatus = PaymentStatus.Value1;
                    uow.Connection.UpdateById<InvoiceVehicleDetailsRow>(invoice);
                }

            }
            var listchar = uow.Connection.List<SuppliersPaymentInvoiceChargesRow>(new Criteria("SuppliersPaymentId=" + request.EntityId + ""));
            foreach (var k in listchar)
            {

                var invoice = uow.Connection.ById<InvoiceChargesRow>(k.InvoiceChargesId);
                var supplieramount = invoice.SupplierAmount ?? 0;
                var supplieradvance = invoice.SupplierAdvanceAmount ?? 0;
                var supplierpayment = k.Amount ?? 0;
                var paid = uow.Connection.List<SuppliersPaymentInvoiceChargesRow>().Where(x => x.InvoiceChargesId == k.InvoiceChargesId).Sum(x => x.Amount ?? 0);
                paid = paid - k.Amount ?? 0;
                if (paid >= (supplieramount - supplieradvance))
                {
                    invoice.SupplierPaymentStatus = PaymentStatus.Value2;
                    uow.Connection.UpdateById<InvoiceChargesRow>(invoice);

                }
                else
                {
                    invoice.SupplierPaymentStatus = PaymentStatus.Value1;
                    uow.Connection.UpdateById<InvoiceChargesRow>(invoice);
                }

            }
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            var r= new MyRepository().Retrieve(connection, request);

            foreach(var col in r.Entity.InvoiceVehicleDetails)
            {
                var invto = InvoiceVehicleDetailsRow.Fields;
                var inventorylocationto = connection.List<InvoiceVehicleDetailsRow>(q => q
                .SelectTableFields()
                .Select(invto.FullName)
                .Where(invto.Id==(col.InvoiceVehicleDetailId??0))).SingleOrDefault();
                col.InvoiceVehicleDetailFullName = inventorylocationto.FullName;
            }

            foreach (var col in r.Entity.InvoiceCharges)
            {
                var invto = InvoiceChargesRow.Fields;
                var inventorylocationto = connection.List<InvoiceChargesRow>(q => q
                .SelectTableFields()
                .Select(invto.FullName)
                .Where(invto.Id == (col.InvoiceChargesId ?? 0))).SingleOrDefault();
                col.InvoiceChargeFullName = inventorylocationto.FullName;
            }

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
        
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.SuppliersPaymentColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "Invoice_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
