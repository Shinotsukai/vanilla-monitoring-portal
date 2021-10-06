import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentContainerComponent } from './screens/content-container/content-container.component';

const routes: Routes = [
  {path:"",
redirectTo:"login",
pathMatch:"full"},
{
  path:"login",
  loadChildren:()=> import('../app/screens/login-screen/login-screen.module').then(m => m.LoginScreenModule)
},
{path:"portal",
component:ContentContainerComponent,
children:[
  {path:"",
redirectTo:"dashboard",
pathMatch:"full"},
{
  path:"dashboard",
  loadChildren:()=> import('../app/screens/dashboard/dashboard.module').then(m => m.DashboardModule)
},
{
  path:"active-rooms",
  loadChildren:()=> import('../app/screens/rig-view/rig-view.module').then(m => m.RigViewModule)
},
{
  path:"sensor-data/:id",
  loadChildren:()=> import('../app/screens/sensor-data/sensor-data.module').then(m => m.SensorDataModule)
},
{
  path:"manage-rooms",
  loadChildren:()=> import('../app/screens/manage-rigs/manage-rigs.module').then(m => m.ManageRigsModule)
},
{
  path:"manage-devices",
  loadChildren:()=> import('../app/screens/manage-devices-screen/manage-devices-screen.module').then(m => m.ManageDevicesScreenModule)
},
]},
{
  path:"display/:id",
  loadChildren:()=> import('../app/screens/display-screen/display-screen.module').then(m => m.DisplayScreenModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
