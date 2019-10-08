import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllQuestionsComponent } from './get-all-questions.component';

describe('GetAllQuestionsComponent', () => {
  let component: GetAllQuestionsComponent;
  let fixture: ComponentFixture<GetAllQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
