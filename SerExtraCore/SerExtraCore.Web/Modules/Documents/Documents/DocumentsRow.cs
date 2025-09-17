
namespace SerExtraCore.Documents.Entities
{
    using SerExtraCore.Administration;
    using SerExtraCore.Administration.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Documents"), TableName("[dbo].[Documents]")]
    [DisplayName("Documents"), InstanceName("Documents")]
    [ReadPermission("Documents:Documents")]
    [ModifyPermission("Documents:Documents")]
    public sealed class DocumentsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Document Type"), ForeignKey("[dbo].[DocumentType]", "ID"), LeftJoin("jDocumentType"), TextualField("DocumentTypeTypeName")]
        [LookupEditor(typeof(DocumentTypeRow), InplaceAdd = true), QuickFilter, QuickSearch]
        public Int32? DocumentTypeId
        {
            get { return Fields.DocumentTypeId[this]; }
            set { Fields.DocumentTypeId[this] = value; }
        }

        [DisplayName("Trx Date"), NotNull,DefaultValue("today"), QuickSearch, QuickFilter]
        public DateTime? TrxDate
        {
            get { return Fields.TrxDate[this]; }
            set { Fields.TrxDate[this] = value; }
        }

        [DisplayName("Issue Date"), QuickSearch, QuickFilter]
        public DateTime? IssueDate
        {
            get { return Fields.IssueDate[this]; }
            set { Fields.IssueDate[this] = value; }
        }

        [DisplayName("Expiry Date"), QuickSearch, QuickFilter]
        public DateTime? ExpiryDate
        {
            get { return Fields.ExpiryDate[this]; }
            set { Fields.ExpiryDate[this] = value; }
        }

        [DisplayName("Due Date"),QuickSearch,QuickFilter]
        public DateTime? DueDate
        {
            get { return Fields.DueDate[this]; }
            set { Fields.DueDate[this] = value; }
        }

        [DisplayName("Attachments"), MultipleFileUploadEditor(FilenameFormat = "Claims/Attatchments/~"), Required(true)]
        public String Attachments
        {
            get { return Fields.Attachments[this]; }
            set { Fields.Attachments[this] = value; }
        }

        [DisplayName("Trx No"), Size(255), NotNull]
        public String TrxNo
        {
            get { return Fields.TrxNo[this]; }
            set { Fields.TrxNo[this] = value; }
        }

        [DisplayName("Document Type"), Expression("jDocumentType.[TypeName]"),LookupInclude,QuickFilter,QuickSearch]
        public String DocumentTypeTypeName
        {
            get { return Fields.DocumentTypeTypeName[this]; }
            set { Fields.DocumentTypeTypeName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DocumentsRow()
            : base(Fields)
        {
        }
        [NotesEditor, NotMapped]
        public List<NoteRow> NoteList
        {
            get { return Fields.NoteList[this]; }
            set { Fields.NoteList[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public Int32Field DocumentTypeId;
            public DateTimeField TrxDate;
            public DateTimeField IssueDate;
            public DateTimeField ExpiryDate;
            public DateTimeField DueDate;
            public StringField Attachments;
            public StringField TrxNo;

            public RowListField<NoteRow> NoteList;

            public StringField DocumentTypeTypeName;
        }
    }
}
