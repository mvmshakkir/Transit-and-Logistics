
namespace SerExtraCore.Common.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using Microsoft.AspNetCore.Mvc;
    using SerExtraCore.Web.Modules;
    using SerExtraCore.Transactions.Entities;
    using System.Linq;

    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
           var notuse= new DashboardPageModel();
            using (var connection = SqlConnections.NewFor<InvoiceRow>())
            {
               // notuse.notusevehiclesRows = new DataHelper().VehiclesNotInUse(connection);
                var value = new DataHelper().GetVehicleStatus(connection, 0,1);
                notuse.vehiclestatus = value.ToList();
                notuse.pdcPaymentDetails = new DataHelper().OpenCheques(connection,new PendingCheque { asdate=DateTime.Today});
                notuse.documents = new DataHelper().DueDocuments(connection, new PendingCheque { asdate = DateTime.Today.AddDays(30) });
            }


            return View(MVC.Views.Common.Dashboard.DashboardIndex, notuse);
        }
    }
}
