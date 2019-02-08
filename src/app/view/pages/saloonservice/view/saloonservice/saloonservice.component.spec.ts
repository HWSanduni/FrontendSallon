import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaloonserviceComponent } from './saloonservice.component';

describe('SaloonserviceComponent', () => {
  let component: SaloonserviceComponent;
  let fixture: ComponentFixture<SaloonserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaloonserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaloonserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
