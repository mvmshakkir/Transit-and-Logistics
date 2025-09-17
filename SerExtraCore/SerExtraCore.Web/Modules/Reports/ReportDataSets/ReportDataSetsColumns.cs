
namespace SerExtraCore.Reports.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Reports.ReportDataSets")]
    [BasedOnRow(typeof(Entities.ReportDataSetsRow), CheckNames = true)]
    public class ReportDataSetsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String DataSetName { get; set; }
       
    }
}