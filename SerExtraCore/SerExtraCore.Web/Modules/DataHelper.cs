using SerExtraCore.Administration.Entities;
using SerExtraCore.Master.Entities;
using SerExtraCore.PDCPayments.Entities;
using SerExtraCore.Transactions.Entities;
using SerExtraCore.Transactions.Pages;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using static SerExtraCore.Transactions.Pages.SupplierReport;
using SerExtraCore.Reports.Entities;
using static MVC.Views.Reports;
using Newtonsoft.Json;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace SerExtraCore.Web.Modules
{
    public class DataHelper
    {
        public VoucherNoResponse GetVoucherNo(IDbConnection connection, int vouchertype)
        {

            string qry = "select isnull(max(VNo),0) as voucherno from JournalEntries where VType = " + vouchertype + "";
            var value = connection.Query<VoucherNoResponse>(qry);
            var valueres = value.ToList()[0];
            valueres.voucherno = valueres.voucherno + 1;
            return valueres;
        }
        public VoucherNoResponse GeRANDPNo(IDbConnection connection, int vouchertype)
        {

            string qry = "select isnull(max(VNo),0) as voucherno from MoneyInOut where VType = " + vouchertype + "";
            var value = connection.Query<VoucherNoResponse>(qry);
            var valueres = value.ToList()[0];
            valueres.voucherno = valueres.voucherno + 1;
            return valueres;
        }
        public bool CheckSupplierExsist(IDbConnection connection, string suppliername, int exid = 0)
        {
            var od = SupplierRow.Fields;
            var data = connection.List<SupplierRow>(q => q
                   .SelectTableFields()
                   .Select(od.SupplierName)
                   .Select(od.SupplierCode)
                   .Select(od.Mobile)
                   .Where(od.SupplierName == suppliername.ToLower()));
            if (data != null)
            {
                if (data.Count > 0)
                {
                    if (data.Any(i => i.Id == exid))
                    {

                    }
                    else
                    {
                        return true;
                    }
                }
            }
            return false;
        }

        public List<CustomLookupResponse> GetCustomLookup(CustomLookupRequest request, IDbConnection connection = null)
        {
            List<CustomLookupResponse> customLookupResponses = new List<CustomLookupResponse>();
            if (connection == null)
            {
                connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>();
            }
            var customlookup = connection.ById<CustomLookupsRow>(request.CustomLookupId);
            if (customlookup != null)
            {
                var datalist = connection.Query<CustomLookupResponse>(customlookup.SqlQuery);
                customLookupResponses = datalist.ToList();
            }

            return customLookupResponses;

        }
        public ReportDesignsRow GetReportDesign(string name, IDbConnection connection = null)
        {
            if (connection == null)
            {
                connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>();
            }
            var od = ReportDesignsRow.Fields;
            var r = connection.List<ReportDesignsRow>(q => q
    .SelectTableFields()
    .Where(od.Name == name)).FirstOrDefault();

            return r;

        }
        public List<ReportDesignsRow> GetReportList(IDbConnection connection = null, int type = 0, string cate = "")
        {
            if (connection == null)
            {
                connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>();
            }
            var od = ReportDesignsRow.Fields;
            var r = connection.List<ReportDesignsRow>(q => q
    .SelectTableFields());
            if (type > 0)
            {
                r = r.Where(i => i.ReportType == type).ToList();
            }
            if (cate != "")
            {
                r = r.Where(i => i.Category == cate).ToList();
            }
            return r;
        }
        public bool UpdateReportDesign(ReportDesignsRow design, IDbConnection connection = null)
        {
            if (connection == null)
            {
                connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>();
            }
            connection.UpdateById<ReportDesignsRow>(design);
            return true;

        }
        public ReportDesignsRow GetReportDesign(int reportdesignid, IDbConnection connection = null)
        {
            if (connection == null)
            {
                connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>();
            }
            var report = connection.ById<ReportDesignsRow>(reportdesignid);

            //var report = reportDesignsController.Retrieve(connection, new Serenity.Services.RetrieveRequest { EntityId = reportRequest.ReportId }).Entity;
            if (report != null)
            {
                var od = ReportParametersRow.Fields;
                var parameters = connection.List<ReportParametersRow>(q => q
        .SelectTableFields()
        .Where(od.ReportDesignId == (report.Id ?? 0)));
                report.ReportParameters = parameters;

                var ds = ReportDataSetsRow.Fields;
                var datasets = connection.List<ReportDataSetsRow>(q => q
        .SelectTableFields()
        .Where(ds.ReportDesignId == (report.Id ?? 0)));
                report.ReportDataSets = datasets;

            }
            return report;
        }

        public DataSet GetDataSets(int reportid, IDbConnection connection = null)
        {
            var dataset = new DataSet();
            if (connection == null)
            {
                connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>();
            }
            var od = ReportDataSetsRow.Fields;
            var rd = connection.List<ReportDataSetsRow>(q => q
    .SelectTableFields()
    .Where(od.ReportDesignId == reportid));


            var prr = ReportParametersRow.Fields;
            var pr = connection.List<ReportParametersRow>(q => q
    .SelectTableFields()
    .Where(od.ReportDesignId == reportid));

            foreach (var daset in rd)
            {
                foreach (var para in pr)
                {

                    var par = "@" + para.ParameterName;
                    var repl = "";
                    if (para.DataType == ParameterDataTypes.Value1)
                    {
                        repl = "0";
                    }
                    if (para.DataType == ParameterDataTypes.Value2)
                    {
                        repl = "'test'";
                    }
                    if (para.DataType == ParameterDataTypes.Value3)
                    {
                        repl = "'2022-01-01'";
                    }
                    if (para.DataType == ParameterDataTypes.Value4)
                    {
                        repl = "'2022-01-01 10:10:10'";
                    }
                    if (para.DataType == ParameterDataTypes.Value5)
                    {

                        repl = "'10.00'";
                    }
                    if (para.DataType == ParameterDataTypes.Value6)
                    {
                        var k = 0;
                        repl = "" + k + "";
                    }


                    if (daset.SqlQuery.Contains(par))
                    {


                        daset.SqlQuery = daset.SqlQuery.Replace(par, repl);

                    }
                }



                //System.Data.SqlClient.SqlConnection mssqlConnections = new System.Data.SqlClient.SqlConnection(connection.ConnectionString);

                var dt = ExecuteDataTable(daset.SqlQuery, null, null, CommandType.Text, null);
                var dtCopy = dt.Copy();
                dtCopy.TableName = daset.DataSetName;
                dataset.Tables.Add(dtCopy);
                //var json = JsonConvert.SerializeObject(tables, Formatting.Indented);
                //ReportDataSets reportDataSets2 = new ReportDataSets();
                //reportDataSets2.Name = daset.DataSetName;
                //reportDataSets2.Data = json;
                //dataset.Add(reportDataSets2);

            }

            return dataset;

        }
        public DataTable ExecuteDataTable(string cmdText, System.Data.SqlClient.SqlConnection mssqlConnections, SqlParameter[] parameters, CommandType commandType, SqlTransaction transaction)
        {
            if (mssqlConnections == null)
            {
                var builder = new ConfigurationBuilder()
               .SetBasePath(Directory.GetCurrentDirectory())
               .AddJsonFile("appsettings.json", true, true);
                var config = builder.Build();
                var con = config["Data:Default:ConnectionString"];
                if (con != null)
                {
                    mssqlConnections = new SqlConnection(con);

                }
            }

            using (SqlCommand command = mssqlConnections.CreateCommand())
            {
                command.CommandText = cmdText;
                command.CommandType = commandType;
                command.Transaction = transaction;

                if (parameters != null)
                {
                    command.Parameters.AddRange(parameters);
                }

                var ds = new DataSet();
                using (var dataAdapter = new SqlDataAdapter(command))
                {
                    dataAdapter.Fill(ds);
                }

                return ds.Tables[0];
            }
        }
        public List<SerExtraCore.Web.Reports.ReportDataSets> GetReportDataSets(IDbConnection connection, ReportDesignsRow reportDesignsRow)
        {
            if (connection == null)
            {
                connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>();
            }
            var dataset = new List<SerExtraCore.Web.Reports.ReportDataSets>();
            foreach (var item in reportDesignsRow.ReportDataSets)
            {
                foreach (var para in reportDesignsRow.ReportParameters)
                {

                    var par = "@" + para.ParameterName;
                    var repl = "";
                    if (para.DataType == ParameterDataTypes.Value2 || para.DataType == ParameterDataTypes.Value3)
                    {
                        repl = "'" + para.DefaultValue + "'";
                    }
                    if (para.DataType == ParameterDataTypes.Value4)
                    {
                        para.DefaultValue = para.DefaultValue.Replace("T", " ");
                        repl = "'" + para.DefaultValue + "'";
                    }
                    if (para.DataType == ParameterDataTypes.Value6)
                    {
                        var k = 0;
                        if ((para.DefaultValue ?? "").ToLower() == "true")
                        {
                            k = 1;
                        }
                        repl = "" + k + "";
                    }
                    if (para.DataType == ParameterDataTypes.Value1)
                    {
                        int id = 0;
                        int.TryParse(para.DefaultValue, out id);
                        repl = id.ToString();
                    }

                    if (item.SqlQuery.Contains(par))
                    {


                        item.SqlQuery = item.SqlQuery.Replace(par, repl);

                    }
                }

                var tables = (from row in connection.Query(item.SqlQuery)
                              select (IDictionary<string, object>)row).ToList();
                //if (item.DataSetName == "QRCode")
                //{
                //    if (tables.Count > 0)
                //    {
                //        var qrstring = GetQrString(connection, tables[0]);
                //        tables[0].Add("QRValue", qrstring);
                //    }

                //}
                var json = JsonConvert.SerializeObject(tables, Formatting.Indented);
                SerExtraCore.Web.Reports.ReportDataSets reportDataSets2 = new SerExtraCore.Web.Reports.ReportDataSets();
                reportDataSets2.Name = item.DataSetName;
                reportDataSets2.Data = json;
                dataset.Add(reportDataSets2);
            }
            return dataset;
        }

        public IEnumerable<SupplierPersonalLedger.Item> GetsupplierRandP(IDbConnection connection, int supplierid)
        {
            var sql = @"select 'Receipt' as TrxType,TrxDate as InvoiceDate,CONVERT(nvarchar, VNo) InvoiceNO,Amount as InvoiceAmount,Amount as Received from JournalEntries 
 where SupplierId=" + supplierid + @" and EntityType is null and VType=1
 union all
  select 'Payment' as TrxType,TrxDate as InvoiceDate,CONVERT(nvarchar, VNo) InvoiceNO,Amount as InvoiceAmount,Amount as Received from JournalEntries 
 where SupplierId=" + supplierid + @" and EntityType is null and VType=2";

            var value = connection.Query<SupplierPersonalLedger.Item>(sql);
            return value;
        }
        public bool CheckCustomerExsist(IDbConnection connection, string customername, int exid = 0)
        {
            var od = CustomersRow.Fields;
            var data = connection.List<CustomersRow>(q => q
                   .SelectTableFields()
                   .Select(od.Id)
                   .Select(od.CustomerName)
                   .Select(od.CustomerCode)
                   .Select(od.Mobile)
                   .Where(od.CustomerName == customername.ToLower()));
            if (data != null)
            {
                if (data.Count > 0)
                {
                    if (data.Any(i => i.Id == exid))
                    {

                    }
                    else
                    {
                        return true;
                    }

                }
            }
            return false;
        }
        public InvoiceBalanceResponse InvoiceBalance(IDbConnection connection, InvoiceBalanceRequest invoiceBalanceRequest)
        {
            string con = " and ic.Status!=3";
            if (invoiceBalanceRequest.onlyapproved)
            {
                con = "  and ic.Status=2";
            }
            string qry = "select  isnull((select BalanceAmount from Invoice where Id=" + invoiceBalanceRequest.invoiceid + ")-isnull(sum(Amount),0),0) as Balance from InvoiceCollectionDetails inner join InvoiceCollection ic on InvoiceCollectionId=ic.Id where InvoiceId=" + invoiceBalanceRequest.invoiceid + "" + con + "";
            var value = connection.Query<InvoiceBalanceResponse>(qry);
            return value.ToList()[0];

        }

        public InvoiceBalanceResponse InvoiceVehicleDetailsBalance(IDbConnection connection, InvoiceVehicleDetailBalanceRequest invoiceBalanceRequest)
        {
            string qry = @"select (SupplierAmount-SupplierAdvanceAmount-Amount) Balance 
                            from
                            (
                            select isnull(max(SupplierAmount),0)SupplierAmount,isnull(max(SupplierAdvanceAmount),0)SupplierAdvanceAmount,isnull(sum(Amount),0)Amount
                            from InvoiceVehicleDetails 
                            left join SuppliersPaymentInvoiceVehicleDetails on SuppliersPaymentInvoiceVehicleDetails.InvoiceVehicleDetailId=InvoiceVehicleDetails.Id
                            where InvoiceVehicleDetails.id="+ invoiceBalanceRequest.InvoiceVehicleDetailid + @"
                            ) aa";
            var value = connection.Query<InvoiceBalanceResponse>(qry);
            return value.ToList()[0];
        }
        public InvoiceBalanceResponse InvoiceVehicleChargesBalance(IDbConnection connection, InvoiceVehicleChargesBalanceRequest invoiceBalanceRequest)
        {
            string qry = @"select (SupplierAmount-SupplierAdvanceAmount-Amount) Balance from 
                        (
                        select isnull(max(SupplierAmount),0)SupplierAmount,isnull(max(SupplierAdvanceAmount),0)SupplierAdvanceAmount,
                        isnull(sum(SuppliersPaymentInvoiceCharges.Amount),0) Amount
                        from InvoiceCharges 
                        left join SuppliersPaymentInvoiceCharges on SuppliersPaymentInvoiceCharges.InvoiceChargesId=InvoiceCharges.Id
                        where InvoiceCharges.Id=" + invoiceBalanceRequest .InvoiceVehicleChargesId+ @"
                        ) aa";
            var value = connection.Query<InvoiceBalanceResponse>(qry);
            return value.ToList()[0];
        }
        public IEnumerable<VehicleStatusReport.Item> GetVehicleStatus(IDbConnection connection, int? VehicleId, int typeofwehicle)
        {
            string cond = "";
            if (VehicleId > 0)
            {
                cond = " where v.Id=" + VehicleId + "";
            }
            if (typeofwehicle != 0)
            {
                if (cond == "")
                {
                    cond = cond + " Where ";
                }
                else
                {
                    cond = cond + " and ";
                }
                cond = cond + " v.TypeOfVehicle=" + typeofwehicle + "";
            }
            var sql = @"select v.VehicleNumber,vm.ModelName as VehicleModel,(select count(*) from ConsignmentVehicleDetails cvd where '" + DateTime.Now.ToString("MM/dd/yyyy hh:mm") + @"' Between StartDate And EndDate and cvd.VehicleId=v.id) as BookingCount,
(select max(StartDate) from ConsignmentVehicleDetails cvd where '" + DateTime.Now.ToString("MM/dd/yyyy hh:mm") + @"' Between StartDate And EndDate and cvd.VehicleId=v.id) as StartDate,
(select max(EndDate) from ConsignmentVehicleDetails cvd where '" + DateTime.Now.ToString("MM/dd/yyyy hh:mm") + @"' Between StartDate And EndDate and cvd.VehicleId=v.id) as EndDate
from Vehicles v left join  VehicleModels vm on vm.Id=v.VehicleModel " + cond + "";

            //sql = "SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN  VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment'  WHEN VType = 3 THEN 'Contra' END AS VoucherType,Amount as CreditAmount,0 as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where CreditAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) union SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment' WHEN VType = 3 THEN 'Contra' END AS VoucherType,0 as CreditAmount,Amount as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where DebitAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) order by Id";
            var value = connection.Query<VehicleStatusReport.Item>(sql);

            var slno = 0;

            foreach (var item in value)
            {
                item.Slno = ++slno;
                if (item.BookingCount > 0)
                {
                    item.Status = "ALLOTTED";
                }
                else
                {
                    item.Status = "NON ALLOTTED";
                }

            }
            return value;
        }
        public bool UserHirarchy(IDbConnection connection, UserHierarchyRequest invoiceBalanceRequest)
        {
            var config = connection.ById<ConfigurationRow>(1);
            if (invoiceBalanceRequest.type == "Invoice")
            {
                if (config.InvoiceApprovalHierarchyId != null)
                {
                    var hirar = connection.ById<UserHierarchyRow>(config.InvoiceApprovalHierarchyId);
                    return comparewithuser(connection, hirar);


                }
                else
                {
                    return true;
                }
            }
            else
            {
                if (invoiceBalanceRequest.type == "InvoiceCollection")
                {
                    if (config.InvoiceCollectionApprovalHierarchyId != null)
                    {
                        var hirar = connection.ById<UserHierarchyRow>(config.InvoiceCollectionApprovalHierarchyId);
                        return comparewithuser(connection, hirar);


                    }
                    else
                    {
                        return true;
                    }
                }
                else
                {
                    return true;
                }
            }


        }
        private bool comparewithuser(IDbConnection connection, UserHierarchyRow hirar)
        {
            var user = connection.ById<UserRow>(Authorization.UserId);
            if (user.HierarchyId != null)
            {
                var userhirar = connection.ById<UserHierarchyRow>(user.HierarchyId);
                if (hirar.HierarchyOrder >= userhirar.HierarchyOrder)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
        public List<Master.Entities.VehiclesRow> VehiclesNotInUse(IDbConnection connection)
        {
            var user = connection.Query<Master.Entities.VehiclesRow>("select VehicleNumber,VehicleModel from Vehicles where Id not in(select cvd.VehicleId from ConsignmentVehicleDetails cvd inner join Consignment c on c.Id=cvd.ConsignmentId where cvd.StartDate>='" + DateTime.Today.ToShortDateString() + "' and cvd.EndDate <='" + DateTime.Today.ToShortDateString() + "') and TypeOfVehicle=1");
            return user.ToList();
        }
        public ConsignmentVehicleDetailsRow ConsigmentByVehicle(IDbConnection connection, ConsignmentByVehicle consignmentByVehicle)
        {
            var user = connection.Query<ConsignmentVehicleDetailsRow>("select top 1 * from ConsignmentVehicleDetails where VehicleId=" + consignmentByVehicle.vehicleId + " order by id desc");
            if (user.Count() > 0)
            {
                return user.ToList()[0];

            }
            else
            {
                return new ConsignmentVehicleDetailsRow();
            }
        }

        public SupplierBalanceResponse GetSupplierBalance(IDbConnection connection, SupplierBalance supplierBalance)
        {
            var user = connection.Query<SupplierBalanceResponse>(@"select VDCharge+Charges+Reciept-Payment-opening AS Balance from(SELECT  (
       select isnull(sum(SupplierAmount),0) as v from InvoiceVehicleDetails where SupplierId=" + supplierBalance.SupplierId + @"
        ) AS VDCharge,
        (
       (select isnull(sum(SupplierAmount),0) as h from InvoiceCharges where SupplierId=" + supplierBalance.SupplierId + @")
        ) AS Charges,
        (
       select isnull(sum(Amount),0) as m from JournalEntries where SupplierId=" + supplierBalance.SupplierId + @" and VType=1
        ) AS Reciept,
        (
       select isnull(sum(Amount),0) as l from JournalEntries where SupplierId=" + supplierBalance.SupplierId + @" and VType=2
        ) AS Payment,
		(
      select -1*isnull(opening,0) as f from Supplier where id=" + supplierBalance.SupplierId + @"
        ) AS opening) as d");
            if (user.Count() > 0)
            {
                return user.ToList()[0];

            }
            else
            {
                return new SupplierBalanceResponse();
            }
        }
        public List<PdcPaymentDetailsRow> OpenCheques(IDbConnection connection, PendingCheque pending)
        {
            var user = connection.Query<PdcPaymentDetailsRow>("select * from PDCPaymentDetails where ChequeStatus=1 and Date<=" + pending.asdate.ToSqlDate() + "");
            return user.ToList();


        }
        public List<Documents.Entities.DocumentsRow> DueDocuments(IDbConnection connection, PendingCheque pending)
        {
            var user = connection.Query<Documents.Entities.DocumentsRow>("SELECT d.*,dt.TypeName as DocumentTypeTypeName FROM  Documents d inner join DocumentType dt on dt.Id=d.DocumentTypeId WHERE DueDate<=" + pending.asdate.ToSqlDate() + "");
            return user.ToList();


        }
        public IEnumerable<ItemSupplier> GetSupplierData(IDbConnection connection, int SupplierId)
        {
            string sql = @"select  ic.Id,isnull(i.InvoiceNo,'')+isnull(ivc.InvoiceNo,'')+isnull(iv.InvoiceNo,'') as InvoiceNo,
 isnull(i.WayBillNo,'')+isnull(ivc.WayBillNo,'')+isnull(iv.WayBillNo,'') as WayBillNo,
 (select AreaName from ShippingAreas where id=
 case when ivd.ShippingAreaFrom is not null then  ivd.ShippingAreaFrom else case when ivdc.ShippingAreaFrom is not null then ivdc.ShippingAreaFrom end end) ShippingAreaFrom,
  (select AreaName from ShippingAreas where id=
 case when ivd.ShippingAreaTo is not null then  ivd.ShippingAreaTo else case when ivdc.ShippingAreaTo is not null then ivdc.ShippingAreaTo end end) ShippingAreaTo,
case when i.InvoiceDate is not null then i.InvoiceDate else case when iv.InvoiceDate is not null then iv.InvoiceDate else case when ivc.InvoiceDate is not null then ivc.InvoiceDate
end end end as InvoiceDate,
(select c.Date from Consignment c where Id=case when i.ConsignmentId is not null then i.ConsignmentId else case when iv.ConsignmentId is not null then iv.ConsignmentId else case when ivc.ConsignmentId is not null then ivc.ConsignmentId end  end end) as ConsignmentDate,
(select c.JobNo from Consignment c where Id=case when i.ConsignmentId is not null then i.ConsignmentId else case when iv.ConsignmentId is not null then iv.ConsignmentId else case when ivc.ConsignmentId is not null then ivc.ConsignmentId end  end end) as ConsignmentJobNo,
isnull(ic.SupplierAmount,0)+isnull(ivd.SupplierAmount,0) as Amount, 
isnull(ic.SupplierAdvanceAmount,0)+isnull(ivd.SupplierAdvanceAmount,0) as Advance,
(case when ic.InvoiceVehicleDetailId is not null then (select sp.Date from SuppliersPaymentInvoiceVehicleDetails spc inner join SuppliersPayment sp on sp.Id=spc.SuppliersPaymentId where spc.InvoiceVehicleDetailId=ic.InvoiceVehicleDetailId)  else (select sp.Date from SuppliersPaymentInvoiceCharges spc inner join SuppliersPayment sp on sp.Id=spc.SuppliersPaymentId where spc.InvoiceChargesId=ic.Id) end) as PaymentDate,
(case when ic.InvoiceVehicleDetailId is not null then (select sp.Code from SuppliersPaymentInvoiceVehicleDetails spc inner join SuppliersPayment sp on sp.Id=spc.SuppliersPaymentId where spc.InvoiceVehicleDetailId=ic.InvoiceVehicleDetailId)  else (select sp.Code from SuppliersPaymentInvoiceCharges spc inner join SuppliersPayment sp on sp.Id=spc.SuppliersPaymentId where spc.InvoiceChargesId=ic.Id) end) as PaymentCode
,ic.Description
from InvoiceCharges ic
left join InvoiceVehicleDetails ivd on ivd.Id=ic.InvoiceVehicleDetailId
left join Invoice i on i.Id=ic.InvoiceId
left join Invoice iv on iv.Id=ivd.InvoiceId
left join InvoiceVehicleDetails ivdc on ivdc.Id=ic.InvoiceChargeVehicleDetailId
left join Invoice ivc on ivc.Id=ivdc.InvoiceId
where ic.supplierid=" + SupplierId + " or ivd.SupplierId=" + SupplierId + "";
            var value = connection.Query<ItemSupplier>(sql);
            return value;
        }
        public Administration.Entities.ConfigurationRow GetConfigration(IDbConnection connection)
        {
            if (connection == null)
            {
                connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>();
            }
            return connection.ById<Administration.Entities.ConfigurationRow>(1);
        }
    }
   
    public class VoucherNoRequest : ServiceRequest
    {
        public int vouchertype { get; set; }


    }
    public class VoucherNoResponse : ServiceResponse
    {
        public int voucherno { get; set; }


    }
    public class InvoiceBalanceRequest : ServiceRequest
    {
        public int invoiceid { get; set; }
        public bool onlyapproved { get; set; }

    }
    public class InvoiceVehicleDetailBalanceRequest : ServiceRequest
    {
        public int InvoiceVehicleDetailid { get; set; }
    }
    public class InvoiceVehicleChargesBalanceRequest : ServiceRequest
    {
        public int InvoiceVehicleChargesId { get; set; }
    }
    public class InvoiceBalanceResponse : ServiceResponse
    {
        public decimal Balance { get; set; }
    }
    public class MonthDifferenceRequest
    {
        public DateTime fromdatetime { get; set; }
        public DateTime todatetime { get; set; }
        public decimal amount { get; set; }
        public int numberofmonths { get; set; }
        public int pdctype { get; set; }
    }
    
    public class MonthDifferenceResponce
    {
        public int numberofmonths { get; set; }

    }
    public class UserHierarchyRequest : ServiceRequest
    {
        public string type { get; set; }
       

    }
    public class ConsignmentByVehicle : ServiceRequest
    {
        public int vehicleId { get; set; }


    }
    public class PendingCheque : ServiceRequest
    {
        public DateTime asdate { get; set; }


    }
    public class SupplierBalance : ServiceRequest
    {
        public int SupplierId { get; set; }


    }
    public class InvoicePrintRequest : ServiceRequest
    {
        public int invoiceid { get; set; }
       

    }
    public class SupplierBalanceResponse 
    {
        public int SupplierId { get; set; }
        public string SupplierName { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal SupplierAdvanceAmount { get; set; }
        public decimal PaidAmount { get; set; }
        public decimal Balance { get; set; }


    }

    public class UpdateBankStatus : ServiceRequest
    {
        public int TrxId { get; set; }


    }
    public class AccountOpeningRequest : ServiceRequest
    {
        public int AccountId { get; set; }

        public DateTime FromDate { get; set; }
    }
}
