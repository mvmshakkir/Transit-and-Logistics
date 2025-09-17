
namespace SerExtraCore.Transactions.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[ConsignmentTripDates]")]
    [DisplayName("Consignment Trip Dates"), InstanceName("Consignment Trip Dates")]
    [ReadPermission("Transactions:Consignment")]
    [ModifyPermission("Transactions:Consignment")]
    public sealed class ConsignmentTripDatesRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Consignment"), NotNull, ForeignKey("[dbo].[Consignment]", "Id"), LeftJoin("jConsignment"), TextualField("ConsignmentWayBillNo")]
        public Int32? ConsignmentId
        {
            get { return Fields.ConsignmentId[this]; }
            set { Fields.ConsignmentId[this] = value; }
        }

        [DisplayName("Start Date"),NotNull, DateTimeEditor]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("End Date"),NotNull, DateTimeEditor]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }

        [DisplayName("Consignment Date"), Expression("jConsignment.[Date]")]
        public DateTime? ConsignmentDate
        {
            get { return Fields.ConsignmentDate[this]; }
            set { Fields.ConsignmentDate[this] = value; }
        }

        [DisplayName("Consignment Way Bill No"), Expression("jConsignment.[WayBillNo]")]
        public String ConsignmentWayBillNo
        {
            get { return Fields.ConsignmentWayBillNo[this]; }
            set { Fields.ConsignmentWayBillNo[this] = value; }
        }

        [DisplayName("Consignment Job No"), Expression("jConsignment.[JobNo]")]
        public String ConsignmentJobNo
        {
            get { return Fields.ConsignmentJobNo[this]; }
            set { Fields.ConsignmentJobNo[this] = value; }
        }

        [DisplayName("Consignment Client Job No"), Expression("jConsignment.[ClientJobNo]")]
        public String ConsignmentClientJobNo
        {
            get { return Fields.ConsignmentClientJobNo[this]; }
            set { Fields.ConsignmentClientJobNo[this] = value; }
        }

        [DisplayName("Consignment Shipper Id"), Expression("jConsignment.[ShipperId]")]
        public Int32? ConsignmentShipperId
        {
            get { return Fields.ConsignmentShipperId[this]; }
            set { Fields.ConsignmentShipperId[this] = value; }
        }

        [DisplayName("Consignment Consignee Id"), Expression("jConsignment.[ConsigneeId]")]
        public Int32? ConsignmentConsigneeId
        {
            get { return Fields.ConsignmentConsigneeId[this]; }
            set { Fields.ConsignmentConsigneeId[this] = value; }
        }

        [DisplayName("Consignment Vehicle Id"), Expression("jConsignment.[VehicleId]")]
        public Int32? ConsignmentVehicleId
        {
            get { return Fields.ConsignmentVehicleId[this]; }
            set { Fields.ConsignmentVehicleId[this] = value; }
        }

        [DisplayName("Consignment Type"), Expression("jConsignment.[Type]")]
        public String ConsignmentType
        {
            get { return Fields.ConsignmentType[this]; }
            set { Fields.ConsignmentType[this] = value; }
        }

        [DisplayName("Consignment Vehicle Number"), Expression("jConsignment.[VehicleNumber]")]
        public String ConsignmentVehicleNumber
        {
            get { return Fields.ConsignmentVehicleNumber[this]; }
            set { Fields.ConsignmentVehicleNumber[this] = value; }
        }

        [DisplayName("Consignment Driver"), Expression("jConsignment.[Driver]")]
        public Int32? ConsignmentDriver
        {
            get { return Fields.ConsignmentDriver[this]; }
            set { Fields.ConsignmentDriver[this] = value; }
        }

        [DisplayName("Consignment Payment"), Expression("jConsignment.[Payment]")]
        public Int32? ConsignmentPayment
        {
            get { return Fields.ConsignmentPayment[this]; }
            set { Fields.ConsignmentPayment[this] = value; }
        }

        [DisplayName("Consignment Type Of Pkg"), Expression("jConsignment.[TypeOfPkg]")]
        public String ConsignmentTypeOfPkg
        {
            get { return Fields.ConsignmentTypeOfPkg[this]; }
            set { Fields.ConsignmentTypeOfPkg[this] = value; }
        }

        [DisplayName("Consignment Total Volume"), Expression("jConsignment.[TotalVolume]")]
        public String ConsignmentTotalVolume
        {
            get { return Fields.ConsignmentTotalVolume[this]; }
            set { Fields.ConsignmentTotalVolume[this] = value; }
        }

        [DisplayName("Consignment Total Weight"), Expression("jConsignment.[TotalWeight]")]
        public String ConsignmentTotalWeight
        {
            get { return Fields.ConsignmentTotalWeight[this]; }
            set { Fields.ConsignmentTotalWeight[this] = value; }
        }

        [DisplayName("Consignment Total No Of Pkgs"), Expression("jConsignment.[TotalNoOfPkgs]")]
        public String ConsignmentTotalNoOfPkgs
        {
            get { return Fields.ConsignmentTotalNoOfPkgs[this]; }
            set { Fields.ConsignmentTotalNoOfPkgs[this] = value; }
        }

        [DisplayName("Consignment Shipping Area From"), Expression("jConsignment.[ShippingAreaFrom]")]
        public Int32? ConsignmentShippingAreaFrom
        {
            get { return Fields.ConsignmentShippingAreaFrom[this]; }
            set { Fields.ConsignmentShippingAreaFrom[this] = value; }
        }

        [DisplayName("Consignment Shipping Area To"), Expression("jConsignment.[ShippingAreaTo]")]
        public Int32? ConsignmentShippingAreaTo
        {
            get { return Fields.ConsignmentShippingAreaTo[this]; }
            set { Fields.ConsignmentShippingAreaTo[this] = value; }
        }

        [DisplayName("Consignment Total Amount"), Expression("jConsignment.[TotalAmount]")]
        public Decimal? ConsignmentTotalAmount
        {
            get { return Fields.ConsignmentTotalAmount[this]; }
            set { Fields.ConsignmentTotalAmount[this] = value; }
        }

        [DisplayName("Consignment Status"), Expression("jConsignment.[Status]")]
        public Int32? ConsignmentStatus
        {
            get { return Fields.ConsignmentStatus[this]; }
            set { Fields.ConsignmentStatus[this] = value; }
        }

        [DisplayName("Consignment Payment Mode"), Expression("jConsignment.[PaymentMode]")]
        public Int32? ConsignmentPaymentMode
        {
            get { return Fields.ConsignmentPaymentMode[this]; }
            set { Fields.ConsignmentPaymentMode[this] = value; }
        }

        [DisplayName("Consignment Billing"), Expression("jConsignment.[Billing]")]
        public Int32? ConsignmentBilling
        {
            get { return Fields.ConsignmentBilling[this]; }
            set { Fields.ConsignmentBilling[this] = value; }
        }

        [DisplayName("Consignment Start Date"), Expression("jConsignment.[StartDate]")]
        public DateTime? ConsignmentStartDate
        {
            get { return Fields.ConsignmentStartDate[this]; }
            set { Fields.ConsignmentStartDate[this] = value; }
        }

        [DisplayName("Consignment End Date"), Expression("jConsignment.[EndDate]")]
        public DateTime? ConsignmentEndDate
        {
            get { return Fields.ConsignmentEndDate[this]; }
            set { Fields.ConsignmentEndDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ConsignmentTripDatesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ConsignmentId;
            public DateTimeField StartDate;
            public DateTimeField EndDate;

            public DateTimeField ConsignmentDate;
            public StringField ConsignmentWayBillNo;
            public StringField ConsignmentJobNo;
            public StringField ConsignmentClientJobNo;
            public Int32Field ConsignmentShipperId;
            public Int32Field ConsignmentConsigneeId;
            public Int32Field ConsignmentVehicleId;
            public StringField ConsignmentType;
            public StringField ConsignmentVehicleNumber;
            public Int32Field ConsignmentDriver;
            public Int32Field ConsignmentPayment;
            public StringField ConsignmentTypeOfPkg;
            public StringField ConsignmentTotalVolume;
            public StringField ConsignmentTotalWeight;
            public StringField ConsignmentTotalNoOfPkgs;
            public Int32Field ConsignmentShippingAreaFrom;
            public Int32Field ConsignmentShippingAreaTo;
            public DecimalField ConsignmentTotalAmount;
            public Int32Field ConsignmentStatus;
            public Int32Field ConsignmentPaymentMode;
            public Int32Field ConsignmentBilling;
            public DateTimeField ConsignmentStartDate;
            public DateTimeField ConsignmentEndDate;
        }
    }
}
