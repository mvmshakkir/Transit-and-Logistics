using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerExtraCore.MaterialsDetails.Pages
{

    [PageAuthorize(typeof(Entities.MaterialsDetailsRow))]
    public class MaterialsDetailsController : Controller
    {
        [Route("MaterialsDetails/MaterialsDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/MaterialsDetails/MaterialsDetails/MaterialsDetailsIndex.cshtml");
        }
    }
}