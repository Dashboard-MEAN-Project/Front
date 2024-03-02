import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ErrorComponent } from './components/error/error.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { AdminguardService } from './services/adminguard/adminguard.service';
import { UserguardService } from './services/userguard/userguard.service';

export const routes: Routes = [
  {
    path: 'userhome',
    component: UserhomeComponent,
    canActivate: [UserguardService],
  },
  // { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AdminguardService],
    children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/add', component: AddProductComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/edit/:id', component: UserProfileComponent },
    ],
  },
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '*', component: ErrorComponent },
];
