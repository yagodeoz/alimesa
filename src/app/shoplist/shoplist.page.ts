import { Component, OnInit } from '@angular/core';
import {LoadingService} from '../servicios/transversales/loading.service';
import {ProductosService} from "../servicios/ventas/productos/productos.service";
import {UtilmensajeService} from "../servicios/transversales/utilmensaje.service";
import {Router} from "@angular/router";
import {ControlParametrosService} from "../servicios/transversales/control-parametros.service";

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.page.html',
  styleUrls: ['./shoplist.page.scss'],
})
export class ShoplistPage implements OnInit {

  private postData = {
    id: '1',
    campos: {
      idProCorp: 'P1.PRODUCT_ID_CORP',
      idPro: 'P1.PRODUCT_ID',
      nombreProd: 'P1.PRODUCT_NAME',
      costoRep1: 'P1.COSTO_REPOSICION_1',
      costoRep2: 'P1.COSTO_REPOSICION_2',
      costoPro1: 'P1.AVERAGE_COST',
      costoPro2: 'P1.AVERAGE_COST2'
    },
    filtro: {
      where: '',
      'order by': 'P1.PRODUCT_ID desc',
      limit: ' 10'
    }
  };

  listaProductos: any;

  constructor(private loadingService: LoadingService, private servicioProducto: ProductosService,
              private utilMensaje: UtilmensajeService, private router: Router,
              private controlParametros: ControlParametrosService) { }

  ngOnInit() {
  }

  checkBlur(evt) {
    console.log('Ejecutar Evento ' + evt.srcElement.value );
    this.loadingService.loadingPresent('Por favor espere');
    this.postData.filtro.where = 'P1.PRODUCT_NAME like (\'%' + evt.srcElement.value + '%\')';
    console.log(this.postData);
    this.servicioProducto.getProductosCriterio(this.postData).subscribe(res => {
      console.log(res );
      this.listaProductos = res;
      this.loadingService.loadingDismiss();
    }, error => {
      this.listaProductos = null;
      console.log('Error al realizar la consulta ');
      this.loadingService.loadingDismiss();
      this.utilMensaje.presentarMensaje('Error al realizar la consulta de productos');
    });
  }


  procesarProducto(item) {
    console.log(item);
    this.controlParametros.setParametro('prod_item', item);
    this.router.navigate(['/singleproduct'] );
  }

}
