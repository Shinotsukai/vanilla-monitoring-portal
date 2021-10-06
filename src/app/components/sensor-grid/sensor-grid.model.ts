export interface GridSetting{
    primaryKey:string;
    header?:string;
    measure?:string;
    sensor_id?:UOMFormat;

}

export interface GridButton{
    title?:string;
    icon?:string;
    func?:any;
    class?:string[];
    params?:Object;
}

export enum UOMFormat{
    PPM,
    PPB,
    UGM3,
    PERCENT,
    DEGREES,
    MBAR
}