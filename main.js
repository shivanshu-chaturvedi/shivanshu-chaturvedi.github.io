(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\e-shop\e-shop\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "LjYc":
/*!*************************************!*\
  !*** ./src/app/mock/mock-data.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"PRODUCT NAME 1\",\"item\":701642853695,\"price\":29.59,\"discount\":19.99},{\"name\":\"PRODUCT NAME 2\",\"item\":701642233695,\"price\":32.99,\"discount\":26.99},{\"name\":\"PRODUCT NAME 3\",\"item\":701645643695,\"price\":9.9,\"discount\":0},{\"name\":\"PRODUCT NAME 4\",\"item\":201642853695,\"price\":52.99,\"discount\":0},{\"name\":\"PRODUCT NAME 5\",\"item\":578542853695,\"price\":69.99,\"discount\":39.99},{\"name\":\"PRODUCT NAME 6\",\"item\":872642853695,\"price\":34.99,\"discount\":0}]");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'e-shop';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product-page/product-page.component */ "deaq");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product-details/product-details.component */ "ZQA1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"], useValue: {} },
        { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], useValue: {} }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_4__["ProductPageComponent"],
        _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();


/***/ }),

/***/ "ZQA1":
/*!*************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ProductDetailsComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.data.discount));
} }
function ProductDetailsComponent_span_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r1.data.discount));
} }
function ProductDetailsComponent_div_171_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r2.data.discount));
} }
const _c0 = function (a0) { return { "--rotate": a0 }; };
const _c1 = function (a0) { return { "--hide-social-icons": a0 }; };
const _c2 = function (a0) { return { "--isDiscount": a0 }; };
class ProductDetailsComponent {
    constructor(data, router, activatedRoute, dialog) {
        this.data = data;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.iconSate = false;
    }
    onResize(event) {
        this.innerWidth = window.innerWidth;
        this.router.navigate(['']);
    }
    ngOnInit() {
        if (Object.keys(this.data).length === 0) {
            this.state$ = this.activatedRoute.paramMap
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => window.history.state));
            this.state$.subscribe(data => this.data = data);
        }
    }
    toggleIcons() {
        this.iconSate = !this.iconSate;
    }
    closeModal() {
        this.dialog.closeAll();
    }
    goBack() {
        this.router.navigate(['']);
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], hostBindings: function ProductDetailsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function ProductDetailsComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 195, vars: 33, consts: [[1, "desktop-view"], [1, "closebtn", 3, "click"], [1, "material-icons"], ["mat-dialog-content", ""], [1, "product-photo"], [1, "menu", 3, "click"], [1, "plus", 3, "ngClass"], [1, "fa", "fa-plus", "fa-2x", "plus-icon"], [1, "pop", 3, "ngClass"], ["src", "../../../assets/facebook.svg", "width", "10", "alt", "facebook", 1, "social-icons"], ["src", "../../../assets/twitter.svg", "width", "15", "alt", "twitter", 1, "social-icons"], ["src", "../../../assets/pinterest.svg", "width", "15", "alt", "pinterest", 1, "social-icons"], ["src", "../../../assets/youtube.svg", "width", "15", "alt", "youtube", 1, "social-icons"], ["src", "../../../assets/instagram.svg", "width", "15", "alt", "instagram", 1, "social-icons"], [1, "product-description"], [1, "product-title"], [1, "item-code"], [1, "product-price"], [1, "price", 3, "ngClass"], ["class", "discount", 4, "ngIf"], [1, "ratings"], [1, "rating-css"], [1, "star-icon"], ["type", "radio", "name", "rating1", "id", "rating1"], ["for", "rating1", 1, "fa", "fa-star"], ["type", "radio", "name", "rating1", "id", "rating2"], ["for", "rating2", 1, "fa", "fa-star"], ["type", "radio", "name", "rating1", "id", "rating3"], ["for", "rating3", 1, "fa", "fa-star"], ["type", "radio", "name", "rating1", "id", "rating4"], ["for", "rating4", 1, "fa", "fa-star"], ["type", "radio", "name", "rating1", "id", "rating5"], ["for", "rating5", 1, "fa", "fa-star"], [1, "description", "d-none", "d-lg-block"], [1, "product-size"], [1, "size-title"], [1, "radio-group"], ["type", "radio", "id", "option-one", "name", "selector"], ["for", "option-one"], ["type", "radio", "id", "option-two", "name", "selector"], ["for", "option-two"], ["type", "radio", "id", "option-three", "name", "selector"], ["for", "option-three"], ["type", "radio", "id", "option-four", "name", "selector"], ["for", "option-four"], [1, "btn", "btn-default"], [1, "mobile-view"], ["mat-dialog-title", "", 1, "product-title"], [1, "mobile-layout"], ["type", "radio", "name", "rating1-m", "id", "rating1-m"], ["for", "rating1-m", 1, "fa", "fa-star"], ["type", "radio", "name", "rating1-m", "id", "rating2-m"], ["for", "rating2-m", 1, "fa", "fa-star"], ["type", "radio", "name", "rating1-m", "id", "rating3-m"], ["for", "rating3-m", 1, "fa", "fa-star"], ["type", "radio", "name", "rating1-m", "id", "rating4-m"], ["for", "rating4-m", 1, "fa", "fa-star"], ["type", "radio", "name", "rating1-m", "id", "rating5-m"], ["for", "rating5-m", 1, "fa", "fa-star"], [1, "product-photo-mobile"], [1, "description-small"], [1, "des-title"], [1, "pop"], ["type", "radio", "id", "option-one-m", "name", "selector"], ["for", "option-one-m"], ["type", "radio", "id", "option-two-m", "name", "selector"], ["for", "option-two-m"], ["type", "radio", "id", "option-three-m", "name", "selector"], ["for", "option-three-m"], ["type", "radio", "id", "option-four-m", "name", "selector"], ["for", "option-four-m"], [1, "cart"], [1, "ipad-view"], ["mat-dialog-title", "", 1, ""], [1, "ipad-layout"], ["type", "radio", "name", "rating1-i", "id", "rating1-i"], ["for", "rating1-i", 1, "fa", "fa-star"], ["type", "radio", "name", "rating1-i", "id", "rating2-i"], ["for", "rating2-i", 1, "fa", "fa-star"], ["type", "radio", "name", "rating1-i", "id", "rating3-i"], ["for", "rating3-i", 1, "fa", "fa-star"], ["type", "radio", "name", "rating1-i", "id", "rating4-i"], ["for", "rating4-i", 1, "fa", "fa-star"], ["type", "radio", "name", "rating1-i", "id", "rating5-i"], ["for", "rating5-i", 1, "fa", "fa-star"], ["type", "radio", "id", "option-one-i", "name", "selector"], ["for", "option-one-i"], ["type", "radio", "id", "option-two-i", "name", "selector"], ["for", "option-two-i"], ["type", "radio", "id", "option-three-i", "name", "selector"], ["for", "option-three-i"], ["type", "radio", "id", "option-four-i", "name", "selector"], ["for", "option-four-i"], [1, "discount"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_div_click_1_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "control_point");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_div_click_6_listener() { return ctx.toggleIcons(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ProductDetailsComponent_span_31_Template, 3, 3, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "SIZE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "XL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " L");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " M");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " S");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_div_click_67_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "control_point");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Details :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](109, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](110, ProductDetailsComponent_span_110_Template, 3, 3, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "SIZE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "label", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "XL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, " L");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, " M");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, " S");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_div_click_132_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "control_point");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "h3", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](144, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](157, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](158, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](159, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](160, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](162, "label", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](163, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](164, "label", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](165, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "label", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](170, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](171, ProductDetailsComponent_div_171_Template, 3, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "SIZE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "input", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "label", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "XL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](180, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, " L");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](183, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, " M");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "input", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, " S");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, "Details :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c0, ctx.iconSate));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c1, !ctx.iconSate));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Item #: ", ctx.data.item, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](27, _c2, ctx.data.discount !== 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 17, ctx.data.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.discount !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Item #: ", ctx.data.item, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](29, _c2, ctx.data.discount !== 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](109, 19, ctx.data.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.discount !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Item #: ", ctx.data.item, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](31, _c2, ctx.data.discount !== 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](170, 21, ctx.data.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.discount !== 0);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".closebtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #E89806;\n  display: flex;\n  justify-content: flex-end;\n}\n.product-photo[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0.5em;\n  background-image: radial-gradient(#73909C, #204859);\n}\n.product-description[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0.5em;\n}\n.mat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 !important;\n}\n.material-icons[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n.item-code[_ngcontent-%COMP%] {\n  font-size: 10px;\n  line-height: 10px;\n  letter-spacing: 0.7px;\n  color: #7B8093;\n}\n\n.product-price[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  font-size: 22px;\n  line-height: 22px;\n}\n.product-price[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #CE2C52;\n  padding-right: 0.5em;\n}\n.product-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-right: 0.5em;\n}\n.product-price[_ngcontent-%COMP%]   .--isDiscount[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  list-style: none;\n  margin: 1em;\n  color: #E89806;\n}\n.--rotate[_ngcontent-%COMP%] {\n  transition-duration: 0.4s;\n  transform: rotate(45deg);\n}\n.pop[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0.6em;\n}\n.pop[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 1em 0;\n  background-image: url('circle.svg');\n  background-repeat: no-repeat;\n  display: flex;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n}\n.--hide-social-icons[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.rating-css[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: #E89806;\n  margin: 1em auto;\n}\n.rating-css[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.rating-css[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  cursor: pointer;\n}\n.rating-css[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]    ~ label[_ngcontent-%COMP%] {\n  color: #AEB3C3;\n}\n.rating-css[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:active {\n  transform: scale(0.8);\n  transition: 0.3s ease;\n}\n\n.product-size[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  display: flex;\n  text-align: center;\n}\n.product-size[_ngcontent-%COMP%]   .size-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  padding: 0.8em 0;\n}\n.product-size[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n}\n.product-size[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  color: #7B8093;\n  cursor: pointer;\n  border: solid #7B8093;\n  border-radius: 50%;\n  padding: 5px;\n  margin: 0 0.5em;\n}\n.product-size[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  color: white;\n  background: #7B8093;\n}\n.product-size[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 1em;\n}\n.btn-default[_ngcontent-%COMP%] {\n  width: 52%;\n  min-height: 33px;\n  font-size: 13px;\n  color: white;\n  letter-spacing: 1px;\n  line-height: 15px;\n  border-radius: 40px;\n  background: #E89806;\n  transition: all 0.3s ease 0s;\n}\n.btn-default[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.description-small[_ngcontent-%COMP%]   .des-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n@media screen and (max-width: 480px) {\n  .desktop-view[_ngcontent-%COMP%], .ipad-view[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-layout[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0 1em;\n  }\n\n  .product-title[_ngcontent-%COMP%] {\n    font-weight: bold;\n    margin: 0 0.5em;\n  }\n\n  .product-photo-mobile[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 394px;\n    background-image: radial-gradient(#73909C, #204859);\n  }\n\n  .description-small[_ngcontent-%COMP%] {\n    margin: 0.5em;\n  }\n\n  .pop[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .pop[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    width: 80%;\n    display: flex;\n    margin: auto;\n  }\n  .pop[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0.5em;\n  }\n\n  .product-price[_ngcontent-%COMP%] {\n    margin: 0.5em auto;\n    width: 44%;\n    display: flex;\n  }\n  .product-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n\n  .product-size[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    width: 63%;\n  }\n\n  .cart[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .cart[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 54%;\n    margin: auto;\n  }\n}\n\n@media screen and (min-width: 481px) and (max-width: 768px) {\n  .desktop-view[_ngcontent-%COMP%], .mobile-view[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .ipad-layout[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n\n@media screen and (min-width: 769px) {\n  .mobile-view[_ngcontent-%COMP%], .ipad-view[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQUE7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBQUo7QUFHQTtFQUNJLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbURBQUE7QUFBSjtBQUdBO0VBQ0ksT0FBQTtFQUNBLGFBQUE7QUFBSjtBQUdBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUVBO0VBQ0ksd0JBQUE7QUFDSjtBQUNBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBRUo7QUFFQSwrQkFBQTtBQUVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKO0FBQ0c7RUFDSyxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNSO0FBQ0k7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBQ1I7QUFDSTtFQUNJLDZCQUFBO0FBQ1I7QUFHQSwyQ0FBQTtBQUVJO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBRFI7QUFLQTtFQUNJLHlCQUFBO0VBQ0Esd0JBQUE7QUFGSjtBQU1JO0VBQ0EsY0FBQTtBQUhKO0FBSUk7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGSjtBQU9BO0VBQ0ksYUFBQTtBQUpKO0FBT0EsdUJBQUE7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUxKO0FBT0E7RUFDSSxhQUFBO0FBSko7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUhKO0FBS0E7RUFDSSxjQUFBO0FBRko7QUFLQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7QUFGSjtBQU9BLDRDQUFBO0FBR0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTko7QUFPSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUxSO0FBUUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFOUjtBQVNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVBSO0FBVU07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFSUjtBQVdNO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQVRSO0FBYUUsNkNBQUE7QUFFRjtFQUNHLFdBQUE7QUFYSDtBQWVFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FBWko7QUFlRTtFQUNDLGdCQUFBO0FBWkg7QUFnQkk7RUFDQyxpQkFBQTtBQWJMO0FBa0JBLHNCQUFBO0FBR0E7RUFDSTtJQUNFLGFBQUE7RUFqQko7O0VBbUJFO0lBQ0ksYUFBQTtJQUNBLDhCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0VBaEJOOztFQWtCRTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQWZKOztFQWlCRTtJQUNJLFdBQUE7SUFDQSxhQUFBO0lBQ0EsbURBQUE7RUFkTjs7RUFnQkU7SUFDSSxhQUFBO0VBYk47O0VBZUU7SUFDSSxhQUFBO0VBWk47RUFhTTtJQUNBLFVBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFQVhOO0VBWU07SUFDQyxhQUFBO0VBVlA7O0VBY0U7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0VBWE47RUFZTTtJQUNJLFlBQUE7RUFWVjs7RUFhRTtJQUNJLGNBQUE7SUFDSixVQUFBO0VBVkY7O0VBWUU7SUFDSSxhQUFBO0VBVE47RUFVTTtJQUNJLFVBQUE7SUFDQSxZQUFBO0VBUlY7QUFDRjtBQVlFLG9CQUFBO0FBRUE7RUFDRTtJQUNJLGFBQUE7RUFYTjs7RUFhSTtJQUNJLGFBQUE7RUFWUjtBQUNGO0FBYUUsdUJBQUE7QUFFQTtFQUNFO0lBQ0ksYUFBQTtFQVpOO0FBQ0YiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypDb21tb24gQ1NTIGZvciBtb2JpbGUgdmlldywgSVBBRCB2aWV3IGFuZCBEZXNrdG9wIFZpZXcqL1xyXG5cclxuLmNsb3NlYnRuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjRTg5ODA2O1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4ucHJvZHVjdC1waG90byB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCgjNzM5MDlDLCAjMjA0ODU5KTtcclxufVxyXG5cclxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7IFxyXG59XHJcbi5pdGVtLWNvZGUge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC43cHg7XHJcbiAgICBjb2xvcjogIzdCODA5MztcclxufVxyXG5cclxuXHJcbi8qQ1NTIGZvciBQcmljaW5nIGFuZCBEaXNjb3VudCovXHJcblxyXG4ucHJvZHVjdC1wcmljZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgLmRpc2NvdW50IHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogI0NFMkM1MjsgICAgICAgIDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcclxuICAgIH1cclxuICAgIC5wcmljZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC41ZW07XHJcbiAgICB9XHJcbiAgICAuLS1pc0Rpc2NvdW50IHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qQ1NTIGZvciBTb2NpYWwgTWVkaWEgSWNvbnMgRnVuY3Rpb25hbGl0eSovXHJcbi5tZW51e1xyXG4gICAgbGl7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAxZW07XHJcbiAgICAgICAgY29sb3I6I0U4OTgwNiA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi4tLXJvdGF0ZSB7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOjAuNHM7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTsgXHJcbn1cclxuXHJcbi5wb3Age1xyXG4gICAgdWwge1xyXG4gICAgcGFkZGluZzogMC42ZW07XHJcbiAgICBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAxZW0gMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9jaXJjbGUuc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfSBcclxuICB9XHJcbn1cclxuXHJcbi4tLWhpZGUtc29jaWFsLWljb25zIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qQ1NTIGZvciBTdGFyIHJhdGluZyAqL1xyXG5cclxuLnJhdGluZy1jc3MgZGl2IHtcclxuICAgIGNvbG9yOiAjRTg5ODA2O1xyXG4gICAgbWFyZ2luOiAxZW0gYXV0bztcclxufVxyXG4ucmF0aW5nLWNzcyBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5yYXRpbmctY3NzIGlucHV0ICsgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucmF0aW5nLWNzcyBpbnB1dDpjaGVja2VkICsgbGFiZWwgfiBsYWJlbCB7XHJcbiAgICBjb2xvcjogI0FFQjNDMztcclxuXHJcbn1cclxuLnJhdGluZy1jc3MgbGFiZWw6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxufVxyXG5cclxuXHJcblxyXG4vKkNTUyBmb3IgUHJvZHVjdCBTaXplIEN1c3RvbSBSYWRpbyBidXR0b25zKi9cclxuXHJcbiBcclxuLnByb2R1Y3Qtc2l6ZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLnNpemUtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgcGFkZGluZzogMC44ZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFt0eXBlPXJhZGlvXSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgY29sb3I6ICM3QjgwOTM7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgIzdCODA5MztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAwLjVlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVse1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiM3QjgwOTM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yYWRpby1ncm91cCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIH0gICAgICBcclxufVxyXG5cclxuICAvKiBCb29zdHJhcCBCdXR0b25zIFN0eWxpbmcgZm9yIEFkZCB0byBDYXJ0ICovXHJcblxyXG4uYnRuIHtcclxuICAgbWFyZ2luOiAxZW07XHJcbiAgfVxyXG5cclxuICBcclxuICAuYnRuLWRlZmF1bHQge1xyXG4gICAgd2lkdGg6IDUyJTtcclxuICAgIG1pbi1oZWlnaHQ6IDMzcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0U4OTgwNjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tZGVmYXVsdDpmb2N1cyB7XHJcbiAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4uZGVzY3JpcHRpb24tc21hbGwge1xyXG4gICAgLmRlcy10aXRsZXtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuIH1cclxuXHJcblxyXG4vKkNTUyBmb3IgbW9iaWxlIHZpZXcqL1xyXG5cclxuICAgXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuZGVza3RvcC12aWV3LC5pcGFkLXZpZXcge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1vYmlsZS1sYXlvdXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwIDFlbTtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0LXRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG1hcmdpbjogMCAwLjVlbTtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0LXBob3RvLW1vYmlsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzOTRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIzczOTA5QywgIzIwNDg1OSk7XHJcbiAgICB9XHJcbiAgICAuZGVzY3JpcHRpb24tc21hbGwge1xyXG4gICAgICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICB9XHJcbiAgICAucG9we1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9kdWN0LXByaWNlIHtcclxuICAgICAgICBtYXJnaW46IDAuNWVtIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDQ0JTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdC1zaXplIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA2MyU7XHJcbiAgICB9XHJcbiAgICAuY2FydCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTQlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypDU1MgZm9yIElQQUQgdmlldyovXHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXHJcbiAgICAuZGVza3RvcC12aWV3LC5tb2JpbGUtdmlldyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuaXBhZC1sYXlvdXQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLypDU1MgZm9yIERlc2t0b3AgVmlldyovXHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgICAubW9iaWxlLXZpZXcsLmlwYWQtdmlldyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "deaq":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-page/product-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageComponent", function() { return ProductPageComponent; });
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../product-details/product-details.component */ "ZQA1");
/* harmony import */ var src_app_mock_mock_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/mock/mock-data.json */ "LjYc");
var src_app_mock_mock_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/mock/mock-data.json */ "LjYc", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






