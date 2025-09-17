
namespace SerExtraCore.Transactions.Pages
{
    using SerExtraCore.Master.Entities;
    using SerExtraCore.Web.Modules;
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

    [Report, RequiredPermission("Vehicle:VehicleStatusReport")]
    [Category("Vehicle/ VehicleStatusReport"), DisplayName(" Vehicle Status")]
    [ReportDesign(MVC.Views.Reports.VehicleStatusReport)]
    public class VehicleStatusReport : IReport, ICustomizeHtmlToPdf
    {
        

        

        [HalfWidth]
        [LookupEditor(typeof(Master.Entities.VehiclesRow))]
        [DisplayName("Vehicle")]
        public Int32? VehicleId { get; set; }

        [DisplayName("Allotted"), DefaultValue(true)]
        public Boolean? Allotted { get; set; }

        [DisplayName("Non Allotted"), DefaultValue(true)]
        public Boolean? NonAllotted { get; set; }
        public object GetData()
        {
            var data = new AccountStatementViewtData();
            data.aboutreport = new AboutReport();
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                //                string cond = "";
                //                if (VehicleId > 0)
                //                {
                //                    cond = " where v.VehicleId=" + VehicleId + "";
                //                }

                //                var  sql = @"select v.VehicleNumber,(select count(*) from ConsignmentVehicleDetails cvd where '"+DateTime.Now+ @"' Between StartDate And EndDate and cvd.VehicleId=v.id) as BookingCount,
                //(select max(StartDate) from ConsignmentVehicleDetails cvd where '" + DateTime.Now + @"' Between StartDate And EndDate and cvd.VehicleId=v.id) as StartDate,
                //(select max(EndDate) from ConsignmentVehicleDetails cvd where '" + DateTime.Now + @"' Between StartDate And EndDate and cvd.VehicleId=v.id) as EndDate
                //from Vehicles v "+ cond+"";

                //                //sql = "SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN  VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment'  WHEN VType = 3 THEN 'Contra' END AS VoucherType,Amount as CreditAmount,0 as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where CreditAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) union SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment' WHEN VType = 3 THEN 'Contra' END AS VoucherType,0 as CreditAmount,Amount as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where DebitAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) order by Id";
                //                var value = connection.Query<Item>(sql);

                //                var slno = 0;

                //                foreach (var item in value)
                //                {
                //                    item.Slno = ++slno;
                //                    if (item.BookingCount > 0)
                //                    {
                //                        item.Status = "ALLOTTED";
                //                    }
                //                    else
                //                    {
                //                        item.Status = "NON ALLOTTED";
                //                    }

                //                }
                var value = new DataHelper().GetVehicleStatus(connection,VehicleId,0);
                bool set = false;
                if (Allotted??false)
                {
                    data.Details = value.Where(i=>i.BookingCount>0).ToList();
                    set = true;
                }

                if (NonAllotted ?? false)
                {
                    data.Details = value.Where(i => i.BookingCount == 0).ToList();
                    set = true;
                }

                if ((Allotted ?? false)&&(NonAllotted ?? false))
                {
                    data.Details = value.ToList();
                }

                


            }
           
        
            //data.aboutreport.TotalCredit = data.Details.Sum(i => i.CreditAmount);

            //data.aboutreport.FromDate = StartDate;
            //data.aboutreport.ToDate = EndDate;
            
            return data;
        }
        public object GetDataForExel()
        {
            using (var connection = SqlConnections.NewFor<Entities.InvoiceChargesRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = "";
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
            public int Slno { get; set; }
            public string VehicleNumber { get; set; }
            public string VehicleModel { get; set; }
            public int BookingCount { get; set; }
            public Nullable<DateTime> StartDate { get; set; }
            public Nullable<DateTime> EndDate { get; set; }
            public string Status { get; set; }

        }
      
        public class AboutReport
        {
            public Nullable<DateTime> FromDate { get; set; }
            public Nullable<DateTime> ToDate { get; set; }
            public string CustomerName { get; set; }
            
            public decimal TotalAmount { get; set; }
         
            public decimal TotalReceived { get; set; }
        }
        public class AccountStatementViewtData
        {

            
            public List<Item> Details { get; set; }
            public AboutReport aboutreport { get; set; }

         

        }



    }
}
