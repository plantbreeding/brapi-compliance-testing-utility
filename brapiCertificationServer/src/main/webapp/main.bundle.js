webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/alerts/alerts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alerts/alerts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-offset-2 col-sm-8 col-xs-offset-1 col-xs-10\">\n        <div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\">\n            {{alert.message}}\n            <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/alerts/alerts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_alert_service__ = __webpack_require__("../../../../../src/app/service/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertsComponent = (function () {
    function AlertsComponent(alertService) {
        this.alertService = alertService;
        this.alerts = new Array();
    }
    AlertsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert().subscribe(function (alert) {
            if (_this.alerts.length == 3) {
                _this.alerts.shift();
            }
            _this.alerts.push(alert);
        });
    };
    AlertsComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertsComponent.prototype.cssClass = function (alert) {
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
    };
    AlertsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__("../../../../../src/app/alerts/alerts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/alerts/alerts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_alert_service__["a" /* AlertService */]])
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-offset-2 col-sm-8 col-xs-offset-1 col-xs-10 text-center\">\n            <h1>BrAPI Test Client</h1>\n        </div>\n        <div class=\"pull-right\">\n            <a (click)=\"signOut()\" class=\"btn btn-default\">Sign out</a>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-offset-2 col-sm-8 col-xs-offset-1 col-xs-10\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_alert_service__ = __webpack_require__("../../../../../src/app/service/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.title = 'app';
    }
    AppComponent.prototype.signOut = function () {
        this.loginService.signOut(function () {
            window.location.href = '/app/login';
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_2__service_login_service__["a" /* LoginService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__service_login_service__["a" /* LoginService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__run_tests_run_tests_component__ = __webpack_require__("../../../../../src/app/run-tests/run-tests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__test_selection_test_selection_component__ = __webpack_require__("../../../../../src/app/test-selection/test-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__test_results_test_results_component__ = __webpack_require__("../../../../../src/app/test-results/test-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__test_details_test_details_component__ = __webpack_require__("../../../../../src/app/test-details/test-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__test_selection_list_test_selection_list_component__ = __webpack_require__("../../../../../src/app/test-selection-list/test-selection-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__test_result_details_test_result_details_component__ = __webpack_require__("../../../../../src/app/test-result-details/test-result-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__test_details_edit_test_details_edit_component__ = __webpack_require__("../../../../../src/app/test-details-edit/test-details-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__test_details_view_test_details_view_component__ = __webpack_require__("../../../../../src/app/test-details-view/test-details-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_module__ = __webpack_require__("../../../../../src/app/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__alerts_alerts_component__ = __webpack_require__("../../../../../src/app/alerts/alerts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: 'app/login', component: __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */] },
    { path: 'app/runtests', component: __WEBPACK_IMPORTED_MODULE_6__run_tests_run_tests_component__["a" /* RunTestsComponent */] },
    { path: 'app/runtests/:batchId', component: __WEBPACK_IMPORTED_MODULE_6__run_tests_run_tests_component__["a" /* RunTestsComponent */] },
    { path: 'app/test/:id/:edit', component: __WEBPACK_IMPORTED_MODULE_9__test_details_test_details_component__["a" /* TestDetailsComponent */] },
    { path: 'app/results/:batchId/:id', component: __WEBPACK_IMPORTED_MODULE_11__test_result_details_test_result_details_component__["a" /* TestResultDetailsComponent */] },
    { path: 'app', pathMatch: 'full', redirectTo: 'app/login' },
    { path: '', pathMatch: 'full', redirectTo: 'app/login' },
    { path: '**', redirectTo: 'app/login' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__run_tests_run_tests_component__["a" /* RunTestsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__test_selection_test_selection_component__["a" /* TestSelectionComponent */],
                __WEBPACK_IMPORTED_MODULE_8__test_results_test_results_component__["a" /* TestResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__test_details_test_details_component__["a" /* TestDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__test_selection_list_test_selection_list_component__["a" /* TestSelectionListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__test_result_details_test_result_details_component__["a" /* TestResultDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__test_details_edit_test_details_edit_component__["a" /* TestDetailsEditComponent */],
                __WEBPACK_IMPORTED_MODULE_13__test_details_view_test_details_view_component__["a" /* TestDetailsViewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__alerts_alerts_component__["a" /* AlertsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__auth_module__["a" /* AuthModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthConfig"]({
        tokenName: 'token',
        tokenGetter: (function () { return sessionStorage.getItem('token'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), http, options);
}
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"],
                    useFactory: authHttpServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]]
                }]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dont-break-out {\r\n\r\n    /* These are technically the same, but use both */\r\n    overflow-wrap: break-word;\r\n    word-wrap: break-word;\r\n  \r\n    -ms-word-break: break-all;\r\n    /* Instead use this non-standard one: */\r\n    word-break: break-word;\r\n  \r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\n<div id=\"googleBtn\" class=\"g-signin2\" (click)=\"signIn()\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginService.googleInit();
    };
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        this.loginService.signIn(function () {
            _this.router.navigate(['/app/runtests']);
        });
    };
    LoginComponent.prototype.showJWT = function () {
        return sessionStorage.getItem('token');
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__service_login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/alert.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
var Alert = (function () {
    function Alert(message, type) {
        this.message = message;
        this.type = type;
    }
    return Alert;
}());



/***/ }),

/***/ "../../../../../src/app/model/call-defintion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallDefinition; });
var CallDefinition = (function () {
    function CallDefinition() {
    }
    CallDefinition.sort = function (a, b) {
        if (a.call < b.call)
            return -1;
        if (a.call > b.call)
            return 1;
        return 0;
    };
    return CallDefinition;
}());



/***/ }),

