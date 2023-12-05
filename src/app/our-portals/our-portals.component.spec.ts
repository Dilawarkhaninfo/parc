import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPortalsComponent } from './our-portals.component';

describe('OurPortalsComponent', () => {
  let component: OurPortalsComponent;
  let fixture: ComponentFixture<OurPortalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurPortalsComponent]
    });
    fixture = TestBed.createComponent(OurPortalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
