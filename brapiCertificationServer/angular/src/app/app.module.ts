import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RunTestsComponent } from './run-tests/run-tests.component';
import { TestSelectionComponent } from './test-selection/test-selection.component';
import { TestResultsComponent } from './test-results/test-results.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { TestSelectionListComponent } from './test-selection-list/test-selection-list.component';

const appRoutes: Routes = [
  { path: 'runtests', component: RunTestsComponent },
  { path: 'runtests/:batchId', component: RunTestsComponent },
  { path: 'test/:id',      component: TestDetailsComponent },
  { path: '',
    redirectTo: '/runtests',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/runtests' }
];

@NgModule({
  declarations: [
    AppComponent,
    RunTestsComponent,
    TestSelectionComponent,
    TestResultsComponent,
    TestDetailsComponent,
    TestSelectionListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
