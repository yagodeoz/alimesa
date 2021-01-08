import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'shoplist',
    loadChildren: () => import('./shoplist/shoplist.module').then( m => m.ShoplistPageModule)
  },
  {
    path: 'singleproduct',
    loadChildren: () => import('./singleproduct/singleproduct.module').then( m => m.SingleproductPageModule)
  },
  {
    path: 'shoppingcart',
    loadChildren: () => import('./shoppingcart/shoppingcart.module').then( m => m.ShoppingcartPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'myprofile',
    loadChildren: () => import('./myprofile/myprofile.module').then( m => m.MyprofilePageModule)
  },
  {
    path: 'myaddress',
    loadChildren: () => import('./myaddress/myaddress.module').then( m => m.MyaddressPageModule)
  },
  {
    path: 'orderlist',
    loadChildren: () => import('./orderlist/orderlist.module').then( m => m.OrderlistPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'notfound',
    loadChildren: () => import('./notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },
  {
    path: 'mywallet',
    loadChildren: () => import('./mywallet/mywallet.module').then( m => m.MywalletPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
