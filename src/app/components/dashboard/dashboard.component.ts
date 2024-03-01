import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AdminguardService } from '../../services/adminguard/adminguard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideNavComponent, RouterOutlet, HomeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
