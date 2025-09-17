using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.Companies.Forms
{
    [FormScript("Companies.Companies")]
    [BasedOnRow(typeof(Entities.CompaniesRow), CheckNames = true)]
    public class CompaniesForm
    {
       
        public String Name { get; set; }
        public String Address { get; set; }
        public Int32 StateId { get; set; }
    }
}