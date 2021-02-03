import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GymComponent } from './gym/gym.component';
import { GetgymComponent } from './gym/getgym/getgym.component';
import { PersonaltrainerComponent } from './personaltrainer/personaltrainer.component';
import { GetpersonaltrainerComponent } from './personaltrainer/getpersonaltrainer/getpersonaltrainer.component';
// Add the service module to the provider seccion
import { SharedService } from "./shared.service";

//Regist the HTTP from the API
//Before you can use HttpClient, you need to import the Angular HttpClientModule. Most apps do so in the root AppModule.

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddeditgymComponent } from './gym/addeditgym/addeditgym.component';

@NgModule({
  declarations: [
    AppComponent,
    GymComponent,
    GetgymComponent,
    PersonaltrainerComponent,
    GetpersonaltrainerComponent,
    AddeditgymComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
