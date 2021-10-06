export interface ColumnSetting {
    primaryKey:string;
    header?:string;
    format?:PipeFormat;
    nested?:string;
}

export interface ButtonSettings {
    title?:string;
    icon?:string;
    func?:any;
    class?:string[];
    params?:Object;
}

export enum PipeFormat {
    DEFAULT,
    CURRENCY,
    DATE,
    PERCENTAGE,
    COUNT
}