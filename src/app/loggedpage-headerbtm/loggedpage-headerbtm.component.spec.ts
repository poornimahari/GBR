import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedpageHeaderbtmComponent } from './loggedpage-headerbtm.component';

describe('LoggedpageHeaderbtmComponent', () => {
  let component: LoggedpageHeaderbtmComponent;
  let fixture: ComponentFixture<LoggedpageHeaderbtmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedpageHeaderbtmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedpageHeaderbtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
