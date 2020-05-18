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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <!--img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"-->\n</div>\n\n<form class=\"form-group\" (submit)=\"registrarVenta($event)\" style=\"margin: 0px; padding: 0px;\">\n\t<div class=\"form-group row\" *ngIf=\"orden\" class=\"table-responsive-xl\">\n\t\t<!-- https://getbootstrap.com/docs/3.4/css/ -->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col col-md-2\">\n\t\t\t\t<!-- https://material.angular.io/components/autocomplete/overview -->\n\t\t\t\t<label>Producto</label>\n\t\t\t\t<input type=\"text\" placeholder=\"Producto\" class=\"form-control\" style=\"width: 250px;\" matInput [formControl]=\"control\" [matAutocomplete]=\"auto\" onfocus=\"this.select();\">\n\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\" (optionSelected)=\"onProductSelected($event.option.value)\">\n\t\t\t\t\t<!--product is the current item you are iterating and value is the property you want to assign to the \"control\" once the user picks a product  --->\n\t\t\t\t\t<mat-option *ngFor=\"let detalleOrden of filteredProducts | async\" [value]=\"detalleOrden\">\n\t\t\t\t\t\t{{detalleOrden.producto.nombre}}\n\t\t\t\t\t</mat-option>\n\t\t\t\t</mat-autocomplete>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<label>Precio</label>\n\t\t\t\t<input type=\"number\" placeholder=\"\" class=\"form-control input-number form-control-md text-right\" style=\"width: 50px; padding:0px;\" \n\t\t\t\t\t[(ngModel)]=\"manualDetalleOrden.producto.precio\" (ngModelChange)=\"calculateNewProduct()\"\n\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"  [disabled]=\"guardando || manualDetalleOrden.producto.id > 0\" onfocus=\"this.select();\"/>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<label>Vendido</label>\n\t\t\t\t<input type=\"number\" placeholder=\"\" class=\"form-control\" style=\"width: 50px;\" [(ngModel)]=\"manualDetalleOrden.vendido\" (ngModelChange)=\"calculateNewProduct()\"\n\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"  [disabled]=\"guardando\" onfocus=\"this.select();\"/>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<label>Total:</label><BR/>\n\t\t\t\t<label>{{ manualDetalleOrden.total | currency:'CRC':true }}</label>\n\t\t\t</div>\n\t\t\t<div class=\"col text-center\" style=\"margin-top: 5px;\">\n\t\t\t\t<BR/>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-md\" (click)=\"addProductToTable()\" [disabled]=\"guardando\">\n\t\t\t\t\tAgregar\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<BR/>\n\n\t\t<table class=\"table table-hover table-striped \">\n\t\t\t<!-- https://getbootstrap.com/docs/4.0/content/tables/ -->\n\t\t\t<thead>\n\t\t\t\t<tr style=\"padding:0px;\">\n\t\t\t\t\t<th style=\"padding:8px;\" scope=\"col\"><h6>Producto</h6></th>\n\t\t\t\t\t<th style=\"padding:8px;\" scope=\"col\"><h6>Vendido</h6></th>\n\t\t\t\t\t<th style=\"padding:8px;\" scope=\"col\" class=\"text-right\"><h6>Total</h6></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\n\t\t\t<tbody *ngIf=\"orden.detalleOrdenList\">\n\t\t\t\t<tr *ngFor=\"let detalleOrden of orden.detalleOrdenList\">\n\t\t\t\t\t<td style=\"padding:1px;\" (click)=\"detalleOrden.addVendido()\">\n\t\t\t\t\t\t{{ detalleOrden.producto.nombre }}\n\t\t\t\t\t\t<small>({{ detalleOrden.producto.precio | currency:'CRC':true }})</small>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td style=\"padding:1px;\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<!--span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-number btn-sm\" data-type=\"plus\" (click)=\"detalleOrden.addVendido()\" [disabled]=\"guardando\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus\" style=\"padding-left: 1rem; padding-right: 1rem;\">+</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</span-->\n\t\t\t\t\t\t\t<input type=\"number\" class=\"input-number form-control-md text-right\" style=\"height: 31px; width: 50px;\" [(ngModel)]=\"detalleOrden.vendido\" [ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"detalleOrden.onChangeVendido($event)\" onclick=\"this.select();\" [disabled]=\"guardando\"/>\n\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-number btn-sm\" data-type=\"minus\" (click)=\"detalleOrden.minusVendido()\" [disabled]=\"guardando\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-minus\" style=\"padding-left: 1rem; padding-right: 1rem;\">-</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td style=\"padding:1px; width: 150px; max-width: 150px;\" (click)=\"detalleOrden.addVendido()\">\n\t\t\t\t\t\t<h6 class=\"text-right\">{{ detalleOrden.total | currency:'CRC':true }}</h6>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td colspan=\"2\" class=\"text-right\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" [disabled]=\"guardando\" name=\"btnGuardando\" style=\"margin-right: 20px;\"\n\t\t\t\t\t\t\t(click)=\"registrarVenta()\">\n\t\t\t\t\t\t\tGuardar\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" [disabled]=\"guardando\" name=\"btnTipoPago\" (click)=\"orden.toggleTipoPago()\">\n\t\t\t\t\t\t\t{{orden.tipoPago}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"text-right\">\n\t\t\t\t\t\t<h5>{{orden.total | currency:'CRC':true }}</h5>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gastos-component/gastos.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gastos-component/gastos.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\t<div class=\"form-group row\" class=\"table-responsive-lg\">\n\n\t\t<!-- https://getbootstrap.com/docs/3.4/css/ -->\n\t\t<BR/>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<label>Concepto</label>\n\t\t\t\t<input type=\"text\" placeholder=\"Concepto\" class=\"form-control\" style=\"width: 150px;\" matInput [formControl]=\"control\" [matAutocomplete]=\"auto\">\n\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\" (optionSelected)=\"onConceptoSelected($event.option.value)\">\n\t\t\t\t\t<!--concepto is the current item you are iterating and value is the property you want to assign to the \"control\" once the user picks a concepto  --->\n\t\t\t\t\t<mat-option *ngFor=\"let gasto of filteredGastos | async\" [value]=\"gasto\">\n\t\t\t\t\t\t{{gasto.concepto}}\n\t\t\t\t\t</mat-option>\n\t\t\t\t</mat-autocomplete>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<label style=\"width: 100%; text-align: center;\">Recurrente</label>\n\t\t\t\t<input type=\"checkbox\" class=\"form-control\" [(ngModel)]=\"manualExpense.recurrente\" \n\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"  [disabled]=\"guardando || manualExpense.id > 0\"/>\n\t\t\t</div>\n            <div class=\"col\">\n\t\t\t\t<label>Monto</label>\n\t\t\t\t<input type=\"number\" placeholder=\"Monto\" class=\"form-control\" [(ngModel)]=\"manualExpense.montoPagado\" \n\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"  [disabled]=\"guardando\"/>\n\t\t\t</div>\n\t\t\t<div class=\"col text-center\" style=\"margin-top: 5px;\">\n\t\t\t\t<BR/>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-md\" (click)=\"addGastoToTable()\" [disabled]=\"guardando\">\n\t\t\t\t\tAgregar\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<BR/>\n\n\t\t<table class=\"table table-hover table-striped \">\n\t\t\t<!-- https://getbootstrap.com/docs/4.0/content/tables/ -->\n\t\t\t<thead>\n\t\t\t\t<tr>\n                    <th scope=\"col\"><h6>Concepto</h6></th>\n                    <th scope=\"col\"><h6>Recurrencia</h6></th>\n                    <th scope=\"col\"><h6 style=\"text-align: right;\">Referencia</h6></th>\n                    <th scope=\"col\"><h6 style=\"text-align: right;\">Fecha</h6></th>\n                    <th scope=\"col\"><h6 style=\"text-align: right;\">Pagado</h6></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let gasto of allExpenses\">\n\t\t\t\t\t<td scope=\"row\" class=\"text-nowrap\" style=\"text-align: left;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t{{ gasto.concepto }}\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</td>\n                    <td>\n\t\t\t\t\t\t<h6 style=\"text-align: left;\">\n\t\t\t\t\t\t\t{{ gasto.recurrencia }}\n\t\t\t\t\t\t</h6>\n                    </td>\n                    <td>\n\t\t\t\t\t\t<h6 style=\"text-align: right;\">\n\t\t\t\t\t\t\t{{ gasto.montoReferencia | currency:'CRC':true}}\n\t\t\t\t\t\t</h6>\n                    </td>\n                    <td>\n\t\t\t\t\t\t<h6 style=\"text-align: right;\">\n                            {{ gasto.fechaPagado | date }} \n                        </h6>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<h6 style=\"text-align: right;\">\n                            {{ gasto.montoPagado  | currency:'CRC':true}} \n                        </h6>\n\t\t\t\t\t</td>\n                </tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/produccion-component/produccion.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/produccion-component/produccion.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n   <!--img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"-->\n </div>\n \n <form class=\"form-group\" (submit)=\"registrarVenta($event)\" style=\"margin: 0px; padding: 0px;\">\n   <table class=\"table table-hover table-striped \">\n      <!-- https://getbootstrap.com/docs/4.0/content/tables/ -->\n      <thead>\n         <tr style=\"padding:0px;\">\n            <th style=\"padding:8px;\" scope=\"col\"><h6>Producto</h6></th>\n            <th style=\"padding:8px;\" scope=\"col\"><h6>Producido</h6></th>\n            <th style=\"padding:8px;\" scope=\"col\" class=\"text-right\"><h6>Total</h6></th>\n         </tr>\n      </thead>\n\n      <tbody *ngIf=\"allProduction\">\n         <tr *ngFor=\"let productionProduct of allProduction\">\n            <td>\n               {{ productionProduct.product.nombre }}\n            </td>\n            <td>\n               <div class=\"input-group\">\n                  <input type=\"number\" class=\"input-number form-control-md text-right\" style=\"height: 31px; width: 60px;\" [(ngModel)]=\"productionProduct.production\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"guardando\"/>\n               </div>\n            </td>\n            <td>\n               <h6 class=\"text-right\">{{ productionProduct.productionTotal }}</h6>\n            </td>\n         </tr>\n         <tr>\n            <td class=\"text-right\" colspan=\"2\">\n               <button type=\"button\" class=\"btn btn-primary btn-sm\" [disabled]=\"guardando\" name=\"btnGuardando\" (click)=\"saveProduction()\">\n                  Guardar\n               </button>\n            </td>\n            <td></td>\n         </tr>\n      </tbody>\n   </table>\n  </form>\n "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




const routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { path: 'controlventa', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { path: 'panaderiaavila', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*input[type=number]{\r\n    width: 25px;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW5wdXRbdHlwZT1udW1iZXJde1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbn0gKi8iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product.service */ "./src/services/product.service.ts");
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/order.model */ "./src/models/order.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_models_order_line_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/order-line.model */ "./src/models/order-line.model.ts");
var AppComponent_1;









let AppComponent = AppComponent_1 = class AppComponent {
    constructor(productService, gapiSession, ngZone) {
        this.productService = productService;
        this.gapiSession = gapiSession;
        this.ngZone = ngZone;
        this.productsForDropDown = [];
        this.allProductos = [];
        this.productosForTable = [];
        this.orden = null;
        this.manualDetalleOrden = null;
        this.test = "test";
        this.guardando = false;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](); //used for the autocomplete text
        this.filteredProducts = null;
    }
    ngOnInit() {
        this.productService.initProductService().then(() => {
            this.ngZone.run(() => {
                this.productService.allProducts.forEach(p => {
                    if (p.order > 0) {
                        this.productosForTable.push(p);
                    }
                    // name, description, price
                    this.productsForDropDown.push(new src_models_order_line_model__WEBPACK_IMPORTED_MODULE_7__["OrderLine"](p, this.orden));
                });
                this.productosForTable = this.productosForTable.sort((p1, p2) => p1.order - p2.order);
                this.orden = new _models_order_model__WEBPACK_IMPORTED_MODULE_4__["Order"](this.productosForTable);
                this.manualDetalleOrden = src_models_order_line_model__WEBPACK_IMPORTED_MODULE_7__["OrderLine"].createEmptyDetalleOrden(this.orden);
                // move the ones that are not shown in the table to the beginning
                this.productsForDropDown = this.productsForDropDown.sort((p1, p2) => (p1.producto.order - p2.producto.order));
                for (let detalleOrden in this.productsForDropDown) {
                    this.productsForDropDown[detalleOrden].orden = this.orden;
                }
                // the value in control is an string while the user is typing, once the users selects a product from the list, it will be a DetalleOrden
                this.filteredProducts = this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(display => this._filter(display instanceof src_models_order_line_model__WEBPACK_IMPORTED_MODULE_7__["OrderLine"] ? display.producto.nombre : display)));
            });
        });
    }
    registrarVenta() {
        this.guardando = true;
        const self = this;
        const ventasToInsert = this.orden.getRowsForVenta();
        // Registers the Efectivo and the Tarjeta
        gapi.client.request({
            method: 'POST',
            // Applies one or more updates to the spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate 
            path: `https://sheets.googleapis.com/v4/spreadsheets/${AppComponent_1.spreadsheetId}:batchUpdate`,
            body: {
                requests: [
                    {
                        // adds a all the products as new rows in `ControlVenta` starting at row 2 up to the number of products added
                        insertDimension: {
                            range: {
                                sheetId: AppComponent_1.controlVentaSheetId,
                                dimension: "ROWS",
                                startIndex: 1,
                                endIndex: 1 + ventasToInsert.length
                            },
                            inheritFromBefore: false
                        }
                    }
                ]
            }
        }).then(function (response) {
            gapi.client.request({
                method: 'POST',
                // Sets values in one or more ranges of a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate
                path: `https://sheets.googleapis.com/v4/spreadsheets/${AppComponent_1.spreadsheetId}/values:batchUpdate`,
                body: {
                    valueInputOption: AppComponent_1.valueInputOption,
                    data: [
                        {
                            range: AppComponent_1.rangeControlVentaAddRow,
                            values: ventasToInsert
                        }
                    ]
                }
            }).then(function (response) {
                console.log(response);
                self.ngZone.run(() => {
                    console.log("resetting");
                    self.orden.reset();
                    self.guardando = false;
                });
            });
        });
    }
    _filter(value) {
        this._resetManualDetalle();
        if (value) {
            const filterValue = this._normalizeValue(value);
            const productsMatched = this.productsForDropDown
                .filter(p => this._normalizeValue(p.producto.nombre).includes(filterValue));
            return productsMatched;
        }
        return this.productsForDropDown.slice();
    }
    _normalizeValue(value) {
        return value ? value.toLowerCase().replace(/\s/g, '') : "";
    }
    _resetManualDetalle() {
        if (this.manualDetalleOrden.producto.id > 0) {
            this.manualDetalleOrden = src_models_order_line_model__WEBPACK_IMPORTED_MODULE_7__["OrderLine"].createEmptyDetalleOrden(this.orden);
        }
    }
    displayFn(detalle) {
        return detalle ? detalle.producto.nombre : undefined;
    }
    onProductSelected(productSelected) {
        this.manualDetalleOrden = productSelected;
    }
    calculateNewProduct() {
        this.manualDetalleOrden.calcularTotal();
    }
    addProductToTable() {
        if (this.manualDetalleOrden.producto.id > 0) {
            // the product already exist we just need to add it into the table
            // inserts the new detail at the beginning of the table
            let updated;
            for (let detalleOrden in this.orden.detalleOrdenList) {
                if (this.orden.detalleOrdenList[detalleOrden].producto.id == this.manualDetalleOrden.producto.id) {
                    this.orden.detalleOrdenList[detalleOrden].vendido = this.manualDetalleOrden.vendido;
                    this.orden.detalleOrdenList[detalleOrden].calcularTotal();
                    updated = true;
                    break;
                }
            }
            if (!updated) {
                this.orden.detalleOrdenList.unshift(this.manualDetalleOrden);
            }
            // clean the new product information to enter a new one
            this.manualDetalleOrden = src_models_order_line_model__WEBPACK_IMPORTED_MODULE_7__["OrderLine"].createEmptyDetalleOrden(this.orden);
            this.control.setValue("");
            this.orden.calcularTotal();
        }
        else {
            // if it gets here, means the product hasnt been registered so we need to add it into the product catalog (+1 because of the header)
            this.manualDetalleOrden.producto.nombre = this.control.value;
            // first lets validate the data
            if (this.manualDetalleOrden.producto.nombre == "" ||
                this.manualDetalleOrden.producto.precio <= 0 ||
                this.manualDetalleOrden.vendido <= 0) {
                return;
            }
            this.manualDetalleOrden.producto.id = this.allProductos.length + 1;
            var newRowIndex = AppComponent_1.rangeCatalogosProductosAddRow + (2 + this.allProductos.length);
            const self = this;
            gapi.client.request({
                method: 'POST',
                // Sets values in one or more ranges of a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate
                path: `https://sheets.googleapis.com/v4/spreadsheets/${AppComponent_1.spreadsheetId}/values:batchUpdate`,
                body: {
                    valueInputOption: AppComponent_1.valueInputOption,
                    data: [
                        {
                            range: newRowIndex,
                            values: [
                                self.manualDetalleOrden.producto.getRowForCatalogs()
                            ]
                        }
                    ]
                }
            }).then(function (response) {
                self.ngZone.run(() => {
                    // saves the new product in all the arrays
                    self.allProductos.push(self.manualDetalleOrden.producto);
                    self.productsForDropDown.push(self.manualDetalleOrden);
                    // inserts the new detail at the beginning of the table
                    self.orden.detalleOrdenList.unshift(self.manualDetalleOrden);
                    self.orden.calcularTotal();
                    // clean the new product information to enter a new one
                    self.manualDetalleOrden = src_models_order_line_model__WEBPACK_IMPORTED_MODULE_7__["OrderLine"].createEmptyDetalleOrden(self.orden);
                    self.control.setValue("");
                });
            });
        }
    }
};
AppComponent.valueInputOption = "USER_ENTERED"; // RAW => https://developers.google.com/sheets/api/guides/values
AppComponent.valueRenderOption = "UNFORMATTED_VALUE"; // RAW => https://developers.google.com/sheets/api/reference/rest/v4/ValueRenderOption
AppComponent.dateTimeRenderOption = "FORMATTED_STRING"; // https://developers.google.com/sheets/api/reference/rest/v4/DateTimeRenderOption
//private static spreadsheetId = '1oajvWQJIqPETOX-FxzFNvTcwf1K2KeuNnGKJ-aHGDmo'; // ID of Esteban spreadsheet vrs1, se toma del URL
//private static spreadsheetId = '19ltkEfpGBfd7xiPx9UlpGwyhV2v-diAMgFom8XVrhD4'; // ID of Pedro spreadsheet vrs2, se toma del URL
AppComponent.spreadsheetId = '1B5cYzMJ4vc6ewk9RODCUqIVlYFqkWDrLToXrsUHIALs'; // ID of Esteban spreadsheet vrs2, se toma del URL
AppComponent.rangeControlVentaAddRow = 'ControlVenta!A2';
AppComponent.rangeCatalogosProductos = 'CatalogoProductos!A2:E';
AppComponent.rangeCatalogosProductosAddRow = 'CatalogoProductos!A';
//private static controlVentaSheetId = 1798969314; // id de las versiones viejas, viene en el URL "#gid=0"
AppComponent.controlVentaSheetId = 0; // id de las versiones nuevas, viene en el URL "#gid=0"
AppComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_2__["GapiSession"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
AppComponent = AppComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_es_CR__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/es-CR */ "./node_modules/@angular/common/locales/es-CR.js");
/* harmony import */ var _angular_common_locales_es_CR__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_CR__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _gastos_component_gastos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gastos-component/gastos.component */ "./src/app/gastos-component/gastos.component.ts");
/* harmony import */ var _produccion_component_produccion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./produccion-component/produccion.component */ "./src/app/produccion-component/produccion.component.ts");
/* harmony import */ var _wasted_component_wasted_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wasted-component/wasted.component */ "./src/app/wasted-component/wasted.component.ts");








 // root






Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_es_CR__WEBPACK_IMPORTED_MODULE_10___default.a);
function initApp(gapiSession) {
    return () => {
        gapiSession.initClient("module");
    };
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        // import components and directives to use
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _gastos_component_gastos_component__WEBPACK_IMPORTED_MODULE_11__["GastosComponent"],
            _produccion_component_produccion_component__WEBPACK_IMPORTED_MODULE_12__["ProduccionComponent"],
            _wasted_component_wasted_component__WEBPACK_IMPORTED_MODULE_13__["WastedComponent"]
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
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _gastos_component_gastos_component__WEBPACK_IMPORTED_MODULE_11__["GastosComponent"], _produccion_component_produccion_component__WEBPACK_IMPORTED_MODULE_12__["ProduccionComponent"], _wasted_component_wasted_component__WEBPACK_IMPORTED_MODULE_13__["WastedComponent"]]
    })
], AppModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_expense_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/expense.model */ "./src/models/expense.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_services_expense_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/expense-service.service */ "./src/services/expense-service.service.ts");







