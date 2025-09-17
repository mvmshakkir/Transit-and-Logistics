namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerFormatter()
    export class EmployeeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as any;
            if (!idList || !idList.length)
                return "";

            var byId = Master.VehiclesRow.getLookup().itemById;
            let z: Master.VehiclesRow;
            var k= idList.map(x => ((z = byId[x]) ? z.VehicleNumber : x)).join(", ");

            var retst = "";
            idList.forEach(function (salesdetails) {
                retst = retst + salesdetails.VehicleNumber+",";
            });
            return retst;

        }
    }
}
