import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedpageSearchCompanyComponent } from './loggedpage-search-company.component';

describe('LoggedpageSearchCompanyComponent', () => {
  let component: LoggedpageSearchCompanyComponent;
  let fixture: ComponentFixture<LoggedpageSearchCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedpageSearchCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedpageSearchCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
