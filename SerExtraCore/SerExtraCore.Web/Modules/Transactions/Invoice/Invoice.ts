

namespace SerExtraCore {

    
    export class Invoice extends Serenity.TemplatedDialog<any> {

       

        static initializePage() {
            var iid = document.getElementById("entityId").innerText;
            $("#sample").text(iid);
            var data_bind = $("#entityId").data('bind');
            var rod = data_bind as SerExtraCore.Transactions.OrderDetailReportData;

            rod.Details.forEach(function (value) {

                $("#sample").text("dsedes");
            });


        }
       
    }
}