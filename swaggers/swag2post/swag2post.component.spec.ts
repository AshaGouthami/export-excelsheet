import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Swag2postComponent } from './swag2post.component';

describe('Swag2postComponent', () => {
  let component: Swag2postComponent;
  let fixture: ComponentFixture<Swag2postComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Swag2postComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Swag2postComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
