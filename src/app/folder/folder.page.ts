import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MessagesProvider} from '../messages/messages';

@Component({
    selector: 'app-folder',
    templateUrl: './folder.page.html',
    styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
    public folder: string;
    public mensajeBusqueda: string;
    public tituloApp: string;
    public direccionApp: string;
    public tituloCategorias: string;
    public botonMas: string;

    constructor(private activatedRoute: ActivatedRoute, private msg: MessagesProvider) {
        this.mensajeBusqueda = this.msg.get('input_buscar');
        this.tituloApp = this.msg.get('titulo_app');
        this.direccionApp = this.msg.get('direccion_app');
        this.tituloCategorias = this.msg.get('titulo_categorias');
        this.botonMas = this.msg.get('mas');
    }

    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }

}
