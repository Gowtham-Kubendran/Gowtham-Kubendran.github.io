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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");






var routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'products',
        component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"]
    },
    {
        path: "**",
        component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    },
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'SriBalagopalanJewelleryMart';
    }
    AppComponent.prototype.ngOnInit = function () {
        window.sessionStorage.setItem('lang', "EN");
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_topselling_topselling_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/topselling/topselling.component */ "./src/app/components/topselling/topselling.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_material_module_material_module_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/material-module/material-module.module */ "./src/app/material-module/material-module.module.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_topselling_topselling_component__WEBPACK_IMPORTED_MODULE_9__["TopsellingComponent"],
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__["DialogDataExampleDialog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _app_material_module_material_module_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModuleModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_components_products_products_component__WEBPACK_IMPORTED_MODULE_10__["DialogDataExampleDialog"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n \r\n    <div class=\"columl col-lg-6 col-md-6 col-sm-6 col-6\">\r\n      <div class=\"logo\">\r\n        SBJ MART\r\n      </div>\r\n      <div class=\"copyrights\">\r\n         Copyrights @ SBJ 2021 | Powered By NEW ERA\r\n      </div>\r\n    </div>\r\n    <div class=\"columr col-lg-6 col-md-6 col-sm-6 col-6\">\r\n      <div class=\"menulinks\">\r\n          <a class=\"\"  routerLink=\"/products\">{{ts.translate('products')}}</a>\r\n          <a href=\"#news\">{{ts.translate('collections')}}</a>\r\n          <a href=\"#contact\">{{ts.translate('goldschemes')}}</a>\r\n          <a href=\"#about\">{{ts.translate('aboutus')}}</a>\r\n          <a href=\"#about\">{{ts.translate('contactus')}}</a>\r\n      </div>\r\n      <div class=\"socialmodeia\">\r\n      </div>\r\n    </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  height: 200px;\n  margin: auto;\n  position: relative;\n  background-color: #101010;\n  color: #fff; }\n\n.columl {\n  padding: 4em 6em; }\n\n.columr {\n  padding: 5em 4em 0 0;\n  text-align: right; }\n\n.logo {\n  font-size: 36px;\n  padding-bottom: 1em; }\n\n.copyrights {\n  letter-spacing: 2px;\n  font-size: 10px; }\n\n@media screen and (max-width: 600px) {\n  .menulinks {\n    display: inline-grid; }\n  .logo {\n    font-size: 24px;\n    padding-bottom: 0px; }\n  .copyrights {\n    font-size: 7px; } }\n\n.menulinks a {\n  text-decoration: none;\n  color: #fff;\n  padding: 0 2em;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXERhdGFcXGdvd3RoYW1cXFNCSlxcc2JqLmdpdGh1Yi5pb1xcc2JqL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7O0FBRWY7RUFFSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFFSSxvQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBRUksZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUV2QjtFQUVJLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR25CO0VBQ0k7SUFFSSxvQkFBb0IsRUFBQTtFQUV4QjtJQUVJLGVBQWU7SUFDbkIsbUJBQW1CLEVBQUE7RUFFbkI7SUFHQSxjQUFjLEVBQUEsRUFDYjs7QUFXTDtFQUNJLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJcclxue1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uY29sdW1sXHJcbntcclxuICAgIHBhZGRpbmc6IDRlbSA2ZW07XHJcbn1cclxuLmNvbHVtclxyXG57XHJcbiAgICBwYWRkaW5nOjVlbSA0ZW0gMCAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmxvZ29cclxue1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxufVxyXG4uY29weXJpZ2h0c1xyXG57XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm1lbnVsaW5rc1xyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgfVxyXG4gICAgLmxvZ29cclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvcHlyaWdodHNcclxuICAgIHtcclxuICAgICBcclxuICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5tZW51bGlua3MgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMCAyZW07XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(ts) {
        this.ts = ts;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav scrolled\" id=\"myTopnav\">\r\n  <div class=\"logo\" id=\"logo\">\r\n    Logo\r\n  </div>\r\n<a id=\"products\" class=\"\" (click)=\"goToProducts('allproducts')\" >{{ts.translate('products')}}</a>\r\n<a href=\"#news\">{{ts.translate('collections')}}</a>\r\n<a href=\"#contact\">{{ts.translate('goldschemes')}}\r\n\r\n</a>\r\n\r\n<a href=\"#about\">{{ts.translate('aboutus')}}</a>\r\n<a href=\"#about\">{{ts.translate('contactus')}}</a>\r\n<div class=\"lang \">\r\n  <div class=\"phonelink\">9042222681 &nbsp;&nbsp;&nbsp;|</div>\r\n    <select name=\"language\"   (change)=\"getLang($event)\" id=\"language\">\r\n        <option value=\"EN\">EN</option>\r\n        <option value=\"TA\">TA</option>\r\n       \r\n       \r\n      </select>\r\n  </div>\r\n<a href=\"javascript:void(0);\" style=\"font-size:15px;\" class=\"icon\" (click)=\"myFunction()\">&#9776;</a>\r\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topnav {\n  overflow: hidden;\n  font-family: 'opB';\n  text-align: center;\n  position: fixed;\n  width: 100%;\n  transition: 0.3s all ease-in-out;\n  z-index: 2;\n  background: #fff;\n  background-color: #fff;\n  color: black !important;\n  line-height: 4em;\n  height: 7.3em;\n  box-shadow: 0 0 10px 1px #cfcfcf; }\n  .topnav .lang {\n    padding: 0 2em;\n    font-size: 12px;\n    font-family: 'opR'; }\n  .logo {\n  float: left; }\n  .topnav a, .topnav div {\n  display: inline-flex;\n  color: black;\n  border-bottom: 5px solid transparent;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n  transition: 0.3s all ease-in-out; }\n  #products {\n  margin-left: 14em; }\n  .topnav .icon {\n  display: none; }\n  .dropdown {\n  float: left;\n  overflow: hidden; }\n  .dropdown .dropbtn {\n  font-size: 17px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0; }\n  .dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n  .lang {\n  float: right;\n  padding: 0 2em; }\n  .dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left; }\n  .phonelink {\n  font-size: 12px !important;\n  padding-top: 1.4em !important; }\n  .topnav a:hover, .dropdown:hover .dropbtn {\n  border-bottom: 5px solid #CC9F08;\n  color: #CC9F08;\n  cursor: pointer; }\n  .dropdown-content a:hover {\n  background-color: #ddd;\n  color: black; }\n  .dropdown:hover .dropdown-content {\n  display: block; }\n  @media screen and (max-width: 600px) {\n  .topnav a, .dropdown .dropbtn {\n    display: none; }\n  .topnav > .lang {\n    padding: 0; }\n  .topnav > .lang > .phonelink {\n    display: none; }\n  .topnav > .lang > #language {\n    position: absolute;\n    top: 2.2em;\n    z-index: 17;\n    right: 3em; }\n  .topnav a.icon {\n    float: right;\n    display: block; }\n  .homebody > .talktous {\n    font-size: 12px; } }\n  @media screen and (max-width: 600px) {\n  .topnav.responsive {\n    position: fixed; }\n  .topnav.responsive .icon {\n    position: absolute;\n    right: 0;\n    top: 0;\n    transition: 0.3s all ease-in-out; }\n  .topnav a.icon {\n    display: block;\n    position: absolute;\n    right: 0; }\n  .topnav.responsive a {\n    float: none;\n    display: block;\n    text-align: left;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown {\n    float: none;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown-content {\n    position: relative;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown .dropbtn {\n    display: block;\n    width: 100%;\n    text-align: left;\n    transition: 0.3s all ease-in-out; }\n  #products {\n    margin-left: 0em;\n    margin-top: 3em; } }\n  #language {\n  background: transparent;\n  border: 0;\n  color: black; }\n  #language:focus {\n  outline: 0; }\n  #language option {\n  background-color: transparent;\n  border: 5px solid #fff;\n  border-radius: 5em;\n  color: grey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXERhdGFcXGdvd3RoYW1cXFNCSlxcc2JqLmdpdGh1Yi5pb1xcc2JqL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUdoQixrQkFBa0I7RUFDbkIsa0JBQWtCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBR1gsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFHVixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHVCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdDQUFnQyxFQUFBO0VBbkJsQztJQXVCSSxjQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQixFQUFBO0VBR3BCO0VBRUUsV0FBVSxFQUFBO0VBS1o7RUFDRSxvQkFBb0I7RUFDcEIsWUFBVztFQUNaLG9DQUFvQztFQUNuQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQ0FBK0IsRUFBQTtFQUVqQztFQUVFLGlCQUFrQixFQUFBO0VBd0JwQjtFQUNFLGFBQWEsRUFBQTtFQUdmO0VBQ0UsV0FBVztFQUNYLGdCQUFnQixFQUFBO0VBR2xCO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLFNBQVMsRUFBQTtFQUdYO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLCtDQUE0QztFQUM1QyxVQUFVLEVBQUE7RUFFWjtFQUNFLFlBQVk7RUFDWixjQUFjLEVBQUE7RUFHaEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQixFQUFBO0VBRWxCO0VBQ0UsMEJBQTBCO0VBQzFCLDZCQUE2QixFQUFBO0VBRy9CO0VBQ0UsZ0NBQStCO0VBQy9CLGNBQWM7RUFDZCxlQUFlLEVBQUE7RUFHakI7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWSxFQUFBO0VBR2Q7RUFDRSxjQUFjLEVBQUE7RUFHaEI7RUFDRTtJQUNFLGFBQWEsRUFBQTtFQUdmO0lBRUUsVUFBUyxFQUFBO0VBR1g7SUFDRSxhQUFhLEVBQUE7RUFFZjtJQUVFLGtCQUFrQjtJQUNwQixVQUFVO0lBQ1osV0FBVztJQUNYLFVBQVUsRUFBQTtFQUVSO0lBQ0UsWUFBWTtJQUNaLGNBQWMsRUFBQTtFQUVoQjtJQUVFLGVBQWUsRUFBQSxFQUNoQjtFQU1IO0VBQ0U7SUFBb0IsZUFBZSxFQUFBO0VBQ25DO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sZ0NBQWdDLEVBQUE7RUFFbEM7SUFFRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVEsRUFBQTtFQUVWO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0NBQWdDLEVBQUE7RUFFbEM7SUFBOEIsV0FBVztJQUFHLGdDQUFnQyxFQUFBO0VBQzVFO0lBQXNDLGtCQUFrQjtJQUFHLGdDQUFnQyxFQUFBO0VBQzNGO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0NBQWdDLEVBQUE7RUFHbEM7SUFFRSxnQkFBZ0I7SUFDaEIsZUFBYyxFQUFBLEVBQ2Y7RUFHTDtFQUNDLHVCQUF1QjtFQUN4QixTQUFTO0VBQ1QsWUFBWSxFQUFBO0VBRVo7RUFDRSxVQUFTLEVBQUE7RUFHWDtFQUVFLDZCQUE2QjtFQUM3QixzQkFBcUI7RUFDckIsa0JBQWlCO0VBQ2pCLFdBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BuYXYge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgXHJcbiBcclxuICBmb250LWZhbWlseTogJ29wQic7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gXHJcbiAgXHJcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgei1pbmRleDogMjtcclxuXHJcblxyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiA0ZW07XHJcbiAgaGVpZ2h0OiA3LjNlbTtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggI2NmY2ZjZjtcclxuXHJcblxyXG4gIC5sYW5ne1xyXG4gICAgcGFkZGluZzowIDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BSJztcclxuICB9XHJcbiAgfVxyXG4gIC5sb2dvXHJcbiAge1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICB9XHJcbiAgLnRvcG5hdiBhe1xyXG5cclxuICB9XHJcbiAgLnRvcG5hdiBhICwudG9wbmF2IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB0cmFuc2l0aW9uOjAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAjcHJvZHVjdHNcclxuICB7XHJcbiAgICBtYXJnaW4tbGVmdDogIDE0ZW07XHJcbiAgfVxyXG4gIC8vIC50b3BuYXYuc2Nyb2xsZWRcclxuICAvLyB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgLy8gY29sb3I6YmxhY2sgIWltcG9ydGFudDtcclxuICAvLyBsaW5lLWhlaWdodDogNGVtO1xyXG4gIC8vIGhlaWdodDogNy4zZW07XHJcbiAgLy8gYm94LXNoYWRvdzogMCAwIDEwcHggMXB4ICNjZmNmY2Y7XHJcbiAgLy8gICBhXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIGNvbG9yOmJsYWNrO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgZGl2ICwgZGl2ICAjbGFuZ3VhZ2VcclxuICAvLyAgIHtcclxuICAvLyAgICAgY29sb3I6YmxhY2s7XHJcbiAgLy8gICB9XHJcbiAgLy8gICAubGFuZ3tcclxuICAvLyAgICAgcGFkZGluZzowIDJlbTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbiAgXHJcbiAgXHJcbiAgLnRvcG5hdiAuaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24gLmRyb3BidG4ge1xyXG4gICAgZm9udC1zaXplOiAxN3B4OyAgICBcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgLmxhbmd7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAwIDJlbTtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5waG9uZWxpbmt7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAxLjRlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IGE6aG92ZXIsIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XHJcbiAgICBib3JkZXItYm90dG9tOjVweCBzb2xpZCAjQ0M5RjA4O1xyXG4gICAgY29sb3I6ICNDQzlGMDg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnRvcG5hdiBhLCAuZHJvcGRvd24gLmRyb3BidG4gIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAudG9wbmF2ID4gLmxhbmcge1xyXG4gICAgICBcclxuICAgICAgcGFkZGluZzowO1xyXG5cclxuICAgIH1cclxuICAgIC50b3BuYXYgPiAubGFuZyA+IC5waG9uZWxpbmt7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudG9wbmF2ID4gLmxhbmcgPiAjbGFuZ3VhZ2VcclxuICAgIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyLjJlbTtcclxuICB6LWluZGV4OiAxNztcclxuICByaWdodDogM2VtO1xyXG4gICAgfVxyXG4gICAgLnRvcG5hdiBhLmljb24ge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmhvbWVib2R5ID4gLnRhbGt0b3VzXHJcbiAgICB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgfVxyXG5cclxuIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAudG9wbmF2LnJlc3BvbnNpdmUge3Bvc2l0aW9uOiBmaXhlZDt9XHJcbiAgICAudG9wbmF2LnJlc3BvbnNpdmUgLmljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgLnRvcG5hdiBhLmljb25cclxuICAgIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAudG9wbmF2LnJlc3BvbnNpdmUgYSB7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICAudG9wbmF2LnJlc3BvbnNpdmUgLmRyb3Bkb3duIHtmbG9hdDogbm9uZTsgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O31cclxuICAgIC50b3BuYXYucmVzcG9uc2l2ZSAuZHJvcGRvd24tY29udGVudCB7cG9zaXRpb246IHJlbGF0aXZlOyAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7fVxyXG4gICAgLnRvcG5hdi5yZXNwb25zaXZlIC5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgI3Byb2R1Y3RzXHJcbiAgICB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwZW07XHJcbiAgICAgIG1hcmdpbi10b3A6M2VtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiNsYW5ndWFnZVxyXG57YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbmJvcmRlcjogMDtcclxuY29sb3I6IGJsYWNrO1xyXG59XHJcbiNsYW5ndWFnZTpmb2N1c3tcclxuICBvdXRsaW5lOjA7XHJcbn1cclxuXHJcbiNsYW5ndWFnZSBvcHRpb25cclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjo1cHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOjVlbTtcclxuICBjb2xvcjpncmV5O1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(ts, sh, router) {
        this.ts = ts;
        this.sh = sh;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.getLang = function (data) {
        this.ts.updateComp1Val(data.target.value);
        window.sessionStorage.setItem('lang', data.target.value);
    };
    HeaderComponent.prototype.goToProducts = function (data) {
        this.sh.setValue(data);
        this.router.navigate(['products']);
    };
    HeaderComponent.prototype.myFunction = function () {
        var x = document.getElementById("myTopnav");
        var logo = document.getElementById("logo");
        if (x.className === "topnav") {
            x.className += " responsive";
            x.style.height = "auto";
            logo.style.display = "none";
        }
        else {
            x.className = "topnav";
            x.style.height = "7em";
            logo.style.display = "block";
        }
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\">\r\n \r\n  <div class=\"todaysrate\">\r\n    \r\n    <div class=\"circle\">{{ts.translate('todaysrate')}}\r\n        <div class=\"goldrate\">\r\n            <div class=\"goldratehead\">\r\n                {{ts.translate('todaysrate')}}\r\n            </div>\r\n            <div class=\"goldbody\">\r\n             <div> <span class=\"bold\">Gold 1gm</span> - RS 4800</div>\r\n             <div> <span class=\"bold\">Silver 1gm</span> - RS 80</div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    <div class=\"bar\"></div>\r\n    \r\n\r\n  </div>\r\n\r\n  <div class=\"topnav\" id=\"myTopnav\">\r\n      <div class=\"logo\" id=\"logo\">\r\n        Logo\r\n      </div>\r\n    <a id=\"products\" class=\"\" (click)=\"goToProducts('allproducts')\" >{{ts.translate('products')}}</a>\r\n    <a href=\"#news\">{{ts.translate('collections')}}</a>\r\n    <a href=\"#contact\">{{ts.translate('goldschemes')}}\r\n\r\n    </a>\r\n    \r\n    <a href=\"#about\">{{ts.translate('aboutus')}}</a>\r\n    <a href=\"#about\">{{ts.translate('contactus')}}</a>\r\n    <div class=\"lang \">\r\n      <div class=\"phonelink\" style=\"font-size: 12px;font-family: 'opR';padding-top:1.4em;\">9042222681 &nbsp;&nbsp;&nbsp;|</div>\r\n        <select name=\"language\"   (change)=\"getLang($event)\" id=\"language\">\r\n            <option value=\"EN\">EN</option>\r\n            <option value=\"TA\">TA</option>\r\n           \r\n           \r\n          </select>\r\n      </div>\r\n    <a href=\"javascript:void(0);\" style=\"font-size:15px;\" class=\"icon\" (click)=\"myFunction()\">&#9776;</a>\r\n  </div>\r\n\r\n  \r\n<div class=\"homebody\">\r\n\r\n  <div id=\"carouselExampleSlidesOnly herocarosol\" class=\"carousel slide\" data-interval=\"1000\" pause=\"true\" >\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item .item active\">\r\n        <img class=\"d-block w-100 carosolimg img-fluid\" src=\"../../../assets/images/homehero1.jpg\" alt=\"First slide\">\r\n      </div>\r\n      <div class=\"carousel-item .item\">\r\n        <img class=\"d-block w-100 carosolimg img-fluid\" src=\"../../../assets/images/homehero1.jpg\" alt=\"Second slide\">\r\n      </div>\r\n      <div class=\"carousel-item .item\">\r\n        <img class=\"d-block w-100 carosolimg img-fluid\" src=\"../../../assets/images/homehero1.jpg\" alt=\"Third slide\">\r\n      </div>\r\n    </div>\r\n    <!-- <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a> -->\r\n    <div class=\"downarrowdiv\">\r\n        <span class=\"material-icons downarrow\" (click)=\"goTOProducts(products);\">\r\n            expand_more\r\n            </span>\r\n      <img src=\"\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"bodyView\" #products data-aos=\"fade-up\" data-aos-once=\"true\">\r\n    <div class=\"bodyHeading\">\r\n        {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('products') |  uppercase}}</span>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-6\">\r\n            <div class=\"imageContainer\">\r\n                <img class=\"collectionGoldImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                <div class=\"bottom-left\"> {{ts.translate('gold') | titlecase }}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-6\">\r\n            <div class=\"imageContainer\">\r\n                <img class=\"collectionGoldImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                <div class=\"bottom-left\"> {{ts.translate('diamond') | titlecase }}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-12\">\r\n            <div class=\"imageContainer\">\r\n                <img class=\"collectionGoldImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                <div class=\"bottom-left\"> {{ts.translate('silver') | titlecase }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bodyView\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n    <div class=\"bodyHeading\">\r\n        {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('collections') |  uppercase}}</span>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-12 weddingcoll\" >\r\n          <div class=\"imageContainer\">\r\n              <img class=\"collectionGoldImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n              <div class=\"bottom-left\"> {{ts.translate('wedding') | titlecase }}</div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-6\">\r\n          <div class=\"row\">\r\n              <div class=\"imageContainer\">\r\n                  <img class=\"collectionImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                  <div class=\"bottom-left lefter\">{{ts.translate('men') | titlecase}}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"imageContainer\">\r\n                    <img class=\"collectionImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                    <div class=\"bottom-left lefter\">{{ts.translate('women') | titlecase}}</div>\r\n                </div>\r\n             </div>\r\n         \r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-6\">\r\n          <div class=\"row\">\r\n              <div class=\"imageContainer\">\r\n                  <img class=\"collectionImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                  <div class=\"bottom-left lefter\">{{ts.translate('kids')| titlecase }}</div>\r\n              </div>\r\n            </div>\r\n          <div class=\"row\">\r\n             <div class=\"imageContainer\">\r\n                 <img class=\"collectionImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                 <div class=\"bottom-left lefter\">{{ts.translate('gifts') | titlecase}}</div>\r\n             </div>\r\n           </div>\r\n       </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n<div class=\"bodyView\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n  <div class=\"bodyHeading\">\r\n    {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('promises') |  uppercase}}</span>\r\n  </div>\r\n  <div class=\"row marginTop\">\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer\">\r\n            <div class=\"promiseBody\">\r\n              Certified Pure Gold\r\n            </div>\r\n            <div class=\"numbering\">1</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer\">\r\n            <div class=\"promiseBody\">\r\n              All Jewels are brand new\r\n            </div>\r\n            <div class=\"numbering\">2</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer\">\r\n            <div class=\"promiseBody\">\r\n              Transparency in pricing\r\n            </div>\r\n            <div class=\"numbering\">3</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer\">\r\n            <div class=\"promiseBody\">\r\n              Secure Gold Scheme\r\n            </div>\r\n            <div class=\"numbering\">4</div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"bodyView\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n  <div class=\"bodyHeading\">\r\n    {{ts.translate('top') |  uppercase}} <span class=\"bold\">{{ts.translate('sellingjewels') |  uppercase}}</span>\r\n  </div>\r\n<app-topselling></app-topselling>\r\n</div>\r\n<div class=\"bodyView\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n  <div class=\"bodyHeading\">\r\n      {{ts.translate('whatpeople') |  uppercase}} <span class=\"bold\">{{ts.translate('talkaboutus') |  uppercase}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\r\n      <div class=\"userpic\">\r\n        <img class=\"userimg\" src=\"../../../assets/images/homehero1.jpg\" />\r\n        <div class=\"username\">\r\n          <div class=\"name\">User1</div>\r\n          <div class=\"designation\">Buisness Women</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"usercomment\">\r\n        <div>\r\n          <img src=\"../../../assets/images/DoubleQuotes.svg\" class=\"doublequotes\" />\r\n        </div>\r\n        <div class=\"comments\">\r\n            Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: \r\n            a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, \r\n            though, the unity and coherence of ideas among sentences is what constitutes a paragraph.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\r\n        <div class=\"userpic\">\r\n          <img class=\"userimg\" src=\"../../../assets/images/homehero1.jpg\" />\r\n          <div class=\"username\">\r\n            <div class=\"name\">User2</div>\r\n            <div class=\"designation\">Buisness Women</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"usercomment\">\r\n          <div>\r\n            <img src=\"../../../assets/images/DoubleQuotes.svg\" class=\"doublequotes\" />\r\n          </div>\r\n          <div class=\"comments\">\r\n              Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: \r\n              a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, \r\n              though, the unity and coherence of ideas among sentences is what constitutes a paragraph.\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"talktous\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n  <div class=\"col-lg-9 col-md-9 col-sm-12 col-12\">\r\n    <div class=\"talktouspara\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit d do eiusmod tempor sed do eiusmod tempor incididunt ut labore et dolore.\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-3 col-md-3 col-sm-12 col-12\">\r\n    <button class=\"talktousButton\">\r\n      {{ts.translate('talktous')}}\r\n    </button>\r\n      \r\n  </div>\r\n</div>\r\n<app-footer data-aos=\"fade-up\" data-aos-once=\"true\"></app-footer>\r\n\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css\");\n.wrapper {\n  overflow-y: hidden;\n  position: relative; }\n.carousel {\n  height: 100vh; }\n.herocarosol {\n  position: relative; }\n.carousel-inner {\n  height: 100%; }\n.carousel-item, .item, .carousel-item.active {\n  height: 100%; }\n.downarrow {\n  color: white;\n  position: absolute;\n  /* top: 5em; */\n  font-size: 5em;\n  bottom: 0;\n  left: 50%;\n  -webkit-animation: mymove 1s infinite;\n          animation: mymove 1s infinite;\n  cursor: pointer; }\n@-webkit-keyframes mymove {\n  from {\n    opacity: 0;\n    bottom: 0.5em; }\n  to {\n    opacity: 1;\n    bottom: 0; } }\n@keyframes mymove {\n  from {\n    opacity: 0;\n    bottom: 0.5em; }\n  to {\n    opacity: 1;\n    bottom: 0; } }\n.todaysrate {\n  position: fixed;\n  display: inline-flex;\n  top: 70%;\n  right: 0;\n  text-align: right;\n  z-index: 5;\n  cursor: pointer; }\n.bar {\n  height: 3px;\n  width: 3em;\n  margin-top: 3.5em;\n  background-color: #A57F00; }\n.circle {\n  height: 6em;\n  width: 6em;\n  padding-top: 18px;\n  font-size: 12px;\n  padding-left: -10px;\n  text-align: center;\n  overflow-wrap: break-word;\n  white-space: break-spaces;\n  border-radius: 50%;\n  background-color: #A57F00;\n  color: #fff; }\n.circle:hover .goldrate {\n  opacity: 1;\n  transform: scale(1);\n  color: black; }\n.goldrate {\n  width: 15em;\n  font-size: 12px;\n  position: absolute;\n  top: -8em;\n  right: 2em;\n  text-align: left;\n  box-shadow: 0 0 10px 1px grey;\n  background-color: #fff;\n  border-radius: 5px;\n  opacity: 0;\n  transform: scale(1.2);\n  transition: 0.3s all ease-in-out; }\n.goldratehead {\n  background-color: #A57F00;\n  color: #fff;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  padding: 8px; }\n.goldbody {\n  padding: 8px; }\n.topnav {\n  overflow: hidden;\n  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #272727 100%);\n  color: #fff;\n  font-family: 'opB';\n  text-align: center;\n  position: fixed;\n  width: 100%;\n  line-height: 4em;\n  transition: 0.3s all ease-in-out;\n  z-index: 2; }\n.topnav .lang {\n    padding: 0 2em;\n    font-size: 12px;\n    font-family: 'opR'; }\n.logo {\n  float: left; }\n.topnav a, .topnav div {\n  display: inline-flex;\n  color: #f2f2f2;\n  border-bottom: 5px solid transparent;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n  transition: 0.3s all ease-in-out; }\n#products {\n  margin-left: 14em; }\n.topnav.scrolled {\n  background: #fff;\n  background-color: #fff;\n  color: #444444 !important;\n  line-height: 4em;\n  height: 7.3em;\n  box-shadow: 0 0 10px 1px #cfcfcf; }\n.topnav.scrolled a {\n    color: black; }\n.topnav.scrolled div, .topnav.scrolled div #language {\n    color: black; }\n.topnav.scrolled .lang {\n    padding: 0 2em; }\n.topnav .icon {\n  display: none; }\n.dropdown {\n  float: left;\n  overflow: hidden; }\n.dropdown .dropbtn {\n  font-size: 17px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0; }\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n.lang {\n  float: right;\n  padding: 0 2em; }\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left; }\n.topnav a:hover, .dropdown:hover .dropbtn {\n  border-bottom: 5px solid #CC9F08;\n  color: #CC9F08;\n  cursor: pointer; }\n.dropdown-content a:hover {\n  background-color: #ddd;\n  color: black; }\n.dropdown:hover .dropdown-content {\n  display: block; }\n#language {\n  background: transparent;\n  border: 0;\n  color: white; }\n#language:focus {\n  outline: 0; }\n#language option {\n  background-color: transparent;\n  border: 5px solid #fff;\n  border-radius: 5em;\n  color: grey; }\n.carosolimg {\n  transition: 0.3s all ease-in-out;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.bodyView {\n  padding: 2em 10em;\n  width: 100%; }\n.bodyHeading {\n  padding: 0 0.5em;\n  font-size: 26px;\n  margin: 2em 0;\n  border-left: 8px solid #CC9F08; }\n.bold {\n  font-family: opEB; }\n.imageContainer {\n  position: relative;\n  color: #fff;\n  padding: 2em 2em 1em 1em; }\n.phonelink {\n  font-size: 12px;\n  padding-top: 1.4em; }\n.collectionGoldImage {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 530px;\n  border-radius: 10px;\n  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); }\n.collectionImage {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 250px;\n  border-radius: 10px;\n  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); }\n.weddingcoll {\n  padding: 0; }\n.bottom-left {\n  position: absolute;\n  bottom: 1em;\n  left: 1em;\n  font-family: 'opB';\n  font-size: 2em; }\n.collectionImage:hover, .collectionGoldImage:hover {\n  transform: translate(0, -8px);\n  box-shadow: 0 40px 40px rgba(0, 0, 0, 0.2); }\n.PromiseContainer {\n  background-color: #FFFBEF;\n  height: 144px;\n  text-align: center;\n  width: 100%;\n  padding: 4em;\n  border-radius: 5px;\n  position: relative; }\n.promiseBody {\n  font-family: opB;\n  font-size: 18px; }\n.numbering {\n  position: absolute;\n  top: -1em;\n  left: 2em;\n  width: 24px;\n  height: 24px;\n  background-color: #333333;\n  color: #fff;\n  font-size: 16px;\n  font-family: 'opEB';\n  border-radius: 5px; }\n.marginTop {\n  margin-top: 8em; }\n.userpic {\n  display: inline-flex;\n  height: 100px;\n  position: relative; }\n.userimg {\n  width: 100px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.doublequotes {\n  width: 30px;\n  height: 30px;\n  margin: 1em 0; }\n.username {\n  margin: auto;\n  padding: 0 2em; }\n.name {\n  color: #444444;\n  font-size: 18px; }\n.designation {\n  color: #999999;\n  font-size: 14px; }\n.comments {\n  font-size: 16px;\n  color: #777777; }\n.usercomment {\n  margin: 3em 0; }\n.talktous {\n  background-color: #F6F7F7;\n  color: #666666;\n  height: 146px;\n  margin: auto;\n  padding: 2em 1em;\n  font-size: 20px; }\n.talktousButton {\n  background-color: #CC9F08;\n  color: #fff;\n  border-radius: 5px;\n  margin: 1em;\n  float: right;\n  border: 0;\n  padding: 4px 16px; }\n@media screen and (max-width: 600px) {\n  .topnav a, .dropdown .dropbtn {\n    display: none; }\n  .topnav > .lang {\n    padding: 0; }\n  .topnav > .lang > .phonelink {\n    display: none; }\n  .topnav > .lang > #language {\n    position: absolute;\n    top: 2.2em;\n    z-index: 17;\n    right: 3em; }\n  .topnav a.icon {\n    float: right;\n    display: block; }\n  .homebody > .talktous {\n    font-size: 12px; }\n  .imageContainer {\n    padding: 2em 0em; }\n  .collectionGoldImage {\n    height: 20vh; }\n  .collectionImage {\n    padding: 1em;\n    border-radius: 25px;\n    height: 20em; }\n  .lefter {\n    bottom: 2em;\n    left: 2em; } }\n@media screen and (max-width: 600px) {\n  .topnav.responsive {\n    position: fixed; }\n  .topnav.responsive .icon {\n    position: absolute;\n    right: 0;\n    top: 0;\n    transition: 0.3s all ease-in-out; }\n  .topnav a.icon {\n    display: block;\n    position: absolute;\n    right: 0; }\n  .topnav.responsive a {\n    float: none;\n    display: block;\n    text-align: left;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown {\n    float: none;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown-content {\n    position: relative;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown .dropbtn {\n    display: block;\n    width: 100%;\n    text-align: left;\n    transition: 0.3s all ease-in-out; }\n  #products {\n    margin-left: 0em;\n    margin-top: 3em; }\n  .PromiseContainer {\n    margin-bottom: 4em; }\n  .bodyView {\n    padding: 2em 2em;\n    width: 100%; }\n  .weddingcoll {\n    padding: 0 1em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxEYXRhXFxnb3d0aGFtXFxTQkpcXHNiai5naXRodWIuaW9cXHNiai9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5RkFBWTtBQUVaO0VBRUUsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBRXBCO0VBRUEsYUFBWSxFQUFBO0FBR1o7RUFFRSxrQkFBa0IsRUFBQTtBQUVwQjtFQUVFLFlBQVcsRUFBQTtBQUViO0VBQ0UsWUFBVyxFQUFBO0FBSWI7RUFFSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQUE7RUFDQSxjQUFjO0VBQ2QsU0FBUztFQUNULFNBQVM7RUFDVCxxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLGVBQWUsRUFBQTtBQUdqQjtFQUNFO0lBQU0sVUFBVTtJQUNkLGFBQVksRUFBQTtFQUNkO0lBQUksVUFBVTtJQUNaLFNBQVEsRUFBQSxFQUFBO0FBSlo7RUFDRTtJQUFNLFVBQVU7SUFDZCxhQUFZLEVBQUE7RUFDZDtJQUFJLFVBQVU7SUFDWixTQUFRLEVBQUEsRUFBQTtBQUVkO0VBRUUsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixRQUFRO0VBQ1IsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsZUFBZSxFQUFBO0FBRWpCO0VBRUUsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIseUJBQXlCLEVBQUE7QUFFM0I7RUFFRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVyxFQUFBO0FBRWI7RUFHSSxVQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFlBQVcsRUFBQTtBQUdmO0VBRUUsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN4QixrQkFBaUI7RUFDakIsVUFBUztFQUNULHFCQUFxQjtFQUNyQixnQ0FBZ0MsRUFBQTtBQUVoQztFQUVFLHlCQUF5QjtFQUN6QixXQUFXO0VBRVgsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixZQUFZLEVBQUE7QUFHZDtFQUVFLFlBQVcsRUFBQTtBQUViO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBFQUEwRTtFQUMxRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ25CLGtCQUFrQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUVoQixnQ0FBZ0M7RUFDaEMsVUFBVSxFQUFBO0FBWFo7SUFhSSxjQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQixFQUFBO0FBR3BCO0VBRUUsV0FBVSxFQUFBO0FBS1o7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNmLG9DQUFvQztFQUNuQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQ0FBK0IsRUFBQTtBQUVqQztFQUVFLGlCQUFrQixFQUFBO0FBRXBCO0VBRUUsZ0JBQWdCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQ0FBZ0MsRUFBQTtBQVBoQztJQVVJLFlBQVcsRUFBQTtBQVZmO0lBY0ksWUFBVyxFQUFBO0FBZGY7SUFpQkksY0FBYSxFQUFBO0FBS2pCO0VBQ0UsYUFBYSxFQUFBO0FBR2Y7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsU0FBUyxFQUFBO0FBR1g7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsK0NBQTRDO0VBQzVDLFVBQVUsRUFBQTtBQUVaO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBQTtBQUdoQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxnQ0FBK0I7RUFDL0IsY0FBYztFQUNkLGVBQWUsRUFBQTtBQUdqQjtFQUNFLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7QUFHZDtFQUNFLGNBQWMsRUFBQTtBQU1sQjtFQUNDLHVCQUF1QjtFQUN4QixTQUFTO0VBQ1QsWUFBWSxFQUFBO0FBRVo7RUFDRSxVQUFTLEVBQUE7QUFHWDtFQUVFLDZCQUE2QjtFQUM3QixzQkFBcUI7RUFDckIsa0JBQWlCO0VBQ2pCLFdBQVUsRUFBQTtBQU9aO0VBRUUsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7QUFJakI7RUFFRSxpQkFBZ0I7RUFDaEIsV0FBVSxFQUFBO0FBR1o7RUFFRSxnQkFBZTtFQUNmLGVBQWU7RUFDZixhQUFZO0VBQ1osOEJBQTZCLEVBQUE7QUFHL0I7RUFFRSxpQkFBaUIsRUFBQTtBQUduQjtFQUVFLGtCQUFrQjtFQUNsQixXQUFVO0VBQ1Ysd0JBQXdCLEVBQUE7QUFFMUI7RUFFRSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7QUFHdEI7RUFFRSxXQUFXO0VBQ1Qsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBR3RCLHVEQUF1RCxFQUFBO0FBR3hEO0VBRUUsV0FBVztFQUNULG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUd0Qix1REFBdUQsRUFBQTtBQUV4RDtFQUVJLFVBQVUsRUFBQTtBQUVaO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtBQUloQjtFQUtFLDZCQUE2QjtFQUM3QiwwQ0FBMEMsRUFBQTtBQUc1QztFQUVFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBR3BCO0VBRUUsZ0JBQWU7RUFDZixlQUFjLEVBQUE7QUFJaEI7RUFFRSxrQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFNBQVE7RUFDUixXQUFVO0VBQ1YsWUFBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFVO0VBQ1YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTtBQUdwQjtFQUVFLGVBQWUsRUFBQTtBQUVqQjtFQUVFLG9CQUFvQjtFQUNwQixhQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFFcEI7RUFFRSxZQUFXO0VBQ1gsb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBO0FBRW5CO0VBRUUsV0FBVTtFQUNWLFlBQVc7RUFDWCxhQUFZLEVBQUE7QUFFZDtFQUVFLFlBQVk7RUFDWixjQUFjLEVBQUE7QUFFaEI7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFBO0FBRWpCO0VBRUUsY0FBYztFQUNkLGVBQWUsRUFBQTtBQUVqQjtFQUVFLGVBQWU7RUFDZixjQUFjLEVBQUE7QUFFaEI7RUFFRSxhQUFhLEVBQUE7QUFFZjtFQUVFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBRUUseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUJBQWlCLEVBQUE7QUFHckI7RUFDRTtJQUNFLGFBQWEsRUFBQTtFQUdmO0lBRUUsVUFBUyxFQUFBO0VBRVg7SUFDRSxhQUFhLEVBQUE7RUFFZjtJQUVFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1osV0FBVztJQUNYLFVBQVUsRUFBQTtFQUVWO0lBQ0UsWUFBWTtJQUNaLGNBQWMsRUFBQTtFQUVoQjtJQUVFLGVBQWUsRUFBQTtFQUdqQjtJQUVFLGdCQUFnQixFQUFBO0VBRWxCO0lBRUUsWUFBWSxFQUFBO0VBRWY7SUFFRSxZQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVcsRUFBQTtFQUViO0lBRUUsV0FBVTtJQUNWLFNBQVEsRUFBQSxFQUNUO0FBS0Y7RUFDRTtJQUFvQixlQUFlLEVBQUE7RUFDbkM7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixnQ0FBZ0MsRUFBQTtFQUVsQztJQUVFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUSxFQUFBO0VBRVY7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQ0FBZ0MsRUFBQTtFQUVsQztJQUE4QixXQUFXO0lBQUcsZ0NBQWdDLEVBQUE7RUFDNUU7SUFBc0Msa0JBQWtCO0lBQUcsZ0NBQWdDLEVBQUE7RUFDM0Y7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQ0FBZ0MsRUFBQTtFQUdsQztJQUVFLGdCQUFnQjtJQUNoQixlQUFjLEVBQUE7RUFFaEI7SUFFRSxrQkFBaUIsRUFBQTtFQUVuQjtJQUVFLGdCQUFlO0lBQ2YsV0FBVSxFQUFBO0VBR1o7SUFFRSxjQUFjLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2Nkbi5tYXRlcmlhbGRlc2lnbmljb25zLmNvbS81LjQuNTUvY3NzL21hdGVyaWFsZGVzaWduaWNvbnMubWluLmNzc1wiKTtcclxuXHJcbi53cmFwcGVyXHJcbntcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jYXJvdXNlbFxyXG57XHJcbmhlaWdodDoxMDB2aDtcclxuICAgIFxyXG59XHJcbi5oZXJvY2Fyb3NvbFxyXG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jYXJvdXNlbC1pbm5lclxyXG57XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuLmNhcm91c2VsLWl0ZW0gLCAuaXRlbSAsIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZXtcclxuICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuXHJcbi5kb3duYXJyb3dcclxue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLyogdG9wOiA1ZW07ICovXHJcbiAgICBmb250LXNpemU6IDVlbTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGFuaW1hdGlvbjogbXltb3ZlIDFzIGluZmluaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIG15bW92ZSB7XHJcbiAgICBmcm9tIHtvcGFjaXR5OiAwO1xyXG4gICAgICBib3R0b206MC41ZW07fVxyXG4gICAgdG8ge29wYWNpdHk6IDE7XHJcbiAgICAgIGJvdHRvbTowO31cclxuICB9XHJcbi50b2RheXNyYXRlXHJcbntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgdG9wOiA3MCU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgei1pbmRleDogNTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJhclxyXG57XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgd2lkdGg6IDNlbTtcclxuICBtYXJnaW4tdG9wOiAzLjVlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTU3RjAwO1xyXG59XHJcbi5jaXJjbGVcclxue1xyXG4gIGhlaWdodDogNmVtO1xyXG4gIHdpZHRoOiA2ZW07XHJcbiAgcGFkZGluZy10b3A6IDE4cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogLTEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E1N0YwMDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uY2lyY2xlOmhvdmVyIHtcclxuIC5nb2xkcmF0ZXtcclxuXHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiB9XHJcbn1cclxuLmdvbGRyYXRlXHJcbntcclxuICB3aWR0aDogMTVlbTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLThlbTtcclxuICByaWdodDogMmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IGdyZXk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbm9wYWNpdHk6MDtcclxudHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG50cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG4uZ29sZHJhdGVoZWFkXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTU3RjAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcblxyXG59XHJcbi5nb2xkYm9keVxyXG57XHJcbiAgcGFkZGluZzo4cHg7XHJcbn1cclxuLnRvcG5hdiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgIzI3MjcyNyAxMDAlKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogJ29wQic7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxpbmUtaGVpZ2h0OiA0ZW07XHJcbiAgXHJcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgei1pbmRleDogMjtcclxuICAubGFuZ3tcclxuICAgIHBhZGRpbmc6MCAyZW07XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogJ29wUic7XHJcbiAgfVxyXG4gIH1cclxuICAubG9nb1xyXG4gIHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgfVxyXG4gIC50b3BuYXYgYXtcclxuXHJcbiAgfVxyXG4gIC50b3BuYXYgYSAsLnRvcG5hdiBkaXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgdHJhbnNpdGlvbjowLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgI3Byb2R1Y3RzXHJcbiAge1xyXG4gICAgbWFyZ2luLWxlZnQ6ICAxNGVtO1xyXG4gIH1cclxuICAudG9wbmF2LnNjcm9sbGVkXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiM0NDQ0NDQgIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogNGVtO1xyXG4gIGhlaWdodDogNy4zZW07XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4ICNjZmNmY2Y7XHJcbiAgICBhXHJcbiAgICB7XHJcbiAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgfVxyXG4gICAgZGl2ICwgZGl2ICAjbGFuZ3VhZ2VcclxuICAgIHtcclxuICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcbiAgICAubGFuZ3tcclxuICAgICAgcGFkZGluZzowIDJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnRvcG5hdiAuaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24gLmRyb3BidG4ge1xyXG4gICAgZm9udC1zaXplOiAxN3B4OyAgICBcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgLmxhbmd7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAwIDJlbTtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgYTpob3ZlciwgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcclxuICAgIGJvcmRlci1ib3R0b206NXB4IHNvbGlkICNDQzlGMDg7XHJcbiAgICBjb2xvcjogI0NDOUYwODtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gXHJcblxyXG5cclxuI2xhbmd1YWdlXHJcbntiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuYm9yZGVyOiAwO1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuI2xhbmd1YWdlOmZvY3Vze1xyXG4gIG91dGxpbmU6MDtcclxufVxyXG5cclxuI2xhbmd1YWdlIG9wdGlvblxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOjVweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6NWVtO1xyXG4gIGNvbG9yOmdyZXk7XHJcblxyXG59XHJcbiAgLmhvbWVib2R5XHJcbiAge1xyXG4gICBcclxuICB9XHJcbi5jYXJvc29saW1nXHJcbntcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuIFxyXG5cclxuICAuYm9keVZpZXdcclxuICB7XHJcbiAgICBwYWRkaW5nOjJlbSAxMGVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICB9XHJcblxyXG4gIC5ib2R5SGVhZGluZ1xyXG4gIHtcclxuICAgIHBhZGRpbmc6MCAwLjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIG1hcmdpbjoyZW0gMDtcclxuICAgIGJvcmRlci1sZWZ0OjhweCBzb2xpZCAjQ0M5RjA4O1xyXG4gIH1cclxuXHJcbiAgLmJvbGRcclxuICB7XHJcbiAgICBmb250LWZhbWlseTogb3BFQjtcclxuICB9XHJcblxyXG4gIC5pbWFnZUNvbnRhaW5lclxyXG4gIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBwYWRkaW5nOiAyZW0gMmVtIDFlbSAxZW07XHJcbiAgfVxyXG4gIC5waG9uZWxpbmtcclxuICB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMS40ZW07XHJcbiAgfVxyXG5cclxuLmNvbGxlY3Rpb25Hb2xkSW1hZ2Vcclxue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDUzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcbn1cclxuXHJcbi5jb2xsZWN0aW9uSW1hZ2Vcclxue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcbn1cclxuLndlZGRpbmdjb2xsXHJcbiAge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLmJvdHRvbS1sZWZ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMWVtO1xyXG4gICAgbGVmdDogMWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcEInO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG5cclxuXHJcbiAgLmNvbGxlY3Rpb25JbWFnZTpob3ZlciAsIC5jb2xsZWN0aW9uR29sZEltYWdlOmhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLThweCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC04cHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC04cHgpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLThweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtOHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNDBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcblxyXG4gIC5Qcm9taXNlQ29udGFpbmVyXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkJFRjtcclxuICAgIGhlaWdodDogMTQ0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDRlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLnByb21pc2VCb2R5XHJcbiAge1xyXG4gICAgZm9udC1mYW1pbHk6b3BCO1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgXHJcbiAgfVxyXG5cclxuICAubnVtYmVyaW5nXHJcbiAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOi0xZW07XHJcbiAgICBsZWZ0OjJlbTtcclxuICAgIHdpZHRoOjI0cHg7XHJcbiAgICBoZWlnaHQ6MjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcEVCJztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4gIC5tYXJnaW5Ub3BcclxuICB7XHJcbiAgICBtYXJnaW4tdG9wOiA4ZW07XHJcbiAgfVxyXG4gIC51c2VycGljXHJcbiAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC51c2VyaW1nXHJcbiAge1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgLmRvdWJsZXF1b3Rlc1xyXG4gIHtcclxuICAgIHdpZHRoOjMwcHg7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIG1hcmdpbjoxZW0gMDtcclxuICB9XHJcbiAgLnVzZXJuYW1lXHJcbiAge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAyZW07XHJcbiAgfVxyXG4gIC5uYW1le1xyXG4gICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5kZXNpZ25hdGlvblxyXG4gIHtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAuY29tbWVudHNcclxuICB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxuICB9XHJcbiAgLnVzZXJjb21tZW50XHJcbiAge1xyXG4gICAgbWFyZ2luOiAzZW0gMDtcclxuICB9XHJcbiAgLnRhbGt0b3VzXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjdGNztcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgaGVpZ2h0OiAxNDZweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDJlbSAxZW07XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgIFxyXG4gIH1cclxuICAudGFsa3RvdXNCdXR0b25cclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0M5RjA4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC50b3BuYXYgYSwgLmRyb3Bkb3duIC5kcm9wYnRuICB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgXHJcbiAgfVxyXG4gIC50b3BuYXYgPiAubGFuZyB7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6MDtcclxuICB9XHJcbiAgLnRvcG5hdiA+IC5sYW5nID4gLnBob25lbGlua3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC50b3BuYXYgPiAubGFuZyA+ICNsYW5ndWFnZVxyXG4gIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMi4yZW07XHJcbiAgei1pbmRleDogMTc7XHJcbiAgcmlnaHQ6IDNlbTtcclxuICB9XHJcbiAgLnRvcG5hdiBhLmljb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5ob21lYm9keSA+IC50YWxrdG91c1xyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5pbWFnZUNvbnRhaW5lclxyXG4gIHtcclxuICAgIHBhZGRpbmc6IDJlbSAwZW07XHJcbiAgfVxyXG4gIC5jb2xsZWN0aW9uR29sZEltYWdlXHJcbiAge1xyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG4gIH1cclxuIC5jb2xsZWN0aW9uSW1hZ2VcclxuIHtcclxuICAgcGFkZGluZzoxZW07XHJcbiAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgIGhlaWdodDoyMGVtO1xyXG4gfVxyXG4gLmxlZnRlclxyXG4ge1xyXG4gICBib3R0b206MmVtO1xyXG4gICBsZWZ0OjJlbTtcclxuIH1cclxufVxyXG5cclxuXHJcbiBcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAudG9wbmF2LnJlc3BvbnNpdmUge3Bvc2l0aW9uOiBmaXhlZDt9XHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIC5pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC50b3BuYXYgYS5pY29uXHJcbiAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIGEge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIC5kcm9wZG93biB7ZmxvYXQ6IG5vbmU7ICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDt9XHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIC5kcm9wZG93bi1jb250ZW50IHtwb3NpdGlvbjogcmVsYXRpdmU7ICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDt9XHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIC5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3RzXHJcbiAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBlbTtcclxuICAgIG1hcmdpbi10b3A6M2VtO1xyXG4gIH1cclxuICAuUHJvbWlzZUNvbnRhaW5lclxyXG4gIHtcclxuICAgIG1hcmdpbi1ib3R0b206NGVtO1xyXG4gIH1cclxuICAuYm9keVZpZXdcclxuICB7XHJcbiAgICBwYWRkaW5nOjJlbSAyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuXHJcbiAgLndlZGRpbmdjb2xsXHJcbiAge1xyXG4gICAgcGFkZGluZzogMCAxZW07XHJcbiAgfVxyXG59XHJcbiAgXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_6__);







var HomeComponent = /** @class */ (function () {
    // @HostListener('window:scroll', ['$event'])
    // onWindowScroll(e) {
    //     let element = document.querySelector('.navbar');
    //     if (window.pageYOffset > element.clientHeight) {
    //       element.classList.add('navbar-inverse');
    //     } else {
    //       element.classList.remove('navbar-inverse');
    //     }
    //  }
    function HomeComponent(ts, sh, router) {
        this.ts = ts;
        this.sh = sh;
        this.router = router;
    }
    HomeComponent.prototype.aosInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_6__["init"]({
            duration: 1200
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.aosInit();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(window).scroll(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__('.topnav').toggleClass('scrolled', jquery__WEBPACK_IMPORTED_MODULE_3__(this).scrollTop() > 50);
        });
        //   $(document).ready(function () {
        //     $("#hover").click(function () { 
        //         $("nav ul li ul").fadeToggle(500);
        //     });
        // });
    };
    HomeComponent.prototype.getLang = function (data) {
        this.ts.updateComp1Val(data.target.value);
        window.sessionStorage.setItem('lang', data.target.value);
    };
    HomeComponent.prototype.goToProducts = function (data) {
        this.sh.setValue(data);
        this.router.navigate(['products']);
    };
    HomeComponent.prototype.toggleDrop = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__("nav ul li ul").fadeToggle(500);
    };
    HomeComponent.prototype.myFunction = function () {
        var x = document.getElementById("myTopnav");
        var logo = document.getElementById("logo");
        if (x.className === "topnav") {
            x.className += " responsive";
            x.style.height = "auto";
            logo.style.display = "none";
        }
        else {
            x.className = "topnav";
            x.style.height = "7em";
            logo.style.display = "block";
        }
    };
    HomeComponent.prototype.goTOProducts = function (el) {
        el.scrollIntoView();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/components/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/products/dialog-data-example-dialog.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/products/dialog-data-example-dialog.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>Favorite Animal</h1> -->\r\n<div mat-dialog-content >\r\n\r\n  <img style=\"width:100%;height:100%\"\r\n  class=\"productimg\"\r\n  src=\"{{data.url }}\"\r\n\r\n/>\r\n</div>"

/***/ }),

/***/ "./src/app/components/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"productwrapper\">\n  <app-header></app-header>\n  <div class=\"productbody\">\n    <div class=\"productheroimgdiv\">\n      <img class=\"productheroimg\" src=\"../../../assets/images/homehero1.jpg\" />\n    </div>\n    <div class=\"mainbody \">\n      <div class=\"row\" style=\"width: 100%;\">\n      <div class=\"col-lg-3 cent\">\n        <div class=\"findjewels\">\n          {{ ts.translate(\"findyourjewels\") | uppercase }}\n        </div>\n        <div class=\"selectedJewell\">{{ ts.translate(value) | uppercase }}</div>\n        <div class=\"btnGroup\">\n         <label>\n            <input id=\"allproducts\" (change)=\"handleChange($event.target.value)\" type=\"radio\" value=\"allproducts\" name=\"productradio\" />\n            <span>{{ ts.translate(\"allproducts\") | titlecase }}</span>\n          </label>\n\n          <label>\n            <input id=\"maalai\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"maalai\" name=\"productradio\" />\n            <span>{{ ts.translate(\"maalai\") | titlecase }}</span>\n          </label>\n          <label>\n            <input id=\"bangles\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"bangles\" name=\"productradio\" />\n            <span>{{ ts.translate(\"bangles\") | titlecase }}</span>\n          </label>\n\n          <label>\n            <input id=\"necklace\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"necklace\" name=\"productradio\" />\n            <span>{{ ts.translate(\"necklace\") | titlecase }}</span>\n          </label>\n          <label>\n            <input id=\"chains\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"chains\"  name=\"productradio\" />\n            <span>{{ ts.translate(\"chains\") | titlecase }}</span>\n          </label>\n\n          <label>\n            <input id=\"earrings\" type=\"radio\" (change)=\"handleChange($event.target.value)\"  value=\"earings\" name=\"productradio\" />\n            <span>{{ ts.translate(\"earrings\") | titlecase }}</span>\n          </label>\n          <label>\n            <input id=\"rings\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"rings\"  name=\"productradio\" />\n            <span>{{ ts.translate(\"rings\") | titlecase }}</span>\n          </label>\n\n          <label>\n            <input id=\"bracelet\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"bracelet\"  name=\"productradio\" />\n            <span>{{ ts.translate(\"bracelet\") | titlecase }}</span>\n          </label>\n        </div>\n      </div>\n      <div class=\"col-lg-9 productsLists\">\n        <div class=\"ImgList col-lg-4 col-md-4 col-sm-6 col-6\" *ngFor=\"let item of tempdata\">\n          <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\n          <a class=\"zoombut\" (click)=\"openDialog(item)\">Click to zoom</a>\n            <!-- <button mat-button (click)=\"openDialog(item)\">Click to Zoom</button> -->\n            <div class=\"procode\">{{item.code}}</div>\n           <div class=\"proname\"> {{ item.name }}</div>\n            <img\n              class=\"productimg\"\n              src=\"{{ item.imgsrc }}\"\n            \n            />\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n  </div>\n    <app-footer></app-footer>\n  </div>\n \n</div>\n\n  \n \n"

/***/ }),

/***/ "./src/app/components/products/products.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productbody {\n  padding-top: 7em; }\n\n.productheroimgdiv {\n  width: 100%;\n  height: 50vh;\n  position: relative; }\n\n.productheroimg {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.filterList {\n  padding: 1em;\n  font-family: opEB;\n  color: black; }\n\n.productfooter {\n  position: absolute;\n  bottom: 0; }\n\n.cent {\n  text-align: center; }\n\n.btnGroup {\n  display: inline-block;\n  font-size: 20px;\n  background-color: #fff;\n  text-align: left;\n  padding: 0 0 0 5em; }\n\n.findjewels {\n  color: #333333;\n  background-color: #fff;\n  text-align: center;\n  font-size: 24px;\n  padding-left: 3em;\n  font-family: opEB;\n  margin-top: 2em;\n  padding-bottom: 1em; }\n\n.selectedJewell {\n  color: #CC9F08;\n  background-color: #fff;\n  text-align: left;\n  font-size: 24px;\n  padding-left: 4.2em;\n  font-family: opEB;\n  margin-bottom: 3em; }\n\n.ImgList {\n  display: inline-flex; }\n\n.indiImg {\n  margin: 4em 2em;\n  display: flex;\n  height: 250px;\n  width: 250px;\n  flex-flow: column-reverse; }\n\n.productimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%; }\n\n:checked + span {\n  color: #CC9F08;\n  transition: 0.3s ease-in-out; }\n\ninput[type=\"radio\"] {\n  display: none; }\n\n/* Optional other stuff just to make it look better */\n\nlabel {\n  display: inline-block;\n  width: 200px;\n  padding: 5px;\n  cursor: pointer;\n  transition: 0.2s ease-in-out; }\n\nspan {\n  transition: 0.3s ease-in-out; }\n\nlabel > span:hover {\n  color: #CC9F08; }\n\n.productsLists {\n  padding-top: 20em; }\n\n.proname {\n  color: #444;\n  font-size: 20px;\n  font-family: 'opR'; }\n\n.procode {\n  color: #888888;\n  font-family: 'opR';\n  font-size: 14px; }\n\n.zoombut {\n  text-decoration: underline;\n  cursor: pointer;\n  color: #666666;\n  font-size: 12px;\n  font-family: 'opB'; }\n\n@media screen and (max-width: 600px) {\n  label {\n    display: inline-block;\n    width: auto;\n    padding: 1em;\n    white-space: nowrap;\n    /* font-size: 25px; */\n    cursor: pointer;\n    transition: 0.2s ease-in-out; }\n  .btnGroup {\n    display: inline-flex;\n    font-size: 20px;\n    background-color: #fff;\n    text-align: left;\n    flex-wrap: nowrap;\n    width: 100%;\n    overflow: auto;\n    padding: 1em 0 0 0; }\n  .findjewels, .selectedJewell {\n    display: none; }\n  .productsLists {\n    padding-top: 1em; }\n  .indiImg {\n    margin: 3em 1em;\n    display: flex;\n    width: 100%;\n    height: 150px;\n    flex-flow: column-reverse; }\n  .productimg {\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9DOlxcRGF0YVxcZ293dGhhbVxcU0JKXFxzYmouZ2l0aHViLmlvXFxzYmovc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2R1Y3RzXFxwcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVJLGdCQUFlLEVBQUE7O0FBRW5CO0VBRUksV0FBVztFQUNmLFlBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHbEI7RUFFSSxZQUFXO0VBQ1gsV0FBVTtFQUNWLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTs7QUFFckI7RUFFSSxZQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVcsRUFBQTs7QUFFZjtFQUVJLGtCQUFrQjtFQUNsQixTQUFRLEVBQUE7O0FBR1o7RUFFSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBS3JCO0VBRUcsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBYztFQUNkLG1CQUFtQixFQUFBOztBQUl0QjtFQUVHLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUlyQjtFQUVJLG9CQUFvQixFQUFBOztBQUd4QjtFQUVJLGVBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBWTtFQUNaLFlBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDRyxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLFlBQVcsRUFBQTs7QUFHZDtFQUVHLGNBQWM7RUFDZCw0QkFBNEIsRUFBQTs7QUFHaEM7RUFFQyxhQUFZLEVBQUE7O0FBRWIscURBQUE7O0FBQ0E7RUFDRyxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFjO0VBQ2QsNEJBQTRCLEVBQUE7O0FBRS9CO0VBQ0ksNEJBQTRCLEVBQUE7O0FBRWhDO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUVJLGlCQUFnQixFQUFBOztBQUVwQjtFQUVJLFdBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBRXRCO0VBRUksY0FBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFjLEVBQUE7O0FBRWxCO0VBRUksMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixjQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFpQixFQUFBOztBQUVyQjtFQUNJO0lBRUkscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFCQUFBO0lBQ0EsZUFBZTtJQUNmLDRCQUE0QixFQUFBO0VBRWhDO0lBRUksb0JBQW9CO0lBQ3hCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsY0FBYztJQUVkLGtCQUFrQixFQUFBO0VBRWxCO0lBRUksYUFBWSxFQUFBO0VBRWhCO0lBRUksZ0JBQWUsRUFBQTtFQUduQjtJQUVJLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUIsRUFBQTtFQUc3QjtJQUVJLFlBQVk7SUFDWixvQkFDSjtPQURJLGlCQUNKLEVBQUEsRUFBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4ucHJvZHVjdGJvZHlcclxue1xyXG4gICAgcGFkZGluZy10b3A6N2VtO1xyXG59XHJcbi5wcm9kdWN0aGVyb2ltZ2RpdlxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuaGVpZ2h0OjUwdmg7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2R1Y3RoZXJvaW1nXHJcbntcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5maWx0ZXJMaXN0XHJcbntcclxuICAgIHBhZGRpbmc6MWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IG9wRUI7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG4ucHJvZHVjdGZvb3RlclxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206MDtcclxufVxyXG4vL2J1dHRvbiBncm91cFxyXG4uY2VudFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ0bkdyb3Vwe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCA1ZW07XHJcbiAgIFxyXG4gfVxyXG4gXHJcblxyXG4gLmZpbmRqZXdlbHNcclxuIHtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBhZGRpbmctbGVmdDogM2VtO1xyXG4gICAgZm9udC1mYW1pbHk6IG9wRUI7XHJcbiAgICBtYXJnaW4tdG9wOjJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XHJcbiB9XHJcblxyXG4gLnNlbGVjdGVkSmV3ZWxsXHJcbiB7XHJcbiAgICBjb2xvcjogI0NDOUYwODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0LjJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBvcEVCO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xyXG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG4gfVxyXG5cclxuIC5JbWdMaXN0XHJcbiB7XHJcbiAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiB9XHJcblxyXG4gLmluZGlJbWdcclxuIHtcclxuICAgICBtYXJnaW46NGVtIDJlbTtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGhlaWdodDoyNTBweDtcclxuICAgICB3aWR0aDoyNTBweDtcclxuICAgICBmbGV4LWZsb3c6IGNvbHVtbi1yZXZlcnNlO1xyXG4gfVxyXG5cclxuIC5wcm9kdWN0aW1ne1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuIH1cclxuXHJcbiA6Y2hlY2tlZCArIHNwYW4ge1xyXG4gICBcclxuICAgIGNvbG9yOiAjQ0M5RjA4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdXHJcbntcclxuIGRpc3BsYXk6bm9uZTtcclxufVxyXG4vKiBPcHRpb25hbCBvdGhlciBzdHVmZiBqdXN0IHRvIG1ha2UgaXQgbG9vayBiZXR0ZXIgKi9cclxubGFiZWwge1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIHdpZHRoOiAyMDBweDtcclxuICAgcGFkZGluZzogNXB4O1xyXG4gICBjdXJzb3I6cG9pbnRlcjtcclxuICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5zcGFue1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5sYWJlbCA+IHNwYW46aG92ZXJ7XHJcbiAgICBjb2xvcjogI0NDOUYwODtcclxufVxyXG4ucHJvZHVjdHNMaXN0c1xyXG57XHJcbiAgICBwYWRkaW5nLXRvcDoyMGVtO1xyXG59XHJcbi5wcm9uYW1lXHJcbntcclxuICAgIGNvbG9yOiM0NDQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ29wUic7XHJcbn1cclxuLnByb2NvZGVcclxue1xyXG4gICAgY29sb3I6Izg4ODg4ODtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BSJztcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcbi56b29tYnV0XHJcbntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IzY2NjY2NjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OidvcEInO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBsYWJlbFxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAvKiBmb250LXNpemU6IDI1cHg7ICovXHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICAuYnRuR3JvdXBcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICBcclxuICAgIHBhZGRpbmc6IDFlbSAwIDAgMDtcclxuICAgIH1cclxuICAgIC5maW5kamV3ZWxzICwgLnNlbGVjdGVkSmV3ZWxsXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3RzTGlzdHNcclxuICAgIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDoxZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmluZGlJbWdcclxuICAgIHtcclxuICAgICAgICBtYXJnaW46IDNlbSAxZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3RpbWdcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXJcclxuICAgIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent, DialogDataExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataExampleDialog", function() { return DialogDataExampleDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_7__);








var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(ts, sh, http, dialog) {
        this.ts = ts;
        this.sh = sh;
        this.http = http;
        this.dialog = dialog;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        this.options = {
            headers: this.httpHeaders
        };
        this.jsondata = [];
        this.value = 'allproducts';
        this.tempdata = [];
    }
    ProductsComponent.prototype.openDialog = function (item) {
        console.log(item.imgsrc);
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                url: item.imgsrc,
                name: item.name,
                code: item.code
            }
        });
    };
    ProductsComponent.prototype.aosInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_7__["init"]({
            duration: 1200
        });
    };
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aosInit();
        if (this.sh.getValue())
            this.value = this.sh.getValue();
        console.log(this.value);
        this.getAllProducts().subscribe(function (data) {
            _this.jsondata = data;
            _this.tempdata = _this.jsondata;
            console.log(_this.jsondata);
        });
        document.getElementById(this.value).checked = true;
    };
    ProductsComponent.prototype.ngAfterViewInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_6__('#exampleModal').on('show.bs.modal', function (event) {
            var button = jquery__WEBPACK_IMPORTED_MODULE_6__(event); // Button that triggered the modal
            var recipient = button.data('whatever'); // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            console.log(recipient);
            var modal = jquery__WEBPACK_IMPORTED_MODULE_6__(this);
            modal.find('.modal-title').text('New message to ' + recipient);
            modal.find('.modal-body input').val(recipient);
        });
    };
    ProductsComponent.prototype.getAllProducts = function () {
        return this.http.get('./assets/products.json', this.options);
    };
    ProductsComponent.prototype.handleChange = function (event) {
        var _this = this;
        this.aosInit();
        this.selectedValue = event;
        if (this.selectedValue == 'allproducts') {
            this.tempdata = this.jsondata;
        }
        else {
            this.tempdata = this.jsondata.filter(function (data) {
                return data.category.toLowerCase() == _this.selectedValue;
            });
            console.log(this.tempdata);
        }
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/components/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], ProductsComponent);
    return ProductsComponent;
}());

