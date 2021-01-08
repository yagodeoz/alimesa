import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContextoService} from './configuracion/contexto.service';

@Injectable({
    providedIn: 'root'
})
export class ProductosService {

    constructor(private http: HttpClient,
                private contexto: ContextoService) { }

    getProductosCriterio(criterio: string): Observable<any> {
        return this.http.get(`${this.contexto.getContexto()+this.contexto.getServicio()}/${criterio}`);
    }
}
