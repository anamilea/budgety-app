import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeActionsRendererComponent } from './income-actions-renderer.component';

describe('IncomeActionsRendererComponent', () => {
  let component: IncomeActionsRendererComponent;
  let fixture: ComponentFixture<IncomeActionsRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeActionsRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeActionsRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
