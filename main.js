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
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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

module.exports = ".footer {\n  height: 200px;\n  margin: auto;\n  position: relative;\n  background-color: #101010;\n  color: #fff; }\n\n.columl {\n  padding: 4em 6em; }\n\n.columr {\n  padding: 5em 4em 0 0;\n  text-align: right; }\n\n.logo {\n  font-size: 36px;\n  padding-bottom: 1em; }\n\n.copyrights {\n  letter-spacing: 2px;\n  font-size: 14px; }\n\n@media screen and (max-width: 600px) {\n  .menulinks {\n    display: inline-grid; }\n  .logo {\n    font-size: 24px;\n    padding-bottom: 0px; }\n  .copyrights {\n    font-size: 7px; } }\n\n.menulinks a {\n  text-decoration: none;\n  color: #fff;\n  padding: 0 2em;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXERhdGFcXGdvd3RoYW1cXFNCSlxcc2JqLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUVmO0VBRUksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBRUksb0JBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUVyQjtFQUVJLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFFdkI7RUFFSSxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUduQjtFQUNJO0lBRUksb0JBQW9CLEVBQUE7RUFFeEI7SUFFSSxlQUFlO0lBQ25CLG1CQUFtQixFQUFBO0VBRW5CO0lBR0EsY0FBYyxFQUFBLEVBQ2I7O0FBV0w7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyXHJcbntcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDEwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmNvbHVtbFxyXG57XHJcbiAgICBwYWRkaW5nOiA0ZW0gNmVtO1xyXG59XHJcbi5jb2x1bXJcclxue1xyXG4gICAgcGFkZGluZzo1ZW0gNGVtIDAgMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5sb2dvXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbn1cclxuLmNvcHlyaWdodHNcclxue1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5tZW51bGlua3NcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgIH1cclxuICAgIC5sb2dvXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIC5jb3B5cmlnaHRzXHJcbiAgICB7XHJcbiAgICAgXHJcbiAgICBmb250LXNpemU6IDdweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4ubWVudWxpbmtzIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAgMmVtO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59Il19 */"

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

module.exports = "<div class=\"topnav scrolled\" id=\"myTopnav\">\r\n  <div class=\"logo\" id=\"logo\">\r\n    Logo\r\n  </div>\r\n<a id=\"products\" class=\"\" (click)=\"goToProducts('allproducts')\" >{{ts.translate('products')}}</a>\r\n<a href=\"#news\">{{ts.translate('collections')}}</a>\r\n<a href=\"#contact\">{{ts.translate('goldschemes')}}\r\n\r\n</a>\r\n\r\n<a href=\"#about\">{{ts.translate('aboutus')}}</a>\r\n<a href=\"#about\">{{ts.translate('contactus')}}</a>\r\n<div class=\"lang \">\r\n  <div class=\"phonelink\">9042222681 &nbsp;&nbsp;&nbsp;|</div>\r\n    <select name=\"language\"   (change)=\"getLang($event)\" id=\"language\">\r\n        <option value=\"EN\">English</option>\r\n        <option value=\"TA\">தமிழ்</option>\r\n       \r\n       \r\n      </select>\r\n  </div>\r\n<a href=\"javascript:void(0);\" style=\"font-size:15px;\" class=\"icon\" (click)=\"myFunction()\">&#9776;</a>\r\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topnav {\n  overflow: hidden;\n  font-family: 'opB';\n  text-align: center;\n  position: fixed;\n  width: 100%;\n  transition: 0.3s all ease-in-out;\n  z-index: 2;\n  background: #fff;\n  background-color: #fff;\n  color: black !important;\n  line-height: 4em;\n  height: 7.3em;\n  box-shadow: 0 0 10px 1px #cfcfcf; }\n  .topnav .lang {\n    padding: 0 2em; }\n  .logo {\n  float: left; }\n  .topnav a, .topnav div {\n  display: inline-flex;\n  color: black;\n  border-bottom: 5px solid transparent;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n  transition: 0.3s all ease-in-out; }\n  #products {\n  margin-left: 14em; }\n  .topnav .icon {\n  display: none; }\n  .dropdown {\n  float: left;\n  overflow: hidden; }\n  .dropdown .dropbtn {\n  font-size: 17px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0; }\n  .dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n  .lang {\n  float: right;\n  padding: 0 2em; }\n  .dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left; }\n  .topnav a:hover, .dropdown:hover .dropbtn {\n  border-bottom: 5px solid #CC9F08;\n  color: #CC9F08;\n  cursor: pointer; }\n  .dropdown-content a:hover {\n  background-color: #ddd;\n  color: black; }\n  .dropdown:hover .dropdown-content {\n  display: block; }\n  @media screen and (max-width: 600px) {\n  .topnav a, .dropdown .dropbtn {\n    display: none; }\n  .topnav > .lang {\n    padding: 0; }\n  .topnav > .lang > .phonelink {\n    display: none; }\n  .topnav > .lang > #language {\n    position: absolute;\n    top: 1.5em;\n    z-index: 17;\n    right: 3em; }\n  .topnav a.icon {\n    float: right;\n    display: block; }\n  .homebody > .talktous {\n    font-size: 12px; } }\n  @media screen and (max-width: 600px) {\n  .topnav.responsive {\n    position: fixed; }\n  .topnav.responsive .icon {\n    position: absolute;\n    right: 0;\n    top: 0;\n    transition: 0.3s all ease-in-out; }\n  .topnav a.icon {\n    display: block;\n    position: absolute;\n    right: 0; }\n  .topnav.responsive a {\n    float: none;\n    display: block;\n    text-align: left;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown {\n    float: none;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown-content {\n    position: relative;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown .dropbtn {\n    display: block;\n    width: 100%;\n    text-align: left;\n    transition: 0.3s all ease-in-out; }\n  #products {\n    margin-left: 0em;\n    margin-top: 3em; } }\n  #language {\n  background: transparent;\n  border: 0;\n  color: black; }\n  #language:focus {\n  outline: 0; }\n  #language option {\n  background-color: transparent;\n  border: 5px solid #fff;\n  border-radius: 5em;\n  color: grey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXERhdGFcXGdvd3RoYW1cXFNCSlxcc2JqLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFHaEIsa0JBQWtCO0VBQ25CLGtCQUFrQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUdYLGdDQUFnQztFQUNoQyxVQUFVO0VBR1YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix1QkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQ0FBZ0MsRUFBQTtFQW5CbEM7SUF1QkksY0FBYSxFQUFBO0VBR2Y7RUFFRSxXQUFVLEVBQUE7RUFLWjtFQUNFLG9CQUFvQjtFQUNwQixZQUFXO0VBQ1osb0NBQW9DO0VBQ25DLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdDQUErQixFQUFBO0VBRWpDO0VBRUUsaUJBQWtCLEVBQUE7RUF3QnBCO0VBQ0UsYUFBYSxFQUFBO0VBR2Y7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7RUFHbEI7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsU0FBUyxFQUFBO0VBR1g7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsK0NBQTRDO0VBQzVDLFVBQVUsRUFBQTtFQUVaO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBQTtFQUdoQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7RUFHbEI7RUFDRSxnQ0FBK0I7RUFDL0IsY0FBYztFQUNkLGVBQWUsRUFBQTtFQUdqQjtFQUNFLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7RUFHZDtFQUNFLGNBQWMsRUFBQTtFQUdoQjtFQUNFO0lBQ0UsYUFBYSxFQUFBO0VBR2Y7SUFFRSxVQUFTLEVBQUE7RUFHWDtJQUNFLGFBQWEsRUFBQTtFQUVmO0lBRUUsa0JBQWtCO0lBQ3BCLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVSxFQUFBO0VBRVY7SUFDRSxZQUFZO0lBQ1osY0FBYyxFQUFBO0VBRWhCO0lBRUUsZUFBZSxFQUFBLEVBQ2hCO0VBTUg7RUFDRTtJQUFvQixlQUFlLEVBQUE7RUFDbkM7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixnQ0FBZ0MsRUFBQTtFQUVsQztJQUVFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUSxFQUFBO0VBRVY7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQ0FBZ0MsRUFBQTtFQUVsQztJQUE4QixXQUFXO0lBQUcsZ0NBQWdDLEVBQUE7RUFDNUU7SUFBc0Msa0JBQWtCO0lBQUcsZ0NBQWdDLEVBQUE7RUFDM0Y7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQ0FBZ0MsRUFBQTtFQUdsQztJQUVFLGdCQUFnQjtJQUNoQixlQUFjLEVBQUEsRUFDZjtFQUdMO0VBQ0MsdUJBQXVCO0VBQ3hCLFNBQVM7RUFDVCxZQUFZLEVBQUE7RUFFWjtFQUNFLFVBQVMsRUFBQTtFQUdYO0VBRUUsNkJBQTZCO0VBQzdCLHNCQUFxQjtFQUNyQixrQkFBaUI7RUFDakIsV0FBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcG5hdiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxuIFxyXG4gIGZvbnQtZmFtaWx5OiAnb3BCJztcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiBcclxuICBcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICB6LWluZGV4OiAyO1xyXG5cclxuXHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDRlbTtcclxuICBoZWlnaHQ6IDcuM2VtO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCAjY2ZjZmNmO1xyXG5cclxuXHJcbiAgLmxhbmd7XHJcbiAgICBwYWRkaW5nOjAgMmVtO1xyXG4gIH1cclxuICB9XHJcbiAgLmxvZ29cclxuICB7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gIH1cclxuICAudG9wbmF2IGF7XHJcblxyXG4gIH1cclxuICAudG9wbmF2IGEgLC50b3BuYXYgZGl2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRyYW5zaXRpb246MC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gICNwcm9kdWN0c1xyXG4gIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAgMTRlbTtcclxuICB9XHJcbiAgLy8gLnRvcG5hdi5zY3JvbGxlZFxyXG4gIC8vIHtcclxuICAvLyAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAvLyBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xyXG4gIC8vIGxpbmUtaGVpZ2h0OiA0ZW07XHJcbiAgLy8gaGVpZ2h0OiA3LjNlbTtcclxuICAvLyBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggI2NmY2ZjZjtcclxuICAvLyAgIGFcclxuICAvLyAgIHtcclxuICAvLyAgICAgY29sb3I6YmxhY2s7XHJcbiAgLy8gICB9XHJcbiAgLy8gICBkaXYgLCBkaXYgICNsYW5ndWFnZVxyXG4gIC8vICAge1xyXG4gIC8vICAgICBjb2xvcjpibGFjaztcclxuICAvLyAgIH1cclxuICAvLyAgIC5sYW5ne1xyXG4gIC8vICAgICBwYWRkaW5nOjAgMmVtO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICBcclxuICBcclxuICAudG9wbmF2IC5pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93biB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7ICAgIFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAubGFuZ3tcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDAgMmVtO1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdiBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTo1cHggc29saWQgI0NDOUYwODtcclxuICAgIGNvbG9yOiAjQ0M5RjA4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC50b3BuYXYgYSwgLmRyb3Bkb3duIC5kcm9wYnRuICB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLnRvcG5hdiA+IC5sYW5nIHtcclxuICAgICAgXHJcbiAgICAgIHBhZGRpbmc6MDtcclxuXHJcbiAgICB9XHJcbiAgICAudG9wbmF2ID4gLmxhbmcgPiAucGhvbmVsaW5re1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnRvcG5hdiA+IC5sYW5nID4gI2xhbmd1YWdlXHJcbiAgICB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMS41ZW07XHJcbiAgICB6LWluZGV4OiAxNztcclxuICAgIHJpZ2h0OiAzZW07XHJcbiAgICB9XHJcbiAgICAudG9wbmF2IGEuaWNvbiB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuaG9tZWJvZHkgPiAudGFsa3RvdXNcclxuICAgIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICBcclxuICB9XHJcblxyXG4gXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC50b3BuYXYucmVzcG9uc2l2ZSB7cG9zaXRpb246IGZpeGVkO31cclxuICAgIC50b3BuYXYucmVzcG9uc2l2ZSAuaWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICAudG9wbmF2IGEuaWNvblxyXG4gICAge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuICAgIC50b3BuYXYucmVzcG9uc2l2ZSBhIHtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgIC50b3BuYXYucmVzcG9uc2l2ZSAuZHJvcGRvd24ge2Zsb2F0OiBub25lOyAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7fVxyXG4gICAgLnRvcG5hdi5yZXNwb25zaXZlIC5kcm9wZG93bi1jb250ZW50IHtwb3NpdGlvbjogcmVsYXRpdmU7ICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDt9XHJcbiAgICAudG9wbmF2LnJlc3BvbnNpdmUgLmRyb3Bkb3duIC5kcm9wYnRuIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAjcHJvZHVjdHNcclxuICAgIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcclxuICAgICAgbWFyZ2luLXRvcDozZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuI2xhbmd1YWdlXHJcbntiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuYm9yZGVyOiAwO1xyXG5jb2xvcjogYmxhY2s7XHJcbn1cclxuI2xhbmd1YWdlOmZvY3Vze1xyXG4gIG91dGxpbmU6MDtcclxufVxyXG5cclxuI2xhbmd1YWdlIG9wdGlvblxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOjVweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6NWVtO1xyXG4gIGNvbG9yOmdyZXk7XHJcblxyXG59Il19 */"

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

