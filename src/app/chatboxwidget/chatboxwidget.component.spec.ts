import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatboxwidgetComponent } from './chatboxwidget.component';

describe('ChatboxwidgetComponent', () => {
  let component: ChatboxwidgetComponent;
  let fixture: ComponentFixture<ChatboxwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatboxwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatboxwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
