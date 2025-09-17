namespace SerExtraCore {
    export interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        ReportHeader?: string;
        Permissions?: { [key: string]: boolean };
    }
}
