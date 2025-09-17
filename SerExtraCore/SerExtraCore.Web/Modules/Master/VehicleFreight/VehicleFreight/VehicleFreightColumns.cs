using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SerExtraCore.VehicleFreight.Columns
{
    [ColumnsScript("VehicleFreight.VehicleFreight")]
    [BasedOnRow(typeof(Entities.VehicleFreightRow), CheckNames = true)]
    public class VehicleFreightColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        //public String TsTsNo { get; set; }
        public DateTime TripDate { get; set; }
        [EditLink]
        public String Materials { get; set; }
        public String Unit { get; set; }
        public String FromPlaceAreaName { get; set; }
        public String ToPlaceAreaName { get; set; }
       
        public Decimal UnitPrice { get; set; }
        public Decimal PerTonRate { get; set; }
        
        //public Decimal Commission { get; set; }
        public Decimal LoadingExpense { get; set; }
        public Decimal UnloadingExpense { get; set; }
        //public Decimal AmountOtherExpenses { get; set; }
      
        public Decimal TotalCommission { get; set; }
        public Decimal TotalFreight { get; set; }
    }
}