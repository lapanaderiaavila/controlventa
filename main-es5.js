(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gastos-component/gastos.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gastos-component/gastos.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\t<div class=\"form-group row\" class=\"table-responsive-lg\">\n\n\t\t<!-- https://getbootstrap.com/docs/3.4/css/ -->\n\t\t<BR/>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<label>Concepto</label>\n\t\t\t\t<input type=\"text\" placeholder=\"Concepto\" class=\"form-control\" style=\"width: 150px;\" matInput [formControl]=\"control\" [matAutocomplete]=\"auto\">\n\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\" (optionSelected)=\"onConceptoSelected($event.option.value)\">\n\t\t\t\t\t<!--concepto is the current item you are iterating and value is the property you want to assign to the \"control\" once the user picks a concepto  --->\n\t\t\t\t\t<mat-option *ngFor=\"let gasto of filteredGastos | async\" [value]=\"gasto\">\n\t\t\t\t\t\t{{gasto.concepto}}\n\t\t\t\t\t</mat-option>\n\t\t\t\t</mat-autocomplete>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<label style=\"width: 100%; text-align: center;\">Recurrente</label>\n\t\t\t\t<input type=\"checkbox\" class=\"form-control\" [(ngModel)]=\"manualExpense.recurrente\" \n\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"  [disabled]=\"guardando || manualExpense.id > 0\"/>\n\t\t\t</div>\n            <div class=\"col\">\n\t\t\t\t<label>Monto</label>\n\t\t\t\t<input type=\"number\" placeholder=\"Monto\" class=\"form-control\" [(ngModel)]=\"manualExpense.montoPagado\" \n\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"  [disabled]=\"guardando\"/>\n\t\t\t</div>\n\t\t\t<div class=\"col text-center\" style=\"margin-top: 5px;\">\n\t\t\t\t<BR/>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-md\" (click)=\"addGastoToTable()\" [disabled]=\"guardando\">\n\t\t\t\t\tAgregar\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<BR/>\n\n\t\t<table class=\"table table-hover table-striped \">\n\t\t\t<!-- https://getbootstrap.com/docs/4.0/content/tables/ -->\n\t\t\t<thead>\n\t\t\t\t<tr>\n                    <th scope=\"col\"><h6>Concepto</h6></th>\n                    <th scope=\"col\"><h6>Recurrencia</h6></th>\n                    <th scope=\"col\"><h6 style=\"text-align: right;\">Referencia</h6></th>\n                    <th scope=\"col\"><h6 style=\"text-align: right;\">Fecha</h6></th>\n                    <th scope=\"col\"><h6 style=\"text-align: right;\">Pagado</h6></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let gasto of allExpenses\">\n\t\t\t\t\t<td scope=\"row\" class=\"text-nowrap\" style=\"text-align: left;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t{{ gasto.concepto }}\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</td>\n                    <td>\n\t\t\t\t\t\t<h6 style=\"text-align: left;\">\n\t\t\t\t\t\t\t{{ gasto.recurrencia }}\n\t\t\t\t\t\t</h6>\n                    </td>\n                    <td>\n\t\t\t\t\t\t<h6 style=\"text-align: right;\">\n\t\t\t\t\t\t\t{{ gasto.montoReferencia | currency:'CRC':true}}\n\t\t\t\t\t\t</h6>\n                    </td>\n                    <td>\n\t\t\t\t\t\t<h6 style=\"text-align: right;\">\n                            {{ gasto.fechaPagado | date }} \n                        </h6>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<h6 style=\"text-align: right;\">\n                            {{ gasto.montoPagado  | currency:'CRC':true}} \n                        </h6>\n\t\t\t\t\t</td>\n                </tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home-component/home.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-component/home.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n   <!--li class=\"nav-item\">\n     <a class=\"nav-link active\" id=\"ventas-tab\" data-toggle=\"tab\" href=\"#ventas\" role=\"tab\" aria-controls=\"ventas\" aria-selected=\"true\">Ventas</a>\n   </li-->\n   <li class=\"nav-item\">\n     <a class=\"nav-link\" id=\"gastos-tab\" data-toggle=\"tab\" href=\"#gastos\" role=\"tab\" aria-controls=\"gastos\" aria-selected=\"false\">Gastos</a>\n   </li>\n   <li class=\"nav-item\">\n     <a class=\"nav-link\" id=\"produccion-tab\" data-toggle=\"tab\" href=\"#produccion\" role=\"tab\" aria-controls=\"produccion\" aria-selected=\"false\">Produccion</a>\n   </li>\n   <li class=\"nav-item\">\n     <a class=\"nav-link\" id=\"perdidas-tab\" data-toggle=\"tab\" href=\"#perdidas\" role=\"tab\" aria-controls=\"perdidas\" aria-selected=\"false\">Perdidas</a>\n   </li>\n   <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"produccion-external-tab\" data-toggle=\"tab\" href=\"#produccion-external\" role=\"tab\" aria-controls=\"produccion-external\" aria-selected=\"false\">Externo</a>\n    </li>\n </ul>\n <div class=\"tab-content\" id=\"myTabContent\">\n   <!--div class=\"tab-pane fade show active\" id=\"ventas\" role=\"tabpanel\" aria-labelledby=\"ventas-tab\">\n     <app-root></app-root>\n   </div-->\n   <div class=\"tab-pane fade show active\" id=\"gastos\" role=\"tabpanel\" aria-labelledby=\"gastos-tab\">\n      <app-gastos-component></app-gastos-component>\n   </div>\n   <div class=\"tab-pane fade\" id=\"produccion\" role=\"tabpanel\" aria-labelledby=\"produccion-tab\">\n      <app-produccion-component [useOwnedProducts]=\"true\" mode=\"in\"></app-produccion-component>\n   </div>\n   <div class=\"tab-pane fade\" id=\"perdidas\" role=\"tabpanel\" aria-labelledby=\"perdidas-tab\">\n      <app-produccion-component [useOwnedProducts]=\"true\" mode=\"out\"></app-produccion-component>\n   </div>\n   <div class=\"tab-pane fade\" id=\"produccion-external\" role=\"tabpanel\" aria-labelledby=\"produccion-external-tab\">\n      <app-produccion-component [useOwnedProducts]=\"false\" mode=\"stock\"></app-produccion-component>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/produccion-component/produccion.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/produccion-component/produccion.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n   <!--img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"-->\n </div>\n \n <form class=\"form-group\" (submit)=\"registrarVenta($event)\" style=\"margin: 0px; padding: 0px;\">\n   <table class=\"table table-hover table-striped \">\n      <!-- https://getbootstrap.com/docs/4.0/content/tables/ -->\n      <thead>\n         <tr style=\"padding:0px;\">\n            <th style=\"padding:8px;\" scope=\"col\"><h6>Producto</h6></th>\n            <th style=\"padding:8px;\" scope=\"col\"><h6>{{col2Title}}</h6></th>\n            <th style=\"padding:8px;\" scope=\"col\" class=\"text-right\"><h6>Total</h6></th>\n         </tr>\n      </thead>\n\n      <tbody *ngIf=\"allProduction\">\n         <tr *ngFor=\"let productionProduct of allProduction\">\n            <td>\n               {{ productionProduct.product.nombre }}\n            </td>\n            <td>\n               <div class=\"input-group\">\n                  <input type=\"number\" class=\"input-number form-control-md text-right\" style=\"height: 31px; width: 60px;\" [(ngModel)]=\"productionProduct.production\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"guardando\"/>\n               </div>\n            </td>\n            <td>\n               <h6 class=\"text-right\">{{ productionProduct.productionTotal }}</h6>\n            </td>\n         </tr>\n         <tr>\n            <td class=\"text-right\" colspan=\"2\">\n               <button type=\"button\" class=\"btn btn-primary btn-sm\" [disabled]=\"guardando\" name=\"btnGuardando\" (click)=\"saveProduction()\">\n                  Guardar\n               </button>\n            </td>\n            <td></td>\n         </tr>\n      </tbody>\n   </table>\n  </form>\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wasted-component/wasted.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wasted-component/wasted.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n   <!--img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"-->\n </div>\n \n <form class=\"form-group\" style=\"margin: 0px; padding: 0px;\">\n   <table class=\"table table-hover table-striped \">\n      <!-- https://getbootstrap.com/docs/4.0/content/tables/ -->\n      <thead>\n         <tr style=\"padding:0px;\">\n            <th style=\"padding:8px;\" scope=\"col\"><h6>Producto</h6></th>\n            <th style=\"padding:8px;\" scope=\"col\"><h6>Perdido</h6></th>\n            <th style=\"padding:8px;\" scope=\"col\" class=\"text-right\"><h6>Total</h6></th>\n         </tr>\n      </thead>\n\n      <tbody *ngIf=\"allWasted\">\n         <tr *ngFor=\"let wastedProduct of allWasted\">\n            <td>\n               {{ wastedProduct.product.nombre }}\n            </td>\n            <td>\n               <div class=\"input-group\">\n                  <input type=\"number\" class=\"input-number form-control-md text-right\" style=\"height: 31px; width: 60px;\" [(ngModel)]=\"wastedProduct.wasted\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"guardando\"/>\n               </div>\n            </td>\n            <td>\n               <h6 class=\"text-right\">{{ wastedProduct.wastedTotal }}</h6>\n            </td>\n         </tr>\n         <tr>\n            <td class=\"text-right\" colspan=\"2\">\n               <button type=\"button\" class=\"btn btn-primary btn-sm\" [disabled]=\"guardando\" name=\"btnGuardando\" (click)=\"saveWasted()\">\n                  Guardar\n               </button>\n            </td>\n            <td></td>\n         </tr>\n      </tbody>\n   </table>\n  </form>\n "

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
/* harmony import */ var _home_component_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-component/home.component */ "./src/app/home-component/home.component.ts");




