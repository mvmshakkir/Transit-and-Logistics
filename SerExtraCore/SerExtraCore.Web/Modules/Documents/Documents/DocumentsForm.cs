
namespace SerExtraCore.Documents.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Documents.Documents")]
    [BasedOnRow(typeof(Entities.DocumentsRow), CheckNames = true)]
    public class DocumentsForm
    {
        [HalfWidth]
        public String TrxNo { get; set; }
        [HalfWidth]
        public DateTime TrxDate { get; set; }
        [HalfWidth]
        public String Name { get; set; }
        [HalfWidth]
        public Int32 DocumentTypeId { get; set; }


        [HalfWidth]
        public DateTime IssueDate { get; set; }
        [HalfWidth]
        public DateTime ExpiryDate { get; set; }
        [HalfWidth]
        public DateTime DueDate { get; set; }
        public List<object> NoteList { get; set; }
        public String Attachments { get; set; }
    }
}