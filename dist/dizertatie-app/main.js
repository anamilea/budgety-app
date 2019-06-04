(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _expense_expense_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expense/expense.component */ "./src/app/expense/expense.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _income_income_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./income/income.component */ "./src/app/income/income.component.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/invoice/invoice.component.ts");
/* harmony import */ var _economies_economies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./economies/economies.component */ "./src/app/economies/economies.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");











var routes = [
    { path: 'success', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'expenses', component: _expense_expense_component__WEBPACK_IMPORTED_MODULE_5__["ExpenseComponent"] },
    { path: 'incomes', component: _income_income_component__WEBPACK_IMPORTED_MODULE_7__["IncomeComponent"] },
    { path: 'invoices', component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_8__["InvoiceComponent"] },
    { path: 'reports', component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_10__["ReportsComponent"] },
    { path: 'economies', component: _economies_economies_component__WEBPACK_IMPORTED_MODULE_9__["EconomiesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n    height:100%;\n}\n\nmat-sidenav{\n    min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xuICAgIGhlaWdodDoxMDAlO1xufVxuXG5tYXQtc2lkZW5hdntcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <mat-sidenav #sidenav role=\"navigation\">\n<app-sidenav (closeSidenav)=\"sidenav.close()\"></app-sidenav>\n  </mat-sidenav>\n  <mat-sidenav-content>\n   <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.openSidenav = false;
        this.title = 'dizertatie-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _expense_expense_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./expense/expense.component */ "./src/app/expense/expense.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navigation/sidenav/sidenav.component */ "./src/app/navigation/sidenav/sidenav.component.ts");
/* harmony import */ var _income_income_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./income/income.component */ "./src/app/income/income.component.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/invoice/invoice.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _economies_economies_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./economies/economies.component */ "./src/app/economies/economies.component.ts");
/* harmony import */ var _expense_expense_actions_renderer_expense_actions_renderer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./expense/expense-actions-renderer/expense-actions-renderer.component */ "./src/app/expense/expense-actions-renderer/expense-actions-renderer.component.ts");
/* harmony import */ var _expense_create_expense_create_expense_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./expense/create-expense/create-expense.component */ "./src/app/expense/create-expense/create-expense.component.ts");
/* harmony import */ var _expense_delete_expense_delete_expense_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./expense/delete-expense/delete-expense.component */ "./src/app/expense/delete-expense/delete-expense.component.ts");
/* harmony import */ var _expense_edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./expense/edit-expense/edit-expense.component */ "./src/app/expense/edit-expense/edit-expense.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _expense_expense_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./expense/expense.service */ "./src/app/expense/expense.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");





























