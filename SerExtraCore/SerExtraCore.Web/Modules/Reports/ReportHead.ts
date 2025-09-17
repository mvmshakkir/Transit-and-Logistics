
declare var Morris: any;

namespace SerExtraCore {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.maximizable()
    export class ReeportHead extends Serenity.TemplatedDialog<any> {

        private areaChart: any;

        static initializePage()
        {
            var head = Administration.ConfigurationRow.getLookup().itemById[1].ReportHeader;
            $("#headrow").append(head)
        }

        
    }
}