let GastosComponent = class GastosComponent {
    constructor(expenseService, ngZone) {
        this.expenseService = expenseService;
        this.ngZone = ngZone;
        this._allExpenses = [];
        this._recurrenteExpenses = [];
        this._ocasionalExpenses = [];
        this._manualExpense = _models_expense_model__WEBPACK_IMPORTED_MODULE_2__["Expense"].createEmptyGasto();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](); //used for the autocomplete text
    }
    get allExpenses() {
        return this._allExpenses;
    }
    ;
    /*
       public get recurrenteExpenses(): Array<Expense>{
          return this._recurrenteExpenses
       };
    
       public get ocasionalExpenses(): Array<Expense> {
          return this._ocasionalExpenses;
       };*/
    get manualExpense() {
        return this._manualExpense;
    }
    ngOnInit() {
        this.expenseService.initExpenseService().then(() => {
            this.ngZone.run(() => {
                this._allExpenses = this.expenseService.allExpenses;
                this._recurrenteExpenses = this.expenseService.recurrenteExpenses;
                this._ocasionalExpenses = this.expenseService.ocasionalExpenses;
                // the valueis an string while the user is typing, once the users selects a product from the list, it will be a DetalleOrden
                this.filteredGastos = this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(display => display ? this._filter(display instanceof _models_expense_model__WEBPACK_IMPORTED_MODULE_2__["Expense"] ? display.concepto : display) : this._allExpenses.slice()));
            });
        });
    }
    _filter(value) {
        if (value) {
            const filterValue = this._normalizeValue(value);
            const gastosMatched = this._allExpenses
                .filter(g => this._normalizeValue(g.concepto).includes(filterValue));
            return gastosMatched;
        }
        return [];
    }
    _normalizeValue(value) {
        return value ? value.toLowerCase().replace(/\s/g, '') : "";
    }
    displayFn(gasto) {
        return gasto ? gasto.concepto : undefined;
    }
    onConceptoSelected(gastoSelected) {
        this._manualExpense = gastoSelected;
    }
    addGastoToTable() {
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
        this.expenseService.saveExpense(this._manualExpense).then(() => this.ngZone.run(() => {
            this._allExpenses = this.expenseService.allExpenses;
            this._recurrenteExpenses = this.expenseService.recurrenteExpenses;
            this._ocasionalExpenses = this.expenseService.ocasionalExpenses;
            // clean the new product information to enter a new one
            this._manualExpense = _models_expense_model__WEBPACK_IMPORTED_MODULE_2__["Expense"].createEmptyGasto();
            this.control.setValue("");
        }));
    }
};
GastosComponent.ctorParameters = () => [
    { type: src_services_expense_service_service__WEBPACK_IMPORTED_MODULE_5__["ExpenseService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
GastosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gastos-component',
        template: __webpack_require__(/*! raw-loader!./gastos.component.html */ "./node_modules/raw-loader/index.js!./src/app/gastos-component/gastos.component.html"),
        styles: [__webpack_require__(/*! ./gastos.component.css */ "./src/app/gastos-component/gastos.component.css")]
    })
], GastosComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_production_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/production.service */ "./src/services/production.service.ts");



