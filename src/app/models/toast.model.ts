export class Toast {
    id: string='';
    type: ToastType=2;
    message: string='';
    autoClose: boolean=true;
    keepAfterRouteChange: boolean=true;
    fade: boolean=true;

    constructor(init?:Partial<Toast>) {
        Object.assign(this, init);
    }
}

export enum ToastType {
    Success,
    Error,
    Info,
    Warning
}