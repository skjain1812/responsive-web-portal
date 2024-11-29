import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
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