// Configs 
function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["FacebookLoginProvider"]("Your-Facebook-app-id")
        },
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["GoogleLoginProvider"]("Your-Google-Client-Id")
        },
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["LinkedinLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["LinkedinLoginProvider"]("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
        },
    ]);
    return config;
}
//lalala
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            entryComponents: [
                _expense_create_expense_create_expense_component__WEBPACK_IMPORTED_MODULE_20__["CreateExpenseComponent"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _expense_expense_component__WEBPACK_IMPORTED_MODULE_10__["ExpenseComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"],
                _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
                _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_14__["SidenavComponent"],
                _income_income_component__WEBPACK_IMPORTED_MODULE_15__["IncomeComponent"],
                _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_16__["InvoiceComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_17__["ReportsComponent"],
                _economies_economies_component__WEBPACK_IMPORTED_MODULE_18__["EconomiesComponent"],
                _expense_expense_actions_renderer_expense_actions_renderer_component__WEBPACK_IMPORTED_MODULE_19__["ExpenseActionsRendererComponent"],
                _expense_create_expense_create_expense_component__WEBPACK_IMPORTED_MODULE_20__["CreateExpenseComponent"],
                _expense_delete_expense_delete_expense_component__WEBPACK_IMPORTED_MODULE_21__["DeleteExpenseComponent"],
                _expense_edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_22__["EditExpenseComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_26__["CommonModule"],
                ng_snotify__WEBPACK_IMPORTED_MODULE_27__["SnotifyModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["SocialLoginModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_23__["AgGridModule"].withComponents([_expense_expense_actions_renderer_expense_actions_renderer_component__WEBPACK_IMPORTED_MODULE_19__["ExpenseActionsRendererComponent"]])
            ],
            providers: [
                _expense_expense_service__WEBPACK_IMPORTED_MODULE_24__["ExpenseService"],
                ng_snotify__WEBPACK_IMPORTED_MODULE_27__["SnotifyService"],
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"],
                {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                },
                {
                    provide: 'SnotifyToastConfig', useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_27__["ToastDefaults"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_3__["WebAuth"]({
            clientID: 'uFINHhYMBik0xiEKH011FLKIFloyYsEW',
            domain: 'dawn-tree-5494.eu.auth0.com',
            responseType: 'token id_token',
            redirectUri: 'http://localhost:4200/success',
            scope: 'openid'
        });
        this._idToken = '';
        this._accessToken = '';
        this._expiresAt = 0;
        this._userID = '';
    }
    Object.defineProperty(AuthService.prototype, "accessToken", {
        get: function () {
            return this._accessToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "idToken", {
        get: function () {
            return this._idToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "userID", {
        get: function () {
            return this._userID;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.localLogin(authResult);
                //  console.log("TCL: AuthService -> authResult", authResult);
                _this.router.navigate(['/expenses']);
            }
            else if (err) {
                _this.router.navigate(['/expenses']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.localLogin = function (authResult) {
        // Set the time that the Access Token will expire at
        var expiresAt = (authResult.expiresIn * 1000) + Date.now();
        this._accessToken = authResult.accessToken;
        this._idToken = authResult.idToken;
        this._userID = authResult.idTokenPayload.sub;
        console.log("TCL: AuthService ->  this._userID", this._userID);
        this._expiresAt = expiresAt;
    };
    AuthService.prototype.renewTokens = function () {
        var _this = this;
        this.auth0.checkSession({}, function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.localLogin(authResult);
            }
            else if (err) {
                alert("Could not get a new token (" + err.error + ": " + err.error_description + ").");
                _this.logout();
            }
        });
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time
        this._accessToken = '';
        this._idToken = '';
        this._expiresAt = 0;
        this._userID = '';
        this.auth0.logout({
            returnTo: window.location.origin
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        return this._accessToken && Date.now() < this._expiresAt;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ninput.ng-invalid.ng-touched:not(:focus) {\n    outline: none;\n    border: 1px solid #E60000;\n    border-radius: 0;\n  }\n  \n  input.ng-valid {\n    outline: none;\n    border: 1px solid #333333;\n    border-radius: 0;\n  }\n  \n  input:focus {\n    outline: none;\n    border: 1px solid #999999;\n    border-radius: 0;\n  }\n  \n  .error {\n    text-align: left;\n    font-size: 10px;\n    height: 15px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQ6bm90KDpmb2N1cykge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U2MDAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIFxuICBpbnB1dC5uZy12YWxpZCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgXG4gIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICBcbiAgLmVycm9yIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-8\">\n          <div class=\"card-group\">\n            <!-- <> -->\n              <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" class=\"card p-4\">\n                <div class=\"card-body\">\n                  <h3>Budgety - ajutorul buzunarului tău</h3>\n                  <p class=\"text-muted\"></p>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"fa fa-user\"></i>\n                      </span>\n                    </div>\n                    <input class=\"form-control\" formControlName=\"username\" type=\"username\" placeholder=\"Username\">\n                  </div>\n                  <div class=\"input-group mb-4\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"fa fa-key\"></i>\n                      </span>\n                    </div>\n                    <input class=\"form-control\" type=\"password\" formControlName=\"password\" placeholder=\"Parolă\">\n                  </div>\n                  <div class=\"error\">\n                    <mat-error *ngIf=\"hasError()\">{{getError()}}</mat-error>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-6 text-left\">\n                      <button class=\"btn btn-link px-0\" type=\"button\">Ai uitat parola?</button>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                      <button class=\"btn btn-success px-4\" type=submit>Logare</button>\n                    </div>\n                  </div>\n                </div>\n              </form> \n            \n            <div class=\"card bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n              <div class=\"card-body text-center\">\n                <div>\n                  <h2>Nu ai încă un cont?</h2>\n                  <p> Creează-ți unul acum și hai în aventura Budgety!</p>\n                  <button class=\"btn btn-primary active mt-3\" type=\"button\" (click)=\"onRegister()\">Înregistrează-te</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
        //userCredentials: UserCredentials;
        this.errorMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // if (this._authService.isAuthenticated()) {
        //   this._router.navigate(['home']);
        // }
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () { return this.loginForm.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.loginForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        if (this.isFormValid()) {
            //  this._router.navigate(['']);
            this._authService.login();
        }
    };
    LoginComponent.prototype.onRegister = function () {
        this._router.navigate(['signup']);
    };
    LoginComponent.prototype.setErrorMessages = function (err) {
        if (err.error === 'Unauthorized') {
            this.errorMessage = 'Usernameul și/sau parola nu sunt valide.';
        }
        else {
            this.errorMessage = 'Ceva nu a mers bine, te rugăm să încerci mai târziu.';
        }
        this.loginForm.setErrors({ 'wrong': true });
    };
    LoginComponent.prototype.isFormValid = function () {
        var _this = this;
        this.loginForm.setErrors({ wrong: null });
        this.loginForm.updateValueAndValidity();
        Object.keys(this.loginForm.controls).forEach(function (key) {
            var control = _this.loginForm.get(key);
            control.markAsTouched();
        });
        return this.loginForm.valid;
    };
    LoginComponent.prototype.hasError = function () {
        return this.username.invalid && (this.username.touched || this.username.dirty) ||
            this.password.invalid && (this.password.touched || this.password.dirty) ||
            this.loginForm.hasError('wrong');
    };
    LoginComponent.prototype.getError = function () {
        return this.username.hasError('required') || this.password.hasError('required') ? 'Ambele câmpuri sunt obligatorii!'
            : this.errorMessage;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 mx-auto\">\n        <div class=\"card mx-4\">\n          <div class=\"card-body p-4\">\n            <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n              <h1>Înregistrează-te!</h1>\n              <p class=\"text-muted\"> </p>\n              <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                </div>\n                <input type=\"username\" class=\"form-control\" formControlName=\"username\" type=\"username\"\n                  placeholder=\"Username\">\n              </div>\n              <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">@</span>\n                </div>\n                <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\">\n              </div>\n              <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-key\"></i></span>\n                </div>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Parolă\" formControlName=\"password\">\n              </div>\n              <div class=\"error\">\n                  <mat-error *ngIf=\"hasError()\">{{getError()}}</mat-error>\n                </div>\n              <button type=submit class=\"btn btn-block btn-success\">Creează contul</button>\n            </form>\n          </div>\n          <div class=\"card-footer p-4\">\n            <div class=\"row\">\n              <p class=\"text-muted\">Te poți loga pe Budgety și cu:</p>\n              <div class=\"col-6\">\n                  <button class=\"btn btn-brand btn-sm btn-facebook mr-1\"><span>Facebook</span></button>\n                <!-- <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>Google</span></button> -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(_router) {
        this._router = _router;
        //userCredentials: UserCredentials;
        this.errorMessage = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
        // if (this._authService.isAuthenticated()) {
        //   this._router.navigate(['home']);
        // }
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    Object.defineProperty(SignupComponent.prototype, "username", {
        get: function () { return this.signupForm.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "password", {
        get: function () { return this.signupForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "email", {
        get: function () { return this.signupForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.onSubmit = function () {
        if (this.isFormValid()) {
            this._router.navigate(['']);
            // this.userCredentials = this.signupForm.value;
            // this._authService.signup(this.userCredentials).subscribe(
            //   res => {
            //     this._authService.authenticateUser(res.token);
            //   },
            //   err => {
            //     this.setErrorMessages(err);
            //   }
            // );
        }
    };
    SignupComponent.prototype.setErrorMessages = function (err) {
        if (err.error === 'Unauthorized') {
            this.errorMessage = 'Usernameul și/sau parola nu sunt valide.';
        }
        else {
            this.errorMessage = 'Ceva nu a mers bine, te rugăm să încerci mai târziu.';
        }
        this.signupForm.setErrors({ 'wrong': true });
    };
    SignupComponent.prototype.isFormValid = function () {
        var _this = this;
        this.signupForm.setErrors({ wrong: null });
        this.signupForm.updateValueAndValidity();
        Object.keys(this.signupForm.controls).forEach(function (key) {
            var control = _this.signupForm.get(key);
            control.markAsTouched();
        });
        return this.signupForm.valid;
    };
    SignupComponent.prototype.hasError = function () {
        return this.username.invalid && (this.username.touched || this.username.dirty) ||
            this.password.invalid && (this.password.touched || this.password.dirty) ||
            this.email.invalid && (this.email.touched || this.email.dirty) ||
            this.signupForm.hasError('wrong');
    };
    SignupComponent.prototype.getError = function () {
        return this.username.hasError('required') ||
            this.password.hasError('required') ? 'Toate câmpurile sunt obligatorii!' : this.errorMessage;
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/economies/economies.component.css":
/*!***************************************************!*\
  !*** ./src/app/economies/economies.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb25vbWllcy9lY29ub21pZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/economies/economies.component.html":
/*!****************************************************!*\
  !*** ./src/app/economies/economies.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"app\">\n  economies works!\n</p>\n"

/***/ }),

/***/ "./src/app/economies/economies.component.ts":
/*!**************************************************!*\
  !*** ./src/app/economies/economies.component.ts ***!
  \**************************************************/
/*! exports provided: EconomiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EconomiesComponent", function() { return EconomiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EconomiesComponent = /** @class */ (function () {
    function EconomiesComponent() {
    }
    EconomiesComponent.prototype.ngOnInit = function () {
    };
    EconomiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-economies',
            template: __webpack_require__(/*! ./economies.component.html */ "./src/app/economies/economies.component.html"),
            styles: [__webpack_require__(/*! ./economies.component.css */ "./src/app/economies/economies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EconomiesComponent);
    return EconomiesComponent;
}());



/***/ }),

/***/ "./src/app/expense/create-expense/create-expense.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/expense/create-expense/create-expense.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ninput.ng-invalid.ng-touched:not(:focus) {\n  outline: none;\n  border: 1px solid #E60000;\n  border-radius: 0;\n}\n\n\n\n.error {\n  text-align: left;\n  font-size: 10px;\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZW5zZS9jcmVhdGUtZXhwZW5zZS9jcmVhdGUtZXhwZW5zZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOzs7O0FBSUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2V4cGVuc2UvY3JlYXRlLWV4cGVuc2UvY3JlYXRlLWV4cGVuc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkOm5vdCg6Zm9jdXMpIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U2MDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuXG5cbi5lcnJvciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgaGVpZ2h0OiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/expense/create-expense/create-expense.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/expense/create-expense/create-expense.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Cheltuială nouă</h1>\n<div class=\"form-fields\">\n  <form [formGroup]=\"expenseForm\" (ngSubmit)=\"saveExpense()\">\n    <label for=\"name\" class=\"enter-name\">\n      <span> Denumire</span>\n    </label>\n    <input type=\"text\" formControlName=\"name\" placeholder=\"ex: Mancare\">\n    <label for=\"price\" class=\"enter-price\">\n      <span> Suma cheltuită</span>\n    </label>\n    <input type=\"number\" formControlName=\"price\" placeholder=\"ex: 50\">\n    <label for=\"date\" class=\"enter-date\">\n      <span> Data </span>\n    </label>\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker\" formControlName=\"date\"\n       placeholder=\"Alege o dată\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n    <div class=\"error\">\n      <mat-error *ngIf=\"hasError()\">{{getError()}}</mat-error>\n    </div>\n    <mat-dialog-actions>\n      <a (click)=\"close()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"36\" height=\"36\" viewBox=\"0 0 24 24\">\n          <path fill=\"#fff\"\n            d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\" />\n          <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n        </svg>\n      </a>\n      <button type=submit [disabled]=\"submittedForm\">Salvează</button>\n      <button (click)=\"close()\">Anulează</button>\n    </mat-dialog-actions>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/expense/create-expense/create-expense.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/expense/create-expense/create-expense.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateExpenseComponent", function() { return CreateExpenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _expense_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../expense.service */ "./src/app/expense/expense.service.ts");






var CreateExpenseComponent = /** @class */ (function () {
    function CreateExpenseComponent(_expenseService, snotify, dialogRef, data) {
        this._expenseService = _expenseService;
        this.snotify = snotify;
        this.dialogRef = dialogRef;
        this.data = data;
        this.errorMessage = '';
        this.submittedForm = false;
    }
    CreateExpenseComponent.prototype.ngOnInit = function () {
        this.expenseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    Object.defineProperty(CreateExpenseComponent.prototype, "name", {
        get: function () { return this.expenseForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateExpenseComponent.prototype, "price", {
        get: function () { return this.expenseForm.get('price'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateExpenseComponent.prototype, "date", {
        get: function () { return this.expenseForm.get('date'); },
        enumerable: true,
        configurable: true
    });
    CreateExpenseComponent.prototype.saveExpense = function () {
        var _this = this;
        if (this.isFormValid()) {
            var id = 'ceva';
            this.submittedForm = true;
            var expense_1 = this.expenseForm.value;
            this._expenseService.createExpense(expense_1, id).subscribe(function (res) {
                expense_1 = res;
                _this.dialogRef.close({ expense: expense_1 });
                _this.snotify.success('Expense ' + expense_1.name + ' was successfully created.');
            }, function (err) {
                _this.setErrorMessages(err);
            });
        }
    };
    CreateExpenseComponent.prototype.setErrorMessages = function (err) {
        if (String(err.error).includes('UNIQUE KEY')) {
            this.submittedForm = false;
            this.errorMessage = 'Expense price already exists.';
            this.expenseForm.setErrors({ wrong: true });
        }
        else {
            this.dialogRef.close();
            this.snotify.error('The server encountered an error while processing the request.');
        }
    };
    CreateExpenseComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    CreateExpenseComponent.prototype.isFormValid = function () {
        var _this = this;
        this.expenseForm.setErrors({ wrong: null });
        this.expenseForm.updateValueAndValidity();
        Object.keys(this.expenseForm.controls).forEach(function (key) {
            var control = _this.expenseForm.get(key);
            control.markAsTouched();
        });
        return this.expenseForm.valid;
    };
    CreateExpenseComponent.prototype.hasError = function () {
        return this.name.invalid && (this.name.touched || this.name.dirty) ||
            this.price.invalid && (this.price.touched || this.price.dirty) ||
            this.date.invalid && (this.date.touched || this.date.dirty) ||
            this.expenseForm.hasError('wrong');
    };
    CreateExpenseComponent.prototype.getError = function () {
        return (this.name.hasError('required') ||
            this.price.hasError('required') || this.date.hasError('required')) ?
            'Completați toate câmpurile obligatorii.' : this.errorMessage;
    };
    CreateExpenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-expense',
            template: __webpack_require__(/*! ./create-expense.component.html */ "./src/app/expense/create-expense/create-expense.component.html"),
            styles: [__webpack_require__(/*! ./create-expense.component.css */ "./src/app/expense/create-expense/create-expense.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_expense_service__WEBPACK_IMPORTED_MODULE_5__["ExpenseService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], CreateExpenseComponent);
    return CreateExpenseComponent;
}());



/***/ }),

/***/ "./src/app/expense/delete-expense/delete-expense.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/expense/delete-expense/delete-expense.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-container {\n    background: #333333;\n  }\n    h1.mat-dialog-title {\n      width: 100%;\n      text-align: center;\n      color: #ffffff;\n      font-family: \"VodafoneLt\";\n      font-size: 48px;\n      line-height: 25px;\n      padding: 10px 20px;\n      margin: 0;\n      margin-top: 5%;\n    }\n    a {\n      position: absolute;\n      top: 0;\n      right: 0;\n      padding: 5px;\n      cursor: pointer;\n    }\n    button {\n      outline: none;\n      background: #e60000;\n      width: 47%;\n      font-size: 20px;\n      padding: 6px;\n      color: #ffffff;\n      text-align: center;\n      text-decoration: none;\n      font-family: \"VodafoneLt\";\n      cursor: pointer;  \n    }\n    .cancel-button{\n      background:#666;\n      outline: none;\n      width: 47%;\n      font-size: 20px;\n      padding: 6px;\n      color: #ffffff;\n      text-align: center;\n      text-decoration: none;\n      font-family: \"VodafoneLt\";\n      cursor: pointer;  \n    }\n    .buttons-wrapper{\n      width:600px;\n      margin:90px auto;\n    }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZW5zZS9kZWxldGUtZXhwZW5zZS9kZWxldGUtZXhwZW5zZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0VBQ3JCO0lBQ0U7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCx5QkFBeUI7TUFDekIsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsU0FBUztNQUNULGNBQWM7SUFDaEI7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sUUFBUTtNQUNSLFlBQVk7TUFDWixlQUFlO0lBQ2pCO0lBRUE7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFVBQVU7TUFDVixlQUFlO01BQ2YsWUFBWTtNQUNaLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIscUJBQXFCO01BQ3JCLHlCQUF5QjtNQUN6QixlQUFlO0lBQ2pCO0lBRUE7TUFDRSxlQUFlO01BQ2YsYUFBYTtNQUNiLFVBQVU7TUFDVixlQUFlO01BQ2YsWUFBWTtNQUNaLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIscUJBQXFCO01BQ3JCLHlCQUF5QjtNQUN6QixlQUFlO0lBQ2pCO0lBRUE7TUFDRSxXQUFXO01BQ1gsZ0JBQWdCO0lBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZXhwZW5zZS9kZWxldGUtZXhwZW5zZS9kZWxldGUtZXhwZW5zZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICB9XG4gICAgaDEubWF0LWRpYWxvZy10aXRsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgZm9udC1mYW1pbHk6IFwiVm9kYWZvbmVMdFwiO1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICB9XG4gIFxuICAgIGEge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIGJ1dHRvbiB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogI2U2MDAwMDtcbiAgICAgIHdpZHRoOiA0NyU7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlZvZGFmb25lTHRcIjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgIFxuICAgIH1cbiAgIFxuICAgIC5jYW5jZWwtYnV0dG9ue1xuICAgICAgYmFja2dyb3VuZDojNjY2O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIHdpZHRoOiA0NyU7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlZvZGFmb25lTHRcIjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgIFxuICAgIH0gXG4gIFxuICAgIC5idXR0b25zLXdyYXBwZXJ7XG4gICAgICB3aWR0aDo2MDBweDtcbiAgICAgIG1hcmdpbjo5MHB4IGF1dG87XG4gICAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/expense/delete-expense/delete-expense.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/expense/delete-expense/delete-expense.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>\n   Ești sigur că vrei să ștergi cheltuiala {{data.expense.name}}?\n  </h1>\n  <mat-dialog-actions>\n    <a (click)=\"close()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"36\" height=\"36\" viewBox=\"0 0 24 24\">\n        <path fill=\"#fff\" d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"\n        />\n        <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n      </svg>\n    </a>\n    <div class=\"buttons-wrapper\">\n      <button mat-button (click)=\"close()\" class=\"cancel-button\">Nu</button>\n      <button mat-button (click)=\"deleteExpense()\">Da</button>\n    </div>\n  </mat-dialog-actions> -->"

/***/ }),

/***/ "./src/app/expense/delete-expense/delete-expense.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/expense/delete-expense/delete-expense.component.ts ***!
  \********************************************************************/
/*! exports provided: DeleteExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteExpenseComponent", function() { return DeleteExpenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeleteExpenseComponent = /** @class */ (function () {
    function DeleteExpenseComponent() {
    }
    DeleteExpenseComponent.prototype.ngOnInit = function () {
    };
    DeleteExpenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-expense',
            template: __webpack_require__(/*! ./delete-expense.component.html */ "./src/app/expense/delete-expense/delete-expense.component.html"),
            styles: [__webpack_require__(/*! ./delete-expense.component.css */ "./src/app/expense/delete-expense/delete-expense.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeleteExpenseComponent);
    return DeleteExpenseComponent;
}());



/***/ }),

/***/ "./src/app/expense/edit-expense/edit-expense.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/expense/edit-expense/edit-expense.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-container {\n    background: #333333;\n  }\n    h1.mat-dialog-title {\n      width: 100%;\n      text-align: center;\n      color: #ffffff;\n      font-family: \"VodafoneLt\";\n      font-size: 48px;\n      line-height: 25px;\n      padding: 10px 20px;\n      margin: 0;\n      margin-top: 5%;\n    }\n    a {\n      position: absolute;\n      top: 0;\n      right: 0;\n      padding: 5px;\n      cursor: pointer;\n    }\n    button {\n      outline: none;\n      background: #e60000;\n      width: 47%;\n      font-size: 20px;\n      padding: 6px;\n      color: #ffffff;\n      text-align: center;\n      text-decoration: none;\n      font-family: \"VodafoneLt\";\n      cursor: pointer;  \n    }\n    .cancel-button{\n      background:#666;\n      outline: none;\n      width: 47%;\n      font-size: 20px;\n      padding: 6px;\n      color: #ffffff;\n      text-align: center;\n      text-decoration: none;\n      font-family: \"VodafoneLt\";\n      cursor: pointer;  \n    }\n    .buttons-wrapper{\n      width:600px;\n      margin:90px auto;\n    }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZW5zZS9lZGl0LWV4cGVuc2UvZWRpdC1leHBlbnNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7RUFDckI7SUFDRTtNQUNFLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLHlCQUF5QjtNQUN6QixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsY0FBYztJQUNoQjtJQUVBO01BQ0Usa0JBQWtCO01BQ2xCLE1BQU07TUFDTixRQUFRO01BQ1IsWUFBWTtNQUNaLGVBQWU7SUFDakI7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsVUFBVTtNQUNWLGVBQWU7TUFDZixZQUFZO01BQ1osY0FBYztNQUNkLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIseUJBQXlCO01BQ3pCLGVBQWU7SUFDakI7SUFFQTtNQUNFLGVBQWU7TUFDZixhQUFhO01BQ2IsVUFBVTtNQUNWLGVBQWU7TUFDZixZQUFZO01BQ1osY0FBYztNQUNkLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIseUJBQXlCO01BQ3pCLGVBQWU7SUFDakI7SUFFQTtNQUNFLFdBQVc7TUFDWCxnQkFBZ0I7SUFDbEIiLCJmaWxlIjoic3JjL2FwcC9leHBlbnNlL2VkaXQtZXhwZW5zZS9lZGl0LWV4cGVuc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgfVxuICAgIGgxLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlZvZGFmb25lTHRcIjtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgfVxuICBcbiAgICBhIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICBidXR0b24ge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6ICNlNjAwMDA7XG4gICAgICB3aWR0aDogNDclO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LWZhbWlseTogXCJWb2RhZm9uZUx0XCI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7ICBcbiAgICB9XG4gICBcbiAgICAuY2FuY2VsLWJ1dHRvbntcbiAgICAgIGJhY2tncm91bmQ6IzY2NjtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB3aWR0aDogNDclO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LWZhbWlseTogXCJWb2RhZm9uZUx0XCI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7ICBcbiAgICB9IFxuICBcbiAgICAuYnV0dG9ucy13cmFwcGVye1xuICAgICAgd2lkdGg6NjAwcHg7XG4gICAgICBtYXJnaW46OTBweCBhdXRvO1xuICAgIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/expense/edit-expense/edit-expense.component.html":
/*!******************************************************************!*\
  !*** ./src/app/expense/edit-expense/edit-expense.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>Edit language</h1>\n<div class=\"form-fields\">\n  <form [formGroup]=\"languageForm\" (ngSubmit)=\"saveLanguageUpdates()\">\n    <label  class=\"required\" for=\"name\">\n      <span>Language name</span>\n    </label>\n    <input matInput formControlName=\"name\" placeholder=\"Name\">\n    <label class=\"required\" for=\"code\">\n      <span>Language code</span>\n    </label>\n    <input matInput formControlName=\"code\" placeholder=\"Code\">\n    <label for=\"status\">\n      <span>Language status</span>\n    </label>\n    <mat-select class=\"select\" disableOptionCentering formControlName=\"status\" placeholder=\"Status\">\n      <mat-option [value]=\"0\" [disabled]=\"data.language.status === 0\">Inactive</mat-option>\n      <mat-option [value]=\"1\" [disabled]=\"data.language.status === 1\">Active</mat-option>\n    </mat-select>\n    <div class=\"error\">\n      <mat-error *ngIf=\"hasError()\">{{getError()}}</mat-error>\n    </div>\n    <mat-dialog-actions>\n      <a (click)=\"closeDialog()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"36\" height=\"36\" viewBox=\"0 0 24 24\">\n          <path fill=\"#fff\" d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/>\n          <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n        </svg>\n      </a>\n      <button type=submit [disabled]=\"submittedForm\">Save</button>\n    </mat-dialog-actions>\n  </form>\n</div> -->"

/***/ }),

/***/ "./src/app/expense/edit-expense/edit-expense.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/expense/edit-expense/edit-expense.component.ts ***!
  \****************************************************************/
/*! exports provided: EditExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditExpenseComponent", function() { return EditExpenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditExpenseComponent = /** @class */ (function () {
    function EditExpenseComponent() {
    }
    EditExpenseComponent.prototype.ngOnInit = function () {
    };
    EditExpenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-expense',
            template: __webpack_require__(/*! ./edit-expense.component.html */ "./src/app/expense/edit-expense/edit-expense.component.html"),
            styles: [__webpack_require__(/*! ./edit-expense.component.css */ "./src/app/expense/edit-expense/edit-expense.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditExpenseComponent);
    return EditExpenseComponent;
}());



/***/ }),

/***/ "./src/app/expense/expense-actions-renderer/expense-actions-renderer.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/expense/expense-actions-renderer/expense-actions-renderer.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\n    cursor: pointer;\n    margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZW5zZS9leHBlbnNlLWFjdGlvbnMtcmVuZGVyZXIvZXhwZW5zZS1hY3Rpb25zLXJlbmRlcmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZXhwZW5zZS9leHBlbnNlLWFjdGlvbnMtcmVuZGVyZXIvZXhwZW5zZS1hY3Rpb25zLXJlbmRlcmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/expense/expense-actions-renderer/expense-actions-renderer.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/expense/expense-actions-renderer/expense-actions-renderer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n    <i class=\"glyphicon glyphicon-pencil\" (click)=\"editExpense()\"></i>\n    <i class=\"glyphicon glyphicon-trash\" (click)=\"deleteExpense()\"></i>\n</div> -->"

/***/ }),

/***/ "./src/app/expense/expense-actions-renderer/expense-actions-renderer.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/expense/expense-actions-renderer/expense-actions-renderer.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ExpenseActionsRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseActionsRendererComponent", function() { return ExpenseActionsRendererComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delete_expense_delete_expense_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../delete-expense/delete-expense.component */ "./src/app/expense/delete-expense/delete-expense.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-expense/edit-expense.component */ "./src/app/expense/edit-expense/edit-expense.component.ts");





var ExpenseActionsRendererComponent = /** @class */ (function () {
    function ExpenseActionsRendererComponent(dialog) {
        this.dialog = dialog;
    }
    ExpenseActionsRendererComponent.prototype.agInit = function (params) {
        this.params = params;
        this.gridApi = params.api;
    };
    ExpenseActionsRendererComponent.prototype.refresh = function () {
        return false;
    };
    ExpenseActionsRendererComponent.prototype.editExpense = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_4__["EditExpenseComponent"], {
            minWidth: '100%',
            height: '100%',
            data: {
                expense: this.params.node.data
            }
        }).afterClosed().subscribe(function (res) {
            if (res) {
                _this.params.node.setData(res);
            }
        });
    };
    ExpenseActionsRendererComponent.prototype.deleteExpense = function (node) {
        var _this = this;
        var dialogRef = this.dialog.open(_delete_expense_delete_expense_component__WEBPACK_IMPORTED_MODULE_2__["DeleteExpenseComponent"], {
            minWidth: '100%',
            height: '100%',
            data: {
                expense: this.params.node.data
            }
        }).afterClosed().subscribe(function (res) {
            if (res) {
                _this.gridApi.updateRowData({ remove: [res] });
            }
        });
    };
    ExpenseActionsRendererComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expense-actions-renderer',
            template: __webpack_require__(/*! ./expense-actions-renderer.component.html */ "./src/app/expense/expense-actions-renderer/expense-actions-renderer.component.html"),
            styles: [__webpack_require__(/*! ./expense-actions-renderer.component.css */ "./src/app/expense/expense-actions-renderer/expense-actions-renderer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ExpenseActionsRendererComponent);
    return ExpenseActionsRendererComponent;
}());



/***/ }),

/***/ "./src/app/expense/expense.component.css":
/*!***********************************************!*\
  !*** ./src/app/expense/expense.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    font-size: 20px;\n    margin-bottom: 5px;\n    cursor: pointer;\n    width: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZW5zZS9leHBlbnNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9leHBlbnNlL2V4cGVuc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/expense/expense.component.html":
/*!************************************************!*\
  !*** ./src/app/expense/expense.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<div class=\"app\">\n<button mat-raised-button (click)=\"newExpensePopUp()\">Adaugă cheltuială</button>\n<ag-grid-angular domLayout=\"autoHeight\" class=\"ag-theme-material\" [enableSorting]=\"true\" [enableFilter]=\"true\" [rowData]=\"rowData\"\n    [columnDefs]=\"columnDefs\" [suppressHorizontalScroll]=\"true\" (gridReady)=\"onGridReady($event)\" [frameworkComponents]=\"frameworkComponents\">\n</ag-grid-angular>\n</div> -->\n<div>IT WORKS</div>"

/***/ }),

/***/ "./src/app/expense/expense.component.ts":
/*!**********************************************!*\
  !*** ./src/app/expense/expense.component.ts ***!
  \**********************************************/
/*! exports provided: ExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseComponent", function() { return ExpenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _expense_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expense.service */ "./src/app/expense/expense.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");





var ExpenseComponent = /** @class */ (function () {
    function ExpenseComponent(_expenseService, dialog, _authService) {
        // this.columnDefs = [
        //   { headerName: 'Valoare', field: 'name', width: 10 ,  filter: 'agTextColumnFilter'},
        //   { headerName: 'Code', field: 'code', width: 10,  filter: 'agTextColumnFilter' },
        //   { headerName: 'Actions', field: 'actions', width: 20, cellRenderer: 'actionsRenderer' }
        // ];
        // this.gridOptions = {
        //   columnDefs: this.columnDefs,
        //   enableFilter: true,
        //   enableSorting: true,
        //   pagination: true
        // };
        // this.frameworkComponents = {
        //   actionsRenderer: ExpenseActionsRendererComponent
        // };
        this._expenseService = _expenseService;
        this.dialog = dialog;
        this._authService = _authService;
        this.rowData = [];
    }
    ExpenseComponent.prototype.ngOnInit = function () {
        // this.setRowData();
        this._expenseService.readExpenses(this._authService.userID).subscribe(function (res) {
            console.log(res);
        });
    };
    ExpenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expense',
            template: __webpack_require__(/*! ./expense.component.html */ "./src/app/expense/expense.component.html"),
            styles: [__webpack_require__(/*! ./expense.component.css */ "./src/app/expense/expense.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_expense_service__WEBPACK_IMPORTED_MODULE_2__["ExpenseService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ExpenseComponent);
    return ExpenseComponent;
}());



/***/ }),

/***/ "./src/app/expense/expense.service.ts":
/*!********************************************!*\
  !*** ./src/app/expense/expense.service.ts ***!
  \********************************************/
/*! exports provided: ExpenseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseService", function() { return ExpenseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var ExpenseService = /** @class */ (function () {
    function ExpenseService(_http) {
        this._http = _http;
    }
    ExpenseService.prototype.createExpense = function (Expense, id) {
        return this._http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].redirectUri + "/expenses/" + id, Expense).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err); }));
    };
    ExpenseService.prototype.readExpenses = function (id) {
        console.log("TCL: ExpenseService -> constructor -> id", id);
        return this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].redirectUri + "/expenses/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err); }));
    };
    ExpenseService.prototype.updateExpense = function (Expense, id) {
        return this._http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].redirectUri + "/expenses/" + id, Expense).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err); }));
    };
    ExpenseService.prototype.deleteExpense = function (id) {
        return this._http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].redirectUri + "/expenses/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err); }));
    };
    ExpenseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExpenseService);
    return ExpenseService;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \n\n .container {\n    background-color: #222;\n    padding: 0;\n    top: 0;\n    left:0;\n    right: 0;\n    bottom: 0;\n    margin: 0;\n    z-index: -2;\n    position: absolute;\n    background-size: cover;\n  }\n  \n  .dashboard {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    min-width: 200px;\n    min-height: 500px;\n  }\n  \n  .column {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    flex-wrap: wrap;\n  }\n  \n  .item {\n    margin: 5px;\n    flex-grow: 1;\n    min-height: 250px;\n    min-width: 250px;\n  }\n  \n  .small.item {\n    min-width: 305px;\n  }\n  \n  #br {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    flex-wrap: wrap;\n    min-height: 250px;\n  }\n  \n  #br > section {\n    flex-grow: 1;\n  } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbURLIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuXG4gLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OjA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB6LWluZGV4OiAtMjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICBcbiAgLmRhc2hib2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICB9XG4gIFxuICAuY29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICBcbiAgLml0ZW0ge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICB9XG4gIFxuICAuc21hbGwuaXRlbSB7XG4gICAgbWluLXdpZHRoOiAzMDVweDtcbiAgfVxuICBcbiAgI2JyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgfVxuICBcbiAgI2JyID4gc2VjdGlvbiB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9ICovIl19 */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(_authService) {
        this._authService = _authService;
        this._authService.handleAuthentication();
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/income/income.component.css":
/*!*********************************************!*\
  !*** ./src/app/income/income.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luY29tZS9pbmNvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/income/income.component.html":
/*!**********************************************!*\
  !*** ./src/app/income/income.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  income works!\n</p>\n"

/***/ }),

/***/ "./src/app/income/income.component.ts":
/*!********************************************!*\
  !*** ./src/app/income/income.component.ts ***!
  \********************************************/
/*! exports provided: IncomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeComponent", function() { return IncomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IncomeComponent = /** @class */ (function () {
    function IncomeComponent() {
    }
    IncomeComponent.prototype.ngOnInit = function () {
    };
    IncomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-income',
            template: __webpack_require__(/*! ./income.component.html */ "./src/app/income/income.component.html"),
            styles: [__webpack_require__(/*! ./income.component.css */ "./src/app/income/income.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IncomeComponent);
    return IncomeComponent;
}());



/***/ }),

/***/ "./src/app/invoice/invoice.component.css":
/*!***********************************************!*\
  !*** ./src/app/invoice/invoice.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvaW52b2ljZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/invoice/invoice.component.html":
/*!************************************************!*\
  !*** ./src/app/invoice/invoice.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  invoice works!\n</p>\n"

/***/ }),

