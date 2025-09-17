using Serenity;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using MyRepository = SerExtraCore.VehicleMovDetails.Repositories.VehicleMovDetailsRepository;
using MyRow = SerExtraCore.VehicleMovDetails.Entities.VehicleMovDetailsRow;
using SerExtraCore.Administration.Entities;
using SerExtraCore.VehicleMovDetails.Entities;
using SerExtraCore.Accounts.Entities;
using SerExtraCore.Web.Modules;
using SerExtraCore.FuelDetails;
using Org.BouncyCastle.Asn1.Ocsp;
using System.Linq;
using SerExtraCore.Master.Entities;
using SerExtraCore.Transactions.Entities;
using System.Net.Http;
using System.Text;
using Newtonsoft.Json;
using System.Threading.Tasks;
using SerExtraCore.Accounts.Endpoints;

using SerExtraCore.Accounts.Pages;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using static MVC.Views.Accounts;
using static MVC.Views.Membership;
using System.Collections.Generic;


namespace SerExtraCore.VehicleMovDetails.Endpoints
{
    [Route("Services/VehicleMovDetails/VehicleMovDetails/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class VehicleMovDetailsController : ServiceEndpoint
    {
   
        [HttpPost, AuthorizeCreate(typeof(MyRow))]

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //var config = uow.Connection.ById<VehicleMovDetailsRow>();
            GetNextNumberRequest getNextNumberRequest = new GetNextNumberRequest();
            getNextNumberRequest.Prefix = "TS";
            getNextNumberRequest.Length = 6;
            var c = new MyRepository().GetNextNumber(uow.Connection, getNextNumberRequest);
            request.Entity.TsNo = c.Serial;

            request.Entity.Receipts = new System.Collections.Generic.List<ReceiptRow>();
            request.Entity.FuelId = new System.Collections.Generic.List<MoneyOutRow>();
            
            request.Entity.Payments = new System.Collections.Generic.List<PaymentRow>();


            var config = uow.Connection.ById<ConfigurationRow>(1);
            int creditvno = new DataHelper().GetVoucherNo(uow.Connection, 4).voucherno - 1;

            int creditfuelvno = new DataHelper().GetVoucherNo(uow.Connection, 4).voucherno - 1;
            int cashfuelvno = new DataHelper().GetVoucherNo(uow.Connection, 2).voucherno - 1;
            //request.Entity.Receipts = new System.Collections.Generic.List<ReceiptRow>();
            //var configs = uow.Connection.ById<ConfigurationRow>(1);
            int cashvno = new DataHelper().GetVoucherNo(uow.Connection, 1).voucherno - 1;


            foreach (var item in request.Entity.VehicleFreight)
            {
                item.Receipts = new System.Collections.Generic.List<ReceiptRow>();




                if (item.CashCredit == SerExtraCore.VehicleFreight.AmountType.Value2)
                {
                    Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
                    receiptRow.VNo = creditvno = creditvno + 1;
                    receiptRow.TrxDate = item.TripDate;
                    receiptRow.Amount = item.TotalFreight;
                    int? lastFreightId = request.Entity.VehicleFreight.OrderByDescending(i => i.Id).FirstOrDefault()?.Id;

                    receiptRow.TsId = request.Entity.Id;
                    receiptRow.PaymentMethod = AccountTypes.Value1;
                    receiptRow.DebitAccountId = null;
                    receiptRow.CreditAccountId = null;

                    receiptRow.CreditAccountHeadId = config.InvoiceLedgerId;


                    receiptRow.DebitAccountHeadId = config.ReceivableLedgerId;
                    receiptRow.EntityType = request.Entity.Table;
                    receiptRow.VType = 4;

                    receiptRow.CustomerId = item.partys;



                    receiptRow.PaymentMethod = AccountTypes.Value1;
                    receiptRow.Remarks = "Tripsheet No:" + request.Entity.TsNo + "";
                    item.Receipts.Add(receiptRow);
                }
                else
                {



                    Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
                    receiptRow.VNo = cashvno = cashvno + 1;
                    receiptRow.TrxDate = item.TripDate;
                    receiptRow.Amount = item.TotalFreight;
                    //receiptRow.FreightId = item.Id;
                    //receiptRow.TsId = item.TsId;
                    receiptRow.DebitAccountId = item.DebitAccountId;

                    receiptRow.CreditAccountId = null;

                    receiptRow.CreditAccountHeadId = config.InvoiceLedgerId;


                    // receiptRow.DebitAccountHeadId = config.ReceivableLedgerId;
                    var account = uow.Connection.ById<AccountsRow>(item.DebitAccountId);
                    receiptRow.DebitAccountHeadId = account.AccountHeadId;

                    //receiptRow.DebitAccountId = config.ReceivableLedgerId;

                    receiptRow.EntityType = request.Entity.Table;
                    receiptRow.VType = 1;

                    receiptRow.CustomerId = item.partys;



                    receiptRow.PaymentMethod = AccountTypes.Value2;
                    receiptRow.Remarks = "Tripsheet No:" + request.Entity.TsNo + "";

                    item.Receipts.Add(receiptRow);

                }

            }
            foreach (var item1 in request.Entity.FuelDetails)
            {
                item1.Expenses = new System.Collections.Generic.List<PaymentRow>();

                item1.FuelId=new System.Collections.Generic.List<MoneyOutRow>();
               

                if (item1.AmountType == SerExtraCore.FuelDetails.AmountType.Value2)
                {
                    Accounts.Entities.MoneyOutRow paymentRow = new Accounts.Entities.MoneyOutRow();
                    paymentRow.VNo = creditfuelvno = creditfuelvno + 1;
                    paymentRow.TrxDate = item1.Date;
                    paymentRow.Amount = item1.TotalAmt;
                    paymentRow.TotalAmount = item1.TotalAmt;
                    paymentRow.SupplierId = item1.Supplierid;
                    //int? lastFreightId = request.Entity.VehicleFreight.OrderByDescending(i => i.Id).FirstOrDefault()?.Id;

                    //receiptRow.FreightId=item.Id;
                    paymentRow.PaymentMethod = item1.PaymentMethod;

                    // paymentRow.PaymentMethod = (AccountTypes)((int)item1.PaymentMethod);
                    //var account = uow.Connection.ById<AccountsRow>(item1.DebitAccountId);
                    //paymentRow.CreditAccountHeadId = account.AccountHeadId;
                    // receiptRow.CreditAccountId = l.AccountId;
                    // paymentRow.DebitAccountId = null;

                    // paymentRow.CreditAccountId = null;

                    //paymentRow.CreditAccountHeadId = config.InvoiceLedgerId;


                    //paymentRow.DebitAccountHeadId = config.ReceivableLedgerId;
                    // paymentRow.EntityType = request.Entity.Table;
                    paymentRow.VType = 4;
                    //paymentRow.AccountHeadLedgerType = 100;
                    // paymentRow.CreditAccountId = item1.DebitAccountId ;

                    paymentRow.AccountHeadId = 102;
                    //** DebitAccountid means it creditAccountid in fuel table
                    paymentRow.AccountId = item1.DebitAccountId;



                    //paymentRow.PaymentMethod = AccountTypes.Value1;
                    // paymentRow.Remarks = "Tripsheet No:" + request.Entity.TsNo + "";
                    var b = request.Entity.VehicleId;
                    var cd = request.Entity.VehicleNumber;
                    //var vehicleService = new Master.Vehicles.VehiclesService();
                    var vehicle = uow.Connection.ById<VehiclesRow>(request.Entity.VehicleId);
                    var vnumber = vehicle.VehicleNumber;

                    // Fetch the vehicle based on its ID
                    // var existingVehicle = Master.vehicleService.RetrieveByKey(request.Entity.VehicleId);


                    paymentRow.Remarks = "Tripsheet No:" + request.Entity.TsNo + " Vehicle Number: " + vnumber;

                    item1.FuelId.Add(paymentRow);
                    //var response = _moneyOutController.Create(uow, request, paymentRow);
                    // var response = _moneyOutController.Create(uow, request);

                    //PaymentRow endpoint
                    Accounts.Entities.PaymentRow paymentRows = new Accounts.Entities.PaymentRow();
                    //paymentRows.VNo = creditfuelvno = creditfuelvno + 1;
                    paymentRows.VNo = creditfuelvno = creditfuelvno + 1;
                    paymentRows.TrxDate = item1.Date;
                    paymentRows.Amount = item1.TotalAmt;
                   // paymentRows.To = item1.TotalAmt;
                    paymentRows.SupplierId = item1.Supplierid;

                    //receiptRow.FreightId=item.Id;
                    // paymentRows.PaymentMethod = item1.PaymentMethod;

                    // paymentRow.PaymentMethod = (AccountTypes)((int)item1.PaymentMethod);
                    var account = uow.Connection.ById<AccountsRow>(item1.DebitAccountId);
                    //paymentRow.CreditAccountHeadId = account.AccountHeadId;
                    // receiptRow.CreditAccountId = l.AccountId;
                    // paymentRow.DebitAccountId = null;

                    //paymentRows.CreditAccountId = item1.DebitAccountId;

                    //paymentRow.CreditAccountHeadId = config.InvoiceLedgerId;

                    paymentRows.CreditAccountId = item1.DebitAccountId; ;
                    paymentRows.DebitAccountHeadId = 102;
                    // paymentRow.EntityType = request.Entity.Table;
                    paymentRows.VType = 4;
                    //paymentRow.AccountHeadLedgerType = 100;
                    // paymentRow.CreditAccountId = item1.DebitAccountId ;

                    // paymentRows.CreditAccountHeadId = 102;
                    paymentRows.CreditAccountHeadId = account.AccountHeadId;
                    // paymentRows.DebitAccountId = item1.DebitAccountId;

                    paymentRows.VehicleId = request.Entity.VehicleId;


                    paymentRows.PaymentMethod = AccountTypes.Value2;
                    // paymentRow.Remarks = "Tripsheet No:" + request.Entity.TsNo + "";
                    var bb = request.Entity.VehicleId;
                    var cc = request.Entity.VehicleNumber;
                    //var vehicleService = new Master.Vehicles.VehiclesService();
                    var vehicles = uow.Connection.ById<VehiclesRow>(request.Entity.VehicleId);
                   // var vnumbers = vehicle.VehicleNumber;

                    // Fetch the vehicle based on its ID
                    // var existingVehicle = Master.vehicleService.RetrieveByKey(request.Entity.VehicleId);


                    paymentRows.Remarks = "Tripsheet No:" + request.Entity.TsNo + " Vehicle Number: " + vnumber;

                    item1.Expenses.Add(paymentRows);

                    //  item1.Expenses.Add(paymentRows);

                }

                else
                {


                    Accounts.Entities.MoneyOutRow paymentRow = new Accounts.Entities.MoneyOutRow();
                    paymentRow.VNo = cashfuelvno = cashfuelvno + 1;
                    paymentRow.TrxDate = item1.Date;
                    paymentRow.Amount = item1.TotalAmt;
                    paymentRow.TotalAmount = item1.TotalAmt;
                    paymentRow.SupplierId = item1.Supplierid;
                    

                    //receiptRow.FreightId=item.Id;

                    //var accounts = uow.Connection.ById<AccountsRow>(item1.DebitAccountId);
                    //paymentRow.CreditAccountHeadId = account.AccountHeadId;
                    // receiptRow.CreditAccountId = l.AccountId;
                    // paymentRow.DebitAccountId = null;

                    // paymentRow.CreditAccountId = null;

                    //paymentRow.CreditAccountHeadId = config.InvoiceLedgerId;


                    //paymentRow.DebitAccountHeadId = config.ReceivableLedgerId;
                    // paymentRow.EntityType = request.Entity.Table;
                    paymentRow.VType = 2;
                    //paymentRow.AccountHeadLedgerType = 100;
                    // paymentRow.CreditAccountId = item1.DebitAccountId ;

                    // paymentRow.CustomerId = item1.PumpId;

                    paymentRow.AccountHeadId = item1.DebitAccountId;

                    paymentRow.PaymentMethod = AccountTypes.Value1;

                    var b = request.Entity.VehicleId;

                    var cd = request.Entity.VehicleNumber;
                    var vehicle = uow.Connection.ById<VehiclesRow>(request.Entity.VehicleId);
                    var vnumber = vehicle.VehicleNumber;
                    paymentRow.Remarks = "Tripsheet No:" + request.Entity.TsNo + " Vehicle Number: " + vnumber;
                    item1.FuelId.Add(paymentRow);


                    //////////// //PaymentRow endpoint//////////////


                    Accounts.Entities.PaymentRow paymentRows = new Accounts.Entities.PaymentRow();
                    paymentRows.VNo = cashfuelvno = cashfuelvno + 1;
                    paymentRows.TrxDate = item1.Date;
                    paymentRows.Amount = item1.TotalAmt;
                    // paymentRows.To = item1.TotalAmt;
                    paymentRows.SupplierId = item1.Supplierid;
                   

                   
                    paymentRows.PaymentMethod = item1.PaymentMethod;

                    // paymentRow.PaymentMethod = (AccountTypes)((int)item1.PaymentMethod);
                    var account = uow.Connection.ById<AccountsRow>(item1.DebitAccountId);
                    //paymentRow.CreditAccountHeadId = account.AccountHeadId;
                    paymentRows.CreditAccountId = item1.DebitAccountId; ;
               

                    //paymentRow.CreditAccountHeadId = config.InvoiceLedgerId;


                    paymentRows.DebitAccountHeadId = 102;
                    // paymentRow.EntityType = request.Entity.Table;
                    paymentRows.VType = 2;
                    //paymentRow.AccountHeadLedgerType = 100;
                    // paymentRow.CreditAccountId = item1.DebitAccountId ;

                    paymentRows.CreditAccountHeadId = account.AccountHeadId;
                   // paymentRows.DebitAccountId = item1.DebitAccountId;

                    paymentRows.VehicleId = request.Entity.VehicleId;


                    paymentRow.PaymentMethod = AccountTypes.Value1;
                    // paymentRow.Remarks = "Tripsheet No:" + requ  est.Entity.TsNo + "";
                    var bb = request.Entity.VehicleId;
                    var cc = request.Entity.VehicleNumber;
                    //var vehicleService = new Master.Vehicles.VehiclesService();
                    var vehicles = uow.Connection.ById<VehiclesRow>(request.Entity.VehicleId);
                    // var vnumbers = vehicle.VehicleNumber;

                    // Fetch the vehicle based on its ID
                    // var existingVehicle = Master.vehicleService.RetrieveByKey(request.Entity.VehicleId);


                    paymentRows.Remarks = "Tripsheet No:" + request.Entity.TsNo + " Vehicle Number: " + vnumber;

                    item1.Expenses.Add(paymentRows);
                }
               
            }

                return new MyRepository().Create(uow, request);



        }
        

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.Receipts = new System.Collections.Generic.List<ReceiptRow>();
            request.Entity.FuelId = new System.Collections.Generic.List<MoneyOutRow>();
            request.Entity.Payments = new System.Collections.Generic.List<PaymentRow>();

            // request.Entity.Expenses = new System.Collections.Generic.List<PaymentRow>();

            var config = uow.Connection.ById<ConfigurationRow>(1);
            int creditvno = new DataHelper().GetVoucherNo(uow.Connection, 4).voucherno - 1;

            var existing = Retrieve(uow.Connection, new RetrieveRequest { EntityId = request.EntityId });

            //request.Entity.Receipts = new System.Collections.Generic.List<ReceiptRow>();
            //var configs = uow.Connection.ById<ConfigurationRow>(1);
            int cashvno = new DataHelper().GetVoucherNo(uow.Connection, 1).voucherno - 1;
            int creditfuelvno = new DataHelper().GetVoucherNo(uow.Connection, 2).voucherno - 1;
            int cashfuelvno = new DataHelper().GetVoucherNo(uow.Connection, 2).voucherno - 1;
            foreach (var item in request.Entity.VehicleFreight)
            {
                
                //var reciptrow = uow.Connection.First<ReceiptRow>(ReceiptRow.Fields.FreightId == (item.Id ?? 0));
                //var existingItem = existing.Entity.VehicleFreight.FirstOrDefault(i => i.Id == item.Id);
                if (existing.Entity.VehicleFreight.Any(i => i.Id == item.Id))
                {
                  

                    var child = existing.Entity.VehicleFreight.Where(i => i.Id == item.Id).SingleOrDefault();

                    if (child.CashCredit != null)
                     
                        {



                        //item.Receipts[0].PaymentMethod = AccountTypes.Value1;
                        //item.Receipts[0].CustomerId = item.partys;
                        //item.Receipts[0].Amount = item.TotalFreight;
                        //item.Receipts[0].PaymentMethod = item.PaymentMethod;
                        if (item.CashCredit == SerExtraCore.VehicleFreight.AmountType.Value2)
                        {
                            item.Receipts[0].PaymentMethod = AccountTypes.Value1;
                            item.Receipts[0].CustomerId = item.partys;
                            item.Receipts[0].Amount = item.TotalFreight;
                            
                            item.Receipts[0].DebitAccountId = null;
                            item.Receipts[0].CreditAccountId = null;

                            item.Receipts[0].CreditAccountHeadId = config.InvoiceLedgerId;


                            item.Receipts[0].DebitAccountHeadId = config.ReceivableLedgerId;
                            item.Receipts[0].EntityType = request.Entity.Table;
                            item.Receipts[0].VType = 4;
                        }
                        else
                        {
                            item.Receipts[0].PaymentMethod = AccountTypes.Value2;
                            item.Receipts[0].CustomerId = item.partys;
                            item.Receipts[0].Amount = item.TotalFreight;
                            item.Receipts[0].DebitAccountId = item.DebitAccountId; ;
                            item.Receipts[0].CreditAccountId = null;

                            item.Receipts[0].CreditAccountHeadId = config.InvoiceLedgerId;


                            // receiptRow.DebitAccountHeadId = config.ReceivableLedgerId;
                            var account = uow.Connection.ById<AccountsRow>(item.DebitAccountId);
                            item.Receipts[0].DebitAccountHeadId = account.AccountHeadId;
                            item.Receipts[0].EntityType = request.Entity.Table;
                            item.Receipts[0].VType = 1;

                        }
                    }                                    
                }
                else
                {

                    item.Receipts = new System.Collections.Generic.List<ReceiptRow>();

                    if (item.CashCredit == SerExtraCore.VehicleFreight.AmountType.Value2)
                    {
                        Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
                        receiptRow.VNo = creditvno = creditvno + 1;
                        receiptRow.TrxDate = item.TripDate;
                        receiptRow.Amount = item.TotalFreight;
                        //int? lastFreightId = request.Entity.VehicleFreight.OrderByDescending(i => i.Id).FirstOrDefault()?.Id;

                        //receiptRow.TsId = request.Entity.Id;
                       // receiptRow.PaymentMethod = AccountTypes.Value1;
                        receiptRow.DebitAccountId = null;
                        receiptRow.CreditAccountId = null;

                        receiptRow.CreditAccountHeadId = config.InvoiceLedgerId;


                        receiptRow.DebitAccountHeadId = config.ReceivableLedgerId;
                        receiptRow.EntityType = request.Entity.Table;
                        receiptRow.VType = 4;

                        receiptRow.CustomerId = item.partys;



                        receiptRow.PaymentMethod = AccountTypes.Value1;
                        receiptRow.Remarks = "Tripsheet No:" + request.Entity.TsNo + "";
                        item.Receipts.Add(receiptRow);
                    }
                    else
                    {



                        Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
                        receiptRow.VNo = cashvno = cashvno + 1;
                        receiptRow.TrxDate = item.TripDate;
                        receiptRow.Amount = item.TotalFreight;
                        //receiptRow.FreightId = item.Id;
                        //receiptRow.TsId = item.TsId;
                        receiptRow.DebitAccountId = item.DebitAccountId;

                        receiptRow.CreditAccountId = null;

                        receiptRow.CreditAccountHeadId = config.InvoiceLedgerId;


                        // receiptRow.DebitAccountHeadId = config.ReceivableLedgerId;
                        var account = uow.Connection.ById<AccountsRow>(item.DebitAccountId);
                        receiptRow.DebitAccountHeadId = account.AccountHeadId;

                        //receiptRow.DebitAccountId = config.ReceivableLedgerId;

                        receiptRow.EntityType = request.Entity.Table;
                        receiptRow.VType = 1;

                        receiptRow.CustomerId = item.partys;



                        receiptRow.PaymentMethod = AccountTypes.Value2;
                        receiptRow.Remarks = "Tripsheet No:" + request.Entity.TsNo + "";

                        item.Receipts.Add(receiptRow);

                    }
                }
            }
            foreach (var item1 in request.Entity.FuelDetails)
            {
                if (existing.Entity.FuelDetails.Any(i => i.Id == item1.Id))
                {
                    var childfuel = existing.Entity.FuelDetails.Where(i => i.Id == item1.Id).SingleOrDefault();
                    if (childfuel.AmountType != null)
                    {
                        if (item1.AmountType == SerExtraCore.FuelDetails.AmountType.Value2)
                        {
                            item1.FuelId[0].Amount=item1.TotalAmt;
                           item1.FuelId[0].TotalAmount = item1.TotalAmt;
                            item1.FuelId[0].SupplierId = item1.Supplierid;
                            item1.FuelId[0].PaymentMethod = item1.PaymentMethod;
                            item1.FuelId[0].VType = 4;


                            item1.FuelId[0].AccountHeadId = 102;
                            item1.FuelId[0].AccountId = item1.DebitAccountId;

                            ////////////PaymentRow endpoint//////////////////

                            
                            item1.Expenses[0].TrxDate = item1.Date;
                            item1.Expenses[0].Amount = item1.TotalAmt;
                            // paymentRows.To = item1.TotalAmt;
                            item1.Expenses[0].SupplierId = item1.Supplierid;

                            //receiptRow.FreightId=item.Id;
                            // paymentRows.PaymentMethod = item1.PaymentMethod;

                            // paymentRow.PaymentMethod = (AccountTypes)((int)item1.PaymentMethod);
                            var account = uow.Connection.ById<AccountsRow>(item1.DebitAccountId);
                            //paymentRow.CreditAccountHeadId = account.AccountHeadId;
                            // receiptRow.CreditAccountId = l.AccountId;
                            // paymentRow.DebitAccountId = null;

                            //paymentRows.CreditAccountId = item1.DebitAccountId;

                            //paymentRow.CreditAccountHeadId = config.InvoiceLedgerId;

                            item1.Expenses[0].CreditAccountId = item1.DebitAccountId; ;
                            item1.Expenses[0].DebitAccountHeadId = 102;
                            // paymentRow.EntityType = request.Entity.Table;
                            item1.Expenses[0].VType = 4;
                            //paymentRow.AccountHeadLedgerType = 100;
                            // paymentRow.CreditAccountId = item1.DebitAccountId ;

                            // paymentRows.CreditAccountHeadId = 102;
                            item1.Expenses[0].CreditAccountHeadId = account.AccountHeadId;
                            // paymentRows.DebitAccountId = item1.DebitAccountId;

                            item1.Expenses[0].VehicleId = request.Entity.VehicleId;


                            item1.Expenses[0].PaymentMethod = AccountTypes.Value2;

                        }
                        else
                        {

                            item1.FuelId[0].Amount = item1.TotalAmt;
                            item1.FuelId[0].TotalAmount = item1.TotalAmt;
                            item1.FuelId[0].SupplierId = item1.Supplierid;
                            //int? lastFreightId = request.Entity.VehicleFreight.OrderByDescending(i => i.Id).FirstOrDefault()?.Id;

                            //receiptRow.FreightId=item.Id;

                            //var account = uow.Connection.ById<AccountsRow>(item1.DebitAccountId);
                            //paymentRow.CreditAccountHeadId = account.AccountHeadId;
                            // receiptRow.CreditAccountId = l.AccountId;
                            // paymentRow.DebitAccountId = null;

                            // paymentRow.CreditAccountId = null;

                            //paymentRow.CreditAccountHeadId = config.InvoiceLedgerId;


                            //paymentRow.DebitAccountHeadId = config.ReceivableLedgerId;
                            // paymentRow.EntityType = request.Entity.Table;
                            item1.FuelId[0].VType = 2;
                            //paymentRow.AccountHeadLedgerType = 100;
                            // paymentRow.CreditAccountId = item1.DebitAccountId ;

                            // paymentRow.CustomerId = item1.PumpId;

                            item1.FuelId[0].AccountHeadId = item1.DebitAccountId;

                            item1.FuelId[0].PaymentMethod = AccountTypes.Value1;






                            //////////// //PaymentRow endpoint//////////////


                            item1.Expenses[0].TrxDate = item1.Date;
                            item1.Expenses[0].Amount = item1.TotalAmt;
                            // paymentRows.To = item1.TotalAmt;
                            item1.Expenses[0].SupplierId = item1.Supplierid;



                            item1.Expenses[0].PaymentMethod = item1.PaymentMethod;

                            // paymentRow.PaymentMethod = (AccountTypes)((int)item1.PaymentMethod);
                            var account = uow.Connection.ById<AccountsRow>(item1.DebitAccountId);
                            //paymentRow.CreditAccountHeadId = account.AccountHeadId;
                            item1.Expenses[0].CreditAccountId = item1.DebitAccountId; ;


                            //paymentRow.CreditAccountHeadId = config.InvoiceLedgerId;


                            item1.Expenses[0].DebitAccountHeadId = 102;
                            // paymentRow.EntityType = request.Entity.Table;
                            item1.Expenses[0].VType = 2;
                            //paymentRow.AccountHeadLedgerType = 100;
                            // paymentRow.CreditAccountId = item1.DebitAccountId ;

                            item1.Expenses[0].CreditAccountHeadId = account.AccountHeadId;
                            // paymentRows.DebitAccountId = item1.DebitAccountId;

                            item1.Expenses[0].VehicleId = request.Entity.VehicleId;


                            item1.Expenses[0].PaymentMethod = AccountTypes.Value1;
                        }
                    }
                }
                else { 

                    item1.Expenses = new System.Collections.Generic.List<PaymentRow>();
                     item1.FuelId = new System.Collections.Generic.List<MoneyOutRow>();

                if (item1.AmountType == SerExtraCore.FuelDetails.AmountType.Value2)
                {
                    Accounts.Entities.MoneyOutRow paymentRow = new Accounts.Entities.MoneyOutRow();
                    paymentRow.VNo = creditfuelvno = creditfuelvno + 1;
                    paymentRow.TrxDate = item1.Date;
                    paymentRow.Amount = item1.TotalAmt;
                    paymentRow.TotalAmount = item1.TotalAmt;
                    paymentRow.SupplierId = item1.Supplierid;
                    //int? lastFreightId = request.Entity.VehicleFreight.OrderByDescending(i => i.Id).FirstOrDefault()?.Id;

                    //receiptRow.FreightId=item.Id;
                    paymentRow.PaymentMethod = item1.PaymentMethod;

                    // paymentRow.PaymentMethod = (AccountTypes)((int)item1.PaymentMethod);
                    //var account = uow.Connection.ById<AccountsRow>(item1.DebitAccountId);
                    //paymentRow.CreditAccountHeadId = account.AccountHeadId;
                    // receiptRow.CreditAccountId = l.AccountId;
                    // paymentRow.DebitAccountId = null;

                    // paymentRow.CreditAccountId = null;

                    //paymentRow.CreditAccountHeadId = config.InvoiceLedgerId;


                    //paymentRow.DebitAccountHeadId = config.ReceivableLedgerId;
                    // paymentRow.EntityType = request.Entity.Table;
                    paymentRow.VType = 4;
                    //paymentRow.AccountHeadLedgerType = 100;
                    // paymentRow.CreditAccountId = item1.DebitAccountId ;

                    paymentRow.AccountHeadId = 102;
                    paymentRow.AccountId = item1.DebitAccountId;



                    //paymentRow.PaymentMethod = AccountTypes.Value1;
                    // paymentRow.Remarks = "Tripsheet No:" + request.Entity.TsNo + "";
                    var b = request.Entity.VehicleId;
                    var cd = request.Entity.VehicleNumber;
                    //var vehicleService = new Master.Vehicles.VehiclesService();
                    var vehicle = uow.Connection.ById<VehiclesRow>(request.Entity.VehicleId);
                    var vnumber = vehicle.VehicleNumber;

                    // Fetch the vehicle based on its ID
                    // var existingVehicle = Master.vehicleService.RetrieveByKey(request.Entity.VehicleId);


                    paymentRow.Remarks = "Tripsheet No:" + request.Entity.TsNo + " Vehicle Number: " + vnumber;

                    //request.Entity.Expenses.Add(paymentRow);
                    item1.FuelId.Add(paymentRow);

                    //MoneyOutRo moneyOutController = new MoneyOutController();
                    //moneyOutController.ProcessFuelDetails(paymentRow);

                    /////////////// //PaymentRow endpoint//////////////////
                    //PaymentRow endpoint
                    Accounts.Entities.PaymentRow paymentRows = new Accounts.Entities.PaymentRow();
                    //paymentRows.VNo = creditfuelvno = creditfuelvno + 1;
                    paymentRows.VNo = creditfuelvno = creditfuelvno + 1;
                    paymentRows.TrxDate = item1.Date;
                    paymentRows.Amount = item1.TotalAmt;
                    // paymentRows.To = item1.TotalAmt;
                    paymentRows.SupplierId = item1.Supplierid;

                    //receiptRow.FreightId=item.Id;
                    // paymentRows.PaymentMethod = item1.PaymentMethod;

                    // paymentRow.PaymentMethod = (AccountTypes)((int)item1.PaymentMethod);
                    var account = uow.Connection.ById<AccountsRow>(item1.DebitAccountId);
                    //paymentRow.CreditAccountHeadId = account.AccountHeadId;
                    // receiptRow.CreditAccountId = l.AccountId;
                    // paymentRow.DebitAccountId = null;

                    //paymentRows.CreditAccountId = item1.DebitAccountId;

                    //paymentRow.CreditAccountHeadId = config.InvoiceLedgerId;

                    paymentRows.CreditAccountId = item1.DebitAccountId; ;
                    paymentRows.DebitAccountHeadId = 102;
                    // paymentRow.EntityType = request.Entity.Table;
                    paymentRows.VType = 4;
                    //paymentRow.AccountHeadLedgerType = 100;
                    // paymentRow.CreditAccountId = item1.DebitAccountId ;

                    // paymentRows.CreditAccountHeadId = 102;
                    paymentRows.CreditAccountHeadId = account.AccountHeadId;
                    // paymentRows.DebitAccountId = item1.DebitAccountId;

                    paymentRows.VehicleId = request.Entity.VehicleId;


                    paymentRows.PaymentMethod = AccountTypes.Value2;
                    // paymentRow.Remarks = "Tripsheet No:" + request.Entity.TsNo + "";
                    var bb = request.Entity.VehicleId;
                    var cc = request.Entity.VehicleNumber;
                    //var vehicleService = new Master.Vehicles.VehiclesService();
                    var vehicles = uow.Connection.ById<VehiclesRow>(request.Entity.VehicleId);
                    // var vnumbers = vehicle.VehicleNumber;

                    // Fetch the vehicle based on its ID
                    // var existingVehicle = Master.vehicleService.RetrieveByKey(request.Entity.VehicleId);


                    paymentRows.Remarks = "Tripsheet No:" + request.Entity.TsNo + " Vehicle Number: " + vnumber;

                    // request.Entity.Payments.Add(paymentRows);
                    item1.Expenses.Add(paymentRows);

                }


                else  {



                    Accounts.Entities.MoneyOutRow paymentRow = new Accounts.Entities.MoneyOutRow();
                    paymentRow.VNo = cashfuelvno = cashfuelvno + 1;
                    paymentRow.TrxDate = item1.Date;
                    paymentRow.Amount = item1.TotalAmt;
                    paymentRow.TotalAmount = item1.TotalAmt;
                    paymentRow.SupplierId = item1.Supplierid;
                    //int? lastFreightId = request.Entity.VehicleFreight.OrderByDescending(i => i.Id).FirstOrDefault()?.Id;

                    //receiptRow.FreightId=item.Id;

                    //var account = uow.Connection.ById<AccountsRow>(item1.DebitAccountId);
                    //paymentRow.CreditAccountHeadId = account.AccountHeadId;
                    // receiptRow.CreditAccountId = l.AccountId;
                    // paymentRow.DebitAccountId = null;

                    // paymentRow.CreditAccountId = null;

                    //paymentRow.CreditAccountHeadId = config.InvoiceLedgerId;


                    //paymentRow.DebitAccountHeadId = config.ReceivableLedgerId;
                    // paymentRow.EntityType = request.Entity.Table;
                    paymentRow.VType = 2;
                    //paymentRow.AccountHeadLedgerType = 100;
                    // paymentRow.CreditAccountId = item1.DebitAccountId ;

                    // paymentRow.CustomerId = item1.PumpId;

                    paymentRow.AccountHeadId = item1.DebitAccountId;

                    paymentRow.PaymentMethod = AccountTypes.Value1;

                    var b = request.Entity.VehicleId;

                    var cd = request.Entity.VehicleNumber;
                    var vehicle = uow.Connection.ById<VehiclesRow>(request.Entity.VehicleId);
                    var vnumber = vehicle.VehicleNumber;
                    paymentRow.Remarks = "Tripsheet No:" + request.Entity.TsNo + " Vehicle Number: " + vnumber;
                    item1.FuelId.Add(paymentRow);

                    //request.Entity.Expenses.Add(paymentRow);


                    ////////////PaymentRow endpoint/////////////////////////

                    //////////// //PaymentRow endpoint//////////////


                    Accounts.Entities.PaymentRow paymentRows = new Accounts.Entities.PaymentRow();
                    paymentRows.VNo = cashfuelvno = cashfuelvno + 1;
                    paymentRows.TrxDate = item1.Date;
                    paymentRows.Amount = item1.TotalAmt;
                    // paymentRows.To = item1.TotalAmt;
                    paymentRows.SupplierId = item1.Supplierid;



                    paymentRows.PaymentMethod = item1.PaymentMethod;

                    // paymentRow.PaymentMethod = (AccountTypes)((int)item1.PaymentMethod);
                    var account = uow.Connection.ById<AccountsRow>(item1.DebitAccountId);
                    //paymentRow.CreditAccountHeadId = account.AccountHeadId;
                    paymentRows.CreditAccountId = item1.DebitAccountId; ;


                    //paymentRow.CreditAccountHeadId = config.InvoiceLedgerId;


                    paymentRows.DebitAccountHeadId = 102;
                    // paymentRow.EntityType = request.Entity.Table;
                    paymentRows.VType = 2;
                    //paymentRow.AccountHeadLedgerType = 100;
                    // paymentRow.CreditAccountId = item1.DebitAccountId ;

                    paymentRows.CreditAccountHeadId = account.AccountHeadId;
                    // paymentRows.DebitAccountId = item1.DebitAccountId;

                    paymentRows.VehicleId = request.Entity.VehicleId;


                    paymentRow.PaymentMethod = AccountTypes.Value1;
                    // paymentRow.Remarks = "Tripsheet No:" + request.Entity.TsNo + "";
                    var bb = request.Entity.VehicleId;
                    var cc = request.Entity.VehicleNumber;
                    //var vehicleService = new Master.Vehicles.VehiclesService();
                    var vehicles = uow.Connection.ById<VehiclesRow>(request.Entity.VehicleId);
                    // var vnumbers = vehicle.VehicleNumber;

                    // Fetch the vehicle based on its ID
                    // var existingVehicle = Master.vehicleService.RetrieveByKey(request.Entity.VehicleId);


                    paymentRows.Remarks = "Tripsheet No:" + request.Entity.TsNo + " Vehicle Number: " + vnumber;

                    //request.Entity.Payments.Add(paymentRows);
                    item1.Expenses.Add(paymentRows);


                }
                }
            }

           // var r = new MyRepository().Update(uow, request);
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
            var r= new MyRepository().Retrieve(connection, request);
            //foreach(var item in r.Entity.VehicleFreight)
            //{
            //   item.Receipts= connection.List<ReceiptRow>(q => q.SelectTableFields().Where(ReceiptRow.Fields.FreightId == (item.Id ?? 0)));

            //}
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
    }
}
