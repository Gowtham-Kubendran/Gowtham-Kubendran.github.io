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





var routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "**",
        component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    }
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
                _components_topselling_topselling_component__WEBPACK_IMPORTED_MODULE_9__["TopsellingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
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

module.exports = "<div class=\"footer\">\r\n  <div class=\"row\">\r\n    <div class=\"columl col-lg-6 col-md-6 col-sm-6 col-6\">\r\n      <div class=\"logo\">\r\n        SBJ MART\r\n      </div>\r\n      <div class=\"copyrights\">\r\n         Copyrights @ SBJ 2021 | Powered By NEW ERA\r\n      </div>\r\n    </div>\r\n    <div class=\"columr col-lg-6 col-md-6 col-sm-6 col-6\">\r\n      <div class=\"menulinks\">\r\n          <a class=\"\" href=\"#home\">{{ts.translate('products')}}</a>\r\n          <a href=\"#news\">{{ts.translate('collections')}}</a>\r\n          <a href=\"#contact\">{{ts.translate('goldschemes')}}</a>\r\n          <a href=\"#about\">{{ts.translate('aboutus')}}</a>\r\n          <a href=\"#about\">{{ts.translate('contactus')}}</a>\r\n      </div>\r\n      <div class=\"socialmodeia\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  height: 200px;\n  margin: auto;\n  position: relative;\n  background-color: #101010;\n  color: #fff; }\n\n.columl {\n  padding: 5em 6em; }\n\n.columr {\n  padding: 5em 4em 0 0;\n  text-align: right; }\n\n.logo {\n  font-size: 36px;\n  padding-bottom: 1em; }\n\n.copyrights {\n  letter-spacing: 2px;\n  font-size: 14px; }\n\n@media screen and (max-width: 600px) {\n  .menulinks {\n    display: inline-grid; }\n  .logo {\n    font-size: 24px;\n    padding-bottom: 0px; }\n  .copyrights {\n    font-size: 7px; } }\n\n.menulinks a {\n  text-decoration: none;\n  color: #fff;\n  padding: 0 2em;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXERhdGFcXGdvd3RoYW1cXFNCSlxcc2JqLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUVmO0VBRUksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBRUksb0JBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUVyQjtFQUVJLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFFdkI7RUFFSSxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUduQjtFQUNJO0lBRUksb0JBQW9CLEVBQUE7RUFFeEI7SUFFSSxlQUFlO0lBQ25CLG1CQUFtQixFQUFBO0VBRW5CO0lBR0EsY0FBYyxFQUFBLEVBQ2I7O0FBV0w7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyXHJcbntcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDEwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmNvbHVtbFxyXG57XHJcbiAgICBwYWRkaW5nOiA1ZW0gNmVtO1xyXG59XHJcbi5jb2x1bXJcclxue1xyXG4gICAgcGFkZGluZzo1ZW0gNGVtIDAgMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5sb2dvXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbn1cclxuLmNvcHlyaWdodHNcclxue1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5tZW51bGlua3NcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgIH1cclxuICAgIC5sb2dvXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIC5jb3B5cmlnaHRzXHJcbiAgICB7XHJcbiAgICAgXHJcbiAgICBmb250LXNpemU6IDdweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4ubWVudWxpbmtzIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAgMmVtO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59Il19 */"

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

module.exports = "\r\n<div class=\"topnav\" id=\"myTopnav\">\r\n  <a href=\"#home\" class=\"navLink\">Home</a>\r\n  <a href=\"#news\" class=\"navLink\">News</a>\r\n  <a href=\"#contact\" class=\"navLink\">Contact</a>\r\n  <div class=\"dropdown\">\r\n    <button class=\"dropbtn navLink\">Dropdown \r\n      <i class=\"fa fa-caret-down\"></i>\r\n    </button>\r\n    <div class=\"dropdown-content\">\r\n      <a href=\"#\">Link 1</a>\r\n      <a href=\"#\">Link 2</a>\r\n      <a href=\"#\">Link 3</a>\r\n    </div>\r\n  </div> \r\n  <a href=\"#about\" class=\"navLink\">About</a>\r\n  <a href=\"javascript:void(0);\" style=\"font-size:15px;\" class=\"icon\" (click)=\"myFunction()\">&#9776;</a>\r\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0;\n  font-family: Arial; }\n\n.topnav {\n  overflow: hidden;\n  background: white;\n  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #272727 100%);\n  text-align: center;\n  height: 3.6em; }\n\n.topnav a {\n  display: inline-flex;\n  color: #fff;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px; }\n\n.active {\n  background-color: #4CAF50;\n  color: white; }\n\n.topnav .icon {\n  display: none; }\n\n.dropdown {\n  float: left;\n  overflow: hidden; }\n\n.dropdown .dropbtn {\n  font-size: 17px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0;\n  transition: 0.3s all ease-in-out; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n.dropdown-content a {\n  float: none;\n  color: grey;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left; }\n\n.topnav a:hover, .dropdown:hover .dropbtn {\n  border-bottom: 5px solid #CC9F08;\n  color: #CC9F08; }\n\n.dropdown-content a:hover {\n  background-color: #ddd;\n  color: black; }\n\n.dropdown:hover .dropdown-content {\n  display: block; }\n\n@media screen and (max-width: 600px) {\n  .topnav a:not(:first-child), .dropdown .dropbtn {\n    display: none; }\n  .topnav a.icon {\n    float: right;\n    display: block; } }\n\n@media screen and (max-width: 600px) {\n  .topnav.responsive {\n    position: relative; }\n  .topnav.responsive .icon {\n    position: absolute;\n    right: 0;\n    top: 0; }\n  .topnav.responsive a {\n    float: none;\n    display: block;\n    text-align: left; }\n  .topnav.responsive .dropdown {\n    float: none; }\n  .topnav.responsive .dropdown-content {\n    position: relative; }\n  .topnav.responsive .dropdown .dropbtn {\n    display: block;\n    width: 100%;\n    text-align: left; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXERhdGFcXGdvd3RoYW1cXFNCSlxcc2JqLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTSxTQUFRO0VBQUMsa0JBQWlCLEVBQUE7O0FBRWhDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUE0QjtFQUM5QiwwRUFBZ0Y7RUFDOUUsa0JBQWtCO0VBQ2hCLGFBQWEsRUFBQTs7QUFHakI7RUFFRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLCtDQUE0QztFQUM1QyxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdDQUFnQztFQUNoQyxjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRTtJQUNFLGFBQWEsRUFBQTtFQUVmO0lBQ0UsWUFBWTtJQUNaLGNBQWMsRUFBQSxFQUNmOztBQUdIO0VBQ0U7SUFBb0Isa0JBQWtCLEVBQUE7RUFDdEM7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU0sRUFBQTtFQUVSO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTtFQUVsQjtJQUE4QixXQUFXLEVBQUE7RUFDekM7SUFBc0Msa0JBQWtCLEVBQUE7RUFDeEQ7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQixFQUFBLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7bWFyZ2luOjA7Zm9udC1mYW1pbHk6QXJpYWx9XHJcblxyXG4udG9wbmF2IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLCByZ2JhKDM5LDM5LDM5LDEpIDEwMCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMy42ZW07XHJcbn1cclxuXHJcbi50b3BuYXYgYSB7XHJcbiAgXHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRvcG5hdiAuaWNvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZHJvcGRvd24gLmRyb3BidG4ge1xyXG4gIGZvbnQtc2l6ZTogMTdweDsgICAgXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIG1hcmdpbjogMDtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICBmbG9hdDogbm9uZTtcclxuICBjb2xvcjogZ3JleTtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50b3BuYXYgYTpob3ZlciwgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI0NDOUYwODtcclxuICBjb2xvcjogI0NDOUYwODtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnRvcG5hdiBhOm5vdCg6Zmlyc3QtY2hpbGQpLCAuZHJvcGRvd24gLmRyb3BidG4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnRvcG5hdiBhLmljb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSB7cG9zaXRpb246IHJlbGF0aXZlO31cclxuICAudG9wbmF2LnJlc3BvbnNpdmUgLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSBhIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAudG9wbmF2LnJlc3BvbnNpdmUgLmRyb3Bkb3duIHtmbG9hdDogbm9uZTt9XHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIC5kcm9wZG93bi1jb250ZW50IHtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSAuZHJvcGRvd24gLmRyb3BidG4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59Il19 */"

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


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "theme", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "\r\n<div class=\"wrapper\">\r\n \r\n  <div class=\"todaysrate\">\r\n    \r\n    <div class=\"circle\">{{ts.translate('todaysrate')}}\r\n        <div class=\"goldrate\">\r\n            <div class=\"goldratehead\">\r\n                {{ts.translate('todaysrate')}}\r\n            </div>\r\n            <div class=\"goldbody\">\r\n             <div> <span class=\"bold\">Gold 1gm</span> - RS 4800</div>\r\n             <div> <span class=\"bold\">Silver 1gm</span> - RS 80</div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    <div class=\"bar\"></div>\r\n    \r\n\r\n  </div>\r\n\r\n  <div class=\"topnav\" id=\"myTopnav\">\r\n      <div class=\"logo\" id=\"logo\">\r\n        Logo\r\n      </div>\r\n    <a class=\"\" href=\"#home\">{{ts.translate('products')}}</a>\r\n    <a href=\"#news\">{{ts.translate('collections')}}</a>\r\n    <a href=\"#contact\">{{ts.translate('goldschemes')}}\r\n\r\n    </a>\r\n    \r\n    <a href=\"#about\">{{ts.translate('aboutus')}}</a>\r\n    <a href=\"#about\">{{ts.translate('contactus')}}</a>\r\n    <div class=\"lang \">\r\n      <div class=\"phonelink\">9042222681 &nbsp;&nbsp;&nbsp;|</div>\r\n        <select name=\"language\"   (change)=\"getLang($event)\" id=\"language\">\r\n            <option value=\"EN\">English</option>\r\n            <option value=\"TA\">தமிழ்</option>\r\n           \r\n           \r\n          </select>\r\n      </div>\r\n    <a href=\"javascript:void(0);\" style=\"font-size:15px;\" class=\"icon\" (click)=\"myFunction()\">&#9776;</a>\r\n  </div>\r\n  <!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n      <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n        <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item .item active\">\r\n            <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n          <li class=\"nav-item  .item\">\r\n            <a class=\"nav-link\" href=\"#\">Features</a>\r\n          </li>\r\n          <li class=\"nav-item .item\">\r\n            <a class=\"nav-link\" href=\"#\">Pricing</a>\r\n          </li>\r\n          <li class=\"nav-item  .item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              Dropdown link\r\n            </a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav> -->\r\n  \r\n<div class=\"homebody\">\r\n  <div id=\"carouselExampleControls\" class=\"carousel slide\" data-interval=\"3000\" pause=\"true\" >\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item .item active\">\r\n        <img class=\"d-block w-100 carosolimg img-fluid\" src=\"../../../assets/images/homehero1.jpg\" alt=\"First slide\">\r\n      </div>\r\n      <div class=\"carousel-item .item\">\r\n        <img class=\"d-block w-100 carosolimg img-fluid\" src=\"../../../assets/images/homehero1.jpg\" alt=\"Second slide\">\r\n      </div>\r\n      <div class=\"carousel-item .item\">\r\n        <img class=\"d-block w-100 carosolimg img-fluid\" src=\"../../../assets/images/homehero1.jpg\" alt=\"Third slide\">\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n  <div class=\"bodyView\">\r\n    <div class=\"bodyHeading\">\r\n        {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('products') |  uppercase}}</span>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6\">\r\n            <div class=\"imageContainer\">\r\n                <img class=\"collectionGoldImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                <div class=\"bottom-left\"> {{ts.translate('gold') | titlecase }}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6\">\r\n            <div class=\"imageContainer\">\r\n                <img class=\"collectionGoldImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                <div class=\"bottom-left\"> {{ts.translate('diamond') | titlecase }}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6\">\r\n            <div class=\"imageContainer\">\r\n                <img class=\"collectionGoldImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                <div class=\"bottom-left\"> {{ts.translate('silver') | titlecase }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bodyView\">\r\n    <div class=\"bodyHeading\">\r\n        {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('collections') |  uppercase}}</span>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6\">\r\n          <div class=\"imageContainer\">\r\n              <img class=\"collectionGoldImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n              <div class=\"bottom-left\"> {{ts.translate('wedding') | titlecase }}</div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6\">\r\n          <div class=\"row\">\r\n              <div class=\"imageContainer\">\r\n                  <img class=\"collectionImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                  <div class=\"bottom-left\">{{ts.translate('men') | titlecase}}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"imageContainer\">\r\n                    <img class=\"collectionImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                    <div class=\"bottom-left\">{{ts.translate('women') | titlecase}}</div>\r\n                </div>\r\n             </div>\r\n         \r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6\">\r\n          <div class=\"row\">\r\n              <div class=\"imageContainer\">\r\n                  <img class=\"collectionImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                  <div class=\"bottom-left\">{{ts.translate('kids')| titlecase }}</div>\r\n              </div>\r\n            </div>\r\n          <div class=\"row\">\r\n             <div class=\"imageContainer\">\r\n                 <img class=\"collectionImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                 <div class=\"bottom-left\">{{ts.translate('gifts') | titlecase}}</div>\r\n             </div>\r\n           </div>\r\n       </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n<div class=\"bodyView\">\r\n  <div class=\"bodyHeading\">\r\n    {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('promises') |  uppercase}}</span>\r\n  </div>\r\n  <div class=\"row marginTop\">\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer\">\r\n            <div class=\"promiseBody\">\r\n              Certified Pure Gold\r\n            </div>\r\n            <div class=\"numbering\">1</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer\">\r\n            <div class=\"promiseBody\">\r\n              All Jewels are brand new\r\n            </div>\r\n            <div class=\"numbering\">2</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer\">\r\n            <div class=\"promiseBody\">\r\n              Transparency in pricing\r\n            </div>\r\n            <div class=\"numbering\">3</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer\">\r\n            <div class=\"promiseBody\">\r\n              Secure Gold Scheme\r\n            </div>\r\n            <div class=\"numbering\">4</div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"bodyView\">\r\n  <div class=\"bodyHeading\">\r\n    {{ts.translate('top') |  uppercase}} <span class=\"bold\">{{ts.translate('sellingjewels') |  uppercase}}</span>\r\n  </div>\r\n<app-topselling></app-topselling>\r\n</div>\r\n<div class=\"bodyView\">\r\n  <div class=\"bodyHeading\">\r\n      {{ts.translate('whatpeople') |  uppercase}} <span class=\"bold\">{{ts.translate('talkaboutus') |  uppercase}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\r\n      <div class=\"userpic\">\r\n        <img class=\"userimg\" src=\"../../../assets/images/homehero1.jpg\" />\r\n        <div class=\"username\">\r\n          <div class=\"name\">User1</div>\r\n          <div class=\"designation\">Buisness Women</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"usercomment\">\r\n        <div>\r\n          <img src=\"../../../assets/images/DoubleQuotes.svg\" class=\"doublequotes\" />\r\n        </div>\r\n        <div class=\"comments\">\r\n            Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: \r\n            a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, \r\n            though, the unity and coherence of ideas among sentences is what constitutes a paragraph.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\r\n        <div class=\"userpic\">\r\n          <img class=\"userimg\" src=\"../../../assets/images/homehero1.jpg\" />\r\n          <div class=\"username\">\r\n            <div class=\"name\">User2</div>\r\n            <div class=\"designation\">Buisness Women</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"usercomment\">\r\n          <div>\r\n            <img src=\"../../../assets/images/DoubleQuotes.svg\" class=\"doublequotes\" />\r\n          </div>\r\n          <div class=\"comments\">\r\n              Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: \r\n              a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, \r\n              though, the unity and coherence of ideas among sentences is what constitutes a paragraph.\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"talktous\">\r\n  <div class=\"col-lg-9 col-md-9 col-sm-12 col-12\">\r\n    <div class=\"talktouspara\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit d do eiusmod tempor sed do eiusmod tempor incididunt ut labore et dolore.\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-3 col-md-3 col-sm-12 col-12\">\r\n    <button class=\"talktousButton\">\r\n      {{ts.translate('talktous')}}\r\n    </button>\r\n      \r\n  </div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css\");\n.wrapper {\n  overflow-y: hidden;\n  position: relative; }\n.carousel {\n  height: 100vh; }\n.carousel-inner {\n  height: 100%; }\n.carousel-item, .item, .carousel-item.active {\n  height: 100%; }\n.todaysrate {\n  position: fixed;\n  display: inline-flex;\n  top: 70%;\n  right: 0;\n  text-align: right;\n  z-index: 5;\n  cursor: pointer; }\n.bar {\n  height: 5px;\n  width: 3em;\n  margin-top: 4em;\n  box-shadow: 0 0 10px 1px #cfcfcf;\n  background-color: #A57F00; }\n.circle {\n  height: 7em;\n  width: 7em;\n  padding-top: 33px;\n  font-size: 12px;\n  padding-left: -10px;\n  text-align: center;\n  box-shadow: 0 0 10px 1px #cfcfcf;\n  border-radius: 50%;\n  background-color: #A57F00;\n  color: #fff; }\n.circle:hover .goldrate {\n  opacity: 1;\n  transform: scale(1);\n  color: black; }\n.goldrate {\n  width: 15em;\n  font-size: 12px;\n  position: absolute;\n  top: -8em;\n  right: 2em;\n  text-align: left;\n  box-shadow: 0 0 10px 1px grey;\n  background-color: #fff;\n  border-radius: 5px;\n  opacity: 0;\n  transform: scale(1.2);\n  transition: 0.3s all ease-in-out; }\n.goldratehead {\n  background-color: #A57F00;\n  color: #fff;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  padding: 8px; }\n.goldbody {\n  padding: 8px; }\n.topnav {\n  overflow: hidden;\n  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #272727 100%);\n  color: #fff;\n  text-align: center;\n  position: fixed;\n  width: 100%;\n  line-height: 4em;\n  transition: 0.3s all ease-in-out;\n  z-index: 2; }\n.topnav .lang {\n    padding: 0 2em; }\n.logo {\n  float: left; }\n.topnav a, .topnav div {\n  display: inline-flex;\n  color: #f2f2f2;\n  border-bottom: 5px solid transparent;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n  transition: 0.3s all ease-in-out; }\n.topnav.scrolled {\n  background: #fff;\n  background-color: #fff;\n  color: black !important;\n  line-height: 4em;\n  box-shadow: 0 0 10px 1px #cfcfcf; }\n.topnav.scrolled a {\n    color: black; }\n.topnav.scrolled div, .topnav.scrolled div #language {\n    color: black; }\n.topnav.scrolled .lang {\n    padding: 0 2em; }\n.topnav .icon {\n  display: none; }\n.dropdown {\n  float: left;\n  overflow: hidden; }\n.dropdown .dropbtn {\n  font-size: 17px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0; }\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n.lang {\n  float: right;\n  padding: 0 2em; }\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left; }\n.topnav a:hover, .dropdown:hover .dropbtn {\n  border-bottom: 5px solid #CC9F08;\n  color: #CC9F08; }\n.dropdown-content a:hover {\n  background-color: #ddd;\n  color: black; }\n.dropdown:hover .dropdown-content {\n  display: block; }\n@media screen and (max-width: 600px) {\n  .topnav a, .dropdown .dropbtn {\n    display: none; }\n  .topnav > .lang {\n    padding: 0; }\n  .topnav > .lang > .phonelink {\n    display: none; }\n  .topnav > .lang > #language {\n    position: absolute;\n    top: 1.5em;\n    z-index: 17;\n    right: 3em; }\n  .topnav a.icon {\n    float: right;\n    display: block; }\n  .homebody > .talktous {\n    font-size: 12px; } }\n@media screen and (max-width: 600px) {\n  .topnav.responsive {\n    position: fixed; }\n  .topnav.responsive .icon {\n    position: absolute;\n    right: 0;\n    top: 0;\n    transition: 0.3s all ease-in-out; }\n  .topnav a.icon {\n    display: block;\n    position: absolute;\n    right: 0; }\n  .topnav.responsive a {\n    float: none;\n    display: block;\n    text-align: left;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown {\n    float: none;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown-content {\n    position: relative;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown .dropbtn {\n    display: block;\n    width: 100%;\n    text-align: left;\n    transition: 0.3s all ease-in-out; } }\n#language {\n  background: transparent;\n  border: 0;\n  color: white; }\n#language:focus {\n  outline: 0; }\n#language option {\n  background-color: transparent;\n  border: 5px solid #fff;\n  border-radius: 5em;\n  color: grey; }\n.carosolimg {\n  transition: 0.3s all ease-in-out;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.carosolimg:hover {\n  transform: scale(1.2); }\n.bodyView {\n  padding: 2em 4em;\n  width: 100%; }\n.bodyHeading {\n  padding: 0 1em;\n  font-size: 26px;\n  margin: 2em 0;\n  border-left: 8px solid #CC9F08; }\n.bold {\n  font-family: opEB; }\n.imageContainer {\n  position: relative;\n  color: #fff;\n  padding: 2em 2em 0 0; }\n.phonelink {\n  padding-top: 1.1em; }\n.collectionGoldImage {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 530px;\n  border-radius: 10px;\n  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); }\n.collectionImage {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 250px;\n  border-radius: 10px;\n  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); }\n.bottom-left {\n  position: absolute;\n  bottom: 1em;\n  left: 1em;\n  font-family: 'opB';\n  font-size: 2em; }\n.collectionImage:hover, .collectionGoldImage:hover {\n  transform: translate(0, -8px);\n  box-shadow: 0 40px 40px rgba(0, 0, 0, 0.2); }\n.PromiseContainer {\n  background-color: #FFFBEF;\n  height: 144px;\n  text-align: center;\n  width: 100%;\n  padding: 4em;\n  border-radius: 5px;\n  position: relative; }\n.promiseBody {\n  font-family: opB;\n  font-size: 18px; }\n.numbering {\n  position: absolute;\n  top: -1em;\n  left: 2em;\n  width: 24px;\n  height: 24px;\n  background-color: #333333;\n  color: #fff;\n  font-size: 16px;\n  font-family: 'opEB';\n  border-radius: 5px; }\n.marginTop {\n  margin-top: 8em; }\n.userpic {\n  display: inline-flex;\n  height: 100px;\n  position: relative; }\n.userimg {\n  width: 100px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.doublequotes {\n  width: 30px;\n  height: 30px;\n  margin: 1em 0; }\n.username {\n  margin: auto;\n  padding: 0 2em; }\n.name {\n  color: #444444;\n  font-size: 18px; }\n.designation {\n  color: #999999;\n  font-size: 14px; }\n.comments {\n  font-size: 16px;\n  color: #777777; }\n.usercomment {\n  margin: 3em 0; }\n.talktous {\n  background-color: #F6F7F7;\n  color: #666666;\n  height: 146px;\n  margin: auto;\n  padding: 2em 1em;\n  font-size: 20px; }\n.talktousButton {\n  background-color: #CC9F08;\n  color: #fff;\n  border-radius: 5px;\n  margin: 1em;\n  float: right;\n  border: 0;\n  padding: 4px 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxEYXRhXFxnb3d0aGFtXFxTQkpcXHNiai5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUZBQVk7QUFFWjtFQUVFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUVwQjtFQUVBLGFBQVksRUFBQTtBQUdaO0VBRUUsWUFBVyxFQUFBO0FBRWI7RUFDRSxZQUFXLEVBQUE7QUFJYjtFQUVFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsUUFBUTtFQUNSLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGVBQWUsRUFBQTtBQUVqQjtFQUVFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyx5QkFBeUIsRUFBQTtBQUUzQjtFQUVFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTtBQUViO0VBR0ksVUFBUztFQUNULG1CQUFtQjtFQUNuQixZQUFXLEVBQUE7QUFHZjtFQUVFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDeEIsa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxxQkFBcUI7RUFDckIsZ0NBQWdDLEVBQUE7QUFFaEM7RUFFRSx5QkFBeUI7RUFDekIsV0FBVztFQUVYLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsWUFBWSxFQUFBO0FBR2Q7RUFFRSxZQUFXLEVBQUE7QUFFYjtFQUNFLGdCQUFnQjtFQUNoQiwwRUFBMEU7RUFDMUUsV0FBVztFQUNaLGtCQUFrQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUVoQixnQ0FBZ0M7RUFDaEMsVUFBVSxFQUFBO0FBVlo7SUFZSSxjQUFhLEVBQUE7QUFHZjtFQUVFLFdBQVUsRUFBQTtBQUtaO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZixvQ0FBb0M7RUFDbkMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0NBQStCLEVBQUE7QUFFakM7RUFFRSxnQkFBZ0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHVCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0NBQWdDLEVBQUE7QUFOaEM7SUFTSSxZQUFXLEVBQUE7QUFUZjtJQWFJLFlBQVcsRUFBQTtBQWJmO0lBZ0JJLGNBQWEsRUFBQTtBQUtqQjtFQUNFLGFBQWEsRUFBQTtBQUdmO0VBQ0UsV0FBVztFQUNYLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLFNBQVMsRUFBQTtBQUdYO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLCtDQUE0QztFQUM1QyxVQUFVLEVBQUE7QUFFWjtFQUNFLFlBQVk7RUFDWixjQUFjLEVBQUE7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsZ0NBQStCO0VBQy9CLGNBQWMsRUFBQTtBQUdoQjtFQUNFLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7QUFHZDtFQUNFLGNBQWMsRUFBQTtBQUdoQjtFQUNFO0lBQ0UsYUFBYSxFQUFBO0VBR2Y7SUFFRSxVQUFTLEVBQUE7RUFFWDtJQUNFLGFBQWEsRUFBQTtFQUVmO0lBRUUsa0JBQWtCO0lBQ3BCLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVSxFQUFBO0VBRVY7SUFDRSxZQUFZO0lBQ1osY0FBYyxFQUFBO0VBRWhCO0lBRUUsZUFBZSxFQUFBLEVBQ2hCO0FBTUg7RUFDRTtJQUFvQixlQUFlLEVBQUE7RUFDbkM7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixnQ0FBZ0MsRUFBQTtFQUVsQztJQUVFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUSxFQUFBO0VBRVY7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQ0FBZ0MsRUFBQTtFQUVsQztJQUE4QixXQUFXO0lBQUcsZ0NBQWdDLEVBQUE7RUFDNUU7SUFBc0Msa0JBQWtCO0lBQUcsZ0NBQWdDLEVBQUE7RUFDM0Y7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQ0FBZ0MsRUFBQSxFQUNqQztBQUdMO0VBQ0MsdUJBQXVCO0VBQ3hCLFNBQVM7RUFDVCxZQUFZLEVBQUE7QUFFWjtFQUNFLFVBQVMsRUFBQTtBQUdYO0VBRUUsNkJBQTZCO0VBQzdCLHNCQUFxQjtFQUNyQixrQkFBaUI7RUFDakIsV0FBVSxFQUFBO0FBT1o7RUFFRSxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTtBQUVqQjtFQUVFLHFCQUFxQixFQUFBO0FBR3ZCO0VBRUUsZ0JBQWU7RUFDZixXQUFVLEVBQUE7QUFHWjtFQUVFLGNBQWE7RUFDYixlQUFlO0VBQ2YsYUFBWTtFQUNaLDhCQUE2QixFQUFBO0FBRy9CO0VBRUUsaUJBQWlCLEVBQUE7QUFHbkI7RUFFRSxrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLG9CQUFvQixFQUFBO0FBRXRCO0VBRUUsa0JBQWtCLEVBQUE7QUFHdEI7RUFFRSxXQUFXO0VBQ1Qsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBR3RCLHVEQUF1RCxFQUFBO0FBR3hEO0VBRUUsV0FBVztFQUNULG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUd0Qix1REFBdUQsRUFBQTtBQUd0RDtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7QUFJaEI7RUFLRSw2QkFBNkI7RUFDN0IsMENBQTBDLEVBQUE7QUFHNUM7RUFFRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUdwQjtFQUVFLGdCQUFlO0VBQ2YsZUFBYyxFQUFBO0FBSWhCO0VBRUUsa0JBQWtCO0VBQ2xCLFNBQVE7RUFDUixTQUFRO0VBQ1IsV0FBVTtFQUNWLFlBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7QUFHcEI7RUFFRSxlQUFlLEVBQUE7QUFFakI7RUFFRSxvQkFBb0I7RUFDcEIsYUFBWTtFQUNaLGtCQUFrQixFQUFBO0FBRXBCO0VBRUUsWUFBVztFQUNYLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTtBQUVuQjtFQUVFLFdBQVU7RUFDVixZQUFXO0VBQ1gsYUFBWSxFQUFBO0FBRWQ7RUFFRSxZQUFZO0VBQ1osY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYztFQUNkLGVBQWUsRUFBQTtBQUVqQjtFQUVFLGNBQWM7RUFDZCxlQUFlLEVBQUE7QUFFakI7RUFFRSxlQUFlO0VBQ2YsY0FBYyxFQUFBO0FBRWhCO0VBRUUsYUFBYSxFQUFBO0FBRWY7RUFFRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjtFQUVFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLm1hdGVyaWFsZGVzaWduaWNvbnMuY29tLzUuNC41NS9jc3MvbWF0ZXJpYWxkZXNpZ25pY29ucy5taW4uY3NzXCIpO1xyXG5cclxuLndyYXBwZXJcclxue1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNhcm91c2VsXHJcbntcclxuaGVpZ2h0OjEwMHZoO1xyXG4gICAgXHJcbn1cclxuLmNhcm91c2VsLWlubmVyXHJcbntcclxuICBoZWlnaHQ6MTAwJTtcclxufVxyXG4uY2Fyb3VzZWwtaXRlbSAsIC5pdGVtICwgLmNhcm91c2VsLWl0ZW0uYWN0aXZle1xyXG4gIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG5cclxuLnRvZGF5c3JhdGVcclxue1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB0b3A6IDcwJTtcclxuICByaWdodDogMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB6LWluZGV4OiA1O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYmFyXHJcbntcclxuICBoZWlnaHQ6IDVweDtcclxuICB3aWR0aDogM2VtO1xyXG4gIG1hcmdpbi10b3A6IDRlbTtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggI2NmY2ZjZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTU3RjAwO1xyXG59XHJcbi5jaXJjbGVcclxue1xyXG4gIGhlaWdodDogN2VtO1xyXG4gIHdpZHRoOiA3ZW07XHJcbiAgcGFkZGluZy10b3A6IDMzcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogLTEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCAjY2ZjZmNmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTU3RjAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5jaXJjbGU6aG92ZXIge1xyXG4gLmdvbGRyYXRle1xyXG5cclxuICAgIG9wYWNpdHk6MTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBjb2xvcjpibGFjaztcclxuIH1cclxufVxyXG4uZ29sZHJhdGVcclxue1xyXG4gIHdpZHRoOiAxNWVtO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtOGVtO1xyXG4gIHJpZ2h0OiAyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggZ3JleTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5ib3JkZXItcmFkaXVzOjVweDtcclxub3BhY2l0eTowO1xyXG50cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbnRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5nb2xkcmF0ZWhlYWRcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBNTdGMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcblxyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbn1cclxuLmdvbGRib2R5XHJcbntcclxuICBwYWRkaW5nOjhweDtcclxufVxyXG4udG9wbmF2IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCAjMjcyNzI3IDEwMCUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBsaW5lLWhlaWdodDogNGVtO1xyXG4gIFxyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgLmxhbmd7XHJcbiAgICBwYWRkaW5nOjAgMmVtO1xyXG4gIH1cclxuICB9XHJcbiAgLmxvZ29cclxuICB7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gIH1cclxuICAudG9wbmF2IGF7XHJcblxyXG4gIH1cclxuICAudG9wbmF2IGEgLC50b3BuYXYgZGl2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgY29sb3I6ICNmMmYyZjI7XHJcbiAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRyYW5zaXRpb246MC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC50b3BuYXYuc2Nyb2xsZWRcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogNGVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCAjY2ZjZmNmO1xyXG4gICAgYVxyXG4gICAge1xyXG4gICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuICAgIGRpdiAsIGRpdiAgI2xhbmd1YWdlXHJcbiAgICB7XHJcbiAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgfVxyXG4gICAgLmxhbmd7XHJcbiAgICAgIHBhZGRpbmc6MCAyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC50b3BuYXYgLmljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duIC5kcm9wYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDsgICAgXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC5sYW5ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMCAyZW07XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IGE6aG92ZXIsIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XHJcbiAgICBib3JkZXItYm90dG9tOjVweCBzb2xpZCAjQ0M5RjA4O1xyXG4gICAgY29sb3I6ICNDQzlGMDg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnRvcG5hdiBhLCAuZHJvcGRvd24gLmRyb3BidG4gIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAudG9wbmF2ID4gLmxhbmcge1xyXG4gICAgICBcclxuICAgICAgcGFkZGluZzowO1xyXG4gICAgfVxyXG4gICAgLnRvcG5hdiA+IC5sYW5nID4gLnBob25lbGlua3tcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC50b3BuYXYgPiAubGFuZyA+ICNsYW5ndWFnZVxyXG4gICAge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEuNWVtO1xyXG4gICAgei1pbmRleDogMTc7XHJcbiAgICByaWdodDogM2VtO1xyXG4gICAgfVxyXG4gICAgLnRvcG5hdiBhLmljb24ge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmhvbWVib2R5ID4gLnRhbGt0b3VzXHJcbiAgICB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgfVxyXG5cclxuIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAudG9wbmF2LnJlc3BvbnNpdmUge3Bvc2l0aW9uOiBmaXhlZDt9XHJcbiAgICAudG9wbmF2LnJlc3BvbnNpdmUgLmljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgLnRvcG5hdiBhLmljb25cclxuICAgIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAudG9wbmF2LnJlc3BvbnNpdmUgYSB7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICAudG9wbmF2LnJlc3BvbnNpdmUgLmRyb3Bkb3duIHtmbG9hdDogbm9uZTsgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O31cclxuICAgIC50b3BuYXYucmVzcG9uc2l2ZSAuZHJvcGRvd24tY29udGVudCB7cG9zaXRpb246IHJlbGF0aXZlOyAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7fVxyXG4gICAgLnRvcG5hdi5yZXNwb25zaXZlIC5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuI2xhbmd1YWdlXHJcbntiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuYm9yZGVyOiAwO1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuI2xhbmd1YWdlOmZvY3Vze1xyXG4gIG91dGxpbmU6MDtcclxufVxyXG5cclxuI2xhbmd1YWdlIG9wdGlvblxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOjVweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6NWVtO1xyXG4gIGNvbG9yOmdyZXk7XHJcblxyXG59XHJcbiAgLmhvbWVib2R5XHJcbiAge1xyXG4gICBcclxuICB9XHJcbi5jYXJvc29saW1nXHJcbntcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuICAuY2Fyb3NvbGltZzpob3ZlclxyXG4gIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICB9XHJcblxyXG4gIC5ib2R5Vmlld1xyXG4gIHtcclxuICAgIHBhZGRpbmc6MmVtIDRlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgfVxyXG5cclxuICAuYm9keUhlYWRpbmdcclxuICB7XHJcbiAgICBwYWRkaW5nOjAgMWVtO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgbWFyZ2luOjJlbSAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6OHB4IHNvbGlkICNDQzlGMDg7XHJcbiAgfVxyXG5cclxuICAuYm9sZFxyXG4gIHtcclxuICAgIGZvbnQtZmFtaWx5OiBvcEVCO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlQ29udGFpbmVyXHJcbiAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHBhZGRpbmc6IDJlbSAyZW0gMCAwO1xyXG4gIH1cclxuICAucGhvbmVsaW5rXHJcbiAge1xyXG4gICAgcGFkZGluZy10b3A6IDEuMWVtO1xyXG4gIH1cclxuXHJcbi5jb2xsZWN0aW9uR29sZEltYWdlXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiA1MzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG59XHJcblxyXG4uY29sbGVjdGlvbkltYWdlXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG59XHJcblxyXG4gIC5ib3R0b20tbGVmdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDFlbTtcclxuICAgIGxlZnQ6IDFlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BCJztcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxuXHJcblxyXG4gIC5jb2xsZWN0aW9uSW1hZ2U6aG92ZXIgLCAuY29sbGVjdGlvbkdvbGRJbWFnZTpob3ZlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC04cHgpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtOHB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtOHB4KTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC04cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLThweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDQwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG5cclxuICAuUHJvbWlzZUNvbnRhaW5lclxyXG4gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZCRUY7XHJcbiAgICBoZWlnaHQ6IDE0NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA0ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9taXNlQm9keVxyXG4gIHtcclxuICAgIGZvbnQtZmFtaWx5Om9wQjtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgLm51bWJlcmluZ1xyXG4gIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDotMWVtO1xyXG4gICAgbGVmdDoyZW07XHJcbiAgICB3aWR0aDoyNHB4O1xyXG4gICAgaGVpZ2h0OjI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BFQic7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG5cclxuICAubWFyZ2luVG9wXHJcbiAge1xyXG4gICAgbWFyZ2luLXRvcDogOGVtO1xyXG4gIH1cclxuICAudXNlcnBpY1xyXG4gIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAudXNlcmltZ1xyXG4gIHtcclxuICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIC5kb3VibGVxdW90ZXNcclxuICB7XHJcbiAgICB3aWR0aDozMHB4O1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbiAgICBtYXJnaW46MWVtIDA7XHJcbiAgfVxyXG4gIC51c2VybmFtZVxyXG4gIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMmVtO1xyXG4gIH1cclxuICAubmFtZXtcclxuICAgIGNvbG9yOiAjNDQ0NDQ0O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAuZGVzaWduYXRpb25cclxuICB7XHJcbiAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLmNvbW1lbnRzXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgfVxyXG4gIC51c2VyY29tbWVudFxyXG4gIHtcclxuICAgIG1hcmdpbjogM2VtIDA7XHJcbiAgfVxyXG4gIC50YWxrdG91c1xyXG4gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY3Rjc7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIGhlaWdodDogMTQ2cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyZW0gMWVtO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBcclxuICB9XHJcbiAgLnRhbGt0b3VzQnV0dG9uXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDOUYwODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcclxufVxyXG4gIFxyXG4gIl19 */"

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
    function HomeComponent(ts) {
        this.ts = ts;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
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
    todaysrate: 'Todays Rate',
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