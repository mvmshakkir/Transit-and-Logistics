
namespace SerExtraCore.Documents.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Documents.DocumentType")]
    [BasedOnRow(typeof(Entities.DocumentTypeRow), CheckNames = true)]
    public class DocumentTypeForm
    {
        public String TypeName { get; set; }
    }
}