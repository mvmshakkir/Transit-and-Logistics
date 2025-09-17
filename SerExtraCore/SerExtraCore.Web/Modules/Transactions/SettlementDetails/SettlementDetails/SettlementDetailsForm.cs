using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using SerExtraCore.CommisionDetails.Entities;
using SerExtraCore.CommisionDetails;

using SerExtraCore.ExtraExpense;
using SerExtraCore.Extr.Entities;
using SerExtraCore.Extr;
using SerExtraCore.Crossing.Entities;
using SerExtraCore.Crossing;


namespace SerExtraCore.SettlementDetails.Forms
{
    [FormScript("SettlementDetails.SettlementDetails")]
    [BasedOnRow(typeof(Entities.SettlementDetailsRow), CheckNames = true)]
    public class SettlementDetailsForm
    {
        [HalfWidth]
        public Int32 TsNo { get; set; }
        [Hidden]
        public Int32 MoneyInOutTsNo { get; set; }
		[Hidden]
		public Int32 TripAdvance { get; set; }
		[Hidden]
		public Int32 TripBalance { get; set; }
        [Hidden]
		public string TSNumber { get; set; }
		[Hidden]
		public Int32 TollTag { get; set; }
        [HalfWidth]
        public decimal FualAmount { get; set; }
        [HalfWidth]
        public Decimal Advance {  get; set; }
        [HalfWidth]
        public Decimal TripBalancee { get; set; }
        [HalfWidth]
        public Decimal toll {  get; set; }


        [HalfWidth]
        [Category("Extra")]
        //[Width(500)]
        [ExtrEditor]
        public List<ExtrRow> extraexpense { get; set; }
        [HalfWidth]
        //[Width(500)]
        [CrossingEditor]
        public List<CrossingRow> Crossing { get; set; }
        

    }
}