var routes = [
    { path: '', component: _home_component_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'controlventa', component: _home_component_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'panaderiaavila', component: _home_component_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
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

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initApp, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initApp", function() { return initApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_es_CR__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/es-CR */ "./node_modules/@angular/common/locales/es-CR.js");
/* harmony import */ var _angular_common_locales_es_CR__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_CR__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _gastos_component_gastos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gastos-component/gastos.component */ "./src/app/gastos-component/gastos.component.ts");
/* harmony import */ var _produccion_component_produccion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./produccion-component/produccion.component */ "./src/app/produccion-component/produccion.component.ts");
/* harmony import */ var _wasted_component_wasted_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wasted-component/wasted.component */ "./src/app/wasted-component/wasted.component.ts");
/* harmony import */ var _home_component_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home-component/home.component */ "./src/app/home-component/home.component.ts");














 // root
Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(_angular_common_locales_es_CR__WEBPACK_IMPORTED_MODULE_9___default.a);
function initApp(gapiSession) {
    return function () {
        gapiSession.initClient("module");
    };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            // import components and directives to use
            declarations: [
                //AppComponent,
                _gastos_component_gastos_component__WEBPACK_IMPORTED_MODULE_10__["GastosComponent"],
                _produccion_component_produccion_component__WEBPACK_IMPORTED_MODULE_11__["ProduccionComponent"],
                _wasted_component_wasted_component__WEBPACK_IMPORTED_MODULE_12__["WastedComponent"],
                _home_component_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
            ],
            // import other modules to use
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"]
            ],
            /*
            https://angular.io/guide/providers:
              A provider is an instruction to the Dependency Injection system on how to obtain a value for a dependency
              Most of the time, these dependencies are services that you create and provide.
            https://angular.io/guide/dependency-injection-providers#tree-shakable-providers
              APP_INITIALIZER: Callback is invoked before an app is initialized. All registered initializers can optionally return a Promise
              All initializer functions that return Promises must be resolved before the application is bootstrapped.
              If one of the initializers fails to resolves, the application is not bootstrapped.
              multi: true:  Adds the provider to the existing collection.
            */
            providers: [
                {
                    /* Instantiates a GapiSession object and call its initGapi method once the app has been initialized */
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: initApp,
                    deps: [_infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_5__["GapiSession"]],
                    multi: true
                },
                _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_5__["GapiSession"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],
                    useValue: 'es-CR'
                }
            ],
            /*
            https://angular.io/guide/bootstrapping
              The root component(s) that Angular creates and inserts into the index.html host web page.
            */
            bootstrap: [_home_component_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gastos-component/gastos.component.css":
/*!*******************************************************!*\
  !*** ./src/app/gastos-component/gastos.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhc3Rvcy1jb21wb25lbnQvZ2FzdG9zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/gastos-component/gastos.component.ts":
/*!******************************************************!*\
  !*** ./src/app/gastos-component/gastos.component.ts ***!
  \******************************************************/
/*! exports provided: GastosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GastosComponent", function() { return GastosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_expense_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/expense.model */ "./src/models/expense.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_services_expense_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/expense-service.service */ "./src/services/expense-service.service.ts");







var GastosComponent = /** @class */ (function () {
    function GastosComponent(expenseService, ngZone) {
        this.expenseService = expenseService;
        this.ngZone = ngZone;
        this._allExpenses = [];
        this._recurrenteExpenses = [];
        this._ocasionalExpenses = [];
        this._manualExpense = _models_expense_model__WEBPACK_IMPORTED_MODULE_2__["Expense"].createEmptyGasto();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](); //used for the autocomplete text
    }
    Object.defineProperty(GastosComponent.prototype, "allExpenses", {
        get: function () {
            return this._allExpenses;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(GastosComponent.prototype, "manualExpense", {
        /*
           public get recurrenteExpenses(): Array<Expense>{
              return this._recurrenteExpenses
           };
        
           public get ocasionalExpenses(): Array<Expense> {
              return this._ocasionalExpenses;
           };*/
        get: function () {
            return this._manualExpense;
        },
        enumerable: true,
        configurable: true
    });
    GastosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.expenseService.initExpenseService().then(function () {
            _this.ngZone.run(function () {
                _this._allExpenses = _this.expenseService.allExpenses;
                _this._recurrenteExpenses = _this.expenseService.recurrenteExpenses;
                _this._ocasionalExpenses = _this.expenseService.ocasionalExpenses;
                // the valueis an string while the user is typing, once the users selects a product from the list, it will be a DetalleOrden
                _this.filteredGastos = _this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (display) { return display ? _this._filter(display instanceof _models_expense_model__WEBPACK_IMPORTED_MODULE_2__["Expense"] ? display.concepto : display) : _this._allExpenses.slice(); }));
            });
        });
    };
    GastosComponent.prototype._filter = function (value) {
        var _this = this;
        if (value) {
            var filterValue_1 = this._normalizeValue(value);
            var gastosMatched = this._allExpenses
                .filter(function (g) { return _this._normalizeValue(g.concepto).includes(filterValue_1); });
            return gastosMatched;
        }
        return [];
    };
    GastosComponent.prototype._normalizeValue = function (value) {
        return value ? value.toLowerCase().replace(/\s/g, '') : "";
    };
    GastosComponent.prototype.displayFn = function (gasto) {
        return gasto ? gasto.concepto : undefined;
    };
    GastosComponent.prototype.onConceptoSelected = function (gastoSelected) {
        this._manualExpense = gastoSelected;
    };
    GastosComponent.prototype.addGastoToTable = function () {
        var _this = this;
        // first lets validate the data
        if (!this.control.value ||
            this._manualExpense.montoPagado <= 0) {
            return;
        }
        this._manualExpense.fechaPagado = new Date();
        if (this._manualExpense.id <= 0) {
            // if it gets here, means the expense has not been registered so we need to add it into the ControlGastosRecurrentes or ControlGastosOcasionales catalog (+1 because of the header)
            this._manualExpense.concepto = this.control.value;
            this._manualExpense.id = this._manualExpense.recurrente ? this._recurrenteExpenses.length + 1 : this._ocasionalExpenses.length + 1;
        }
        this.expenseService.saveExpense(this._manualExpense).then(function () {
            return _this.ngZone.run(function () {
                _this._allExpenses = _this.expenseService.allExpenses;
                _this._recurrenteExpenses = _this.expenseService.recurrenteExpenses;
                _this._ocasionalExpenses = _this.expenseService.ocasionalExpenses;
                // clean the new product information to enter a new one
                _this._manualExpense = _models_expense_model__WEBPACK_IMPORTED_MODULE_2__["Expense"].createEmptyGasto();
                _this.control.setValue("");
            });
        });
    };
    GastosComponent.ctorParameters = function () { return [
        { type: src_services_expense_service_service__WEBPACK_IMPORTED_MODULE_5__["ExpenseService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    GastosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gastos-component',
            template: __webpack_require__(/*! raw-loader!./gastos.component.html */ "./node_modules/raw-loader/index.js!./src/app/gastos-component/gastos.component.html"),
            styles: [__webpack_require__(/*! ./gastos.component.css */ "./src/app/gastos-component/gastos.component.css")]
        })
    ], GastosComponent);
    return GastosComponent;
}());



