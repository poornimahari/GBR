import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMemberRegistrationInvestorComponent } from './new-member-registration-investor.component';

describe('NewMemberRegistrationInvestorComponent', () => {
  let component: NewMemberRegistrationInvestorComponent;
  let fixture: ComponentFixture<NewMemberRegistrationInvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMemberRegistrationInvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMemberRegistrationInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
