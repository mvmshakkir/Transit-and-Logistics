
namespace SerExtraCore.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.CustomLookups")]
    [BasedOnRow(typeof(Entities.CustomLookupsRow), CheckNames = true)]
    public class CustomLookupsForm
    {
        public String LookupName { get; set; }
        public String SqlQuery { get; set; }
    }
}