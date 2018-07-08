import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycinfoComponent } from './kycinfo.component';

describe('KycinfoComponent', () => {
  let component: KycinfoComponent;
  let fixture: ComponentFixture<KycinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
