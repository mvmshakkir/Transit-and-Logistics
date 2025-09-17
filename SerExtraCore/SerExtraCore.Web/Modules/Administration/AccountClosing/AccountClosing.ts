declare var Morris: any;

namespace SerExtraCore.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.maximizable()
    export class AccountClosing extends Serenity.TemplatedDialog<any> {

        private areaChart: any;

        static initializePage() {
            $(function () {

                $(function () {
                    $('#btnConfirm').click(function (e) {
                        Q.confirm("Account posting not possible before the closing date !! Confirm closing??", () => {
                            alert("Ok")
                        });
                    });
                });

                const date = new Date()
                const year = date.getFullYear()

                let month: number | string = date.getMonth() + 1
                let day: number | string = date.getDate()

                if (month < 10) month = '0' + month
                if (day < 10) day = '0' + day

                const today = `${year}-${month}-${day}`
                document.getElementById("closedate").value = today;
            });
        }

      
    }
}