import {Component, OnInit} from '@angular/core';
import {MessagesProvider} from '../messages/messages';
import {AuthenticationService} from '../servicios/authentication.service';
import {Router} from '@angular/router';
import {ControlaccesologinService} from '../servicios/login/controlaccesologin.service';
import {UtilmensajeService} from '../servicios/transversales/utilmensaje.service';

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

  postData = {
    username: '',
    password: ''
  };

  constructor(private msg: MessagesProvider, private router: Router, private auth: AuthenticationService,
              private controlAcceso: ControlaccesologinService, private utilMensaje: UtilmensajeService) {
    this.titulo = this.msg.get('titulo_login');
    this.formUsuario = this.msg.get('form_login_usuario');
    this.formClave = this.msg.get('form_login_clave');
    this.formUsuarioPH = this.msg.get('form_login_usuario_ph');
    this.formClavePH = this.msg.get('form_login_clave_ph');
    this.formBtn = this.msg.get('form_login_btn');

  }

  ngOnInit() {
  }

  validarInputs() {
    console.log(this.postData);
    return (
        this.postData.username &&
        this.postData.password &&
        this.postData.username.trim().length > 0 &&
        this.postData.password.trim().length > 0
    );
  }

  login() {

    if (this.validarInputs()) {

      if (this.postData.username === 'ADMIN' && this.postData.password === 'ADMIN') {
        this.controlAcceso.getDataLogin().username = this.postData.username;
        this.controlAcceso.getDataLogin().nombre = 'Administrador';
        this.controlAcceso.getDataLogin().email = 'admin@gmail.com';
        this.controlAcceso.setPresentarMenu(true);
        this.auth.login('{usuario: "BYRON"}');
        this.router.navigateByUrl('/folder/PrincipalLogin');
      } else {
        this.utilMensaje.presentarMensaje(
            'usuario/password incorrecto.'
        );
      }
    } else {
      this.utilMensaje.presentarMensaje(
          'Por favor ingrese su usuario/password.'
      );
    }
  }
}
