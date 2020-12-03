import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDniFrontComponent } from './preview-dni-front.component';

describe('PreviewDniFrontComponent', () => {
  let component: PreviewDniFrontComponent;
  let fixture: ComponentFixture<PreviewDniFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewDniFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewDniFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
