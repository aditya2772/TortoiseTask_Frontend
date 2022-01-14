import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PausedProfilesComponent } from './paused-profiles.component';

describe('PausedProfilesComponent', () => {
  let component: PausedProfilesComponent;
  let fixture: ComponentFixture<PausedProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PausedProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PausedProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
