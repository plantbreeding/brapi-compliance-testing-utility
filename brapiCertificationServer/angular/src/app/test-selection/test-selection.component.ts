import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TestCategory } from '../model/test-category.class';
import { TestAccessService } from '../service/test-access.service';
import { UseCase } from '../model/use-case.class';
import { UseCaseResult } from '../model/use-case-result.class';

@Component({
  selector: 'app-test-selection',
  templateUrl: './test-selection.component.html',
  styleUrls: ['./test-selection.component.css']
})
export class TestSelectionComponent implements OnInit {

  @Output() testIds: EventEmitter<String[]> = new EventEmitter();
  @Output() numberOfServers: EventEmitter<number> = new EventEmitter();

  testCategories: TestCategory[];
  selectedCategory: TestCategory;

  constructor(private testAccessService: TestAccessService) { }

  ngOnInit() {
    this.testCategories = this.getCategories();
    this.testAccessService.getTestResultsSubject().subscribe((data: UseCaseResult[]) => {
      data.map((d: UseCaseResult) => {
        let selected = d.useCase;
        for (let useCase of this.testCategories[0].testList) {
          if (useCase.id == selected.id) {
            useCase.selected = true;
            break;
          }
        }
      });
      this.testCategories[0].selectedTotal = this.calcSelectedTotal(this.testCategories[0].testList);
      this.emitTestIds();
    });
  }

  selectCategory(testCategory: TestCategory) {
    this.selectedCategory = testCategory;
  }

  selectedTests(selectedTests: UseCase[]) {
    this.selectedCategory.testList = selectedTests;
    this.selectedCategory.selectedTotal = this.calcSelectedTotal(selectedTests);
    this.emitTestIds();
  }

  emitTestIds() {
    let allIds: String[] = new Array();
    for (let category of this.testCategories) {
      allIds = allIds.concat(category.testList.filter((val) => { return val.selected }).map((val) => { return val.id }));
    }
    this.testIds.emit(allIds);
    this.numberOfServers.emit(this.calcNumServers());
  }

  calcSelectedTotal(cases:UseCase[]):number{
    let x = cases.filter((val) => {return val.selected });
    return x.length;
  }

  calcNumServers(): number{
    let num = 0;
    for (let category of this.testCategories) {
      category.testList.filter((val) => { return val.selected }).forEach((val) => {
        num = num >= val.numberOfServers ? num : val.numberOfServers;
      });
    }
    return num;
  }

  getCategories(): TestCategory[] {
    let testCategories: TestCategory[] = new Array();
    testCategories.push(this.getMockCategory('All Use Cases'));

    this.testAccessService.getAllTestSummaries().subscribe(
      data => {
        this.testCategories[0].testList = data;
        this.testCategories[0].selectedTotal = this.calcSelectedTotal(this.testCategories[0].testList);
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
