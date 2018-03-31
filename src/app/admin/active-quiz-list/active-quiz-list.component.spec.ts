import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveQuizListComponent } from './active-quiz-list.component';

describe('ActiveQuizListComponent', () => {
  let component: ActiveQuizListComponent;
  let fixture: ComponentFixture<ActiveQuizListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveQuizListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveQuizListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
