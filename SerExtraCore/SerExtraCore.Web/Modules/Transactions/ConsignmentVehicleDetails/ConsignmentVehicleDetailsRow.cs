
namespace SerExtraCore.Transactions.Entities
{
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Master.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[ConsignmentVehicleDetails]")]
    [DisplayName("Consignment Vehicle Details"), InstanceName("Consignment Vehicle Details")]
    [ReadPermission("Transactions:Consignment")]
    [ModifyPermission("Transactions:Consignment")]
    [LookupScript(Permission ="*")]

    
    [LeftJoin("cd", "ConsignmentCharges", "cd.[ConsignmentChargesId] = t0.[ID]", RowType = typeof(ConsignmentChargesRow), TitlePrefix = "")]
    [UpdatableExtension("cd", typeof(ConsignmentChargesRow), CascadeDelete = true,OtherKey = "ConsignmentChargesId")]
    public sealed class ConsignmentVehicleDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Consignment"),  ForeignKey("[dbo].[Consignment]", "Id"), LeftJoin("jConsignment"), TextualField("ConsignmentWayBillNo")]
        public Int32? ConsignmentId
        {
            get { return Fields.ConsignmentId[this]; }
            set { Fields.ConsignmentId[this] = value; }
        }

        [DisplayName("Vehicle"),  ForeignKey("[dbo].[Vehicles]", "Id"), LeftJoin("jVehicle"), TextualField("VehicleVehicleNumber")]
        [LookupEditor(typeof(VehiclesRow), InplaceAdd = true,CascadeField = "TypeOfVehicle", CascadeFrom = "TypeOfVehicle")]
        public Int32? VehicleId
        {
            get { return Fields.VehicleId[this]; }
            set { Fields.VehicleId[this] = value; }
        }

        [DisplayName("Type"), Size(500), QuickSearch]
        public String Type
        {
            get { return Fields.Type[this]; }
            set { Fields.Type[this] = value; }
        }

        [DisplayName("Vehicle Number"), Size(200)]
        public String VehicleNumber
        {
            get { return Fields.VehicleNumber[this]; }
            set { Fields.VehicleNumber[this] = value; }
        }

        [DisplayName("Driver"), ForeignKey("[dbo].[EmployeeMaster]", "Id"), LeftJoin("jDriver"), TextualField("DriverEmployeeCode")]
        [LookupEditor(typeof(EmployeeMasterRow), InplaceAdd = true)]
        public Int32? Driver
        {
            get { return Fields.Driver[this]; }
            set { Fields.Driver[this] = value; }
        }
        [DisplayName("Driver Advance"), Size(200)]
        public Decimal? DriverAdvance
        {
            get { return Fields.DriverAdvance[this]; }
            set { Fields.DriverAdvance[this] = value; }
        }

        [DisplayName("Payment Type"), QuickSearch, QuickFilter]
        public AccountTypes? DriverAdvancePaymentType
        {
            get { return (AccountTypes?)Fields.DriverAdvancePaymentType[this]; }
            set { Fields.DriverAdvancePaymentType[this] = (int?)value; }
        }

        [DisplayName("Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jAccount1"), TextualField("AccountAccountName")]
        [LookupEditor(typeof(AccountsRow), CascadeField = "Type", CascadeFrom = "DriverAdvancePaymentType")]
        public Int32? DriverAdvanceAccount
        {
            get { return Fields.DriverAdvanceAccount[this]; }
            set { Fields.DriverAdvanceAccount[this] = value; }
        }

        [DisplayName("Shipping Area From"), ForeignKey("[dbo].[ShippingAreas]", "Id"), LeftJoin("jShippingAreaFrom"), TextualField("ShippingAreaFromAreaName")]
        [LookupEditor(typeof(ShippingAreasRow), InplaceAdd = true)]
        public Int32? ShippingAreaFrom
        {
            get { return Fields.ShippingAreaFrom[this]; }
            set { Fields.ShippingAreaFrom[this] = value; }
        }

