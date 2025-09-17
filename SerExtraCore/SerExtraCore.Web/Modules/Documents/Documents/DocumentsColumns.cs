
namespace SerExtraCore.Documents.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Documents.Documents")]
    [BasedOnRow(typeof(Entities.DocumentsRow), CheckNames = true)]
    public class DocumentsColumns
    {
        [EditLink]
        public String TrxNo { get; set; }
        [EditLink]
        public DateTime TrxDate { get; set; }
        public String Name { get; set; }
        public String DocumentTypeTypeName { get; set; }
        public DateTime IssueDate { get; set; }
        public DateTime ExpiryDate { get; set; }
        public DateTime DueDate { get; set; }
     
    }
}