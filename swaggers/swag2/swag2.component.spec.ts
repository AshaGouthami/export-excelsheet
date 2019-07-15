import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Swag2Component } from './swag2.component';

describe('Swag2Component', () => {
  let component: Swag2Component;
  let fixture: ComponentFixture<Swag2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Swag2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Swag2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
