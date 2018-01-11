import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { RunTestsComponent } from './run-tests/run-tests.component';
import { TestSelectionComponent } from './test-selection/test-selection.component';
import { TestResultsComponent } from './test-results/test-results.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { TestSelectionListComponent } from './test-selection-list/test-selection-list.component';
import { TestResultDetailsComponent } from './test-result-details/test-result-details.component';
import { TestDetailsEditComponent } from './test-details-edit/test-details-edit.component';
import { TestDetailsViewComponent } from './test-details-view/test-details-view.component';
import { LoginComponent } from './login/login.component';
import { AuthModule } from './auth.module';
import { AlertsComponent } from './alerts/alerts.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'runtests', component: RunTestsComponent },
  { path: 'runtests/:batchId', component: RunTestsComponent },
  { path: 'test/:id/:edit', component: TestDetailsComponent },
  { path: 'results/:batchId/:id', component: TestResultDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  declarations: [
    AppComponent,
    RunTestsComponent,
    TestSelectionComponent,
    TestResultsComponent,
    TestDetailsComponent,
    TestSelectionListComponent,
    TestResultDetailsComponent,
    TestDetailsEditComponent,
    TestDetailsViewComponent,
    LoginComponent,
    AlertsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