var DialogDataExampleDialog = /** @class */ (function () {
    function DialogDataExampleDialog(data) {
        this.data = data;
    }
    DialogDataExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-data-example-dialog',
            template: __webpack_require__(/*! ./dialog-data-example-dialog.html */ "./src/app/components/products/dialog-data-example-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DialogDataExampleDialog);
    return DialogDataExampleDialog;
}());



/***/ }),

/***/ "./src/app/components/topselling/topselling.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/topselling/topselling.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top content\r\n<div class=\"top-content\">\r\n  <div class=\"container-fluid\">\r\n      <div id=\"carousel-example\" class=\"carousel slide\" >\r\n          <div class=\"carousel-inner row w-100 mx-auto\" role=\"listbox\">\r\n              <div class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active\">\r\n                  <img  src=\"../../../assets/images/homehero1.jpg\" class=\"img-fluid mx-auto d-block topsellingimage\" alt=\"img1\">\r\n              </div>\r\n              <div class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3\">\r\n                  <img  src=\"../../../assets/images/homehero1.jpg\" class=\"img-fluid mx-auto d-block topsellingimage\" alt=\"img2\">\r\n              </div>\r\n              <div class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3\">\r\n                  <img  src=\"../../../assets/images/homehero1.jpg\" class=\"img-fluid mx-auto d-block topsellingimage\" alt=\"img3\">\r\n              </div>\r\n              <div class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3\">\r\n                  <img  src=\"../../../assets/images/homehero1.jpg\" class=\"img-fluid mx-auto d-block topsellingimage\" alt=\"img4\">\r\n              </div>\r\n              <div class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3\">\r\n                  <img  src=\"../../../assets/images/homehero1.jpg\" class=\"img-fluid mx-auto d-block topsellingimage\" alt=\"img5\">\r\n              </div>\r\n              <div class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3\">\r\n                  <img  src=\"../../../assets/images/homehero1.jpg\" class=\"img-fluid mx-auto d-block topsellingimage\" alt=\"img6\">\r\n              </div>\r\n              <div class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3\">\r\n                  <img  src=\"../../../assets/images/homehero1.jpg\" class=\"img-fluid mx-auto d-block topsellingimage\" alt=\"img7\">\r\n              </div>\r\n              <div class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3\">\r\n                  <img  src=\"../../../assets/images/homehero1.jpg\" class=\"img-fluid mx-auto d-block topsellingimage\" alt=\"img8\">\r\n              </div>\r\n          </div>\r\n          <a class=\"carousel-control-prev\" href=\"#carousel-example\" role=\"button\" data-slide=\"prev\">\r\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n              <span class=\"sr-only\">Previous</span>\r\n          </a>\r\n          <a class=\"carousel-control-next\" href=\"#carousel-example\" role=\"button\" data-slide=\"next\">\r\n              <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n              <span class=\"sr-only\">Next</span>\r\n          </a>\r\n      </div>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n\r\n\r\n<!-- Flickity HTML init -->\r\n<div class=\"gallery js-flickity\"\r\n  data-flickity-options='{ \"wrapAround\": true }'>\r\n  <div class=\"gallery-cell\"></div>\r\n  <div class=\"gallery-cell\"></div>\r\n  <div class=\"gallery-cell\"></div>\r\n  <div class=\"gallery-cell\"></div>\r\n  <div class=\"gallery-cell\"></div>\r\n  <div class=\"gallery-cell\"></div>\r\n  <div class=\"gallery-cell\"></div>\r\n  <div class=\"gallery-cell\"></div>\r\n  <div class=\"gallery-cell\"></div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/topselling/topselling.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/topselling/topselling.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* external css: flickity.css */\n/*! Flickity v2.2.2\r\nhttps://flickity.metafizzy.co\r\n---------------------------------------------- */\n.flickity-enabled {\r\n    position: relative;\r\n  }\n.flickity-enabled:focus { outline: none; }\n.flickity-viewport {\r\n    overflow: hidden;\r\n    position: relative;\r\n    height: 100%;\r\n  }\n.flickity-slider {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\n/* draggable */\n.flickity-enabled.is-draggable {\r\n    -webkit-tap-highlight-color: transparent;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n  }\n.flickity-enabled.is-draggable .flickity-viewport {\r\n    cursor: move;\r\n    cursor: -webkit-grab;\r\n    cursor: grab;\r\n  }\n.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {\r\n    cursor: -webkit-grabbing;\r\n    cursor: grabbing;\r\n  }\n/* ---- flickity-button ---- */\n.flickity-button {\r\n    position: absolute;\r\n    background: hsla(0, 0%, 100%, 0.75);\r\n    border: none;\r\n    color: #333;\r\n  }\n.flickity-button:hover {\r\n    background: white;\r\n    cursor: pointer;\r\n  }\n.flickity-button:focus {\r\n    outline: none;\r\n    box-shadow: 0 0 0 5px #19F;\r\n  }\n.flickity-button:active {\r\n    opacity: 0.6;\r\n  }\n.flickity-button:disabled {\r\n    opacity: 0.3;\r\n    cursor: auto;\r\n    /* prevent disabled button from capturing pointer up event. #716 */\r\n    pointer-events: none;\r\n  }\n.flickity-button-icon {\r\n    fill: currentColor;\r\n  }\n/* ---- previous/next buttons ---- */\n.flickity-prev-next-button {\r\n    top: 50%;\r\n    width: 44px;\r\n    height: 44px;\r\n    border-radius: 50%;\r\n    /* vertically center */\r\n    transform: translateY(-50%);\r\n  }\n.flickity-prev-next-button.previous { left: 10px; }\n.flickity-prev-next-button.next { right: 10px; }\n/* right to left */\n.flickity-rtl .flickity-prev-next-button.previous {\r\n    left: auto;\r\n    right: 10px;\r\n  }\n.flickity-rtl .flickity-prev-next-button.next {\r\n    right: auto;\r\n    left: 10px;\r\n  }\n.flickity-prev-next-button .flickity-button-icon {\r\n    position: absolute;\r\n    left: 20%;\r\n    top: 20%;\r\n    width: 60%;\r\n    height: 60%;\r\n  }\n/* ---- page dots ---- */\n.flickity-page-dots {\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: -25px;\r\n    padding: 0;\r\n    display:none;\r\n    margin: 0;\r\n    list-style: none;\r\n    text-align: center;\r\n    line-height: 1;\r\n  }\n.flickity-rtl .flickity-page-dots { direction: rtl; }\n.flickity-page-dots .dot {\r\n    display: inline-block;\r\n    width: 10px;\r\n    height: 10px;\r\n    margin: 0 8px;\r\n    background: #333;\r\n    border-radius: 50%;\r\n    opacity: 0.25;\r\n    cursor: pointer;\r\n  }\n.flickity-page-dots .dot.is-selected {\r\n    opacity: 1;\r\n  }\n* {\n  box-sizing: border-box; }\nbody {\n  font-family: sans-serif; }\n.gallery {\n  background: #EEE; }\n.gallery-cell {\n  width: 200px;\n  height: 200px;\n  margin-right: 10px;\n  background-image: url('homehero1.jpg');\n  counter-increment: gallery-cell; }\n/* cell number */\n.gallery-cell:before {\n  display: block;\n  text-align: center;\n  line-height: 200px;\n  font-size: 80px;\n  color: white; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3BzZWxsaW5nL0M6XFxEYXRhXFxnb3d0aGFtXFxTQkpcXHNiai5naXRodWIuaW9cXHNiai9zcmNcXGFwcFxcY29tcG9uZW50c1xcdG9wc2VsbGluZ1xcdG9wc2VsbGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9mbGlja2VyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSkEsK0JBQUE7QUNsSkE7O2dEQUVnRDtBQUVoRDtJQUNJLGtCQUFrQjtFQUNwQjtBQUVBLDBCQUEwQixhQUFhLEVBQUU7QUFFekM7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFFQSxjQUFjO0FBRWQ7SUFDRSx3Q0FBd0M7SUFDeEMseUJBQXlCO09BQ3RCLHNCQUFzQjtZQUVqQixpQkFBaUI7RUFDM0I7QUFFQTtJQUNFLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsWUFBWTtFQUNkO0FBRUE7SUFDRSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0VBQ2xCO0FBRUEsOEJBQThCO0FBRTlCO0lBQ0Usa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osV0FBVztFQUNiO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsYUFBYTtJQUNiLDBCQUEwQjtFQUM1QjtBQUVBO0lBQ0UsWUFBWTtFQUNkO0FBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtFQUFrRTtJQUNsRSxvQkFBb0I7RUFDdEI7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUVBLG9DQUFvQztBQUVwQztJQUNFLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsMkJBQTJCO0VBQzdCO0FBRUEsc0NBQXNDLFVBQVUsRUFBRTtBQUNsRCxrQ0FBa0MsV0FBVyxFQUFFO0FBQy9DLGtCQUFrQjtBQUNsQjtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFFQSx3QkFBd0I7QUFFeEI7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7QUFFQSxvQ0FBb0MsY0FBYyxFQUFFO0FBRXBEO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7RUFDakI7QUFFQTtJQUNFLFVBQVU7RUFDWjtBRGFGO0VBRUksc0JBQXNCLEVBQUE7QUFHeEI7RUFBTyx1QkFBdUIsRUFBQTtBQUU5QjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0NBQTZEO0VBQzdELCtCQUErQixFQUFBO0FBR2pDLGdCQUFBO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBRWxCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b3BzZWxsaW5nL3RvcHNlbGxpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAudG9wLWNvbnRlbnRcclxuLy8ge1xyXG4vLyAgICAgbWFyZ2luOjJlbSAwO1xyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4vLyAgICAgLyogU2hvdyA0dGggc2xpZGUgb24gbWQgaWYgY29sLW1kLTQqL1xyXG4vLyAgICAgLmNhcm91c2VsLWlubmVyIC5hY3RpdmUuY29sLW1kLTQuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XHJcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgIHRvcDogMDtcclxuLy8gICAgICAgICByaWdodDogLTMzLjMzMzMlOyAgLypjaGFuZ2UgdGhpcyB3aXRoIGphdmFzY3JpcHQgaW4gdGhlIGZ1dHVyZSovXHJcbi8vICAgICAgICAgei1pbmRleDogLTE7XHJcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4vLyAgICAgLyogU2hvdyAzcmQgc2xpZGUgb24gc20gaWYgY29sLXNtLTYqL1xyXG4vLyAgICAgLmNhcm91c2VsLWlubmVyIC5hY3RpdmUuY29sLXNtLTYuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0ge1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICB0b3A6IDA7XHJcbi8vICAgICAgICAgcmlnaHQ6IC01MCU7ICAvKmNoYW5nZSB0aGlzIHdpdGggamF2YXNjcmlwdCBpbiB0aGUgZnV0dXJlKi9cclxuLy8gICAgICAgICB6LWluZGV4OiAtMTtcclxuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4vLyAgICAgLmNhcm91c2VsLWl0ZW0ge1xyXG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuLy8gICAgIH1cclxuLy8gICAgIC8qIHNob3cgMiBpdGVtcyAqL1xyXG4vLyAgICAgLmNhcm91c2VsLWlubmVyIC5hY3RpdmUgKyAuY2Fyb3VzZWwtaXRlbSB7XHJcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICB9XHJcbi8vICAgICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0uYWN0aXZlOm5vdCguY2Fyb3VzZWwtaXRlbS1yaWdodCk6bm90KC5jYXJvdXNlbC1pdGVtLWxlZnQpLFxyXG4vLyAgICAgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZTpub3QoLmNhcm91c2VsLWl0ZW0tcmlnaHQpOm5vdCguY2Fyb3VzZWwtaXRlbS1sZWZ0KSArIC5jYXJvdXNlbC1pdGVtIHtcclxuLy8gICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtLW5leHQge1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLyogbGVmdCBvciBmb3J3YXJkIGRpcmVjdGlvbiAqL1xyXG4vLyAgICAgLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLWxlZnQgKyAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCxcclxuLy8gICAgIC5jYXJvdXNlbC1pdGVtLW5leHQuY2Fyb3VzZWwtaXRlbS1sZWZ0ICsgLmNhcm91c2VsLWl0ZW0sXHJcbi8vICAgICAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0ge1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuLy8gICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLyogZmFydGhlc3QgcmlnaHQgaGlkZGVuIGl0ZW0gbXVzdCBiZSBhbHNvIHBvc2l0aW9uZWQgZm9yIGFuaW1hdGlvbnMgKi9cclxuLy8gICAgIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbS1wcmV2LmNhcm91c2VsLWl0ZW0tcmlnaHQge1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICB0b3A6IDA7XHJcbi8vICAgICAgICAgbGVmdDogMDtcclxuLy8gICAgICAgICB6LWluZGV4OiAtMTtcclxuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLyogcmlnaHQgb3IgcHJldiBkaXJlY3Rpb24gKi9cclxuLy8gICAgIC5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1yaWdodCArIC5jYXJvdXNlbC1pdGVtLXByZXYuY2Fyb3VzZWwtaXRlbS1yaWdodCxcclxuLy8gICAgIC5jYXJvdXNlbC1pdGVtLXByZXYuY2Fyb3VzZWwtaXRlbS1yaWdodCArIC5jYXJvdXNlbC1pdGVtLFxyXG4vLyAgICAgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0ICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XHJcbi8vICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbi8vICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIC8qIE1EICovXHJcbi8vIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4vLyAgICAgLyogc2hvdyAzcmQgb2YgMyBpdGVtIHNsaWRlICovXHJcbi8vICAgICAuY2Fyb3VzZWwtaW5uZXIgLmFjdGl2ZSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0ge1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZTpub3QoLmNhcm91c2VsLWl0ZW0tcmlnaHQpOm5vdCguY2Fyb3VzZWwtaXRlbS1sZWZ0KSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0ge1xyXG4vLyAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbi8vICAgICB9XHJcbi8vICAgICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0tbmV4dCB7XHJcbi8vICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbi8vICAgICB9XHJcbi8vICAgICAvKiBsZWZ0IG9yIGZvcndhcmQgZGlyZWN0aW9uICovXHJcbi8vICAgICAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XHJcbi8vICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4vLyAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbi8vICAgICB9XHJcbi8vICAgICAvKiByaWdodCBvciBwcmV2IGRpcmVjdGlvbiAqL1xyXG4vLyAgICAgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0ICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtIHtcclxuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuLy8gICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gLyogTEcgKi9cclxuLy8gQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcbi8vICAgICAvKiBzaG93IDR0aCBpdGVtICovXHJcbi8vICAgICAuY2Fyb3VzZWwtaW5uZXIgLmFjdGl2ZSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XHJcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICB9XHJcbi8vICAgICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0uYWN0aXZlOm5vdCguY2Fyb3VzZWwtaXRlbS1yaWdodCk6bm90KC5jYXJvdXNlbC1pdGVtLWxlZnQpICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtIHtcclxuLy8gICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLyogU2hvdyA1dGggc2xpZGUgb24gbGcgaWYgY29sLWxnLTMgKi9cclxuLy8gICAgIC5jYXJvdXNlbC1pbm5lciAuYWN0aXZlLmNvbC1sZy0zLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XHJcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgIHRvcDogMDtcclxuLy8gICAgICAgICByaWdodDogLTI1JTsgIC8qY2hhbmdlIHRoaXMgd2l0aCBqYXZhc2NyaXB0IGluIHRoZSBmdXR1cmUqL1xyXG4vLyAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbi8vICAgICB9XHJcbi8vICAgICAvKiBsZWZ0IG9yIGZvcndhcmQgZGlyZWN0aW9uICovXHJcbi8vICAgICAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtIHtcclxuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbi8vICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuLy8gICAgIH1cclxuLy8gICAgIC8qIHJpZ2h0IG9yIHByZXYgZGlyZWN0aW9uIC8vdCAtIHByZXZpb3VzIHNsaWRlIGRpcmVjdGlvbiBsYXN0IGl0ZW0gYW5pbWF0aW9uIGZpeCAqL1xyXG4vLyAgICAgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0ICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0ge1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4vLyAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyAuY2Fyb3VzZWwtaXRlbVxyXG4vLyB7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vIH1cclxuLy8gLnRvcHNlbGxpbmdpbWFnZVxyXG4vLyB7XHJcbi8vIHdpZHRoOiAyMGVtO1xyXG4vLyAgICAgaGVpZ2h0OiAyMGVtO1xyXG4vLyAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcbi8qIGV4dGVybmFsIGNzczogZmxpY2tpdHkuY3NzICovXHJcblxyXG5AaW1wb3J0ICcuLi8uLi8uLi9mbGlja2VyLmNzcyc7XHJcblxyXG4qIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkgeyBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgfVxyXG4gIFxyXG4gIC5nYWxsZXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICNFRUU7XHJcbiAgfVxyXG4gIFxyXG4gIC5nYWxsZXJ5LWNlbGwge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21laGVybzEuanBnJyk7XHJcbiAgICBjb3VudGVyLWluY3JlbWVudDogZ2FsbGVyeS1jZWxsO1xyXG4gIH1cclxuICBcclxuICAvKiBjZWxsIG51bWJlciAqL1xyXG4gIC5nYWxsZXJ5LWNlbGw6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgbGluZS1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAiLCIvKiEgRmxpY2tpdHkgdjIuMi4yXHJcbmh0dHBzOi8vZmxpY2tpdHkubWV0YWZpenp5LmNvXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi5mbGlja2l0eS1lbmFibGVkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmZsaWNraXR5LWVuYWJsZWQ6Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9XHJcbiAgXHJcbiAgLmZsaWNraXR5LXZpZXdwb3J0IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGlja2l0eS1zbGlkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGRyYWdnYWJsZSAqL1xyXG4gIFxyXG4gIC5mbGlja2l0eS1lbmFibGVkLmlzLWRyYWdnYWJsZSB7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZsaWNraXR5LWVuYWJsZWQuaXMtZHJhZ2dhYmxlIC5mbGlja2l0eS12aWV3cG9ydCB7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcclxuICAgIGN1cnNvcjogZ3JhYjtcclxuICB9XHJcbiAgXHJcbiAgLmZsaWNraXR5LWVuYWJsZWQuaXMtZHJhZ2dhYmxlIC5mbGlja2l0eS12aWV3cG9ydC5pcy1wb2ludGVyLWRvd24ge1xyXG4gICAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xyXG4gICAgY3Vyc29yOiBncmFiYmluZztcclxuICB9XHJcbiAgXHJcbiAgLyogLS0tLSBmbGlja2l0eS1idXR0b24gLS0tLSAqL1xyXG4gIFxyXG4gIC5mbGlja2l0eS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogaHNsYSgwLCAwJSwgMTAwJSwgMC43NSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbiAgXHJcbiAgLmZsaWNraXR5LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmZsaWNraXR5LWJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICMxOUY7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGlja2l0eS1idXR0b246YWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcbiAgXHJcbiAgLmZsaWNraXR5LWJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICBjdXJzb3I6IGF1dG87XHJcbiAgICAvKiBwcmV2ZW50IGRpc2FibGVkIGJ1dHRvbiBmcm9tIGNhcHR1cmluZyBwb2ludGVyIHVwIGV2ZW50LiAjNzE2ICovXHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZsaWNraXR5LWJ1dHRvbi1pY29uIHtcclxuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxuICB9XHJcbiAgXHJcbiAgLyogLS0tLSBwcmV2aW91cy9uZXh0IGJ1dHRvbnMgLS0tLSAqL1xyXG4gIFxyXG4gIC5mbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDQ0cHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvKiB2ZXJ0aWNhbGx5IGNlbnRlciAqL1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAuZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbi5wcmV2aW91cyB7IGxlZnQ6IDEwcHg7IH1cclxuICAuZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbi5uZXh0IHsgcmlnaHQ6IDEwcHg7IH1cclxuICAvKiByaWdodCB0byBsZWZ0ICovXHJcbiAgLmZsaWNraXR5LXJ0bCAuZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbi5wcmV2aW91cyB7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5mbGlja2l0eS1ydGwgLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ubmV4dCB7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uIC5mbGlja2l0eS1idXR0b24taWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICB9XHJcbiAgXHJcbiAgLyogLS0tLSBwYWdlIGRvdHMgLS0tLSAqL1xyXG4gIFxyXG4gIC5mbGlja2l0eS1wYWdlLWRvdHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IC0yNXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmZsaWNraXR5LXJ0bCAuZmxpY2tpdHktcGFnZS1kb3RzIHsgZGlyZWN0aW9uOiBydGw7IH1cclxuICBcclxuICAuZmxpY2tpdHktcGFnZS1kb3RzIC5kb3Qge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG9wYWNpdHk6IDAuMjU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGlja2l0eS1wYWdlLWRvdHMgLmRvdC5pcy1zZWxlY3RlZCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/topselling/topselling.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/topselling/topselling.component.ts ***!
  \***************************************************************/
