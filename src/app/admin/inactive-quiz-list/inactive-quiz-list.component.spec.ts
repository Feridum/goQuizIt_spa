import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveQuizListComponent } from './inactive-quiz-list.component';

describe('InactiveQuizListComponent', () => {
  let component: InactiveQuizListComponent;
  let fixture: ComponentFixture<InactiveQuizListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveQuizListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveQuizListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
