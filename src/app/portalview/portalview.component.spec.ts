import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalviewComponent } from './portalview.component';

describe('PortalviewComponent', () => {
  let component: PortalviewComponent;
  let fixture: ComponentFixture<PortalviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalviewComponent]
    });
    fixture = TestBed.createComponent(PortalviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
