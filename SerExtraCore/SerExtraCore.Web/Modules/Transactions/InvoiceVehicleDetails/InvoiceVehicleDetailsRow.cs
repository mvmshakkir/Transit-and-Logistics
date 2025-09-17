
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

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[InvoiceVehicleDetails]")]
    [DisplayName("Invoice Vehicle Details"), InstanceName("Invoice Vehicle Details")]
    [ReadPermission("Transactions:Invoice")]
    [ModifyPermission("Transactions:Invoice")]


    [LeftJoin("cd", "InvoiceCharges", "cd.[InvoiceVehicleDetailId] = t0.[ID]", RowType = typeof(InvoiceChargesRow), TitlePrefix = "")]
    [UpdatableExtension("cd", typeof(InvoiceChargesRow), CascadeDelete = true, OtherKey = "InvoiceVehicleDetailId")]
    [LookupScript(Permission = "*", Expiration = -1)]
    public sealed class InvoiceVehicleDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }
        

            [DisplayName("ConsignmentId"), NotMapped]
        public Int32? ConsignmentId
        {
            get
            {
                return Fields.ConsignmentId[this];
            }

            set { Fields.ConsignmentId[this] = value; }
        }







        [DisplayName("Invoice"), NotNull, ForeignKey("[dbo].[Invoice]", "Id"), LeftJoin("jInvoice"), TextualField("InvoiceInvoiceNo")]
        public Int32? InvoiceId
        {
            get { return Fields.InvoiceId[this]; }
            set { Fields.InvoiceId[this] = value; }
        }

        [DisplayName("Vehicle"), NotNull, ForeignKey("[dbo].[Vehicles]", "Id"), LeftJoin("jVehicle"), TextualField("VehicleVehicleNumber")]
        [LookupEditor(typeof(VehiclesRow), InplaceAdd = true,CascadeField = "TypeOfVehicle",CascadeFrom = "TypeOfVehicle")]
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

        [DisplayName("Invoice Invoice Date"), Expression("jInvoice.[InvoiceDate]")]
        public DateTime? InvoiceInvoiceDate
        {
            get { return Fields.InvoiceInvoiceDate[this]; }
            set { Fields.InvoiceInvoiceDate[this] = value; }
        }

        [DisplayName("Invoice Invoice No"), Expression("jInvoice.[InvoiceNO]"),MinSelectLevel(SelectLevel.List),LookupInclude]
        public String InvoiceInvoiceNo
        {
            get { return Fields.InvoiceInvoiceNo[this]; }
            set { Fields.InvoiceInvoiceNo[this] = value; }
        }

        [DisplayName("Invoice Consignment Id"), Expression("jInvoice.[ConsignmentId]")]
        public Int32? InvoiceConsignmentId
        {
            get { return Fields.InvoiceConsignmentId[this]; }
            set { Fields.InvoiceConsignmentId[this] = value; }
        }

        [DisplayName("Invoice Consignment Date"), Expression("jInvoice.[ConsignmentDate]")]
        public DateTime? InvoiceConsignmentDate
        {
            get { return Fields.InvoiceConsignmentDate[this]; }
            set { Fields.InvoiceConsignmentDate[this] = value; }
        }

        [DisplayName("Invoice Way Bill No"), Expression("jInvoice.[WayBillNo]")]
        public String InvoiceWayBillNo
        {
            get { return Fields.InvoiceWayBillNo[this]; }
            set { Fields.InvoiceWayBillNo[this] = value; }
        }

        [DisplayName("Invoice Job No"), Expression("jInvoice.[JobNo]")]
        public String InvoiceJobNo
        {
            get { return Fields.InvoiceJobNo[this]; }
            set { Fields.InvoiceJobNo[this] = value; }
        }

        [DisplayName("Invoice Client Job No"), Expression("jInvoice.[ClientJobNo]")]
        public String InvoiceClientJobNo
        {
            get { return Fields.InvoiceClientJobNo[this]; }
            set { Fields.InvoiceClientJobNo[this] = value; }
        }

        [DisplayName("Invoice Shipper Id"), Expression("jInvoice.[ShipperId]")]
        public Int32? InvoiceShipperId
        {
            get { return Fields.InvoiceShipperId[this]; }
            set { Fields.InvoiceShipperId[this] = value; }
        }

        [DisplayName("Invoice Consignee Id"), Expression("jInvoice.[ConsigneeId]")]
        public Int32? InvoiceConsigneeId
        {
            get { return Fields.InvoiceConsigneeId[this]; }
            set { Fields.InvoiceConsigneeId[this] = value; }
        }

        [DisplayName("Invoice Vehicle Id"), Expression("jInvoice.[VehicleId]")]
        public Int32? InvoiceVehicleId
        {
            get { return Fields.InvoiceVehicleId[this]; }
            set { Fields.InvoiceVehicleId[this] = value; }
        }

        [DisplayName("Invoice Type"), Expression("jInvoice.[Type]")]
        public String InvoiceType
        {
            get { return Fields.InvoiceType[this]; }
            set { Fields.InvoiceType[this] = value; }
        }

        [DisplayName("Invoice Vehicle Number"), Expression("jInvoice.[VehicleNumber]")]
        public String InvoiceVehicleNumber
        {
            get { return Fields.InvoiceVehicleNumber[this]; }
            set { Fields.InvoiceVehicleNumber[this] = value; }
        }

        [DisplayName("Invoice Driver"), Expression("jInvoice.[Driver]")]
        public Int32? InvoiceDriver
        {
            get { return Fields.InvoiceDriver[this]; }
            set { Fields.InvoiceDriver[this] = value; }
        }

        [DisplayName("Invoice Payment"), Expression("jInvoice.[Payment]")]
        public Int32? InvoicePayment
        {
            get { return Fields.InvoicePayment[this]; }
            set { Fields.InvoicePayment[this] = value; }
        }

        [DisplayName("Invoice Type Of Pkg"), Expression("jInvoice.[TypeOfPkg]")]
        public String InvoiceTypeOfPkg
        {
            get { return Fields.InvoiceTypeOfPkg[this]; }
            set { Fields.InvoiceTypeOfPkg[this] = value; }
        }

        [DisplayName("Invoice Total Volume"), Expression("jInvoice.[TotalVolume]")]
        public String InvoiceTotalVolume
        {
            get { return Fields.InvoiceTotalVolume[this]; }
            set { Fields.InvoiceTotalVolume[this] = value; }
        }

        [DisplayName("Invoice Total Weight"), Expression("jInvoice.[TotalWeight]")]
        public String InvoiceTotalWeight
        {
            get { return Fields.InvoiceTotalWeight[this]; }
            set { Fields.InvoiceTotalWeight[this] = value; }
        }

        [DisplayName("Invoice Total No Of Pkgs"), Expression("jInvoice.[TotalNoOfPkgs]")]
        public String InvoiceTotalNoOfPkgs
        {
            get { return Fields.InvoiceTotalNoOfPkgs[this]; }
            set { Fields.InvoiceTotalNoOfPkgs[this] = value; }
        }

        [DisplayName("Invoice Shipping Area From"), Expression("jInvoice.[ShippingAreaFrom]")]
        public Int32? InvoiceShippingAreaFrom
        {
            get { return Fields.InvoiceShippingAreaFrom[this]; }
            set { Fields.InvoiceShippingAreaFrom[this] = value; }
        }

        [DisplayName("Invoice Shipping Area To"), Expression("jInvoice.[ShippingAreaTo]")]
        public Int32? InvoiceShippingAreaTo
        {
            get { return Fields.InvoiceShippingAreaTo[this]; }
            set { Fields.InvoiceShippingAreaTo[this] = value; }
        }

        [DisplayName("Invoice Total Amount"), Expression("jInvoice.[TotalAmount]")]
        public Decimal? InvoiceTotalAmount
        {
            get { return Fields.InvoiceTotalAmount[this]; }
            set { Fields.InvoiceTotalAmount[this] = value; }
        }

        [DisplayName("Invoice Driver Km From"), Expression("jInvoice.[DriverKMFrom]")]
        public Decimal? InvoiceDriverKmFrom
        {
            get { return Fields.InvoiceDriverKmFrom[this]; }
            set { Fields.InvoiceDriverKmFrom[this] = value; }
        }

        [DisplayName("Invoice Driver Km To"), Expression("jInvoice.[DriverKMTo]")]
        public Decimal? InvoiceDriverKmTo
        {
            get { return Fields.InvoiceDriverKmTo[this]; }
            set { Fields.InvoiceDriverKmTo[this] = value; }
        }

        [DisplayName("Invoice Gpskm From"), Expression("jInvoice.[GPSKMFrom]")]
        public Decimal? InvoiceGpskmFrom
        {
            get { return Fields.InvoiceGpskmFrom[this]; }
            set { Fields.InvoiceGpskmFrom[this] = value; }
        }

        [DisplayName("Invoice Gpskm To"), Expression("jInvoice.[GPSKMTo]")]
        public Decimal? InvoiceGpskmTo
        {
            get { return Fields.InvoiceGpskmTo[this]; }
            set { Fields.InvoiceGpskmTo[this] = value; }
        }

        [DisplayName("Invoice Status"), Expression("jInvoice.[Status]")]
        public Int32? InvoiceStatus
        {
            get { return Fields.InvoiceStatus[this]; }
            set { Fields.InvoiceStatus[this] = value; }
        }

        [DisplayName("Invoice Status User"), Expression("jInvoice.[StatusUser]")]
        public Int32? InvoiceStatusUser
        {
            get { return Fields.InvoiceStatusUser[this]; }
            set { Fields.InvoiceStatusUser[this] = value; }
        }

        [DisplayName("Invoice Payment Status"), Expression("jInvoice.[PaymentStatus]")]
        public Int32? InvoicePaymentStatus
        {
            get { return Fields.InvoicePaymentStatus[this]; }
            set { Fields.InvoicePaymentStatus[this] = value; }
        }

        [DisplayName("Invoice Payment Mode"), Expression("jInvoice.[PaymentMode]")]
        public Int32? InvoicePaymentMode
        {
            get { return Fields.InvoicePaymentMode[this]; }
            set { Fields.InvoicePaymentMode[this] = value; }
        }

        [DisplayName("Invoice Billing"), Expression("jInvoice.[Billing]")]
        public Int32? InvoiceBilling
        {
            get { return Fields.InvoiceBilling[this]; }
            set { Fields.InvoiceBilling[this] = value; }
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

        [DisplayName("Driver"), Expression("jDriver.[EmployeeName]"), MinSelectLevel(SelectLevel.List)]
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

        [DisplayName("Shipping Area From"), Expression("jShippingAreaFrom.[AreaName]"),MinSelectLevel(SelectLevel.List)]
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
            get { return Fields.FullName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InvoiceVehicleDetailsRow()
            : base(Fields)
        {
        }
        [DisplayName("Type Of Vehicle"), NotNull, QuickFilter, QuickSearch]
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
        /* cd */
        [Origin("cd"), MinSelectLevel(SelectLevel.List)]
        [DisplayName("Charge"), ForeignKey("[dbo].[Charges]", "Id"), LeftJoin("jCharge"), TextualField("ChargeChargeName")]
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
        [DisplayName("Total Amount"), Size(18), Scale(3), NotNull, ReadOnly(true)]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }
        [Origin("cd"), MinSelectLevel(SelectLevel.List)]
        [DisplayName("Currency"), NotNull, ForeignKey("[dbo].[Currencies]", "Id"), LeftJoin("jCurrency"), TextualField("CurrencyCurrencyCode")]
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
        [DisplayName("Total Amount(Local Currency)"), Size(18), Scale(3), NotNull, ReadOnly(true)]
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
        [DisplayName("Currency Code"), Expression("jCurrency.[CurrencyCode]"), LookupInclude, MinSelectLevel(SelectLevel.List)]
        public String CurrencyCurrencyCode
        {
            get { return Fields.CurrencyCurrencyCode[this]; }
            set { Fields.CurrencyCurrencyCode[this] = value; }
        }

        [DisplayName("Currency Currency Name"), Expression("jCurrency.[CurrencyName]")]
        public String CurrencyCurrencyName
        {
            get { return Fields.CurrencyCurrencyName[this]; }
            set { Fields.CurrencyCurrencyName[this] = value; }
        }
        [DisplayName("Supplier Amount"), Size(18), Scale(3), LookupInclude]
        public Decimal? SupplierAmount
        {
            get { return Fields.SupplierAmount[this]; }
            set { Fields.SupplierAmount[this] = value; }
        }
        [DisplayName("Supplier"), ForeignKey("[dbo].[Supplier]", "Id"), LeftJoin("jSupplier")]
        [LookupEditor(typeof(SupplierRow), InplaceAdd = true), LookupInclude]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }
        [DisplayName("Supplier Payment Status"), QuickSearch, QuickFilter, LookupInclude]
        public PaymentStatus? SupplierPaymentStatus
        {
            get { return (PaymentStatus?)Fields.SupplierPaymentStatus[this]; }
            set { Fields.SupplierPaymentStatus[this] = (int?)value; }
        }
        [DisplayName("FullName"), QuickSearch,LookupInclude]
        [Expression("(select i.InvoiceNO+' ('+isnull(CONVERT(VARCHAR(10), ivd.StartDate, 101),'')+'-'+isnull(CONVERT(VARCHAR(10), ivd.EndDate, 101),'')+')' as FullName from InvoiceVehicleDetails ivd inner join Invoice i on i.Id=ivd.InvoiceId where ivd.Id=T0.[Id])")]
        [Expression("(select i.InvoiceNO+' ('+isnull(CONVERT(VARCHAR(10), ivd.StartDate, 101),'')+'-'+isnull(CONVERT(VARCHAR(10), ivd.EndDate, 101),'')+')' as FullName from InvoiceVehicleDetails ivd inner join Invoice i on i.Id=ivd.InvoiceId where ivd.Id=T0.[Id])", Dialect = "Sqlite")]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
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
        [LinkingSetRelation(typeof(InvoiceVehicleSpecificationsRow), "InvoiceVehicleDetailId", "SpecificationId")]
        [MinSelectLevel(SelectLevel.List), QuickFilter(CssClass = "hidden-xs"), DisplayName("Vehicle Specifications")]
        public List<Int32> VehicleSpecifications
        {
            get { return Fields.VehicleSpecifications[this]; }
            set { Fields.VehicleSpecifications[this] = value; }
        }
        [DisplayName("Advance Amount"), Size(18), Scale(3), LookupInclude]
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
        [DisplayName("ConsignmentVehicleDetails"), ForeignKey("[dbo].[ConsignmentVehicleDetails]", "Id"), LeftJoin("jConsignmentVehicleDetails")]
        public Int32? ConsignmentVehicleDetailsId
        {
            get { return Fields.ConsignmentVehicleDetailsId[this]; }
            set { Fields.ConsignmentVehicleDetailsId[this] = value; }
        }
        [DisplayName("Vehicle Charges"), MasterDetailRelation(foreignKey: "InvoiceChargeVehicleDetailId"), NotMapped]
        [MinSelectLevel(SelectLevel.List)]
        public List<InvoiceChargesRow> VehicleCharges
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
        [DisplayName("Amount"), Size(18), Scale(3), ReadOnly(true), NotNull]
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
            public Int32Field InvoiceId;
            public Int32Field VehicleId;
            public StringField Type;
            public StringField VehicleNumber;
            public Int32Field Driver;
            public Int32Field ShippingAreaFrom;
            public Int32Field ShippingAreaTo;
            public DateTimeField StartDate;
            public DateTimeField EndDate;

            public Int32Field Slno;

            public StringField FullName;

            public DecimalField DriverKmFrom;
            public DecimalField DriverKmTo;
            public DecimalField GpskmFrom;
            public DecimalField GpskmTo;

            public DecimalField Total;
            public DecimalField DisAmount;


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


            public Int32Field TypeOfVehicle;


            public DecimalField SupplierAmount;
            public Int32Field SupplierId;
            public DecimalField SupplierAdvanceAmount;
            public Int32Field PaymentType;
            public Int32Field AccountId;
            public Int32Field SupplierPaymentStatus;
            public Int32Field ConsignmentVehicleDetailsId;

            public StringField DriverName;
            public StringField Number;
            public StringField ResidentID;
            public Int32Field CountryId;

            public StringField CountryCountryCode;
            public StringField CountryCountryName;


            public ListField<Int32> VehicleSpecifications;

            public RowListField<InvoiceChargesRow> VehicleCharges;

            public DateTimeField InvoiceInvoiceDate;
            public StringField InvoiceInvoiceNo;
            public Int32Field InvoiceConsignmentId;
            public DateTimeField InvoiceConsignmentDate;
            public StringField InvoiceWayBillNo;
            public StringField InvoiceJobNo;
            public StringField InvoiceClientJobNo;
            public Int32Field InvoiceShipperId;
            public Int32Field InvoiceConsigneeId;
            public Int32Field InvoiceVehicleId;
            public StringField InvoiceType;
            public StringField InvoiceVehicleNumber;
            public Int32Field InvoiceDriver;
            public Int32Field InvoicePayment;
            public StringField InvoiceTypeOfPkg;
            public StringField InvoiceTotalVolume;
            public StringField InvoiceTotalWeight;
            public StringField InvoiceTotalNoOfPkgs;
            public Int32Field InvoiceShippingAreaFrom;
            public Int32Field InvoiceShippingAreaTo;
            public DecimalField InvoiceTotalAmount;
            public DecimalField InvoiceDriverKmFrom;
            public DecimalField InvoiceDriverKmTo;
            public DecimalField InvoiceGpskmFrom;
            public DecimalField InvoiceGpskmTo;
            public Int32Field InvoiceStatus;
            public Int32Field InvoiceStatusUser;
            public Int32Field InvoicePaymentStatus;
            public Int32Field InvoicePaymentMode;
            public Int32Field InvoiceBilling;

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

            public StringField CurrencyCurrencyCode;
            public StringField CurrencyCurrencyName;




            public Int32Field ConsignmentId;
        }
    }
}
