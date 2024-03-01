import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserProductsComponent } from './components/user-products/user-products.component';
import { UserguardService } from './services/userguard/userguard.service';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SignupComponent,
    ProductsComponent,
    InputComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    UserProductsComponent,
  ],
  providers: [UserguardService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'front';
}
