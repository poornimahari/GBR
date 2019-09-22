import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowGbrWorksComponent } from './how-gbr-works.component';

describe('HowGbrWorksComponent', () => {
  let component: HowGbrWorksComponent;
  let fixture: ComponentFixture<HowGbrWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowGbrWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowGbrWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
