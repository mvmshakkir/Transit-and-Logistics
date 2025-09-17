
namespace SerExtraCore.Transactions.Entities
{
    using SerExtraCore.Administration.Entities;
    using SerExtraCore.Master.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;
    using OfficeOpenXml.FormulaParsing.Excel.Functions.DateTime;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[Invoice]")]
    [DisplayName("Invoice"), InstanceName("Invoice")]
    [ReadPermission("Transactions:Invoice")]
    [ModifyPermission("Transactions:Invoice")]
    [LookupScript("Transactions.Invoice",Permission ="*", Expiration = -1)]
    public sealed class InvoiceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Invoice Date"), NotNull,  QuickSearch,QuickFilter]
        public DateTime? InvoiceDate
        {
            get { return Fields.InvoiceDate[this]; }
            set { Fields.InvoiceDate[this] = value; }
        }

        [DisplayName("Invoice No"), Column("InvoiceNO"), Size(255), NotNull, QuickSearch]
        public String InvoiceNo
        {
            get { return Fields.InvoiceNo[this]; }
            set { Fields.InvoiceNo[this] = value; }
        }

        [DisplayName("Consignment"), ForeignKey("[dbo].[Consignment]", "Id"), LeftJoin("jConsignment"), TextualField("ConsignmentConsigneeId")]
        [LookupEditor(typeof(ConsignmentRow), Multiple = true)]
        //public Int32? ConsignmentId
        public List<int> ConsignmentId
        {
            get { return Fields.ConsignmentId[this]; }
            set { Fields.ConsignmentId[this] = value; }
        }















        //[DisplayName("Consignee Customer Name"), Expression("jConsignment.[ConsigneeCustomerName]"), QuickFilter, QuickSearch]
        //public String ConsigneeCustomerName
        //{
        //    get { return Fields.ConsigneeCustomerName[this]; }
        //    set { Fields.ConsigneeCustomerName[this] = value; }
        //}

        [DisplayName("Consignment Date"), NotNull]
        public DateTime? ConsignmentDate
        {
            get { return Fields.ConsignmentDate[this]; }
            set { Fields.ConsignmentDate[this] = value; }
        }

        [DisplayName("Way Bill No"), Size(200)]
        public String WayBillNo
        {
            get { return Fields.WayBillNo[this]; }
            set { Fields.WayBillNo[this] = value; }
        }

        [DisplayName("Job No"), Size(200), NotNull]
        public String JobNo
        {
            get { return Fields.JobNo[this]; }
            set { Fields.JobNo[this] = value; }
        }

        [DisplayName("Client Job No"), Size(200)]
        public String ClientJobNo
        {
            get { return Fields.ClientJobNo[this]; }
            set { Fields.ClientJobNo[this] = value; }
        }

