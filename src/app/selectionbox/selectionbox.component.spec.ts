import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionboxComponent } from './selectionbox.component';

describe('SelectionboxComponent', () => {
  let component: SelectionboxComponent;
  let fixture: ComponentFixture<SelectionboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
