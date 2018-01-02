import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

import { UseCase } from '../model/use-case.class';
import { TestAccessService } from '../service/test-access.service';

@Component({
  selector: 'app-test-selection-list',
  templateUrl: './test-selection-list.component.html',
  styleUrls: ['./test-selection-list.component.css']
})
export class TestSelectionListComponent implements OnInit {

  @Input() testList: UseCase[];
  @Output() selectedTests = new EventEmitter();
  pagedTests: UseCase[][];
  currentPage: number;
  isSelectAll: boolean;

  constructor(private testAccessService: TestAccessService, private router: Router) { }

  ngOnInit() {
    this.buildPagedTests();
    this.currentPage = 0;

    this.isSelectAll = true;
    for(let test of this.testList){
      this.isSelectAll = test.selected && this.isSelectAll;
    }
  }

  buildPagedTests() {
    this.pagedTests = new Array();
    for (let i = 0; i < this.testList.length; i = i + 10) {
      this.pagedTests.push(this.testList.slice(i, i + 9));
    }
  }

  selectAll(){
    this.isSelectAll = !this.isSelectAll;
    for(let test of this.testList){
      test.selected = this.isSelectAll;
    }
    this.selectedTests.emit(this.testList);
  }
  toggleTest(test: UseCase){
    if(this.isSelectAll){
      this.isSelectAll = false;
    }
    test.selected = !test.selected;
    this.selectedTests.emit(this.testList);
  }
  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage = this.currentPage - 1;
    }
  }
  nextPage() {
    if (this.currentPage < this.pagedTests.length - 1) {
      this.currentPage = this.currentPage + 1;
    }
  }
  setPage(n: number) {
    this.currentPage = n;
  }
  range(n: number): number[] {
    return Array(n).fill(0).map((x, i) => i);
  }
  createNewTest(){
    let useCase: UseCase = new UseCase();
    this.testAccessService.saveTest(useCase).subscribe(id =>{
      this.router.navigate(['/test', id, true]);
    })
  }
}
