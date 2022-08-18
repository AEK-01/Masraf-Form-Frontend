import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FisComponent } from './components/fis/fis.component';
import { MakbuzComponent } from './components/makbuz/makbuz.component';
import { LoginComponent } from './components/login/login.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FisAddComponent } from './components/fis-add/fis-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { MakbuzAddComponent } from './components/makbuz-add/makbuz-add.component';
import { SidebarModule } from 'ng-sidebar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatCommonModule, MatLineModule, MatOptionModule, MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    FisComponent,
    MakbuzComponent,
    LoginComponent,   
    NaviComponent, FisAddComponent, MainpageComponent, MakbuzAddComponent, SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    SidebarModule,
    MatLineModule,
    MatOptionModule,
    MatCommonModule,
    MatRippleModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
