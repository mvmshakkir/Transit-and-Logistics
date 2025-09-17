using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SerExtraCore.Accounts.Entities;
using SerExtraCore.Master.Entities;
using SerExtraCore.MaterialsDetails.Entities;
using SerExtraCore.UOM.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace SerExtraCore.VehicleFreight.Entities
{
    

    [ConnectionKey("Default"), Module("VehicleFreight"), TableName("[dbo].[VehicleFreight]")]
    [DisplayName(" Freight"), InstanceName(" Freight")]
    [ReadPermission("Master:VehicleFreight")]
    [ModifyPermission("Master:VehicleFreight")]
    [LookupScript]
    [MinSelectLevel(SelectLevel.List)]
    public sealed class VehicleFreightRow : Row, IIdRow
    {
        const string jMaterials = nameof(jMaterials);
        [DisplayName("Id"), Identity,LookupInclude]
        public Int32? Id
        {
            get => Fields.Id[this];
            set => Fields.Id[this] = value;
        }

        [DisplayName("Ts"), Column("TSId"), ForeignKey("[dbo].[VehicleMovDetails]", "Id"), LeftJoin("jTs"), TextualField("TsTsNo")]
        public Int32? TsId
        {
            get => Fields.TsId[this];
            set => Fields.TsId[this] = value;
        }

		[DisplayName("Payment Method"),  QuickSearch, QuickFilter]
		public AccountTypes? PaymentMethod
		{
			get { return (AccountTypes?)Fields.PaymentMethod[this]; }
			set { Fields.PaymentMethod[this] = (int?)value; }
		}

		[DisplayName("Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jDebitAccount"), TextualField("DebitAccountAccountName")]
		[LookupEditor(typeof(AccountsRow), CascadeField = "Type", CascadeFrom = "PaymentMethod")]
		public Int32? DebitAccountId
		{
			get { return Fields.DebitAccountId[this]; }
			set { Fields.DebitAccountId[this] = value; }
		}

		[DisplayName("Receipts"), MasterDetailRelation(foreignKey: "FreightId"), NotMapped, AuditLog]
		[MinSelectLevel(SelectLevel.List)]
		public List<Accounts.Entities.ReceiptRow> Receipts
		{
			get { return Fields.Receipts[this]; }
			set { Fields.Receipts[this] = value; }
		}






		[DisplayName("Cash/Credit"), DefaultValue(1), QuickSearch, QuickFilter, LookupInclude]
        public AmountType? CashCredit
        {
            get { return (AmountType?)Fields.CashCredit[this]; }
            set { Fields.CashCredit[this] = (int?)value; }
        }


        [DisplayName("Party"), ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jcustom"), TextualField("party")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = true), QuickSearch]
        public Int32? partys
        {
            get { return Fields.partys[this]; }
            set { Fields.partys[this] = value; }
        }
        [DisplayName("Party"), Expression("jcustom.[CustomerName]"), LookupInclude, QuickSearch]
        [MinSelectLevel(SelectLevel.List)]
        public String partyy
        {
            get { return Fields.partyy[this]; }
            set { Fields.partyy[this] = value; }
        }



















        [DisplayName("Party"), Size(200), QuickFilter, QuickSearch]
		public String Party
		{
			get { return Fields.Party[this]; }
			set { Fields.Party[this] = value; }
		}

		//[DisplayName("Material"), ForeignKey("[dbo].[MaterialsDetails]", "Id"), LeftJoin("jMaterial"), TextualField("MaterialMaterials")]
		//public Int32? MaterialId
		//{
		//    get => Fields.MaterialId[this];
		//    set => Fields.MaterialId[this] = value;
		//}

		[DisplayName("Materials"), ForeignKey("[dbo].[MaterialsDetails]", "Id"), LeftJoin("jMaterials"), TextualField("Materials")]
        [LookupEditor(typeof(MaterialsDetailsRow), InplaceAdd = true),  QuickSearch]
        public Int32? MaterialId
        {
            get { return Fields.MaterialId[this]; }
            set { Fields.MaterialId[this] = value; }
        }
        [DisplayName("Materials"), Expression("jMaterials.[Materials]"), LookupInclude, QuickSearch]
        [MinSelectLevel(SelectLevel.List)]
        public String Materials
        {
            get { return Fields.Materials[this]; }
            set { Fields.Materials[this] = value; }
        }
        [DisplayName("Unit"), ForeignKey("[dbo].[UOM]", "Id"), LeftJoin("jUOM"), TextualField("Unit")]
        [LookupEditor(typeof(UOMRow), InplaceAdd = true),  QuickSearch]
        public Int32? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }
        [DisplayName("Unit"), Expression("jUOM.[Unit]"), LookupInclude,  QuickSearch]
        [MinSelectLevel(SelectLevel.List)]
        public String Unit
        {
            get { return Fields.Unit[this]; }
            set { Fields.Unit[this] = value; }
        }

        [DisplayName("From Place"), ForeignKey("[dbo].[ShippingAreas]", "Id"), LeftJoin("jFromPlace"), TextualField("AreaName")]
        [LookupEditor(typeof(ShippingAreasRow), InplaceAdd = true),  QuickSearch]
        public Int32? FromPlace
        {
            get => Fields.FromPlace[this];
            set => Fields.FromPlace[this] = value;
        }

     
        [DisplayName("To Place"), ForeignKey("[dbo].[ShippingAreas]", "Id"), LeftJoin("jToPlace"), TextualField("AreaName")]
        [LookupEditor(typeof(ShippingAreasRow), InplaceAdd = true),  QuickSearch]
        public Int32? ToPlace
        {
            get => Fields.ToPlace[this];
            set => Fields.ToPlace[this] = value;
        }

        [DisplayName("Trip Date")]
        public DateTime? TripDate
        {
            get => Fields.TripDate[this];
            set => Fields.TripDate[this] = value;
        }

        [DisplayName("Total Tons"), Size(10),NotNull, Scale(2)]
        public Decimal? PerTonRate
        {
            get => Fields.PerTonRate[this];
            set => Fields.PerTonRate[this] = value;
        }

        [DisplayName("Total Freight"), Expression("(T0.[UnitPrice] * T0.[PerTonRate]) "),NotNull, Size(10), Scale(2)]
        [MinSelectLevel(SelectLevel.List)]
        public Decimal? TotalFreight
        {
            get => Fields.TotalFreight[this];
            set => Fields.TotalFreight[this] = value;
        }

        //[DisplayName("Commission"), Size(10), Scale(2)]
        //public Decimal? Commission
        //{
        //    get => Fields.Commission[this];
        //    set => Fields.Commission[this] = value;
        //}

        [DisplayName("Loading Expense"), Size(10), Scale(2)]
        public Decimal? LoadingExpense
        {
            get => Fields.LoadingExpense[this];
            set => Fields.LoadingExpense[this] = value;
        }

        [DisplayName("Unloading Expense"), Size(10), Scale(2)]
        public Decimal? UnloadingExpense
        {
            get => Fields.UnloadingExpense[this];
            set => Fields.UnloadingExpense[this] = value;
        }

        //[DisplayName("Amount Other Expenses"), Size(10), Scale(2)]
        //public Decimal? AmountOtherExpenses
        //{
        //    get => Fields.AmountOtherExpenses[this];
        //    set => Fields.AmountOtherExpenses[this] = value;
        //}

        [DisplayName("Unit Price"), Size(10), Scale(2)]
        public Decimal? UnitPrice
        {
            get => Fields.UnitPrice[this];
            set => Fields.UnitPrice[this] = value;
        }

        [DisplayName("Commission"), Expression("(T0.[UnitPrice] * T0.[PerTonRate]) * 0.05"), Size(10), Scale(2),ReadOnly(true)]
        [MinSelectLevel(SelectLevel.List)]
        public Decimal? TotalCommission
        {
            get => Fields.TotalCommission[this];
            set => Fields.TotalCommission[this] = value;
        }

        [DisplayName("Ts Ts No"), Expression("jTs.[TSNo]")]
        public String TsTsNo
        {
            get => Fields.TsTsNo[this];
            set => Fields.TsTsNo[this] = value;
        }

        [DisplayName("Ts Vehicle Id"), Expression("jTs.[VehicleId]")]
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

      

        [DisplayName("From Place"), LookupInclude,  QuickSearch,Expression("jFromPlace.[AreaName]")]
        [MinSelectLevel(SelectLevel.List)]
        public String FromPlaceAreaName
        {
            get => Fields.FromPlaceAreaName[this];
            set => Fields.FromPlaceAreaName[this] = value;
        }

        [DisplayName("From Place Description"), Expression("jFromPlace.[Description]")]
        public String FromPlaceDescription
        {
            get => Fields.FromPlaceDescription[this];
            set => Fields.FromPlaceDescription[this] = value;
        }

        [DisplayName("To Place "), LookupInclude,  QuickSearch, Expression("jToPlace.[AreaName]")]
        [MinSelectLevel(SelectLevel.List)]
        public String ToPlaceAreaName
        {
            get => Fields.ToPlaceAreaName[this];
            set => Fields.ToPlaceAreaName[this] = value;
        }

        [DisplayName("To Place Description"), Expression("jToPlace.[Description]")]
        public String ToPlaceDescription
        {
            get => Fields.ToPlaceDescription[this];
            set => Fields.ToPlaceDescription[this] = value;
        }

        IIdField IIdRow.IdField => Fields.Id;

        public static readonly RowFields Fields = new RowFields().Init();

        public VehicleFreightRow()
            : base(Fields)
        {
        }


        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field TsId;
            public Int32Field MaterialId;
            public Int32Field UnitId;
            public Int32Field FromPlace;
            public Int32Field ToPlace;
            public DateTimeField TripDate;
            public DecimalField PerTonRate;
            public DecimalField TotalFreight;
            //public DecimalField Commission;
            public DecimalField LoadingExpense;
            public DecimalField UnloadingExpense;
            //public DecimalField AmountOtherExpenses;
            public DecimalField UnitPrice;
            public DecimalField TotalCommission;

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

            public StringField Materials;

            public StringField Unit;

            public StringField FromPlaceAreaName;
            public StringField FromPlaceDescription;

            public StringField ToPlaceAreaName;
            public StringField ToPlaceDescription;

            public StringField Party;
            public Int32Field CashCredit;
            public Int32Field partys;
            public StringField partyy;


            public Int32Field PaymentMethod;
            public Int32Field DebitAccountId;

            public RowListField<Accounts.Entities.ReceiptRow> Receipts;

		}
    }
}
