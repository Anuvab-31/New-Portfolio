import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemePopupComponent } from './theme-popup.component';

describe('ThemePopupComponent', () => {
  let component: ThemePopupComponent;
  let fixture: ComponentFixture<ThemePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
