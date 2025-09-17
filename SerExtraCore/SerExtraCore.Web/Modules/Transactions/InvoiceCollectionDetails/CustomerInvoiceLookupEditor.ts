namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerEditor()
    export class CustomerInvoiceLookupEditor extends
        Serenity.LookupEditorBase<Serenity.LookupEditorOptions, any> {

        public myId: number;
        public isedit: boolean;
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions) {
            super(container, opt);
        }

        protected getLookupKey() {
            return this.buildLookupKey(this.myId);
        }

        protected getItems(lookup: Q.Lookup<any>) {
            var customLookup = Q.getLookup(this.buildLookupKey(this.myId));

            let items: any = super.getItems(customLookup);
            items = items.filter(x => Q.toId(x.Status) == 2);
            if (!this.isedit)
            {
                items = items.filter(x => Q.toId(x.PaymentStatus) == 1);
            }
            items = items.filter(x => (Q.toId(x.Billing) == this.myId));
            return items;
            // this is demo about filtering lookup items

            // only take item that has Id % 5 = 0 (5, 10, 15, 20...)
            items = items.filter(x => Q.toId(x.Id) % 5 == 0); // here 'Id' field is hardcode for demo

            // just take maximum first 5 items
            if (items.length >= 5) {
                return items.slice(0, 5);
            }
            else {
                return items;
            }
        }

        private buildLookupKey(id?: number): string
        {
           // Q.reloadLookup("Transactions.Invoice");
            //demo switch lookup key by id
            return "Transactions.Invoice";
            //if (id == 100) {
            //    return "Default.County";
            //} else {
            //    if (id == 200) {
            //        return "Default.State";
            //    }
            //    else {
            //        return "Supplier.Supplier"; // default
            //    }
            //}
        }
    }
}