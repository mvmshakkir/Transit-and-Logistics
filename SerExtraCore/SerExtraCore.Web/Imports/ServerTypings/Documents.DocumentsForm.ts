namespace SerExtraCore.Documents {
    export interface DocumentsForm {
        TrxNo: Serenity.StringEditor;
        TrxDate: Serenity.DateEditor;
        Name: Serenity.StringEditor;
        DocumentTypeId: Serenity.LookupEditor;
        IssueDate: Serenity.DateEditor;
        ExpiryDate: Serenity.DateEditor;
        DueDate: Serenity.DateEditor;
        NoteList: Administration.NotesEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }

    export class DocumentsForm extends Serenity.PrefixedContext {
        static readonly formKey = 'Documents.Documents';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DocumentsForm.init)  {
                DocumentsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = Administration.NotesEditor;
                var w4 = s.MultipleImageUploadEditor;

                Q.initFormType(DocumentsForm, [
                    'TrxNo', w0,
                    'TrxDate', w1,
                    'Name', w0,
                    'DocumentTypeId', w2,
                    'IssueDate', w1,
                    'ExpiryDate', w1,
                    'DueDate', w1,
                    'NoteList', w3,
                    'Attachments', w4
                ]);
            }
        }
    }
}