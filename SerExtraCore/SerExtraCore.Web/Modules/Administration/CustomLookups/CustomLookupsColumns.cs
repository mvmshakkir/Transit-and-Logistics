
namespace SerExtraCore.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.CustomLookups")]
    [BasedOnRow(typeof(Entities.CustomLookupsRow), CheckNames = true)]
    public class CustomLookupsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String LookupName { get; set; }
       
    }
}