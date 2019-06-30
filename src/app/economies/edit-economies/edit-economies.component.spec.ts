import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEconomiesComponent } from './edit-economies.component';

describe('EditEconomiesComponent', () => {
  let component: EditEconomiesComponent;
  let fixture: ComponentFixture<EditEconomiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEconomiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEconomiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
