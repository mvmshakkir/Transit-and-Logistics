using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerExtraCore.UOM.Pages
{

    [PageAuthorize(typeof(Entities.UOMRow))]
    public class UOMController : Controller
    {
        [Route("UOM/UOM")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/UOM/UOM/UOMIndex.cshtml");
        }
    }
}
//C: \Users\Shakir MV\Desktop\asp\Salem\SerExtraCore\SerExtraCore.Web\Modules\Master\UOM\UOM\UOMIndex.cshtml