/***/ }),

/***/ "./src/app/home-component/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-component/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtY29tcG9uZW50L2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home-component/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-component/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-component',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home-component/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home-component/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/produccion-component/produccion.component.css":
/*!***************************************************************!*\
  !*** ./src/app/produccion-component/produccion.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y2Npb24tY29tcG9uZW50L3Byb2R1Y2Npb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/produccion-component/produccion.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/produccion-component/produccion.component.ts ***!
  \**************************************************************/
/*! exports provided: ProduccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduccionComponent", function() { return ProduccionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_production_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/production-control.service */ "./src/services/production-control.service.ts");



var ProduccionComponent = /** @class */ (function () {
    function ProduccionComponent(productionControlService, ngZone) {
        this.productionControlService = productionControlService;
        this.ngZone = ngZone;
        this.useOwnedProducts = true;
        this.mode = "in"; // possible values, in (means the production value entered will be added), out (means the production value will be substracted), stock (means the production value will be the new total in stock)
        this._processing = false;
        this._allProduction = [];
    }
    Object.defineProperty(ProduccionComponent.prototype, "allProduction", {
        get: function () {
            return this._allProduction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProduccionComponent.prototype, "processing", {
        get: function () {
            return this._processing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProduccionComponent.prototype, "col2Title", {
        get: function () {
            return this._col2Title;
        },
        enumerable: true,
        configurable: true
    });
    ProduccionComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.useOwnedProducts) {
            this._col2Title = this.mode == "in" ? "Producido" : (this.mode == "out" ? "Perdido" : "Inventario");
        }
        else {
            this._col2Title = this.mode == "in" ? "Entrada" : (this.mode == "out" ? "Sobrante" : "Inventario");
        }
        this.productionControlService.initProductionServiceService().then(function () {
            _this.ngZone.run(function () {
                _this._allProduction = _this.useOwnedProducts ? _this.productionControlService.allProductionOwned : _this.productionControlService.allProductionExternal;
            });
        });
    };
    ProduccionComponent.prototype.saveProduction = function () {
        var _this = this;
        this.productionControlService.saveProduction(this.mode).then(function () {
            _this.ngZone.run(function () {
                _this._allProduction = _this.useOwnedProducts ? _this.productionControlService.allProductionOwned : _this.productionControlService.allProductionExternal;
            });
        });
    };
    ProduccionComponent.ctorParameters = function () { return [
        { type: src_services_production_control_service__WEBPACK_IMPORTED_MODULE_2__["ProductionControlService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('useOwnedProducts')
    ], ProduccionComponent.prototype, "useOwnedProducts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mode')
    ], ProduccionComponent.prototype, "mode", void 0);
    ProduccionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-produccion-component',
            template: __webpack_require__(/*! raw-loader!./produccion.component.html */ "./node_modules/raw-loader/index.js!./src/app/produccion-component/produccion.component.html"),
            styles: [__webpack_require__(/*! ./produccion.component.css */ "./src/app/produccion-component/produccion.component.css")]
        })
    ], ProduccionComponent);
    return ProduccionComponent;
}());



/***/ }),

/***/ "./src/app/wasted-component/wasted.component.css":
/*!*******************************************************!*\
  !*** ./src/app/wasted-component/wasted.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhc3RlZC1jb21wb25lbnQvd2FzdGVkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/wasted-component/wasted.component.ts":
/*!******************************************************!*\
  !*** ./src/app/wasted-component/wasted.component.ts ***!
  \******************************************************/
/*! exports provided: WastedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WastedComponent", function() { return WastedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_wasted_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/wasted.service */ "./src/services/wasted.service.ts");



