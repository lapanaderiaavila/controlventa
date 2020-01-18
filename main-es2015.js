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

module.exports = "\n<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <!--img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"-->\n</div>\n  \n<form class=\"container form-group\" (submit)=\"registrarVenta($event)\" style=\"margin: 0px; padding: 0px;\">\n\t<div class=\"form-group row\" *ngIf=\"orden\" class=\"table-responsive-lg\">\nestoy por publicarlo, solo tengo q actualizar el el ID del documento en el codigo\nver si puedo hacer un gitlab con la cuenta de esteban\n\n\t\t<!-- https://getbootstrap.com/docs/3.4/css/ -->\n\t\t<BR/>\n\t\t<div class=\"form-group row\">\n\t\t\t<div class=\"col-md-3 px-md-4\">\n\t\t\t\t<label>Producto</label>\n\t\t\t\t<input type=\"text\" placeholder=\"Producto\" class=\"form-control\" matInput [formControl]=\"control\" [matAutocomplete]=\"auto\">\n\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\" (optionSelected)=\"onProductSelected($event.option.value)\">\n\t\t\t\t\t<!--product is the current item you are iterating and value is the property you want to assign to the \"control\" once the user picks a product  --->\n\t\t\t\t\t<mat-option *ngFor=\"let detalleOrden of filteredProducts | async\" [value]=\"detalleOrden\">\n\t\t\t\t\t\t{{detalleOrden.producto.nombre}}\n\t\t\t\t\t</mat-option>\n\t\t\t\t</mat-autocomplete>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-3\">\n\t\t\t\t<label>Precio</label>\n\t\t\t\t<input type=\"text\" placeholder=\"Precio\" class=\"form-control\" [(ngModel)]=\"manualDetalleOrden.producto.precio\" \n\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"  [disabled]=\"guardando || manualDetalleOrden.producto.id > 0\"/>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-2\">\n\t\t\t\t<label>Vendido</label>\n\t\t\t\t<input type=\"number\" placeholder=\"Vendido\" class=\"form-control\" [(ngModel)]=\"manualDetalleOrden.vendido\" (ngModelChange)=\"calculateNewProduct()\"\n\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"  [disabled]=\"guardando\"/>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-1\">\n\t\t\t\t<label>TOTAL:</label><BR/>\n\t\t\t\t<label>{{ manualDetalleOrden.total }}</label>\n\t\t\t</div>\n\t\t\t<div class=\"col col-md-2 text-center\" style=\"margin-top: 5px;\">\n\t\t\t\t<BR/>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-md\" (click)=\"addProductToTable()\" [disabled]=\"guardando\">\n\t\t\t\t\tAgregar\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<BR/>\n\n\t\t<table class=\"table table-hover table-striped \">\n\t\t\t<!-- https://getbootstrap.com/docs/4.0/content/tables/ -->\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th scope=\"col\"><h6>Producto</h6></th>\n\t\t\t\t\t<th scope=\"col\"><h6>Vendido</h6></th>\n\t\t\t\t\t<th scope=\"col\" class=\"text-right\"><h6>Total</h6></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\n\t\t\t<tbody *ngIf=\"orden.detalleOrdenList\">\n\t\t\t\t<tr *ngFor=\"let detalleOrden of orden.detalleOrdenList\">\n\t\t\t\t\t<td scope=\"row\" class=\"text-nowrap\" style=\"padding-right: 0px;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t{{ detalleOrden.producto.nombre }}\n\t\t\t\t\t\t\t<small>({{ detalleOrden.producto.precio }})</small>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td style=\"padding-left: 2px; padding-right: 0px;\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-number btn-sm\" data-type=\"minus\" (click)=\"detalleOrden.minusVendido()\" [disabled]=\"guardando\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-minus\" style=\"padding-left: 1rem; padding-right: 1rem;\">-</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<input type=\"number\" class=\"input-number form-control-md text-right\" style=\"height: 31px; width: 50px;\" [(ngModel)]=\"detalleOrden.vendido\" [ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"detalleOrden.onChangeVendido($event)\" onclick=\"this.select();\" [disabled]=\"guardando\"/>\n\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-number btn-sm\" data-type=\"plus\" (click)=\"detalleOrden.addVendido()\" [disabled]=\"guardando\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus\" style=\"padding-left: 1rem; padding-right: 1rem;\">+</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<h6 class=\"text-right\">{{ detalleOrden.total }}</h6>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td colspan=\"2\" class=\"text-right\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" [disabled]=\"guardando\" name=\"btnGuardando\" style=\"margin-right: 20px;\"\n\t\t\t\t\t\t\t(click)=\"registrarVenta()\">\n\t\t\t\t\t\t\tGuardar\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" [disabled]=\"guardando\" name=\"btnTipoPago\" (click)=\"orden.toggleTipoPago()\">\n\t\t\t\t\t\t\t{{orden.tipoPago}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"text-right\">\n\t\t\t\t\t\t<h5>{{orden.total}}</h5>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\n</form>\n"

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
    { path: 'panaderiaavila', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
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
/* harmony import */ var _models_producto_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/producto.model */ "./src/models/producto.model.ts");
/* harmony import */ var _models_orden_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/orden.model */ "./src/models/orden.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_models_detalle_orden_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/detalle.orden.model */ "./src/models/detalle.orden.model.ts");
var AppComponent_1;










