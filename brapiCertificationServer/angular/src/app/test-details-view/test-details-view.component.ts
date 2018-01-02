import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UseCase } from '../model/use-case.class';

@Component({
  selector: 'app-test-details-view',
  templateUrl: './test-details-view.component.html',
  styleUrls: ['./test-details-view.component.css']
})
export class TestDetailsViewComponent implements OnInit {

  @Input() useCase: UseCase;
  @Output() toggleEdit: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  edit(){
    this.toggleEdit.emit(true);
  }

  parse(raw:string){
    return JSON.parse(raw);
  }
}
