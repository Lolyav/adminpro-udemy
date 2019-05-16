import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas

import { APP_ROUTES } from './app.routes';

// modulos

import { PagesModule } from './pages/pages.modulo';
// servicios

import { ServiceModule } from './services/service.module';

// componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
 
   ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