/***/ "../../../../../src/app/model/run-tests-request.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunTestRequest; });
var RunTestRequest = (function () {
    function RunTestRequest() {
    }
    return RunTestRequest;
}());



/***/ }),

/***/ "../../../../../src/app/model/test-call-param.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestCallParam; });
var TestCallParam = (function () {
    function TestCallParam(param, value) {
        this.param = param;
        this.value = value;
    }
    return TestCallParam;
}());



/***/ }),

/***/ "../../../../../src/app/model/test-call.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestCall; });
var TestCall = (function () {
    function TestCall() {
        this.paramList = [];
    }
    return TestCall;
}());



/***/ }),

/***/ "../../../../../src/app/model/test-category.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestCategory; });
var TestCategory = (function () {
    function TestCategory() {
    }
    return TestCategory;
}());



/***/ }),

/***/ "../../../../../src/app/model/use-case-result.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UseCaseResult; });
var UseCaseResult = (function () {
    function UseCaseResult() {
    }
    return UseCaseResult;
}());



/***/ }),

/***/ "../../../../../src/app/model/use-case.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UseCase; });
var UseCase = (function () {
    function UseCase() {
        this.tests = new Array();
        this.selected = true;
    }
    return UseCase;
}());



/***/ }),

/***/ "../../../../../src/app/run-tests/run-tests.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/run-tests/run-tests.component.html":
/***/ (function(module, exports) {

module.exports = "<app-alerts></app-alerts>\n<app-test-selection (testIds)=\"setTestIds($event)\"></app-test-selection>\n<div class=\"row\" style=\"margin: 10px 0\">\n  <div class=\"col-xs-offset-1 col-xs-2\">\n    <p style=\"margin-top: 3px\">Base URL: </p>\n  </div>\n  <div class=\"col-xs-8\">\n    <input class=\"col-xs-12\" type=\"text\" [value]=\"baseURL\" />\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-offset-5 col-xs-2\">\n    <a [routerLink]=\"\" (click)=\"runTest()\" class=\"btn btn-default\" [ngClass]=\"{'disabled': testIds.length == 0}\">\n      Run Tests\n    </a>\n  </div>\n</div>\n<app-test-results></app-test-results>"

/***/ }),

