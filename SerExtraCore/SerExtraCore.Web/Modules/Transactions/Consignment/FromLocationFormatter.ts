
namespace SerExtraCore.Transactions
{
    @Serenity.Decorators.registerFormatter()
    export class FromLocationFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {

            var idList = ctx.item as ConsignmentRow;
            var x = "";
            idList.ConsignmentVehicleDetails.forEach(function (m) {
                
                if (m.ShippingAreaFromAreaName != null) {
                    if (x != "") {
                        x = x + ",";
                    }
                    x = x + m.ShippingAreaFromAreaName
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