let ProduccionComponent = class ProduccionComponent {
    constructor(productionService, ngZone) {
        this.productionService = productionService;
        this.ngZone = ngZone;
        this._processing = false;
        this._allProduction = [];
    }
    get allProduction() {
        return this._allProduction;
    }
    get processing() {
        return this._processing;
    }
    ngOnInit() {
        this.productionService.initProductionServiceService().then(() => {
            this.ngZone.run(() => {
                this._allProduction = this.productionService.allProduction;
            });
        });
    }
    saveProduction() {
        this.productionService.saveProduction().then(() => {
            this.ngZone.run(() => {
                this._allProduction = this.productionService.allProduction;
            });
        });
    }
};
ProduccionComponent.ctorParameters = () => [
    { type: src_services_production_service__WEBPACK_IMPORTED_MODULE_2__["ProductionService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
ProduccionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-produccion-component',
        template: __webpack_require__(/*! raw-loader!./produccion.component.html */ "./node_modules/raw-loader/index.js!./src/app/produccion-component/produccion.component.html"),
        styles: [__webpack_require__(/*! ./produccion.component.css */ "./src/app/produccion-component/produccion.component.css")]
    })
], ProduccionComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_wasted_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/wasted.service */ "./src/services/wasted.service.ts");



let WastedComponent = class WastedComponent {
    constructor(wastedService, ngZone) {
        this.wastedService = wastedService;
        this.ngZone = ngZone;
        this._processing = false;
        this._allWasted = [];
    }
    get allWasted() {
        return this._allWasted;
    }
    get processing() {
        return this._processing;
    }
    ngOnInit() {
        this.wastedService.initWastedService().then(() => {
            this.ngZone.run(() => {
                this._allWasted = this.wastedService.allWasted;
            });
        });
    }
    saveWasted() {
        this.wastedService.saveWasted().then(() => {
            this.ngZone.run(() => {
                this._allWasted = this.wastedService.allWasted;
            });
        });
    }
};
WastedComponent.ctorParameters = () => [
    { type: src_services_wasted_service__WEBPACK_IMPORTED_MODULE_2__["WastedService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
WastedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wasted-component',
        template: __webpack_require__(/*! raw-loader!./wasted.component.html */ "./node_modules/raw-loader/index.js!./src/app/wasted-component/wasted.component.html"),
        styles: [__webpack_require__(/*! ./wasted.component.css */ "./src/app/wasted-component/wasted.component.css")]
    })
], WastedComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// https://hintdesk.com/2018/08/24/angular-google-drive-api-example/
// 	https://developers.google.com/drive/api/v3/downloads
// 		https://github.com/google/google-api-javascript-client
// Client ID and API key from the Developer Console
const CLIENT_ID = "950877447297-7l1ms0m9q26fsqv0o1s7m5m9917ieasa.apps.googleusercontent.com";
const API_KEY = "AIzaSyB44r0X-I9jnqcBI7F5hcUdvfiQBEKmam4";
// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
//const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
// https://developers.google.com/sheets/api/guides/authorizing
//var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";
//var SCOPES = "https://www.googleapis.com/auth/drive";
var SCOPES = "https://www.googleapis.com/auth/spreadsheets";
let GapiSession = class GapiSession {
    constructor() {
        this.googleAuth = null;
    }
    initClient(source) {
        if (!this.initClientPromise) {
            console.log("Initializing Google API..." + source);
            this.initClientPromise = new Promise((resolve, reject) => {
                gapi.load('client:auth2', () => {
                    return gapi.client.init({
                        apiKey: API_KEY,
                        clientId: CLIENT_ID,
                        discoveryDocs: DISCOVERY_DOCS,
                        scope: SCOPES,
                    }).then(() => {
                        this.initClientSolved = true;
                        console.log("Google API initialized!");
                        this.googleAuth = gapi.auth2.getAuthInstance();
                        resolve();
                        if (!this.isSignedIn) {
                            // use this to refresh the credentials
                            //this.gapiSession.signOut();
                            this.signIn("init client");
                        }
                    }).catch((ex) => {
                        this.initClientSolved = true;
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
    }
    get isSignedIn() {
        if (this.googleAuth == null)
            return false;
        return this.googleAuth.isSignedIn.get();
    }
    signIn(source) {
        if (this.googleAuth == null) {
            console.log("Unable to sign in....initClient() hasn't been called or hasn't finished " + source);
            return null;
        }
        console.log("Sign in with Google API....");
        return this.googleAuth.signIn({
            prompt: 'consent'
        }).then((googleUser) => {
            console.log("Signed in!");
            //this.appRepository.User.add(googleUser.getBasicProfile());
        });
    }
    signOut() {
        if (this.googleAuth == null)
            return;
        this.googleAuth.signOut();
    }
};
GapiSession = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GapiSession);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


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
class Expense {
    constructor(id, recurrente, concepto, recurrencia, fechaPagado, montoReferencia, montoPagado) {
        this.id = id;
        this.recurrente = recurrente;
        this.concepto = concepto;
        this.recurrencia = recurrencia;
        this.fechaPagado = fechaPagado;
        this.montoReferencia = montoReferencia;
        this.montoPagado = montoPagado;
    }
    getRowForGastos() {
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
    }
    static createEmptyGasto() {
        return new Expense(-1, false, "", null, null, null, null);
    }
}
Expense.ctorParameters = () => [
    { type: Number },
    { type: Boolean },
    { type: String },
    { type: String },
    { type: Date },
    { type: Number },
    { type: Number }
];


/***/ }),

/***/ "./src/models/order-line.model.ts":
/*!****************************************!*\
  !*** ./src/models/order-line.model.ts ***!
  \****************************************/
/*! exports provided: OrderLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderLine", function() { return OrderLine; });
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.model */ "./src/models/product.model.ts");
/* harmony import */ var _payment_method_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-method.model */ "./src/models/payment-method.model.ts");
/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.model */ "./src/models/order.model.ts");



class OrderLine {
    constructor(producto, orden) {
        this.vendido = 0;
        this.feria = 0;
        this.tipoPago = _payment_method_model__WEBPACK_IMPORTED_MODULE_1__["PaymentMethod"].CASH;
        this.total = 0;
        this.producto = producto;
        this.orden = orden;
    }
    // style guide / naming conventions 
    // https://basarat.gitbooks.io/typescript/docs/styleguide/styleguide.html#variable-and-function
    static createEmptyDetalleOrden(orden) {
        return new OrderLine(_product_model__WEBPACK_IMPORTED_MODULE_0__["Product"].createEmptyProduct(), orden);
    }
    onChangeVendido(vendido) {
        this.vendido = vendido;
        this.calcularTotal();
    }
    calcularTotal() {
        if (!this.producto.precio || !this.vendido) {
            this.total = 0;
        }
        else {
            this.total = this.producto.precio * this.vendido;
        }
        this.orden.calcularTotal();
    }
    minusVendido() {
        this.vendido = this.minus(this.vendido);
        this.calcularTotal();
    }
    addVendido() {
        this.vendido = this.add(this.vendido);
        this.calcularTotal();
    }
    minusFeria() {
        this.feria = this.minus(this.feria);
    }
    addFeria() {
        this.feria = this.add(this.feria);
    }
    isEffectivo() {
        return this.tipoPago == _payment_method_model__WEBPACK_IMPORTED_MODULE_1__["PaymentMethod"].CASH;
    }
    minus(currentValue) {
        currentValue = currentValue - 1;
        return currentValue < 0 ? 0 : currentValue;
    }
    add(currentValue) {
        currentValue = currentValue + 1;
        return currentValue;
    }
}
OrderLine.ctorParameters = () => [
    { type: _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"] },
    { type: _order_model__WEBPACK_IMPORTED_MODULE_2__["Order"] }
];


/***/ }),