/***/ "../../../../../src/app/run-tests/run-tests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunTestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_test_access_service__ = __webpack_require__("../../../../../src/app/service/test-access.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_run_tests_request_class__ = __webpack_require__("../../../../../src/app/model/run-tests-request.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_alert_service__ = __webpack_require__("../../../../../src/app/service/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RunTestsComponent = (function () {
    function RunTestsComponent(testAccessService, location, route, alertService) {
        this.testAccessService = testAccessService;
        this.location = location;
        this.route = route;
        this.alertService = alertService;
        this.testIds = new Array();
    }
    RunTestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.baseURL = 'http://localhost:8081/brapi/v1';
        this.sub = this.route.params.subscribe(function (params) {
            var testResultsBatchId = params['batchId'];
            if (testResultsBatchId) {
                _this.testAccessService.getTestResults(testResultsBatchId);
            }
        });
    };
    RunTestsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    RunTestsComponent.prototype.setTestIds = function (ids) {
        this.testIds = ids;
    };
    RunTestsComponent.prototype.runTest = function () {
        var _this = this;
        var runReq = new __WEBPACK_IMPORTED_MODULE_4__model_run_tests_request_class__["a" /* RunTestRequest */]();
        runReq.testCaseIds = this.testIds;
        runReq.baseURL = this.baseURL;
        this.testAccessService.runTests(runReq).subscribe(function (batchId) {
            _this.location.go('runtests/' + batchId);
            _this.testAccessService.getTestResults(batchId);
        }, function (err) {
            _this.alertService.handleHTTPError(err);
        });
    };
    RunTestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-run-tests',
            template: __webpack_require__("../../../../../src/app/run-tests/run-tests.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_test_access_service__["a" /* TestAccessService */], __WEBPACK_IMPORTED_MODULE_5__service_alert_service__["a" /* AlertService */]],
            styles: [__webpack_require__("../../../../../src/app/run-tests/run-tests.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_test_access_service__["a" /* TestAccessService */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__service_alert_service__["a" /* AlertService */]])
    ], RunTestsComponent);
    return RunTestsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_alert__ = __webpack_require__("../../../../../src/app/model/alert.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService() {
        this.alertSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    AlertService.prototype.getAlert = function () {
        return this.alertSub;
    };
    AlertService.prototype.postAlert = function (alert) {
        this.alertSub.next(alert);
    };
    AlertService.prototype.handleHTTPError = function (err) {
        if (err.status == 403) {
            this.postAlert(new __WEBPACK_IMPORTED_MODULE_2__model_alert__["a" /* Alert */]('You do not have permission to perform this action', 1));
        }
        else if (err.status == 404) {
            this.postAlert(new __WEBPACK_IMPORTED_MODULE_2__model_alert__["a" /* Alert */]('This action is unavailable', 1));
        }
        else {
            console.log(err);
        }
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/service/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginService = (function () {
    function LoginService() {
        this.googleInit();
    }
    LoginService.prototype.googleInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: '408930718026-1m4t6slfmp8c0vu0a4s0sp4ujvv3vqfa.apps.googleusercontent.com',
                cookiepolicy: 'none',
                scope: 'profile email'
            });
        });
    };
    LoginService.prototype.signIn = function (callback) {
        var _this = this;
        this.auth2.signIn({ prompt: 'select_account' }).then(function () {
            var googleUser = _this.auth2.currentUser.get();
            sessionStorage.setItem('token', 'Bearer ' + googleUser.getAuthResponse().id_token);
            callback();
        }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
        });
    };
    LoginService.prototype.signOut = function (callback) {
        this.auth2.signOut().then(function () {
            sessionStorage.removeItem('token');
            callback();
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/service/test-access.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestAccessService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_service__ = __webpack_require__("../../../../../src/app/service/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestAccessService = (function () {
    function TestAccessService(http, alertService) {
        this.http = http;
        this.alertService = alertService;
        // for dev server: string = 'http://localhost:8081/';
        this.server = window.location.hostname;
        this.resultsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["b" /* Subject */]();
    }
    TestAccessService.prototype.runTests = function (req) {
        return this.http.post(this.server + 'runtest', req).map(this.getStringBody);
    };
    TestAccessService.prototype.getTestResults = function (batchId) {
        var _this = this;
        this.subscription = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].timer(0, 1000).switchMap(function (val) {
            return _this.http.get(_this.server + 'testresults/' + batchId).map(_this.getJsonBody);
        }).subscribe(function (data) {
            if (data) {
                _this.resultsSubject.next(data.results);
                if (data.complete >= data.total) {
                    _this.subscription.unsubscribe();
                }
            }
        }, function (err) {
            _this.alertService.handleHTTPError(err);
        });
    };
    TestAccessService.prototype.getAllTestSummaries = function () {
        return this.http.get(this.server + 'tests').map(this.getJsonBody);
    };
    TestAccessService.prototype.getTestResultsSubject = function () {
        return this.resultsSubject;
    };
    TestAccessService.prototype.getTest = function (id) {
        return this.http.get(this.server + 'test/' + id).map(this.getJsonBody);
    };
    TestAccessService.prototype.saveTest = function (useCase) {
        return this.http.post(this.server + 'test', useCase).map(this.getStringBody);
    };
    TestAccessService.prototype.deleteUseCase = function (id) {
        return this.http.delete(this.server + 'test/' + id);
    };
    TestAccessService.prototype.getCallDefinitions = function () {
        return this.http.get(this.server + 'calls').map(this.getJsonBody);
    };
    TestAccessService.prototype.getJsonBody = function (res) {
        if (res.text()) {
            return res.json();
        }
        else {
            return null;
        }
    };
    TestAccessService.prototype.getStringBody = function (res) {
        return res.text();
    };
    TestAccessService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_3__alert_service__["a" /* AlertService */]])
    ], TestAccessService);
    return TestAccessService;
}());



/***/ }),

