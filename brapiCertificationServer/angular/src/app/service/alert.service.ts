import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../model/alert';

@Injectable()
export class AlertService {

  private alertSub: Subject<Alert> = new Subject();

  constructor() {
  }

  getAlert(): Subject<Alert> {
    return this.alertSub;
  }

  postAlert(alert: Alert){
    this.alertSub.next(alert);
  }

  handleHTTPError(err){
    if(err.status == 403) {
      this.postAlert(new Alert('You do not have permission to perform this action', 1));
    }else if(err.status == 404) {
      this.postAlert(new Alert('This action is unavailable', 1));
    }else{
      console.log(err);
    }
  }
}
