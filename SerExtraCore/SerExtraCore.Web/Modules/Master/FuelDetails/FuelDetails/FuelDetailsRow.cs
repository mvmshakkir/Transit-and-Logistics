using Org.BouncyCastle.Asn1.Utilities;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SerExtraCore.PumpDetails.Entities;
using SerExtraCore.UOM.Entities;
using SerExtraCore.FuelDetails;
using System;
using System.ComponentModel;
using System.IO;
using SerExtraCore.Accounts.Entities;
using System.Collections.Generic;
using SerExtraCore.Master.Entities;
using SerExtraCore.VehicleFreight.Entities;

namespace SerExtraCore.FuelDetails.Entities
{
    [ConnectionKey("Default"), Module("FuelDetails"), TableName("[dbo].[FuelDetails]")]
    [DisplayName("Fuel Details"), InstanceName("Fuel Details")]
    [ReadPermission("Master:FuelDetails")]
    [ModifyPermission("Master:FuelDetails")]
    [LookupScript]
    public sealed class FuelDetailsRow : Row, IIdRow
    {
        const string jPump = nameof(jPump);
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get => Fields.Id[this];
            set => Fields.Id[this] = value;
        }

        [DisplayName("Ts"), Column("TSId"), ForeignKey("[dbo].[VehicleMovDetails]", "Id"), LeftJoin("jTs"), TextualField("TsTsNo"),LookupInclude]
        public Int32? TsId
        {
            get => Fields.TsId[this];
            set => Fields.TsId[this] = value;
        }

        [DisplayName("Payment Method"), NotNull, QuickSearch, QuickFilter]
        public AccountTypes? PaymentMethod
        {
            get { return (AccountTypes?)Fields.PaymentMethod[this]; }
            set { Fields.PaymentMethod[this] = (int?)value; }
        }

        [DisplayName("Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jDebitAccount"), TextualField("DebitAccountAccountName"), NotNull]
        [LookupEditor(typeof(AccountsRow), CascadeField = "Type", CascadeFrom = "PaymentMethod")]
        public Int32? DebitAccountId
        {
            get { return Fields.DebitAccountId[this]; }
            set { Fields.DebitAccountId[this] = value; }
        }

        [DisplayName("Payments"), MasterDetailRelation(foreignKey: "FuelId"), NotMapped, AuditLog]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.PaymentRow> Expenses
        {
            get { return Fields.Expenses[this]; }
            set { Fields.Expenses[this] = value; }
        }


        [DisplayName("Payment"), MasterDetailRelation(foreignKey: "FuelId")]
        [MinSelectLevel(SelectLevel.List)]
        public List<MoneyOutRow> FuelId
        {
            get { return Fields.FuelId[this]; }
            set { Fields.FuelId[this] = value; }
        }
        [FileUploadEditor(FilenameFormat = "FualDetails/~", CopyToHistory = true)]
        public String Photo
        {
            get { return Fields.Photo[this]; }
            set { Fields.Photo[this] = value; }
        }


        [DisplayName("Pumps"), ForeignKey("[dbo].[PumpDetails]", "Id"), LeftJoin("jPump"), TextualField("PumpNames")]
       // [LookupEditor(typeof(PumpDetailsRow), InplaceAdd = true), QuickFilter, QuickSearch]
        public Int32? PumpId
        {
            get { return Fields.PumpId[this]; }
            set { Fields.PumpId[this] = value; }
        }

        [DisplayName("Pumps"), Expression("jPump.[PumpName]"), LookupInclude, QuickSearch]
        //[MinSelectLevel(SelectLevel.List)]
        public String PumpName
        {
            get { return Fields.PumpName[this]; }
            set { Fields.PumpName[this] = value; }
        }





        [DisplayName("Pump"), ForeignKey("[dbo].[Supplier]", "Id"), LeftJoin("jSupplier"), TextualField("SupplierName")]
        [LookupEditor(typeof(SupplierRow), InplaceAdd = true), QuickFilter, QuickSearch]
        public Int32? Supplierid
        {
            get { return Fields.Supplierid[this]; }
            set { Fields.Supplierid[this] = value; }
        }

        [DisplayName("Pump"), Expression("jSupplier.[SupplierName]"), LookupInclude, QuickSearch]
        [MinSelectLevel(SelectLevel.List)]
        public String SupplierName
        {
            get { return Fields.SupplierName[this]; }
            set { Fields.SupplierName[this] = value; }
        }






