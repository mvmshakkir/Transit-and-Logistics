
namespace SerExtraCore.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.UserHierarchy")]
    [BasedOnRow(typeof(Entities.UserHierarchyRow), CheckNames = true)]
    public class UserHierarchyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String HierarchyName { get; set; }
        public Int32 HierarchyOrder { get; set; }
        public String Descrription { get; set; }
       
    }
}