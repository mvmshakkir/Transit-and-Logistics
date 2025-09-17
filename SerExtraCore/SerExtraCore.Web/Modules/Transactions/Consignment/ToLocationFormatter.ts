
namespace SerExtraCore.Transactions
{
    @Serenity.Decorators.registerFormatter()
    export class ToLocationFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.item as ConsignmentRow;
            var x = "";
            idList.ConsignmentVehicleDetails.forEach(function (m) {

                if (m.ShippingAreaToAreaName != null) {
                    if (x != "") {
                        x = x + ",";
                    }
                    x = x + m.ShippingAreaToAreaName
                }
            })
            
            //var byId = ConsignmentVehicleDetailsRow.getLookup().itemById;
            //let z: ConsignmentVehicleDetailsRow;
            //var k = idList.map(x => ((z = byId[x]) ? z.ShippingAreaFrom : x)).join(", ");
            //var retst = "";
            //idList.forEach(function (salesdetails) {
            //    retst = retst + salesdetails;
            //});
            return x;

        }
    }

}