
namespace SerExtraCore.Transactions.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[InvoiceVehicleSpecifications]")]
    [DisplayName("Invoice Vehicle Specifications"), InstanceName("Invoice Vehicle Specifications")]
    [ReadPermission("Transactions:Invoice")]
    [ModifyPermission("Transactions:Invoice")]
    public sealed class InvoiceVehicleSpecificationsRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail"), NotNull, ForeignKey("[dbo].[InvoiceVehicleDetails]", "Id"), LeftJoin("jInvoiceVehicleDetail"), TextualField("InvoiceVehicleDetailType")]
        public Int32? InvoiceVehicleDetailId
        {
            get { return Fields.InvoiceVehicleDetailId[this]; }
            set { Fields.InvoiceVehicleDetailId[this] = value; }
        }

        [DisplayName("Specification"), NotNull, ForeignKey("[dbo].[Specifications]", "Id"), LeftJoin("jSpecification"), TextualField("SpecificationSpecifications")]
        public Int32? SpecificationId
        {
            get { return Fields.SpecificationId[this]; }
            set { Fields.SpecificationId[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Invoice Id"), Expression("jInvoiceVehicleDetail.[InvoiceId]")]
        public Int32? InvoiceVehicleDetailInvoiceId
        {
            get { return Fields.InvoiceVehicleDetailInvoiceId[this]; }
            set { Fields.InvoiceVehicleDetailInvoiceId[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Vehicle Id"), Expression("jInvoiceVehicleDetail.[VehicleId]")]
        public Int32? InvoiceVehicleDetailVehicleId
        {
            get { return Fields.InvoiceVehicleDetailVehicleId[this]; }
            set { Fields.InvoiceVehicleDetailVehicleId[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Type"), Expression("jInvoiceVehicleDetail.[Type]")]
        public String InvoiceVehicleDetailType
        {
            get { return Fields.InvoiceVehicleDetailType[this]; }
            set { Fields.InvoiceVehicleDetailType[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Vehicle Number"), Expression("jInvoiceVehicleDetail.[VehicleNumber]")]
        public String InvoiceVehicleDetailVehicleNumber
        {
            get { return Fields.InvoiceVehicleDetailVehicleNumber[this]; }
            set { Fields.InvoiceVehicleDetailVehicleNumber[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Driver"), Expression("jInvoiceVehicleDetail.[Driver]")]
        public Int32? InvoiceVehicleDetailDriver
        {
            get { return Fields.InvoiceVehicleDetailDriver[this]; }
            set { Fields.InvoiceVehicleDetailDriver[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Shipping Area From"), Expression("jInvoiceVehicleDetail.[ShippingAreaFrom]")]
        public Int32? InvoiceVehicleDetailShippingAreaFrom
        {
            get { return Fields.InvoiceVehicleDetailShippingAreaFrom[this]; }
            set { Fields.InvoiceVehicleDetailShippingAreaFrom[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Shipping Area To"), Expression("jInvoiceVehicleDetail.[ShippingAreaTo]")]
        public Int32? InvoiceVehicleDetailShippingAreaTo
        {
            get { return Fields.InvoiceVehicleDetailShippingAreaTo[this]; }
            set { Fields.InvoiceVehicleDetailShippingAreaTo[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Type Of Vehicle"), Expression("jInvoiceVehicleDetail.[TypeOfVehicle]")]
        public Int32? InvoiceVehicleDetailTypeOfVehicle
        {
            get { return Fields.InvoiceVehicleDetailTypeOfVehicle[this]; }
            set { Fields.InvoiceVehicleDetailTypeOfVehicle[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Start Date"), Expression("jInvoiceVehicleDetail.[StartDate]")]
        public DateTime? InvoiceVehicleDetailStartDate
        {
            get { return Fields.InvoiceVehicleDetailStartDate[this]; }
            set { Fields.InvoiceVehicleDetailStartDate[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail End Date"), Expression("jInvoiceVehicleDetail.[EndDate]")]
        public DateTime? InvoiceVehicleDetailEndDate
        {
            get { return Fields.InvoiceVehicleDetailEndDate[this]; }
            set { Fields.InvoiceVehicleDetailEndDate[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Driver Name"), Expression("jInvoiceVehicleDetail.[DriverName]")]
        public String InvoiceVehicleDetailDriverName
        {
            get { return Fields.InvoiceVehicleDetailDriverName[this]; }
            set { Fields.InvoiceVehicleDetailDriverName[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Number"), Expression("jInvoiceVehicleDetail.[Number]")]
        public String InvoiceVehicleDetailNumber
        {
            get { return Fields.InvoiceVehicleDetailNumber[this]; }
            set { Fields.InvoiceVehicleDetailNumber[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Resident Id"), Expression("jInvoiceVehicleDetail.[ResidentID]")]
        public String InvoiceVehicleDetailResidentId
        {
            get { return Fields.InvoiceVehicleDetailResidentId[this]; }
            set { Fields.InvoiceVehicleDetailResidentId[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Country Id"), Expression("jInvoiceVehicleDetail.[CountryId]")]
        public Int32? InvoiceVehicleDetailCountryId
        {
            get { return Fields.InvoiceVehicleDetailCountryId[this]; }
            set { Fields.InvoiceVehicleDetailCountryId[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Supplier Amount"), Expression("jInvoiceVehicleDetail.[SupplierAmount]")]
        public Decimal? InvoiceVehicleDetailSupplierAmount
        {
            get { return Fields.InvoiceVehicleDetailSupplierAmount[this]; }
            set { Fields.InvoiceVehicleDetailSupplierAmount[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Supplier Id"), Expression("jInvoiceVehicleDetail.[SupplierId]")]
        public Int32? InvoiceVehicleDetailSupplierId
        {
            get { return Fields.InvoiceVehicleDetailSupplierId[this]; }
            set { Fields.InvoiceVehicleDetailSupplierId[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Supplier Payment Status"), Expression("jInvoiceVehicleDetail.[SupplierPaymentStatus]")]
        public Int32? InvoiceVehicleDetailSupplierPaymentStatus
        {
            get { return Fields.InvoiceVehicleDetailSupplierPaymentStatus[this]; }
            set { Fields.InvoiceVehicleDetailSupplierPaymentStatus[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Driver Km From"), Expression("jInvoiceVehicleDetail.[DriverKMFrom]")]
        public Decimal? InvoiceVehicleDetailDriverKmFrom
        {
            get { return Fields.InvoiceVehicleDetailDriverKmFrom[this]; }
            set { Fields.InvoiceVehicleDetailDriverKmFrom[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Driver Km To"), Expression("jInvoiceVehicleDetail.[DriverKMTo]")]
        public Decimal? InvoiceVehicleDetailDriverKmTo
        {
            get { return Fields.InvoiceVehicleDetailDriverKmTo[this]; }
            set { Fields.InvoiceVehicleDetailDriverKmTo[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Gpskm From"), Expression("jInvoiceVehicleDetail.[GPSKMFrom]")]
        public Decimal? InvoiceVehicleDetailGpskmFrom
        {
            get { return Fields.InvoiceVehicleDetailGpskmFrom[this]; }
            set { Fields.InvoiceVehicleDetailGpskmFrom[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Gpskm To"), Expression("jInvoiceVehicleDetail.[GPSKMTo]")]
        public Decimal? InvoiceVehicleDetailGpskmTo
        {
            get { return Fields.InvoiceVehicleDetailGpskmTo[this]; }
            set { Fields.InvoiceVehicleDetailGpskmTo[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Type Of Pkg"), Expression("jInvoiceVehicleDetail.[TypeOfPkg]")]
        public String InvoiceVehicleDetailTypeOfPkg
        {
            get { return Fields.InvoiceVehicleDetailTypeOfPkg[this]; }
            set { Fields.InvoiceVehicleDetailTypeOfPkg[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Total Volume"), Expression("jInvoiceVehicleDetail.[TotalVolume]")]
        public String InvoiceVehicleDetailTotalVolume
        {
            get { return Fields.InvoiceVehicleDetailTotalVolume[this]; }
            set { Fields.InvoiceVehicleDetailTotalVolume[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Total Weight"), Expression("jInvoiceVehicleDetail.[TotalWeight]")]
        public String InvoiceVehicleDetailTotalWeight
        {
            get { return Fields.InvoiceVehicleDetailTotalWeight[this]; }
            set { Fields.InvoiceVehicleDetailTotalWeight[this] = value; }
        }

        [DisplayName("Invoice Vehicle Detail Total No Of Pkgs"), Expression("jInvoiceVehicleDetail.[TotalNoOfPkgs]")]
        public String InvoiceVehicleDetailTotalNoOfPkgs
        {
            get { return Fields.InvoiceVehicleDetailTotalNoOfPkgs[this]; }
            set { Fields.InvoiceVehicleDetailTotalNoOfPkgs[this] = value; }
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

        public InvoiceVehicleSpecificationsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field InvoiceVehicleDetailId;
            public Int32Field SpecificationId;

            public Int32Field InvoiceVehicleDetailInvoiceId;
            public Int32Field InvoiceVehicleDetailVehicleId;
            public StringField InvoiceVehicleDetailType;
            public StringField InvoiceVehicleDetailVehicleNumber;
            public Int32Field InvoiceVehicleDetailDriver;
            public Int32Field InvoiceVehicleDetailShippingAreaFrom;
            public Int32Field InvoiceVehicleDetailShippingAreaTo;
            public Int32Field InvoiceVehicleDetailTypeOfVehicle;
            public DateTimeField InvoiceVehicleDetailStartDate;
            public DateTimeField InvoiceVehicleDetailEndDate;
            public StringField InvoiceVehicleDetailDriverName;
            public StringField InvoiceVehicleDetailNumber;
            public StringField InvoiceVehicleDetailResidentId;
            public Int32Field InvoiceVehicleDetailCountryId;
            public DecimalField InvoiceVehicleDetailSupplierAmount;
            public Int32Field InvoiceVehicleDetailSupplierId;
            public Int32Field InvoiceVehicleDetailSupplierPaymentStatus;
            public DecimalField InvoiceVehicleDetailDriverKmFrom;
            public DecimalField InvoiceVehicleDetailDriverKmTo;
            public DecimalField InvoiceVehicleDetailGpskmFrom;
            public DecimalField InvoiceVehicleDetailGpskmTo;
            public StringField InvoiceVehicleDetailTypeOfPkg;
            public StringField InvoiceVehicleDetailTotalVolume;
            public StringField InvoiceVehicleDetailTotalWeight;
            public StringField InvoiceVehicleDetailTotalNoOfPkgs;

            public StringField SpecificationSpecifications;
            public StringField SpecificationDescription;
        }
    }
}