/*! exports provided: TopsellingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopsellingComponent", function() { return TopsellingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var TopsellingComponent = /** @class */ (function () {
    function TopsellingComponent() {
    }
    TopsellingComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#carousel-example').on('slide.bs.carousel', function (e) {
            /*
                CC 2.0 License Iatek LLC 2018 - Attribution required
            */
            var $e = jquery__WEBPACK_IMPORTED_MODULE_2__(e.relatedTarget);
            var idx = $e.index();
            var itemsPerSlide = 5;
            var totalItems = jquery__WEBPACK_IMPORTED_MODULE_2__('.carousel-item').length;
            if (idx >= totalItems - (itemsPerSlide - 1)) {
                var it = itemsPerSlide - (totalItems - idx);
                for (var i = 0; i < it; i++) {
                    // append slides to end
                    if (e.direction == "left") {
                        jquery__WEBPACK_IMPORTED_MODULE_2__('.carousel-item').eq(i).appendTo('.carousel-inner');
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_2__('.carousel-item').eq(0).appendTo('.carousel-inner');
                    }
                }
            }
        });
    };
    TopsellingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topselling',
            template: __webpack_require__(/*! ./topselling.component.html */ "./src/app/components/topselling/topselling.component.html"),
            styles: [__webpack_require__(/*! ./topselling.component.scss */ "./src/app/components/topselling/topselling.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopsellingComponent);
    return TopsellingComponent;
}());