        //[DisplayName("fuel Details"), MasterDetailRelation(foreignKey: "TSId"), NotMapped]
        //public List<FuelDetailsRow> FuelDetails
        //{
        //    get { return Fields.FuelDetails[this]; }
        //    set { Fields.FuelDetails[this] = value; }
        //}






        [DisplayName("Cash/Credit"),  DefaultValue(1), QuickSearch, QuickFilter, LookupInclude]
		public AmountType? AmountType
		{
			get { return (AmountType?)Fields.AmountType[this]; }
			set { Fields.AmountType[this] = (int?)value; }
		}







		[DisplayName("Date"),NotNull]
        public DateTime? Date
        {
            get => Fields.Date[this];
            set => Fields.Date[this] = value;
        }

        [DisplayName("Qty"), Size(10), Scale(2)]
        public Decimal? Qty
        {
            get => Fields.Qty[this];
            set => Fields.Qty[this] = value;
        }

        [DisplayName("Liter Rate"), Size(10), Scale(2)]
        public Decimal? LiterRate
        {
            get => Fields.LiterRate[this];
            set => Fields.LiterRate[this] = value;
        }

        [DisplayName("Total Amt"), Size(10), Scale(2),LookupInclude]
        public Decimal? TotalAmt
        {
            get => Fields.TotalAmt[this];
            set => Fields.TotalAmt[this] = value;
        }

        [DisplayName(" Ts No"), Expression("jTs.[TSNo]")]
        public String TsTsNo
        {
            get => Fields.TsTsNo[this];
            set => Fields.TsTsNo[this] = value;
        }

        [DisplayName(" Vehicle Id"), Expression("jTs.[VehicleId]")]
        public Int32? TsVehicleId
        {
            get => Fields.TsVehicleId[this];
            set => Fields.TsVehicleId[this] = value;
        }

        [DisplayName("Ts Advance"), Expression("jTs.[Advance]")]
        public Decimal? TsAdvance
        {
            get => Fields.TsAdvance[this];
            set => Fields.TsAdvance[this] = value;
        }

        [DisplayName("Ts Start Km"), Expression("jTs.[StartKM]")]
        public Decimal? TsStartKm
        {
            get => Fields.TsStartKm[this];
            set => Fields.TsStartKm[this] = value;
        }

        [DisplayName("Ts End Km"), Expression("jTs.[EndKm]")]
        public Decimal? TsEndKm
        {
            get => Fields.TsEndKm[this];
            set => Fields.TsEndKm[this] = value;
        }

        [DisplayName("Ts Total Km"), Expression("jTs.[TotalKm]")]
        public Decimal? TsTotalKm
        {
            get => Fields.TsTotalKm[this];
            set => Fields.TsTotalKm[this] = value;
        }

        [DisplayName("Ts Total Liter"), Expression("jTs.[TotalLiter]")]
        public Decimal? TsTotalLiter
        {
            get => Fields.TsTotalLiter[this];
            set => Fields.TsTotalLiter[this] = value;
        }

        [DisplayName("Ts Mileage"), Expression("jTs.[Mileage]")]
        public Decimal? TsMileage
        {
            get => Fields.TsMileage[this];
            set => Fields.TsMileage[this] = value;
        }

        [DisplayName("Ts Startdate"), Expression("jTs.[Startdate]")]
        public DateTime? TsStartdate
        {
            get => Fields.TsStartdate[this];
            set => Fields.TsStartdate[this] = value;
        }

        [DisplayName("Ts Enddate"), Expression("jTs.[Enddate]")]
        public DateTime? TsEnddate
        {
            get => Fields.TsEnddate[this];
            set => Fields.TsEnddate[this] = value;
        }

        [DisplayName("Ts Totaldays"), Expression("jTs.[Totaldays]")]
        public Int32? TsTotaldays
        {
            get => Fields.TsTotaldays[this];
            set => Fields.TsTotaldays[this] = value;
        }

        [DisplayName("Ts Rto"), Expression("jTs.[RTO]")]
        public Decimal? TsRto
        {
            get => Fields.TsRto[this];
            set => Fields.TsRto[this] = value;
        }

        [DisplayName("Ts Pc"), Expression("jTs.[PC]")]
        public Decimal? TsPc
        {
            get => Fields.TsPc[this];
            set => Fields.TsPc[this] = value;
        }

