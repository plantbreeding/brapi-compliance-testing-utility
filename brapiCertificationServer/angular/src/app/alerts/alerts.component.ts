import { Component, OnInit } from '@angular/core';
import { Alert } from '../model/alert';
import { AlertService } from '../service/alert.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  alerts: Alert[] = new Array();

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert: Alert) => {
      if (this.alerts.length == 3) {
        this.alerts.shift();
      }
      this.alerts.push(alert);
    });
  }

  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return;
    }

    // return css class based on alert type
    switch (alert.type) {
      case 0:
        return 'alert alert-success';
      case 1:
        return 'alert alert-danger';
      case 2:
        return 'alert alert-info';
      case 3:
        return 'alert alert-warning';
    }
  }

}
