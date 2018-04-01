import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQuizListElementComponent } from './single-quiz-list-element.component';

describe('SingleQuizListElementComponent', () => {
  let component: SingleQuizListElementComponent;
  let fixture: ComponentFixture<SingleQuizListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleQuizListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleQuizListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
