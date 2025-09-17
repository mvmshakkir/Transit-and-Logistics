using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerExtraCore.States.Pages
{

    [PageAuthorize(typeof(Entities.StatesRow))]
    public class StatesController : Controller
    {
        [Route("States/States")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/States/States/StatesIndex.cshtml");
        }
    }
}