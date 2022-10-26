import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityServiceComponent } from './facility-service.component';

describe('FacilityServiceComponent', () => {
  let component: FacilityServiceComponent;
  let fixture: ComponentFixture<FacilityServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
