import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Swag1Component } from './swag1.component';

describe('Swag1Component', () => {
  let component: Swag1Component;
  let fixture: ComponentFixture<Swag1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Swag1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Swag1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
