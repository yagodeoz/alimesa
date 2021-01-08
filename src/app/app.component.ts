import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {MessagesProvider} from './messages/messages';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    public selectedIndex = 0;
    public appPages: any;
    public labels = ['Noticia 1', 'Noticia 2', 'Noticia N'];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private msg: MessagesProvider
    ) {
        this.construccionMenu();
        this.initializeApp();
    }

    construccionMenu() {
        this.appPages = [
            this.getMenuHome(),
            this.getMenuProfile()
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
                url: '/shoplist',
                icon: 'grid'
            },
            {
                title: 'Single Product',
                url: '/singleproduct',
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
        this.agregarMenuProductos();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnInit() {
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
    }

    private agregarMenuProductos() {
        //validar roles y demas cosas
        this.appPages.push(this.getMenuProductos());
    }

    private getMenuProductos() {
        return {
            title: this.msg.get('titulo_menu_productos'),
            url: '/shoplist',
            icon: 'grid'
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
}
