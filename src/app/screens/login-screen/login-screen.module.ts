import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginScreenComponent } from './login-screen.component';
import { CardTileModule } from 'src/app/components/card-tile/card-tile.module';
import { InputFieldModule } from 'src/app/components/input-field/input-field.module';



@NgModule({
  declarations: [LoginScreenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', pathMatch:'full', component:LoginScreenComponent}
    ]),
    CardTileModule,
    InputFieldModule
  ]
})
export class LoginScreenModule { }
