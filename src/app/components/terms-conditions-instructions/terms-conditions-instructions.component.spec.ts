import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsConditionsInstructionsComponent } from './terms-conditions-instructions.component';

describe('TermsConditionsInstructionsComponent', () => {
  let component: TermsConditionsInstructionsComponent;
  let fixture: ComponentFixture<TermsConditionsInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsConditionsInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsConditionsInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
