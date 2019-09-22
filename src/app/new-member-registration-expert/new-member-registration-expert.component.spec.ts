import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMemberRegistrationExpertComponent } from './new-member-registration-expert.component';

describe('NewMemberRegistrationExpertComponent', () => {
  let component: NewMemberRegistrationExpertComponent;
  let fixture: ComponentFixture<NewMemberRegistrationExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMemberRegistrationExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMemberRegistrationExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
