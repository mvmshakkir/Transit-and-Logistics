namespace SerExtraCore.Documents {
    export interface DocumentTypeForm {
        TypeName: Serenity.StringEditor;
    }

    export class DocumentTypeForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Documents.DocumentType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DocumentTypeForm.init)  {
                DocumentTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(DocumentTypeForm, [
                    'TypeName', w0
                ]);
            }
        }
    }
}