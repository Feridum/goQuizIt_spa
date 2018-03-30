import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnactiveQuizListComponent } from './unactive-quiz-list.component';

describe('UnactiveQuizListComponent', () => {
  let component: UnactiveQuizListComponent;
  let fixture: ComponentFixture<UnactiveQuizListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnactiveQuizListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnactiveQuizListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
