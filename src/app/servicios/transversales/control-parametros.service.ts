import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ControlParametrosService {

    mapaParametro = new Map<object, string>();

    setParametro(clave, valor) {
        this.mapaParametro.set(clave, valor);
    }

    getParametro(clave) {
        return this.mapaParametro.get(clave);
    }
}