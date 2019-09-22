import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedpageSearchInvestorComponent } from './loggedpage-search-investor.component';

describe('LoggedpageSearchInvestorComponent', () => {
  let component: LoggedpageSearchInvestorComponent;
  let fixture: ComponentFixture<LoggedpageSearchInvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedpageSearchInvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedpageSearchInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
