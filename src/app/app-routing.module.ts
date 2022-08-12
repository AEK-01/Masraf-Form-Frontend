import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FisAddComponent } from './components/fis-add/fis-add.component';
import { FisComponent } from './components/fis/fis.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';


const routes: Routes = [
  {path:"",pathMatch:"full", component:MainpageComponent},
  {path:"fis", component:FisComponent},
  {path:"fis/add", component:FisAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
