
namespace SerExtraCore.Documents.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Documents.DocumentType")]
    [BasedOnRow(typeof(Entities.DocumentTypeRow), CheckNames = true)]
    public class DocumentTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String TypeName { get; set; }
    }
}