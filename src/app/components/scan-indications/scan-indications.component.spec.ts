import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanIndicationsComponent } from './scan-indications.component';

describe('ScanIndicationsComponent', () => {
  let component: ScanIndicationsComponent;
  let fixture: ComponentFixture<ScanIndicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanIndicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanIndicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
