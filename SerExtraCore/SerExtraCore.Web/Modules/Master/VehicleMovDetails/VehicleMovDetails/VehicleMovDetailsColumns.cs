using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using Serenity.Data.Mapping;
using OfficeOpenXml.FormulaParsing.Excel.Functions.DateTime;

namespace SerExtraCore.VehicleMovDetails.Columns
{
    [ColumnsScript("VehicleMovDetails.VehicleMovDetails")]
    [BasedOnRow(typeof(Entities.VehicleMovDetailsRow), CheckNames = true)]
    public class VehicleMovDetailsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink, AlignRight, SortOrder(1, descending: true)]
        public String TsNo { get; set; }
        public String VehicleNumber { get; set; }

        //[DecimalPrecision(10)]
        //[DecimalScale(2)]
        //public Decimal Advance { get; set; }

        //public Decimal StartKm { get; set; }
        //public Decimal EndKm { get; set; }
        //public Decimal TotalKm { get; set; }
        //public Decimal TotalLiter { get; set; }
        //public Decimal Mileage { get; set; }
        [DefaultValue("Today")]
        public DateTime Startdate { get; set; }
        public DateTime Enddate { get; set; }
        //public Int32 Totaldays { get; set; }
        //public Decimal Rto { get; set; }
        //public Decimal Pc { get; set; }

        //public Decimal TotalFuelAmount { get; set; }
        //public Decimal TotalDriverCommission { get; set; }
        //public Decimal DrivertwoBata { get; set; }

        //public Decimal Toll;
        //public Decimal TotalCommison { get; set; }
        //public Decimal TotalLoadingExpense { get; set; }
        //public Decimal TotalUnloadExpense { get; set; }
        //public Decimal TotalOtherExpense { get; set; }
        //public Decimal TotalFright { get; set; }
        //public Decimal Profit { get; set; }
    }
}