/***/ "../../../../../src/app/test-details-edit/test-details-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test-details-edit/test-details-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"useCase\">\n  <div class=\"row\">\n    <div style=\"margin: 20px 0\">\n      <h3>Use Case:\n        <input type=\"text\" [(ngModel)]=\"useCase.useCaseName\" />\n        <a (click)=\"delete()\" class=\"btn btn-default\" style=\"float:right;\">\n          Delete\n        </a>\n        <a (click)=\"save()\" class=\"btn btn-default\" style=\"float:right;\">\n          Save\n        </a>\n      </h3>\n    </div>\n    <div *ngFor=\"let call of useCase.tests; let i = index\">\n      <div style=\"font-size:  20px; margin-top:  20px;\">\n        <p>Call #{{call.useCaseIndexNumber + 1}}: {{call.callPath}}</p>\n      </div>\n      <div>\n        <p>Call:\n          <select [(ngModel)]=\"call.callDefinitionID\" (change)=\"callDefinitionChanged(call)\">\n            <option *ngFor=\"let callDef of callDefs\" [ngValue]=\"callDef.id\">{{ callDef.name }}</option>\n          </select>\n        </p>\n      </div>\n      <div>\n        <p>Parameters:</p>\n        <div *ngFor=\"let param of findCallDefById(call.callDefinitionID).availibleParams\" class=\"row\">\n          <div class=\"col-xs-2\" style=\"margin-left: 20px\">\n          <p >{{param}}</p>\n        </div>\n        <div class=\"col-xs-5\">\n          <input type=\"text\" (input)=\"onParamChange($event.target.value, param, call)\" [value]=\"getParamValue(call, param)\">\n        </div>\n        </div>\n      </div>\n      <div>\n        <p>Expected Return Content:</p>\n        <textarea [(ngModel)]=\"call.expectedResultRaw\" cols=\"100\" rows=\"20\"></textarea>\n      </div>\n    </div>\n    <a (click)=\"addCall()\" class=\"btn btn-default\">\n      Add Call\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/test-details-edit/test-details-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestDetailsEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_test_access_service__ = __webpack_require__("../../../../../src/app/service/test-access.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_test_call_class__ = __webpack_require__("../../../../../src/app/model/test-call.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_call_defintion__ = __webpack_require__("../../../../../src/app/model/call-defintion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_test_call_param__ = __webpack_require__("../../../../../src/app/model/test-call-param.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_alert_service__ = __webpack_require__("../../../../../src/app/service/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TestDetailsEditComponent = (function () {
    function TestDetailsEditComponent(testAccessService, router, alertService) {
        this.testAccessService = testAccessService;
        this.router = router;
        this.alertService = alertService;
        this.toggleEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.useCaseId = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TestDetailsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.callDefs = new Array();
        this.testAccessService.getCallDefinitions().subscribe(function (data) {
            _this.callDefs = data.sort(__WEBPACK_IMPORTED_MODULE_5__model_call_defintion__["a" /* CallDefinition */].sort);
            _this.useCaseObs.subscribe(function (useCase) {
                _this.useCase = useCase;
            });
        }, function (err) {
            _this.alertService.handleHTTPError(err);
        });
    };
    TestDetailsEditComponent.prototype.save = function () {
        var _this = this;
        this.testAccessService.saveTest(this.useCase).subscribe(function (id) {
            _this.toggleEdit.emit(true);
        }, function (err) {
            _this.alertService.handleHTTPError(err);
        });
    };
    TestDetailsEditComponent.prototype.delete = function () {
        var _this = this;
        this.testAccessService.deleteUseCase(this.useCase.id).subscribe(function () {
            _this.router.navigate(['/app/runtests']);
        }, function (err) {
            _this.alertService.handleHTTPError(err);
        });
    };
    TestDetailsEditComponent.prototype.addCall = function () {
        var testCall = new __WEBPACK_IMPORTED_MODULE_4__model_test_call_class__["a" /* TestCall */]();
        testCall.useCaseIndexNumber = this.useCase.tests.length;
        testCall.callDefinitionID = this.callDefs[0].id;
        this.buildCallPath(testCall);
        this.useCase.tests.push(testCall);
    };
    TestDetailsEditComponent.prototype.callDefinitionChanged = function (call) {
        call.paramList = [];
        this.buildCallPath(call);
    };
    TestDetailsEditComponent.prototype.getParamValue = function (call, param) {
        var entity = call.paramList.find(function (value) {
            return value.param == param;
        });
        if (entity) {
            return entity.value;
        }
        else {
            return '';
        }
    };
    TestDetailsEditComponent.prototype.onParamChange = function (value, param, call) {
        var index = call.paramList.findIndex(function (entity, i, obj) {
            return entity.param == param;
        });
        if (value.length > 0) {
            if (index >= 0) {
                call.paramList[index].value = value;
            }
            else {
                call.paramList.push(new __WEBPACK_IMPORTED_MODULE_6__model_test_call_param__["a" /* TestCallParam */](param, value));
            }
        }
        else {
            if (index >= 0) {
                call.paramList.splice(index, 1);
            }
        }
        this.buildCallPath(call);
    };
    TestDetailsEditComponent.prototype.buildCallPath = function (call) {
        var callPath = this.findCallDefById(call.callDefinitionID).call;
        if (call.paramList.length > 0) {
            var first_1 = true;
            call.paramList.forEach(function (entity) {
                if (entity.value.length > 0) {
                    if (entity.param.startsWith('{') && entity.param.endsWith('}')) {
                        callPath = callPath.replace(entity.param, entity.value);
                    }
                    else {
                        if (first_1) {
                            first_1 = false;
                            callPath = callPath + '?' + entity.param + '=' + entity.value;
                        }
                        else {
                            callPath = callPath + '&' + entity.param + '=' + entity.value;
                        }
                    }
                }
            });
        }
        call.callPath = encodeURI(callPath);
    };
    TestDetailsEditComponent.prototype.buildCallDefsList = function () {
        var _this = this;
        this.testAccessService.getCallDefinitions().subscribe(function (data) {
            _this.callDefs = data;
        }, function (err) {
            _this.alertService.handleHTTPError(err);
        });
    };
    TestDetailsEditComponent.prototype.findCallDefById = function (id) {
        var calldef = this.callDefs.find(function (value) {
            return value.id == id;
        });
        return calldef;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */])
    ], TestDetailsEditComponent.prototype, "useCaseObs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TestDetailsEditComponent.prototype, "toggleEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TestDetailsEditComponent.prototype, "useCaseId", void 0);
    TestDetailsEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test-details-edit',
            template: __webpack_require__("../../../../../src/app/test-details-edit/test-details-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/test-details-edit/test-details-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_test_access_service__["a" /* TestAccessService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_7__service_alert_service__["a" /* AlertService */]])
    ], TestDetailsEditComponent);
    return TestDetailsEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/test-details-view/test-details-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test-details-view/test-details-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"useCase\">\n  <div class=\"row\">\n    <div style=\"margin: 20px 0\">\n      <h3>Use Case: {{useCase.useCaseName}}\n        <a [routerLink]=\"\" (click)=\"edit()\" class=\"btn btn-default\" style=\"float:right;\">\n          Edit\n        </a>\n      </h3>\n    </div>\n    <div *ngFor=\"let call of useCase.tests\">\n      <div style=\"font-size:  20px; margin-top:  20px;\">\n        <p>Call #{{call.useCaseIndexNumber + 1}}: {{call.callPath}}</p>\n      </div>\n      <div>\n        <p>Expected Return Content:</p>\n        <pre style=\"max-height: 360px\">{{parse(call.expectedResultRaw) | json}}</pre>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/test-details-view/test-details-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestDetailsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestDetailsViewComponent = (function () {
    function TestDetailsViewComponent() {
        this.toggleEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TestDetailsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.useCaseObs.subscribe(function (useCase) {
            _this.useCase = useCase;
        });
    };
    TestDetailsViewComponent.prototype.edit = function () {
        this.toggleEdit.emit(true);
    };
    TestDetailsViewComponent.prototype.parse = function (raw) {
        return JSON.parse(raw);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */])
    ], TestDetailsViewComponent.prototype, "useCaseObs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TestDetailsViewComponent.prototype, "toggleEdit", void 0);
    TestDetailsViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test-details-view',
            template: __webpack_require__("../../../../../src/app/test-details-view/test-details-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/test-details-view/test-details-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestDetailsViewComponent);
    return TestDetailsViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/test-details/test-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test-details/test-details.component.html":
/***/ (function(module, exports) {

module.exports = "<app-alerts></app-alerts>\n<div class=\"row\">\n  <a [routerLink]=\"\" (click)=\"back()\" class=\"btn btn-default\">\n    Back\n  </a>\n</div>\n\n<app-test-details-view *ngIf=\"!edit\" [useCaseObs]=\"useCase\" (toggleEdit)=\"toggleEdit()\"></app-test-details-view>\n<app-test-details-edit *ngIf=\"edit\" [useCaseObs]=\"useCase\" (toggleEdit)=\"toggleEdit()\"></app-test-details-edit>\n"

/***/ }),

/***/ "../../../../../src/app/test-details/test-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_test_access_service__ = __webpack_require__("../../../../../src/app/service/test-access.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_alert_service__ = __webpack_require__("../../../../../src/app/service/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TestDetailsComponent = (function () {
    function TestDetailsComponent(testAccessService, location, route, alertService) {
        this.testAccessService = testAccessService;
        this.location = location;
        this.route = route;
        this.alertService = alertService;
    }
    TestDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.edit = params['edit'] === 'true';
            _this.useCaseId = params['id'];
            if (_this.useCaseId) {
                _this.useCase = _this.testAccessService.getTest(_this.useCaseId);
            }
        }, function (err) {
            _this.alertService.handleHTTPError(err);
        });
    };
    TestDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TestDetailsComponent.prototype.back = function () {
        this.location.back();
    };
    TestDetailsComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
        this.useCase = this.testAccessService.getTest(this.useCaseId);
    };
    TestDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test-details',
            template: __webpack_require__("../../../../../src/app/test-details/test-details.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_test_access_service__["a" /* TestAccessService */]],
            styles: [__webpack_require__("../../../../../src/app/test-details/test-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_test_access_service__["a" /* TestAccessService */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__service_alert_service__["a" /* AlertService */]])
    ], TestDetailsComponent);
    return TestDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/test-result-details/test-result-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test-result-details/test-result-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-bottom: 10px\">\n  <a [routerLink]=\"\" (click)=\"back()\" class=\"btn btn-default\">\n    Back\n  </a>\n</div>\n<div *ngIf=\"useCaseResult\">\n  <div *ngFor=\"let result of useCaseResult.results; let i = index;\">\n    <div class=\"row\" style=\"font-size:  20px; margin-top:  20px;\">\n      <p>Call #{{useCaseResult.useCase.tests[i].useCaseIndexNumber + 1}}:\n        <a href=\"{{useCaseResult.baseURL + useCaseResult.useCase.tests[i].callPath}}\">{{useCaseResult.baseURL + useCaseResult.useCase.tests[i].callPath}}</a>\n      </p>\n    </div>\n    <div class=\"row\">\n      <p [style.color]=\"result.pass? 'green': 'red'\" style=\"font-weight: bold;\">{{result.pass? 'PASS': 'FAIL'}}</p>\n      <ul *ngIf=\"!result.pass\">\n        <li *ngFor=\"let msg of result.diffList\">\n          {{msg}}\n        </li>\n      </ul>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <p>Expected</p>\n        <pre style=\"max-height: 360px\">{{parse(result.rawExpected) | json}}</pre>\n      </div>\n      <div class=\"col-sm-6\">\n        <p>Actual</p>\n        <pre style=\"max-height: 360px\">{{parse(result.rawActual) | json}}</pre>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/test-result-details/test-result-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestResultDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_test_access_service__ = __webpack_require__("../../../../../src/app/service/test-access.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_use_case_result_class__ = __webpack_require__("../../../../../src/app/model/use-case-result.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TestResultDetailsComponent = (function () {
    function TestResultDetailsComponent(testAccessService, location, route) {
        this.testAccessService = testAccessService;
        this.location = location;
        this.route = route;
    }
    TestResultDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('made it');
        if (!this.useCaseResult) {
            this.sub = this.route.params.subscribe(function (params) {
                _this.useCaseResultIndex = params['id'];
                var testResultsBatchId = params['batchId'];
                if (testResultsBatchId) {
                    _this.testAccessService.getTestResults(testResultsBatchId);
                }
            });
            this.testAccessService.getTestResultsSubject().subscribe(function (data) {
                _this.useCaseResult = data[_this.useCaseResultIndex];
            });
        }
    };
    TestResultDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TestResultDetailsComponent.prototype.parse = function (raw) {
        return JSON.parse(raw);
    };
    TestResultDetailsComponent.prototype.back = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__model_use_case_result_class__["a" /* UseCaseResult */])
    ], TestResultDetailsComponent.prototype, "useCaseResult", void 0);
    TestResultDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test-result-details',
            template: __webpack_require__("../../../../../src/app/test-result-details/test-result-details.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_test_access_service__["a" /* TestAccessService */]],
            styles: [__webpack_require__("../../../../../src/app/test-result-details/test-result-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_test_access_service__["a" /* TestAccessService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TestResultDetailsComponent);
    return TestResultDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/test-results/test-results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test-results/test-results.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 10px 0;\">\n  <ul class=\"nav nav-tabs\">\n    <li [ngClass]=\"{'active': selectedTab(0)}\">\n      <a  [routerLink]=\"\" (click)=\"selectTab(0)\" >Test Results</a>\n    </li>\n    <li [ngClass]=\"{'active': selectedTab(1)}\">\n      <a  [routerLink]=\"\" (click)=\"selectTab(1)\">Test Log</a>\n    </li>\n  </ul>\n  <div class=\"tab-content\" style=\"min-height: 250px\">\n    <div id=\"results-tab\" *ngIf=\"selectedTab(0)\"  class=\"tab-pane fade in active\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let result of results; let i = index;\">\n          <a [routerLink]=\"['/app/results', result.batchID, i]\" style=\"display: block\">\n            <span [style.color]=\"result.pass? 'green': 'red'\" style=\"font-weight: bold;\">{{result.pass? 'PASS': 'FAIL'}}</span>\n            - {{result.useCase.useCaseName}}\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div id=\"log-tab\"  *ngIf=\"selectedTab(1)\" class=\"tab-pane fade in active\">\n      <pre>{{resultsLog}}</pre>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/test-results/test-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_test_access_service__ = __webpack_require__("../../../../../src/app/service/test-access.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestResultsComponent = (function () {
    function TestResultsComponent(testAccessService) {
        this.testAccessService = testAccessService;
    }
    TestResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedTabIndex = 0;
        this.testAccessService.getTestResultsSubject().subscribe(function (data) {
            _this.resultsLog = 'TEST LOG\n';
            _this.results = data;
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var result = data_1[_i];
                _this.resultsLog = _this.resultsLog.concat(result.useCase.useCaseName, '\n');
                for (var _a = 0, _b = result.results; _a < _b.length; _a++) {
                    var callResult = _b[_a];
                    _this.resultsLog = _this.resultsLog.concat(callResult.errorMsg, '\n');
                }
            }
        });
    };
    TestResultsComponent.prototype.selectTab = function (index) {
        this.selectedTabIndex = index;
    };
    TestResultsComponent.prototype.selectedTab = function (index) {
        return this.selectedTabIndex == index;
    };
    TestResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test-results',
            template: __webpack_require__("../../../../../src/app/test-results/test-results.component.html"),
            styles: [__webpack_require__("../../../../../src/app/test-results/test-results.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_test_access_service__["a" /* TestAccessService */]])
    ], TestResultsComponent);
    return TestResultsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/test-selection-list/test-selection-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type='checkbox'] {\r\n    width:20px;\r\n    height:20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test-selection-list/test-selection-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"min-height: 350px\">\n  <table class=\"table table-striped table-condensed table-hover\">\n    <tbody>\n      <tr>\n        <td>\n          <input type=\"checkbox\" (change)=\"selectAll()\" [checked]=\"isSelectAll\">\n        </td>\n        <td>Select All</td>\n        <td colspan=\"2\">\n          <a (click)=\"createNewTest()\" class=\"btn btn-default\" style=\"float:right;\">\n            New Use Case\n          </a>\n        </td>\n      </tr>\n      <tr *ngFor=\"let test of pagedTests[currentPage]\">\n        <td>\n          <input type=\"checkbox\" (change)=\"toggleTest(test)\" [checked]=\"test.selected\">\n        </td>\n        <td>{{test.useCaseName}}</td>\n        <td style=\"width: 60px\">\n          <a [routerLink]=\"['/app/test', test.id, false]\" class=\"btn btn-default\" style=\"float:right;\">\n            View\n          </a>\n        </td>\n        <td style=\"width: 60px\">\n          <a [routerLink]=\"['/app/test', test.id, true]\" class=\"btn btn-default\" style=\"float:right;\">\n            Edit\n          </a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"pagination pull-right\">\n  <ul class=\"nav nav-pills\">\n    <li [ngClass]=\"{'disabled': currentPage == 0}\">\n      <a (click)=\"prevPage()\" class=\"btn\">« Prev</a>\n    </li>\n    <li *ngFor=\"let n of range(pagedTests.length)\" [ngClass]=\"{'active': n == currentPage}\">\n      <a (click)=\"setPage(n)\" class=\"btn\">{{n+1}}</a>\n    </li>\n    <li [ngClass]=\"{'disabled': currentPage == pagedTests.length - 1}\">\n      <a (click)=\"nextPage()\" class=\"btn\">Next »</a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/test-selection-list/test-selection-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestSelectionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_use_case_class__ = __webpack_require__("../../../../../src/app/model/use-case.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_test_access_service__ = __webpack_require__("../../../../../src/app/service/test-access.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_alert_service__ = __webpack_require__("../../../../../src/app/service/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TestSelectionListComponent = (function () {
    function TestSelectionListComponent(testAccessService, router, alertService) {
        this.testAccessService = testAccessService;
        this.router = router;
        this.alertService = alertService;
        this.selectedTests = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TestSelectionListComponent.prototype.ngOnInit = function () {
        this.buildPagedTests();
        this.currentPage = 0;
        this.isSelectAll = true;
        for (var _i = 0, _a = this.testList; _i < _a.length; _i++) {
            var test = _a[_i];
            this.isSelectAll = test.selected && this.isSelectAll;
        }
    };
    TestSelectionListComponent.prototype.buildPagedTests = function () {
        this.pagedTests = new Array();
        for (var i = 0; i < this.testList.length; i = i + 10) {
            this.pagedTests.push(this.testList.slice(i, i + 9));
        }
    };
    TestSelectionListComponent.prototype.selectAll = function () {
        this.isSelectAll = !this.isSelectAll;
        for (var _i = 0, _a = this.testList; _i < _a.length; _i++) {
            var test = _a[_i];
            test.selected = this.isSelectAll;
        }
        this.selectedTests.emit(this.testList);
    };
    TestSelectionListComponent.prototype.toggleTest = function (test) {
        if (this.isSelectAll) {
            this.isSelectAll = false;
        }
        test.selected = !test.selected;
        this.selectedTests.emit(this.testList);
    };
    TestSelectionListComponent.prototype.prevPage = function () {
        if (this.currentPage > 0) {
            this.currentPage = this.currentPage - 1;
        }
    };
    TestSelectionListComponent.prototype.nextPage = function () {
        if (this.currentPage < this.pagedTests.length - 1) {
            this.currentPage = this.currentPage + 1;
        }
    };
    TestSelectionListComponent.prototype.setPage = function (n) {
        this.currentPage = n;
    };
    TestSelectionListComponent.prototype.range = function (n) {
        return Array(n).fill(0).map(function (x, i) { return i; });
    };
    TestSelectionListComponent.prototype.createNewTest = function () {
        var _this = this;
        var useCase = new __WEBPACK_IMPORTED_MODULE_2__model_use_case_class__["a" /* UseCase */]();
        this.testAccessService.saveTest(useCase).subscribe(function (id) {
            console.log(id);
            _this.router.navigate(['/app/test', id, true]);
        }, function (err) {
            _this.alertService.handleHTTPError(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TestSelectionListComponent.prototype, "testList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TestSelectionListComponent.prototype, "selectedTests", void 0);
    TestSelectionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test-selection-list',
            template: __webpack_require__("../../../../../src/app/test-selection-list/test-selection-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/test-selection-list/test-selection-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_test_access_service__["a" /* TestAccessService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__service_alert_service__["a" /* AlertService */]])
    ], TestSelectionListComponent);
    return TestSelectionListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/test-selection/test-selection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test-selection/test-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin: 10px 0 25px 0\">\n  <ul class=\"nav nav-pills nav-stacked col-xs-3\">\n      <li *ngFor=\"let testCategory of testCategories\" [ngClass]=\"{'active': testCategory == selectedCategory}\">\n          <a [routerLink]=\"\" (click)=\"selectCategory(testCategory)\">{{testCategory.categoryName}} ({{testCategory.selectedTotal}})</a>\n      </li>\n  </ul>\n\n  <div class=\"tab-content col-xs-9\">\n      <div class=\"tab-pane fade in active\" *ngFor=\"let testCategory of testCategories\" >\n        <app-test-selection-list *ngIf=\"testCategory == selectedCategory\" [testList]=\"testCategory.testList\" (selectedTests)=\"selectedTests($event)\"></app-test-selection-list>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/test-selection/test-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestSelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_test_category_class__ = __webpack_require__("../../../../../src/app/model/test-category.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_test_access_service__ = __webpack_require__("../../../../../src/app/service/test-access.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestSelectionComponent = (function () {
    function TestSelectionComponent(testAccessService) {
        this.testAccessService = testAccessService;
        this.testIds = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TestSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testCategories = this.getCategories();
        this.testAccessService.getTestResultsSubject().subscribe(function (data) {
            data.map(function (d) {
                var selected = d.useCase;
                for (var _i = 0, _a = _this.testCategories[0].testList; _i < _a.length; _i++) {
                    var useCase = _a[_i];
                    if (useCase.id == selected.id) {
                        useCase.selected = true;
                        break;
                    }
                }
            });
            _this.testCategories[0].selectedTotal = _this.calcSelectedTotal(_this.testCategories[0].testList);
            _this.emitTestIds();
        });
    };
    TestSelectionComponent.prototype.selectCategory = function (testCategory) {
        this.selectedCategory = testCategory;
    };
    TestSelectionComponent.prototype.selectedTests = function (selectedTests) {
        this.selectedCategory.testList = selectedTests;
        this.selectedCategory.selectedTotal = this.calcSelectedTotal(selectedTests);
        this.emitTestIds();
    };
    TestSelectionComponent.prototype.emitTestIds = function () {
        var allIds = new Array();
        for (var _i = 0, _a = this.testCategories; _i < _a.length; _i++) {
            var category = _a[_i];
            allIds = allIds.concat(category.testList.filter(function (val) { return val.selected; }).map(function (val) { return val.id; }));
        }
        this.testIds.emit(allIds);
    };
    TestSelectionComponent.prototype.calcSelectedTotal = function (cases) {
        var x = cases.filter(function (val) { return val.selected; });
        return x.length;
    };
    TestSelectionComponent.prototype.getCategories = function () {
        var _this = this;
        var testCategories = new Array();
        testCategories.push(this.getMockCategory('All Use Cases'));
        this.testAccessService.getAllTestSummaries().subscribe(function (data) {
            _this.testCategories[0].testList = data;
            _this.testCategories[0].selectedTotal = _this.calcSelectedTotal(_this.testCategories[0].testList);
            _this.selectedCategory = _this.testCategories[0];
        }, function (err) {
            console.log('Something went wrong!');
        });
        return testCategories;
    };
    TestSelectionComponent.prototype.getMockCategory = function (name) {
        var cat = new __WEBPACK_IMPORTED_MODULE_1__model_test_category_class__["a" /* TestCategory */]();
        cat.categoryName = name;
        cat.testList = new Array();
        return cat;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TestSelectionComponent.prototype, "testIds", void 0);
    TestSelectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test-selection',
            template: __webpack_require__("../../../../../src/app/test-selection/test-selection.component.html"),
            styles: [__webpack_require__("../../../../../src/app/test-selection/test-selection.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_test_access_service__["a" /* TestAccessService */]])
    ], TestSelectionComponent);
    return TestSelectionComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map