/***/ "./src/models/order.model.ts":
/*!***********************************!*\
  !*** ./src/models/order.model.ts ***!
  \***********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var _order_line_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-line.model */ "./src/models/order-line.model.ts");
/* harmony import */ var _payment_method_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-method.model */ "./src/models/payment-method.model.ts");


class Order {
    constructor(productos) {
        this.detalleOrdenList = [];
        this.total = 0;
        this.tipoPago = _payment_method_model__WEBPACK_IMPORTED_MODULE_1__["PaymentMethod"].CASH;
        for (var p in productos) {
            this.detalleOrdenList.push(new _order_line_model__WEBPACK_IMPORTED_MODULE_0__["OrderLine"](productos[p], this));
        }
    }
    reset() {
        for (var detalleOrden in this.detalleOrdenList) {
            this.detalleOrdenList[detalleOrden].tipoPago = _payment_method_model__WEBPACK_IMPORTED_MODULE_1__["PaymentMethod"].CASH;
            this.detalleOrdenList[detalleOrden].vendido = 0;
            this.detalleOrdenList[detalleOrden].feria = 0;
            this.detalleOrdenList[detalleOrden].calcularTotal();
        }
    }
    calcularTotal() {
        this.total = 0;
        for (var detalleOrden in this.detalleOrdenList) {
            this.total += this.detalleOrdenList[detalleOrden].total;
        }
    }
    getRowsForVenta() {
        let newVentas = new Array();
        let now = new Date();
        let date = now.toLocaleDateString() + " " + now.toLocaleTimeString();
        for (var detalle in this.detalleOrdenList) {
            var detalleOrden = this.detalleOrdenList[detalle];
            if (detalleOrden.vendido > 0) {
                var row = new Array();
                row.push(date);
                row.push(this.tipoPago == _payment_method_model__WEBPACK_IMPORTED_MODULE_1__["PaymentMethod"].CASH ? "Efectivo" : "Tarjeta");
                row.push(detalleOrden.producto.id + "");
                row.push(detalleOrden.producto.precio + "");
                row.push(detalleOrden.vendido + "");
                row.push((detalleOrden.vendido * detalleOrden.producto.precio) + "");
                newVentas.push(row);
            }
        }
        return newVentas;
    }
    toggleTipoPago() {
        switch (this.tipoPago) {
            case _payment_method_model__WEBPACK_IMPORTED_MODULE_1__["PaymentMethod"].CASH:
                this.tipoPago = _payment_method_model__WEBPACK_IMPORTED_MODULE_1__["PaymentMethod"].CREDIT_DEBIT;
                break;
            case _payment_method_model__WEBPACK_IMPORTED_MODULE_1__["PaymentMethod"].CREDIT_DEBIT:
                this.tipoPago = _payment_method_model__WEBPACK_IMPORTED_MODULE_1__["PaymentMethod"].CASH;
                break;
        }
    }
}
Order.ctorParameters = () => [
    { type: Array }
];