        [DisplayName("Consigner"), NotNull, ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jShipper"), TextualField("ShipperCustomerName")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = true), LookupInclude]
        public Int32? ShipperId
        {
            get { return Fields.ShipperId[this]; }
            set { Fields.ShipperId[this] = value; }
        }

        [DisplayName("Consignee"), NotNull, ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jConsignee"), TextualField("ConsigneeCustomerName")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = true), LookupInclude]
        public Int32? ConsigneeId
        {
            get { return Fields.ConsigneeId[this]; }
            set { Fields.ConsigneeId[this] = value; }
        }

        [DisplayName("Vehicle"), ForeignKey("[dbo].[Vehicles]", "Id"), LeftJoin("jVehicle"), TextualField("VehicleVehicleNumber")]
        [LookupEditor(typeof(VehiclesRow), InplaceAdd = true)]
        public Int32? VehicleId
        {
            get { return Fields.VehicleId[this]; }
            set { Fields.VehicleId[this] = value; }
        }

        [DisplayName("Type"), Size(500),QuickSearch]
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

        [DisplayName("Driver"), ForeignKey("[dbo].[EmployeeMaster]", "Id"), LeftJoin("jDriver"), TextualField("DriverEmployeeName")]
        [LookupEditor(typeof(EmployeeMasterRow), InplaceAdd = true)]
        public Int32? Driver
        {
            get { return Fields.Driver[this]; }
            set { Fields.Driver[this] = value; }
        }

        [DisplayName("Payment"), NotNull, LookupInclude,QuickFilter,QuickSearch]
        public ConsignmentPaymentTypes? Payment
        {
            get { return (ConsignmentPaymentTypes?)Fields.Payment[this]; }
            set { Fields.Payment[this] = (int?)value; }
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

        [DisplayName("Total Amount"), Size(18), Scale(3), NotNull,ReadOnly(true)]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
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

        [DisplayName("Status"), NotNull,DefaultValue(1), LookupInclude,QuickSearch,QuickFilter]
        public InvoiceStatus? Status
        {
            get { return (InvoiceStatus?)Fields.Status[this]; }
            set { Fields.Status[this] = (int?)value; }
        }

        [DisplayName("Status User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jStatusUser"), TextualField("StatusUserUsername"),ReadOnly(true)]
        [LookupEditor(typeof(UserRow))]
        public Int32? StatusUser
        {
            get { return Fields.StatusUser[this]; }
            set { Fields.StatusUser[this] = value; }
        }

        [DisplayName("Consignment Date"), Expression("jConsignment.[Date]"),LookupInclude]
        public DateTime? ConsignmentConsignmentDate
        {
            get { return Fields.ConsignmentConsignmentDate[this]; }
            set { Fields.ConsignmentConsignmentDate[this] = value; }
        }

        [DisplayName("Consignment Way Bill No"), Expression("jConsignment.[WayBillNo]")]
        public String ConsignmentWayBillNo
        {
            get { return Fields.ConsignmentWayBillNo[this]; }
            set { Fields.ConsignmentWayBillNo[this] = value; }
        }
       
        //[DisplayName("Consignment Job No"), Expression("jConsignment.[JobNo]"),QuickFilter,QuickSearch]
        [DisplayName("Consignment Job No"), Expression("CONCAT( jConsignment.[ConsigneeId])"), QuickFilter, QuickSearch]
        public String ConsignmentJobNo
        {
            get { return Fields.ConsignmentJobNo[this]; }
            set { Fields.ConsignmentJobNo[this] = value; }
        }

        [DisplayName("Consignment Client Job No"), Expression("jConsignment.[ClientJobNo]"),QuickSearch]
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

        [DisplayName("Shipper Customer Code"), Expression("jShipper.[CustomerCode]")]
        public String ShipperCustomerCode
        {
            get { return Fields.ShipperCustomerCode[this]; }
            set { Fields.ShipperCustomerCode[this] = value; }
        }

        [DisplayName("Consigner"), Expression("jShipper.[CustomerName]"),QuickSearch,QuickFilter]
        public String ShipperCustomerName
        {
            get { return Fields.ShipperCustomerName[this]; }
            set { Fields.ShipperCustomerName[this] = value; }
        }

        [DisplayName("Shipper Address"), Expression("jShipper.[Address]")]
        public String ShipperAddress
        {
            get { return Fields.ShipperAddress[this]; }
            set { Fields.ShipperAddress[this] = value; }
        }

        [DisplayName("Shipper Place"), Expression("jShipper.[Place]")]
        public String ShipperPlace
        {
            get { return Fields.ShipperPlace[this]; }
            set { Fields.ShipperPlace[this] = value; }
        }

        [DisplayName("Shipper Telephone"), Expression("jShipper.[Telephone]")]
        public String ShipperTelephone
        {
            get { return Fields.ShipperTelephone[this]; }
            set { Fields.ShipperTelephone[this] = value; }
        }

        [DisplayName("Shipper Email"), Expression("jShipper.[Email]")]
        public String ShipperEmail
        {
            get { return Fields.ShipperEmail[this]; }
            set { Fields.ShipperEmail[this] = value; }
        }

        [DisplayName("Shipper Contact Person"), Expression("jShipper.[ContactPerson]")]
        public String ShipperContactPerson
        {
            get { return Fields.ShipperContactPerson[this]; }
            set { Fields.ShipperContactPerson[this] = value; }
        }

        [DisplayName("Shipper Mobile"), Expression("jShipper.[Mobile]")]
        public String ShipperMobile
        {
            get { return Fields.ShipperMobile[this]; }
            set { Fields.ShipperMobile[this] = value; }
        }

        [DisplayName("Shipper Creation Date"), Expression("jShipper.[CreationDate]")]
        public DateTime? ShipperCreationDate
        {
            get { return Fields.ShipperCreationDate[this]; }
            set { Fields.ShipperCreationDate[this] = value; }
        }

        [DisplayName("Shipper Description"), Expression("jShipper.[Description]")]
        public String ShipperDescription
        {
            get { return Fields.ShipperDescription[this]; }
            set { Fields.ShipperDescription[this] = value; }
        }

        [DisplayName("Consignee Customer Code"), Expression("jConsignee.[CustomerCode]")]
        public String ConsigneeCustomerCode
        {
            get { return Fields.ConsigneeCustomerCode[this]; }
            set { Fields.ConsigneeCustomerCode[this] = value; }
        }

        [DisplayName("Consignee Name"), Expression("jConsignee.[CustomerName]"),QuickFilter,QuickSearch]
        public String ConsigneeCustomerName
        {
            get { return Fields.ConsigneeCustomerName[this]; }
            set { Fields.ConsigneeCustomerName[this] = value; }
        }

        [DisplayName("Consignee Address"), Expression("jConsignee.[Address]")]
        public String ConsigneeAddress
        {
            get { return Fields.ConsigneeAddress[this]; }
            set { Fields.ConsigneeAddress[this] = value; }
        }

        [DisplayName("Consignee Place"), Expression("jConsignee.[Place]")]
        public String ConsigneePlace
        {
            get { return Fields.ConsigneePlace[this]; }
            set { Fields.ConsigneePlace[this] = value; }
        }

        [DisplayName("Consignee Telephone"), Expression("jConsignee.[Telephone]")]
        public String ConsigneeTelephone
        {
            get { return Fields.ConsigneeTelephone[this]; }
            set { Fields.ConsigneeTelephone[this] = value; }
        }

        [DisplayName("Consignee Email"), Expression("jConsignee.[Email]")]
        public String ConsigneeEmail
        {
            get { return Fields.ConsigneeEmail[this]; }
            set { Fields.ConsigneeEmail[this] = value; }
        }

        [DisplayName("Consignee Contact Person"), Expression("jConsignee.[ContactPerson]")]
        public String ConsigneeContactPerson
        {
            get { return Fields.ConsigneeContactPerson[this]; }
            set { Fields.ConsigneeContactPerson[this] = value; }
        }

        [DisplayName("Consignee Mobile"), Expression("jConsignee.[Mobile]")]
        public String ConsigneeMobile
        {
            get { return Fields.ConsigneeMobile[this]; }
            set { Fields.ConsigneeMobile[this] = value; }
        }

        [DisplayName("Consignee Creation Date"), Expression("jConsignee.[CreationDate]")]
        public DateTime? ConsigneeCreationDate
        {
            get { return Fields.ConsigneeCreationDate[this]; }
            set { Fields.ConsigneeCreationDate[this] = value; }
        }

        [DisplayName("Consignee Description"), Expression("jConsignee.[Description]")]
        public String ConsigneeDescription
        {
            get { return Fields.ConsigneeDescription[this]; }
            set { Fields.ConsigneeDescription[this] = value; }
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

        [DisplayName("Vehicle Number"), Expression("jVehicle.[VehicleNumber]"),QuickSearch,QuickFilter]
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

        [DisplayName("Driver Name"), Expression("jDriver.[EmployeeName]"),QuickSearch,QuickFilter]
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

        [DisplayName("Shipping Area From"), Expression("jShippingAreaFrom.[AreaName]"),QuickSearch,QuickFilter]
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

        [DisplayName("Shipping Area To"), Expression("jShippingAreaTo.[AreaName]"),QuickFilter,QuickSearch]
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

        [DisplayName("Status User Username"), Expression("jStatusUser.[Username]")]
        public String StatusUserUsername
        {
            get { return Fields.StatusUserUsername[this]; }
            set { Fields.StatusUserUsername[this] = value; }
        }

        [DisplayName("Status User Display Name"), Expression("jStatusUser.[DisplayName]")]
        public String StatusUserDisplayName
        {
            get { return Fields.StatusUserDisplayName[this]; }
            set { Fields.StatusUserDisplayName[this] = value; }
        }

        [DisplayName("Status User Email"), Expression("jStatusUser.[Email]")]
        public String StatusUserEmail
        {
            get { return Fields.StatusUserEmail[this]; }
            set { Fields.StatusUserEmail[this] = value; }
        }

        [DisplayName("Status User Source"), Expression("jStatusUser.[Source]")]
        public String StatusUserSource
        {
            get { return Fields.StatusUserSource[this]; }
            set { Fields.StatusUserSource[this] = value; }
        }

        [DisplayName("Status User Password Hash"), Expression("jStatusUser.[PasswordHash]")]
        public String StatusUserPasswordHash
        {
            get { return Fields.StatusUserPasswordHash[this]; }
            set { Fields.StatusUserPasswordHash[this] = value; }
        }

        [DisplayName("Status User Password Salt"), Expression("jStatusUser.[PasswordSalt]")]
        public String StatusUserPasswordSalt
        {
            get { return Fields.StatusUserPasswordSalt[this]; }
            set { Fields.StatusUserPasswordSalt[this] = value; }
        }

        [DisplayName("Status User Last Directory Update"), Expression("jStatusUser.[LastDirectoryUpdate]")]
        public DateTime? StatusUserLastDirectoryUpdate
        {
            get { return Fields.StatusUserLastDirectoryUpdate[this]; }
            set { Fields.StatusUserLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Status User User Image"), Expression("jStatusUser.[UserImage]")]
        public String StatusUserUserImage
        {
            get { return Fields.StatusUserUserImage[this]; }
            set { Fields.StatusUserUserImage[this] = value; }
        }

        [DisplayName("Status User Insert Date"), Expression("jStatusUser.[InsertDate]")]
        public DateTime? StatusUserInsertDate
        {
            get { return Fields.StatusUserInsertDate[this]; }
            set { Fields.StatusUserInsertDate[this] = value; }
        }

        [DisplayName("Status User Insert User Id"), Expression("jStatusUser.[InsertUserId]")]
        public Int32? StatusUserInsertUserId
        {
            get { return Fields.StatusUserInsertUserId[this]; }
            set { Fields.StatusUserInsertUserId[this] = value; }
        }

        [DisplayName("Status User Update Date"), Expression("jStatusUser.[UpdateDate]")]
        public DateTime? StatusUserUpdateDate
        {
            get { return Fields.StatusUserUpdateDate[this]; }
            set { Fields.StatusUserUpdateDate[this] = value; }
        }

        [DisplayName("Status User Update User Id"), Expression("jStatusUser.[UpdateUserId]")]
        public Int32? StatusUserUpdateUserId
        {
            get { return Fields.StatusUserUpdateUserId[this]; }
            set { Fields.StatusUserUpdateUserId[this] = value; }
        }

        [DisplayName("Status User Is Active"), Expression("jStatusUser.[IsActive]")]
        public Int16? StatusUserIsActive
        {
            get { return Fields.StatusUserIsActive[this]; }
            set { Fields.StatusUserIsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.InvoiceNo; }
        }
        [DisplayName("Charge Detail"), MasterDetailRelation(foreignKey: "InvoiceId"), NotMapped]
        public List<InvoiceChargesRow> ChargeDetailList
        {
            get { return Fields.ChargeDetailList[this]; }
            set { Fields.ChargeDetailList[this] = value; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public InvoiceRow()
            : base(Fields)
        {
        }
        [DisplayName("Payment Status"), NotNull, DefaultValue(1),QuickSearch,QuickFilter, LookupInclude]
        public PaymentStatus? PaymentStatus
        {
            get { return (PaymentStatus?)Fields.PaymentStatus[this]; }
            set { Fields.PaymentStatus[this] = (int?)value; }
        }
        [DisplayName("Payment Mode"), NotNull, LookupInclude, QuickFilter, QuickSearch]
        public ConsignmentPaymentMode? PaymentMode
        {
            get { return (ConsignmentPaymentMode?)Fields.PaymentMode[this]; }
            set { Fields.PaymentMode[this] = (int?)value; }
        }
        [DisplayName("Billing"), NotNull, ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jBilling"), TextualField("BillingCustomerName")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = true),LookupInclude]
        public Int32? Billing
        {
            get { return Fields.Billing[this]; }
            set { Fields.Billing[this] = value; }
        }

        [DisplayName("Billing Customer Code"), Expression("jBilling.[CustomerCode]")]
        public String BillingCustomerCode
        {
            get { return Fields.BillingCustomerCode[this]; }
            set { Fields.BillingCustomerCode[this] = value; }
        }

        [DisplayName("Billing Customer Name"), Expression("jBilling.[CustomerName]"), QuickSearch, QuickFilter]
        public String BillingCustomerName
        {
            get { return Fields.BillingCustomerName[this]; }
            set { Fields.ShipperCustomerName[this] = value; }
        }
        [DisplayName("Invoice Vehicle Details"), MasterDetailRelation(foreignKey: "InvoiceId"),NotMapped]
        public List<InvoiceVehicleDetailsRow> InvoiceVehicleDetails
        {
            get { return Fields.InvoiceVehicleDetails[this]; }
            set { Fields.InvoiceVehicleDetails[this] = value; }
        }

        [DisplayName("Trip Start Date"), DateTimeEditor]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("Trip End Date"), DateTimeEditor]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }

        [DisplayName("Invoice Trip Dates"), MasterDetailRelation(foreignKey: "InvoiceId"), NotMapped]
        public List<InvoiceTripDatesRow> InvoiceTripDates
        {
            get { return Fields.InvoiceTripDates[this]; }
            set { Fields.InvoiceTripDates[this] = value; }
        }
        [DisplayName("Supplier Amount"), Size(18), Scale(3),LookupInclude]
        public Decimal? SupplierAmount
        {
            get { return Fields.SupplierAmount[this]; }
            set { Fields.SupplierAmount[this] = value; }
        }
        [DisplayName("Supplier"), ForeignKey("[dbo].[Supplier]", "Id"), LeftJoin("jSupplier")]
        [LookupEditor(typeof(SupplierRow), InplaceAdd = true),LookupInclude]
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
        [DisplayName("SlNo"), NotMapped]
        public Int32? Slno
        {
            get { return Fields.Slno[this]; }
            set { Fields.Slno[this] = value; }
        }
        [DisplayName("Invoice Dues"), MasterDetailRelation(foreignKey: "InvoiceId"), NotMapped]
        public List<InvoiceDueDetailsRow> InvoiceDues
        {
            get { return Fields.InvoiceDues[this]; }
            set { Fields.InvoiceDues[this] = value; }
        }
        [DisplayName("Advance Amount"), Size(18), Scale(3), ReadOnly(true)]
        public Decimal? AdvanceAmount
        {
            get { return Fields.AdvanceAmount[this]; }
            set { Fields.AdvanceAmount[this] = value; }
        }
       
        [DisplayName("Balance Amount"), Size(18), Scale(3), NotNull, ReadOnly(true)]
        public Decimal? BalanceAmount
        {
            get { return Fields.BalanceAmount[this]; }
            set { Fields.BalanceAmount[this] = value; }
        }
        [DisplayName("From Locations"), NotMapped, QuickFilter]
        public String FromLocations
        {
            get { return Fields.FromLocations[this]; }
            set { Fields.FromLocations[this] = value; }
        }
        [DisplayName("To Locations"), NotMapped, QuickFilter]
        public String ToLocations
        {
            get { return Fields.ToLocations[this]; }
            set { Fields.ToLocations[this] = value; }
        }

        [DisplayName("Remarks"), Size(500), TextAreaEditor]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }
        [DisplayName("Receipts"), MasterDetailRelation(foreignKey: "InvoiceId"), NotMapped, AuditLog]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.ReceiptRow> Receipts
        {
            get { return Fields.Receipts[this]; }
            set { Fields.Receipts[this] = value; }
        }
        [DisplayName("Clearance"), ForeignKey("[dbo].[Clearance]", "Id"), LeftJoin("jClearance")]
        [LookupEditor(typeof(ClearanceRow))]
        public Int32? ClearanceId
        {
            get { return Fields.ClearanceId[this]; }
            set { Fields.ClearanceId[this] = value; }
        }
        [DisplayName("CGST %") ]
        public Decimal? Cgst
        {
            get { return Fields.Cgst[this]; }
            set { Fields.Cgst[this] = value; }
        }
        [DisplayName("SGST %")]
        public Decimal? Sgst
        {
            get { return Fields.Sgst[this]; }
            set { Fields.Sgst[this] = value; }

        }
        [DisplayName("IGST %")]
        public Decimal? Igst
        {
            get { return Fields.Igst[this]; }
            set { Fields.Igst[this] = value; }
        }
        [DisplayName("Amount"), ReadOnly(true)]
        public Decimal? CgstAmt
        {
            get { return Fields.CgstAmt[this]; }
            set { Fields.CgstAmt[this] = value; }
        }
        [DisplayName("Amount"), ReadOnly(true)]
        public Decimal? SgstAmt
        {
            get { return Fields.SgstAmt[this]; }
            set { Fields.SgstAmt[this] = value; }

        }
        [DisplayName("Amount"), ReadOnly(true)]
        public Decimal? IgstAmt
        {
            get { return Fields.IgstAmt[this]; }
            set { Fields.IgstAmt[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField InvoiceDate;
            public StringField InvoiceNo;
            // public Int32Field ConsignmentId;
            public ListField<int> ConsignmentId;
            public DateTimeField ConsignmentDate;
            public StringField WayBillNo;
            public StringField JobNo;
            public StringField ClientJobNo;
            public Int32Field ShipperId;
            public Int32Field ConsigneeId;
            public Int32Field VehicleId;
            public StringField Type;
            public StringField VehicleNumber;
            public Int32Field Driver;
            public Int32Field Payment;
            public StringField TypeOfPkg;
            public StringField TotalVolume;
            public StringField TotalWeight;
            public StringField TotalNoOfPkgs;
            public Int32Field ShippingAreaFrom;
            public Int32Field ShippingAreaTo;
            public DecimalField TotalAmount;
            public DecimalField DriverKmFrom;
            public DecimalField DriverKmTo;
            public DecimalField GpskmFrom;
            public DecimalField GpskmTo;
            public Int32Field Status;
            public Int32Field StatusUser;

            public Int32Field Slno;

            public Int32Field PaymentStatus;

            public Int32Field Billing;

            public StringField BillingCustomerCode;
            public StringField BillingCustomerName;


            public StringField FromLocations;
            public StringField ToLocations;

            public RowListField<InvoiceChargesRow> ChargeDetailList;
            public Int32Field PaymentMode;

            public RowListField<InvoiceDueDetailsRow> InvoiceDues;

            public RowListField<InvoiceVehicleDetailsRow> InvoiceVehicleDetails;

            public DateTimeField StartDate;
            public DateTimeField EndDate;

            public Int32Field ClearanceId;


            public DecimalField SupplierAmount;
            public Int32Field SupplierId;
            public Int32Field SupplierPaymentStatus;

            public DecimalField AdvanceAmount;
          
            public DecimalField BalanceAmount;

            public RowListField<InvoiceTripDatesRow> InvoiceTripDates;


            public DateTimeField ConsignmentConsignmentDate;
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

            public StringField ShipperCustomerCode;
            public StringField ShipperCustomerName;
            public StringField ShipperAddress;
            public StringField ShipperPlace;
            public StringField ShipperTelephone;
            public StringField ShipperEmail;
            public StringField ShipperContactPerson;
            public StringField ShipperMobile;
            public DateTimeField ShipperCreationDate;
            public StringField ShipperDescription;

            public StringField ConsigneeCustomerCode;
            public StringField ConsigneeCustomerName;
            public StringField ConsigneeAddress;
            public StringField ConsigneePlace;
            public StringField ConsigneeTelephone;
            public StringField ConsigneeEmail;
            public StringField ConsigneeContactPerson;
            public StringField ConsigneeMobile;
            public DateTimeField ConsigneeCreationDate;
            public StringField ConsigneeDescription;

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

            public StringField StatusUserUsername;
            public StringField StatusUserDisplayName;
            public StringField StatusUserEmail;
            public StringField StatusUserSource;
            public StringField StatusUserPasswordHash;
            public StringField StatusUserPasswordSalt;
            public DateTimeField StatusUserLastDirectoryUpdate;
            public StringField StatusUserUserImage;
            public DateTimeField StatusUserInsertDate;
            public Int32Field StatusUserInsertUserId;
            public DateTimeField StatusUserUpdateDate;
            public Int32Field StatusUserUpdateUserId;
            public Int16Field StatusUserIsActive;

            public StringField Remarks;


            public RowListField<Accounts.Entities.ReceiptRow> Receipts;
            public DecimalField Cgst;
            public DecimalField Sgst;
            public DecimalField Igst;
            public DecimalField CgstAmt;
            public DecimalField SgstAmt;
            public DecimalField IgstAmt;
        }
    }
}