let AppComponent = AppComponent_1 = class AppComponent {
    constructor(gapiSession, ngZone) {
        this.gapiSession = gapiSession;
        this.ngZone = ngZone;
        this.productsForDropDown = [];
        this.allProductos = [];
        this.productosForTable = [];
        this.test = "test";
        this.guardando = false;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](); //used for the autocomplete text
    }
    ngOnInit() {
        if (!this.gapiSession.isSignedIn) {
            // use this to refresh the credentials
            //this.gapiSession.signOut();
            this.gapiSession.signIn();
        }
        this._loadProducts().subscribe(productosRange => {
            // necessary to run insice the zone in order to fire the change detection
            this.ngZone.run(() => {
                var listaProductos = productosRange.result["values"];
                if (listaProductos) {
                    for (let i = 0; i < listaProductos.length; i++) {
                        var productoFromSheet = listaProductos[i];
                        if (productoFromSheet[3] && productoFromSheet[3] != "") { // productos with order 0 are considered deleted
                            // 0=Id, 1 = Name, 2 = Price, 3 = Order
                            var product = new _models_producto_model__WEBPACK_IMPORTED_MODULE_3__["Producto"](productoFromSheet[0], productoFromSheet[1], productoFromSheet[2], productoFromSheet[3]);
                            // name, description, price
                            this.allProductos.push(product);
                            if (product.order > 0) {
                                this.productosForTable.push(product);
                            }
                            // name, description, price
                            this.productsForDropDown.push(new src_models_detalle_orden_model__WEBPACK_IMPORTED_MODULE_8__["DetalleOrden"](product, this.orden));
                        }
                    }
                }
                this.productosForTable = this.productosForTable.sort((p1, p2) => p1.order - p2.order);
                this.orden = new _models_orden_model__WEBPACK_IMPORTED_MODULE_4__["Orden"](this.productosForTable);
                this.manualDetalleOrden = src_models_detalle_orden_model__WEBPACK_IMPORTED_MODULE_8__["DetalleOrden"].createEmptyDetalleOrden(this.orden);
                // move the ones that are not shown in the table to the beginning
                this.productsForDropDown = this.productsForDropDown.sort((p1, p2) => (p1.producto.order - p2.producto.order));
                for (let detalleOrden in this.productsForDropDown) {
                    this.productsForDropDown[detalleOrden].orden = this.orden;
                }
            });
        });
        // the value in control is an string while the user is typing, once the users selects a product from the list, it will be a DetalleOrden
        this.filteredProducts = this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(display => display ? this._filter(display instanceof src_models_detalle_orden_model__WEBPACK_IMPORTED_MODULE_8__["DetalleOrden"] ? display.producto.nombre : display) : this.productsForDropDown.slice()));
    }
    _loadProducts() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(gapi.client.request({
            method: 'GET',
            // Returns a range of values from a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
            path: `https://sheets.googleapis.com/v4/spreadsheets/${AppComponent_1.spreadsheetId}/values/${AppComponent_1.rangeCatalogosProductos}?valueRenderOption=${AppComponent_1.valueRenderOption}`
        }));
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
        // GET sheet/tab ID
        /*gapi.client.request(
            {
                method: 'GET',
                path: `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}`
            }
        ).then(function(response)
            {
                console.log(response);
            }
        );*/
        /*gapi.client.request(
            {
                method: 'GET',
                path: `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${spreadsheetRange}`
            }
        ).then(function(response)
            {
                console.log(response);
            }
        );*/
    }
    _filter(value) {
        if (value) {
            const filterValue = this._normalizeValue(value);
            const productsMatched = this.productsForDropDown
                .filter(p => this._normalizeValue(p.producto.nombre).includes(filterValue));
            return productsMatched;
        }
        return [];
    }
    _normalizeValue(value) {
        return value ? value.toLowerCase().replace(/\s/g, '') : "";
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
            this.manualDetalleOrden = src_models_detalle_orden_model__WEBPACK_IMPORTED_MODULE_8__["DetalleOrden"].createEmptyDetalleOrden(this.orden);
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
                    self.manualDetalleOrden = src_models_detalle_orden_model__WEBPACK_IMPORTED_MODULE_8__["DetalleOrden"].createEmptyDetalleOrden(self.orden);
                    self.control.setValue("");
                });
            });
        }
    }
};
AppComponent.valueInputOption = "USER_ENTERED"; // RAW => https://developers.google.com/sheets/api/guides/values
AppComponent.valueRenderOption = "UNFORMATTED_VALUE"; // RAW => https://developers.google.com/sheets/api/reference/rest/v4/ValueRenderOption
//private static spreadsheetId = '1oajvWQJIqPETOX-FxzFNvTcwf1K2KeuNnGKJ-aHGDmo'; // ID of Esteban spreadsheet
AppComponent.spreadsheetId = '19ltkEfpGBfd7xiPx9UlpGwyhV2v-diAMgFom8XVrhD4'; // ID of Pedros spreadsheet
AppComponent.rangeControlVentaAddRow = 'ControlVenta!A2';
AppComponent.rangeCatalogosProductos = 'CatalogoProductos!A2:E';
AppComponent.rangeCatalogosProductosAddRow = 'CatalogoProductos!A';
AppComponent.controlVentaSheetId = 1798969314;
AppComponent.ctorParameters = () => [
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
/*! exports provided: initGapi, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGapi", function() { return initGapi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");









function initGapi(gapiSession) {
    return () => gapiSession.initClient();
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"]
        ],
        providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"], useFactory: initGapi, deps: [_infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_6__["GapiSession"]], multi: true },
            _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_6__["GapiSession"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



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
    }
    initClient() {
        return new Promise((resolve, reject) => {
            gapi.load('client:auth2', () => {
                return gapi.client.init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES,
                }).then(() => {
                    this.googleAuth = gapi.auth2.getAuthInstance();
                    resolve();
                });
            });
        });
    }
    get isSignedIn() {
        return this.googleAuth.isSignedIn.get();
    }
    signIn() {
        return this.googleAuth.signIn({
            prompt: 'consent'
        }).then((googleUser) => {
            //this.appRepository.User.add(googleUser.getBasicProfile());
        });
    }
    signOut() {
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

/***/ "./src/models/detalle.orden.model.ts":
/*!*******************************************!*\
  !*** ./src/models/detalle.orden.model.ts ***!
  \*******************************************/
/*! exports provided: DetalleOrden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleOrden", function() { return DetalleOrden; });
/* harmony import */ var _producto_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto.model */ "./src/models/producto.model.ts");
/* harmony import */ var _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipo.pago.model */ "./src/models/tipo.pago.model.ts");
/* harmony import */ var _orden_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orden.model */ "./src/models/orden.model.ts");