/***/ }),

/***/ "./src/app/material-module/material-module.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-module/material-module.module.ts ***!
  \***********************************************************/
/*! exports provided: MaterialModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModuleModule", function() { return MaterialModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");


// import { CommonModule } from '@angular/common';
//import { DragDropModule } from '@angular/cdk/drag-drop';


























var MaterialModuleModule = /** @class */ (function () {
    function MaterialModuleModule() {
    }
    MaterialModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                // CommonModule,
                _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                //Ng5SliderModule,
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                //NgxSpinnerModule,
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"]
            ],
            exports: [
                // CommonModule,
                //DragDropModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                //Ng5SliderModule,
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                //NgxSpinnerModule,
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MaterialModuleModule);
    return MaterialModuleModule;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
    }
    SharedService.prototype.getValue = function () {
        return this.value;
    };
    SharedService.prototype.setValue = function (data) {
        this.value = data;
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/translate/translate.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/translate/translate.service.ts ***!
  \*********************************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_vocabulary_vocabulary_ta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/vocabulary/vocabulary-ta */ "./src/app/vocabulary/vocabulary-ta.ts");
/* harmony import */ var src_app_vocabulary_vocabulary_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/vocabulary/vocabulary-en */ "./src/app/vocabulary/vocabulary-en.ts");




