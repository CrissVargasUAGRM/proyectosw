import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermometroComponent } from "./termometro/termometro.component";
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { FormsModule } from '@angular/forms';
import { ListTemperaturesComponent } from './list-temperatures/list-temperatures.component';
import { TempGraficaComponent } from './temp-grafica/temp-grafica.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [TermometroComponent, AddTutorialComponent, TutorialDetailsComponent, TutorialListComponent, ListTemperaturesComponent, TempGraficaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    TermometroComponent,
    ListTemperaturesComponent,
    TempGraficaComponent
  ]
})
export class ComponentModule { }