/***/ }),

/***/ "./src/models/payment-method.model.ts":
/*!********************************************!*\
  !*** ./src/models/payment-method.model.ts ***!
  \********************************************/
/*! exports provided: PaymentMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethod", function() { return PaymentMethod; });
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CREDIT_DEBIT"] = "Tarjeta";
    PaymentMethod["CASH"] = "Efectivo";
})(PaymentMethod || (PaymentMethod = {}));


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
class Product {
    constructor(id, nombre, precio, tipo, order) {
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
    getRowForCatalogs() {
        var row = new Array();
        row.push(this.id);
        row.push(this.nombre);
        row.push(this.precio);
        row.push(this.order);
        return row;
    }
    static createEmptyProduct() {
        return new Product(-1, "", -1, "", -1);
    }
    isOwned() {
        return "propio" == this.tipo.toLowerCase();
    }
}
Product.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: Number },
    { type: String },
    { type: Number }
];


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

class ProductionLine {
    constructor(product, date, production) {
        this._production = 0;
        this._product = product;
        this._date = date;
        this._production = production;
    }
    get product() {
        return this._product;
    }
    get date() {
        return this._date;
    }
    get production() {
        return this._production;
    }
    set production(production) {
        this._production = production;
    }
}
ProductionLine.ctorParameters = () => [
    { type: _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"] },
    { type: Date },
    { type: Number }
];


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

class ProductionProduct {
    constructor(_product) {
        this._product = _product;
        this._productionLines = [];
        this._production = 0;
        this._productionTotal = 0;
    }
    get product() {
        return this._product;
    }
    get productionLines() {
        return this._productionLines;
    }
    get productionTotal() {
        return this._productionTotal;
    }
    get production() {
        return this._production;
    }
    set production(production) {
        this._production = production;
    }
    addProductionLine(productionLine) {
        if (productionLine.product.id != this._product.id) {
            throw new Error('Invalid product line for this product');
        }
        this._productionTotal = this._productionTotal + productionLine.production;
        this._productionLines.push(productionLine);
    }
}
ProductionProduct.ctorParameters = () => [
    { type: _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"] }
];


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

class WastedLine {
    constructor(product, date, wasted) {
        this._wasted = 0;
        this._product = product;
        this._date = date;
        this._wasted = wasted;
    }
    get product() {
        return this._product;
    }
    get date() {
        return this._date;
    }
    get wasted() {
        return this._wasted;
    }
    set wasted(wasted) {
        this._wasted = wasted;
    }
}
WastedLine.ctorParameters = () => [
    { type: _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"] },
    { type: Date },
    { type: Number }
];


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

class WastedProduct {
    constructor(_product) {
        this._product = _product;
        this._wastedLines = [];
        this._wasted = 0;
        this._wastedTotal = 0;
    }
    get product() {
        return this._product;
    }
    get wastedLines() {
        return this._wastedLines;
    }
    get wastedTotal() {
        return this._wastedTotal;
    }
    get wasted() {
        return this._wasted;
    }
    set wasted(wasted) {
        this._wasted = wasted;
    }
    addWastedLine(wastedLine) {
        if (wastedLine.product.id != this._product.id) {
            throw new Error('Invalid wasted line for this product');
        }
        this._wastedTotal = this._wastedTotal + wastedLine.wasted;
        this._wastedLines.push(wastedLine);
    }
}
WastedProduct.ctorParameters = () => [
    { type: _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"] }
];


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
class BaseService {
}
//public static spreadsheetId = '1oajvWQJIqPETOX-FxzFNvTcwf1K2KeuNnGKJ-aHGDmo'; // ID of Esteban spreadsheet vrs1, se toma del URL
//public static spreadsheetId = '19ltkEfpGBfd7xiPx9UlpGwyhV2v-diAMgFom8XVrhD4'; // ID of Pedro spreadsheet vrs2, se toma del URL
BaseService.SPREADSHEET_ID = '1B5cYzMJ4vc6ewk9RODCUqIVlYFqkWDrLToXrsUHIALs'; // ID of Esteban spreadsheet vrs2, se toma del URL
// From https://developers.google.com/sheets/api/guides/values:
// USER_ENTERED = The input is parsed exactly as if it were entered into the Google Sheets UI, so "Mar 1 2016" becomes a date, and "=1+2" becomes a formula. Formats may also be inferred, so "$100.15" becomes a number with currency formatting.
BaseService.VALUE_INPUT_OPTION = "USER_ENTERED";
// From https://developers.google.com/sheets/api/reference/rest/v4/ValueRenderOption
// UNFORMATTED_VALUE = Values will be calculated, but not formatted in the reply. For example, if A1 is 1.23 and A2 is =A1 and formatted as currency, then A2 would return the number 1.23.
BaseService.VALUE_RENDER_OPTION = "UNFORMATTED_VALUE";
// From https://developers.google.com/sheets/api/reference/rest/v4/DateTimeRenderOption
// FORMATTED_STRING = Instructs date, time, datetime, and duration fields to be output as strings in their given number format (which is dependent on the spreadsheet locale).
BaseService.DATE_TIME_RENDER_OPTION = "FORMATTED_STRING";


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/services/base.service.ts");
/* harmony import */ var _models_expense_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/expense.model */ "./src/models/expense.model.ts");
/* harmony import */ var _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
var ExpenseService_1;





