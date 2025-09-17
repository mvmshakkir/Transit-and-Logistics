using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.VehicleFreight.Forms
{
    [FormScript("VehicleFreight.VehicleFreight")]
    [BasedOnRow(typeof(Entities.VehicleFreightRow), CheckNames = true)]
    public class VehicleFreightForm
    {
        [Hidden]
        public Int32 Id { get; set; }

        public DateTime TripDate { get; set; }

        public Int32 MaterialId { get; set; }

        public Int32 UnitId { get; set; }
        //[HalfWidth]
        public Int32 FromPlace { get; set; }
        // [HalfWidth]
        public Int32 ToPlace { get; set; }


        public Int32 partys { get; set; }
        [HalfWidth]

        public Int32 CashCredit { get; set; }
        [HalfWidth]





        //public String Party { get; set; }

        //TotaTon
        public Decimal PerTonRate { get; set; }
        [HalfWidth]
        public Decimal TotalFreight { get; set; }
        [HalfWidth]
        public Decimal UnitPrice { get; set; }
        [HalfWidth]
        //public Decimal Commission { get; set; }
        public Decimal LoadingExpense { get; set; }
        [HalfWidth]
        public Decimal UnloadingExpense { get; set; }
        //public Decimal AmountOtherExpenses { get; set; }
        [HalfWidth]

        public Decimal TotalCommission { get; set; }
        [Category("Payment Method")]
        [HalfWidth]
        public Int32 PaymentMethod { get; set; }
        [HalfWidth]
        public Int32 DebitAccountId { get; set; }
        //[Visible(false)]

        //public List<Accounts.Entities.ReceiptRow> Receipts { get; set; }

    }
}