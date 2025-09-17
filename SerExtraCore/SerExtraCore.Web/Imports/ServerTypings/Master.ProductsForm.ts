namespace SerExtraCore.Master {
    export interface ProductsForm {
        ProductCode: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
    }

    export class ProductsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Master.Products';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductsForm.init)  {
                ProductsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(ProductsForm, [
                    'ProductCode', w0,
                    'ProductName', w0,
                    'UnitPrice', w1
                ]);
            }
        }
    }
}