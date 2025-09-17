namespace SerExtraCore.Master {

    @Serenity.Decorators.registerFormatter()
    export class VehicleSpecificationsFormater implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";

            var byId = SpecificationsRow.getLookup().itemById;
            let z: SpecificationsRow;
            return idList.map(x => ((z = byId[x]) ? z.Specifications : x)).join(", ");
        }
    }
}