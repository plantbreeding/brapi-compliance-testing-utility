import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TestCategory } from '../model/test-category.class';
import { TestAccessService } from '../service/test-access.service';
import { UseCase } from '../model/use-case.class';

@Component({
  selector: 'app-test-selection',
  templateUrl: './test-selection.component.html',
  styleUrls: ['./test-selection.component.css']
})
export class TestSelectionComponent implements OnInit {

  @Output() testIds: EventEmitter<String[]> = new EventEmitter();

  testCategories: TestCategory[];
  selectedCategory: TestCategory;

  constructor(private testAccessService: TestAccessService) { }

  ngOnInit() {
    this.testCategories = this.getCategories();

  }

  selectCategory(testCategory: TestCategory) {
    this.selectedCategory = testCategory;
  }

  selectedTests(selectedTests: UseCase[]) {
    this.selectedCategory.testList = selectedTests;
    this.selectedCategory.selectedTotal = selectedTests.filter((val) => { return val.selected }).length;
    this.emitTestIds();
  }

  emitTestIds() {
    let allIds: String[] = new Array();
    for (let category of this.testCategories) {
      allIds = allIds.concat(category.testList.filter((val) => { return val.selected }).map((val) => { return val.id }));
    }
    this.testIds.emit(allIds);
  }

  getCategories(): TestCategory[] {
    let testCategories: TestCategory[] = new Array();
    testCategories.push(this.getMockCategory('All Use Cases'));
    testCategories.push(this.getMockCategory('Phenotype Data'));
    testCategories.push(this.getMockCategory('Genomic Data'));
    testCategories.push(this.getMockCategory('Sample Tracking'));

    this.testAccessService.getAllTestSummaries().subscribe(
      data => {
        console.log(data);
        this.testCategories[0].testList = data;
        this.testCategories[0].selectedTotal = this.testCategories[0].testList.filter((val) => { val.selected }).length;
        this.selectedCategory = this.testCategories[0];
      },
      err => {
        console.log('Something went wrong!');
      });

    return testCategories;
  }
  getMockCategory(name: String): TestCategory {
    let cat: TestCategory = new TestCategory();
    cat.categoryName = name;
    cat.testList = new Array();
    return cat;
  }

}