        [DisplayName("Ts Total Driver Commission"), Expression("jTs.[TotalDriverCommission]")]
        public Decimal? TsTotalDriverCommission
        {
            get => Fields.TsTotalDriverCommission[this];
            set => Fields.TsTotalDriverCommission[this] = value;
        }

        [DisplayName("Ts Total Commison"), Expression("jTs.[TotalCommison]")]
        public Decimal? TsTotalCommison
        {
            get => Fields.TsTotalCommison[this];
            set => Fields.TsTotalCommison[this] = value;
        }

        [DisplayName("Ts Total Loading Expense"), Expression("jTs.[TotalLoadingExpense]")]
        public Decimal? TsTotalLoadingExpense
        {
            get => Fields.TsTotalLoadingExpense[this];
            set => Fields.TsTotalLoadingExpense[this] = value;
        }

        [DisplayName("Ts Total Unload Expense"), Expression("jTs.[TotalUnloadExpense]")]
        public Decimal? TsTotalUnloadExpense
        {
            get => Fields.TsTotalUnloadExpense[this];
            set => Fields.TsTotalUnloadExpense[this] = value;
        }

        [DisplayName("Ts Total Other Expense"), Expression("jTs.[TotalOtherExpense]")]
        public Decimal? TsTotalOtherExpense
        {
            get => Fields.TsTotalOtherExpense[this];
            set => Fields.TsTotalOtherExpense[this] = value;
        }

        [DisplayName("Ts Total Fright"), Expression("jTs.[TotalFright]")]
        public Decimal? TsTotalFright
        {
            get => Fields.TsTotalFright[this];
            set => Fields.TsTotalFright[this] = value;
        }

        [DisplayName("Ts Profit"), Expression("jTs.[Profit]")]
        public Decimal? TsProfit
        {
            get => Fields.TsProfit[this];
            set => Fields.TsProfit[this] = value;
        }

        [DisplayName("Pump Pump Name"), Expression("jPump.[PumpName]")]
        public String PumpPumpName
        {
            get => Fields.PumpPumpName[this];
            set => Fields.PumpPumpName[this] = value;
        }

        [DisplayName("Pump Pump Place"), Expression("jPump.[PumpPlace]")]
        public String PumpPumpPlace
        {
            get => Fields.PumpPumpPlace[this];
            set => Fields.PumpPumpPlace[this] = value;
        }

        [DisplayName("Pump Address"), Expression("jPump.[Address]")]
        public String PumpAddress
        {
            get => Fields.PumpAddress[this];
            set => Fields.PumpAddress[this] = value;
        }

        IIdField IIdRow.IdField => Fields.Id;

        public static readonly RowFields Fields = new RowFields().Init();

        public FuelDetailsRow()
            : base(Fields)
        {
        }


        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field TsId;
            public Int32Field PumpId;
            public StringField PumpName;
            public DateTimeField Date;
            public DecimalField Qty;
            public DecimalField LiterRate;
            public DecimalField TotalAmt;
            public StringField Photo;

            public StringField TsTsNo;
            public Int32Field TsVehicleId;
            public DecimalField TsAdvance;
            public DecimalField TsStartKm;
            public DecimalField TsEndKm;
            public DecimalField TsTotalKm;
            public DecimalField TsTotalLiter;
            public DecimalField TsMileage;
            public DateTimeField TsStartdate;
            public DateTimeField TsEnddate;
            public Int32Field TsTotaldays;
            public DecimalField TsRto;
            public DecimalField TsPc;
            public DecimalField TsTotalDriverCommission;
            public DecimalField TsTotalCommison;
            public DecimalField TsTotalLoadingExpense;
            public DecimalField TsTotalUnloadExpense;
            public DecimalField TsTotalOtherExpense;
            public DecimalField TsTotalFright;
            public DecimalField TsProfit;

            public StringField PumpPumpName;
            public StringField PumpPumpPlace;
            public StringField PumpAddress;



			public Int32Field AmountType;


           public Int32Field PaymentMethod;
            public Int32Field DebitAccountId;
            public RowListField<Accounts.Entities.PaymentRow> Expenses;

            public Int32Field Supplierid;
            public StringField SupplierName;


            public RowListField<MoneyOutRow> FuelId;
        }
    }
}
