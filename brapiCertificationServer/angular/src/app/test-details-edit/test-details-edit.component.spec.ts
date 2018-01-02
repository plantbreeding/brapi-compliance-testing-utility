import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDetailsEditComponent } from './test-details-edit.component';

describe('TestDetailsEditComponent', () => {
  let component: TestDetailsEditComponent;
  let fixture: ComponentFixture<TestDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDetailsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
