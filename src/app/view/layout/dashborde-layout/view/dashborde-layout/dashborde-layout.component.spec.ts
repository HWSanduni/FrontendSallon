import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordeLayoutComponent } from './dashborde-layout.component';

describe('DashbordeLayoutComponent', () => {
  let component: DashbordeLayoutComponent;
  let fixture: ComponentFixture<DashbordeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbordeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
