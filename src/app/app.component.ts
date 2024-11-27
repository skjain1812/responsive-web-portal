import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavContent } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, MatSidenav, MatSidenavContainer, MatSidenavContent],
  template: `
    <app-header (toggleSidebar)="sidenav.toggle()"></app-header>
    <mat-sidenav-container>
      <mat-sidenav #sidenav mode="side" opened>
        <app-sidebar></app-sidebar>
      </mat-sidenav>
      <mat-sidenav-content>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      mat-sidenav-container {
        height: 100vh;
      }
    `,
  ],
})
export class AppComponent {}
