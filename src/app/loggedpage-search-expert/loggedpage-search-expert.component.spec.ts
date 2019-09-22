import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedpageSearchExpertComponent } from './loggedpage-search-expert.component';

describe('LoggedpageSearchExpertComponent', () => {
  let component: LoggedpageSearchExpertComponent;
  let fixture: ComponentFixture<LoggedpageSearchExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedpageSearchExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedpageSearchExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
