using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SerExtraCore.CommisionDetails.Entities;
using SerExtraCore.FuelDetails.Entities;
using SerExtraCore.Master.Entities;
using SerExtraCore.PumpDetails.Entities;
using SerExtraCore.ServiceAmount.Entities;
using SerExtraCore.VehicleFreight.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel; 
using System.IO;
using System.Security.Cryptography.X509Certificates;

namespace SerExtraCore.VehicleMovDetails.Entities
{
    [ConnectionKey("Default"), Module("VehicleMovDetails"), TableName("[dbo].[VehicleMovDetails]")]
    [DisplayName("Trip"), InstanceName("Trip")]
    [ReadPermission("Master:VehicleMovDetails")]
    [ModifyPermission("Master:VehicleMovDetails")]
    [LookupScript]
    public sealed class VehicleMovDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get => Fields.Id[this];
            set => Fields.Id[this] = value;
        }

        [DisplayName("Ts No"), Column("TSNo"),ReadOnly(true), Size(255),QuickFilter, NotNull, QuickSearch]
        public String TsNo
        {
            get => Fields.TsNo[this];
            set => Fields.TsNo[this] = value;
        }
        [DisplayName("Receipts"), MasterDetailRelation(foreignKey: "TsId"), NotMapped, AuditLog]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.ReceiptRow> Receipts
        {
            get { return Fields.Receipts[this]; }
            set { Fields.Receipts[this] = value; }
        }



        [DisplayName("Payments"), MasterDetailRelation(foreignKey: "FuelTsId"), NotMapped, AuditLog]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.PaymentRow> Payments
        {
            get { return Fields.Payments[this]; }
            set { Fields.Payments[this] = value; }
        }










        [DisplayName("Payments"), MasterDetailRelation(foreignKey: "TsId"), NotMapped, AuditLog]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.MoneyOutRow> FuelId
        {
            get { return Fields.FuelId[this]; }
            set { Fields.FuelId[this] = value; }
        }


        //[DisplayName("Vehicle"), ForeignKey("[dbo].[Vehicles]", "Id"), LeftJoin("jVehicle"), TextualField("VehicleNumber")]
        //public Int32? VehicleId
        //{
        //    get => Fields.VehicleId[this];
        //    set => Fields.VehicleId[this] = value;
        //}



        [DisplayName("Vehicle"), ForeignKey("[dbo].[Vehicles]", "Id"), LeftJoin("jVehicle"), TextualField("VehicleNumber"),LookupInclude,NotNull]
        [LookupEditor(typeof(VehiclesRow), InplaceAdd = true), QuickFilter, QuickSearch]
        public Int32? VehicleId
        {
            get { return Fields.VehicleId[this]; }
            set { Fields.VehicleId[this] = value; }
        }

        [DisplayName("Vehicle"), Expression("jVehicle.[VehicleNumber]"), LookupInclude, QuickFilter, QuickSearch]
        public String VehicleNumber
        {
            get { return Fields.VehicleNumber[this]; }
            set { Fields.VehicleNumber[this] = value; }
        }
		//[DisplayName("Remarks"),  LookupInclude, QuickFilter, QuickSearch]
		//public String Remarks
		//{
		//	get { return Fields.Remarks[this]; }
		//	set { Fields.Remarks[this] = value; }
		//}
		[DisplayName("Remarks"), Size(200), QuickFilter, QuickSearch]
		public String Remarks
		{
			get { return Fields.Remarks[this]; }
			set { Fields.Remarks[this] = value; }
		}

		[DisplayName("Advance"), Size(10), LookupInclude, Scale(2)]
        public Decimal? Advance
        {
            get => Fields.Advance[this];
            set => Fields.Advance[this] = value;
        }

        [DisplayName("Start Km"), Column("StartKM"), Size(10), Scale(2)]

        public Decimal? StartKm
        {
            get => Fields.StartKm[this];
            set => Fields.StartKm[this] = value;
        }

        [DisplayName("End Km"), Size(10), Scale(2),LookupInclude]
        public Decimal? EndKm
        {
            get => Fields.EndKm[this];
            set => Fields.EndKm[this] = value;
        }

        [DisplayName("Total Km"),ReadOnly(true), Size(10), Scale(2)]
        public Decimal? TotalKm
        {
            get => Fields.TotalKm[this];
            set => Fields.TotalKm[this] = value;
        }

        [DisplayName("Total Liter"), ReadOnly(true), Size(10), Scale(2)]
        public Decimal? TotalLiter
        {
            get => Fields.TotalLiter[this];
            set => Fields.TotalLiter[this] = value;
        }

        [DisplayName("Mileage"),ReadOnly(true) ,Size(10), Scale(2)]
        public Decimal? Mileage
        {
            get => Fields.Mileage[this];
            set => Fields.Mileage[this] = value;
        }

        [DisplayName("Startdate"),QuickFilter,LookupInclude]
        public DateTime? Startdate
        {
            get => Fields.Startdate[this];
            set => Fields.Startdate[this] = value;
        }

        [DisplayName("Enddate"),LookupInclude]
        public DateTime? Enddate
        {
            get => Fields.Enddate[this];
            set => Fields.Enddate[this] = value;
        }

        [DisplayName("Total days"),ReadOnly(true)]
        public Int32? Totaldays
        {
            get => Fields.Totaldays[this];
            set => Fields.Totaldays[this] = value;
        }

        [DisplayName("Freight Details"), MasterDetailRelation(foreignKey: "TSId"), NotMapped]
        public List<VehicleFreightRow> VehicleFreight
        {
            get { return Fields.VehicleFreight[this]; }
            set { Fields.VehicleFreight[this] = value; }
        }
        //[DisplayName("Total Amount"), NotNull, ReadOnly(true), Size(18), Scale(3), AuditLog]
        //public Decimal? TotalAmount
        //{
        //    get { return Fields.TotalAmount[this]; }
        //    set { Fields.TotalAmount[this] = value; }
        //}
        [DisplayName("Total Freight"), ReadOnly(true), Size(10), Scale(2)]
        public Decimal? TotalFright
        {
            get => Fields.TotalFright[this];
            set => Fields.TotalFright[this] = value;
        }
        [DisplayName("fuel Details"), MasterDetailRelation(foreignKey: "TSId"), NotMapped]
        public List<FuelDetailsRow> FuelDetails
        {
            get { return Fields.FuelDetails[this]; }
            set { Fields.FuelDetails[this] = value; }
        }

        [DisplayName("Drivers"), MasterDetailRelation(foreignKey: "TSId"), NotMapped]
        public List<CommisionDetailsRow> CommisionDetails
        {
            get { return Fields.CommisionDetails[this]; }
            set { Fields.CommisionDetails[this] = value; }
        }






        [DisplayName("Services"), MasterDetailRelation(foreignKey: "TSId"), NotMapped]
        [MinSelectLevel(SelectLevel.List)]
        public List<ServiceAmountRow> ServiceAmount
        {
            get { return Fields.ServiceAmount[this]; }
            set { Fields.ServiceAmount[this] = value; }
        }



        [DisplayName("Rto"), Column("RTO"), Size(10), Scale(2)]
        public Decimal? Rto
        {
            get => Fields.Rto[this];
            set => Fields.Rto[this] = value;
        }

        [DisplayName("Pc"), Column("PC"), Size(10), Scale(2)]
        public Decimal? Pc
        {
            get => Fields.Pc[this];
            set => Fields.Pc[this] = value;
        }

        [DisplayName("Toll/Fastag"), LookupInclude, Size(10), Scale(2)]
        public Decimal? Toll
        {
            get => Fields.Toll[this];
            set => Fields.Toll[this] = value;
        }
        [DisplayName("Total Expense"), LookupInclude,ReadOnly(true), Size(10), Scale(2)]
        public Decimal? TotalExpense
        {
            get => Fields.TotalExpense[this];
            set => Fields.TotalExpense[this] = value;
        }
        

        [DisplayName("Total Fuel Amount"),ReadOnly(true),  Size(10), Scale(2)]
        public Decimal? TotalFuelAmount
        {
            get => Fields.TotalFuelAmount[this];
            set => Fields.TotalFuelAmount[this] = value;
        }
        [DisplayName(" Driver1 Batta"), ReadOnly(true), Size(10), Scale(2)]
        public Decimal? TotalDriverCommission
        {
            get => Fields.TotalDriverCommission[this];
            set => Fields.TotalDriverCommission[this] = value;
        }
        
        [DisplayName(" Extra Bill"), Size(10), Scale(2)]
        public Decimal? ExtraBill
        {
            get => Fields.ExtraBill[this];
            set => Fields.ExtraBill[this] = value;
        }

        [DisplayName(" Driver2 Batta"), ReadOnly(true), Size(10), Scale(2)]
        public Decimal? DrivertwoBata
        {
            get => Fields.DrivertwoBata[this];
            set => Fields.DrivertwoBata[this] = value;
        }

        [DisplayName("Total Commission"),ReadOnly(true), Size(10), Scale(2)]
        public Decimal? TotalCommison
        {
            get => Fields.TotalCommison[this];
            set => Fields.TotalCommison[this] = value;
        }

        [DisplayName("Total Loading Expense"), Size(10), ReadOnly(true), Scale(2)]
        public Decimal? TotalLoadingExpense
        {
            get => Fields.TotalLoadingExpense[this];
            set => Fields.TotalLoadingExpense[this] = value;
        }

        [DisplayName("Total Unloading Expense"), Size(10), ReadOnly(true), Scale(2)]
        public Decimal? TotalUnloadExpense
        {
            get => Fields.TotalUnloadExpense[this];
            set => Fields.TotalUnloadExpense[this] = value;
        }

        [DisplayName("Total Other Expense"), ReadOnly(true), Size(10), Scale(2)]
        public Decimal? TotalOtherExpense
        {
            get => Fields.TotalOtherExpense[this];
            set => Fields.TotalOtherExpense[this] = value;
        }

        

        [DisplayName("Profit"), LookupInclude, Size(10), Scale(2)]
        public Decimal? Profit
        {
            get => Fields.Profit[this];
            set => Fields.Profit[this] = value;
        }

       

        [DisplayName("Vehicle Type Of Vehicle"), Expression("jVehicle.[TypeOfVehicle]")]
        public Int32? VehicleTypeOfVehicle
        {
            get => Fields.VehicleTypeOfVehicle[this];
            set => Fields.VehicleTypeOfVehicle[this] = value;
        }

        [DisplayName("Vehicle Through"), Expression("jVehicle.[Through]")]
        public Int32? VehicleThrough
        {
            get => Fields.VehicleThrough[this];
            set => Fields.VehicleThrough[this] = value;
        }

        [DisplayName("Vehicle Vehicle Number"), Expression("jVehicle.[VehicleNumber]")]
        public String VehicleVehicleNumber
        {
            get => Fields.VehicleVehicleNumber[this];
            set => Fields.VehicleVehicleNumber[this] = value;
        }

        [DisplayName("Vehicle Vehicle Model"), Expression("jVehicle.[VehicleModel]")]
        public Int32? VehicleVehicleModel
        {
            get => Fields.VehicleVehicleModel[this];
            set => Fields.VehicleVehicleModel[this] = value;
        }

        [DisplayName("Vehicle Registraion Number"), Expression("jVehicle.[RegistraionNumber]")]
        public String VehicleRegistraionNumber
        {
            get => Fields.VehicleRegistraionNumber[this];
            set => Fields.VehicleRegistraionNumber[this] = value;
        }

        [DisplayName("Vehicle Description"), Expression("jVehicle.[Description]")]
        public String VehicleDescription
        {
            get => Fields.VehicleDescription[this];
            set => Fields.VehicleDescription[this] = value;
        }

        [DisplayName("Vehicle Registration Date"), Expression("jVehicle.[RegistrationDate]")]
        public DateTime? VehicleRegistrationDate
        {
            get => Fields.VehicleRegistrationDate[this];
            set => Fields.VehicleRegistrationDate[this] = value;
        }

        [DisplayName("Vehicle Expiry Date"), Expression("jVehicle.[ExpiryDate]")]
        public DateTime? VehicleExpiryDate
        {
            get => Fields.VehicleExpiryDate[this];
            set => Fields.VehicleExpiryDate[this] = value;
        }

        [DisplayName("Vehicle Driver"), Expression("jVehicle.[Driver]")]
        public Int32? VehicleDriver
        {
            get => Fields.VehicleDriver[this];
            set => Fields.VehicleDriver[this] = value;
        }

        [DisplayName("Vehicle Pdo Approved"), Expression("jVehicle.[PDOApproved]")]
        public Boolean? VehiclePdoApproved
        {
            get => Fields.VehiclePdoApproved[this];
            set => Fields.VehiclePdoApproved[this] = value;
        }

        [DisplayName("Vehicle Prime Mover"), Expression("jVehicle.[PrimeMover]")]
        public String VehiclePrimeMover
        {
            get => Fields.VehiclePrimeMover[this];
            set => Fields.VehiclePrimeMover[this] = value;
        }

        [DisplayName("Vehicle Supplier Id"), Expression("jVehicle.[SupplierId]")]
        public Int32? VehicleSupplierId
        {
            get => Fields.VehicleSupplierId[this];
            set => Fields.VehicleSupplierId[this] = value;
        }

        IIdField IIdRow.IdField => Fields.Id;

        StringField INameRow.NameField => Fields.TsNo;

        public static readonly RowFields Fields = new RowFields().Init();

        public VehicleMovDetailsRow()
            : base(Fields)
        {
        }


        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField TsNo;
            public Int32Field VehicleId;
            public StringField VehicleNumber;
            public DecimalField Advance;
            public DecimalField StartKm;
            public DecimalField EndKm;
            public DecimalField TotalKm;
            public DecimalField TotalLiter;
            public DecimalField Mileage;
            public DateTimeField Startdate;
            public DateTimeField Enddate;
            public Int32Field Totaldays;
            public DecimalField Rto;
            public DecimalField Pc;          
            public DecimalField TotalFuelAmount;
            public DecimalField TotalDriverCommission;
            public DecimalField DrivertwoBata;
            
            public DecimalField TotalCommison;
            public DecimalField TotalLoadingExpense;
            public DecimalField TotalUnloadExpense;
            public DecimalField TotalOtherExpense;
            public DecimalField TotalFright;
            public DecimalField Profit;

            public Int32Field VehicleTypeOfVehicle;
            public Int32Field VehicleThrough;
            public StringField VehicleVehicleNumber;
            public Int32Field VehicleVehicleModel;
            public StringField VehicleRegistraionNumber;
            public StringField VehicleDescription;
            public DateTimeField VehicleRegistrationDate;
            public DateTimeField VehicleExpiryDate;
            public Int32Field VehicleDriver;
            public BooleanField VehiclePdoApproved;
            public StringField VehiclePrimeMover;
            public Int32Field VehicleSupplierId;




            public RowListField<CommisionDetailsRow> CommisionDetails;
            public RowListField<ServiceAmountRow> ServiceAmount;
           
            public RowListField<FuelDetailsRow> FuelDetails;
            public RowListField<VehicleFreightRow> VehicleFreight;

            public DecimalField Toll;
            public DecimalField TotalExpense;
            public DecimalField ExtraBill;

            public StringField Remarks;

            public RowListField<Accounts.Entities.ReceiptRow> Receipts;
            public RowListField<Accounts.Entities.PaymentRow> Payments;

            public RowListField<Accounts.Entities.MoneyOutRow> FuelId;
            


        }
    }
}
