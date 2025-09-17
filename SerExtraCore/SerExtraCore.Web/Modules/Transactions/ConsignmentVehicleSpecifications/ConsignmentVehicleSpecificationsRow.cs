
namespace SerExtraCore.Transactions.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[ConsignmentVehicleSpecifications]")]
    [DisplayName("Consignment Vehicle Specifications"), InstanceName("Consignment Vehicle Specifications")]
    [ReadPermission("Transactions:Consignment")]
    [ModifyPermission("Transactions:Consignment")]
    public sealed class ConsignmentVehicleSpecificationsRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail"), NotNull, ForeignKey("[dbo].[ConsignmentVehicleDetails]", "Id"), LeftJoin("jConsignmentVehicleDetail"), TextualField("ConsignmentVehicleDetailType")]
        public Int32? ConsignmentVehicleDetailId
        {
            get { return Fields.ConsignmentVehicleDetailId[this]; }
            set { Fields.ConsignmentVehicleDetailId[this] = value; }
        }

        [DisplayName("Specification"), NotNull, ForeignKey("[dbo].[Specifications]", "Id"), LeftJoin("jSpecification"), TextualField("SpecificationSpecifications")]
        public Int32? SpecificationId
        {
            get { return Fields.SpecificationId[this]; }
            set { Fields.SpecificationId[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Consignment Id"), Expression("jConsignmentVehicleDetail.[ConsignmentId]")]
        public Int32? ConsignmentVehicleDetailConsignmentId
        {
            get { return Fields.ConsignmentVehicleDetailConsignmentId[this]; }
            set { Fields.ConsignmentVehicleDetailConsignmentId[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Vehicle Id"), Expression("jConsignmentVehicleDetail.[VehicleId]")]
        public Int32? ConsignmentVehicleDetailVehicleId
        {
            get { return Fields.ConsignmentVehicleDetailVehicleId[this]; }
            set { Fields.ConsignmentVehicleDetailVehicleId[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Type"), Expression("jConsignmentVehicleDetail.[Type]")]
        public String ConsignmentVehicleDetailType
        {
            get { return Fields.ConsignmentVehicleDetailType[this]; }
            set { Fields.ConsignmentVehicleDetailType[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Vehicle Number"), Expression("jConsignmentVehicleDetail.[VehicleNumber]")]
        public String ConsignmentVehicleDetailVehicleNumber
        {
            get { return Fields.ConsignmentVehicleDetailVehicleNumber[this]; }
            set { Fields.ConsignmentVehicleDetailVehicleNumber[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Driver"), Expression("jConsignmentVehicleDetail.[Driver]")]
        public Int32? ConsignmentVehicleDetailDriver
        {
            get { return Fields.ConsignmentVehicleDetailDriver[this]; }
            set { Fields.ConsignmentVehicleDetailDriver[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Shipping Area From"), Expression("jConsignmentVehicleDetail.[ShippingAreaFrom]")]
        public Int32? ConsignmentVehicleDetailShippingAreaFrom
        {
            get { return Fields.ConsignmentVehicleDetailShippingAreaFrom[this]; }
            set { Fields.ConsignmentVehicleDetailShippingAreaFrom[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Shipping Area To"), Expression("jConsignmentVehicleDetail.[ShippingAreaTo]")]
        public Int32? ConsignmentVehicleDetailShippingAreaTo
        {
            get { return Fields.ConsignmentVehicleDetailShippingAreaTo[this]; }
            set { Fields.ConsignmentVehicleDetailShippingAreaTo[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Type Of Vehicle"), Expression("jConsignmentVehicleDetail.[TypeOfVehicle]")]
        public Int32? ConsignmentVehicleDetailTypeOfVehicle
        {
            get { return Fields.ConsignmentVehicleDetailTypeOfVehicle[this]; }
            set { Fields.ConsignmentVehicleDetailTypeOfVehicle[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Start Date"), Expression("jConsignmentVehicleDetail.[StartDate]")]
        public DateTime? ConsignmentVehicleDetailStartDate
        {
            get { return Fields.ConsignmentVehicleDetailStartDate[this]; }
            set { Fields.ConsignmentVehicleDetailStartDate[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail End Date"), Expression("jConsignmentVehicleDetail.[EndDate]")]
        public DateTime? ConsignmentVehicleDetailEndDate
        {
            get { return Fields.ConsignmentVehicleDetailEndDate[this]; }
            set { Fields.ConsignmentVehicleDetailEndDate[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Driver Name"), Expression("jConsignmentVehicleDetail.[DriverName]")]
        public String ConsignmentVehicleDetailDriverName
        {
            get { return Fields.ConsignmentVehicleDetailDriverName[this]; }
            set { Fields.ConsignmentVehicleDetailDriverName[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Number"), Expression("jConsignmentVehicleDetail.[Number]")]
        public String ConsignmentVehicleDetailNumber
        {
            get { return Fields.ConsignmentVehicleDetailNumber[this]; }
            set { Fields.ConsignmentVehicleDetailNumber[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Resident Id"), Expression("jConsignmentVehicleDetail.[ResidentID]")]
        public String ConsignmentVehicleDetailResidentId
        {
            get { return Fields.ConsignmentVehicleDetailResidentId[this]; }
            set { Fields.ConsignmentVehicleDetailResidentId[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Country Id"), Expression("jConsignmentVehicleDetail.[CountryId]")]
        public Int32? ConsignmentVehicleDetailCountryId
        {
            get { return Fields.ConsignmentVehicleDetailCountryId[this]; }
            set { Fields.ConsignmentVehicleDetailCountryId[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Supplier Amount"), Expression("jConsignmentVehicleDetail.[SupplierAmount]")]
        public Decimal? ConsignmentVehicleDetailSupplierAmount
        {
            get { return Fields.ConsignmentVehicleDetailSupplierAmount[this]; }
            set { Fields.ConsignmentVehicleDetailSupplierAmount[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Supplier Id"), Expression("jConsignmentVehicleDetail.[SupplierId]")]
        public Int32? ConsignmentVehicleDetailSupplierId
        {
            get { return Fields.ConsignmentVehicleDetailSupplierId[this]; }
            set { Fields.ConsignmentVehicleDetailSupplierId[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Driver Km From"), Expression("jConsignmentVehicleDetail.[DriverKMFrom]")]
        public Decimal? ConsignmentVehicleDetailDriverKmFrom
        {
            get { return Fields.ConsignmentVehicleDetailDriverKmFrom[this]; }
            set { Fields.ConsignmentVehicleDetailDriverKmFrom[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Driver Km To"), Expression("jConsignmentVehicleDetail.[DriverKMTo]")]
        public Decimal? ConsignmentVehicleDetailDriverKmTo
        {
            get { return Fields.ConsignmentVehicleDetailDriverKmTo[this]; }
            set { Fields.ConsignmentVehicleDetailDriverKmTo[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Gpskm From"), Expression("jConsignmentVehicleDetail.[GPSKMFrom]")]
        public Decimal? ConsignmentVehicleDetailGpskmFrom
        {
            get { return Fields.ConsignmentVehicleDetailGpskmFrom[this]; }
            set { Fields.ConsignmentVehicleDetailGpskmFrom[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Gpskm To"), Expression("jConsignmentVehicleDetail.[GPSKMTo]")]
        public Decimal? ConsignmentVehicleDetailGpskmTo
        {
            get { return Fields.ConsignmentVehicleDetailGpskmTo[this]; }
            set { Fields.ConsignmentVehicleDetailGpskmTo[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Type Of Pkg"), Expression("jConsignmentVehicleDetail.[TypeOfPkg]")]
        public String ConsignmentVehicleDetailTypeOfPkg
        {
            get { return Fields.ConsignmentVehicleDetailTypeOfPkg[this]; }
            set { Fields.ConsignmentVehicleDetailTypeOfPkg[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Total Volume"), Expression("jConsignmentVehicleDetail.[TotalVolume]")]
        public String ConsignmentVehicleDetailTotalVolume
        {
            get { return Fields.ConsignmentVehicleDetailTotalVolume[this]; }
            set { Fields.ConsignmentVehicleDetailTotalVolume[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Total Weight"), Expression("jConsignmentVehicleDetail.[TotalWeight]")]
        public String ConsignmentVehicleDetailTotalWeight
        {
            get { return Fields.ConsignmentVehicleDetailTotalWeight[this]; }
            set { Fields.ConsignmentVehicleDetailTotalWeight[this] = value; }
        }

        [DisplayName("Consignment Vehicle Detail Total No Of Pkgs"), Expression("jConsignmentVehicleDetail.[TotalNoOfPkgs]")]
        public String ConsignmentVehicleDetailTotalNoOfPkgs
        {
            get { return Fields.ConsignmentVehicleDetailTotalNoOfPkgs[this]; }
            set { Fields.ConsignmentVehicleDetailTotalNoOfPkgs[this] = value; }
        }

        [DisplayName("Specification Specifications"), Expression("jSpecification.[Specifications]")]
        public String SpecificationSpecifications
        {
            get { return Fields.SpecificationSpecifications[this]; }
            set { Fields.SpecificationSpecifications[this] = value; }
        }

        [DisplayName("Specification Description"), Expression("jSpecification.[Description]")]
        public String SpecificationDescription
        {
            get { return Fields.SpecificationDescription[this]; }
            set { Fields.SpecificationDescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ConsignmentVehicleSpecificationsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ConsignmentVehicleDetailId;
            public Int32Field SpecificationId;

            public Int32Field ConsignmentVehicleDetailConsignmentId;
            public Int32Field ConsignmentVehicleDetailVehicleId;
            public StringField ConsignmentVehicleDetailType;
            public StringField ConsignmentVehicleDetailVehicleNumber;
            public Int32Field ConsignmentVehicleDetailDriver;
            public Int32Field ConsignmentVehicleDetailShippingAreaFrom;
            public Int32Field ConsignmentVehicleDetailShippingAreaTo;
            public Int32Field ConsignmentVehicleDetailTypeOfVehicle;
            public DateTimeField ConsignmentVehicleDetailStartDate;
            public DateTimeField ConsignmentVehicleDetailEndDate;
            public StringField ConsignmentVehicleDetailDriverName;
            public StringField ConsignmentVehicleDetailNumber;
            public StringField ConsignmentVehicleDetailResidentId;
            public Int32Field ConsignmentVehicleDetailCountryId;
            public DecimalField ConsignmentVehicleDetailSupplierAmount;
            public Int32Field ConsignmentVehicleDetailSupplierId;
            public DecimalField ConsignmentVehicleDetailDriverKmFrom;
            public DecimalField ConsignmentVehicleDetailDriverKmTo;
            public DecimalField ConsignmentVehicleDetailGpskmFrom;
            public DecimalField ConsignmentVehicleDetailGpskmTo;
            public StringField ConsignmentVehicleDetailTypeOfPkg;
            public StringField ConsignmentVehicleDetailTotalVolume;
            public StringField ConsignmentVehicleDetailTotalWeight;
            public StringField ConsignmentVehicleDetailTotalNoOfPkgs;

            public StringField SpecificationSpecifications;
            public StringField SpecificationDescription;
        }
    }
}