var WastedComponent = /** @class */ (function () {
    function WastedComponent(wastedService, ngZone) {
        this.wastedService = wastedService;
        this.ngZone = ngZone;
        this._processing = false;
        this._allWasted = [];
    }
    Object.defineProperty(WastedComponent.prototype, "allWasted", {
        get: function () {
            return this._allWasted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WastedComponent.prototype, "processing", {
        get: function () {
            return this._processing;
        },
        enumerable: true,
        configurable: true
    });
    WastedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wastedService.initWastedService().then(function () {
            _this.ngZone.run(function () {
                _this._allWasted = _this.wastedService.allWasted;
            });
        });
    };
    WastedComponent.prototype.saveWasted = function () {
        var _this = this;
        this.wastedService.saveWasted().then(function () {
            _this.ngZone.run(function () {
                _this._allWasted = _this.wastedService.allWasted;
            });
        });
    };
    WastedComponent.ctorParameters = function () { return [
        { type: src_services_wasted_service__WEBPACK_IMPORTED_MODULE_2__["WastedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    WastedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wasted-component',
            template: __webpack_require__(/*! raw-loader!./wasted.component.html */ "./node_modules/raw-loader/index.js!./src/app/wasted-component/wasted.component.html"),
            styles: [__webpack_require__(/*! ./wasted.component.css */ "./src/app/wasted-component/wasted.component.css")]
        })
    ], WastedComponent);
    return WastedComponent;
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
    production: false
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

/***/ "./src/infrastructure/sessions/gapi.session.ts":
/*!*****************************************************!*\
  !*** ./src/infrastructure/sessions/gapi.session.ts ***!
  \*****************************************************/
/*! exports provided: GapiSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GapiSession", function() { return GapiSession; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// https://hintdesk.com/2018/08/24/angular-google-drive-api-example/
// 	https://developers.google.com/drive/api/v3/downloads
// 		https://github.com/google/google-api-javascript-client
// Client ID and API key from the Developer Console
var CLIENT_ID = "950877447297-7l1ms0m9q26fsqv0o1s7m5m9917ieasa.apps.googleusercontent.com";
var API_KEY = "AIzaSyB44r0X-I9jnqcBI7F5hcUdvfiQBEKmam4";
// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
//const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
// https://developers.google.com/sheets/api/guides/authorizing
//var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";
//var SCOPES = "https://www.googleapis.com/auth/drive";
var SCOPES = "https://www.googleapis.com/auth/spreadsheets";
var GapiSession = /** @class */ (function () {
    function GapiSession() {
        this.googleAuth = null;
    }
    GapiSession.prototype.initClient = function (source) {
        var _this = this;
        if (!this.initClientPromise) {
            console.log("Initializing Google API..." + source);
            this.initClientPromise = new Promise(function (resolve, reject) {
                gapi.load('client:auth2', function () {
                    return gapi.client.init({
                        apiKey: API_KEY,
                        clientId: CLIENT_ID,
                        discoveryDocs: DISCOVERY_DOCS,
                        scope: SCOPES,
                    }).then(function () {
                        _this.initClientSolved = true;
                        console.log("Google API initialized!");
                        _this.googleAuth = gapi.auth2.getAuthInstance();
                        resolve();
                        if (!_this.isSignedIn) {
                            // use this to refresh the credentials
                            //this.gapiSession.signOut();
                            _this.signIn("init client");
                        }
                    }).catch(function (ex) {
                        _this.initClientSolved = true;
                        console.log("Unable to initialize Google API! " + ex);
                    });
                });
            });
        }
        if (!this.initClientSolved) {
            // if !this.googleAuth means the 
            return this.initClientPromise;
        }
        else {
            return Promise.resolve('initialized');
        }
    };
    Object.defineProperty(GapiSession.prototype, "isSignedIn", {
        get: function () {
            if (this.googleAuth == null)
                return false;
            return this.googleAuth.isSignedIn.get();
        },
        enumerable: true,
        configurable: true
    });
    GapiSession.prototype.signIn = function (source) {
        if (this.googleAuth == null) {
            console.log("Unable to sign in....initClient() hasn't been called or hasn't finished " + source);
            return null;
        }
        console.log("Sign in with Google API....");
        return this.googleAuth.signIn({
            prompt: 'consent'
        }).then(function (googleUser) {
            console.log("Signed in!");
            //this.appRepository.User.add(googleUser.getBasicProfile());
        });
    };
    GapiSession.prototype.signOut = function () {
        if (this.googleAuth == null)
            return;
        this.googleAuth.signOut();
    };
    GapiSession = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], GapiSession);
    return GapiSession;
}());



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

/***/ "./src/models/expense.model.ts":
/*!*************************************!*\
  !*** ./src/models/expense.model.ts ***!
  \*************************************/
/*! exports provided: Expense */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expense", function() { return Expense; });
var Expense = /** @class */ (function () {
    function Expense(id, recurrente, concepto, recurrencia, fechaPagado, montoReferencia, montoPagado) {
        this.id = id;
        this.recurrente = recurrente;
        this.concepto = concepto;
        this.recurrencia = recurrencia;
        this.fechaPagado = fechaPagado;
        this.montoReferencia = montoReferencia;
        this.montoPagado = montoPagado;
    }
    Expense.prototype.getRowForGastos = function () {
        var row = new Array();
        row.push(this.id);
        row.push(this.concepto);
        if (this.recurrente) {
            if (!this.recurrencia) {
                this.recurrencia = "Todos los " + this.fechaPagado.getDate() + " de cada mes";
                row.push(this.recurrencia);
            }
            if (this.recurrente)
                row.push(this.montoReferencia);
        }
        ;
        row.push(this.fechaPagado);
        row.push(this.montoPagado);
        return row;
    };
    Expense.createEmptyGasto = function () {
        return new Expense(-1, false, "", null, null, null, null);
    };
    Expense.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: Date },
        { type: Number },
        { type: Number }
    ]; };
    return Expense;
}());



/***/ }),

/***/ "./src/models/product.model.ts":
/*!*************************************!*\
  !*** ./src/models/product.model.ts ***!
  \*************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, nombre, precio, tipo, order) {
        this.precio = -1;
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        // if price is less than zero then we treat them all as null
        if (precio >= 0) {
            this.precio = precio;
        }
        if (!order) {
            order = -1;
        }
        this.order = order;
    }
    Product.prototype.getRowForCatalogs = function () {
        var row = new Array();
        row.push(this.id);
        row.push(this.nombre);
        row.push(this.precio);
        row.push(this.order);
        return row;
    };
    Product.createEmptyProduct = function () {
        return new Product(-1, "", -1, "", -1);
    };
    Product.prototype.isOwned = function () {
        console.log("propio == " + this.tipo.toLowerCase() + " ? " + ("propio" == this.tipo.toLowerCase()));
        return "propio" == this.tipo.toLowerCase();
    };
    Product.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: Number },
        { type: String },
        { type: Number }
    ]; };
    return Product;
}());



/***/ }),

/***/ "./src/models/production-line.model.ts":
/*!*********************************************!*\
  !*** ./src/models/production-line.model.ts ***!
  \*********************************************/
/*! exports provided: ProductionLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionLine", function() { return ProductionLine; });
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.model */ "./src/models/product.model.ts");

var ProductionLine = /** @class */ (function () {
    function ProductionLine(product, date, production, stock) {
        this._production = 0;
        this._stock = 0;
        this._product = product;
        this._date = date;
        this._production = production;
    }
    Object.defineProperty(ProductionLine.prototype, "product", {
        get: function () {
            return this._product;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductionLine.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductionLine.prototype, "production", {
        get: function () {
            return this._production;
        },
        set: function (production) {
            this._production = production;
        },
        enumerable: true,
        configurable: true
    });
    ProductionLine.ctorParameters = function () { return [
        { type: _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"] },
        { type: Date },
        { type: Number },
        { type: Number }
    ]; };
    return ProductionLine;
}());



/***/ }),

/***/ "./src/models/production-product.model.ts":
/*!************************************************!*\
  !*** ./src/models/production-product.model.ts ***!
  \************************************************/
/*! exports provided: ProductionProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionProduct", function() { return ProductionProduct; });
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.model */ "./src/models/product.model.ts");