var TranslateService = /** @class */ (function () {
    function TranslateService() {
    }
    // _comp1ValueBS = new BehaviorSubject<string>('');
    TranslateService.prototype.updateComp1Val = function (val) {
        window.sessionStorage.setItem('lang', val);
    };
    TranslateService.prototype.translate = function (key) {
        if (window.sessionStorage.getItem('lang') === 'EN') {
            return src_app_vocabulary_vocabulary_en__WEBPACK_IMPORTED_MODULE_3__["VOCAB_EN"][key];
        }
        else if (window.sessionStorage.getItem('lang') === 'TA') {
            return src_app_vocabulary_vocabulary_ta__WEBPACK_IMPORTED_MODULE_2__["VOCAB_TA"][key];
        }
        else {
            window.sessionStorage.setItem('lang', 'EN');
            this.translate(key);
        }
    };
    TranslateService.comp1Val = 'EN';
    TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ "./src/app/vocabulary/vocabulary-en.ts":
/*!*********************************************!*\
  !*** ./src/app/vocabulary/vocabulary-en.ts ***!
  \*********************************************/
/*! exports provided: VOCAB_EN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOCAB_EN", function() { return VOCAB_EN; });
var VOCAB_EN = {
    products: 'Products',
    collections: 'Collections',
    goldschemes: 'Gold Schemes',
    aboutus: 'About Us',
    contactus: 'Contact Us',
    our: 'our',
    wedding: 'wedding',
    men: 'men',
    women: 'women',
    kids: 'kids',
    gifts: 'gifts',
    gold: 'gold',
    diamond: 'diamond',
    silver: 'silver',
    promises: 'Promises',
    top: 'top',
    sellingjewels: 'selling jewels',
    whatpeople: 'What People',
    talkaboutus: 'talk about us',
    talktous: 'talk to us',
    todaysrate: 'Today\'s Rate',
    findyourjewels: 'find your jewels',
    necklace: 'necklace',
    allproducts: 'all products',
    maalai: 'maalai',
    bangles: 'bangles',
    chains: 'chains',
    earrings: 'earrings',
    rings: 'rings',
    bracelet: 'bracelet'
};


/***/ }),

