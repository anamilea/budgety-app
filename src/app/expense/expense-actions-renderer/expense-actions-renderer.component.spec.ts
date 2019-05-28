import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseActionsRendererComponent } from './expense-actions-renderer.component';

describe('ExpenseActionsRendererComponent', () => {
  let component: ExpenseActionsRendererComponent;
  let fixture: ComponentFixture<ExpenseActionsRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseActionsRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseActionsRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
