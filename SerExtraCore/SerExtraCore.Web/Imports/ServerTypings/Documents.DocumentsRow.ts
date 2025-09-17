namespace SerExtraCore.Documents {
    export interface DocumentsRow {
        Id?: number;
        Name?: string;
        DocumentTypeId?: number;
        TrxDate?: string;
        IssueDate?: string;
        ExpiryDate?: string;
        DueDate?: string;
        Attachments?: string;
        TrxNo?: string;
        NoteList?: Administration.NoteRow[];
        DocumentTypeTypeName?: string;
    }

    export namespace DocumentsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Documents.Documents';
        export const deletePermission = 'Documents:Documents';
        export const insertPermission = 'Documents:Documents';
        export const readPermission = 'Documents:Documents';
        export const updatePermission = 'Documents:Documents';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            DocumentTypeId = "DocumentTypeId",
            TrxDate = "TrxDate",
            IssueDate = "IssueDate",
            ExpiryDate = "ExpiryDate",
            DueDate = "DueDate",
            Attachments = "Attachments",
            TrxNo = "TrxNo",
            NoteList = "NoteList",
            DocumentTypeTypeName = "DocumentTypeTypeName"
        }
    }
}
