import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceActionsRendererComponent } from './invoice-actions-renderer.component';

describe('InvoiceActionsRendererComponent', () => {
  let component: InvoiceActionsRendererComponent;
  let fixture: ComponentFixture<InvoiceActionsRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceActionsRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceActionsRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
