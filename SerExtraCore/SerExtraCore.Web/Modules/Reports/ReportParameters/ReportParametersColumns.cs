
namespace SerExtraCore.Reports.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Reports.ReportParameters")]
    [BasedOnRow(typeof(Entities.ReportParametersRow), CheckNames = true)]
    public class ReportParametersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String ParameterName { get; set; }
        public Int32 DataType { get; set; }
        public Int32 EditorType { get; set; }
    }
}