/***/ "./src/app/invoice/invoice.component.ts":
/*!**********************************************!*\
  !*** ./src/app/invoice/invoice.component.ts ***!
  \**********************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent() {
    }
    InvoiceComponent.prototype.ngOnInit = function () {
    };
    InvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.css */ "./src/app/invoice/invoice.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var declarations = [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"]];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: declarations,
            exports: declarations
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/navigation/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/navigation/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  a {\n    text-decoration: none;\n    color: white;\n  }\n  \n  a:hover,\n  a:active {\n    color: lightgray;\n  }\n  \n  .navigation-items {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n  \n  .navigation-items {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n  \n  .nav-caption {\n      display: inline-block;\n      padding-left: 6px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztFQUNYOztFQUVBO01BQ0kscUJBQXFCO01BQ3JCLGlCQUFpQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIGE6aG92ZXIsXG4gIGE6YWN0aXZlIHtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xuICB9XG4gIFxuICAubmF2aWdhdGlvbi1pdGVtcyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5uYXZpZ2F0aW9uLWl0ZW1zIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLm5hdi1jYXB0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/navigation/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/navigation/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <div>\n      <button mat-icon-button (click)=\"onToggleSidenav()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </div>\n    <div fxFlex fxLayout fxLayoutAlign=\"flex-end\" fxHide.lt-xs>\n      <h1>Budgety</h1>\n    </div>\n  </mat-toolbar>"

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onToggleSidenav = function () {
        this.sidenavToggle.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "sidenavToggle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/navigation/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/navigation/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/navigation/sidenav/sidenav.component.css":
/*!**********************************************************!*\
  !*** ./src/app/navigation/sidenav/sidenav.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover, a:active {\n    color: lightgray;\n}\n \na {\n    text-decoration: none;\n    color: white;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYTpob3ZlciwgYTphY3RpdmUge1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG59XG4gXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/navigation/sidenav/sidenav.component.html":
/*!***********************************************************!*\
  !*** ./src/app/navigation/sidenav/sidenav.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n    <a mat-list-item routerLink=\"/signup\" (click)=\"onClose()\">\n      <span class=\"nav-caption\">signup </span></a>\n    <a mat-list-item routerLink=\"/login\" (click)=\"onClose()\">\n      <span class=\"nav-caption\">login</span>\n    </a>\n    <a mat-list-item routerLink=\"/expenses\" (click)=\"onClose()\">\n      <span class=\"nav-caption\">Cheltuieli</span>\n    </a>\n    <a mat-list-item routerLink=\"/incomes\" (click)=\"onClose()\">\n      <span class=\"nav-caption\">Venituri</span>\n    </a>\n    <a mat-list-item routerLink=\"/economies\" (click)=\"onClose()\">\n      <span class=\"nav-caption\">Economii</span>\n    </a>\n    <a mat-list-item routerLink=\"/invoices\" (click)=\"onClose()\">\n      <span class=\"nav-caption\">Facturi și plăți fixe</span>\n    </a>\n    <a mat-list-item routerLink=\"/reports\" (click)=\"onClose()\">\n      <span class=\"nav-caption\">Rapoarte și analize</span>\n    </a>\n  </mat-nav-list>"

/***/ }),

/***/ "./src/app/navigation/sidenav/sidenav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/navigation/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.closeSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.onClose = function () {
        this.closeSidenav.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavComponent.prototype, "closeSidenav", void 0);
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/navigation/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/navigation/sidenav/sidenav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.component.css":
/*!***********************************************!*\
  !*** ./src/app/reports/reports.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/reports/reports.component.html":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reports works!\n</p>\n"

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/reports/reports.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    redirectUri: 'localhost:4200'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/anamilea/projects/budgety-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map