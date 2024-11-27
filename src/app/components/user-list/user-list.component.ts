import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgForOf],
  template: `
    <div class="user-list">
      <div *ngFor="let user of users" class="user-item">
        {{ user }}
      </div>
    </div>
  `,
  styles: [
    `
      .user-list {
        padding: 16px;
        background: #f1f1f1;
      }
      .user-item {
        padding: 8px;
        margin: 4px 0;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    `,
  ],
})
export class UserListComponent {
  users: string[] = [
    'Veda Murray',
    'Ashton Miranda',
    'Amina Ahmed',
    'Harry Buchanan',
    'Maryam Clayton',
    'Boston Montes',
  ];
}
