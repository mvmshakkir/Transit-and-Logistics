
namespace SerExtraCore.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Ports")]
    [BasedOnRow(typeof(Entities.PortsRow), CheckNames = true)]
    public class PortsForm
    {
        [HalfWidth]
        public String PortName { get; set; }
        [HalfWidth]
        public Int32 CountryId { get; set; }
    }
}