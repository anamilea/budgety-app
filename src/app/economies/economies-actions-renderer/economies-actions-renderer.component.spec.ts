import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomiesActionsRendererComponent } from './economies-actions-renderer.component';

describe('EconomiesActionsRendererComponent', () => {
  let component: EconomiesActionsRendererComponent;
  let fixture: ComponentFixture<EconomiesActionsRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomiesActionsRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomiesActionsRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
