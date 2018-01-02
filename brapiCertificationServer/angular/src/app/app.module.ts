import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RunTestsComponent } from './run-tests/run-tests.component';
import { TestSelectionComponent } from './test-selection/test-selection.component';
import { TestResultsComponent } from './test-results/test-results.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { TestSelectionListComponent } from './test-selection-list/test-selection-list.component';
import { TestResultDetailsComponent } from './test-result-details/test-result-details.component';
import { TestDetailsEditComponent } from './test-details-edit/test-details-edit.component';
import { TestDetailsViewComponent } from './test-details-view/test-details-view.component';

const appRoutes: Routes = [
  { path: 'runtests', component: RunTestsComponent },
  { path: 'runtests/:batchId', component: RunTestsComponent },
  { path: 'test/:id/:edit', component: TestDetailsComponent },
  { path: 'results/:batchId/:id', component: TestResultDetailsComponent },
  { path: '', pathMatch:'full', redirectTo: '/runtests' },
  { path: '**', redirectTo: '/runtests' }
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
    TestDetailsViewComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
