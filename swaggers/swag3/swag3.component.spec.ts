import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Swag3Component } from './swag3.component';

describe('Swag3Component', () => {
  let component: Swag3Component;
  let fixture: ComponentFixture<Swag3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Swag3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Swag3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
