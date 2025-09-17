namespace SerExtraCore.Master {
    export interface PortsForm {
        PortName: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
    }

    export class PortsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.Ports';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PortsForm.init)  {
                PortsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(PortsForm, [
                    'PortName', w0,
                    'CountryId', w1
                ]);
            }
        }
    }
}