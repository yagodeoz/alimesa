import {Component, OnInit} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {MessagesProvider} from './messages/messages';
import {ControlaccesologinService} from './servicios/login/controlaccesologin.service';
import {Router} from '@angular/router';
import {AuthenticationService} from './servicios/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    public selectedIndex = 0;
    public appPages: any;
    public labels = ['Link 1', 'Link 2', 'Link N'];

    public login: boolean;


    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private msg: MessagesProvider,
        private controlAcceso: ControlaccesologinService,
        private router: Router,
        private auth: AuthenticationService,
        public menuCtrl: MenuController
    ) {
        this.construccionMenu();
        this.initializeApp();
    }

    construccionMenu() {
        this.appPages = [
            this.getMenuHome(),
            //this.getMenuProfile()
        ];
        this.inclusionModulos();

        /*
    public appPages = [
            {
                title: 'Homepage',
                url: '/folder/Inbox',
                icon: 'home'
            },
            {
                title: 'Categories',
                url: '/categories',
                icon: 'list'
            },
            {
                title: 'Shop List',
                url: '/listaproductos',
                icon: 'grid'
            },
            {
                title: 'Single Product',
                url: '/producto',
                icon: 'pricetag'
            },
            {
                title: 'Shopping Cart',
                url: '/shoppingcart',
                icon: 'basket'
            },
            {
                title: 'Checkout',
                url: '/checkout',
                icon: 'card'
            },
            {
                title: 'My Profile',
                url: '/myprofile',
                icon: 'person'
            },
            {
                title: 'My Address',
                url: '/myaddress',
                icon: 'location'
            },
            {
                title: 'Order List',
                url: '/orderlist',
                icon: 'create'
            },
            {
                title: 'About Us',
                url: '/about',
                icon: 'heart'
            },
            {
                title: 'Contact Us',
                url: '/contactus',
                icon: 'mail'
            },
            {
                title: 'FAQ',
                url: '/faq',
                icon: 'help'
            },
            {
                title: '404 Not Found',
                url: '/notfound',
                icon: 'sad'
            }*/

    }



    private inclusionModulos() {
        this.agregarMenuSucursal();
        this.agregarMenuProductos();
        this.agregarMenuClientes();
        this.agregarMenuPedidos();
        this.agregarCobros();
        this.agregarOrdenPendiente();
        this.agregarOrdenDia();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.login = false;
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            this.auth.authState.subscribe(state => {
                if (state) {
                    this.router.navigate(['/folder/PrincipalLogin']);
                } else {
                    this.router.navigate(['login']);
                }
            });

        });
    }

    ngOnInit() {
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
    }

    private agregarOrdenPendiente() {
        //validar roles y demas cosas
        this.appPages.push(this.getMenuOrdenPendiente());
    }

    private agregarOrdenDia() {
        //validar roles y demas cosas
        this.appPages.push(this.getMenuOrdenDia());
    }


    private agregarMenuProductos() {
        //validar roles y demas cosas
        this.appPages.push(this.getMenuProductos());
    }

    private agregarMenuSucursal() {
        //validar roles y demas cosas
        this.appPages.push(this.getMenuSucursal());
    }

    private agregarMenuClientes() {
        //validar roles y demas cosas
        this.appPages.push(this.getMenuClientes());
    }
    private agregarMenuPedidos() {
        //validar roles y demas cosas
        this.appPages.push(this.getMenuPedidos());
    }

    private agregarCobros() {
        //validar roles y demas cosas
        this.appPages.push(this.getMenuCobros());
    }

    private getMenuProductos() {
        return {
            title: this.msg.get('titulo_menu_productos'),
            url: '/listaproductos',
            icon: 'grid'
        };
    }

    private getMenuOrdenDia() {
        return {
            title: this.msg.get('titulo_menu_orden_dia'),
            url: '/ordendia',
            icon: 'cart'
        };
    }

    private getMenuOrdenPendiente() {
        return {
            title: this.msg.get('titulo_menu_orden_pendiente'),
            url: '/ordenpendientes',
            icon: 'copy'
        };
    }

    private getMenuClientes() {
        return {
            title: this.msg.get('titulo_menu_clientes'),
            url: '/listaclientes',
            icon: 'person'
        };
    }

    private getMenuPedidos() {
        return {
            title: this.msg.get('titulo_menu_pedidos'),
            url: '/pedidos',
            icon: 'newspaper'
        };
    }

    private getMenuCobros() {
        return {
            title: this.msg.get('titulo_menu_cobros'),
            url: '/cobros',
            icon: 'cash'
        };
    }

    private getMenuHome() {
        return {
            title: this.msg.get('titulo_menu_home'),
            url: '/folder/PrincipalMenu',
            icon: 'home'
        };
    }

    private getMenuProfile() {
        return {
            title: this.msg.get('titulo_menu_perfil'),
            url: '/myprofile',
            icon: 'person'
        };
    }

    getMenuSucursal() {
        return {
            title: this.msg.get('titulo_menu_sucursal'),
            url: '/sucursal',
            icon: 'link'
        };
    }

    cerrarSesion() {
        this.menuCtrl.toggle();
        this.auth.logout();
    }
}
