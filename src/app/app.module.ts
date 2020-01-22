import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomMaterialModule } from './appmaterial-module';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { ConfirmationDialog } from './confirmation-dialog/confirmation-dialog.component';
import { PrintPatientRegistrationComponent } from './print-patient-registration/print-patient-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    AlertDialogComponent,
    ConfirmationDialog,
    PrintPatientRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
