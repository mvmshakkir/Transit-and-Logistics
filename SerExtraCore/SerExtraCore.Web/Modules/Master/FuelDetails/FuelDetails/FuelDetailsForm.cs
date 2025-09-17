using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using SerExtraCore.ServiceAmount.Entities;
using SerExtraCore.ServiceAmount;
using SerExtraCore.Accounts;
using SerExtraCore.Accounts.Entities;

namespace SerExtraCore.FuelDetails.Forms
{
    [FormScript("FuelDetails.FuelDetails")]
    [BasedOnRow(typeof(Entities.FuelDetailsRow), CheckNames = true)]
    public class FuelDetailsForm

    {

        public Int32 Supplierid {  get; set; }
        [Hidden]
       [HalfWidth]
        public Int32 TsId { get; set; }
        [Hidden]
        public Int32 PumpId { get; set; }
        [HalfWidth]

        public Int32 AmountType { get; set; }
        [HalfWidth]
        public DateTime Date { get; set; }
        [HalfWidth]
        public Decimal Qty { get; set; }
        [HalfWidth]
        public Decimal LiterRate { get; set; }
        [HalfWidth]
        public Decimal TotalAmt { get; set; }

        [Category("Payment Method")]
        [HalfWidth]
        public Int32 PaymentMethod { get; set; }
        [HalfWidth]
        public Int32 DebitAccountId { get; set; }
        [HalfWidth]
        public String Photo { get; set; }

        //[Category("Payment")]
        //[MoneyOutEditor]
        //public List<MoneyOutRow> FuelId { get; set; }
    }
}