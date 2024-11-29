import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, MatToolbarModule, MatIconModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit toggleSidebar event when menu button is clicked', () => {
    spyOn(component.toggleSidebar, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.toggleSidebar.emit).toHaveBeenCalled();
  });
});