class DetalleOrden {
    constructor(producto, orden) {
        this.vendido = 0;
        this.feria = 0;
        this.tipoPago = _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].EFECTIVO;
        this.total = 0;
        this.producto = producto;
        this.orden = orden;
    }
    // style guide / naming conventions 
    // https://basarat.gitbooks.io/typescript/docs/styleguide/styleguide.html#variable-and-function
    static createEmptyDetalleOrden(orden) {
        return new DetalleOrden(_producto_model__WEBPACK_IMPORTED_MODULE_0__["Producto"].createEmptyProduct(), orden);
    }
    onChangeVendido(vendido) {
        this.vendido = vendido;
        this.calcularTotal();
    }
    calcularTotal() {
        this.total = this.producto.precio * this.vendido;
        this.orden.calcularTotal();
    }
    minusVendido() {
        this.vendido = this.minus(this.vendido);
        this.calcularTotal();
    }
    addVendido() {
        this.vendido = this.add(this.vendido);
        this.calcularTotal();
        console.log(this.orden);
    }
    minusFeria() {
        this.feria = this.minus(this.feria);
    }
    addFeria() {
        this.feria = this.add(this.feria);
    }
    isEffectivo() {
        return this.tipoPago == _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].EFECTIVO;
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
DetalleOrden.ctorParameters = () => [
    { type: _producto_model__WEBPACK_IMPORTED_MODULE_0__["Producto"] },
    { type: _orden_model__WEBPACK_IMPORTED_MODULE_2__["Orden"] }
];


