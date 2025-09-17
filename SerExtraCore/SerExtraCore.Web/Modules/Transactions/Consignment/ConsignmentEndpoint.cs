
namespace SerExtraCore.Transactions.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.ConsignmentRepository;
    using MyRow = Entities.ConsignmentRow;
    using Serenity.Reporting;
    using Serenity.Web;
    using System;
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Web.Modules;
    using SerExtraCore.Administration.Entities;
    using SerExtraCore.Accounts.Endpoints;
    using System.Linq;
    using Newtonsoft.Json;
    using System.Collections.Generic;
    using SerExtraCore.Transactions.Entities;

    [Route("Services/Transactions/Consignment/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ConsignmentController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var config = uow.Connection.ById<ConfigurationRow>(1);
            GetNextNumberRequest getNextNumberRequest = new GetNextNumberRequest();
            getNextNumberRequest.Prefix = "";
            getNextNumberRequest.Length = 6;
            var c = new MyRepository().GetNextNumber(uow.Connection, getNextNumberRequest);
            //request.Entity.JobNo = c.Serial;
            if (!config.Shipper??false)
            {
                request.Entity.ShipperId = request.Entity.Billing;
            }
            if (!config.Consignee ?? false)
            {
                request.Entity.ConsigneeId = request.Entity.Billing;
            }
            foreach (var k in request.Entity.ConsignmentVehicleDetails)
            {
                if (k.SupplierAdvanceAmount > 0)
                {
                    k.Payments = new System.Collections.Generic.List<PaymentRow>();
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
                    receiptRow.TrxDate = request.Entity.Date;
                    receiptRow.Amount = k.SupplierAdvanceAmount;

                    var account = uow.Connection.ById<AccountsRow>(k.AccountId);
                    receiptRow.CreditAccountHeadId = account.AccountHeadId;
                    receiptRow.CreditAccountId = k.AccountId;
                    receiptRow.PaymentMethod = k.PaymentType;
                    
                    receiptRow.DebitAccountHeadId = config.SupplierPaymentLedgerId;
                    receiptRow.EntityType = request.Entity.Table;
                    receiptRow.VType = 2;
                    receiptRow.SupplierId = k.SupplierId;
                    receiptRow.EntityType = request.Entity.Table;
                    receiptRow.Remarks = "Supplier Advance  ,Consignment Code:" + request.Entity.JobNo + "";
                    k.Payments.Add(receiptRow);
                }

                if (k.DriverAdvance > 0)
                {
                    k.Payments = new System.Collections.Generic.List<PaymentRow>();
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
                    receiptRow.TrxDate = request.Entity.Date;
                    receiptRow.Amount = k.DriverAdvance;

                    var account = uow.Connection.ById<AccountsRow>(k.DriverAdvanceAccount);
                    receiptRow.CreditAccountHeadId = account.AccountHeadId;
                    receiptRow.CreditAccountId = k.DriverAdvanceAccount;
                    receiptRow.PaymentMethod = k.DriverAdvancePaymentType;

                    receiptRow.DebitAccountHeadId = config.DriverAdvanceLedgerId;
                    receiptRow.EntityType = request.Entity.Table;
                    receiptRow.VType = 2;
                    receiptRow.EmployeeId = k.Driver;
                    receiptRow.EntityType = request.Entity.Table;
                    receiptRow.Remarks = "Driver Advance  ,Consignment Code:" + request.Entity.JobNo + "";
                    k.Payments.Add(receiptRow);
                }

                foreach (var l in k.VehicleCharges)
                {
                    if (l.SupplierAdvanceAmount > 0)
                    {
                        l.Payments = new System.Collections.Generic.List<PaymentRow>();
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
                        receiptRow.TrxDate = request.Entity.Date;
                        receiptRow.Amount = l.SupplierAdvanceAmount;

                        var account = uow.Connection.ById<AccountsRow>(l.AccountId);
                        receiptRow.CreditAccountHeadId = account.AccountHeadId;
                        receiptRow.CreditAccountId = l.AccountId;
                        receiptRow.PaymentMethod = l.PaymentType;

                        receiptRow.DebitAccountHeadId = config.SupplierPaymentLedgerId;
                        receiptRow.EntityType = l.Table;
                        receiptRow.VType = 2;
                        receiptRow.SupplierId = l.SupplierId;
                        receiptRow.Remarks = "Supplier Vehicle Charges Advance  ,Consignment Code:" + request.Entity.JobNo + "";
                        l.Payments.Add(receiptRow);
                    }
                }

            }
            foreach (var k in request.Entity.ChargeDetailList)
            {
                if (k.SupplierAdvanceAmount > 0)
                {
                    k.Payments = new System.Collections.Generic.List<PaymentRow>();
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
                    receiptRow.TrxDate = request.Entity.Date;
                    receiptRow.Amount = k.SupplierAdvanceAmount;

                    var account = uow.Connection.ById<AccountsRow>(k.AccountId);
                    receiptRow.CreditAccountHeadId = account.AccountHeadId;
                    receiptRow.CreditAccountId = k.AccountId;
                    receiptRow.PaymentMethod = k.PaymentType;

                    receiptRow.DebitAccountHeadId = config.SupplierPaymentLedgerId;
                    receiptRow.EntityType = k.Table;
                    receiptRow.VType = 2;
                    receiptRow.SupplierId = k.SupplierId;
                    receiptRow.Remarks = "Supplier Charges Advance  ,Consignment Code:" + request.Entity.JobNo + "";
                    k.Payments.Add(receiptRow);
                }
            }

            request.Entity.ChargeDetailList.RemoveAll(i => i.Qty == null);
            if (request.Entity.AdvanceAmount != null)
            {
                if (request.Entity.AdvancePaymentType != PymentTypes.Cheque)
                {
                    request.Entity.AdvanceReceipt = new System.Collections.Generic.List<ReceiptRow>();
                    Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
                    receiptRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 1).voucherno;
                    receiptRow.TrxDate = request.Entity.Date;
                    receiptRow.Amount = request.Entity.AdvanceAmount;

                    var account = uow.Connection.ById<AccountsRow>(request.Entity.AdvanceAccountId);
                    receiptRow.DebitAccountHeadId = account.AccountHeadId;
                    receiptRow.DebitAccountId = request.Entity.AdvanceAccountId;
                    receiptRow.PaymentMethod = (AccountTypes)((int)request.Entity.AdvancePaymentType);
                    receiptRow.CreditAccountHeadId = config.InvoiceCollectionLedgerId;
                    receiptRow.EntityType = request.Entity.Table;
                    receiptRow.VType = 1;
                    receiptRow.CustomerId = request.Entity.Billing;
                    receiptRow.Remarks = "Consignment Advance,Consignment Code:" + request.Entity.JobNo + "";
                    request.Entity.AdvanceReceipt.Add(receiptRow);
                }
                else
                {
                    //foreach (var che in request.Entity.PdcPaymentDetails)
                    //{
                    //    if (che.ChequeStatus == ChequeStatus.Cleared)
                    //    {
                    //        che.Receipts = new System.Collections.Generic.List<ReceiptRow>();
                    //        Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
                    //        receiptRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 1).voucherno;
                    //        receiptRow.TrxDate = che.Date;
                    //        receiptRow.Amount = che.Amount;

                    //        var account = uow.Connection.ById<AccountsRow>(che.AccountId);
                    //        receiptRow.DebitAccountHeadId = account.AccountHeadId;
                    //        receiptRow.DebitAccountId = che.AccountId;
                    //        receiptRow.PaymentMethod = che.PaymentType;
                    //        receiptRow.CreditAccountHeadId = config.PDCDepositsLedger;
                    //        receiptRow.EntityType = che.Table;
                    //        receiptRow.VType = 1;
                    //        receiptRow.CustomerId = request.Entity.Billing;
                    //        receiptRow.Remarks = "Cheque No:" + che.ChequeNo + ",Consignment Advance,Consignment Code:" + request.Entity.JobNo + "";
                    //        che.Receipts.Add(receiptRow);
                    //    }
                    //}
                }
            }
            foreach (var i in request.Entity.Expenses)
            {
                i.VType = 2;
                
                var account = uow.Connection.ById<AccountsRow>(i.CreditAccountId);
                i.CreditAccountHeadId = account.AccountHeadId;
            }
           
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var config = uow.Connection.ById<ConfigurationRow>(1);
            if (!config.Shipper ?? false)
            {
                request.Entity.ShipperId = request.Entity.Billing;
            }
            if (!config.Consignee ?? false)
            {
                request.Entity.ConsigneeId = request.Entity.Billing;
            }
            foreach (var k in request.Entity.ConsignmentVehicleDetails)
            {
                bool newpay = true;
                if (k.Payments != null)
                {
                    if (k.Payments.Count > 0)
                    {
                        if (k.SupplierAdvanceAmount > 0)
                        {
                            if (uow.Connection.Exists<InvoiceVehicleDetailsRow>(InvoiceVehicleDetailsRow.Fields.ConsignmentVehicleDetailsId == (k.Id ?? 0))) 
                            {
                                var invoiceVehicleDetailsRow = uow.Connection.First<InvoiceVehicleDetailsRow>(InvoiceVehicleDetailsRow.Fields.ConsignmentVehicleDetailsId == (k.Id ?? 0));
                                if (invoiceVehicleDetailsRow != null)
                                {
                                    invoiceVehicleDetailsRow.SupplierAdvanceAmount = k.SupplierAdvanceAmount;
                                    invoiceVehicleDetailsRow.SupplierAmount = k.SupplierAmount;
                                    invoiceVehicleDetailsRow.SupplierId = k.SupplierId;
                                    invoiceVehicleDetailsRow.PaymentType = k.PaymentType;
                                    invoiceVehicleDetailsRow.AccountId = k.AccountId;
                                    uow.Connection.UpdateById<InvoiceVehicleDetailsRow>(invoiceVehicleDetailsRow);
                                }
                            }
                            

                            k.Payments[0].TrxDate = request.Entity.Date;
                            k.Payments[0].Amount = k.SupplierAdvanceAmount;

                            var account = uow.Connection.ById<AccountsRow>(k.AccountId);
                            k.Payments[0].CreditAccountHeadId = account.AccountHeadId;
                            k.Payments[0].CreditAccountId = k.AccountId;
                            k.Payments[0].PaymentMethod = k.PaymentType;
                           // var config = uow.Connection.ById<ConfigurationRow>(1);
                            k.Payments[0].DebitAccountHeadId = config.SupplierPaymentLedgerId;
                            k.Payments[0].EntityType = request.Entity.Table;
                            k.Payments[0].VType = 2;
                            k.Payments[0].SupplierId = k.SupplierId;
                            k.Payments[0].EntityType = request.Entity.Table;
                            k.Payments[0].Remarks = "Supplier Advance  ,Consignment Code:" + request.Entity.JobNo + "";

                        }
                        else if (k.DriverAdvance > 0)
                        {
                            k.Payments[0].TrxDate = request.Entity.Date;
                            k.Payments[0].Amount = k.DriverAdvance;

                            var account = uow.Connection.ById<AccountsRow>(k.DriverAdvanceAccount);
                            k.Payments[0].CreditAccountHeadId = account.AccountHeadId;
                            k.Payments[0].CreditAccountId = k.DriverAdvanceAccount;
                            k.Payments[0].PaymentMethod = k.DriverAdvancePaymentType;
                            // var config = uow.Connection.ById<ConfigurationRow>(1);
                            k.Payments[0].DebitAccountHeadId = config.DriverAdvanceLedgerId;
                            k.Payments[0].EntityType = request.Entity.Table;
                            k.Payments[0].VType = 2;
                            k.Payments[0].EmployeeId = k.Driver;
                            k.Payments[0].EntityType = request.Entity.Table;
                            k.Payments[0].Remarks = "Driver Advance  ,Consignment Code:" + request.Entity.JobNo + "";

                        }
                        else
                        {
                            k.Payments.RemoveAt(0);
                        }

                        newpay = false;
                    }
                    
                    
                }
                if(newpay)
                {
                    if (k.SupplierAdvanceAmount > 0)
                    {
                        k.Payments = new System.Collections.Generic.List<PaymentRow>();
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
                        receiptRow.TrxDate = request.Entity.Date;
                        receiptRow.Amount = k.SupplierAdvanceAmount;

                        var account = uow.Connection.ById<AccountsRow>(k.AccountId);
                        receiptRow.CreditAccountHeadId = account.AccountHeadId;
                        receiptRow.CreditAccountId = k.AccountId;
                        receiptRow.PaymentMethod = k.PaymentType;
                        //var config = uow.Connection.ById<ConfigurationRow>(1);
                        receiptRow.DebitAccountHeadId = config.SupplierPaymentLedgerId;
                        receiptRow.EntityType = request.Entity.Table;
                        receiptRow.VType = 2;
                        receiptRow.SupplierId = k.SupplierId;
                        receiptRow.EntityType = request.Entity.Table;
                        receiptRow.Remarks = "Supplier Advance  ,Consignment Code:" + request.Entity.JobNo + "";
                        k.Payments.Add(receiptRow);
                    }

                    if (k.DriverAdvance > 0)
                    {
                        k.Payments = new System.Collections.Generic.List<PaymentRow>();
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
                        receiptRow.TrxDate = request.Entity.Date;
                        receiptRow.Amount = k.DriverAdvance;

                        var account = uow.Connection.ById<AccountsRow>(k.DriverAdvanceAccount);
                        receiptRow.CreditAccountHeadId = account.AccountHeadId;
                        receiptRow.CreditAccountId = k.DriverAdvanceAccount;
                        receiptRow.PaymentMethod = k.DriverAdvancePaymentType;
                        //var config = uow.Connection.ById<ConfigurationRow>(1);
                        receiptRow.DebitAccountHeadId = config.DriverAdvanceLedgerId;
                        receiptRow.EntityType = request.Entity.Table;
                        receiptRow.VType = 2;
                        receiptRow.EmployeeId = k.Driver;
                        receiptRow.EntityType = request.Entity.Table;
                        receiptRow.Remarks = "Driver Advance  ,Consignment Code:" + request.Entity.JobNo + "";
                        k.Payments.Add(receiptRow);
                    }
                }



                foreach (var l in k.VehicleCharges)
                {
                    newpay = true;
                    if (l.Payments != null)
                    {
                        if (l.Payments.Count > 0)
                        {
                            if (l.SupplierAdvanceAmount > 0)
                            {


                                l.Payments[0].TrxDate = request.Entity.Date;
                                l.Payments[0].Amount = l.SupplierAdvanceAmount;

                                var account = uow.Connection.ById<AccountsRow>(l.AccountId);
                                l.Payments[0].CreditAccountHeadId = account.AccountHeadId;
                                l.Payments[0].CreditAccountId = l.AccountId;
                                l.Payments[0].PaymentMethod = l.PaymentType;
                                // var config = uow.Connection.ById<ConfigurationRow>(1);
                                l.Payments[0].DebitAccountHeadId = config.SupplierPaymentLedgerId;
                                l.Payments[0].EntityType = request.Entity.Table;
                                l.Payments[0].VType = 2;
                                l.Payments[0].SupplierId = l.SupplierId;
                                l.Payments[0].EntityType = l.Table;
                                l.Payments[0].Remarks = "Supplier Vehicle Charges Advance  ,Consignment Code:" + request.Entity.JobNo + "";

                            }
                            else
                            {
                                l.Payments.RemoveAt(0);
                            }
                            newpay = false;
                        }


                    }
                    if (newpay)
                    {
                        if (l.SupplierAdvanceAmount > 0)
                        {
                            l.Payments = new System.Collections.Generic.List<PaymentRow>();
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
                            receiptRow.TrxDate = request.Entity.Date;
                            receiptRow.Amount = l.SupplierAdvanceAmount;

                            var account = uow.Connection.ById<AccountsRow>(l.AccountId);
                            receiptRow.CreditAccountHeadId = account.AccountHeadId;
                            receiptRow.CreditAccountId = l.AccountId;
                            receiptRow.PaymentMethod = l.PaymentType;

                            receiptRow.DebitAccountHeadId = config.SupplierPaymentLedgerId;
                            receiptRow.EntityType = l.Table;
                            receiptRow.VType = 2;
                            receiptRow.SupplierId = l.SupplierId;
                            receiptRow.Remarks = "Supplier Vehicle Charges Advance  ,Consignment Code:" + request.Entity.JobNo + "";
                            l.Payments.Add(receiptRow);
                        }
                    }
                }
            }




            foreach (var k in request.Entity.ChargeDetailList)
            {
                bool newpay = true;
                if (k.Payments != null)
                {
                    if (k.Payments.Count > 0)
                    {
                        if (k.SupplierAdvanceAmount > 0)
                        {


                            k.Payments[0].TrxDate = request.Entity.Date;
                            k.Payments[0].Amount = k.SupplierAdvanceAmount;

                            var account = uow.Connection.ById<AccountsRow>(k.AccountId);
                            k.Payments[0].CreditAccountHeadId = account.AccountHeadId;
                            k.Payments[0].CreditAccountId = k.AccountId;
                            k.Payments[0].PaymentMethod = k.PaymentType;
                            // var config = uow.Connection.ById<ConfigurationRow>(1);
                            k.Payments[0].DebitAccountHeadId = config.SupplierPaymentLedgerId;
                            k.Payments[0].EntityType = request.Entity.Table;
                            k.Payments[0].VType = 2;
                            k.Payments[0].SupplierId = k.SupplierId;
                            k.Payments[0].EntityType = request.Entity.Table;
                            k.Payments[0].Remarks = "Supplier Charges Advance  ,Consignment Code:" + request.Entity.JobNo + "";

                        }
                        else
                        {
                            k.Payments.RemoveAt(0);
                        }
                        newpay = false;
                    }


                }
                if (newpay)
                {
                    if (k.SupplierAdvanceAmount > 0)
                    {
                        k.Payments = new System.Collections.Generic.List<PaymentRow>();
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
                        receiptRow.TrxDate = request.Entity.Date;
                        receiptRow.Amount = k.SupplierAdvanceAmount;

                        var account = uow.Connection.ById<AccountsRow>(k.AccountId);
                        receiptRow.CreditAccountHeadId = account.AccountHeadId;
                        receiptRow.CreditAccountId = k.AccountId;
                        receiptRow.PaymentMethod = k.PaymentType;

                        receiptRow.DebitAccountHeadId = config.SupplierPaymentLedgerId;
                        receiptRow.EntityType = k.Table;
                        receiptRow.VType = 2;
                        receiptRow.SupplierId = k.SupplierId;
                        receiptRow.Remarks = "Supplier Charges Advance  ,Consignment Code:" + request.Entity.JobNo + "";
                        k.Payments.Add(receiptRow);
                    }
                }
            }

            //supplier advance

            RetrieveRequest retrieveRequest = new RetrieveRequest();
            retrieveRequest.EntityId = request.EntityId;
            var exsist = Retrieve(uow.Connection, retrieveRequest);
            
            if (exsist.Entity.AdvancePaymentType != request.Entity.AdvancePaymentType)
            {
                if (request.Entity.AdvancePaymentType == PymentTypes.Cheque)
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
                            receiptRow.CreditAccountHeadId = config.PDCDepositsLedger;
                            receiptRow.EntityType = che.Table;
                            receiptRow.VType = 1;
                            receiptRow.CustomerId = request.Entity.Billing;
                            receiptRow.Remarks = "Cheque No:" + che.ChequeNo + ",Consignment Advance,Consignment Code:" + request.Entity.JobNo + "";
                            che.Receipts.Add(receiptRow);
                        }
                    }
                    if (request.Entity.AdvanceReceipt.Count > 0)
                    {
                        request.Entity.AdvanceReceipt = new System.Collections.Generic.List<ReceiptRow>();

                    }
                }
                else
                {
                    if (request.Entity.AdvanceReceipt.Count > 0)
                    {
                        if (request.Entity.AdvanceAmount != null)
                        {
                            request.Entity.AdvanceReceipt[0].TrxDate = request.Entity.Date;
                            request.Entity.AdvanceReceipt[0].Amount = request.Entity.AdvanceAmount;
                            request.Entity.AdvanceReceipt[0].CreditAccountHeadId = config.InvoiceCollectionLedgerId;
                            request.Entity.AdvanceReceipt[0].PaymentMethod = (AccountTypes)((int)request.Entity.AdvancePaymentType);
                            request.Entity.AdvanceReceipt[0].CustomerId = request.Entity.Billing;
                            var account = uow.Connection.ById<AccountsRow>(request.Entity.AdvanceAccountId);
                            request.Entity.AdvanceReceipt[0].DebitAccountHeadId = account.AccountHeadId;
                            request.Entity.AdvanceReceipt[0].DebitAccountId = request.Entity.AdvanceAccountId;
                        }
                        else
                        {
                            request.Entity.AdvanceReceipt = new System.Collections.Generic.List<ReceiptRow>();
                        }

                    }
                    else
                    {
                        if (request.Entity.AdvanceAmount != null)
                        {
                            request.Entity.AdvanceReceipt = new System.Collections.Generic.List<ReceiptRow>();
                            Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
                            receiptRow.VNo = new DataHelper().GetVoucherNo(uow.Connection, 1).voucherno;
                            receiptRow.TrxDate = request.Entity.Date;
                            receiptRow.Amount = request.Entity.AdvanceAmount;

                            var account = uow.Connection.ById<AccountsRow>(request.Entity.AdvanceAccountId);
                            receiptRow.DebitAccountHeadId = account.AccountHeadId;
                            receiptRow.DebitAccountId = request.Entity.AdvanceAccountId;
                            receiptRow.PaymentMethod = (AccountTypes)((int)request.Entity.AdvancePaymentType);

                            receiptRow.CreditAccountHeadId = config.InvoiceCollectionLedgerId;
                            receiptRow.EntityType = request.Entity.Table;
                            receiptRow.VType = 1;
                            receiptRow.CustomerId = request.Entity.Billing;
                            receiptRow.Remarks = "Consignment Advance,Consignment Code:" + request.Entity.JobNo + "";
                            request.Entity.AdvanceReceipt.Add(receiptRow);
                        }
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
                if (request.Entity.AdvancePaymentType == PymentTypes.Cheque)
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
                                    che.Receipts[0].CreditAccountHeadId = config.PDCDepositsLedger;
                                    che.Receipts[0].PaymentMethod = che.PaymentType;
                                    che.Receipts[0].CustomerId = request.Entity.Billing;
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
                                receiptRow.CreditAccountHeadId = config.PDCDepositsLedger;
                                receiptRow.EntityType = che.Table;
                                receiptRow.VType = 1;
                                receiptRow.CustomerId = request.Entity.Billing;
                                receiptRow.Remarks = "Cheque No:" + che.ChequeNo + ",Consignment Advance,Consignment Code:" + request.Entity.JobNo + "";
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
                    if (request.Entity.AdvanceReceipt.Count > 0)
                    {
                        request.Entity.AdvanceReceipt[0].TrxDate = request.Entity.Date;
                        request.Entity.AdvanceReceipt[0].Amount = request.Entity.AdvanceAmount;
                        request.Entity.AdvanceReceipt[0].CreditAccountHeadId = config.InvoiceCollectionLedgerId;
                        request.Entity.AdvanceReceipt[0].PaymentMethod = (AccountTypes)((int)request.Entity.AdvancePaymentType);
                        request.Entity.AdvanceReceipt[0].CustomerId = request.Entity.Billing;
                        var account = uow.Connection.ById<AccountsRow>(request.Entity.AdvanceAccountId);
                        request.Entity.AdvanceReceipt[0].DebitAccountHeadId = account.AccountHeadId;
                        request.Entity.AdvanceReceipt[0].DebitAccountId = request.Entity.AdvanceAccountId;

                    }
                }
            }

            //supplier advance

            foreach (var i in request.Entity.Expenses)
            {
                i.VType = 2;
                var account = uow.Connection.ById<AccountsRow>(i.CreditAccountId);
                i.CreditAccountHeadId = account.AccountHeadId;
            }
            return new MyRepository().Update(uow, request);
        }
        public bool VnoExsist(SaveRequest<MyRow> request, int voucherno)
        {
            foreach (var item in request.Entity.ConsignmentVehicleDetails)
            {
                if (item.Payments != null)
                {
                    if (item.Payments.Any(i => i.VNo == voucherno))
                    {
                        return true;
                    }
                }
                if (item.VehicleCharges != null)
                {
                    foreach (var l in item.VehicleCharges)
                    {
                        if (l.Payments != null)
                        {
                            if (l.Payments.Any(i => i.VNo == voucherno))
                            {
                                return true;
                            }
                        }

                    }
                }
            }
            foreach (var k in request.Entity.ChargeDetailList)
            {
                if (k.Payments != null)
                {
                    if (k.Payments.Any(i => i.VNo == voucherno))
                    {
                        return true;
                    }
                }
            }
            return false;

        }
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            var k= new MyRepository().Retrieve(connection, request);
            k.Entity.ConsignmentVehicleDetails = k.Entity.ConsignmentVehicleDetails.OrderBy(i => i.StartDate).ToList();
           
            int i = 1;
            foreach (var item in k.Entity.ConsignmentVehicleDetails)
            {
                item.Slno = i++;
            }

            k.Entity.ChargeDetailList = k.Entity.ChargeDetailList.OrderBy(i => i.Id).ToList();
            int chargesl = 1;
            foreach (var item in k.Entity.ChargeDetailList)
            {
                item.Slno = chargesl++;
            }

            return k;
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            var fi=request.EqualityFilter.Where(i => i.Key.Contains("FromLocations")).SingleOrDefault();
            var value = JsonConvert.DeserializeObject<List<int>>(fi.Value.ToString());
            request.EqualityFilter.Remove("FromLocations");

            var to = request.EqualityFilter.Where(i => i.Key.Contains("ToLocations")).SingleOrDefault();
            var valueto = JsonConvert.DeserializeObject<List<int>>(to.Value.ToString());
            request.EqualityFilter.Remove("ToLocations");

            var result= new MyRepository().List(connection, request);
            if (value.Count > 0)
            {
                result.Entities = result.Entities.Where(i => i.ConsignmentVehicleDetails.Any(m => value.Contains(m.ShippingAreaFrom ?? 0))).ToList();
            }
            if (valueto.Count > 0)
            {
                result.Entities = result.Entities.Where(i => i.ConsignmentVehicleDetails.Any(m => valueto.Contains(m.ShippingAreaTo ?? 0))).ToList();
            }
            result.Entities = result.Entities.OrderByDescending(i => i.JobNo).ToList();
            return result;
        }
        public GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request)
        {
            return new MyRepository().GetNextNumber(connection, request);
        }
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.ConsignmentColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "Consignment_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
