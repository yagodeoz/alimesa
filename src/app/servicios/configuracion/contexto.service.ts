import { Injectable } from '@angular/core';
import {Observable} from "rxjs";


import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ContextoService {
    private baseUrlAPI = 'http://161.97.81.252:50779';

    private servicioProducto = '/ConsultasMBA';

    constructor(private http: HttpClient) {
    }

    getContexto() {
        return this.baseUrlAPI;
    }

    getServicio() {
        return this.servicioProducto;
    }

    invocacionPost(postData): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.post(`${this.getContexto() + this.getServicio()}`, postData, httpOptions);
    }
}
