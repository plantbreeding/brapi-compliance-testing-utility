import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDetailsViewComponent } from './test-details-view.component';

describe('TestDetailsViewComponent', () => {
  let component: TestDetailsViewComponent;
  let fixture: ComponentFixture<TestDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
