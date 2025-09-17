
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProductsRow))]
    public class ProductsController : Controller
    {
        [Route("Master/Products")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Products/ProductsIndex.cshtml");
        }
    }
}