var ProductionProduct = /** @class */ (function () {
    function ProductionProduct(_product) {
        this._product = _product;
        this._productionAllLines = [];
        this._productionInLines = [];
        this._productionOutLines = [];
        this._production = 0;
        this._productionTotal = 0;
        this._productionInTotal = 0;
        this._productionOutTotal = 0;
    }
    Object.defineProperty(ProductionProduct.prototype, "product", {
        get: function () {
            return this._product;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductionProduct.prototype, "productionAllLines", {
        get: function () {
            return this._productionAllLines;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductionProduct.prototype, "productionInLines", {
        get: function () {
            return this._productionInLines;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductionProduct.prototype, "productionOutLines", {
        get: function () {
            return this._productionOutLines;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductionProduct.prototype, "productionTotal", {
        get: function () {
            return this._productionTotal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductionProduct.prototype, "productionInTotal", {
        get: function () {
            return this._productionInTotal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductionProduct.prototype, "productionOutTotal", {
        get: function () {
            return this._productionOutTotal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductionProduct.prototype, "production", {
        get: function () {
            return this._production;
        },
        set: function (production) {
            this._production = production;
        },
        enumerable: true,
        configurable: true
    });
    ProductionProduct.prototype.addProductionLine = function (productionLine) {
        if (productionLine.product.id != this._product.id) {
            throw new Error('Invalid product line for this product');
        }
        this._productionAllLines.push(productionLine);
        this._productionTotal = this._productionTotal + productionLine.production;
        if (productionLine.production < 0) {
            this._productionOutLines.push(productionLine);
            this._productionOutTotal = this._productionOutTotal + productionLine.production;
        }
        else {
            this._productionInLines.push(productionLine);
            this._productionInTotal = this._productionInTotal + productionLine.production;
        }
    };
    ProductionProduct.ctorParameters = function () { return [
        { type: _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"] }
    ]; };
    return ProductionProduct;
}());



/***/ }),

/***/ "./src/models/wasted-line.model.ts":
/*!*****************************************!*\
  !*** ./src/models/wasted-line.model.ts ***!
  \*****************************************/
/*! exports provided: WastedLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WastedLine", function() { return WastedLine; });
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.model */ "./src/models/product.model.ts");

var WastedLine = /** @class */ (function () {
    function WastedLine(product, date, wasted) {
        this._wasted = 0;
        this._product = product;
        this._date = date;
        this._wasted = wasted;
    }
    Object.defineProperty(WastedLine.prototype, "product", {
        get: function () {
            return this._product;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WastedLine.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WastedLine.prototype, "wasted", {
        get: function () {
            return this._wasted;
        },
        set: function (wasted) {
            this._wasted = wasted;
        },
        enumerable: true,
        configurable: true
    });
    WastedLine.ctorParameters = function () { return [
        { type: _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"] },
        { type: Date },
        { type: Number }
    ]; };
    return WastedLine;
}());



/***/ }),

/***/ "./src/models/wasted-product.model.ts":
/*!********************************************!*\
  !*** ./src/models/wasted-product.model.ts ***!
  \********************************************/
/*! exports provided: WastedProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WastedProduct", function() { return WastedProduct; });
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.model */ "./src/models/product.model.ts");

var WastedProduct = /** @class */ (function () {
    function WastedProduct(_product) {
        this._product = _product;
        this._wastedLines = [];
        this._wasted = 0;
        this._wastedTotal = 0;
    }
    Object.defineProperty(WastedProduct.prototype, "product", {
        get: function () {
            return this._product;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WastedProduct.prototype, "wastedLines", {
        get: function () {
            return this._wastedLines;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WastedProduct.prototype, "wastedTotal", {
        get: function () {
            return this._wastedTotal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WastedProduct.prototype, "wasted", {
        get: function () {
            return this._wasted;
        },
        set: function (wasted) {
            this._wasted = wasted;
        },
        enumerable: true,
        configurable: true
    });
    WastedProduct.prototype.addWastedLine = function (wastedLine) {
        if (wastedLine.product.id != this._product.id) {
            throw new Error('Invalid wasted line for this product');
        }
        this._wastedTotal = this._wastedTotal + wastedLine.wasted;
        this._wastedLines.push(wastedLine);
    };
    WastedProduct.ctorParameters = function () { return [
        { type: _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"] }
    ]; };
    return WastedProduct;
}());



/***/ }),

/***/ "./src/services/base.service.ts":
/*!**************************************!*\
  !*** ./src/services/base.service.ts ***!
  \**************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var BaseService = /** @class */ (function () {
    function BaseService(route) {
        var _this = this;
        this.route = route;
        this.route.queryParams.subscribe(function (params) {
            _this._bakeryId = params['pana'];
        });
    }
    Object.defineProperty(BaseService.prototype, "sheetId", {
        get: function () {
            var sheetId = (!this._bakeryId || this._bakeryId == 1) ? BaseService.SPREADSHEET_ID_SAN_RA : BaseService.SPREADSHEET_ID_HEREDIA;
            console.log("using sheet Id : " + sheetId);
            return sheetId;
        },
        enumerable: true,
        configurable: true
    });
    BaseService.SPREADSHEET_ID_SAN_RA = '1B5cYzMJ4vc6ewk9RODCUqIVlYFqkWDrLToXrsUHIALs'; // ID of Esteban SanRafael spreadsheet vrs2, se toma del URL
    BaseService.SPREADSHEET_ID_HEREDIA = '1IGb0tjWiIaQvfWOQdUeQbOSZiffJJQa_POunpXQJUmE'; // ID of Esteban Heredia spreadsheet vrs2, se toma del URL
    // From https://developers.google.com/sheets/api/guides/values:
    // USER_ENTERED = The input is parsed exactly as if it were entered into the Google Sheets UI, so "Mar 1 2016" becomes a date, and "=1+2" becomes a formula. Formats may also be inferred, so "$100.15" becomes a number with currency formatting.
    BaseService.VALUE_INPUT_OPTION = "USER_ENTERED";
    // From https://developers.google.com/sheets/api/reference/rest/v4/ValueRenderOption
    // UNFORMATTED_VALUE = Values will be calculated, but not formatted in the reply. For example, if A1 is 1.23 and A2 is =A1 and formatted as currency, then A2 would return the number 1.23.
    BaseService.VALUE_RENDER_OPTION = "UNFORMATTED_VALUE";
    // From https://developers.google.com/sheets/api/reference/rest/v4/DateTimeRenderOption
    // FORMATTED_STRING = Instructs date, time, datetime, and duration fields to be output as strings in their given number format (which is dependent on the spreadsheet locale).
    BaseService.DATE_TIME_RENDER_OPTION = "FORMATTED_STRING";
    BaseService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"] }
    ]; };
    return BaseService;
}());



/***/ }),

/***/ "./src/services/expense-service.service.ts":
/*!*************************************************!*\
  !*** ./src/services/expense-service.service.ts ***!
  \*************************************************/
/*! exports provided: ExpenseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseService", function() { return ExpenseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/services/base.service.ts");
/* harmony import */ var _models_expense_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/expense.model */ "./src/models/expense.model.ts");
/* harmony import */ var _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ExpenseService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExpenseService, _super);
    function ExpenseService(gapiSession, route) {
        var _this = _super.call(this, route) || this;
        _this.gapiSession = gapiSession;
        _this._allExpenses = [];
        _this._recurrenteExpenses = [];
        _this._ocasionalExpenses = [];
        return _this;
    }
    ExpenseService_1 = ExpenseService;
    Object.defineProperty(ExpenseService.prototype, "allExpenses", {
        get: function () {
            return this._allExpenses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpenseService.prototype, "recurrenteExpenses", {
        get: function () {
            return this._recurrenteExpenses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpenseService.prototype, "ocasionalExpenses", {
        get: function () {
            return this._ocasionalExpenses;
        },
        enumerable: true,
        configurable: true
    });
    ExpenseService.prototype.initExpenseService = function () {
        var _this = this;
        if (!this._initExpenseServicePromise) {
            this._initExpenseServicePromise = this._loadRecurrentExpenses().then(function () {
                return _this._loadOcasionalExpenses();
            });
        }
        if (!this._initExpenseServicePromiseSolved) {
            return this._initExpenseServicePromise;
        }
        else {
            Promise.resolve("initialized");
        }
    };
    ExpenseService.prototype.saveExpense = function (expense) {
        // determine the row where to insert or update the info
        var listoOfExpenseses = [];
        var allExpenses = this._allExpenses;
        var rowIndexToUpdate = ExpenseService_1.RANGE_OCASIONAL_EXPENSES_ADD_ROW + (expense.id > 0 ? (1 + expense.id) : (2 + this._ocasionalExpenses.length));
        if (expense.recurrente) {
            listoOfExpenseses = this._recurrenteExpenses;
            rowIndexToUpdate = ExpenseService_1.RANGE_RECURRENT_EXPENSES_ADD_ROW;
            expense.montoReferencia = expense.montoPagado; // we save the last amount paid for each recurrent expense
        }
        else {
            listoOfExpenseses = this._ocasionalExpenses;
            rowIndexToUpdate = ExpenseService_1.RANGE_OCASIONAL_EXPENSES_ADD_ROW;
        }
        rowIndexToUpdate = rowIndexToUpdate + (expense.id > 0 ? (1 + expense.id) : (2 + listoOfExpenseses.length));
        return gapi.client.request({
            method: 'POST',
            // Sets values in one or more ranges of a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate
            path: "https://sheets.googleapis.com/v4/spreadsheets/" + this.sheetId + "/values:batchUpdate",
            body: {
                valueInputOption: _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"].VALUE_INPUT_OPTION,
                data: [
                    {
                        range: rowIndexToUpdate,
                        values: [
                            expense.getRowForGastos()
                        ]
                    }
                ]
            }
        }).then(function (response) {
            allExpenses.push(expense);
            listoOfExpenseses.push(expense);
        });
    };
    ExpenseService.prototype._loadRecurrentExpenses = function () {
        var _this = this;
        return this.gapiSession.initClient("Expense Service").then(function () {
            return gapi.client.request({
                method: 'GET',
                // Returns a range of values from a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
                path: "https://sheets.googleapis.com/v4/spreadsheets/" + _this.sheetId + "/values/" + ExpenseService_1.RANGE_RECURRENT_EXPENSES + "?valueRenderOption=" + _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"].VALUE_RENDER_OPTION + "&dateTimeRenderOption=" + _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"].DATE_TIME_RENDER_OPTION
            }).then(function (expenseRange) {
                _this._initExpenseServicePromiseSolved = true;
                var expensesList = expenseRange.result["values"];
                if (expensesList) {
                    for (var i = 0; i < expensesList.length; i++) {
                        var expenseFromSheet = expensesList[i];
                        var expense = new _models_expense_model__WEBPACK_IMPORTED_MODULE_3__["Expense"](expenseFromSheet[0], true, expenseFromSheet[1], expenseFromSheet[2], expenseFromSheet[4], expenseFromSheet[3], expenseFromSheet[5]);
                        _this._recurrenteExpenses.push(expense);
                        _this._allExpenses.push(expense);
                    }
                }
            });
        });
    };
    ExpenseService.prototype._loadOcasionalExpenses = function () {
        var _this = this;
        return this.gapiSession.initClient("Product Service").then(function () {
            return gapi.client.request({
                method: 'GET',
                // Returns a range of values from a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
                path: "https://sheets.googleapis.com/v4/spreadsheets/" + _this.sheetId + "/values/" + ExpenseService_1.RANGE_OCASIONAL_EXPENSES + "?valueRenderOption=" + _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"].VALUE_RENDER_OPTION + "&dateTimeRenderOption=" + _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"].DATE_TIME_RENDER_OPTION
            }).then(function (res) {
                (function (gastosRange) {
                    // necessary to run insice the zone in order to fire the change detection
                    //this.ngZone.run( () =>
                    // {
                    var expensesList = gastosRange.result["values"];
                    if (expensesList) {
                        for (var i = 0; i < expensesList.length; i++) {
                            var expenseFromSheet = expensesList[i];
                            // 0 = id, 1 = Concepto, 2 = Fecha Pagado, 3 = Monto Pagado
                            var gasto = new _models_expense_model__WEBPACK_IMPORTED_MODULE_3__["Expense"](expenseFromSheet[0], false, expenseFromSheet[1], null, expenseFromSheet[2], null, expenseFromSheet[3]);
                            _this._ocasionalExpenses.push(gasto);
                            _this._allExpenses.push(gasto);
                        }
                    }
                });
            });
        });
    };
    var ExpenseService_1;
    ExpenseService.RANGE_RECURRENT_EXPENSES = 'ControlGastosRecurrentes!A2:G';
    ExpenseService.RANGE_RECURRENT_EXPENSES_ADD_ROW = 'ControlGastosRecurrentes!A';
    ExpenseService.RANGE_OCASIONAL_EXPENSES = 'ControlGastosOcasionales!A2:D';
    ExpenseService.RANGE_OCASIONAL_EXPENSES_ADD_ROW = 'ControlGastosOcasionales!A';
    ExpenseService.ctorParameters = function () { return [
        { type: _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_4__["GapiSession"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    ExpenseService = ExpenseService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ExpenseService);
    return ExpenseService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/services/product.service.ts":
/*!*****************************************!*\
  !*** ./src/services/product.service.ts ***!
  \*****************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product.model */ "./src/models/product.model.ts");
/* harmony import */ var _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/services/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/**
 * ng generate service ../services/Product
 */





var ProductService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductService, _super);
    function ProductService(gapiSession, route) {
        var _this = _super.call(this, route) || this;
        _this.gapiSession = gapiSession;
        _this._allProductos = [];
        _this._allOwnedProducts = [];
        _this._allExternalProducts = [];
        return _this;
    }
    ProductService_1 = ProductService;
    Object.defineProperty(ProductService.prototype, "allProducts", {
        get: function () {
            return this._allProductos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductService.prototype, "allOwnedProducts", {
        get: function () {
            return this._allOwnedProducts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductService.prototype, "allExternalProducts", {
        get: function () {
            return this._allExternalProducts;
        },
        enumerable: true,
        configurable: true
    });
    ProductService.prototype.initProductService = function () {
        if (!this._initProductServicePromise) {
            this._initProductServicePromise = this._loadProducts();
        }
        if (!this._initProductServicePromiseSolved) {
            return this._initProductServicePromise;
        }
        else {
            Promise.resolve("initialized");
        }
    };
    ProductService.prototype.findProductById = function (productId) {
        return this.allProducts.find(function (p) { return p.id == productId; });
    };
    ProductService.prototype._loadProducts = function () {
        var _this = this;
        return this.gapiSession.initClient("Product Service").then(function () {
            return gapi.client.request({
                method: 'GET',
                // Returns a range of values from a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
                path: "https://sheets.googleapis.com/v4/spreadsheets/" + _this.sheetId + "/values/" + ProductService_1.RANGE_PRODUCT + "?valueRenderOption=" + _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"].VALUE_RENDER_OPTION
            }).then(function (productosRangeResponse) {
                _this._initProductServicePromiseSolved = true;
                var productList = productosRangeResponse.result["values"];
                if (productList) {
                    for (var i = 0; i < productList.length; i++) {
                        var productFromSheet = productList[i];
                        if (productFromSheet[3] && productFromSheet[3] != "") { // productos with order 0 are considered deleted
                            // 0=Id, 1 = Name, 2 = Price, 4 = Tipo, 3 = Order
                            /*
                               "values": [
                                  [
                                     1,
                                     "Pan blanco",
                                     500,
                                     1
                                  ],
                            */
                            var product = new _models_product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](productFromSheet[0], productFromSheet[1], productFromSheet[2], productFromSheet[3], productFromSheet[4]);
                            _this._allProductos.push(product);
                            if (product.isOwned()) {
                                _this._allOwnedProducts.push(product);
                            }
                            else {
                                _this._allExternalProducts.push(product);
                            }
                        }
                    }
                }
                _this._allProductos.sort(function (p1, p2) { return p1.order - p2.order; });
                _this._allOwnedProducts.sort(function (p1, p2) { return p1.order - p2.order; });
                _this._allExternalProducts.sort(function (p1, p2) { return p1.order - p2.order; });
                console.log("Products loaded");
            });
        });
    };
    var ProductService_1;
    ProductService.RANGE_PRODUCT = 'CatalogoProductos!A2:E';
    ProductService.ctorParameters = function () { return [
        { type: _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_3__["GapiSession"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    ProductService = ProductService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}(_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/services/production-base.service.ts":
/*!*************************************************!*\
  !*** ./src/services/production-base.service.ts ***!
  \*************************************************/
/*! exports provided: BaseProductionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseProductionService", function() { return BaseProductionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_models_production_line_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/production-line.model */ "./src/models/production-line.model.ts");
/* harmony import */ var src_infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/services/base.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.service */ "./src/services/product.service.ts");
/* harmony import */ var src_models_production_product_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/production-product.model */ "./src/models/production-product.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var BaseProductionService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseProductionService, _super);
    function BaseProductionService(gapiSession, productService, route) {
        var _this = _super.call(this, route) || this;
        _this.gapiSession = gapiSession;
        _this.productService = productService;
        _this._allProduction = [];
        _this._allProductionOwned = [];
        _this._allProductionExternal = [];
        _this._totalOfLines = 0;
        return _this;
    }
    Object.defineProperty(BaseProductionService.prototype, "allProduction", {
        get: function () {
            return this._allProduction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseProductionService.prototype, "allProductionOwned", {
        get: function () {
            return this._allProductionOwned;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseProductionService.prototype, "allProductionExternal", {
        get: function () {
            return this._allProductionExternal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseProductionService.prototype, "totalOfLines", {
        get: function () {
            return this._totalOfLines;
        },
        enumerable: true,
        configurable: true
    });
    BaseProductionService.prototype.initProductionServiceService = function () {
        var _this = this;
        if (!this._initProductionServicePromise) {
            this._initProductionServicePromise = this.productService.initProductService().then(function () { return _this._loadProductionLines(); });
        }
        if (!this._initProductionServicePromiseSolved) {
            return this._initProductionServicePromise;
        }
        else {
            Promise.resolve("initialized");
        }
    };
    BaseProductionService.prototype._loadProductionLines = function () {
        var _this = this;
        return this.gapiSession.initClient("Production Service").then(function () {
            return gapi.client.request({
                method: 'GET',
                // Returns a range of values from a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
                path: "https://sheets.googleapis.com/v4/spreadsheets/" + _this.sheetId + "/values/" + _this.getRange() + "?valueRenderOption=" + _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"].VALUE_RENDER_OPTION + "&dateTimeRenderOption=" + _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"].DATE_TIME_RENDER_OPTION
            }).then(function (productionRange) {
                var products = _this.productService.allProducts;
                products.forEach(function (p) {
                    var productionProduct = new src_models_production_product_model__WEBPACK_IMPORTED_MODULE_6__["ProductionProduct"](p);
                    _this._allProduction.push(productionProduct);
                    if (p.isOwned()) {
                        _this._allProductionOwned.push(productionProduct);
                    }
                    else {
                        _this._allProductionExternal.push(productionProduct);
                    }
                });
                _this._initProductionServicePromiseSolved = true;
                var productionList = productionRange.result["values"];
                if (productionList) {
                    for (var i = 0; i < productionList.length; i++) {
                        var productionLineFromSheet = productionList[i];
                        _this._totalOfLines += 1;
                        // 0 = Id Producto, 1 = Tipo (not used here, but by the cierre), 2 = Fecha,  3 = Cantidad, 4 = Total
                        var productionByProduct = _this._allProduction.find(function (pl) { return pl.product.id == productionLineFromSheet[0]; });
                        if (productionByProduct) {
                            var productionLine = new src_models_production_line_model__WEBPACK_IMPORTED_MODULE_2__["ProductionLine"](productionByProduct.product, productionLineFromSheet[2], productionLineFromSheet[3], productionLineFromSheet[4]);
                            productionByProduct.addProductionLine(productionLine);
                        }
                        else {
                            console.warn("A ProductionProduct was not found. Was the " + _this.getRange() + " modified manually?. Check all products in that list are of Tipo Propio");
                        }
                    }
                }
            });
        });
    };
    BaseProductionService.prototype.saveProduction = function (mode) {
        var _this = this;
        //mode could be:
        // - in : means the production will be added to the total
        // - out : means the production will be substracted to the total
        // - stock : means this is the new stock
        var productionListToSave = new Array();
        var productionListToSaveAdd = new Array();
        this._allProduction.forEach(function (p) {
            if (p.production > 0) {
                if (mode == "stock") {
                    p.production = p.production - p.productionTotal;
                }
                else {
                    if (mode == "out") {
                        p.production = p.production * -1;
                    } // else in == nothing to do
                }
                var productionLine = new src_models_production_line_model__WEBPACK_IMPORTED_MODULE_2__["ProductionLine"](p.product, new Date(), p.production, 0);
                productionListToSaveAdd.push(productionLine);
                p.production = 0;
                var row = new Array();
                row.push(productionLine.product.id);
                row.push(productionLine.product.tipo);
                row.push(productionLine.date);
                row.push(productionLine.production);
                row.push(p.productionTotal + productionLine.production);
                productionListToSave.push(row);
            }
        });
        // Registers the Efectivo and the Tarjeta
        return gapi.client.request({
            method: 'POST',
            // Sets values in one or more ranges of a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate
            path: "https://sheets.googleapis.com/v4/spreadsheets/" + this.sheetId + "/values:batchUpdate",
            body: {
                valueInputOption: _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"].VALUE_INPUT_OPTION,
                data: [
                    {
                        range: this.getRangeForAddingNewRow(),
                        values: productionListToSave
                    }
                ]
            }
        }).then(function () {
            productionListToSaveAdd.forEach(function (pl) {
                _this._allProduction.find(function (p) { return p.product.id == pl.product.id; }).addProductionLine(pl);
                _this._totalOfLines += 1;
            });
        });
    };
    BaseProductionService.ctorParameters = function () { return [
        { type: src_infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_3__["GapiSession"] },
        { type: _product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    BaseProductionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], BaseProductionService);
    return BaseProductionService;
}(_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/services/production-control.service.ts":
/*!****************************************************!*\
  !*** ./src/services/production-control.service.ts ***!
  \****************************************************/
/*! exports provided: ProductionControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionControlService", function() { return ProductionControlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.service */ "./src/services/product.service.ts");
/* harmony import */ var _production_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./production-base.service */ "./src/services/production-base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ProductionControlService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductionControlService, _super);
    function ProductionControlService(gapiSession, productService, route) {
        return _super.call(this, gapiSession, productService, route) || this;
    }
    ProductionControlService_1 = ProductionControlService;
    ProductionControlService.prototype.getRange = function () {
        return ProductionControlService_1.RANGE_PRODUCTION;
    };
    ProductionControlService.prototype.getRangeForAddingNewRow = function () {
        return ProductionControlService_1.RANGE_PRODUCTION_ADD_ROW + (this.totalOfLines + 2); // starts in A2
    };
    ProductionControlService.prototype.useOwnedProducts = function () {
        return true;
    };
    var ProductionControlService_1;
    ProductionControlService.SHEET_NAME = 'ControlEntradaSalidaProductos';
    ProductionControlService.RANGE_PRODUCTION = ProductionControlService_1.SHEET_NAME + '!A2:E';
    ProductionControlService.RANGE_PRODUCTION_ADD_ROW = ProductionControlService_1.SHEET_NAME + '!A';
    ProductionControlService.ctorParameters = function () { return [
        { type: src_infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_2__["GapiSession"] },
        { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    ProductionControlService = ProductionControlService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ProductionControlService);
    return ProductionControlService;
}(_production_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseProductionService"]));



/***/ }),

/***/ "./src/services/wasted.service.ts":
/*!****************************************!*\
  !*** ./src/services/wasted.service.ts ***!
  \****************************************/
/*! exports provided: WastedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WastedService", function() { return WastedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/services/base.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product.service */ "./src/services/product.service.ts");
/* harmony import */ var src_models_wasted_product_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/wasted-product.model */ "./src/models/wasted-product.model.ts");
/* harmony import */ var src_models_wasted_line_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/wasted-line.model */ "./src/models/wasted-line.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var WastedService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WastedService, _super);
    function WastedService(gapiSession, productService, route) {
        var _this = _super.call(this, route) || this;
        _this.gapiSession = gapiSession;
        _this.productService = productService;
        _this._allWasted = [];
        return _this;
    }
    WastedService_1 = WastedService;
    Object.defineProperty(WastedService.prototype, "allWasted", {
        get: function () {
            return this._allWasted;
        },
        enumerable: true,
        configurable: true
    });
    WastedService.prototype.initWastedService = function () {
        var _this = this;
        if (!this._initWastedServicePromise) {
            this._initWastedServicePromise = this.productService.initProductService().then(function () { return _this._loadWastedLines(); });
        }
        if (!this._initWastedServicePromiseSolved) {
            return this._initWastedServicePromise;
        }
        else {
            Promise.resolve("initialized");
        }
    };
    WastedService.prototype._loadWastedLines = function () {
        var _this = this;
        return this.gapiSession.initClient("Wasted Service").then(function () {
            return gapi.client.request({
                method: 'GET',
                // Returns a range of values from a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
                path: "https://sheets.googleapis.com/v4/spreadsheets/" + _this.sheetId + "/values/" + WastedService_1.RANGE_WASTED + "?valueRenderOption=" + _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].VALUE_RENDER_OPTION + "&dateTimeRenderOption=" + _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].DATE_TIME_RENDER_OPTION
            }).then(function (productionRange) {
                _this.productService.allOwnedProducts.forEach(function (p) {
                    _this._allWasted.push(new src_models_wasted_product_model__WEBPACK_IMPORTED_MODULE_5__["WastedProduct"](p));
                });
                _this._initWastedServicePromiseSolved = true;
                var productionList = productionRange.result["values"];
                if (productionList) {
                    for (var i = 0; i < productionList.length; i++) {
                        var productionLineFromSheet = productionList[i];
                        // 0 = Id Producto, 2 = Fecha,  1 = Perdido
                        var wastedByProduct = _this._allWasted.find(function (pl) { return pl.product.id == productionLineFromSheet[0]; });
                        if (wastedByProduct) {
                            var wastedLine = new src_models_wasted_line_model__WEBPACK_IMPORTED_MODULE_6__["WastedLine"](wastedByProduct.product, productionLineFromSheet[1], productionLineFromSheet[2]);
                            wastedByProduct.addWastedLine(wastedLine);
                        }
                        else {
                            console.warn("A WastedProduct was not found. Was the ControlPerdidas modified manually?. Check all products in that list are of Tipo Propio");
                        }
                    }
                }
            });
        });
    };
    WastedService.prototype.saveWasted = function () {
        var wastedListToSave = new Array();
        this._allWasted.forEach(function (p) {
            if (p.wasted > 0) {
                p.addWastedLine(new src_models_wasted_line_model__WEBPACK_IMPORTED_MODULE_6__["WastedLine"](p.product, new Date(), p.wasted));
                p.wasted = 0;
            }
            p.wastedLines.forEach(function (pl) {
                var row = new Array();
                row.push(pl.product.id);
                row.push(pl.date);
                row.push(pl.wasted);
                wastedListToSave.push(row);
            });
        });
        // Registers the Efectivo and the Tarjeta
        return gapi.client.request({
            method: 'POST',
            // Sets values in one or more ranges of a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate
            path: "https://sheets.googleapis.com/v4/spreadsheets/" + this.sheetId + "/values:batchUpdate",
            body: {
                valueInputOption: _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].VALUE_INPUT_OPTION,
                data: [
                    {
                        range: WastedService_1.RANGE_WASTED_ADD_ROW,
                        values: wastedListToSave
                    }
                ]
            }
        });
    };
    var WastedService_1;
    WastedService.RANGE_WASTED = 'ControlPerdidas!A2:C';
    WastedService.RANGE_WASTED_ADD_ROW = 'ControlPerdidas!A2';
    WastedService.ctorParameters = function () { return [
        { type: src_infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_2__["GapiSession"] },
        { type: _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    WastedService = WastedService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], WastedService);
    return WastedService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Move\Personal\PanaderiaAvila\Site\PanaderiaAvila\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map