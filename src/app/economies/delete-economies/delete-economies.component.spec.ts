import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEconomiesComponent } from './delete-economies.component';

describe('DeleteEconomiesComponent', () => {
  let component: DeleteEconomiesComponent;
  let fixture: ComponentFixture<DeleteEconomiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEconomiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEconomiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
