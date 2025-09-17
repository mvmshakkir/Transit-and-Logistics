using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SerExtraCore.Crossing.Entities
{
    [ConnectionKey("Default"), Module("Crossing"), TableName("[dbo].[Crossing]")]
    [DisplayName("Crossing"), InstanceName("Crossing")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CrossingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get => Fields.Id[this];
            set => Fields.Id[this] = value;
        }

        [DisplayName("Settlementid"), Column("settlementid"), ForeignKey("[dbo].[SettlementDetails]", "Id"), LeftJoin("jSettlementid"), TextualField("SettlementidTsNumber")]
        public Int32? Settlementid
        {
            get => Fields.Settlementid[this];
            set => Fields.Settlementid[this] = value;
        }

        [DisplayName("Name"), Size(250), QuickSearch]
        public String Name
        {
            get => Fields.Name[this];
            set => Fields.Name[this] = value;
        }

        [DisplayName("Amount"), Size(10), Scale(2)]
        public Decimal? Amount
        {
            get => Fields.Amount[this];
            set => Fields.Amount[this] = value;
        }

        [DisplayName("Settlementid Ts No"), Expression("jSettlementid.[TsNo]")]
        public Int32? SettlementidTsNo
        {
            get => Fields.SettlementidTsNo[this];
            set => Fields.SettlementidTsNo[this] = value;
        }

        [DisplayName("Settlementid Money In Out Ts No"), Expression("jSettlementid.[MoneyInOutTsNo]")]
        public Int32? SettlementidMoneyInOutTsNo
        {
            get => Fields.SettlementidMoneyInOutTsNo[this];
            set => Fields.SettlementidMoneyInOutTsNo[this] = value;
        }

        [DisplayName("Settlementid Trip Advance"), Expression("jSettlementid.[TripAdvance]")]
        public Int32? SettlementidTripAdvance
        {
            get => Fields.SettlementidTripAdvance[this];
            set => Fields.SettlementidTripAdvance[this] = value;
        }

        [DisplayName("Settlementid Trip Balance"), Expression("jSettlementid.[TripBalance]")]
        public Int32? SettlementidTripBalance
        {
            get => Fields.SettlementidTripBalance[this];
            set => Fields.SettlementidTripBalance[this] = value;
        }

        [DisplayName("Settlementid Toll Tag"), Expression("jSettlementid.[TollTag]")]
        public Int32? SettlementidTollTag
        {
            get => Fields.SettlementidTollTag[this];
            set => Fields.SettlementidTollTag[this] = value;
        }

        [DisplayName("Settlementid Trip Balancee"), Expression("jSettlementid.[TripBalancee]")]
        public Decimal? SettlementidTripBalancee
        {
            get => Fields.SettlementidTripBalancee[this];
            set => Fields.SettlementidTripBalancee[this] = value;
        }

        [DisplayName("Settlementid Advance"), Expression("jSettlementid.[Advance]")]
        public Decimal? SettlementidAdvance
        {
            get => Fields.SettlementidAdvance[this];
            set => Fields.SettlementidAdvance[this] = value;
        }

        [DisplayName("Settlementid Toll"), Expression("jSettlementid.[toll]")]
        public Decimal? SettlementidToll
        {
            get => Fields.SettlementidToll[this];
            set => Fields.SettlementidToll[this] = value;
        }

        [DisplayName("Settlementid Ts Number"), Expression("jSettlementid.[TsNumber]")]
        public String SettlementidTsNumber
        {
            get => Fields.SettlementidTsNumber[this];
            set => Fields.SettlementidTsNumber[this] = value;
        }

        [DisplayName("Settlementid Fual Amount"), Expression("jSettlementid.[FualAmount]")]
        public Decimal? SettlementidFualAmount
        {
            get => Fields.SettlementidFualAmount[this];
            set => Fields.SettlementidFualAmount[this] = value;
        }

        IIdField IIdRow.IdField => Fields.Id;

        StringField INameRow.NameField => Fields.Name;

        public static readonly RowFields Fields = new RowFields().Init();

        public CrossingRow()
            : base(Fields)
        {
        }


        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Settlementid;
            public StringField Name;
            public DecimalField Amount;

            public Int32Field SettlementidTsNo;
            public Int32Field SettlementidMoneyInOutTsNo;
            public Int32Field SettlementidTripAdvance;
            public Int32Field SettlementidTripBalance;
            public Int32Field SettlementidTollTag;
            public DecimalField SettlementidTripBalancee;
            public DecimalField SettlementidAdvance;
            public DecimalField SettlementidToll;
            public StringField SettlementidTsNumber;
            public DecimalField SettlementidFualAmount;
        }
    }
}
