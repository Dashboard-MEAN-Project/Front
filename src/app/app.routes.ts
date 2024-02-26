import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path:"/", component: DashboardComponent},
    { path: 'products', component: ProductsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'login', component: LoginComponent },
];
