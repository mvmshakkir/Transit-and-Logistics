
namespace SerExtraCore.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.UserHierarchy")]
    [BasedOnRow(typeof(Entities.UserHierarchyRow), CheckNames = true)]
    public class UserHierarchyForm
    {
        public String HierarchyName { get; set; }
        public Int32 HierarchyOrder { get; set; }
        public String Descrription { get; set; }
    }
}