/***/ "./src/app/vocabulary/vocabulary-ta.ts":
/*!*********************************************!*\
  !*** ./src/app/vocabulary/vocabulary-ta.ts ***!
  \*********************************************/
/*! exports provided: VOCAB_TA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOCAB_TA", function() { return VOCAB_TA; });
var VOCAB_TA = {
    products: 'நகைகள்',
    collections: 'வகைகள்',
    goldschemes: 'தங்க திட்டங்கள்',
    aboutus: 'எங்களை பற்றி',
    contactus: 'தொடர்பு கொள்ள',
    our: 'நமது',
    wedding: 'திருமணம்',
    men: 'ஆண்கள்',
    women: 'பெண்கள்',
    kids: 'குழந்தைகள்',
    gifts: 'பரிசுகள்',
    gold: 'தங்கம்',
    diamond: 'வைரம்',
    silver: 'வெள்ளி',
    promises: 'வாக்குறுதிகள்',
    top: 'அதிக ',
    sellingjewels: 'விற்பனையான நகைகள்',
    whatpeople: 'மக்கள் எங்களைப்',
    talkaboutus: 'பற்றி என்ன நினைக்கிறார்கள்',
    talktous: 'எங்களுடன் பேசுங்கள்',
    todaysrate: 'இன்றைய விலை',
    findyourjewels: 'உங்கள் நகைகளைக் கண்டுபிடி',
    necklace: 'நெக்லஸ்',
    allproducts: 'அனைத்து நகைகள்',
    maalai: 'மாலை ',
    bangles: 'வளையல்கள்',
    chains: 'செய்ன்ஸ்',
    earrings: 'காதணிகள்',
    rings: 'மோதிரங்கள்',
    bracelet: 'ப்ராஸ்லெட் '
};


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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Data\gowtham\SBJ\sbj.github.io\sbj\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map