/***/ }),

/***/ "./src/models/orden.model.ts":
/*!***********************************!*\
  !*** ./src/models/orden.model.ts ***!
  \***********************************/
/*! exports provided: Orden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orden", function() { return Orden; });
/* harmony import */ var _detalle_orden_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle.orden.model */ "./src/models/detalle.orden.model.ts");
/* harmony import */ var _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipo.pago.model */ "./src/models/tipo.pago.model.ts");


class Orden {
    constructor(productos) {
        this.detalleOrdenList = [];
        this.total = 0;
        this.tipoPago = _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].EFECTIVO;
        for (var p in productos) {
            this.detalleOrdenList.push(new _detalle_orden_model__WEBPACK_IMPORTED_MODULE_0__["DetalleOrden"](productos[p], this));
        }
    }
    reset() {
        for (var detalleOrden in this.detalleOrdenList) {
            this.detalleOrdenList[detalleOrden].tipoPago = _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].EFECTIVO;
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
                row.push(this.tipoPago == _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].EFECTIVO ? "Efectivo" : "Tarjeta");
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
            case _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].EFECTIVO:
                this.tipoPago = _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].TARJETA;
                break;
            case _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].TARJETA:
                this.tipoPago = _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].EFECTIVO;
                break;
        }
    }
}
Orden.ctorParameters = () => [
    { type: Array }
];


/***/ }),

/***/ "./src/models/producto.model.ts":
/*!**************************************!*\
  !*** ./src/models/producto.model.ts ***!
  \**************************************/
/*! exports provided: Producto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto", function() { return Producto; });
class Producto {
    constructor(id, nombre, precio, order) {
        this.id = id;
        this.nombre = nombre;
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
        return new Producto(-1, "", -1, -1);
    }
}
Producto.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: Number },
    { type: Number }
];


/***/ }),

/***/ "./src/models/tipo.pago.model.ts":
/*!***************************************!*\
  !*** ./src/models/tipo.pago.model.ts ***!
  \***************************************/
/*! exports provided: TipoPago */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoPago", function() { return TipoPago; });
var TipoPago;
(function (TipoPago) {
    TipoPago["TARJETA"] = "Tarjeta";
    TipoPago["EFECTIVO"] = "Efectivo";
})(TipoPago || (TipoPago = {}));


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