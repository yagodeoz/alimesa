import { Component, OnInit } from '@angular/core';
import {ControlParametrosService} from '../../servicios/transversales/control-parametros.service';
import {Router} from '@angular/router';
import { ModalController } from '@ionic/angular';
import {BuecarproductospedidoPage} from '../buecarproductospedido/buecarproductospedido.page';

@Component({
  selector: 'app-cabecera-pedidos',
  templateUrl: './cabecerapedidos.page.html',
  styleUrls: ['./cabecerapedidos.page.scss'],
})
export class CabecerapedidosPage implements OnInit {


  item: any;

  constructor(private controlParametros: ControlParametrosService, private router: Router, public viewCtrl: ModalController
              ) { }

  ngOnInit() {
    this.item = this.controlParametros.getParametro('cliente_item');
  }

  noImplementado() {
    alert('No implementado por falta de definción');
  }

  editarCliente() {

    this.router.navigate(['/editcliente'] );
  }

  levantarBusqueda() {
    this.openModal();
  }

  async openModal() {
    const modal = await this.viewCtrl.create({
      component: BuecarproductospedidoPage,
      cssClass: 'my-custom-modal-css'
    });
    return await modal.present();
  }

}
