import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ControlParametrosService} from "../servicios/transversales/control-parametros.service";

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.page.html',
  styleUrls: ['./singleproduct.page.scss'],
})
export class SingleproductPage implements OnInit {

  item: any;

  constructor(private controlParametros: ControlParametrosService) {
  }

  ngOnInit() {
    this.item = this.controlParametros.getParametro('prod_item');
  }

  procesarOrden(){
    alert('En construcción por falta de definción');
  }

}
