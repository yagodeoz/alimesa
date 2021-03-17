import { Component, OnInit } from '@angular/core';
import {ControlParametrosService} from '../servicios/transversales/control-parametros.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.page.html',
  styleUrls: ['./sucursal.page.scss'],
})
export class SucursalPage implements OnInit {

  constructor(private controlParametros: ControlParametrosService, private router: Router) { }

  ngOnInit() {
  }

  procesarEdicion() {
    alert('Pendiente integración MBA');
  }

}
