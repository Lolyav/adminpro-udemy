import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';

import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';

import { DshboardComponent } from './dshboard/dshboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { from } from 'rxjs';
// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ProfileComponent } from './profile/profile.component';

// gRAFICAS
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

// Pipes

import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    declarations: [
        PagesComponent,
        DshboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        ModalUploadComponent,
        HospitalesComponent,
        MedicosComponent,
        MedicoComponent

    ],
    exports: [
        PagesComponent,
        DshboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule

    ]


})
export class PagesModule { }
