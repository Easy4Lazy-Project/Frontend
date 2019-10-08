import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuestionComponent } from './get-question.component';

describe('GetQuestionComponent', () => {
  let component: GetQuestionComponent;
  let fixture: ComponentFixture<GetQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
