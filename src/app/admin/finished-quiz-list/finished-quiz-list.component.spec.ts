import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FinishedQuizListComponent} from './finished-quiz-list.component';

describe('FinishedQuizListComponent', () => {
  let component: FinishedQuizListComponent;
  let fixture: ComponentFixture<FinishedQuizListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FinishedQuizListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedQuizListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
