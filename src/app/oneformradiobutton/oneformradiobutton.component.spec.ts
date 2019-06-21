import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneformradiobuttonComponent } from './oneformradiobutton.component';

describe('OneformradiobuttonComponent', () => {
  let component: OneformradiobuttonComponent;
  let fixture: ComponentFixture<OneformradiobuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneformradiobuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneformradiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
