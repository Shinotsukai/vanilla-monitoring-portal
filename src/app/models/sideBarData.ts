import { SideBarData } from "./sidebar.model";

export const sideBarData:SideBarData[]=[
    { heading: 'Menu', linkTitle: 'Dashboard', routerLink: 'dashboard', linkIcon: 'fa-user-chart' },
    { linkTitle: 'Rooms', routerLink: 'active-rooms', linkIcon: 'fa-building' },
    { linkTitle: 'Reports', routerLink: '#', linkIcon: 'fa-clipboard-list' },
    { linkTitle: 'Notification Log', routerLink: '#', linkIcon: 'fa-bell' },
    { heading:'Manage',linkTitle: 'Room Config', routerLink: 'manage-rooms', linkIcon: 'fa-cog' },
    { linkTitle: 'Devices', routerLink: 'manage-devices', linkIcon: 'fa-mobile' },
    { linkTitle: 'Users', routerLink: '#', linkIcon: 'fa-user' },
    { linkTitle: 'Settings', routerLink: '#', linkIcon: 'fa-sliders-v-square' },
]