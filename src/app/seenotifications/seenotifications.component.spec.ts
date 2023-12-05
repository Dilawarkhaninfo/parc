import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenotificationsComponent } from './seenotifications.component';

describe('SeenotificationsComponent', () => {
  let component: SeenotificationsComponent;
  let fixture: ComponentFixture<SeenotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeenotificationsComponent]
    });
    fixture = TestBed.createComponent(SeenotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
