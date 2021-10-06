export class SideBarData {
    heading?:string;
    linkTitle?:string;
    routerLink?:any;
    linkIcon?: string;
    subLinks?:SideBarSubLinkData[];
}

class SideBarSubLinkData {
    subLinkTitle: string="";
    routerLink: string="";
    fragment?: string;
}