namespace SerExtraCore {

    @Serenity.Decorators.registerClass()
    export class Dashboard extends Serenity.TemplatedDialog<any> {

       
        static opendocument(model) {

            var dlg = new Documents.DocumentsDialog();
                dlg.element.bind('dialogclose', () => {
                    // *** This is triggered after closing dialog ***
                    location.reload();
                });
                dlg.loadByIdAndOpenDialog(model);
            

        }
        static oncequeclick(model,type)
        {
            if (type == 1) {
                var dlg = new Transactions.InvoiceCollectionDialog();
                dlg.element.bind('dialogclose', () => {
                    // *** This is triggered after closing dialog ***
                    location.reload();
                });
                dlg.loadByIdAndOpenDialog(model);
            }
            else {
                if (type == 2) {
                    var dlg2 = new Transactions.SuppliersPaymentDialog();
                    dlg2.element.bind('dialogclose', () => {
                        // *** This is triggered after closing dialog ***
                        location.reload();
                    });
                    dlg2.loadByIdAndOpenDialog(model);
                }
                else {
                    if (type == 3) {
                        var dlg3 = new PDCPayments.PdcPaymentsDialog();
                        dlg3.element.bind('dialogclose', () => {
                            // *** This is triggered after closing dialog ***
                            location.reload();
                        });
                        dlg3.loadByIdAndOpenDialog(model);
                    }
                }
            }

        }

       
    }
}