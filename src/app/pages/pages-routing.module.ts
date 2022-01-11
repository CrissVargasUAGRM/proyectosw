import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { MonitorearComponent } from './monitorear/monitorear.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { RegisterClinicComponent } from './register-clinic/register-clinic.component';
import { PagosComponent } from './pagos/pagos.component';
import { AuthGuard } from '../auth.guard';
import { ClinicsComponent } from './clinics/clinics.component';
import { ReservarComponent } from './reservar/reservar.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'chatbot',
    component: ChatbotComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'temperaturas',
    component: MonitorearComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registrarDoctor',
    component: FormulariosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registrarClinica',
    component: RegisterClinicComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pagos',
    component: PagosComponent
  },
  {
    path: 'clinicas',
    component: ClinicsComponent,
  },
  {
    path: 'reservar',
    component: ReservarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