        [DisplayName("Shipping Area To"), ForeignKey("[dbo].[ShippingAreas]", "Id"), LeftJoin("jShippingAreaTo"), TextualField("ShippingAreaToAreaName")]
        [LookupEditor(typeof(ShippingAreasRow), InplaceAdd = true)]
        public Int32? ShippingAreaTo
        {
            get { return Fields.ShippingAreaTo[this]; }
            set { Fields.ShippingAreaTo[this] = value; }
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

        [DisplayName("Vehicle Type Of Vehicle"), Expression("jVehicle.[TypeOfVehicle]")]
        public Int32? VehicleTypeOfVehicle
        {
            get { return Fields.VehicleTypeOfVehicle[this]; }
            set { Fields.VehicleTypeOfVehicle[this] = value; }
        }

        [DisplayName("Vehicle Through"), Expression("jVehicle.[Through]")]
        public Int32? VehicleThrough
        {
            get { return Fields.VehicleThrough[this]; }
            set { Fields.VehicleThrough[this] = value; }
        }

        [DisplayName("Vehicle Vehicle Number"), Expression("jVehicle.[VehicleNumber]")]
        public String VehicleVehicleNumber
        {
            get { return Fields.VehicleVehicleNumber[this]; }
            set { Fields.VehicleVehicleNumber[this] = value; }
        }

        [DisplayName("Vehicle Vehicle Model"), Expression("jVehicle.[VehicleModel]")]
        public Int32? VehicleVehicleModel
        {
            get { return Fields.VehicleVehicleModel[this]; }
            set { Fields.VehicleVehicleModel[this] = value; }
        }

        [DisplayName("Vehicle Registraion Number"), Expression("jVehicle.[RegistraionNumber]")]
        public String VehicleRegistraionNumber
        {
            get { return Fields.VehicleRegistraionNumber[this]; }
            set { Fields.VehicleRegistraionNumber[this] = value; }
        }

        [DisplayName("Vehicle Description"), Expression("jVehicle.[Description]")]
        public String VehicleDescription
        {
            get { return Fields.VehicleDescription[this]; }
            set { Fields.VehicleDescription[this] = value; }
        }

        [DisplayName("Vehicle Registration Date"), Expression("jVehicle.[RegistrationDate]")]
        public DateTime? VehicleRegistrationDate
        {
            get { return Fields.VehicleRegistrationDate[this]; }
            set { Fields.VehicleRegistrationDate[this] = value; }
        }

        [DisplayName("Vehicle Expiry Date"), Expression("jVehicle.[ExpiryDate]")]
        public DateTime? VehicleExpiryDate
        {
            get { return Fields.VehicleExpiryDate[this]; }
            set { Fields.VehicleExpiryDate[this] = value; }
        }

        [DisplayName("Vehicle Driver"), Expression("jVehicle.[Driver]")]
        public Int32? VehicleDriver
        {
            get { return Fields.VehicleDriver[this]; }
            set { Fields.VehicleDriver[this] = value; }
        }

        [DisplayName("Vehicle Pdo Approved"), Expression("jVehicle.[PDOApproved]")]
        public Boolean? VehiclePdoApproved
        {
            get { return Fields.VehiclePdoApproved[this]; }
            set { Fields.VehiclePdoApproved[this] = value; }
        }

        [DisplayName("Driver Employee Code"), Expression("jDriver.[EmployeeCode]")]
        public String DriverEmployeeCode
        {
            get { return Fields.DriverEmployeeCode[this]; }
            set { Fields.DriverEmployeeCode[this] = value; }
        }

        [DisplayName("Driver"), Expression("jDriver.[EmployeeName]"),MinSelectLevel(SelectLevel.List)]
        public String DriverEmployeeName
        {
            get { return Fields.DriverEmployeeName[this]; }
            set { Fields.DriverEmployeeName[this] = value; }
        }

        [DisplayName("Driver Address"), Expression("jDriver.[Address]")]
        public String DriverAddress
        {
            get { return Fields.DriverAddress[this]; }
            set { Fields.DriverAddress[this] = value; }
        }

        [DisplayName("Driver Country Id"), Expression("jDriver.[CountryId]")]
        public Int32? DriverCountryId
        {
            get { return Fields.DriverCountryId[this]; }
            set { Fields.DriverCountryId[this] = value; }
        }

        [DisplayName("Driver Employee Status"), Expression("jDriver.[EmployeeStatus]")]
        public Int32? DriverEmployeeStatus
        {
            get { return Fields.DriverEmployeeStatus[this]; }
            set { Fields.DriverEmployeeStatus[this] = value; }
        }

        [DisplayName("Driver Employee Type Id"), Expression("jDriver.[EmployeeTypeId]")]
        public Int32? DriverEmployeeTypeId
        {
            get { return Fields.DriverEmployeeTypeId[this]; }
            set { Fields.DriverEmployeeTypeId[this] = value; }
        }

        [DisplayName("Driver Designation Id"), Expression("jDriver.[DesignationId]")]
        public Int32? DriverDesignationId
        {
            get { return Fields.DriverDesignationId[this]; }
            set { Fields.DriverDesignationId[this] = value; }
        }

        [DisplayName("Driver Resident Id"), Expression("jDriver.[ResidentID]")]
        public String DriverResidentId
        {
            get { return Fields.DriverResidentId[this]; }
            set { Fields.DriverResidentId[this] = value; }
        }

        [DisplayName("Driver Rid Expiry Date"), Expression("jDriver.[RIDExpiryDate]")]
        public DateTime? DriverRidExpiryDate
        {
            get { return Fields.DriverRidExpiryDate[this]; }
            set { Fields.DriverRidExpiryDate[this] = value; }
        }

        [DisplayName("Driver Passport Number"), Expression("jDriver.[PassportNumber]")]
        public String DriverPassportNumber
        {
            get { return Fields.DriverPassportNumber[this]; }
            set { Fields.DriverPassportNumber[this] = value; }
        }

        [DisplayName("Driver Passport Expiry Date"), Expression("jDriver.[PassportExpiryDate]")]
        public DateTime? DriverPassportExpiryDate
        {
            get { return Fields.DriverPassportExpiryDate[this]; }
            set { Fields.DriverPassportExpiryDate[this] = value; }
        }

        [DisplayName("Driver Mobile Number"), Expression("jDriver.[MobileNumber]")]
        public String DriverMobileNumber
        {
            get { return Fields.DriverMobileNumber[this]; }
            set { Fields.DriverMobileNumber[this] = value; }
        }

        [DisplayName("Driver Basic Salary"), Expression("jDriver.[BasicSalary]")]
        public Decimal? DriverBasicSalary
        {
            get { return Fields.DriverBasicSalary[this]; }
            set { Fields.DriverBasicSalary[this] = value; }
        }

        [DisplayName("Driver Allowance"), Expression("jDriver.[Allowance]")]
        public Decimal? DriverAllowance
        {
            get { return Fields.DriverAllowance[this]; }
            set { Fields.DriverAllowance[this] = value; }
        }

        [DisplayName("Shipping Area From"), Expression("jShippingAreaFrom.[AreaName]"), MinSelectLevel(SelectLevel.List)]
        public String ShippingAreaFromAreaName
        {
            get { return Fields.ShippingAreaFromAreaName[this]; }
            set { Fields.ShippingAreaFromAreaName[this] = value; }
        }

        [DisplayName("Shipping Area From Description"), Expression("jShippingAreaFrom.[Description]")]
        public String ShippingAreaFromDescription
        {
            get { return Fields.ShippingAreaFromDescription[this]; }
            set { Fields.ShippingAreaFromDescription[this] = value; }
        }

        [DisplayName("Shipping Area To"), Expression("jShippingAreaTo.[AreaName]"), MinSelectLevel(SelectLevel.List)]
        public String ShippingAreaToAreaName
        {
            get { return Fields.ShippingAreaToAreaName[this]; }
            set { Fields.ShippingAreaToAreaName[this] = value; }
        }

        [DisplayName("Shipping Area To Description"), Expression("jShippingAreaTo.[Description]")]
        public String ShippingAreaToDescription
        {
            get { return Fields.ShippingAreaToDescription[this]; }
            set { Fields.ShippingAreaToDescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.VehicleNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ConsignmentVehicleDetailsRow()
            : base(Fields)
        {
        }
        [DisplayName("Type Of Vehicle"), QuickFilter, QuickSearch]
        public VehicleTypes? TypeOfVehicle
        {
            get { return (VehicleTypes?)Fields.TypeOfVehicle[this]; }
            set { Fields.TypeOfVehicle[this] = (int?)value; }
        }
        [DisplayName("Start Date"), DateTimeEditor]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("End Date"), DateTimeEditor]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }


        [DisplayName("Country"), ForeignKey("[dbo].[Countries]", "Id"), LeftJoin("jCountry"), TextualField("CountryCountryName")]
        [LookupEditor(typeof(CountriesRow), InplaceAdd = true), QuickSearch, QuickFilter]
        public Int32? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
        }
        [DisplayName("Country Code"), Expression("jCountry.[CountryCode]"), QuickFilter, QuickSearch]
        public String CountryCountryCode
        {
            get { return Fields.CountryCountryCode[this]; }
            set { Fields.CountryCountryCode[this] = value; }
        }

