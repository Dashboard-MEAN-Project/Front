import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [
  {path:"dashboard", component: DashboardComponent},
  // { path: '', component: HomeComponent },
  // { path: '', component: LoginComponent },
  { path: 'dashboard/home', component: HomeComponent },
  { path: 'dashboard/products', component: ProductsComponent },
  { path: 'dashboard/products/add', component: AddProductComponent },
  { path: 'dashboard/users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];
