import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { ListtasksComponent } from './listtasks/listtasks.component';
import { ListprojectComponent } from './listproject/listproject.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ErrorsComponent } from './sahred/errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListtasksComponent,
    ListprojectComponent,
    NotfoundComponent,
    LoginComponent,
    AddtaskComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
