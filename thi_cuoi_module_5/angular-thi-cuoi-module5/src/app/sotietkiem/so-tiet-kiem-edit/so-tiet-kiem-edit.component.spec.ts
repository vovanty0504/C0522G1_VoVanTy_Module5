import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoTietKiemEditComponent } from './so-tiet-kiem-edit.component';

describe('SoTietKiemEditComponent', () => {
  let component: SoTietKiemEditComponent;
  let fixture: ComponentFixture<SoTietKiemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoTietKiemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoTietKiemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
