
namespace SerExtraCore.Transactions.Entities
{
    using SerExtraCore.Master.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[Clearance]")]
    [DisplayName("Clearance"), InstanceName("Clearance")]
    [ReadPermission("Transactions:Clearance")]
    [ModifyPermission("Transactions:Clearance")]
    [LookupScript(Permission ="*")]
    public sealed class ClearanceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("MBL NO"), Column("MBLNO"), Size(200), NotNull, QuickSearch]
        public String Mblno
        {
            get { return Fields.Mblno[this]; }
            set { Fields.Mblno[this] = value; }
        }

        [DisplayName("MBL DATE"), Column("MBLDATE"),QuickSearch,QuickFilter]
        public DateTime? Mbldate
        {
            get { return Fields.Mbldate[this]; }
            set { Fields.Mbldate[this] = value; }
        }

        [DisplayName("HBL NO"), Column("HBLNO"), Size(200),QuickSearch]
        public String Hblno
        {
            get { return Fields.Hblno[this]; }
            set { Fields.Hblno[this] = value; }
        }

        [DisplayName("HBL DATE"), Column("HBLDATE"),QuickFilter]
        public DateTime? Hbldate
        {
            get { return Fields.Hbldate[this]; }
            set { Fields.Hbldate[this] = value; }
        }

        [DisplayName("ETA"), Column("ETA"),DateTimeEditor,QuickFilter]
        public DateTime? Eta
        {
            get { return Fields.Eta[this]; }
            set { Fields.Eta[this] = value; }
        }
        [DisplayName("ETD"), Column("ETD"), DateTimeEditor, QuickFilter]
        public DateTime? Etd
        {
            get { return Fields.Etd[this]; }
            set { Fields.Etd[this] = value; }
        }

        [DisplayName("Status"), NotNull, ForeignKey("[dbo].[ClearanceStatus]", "Id"), LeftJoin("jStatus"), TextualField("Status1")]
       [LookupEditor("Master.ClearanceStatuses"),DefaultValue(1)]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Attachment"), Size(500),MultipleFileUploadEditor(FilenameFormat = "Clearance/Attachments/~")]
        public String Attachment
        {
            get { return Fields.Attachment[this]; }
            set { Fields.Attachment[this] = value; }
        }

        [DisplayName("Port Loading"), ForeignKey("[dbo].[Ports]", "Id"), LeftJoin("jPortLoading"), TextualField("PortLoadingPortName")]
        [LookupEditor(typeof(PortsRow),InplaceAdd =true)]
        public Int32? PortLoading
        {
            get { return Fields.PortLoading[this]; }
            set { Fields.PortLoading[this] = value; }
        }

        [DisplayName("Port Discharge"), ForeignKey("[dbo].[Ports]", "Id"), LeftJoin("jPortDischarge"), TextualField("PortDischargePortName")]
        [LookupEditor(typeof(PortsRow), InplaceAdd = true)]
        public Int32? PortDischarge
        {
            get { return Fields.PortDischarge[this]; }
            set { Fields.PortDischarge[this] = value; }
        }

        [DisplayName("Shipper"), ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jShipper"), TextualField("ShipperCustomerName")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = true),LookupInclude]
        public Int32? Shipper
        {
            get { return Fields.Shipper[this]; }
            set { Fields.Shipper[this] = value; }
        }

        [DisplayName("Consignee"), ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jConsignee"), TextualField("ConsigneeCustomerName")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = true),LookupInclude]
        public Int32? Consignee
        {
            get { return Fields.Consignee[this]; }
            set { Fields.Consignee[this] = value; }
        }

        [DisplayName("Vessel"), Size(255)]
        public String Vessel
        {
            get { return Fields.Vessel[this]; }
            set { Fields.Vessel[this] = value; }
        }

        [DisplayName("Container No"), Size(500)]
        public String ContainerNo
        {
            get { return Fields.ContainerNo[this]; }
            set { Fields.ContainerNo[this] = value; }
        }

        [DisplayName("Job Ref"), Size(500),QuickSearch]
        public String JobRef
        {
            get { return Fields.JobRef[this]; }
            set { Fields.JobRef[this] = value; }
        }

        [DisplayName("Customer Ref"), Size(500),QuickSearch]
        public String CustomerRef
        {
            get { return Fields.CustomerRef[this]; }
            set { Fields.CustomerRef[this] = value; }
        }

        [DisplayName("Package Type"), Size(500)]
        public String PackageType
        {
            get { return Fields.PackageType[this]; }
            set { Fields.PackageType[this] = value; }
        }

        [DisplayName("Weight"), Size(500)]
        public String Weight
        {
            get { return Fields.Weight[this]; }
            set { Fields.Weight[this] = value; }
        }

        [DisplayName("Chargeable Weight"), Size(500)]
        public String ChargeableWeight
        {
            get { return Fields.ChargeableWeight[this]; }
            set { Fields.ChargeableWeight[this] = value; }
        }

        [DisplayName("No Of Packages"), Size(18), Scale(3)]
        public Decimal? NoOfPackages
        {
            get { return Fields.NoOfPackages[this]; }
            set { Fields.NoOfPackages[this] = value; }
        }

        [DisplayName("Volume"), Size(18), Scale(3)]
        public Decimal? Volume
        {
            get { return Fields.Volume[this]; }
            set { Fields.Volume[this] = value; }
        }

        [DisplayName("Status"), Expression("jStatus.[Status]"),QuickFilter]
        public String Status1
        {
            get { return Fields.Status1[this]; }
            set { Fields.Status1[this] = value; }
        }

        [DisplayName("Loading Port"), Expression("jPortLoading.[PortName]"), QuickFilter]
        public String PortLoadingPortName
        {
            get { return Fields.PortLoadingPortName[this]; }
            set { Fields.PortLoadingPortName[this] = value; }
        }

        [DisplayName("Port Loading Country Id"), Expression("jPortLoading.[CountryId]")]
        public Int32? PortLoadingCountryId
        {
            get { return Fields.PortLoadingCountryId[this]; }
            set { Fields.PortLoadingCountryId[this] = value; }
        }

        [DisplayName("Discharge Port"), Expression("jPortDischarge.[PortName]"), QuickFilter]
        public String PortDischargePortName
        {
            get { return Fields.PortDischargePortName[this]; }
            set { Fields.PortDischargePortName[this] = value; }
        }

        [DisplayName("Port Discharge Country Id"), Expression("jPortDischarge.[CountryId]")]
        public Int32? PortDischargeCountryId
        {
            get { return Fields.PortDischargeCountryId[this]; }
            set { Fields.PortDischargeCountryId[this] = value; }
        }

        [DisplayName("Shipper Customer Code"), Expression("jShipper.[CustomerCode]")]
        public String ShipperCustomerCode
        {
            get { return Fields.ShipperCustomerCode[this]; }
            set { Fields.ShipperCustomerCode[this] = value; }
        }

        [DisplayName("Shipper Name"), Expression("jShipper.[CustomerName]")]
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

        [DisplayName("Shipper Due Days"), Expression("jShipper.[DueDays]")]
        public Int32? ShipperDueDays
        {
            get { return Fields.ShipperDueDays[this]; }
            set { Fields.ShipperDueDays[this] = value; }
        }

        [DisplayName("Shipper Opening"), Expression("jShipper.[Opening]")]
        public Decimal? ShipperOpening
        {
            get { return Fields.ShipperOpening[this]; }
            set { Fields.ShipperOpening[this] = value; }
        }

        [DisplayName("Shipper Opening Date"), Expression("jShipper.[OpeningDate]")]
        public DateTime? ShipperOpeningDate
        {
            get { return Fields.ShipperOpeningDate[this]; }
            set { Fields.ShipperOpeningDate[this] = value; }
        }

        [DisplayName("Shipper Tax Reg No"), Expression("jShipper.[TaxRegNo]")]
        public String ShipperTaxRegNo
        {
            get { return Fields.ShipperTaxRegNo[this]; }
            set { Fields.ShipperTaxRegNo[this] = value; }
        }

        [DisplayName("Consignee Customer Code"), Expression("jConsignee.[CustomerCode]")]
        public String ConsigneeCustomerCode
        {
            get { return Fields.ConsigneeCustomerCode[this]; }
            set { Fields.ConsigneeCustomerCode[this] = value; }
        }

        [DisplayName("Consignee Name"), Expression("jConsignee.[CustomerName]")]
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

        [DisplayName("Consignee Due Days"), Expression("jConsignee.[DueDays]")]
        public Int32? ConsigneeDueDays
        {
            get { return Fields.ConsigneeDueDays[this]; }
            set { Fields.ConsigneeDueDays[this] = value; }
        }

        [DisplayName("Consignee Opening"), Expression("jConsignee.[Opening]")]
        public Decimal? ConsigneeOpening
        {
            get { return Fields.ConsigneeOpening[this]; }
            set { Fields.ConsigneeOpening[this] = value; }
        }

        [DisplayName("Consignee Opening Date"), Expression("jConsignee.[OpeningDate]")]
        public DateTime? ConsigneeOpeningDate
        {
            get { return Fields.ConsigneeOpeningDate[this]; }
            set { Fields.ConsigneeOpeningDate[this] = value; }
        }

        [DisplayName("Consignee Tax Reg No"), Expression("jConsignee.[TaxRegNo]")]
        public String ConsigneeTaxRegNo
        {
            get { return Fields.ConsigneeTaxRegNo[this]; }
            set { Fields.ConsigneeTaxRegNo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Mblno; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ClearanceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Mblno;
            public DateTimeField Mbldate;
            public StringField Hblno;
            public DateTimeField Hbldate;
            public DateTimeField Eta;
            public DateTimeField Etd;
            public Int32Field Status;
            public StringField Attachment;
            public Int32Field PortLoading;
            public Int32Field PortDischarge;
            public Int32Field Shipper;
            public Int32Field Consignee;
            public StringField Vessel;
            public StringField ContainerNo;
            public StringField JobRef;
            public StringField CustomerRef;
            public StringField PackageType;
            public StringField Weight;
            public StringField ChargeableWeight;
            public DecimalField NoOfPackages;
            public DecimalField Volume;

            public StringField Status1;

            public StringField PortLoadingPortName;
            public Int32Field PortLoadingCountryId;

            public StringField PortDischargePortName;
            public Int32Field PortDischargeCountryId;

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
            public Int32Field ShipperDueDays;
            public DecimalField ShipperOpening;
            public DateTimeField ShipperOpeningDate;
            public StringField ShipperTaxRegNo;

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
            public Int32Field ConsigneeDueDays;
            public DecimalField ConsigneeOpening;
            public DateTimeField ConsigneeOpeningDate;
            public StringField ConsigneeTaxRegNo;
        }
    }
}
