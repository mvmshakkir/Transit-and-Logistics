
namespace SerExtraCore.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Ports")]
    [BasedOnRow(typeof(Entities.PortsRow), CheckNames = true)]
    public class PortsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String PortName { get; set; }
        public String CountryCountryCode { get; set; }
    }
}