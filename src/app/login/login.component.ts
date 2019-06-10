import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { NgZone } from '@angular/core';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
  email: string;
 recuerdame: boolean = false;
 auth2: any;


  constructor(
    public router: Router,
    public _usuarioService: UsuarioService,
    private zone: NgZone
    ) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.email = localStorage.getItem( 'email') || '';
    if ( this.email.length > 1 ) {
      this.recuerdame = true;
    }

  }

  googleInit() {

  gapi.load('auth2', () => {

    this.auth2 = gapi.auth2.init({
      client_id: '34114842517-2bdnpogea01a603touhiq0hvv7c1594u.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
      scope: 'profile'
    });

    this.attachSignin( document.getElementById('btnGoogle'));

  });

  }

  attachSignin(element) {

    this.auth2.attachClickHandler( element, {}, (googleUser) => {

      // let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;

      this._usuarioService.loginGoogle( token )
        .subscribe(() => window.location.href = '#/dashboard' );
     // this.router.navigate(['/dashboard'])
   });

  }


  ingresar( forma: NgForm ) {
    if ( forma.invalid ) {
      return;
    }
    let usuario = new Usuario( null, forma.value.email, forma.value.password );

    this._usuarioService.login( usuario, forma.value.recuerdame)
      .subscribe(correcto => this.router.navigate(['/dashboard']));
   }
}