        [DisplayName("Country Country Name"), Expression("jCountry.[CountryName]"), QuickFilter, QuickSearch]
        public String CountryCountryName
        {
            get { return Fields.CountryCountryName[this]; }
            set { Fields.CountryCountryName[this] = value; }
        }

        [DisplayName("Driver Name"), Size(200), LookupInclude]
        public String DriverName
        {
            get { return Fields.DriverName[this]; }
            set { Fields.DriverName[this] = value; }
        }
        [DisplayName("Number"), Size(200), LookupInclude]
        public String Number
        {
            get { return Fields.Number[this]; }
            set { Fields.Number[this] = value; }
        }

        [DisplayName("ResidentID"), Size(200), LookupInclude]
        public String ResidentID
        {
            get { return Fields.ResidentID[this]; }
            set { Fields.ResidentID[this] = value; }
        }
        [DisplayName("SlNo"), NotMapped]
        public Int32? Slno
        {
            get { return Fields.Slno[this]; }
            set { Fields.Slno[this] = value; }
        }


        /*cd*/
        [Origin("cd"), MinSelectLevel(SelectLevel.List)]
        [DisplayName("Charge"),  ForeignKey("[dbo].[Charges]", "Id"), LeftJoin("jCharge"), TextualField("ChargeChargeName")]
        [LookupEditor(typeof(ChargesRow), InplaceAdd = true)]
        public Int32? ChargeId
        {
            get { return Fields.ChargeId[this]; }
            set { Fields.ChargeId[this] = value; }
        }
        [Origin("cd"), MinSelectLevel(SelectLevel.List)]
        [DisplayName("Description"), Size(500), QuickSearch, TextAreaEditor]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }
        [Origin("cd"), MinSelectLevel(SelectLevel.List)]
        [DisplayName("Rate"), Size(18), Scale(3)]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }
        [Origin("cd"), MinSelectLevel(SelectLevel.List)]
        [DisplayName("Qty"), Size(18), Scale(3)]
        public Decimal? Qty
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
        }
        [Origin("cd"), MinSelectLevel(SelectLevel.List)]
        [DisplayName("Total Amount"), Size(18), Scale(3),  ReadOnly(true)]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }
        [Origin("cd"), MinSelectLevel(SelectLevel.List)]
        [DisplayName("Currency"),  ForeignKey("[dbo].[Currencies]", "Id"), LeftJoin("jCurrency"), TextualField("CurrencyCurrencyCode")]
        [LookupEditor(typeof(CurrenciesRow), InplaceAdd = true)]
        public Int32? CurrencyId
        {
            get { return Fields.CurrencyId[this]; }
            set { Fields.CurrencyId[this] = value; }
        }
        [Origin("cd"), MinSelectLevel(SelectLevel.List)]
        [DisplayName("Exchange Rate"), Size(18), Scale(3)]
        public Decimal? ExchangeRate
        {
            get { return Fields.ExchangeRate[this]; }
            set { Fields.ExchangeRate[this] = value; }
        }
        [Origin("cd"), MinSelectLevel(SelectLevel.List)]
        [DisplayName("Total Amount(Local Currency)"), Size(18), Scale(3),  ReadOnly(true)]
        public Decimal? TotalAmountInLocalCurrency
        {
            get { return Fields.TotalAmountInLocalCurrency[this]; }
            set { Fields.TotalAmountInLocalCurrency[this] = value; }
        }
        [Origin("cd"), MinSelectLevel(SelectLevel.List)]
        [DisplayName("Date"), LookupInclude]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Supplier Amount"), Size(18), Scale(3)]
        public Decimal? SupplierAmount
        {
            get { return Fields.SupplierAmount[this]; }
            set { Fields.SupplierAmount[this] = value; }
        }
        [DisplayName("Supplier"), ForeignKey("[dbo].[Supplier]", "Id"), LeftJoin("jSupplier")]
        [LookupEditor(typeof(SupplierRow), InplaceAdd = true)]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }
        [DisplayName("Driver Km From"), Column("DriverKMFrom"), Size(18), Scale(2)]
        public Decimal? DriverKmFrom
        {
            get { return Fields.DriverKmFrom[this]; }
            set { Fields.DriverKmFrom[this] = value; }
        }

        [DisplayName("Driver Km To"), Column("DriverKMTo"), Size(18), Scale(2)]
        public Decimal? DriverKmTo
        {
            get { return Fields.DriverKmTo[this]; }
            set { Fields.DriverKmTo[this] = value; }
        }

        [DisplayName("Gpskm From"), Column("GPSKMFrom"), Size(18), Scale(2)]
        public Decimal? GpskmFrom
        {
            get { return Fields.GpskmFrom[this]; }
            set { Fields.GpskmFrom[this] = value; }
        }

        [DisplayName("Gpskm To"), Column("GPSKMTo"), Size(18), Scale(2)]
        public Decimal? GpskmTo
        {
            get { return Fields.GpskmTo[this]; }
            set { Fields.GpskmTo[this] = value; }
        }


        [DisplayName("Type Of Pkg"), Size(200)]
        public String TypeOfPkg
        {
            get { return Fields.TypeOfPkg[this]; }
            set { Fields.TypeOfPkg[this] = value; }
        }

        [DisplayName("Total Volume"), Size(200)]
        public String TotalVolume
        {
            get { return Fields.TotalVolume[this]; }
            set { Fields.TotalVolume[this] = value; }
        }

        [DisplayName("Total Weight"), Size(200)]
        public String TotalWeight
        {
            get { return Fields.TotalWeight[this]; }
            set { Fields.TotalWeight[this] = value; }
        }

        [DisplayName("Total No Of Pkgs"), Size(200)]
        public String TotalNoOfPkgs
        {
            get { return Fields.TotalNoOfPkgs[this]; }
            set { Fields.TotalNoOfPkgs[this] = value; }
        }

        [LookupEditor(typeof(SpecificationsRow), Multiple = true, InplaceAdd = true), NotMapped]
        [LinkingSetRelation(typeof(ConsignmentVehicleSpecificationsRow), "ConsignmentVehicleDetailId", "SpecificationId")]
        [MinSelectLevel(SelectLevel.Always), QuickFilter(CssClass = "hidden-xs"), DisplayName("Vehicle Specifications")]
        public List<Int32> VehicleSpecifications
        {
            get { return Fields.VehicleSpecifications[this]; }
            set { Fields.VehicleSpecifications[this] = value; }
        }
        [DisplayName("Advance Amount"), Size(18), Scale(3)]
        public Decimal? SupplierAdvanceAmount
        {
            get { return Fields.SupplierAdvanceAmount[this]; }
            set { Fields.SupplierAdvanceAmount[this] = value; }
        }
        [DisplayName("Payment Type"), QuickSearch, QuickFilter]
        public AccountTypes? PaymentType
        {
            get { return (AccountTypes?)Fields.PaymentType[this]; }
            set { Fields.PaymentType[this] = (int?)value; }
        }

        [DisplayName("Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jAccount"), TextualField("AccountAccountName")]
        [LookupEditor(typeof(AccountsRow), CascadeField = "Type", CascadeFrom = "PaymentType")]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }

        [DisplayName("Payments"), MasterDetailRelation(foreignKey: "ConsignmentVehicleDetailsId"), NotMapped, AuditLog]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.PaymentRow> Payments
        {
            get { return Fields.Payments[this]; }
            set { Fields.Payments[this] = value; }
        }
        [DisplayName("Vehicle Charges"), MasterDetailRelation(foreignKey: "ConsignmentVehicleDetailId"), NotMapped]
        [MinSelectLevel(SelectLevel.List)]
        public List<ConsignmentChargesRow> VehicleCharges
        {
            get { return Fields.VehicleCharges[this]; }
            set { Fields.VehicleCharges[this] = value; }
        }

        [Origin("cd"), MinSelectLevel(SelectLevel.List)]
        [DisplayName("TaxPer"), Size(18), Scale(2)]
        public Decimal? TaxPer
        {
            get { return Fields.TaxPer[this]; }
            set { Fields.TaxPer[this] = value; }
        }
        [Origin("cd"), MinSelectLevel(SelectLevel.List)]
        [DisplayName("Tax Amount"), Size(18), Scale(3), ReadOnly(true)]
        public Decimal? TaxAmount
        {
            get { return Fields.TaxAmount[this]; }
            set { Fields.TaxAmount[this] = value; }
        }
        [Origin("cd"), MinSelectLevel(SelectLevel.List)]
        [DisplayName("Taxable Amount"), ReadOnly(true), Size(18), Scale(3)]
        public Decimal? TaxableAmount
        {
            get { return Fields.TaxableAmount[this]; }
            set { Fields.TaxableAmount[this] = value; }
        }

        [Origin("cd"), MinSelectLevel(SelectLevel.List)]
        [DisplayName("Amount"), Size(18), Scale(3), ReadOnly(true)]
        public Decimal? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
        }

        [Origin("cd"), MinSelectLevel(SelectLevel.List)]
        [DisplayName("Dis Amount"), Size(18), Scale(3)]
        public Decimal? DisAmount
        {
            get { return Fields.DisAmount[this]; }
            set { Fields.DisAmount[this] = value; }
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ConsignmentId;
            public Int32Field VehicleId;
            public StringField Type;
            public StringField VehicleNumber;
            public Int32Field Driver;
            public DecimalField DriverAdvance;
            public Int32Field ShippingAreaFrom;
            public Int32Field ShippingAreaTo;
            public DateTimeField StartDate;
            public DateTimeField EndDate;

            public DecimalField DriverKmFrom;
            public DecimalField DriverKmTo;
            public DecimalField GpskmFrom;
            public DecimalField GpskmTo;

            public StringField TypeOfPkg;
            public StringField TotalVolume;
            public StringField TotalWeight;
            public StringField TotalNoOfPkgs;


            public Int32Field ChargeId;
            public StringField Description;
            public DecimalField Amount;
            public DecimalField Qty;
            public DecimalField TotalAmount;
            public Int32Field CurrencyId;
            public DecimalField ExchangeRate;
            public DecimalField TotalAmountInLocalCurrency;
            public DateTimeField Date;

            public DecimalField TaxPer;
            public DecimalField TaxAmount;
            public DecimalField TaxableAmount;

            public DecimalField Total;
            public DecimalField DisAmount;


            public ListField<Int32> VehicleSpecifications;



            public Int32Field Slno;

            public Int32Field TypeOfVehicle;



            public DecimalField SupplierAmount;
            public Int32Field SupplierId;
            public DecimalField SupplierAdvanceAmount;
            public Int32Field PaymentType;
            public Int32Field AccountId;
            public Int32Field DriverAdvancePaymentType;
            public Int32Field DriverAdvanceAccount;

            public RowListField<Accounts.Entities.PaymentRow> Payments;

            public RowListField<ConsignmentChargesRow> VehicleCharges;

            public StringField DriverName;
            public StringField Number;
            public StringField ResidentID;
            public Int32Field CountryId;

            public StringField CountryCountryCode;
            public StringField CountryCountryName;

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

            public StringField DriverEmployeeCode;
            public StringField DriverEmployeeName;
            public StringField DriverAddress;
            public Int32Field DriverCountryId;
            public Int32Field DriverEmployeeStatus;
            public Int32Field DriverEmployeeTypeId;
            public Int32Field DriverDesignationId;
            public StringField DriverResidentId;
            public DateTimeField DriverRidExpiryDate;
            public StringField DriverPassportNumber;
            public DateTimeField DriverPassportExpiryDate;
            public StringField DriverMobileNumber;
            public DecimalField DriverBasicSalary;
            public DecimalField DriverAllowance;

            public StringField ShippingAreaFromAreaName;
            public StringField ShippingAreaFromDescription;

            public StringField ShippingAreaToAreaName;
            public StringField ShippingAreaToDescription;



        }
    }
}
