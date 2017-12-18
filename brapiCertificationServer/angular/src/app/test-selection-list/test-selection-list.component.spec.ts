import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSelectionListComponent } from './test-selection-list.component';

describe('TestSelectionListComponent', () => {
  let component: TestSelectionListComponent;
  let fixture: ComponentFixture<TestSelectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSelectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
