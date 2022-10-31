import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSoTietKiemComponent } from './create-so-tiet-kiem.component';

describe('CreateSoTietKiemComponent', () => {
  let component: CreateSoTietKiemComponent;
  let fixture: ComponentFixture<CreateSoTietKiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSoTietKiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSoTietKiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
