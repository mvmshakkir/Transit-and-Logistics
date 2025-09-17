using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using SerExtraCore.UOMAmount.Entities;
using SerExtraCore.UOMAmount;
using SerExtraCore.VehicleFreight.Entities;
using SerExtraCore.VehicleFreight;

using SerExtraCore.FuelDetails.Entities;
using SerExtraCore.FuelDetails;

using SerExtraCore.ServiceAmount.Entities;
using SerExtraCore.ServiceAmount;

using SerExtraCore.CommisionDetails.Entities;

using SerExtraCore.CommisionDetails;

namespace SerExtraCore.VehicleMovDetails.Forms
{
    [FormScript("VehicleMovDetails.VehicleMovDetails")]
    [BasedOnRow(typeof(Entities.VehicleMovDetailsRow), CheckNames = true)]
    public class VehicleMovDetailsForm
    {
        [Tab("Trip Details")]
        [Category("Trip Details")]
        [HalfWidth]
        public String TsNo { get; set; }

        [HalfWidth]
        public Int32 VehicleId { get; set; }


		

		[MediumHalfLargeThirdWidth]
        public Decimal Advance { get; set; }
        [MediumHalfLargeThirdWidth]
        public Decimal StartKm { get; set; }

        [MediumHalfLargeThirdWidth]
        public Decimal EndKm { get; set; }
        [MediumHalfLargeThirdWidth]
        public Decimal TotalKm { get; set; }
        [MediumHalfLargeThirdWidth]
        public Decimal TotalLiter { get; set; }

        [MediumHalfLargeThirdWidth]
        public Decimal Mileage { get; set; }
        [MediumHalfLargeThirdWidth]
        public DateTime Startdate { get; set; }
        [MediumHalfLargeThirdWidth]
        public DateTime Enddate { get; set; }
        [MediumHalfLargeThirdWidth]
        public Int32 Totaldays { get; set; }

		[MediumHalfLargeThirdWidth]
		[TextAreaEditor(Rows = 4)]
		public String Remarks { get; set; }

		[Category("Driver Details")]
        [CommisionDetailsEditor]
        public List<CommisionDetailsRow> CommisionDetails { get; set; }
        [Category]
        [MediumHalfLargeThirdWidth]
        public Decimal Rto { get; set; }
        [MediumHalfLargeThirdWidth]
        public Decimal Pc { get; set; }

        [MediumHalfLargeThirdWidth]

        public Decimal Toll { get; set; }


        [MediumHalfLargeThirdWidth]
        public Decimal ExtraBill { get; set; }

        [MediumHalfLargeThirdWidth]
        public Decimal TotalFuelAmount { get; set; }

        [MediumHalfLargeThirdWidth]
        public Decimal TotalDriverCommission { get; set; }

        [MediumHalfLargeThirdWidth]
        public Decimal DrivertwoBata { get; set; }


        [MediumHalfLargeThirdWidth]
        public Decimal TotalCommison { get; set; }
        [MediumHalfLargeThirdWidth]
        public Decimal TotalLoadingExpense { get; set; }
        [MediumHalfLargeThirdWidth]
        public Decimal TotalUnloadExpense { get; set; }
        [MediumHalfLargeThirdWidth]
        public Decimal TotalOtherExpense { get; set; }
        [MediumHalfLargeThirdWidth]
        public Decimal TotalFright { get; set; }

        [MediumHalfLargeThirdWidth]
        public decimal TotalExpense { get; set; }

        [MediumHalfLargeThirdWidth]
        public Decimal Profit { get; set; }
        
        

        [Tab("Freight Details")]
        [Category("Freight Details")]
        [ VehicleFreightEditor]
        public List<VehicleFreightRow> VehicleFreight { get; set; }

        //[HalfWidth]
        [Tab("Fuel Details")]
        [Category("Fuel Details")]
        [ FuelDetails.FuelDetailsEditor]
        public List<FuelDetailsRow> FuelDetails { get; set; }
        [Tab("Services")]
        [Category("Services")]
        [ServiceAmountEditor]
        public List<ServiceAmountRow> ServiceAmount { get; set; }

       
    }
}