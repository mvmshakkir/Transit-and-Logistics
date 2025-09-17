
namespace SerExtraCore.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow), CheckNames = true)]
    public class ProductsForm
    {
        [HalfWidth]
        public String ProductCode { get; set; }
        [HalfWidth]
        public String ProductName { get; set; }
        [HalfWidth]
        public Decimal UnitPrice { get; set; }
    }
}