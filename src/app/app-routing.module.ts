import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FisAddComponent } from './components/fis-add/fis-add.component';
import { FisComponent } from './components/fis/fis.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { MakbuzAddComponent } from './components/makbuz-add/makbuz-add.component';
import { MakbuzComponent } from './components/makbuz/makbuz.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


const routes: Routes = [
  {path:"",pathMatch:"full", component:SidenavComponent},
  {path:"fis", component:FisComponent},
  {path:"fis/add", component:FisAddComponent},

  {path:"makbuz", component:MakbuzComponent},
  {path:"makbuz/add", component:MakbuzAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
