
namespace SerExtraCore.Web.Modules.Reports
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using SerExtraCore.Common;
    using SerExtraCore.Reports.Endpoints;
    using Serenity.Data;
    using System.Collections.Generic;
    using static Serenity.Reporting.ReportRegistry;
    using SerExtraCore.Reports.Entities;
    using System.Linq;
    using Serenity.Services;

    [PageAuthorize("*")]
    public class DynamicReportController : Controller
    {
        [Route("Reports/DynamicReport")]
        public ActionResult Index(int? reportid)
        {
            ReportRequest reportRequest = new ReportRequest();
            reportRequest.ReportId = reportid??0;
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                ReportDesignsController reportDesignsController = new ReportDesignsController();
                var report = new DataHelper().GetReportDesign(reportRequest.ReportId, connection); 

                //var report = reportDesignsController.Retrieve(connection, new Serenity.Services.RetrieveRequest { EntityId = reportRequest.ReportId }).Entity;
                if (report != null)
                {
                   


                    if (Authorization.HasPermission(report.PermissionKey))
                    {
                        reportRequest.reportDesignsRow = report;
                    }
                    
                }
                
                
            }
            if (reportRequest.reportDesignsRow == null)
            {
                return View("~/Modules/Reports/DynamicReport/forbidden.cshtml");
                //throw new ValidationError("User does not have permission to access this report !!");
            }
            return View("~/Modules/Reports/DynamicReport/DynamicReportIndex.cshtml", reportRequest);
        }
        [Route("Reports/ReportCategory")]
        public ActionResult ReportCategoryIndex(string? catename)
        {
           
            var reports = new DataHelper().GetReportList(null,2, catename);
            ReportsInCategory reportsInCategory = new ReportsInCategory();
            reportsInCategory.Category = catename;
            reportsInCategory.reportDesignsRows = new List<ReportDesignsRow>();
            foreach (var item in reports)
            {
                if (Authorization.HasPermission(item.PermissionKey))
                {
                    reportsInCategory.reportDesignsRows.Add(item);
                    
                }
            }
            
 
            return View("~/Modules/Reports/DynamicReport/ReportCategoryPage.cshtml", reportsInCategory);
        }
    }
}