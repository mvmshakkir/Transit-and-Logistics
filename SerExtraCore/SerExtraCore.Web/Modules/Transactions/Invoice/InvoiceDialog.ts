
namespace SerExtraCore.Transactions {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class InvoiceDialog extends Serenity.EntityDialog<InvoiceRow, any> {
        protected getFormKey() { return InvoiceForm.formKey; }
        protected getIdProperty() { return InvoiceRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceRow.localTextPrefix; }
        protected getNameProperty() { return InvoiceRow.nameProperty; }
        protected getService() { return InvoiceService.baseUrl; }
        protected getDeletePermission() { return InvoiceRow.deletePermission; }
        protected getInsertPermission() { return InvoiceRow.insertPermission; }
        protected getUpdatePermission() { return InvoiceRow.updatePermission; }

        protected form = new InvoiceForm(this.idPrefix);
        //constructor() {
        //    // Initialize an empty list for selected consignment IDs
        //    this.selectedConsignmentIds = [];
        //}

        constructor() {
            super();
           
            Q.reloadLookup(ConsignmentRow.lookupKey);

            this.form = new InvoiceForm(this.idPrefix);
            this.selectedConsignmentIds = [];
           
            (this.form.InvoiceVehicleDetails.view as any).onRowCountChanged.subscribe(() => {

                var slno = 1;
                for (var k of this.form.InvoiceVehicleDetails.getItems()) {


                    k.Slno = slno++;


                }
            });

            (this.form.ChargeDetailList.view as any).onRowCountChanged.subscribe(() => {

                var slno = 1;
                for (var k of this.form.ChargeDetailList.getItems()) {


                    k.Slno = slno++;


                }
            });

        }

