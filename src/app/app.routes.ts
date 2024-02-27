import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  // {path:"/", component: DashboardComponent},
  { path: 'dashboard/home', component: HomeComponent },
  { path: 'dashboard/products', component: ProductsComponent },
  { path: 'dashboard/users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
];
