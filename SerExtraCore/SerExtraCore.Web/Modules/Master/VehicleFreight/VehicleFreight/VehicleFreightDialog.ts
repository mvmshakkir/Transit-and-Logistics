
namespace SerExtraCore.VehicleFreight {

    @Serenity.Decorators.registerClass()
   // @Serenity.Decorators.panel()
    export class VehicleFreightDialog extends Common.GridEditorDialog<VehicleFreightRow> {
       
        protected getFormKey() { return VehicleFreightForm.formKey; }
        //protected getIdProperty() { return UOMAmountRow.idProperty; }
        protected getLocalTextPrefix() { return VehicleFreightRow.localTextPrefix; }

        protected form = new VehicleFreightForm(this.idPrefix);
        constructor() {
            super();

            this.form = new VehicleFreightForm(this.idPrefix);



        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // Subscribe to changes in MaterialId
            this.form.MaterialId.changeSelect2(e => {
                this.updateTotalFreight();
            });

            this.form.CashCredit.change(e => {

                /*this.updateTotalFreight();*/
               // this.debitaccount();
               //this.paymentmethod();

            });
            this.form.CashCredit.changeSelect2(e => {
                // this.updateTotalFreight();
                if (this.form.CashCredit.value == '1') {
                    Serenity.EditorUtils.setRequired(this.form.PaymentMethod, true)
                    Serenity.EditorUtils.setRequired(this.form.DebitAccountId, true)

                } else {
                    Serenity.EditorUtils.setRequired(this.form.PaymentMethod, false)
                    Serenity.EditorUtils.setRequired(this.form.DebitAccountId, false)

                }
            });
            if (this.form.CashCredit.value == '1') {
                Serenity.EditorUtils.setRequired(this.form.PaymentMethod, true)
                Serenity.EditorUtils.setRequired(this.form.DebitAccountId, true)

            } else {
                Serenity.EditorUtils.setRequired(this.form.PaymentMethod, false)
                Serenity.EditorUtils.setRequired(this.form.DebitAccountId, false)

            }

            // Subscribe to changes in UnitPrice and PerTonRate
            this.form.UnitPrice.change(e => {
                /*this.updateTotalFreight();*/
                this.updateunitprice();
               
            });

            this.form.PerTonRate.change(e => {
                this.updateTotalFreight();
            });
            
            this.form.TotalFreight.change(e => {
                this.updateTotalFreight();
               /* this.updatetotaltons();*/
            });
            // Initial update
            this.updateTotalFreight();
          
        }
        //private paymentmethod() {
        //    if (this.form.CashCredit.value == '2') {
        //       // const a = 'Bank';
        //        this.form.PaymentMethod.value = AccountTypes.Value1.toString();
        //    }

        //}



        //private debitaccount() {

        //    if (this.form.CashCredit.value == '1') {
                
        //        //this.form.PaymentMethod.visibility = true;
        //        (this.form.PaymentMethod as any).visibility = true;
        //        (this.form.DebitAccountId as any).visibility = true;
        //       // this.form.DebitAccountId.visibility = true;

        //        this.categoryToggler("Payment Method", true);

        //    } else {
        //        (this.form.PaymentMethod as any).visibility = false;
        //        (this.form.DebitAccountId as any).visibility = false;
        //        //this.form.PaymentMethod.visibility = false;
        //       // this.form.DebitAccountId.visibility = false;
        //        this.categoryToggler("Payment Method", false);
               
        //    }

            
        //}




        
        private updateTotalFreight() {
            const materialId = Q.toId(this.form.MaterialId.value);
            if (materialId > 0) {
              /*  const uomAmountRow = UOMAmount.UOMAmountRow.getLookup().item();*/
                //const uomAmountRowArray = Object.values(UOMAmount.UOMAmountRow.getLookup());
                //const uomAmountRow = uomAmountRowArray.find(row => row.materialId === materialId);
                var uomAmountRowLookup = UOMAmount.UOMAmountRow.getLookup().items;
                const uomAmountRow = uomAmountRowLookup.filter(row => row.MaterialsId === materialId);
                if (uomAmountRow.length > 0) {
                    // Check if the filtered array is not empty
                  var  rate = uomAmountRow[0].Rate; // Store the value of Rate from the first element
                }
                
                if (uomAmountRow != null) {
                   
                    this.form.UnitPrice.value = rate;
                   /* this.form.TotalFreight.value = this.form.UnitPrice.value * this.form.PerTonRate.value;*/
                    this.form.TotalCommission.value = this.calculateCommission(this.form.UnitPrice.value, this.form.PerTonRate.value);
                    this.form.UnitPrice.value = this.form.TotalFreight.value / this.form.PerTonRate.value;
                    const a = this.form.TotalFreight.value / this.form.PerTonRate.value;
                   /* this.updateunitprice()*/
                }
            }
        }

        private updateunitprice() {
            const a = this.form.UnitPrice.value;
            const b = this.form.PerTonRate.value
            this.form.TotalFreight.value = a * b;
            this.form.TotalCommission.value = this.calculateCommission(this.form.UnitPrice.value, this.form.PerTonRate.value);
            /*this.calculateCommission();*/
           
            
        }
        //private updatetotaltons() {
        //    const c = this.form.TotalFreight.value;
        //    const d = this.form.UnitPrice.value;
        //    this.form.PerTonRate.value = c / d;
        //}


        private calculateCommission(totalFreight: number, perTonRate: number): number {
            // Calculate the total freight multiplied by the per ton rate
            //const totalAmount = totalFreight * perTonRate;

            //// Calculate the commission, which is 5% of the total amount
            //const commissionPercentage = 0.05;
            //const commission = totalAmount + commissionPercentage;
            const totalFreightt = this.form.TotalFreight.value;
            const commissionPercentage = 0.05; // 5%
            const commission = totalFreightt * commissionPercentage;

            return commission;
        }
        protected categoryToggler(categoryTitle: string, value: boolean) {
            var ele = this.element.find(".category-title:contains('" + categoryTitle + "')").parent();
            ele.toggle(value);
        };  
    }
}