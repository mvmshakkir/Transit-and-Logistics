using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.ServiceAmount.Columns
{
    [ColumnsScript("ServiceAmount.ServiceAmount")]
    [BasedOnRow(typeof(Entities.ServiceAmountRow), CheckNames = true)]
    public class ServiceAmountColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }

        [EditLink]
        public String ServiceServiceName { get; set; }
        //public String TsTsNo { get; set; }
        public Decimal Amount { get; set; }
    }
}