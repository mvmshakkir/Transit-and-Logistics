
namespace SerExtraCore.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Configuration")]
    [BasedOnRow(typeof(Entities.ConfigurationRow), CheckNames = true)]
    public class ConfigurationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String InvoiceCollectionLedgerCode { get; set; }
    }
}