let ExpenseService = ExpenseService_1 = class ExpenseService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(gapiSession) {
        super();
        this.gapiSession = gapiSession;
        this._allExpenses = [];
        this._recurrenteExpenses = [];
        this._ocasionalExpenses = [];
    }
    get allExpenses() {
        return this._allExpenses;
    }
    get recurrenteExpenses() {
        return this._recurrenteExpenses;
    }
    get ocasionalExpenses() {
        return this._ocasionalExpenses;
    }
    initExpenseService() {
        if (!this._initExpenseServicePromise) {
            this._initExpenseServicePromise = this._loadRecurrentExpenses().then(() => {
                return this._loadOcasionalExpenses();
            });
        }
        if (!this._initExpenseServicePromiseSolved) {
            return this._initExpenseServicePromise;
        }
        else {
            Promise.resolve("initialized");
        }
    }
    saveExpense(expense) {
        // determine the row where to insert or update the info
        var listoOfExpenseses = [];
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
            path: `https://sheets.googleapis.com/v4/spreadsheets/${_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"].SPREADSHEET_ID}/values:batchUpdate`,
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
            this._allExpenses.push(expense);
            listoOfExpenseses.push(expense);
        });
    }
    _loadRecurrentExpenses() {
        return this.gapiSession.initClient("Expense Service").then(() => {
            return gapi.client.request({
                method: 'GET',
                // Returns a range of values from a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
                path: `https://sheets.googleapis.com/v4/spreadsheets/${_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"].SPREADSHEET_ID}/values/${ExpenseService_1.RANGE_RECURRENT_EXPENSES}?valueRenderOption=${_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"].VALUE_RENDER_OPTION}&dateTimeRenderOption=${_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"].DATE_TIME_RENDER_OPTION}`
            }).then((expenseRange) => {
                this._initExpenseServicePromiseSolved = true;
                var expensesList = expenseRange.result["values"];
                if (expensesList) {
                    for (let i = 0; i < expensesList.length; i++) {
                        var expenseFromSheet = expensesList[i];
                        var expense = new _models_expense_model__WEBPACK_IMPORTED_MODULE_3__["Expense"](expenseFromSheet[0], true, expenseFromSheet[1], expenseFromSheet[2], expenseFromSheet[4], expenseFromSheet[3], expenseFromSheet[5]);
                        this._recurrenteExpenses.push(expense);
                        this._allExpenses.push(expense);
                    }
                }
            });
        });
    }
    _loadOcasionalExpenses() {
        return this.gapiSession.initClient("Product Service").then(() => {
            return gapi.client.request({
                method: 'GET',
                // Returns a range of values from a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
                path: `https://sheets.googleapis.com/v4/spreadsheets/${_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"].SPREADSHEET_ID}/values/${ExpenseService_1.RANGE_OCASIONAL_EXPENSES}?valueRenderOption=${_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"].VALUE_RENDER_OPTION}&dateTimeRenderOption=${_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"].DATE_TIME_RENDER_OPTION}`
            }).then((res) => {
                gastosRange => {
                    // necessary to run insice the zone in order to fire the change detection
                    //this.ngZone.run( () =>
                    // {
                    var expensesList = gastosRange.result["values"];
                    if (expensesList) {
                        for (let i = 0; i < expensesList.length; i++) {
                            var expenseFromSheet = expensesList[i];
                            // 0 = id, 1 = Concepto, 2 = Fecha Pagado, 3 = Monto Pagado
                            var gasto = new _models_expense_model__WEBPACK_IMPORTED_MODULE_3__["Expense"](expenseFromSheet[0], false, expenseFromSheet[1], null, expenseFromSheet[2], null, expenseFromSheet[3]);
                            this._ocasionalExpenses.push(gasto);
                            this._allExpenses.push(gasto);
                        }
                    }
                };
            });
        });
    }
};
ExpenseService.RANGE_RECURRENT_EXPENSES = 'ControlGastosRecurrentes!A2:G';
ExpenseService.RANGE_RECURRENT_EXPENSES_ADD_ROW = 'ControlGastosRecurrentes!A';
ExpenseService.RANGE_OCASIONAL_EXPENSES = 'ControlGastosOcasionales!A2:D';
ExpenseService.RANGE_OCASIONAL_EXPENSES_ADD_ROW = 'ControlGastosOcasionales!A';
ExpenseService.ctorParameters = () => [
    { type: _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_4__["GapiSession"] }
];
ExpenseService = ExpenseService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ExpenseService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product.model */ "./src/models/product.model.ts");
/* harmony import */ var _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/services/base.service.ts");
var ProductService_1;

/**
 * ng generate service ../services/Product
 */




let ProductService = ProductService_1 = class ProductService {
    constructor(gapiSession) {
        this.gapiSession = gapiSession;
        this._allProductos = [];
        this._allOwnedProducts = [];
    }
    get allProducts() {
        return this._allProductos;
    }
    get allOwnedProducts() {
        return this._allOwnedProducts;
    }
    initProductService() {
        if (!this._initProductServicePromise) {
            this._initProductServicePromise = this._loadProducts();
        }
        if (!this._initProductServicePromiseSolved) {
            return this._initProductServicePromise;
        }
        else {
            Promise.resolve("initialized");
        }
    }
    findProductById(productId) {
        return this.allProducts.find(p => p.id == productId);
    }
    _loadProducts() {
        return this.gapiSession.initClient("Product Service").then(() => {
            return gapi.client.request({
                method: 'GET',
                // Returns a range of values from a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
                path: `https://sheets.googleapis.com/v4/spreadsheets/${_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"].SPREADSHEET_ID}/values/${ProductService_1.RANGE_PRODUCT}?valueRenderOption=${_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"].VALUE_RENDER_OPTION}`
            }).then((productosRangeResponse) => {
                this._initProductServicePromiseSolved = true;
                var productList = productosRangeResponse.result["values"];
                if (productList) {
                    for (let i = 0; i < productList.length; i++) {
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
                            this._allProductos.push(product);
                            if (product.isOwned()) {
                                this._allOwnedProducts.push(product);
                            }
                        }
                    }
                }
                this._allProductos.sort((p1, p2) => p1.order - p2.order);
                this._allOwnedProducts.sort((p1, p2) => p1.order - p2.order);
                console.log("Products loaded");
            });
        });
    }
};
ProductService.RANGE_PRODUCT = 'CatalogoProductos!A2:E';
ProductService.ctorParameters = () => [
    { type: _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_3__["GapiSession"] }
];
ProductService = ProductService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/services/production.service.ts":
/*!********************************************!*\
  !*** ./src/services/production.service.ts ***!
  \********************************************/
/*! exports provided: ProductionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionService", function() { return ProductionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_models_production_line_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/production-line.model */ "./src/models/production-line.model.ts");
/* harmony import */ var src_infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/services/base.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.service */ "./src/services/product.service.ts");
/* harmony import */ var src_models_production_product_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/production-product.model */ "./src/models/production-product.model.ts");
var ProductionService_1;







