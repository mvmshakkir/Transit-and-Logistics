
namespace SerExtraCore.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Outsource")]
    [BasedOnRow(typeof(Entities.OutsourceRow), CheckNames = true)]
    public class OutsourceForm
    {
        public Int32 Name { get; set; }
        public String Description { get; set; }
    }
}