module.exports = "\r\n<div class=\"wrapper\">\r\n \r\n  <div class=\"todaysrate\">\r\n    \r\n    <div class=\"circle\">{{ts.translate('todaysrate')}}\r\n        <div class=\"goldrate\">\r\n            <div class=\"goldratehead\">\r\n                {{ts.translate('todaysrate')}}\r\n            </div>\r\n            <div class=\"goldbody\">\r\n             <div> <span class=\"bold\">Gold 1gm</span> - RS 4800</div>\r\n             <div> <span class=\"bold\">Silver 1gm</span> - RS 80</div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    <div class=\"bar\"></div>\r\n    \r\n\r\n  </div>\r\n\r\n  <div class=\"topnav\" id=\"myTopnav\">\r\n      <div class=\"logo\" id=\"logo\">\r\n        Logo\r\n      </div>\r\n    <a id=\"products\" class=\"\" (click)=\"goToProducts('allproducts')\" >{{ts.translate('products')}}</a>\r\n    <a href=\"#news\">{{ts.translate('collections')}}</a>\r\n    <a href=\"#contact\">{{ts.translate('goldschemes')}}\r\n\r\n    </a>\r\n    \r\n    <a href=\"#about\">{{ts.translate('aboutus')}}</a>\r\n    <a href=\"#about\">{{ts.translate('contactus')}}</a>\r\n    <div class=\"lang \">\r\n      <div class=\"phonelink\">9042222681 &nbsp;&nbsp;&nbsp;|</div>\r\n        <select name=\"language\"   (change)=\"getLang($event)\" id=\"language\">\r\n            <option value=\"EN\">English</option>\r\n            <option value=\"TA\">தமிழ்</option>\r\n           \r\n           \r\n          </select>\r\n      </div>\r\n    <a href=\"javascript:void(0);\" style=\"font-size:15px;\" class=\"icon\" (click)=\"myFunction()\">&#9776;</a>\r\n  </div>\r\n  <!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n      <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n        <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item .item active\">\r\n            <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n          <li class=\"nav-item  .item\">\r\n            <a class=\"nav-link\" href=\"#\">Features</a>\r\n          </li>\r\n          <li class=\"nav-item .item\">\r\n            <a class=\"nav-link\" href=\"#\">Pricing</a>\r\n          </li>\r\n          <li class=\"nav-item  .item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              Dropdown link\r\n            </a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav> -->\r\n  \r\n<div class=\"homebody\">\r\n  <div id=\"carouselExampleControls\" class=\"carousel slide\" data-interval=\"3000\" pause=\"true\" >\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item .item active\">\r\n        <img class=\"d-block w-100 carosolimg img-fluid\" src=\"../../../assets/images/homehero1.jpg\" alt=\"First slide\">\r\n      </div>\r\n      <div class=\"carousel-item .item\">\r\n        <img class=\"d-block w-100 carosolimg img-fluid\" src=\"../../../assets/images/homehero1.jpg\" alt=\"Second slide\">\r\n      </div>\r\n      <div class=\"carousel-item .item\">\r\n        <img class=\"d-block w-100 carosolimg img-fluid\" src=\"../../../assets/images/homehero1.jpg\" alt=\"Third slide\">\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n  <div class=\"bodyView\">\r\n    <div class=\"bodyHeading\">\r\n        {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('products') |  uppercase}}</span>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-6\">\r\n            <div class=\"imageContainer\">\r\n                <img class=\"collectionGoldImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                <div class=\"bottom-left\"> {{ts.translate('gold') | titlecase }}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-6\">\r\n            <div class=\"imageContainer\">\r\n                <img class=\"collectionGoldImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                <div class=\"bottom-left\"> {{ts.translate('diamond') | titlecase }}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-12\">\r\n            <div class=\"imageContainer\">\r\n                <img class=\"collectionGoldImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                <div class=\"bottom-left\"> {{ts.translate('silver') | titlecase }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bodyView\">\r\n    <div class=\"bodyHeading\">\r\n        {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('collections') |  uppercase}}</span>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-12\">\r\n          <div class=\"imageContainer\">\r\n              <img class=\"collectionGoldImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n              <div class=\"bottom-left\"> {{ts.translate('wedding') | titlecase }}</div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-6\">\r\n          <div class=\"row\">\r\n              <div class=\"imageContainer\">\r\n                  <img class=\"collectionImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                  <div class=\"bottom-left lefter\">{{ts.translate('men') | titlecase}}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"imageContainer\">\r\n                    <img class=\"collectionImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                    <div class=\"bottom-left lefter\">{{ts.translate('women') | titlecase}}</div>\r\n                </div>\r\n             </div>\r\n         \r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-6\">\r\n          <div class=\"row\">\r\n              <div class=\"imageContainer\">\r\n                  <img class=\"collectionImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                  <div class=\"bottom-left lefter\">{{ts.translate('kids')| titlecase }}</div>\r\n              </div>\r\n            </div>\r\n          <div class=\"row\">\r\n             <div class=\"imageContainer\">\r\n                 <img class=\"collectionImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                 <div class=\"bottom-left lefter\">{{ts.translate('gifts') | titlecase}}</div>\r\n             </div>\r\n           </div>\r\n       </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n<div class=\"bodyView\">\r\n  <div class=\"bodyHeading\">\r\n    {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('promises') |  uppercase}}</span>\r\n  </div>\r\n  <div class=\"row marginTop\">\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer\">\r\n            <div class=\"promiseBody\">\r\n              Certified Pure Gold\r\n            </div>\r\n            <div class=\"numbering\">1</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer\">\r\n            <div class=\"promiseBody\">\r\n              All Jewels are brand new\r\n            </div>\r\n            <div class=\"numbering\">2</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer\">\r\n            <div class=\"promiseBody\">\r\n              Transparency in pricing\r\n            </div>\r\n            <div class=\"numbering\">3</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer\">\r\n            <div class=\"promiseBody\">\r\n              Secure Gold Scheme\r\n            </div>\r\n            <div class=\"numbering\">4</div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"bodyView\">\r\n  <div class=\"bodyHeading\">\r\n    {{ts.translate('top') |  uppercase}} <span class=\"bold\">{{ts.translate('sellingjewels') |  uppercase}}</span>\r\n  </div>\r\n<app-topselling></app-topselling>\r\n</div>\r\n<div class=\"bodyView\">\r\n  <div class=\"bodyHeading\">\r\n      {{ts.translate('whatpeople') |  uppercase}} <span class=\"bold\">{{ts.translate('talkaboutus') |  uppercase}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\r\n      <div class=\"userpic\">\r\n        <img class=\"userimg\" src=\"../../../assets/images/homehero1.jpg\" />\r\n        <div class=\"username\">\r\n          <div class=\"name\">User1</div>\r\n          <div class=\"designation\">Buisness Women</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"usercomment\">\r\n        <div>\r\n          <img src=\"../../../assets/images/DoubleQuotes.svg\" class=\"doublequotes\" />\r\n        </div>\r\n        <div class=\"comments\">\r\n            Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: \r\n            a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, \r\n            though, the unity and coherence of ideas among sentences is what constitutes a paragraph.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\r\n        <div class=\"userpic\">\r\n          <img class=\"userimg\" src=\"../../../assets/images/homehero1.jpg\" />\r\n          <div class=\"username\">\r\n            <div class=\"name\">User2</div>\r\n            <div class=\"designation\">Buisness Women</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"usercomment\">\r\n          <div>\r\n            <img src=\"../../../assets/images/DoubleQuotes.svg\" class=\"doublequotes\" />\r\n          </div>\r\n          <div class=\"comments\">\r\n              Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: \r\n              a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, \r\n              though, the unity and coherence of ideas among sentences is what constitutes a paragraph.\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"talktous\">\r\n  <div class=\"col-lg-9 col-md-9 col-sm-12 col-12\">\r\n    <div class=\"talktouspara\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit d do eiusmod tempor sed do eiusmod tempor incididunt ut labore et dolore.\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-3 col-md-3 col-sm-12 col-12\">\r\n    <button class=\"talktousButton\">\r\n      {{ts.translate('talktous')}}\r\n    </button>\r\n      \r\n  </div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css\");\n.wrapper {\n  overflow-y: hidden;\n  position: relative; }\n.carousel {\n  height: 100vh; }\n.carousel-inner {\n  height: 100%; }\n.carousel-item, .item, .carousel-item.active {\n  height: 100%; }\n.todaysrate {\n  position: fixed;\n  display: inline-flex;\n  top: 70%;\n  right: 0;\n  text-align: right;\n  z-index: 5;\n  cursor: pointer; }\n.bar {\n  height: 3px;\n  width: 3em;\n  margin-top: 3em;\n  box-shadow: 0 0 10px 1px #cfcfcf;\n  background-color: #A57F00; }\n.circle {\n  height: 6em;\n  width: 6em;\n  padding-top: 18px;\n  font-size: 12px;\n  padding-left: -10px;\n  text-align: center;\n  overflow-wrap: break-word;\n  white-space: break-spaces;\n  box-shadow: 0 0 10px 1px #cfcfcf;\n  border-radius: 50%;\n  background-color: #A57F00;\n  color: #fff; }\n.circle:hover .goldrate {\n  opacity: 1;\n  transform: scale(1);\n  color: black; }\n.goldrate {\n  width: 15em;\n  font-size: 12px;\n  position: absolute;\n  top: -8em;\n  right: 2em;\n  text-align: left;\n  box-shadow: 0 0 10px 1px grey;\n  background-color: #fff;\n  border-radius: 5px;\n  opacity: 0;\n  transform: scale(1.2);\n  transition: 0.3s all ease-in-out; }\n.goldratehead {\n  background-color: #A57F00;\n  color: #fff;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  padding: 8px; }\n.goldbody {\n  padding: 8px; }\n.topnav {\n  overflow: hidden;\n  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #272727 100%);\n  color: #fff;\n  font-family: 'opB';\n  text-align: center;\n  position: fixed;\n  width: 100%;\n  line-height: 4em;\n  transition: 0.3s all ease-in-out;\n  z-index: 2; }\n.topnav .lang {\n    padding: 0 2em; }\n.logo {\n  float: left; }\n.topnav a, .topnav div {\n  display: inline-flex;\n  color: #f2f2f2;\n  border-bottom: 5px solid transparent;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n  transition: 0.3s all ease-in-out; }\n#products {\n  margin-left: 14em; }\n.topnav.scrolled {\n  background: #fff;\n  background-color: #fff;\n  color: black !important;\n  line-height: 4em;\n  height: 7.3em;\n  box-shadow: 0 0 10px 1px #cfcfcf; }\n.topnav.scrolled a {\n    color: black; }\n.topnav.scrolled div, .topnav.scrolled div #language {\n    color: black; }\n.topnav.scrolled .lang {\n    padding: 0 2em; }\n.topnav .icon {\n  display: none; }\n.dropdown {\n  float: left;\n  overflow: hidden; }\n.dropdown .dropbtn {\n  font-size: 17px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0; }\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n.lang {\n  float: right;\n  padding: 0 2em; }\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left; }\n.topnav a:hover, .dropdown:hover .dropbtn {\n  border-bottom: 5px solid #CC9F08;\n  color: #CC9F08;\n  cursor: pointer; }\n.dropdown-content a:hover {\n  background-color: #ddd;\n  color: black; }\n.dropdown:hover .dropdown-content {\n  display: block; }\n#language {\n  background: transparent;\n  border: 0;\n  color: white; }\n#language:focus {\n  outline: 0; }\n#language option {\n  background-color: transparent;\n  border: 5px solid #fff;\n  border-radius: 5em;\n  color: grey; }\n.carosolimg {\n  transition: 0.3s all ease-in-out;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.carosolimg:hover {\n  transform: scale(1.2); }\n.bodyView {\n  padding: 2em 4em;\n  width: 100%; }\n.bodyHeading {\n  padding: 0 1em;\n  font-size: 26px;\n  margin: 2em 0;\n  border-left: 8px solid #CC9F08; }\n.bold {\n  font-family: opEB; }\n.imageContainer {\n  position: relative;\n  color: #fff;\n  padding: 2em 2em 0 0; }\n.phonelink {\n  padding-top: 1.1em; }\n.collectionGoldImage {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 530px;\n  border-radius: 10px;\n  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); }\n.collectionImage {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 250px;\n  border-radius: 10px;\n  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); }\n.bottom-left {\n  position: absolute;\n  bottom: 1em;\n  left: 1em;\n  font-family: 'opB';\n  font-size: 2em; }\n.collectionImage:hover, .collectionGoldImage:hover {\n  transform: translate(0, -8px);\n  box-shadow: 0 40px 40px rgba(0, 0, 0, 0.2); }\n.PromiseContainer {\n  background-color: #FFFBEF;\n  height: 144px;\n  text-align: center;\n  width: 100%;\n  padding: 4em;\n  border-radius: 5px;\n  position: relative; }\n.promiseBody {\n  font-family: opB;\n  font-size: 18px; }\n.numbering {\n  position: absolute;\n  top: -1em;\n  left: 2em;\n  width: 24px;\n  height: 24px;\n  background-color: #333333;\n  color: #fff;\n  font-size: 16px;\n  font-family: 'opEB';\n  border-radius: 5px; }\n.marginTop {\n  margin-top: 8em; }\n.userpic {\n  display: inline-flex;\n  height: 100px;\n  position: relative; }\n.userimg {\n  width: 100px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.doublequotes {\n  width: 30px;\n  height: 30px;\n  margin: 1em 0; }\n.username {\n  margin: auto;\n  padding: 0 2em; }\n.name {\n  color: #444444;\n  font-size: 18px; }\n.designation {\n  color: #999999;\n  font-size: 14px; }\n.comments {\n  font-size: 16px;\n  color: #777777; }\n.usercomment {\n  margin: 3em 0; }\n.talktous {\n  background-color: #F6F7F7;\n  color: #666666;\n  height: 146px;\n  margin: auto;\n  padding: 2em 1em;\n  font-size: 20px; }\n.talktousButton {\n  background-color: #CC9F08;\n  color: #fff;\n  border-radius: 5px;\n  margin: 1em;\n  float: right;\n  border: 0;\n  padding: 4px 16px; }\n@media screen and (max-width: 600px) {\n  .topnav a, .dropdown .dropbtn {\n    display: none; }\n  .topnav > .lang {\n    padding: 0; }\n  .topnav > .lang > .phonelink {\n    display: none; }\n  .topnav > .lang > #language {\n    position: absolute;\n    top: 1.5em;\n    z-index: 17;\n    right: 3em; }\n  .topnav a.icon {\n    float: right;\n    display: block; }\n  .homebody > .talktous {\n    font-size: 12px; }\n  .imageContainer {\n    padding: 2em 0em; }\n  .collectionGoldImage {\n    height: 20vh; }\n  .collectionImage {\n    padding: 1em;\n    border-radius: 25px;\n    height: 20em; }\n  .lefter {\n    bottom: 2em;\n    left: 2em; } }\n@media screen and (max-width: 600px) {\n  .topnav.responsive {\n    position: fixed; }\n  .topnav.responsive .icon {\n    position: absolute;\n    right: 0;\n    top: 0;\n    transition: 0.3s all ease-in-out; }\n  .topnav a.icon {\n    display: block;\n    position: absolute;\n    right: 0; }\n  .topnav.responsive a {\n    float: none;\n    display: block;\n    text-align: left;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown {\n    float: none;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown-content {\n    position: relative;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown .dropbtn {\n    display: block;\n    width: 100%;\n    text-align: left;\n    transition: 0.3s all ease-in-out; }\n  #products {\n    margin-left: 0em;\n    margin-top: 3em; }\n  .PromiseContainer {\n    margin-bottom: 4em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxEYXRhXFxnb3d0aGFtXFxTQkpcXHNiai5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUZBQVk7QUFFWjtFQUVFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUVwQjtFQUVBLGFBQVksRUFBQTtBQUdaO0VBRUUsWUFBVyxFQUFBO0FBRWI7RUFDRSxZQUFXLEVBQUE7QUFJYjtFQUVFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsUUFBUTtFQUNSLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGVBQWUsRUFBQTtBQUVqQjtFQUVFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyx5QkFBeUIsRUFBQTtBQUUzQjtFQUVFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVyxFQUFBO0FBRWI7RUFHSSxVQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFlBQVcsRUFBQTtBQUdmO0VBRUUsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN4QixrQkFBaUI7RUFDakIsVUFBUztFQUNULHFCQUFxQjtFQUNyQixnQ0FBZ0MsRUFBQTtBQUVoQztFQUVFLHlCQUF5QjtFQUN6QixXQUFXO0VBRVgsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixZQUFZLEVBQUE7QUFHZDtFQUVFLFlBQVcsRUFBQTtBQUViO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBFQUEwRTtFQUMxRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ25CLGtCQUFrQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUVoQixnQ0FBZ0M7RUFDaEMsVUFBVSxFQUFBO0FBWFo7SUFhSSxjQUFhLEVBQUE7QUFHZjtFQUVFLFdBQVUsRUFBQTtBQUtaO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZixvQ0FBb0M7RUFDbkMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0NBQStCLEVBQUE7QUFFakM7RUFFRSxpQkFBa0IsRUFBQTtBQUVwQjtFQUVFLGdCQUFnQjtFQUNsQixzQkFBc0I7RUFDdEIsdUJBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0NBQWdDLEVBQUE7QUFQaEM7SUFVSSxZQUFXLEVBQUE7QUFWZjtJQWNJLFlBQVcsRUFBQTtBQWRmO0lBaUJJLGNBQWEsRUFBQTtBQUtqQjtFQUNFLGFBQWEsRUFBQTtBQUdmO0VBQ0UsV0FBVztFQUNYLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLFNBQVMsRUFBQTtBQUdYO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLCtDQUE0QztFQUM1QyxVQUFVLEVBQUE7QUFFWjtFQUNFLFlBQVk7RUFDWixjQUFjLEVBQUE7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsZ0NBQStCO0VBQy9CLGNBQWM7RUFDZCxlQUFlLEVBQUE7QUFHakI7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWSxFQUFBO0FBR2Q7RUFDRSxjQUFjLEVBQUE7QUFNbEI7RUFDQyx1QkFBdUI7RUFDeEIsU0FBUztFQUNULFlBQVksRUFBQTtBQUVaO0VBQ0UsVUFBUyxFQUFBO0FBR1g7RUFFRSw2QkFBNkI7RUFDN0Isc0JBQXFCO0VBQ3JCLGtCQUFpQjtFQUNqQixXQUFVLEVBQUE7QUFPWjtFQUVFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBO0FBRWpCO0VBRUUscUJBQXFCLEVBQUE7QUFHdkI7RUFFRSxnQkFBZTtFQUNmLFdBQVUsRUFBQTtBQUdaO0VBRUUsY0FBYTtFQUNiLGVBQWU7RUFDZixhQUFZO0VBQ1osOEJBQTZCLEVBQUE7QUFHL0I7RUFFRSxpQkFBaUIsRUFBQTtBQUduQjtFQUVFLGtCQUFrQjtFQUNsQixXQUFVO0VBQ1Ysb0JBQW9CLEVBQUE7QUFFdEI7RUFFRSxrQkFBa0IsRUFBQTtBQUd0QjtFQUVFLFdBQVc7RUFDVCxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFHdEIsdURBQXVELEVBQUE7QUFHeEQ7RUFFRSxXQUFXO0VBQ1Qsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBR3RCLHVEQUF1RCxFQUFBO0FBR3REO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtBQUloQjtFQUtFLDZCQUE2QjtFQUM3QiwwQ0FBMEMsRUFBQTtBQUc1QztFQUVFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBR3BCO0VBRUUsZ0JBQWU7RUFDZixlQUFjLEVBQUE7QUFJaEI7RUFFRSxrQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFNBQVE7RUFDUixXQUFVO0VBQ1YsWUFBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFVO0VBQ1YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTtBQUdwQjtFQUVFLGVBQWUsRUFBQTtBQUVqQjtFQUVFLG9CQUFvQjtFQUNwQixhQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFFcEI7RUFFRSxZQUFXO0VBQ1gsb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBO0FBRW5CO0VBRUUsV0FBVTtFQUNWLFlBQVc7RUFDWCxhQUFZLEVBQUE7QUFFZDtFQUVFLFlBQVk7RUFDWixjQUFjLEVBQUE7QUFFaEI7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFBO0FBRWpCO0VBRUUsY0FBYztFQUNkLGVBQWUsRUFBQTtBQUVqQjtFQUVFLGVBQWU7RUFDZixjQUFjLEVBQUE7QUFFaEI7RUFFRSxhQUFhLEVBQUE7QUFFZjtFQUVFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCO0VBRUUseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUJBQWlCLEVBQUE7QUFHckI7RUFDRTtJQUNFLGFBQWEsRUFBQTtFQUdmO0lBRUUsVUFBUyxFQUFBO0VBRVg7SUFDRSxhQUFhLEVBQUE7RUFFZjtJQUVFLGtCQUFrQjtJQUNwQixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVUsRUFBQTtFQUVWO0lBQ0UsWUFBWTtJQUNaLGNBQWMsRUFBQTtFQUVoQjtJQUVFLGVBQWUsRUFBQTtFQUdqQjtJQUVFLGdCQUFnQixFQUFBO0VBRWxCO0lBRUUsWUFBWSxFQUFBO0VBRWY7SUFFRSxZQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVcsRUFBQTtFQUViO0lBRUUsV0FBVTtJQUNWLFNBQVEsRUFBQSxFQUNUO0FBS0Y7RUFDRTtJQUFvQixlQUFlLEVBQUE7RUFDbkM7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixnQ0FBZ0MsRUFBQTtFQUVsQztJQUVFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUSxFQUFBO0VBRVY7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQ0FBZ0MsRUFBQTtFQUVsQztJQUE4QixXQUFXO0lBQUcsZ0NBQWdDLEVBQUE7RUFDNUU7SUFBc0Msa0JBQWtCO0lBQUcsZ0NBQWdDLEVBQUE7RUFDM0Y7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQ0FBZ0MsRUFBQTtFQUdsQztJQUVFLGdCQUFnQjtJQUNoQixlQUFjLEVBQUE7RUFFaEI7SUFFRSxrQkFBaUIsRUFBQSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2Nkbi5tYXRlcmlhbGRlc2lnbmljb25zLmNvbS81LjQuNTUvY3NzL21hdGVyaWFsZGVzaWduaWNvbnMubWluLmNzc1wiKTtcclxuXHJcbi53cmFwcGVyXHJcbntcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jYXJvdXNlbFxyXG57XHJcbmhlaWdodDoxMDB2aDtcclxuICAgIFxyXG59XHJcbi5jYXJvdXNlbC1pbm5lclxyXG57XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuLmNhcm91c2VsLWl0ZW0gLCAuaXRlbSAsIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZXtcclxuICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuXHJcbi50b2RheXNyYXRlXHJcbntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgdG9wOiA3MCU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgei1pbmRleDogNTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJhclxyXG57XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgd2lkdGg6IDNlbTtcclxuICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4ICNjZmNmY2Y7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E1N0YwMDtcclxufVxyXG4uY2lyY2xlXHJcbntcclxuICBoZWlnaHQ6IDZlbTtcclxuICB3aWR0aDogNmVtO1xyXG4gIHBhZGRpbmctdG9wOiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IC0xMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4ICNjZmNmY2Y7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBNTdGMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmNpcmNsZTpob3ZlciB7XHJcbiAuZ29sZHJhdGV7XHJcblxyXG4gICAgb3BhY2l0eToxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gfVxyXG59XHJcbi5nb2xkcmF0ZVxyXG57XHJcbiAgd2lkdGg6IDE1ZW07XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC04ZW07XHJcbiAgcmlnaHQ6IDJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCBncmV5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5vcGFjaXR5OjA7XHJcbnRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxudHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmdvbGRyYXRlaGVhZFxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E1N0YwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG5cclxufVxyXG4uZ29sZGJvZHlcclxue1xyXG4gIHBhZGRpbmc6OHB4O1xyXG59XHJcbi50b3BuYXYge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsICMyNzI3MjcgMTAwJSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6ICdvcEInO1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBsaW5lLWhlaWdodDogNGVtO1xyXG4gIFxyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgLmxhbmd7XHJcbiAgICBwYWRkaW5nOjAgMmVtO1xyXG4gIH1cclxuICB9XHJcbiAgLmxvZ29cclxuICB7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gIH1cclxuICAudG9wbmF2IGF7XHJcblxyXG4gIH1cclxuICAudG9wbmF2IGEgLC50b3BuYXYgZGl2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgY29sb3I6ICNmMmYyZjI7XHJcbiAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRyYW5zaXRpb246MC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gICNwcm9kdWN0c1xyXG4gIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAgMTRlbTtcclxuICB9XHJcbiAgLnRvcG5hdi5zY3JvbGxlZFxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiA0ZW07XHJcbiAgaGVpZ2h0OiA3LjNlbTtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggI2NmY2ZjZjtcclxuICAgIGFcclxuICAgIHtcclxuICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcbiAgICBkaXYgLCBkaXYgICNsYW5ndWFnZVxyXG4gICAge1xyXG4gICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuICAgIC5sYW5ne1xyXG4gICAgICBwYWRkaW5nOjAgMmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICAudG9wbmF2IC5pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93biB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7ICAgIFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAubGFuZ3tcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDAgMmVtO1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdiBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTo1cHggc29saWQgI0NDOUYwODtcclxuICAgIGNvbG9yOiAjQ0M5RjA4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiBcclxuXHJcblxyXG4jbGFuZ3VhZ2Vcclxue2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5ib3JkZXI6IDA7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG4jbGFuZ3VhZ2U6Zm9jdXN7XHJcbiAgb3V0bGluZTowO1xyXG59XHJcblxyXG4jbGFuZ3VhZ2Ugb3B0aW9uXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6NXB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czo1ZW07XHJcbiAgY29sb3I6Z3JleTtcclxuXHJcbn1cclxuICAuaG9tZWJvZHlcclxuICB7XHJcbiAgIFxyXG4gIH1cclxuLmNhcm9zb2xpbWdcclxue1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4gIC5jYXJvc29saW1nOmhvdmVyXHJcbiAge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIH1cclxuXHJcbiAgLmJvZHlWaWV3XHJcbiAge1xyXG4gICAgcGFkZGluZzoyZW0gNGVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICB9XHJcblxyXG4gIC5ib2R5SGVhZGluZ1xyXG4gIHtcclxuICAgIHBhZGRpbmc6MCAxZW07XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBtYXJnaW46MmVtIDA7XHJcbiAgICBib3JkZXItbGVmdDo4cHggc29saWQgI0NDOUYwODtcclxuICB9XHJcblxyXG4gIC5ib2xkXHJcbiAge1xyXG4gICAgZm9udC1mYW1pbHk6IG9wRUI7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2VDb250YWluZXJcclxuICB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgcGFkZGluZzogMmVtIDJlbSAwIDA7XHJcbiAgfVxyXG4gIC5waG9uZWxpbmtcclxuICB7XHJcbiAgICBwYWRkaW5nLXRvcDogMS4xZW07XHJcbiAgfVxyXG5cclxuLmNvbGxlY3Rpb25Hb2xkSW1hZ2Vcclxue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDUzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcbn1cclxuXHJcbi5jb2xsZWN0aW9uSW1hZ2Vcclxue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcbn1cclxuXHJcbiAgLmJvdHRvbS1sZWZ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMWVtO1xyXG4gICAgbGVmdDogMWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcEInO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG5cclxuXHJcbiAgLmNvbGxlY3Rpb25JbWFnZTpob3ZlciAsIC5jb2xsZWN0aW9uR29sZEltYWdlOmhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLThweCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC04cHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC04cHgpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLThweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtOHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNDBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcblxyXG4gIC5Qcm9taXNlQ29udGFpbmVyXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkJFRjtcclxuICAgIGhlaWdodDogMTQ0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDRlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLnByb21pc2VCb2R5XHJcbiAge1xyXG4gICAgZm9udC1mYW1pbHk6b3BCO1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgXHJcbiAgfVxyXG5cclxuICAubnVtYmVyaW5nXHJcbiAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOi0xZW07XHJcbiAgICBsZWZ0OjJlbTtcclxuICAgIHdpZHRoOjI0cHg7XHJcbiAgICBoZWlnaHQ6MjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcEVCJztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4gIC5tYXJnaW5Ub3BcclxuICB7XHJcbiAgICBtYXJnaW4tdG9wOiA4ZW07XHJcbiAgfVxyXG4gIC51c2VycGljXHJcbiAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC51c2VyaW1nXHJcbiAge1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgLmRvdWJsZXF1b3Rlc1xyXG4gIHtcclxuICAgIHdpZHRoOjMwcHg7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIG1hcmdpbjoxZW0gMDtcclxuICB9XHJcbiAgLnVzZXJuYW1lXHJcbiAge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAyZW07XHJcbiAgfVxyXG4gIC5uYW1le1xyXG4gICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5kZXNpZ25hdGlvblxyXG4gIHtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAuY29tbWVudHNcclxuICB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxuICB9XHJcbiAgLnVzZXJjb21tZW50XHJcbiAge1xyXG4gICAgbWFyZ2luOiAzZW0gMDtcclxuICB9XHJcbiAgLnRhbGt0b3VzXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjdGNztcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgaGVpZ2h0OiAxNDZweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDJlbSAxZW07XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgIFxyXG4gIH1cclxuICAudGFsa3RvdXNCdXR0b25cclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0M5RjA4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC50b3BuYXYgYSwgLmRyb3Bkb3duIC5kcm9wYnRuICB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgXHJcbiAgfVxyXG4gIC50b3BuYXYgPiAubGFuZyB7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6MDtcclxuICB9XHJcbiAgLnRvcG5hdiA+IC5sYW5nID4gLnBob25lbGlua3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC50b3BuYXYgPiAubGFuZyA+ICNsYW5ndWFnZVxyXG4gIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEuNWVtO1xyXG4gIHotaW5kZXg6IDE3O1xyXG4gIHJpZ2h0OiAzZW07XHJcbiAgfVxyXG4gIC50b3BuYXYgYS5pY29uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuaG9tZWJvZHkgPiAudGFsa3RvdXNcclxuICB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2VDb250YWluZXJcclxuICB7XHJcbiAgICBwYWRkaW5nOiAyZW0gMGVtO1xyXG4gIH1cclxuICAuY29sbGVjdGlvbkdvbGRJbWFnZVxyXG4gIHtcclxuICAgIGhlaWdodDogMjB2aDtcclxuICB9XHJcbiAuY29sbGVjdGlvbkltYWdlXHJcbiB7XHJcbiAgIHBhZGRpbmc6MWVtO1xyXG4gICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICBoZWlnaHQ6MjBlbTtcclxuIH1cclxuIC5sZWZ0ZXJcclxuIHtcclxuICAgYm90dG9tOjJlbTtcclxuICAgbGVmdDoyZW07XHJcbiB9XHJcbn1cclxuXHJcblxyXG4gXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIHtwb3NpdGlvbjogZml4ZWQ7fVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSAuaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAudG9wbmF2IGEuaWNvblxyXG4gIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSBhIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSAuZHJvcGRvd24ge2Zsb2F0OiBub25lOyAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7fVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSAuZHJvcGRvd24tY29udGVudCB7cG9zaXRpb246IHJlbGF0aXZlOyAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7fVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSAuZHJvcGRvd24gLmRyb3BidG4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gICNwcm9kdWN0c1xyXG4gIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwZW07XHJcbiAgICBtYXJnaW4tdG9wOjNlbTtcclxuICB9XHJcbiAgLlByb21pc2VDb250YWluZXJcclxuICB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjRlbTtcclxuICB9XHJcbn1cclxuICBcclxuICJdfQ== */"

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
    HomeComponent.prototype.ngOnInit = function () {
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

/***/ "./src/app/components/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"productwrapper\">\n  <app-header></app-header>\n  <div class=\"productbody\">\n    <div class=\"productheroimgdiv\">\n      <img class=\"productheroimg\" src=\"../../../assets/images/homehero1.jpg\" />\n    </div>\n    <div class=\"mainbody row\">\n      <div class=\"col-lg-3 cent\">\n        <div class=\"findjewels\">\n          {{ ts.translate(\"findyourjewels\") | uppercase }}\n        </div>\n        <div class=\"selectedJewell\">{{ ts.translate(value) | uppercase }}</div>\n        <div class=\"btnGroup\">\n        \n\n          <label>\n            <input id=\"allproducts\" (change)=\"handleChange($event.target.value)\" type=\"radio\" value=\"allproducts\" name=\"productradio\" />\n            <span>{{ ts.translate(\"allproducts\") | titlecase }}</span>\n          </label>\n\n          <label>\n            <input id=\"maalai\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"maalai\" name=\"productradio\" />\n            <span>{{ ts.translate(\"maalai\") | titlecase }}</span>\n          </label>\n          <label>\n            <input id=\"bangles\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"bangles\" name=\"productradio\" />\n            <span>{{ ts.translate(\"bangles\") | titlecase }}</span>\n          </label>\n\n          <label>\n            <input id=\"necklace\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"necklace\" name=\"productradio\" />\n            <span>{{ ts.translate(\"necklace\") | titlecase }}</span>\n          </label>\n          <label>\n            <input id=\"chains\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"chains\"  name=\"productradio\" />\n            <span>{{ ts.translate(\"chains\") | titlecase }}</span>\n          </label>\n\n          <label>\n            <input id=\"earrings\" type=\"radio\" (change)=\"handleChange($event.target.value)\"  value=\"earings\" name=\"productradio\" />\n            <span>{{ ts.translate(\"earrings\") | titlecase }}</span>\n          </label>\n          <label>\n            <input id=\"rings\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"rings\"  name=\"productradio\" />\n            <span>{{ ts.translate(\"rings\") | titlecase }}</span>\n          </label>\n\n          <label>\n            <input id=\"bracelet\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"bracelet\"  name=\"productradio\" />\n            <span>{{ ts.translate(\"bracelet\") | titlecase }}</span>\n          </label>\n        </div>\n      </div>\n      <div class=\"col-lg-9 productsLists\">\n        <div class=\"ImgList\" *ngFor=\"let item of tempdata\">\n          <div class=\"indiImg\">\n            {{ item.name }}\n            <img\n              class=\"productimg\"\n              src=\"{{ item.imgsrc }}\"\n            \n            />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"productfooter\">\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/products/products.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productbody {\n  padding-top: 7em; }\n\n.productheroimgdiv {\n  width: 100%;\n  height: 50vh;\n  position: relative; }\n\n.productheroimg {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.filterList {\n  padding: 1em;\n  font-family: opEB;\n  color: black; }\n\n.cent {\n  text-align: center; }\n\n.btnGroup {\n  display: inline-block;\n  font-size: 20px;\n  background-color: #fff;\n  text-align: left;\n  padding: 0 0 0 5em; }\n\n.findjewels {\n  color: #333333;\n  background-color: #fff;\n  text-align: center;\n  font-size: 24px;\n  padding-left: 3em;\n  font-family: opEB;\n  margin-top: 2em;\n  padding-bottom: 1em; }\n\n.selectedJewell {\n  color: #CC9F08;\n  background-color: #fff;\n  text-align: left;\n  font-size: 24px;\n  padding-left: 4.2em;\n  font-family: opEB;\n  margin-bottom: 3em; }\n\n.ImgList {\n  display: inline-flex; }\n\n.indiImg {\n  margin: 4em 2em;\n  display: flex;\n  height: 300px;\n  width: 300px;\n  flex-flow: column-reverse; }\n\n.productimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%; }\n\n:checked + span {\n  color: #CC9F08;\n  transition: 0.3s ease-in-out; }\n\ninput[type=\"radio\"] {\n  display: none; }\n\n/* Optional other stuff just to make it look better */\n\nlabel {\n  display: inline-block;\n  width: 200px;\n  padding: 5px;\n  cursor: pointer;\n  transition: 0.2s ease-in-out; }\n\nspan {\n  transition: 0.3s ease-in-out; }\n\nlabel > span:hover {\n  color: #CC9F08; }\n\n.productsLists {\n  padding-top: 20em; }\n\n@media screen and (max-width: 600px) {\n  label {\n    display: inline-block;\n    width: auto;\n    padding: 1em;\n    white-space: nowrap;\n    /* font-size: 25px; */\n    cursor: pointer;\n    transition: 0.2s ease-in-out; }\n  .btnGroup {\n    display: inline-flex;\n    font-size: 20px;\n    background-color: #fff;\n    text-align: left;\n    flex-wrap: nowrap;\n    width: 100%;\n    overflow: auto;\n    padding: 1em 0 0 0; }\n  .findjewels, .selectedJewell {\n    display: none; }\n  .productsLists {\n    padding-top: 1em; }\n  .indiImg {\n    margin: 3em 1em;\n    display: flex;\n    width: 150px;\n    height: 150px;\n    flex-flow: column-reverse; }\n  .productimg {\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9DOlxcRGF0YVxcZ293dGhhbVxcU0JKXFxzYmouZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0c1xccHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBZSxFQUFBOztBQUVuQjtFQUVJLFdBQVc7RUFDZixZQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR2xCO0VBRUksWUFBVztFQUNYLFdBQVU7RUFDVixvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBRUksWUFBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFXLEVBQUE7O0FBS2Y7RUFFSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBS3JCO0VBRUcsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBYztFQUNkLG1CQUFtQixFQUFBOztBQUl0QjtFQUVHLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUlyQjtFQUVJLG9CQUFvQixFQUFBOztBQUd4QjtFQUVJLGVBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBWTtFQUNaLFlBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDRyxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLFlBQVcsRUFBQTs7QUFHZDtFQUVHLGNBQWM7RUFDZCw0QkFBNEIsRUFBQTs7QUFHaEM7RUFFQyxhQUFZLEVBQUE7O0FBRWIscURBQUE7O0FBQ0E7RUFDRyxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFjO0VBQ2QsNEJBQTRCLEVBQUE7O0FBRS9CO0VBQ0ksNEJBQTRCLEVBQUE7O0FBRWhDO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUVJLGlCQUFnQixFQUFBOztBQUVwQjtFQUNJO0lBRUkscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFCQUFBO0lBQ0EsZUFBZTtJQUNmLDRCQUE0QixFQUFBO0VBRWhDO0lBRUksb0JBQW9CO0lBQ3hCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsY0FBYztJQUVkLGtCQUFrQixFQUFBO0VBRWxCO0lBRUksYUFBWSxFQUFBO0VBRWhCO0lBRUksZ0JBQWUsRUFBQTtFQUduQjtJQUVJLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUIsRUFBQTtFQUc3QjtJQUVJLFlBQVk7SUFDWixvQkFDSjtPQURJLGlCQUNKLEVBQUEsRUFBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdGJvZHlcclxue1xyXG4gICAgcGFkZGluZy10b3A6N2VtO1xyXG59XHJcbi5wcm9kdWN0aGVyb2ltZ2RpdlxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuaGVpZ2h0OjUwdmg7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2R1Y3RoZXJvaW1nXHJcbntcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5maWx0ZXJMaXN0XHJcbntcclxuICAgIHBhZGRpbmc6MWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IG9wRUI7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuXHJcbi8vYnV0dG9uIGdyb3VwXHJcbi5jZW50XHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnRuR3JvdXB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDVlbTtcclxuICAgXHJcbiB9XHJcbiBcclxuXHJcbiAuZmluZGpld2Vsc1xyXG4ge1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzZW07XHJcbiAgICBmb250LWZhbWlseTogb3BFQjtcclxuICAgIG1hcmdpbi10b3A6MmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuIH1cclxuXHJcbiAuc2VsZWN0ZWRKZXdlbGxcclxuIHtcclxuICAgIGNvbG9yOiAjQ0M5RjA4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQuMmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IG9wRUI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XHJcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XHJcbiB9XHJcblxyXG4gLkltZ0xpc3RcclxuIHtcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuIH1cclxuXHJcbiAuaW5kaUltZ1xyXG4ge1xyXG4gICAgIG1hcmdpbjo0ZW0gMmVtO1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgaGVpZ2h0OjMwMHB4O1xyXG4gICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XHJcbiB9XHJcblxyXG4gLnByb2R1Y3RpbWd7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gfVxyXG5cclxuIDpjaGVja2VkICsgc3BhbiB7XHJcbiAgIFxyXG4gICAgY29sb3I6ICNDQzlGMDg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl1cclxue1xyXG4gZGlzcGxheTpub25lO1xyXG59XHJcbi8qIE9wdGlvbmFsIG90aGVyIHN0dWZmIGp1c3QgdG8gbWFrZSBpdCBsb29rIGJldHRlciAqL1xyXG5sYWJlbCB7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgd2lkdGg6IDIwMHB4O1xyXG4gICBwYWRkaW5nOiA1cHg7XHJcbiAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbnNwYW57XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmxhYmVsID4gc3Bhbjpob3ZlcntcclxuICAgIGNvbG9yOiAjQ0M5RjA4O1xyXG59XHJcbi5wcm9kdWN0c0xpc3RzXHJcbntcclxuICAgIHBhZGRpbmctdG9wOjIwZW07XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGxhYmVsXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIC8qIGZvbnQtc2l6ZTogMjVweDsgKi9cclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgIC5idG5Hcm91cFxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgIFxyXG4gICAgcGFkZGluZzogMWVtIDAgMCAwO1xyXG4gICAgfVxyXG4gICAgLmZpbmRqZXdlbHMgLCAuc2VsZWN0ZWRKZXdlbGxcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdHNMaXN0c1xyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjFlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5kaUltZ1xyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbjogM2VtIDFlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3RpbWdcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXJcclxuICAgIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(ts, sh, http) {
        this.ts = ts;
        this.sh = sh;
        this.http = http;
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
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
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
    ProductsComponent.prototype.getAllProducts = function () {
        return this.http.get('./assets/products.json', this.options);
    };
    ProductsComponent.prototype.handleChange = function (event) {
        var _this = this;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/topselling/topselling.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/topselling/topselling.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top content -->\r\n<div class=\"top-content\">\r\n  <div class=\"container-fluid\">\r\n      <div id=\"carousel-example\" class=\"carousel slide\" >\r\n          <div class=\"carousel-inner row w-100 mx-auto\" role=\"listbox\">\r\n              <div class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active\">\r\n                  <img  src=\"../../../assets/images/homehero1.jpg\" class=\"img-fluid mx-auto d-block topsellingimage\" alt=\"img1\">\r\n              </div>\r\n              <div class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3\">\r\n                  <img  src=\"../../../assets/images/homehero1.jpg\" class=\"img-fluid mx-auto d-block topsellingimage\" alt=\"img2\">\r\n              </div>\r\n              <div class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3\">\r\n                  <img  src=\"../../../assets/images/homehero1.jpg\" class=\"img-fluid mx-auto d-block topsellingimage\" alt=\"img3\">\r\n              </div>\r\n              <div class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3\">\r\n                  <img  src=\"../../../assets/images/homehero1.jpg\" class=\"img-fluid mx-auto d-block topsellingimage\" alt=\"img4\">\r\n              </div>\r\n              <div class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3\">\r\n                  <img  src=\"../../../assets/images/homehero1.jpg\" class=\"img-fluid mx-auto d-block topsellingimage\" alt=\"img5\">\r\n              </div>\r\n              <div class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3\">\r\n                  <img  src=\"../../../assets/images/homehero1.jpg\" class=\"img-fluid mx-auto d-block topsellingimage\" alt=\"img6\">\r\n              </div>\r\n              <div class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3\">\r\n                  <img  src=\"../../../assets/images/homehero1.jpg\" class=\"img-fluid mx-auto d-block topsellingimage\" alt=\"img7\">\r\n              </div>\r\n              <div class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3\">\r\n                  <img  src=\"../../../assets/images/homehero1.jpg\" class=\"img-fluid mx-auto d-block topsellingimage\" alt=\"img8\">\r\n              </div>\r\n          </div>\r\n          <a class=\"carousel-control-prev\" href=\"#carousel-example\" role=\"button\" data-slide=\"prev\">\r\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n              <span class=\"sr-only\">Previous</span>\r\n          </a>\r\n          <a class=\"carousel-control-next\" href=\"#carousel-example\" role=\"button\" data-slide=\"next\">\r\n              <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n              <span class=\"sr-only\">Next</span>\r\n          </a>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/topselling/topselling.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/topselling/topselling.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-content {\n  margin: 2em 0; }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  /* Show 4th slide on md if col-md-4*/\n  .carousel-inner .active.col-md-4.carousel-item + .carousel-item + .carousel-item + .carousel-item {\n    position: absolute;\n    top: 0;\n    right: -33.3333%;\n    /*change this with javascript in the future*/\n    z-index: -1;\n    display: block;\n    visibility: visible; } }\n\n@media (min-width: 576px) and (max-width: 768px) {\n  /* Show 3rd slide on sm if col-sm-6*/\n  .carousel-inner .active.col-sm-6.carousel-item + .carousel-item + .carousel-item {\n    position: absolute;\n    top: 0;\n    right: -50%;\n    /*change this with javascript in the future*/\n    z-index: -1;\n    display: block;\n    visibility: visible; } }\n\n@media (min-width: 576px) {\n  .carousel-item {\n    margin-right: 0; }\n  /* show 2 items */\n  .carousel-inner .active + .carousel-item {\n    display: block; }\n  .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left),\n  .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item {\n    transition: none; }\n  .carousel-inner .carousel-item-next {\n    position: relative;\n    transform: translate3d(0, 0, 0); }\n  /* left or forward direction */\n  .active.carousel-item-left + .carousel-item-next.carousel-item-left,\n  .carousel-item-next.carousel-item-left + .carousel-item,\n  .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item {\n    position: relative;\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible; }\n  /* farthest right hidden item must be also positioned for animations */\n  .carousel-inner .carousel-item-prev.carousel-item-right {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    display: block;\n    visibility: visible; }\n  /* right or prev direction */\n  .active.carousel-item-right + .carousel-item-prev.carousel-item-right,\n  .carousel-item-prev.carousel-item-right + .carousel-item,\n  .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item {\n    position: relative;\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n    display: block;\n    visibility: visible; } }\n\n/* MD */\n\n@media (min-width: 768px) {\n  /* show 3rd of 3 item slide */\n  .carousel-inner .active + .carousel-item + .carousel-item {\n    display: block; }\n  .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item {\n    transition: none; }\n  .carousel-inner .carousel-item-next {\n    position: relative;\n    transform: translate3d(0, 0, 0); }\n  /* left or forward direction */\n  .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item {\n    position: relative;\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible; }\n  /* right or prev direction */\n  .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item {\n    position: relative;\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n    display: block;\n    visibility: visible; } }\n\n/* LG */\n\n@media (min-width: 991px) {\n  /* show 4th item */\n  .carousel-inner .active + .carousel-item + .carousel-item + .carousel-item {\n    display: block; }\n  .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item + .carousel-item {\n    transition: none; }\n  /* Show 5th slide on lg if col-lg-3 */\n  .carousel-inner .active.col-lg-3.carousel-item + .carousel-item + .carousel-item + .carousel-item + .carousel-item {\n    position: absolute;\n    top: 0;\n    right: -25%;\n    /*change this with javascript in the future*/\n    z-index: -1;\n    display: block;\n    visibility: visible; }\n  /* left or forward direction */\n  .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item + .carousel-item {\n    position: relative;\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible; }\n  /* right or prev direction //t - previous slide direction last item animation fix */\n  .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item + .carousel-item {\n    position: relative;\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n    display: block;\n    visibility: visible; } }\n\n.carousel-item {\n  position: relative; }\n\n.topsellingimage {\n  width: 20em;\n  height: 20em;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3BzZWxsaW5nL0M6XFxEYXRhXFxnb3d0aGFtXFxTQkpcXHNiai5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRvcHNlbGxpbmdcXHRvcHNlbGxpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFZLEVBQUE7O0FBR2hCO0VBQ0ksb0NBQUE7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sZ0JBQWdCO0lBQUcsNENBQUE7SUFDbkIsV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUIsRUFBQSxFQUN0Qjs7QUFFTDtFQUNJLG9DQUFBO0VBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFBRyw0Q0FBQTtJQUNkLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CLEVBQUEsRUFDdEI7O0FBRUw7RUFDSTtJQUNJLGVBQWUsRUFBQTtFQUVuQixpQkFBQTtFQUNBO0lBQ0ksY0FBYyxFQUFBO0VBRWxCOztJQUVJLGdCQUFnQixFQUFBO0VBRXBCO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQixFQUFBO0VBRW5DLDhCQUFBO0VBQ0E7OztJQUdJLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsbUJBQW1CLEVBQUE7RUFFdkIsc0VBQUE7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CLEVBQUE7RUFFdkIsNEJBQUE7RUFDQTs7O0lBR0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG1CQUFtQixFQUFBLEVBQ3RCOztBQUVMLE9BQUE7O0FBQ0E7RUFDSSw2QkFBQTtFQUNBO0lBQ0ksY0FBYyxFQUFBO0VBRWxCO0lBQ0ksZ0JBQWdCLEVBQUE7RUFFcEI7SUFDSSxrQkFBa0I7SUFDbEIsK0JBQStCLEVBQUE7RUFFbkMsOEJBQUE7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsbUJBQW1CLEVBQUE7RUFFdkIsNEJBQUE7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxtQkFBbUIsRUFBQSxFQUN0Qjs7QUFFTCxPQUFBOztBQUNBO0VBQ0ksa0JBQUE7RUFDQTtJQUNJLGNBQWMsRUFBQTtFQUVsQjtJQUNJLGdCQUFnQixFQUFBO0VBRXBCLHFDQUFBO0VBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFBRyw0Q0FBQTtJQUNkLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CLEVBQUE7RUFFdkIsOEJBQUE7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsbUJBQW1CLEVBQUE7RUFFdkIsbUZBQUE7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxtQkFBbUIsRUFBQSxFQUN0Qjs7QUFFTDtFQUVJLGtCQUFrQixFQUFBOztBQUV0QjtFQUVBLFdBQVc7RUFDUCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b3BzZWxsaW5nL3RvcHNlbGxpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWNvbnRlbnRcclxue1xyXG4gICAgbWFyZ2luOjJlbSAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLyogU2hvdyA0dGggc2xpZGUgb24gbWQgaWYgY29sLW1kLTQqL1xyXG4gICAgLmNhcm91c2VsLWlubmVyIC5hY3RpdmUuY29sLW1kLTQuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogLTMzLjMzMzMlOyAgLypjaGFuZ2UgdGhpcyB3aXRoIGphdmFzY3JpcHQgaW4gdGhlIGZ1dHVyZSovXHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLyogU2hvdyAzcmQgc2xpZGUgb24gc20gaWYgY29sLXNtLTYqL1xyXG4gICAgLmNhcm91c2VsLWlubmVyIC5hY3RpdmUuY29sLXNtLTYuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IC01MCU7ICAvKmNoYW5nZSB0aGlzIHdpdGggamF2YXNjcmlwdCBpbiB0aGUgZnV0dXJlKi9cclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICAgIC8qIHNob3cgMiBpdGVtcyAqL1xyXG4gICAgLmNhcm91c2VsLWlubmVyIC5hY3RpdmUgKyAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0uYWN0aXZlOm5vdCguY2Fyb3VzZWwtaXRlbS1yaWdodCk6bm90KC5jYXJvdXNlbC1pdGVtLWxlZnQpLFxyXG4gICAgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZTpub3QoLmNhcm91c2VsLWl0ZW0tcmlnaHQpOm5vdCguY2Fyb3VzZWwtaXRlbS1sZWZ0KSArIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtLW5leHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgfVxyXG4gICAgLyogbGVmdCBvciBmb3J3YXJkIGRpcmVjdGlvbiAqL1xyXG4gICAgLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLWxlZnQgKyAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCxcclxuICAgIC5jYXJvdXNlbC1pdGVtLW5leHQuY2Fyb3VzZWwtaXRlbS1sZWZ0ICsgLmNhcm91c2VsLWl0ZW0sXHJcbiAgICAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gICAgLyogZmFydGhlc3QgcmlnaHQgaGlkZGVuIGl0ZW0gbXVzdCBiZSBhbHNvIHBvc2l0aW9uZWQgZm9yIGFuaW1hdGlvbnMgKi9cclxuICAgIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbS1wcmV2LmNhcm91c2VsLWl0ZW0tcmlnaHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gICAgLyogcmlnaHQgb3IgcHJldiBkaXJlY3Rpb24gKi9cclxuICAgIC5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1yaWdodCArIC5jYXJvdXNlbC1pdGVtLXByZXYuY2Fyb3VzZWwtaXRlbS1yaWdodCxcclxuICAgIC5jYXJvdXNlbC1pdGVtLXByZXYuY2Fyb3VzZWwtaXRlbS1yaWdodCArIC5jYXJvdXNlbC1pdGVtLFxyXG4gICAgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0ICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG59XHJcbi8qIE1EICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLyogc2hvdyAzcmQgb2YgMyBpdGVtIHNsaWRlICovXHJcbiAgICAuY2Fyb3VzZWwtaW5uZXIgLmFjdGl2ZSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZTpub3QoLmNhcm91c2VsLWl0ZW0tcmlnaHQpOm5vdCguY2Fyb3VzZWwtaXRlbS1sZWZ0KSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0tbmV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICAvKiBsZWZ0IG9yIGZvcndhcmQgZGlyZWN0aW9uICovXHJcbiAgICAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcbiAgICAvKiByaWdodCBvciBwcmV2IGRpcmVjdGlvbiAqL1xyXG4gICAgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0ICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcbn1cclxuLyogTEcgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcbiAgICAvKiBzaG93IDR0aCBpdGVtICovXHJcbiAgICAuY2Fyb3VzZWwtaW5uZXIgLmFjdGl2ZSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0uYWN0aXZlOm5vdCguY2Fyb3VzZWwtaXRlbS1yaWdodCk6bm90KC5jYXJvdXNlbC1pdGVtLWxlZnQpICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLyogU2hvdyA1dGggc2xpZGUgb24gbGcgaWYgY29sLWxnLTMgKi9cclxuICAgIC5jYXJvdXNlbC1pbm5lciAuYWN0aXZlLmNvbC1sZy0zLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogLTI1JTsgIC8qY2hhbmdlIHRoaXMgd2l0aCBqYXZhc2NyaXB0IGluIHRoZSBmdXR1cmUqL1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcbiAgICAvKiBsZWZ0IG9yIGZvcndhcmQgZGlyZWN0aW9uICovXHJcbiAgICAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuICAgIC8qIHJpZ2h0IG9yIHByZXYgZGlyZWN0aW9uIC8vdCAtIHByZXZpb3VzIHNsaWRlIGRpcmVjdGlvbiBsYXN0IGl0ZW0gYW5pbWF0aW9uIGZpeCAqL1xyXG4gICAgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0ICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxufVxyXG4uY2Fyb3VzZWwtaXRlbVxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnRvcHNlbGxpbmdpbWFnZVxyXG57XHJcbndpZHRoOiAyMGVtO1xyXG4gICAgaGVpZ2h0OiAyMGVtO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn0iXX0= */"

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

module.exports = __webpack_require__(/*! C:\Data\gowtham\SBJ\sbj.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map