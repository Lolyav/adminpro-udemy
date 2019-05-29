import { RouterModule, Routes } from '@angular/router';


import { PagesComponent } from './pages.component';

import { DshboardComponent } from './dshboard/dshboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children: [
           { path: 'dshboard', component: DshboardComponent, data: { titulo: 'Dashboard' } },
           { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
           { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas' } },
           { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
           { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
           { path: 'accout-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes del Tema' } },
            { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de Usuario' } },
             // Mantenimientos
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimiento de Usuarios' } },
            { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de Hospitales' } },
            { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Médicos' } },
            { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar de Médico' } },

            { path: '', redirectTo: '/dshboard', pathMatch: 'full' }
        ]
 }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
