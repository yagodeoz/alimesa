import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class ContextoService {
    private baseUrlAPI = 'http://161.97.81.252:50779';

    private servicioProducto = '/ConsultasMBA';


    getContexto() {
        return this.baseUrlAPI;
    }

    getServicio() {
        return this.servicioProducto;
    }
}
