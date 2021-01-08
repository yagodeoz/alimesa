import { Component, OnInit } from '@angular/core';
import {MessagesProvider} from "../messages/messages";
import {AuthenticationService} from "../servicios/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  titulo: string;
  formUsuario: string;
  formClave: string;
  formUsuarioPH: string;
  formClavePH: string;
  formBtn: string;

  constructor( private msg: MessagesProvider, private router: Router, private auth: AuthenticationService) {
    this.titulo = this.msg.get('titulo_login');
      this.formUsuario = this.msg.get('form_login_usuario');
      this.formClave = this.msg.get('form_login_clave');
      this.formUsuarioPH = this.msg.get('form_login_usuario_ph');
      this.formClavePH = this.msg.get('form_login_clave_ph');
      this.formBtn = this.msg.get('form_login_btn');

  }

  ngOnInit() {
  }

  login() {
    this.auth.setLoggedIn(true);
    this.router.navigateByUrl('/folder/PrincipalLogin');
  }

}
