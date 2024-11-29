import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatListModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: [`./sidebar.component.css`],
})
export class SidebarComponent {}
