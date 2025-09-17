using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerExtraCore.Expenses.Pages
{

    [PageAuthorize(typeof(Entities.ExpensesRow))]
    public class ExpensesController : Controller
    {
        [Route("Expenses/Expenses")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/Expenses/Expenses/ExpensesIndex.cshtml");
        }
    }
}