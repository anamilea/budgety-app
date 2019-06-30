import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEconomiesComponent } from './create-economies.component';

describe('CreateEconomiesComponent', () => {
  let component: CreateEconomiesComponent;
  let fixture: ComponentFixture<CreateEconomiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEconomiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEconomiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
