namespace SerExtraCore.Transactions {
    export interface ClearanceForm {
        Mblno: Serenity.StringEditor;
        Mbldate: Serenity.DateEditor;
        Hblno: Serenity.StringEditor;
        Hbldate: Serenity.DateEditor;
        Eta: Serenity.DateTimeEditor;
        Etd: Serenity.DateTimeEditor;
        Status: Serenity.LookupEditor;
        PortLoading: Serenity.LookupEditor;
        PortDischarge: Serenity.LookupEditor;
        Attachment: Serenity.MultipleImageUploadEditor;
        Shipper: Serenity.LookupEditor;
        Consignee: Serenity.LookupEditor;
        Vessel: Serenity.StringEditor;
        ContainerNo: Serenity.StringEditor;
        JobRef: Serenity.StringEditor;
        CustomerRef: Serenity.StringEditor;
        PackageType: Serenity.StringEditor;
        Weight: Serenity.StringEditor;
        ChargeableWeight: Serenity.StringEditor;
        NoOfPackages: Serenity.DecimalEditor;
        Volume: Serenity.DecimalEditor;
    }

    export class ClearanceForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Transactions.Clearance';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClearanceForm.init)  {
                ClearanceForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.DateTimeEditor;
                var w3 = s.LookupEditor;
                var w4 = s.MultipleImageUploadEditor;
                var w5 = s.DecimalEditor;

                Q.initFormType(ClearanceForm, [
                    'Mblno', w0,
                    'Mbldate', w1,
                    'Hblno', w0,
                    'Hbldate', w1,
                    'Eta', w2,
                    'Etd', w2,
                    'Status', w3,
                    'PortLoading', w3,
                    'PortDischarge', w3,
                    'Attachment', w4,
                    'Shipper', w3,
                    'Consignee', w3,
                    'Vessel', w0,
                    'ContainerNo', w0,
                    'JobRef', w0,
                    'CustomerRef', w0,
                    'PackageType', w0,
                    'Weight', w0,
                    'ChargeableWeight', w0,
                    'NoOfPackages', w5,
                    'Volume', w5
                ]);
            }
        }
    }
}