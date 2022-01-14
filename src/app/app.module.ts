import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { HttpClientModule } from "@angular/common/http";
import { ApiserviceService } from './apiservice.service';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
// import {MatCheckboxModule} from '@angular/material/checkbox';


import { DatePipe } from '@angular/common';
import { PausedProfilesComponent } from './paused-profiles/paused-profiles.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    PausedProfilesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [ApiserviceService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
