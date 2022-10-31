import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoTietKiemListComponent } from './so-tiet-kiem-list.component';

describe('SoTietKiemListComponent', () => {
  let component: SoTietKiemListComponent;
  let fixture: ComponentFixture<SoTietKiemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoTietKiemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoTietKiemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
