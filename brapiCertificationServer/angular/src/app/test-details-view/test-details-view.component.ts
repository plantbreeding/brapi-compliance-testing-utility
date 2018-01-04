import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UseCase } from '../model/use-case.class';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-test-details-view',
  templateUrl: './test-details-view.component.html',
  styleUrls: ['./test-details-view.component.css']
})
export class TestDetailsViewComponent implements OnInit {

  @Input() useCaseObs: Observable<UseCase>;
  useCase: UseCase;
  @Output() toggleEdit: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.useCaseObs.subscribe((useCase: UseCase) => {
      this.useCase = useCase;
    });
  }

  edit() {
    this.toggleEdit.emit(true);
  }

  parse(raw: string) {
    return JSON.parse(raw);
  }
}
