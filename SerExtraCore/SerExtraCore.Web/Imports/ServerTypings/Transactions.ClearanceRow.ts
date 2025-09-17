namespace SerExtraCore.Transactions {
    export interface ClearanceRow {
        Id?: number;
        Mblno?: string;
        Mbldate?: string;
        Hblno?: string;
        Hbldate?: string;
        Eta?: string;
        Etd?: string;
        Status?: number;
        Attachment?: string;
        PortLoading?: number;
        PortDischarge?: number;
        Shipper?: number;
        Consignee?: number;
        Vessel?: string;
        ContainerNo?: string;
        JobRef?: string;
        CustomerRef?: string;
        PackageType?: string;
        Weight?: string;
        ChargeableWeight?: string;
        NoOfPackages?: number;
        Volume?: number;
        Status1?: string;
        PortLoadingPortName?: string;
        PortLoadingCountryId?: number;
        PortDischargePortName?: string;
        PortDischargeCountryId?: number;
        ShipperCustomerCode?: string;
        ShipperCustomerName?: string;
        ShipperAddress?: string;
        ShipperPlace?: string;
        ShipperTelephone?: string;
        ShipperEmail?: string;
        ShipperContactPerson?: string;
        ShipperMobile?: string;
        ShipperCreationDate?: string;
        ShipperDescription?: string;
        ShipperDueDays?: number;
        ShipperOpening?: number;
        ShipperOpeningDate?: string;
        ShipperTaxRegNo?: string;
        ConsigneeCustomerCode?: string;
        ConsigneeCustomerName?: string;
        ConsigneeAddress?: string;
        ConsigneePlace?: string;
        ConsigneeTelephone?: string;
        ConsigneeEmail?: string;
        ConsigneeContactPerson?: string;
        ConsigneeMobile?: string;
        ConsigneeCreationDate?: string;
        ConsigneeDescription?: string;
        ConsigneeDueDays?: number;
        ConsigneeOpening?: number;
        ConsigneeOpeningDate?: string;
        ConsigneeTaxRegNo?: string;
    }

    export namespace ClearanceRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Mblno';
        export const localTextPrefix = 'Transactions.Clearance';
        export const lookupKey = 'Transactions.Clearance';

        export function getLookup(): Q.Lookup<ClearanceRow> {
            return Q.getLookup<ClearanceRow>('Transactions.Clearance');
        }
        export const deletePermission = 'Transactions:Clearance';
        export const insertPermission = 'Transactions:Clearance';
        export const readPermission = 'Transactions:Clearance';
        export const updatePermission = 'Transactions:Clearance';

        export declare const enum Fields {
            Id = "Id",
            Mblno = "Mblno",
            Mbldate = "Mbldate",
            Hblno = "Hblno",
            Hbldate = "Hbldate",
            Eta = "Eta",
            Etd = "Etd",
            Status = "Status",
            Attachment = "Attachment",
            PortLoading = "PortLoading",
            PortDischarge = "PortDischarge",
            Shipper = "Shipper",
            Consignee = "Consignee",
            Vessel = "Vessel",
            ContainerNo = "ContainerNo",
            JobRef = "JobRef",
            CustomerRef = "CustomerRef",
            PackageType = "PackageType",
            Weight = "Weight",
            ChargeableWeight = "ChargeableWeight",
            NoOfPackages = "NoOfPackages",
            Volume = "Volume",
            Status1 = "Status1",
            PortLoadingPortName = "PortLoadingPortName",
            PortLoadingCountryId = "PortLoadingCountryId",
            PortDischargePortName = "PortDischargePortName",
            PortDischargeCountryId = "PortDischargeCountryId",
            ShipperCustomerCode = "ShipperCustomerCode",
            ShipperCustomerName = "ShipperCustomerName",
            ShipperAddress = "ShipperAddress",
            ShipperPlace = "ShipperPlace",
            ShipperTelephone = "ShipperTelephone",
            ShipperEmail = "ShipperEmail",
            ShipperContactPerson = "ShipperContactPerson",
            ShipperMobile = "ShipperMobile",
            ShipperCreationDate = "ShipperCreationDate",
            ShipperDescription = "ShipperDescription",
            ShipperDueDays = "ShipperDueDays",
            ShipperOpening = "ShipperOpening",
            ShipperOpeningDate = "ShipperOpeningDate",
            ShipperTaxRegNo = "ShipperTaxRegNo",
            ConsigneeCustomerCode = "ConsigneeCustomerCode",
            ConsigneeCustomerName = "ConsigneeCustomerName",
            ConsigneeAddress = "ConsigneeAddress",
            ConsigneePlace = "ConsigneePlace",
            ConsigneeTelephone = "ConsigneeTelephone",
            ConsigneeEmail = "ConsigneeEmail",
            ConsigneeContactPerson = "ConsigneeContactPerson",
            ConsigneeMobile = "ConsigneeMobile",
            ConsigneeCreationDate = "ConsigneeCreationDate",
            ConsigneeDescription = "ConsigneeDescription",
            ConsigneeDueDays = "ConsigneeDueDays",
            ConsigneeOpening = "ConsigneeOpening",
            ConsigneeOpeningDate = "ConsigneeOpeningDate",
            ConsigneeTaxRegNo = "ConsigneeTaxRegNo"
        }
    }
}
