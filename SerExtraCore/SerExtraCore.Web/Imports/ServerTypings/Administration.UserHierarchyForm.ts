namespace SerExtraCore.Administration {
    export interface UserHierarchyForm {
        HierarchyName: Serenity.StringEditor;
        HierarchyOrder: Serenity.IntegerEditor;
        Descrription: Serenity.TextAreaEditor;
    }

    export class UserHierarchyForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Administration.UserHierarchy';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserHierarchyForm.init)  {
                UserHierarchyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(UserHierarchyForm, [
                    'HierarchyName', w0,
                    'HierarchyOrder', w1,
                    'Descrription', w2
                ]);
            }
        }
    }
}