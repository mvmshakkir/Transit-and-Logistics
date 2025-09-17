using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.SettlementDetails.Columns
{
    [ColumnsScript("SettlementDetails.SettlementDetails")]
    [BasedOnRow(typeof(Entities.SettlementDetailsRow), CheckNames = true)]
    public class SettlementDetailsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink, SortOrder(1, descending: true)]
        [Width(80)]
        public string TSNumber { get; set; }
        //public String TsNo{ get; set; }

        //[DisplayName("Fual Advance")]
        //public String MoneyInOutTsNoRemarks { get; set; }
        //public String TripAdvance { get; set; }
        //public String TripBalance{ get; set; }
        //public String TollTag{ get; set; }


		public Decimal Advance { get; set; }
		public Decimal TripBalancee { get; set; }
		public Decimal toll { get; set; }
        public Decimal FualAmount { get; set; }
	}
}