function ProductPageComponent_div_5_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, data_r1.discount));
} }
const _c0 = function (a0) { return { "--isDiscount": a0 }; };
function ProductPageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "SHOW MORE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductPageComponent_div_5_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const data_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.openDialog(data_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "SHOW MORE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProductPageComponent_div_5_span_10_Template, 3, 3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("state", data_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, data_r1.discount !== 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 5, data_r1.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r1.discount !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.name);
} }
class ProductPageComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.items = src_app_mock_mock_data_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    onResize(event) {
        this.innerWidth = window.innerWidth;
        this.dialog.closeAll();
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
    }
    openDialog(data) {
        this.dialog.open(_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__["ProductDetailsComponent"], {
            data: data,
            width: this.innerWidth > 1024 ? '40.8%' : '90%',
            height: this.innerWidth > 1024 ? '500px' : '500px',
        });
    }
}
ProductPageComponent.ɵfac = function ProductPageComponent_Factory(t) { return new (t || ProductPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
ProductPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductPageComponent, selectors: [["app-product-page"]], hostBindings: function ProductPageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function ProductPageComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 1, consts: [[1, "sale", "d-sm-none"], [1, "container-fluid", "product-container"], [1, "row", "products"], ["class", "col-12 col-md-6 col-lg-4 card-container", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-lg-4", "card-container"], [1, "card"], ["routerLink", "/details", 1, "card-details", "d-sm-none", 3, "state"], [1, "card-details", "d-none", "d-md-block", 3, "click"], [1, "card-price"], [1, "price", 3, "ngClass"], ["class", "discount", 4, "ngIf"], [1, "product-title"], [1, "discount"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "SEASON SALE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductPageComponent_div_5_Template, 13, 9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".sale[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 110px;\n  display: flex;\n  justify-content: center;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  margin-bottom: 1em;\n  background: radial-gradient(51.17% 51.78% at 50% 51.17%, #0C99D6 0%, #068BC5 100%);\n}\n.sale[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.product-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.card-details[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n  color: white;\n  margin: auto;\n  padding: 0.3em 0.5em;\n  background: #7cbaea;\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%] {\n  width: 88%;\n  height: 90%;\n  margin: auto;\n  background-image: radial-gradient(#73909c, #204859);\n}\n.card-container[_ngcontent-%COMP%] {\n  width: 151px;\n  height: 295px;\n  padding: 0 !important;\n}\n.products[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.products[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0.4em;\n}\n.card-price[_ngcontent-%COMP%] {\n  background-color: #7cbaea;\n  margin-left: auto;\n  margin-bottom: 1em;\n}\n.card-price[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #ce2c52;\n  padding: 0.5em;\n}\n.card-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  padding-left: 0.5em;\n  font-weight: bold;\n}\n.--isDiscount[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n@media screen and (max-width: 480px) {\n  .product-container[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEseURBQUE7QUFFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUlBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrRkFBQTtBQUxGO0FBUEU7RUFDRSxZQUFBO0FBU0o7QUFLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUZKO0FBSUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFESjtBQUdFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbURBQUE7QUFBSjtBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQ0U7RUFDRSxZQUFBO0FBRUo7QUFESTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUdOO0FBQUU7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHSjtBQUZJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUlOO0FBRkk7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBSU47QUFERTtFQUNFLDZCQUFBO0FBSUo7QUFERSxzQkFBQTtBQUdGO0VBRUE7SUFDRSxrQkFBQTtFQUNBO0FBQ0YiLCJmaWxlIjoicHJvZHVjdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKkNvbW1vbiBDU1MgZm9yIG1vYmlsZSB2aWV3LCBJUEFEIHZpZXcgYW5kIERlc2t0b3AgVmlldyovXHJcblxyXG4uc2FsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBzcGFuIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoNTEuMTclIDUxLjc4JSBhdCA1MCUgNTEuMTclLCAjMEM5OUQ2IDAlLCAjMDY4QkM1IDEwMCUpO1xyXG59XHJcblxyXG4ucHJvZHVjdC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5jYXJkLWRldGFpbHMge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwLjNlbSAwLjVlbTtcclxuICAgIGJhY2tncm91bmQ6ICM3Y2JhZWE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiA4OCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCgjNzM5MDljLCAjMjA0ODU5KTtcclxuICB9XHJcbiAgLmNhcmQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxNTFweDtcclxuICAgIGhlaWdodDogMjk1cHg7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wcm9kdWN0cyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAwLjRlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNhcmQtcHJpY2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjYmFlYTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgLmRpc2NvdW50IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjY2UyYzUyO1xyXG4gICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIH1cclxuICAgIC5wcmljZSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMC41ZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxuICAuLS1pc0Rpc2NvdW50IHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gIH1cclxuICBcclxuICAvKkNTUyBmb3IgbW9iaWxlIHZpZXcqL1xyXG5cclxuICAgXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgXHJcbi5wcm9kdWN0LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product-page/product-page.component */ "deaq");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product-details/product-details.component */ "ZQA1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _components_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_1__["ProductPageComponent"]
    },
    {
        path: 'details',
        pathMatch: 'full',
        component: _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailsComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map