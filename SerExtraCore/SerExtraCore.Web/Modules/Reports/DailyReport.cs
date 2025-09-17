
namespace SerExtraCore.Transactions.Pages
{

    using Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using Serenity.Reporting;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Drawing;
    using System.Linq;

    [Report, RequiredPermission("DailyReport:DailyReport")]
    [Category("DailyReport/DailyReport"), DisplayName("Daily Report")]
    [ReportDesign(MVC.Views.Reports.DailyReport)]
    public class DailyReport : IReport, ICustomizeHtmlToPdf
    {
      

        [HalfWidth]
        [DisplayName("From Date"),Required(true)]
        public DateTime? StartDate { get; set; }

        [HalfWidth]
        [DisplayName("To Date"), Required(true)]
        public DateTime? EndDate { get; set; }
        [HalfWidth]
        [LookupEditor(typeof(Master.Entities.VehiclesRow))]
        [DisplayName("Vehicle")]
        public Int32? VehicleId { get; set; }

        public object GetData()
        {
            var data = new AccountStatementViewtData();
            data.aboutreport = new AboutReport();
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var cond = "";
                string acccr = "";
                string accdb = "";
                if (VehicleId != null)
                {
                    cond = " and cvd.VehicleId="+VehicleId+"";
                }
                var sql = @"select c.JobNo,cvd.StartDate as StartDate,c.WayBillNo,cvd.EndDate as OffloadingDate,v.VehicleNumber as Vehicle,cus.CustomerName as Shipping,emp.EmployeeName as Driver,safrom.AreaName as ShippingFrom,sato.AreaName as ShippingTo from ConsignmentVehicleDetails cvd inner join Consignment c on c.Id=cvd.ConsignmentId inner join Customers cus on cus.Id=c.ShipperId left join EmployeeMaster emp on emp.Id=cvd.Driver left join ShippingAreas safrom on safrom.Id=cvd.ShippingAreaFrom left join ShippingAreas sato on sato.Id=cvd.ShippingAreaTo inner join Vehicles v on v.Id=cvd.VehicleId where cvd.StartDate>=" + StartDate.ToSqlDate()+" and cvd.StartDate<="+EndDate.ToSqlDate()+""+cond+" order by c.Id ";
                //sql = "SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN  VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment'  WHEN VType = 3 THEN 'Contra' END AS VoucherType,Amount as CreditAmount,0 as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where CreditAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) union SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment' WHEN VType = 3 THEN 'Contra' END AS VoucherType,0 as CreditAmount,Amount as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where DebitAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) order by Id";
                var value = connection.Query<Item>(sql);
                decimal bal = 0;
              
                data.Details = value.ToList();
                int no = 0;
                foreach(var k in data.Details)
                {
                    no = no + 1;
                    k.slno = no;
                }
                if (VehicleId > 0)
                {
                    var vegh=connection.ById<Master.Entities.VehiclesRow>(VehicleId);
                    data.aboutreport.Vehicle = vegh.VehicleNumber;
                }
            }
            data.aboutreport = new AboutReport();
            data.aboutreport.FromDate = StartDate.Value;
            data.aboutreport.ToDate = EndDate.Value;
            return data;
        }
        public object GetDataForExel()
        {
            using (var connection = SqlConnections.NewFor<Entities.InvoiceChargesRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = "SELECT  Date as Date,  COUNT(CASE WHEN Status = 1 and StudentId is not null THEN 1 ELSE NULL END) as AbsentStudents, COUNT(CASE WHEN Status = 2 and StudentId is not null THEN 1 ELSE NULL END) as PresentStudents,COUNT(CASE WHEN Status = 3 and StudentId is not null THEN 1 ELSE NULL END) as HolidayStudents,COUNT(CASE WHEN Status = 1 and StaffId is not null THEN 1 ELSE NULL END) as AbsentStaffs,COUNT(CASE WHEN Status = 2 and StaffId is not null THEN 1 ELSE NULL END) as PresentStaffs,COUNT(CASE WHEN Status = 3 and StaffId is not null THEN 1 ELSE NULL END) as HolidayStaffs FROM Attandance where date>= " + StartDate.ToSqlDate() + " and date <= " + EndDate.ToSqlDate() + " and TenantId=(select TenantId from Users where userid=" + userid + ") GROUP BY date";
                var value = connection.Query<Item>(sql);

                return sql;
            }
        }
        public List<ReportColumn> GetColumnList()
        {
            var data = ReportColumnConverter.ObjectTypeToList(typeof(Item));
            return data;
        }
        public void Customize(IHtmlToPdfOptions options)
        {

            options.Landscape = false;

        }
        [BasedOnRow(typeof(Transactions.Entities.InvoiceCollectionRow))]
        public class Item
        {
            public int slno { get; set; }
            public string JobNo { get; set; }
            public DateTime? StartDate  { get; set; }
            public string WayBillNo { get; set; }
            public DateTime? OffLoadingDate { get; set; }
          
            public string Vehicle { get; set; }
            public string Shipping { get; set; }
            public string Driver { get; set; }
            public string ShippingFrom { get; set; }
            public string ShippingTo { get; set; }
            

        }
        public class AboutReport
        {
            public DateTime FromDate { get; set; }
            public DateTime ToDate { get; set; }
            public string Vehicle { get; set; }
          
        }
        public class AccountStatementViewtData
        {


            public List<Item> Details { get; set; }
            public AboutReport aboutreport { get; set; }

        }



    }
}