let ProductionService = ProductionService_1 = class ProductionService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(gapiSession, productService) {
        super();
        this.gapiSession = gapiSession;
        this.productService = productService;
        this._allProduction = [];
    }
    get allProduction() {
        return this._allProduction;
    }
    initProductionServiceService() {
        if (!this._initProductionServicePromise) {
            this._initProductionServicePromise = this.productService.initProductService().then(() => { return this._loadProductionLines(); });
        }
        if (!this._initProductionServicePromiseSolved) {
            return this._initProductionServicePromise;
        }
        else {
            Promise.resolve("initialized");
        }
    }
    _loadProductionLines() {
        return this.gapiSession.initClient("Production Service").then(() => {
            return gapi.client.request({
                method: 'GET',
                // Returns a range of values from a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
                path: `https://sheets.googleapis.com/v4/spreadsheets/${_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"].SPREADSHEET_ID}/values/${ProductionService_1.RANGE_PRODUCTION}?valueRenderOption=${_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"].VALUE_RENDER_OPTION}&dateTimeRenderOption=${_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"].DATE_TIME_RENDER_OPTION}`
            }).then((productionRange) => {
                this.productService.allOwnedProducts.forEach(p => {
                    this._allProduction.push(new src_models_production_product_model__WEBPACK_IMPORTED_MODULE_6__["ProductionProduct"](p));
                });
                this._initProductionServicePromiseSolved = true;
                var productionList = productionRange.result["values"];
                if (productionList) {
                    for (let i = 0; i < productionList.length; i++) {
                        var productionLineFromSheet = productionList[i];
                        // 0 = Id Producto, 2 = Fecha,  1 = Producido
                        var productionByProduct = this._allProduction.find(pl => pl.product.id == productionLineFromSheet[0]);
                        if (productionByProduct) {
                            var productionLine = new src_models_production_line_model__WEBPACK_IMPORTED_MODULE_2__["ProductionLine"](productionByProduct.product, productionLineFromSheet[1], productionLineFromSheet[2]);
                            productionByProduct.addProductionLine(productionLine);
                        }
                        else {
                            console.warn("A ProductionProduct was not found. Was the ControlProduccion modified manually?. Check all products in that list are of Tipo Propio");
                        }
                    }
                }
            });
        });
    }
    saveProduction() {
        let productionListToSave = new Array();
        this._allProduction.forEach(p => {
            if (p.production > 0) {
                p.addProductionLine(new src_models_production_line_model__WEBPACK_IMPORTED_MODULE_2__["ProductionLine"](p.product, new Date(), p.production));
                p.production = 0;
            }
            p.productionLines.forEach(pl => {
                var row = new Array();
                row.push(pl.product.id);
                row.push(pl.date);
                row.push(pl.production);
                productionListToSave.push(row);
            });
        });
        // Registers the Efectivo and the Tarjeta
        return gapi.client.request({
            method: 'POST',
            // Sets values in one or more ranges of a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate
            path: `https://sheets.googleapis.com/v4/spreadsheets/${_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"].SPREADSHEET_ID}/values:batchUpdate`,
            body: {
                valueInputOption: _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"].VALUE_INPUT_OPTION,
                data: [
                    {
                        range: ProductionService_1.RANGE_PRODUCTION_ADD_ROW,
                        values: productionListToSave
                    }
                ]
            }
        });
    }
};
ProductionService.RANGE_PRODUCTION = 'ControlProduccion!A2:C';
ProductionService.RANGE_PRODUCTION_ADD_ROW = 'ControlProduccion!A2';
ProductionService.CONTROL_PRODUCCION_ID = 961378869;
ProductionService.ctorParameters = () => [
    { type: src_infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_3__["GapiSession"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
];
ProductionService = ProductionService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductionService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/services/base.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product.service */ "./src/services/product.service.ts");
/* harmony import */ var src_models_wasted_product_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/wasted-product.model */ "./src/models/wasted-product.model.ts");
/* harmony import */ var src_models_wasted_line_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/wasted-line.model */ "./src/models/wasted-line.model.ts");
var WastedService_1;







let WastedService = WastedService_1 = class WastedService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(gapiSession, productService) {
        super();
        this.gapiSession = gapiSession;
        this.productService = productService;
        this._allWasted = [];
    }
    get allWasted() {
        return this._allWasted;
    }
    initWastedService() {
        if (!this._initWastedServicePromise) {
            this._initWastedServicePromise = this.productService.initProductService().then(() => { return this._loadWastedLines(); });
        }
        if (!this._initWastedServicePromiseSolved) {
            return this._initWastedServicePromise;
        }
        else {
            Promise.resolve("initialized");
        }
    }
    _loadWastedLines() {
        return this.gapiSession.initClient("Wasted Service").then(() => {
            return gapi.client.request({
                method: 'GET',
                // Returns a range of values from a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
                path: `https://sheets.googleapis.com/v4/spreadsheets/${_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].SPREADSHEET_ID}/values/${WastedService_1.RANGE_WASTED}?valueRenderOption=${_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].VALUE_RENDER_OPTION}&dateTimeRenderOption=${_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].DATE_TIME_RENDER_OPTION}`
            }).then((productionRange) => {
                this.productService.allOwnedProducts.forEach(p => {
                    this._allWasted.push(new src_models_wasted_product_model__WEBPACK_IMPORTED_MODULE_5__["WastedProduct"](p));
                });
                this._initWastedServicePromiseSolved = true;
                var productionList = productionRange.result["values"];
                if (productionList) {
                    for (let i = 0; i < productionList.length; i++) {
                        var productionLineFromSheet = productionList[i];
                        // 0 = Id Producto, 2 = Fecha,  1 = Perdido
                        var wastedByProduct = this._allWasted.find(pl => pl.product.id == productionLineFromSheet[0]);
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
    }
    saveWasted() {
        let wastedListToSave = new Array();
        this._allWasted.forEach(p => {
            if (p.wasted > 0) {
                p.addWastedLine(new src_models_wasted_line_model__WEBPACK_IMPORTED_MODULE_6__["WastedLine"](p.product, new Date(), p.wasted));
                p.wasted = 0;
            }
            p.wastedLines.forEach(pl => {
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
            path: `https://sheets.googleapis.com/v4/spreadsheets/${_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].SPREADSHEET_ID}/values:batchUpdate`,
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
    }
};
WastedService.RANGE_WASTED = 'ControlPerdidas!A2:C';
WastedService.RANGE_WASTED_ADD_ROW = 'ControlPerdidas!A2';
WastedService.ctorParameters = () => [
    { type: src_infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_2__["GapiSession"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
WastedService = WastedService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WastedService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\psaen\Desktop\Personal\PanaderiaAvila\Site\PanaderiaAvila\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map