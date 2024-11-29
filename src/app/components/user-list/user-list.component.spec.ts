import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with users array', () => {
    expect(component.users.length).toBe(6);
    expect(component.users).toContain('Veda Murray');
  });

  it('should render user list items', () => {
    const compiled = fixture.nativeElement;
    const userItems = compiled.querySelectorAll('.user-item');
    expect(userItems.length).toBe(6);
  });
});