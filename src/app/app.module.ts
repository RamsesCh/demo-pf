import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FinishComponent } from './components/finish/finish.component';
import { NotAvailableComponent } from './components/not-available/not-available.component';
import { ExpiredLinkComponent } from './components/expired-link/expired-link.component';
import { LoginComponent } from './components/login/login.component';
import { PrivacyNoticeComponent } from './components/privacy-notice/privacy-notice.component';
import { ScanIndicationsComponent } from './components/scan-indications/scan-indications.component';

//import material//
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { DateLoginDirective } from './common/directives/date-login.directive';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { PreviewDni } from './components/preview-dni/preview-dni-front.component';
import { TermsConditionsInstructionsComponent } from './components/terms-conditions-instructions/terms-conditions-instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StepperComponent,
    PrincipalComponent,
    FinishComponent,
    NotAvailableComponent,
    ExpiredLinkComponent,
    LoginComponent,
    PrivacyNoticeComponent,
    ScanIndicationsComponent,
    DateLoginDirective,
    PreviewDni,
    TermsConditionsInstructionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
