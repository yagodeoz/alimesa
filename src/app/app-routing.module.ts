import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from './servicios/authGuard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'listaproductos',
    loadChildren: () => import('./listaproductos/listaproductos.module').then(m => m.ListaProductosPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'listaclientes',
    loadChildren: () => import('./listaclientes/listaclientes.module').then(m => m.ListaClientesPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'producto',
    loadChildren: () => import('./producto/producto.module').then(m => m.ProductoPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then(m => m.ClientePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'sucursal',
    loadChildren: () => import('./sucursal/sucursal.module').then(m => m.SucursalPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'crearcliente',
    loadChildren: () => import('./cliente/crearcliente/crearcliente.module').then(m => m.CrearclientePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'ordenpendientes',
    loadChildren: () => import('./flujopedidos/ordenespendientes/ordenespendientes.module').then(m => m.OrdenespendientesPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'ordendia',
    loadChildren: () => import('./flujopedidos/ordenesdia/ordenesdia.module').then(m => m.OrdenesdiaPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'cobros',
    loadChildren: () => import('./cobros/cobros.module').then(m => m.CobrosPageModule),
    canActivate: [AuthGuardService]
  },

  {
    path: 'cabecerapedido',
    loadChildren: () => import('./flujopedidos/cabecerapedido/cabecerapedidos.module').then(m => m.CabecerapedidosPageModule),
    canActivate: [AuthGuardService]
  },

  {
    path: 'cabeceracobro',
    loadChildren: () => import('./cobros/cabeceracobro/cabeceracobros.module').then(m => m.CabeceracobrosPageModule),
    canActivate: [AuthGuardService]
  },

  {
    path: 'geolocalizacion',
    loadChildren: () => import('./cliente/geolocalizacion/geolocalizacion.module').then(m => m.GeolocalizacionPageModule),
    canActivate: [AuthGuardService]
  },

  {
    path: 'cabeceracobrobanco',
    loadChildren: () => import('./cobros/cabeceracobrobanco/cabeceracobrobanco.module').then(m => m.CabeceracobrobancoPageModule),
    canActivate: [AuthGuardService]
  },

  {
    path: 'pedidos',
    loadChildren: () => import('./flujopedidos/flujopedidos.module').then(m => m.FlujopedidosPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'editcliente',
    loadChildren: () => import('./cliente/editarcliente/editcliente.module').then(m => m.EditclientePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'shoppingcart',
    loadChildren: () => import('./shoppingcart/shoppingcart.module').then( m => m.ShoppingcartPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'myprofile',
    loadChildren: () => import('./myprofile/myprofile.module').then( m => m.MyprofilePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'myaddress',
    loadChildren: () => import('./myaddress/myaddress.module').then( m => m.MyaddressPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'orderlist',
    loadChildren: () => import('./orderlist/orderlist.module').then( m => m.OrderlistPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'notfound',
    loadChildren: () => import('./notfound/notfound.module').then( m => m.NotfoundPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./wishlist/wishlist.module').then( m => m.WishlistPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'mywallet',
    loadChildren: () => import('./mywallet/mywallet.module').then( m => m.MywalletPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule),
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
