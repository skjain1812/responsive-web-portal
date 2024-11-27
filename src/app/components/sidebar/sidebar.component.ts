import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatListModule, RouterLink],
  template: `
    <mat-nav-list>
      <a mat-list-item routerLink="/">Users</a>
      <a mat-list-item routerLink="/settings">Settings</a>
    </mat-nav-list>
  `,
})
export class SidebarComponent {}
