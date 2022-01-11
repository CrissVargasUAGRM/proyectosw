import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentModule } from '../components/component.module';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { MonitorearComponent } from './monitorear/monitorear.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterClinicComponent } from './register-clinic/register-clinic.component';
import { FormsModule } from '@angular/forms';
import { PagosComponent } from './pagos/pagos.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { DoctorsclinicComponent } from './doctorsclinic/doctorsclinic.component';
import { ReservarComponent } from './reservar/reservar.component';


@NgModule({
  declarations: [
    HomeComponent,
    ChatbotComponent,
    FormulariosComponent,
    MonitorearComponent,
    RegisterClinicComponent,
    PagosComponent,
    ClinicsComponent,
    DoctorsclinicComponent,
    ReservarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentModule,
    SharedModule,
    FormsModule
  ],
  exports: []
})
export class PagesModule { }
