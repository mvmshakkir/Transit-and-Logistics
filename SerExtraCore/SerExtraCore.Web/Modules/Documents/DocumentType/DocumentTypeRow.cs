
namespace SerExtraCore.Documents.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Documents"), TableName("[dbo].[DocumentType]")]
    [DisplayName("Document Type"), InstanceName("Document Type")]
    [ReadPermission("Documents:DocumentType")]
    [ModifyPermission("Documents:DocumentType")]
    [LookupScript(Permission = "*", Expiration = -1)]
    public sealed class DocumentTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Type Name"), Size(200), NotNull, QuickSearch]
        public String TypeName
        {
            get { return Fields.TypeName[this]; }
            set { Fields.TypeName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TypeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DocumentTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField TypeName;
        }
    }
}
