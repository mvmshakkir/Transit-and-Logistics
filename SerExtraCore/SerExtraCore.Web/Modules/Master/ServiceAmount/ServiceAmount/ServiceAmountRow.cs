using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SerExtraCore.Master.Entities;
using SerExtraCore.Services.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace SerExtraCore.ServiceAmount.Entities
{
    [ConnectionKey("Default"), Module("ServiceAmount"), TableName("[dbo].[ServiceAmount]")]
    [DisplayName("Service Amount"), InstanceName("Service Amount")]
    [ReadPermission("Master:ServiceAmount")]
    [ModifyPermission("Master:ServiceAmount")]
    [LookupScript]
    public sealed class ServiceAmountRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get => Fields.Id[this];
            set => Fields.Id[this] = value;
        }
        [DisplayName("Photo"), Size(500)]
        [FileUploadEditor(FilenameFormat = "Service/~", CopyToHistory = true)]
        public String Photo
        {
            get { return Fields.Photo[this]; }
            set { Fields.Photo[this] = value; }
        }
        [DisplayName("Service"), ForeignKey("[dbo].[Services]", "Id"), LeftJoin("jService"), TextualField("ServiceName")]
        [LookupEditor(typeof(ServicesRow), InplaceAdd = true), QuickFilter, QuickSearch]
        public Int32? ServiceId
        {
            get => Fields.ServiceId[this];
            set => Fields.ServiceId[this] = value;
        }

        [DisplayName("Ts"), Column("TSId"), ForeignKey("[dbo].[VehicleMovDetails]", "Id"), LeftJoin("jTs"), TextualField("TsTsNo")]
        public Int32? TsId
        {
            get => Fields.TsId[this];
            set => Fields.TsId[this] = value;
        }

        [DisplayName("Amount"), Size(10), Scale(2)]
        public Decimal? Amount
        {
            get => Fields.Amount[this];
            set => Fields.Amount[this] = value;
        }

        [DisplayName(" Service Name"), LookupInclude,  Expression("jService.[ServiceName]")]
        [MinSelectLevel(SelectLevel.List)]
        public String ServiceServiceName
        {
            get => Fields.ServiceServiceName[this];
            set => Fields.ServiceServiceName[this] = value;
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

        IIdField IIdRow.IdField => Fields.Id;

        public static readonly RowFields Fields = new RowFields().Init();

        public ServiceAmountRow()
            : base(Fields)
        {
        }


        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ServiceId;
            public Int32Field TsId;
            public DecimalField Amount;

            public StringField ServiceServiceName;

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
            public StringField Photo;
        }
    }
}
