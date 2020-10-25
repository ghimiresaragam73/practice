import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';



/* Routing Configuration  */
const appRoute: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    }, {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    }, {
        path: 'user',
        loadChildren: './users/users.module#UsersModule'
    },
    {
        path: 'product',
        loadChildren: './products/products.module#ProductsModule'
    }, {
        path: '**',
        component: PageNotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}