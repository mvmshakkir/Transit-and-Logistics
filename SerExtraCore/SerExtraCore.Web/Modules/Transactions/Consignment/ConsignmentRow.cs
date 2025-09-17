
namespace SerExtraCore.Transactions.Entities
{
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Master.Entities;
    using SerExtraCore.PDCPayments.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;
    using SerExtraCore.UOMAmount.Entities;
    using OfficeOpenXml.FormulaParsing.Excel.Functions.Logical;
    using static MVC.Views.Master;
    using Stimulsoft.System.Windows.Forms;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[Consignment]")]
    [DisplayName("Consignment"), InstanceName("Consignment")]
    [ReadPermission("Transactions:Consignment")]
    [ModifyPermission("Transactions:Consignment")]
    [LookupScript("Transactions.Consignment", Permission ="*", Expiration = -1)]
    public sealed class ConsignmentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }
        [DisplayName("Tax Paid By"), NotNull, DefaultValue(1), QuickSearch, QuickFilter, LookupInclude]
        public TaxPaidBy? TaxPaidBy
        {
            get { return (TaxPaidBy?)Fields.TaxPaidBy[this]; }
            set { Fields.TaxPaidBy[this] = (int?)value; }
        }

        [DisplayName("Date"), NotNull,DefaultValue("today"),QuickSearch,QuickFilter,LookupInclude]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }
        [DisplayName("LoadedDate"),  QuickSearch, QuickFilter]
        public DateTime? LoadedDate
        {
            get { return Fields.LoadedDate[this]; }
            set { Fields.LoadedDate[this] = value; }
        }

        [DisplayName("Way Bill No"), Size(200), QuickSearch]
        public String WayBillNo
        {
            get { return Fields.WayBillNo[this]; }
            set { Fields.WayBillNo[this] = value; }
        }
        //[DisplayName("Invoice Number"), Size(200), QuickSearch,Expression("(select STRING_AGG(InvoiceNO, ', ') as InvoiceNumber from Invoice where ConsignmentId=t0.[Id] group by ConsignmentId)")]
        [DisplayName("Invoice Number"), Size(200), QuickSearch, Expression("(select max(InvoiceNO) as InvoiceNumber from Invoice where ConsignmentId=t0.[Id] group by ConsignmentId)")]
        public String InvoiceNumber
        {
            get { return Fields.InvoiceNumber[this]; }
            set { Fields.InvoiceNumber[this] = value; }
        }
        [DisplayName("LR No"), Size(200), NotNull,QuickSearch]
        public String JobNo
        {
            get { return Fields.JobNo[this]; }
            set { Fields.JobNo[this] = value; }
        }
		[DisplayName("Po No"), Size(200),  QuickSearch]
		public String Po
		{
			get { return Fields.Po[this]; }
			set { Fields.Po[this] = value; }
		}

		[DisplayName("Client Job No"), Size(200),QuickSearch]
        public String ClientJobNo
        {
            get { return Fields.ClientJobNo[this]; }
            set { Fields.ClientJobNo[this] = value; }
        }

        [DisplayName("Shipper"), NotNull, ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jShipper"), TextualField("ShipperCustomerName")]
        [LookupEditor(typeof(CustomersRow),InplaceAdd =true)]
        public Int32? ShipperId
        {
            get { return Fields.ShipperId[this]; }
            set { Fields.ShipperId[this] = value; }
        }

        [DisplayName("Consignee"), NotNull, ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jConsignee"), TextualField("ConsigneeCustomerName")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = true)]
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

        [DisplayName("Type"), Size(500),TextAreaEditor]
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

        [DisplayName("Payment Type"), QuickFilter,QuickSearch]
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

        [DisplayName("Freight Amount"), Size(18), Scale(3), NotNull, ReadOnly(true)]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }
        [DisplayName("CGST %")]
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
        [DisplayName("Amount"),ReadOnly(true)]
        public Decimal? CgstAmt
        {
            get { return Fields.CgstAmt[this]; }
            set { Fields.CgstAmt[this] = value; }
        }
        [DisplayName("Amount"),ReadOnly(true)]
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



        [DisplayName("Total Tax Amount"), Size(18), Scale(3), NotNull, ReadOnly(true)]
        public Decimal? TotalTaxAmount
        {
            get { return Fields.TotalTaxAmount[this]; }
            set { Fields.TotalTaxAmount[this] = value; }
        }
        [DisplayName("Shipper Customer Code"), Expression("jShipper.[CustomerCode]")]
        public String ShipperCustomerCode
        {
            get { return Fields.ShipperCustomerCode[this]; }
            set { Fields.ShipperCustomerCode[this] = value; }
        }

        [DisplayName("Shipper Customer Name"), Expression("jShipper.[CustomerName]"),QuickSearch,QuickFilter]
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

        [DisplayName("Consignee Customer Name"), Expression("jConsignee.[CustomerName]"),QuickSearch,QuickFilter]
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

        [DisplayName("Vehicle Vehicle Number"), Expression("jVehicle.[VehicleNumber]"),QuickFilter,QuickSearch]
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

        [DisplayName("Driver Employee Name"), Expression("jDriver.[EmployeeName]"),QuickSearch,QuickFilter]
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

        [DisplayName("Shipping Area From"), Expression("jShippingAreaFrom.[AreaName]"),QuickFilter,QuickSearch]
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

        [DisplayName("Shipping Area To"), Expression("jShippingAreaTo.[AreaName]"), QuickFilter, QuickSearch]
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
        [DisplayName("Status"), NotNull ,DefaultValue(1),QuickFilter,QuickSearch,LookupInclude]
        public ConsignmentStatus? Status
        {
            get { return (ConsignmentStatus?)Fields.Status[this]; }
            set { Fields.Status[this] = (int?)value; }
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

        public ConsignmentRow()
            : base(Fields)
        {
        }

        //[DisplayName("Units"), MasterDetailRelation(foreignKey: "MaterialsId"), NotMapped]
        //[MinSelectLevel(SelectLevel.List)]
        //public List<UOMAmountRow> Units
        //{
        //    get { return Fields.Units[this]; }
        //    set { Fields.Units[this] = value; }
        //}
        [DisplayName("Materials Detail"), MasterDetailRelation(foreignKey: "ConsignmentId"), NotMapped]
		[MinSelectLevel(SelectLevel.List)]
		public List<ConsignmentChargesRow> ChargeDetailList
        {
            get { return Fields.ChargeDetailList[this]; }
            set { Fields.ChargeDetailList[this] = value; }
        }
        [DisplayName("Payment Mode"), NotNull,LookupInclude,QuickFilter,QuickSearch,DefaultValue(2)]
        public ConsignmentPaymentMode? PaymentMode
        {
            get { return (ConsignmentPaymentMode?)Fields.PaymentMode[this]; }
            set { Fields.PaymentMode[this] = (int?)value; }
        }



        //[DisplayName("Billing"),  ForeignKey("[dbo].[Customers]", "Id"), Expression("T0.ConsigneeId"),LeftJoin("jBilling"), TextualField("BillingCustomerName")]
        //[LookupEditor(typeof(CustomersRow), InplaceAdd = true)]
        //public Int32? Billing
        //{
        //    get { return Fields.Billing[this]; }
        //    set { Fields.Billing[this] = value; }
        //}
        [DisplayName("Billing")]
        [ForeignKey("[dbo].[Customers]", "Id")]
        [Expression("T0.ConsigneeId")]
        [LeftJoin("jBilling")]
        [TextualField("BillingCustomerName")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = true)]
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
        [DisplayName("Consignment Vehicle Details"), MasterDetailRelation(foreignKey: "ConsignmentId"), NotMapped]
        public List<ConsignmentVehicleDetailsRow> ConsignmentVehicleDetails
        {
            get { return Fields.ConsignmentVehicleDetails[this]; }
            set { Fields.ConsignmentVehicleDetails[this] = value; }
        }

        [DisplayName("Consignment Trip Dates"), MasterDetailRelation(foreignKey: "ConsignmentId"), NotMapped]
        public List<ConsignmentTripDatesRow> ConsignmentTripDates
        {
            get { return Fields.ConsignmentTripDates[this]; }
            set { Fields.ConsignmentTripDates[this] = value; }
        }

        [DisplayName("Trip Start Date"),DateTimeEditor,LookupInclude]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("Trip End Date"),LookupInclude]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
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
        [DisplayName("Payments"), MasterDetailRelation(foreignKey: "ConsignmentId"), NotMapped, AuditLog]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.PaymentRow> Expenses
        {
            get { return Fields.Expenses[this]; }
            set { Fields.Expenses[this] = value; }
        }
        [DisplayName("SlNo"),NotMapped]
        public Int32? Slno
        {
            get { return Fields.Slno[this]; }
            set { Fields.Slno[this] = value; }
        }
        //[DisplayName("FullName"), QuickSearch]
        //[Expression("(select JobNo+ case when WayBillNo is not null then ' (Way Bill No:'+ WayBillNo+')' else '' end  from Consignment where Id=T0.[Id])")]
        //[Expression("(select CustomerName   from Customers where Id=T0.[ConsigneeId])")]
        //[Expression("(T0.JobNo || ' ' || T0.WayBillNo || ' '|| T0.ConsigneeId)", Dialect = "Sqlite")]

        //public String FullName
        //{
        //    get { return Fields.FullName[this]; }
        //    set { Fields.FullName[this] = value; }
        //}


        //[DisplayName("FullName"), QuickSearch]
        //[Expression("(SELECT T0.JobNo + CASE WHEN T0.WayBillNo IS NOT NULL THEN ' (Way Bill No:' + T0.WayBillNo + ')' ELSE '' END + ' ' + (SELECT C.CustomerName FROM Customers C WHERE C.Id = T0.ConsigneeId))")]     
        //public string FullName
        //{
        //    get { return Fields.FullName[this]; }
        //    set { Fields.FullName[this] = value; }
        //}

        [DisplayName("FullName"), QuickSearch]
        [Expression("(SELECT T0.JobNo + CASE WHEN T0.WayBillNo IS NOT NULL THEN ' (Way Bill No:' + T0.WayBillNo + ')' ELSE '' END + ' ' + (SELECT C.CustomerName FROM Customers C WHERE C.Id = T0.ConsigneeId) + ' ' + ' (' + CONVERT(VARCHAR, T0.Date, 105) + ')')")]
        public string FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }












        [DisplayName("Extra charge  "), Size(18), Scale(3)]
        public Decimal? Extracharge
        {
            get { return Fields.Extracharge[this]; }
            set { Fields.Extracharge[this] = value; }
        }



        [DisplayName("Advance "), Size(18), Scale(3)]
        public Decimal? AdvanceAmount
        {
            get { return Fields.AdvanceAmount[this]; }
            set { Fields.AdvanceAmount[this] = value; }
        }
     
        [DisplayName("Payment Type"), QuickSearch, QuickFilter]
        public PymentTypes? AdvancePaymentType
        {
            get { return (PymentTypes?)Fields.AdvancePaymentType[this]; }
            set { Fields.AdvancePaymentType[this] = (int?)value; }
        }

        [DisplayName("Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jAccount"), TextualField("AccountAccountName")]
        [LookupEditor(typeof(AccountsRow), CascadeField = "Type", CascadeFrom = "AdvancePaymentType")]
        public Int32? AdvanceAccountId
        {
            get { return Fields.AdvanceAccountId[this]; }
            set { Fields.AdvanceAccountId[this] = value; }
        }
        [DisplayName("Total"), Size(18), Scale(3),NotNull,ReadOnly(true)]
        public Decimal? BalanceAmount
        {
            get { return Fields.BalanceAmount[this]; }
            set { Fields.BalanceAmount[this] = value; }
        }
        [DisplayName("Balance Amount"), Size(18), Scale(3),  ReadOnly(true)]
        public Decimal? TotalFreightAmount
        {
            get { return Fields.TotalFreightAmount[this]; }
            set { Fields.TotalFreightAmount[this] = value; }
        }
        [DisplayName("Advance Receipt"), MasterDetailRelation(foreignKey: "ConsignmentAdvanceConsignmentId"), NotMapped, AuditLog]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.ReceiptRow> AdvanceReceipt
        {
            get { return Fields.AdvanceReceipt[this]; }
            set { Fields.AdvanceReceipt[this] = value; }
        }
        [DisplayName("PDC Receipt Details"), MasterDetailRelation(foreignKey: "ConsignmentAdvanceId"), NotMapped]
        public List<PdcPaymentDetailsRow> PdcPaymentDetails
        {
            get { return Fields.PdcPaymentDetails[this]; }
            set { Fields.PdcPaymentDetails[this] = value; }
        }
        [DisplayName("From Locations"),NotMapped,QuickFilter]
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
        [DisplayName("Clearance"), ForeignKey("[dbo].[Clearance]", "Id"), LeftJoin("jClearance")]
        [LookupEditor(typeof(ClearanceRow))]
        public Int32? ClearanceId
        {
            get { return Fields.ClearanceId[this]; }
            set { Fields.ClearanceId[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Slno;
            public DateTimeField Date;
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
            public Int32Field Status;

            public Int32Field Billing;

            public StringField FullName;

            public Int32Field ClearanceId;



            public StringField BillingCustomerCode;
            public StringField BillingCustomerName;

            public RowListField<ConsignmentChargesRow> ChargeDetailList;
            public Int32Field PaymentMode;

            public RowListField<Accounts.Entities.PaymentRow> Expenses;

            

            public RowListField<ConsignmentVehicleDetailsRow> ConsignmentVehicleDetails;

            public RowListField<ConsignmentTripDatesRow> ConsignmentTripDates;

            public DateTimeField StartDate;
            public DateTimeField EndDate;


            public DecimalField SupplierAmount;
            public Int32Field SupplierId;

            public DecimalField AdvanceAmount;
            public Int32Field AdvancePaymentType;
            public Int32Field AdvanceAccountId;
            public DecimalField BalanceAmount;

            public RowListField<Accounts.Entities.ReceiptRow> AdvanceReceipt;
            public RowListField<PdcPaymentDetailsRow> PdcPaymentDetails;

            public StringField FromLocations;
            public StringField ToLocations;


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

            public StringField InvoiceNumber;





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


            public Int32Field TaxPaidBy;
            public DecimalField TotalTaxAmount;


            public DecimalField Cgst;
            public DecimalField Sgst;
            public DecimalField Igst;
            public DecimalField CgstAmt;
            public DecimalField SgstAmt;
            public DecimalField IgstAmt;


            public DecimalField TotalFreightAmount;

            public StringField Po;

            public DateTimeField LoadedDate;

            public DecimalField Extracharge;





        }
    }
}