        private  setpayment() {
            var Payment = Q.toId(this.form.Payment.value);
            if (Payment != null) {
                if (Payment == 1) {
                    this.form.Billing.value = this.form.ConsigneeId.value;
                    this.form.Billing.readOnly = true;
                }
                else {
                    if (Payment == 2) {
                        this.form.Billing.value = this.form.ShipperId.value;
                        this.form.Billing.readOnly = true;
                    }
                    else {
                        this.form.Billing.readOnly = false;
                    }
                }

            }
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.form.Cgst.changeSelect2(e => {

                this.calculatetotal();

            });
            this.form.Sgst.changeSelect2(e => {

                this.calculatetotal();

            });
            this.form.Igst.changeSelect2(e => {

                this.calculatetotal();

            });
            this.form.InvoiceDues.datetime = this.form.InvoiceDate.valueAsDate;
            this.form.ChargeDetailList.hidesupppieradvance = true;
            Accounts.CommonService.GetConfigration(
                {}
                , response => {
                    if (response.Consignee) {
                        this.form.ConsigneeId.element.toggleClass("required", true);
                        this.element.find(".ConsigneeId").show();
                    }
                    else {
                        this.form.ConsigneeId.element.toggleClass("required", false);
                        this.element.find(".ConsigneeId").hide();
                    }
                    if (response.Shipper) {
                        this.form.ShipperId.element.toggleClass("required", true);
                        this.element.find(".ShipperId").show();
                    }
                    else {
                        this.form.ShipperId.element.toggleClass("required", false);
                        this.element.find(".ShipperId").hide();
                    }

                    if (!response.Consignee && !response.Shipper) {
                        this.form.Payment.value = "3";
                        this.form.Payment.readOnly = true;
                        this.element.find(".Payment").hide();
                    }
                });
            // fill next number in new record mode
            if (this.isNew()) {

                this.form.ConsignmentId.filterField = "Status";
                this.form.ConsignmentId.filterValue = 1;
                this.getNextNumber();

            }
            
            //this.form.VehicleId.changeSelect2(e => {
            //    var productID = Q.toId(this.form.VehicleId.value);
            //    if (productID != null) {
            //        var x = Master.VehiclesRow.getLookup().itemById[productID];
            //        this.form.Type.value = x.Description;
            //        this.form.VehicleNumber.value = x.VehicleNumber;
            //        this.form.Driver.value = x.Driver.toString();

            //    }
            //});
          

            this.form.Status.changeSelect2(e => {
                InvoiceService.LoginUser({

                }, response => {
                    this.form.StatusUser.value = response;
                });

            });
            this.form.Payment.changeSelect2(e => {

                this.setpayment();

            });
            this.form.ConsigneeId.changeSelect2(e => {
                this.setpayment();


            });
            this.form.ShipperId.changeSelect2(e => {
                this.setpayment();


            });
            this.form.InvoiceDate.change(e => {
                this.form.InvoiceDues.datetime = this.form.InvoiceDate.valueAsDate;


            });
            this.form.ClearanceId.changeSelect2(e => {
                var clearenceid = Q.toId(this.form.ClearanceId.value);
                if (clearenceid > 0) {
                    var clea = Transactions.ClearanceRow.getLookup().itemById[clearenceid];
                    if (clea != null) {
                        if (clea.Consignee != null) {
                            this.form.ConsigneeId.value = clea.Consignee.toString();
                        }
                        if (clea.Shipper != null) {
                            this.form.ShipperId.value = clea.Shipper.toString();
                        }
                       
                    }
                }


            });
            //this.form.ConsignmentId.changeSelect2(e => {
            //    // Define your conditions
            //    var consigneeId = 177;
            //    //var startDate = new Date('2024-01-01');
            //   // var endDate = new Date('2024-12-31');
            //   // var startDate = this.form.date.value;
            //    // endDate = '2024-07-03T00:00:00.000';
            //    // Adjust the startDate and endDate to be strings if needed
            //    //var startDateString = startDate.toISOString().split('T')[0];
            //    //var endDateString = endDate.toISOString().split('T')[0];

            //    // Initialize cumulative sum variables
            //    let totalCgst = 0, totalSgst = 0, totalIgst = 0;
            //    let totalCgstAmt = 0, totalSgstAmt = 0, totalIgstAmt = 0;

            //    // Clear existing form fields or handle merging logic if needed
            //    this.clearFormFields();
            //    const triprowlookup = ConsignmentRow.getLookup().items;

            //    const filteredRows = triprowlookup.filter(row => {
            //        const rowDate = new Date(row.Date); // Convert row.Date string to Date object
            //        return row.ConsigneeId === 177 && rowDate >= startDate && rowDate <= endDate;
            //    });
            //    // Retrieve consignments based on the condition
            //    Transactions.ConsignmentService.List({
            //        Criteria: [
            //            ['ConsigneeId', '=', consigneeId],
            //            ['Date', '>=', Date],
            //            ['Date', '<=', Date]
            //        ]
            //    }, response => {
            //        if (response.Entities && response.Entities.length > 0) {
            //            response.Entities.forEach((entity, index) => {
            //                // Parse values and ensure they are numbers
            //                const cgst = entity.Cgst ;
            //                const sgst = entity.Sgst ;
            //                const igst = entity.Igst ;
            //                const cgstAmt = entity.CgstAmt ;
            //                const sgstAmt =entity.SgstAmt ;
            //                const igstAmt = entity.IgstAmt ;

            //                totalCgst += isNaN(cgst) ? 0 : cgst;
            //                totalSgst += isNaN(sgst) ? 0 : sgst;
            //                totalIgst += isNaN(igst) ? 0 : igst;

            //                totalCgstAmt += isNaN(cgstAmt) ? 0 : cgstAmt;
            //                totalSgstAmt += isNaN(sgstAmt) ? 0 : sgstAmt;
            //                totalIgstAmt += isNaN(igstAmt) ? 0 : igstAmt;

            //                // Update cumulative sum form fields
            //                this.form.Cgst.value = totalCgst;
            //                this.form.Sgst.value = totalSgst;
            //                this.form.Igst.value = totalIgst;
            //                this.form.CgstAmt.value = totalCgstAmt;
            //                this.form.SgstAmt.value = totalSgstAmt;
            //                this.form.IgstAmt.value = totalIgstAmt;

            //                // For the first consignment, you might want to set other fields
            //                if (index === 0) {
            //                    this.form.ClientJobNo.value = entity.ClientJobNo || '';
            //                    this.form.ConsignmentDate.value = entity.Date || '';
            //                    this.form.WayBillNo.value = entity.WayBillNo || '';
            //                    this.form.JobNo.value = entity.JobNo || '';
            //                    this.form.ShipperId.value = entity.ShipperId ? entity.ShipperId.toString() : '';
            //                    this.form.ConsigneeId.value = entity.ConsigneeId ? entity.ConsigneeId.toString() : '';
            //                    if (entity.Payment != null) {
            //                        this.form.Payment.value = entity.Payment.toString();
            //                    }
            //                    this.form.PaymentMode.value = entity.PaymentMode ? entity.PaymentMode.toString() : '';
            //                    if (entity.ClearanceId != null) {
            //                        this.form.ClearanceId.value = entity.ClearanceId.toString();
            //                    }
            //                }
            //            });
            //        }
            //    });
            //});

            // Function to clear existing form fields or handle merging logic if needed

            //this.form.ConsignmentId.changeSelect2(e => {
            //    var consignmentIDs = this.form.ConsignmentId.value.split(','); // Assuming consignment IDs are comma-separated

            //    consignmentIDs.forEach(productID => {
            //        productID = Q.toId(productID.trim());
            //        if (productID != null) {
            //            Transactions.ConsignmentService.Retrieve(
            //                { EntityId: productID },
            //                response => {
            //                    this.processConsignmentResponse(response);
            //                }
            //            );
            //        }
            //    });
            //});

       
            this.form.ConsignmentId.changeSelect2(e => {
                var consignmentIDs = this.form.ConsignmentId.value.split(','); // Assuming consignment IDs are comma-separated
                consignmentIDs = consignmentIDs.map(id => Q.toId(id.trim())).filter(id => id != null);

                // Determine the consignments that have been deselected
                const deselectedConsignments = this.selectedConsignmentIds.filter(id => !consignmentIDs.includes(id));

                // Update the list of selected consignment IDs
                this.selectedConsignmentIds = consignmentIDs;

                // Remove data related to deselected consignments
                this.removeConsignmentData(deselectedConsignments);

                consignmentIDs.forEach(productID => {
                    Transactions.ConsignmentService.Retrieve(
                        { EntityId: productID },
                        response => {
                            this.processConsignmentResponse(response);
                        }
                    );
                });
            });























            

            //this.form.ConsignmentId.changeSelect2(e => {
            //    var productID = Q.toId(this.form.ConsignmentId.value);
            //    var consignmentIDs = this.form.ConsignmentId.value.split(','); 
            //    var productIDs = this.form.ConsignmentId.value; 
            //    if (productID != null) {

            //        Transactions.ConsignmentService.Retrieve(
            //            { EntityId: productID }
            //            , response => {

            //                this.form.ClientJobNo.value = response.Entity.ClientJobNo;
            //                this.form.ConsignmentDate.value = response.Entity.Date;
            //                //Tax
            //                this.form.Cgst.value = response.Entity.Cgst;
            //                this.form.Sgst.value = response.Entity.Sgst;
            //                this.form.Igst.value = response.Entity.Igst;
            //                this.form.CgstAmt.value = response.Entity.CgstAmt;
            //                this.form.SgstAmt.value = response.Entity.SgstAmt;
            //                this.form.IgstAmt.value = response.Entity.IgstAmt;

            //                this.form.WayBillNo.value = response.Entity.WayBillNo;
            //                this.form.JobNo.value = response.Entity.JobNo;
            //                this.form.ShipperId.value = response.Entity.ShipperId.toString();
            //                this.form.ConsigneeId.value = response.Entity.ConsigneeId.toString();
            //                //this.form.VehicleId.value = response.Entity.VehicleId.toString();
            //                //this.form.VehicleNumber.value = response.Entity.VehicleNumber;
            //                //this.form.Type.value = response.Entity.Type;
            //                if (response.Entity.Payment != null) { 
            //                    this.form.Payment.value = response.Entity.Payment.toString();
            //                }
            //                this.form.PaymentMode.value = response.Entity.PaymentMode.toString();
            //                if (response.Entity.ClearanceId != null)
            //                {
            //                    this.form.ClearanceId.value = response.Entity.ClearanceId.toString()
            //                }

            //                //this.form.TypeOfPkg.value = response.Entity.TypeOfPkg;
            //                //this.form.TotalVolume.value = response.Entity.TypeOfPkg;
            //                //this.form.TotalWeight.value = response.Entity.TotalWeight;
            //                //this.form.TotalNoOfPkgs.value = response.Entity.TotalNoOfPkgs;

            //                if (response.Entity.Billing != null) { 
            //                    this.form.Billing.value = response.Entity.Billing.toString();
            //                }

            //                this.form.AdvanceAmount.value = response.Entity.AdvanceAmount;
            //                this.form.BalanceAmount.value = response.Entity.BalanceAmount;
                            

            //                //if (response.Entity.SupplierId != null) {
            //                //    this.form.SupplierId.value = response.Entity.SupplierId.toString();
            //                //    this.form.SupplierPaymentStatus.value = "1";
            //                //}
            //                //else {
            //                //    this.form.SupplierId.value = null;
            //                //}
                            
            //                //this.form.SupplierAmount.value = response.Entity.SupplierAmount;


            //                //this.form.StartDate.value = response.Entity.StartDate ?? "".toString();
            //                this.form.EndDate.value = response.Entity.EndDate??"".toString();

            //                //if (response.Entity.ShippingAreaFrom != null) {
            //                //    this.form.ShippingAreaFrom.value = response.Entity.ShippingAreaFrom.toString();
            //                //}
            //                //if (response.Entity.ShippingAreaTo != null) {
            //                //    this.form.ShippingAreaTo.value = response.Entity.ShippingAreaTo.toString();
            //                //}


            //                var k = this.form.ChargeDetailList.getItems();
            //                k = [];
            //                response.Entity.ChargeDetailList.forEach((item, index) => {

            //                    k.push({
            //                        Qty: item.Qty, Amount: item.Amount, ChargeId: item.ChargeId, Description: item.Description, TotalAmount: item.TotalAmount, CurrencyId: item.CurrencyId, ExchangeRate: item.ExchangeRate, TotalAmountInLocalCurrency: item.TotalAmountInLocalCurrency, CurrencyCurrencyCode: item.CurrencyCurrencyCode, ChargeChargeName: item.ChargeChargeName, Date: item.Date, SupplierAmount: item.SupplierAmount, SupplierId: item.SupplierId, SupplierPaymentStatus: 1, AccountId: item.AccountId, SupplierAdvanceAmount: item.SupplierAdvanceAmount, PaymentType: item.PaymentType, TaxPer: item.TaxPer, TaxAmount: item.TaxAmount, TaxableAmount: item.TaxableAmount, DisAmount: item.DisAmount, Total: item.Total
            //                    });

            //                });
            //                var m = this.form.InvoiceVehicleDetails.getItems();
            //                m = [];
            //                response.Entity.ConsignmentVehicleDetails.forEach((item, index) => {
            //                    var driver = "";
            //                    var areafrom = "";
            //                    var areato = "";
            //                    if (item.Driver != null) {
            //                        driver = Master.EmployeeMasterRow.getLookup().itemById[item.Driver].EmployeeName;
            //                    }
            //                    if (item.ShippingAreaFrom != null) {
            //                        areafrom = Master.ShippingAreasRow.getLookup().itemById[item.ShippingAreaFrom].AreaName;
            //                    }
            //                    if (item.ShippingAreaTo != null) {
            //                        areato = Master.ShippingAreasRow.getLookup().itemById[item.ShippingAreaTo].AreaName;
            //                    }
            //                    var spe;
            //                    //Accounts.CommonService.GetConsigmentVehicleSpecification(
            //                    //    { vehicleId: item.Id }
            //                    //    , response => {
            //                    //        if (response != null) {
            //                    //            spe = response;
            //                    //        }

            //                    //    });
            //                    var z: InvoiceChargesRow[];
            //                    z = [];
            //                    item.VehicleCharges.forEach((chargeitem, index1) => {

            //                        z.push({ ChargeId: chargeitem.ChargeId, Qty: chargeitem.Qty, Amount: chargeitem.Amount, Description: chargeitem.Description, TotalAmount: chargeitem.TotalAmount, CurrencyId: chargeitem.CurrencyId, ExchangeRate: chargeitem.ExchangeRate, TotalAmountInLocalCurrency: chargeitem.TotalAmountInLocalCurrency, CurrencyCurrencyCode: chargeitem.CurrencyCurrencyCode, ChargeChargeName: chargeitem.ChargeChargeName, Date: chargeitem.Date, SupplierAmount: chargeitem.SupplierAmount, SupplierId: chargeitem.SupplierId, SupplierPaymentStatus: 1, AccountId: chargeitem.AccountId, SupplierAdvanceAmount: chargeitem.SupplierAdvanceAmount, PaymentType: chargeitem.PaymentType, TaxPer: chargeitem.TaxPer, TaxAmount: chargeitem.TaxAmount, TaxableAmount: chargeitem.TaxableAmount, DisAmount: chargeitem.DisAmount, Total: chargeitem.Total });

            //                    })
            //                    m.push({
            //                        TypeOfVehicle: item.TypeOfVehicle, Driver: item.Driver, VehicleNumber: item.VehicleNumber, ShippingAreaFrom: item.ShippingAreaFrom, ShippingAreaTo: item.ShippingAreaTo, Type: item.Type, VehicleId: item.VehicleId, ShippingAreaFromAreaName: areafrom, ShippingAreaToAreaName: areato, DriverEmployeeName: driver, EndDate: item.EndDate, StartDate: item.StartDate, DriverName: item.DriverName, Number: item.Number, ResidentID: item.ResidentID, CountryId: item.CountryId, ChargeId: item.ChargeId, Amount: item.Amount, Qty: item.Qty, TotalAmount: item.TotalAmount, CurrencyId: item.CurrencyId, ExchangeRate: item.ExchangeRate, TotalAmountInLocalCurrency: item.TotalAmountInLocalCurrency, Description: item.Description, Date: item.Date, SupplierId: item.SupplierId, SupplierAmount: item.SupplierAmount, SupplierPaymentStatus: 1, TypeOfPkg: item.TypeOfPkg, TotalVolume: item.TotalVolume, TotalWeight: item.TotalWeight, TotalNoOfPkgs: item.TotalNoOfPkgs, VehicleSpecifications: item.VehicleSpecifications, AccountId: item.AccountId, SupplierAdvanceAmount: item.SupplierAdvanceAmount, PaymentType: item.PaymentType, ConsignmentVehicleDetailsId: item.Id, TaxPer: item.TaxPer, TaxAmount: item.TaxAmount, TaxableAmount: item.TaxableAmount, DisAmount: item.DisAmount, Total: item.Total, VehicleCharges: z
            //                    });

                                
            //                });
            //                this.form.InvoiceVehicleDetails.value = m;
            //                this.form.ChargeDetailList.value = k;

            //                //var l = this.form.InvoiceTripDates.getItems();
            //                //l = [];
            //                //response.Entity.ConsignmentTripDates.forEach((item, index) => {

            //                //    l.push({
            //                //        StartDate: item.StartDate, EndDate: item.EndDate
            //                //    });

            //                //});
            //                //this.form.InvoiceTripDates.value = l;


            //                this.form.TotalAmount.value = response.Entity.BalanceAmount;
            //                //this.form.BalanceAmount.value = response.Entity.BalanceAmount;
            //                this.form.BalanceAmount.value = this.form.TotalAmount.value - this.form.AdvanceAmount.value;
            //                this.setpayment();
            //                this.form.InvoiceDues.value = [];
            //                var Payment = Q.toId(this.form.Billing.value);
            //                Accounts.CommonService.GetCustomer(
            //                    { SupplierId: Payment }
            //                    , response =>
            //                    {
            //                        if (response.DueDays > 0) {
            //                            this.calculatedue = true;
            //                            this.numberofdays = response.DueDays;
            //                            this.calculatedues();

            //                        }
            //                })
                           
            //              //  this.setsupp();
            //            });
            //    }
            //});

            (this.form.ChargeDetailList.view as any).onDataChanged.subscribe(() => {
                var total = 0;
                for (var k of this.form.ChargeDetailList.getItems()) {

                    total += k.TotalAmountInLocalCurrency || 0;


                }

                this.calculatetotal();
            });
            (this.form.ChargeDetailList.view as any).onRowCountChanged.subscribe(() => {
                var total = 0;
                for (var k of this.form.ChargeDetailList.getItems()) {

                    total += k.TotalAmountInLocalCurrency || 0;


                }

                this.calculatetotal();
            });

            Accounts.CommonService.GetUserHierarchy({
                type:"Invoice"
            }, response => {
                    this.form.Status.readOnly = !response;
            });
           
            

            (this.form.InvoiceVehicleDetails.view as any).onDataChanged.subscribe(() => {
                this.calculatetotal();
              //  this.setsupp();

            });
            (this.form.InvoiceVehicleDetails.view as any).onRowCountChanged.subscribe(() => {
                this.calculatetotal();
               // this.setsupp();

            });
           // this.setsupp();
        }
        private calculatetotal() {
            var total = 0;
            for (var k of this.form.ChargeDetailList.getItems()) {

                total += k.TotalAmountInLocalCurrency || 0;


            }
            for (var l of this.form.InvoiceVehicleDetails.getItems()) {


                total += l.TotalAmountInLocalCurrency || 0;
                for (var k of l.VehicleCharges) {

                    total += k.TotalAmountInLocalCurrency || 0;


                }

            }
            var cgst =this.form.Cgst.value;
            var sgst=this.form.Sgst.value;
            var igst =  this.form.Igst.value ;
            this.form.CgstAmt.value = total * (cgst / 100);
            this.form.SgstAmt.value = total * (sgst / 100);
            this.form.IgstAmt.value = total * (igst / 100);

            this.form.TotalAmount.value = total + this.form.CgstAmt.value + this.form.SgstAmt.value + this.form.IgstAmt.value;
            //this.calculatebalance();
            this.calculatedues();
        }
        // private calculatebalance() {
        //     this.form.BalanceAmount.value = this.form.TotalAmount.value - this.form.AdvanceAmount.value;
        //     //this.form.TotalAmount.value = response.Entity.BalanceAmount;
        //     //var balamt = response.Entity.BalanceAmount;
        //     //this.form.BalanceAmount.value = balamt - this.form.AdvanceAmount.value;
        //}
        //private clearFormFields() {
        //    this.form.ClientJobNo.value = '';
        //    this.form.ConsignmentDate.value = '';
        //    // Tax
        //    this.form.Cgst.value = 0;
        //    this.form.Sgst.value = 0;
        //    this.form.Igst.value = 0;
        //    this.form.CgstAmt.value = 0;
        //    this.form.SgstAmt.value = 0;
        //    this.form.IgstAmt.value = 0;
        //    this.form.WayBillNo.value = '';
        //    this.form.JobNo.value = '';
        //    this.form.ShipperId.value = '';
        //    this.form.ConsigneeId.value = '';
        //    //this.form.VehicleId.value = '';
        //    //this.form.VehicleNumber.value = '';
        //    //this.form.Type.value = '';
        //    this.form.Payment.value = '';
        //    this.form.PaymentMode.value = '';
        //    this.form.ClearanceId.value = '';
        //}
        private setsupp() {
            //var suppen = false;

            //for (var k of this.form.InvoiceVehicleDetails.getItems()) {

            //    if (k.TypeOfVehicle == VehicleTypes.Value2) {
            //        suppen = true;
            //    }


            //}
            //if (suppen) {
            //    Serenity.EditorUtils.setReadonly(this.form.SupplierAmount.element, false);
            //    Serenity.EditorUtils.setReadonly(this.form.SupplierId.element, false);
            //    Serenity.EditorUtils.setReadonly(this.form.SupplierPaymentStatus.element, false);
            //}
            //else {
            //    Serenity.EditorUtils.setReadonly(this.form.SupplierAmount.element, true);
            //    Serenity.EditorUtils.setReadonly(this.form.SupplierId.element, true);
            //    Serenity.EditorUtils.setReadonly(this.form.SupplierPaymentStatus.element, true);
            //}
        }
        private getNextNumber() {

            var val = Q.trimToNull(this.form.InvoiceNo.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'I').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                InvoiceService.GetNextNumber({
                    Prefix: prefix,
                    Length: 6 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.InvoiceNo.value = response.Serial;

                    // this is to mark numerical part after prefix
                        (this.form.InvoiceNo.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }
        getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(SerExtraCore.Common.ReportHelper.createToolButton({
                title: 'Invoice',
                cssClass: 'export-pdf-button',
                reportKey: 'Transactions.Invoice',
                getParams: () => ({
                    orderid: this.get_entityId()
                })
            }));

            

            //buttons.push({

            //    title: 'Invoice',
            //    cssClass: 'export-pdf-button',
            //    onClick: () => {
            //        window.location.href = "/Transactions/Print?saleid=" + this.get_entityId() + "&id=Invoice"

            //    }
            //});
            return buttons;
        }

        protected updateInterface() {
            super.updateInterface();

            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
         
        }
        private calculatedues()
        {
            if (this.form.InvoiceDate.value != null) {
                if (this.calculatedue) {
                    if (this.numberofdays > 0) {
                        if (this.form.InvoiceDues.rowCount() == 0) {
                            var ll = this.form.InvoiceDues.getItems();
                            ll = [];
                            
                            ll.push({ DueDate: this.addDays(this.form.InvoiceDate.valueAsDate, this.numberofdays).toDateString(), DueDays: this.numberofdays, Amount: this.form.BalanceAmount.value })
                            this.form.InvoiceDues.value = ll;
                        }
                        else {
                            if (this.form.InvoiceDues.rowCount() == 1) {
                                var ll = this.form.InvoiceDues.getItems();
                                ll[0].Amount = this.form.BalanceAmount.value;
                                this.form.InvoiceDues.value = ll;
                                
                            }
                        }
                    }
                }
            }
        }
        private addDays(date: Date, days: number): Date {
            date.setDate(date.getDate() + days);
            return date;
        }
        protected calculatedue: boolean;
        protected numberofdays: number; 


        private processConsignmentResponse(response) {
            // Set simple fields
            const consignmentIds = response.Entity.Id;

            this.form.ClientJobNo.value = response.Entity.ClientJobNo;
            this.form.ConsignmentDate.value = response.Entity.Date;
            // Tax
            
            this.form.WayBillNo.value = response.Entity.WayBillNo;
            this.form.JobNo.value = response.Entity.JobNo;
            this.form.ShipperId.value = response.Entity.ShipperId.toString();
            this.form.ConsigneeId.value = response.Entity.ConsigneeId.toString();

            if (response.Entity.Payment != null) {
                this.form.Payment.value = response.Entity.Payment.toString();
            }
            this.form.PaymentMode.value = response.Entity.PaymentMode.toString();
            if (response.Entity.ClearanceId != null) {
                this.form.ClearanceId.value = response.Entity.ClearanceId.toString();
            }

            if (response.Entity.Billing != null) {
                this.form.Billing.value = response.Entity.Billing.toString();
            }

            this.form.AdvanceAmount.value = response.Entity.AdvanceAmount;
            this.form.BalanceAmount.value = response.Entity.BalanceAmount;

            this.form.EndDate.value = response.Entity.EndDate ?? "".toString();

            // Add items to ChargeDetailList without duplicating old data
            const existingChargeDetails = this.form.ChargeDetailList.value || [];
            const newChargeDetails = response.Entity.ChargeDetailList.filter(
                item => !existingChargeDetails.some(existingItem => existingItem.ConsignmentId === item.ConsignmentId)
            ).map((item) => ({
                ConsignmentId: item.ConsignmentId,
              
                Qty: item.Qty, Amount: item.Amount, ChargeId: item.ChargeId, Description: item.Description,
                TotalAmount: item.TotalAmount, CurrencyId: item.CurrencyId, ExchangeRate: item.ExchangeRate,
                TotalAmountInLocalCurrency: item.TotalAmountInLocalCurrency, CurrencyCurrencyCode: item.CurrencyCurrencyCode,
                ChargeChargeName: item.ChargeChargeName, Date: item.Date, SupplierAmount: item.SupplierAmount,
                SupplierId: item.SupplierId, SupplierPaymentStatus: 1, AccountId: item.AccountId, SupplierAdvanceAmount: item.SupplierAdvanceAmount,
                PaymentType: item.PaymentType, TaxPer: item.TaxPer, TaxAmount: item.TaxAmount, TaxableAmount: item.TaxableAmount,
                DisAmount: item.DisAmount, Total: item.Total
            }));
            this.form.ChargeDetailList.value = [...existingChargeDetails, ...newChargeDetails];

            // Add items to InvoiceVehicleDetails without duplicating old data
            const existingVehicleDetails = this.form.InvoiceVehicleDetails.value || [];
            const newVehicleDetails = response.Entity.ConsignmentVehicleDetails.filter(
                item => !existingVehicleDetails.some(existingItem => existingItem.ConsignmentId === item.ConsignmentId)
            ).map((item) => {
                const driver = item.Driver ? Master.EmployeeMasterRow.getLookup().itemById[item.Driver]?.EmployeeName : "";
                const areafrom = item.ShippingAreaFrom ? Master.ShippingAreasRow.getLookup().itemById[item.ShippingAreaFrom]?.AreaName : "";
                const areato = item.ShippingAreaTo ? Master.ShippingAreasRow.getLookup().itemById[item.ShippingAreaTo]?.AreaName : "";

                const vehicleCharges = item.VehicleCharges.map((chargeitem) => ({
                    ChargeId: chargeitem.ChargeId, Qty: chargeitem.Qty, Amount: chargeitem.Amount, Description: chargeitem.Description,
                    TotalAmount: chargeitem.TotalAmount, CurrencyId: chargeitem.CurrencyId, ExchangeRate: chargeitem.ExchangeRate,
                    TotalAmountInLocalCurrency: chargeitem.TotalAmountInLocalCurrency, CurrencyCurrencyCode: chargeitem.CurrencyCurrencyCode,
                    ChargeChargeName: chargeitem.ChargeChargeName, Date: chargeitem.Date, SupplierAmount: chargeitem.SupplierAmount,
                    SupplierId: chargeitem.SupplierId, SupplierPaymentStatus: 1, AccountId: chargeitem.AccountId, SupplierAdvanceAmount: chargeitem.SupplierAdvanceAmount,
                    PaymentType: chargeitem.PaymentType, TaxPer: chargeitem.TaxPer, TaxAmount: chargeitem.TaxAmount, TaxableAmount: chargeitem.TaxableAmount,
                    DisAmount: chargeitem.DisAmount, Total: chargeitem.Total
                }));

                return {
                    ConsignmentId: item.ConsignmentId,
                   
                    TypeOfVehicle: item.TypeOfVehicle, Driver: item.Driver, VehicleNumber: item.VehicleNumber,
                    ShippingAreaFrom: item.ShippingAreaFrom, ShippingAreaTo: item.ShippingAreaTo, Type: item.Type,
                    VehicleId: item.VehicleId, ShippingAreaFromAreaName: areafrom, ShippingAreaToAreaName: areato,
                    DriverEmployeeName: driver, EndDate: item.EndDate, StartDate: item.StartDate, DriverName: item.DriverName,
                    Number: item.Number, ResidentID: item.ResidentID, CountryId: item.CountryId, ChargeId: item.ChargeId,
                    Amount: item.Amount, Qty: item.Qty, TotalAmount: item.TotalAmount, CurrencyId: item.CurrencyId,
                    ExchangeRate: item.ExchangeRate, TotalAmountInLocalCurrency: item.TotalAmountInLocalCurrency,
                    Description: item.Description, Date: item.Date, SupplierId: item.SupplierId, SupplierAmount: item.SupplierAmount,
                    SupplierPaymentStatus: 1, TypeOfPkg: item.TypeOfPkg, TotalVolume: item.TotalVolume, TotalWeight: item.TotalWeight,
                    TotalNoOfPkgs: item.TotalNoOfPkgs, VehicleSpecifications: item.VehicleSpecifications, AccountId: item.AccountId,
                    SupplierAdvanceAmount: item.SupplierAdvanceAmount, PaymentType: item.PaymentType, ConsignmentVehicleDetailsId: item.Id,
                    TaxPer: item.TaxPer, TaxAmount: item.TaxAmount, TaxableAmount: item.TaxableAmount, DisAmount: item.DisAmount,
                    Total: item.Total, VehicleCharges: vehicleCharges
                };
            });
            this.form.InvoiceVehicleDetails.value = [...existingVehicleDetails, ...newVehicleDetails];

            // Set payment and dues
            // this.form.TotalAmount.value = response.Entity.BalanceAmount;

           






            this.form.BalanceAmount.value = this.form.TotalAmount.value - this.form.AdvanceAmount.value;
            this.setpayment();
            this.form.InvoiceDues.value = [];
            const Payment = Q.toId(this.form.Billing.value);
            Accounts.CommonService.GetCustomer(
                { SupplierId: Payment },
                response => {
                    if (response.DueDays > 0) {
                        this.calculatedue = true;
                        this.numberofdays = response.DueDays;
                        this.calculatedues();
                    }
                }
            );
        }

        private removeConsignmentData(deselectedConsignments) {
            if (!deselectedConsignments || deselectedConsignments.length === 0) return;

            // Remove data from ChargeDetailList
            const existingChargeDetails = this.form.ChargeDetailList.value || [];
            this.form.ChargeDetailList.value = existingChargeDetails.filter(item => !deselectedConsignments.includes(item.ConsignmentId));

            // Remove data from InvoiceVehicleDetails
            const existingVehicleDetails = this.form.InvoiceVehicleDetails.value || [];
            this.form.InvoiceVehicleDetails.value = existingVehicleDetails.filter(item => !deselectedConsignments.includes(item.ConsignmentId));
        }














    }
}