namespace SerExtraCore.Crossing {
    export interface CrossingRow {
        Id?: number;
        Settlementid?: number;
        Name?: string;
        Amount?: number;
        SettlementidTsNo?: number;
        SettlementidMoneyInOutTsNo?: number;
        SettlementidTripAdvance?: number;
        SettlementidTripBalance?: number;
        SettlementidTollTag?: number;
        SettlementidTripBalancee?: number;
        SettlementidAdvance?: number;
        SettlementidToll?: number;
        SettlementidTsNumber?: string;
        SettlementidFualAmount?: number;
    }

    export namespace CrossingRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Crossing.Crossing';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Settlementid = "Settlementid",
            Name = "Name",
            Amount = "Amount",
            SettlementidTsNo = "SettlementidTsNo",
            SettlementidMoneyInOutTsNo = "SettlementidMoneyInOutTsNo",
            SettlementidTripAdvance = "SettlementidTripAdvance",
            SettlementidTripBalance = "SettlementidTripBalance",
            SettlementidTollTag = "SettlementidTollTag",
            SettlementidTripBalancee = "SettlementidTripBalancee",
            SettlementidAdvance = "SettlementidAdvance",
            SettlementidToll = "SettlementidToll",
            SettlementidTsNumber = "SettlementidTsNumber",
            SettlementidFualAmount = "SettlementidFualAmount"
        }
    }
}
