import {Injectable} from '@angular/core';


@Injectable()
export class MessagesProvider {
    private generalMessages: any;

    constructor() {
        this.generalMessages = {
            input_buscar: 'Desea buscar algo?.',
            titulo_app: 'Alimesa',
            direccion_app: 'Km 15 ½ vía a Daule, Av. Rosavín',
            titulo_categorias: 'Nuestros productos',
            mas: 'Más',

            //LOGIN
            titulo_login: 'Login',
            form_login_usuario: 'Usuario',
            form_login_usuario_ph: 'Ingrese el usuario',
            form_login_clave: 'Clave',
            form_login_clave_ph: 'Ingrese la clave',
            form_login_btn: 'Ingresar',
            //MENU
            titulo_menu_home: 'Principal',
            titulo_menu_productos: 'Productos',
            titulo_menu_perfil: 'Mi Perfil',
        };
    }

    public get(key: string) {
        return this.generalMessages[key];
    }

    public set(key: any, value: any) {
        this.generalMessages[key] = value;
    }

}
