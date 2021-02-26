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
/* harmony import */ var _components_gold_schemes_gold_schemes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/gold-schemes/gold-schemes.component */ "./src/app/components/gold-schemes/gold-schemes.component.ts");
/* harmony import */ var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contactus/contactus.component */ "./src/app/components/contactus/contactus.component.ts");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/components/aboutus/aboutus.component.ts");
/* harmony import */ var _components_collections_collections_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/collections/collections.component */ "./src/app/components/collections/collections.component.ts");










var routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'products/:metal',
        component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"]
    },
    {
        path: 'goldschemes',
        component: _components_gold_schemes_gold_schemes_component__WEBPACK_IMPORTED_MODULE_6__["GoldSchemesComponent"]
    },
    {
        path: 'contactus',
        component: _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__["ContactusComponent"]
    },
    {
        path: 'aboutus',
        component: _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_8__["AboutusComponent"]
    },
    {
        path: 'collections',
        component: _components_collections_collections_component__WEBPACK_IMPORTED_MODULE_9__["CollectionsComponent"]
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
/* harmony import */ var _components_gold_schemes_gold_schemes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/gold-schemes/gold-schemes.component */ "./src/app/components/gold-schemes/gold-schemes.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/contactus/contactus.component */ "./src/app/components/contactus/contactus.component.ts");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/components/aboutus/aboutus.component.ts");
/* harmony import */ var _components_collections_collections_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/collections/collections.component */ "./src/app/components/collections/collections.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_talktous_talktous_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/talktous/talktous.component */ "./src/app/components/talktous/talktous.component.ts");
/* harmony import */ var _components_todaysrate_todaysrate_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/todaysrate/todaysrate.component */ "./src/app/components/todaysrate/todaysrate.component.ts");





















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
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__["DialogDataExampleDialog"],
                _components_collections_collections_component__WEBPACK_IMPORTED_MODULE_17__["DialogDataExample"],
                _components_gold_schemes_gold_schemes_component__WEBPACK_IMPORTED_MODULE_13__["GoldSchemesComponent"],
                _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_15__["ContactusComponent"],
                _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_16__["AboutusComponent"],
                _components_collections_collections_component__WEBPACK_IMPORTED_MODULE_17__["CollectionsComponent"],
                _components_talktous_talktous_component__WEBPACK_IMPORTED_MODULE_19__["TalktousComponent"],
                _components_todaysrate_todaysrate_component__WEBPACK_IMPORTED_MODULE_20__["TodaysrateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _app_material_module_material_module_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModuleModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_14__["SlickCarouselModule"],
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_components_products_products_component__WEBPACK_IMPORTED_MODULE_10__["DialogDataExampleDialog"], _components_collections_collections_component__WEBPACK_IMPORTED_MODULE_17__["DialogDataExample"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"aboutuswrapper\">\n    <app-header></app-header>\n    \n\n      <div class=\"schemebody\">\n          <app-todaysrate></app-todaysrate>\n          <div class=\"productheroimgdiv\">\n            <img class=\"productheroimg\" src=\"../../../assets/images/homehero1.jpg\" />\n          </div>\n          <div class=\"schemetext\">\n            <div class=\"bodyHeading\">\n              {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('story') |  uppercase}}</span>\n          </div>\n          <p>\n            {{ts.translate('aboutusdata1')}}\n          </p>\n          </div>\n      </div>\n      <div class=\"linkstab\">\n        <a (click)=\"goToPage('home')\"><img class=\"homeimg pointer\" src=\"../../../assets/images/homeicon.svg\"></a>\n        <span class=\"padl15\"> <img class=\"downarrow \" src=\"../../../assets/images/downarrow.png\"/> <span class=\"padl15 pointer\"> <a (click)=\"goToPage('aboutus')\"  >{{ts.translate('aboutus')}} </a></span> </span> \n      \n    \n      </div>\n      <app-footer></app-footer>\n      </div>\n    "

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".schemebody {\n  padding: 7em 0 0em 0;\n  position: relative; }\n\n.productheroimgdiv {\n  width: 100%;\n  height: 50vh;\n  position: relative; }\n\n.productheroimg {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.schemetext {\n  padding: 2em 7em; }\n\n.bodyHeading {\n  padding: 0 0.5em;\n  font-size: 26px;\n  margin: 2em 0;\n  border-left: 8px solid #CC9F08; }\n\n.bold {\n  font-family: opEB; }\n\np {\n  font-size: 18px;\n  line-height: 2em;\n  text-align: justify; }\n\n.linkstab {\n  display: inline-flex;\n  color: #fff;\n  background-color: #171717;\n  font-size: 14px;\n  font-family: 'opR';\n  width: 100%;\n  padding: 11px 65px; }\n\n.downarrow {\n  height: 12px;\n  transform: rotate(-90deg); }\n\n.padl15 {\n  padding-left: 15px; }\n\n.homeimg {\n  height: 22px;\n  width: 22px; }\n\n.pointer {\n  cursor: pointer; }\n\n@media screen and (max-width: 600px) {\n  .schemetext {\n    padding: 2em; }\n  p {\n    font-size: 14px; }\n  .linkstab {\n    padding: 11px 40px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dHVzL0M6XFxEYXRhXFxnb3d0aGFtXFxTQkpcXHNiai5naXRodWIuaW9cXHNiai9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWJvdXR1c1xcYWJvdXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFvQjtFQUNwQixrQkFBaUIsRUFBQTs7QUFFckI7RUFFSSxXQUFXO0VBQ2YsWUFBVztFQUNYLGtCQUFrQixFQUFBOztBQUdsQjtFQUVJLFlBQVc7RUFDWCxXQUFVO0VBQ1Ysb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBOztBQUVyQjtFQUVJLGdCQUFnQixFQUFBOztBQUdwQjtFQUVFLGdCQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQVk7RUFDWiw4QkFBNkIsRUFBQTs7QUFFL0I7RUFFSSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFFRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUlyQjtFQUVFLG9CQUFvQjtFQUNwQixXQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLGtCQUFpQixFQUFBOztBQUVyQjtFQUVJLFlBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFFN0I7RUFFSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFFSSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUlmO0VBRUksZUFBYyxFQUFBOztBQUdoQjtFQUNFO0lBRUUsWUFBVyxFQUFBO0VBR2I7SUFDRSxlQUFjLEVBQUE7RUFFaEI7SUFFSSxrQkFBa0IsRUFBQSxFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjaGVtZWJvZHlcclxue1xyXG4gICAgcGFkZGluZzogN2VtIDAgMGVtIDA7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4ucHJvZHVjdGhlcm9pbWdkaXZcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbmhlaWdodDo1MHZoO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9kdWN0aGVyb2ltZ1xyXG57XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uc2NoZW1ldGV4dFxyXG57XHJcbiAgICBwYWRkaW5nOiAyZW0gN2VtO1xyXG59XHJcblxyXG4uYm9keUhlYWRpbmdcclxue1xyXG4gIHBhZGRpbmc6MCAwLjVlbTtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgbWFyZ2luOjJlbSAwO1xyXG4gIGJvcmRlci1sZWZ0OjhweCBzb2xpZCAjQ0M5RjA4O1xyXG59XHJcbi5ib2xkXHJcbiAge1xyXG4gICAgZm9udC1mYW1pbHk6IG9wRUI7XHJcbiAgfVxyXG5cclxuICBwXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5saW5rc3RhYlxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcFInO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBhZGRpbmc6MTFweCA2NXB4O1xyXG59XHJcbi5kb3duYXJyb3dcclxue1xyXG4gICAgaGVpZ2h0OjEycHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG59XHJcbi5wYWRsMTVcclxue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5ob21laW1nXHJcbntcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5wb2ludGVyXHJcbntcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuc2NoZW1ldGV4dFxyXG4gICAge1xyXG4gICAgICBwYWRkaW5nOjJlbTtcclxuICAgIH1cclxuICBcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH07XHJcbiAgICAubGlua3N0YWJcclxuICAgIHtcclxuICAgICAgICBwYWRkaW5nOiAxMXB4IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AboutusComponent = /** @class */ (function () {
    function AboutusComponent(ts, router) {
        this.ts = ts;
        this.router = router;
    }
    AboutusComponent.prototype.ngOnInit = function () {
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AboutusComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/components/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.scss */ "./src/app/components/aboutus/aboutus.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/components/collections/collections.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/collections/collections.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"productwrapper\">\n    <app-header></app-header>\n    <div class=\"productbody\">\n        <app-todaysrate></app-todaysrate>\n      <div class=\"productheroimgdiv\">\n        <img class=\"productheroimg\" src=\"../../../assets/images/homehero1.jpg\" />\n      </div>\n      <div class=\"mainbody \">\n        <div class=\"row center\">\n        <div class=\"col-lg-3 cent\">\n          \n          <div class=\"findjewels\">\n            {{ ts.translate(\"findyourjewels\") | uppercase }}\n          </div>\n          <div id=\"selectedJewell\" class=\"selectedJewell\">{{ ts.translate(selectedValue) | uppercase }}</div>\n          <div class=\"btnGroup\">\n           <label>\n              <input id=\"allcollections\" (change)=\"handleChange($event.target.value)\" type=\"radio\" value=\"allcollections\" name=\"productradio\" />\n              <span>{{ ts.translate(\"allcollections\") | titlecase }}</span>\n            </label>\n  \n            <label>\n                <input id=\"marriage\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"marriage\" name=\"productradio\" />\n                <span>{{ ts.translate(\"wedding\") | titlecase }}</span>\n              </label>\n\n            <label>\n              <input id=\"men\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"men\" name=\"productradio\" />\n              <span>{{ ts.translate(\"men\") | titlecase }}</span>\n            </label>\n            <label>\n              <input id=\"women\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"women\" name=\"productradio\" />\n              <span>{{ ts.translate(\"women\") | titlecase }}</span>\n            </label>\n  \n            <label>\n              <input id=\"gifts\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"gifts\" name=\"productradio\" />\n              <span>{{ ts.translate(\"gifts\") | titlecase }}</span>\n            </label>\n            <label>\n              <input id=\"kids\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"kids\"  name=\"productradio\" />\n              <span>{{ ts.translate(\"kids\") | titlecase }}</span>\n            </label>\n  \n            \n          </div>\n        \n        </div>\n\n\n        <div id=\"dropdown\" class=\"dropdown\">\n            <div class=\"staticfield\">\n              <label> {{ ts.translate(\"findyourjewels\") | uppercase }}</label>\n            <mat-form-field appearance=\"outline\">\n          \n            <mat-select class=\"dropdownselect\" [(ngModel)]=\"selectedoption\" (selectionChange)=\"handleChange($event.value)\" name=\"jwelltype\">\n              <mat-option class=\"droptext\" *ngFor=\"let item of types\" [value]=\"item.key\">\n                {{item.value | titlecase }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n          </div>\n          \n        <div id=\"productsLists\" class=\"col-lg-9 productsLists\">\n          <div *ngIf=\"showspinner\" class=\"col-12 col-lg-12 col-md-12 col-sm-12 center\">  <mat-spinner></mat-spinner></div>\n          <div class=\"ImgList col-lg-4 col-md-4 col-sm-6 col-6\" *ngFor=\"let item of tempdata\">\n            <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\n            <a class=\"zoombut\" (click)=\"openDialog(item)\">Click to zoom</a>\n              <!-- <button mat-button (click)=\"openDialog(item)\">Click to Zoom</button> -->\n              <div class=\"procode\">{{item.code}}</div>\n             <div class=\"proname\"> {{ item.name }}</div>\n             <div class=\"imgwrapper\">\n              <img\n                class=\"productimg\"\n                src=\"{{ item.imgsrc }}\"\n              \n              />\n            </div>\n            </div>\n          </div>\n        </div>\n  \n  \n  \n      </div>\n      <app-talktous [talktouscontent]=\"ts.translate('talktouscollection')\"></app-talktous>\n    </div>\n    <div class=\"linkstab\">\n      <a (click)=\"goToPage('home')\"><img class=\"homeimg pointer\" src=\"../../../assets/images/homeicon.svg\"></a>\n      <span class=\"padl15\"> <img class=\"downarrow \" src=\"../../../assets/images/downarrow.png\"/> <span class=\"padl15 pointer\"> <a (click)=\"goToCollections('allcollections')\"  >{{ts.translate('collections')}} </a></span> </span> \n     \n  \n    </div>\n    <app-footer></app-footer>\n    </div>\n   \n  </div>\n  \n    \n   \n  "

/***/ }),

/***/ "./src/app/components/collections/collections.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/collections/collections.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productwrapper {\n  position: relative; }\n\n.productbody {\n  padding: 7em 0 0em 0;\n  position: relative; }\n\n.productheroimgdiv {\n  width: 100%;\n  height: 420px;\n  position: relative; }\n\n.productheroimg {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.filterList {\n  padding: 1em;\n  font-family: opEB;\n  color: black; }\n\n.productfooter {\n  position: absolute;\n  bottom: 0; }\n\n.cent {\n  text-align: center;\n  display: block; }\n\n.btnGroup {\n  display: inline-block;\n  font-size: 20px;\n  background-color: #fff;\n  text-align: left;\n  padding: 0 0 0 5em; }\n\n.findjewels {\n  color: #333333;\n  background-color: #fff;\n  text-align: center;\n  font-size: 24px;\n  padding-left: 3em;\n  font-family: opEB;\n  margin-top: 2em;\n  padding-bottom: 1em; }\n\n.selectedJewell {\n  color: #CC9F08;\n  background-color: #fff;\n  text-align: left;\n  font-size: 24px;\n  padding-left: 4.2em;\n  padding-top: 2em;\n  font-family: opEB;\n  margin-bottom: 3em; }\n\n.static {\n  position: fixed;\n  z-index: 99;\n  top: 55px;\n  padding-right: 2em !important; }\n\n.static + .staticfield {\n  padding-top: 3em; }\n\n.ImgList {\n  display: inline-flex; }\n\n.indiImg {\n  margin: 0em 73px 80px 0;\n  display: flex;\n  flex-flow: column-reverse; }\n\n.productimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%; }\n\n:checked + span {\n  color: #CC9F08;\n  transition: 0.3s ease-in-out; }\n\ninput[type=\"radio\"] {\n  display: none; }\n\n/* Optional other stuff just to make it look better */\n\nlabel {\n  display: inline-block;\n  width: 200px;\n  padding: 5px;\n  cursor: pointer;\n  transition: 0.2s ease-in-out; }\n\nspan {\n  transition: 0.3s ease-in-out; }\n\nlabel > span:hover {\n  color: #CC9F08; }\n\n.productsLists {\n  padding-top: 20em; }\n\n.proname {\n  color: #444;\n  font-size: 20px;\n  font-family: 'opR';\n  padding-top: 20px; }\n\n.procode {\n  color: #888888;\n  font-family: 'opR';\n  font-size: 14px; }\n\n.zoombut {\n  text-decoration: underline;\n  cursor: pointer;\n  color: #666666;\n  font-size: 12px;\n  padding-top: 16px;\n  font-family: 'opB'; }\n\n.imgwrapper {\n  height: 250px;\n  width: 250px; }\n\n.dropdown {\n  display: none; }\n\n.fixeddiv {\n  position: fixed;\n  z-index: 99;\n  width: 100%;\n  margin-top: -518px; }\n\n.fixeddiv + .btnGroup {\n  padding-top: 3em; }\n\n.linkstab {\n  display: inline-flex;\n  color: #fff;\n  background-color: #171717;\n  font-size: 14px;\n  font-family: 'opR';\n  width: 100%;\n  padding: 11px 65px; }\n\n.downarrow {\n  height: 12px;\n  transform: rotate(-90deg); }\n\n.padl15 {\n  padding-left: 15px; }\n\n.homeimg {\n  height: 22px;\n  width: 22px; }\n\n.pointer {\n  cursor: pointer; }\n\n.center {\n  display: flex;\n  justify-content: center; }\n\n::ng-deep .mat-progress-spinner circle, ::ng-deep .mat-spinner circle {\n  stroke: #CC9F08; }\n\n@media screen and (max-width: 600px) {\n  .cent {\n    display: none; }\n  .dropdown {\n    display: block; }\n  label {\n    display: inline-block;\n    width: auto;\n    padding: 1em;\n    white-space: nowrap;\n    font-size: 12px;\n    cursor: pointer;\n    transition: 0.2s ease-in-out; }\n  .btnGroup {\n    display: inline-flex;\n    font-size: 20px;\n    background-color: #fff;\n    text-align: left;\n    flex-wrap: nowrap;\n    width: 100%;\n    overflow: auto;\n    transition: 0.5s all ease-in-out;\n    padding: 1em 0 0 0; }\n  .findjewels, .selectedJewell {\n    display: none; }\n  .productsLists {\n    padding: 8em 2em;\n    text-align: center; }\n  .indiImg {\n    margin: 5em 1em;\n    display: flex;\n    width: 100%;\n    height: 150px;\n    flex-flow: column-reverse; }\n  .productimg {\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  .zoombut {\n    font-size: 10px;\n    padding-top: 4px; }\n  .procode {\n    font-size: 10px; }\n  .proname {\n    font-size: 14px;\n    padding-top: 10px; }\n  .fixeddiv {\n    padding-top: 0;\n    position: -webkit-sticky;\n    position: sticky; }\n  .center {\n    text-align: center; }\n  .imgwrapper {\n    /* height: 250px; */\n    /* width: 250px; */\n    width: 100%;\n    height: 100%; }\n  .dropdown {\n    display: block;\n    width: 100%;\n    background-color: #fff;\n    z-index: 1;\n    text-align: center;\n    padding: 3em 5em 0 5em; }\n  mat-form-field {\n    width: 100%;\n    font-size: 18px; }\n  ::ng-deep .mat-form-field-appearance-outline ::ng-deep .mat-form-field-outline {\n    border: 2px solid #A57F00;\n    border-radius: 5px;\n    outline: 0; }\n  ::ng-deep .mat-form-field-appearance-outline:focus ::ng-deep .mat-form-field-appearance-outline:active ::ng-deep .mat-form-field-appearance-outline:visited .mat-form-field-appearance-outline:hover\n::ng-deep .mat-form-field-outline:focus ::ng-deep .mat-form-field-outline:active ::ng-deep .mat-form-field-outline:visited .mat-form-field-outline:hover {\n    outline: 0;\n    border: 2px solid #A57F00;\n    border-radius: 5px; }\n  .dropdownselect .dropdownselect:focus {\n    outline: 0;\n    border: 2px solid #A57F00;\n    border-radius: 5px; }\n  .droptext {\n    color: #A57F00; }\n  .extrapadtop {\n    padding-top: 24px; }\n  .linkstab {\n    padding: 11px 40px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWN0aW9ucy9DOlxcRGF0YVxcZ293dGhhbVxcU0JKXFxzYmouZ2l0aHViLmlvXFxzYmovc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbGxlY3Rpb25zXFxjb2xsZWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGtCQUFrQixFQUFBOztBQUV0QjtFQUVJLG9CQUFvQjtFQUNwQixrQkFBaUIsRUFBQTs7QUFFckI7RUFFSSxXQUFXO0VBQ1gsYUFBYTtFQUNqQixrQkFBa0IsRUFBQTs7QUFHbEI7RUFFSSxZQUFXO0VBQ1gsV0FBVTtFQUNWLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTs7QUFFckI7RUFFSSxZQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVcsRUFBQTs7QUFFZjtFQUVJLGtCQUFrQjtFQUNsQixTQUFRLEVBQUE7O0FBR1o7RUFFSSxrQkFBa0I7RUFDbEIsY0FBYSxFQUFBOztBQUVqQjtFQUNJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFJckI7RUFFRyxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBR3RCO0VBRUcsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFLckI7RUFFRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVM7RUFDVCw2QkFBNkIsRUFBQTs7QUFHL0I7RUFFTSxnQkFBZ0IsRUFBQTs7QUFHdEI7RUFFSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFFRyx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHlCQUF5QixFQUFBOztBQUc1QjtFQUNHLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsWUFBVyxFQUFBOztBQUdkO0VBRUcsY0FBYztFQUNkLDRCQUE0QixFQUFBOztBQUdoQztFQUVDLGFBQVksRUFBQTs7QUFFYixxREFBQTs7QUFDQTtFQUNHLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWM7RUFDZCw0QkFBNEIsRUFBQTs7QUFFL0I7RUFDSSw0QkFBNEIsRUFBQTs7QUFFaEM7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBRUksaUJBQWdCLEVBQUE7O0FBRXBCO0VBRUksV0FBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBRUksY0FBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFjLEVBQUE7O0FBRWxCO0VBRUksMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUVJLGFBQVksRUFBQTs7QUFFaEI7RUFFSSxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFFRSxvQkFBb0I7RUFDcEIsV0FBVTtFQUNWLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVixrQkFBaUIsRUFBQTs7QUFFckI7RUFFSSxZQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBRTdCO0VBRUksa0JBQWtCLEVBQUE7O0FBRXRCO0VBRUksWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFJZjtFQUVJLGVBQWMsRUFBQTs7QUFFbEI7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJO0lBQ0ksYUFBWSxFQUFBO0VBRWhCO0lBRUksY0FDSixFQUFBO0VBQ0E7SUFFSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZiw0QkFBNEIsRUFBQTtFQUVoQztJQUVJLG9CQUFvQjtJQUN4QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7SUFDZCxnQ0FBZ0M7SUFFaEMsa0JBQWtCLEVBQUE7RUFFbEI7SUFFSSxhQUFZLEVBQUE7RUFFaEI7SUFFSSxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7RUFHdEI7SUFFSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCLEVBQUE7RUFHN0I7SUFFSSxZQUFZO0lBQ1osb0JBQ0o7T0FESSxpQkFDSixFQUFBO0VBQ0E7SUFFSSxlQUFlO0lBQ2YsZ0JBQWUsRUFBQTtFQUVuQjtJQUVJLGVBQWUsRUFBQTtFQUVuQjtJQUVJLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQUVyQjtJQUVJLGNBQWE7SUFDYix3QkFBZ0I7SUFBaEIsZ0JBQWdCLEVBQUE7RUFFcEI7SUFFSSxrQkFBa0IsRUFBQTtFQUV2QjtJQUNDLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBRWhCO0lBRUksY0FBYztJQUNkLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsVUFBUztJQUNULGtCQUFrQjtJQUNsQixzQkFBc0IsRUFBQTtFQUd2QjtJQUNDLFdBQVc7SUFDWCxlQUFlLEVBQUE7RUFHaEI7SUFDQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVMsRUFBQTtFQUdUOztJQUVJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsa0JBQWtCLEVBQUE7RUFFdEI7SUFFSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGtCQUFrQixFQUFBO0VBRXRCO0lBRUksY0FBYSxFQUFBO0VBRWpCO0lBRUksaUJBQWdCLEVBQUE7RUFFcEI7SUFFSSxrQkFBa0IsRUFBQSxFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29sbGVjdGlvbnMvY29sbGVjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5wcm9kdWN0d3JhcHBlclxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnByb2R1Y3Rib2R5XHJcbntcclxuICAgIHBhZGRpbmc6IDdlbSAwIDBlbSAwO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLnByb2R1Y3RoZXJvaW1nZGl2XHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvZHVjdGhlcm9pbWdcclxue1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLmZpbHRlckxpc3Rcclxue1xyXG4gICAgcGFkZGluZzoxZW07XHJcbiAgICBmb250LWZhbWlseTogb3BFQjtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5wcm9kdWN0Zm9vdGVyXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTowO1xyXG59XHJcbi8vYnV0dG9uIGdyb3VwXHJcbi5jZW50XHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuLmJ0bkdyb3Vwe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCA1ZW07XHJcbiAgIFxyXG4gfVxyXG5cclxuIC5maW5kamV3ZWxzXHJcbiB7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBvcEVCO1xyXG4gICAgbWFyZ2luLXRvcDoyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gfVxyXG5cclxuIC5zZWxlY3RlZEpld2VsbFxyXG4ge1xyXG4gICAgY29sb3I6ICNDQzlGMDg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBhZGRpbmctbGVmdDogNC4yZW07XHJcbiAgICBwYWRkaW5nLXRvcDoyZW07XHJcbiAgICBmb250LWZhbWlseTogb3BFQjtcclxuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcclxuICAgXHJcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XHJcbiB9XHJcblxyXG4gLnN0YXRpY1xyXG4ge1xyXG4gICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgIHotaW5kZXg6IDk5O1xyXG4gICB0b3A6IDU1cHg7XHJcbiAgIHBhZGRpbmctcmlnaHQ6IDJlbSAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5zdGF0aWMgKyAuc3RhdGljZmllbGRcclxuIHtcclxuICAgICAgIHBhZGRpbmctdG9wOiAzZW07XHJcbiB9XHJcblxyXG4gLkltZ0xpc3RcclxuIHtcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuIH1cclxuXHJcbiAuaW5kaUltZ1xyXG4ge1xyXG4gICAgbWFyZ2luOiAwZW0gNzNweCA4MHB4IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZTtcclxuIH1cclxuXHJcbiAucHJvZHVjdGltZ3tcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiB9XHJcblxyXG4gOmNoZWNrZWQgKyBzcGFuIHtcclxuICAgXHJcbiAgICBjb2xvcjogI0NDOUYwODtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXVxyXG57XHJcbiBkaXNwbGF5Om5vbmU7XHJcbn1cclxuLyogT3B0aW9uYWwgb3RoZXIgc3R1ZmYganVzdCB0byBtYWtlIGl0IGxvb2sgYmV0dGVyICovXHJcbmxhYmVsIHtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICB3aWR0aDogMjAwcHg7XHJcbiAgIHBhZGRpbmc6IDVweDtcclxuICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuc3BhbntcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxubGFiZWwgPiBzcGFuOmhvdmVye1xyXG4gICAgY29sb3I6ICNDQzlGMDg7XHJcbn1cclxuLnByb2R1Y3RzTGlzdHNcclxue1xyXG4gICAgcGFkZGluZy10b3A6MjBlbTtcclxufVxyXG4ucHJvbmFtZVxyXG57XHJcbiAgICBjb2xvcjojNDQ0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcFInO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLnByb2NvZGVcclxue1xyXG4gICAgY29sb3I6Izg4ODg4ODtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BSJztcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcbi56b29tYnV0XHJcbntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BCJztcclxufVxyXG5cclxuLmltZ3dyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duXHJcbntcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG4uZml4ZWRkaXZcclxue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IC01MThweDtcclxufVxyXG4uZml4ZWRkaXYgKyAuYnRuR3JvdXAge1xyXG4gICAgcGFkZGluZy10b3A6IDNlbTtcclxuICB9XHJcbiAgLmxpbmtzdGFiXHJcbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ29wUic7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZzoxMXB4IDY1cHg7XHJcbn1cclxuLmRvd25hcnJvd1xyXG57XHJcbiAgICBoZWlnaHQ6MTJweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbn1cclxuLnBhZGwxNVxyXG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmhvbWVpbWdcclxue1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBcclxufVxyXG5cclxuLnBvaW50ZXJcclxue1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuLmNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsIDo6bmctZGVlcCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcclxuICAgIHN0cm9rZTogI0NDOUYwODtcclxuICAgIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY2VudHtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd25cclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrXHJcbiAgICB9XHJcbiAgICBsYWJlbFxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICAuYnRuR3JvdXBcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgIFxyXG4gICAgcGFkZGluZzogMWVtIDAgMCAwO1xyXG4gICAgfVxyXG4gICAgLmZpbmRqZXdlbHMgLCAuc2VsZWN0ZWRKZXdlbGxcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdHNMaXN0c1xyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmc6IDhlbSAyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmRpSW1nXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luOiA1ZW0gMWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kdWN0aW1nXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyXHJcbiAgICB9XHJcbiAgICAuem9vbWJ1dFxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDo0cHg7XHJcbiAgICB9XHJcbiAgICAucHJvY29kZVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICAgIC5wcm9uYW1lXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmZpeGVkZGl2XHJcbiAgICB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MDtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgfVxyXG4gICAgLmNlbnRlclxyXG4gICAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgLmltZ3dyYXBwZXIge1xyXG4gICAgLyogaGVpZ2h0OiAyNTBweDsgKi9cclxuICAgIC8qIHdpZHRoOiAyNTBweDsgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5kcm9wZG93blxyXG4gICB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDNlbSA1ZW0gMCA1ZW07XHJcbiAgIH1cclxuXHJcbiAgIG1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgIH1cclxuICBcclxuICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQTU3RjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3V0bGluZTowO1xyXG5cclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lOmZvY3VzIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lOmFjdGl2ZSA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZTp2aXNpdGVkIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmU6aG92ZXJcclxuICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmU6Zm9jdXMgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lOmFjdGl2ZSA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmU6dmlzaXRlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZTpob3ZlcntcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNBNTdGMDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duc2VsZWN0IC5kcm9wZG93bnNlbGVjdDpmb2N1c1xyXG4gICAge1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0E1N0YwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuZHJvcHRleHRcclxuICAgIHtcclxuICAgICAgICBjb2xvcjojQTU3RjAwO1xyXG4gICAgfVxyXG4gICAgLmV4dHJhcGFkdG9wXHJcbiAgICB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MjRweDtcclxuICAgIH1cclxuICAgIC5saW5rc3RhYlxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmc6IDExcHggNDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/collections/collections.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/collections/collections.component.ts ***!
  \*****************************************************************/
/*! exports provided: CollectionsComponent, DialogDataExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsComponent", function() { return CollectionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataExample", function() { return DialogDataExample; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_8__);









var CollectionsComponent = /** @class */ (function () {
    function CollectionsComponent(ts, sh, route, router, http, dialog) {
        this.ts = ts;
        this.sh = sh;
        this.route = route;
        this.router = router;
        this.http = http;
        this.dialog = dialog;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        this.showspinner = true;
        this.metals = ["marriage", "women", "men", "kids", "gifts"];
        this.types = [
            {
                key: "allcollections",
                value: "all collections"
            },
            {
                key: "marriage",
                value: "marriage"
            },
            {
                key: "women",
                value: "women"
            },
            {
                key: "men",
                value: "men"
            },
            {
                key: "kids",
                value: "kids"
            },
            {
                key: "gifts",
                value: "gifts"
            },
        ];
        this.options = {
            headers: this.httpHeaders
        };
        this.jsondata = [];
        this.value = 'allcollections';
        this.tempdata = [];
    }
    CollectionsComponent.prototype.openDialog = function (item) {
        console.log(item.imgsrc);
        this.dialog.open(DialogDataExample, {
            data: {
                url: item.imgsrc,
                name: item.name,
                code: item.code
            },
            height: 'auto',
            width: '95vh'
        });
    };
    CollectionsComponent.prototype.aosInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_8__["init"]({
            duration: 1200
        });
    };
    CollectionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showspinner = true;
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
        jquery__WEBPACK_IMPORTED_MODULE_7__(document).scroll(function () {
            var y = jquery__WEBPACK_IMPORTED_MODULE_7__(document).scrollTop(), //get page y value 
            header = jquery__WEBPACK_IMPORTED_MODULE_7__("#selectedJewell");
            if (y >= 450) {
                header.css({ position: "fixed", "left": "0", "top": "3em", "width": "100%", "background-color": "#fff", "z-index": "2", "padding-top": "2em" });
            }
            else {
                header.css({ "position": "relative", "top": "0em", "background-color": "transparent", "z-index": "2", "width": "auto", "padding-top": "0em" });
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__(document).scroll(function () {
            var y = jquery__WEBPACK_IMPORTED_MODULE_7__(document).scrollTop(), //get page y value 
            header = jquery__WEBPACK_IMPORTED_MODULE_7__("#dropdown");
            if (y >= 420) {
                header.css({ position: "fixed", "left": "0", "top": "3em", "width": "100%", "background-color": "#fff", "z-index": "1", "padding": "6em 5em 0em 5em" });
                if (header.css('display') == 'block') {
                    jquery__WEBPACK_IMPORTED_MODULE_7__("#productsLists").css({ "padding-top": "22em" });
                }
            }
            else {
                header.css({ "position": "relative", "top": "0em", "background-color": "transparent", "z-index": "2", "width": "auto", "padding": "3em 5em 0 5em" });
                if (header.css('display') == 'block') {
                    jquery__WEBPACK_IMPORTED_MODULE_7__("#productsLists").css({ "padding-top": "8em" });
                }
            }
        });
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.aosInit();
        if (this.sh.getValue())
            this.value = this.sh.getValue();
        this.selectedoption = this.value;
        this.selectedValue = this.value;
        console.log(this.value);
        this.getAllProducts().subscribe(function (data) {
            _this.showspinner = false;
            _this.jsondata = data;
            _this.tempdata = _this.jsondata;
            if (!_this.metals.includes(_this.value)) {
                document.getElementById(_this.value).checked = true;
                document.getElementById('allcollections').checked = true;
                _this.value = 'allcollections';
            }
            else {
                _this.tempdata = _this.tempdata.filter(function (data) { return data.collection.includes(_this.value); });
                console.log(_this.value);
                document.getElementById(_this.value).checked = true;
            }
            console.log(_this.tempdata);
        });
    };
    CollectionsComponent.prototype.ngAfterViewInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_7__('#exampleModal').on('show.bs.modal', function (event) {
            var button = jquery__WEBPACK_IMPORTED_MODULE_7__(event); // Button that triggered the modal
            var recipient = button.data('whatever'); // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            console.log(recipient);
            var modal = jquery__WEBPACK_IMPORTED_MODULE_7__(this);
            modal.find('.modal-title').text('New message to ' + recipient);
            modal.find('.modal-body input').val(recipient);
        });
    };
    CollectionsComponent.prototype.goToCollections = function (data) {
        this.sh.setValue(data);
        this.router.navigate(['collections']);
    };
    CollectionsComponent.prototype.getAllProducts = function () {
        return this.http.get('./assets/products.json', this.options);
    };
    CollectionsComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    CollectionsComponent.prototype.handleChange = function (event) {
        var _this = this;
        this.aosInit();
        this.selectedValue = event;
        this.selectedoption = this.value;
        if (this.selectedValue == 'allcollections') {
            this.tempdata = this.jsondata;
        }
        else {
            this.tempdata = this.jsondata.filter(function (data) {
                return data.collection.includes(_this.selectedValue);
            });
            console.log(this.tempdata);
        }
    };
    CollectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collections',
            template: __webpack_require__(/*! ./collections.component.html */ "./src/app/components/collections/collections.component.html"),
            styles: [__webpack_require__(/*! ./collections.component.scss */ "./src/app/components/collections/collections.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], CollectionsComponent);
    return CollectionsComponent;
}());

var DialogDataExample = /** @class */ (function () {
    function DialogDataExample(data) {
        this.data = data;
    }
    DialogDataExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-data-example-dialog',
            template: __webpack_require__(/*! ./dialog-data-example.html */ "./src/app/components/collections/dialog-data-example.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DialogDataExample);
    return DialogDataExample;
}());



/***/ }),

/***/ "./src/app/components/collections/dialog-data-example.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/collections/dialog-data-example.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>Favorite Animal</h1> -->\r\n<div mat-dialog-content style=\" max-height: 100%;overflow: hidden;\">\r\n\r\n        <img style=\"width:100%;height:100%\"\r\n        class=\"productimg\"\r\n        src=\"{{data.url }}\"\r\n      \r\n      />\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contactwrapper\">\n  <app-header></app-header>\n  <div class=\"productheroimgdiv\">\n      <app-todaysrate></app-todaysrate>\n      <img class=\"productheroimg\" src=\"../../../assets/images/homehero1.jpg\" />\n    </div>\n  <div class=\"contactbody\">\n    \n    <div class=\"bodyHeading\">\n      {{ ts.translate(\"our\") | uppercase }}\n      <span class=\"bold\">{{ ts.translate(\"locations\") | uppercase }}</span>\n    </div>\n    <div class=\"row store\">\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 padR\">\n        <img\n          class=\"storeview\"\n          src=\"../../../assets/images/homehero1.jpg\"\n        />\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 padL\">\n        <iframe class=\"map\"\n          src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.200405003273!2d78.11522951461477!3d9.91726089290794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c583ef5928cb%3A0x145934dc50a65518!2sSri%20Balagopalan%20Jewellery%20Mart!5e0!3m2!1sen!2sin!4v1612636344337!5m2!1sen!2sin\"\n          width=\"100%\"\n          height=\"385\"\n          frameborder=\"0\"\n          style=\"border:0;\"\n          allowfullscreen=\"\"\n          aria-hidden=\"false\"\n          tabindex=\"0\"\n        ></iframe>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-12\">\n        <div class=\"storeHead1 bold\">\n          {{ ts.translate(\"storename1\") }}\n        </div>\n        <div class=\"storetype bold\">\n          {{ ts.translate(\"goldstore\") }}\n        </div>\n        <div class=\"addHead\">\n          {{ ts.translate(\"address\") }}\n        </div>\n        <div class=\"addbody\">\n          {{ ts.translate(\"addressbody1\") }}\n        </div>\n        <div class=\"addHead\">\n          {{ ts.translate(\"buisnesshours\") }}\n        </div>\n        <div class=\"addbody\">\n          {{ ts.translate(\"buisnesshoursbody1\") }}\n        </div>\n        <div class=\"addHead\">\n          {{ ts.translate(\"phonenumber\") }}\n        </div>\n        <div class=\"addbody\">\n          {{ ts.translate(\"phonenumberbody1\") }}\n        </div>\n      </div>\n    </div>\n    <div class=\"row store\">\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 padR\">\n        <img\n          class=\"storeview\"\n          src=\"../../../assets/images/homehero1.jpg\"\n        />\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 padL\">\n          <iframe class=\"map\"\n          src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.200405003273!2d78.11522951461477!3d9.91726089290794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c583ef5928cb%3A0x145934dc50a65518!2sSri%20Balagopalan%20Jewellery%20Mart!5e0!3m2!1sen!2sin!4v1612636344337!5m2!1sen!2sin\"\n          width=\"100%\"\n          height=\"385\"\n          frameborder=\"0\"\n          style=\"border:0;\"\n          allowfullscreen=\"\"\n          aria-hidden=\"false\"\n          tabindex=\"0\"\n        ></iframe>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-12\">\n        <div class=\"storeHead1 bold\">\n          {{ ts.translate(\"storename1\") }}\n        </div>\n        <div class=\"storetype bold\">\n          {{ ts.translate(\"silverstore\") }}\n        </div>\n        <div class=\"addHead\">\n          {{ ts.translate(\"address\") }}\n        </div>\n        <div class=\"addbody\">\n          {{ ts.translate(\"addressbody2\") }}\n        </div>\n        <div class=\"addHead\">\n          {{ ts.translate(\"buisnesshours\") }}\n        </div>\n        <div class=\"addbody\">\n          {{ ts.translate(\"buisnesshoursbody1\") }}\n        </div>\n        <div class=\"addHead\">\n          {{ ts.translate(\"phonenumber\") }}\n        </div>\n        <div class=\"addbody\">\n          {{ ts.translate(\"phonenumberbody2\") }}\n        </div>\n      </div>\n    </div>\n    <div class=\"bodyHeading\">\n      {{ ts.translate(\"get\") | uppercase }}\n      <span class=\"bold\">{{ ts.translate(\"intouch\") | uppercase }}</span>\n    </div>\n    <div class=\"row emailblock\">\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\n        <label>{{ts.translate('fullname')}}<span class=\"redast\">*</span></label><br>\n       <input type=\"text\" [(ngModel)]=\"firstname\" placeholder=\"{{ts.translate('enter')}}{{ts.translate('fullname')}}\" />\n      </div>\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\n        <label>{{ts.translate('phonenumber')}}<span class=\"redast\">*</span></label><br>\n        <input type=\"number\" [(ngModel)]=\"phonenumber\" placeholder=\"{{ts.translate('enter')}}{{ts.translate('phonenumber')}}\" />\n      </div>\n    </div>\n\n    <div class=\"row emailblock\">\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\n        <label>{{ts.translate('email')}}<span class=\"redast\">*</span></label><br>\n       <input type=\"email\" [(ngModel)]=\"useremail\" placeholder=\"{{ts.translate('enter')}}{{ts.translate('email')}}\" />\n      </div>\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\n        <label>{{ts.translate('subject')}}<span class=\"redast\">*</span></label><br>\n        <input type=\"text\" [(ngModel)]=\"subject\" placeholder=\"{{ts.translate('enter')}}{{ts.translate('subject')}}\" />\n      </div>\n    </div>\n\n    <div class=\"row emailblock\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\n        <label>{{ts.translate('message')}}<span class=\"redast\">*</span></label><br>\n       \n       <textarea [(ngModel)]=\"message\"  rows=\"8\" placeholder=\"{{ts.translate('enter')}}{{ts.translate('message')}}\">\n       \n        </textarea>\n      </div>\n    \n    </div>\n   \n    <button mat-button class=\"submitbutton\" \n    [disabled]=\"!(firstname && phonenumber && useremail && subject && message)\"\n    >\n      {{ts.translate('send')}}{{ts.translate('message')}}\n    </button>\n\n    <div class=\"bodyHeading\">\n      {{ ts.translate(\"connect\") | uppercase }}\n      <span class=\"bold\">{{ ts.translate(\"withus\") | uppercase }}</span>\n    </div>\n    <div class=\"socialmedia\">\n        <a href=\"https://www.facebook.com/sribalagopalanjewellerymart\" target=\"_blank\">\n      <div class=\"scircle\">\n        <img class=\"scircleImg\" src=\"../../../assets/images/facebook.svg\">\n      </div>\n    </a>\n      <a href=\"https://www.instagram.com/sribalagopalanjewellerymart\" target=\"_blank\">\n      <div class=\"scircle\">\n        <img class=\"scircleImg\" src=\"../../../assets/images/Insta.svg\">\n      </div>\n    </a>\n      <a href=\"//api.whatsapp.com/send?phone=919994926518&text=Hi Team !!!\" target=\"_blank\">\n      <div class=\"scircle\">\n        <img class=\"scircleImg\" src=\"../../../assets/images/whatsapp.svg\">\n      </div>\n    </a>\n      <a [href]=\"emailstring\" target=\"_top\">\n      <div class=\"scircle\">\n        <img class=\"scircleImg\" src=\"../../../assets/images/Mail.svg\">\n      </div>\n    </a>\n    </div>\n  \n  </div>\n  <div class=\"linkstab\">\n    <a (click)=\"goToPage('home')\"><img class=\"homeimg pointer\" src=\"../../../assets/images/homeicon.svg\"></a>\n    <span class=\"padl15\"> <img class=\"downarrow \" src=\"../../../assets/images/downarrow.png\"/> <span class=\"padl15 pointer\"> <a (click)=\"goToPage('contactus')\" >{{ts.translate('contactus')}} </a></span> </span> \n   \n\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contactbody {\n  padding: 7em 65px;\n  position: relative; }\n\n.productheroimgdiv {\n  width: 100%;\n  height: 420px;\n  padding-top: 8em;\n  position: relative; }\n\n.bodyHeading {\n  padding: 0 0.5em;\n  font-size: 26px;\n  margin: 2em 0;\n  border-left: 8px solid #CC9F08; }\n\n.bold {\n  font-family: opEB; }\n\n.productheroimg {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.store {\n  padding-bottom: 5em; }\n\n.padR {\n  padding-right: 0px; }\n\n.padL {\n  padding-left: 0px; }\n\n.storeHead1 {\n  font-size: 24px;\n  color: #CC9F08; }\n\n.storetype {\n  color: #3C3A33;\n  font-size: 18px; }\n\n.addHead {\n  font-weight: 600;\n  color: #474747;\n  font-size: 16px;\n  padding: 1em 0 0 0; }\n\n.addbody {\n  font-size: 16px;\n  color: #777777; }\n\n.emailblock {\n  font-size: 18px;\n  padding-bottom: 2em; }\n\ninput, textarea {\n  padding: 1em 1em;\n  width: 100%;\n  border-radius: 5px; }\n\ninput:focus, textarea:focus {\n  border-radius: 5px;\n  outline: 0; }\n\n.redast {\n  color: red;\n  padding-left: 8px; }\n\ntextarea {\n  padding: 0;\n  border: 2px solid black; }\n\n.submitbutton {\n  color: white;\n  border: 0;\n  outline: 0;\n  padding: 0.5em 1em;\n  font-size: 18px;\n  border-radius: 5px;\n  background-color: #CC9F08; }\n\n.socialmedia {\n  display: flex;\n  text-align: center;\n  justify-content: center; }\n\n.scircle {\n  border-radius: 50%;\n  height: 10em;\n  width: 10em;\n  padding: 2em;\n  margin: 0 2em;\n  cursor: pointer;\n  box-shadow: 0 3px 10px 1px #ccc;\n  transition: 0.3s all ease-in-out; }\n\n.scircle:hover {\n  transform: rotateY(10); }\n\n.storeview {\n  height: 385px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.linkstab {\n  display: inline-flex;\n  color: #fff;\n  background-color: #171717;\n  font-size: 14px;\n  font-family: 'opR';\n  width: 100%;\n  padding: 11px 65px; }\n\n.downarrow {\n  height: 12px;\n  transform: rotate(-90deg); }\n\n.padl15 {\n  padding-left: 15px; }\n\n.homeimg {\n  height: 22px;\n  width: 22px; }\n\n.pointer {\n  cursor: pointer; }\n\n@media screen and (max-width: 600px) {\n  .contactbody {\n    padding: 1em 2em 7em 2em; }\n  .scircle {\n    height: 4.5em;\n    width: 4.5em;\n    padding: 0.6em;\n    margin: 0 2em; }\n  .scircleImg {\n    height: 100%;\n    width: 100%; }\n  .map {\n    transform: scale(0.9); }\n  .padR {\n    padding: 0px 32px 0 18px; }\n  .linkstab {\n    padding: 11px 40px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0dXMvQzpcXERhdGFcXGdvd3RoYW1cXFNCSlxcc2JqLmdpdGh1Yi5pb1xcc2JqL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0dXNcXGNvbnRhY3R1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNmLGtCQUFpQixFQUFBOztBQUVyQjtFQUVFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUlwQjtFQUVFLGdCQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQVk7RUFDWiw4QkFBNkIsRUFBQTs7QUFFL0I7RUFFSSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFFRSxZQUFXO0VBQ1gsV0FBVTtFQUNWLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTs7QUFHckI7RUFFSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFFRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFFRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFFRSxlQUFjO0VBQ2QsY0FBYSxFQUFBOztBQUlmO0VBRUUsY0FBYTtFQUNiLGVBQWUsRUFBQTs7QUFFakI7RUFFRSxnQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHcEI7RUFFRSxlQUFlO0VBQ2YsY0FBYSxFQUFBOztBQUVmO0VBRUUsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGdCQUFnQjtFQUNoQixXQUFVO0VBQ1Ysa0JBQWlCLEVBQUE7O0FBR25CO0VBRUUsa0JBQWlCO0VBQ2pCLFVBQVMsRUFBQTs7QUFFWDtFQUVFLFVBQVM7RUFDVCxpQkFBZ0IsRUFBQTs7QUFHbEI7RUFHRSxVQUFVO0VBQ1YsdUJBQXVCLEVBQUE7O0FBR3pCO0VBRUUsWUFBVztFQUNYLFNBQVE7RUFDUixVQUFTO0VBQ1Qsa0JBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRzNCO0VBRUUsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUIsRUFBQTs7QUFJekI7RUFFRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBWTtFQUNaLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRXhCO0VBRUUsYUFBYTtFQUNYLFdBQVc7RUFDWCxvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBRUksb0JBQW9CO0VBQ3BCLFdBQVU7RUFDVix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFVO0VBQ1Ysa0JBQWlCLEVBQUE7O0FBRXJCO0VBRUksWUFBVztFQUNYLHlCQUF5QixFQUFBOztBQUU3QjtFQUVJLGtCQUFrQixFQUFBOztBQUV0QjtFQUVJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBSWY7RUFFSSxlQUFjLEVBQUE7O0FBRWxCO0VBRUU7SUFFRSx3QkFBd0IsRUFBQTtFQUcxQjtJQUVFLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWEsRUFBQTtFQUdmO0lBRUUsWUFBVztJQUNYLFdBQVUsRUFBQTtFQUVaO0lBRUUscUJBQXFCLEVBQUE7RUFHdkI7SUFFRSx3QkFBd0IsRUFBQTtFQUUxQjtJQUVJLGtCQUFrQixFQUFBLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3Rib2R5e1xyXG4gIHBhZGRpbmc6IDdlbSA2NXB4O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLnByb2R1Y3RoZXJvaW1nZGl2XHJcbntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA4ZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuLmJvZHlIZWFkaW5nXHJcbntcclxuICBwYWRkaW5nOjAgMC41ZW07XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIG1hcmdpbjoyZW0gMDtcclxuICBib3JkZXItbGVmdDo4cHggc29saWQgI0NDOUYwODtcclxufVxyXG4uYm9sZFxyXG4gIHtcclxuICAgIGZvbnQtZmFtaWx5OiBvcEVCO1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3RoZXJvaW1nXHJcbntcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uc3RvcmVcclxue1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVlbTtcclxufVxyXG4ucGFkUlxyXG57XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcbi5wYWRMXHJcbntcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4uc3RvcmVIZWFkMVxyXG57XHJcbiAgZm9udC1zaXplOjI0cHg7XHJcbiAgY29sb3I6I0NDOUYwODtcclxuXHJcbn1cclxuXHJcbi5zdG9yZXR5cGVcclxue1xyXG4gIGNvbG9yOiMzQzNBMzM7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5hZGRIZWFkXHJcbntcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiM0NzQ3NDc7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDFlbSAwIDAgMDtcclxufVxyXG5cclxuLmFkZGJvZHlcclxue1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjojNzc3Nzc3O1xyXG59XHJcbi5lbWFpbGJsb2NrXHJcbntcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcclxufVxyXG5pbnB1dCx0ZXh0YXJlYXtcclxuICBwYWRkaW5nOiAxZW0gMWVtO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzICwgdGV4dGFyZWE6Zm9jdXNcclxue1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gIG91dGxpbmU6MDtcclxufVxyXG4ucmVkYXN0XHJcbntcclxuICBjb2xvcjpyZWQ7XHJcbiAgcGFkZGluZy1sZWZ0OjhweDtcclxufVxyXG5cclxudGV4dGFyZWF7XHJcbiAgXHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5zdWJtaXRidXR0b25cclxue1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJvcmRlcjowO1xyXG4gIG91dGxpbmU6MDtcclxuICBwYWRkaW5nOjAuNWVtIDFlbTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDQzlGMDg7XHJcbn1cclxuXHJcbi5zb2NpYWxtZWRpYVxyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uc2NpcmNsZVxyXG57XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogMTBlbTtcclxuICB3aWR0aDogMTBlbTtcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgbWFyZ2luOjAgMmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDFweCAjY2NjO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2NpcmNsZTpob3ZlcntcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTApO1xyXG59XHJcbi5zdG9yZXZpZXdcclxue1xyXG4gIGhlaWdodDogMzg1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5saW5rc3RhYlxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcFInO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBhZGRpbmc6MTFweCA2NXB4O1xyXG59XHJcbi5kb3duYXJyb3dcclxue1xyXG4gICAgaGVpZ2h0OjEycHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG59XHJcbi5wYWRsMTVcclxue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5ob21laW1nXHJcbntcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5wb2ludGVyXHJcbntcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblxyXG4gIC5jb250YWN0Ym9keVxyXG4gIHtcclxuICAgIHBhZGRpbmc6IDFlbSAyZW0gN2VtIDJlbTtcclxuICB9XHJcblxyXG4gIC5zY2lyY2xlXHJcbiAge1xyXG4gICAgaGVpZ2h0OiA0LjVlbTtcclxuICAgIHdpZHRoOiA0LjVlbTtcclxuICAgIHBhZGRpbmc6IDAuNmVtO1xyXG4gICAgbWFyZ2luOiAwIDJlbTtcclxuICB9XHJcblxyXG4gIC5zY2lyY2xlSW1nXHJcbiAge1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuICAubWFwXHJcbiAge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gIH1cclxuXHJcbiAgLnBhZFJcclxuICB7XHJcbiAgICBwYWRkaW5nOiAwcHggMzJweCAwIDE4cHg7XHJcbiAgfVxyXG4gIC5saW5rc3RhYlxyXG4gIHtcclxuICAgICAgcGFkZGluZzogMTFweCA0MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(ts, router) {
        this.ts = ts;
        this.router = router;
        this.emailstring = "";
        this.firstname = "";
        this.useremail = "";
        this.message = "";
        this.sbjmailID = "1994gowtham@gmail.com";
    }
    ContactusComponent.prototype.ngOnInit = function () {
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
        this.emailstring = "mailto:1994gowtham@gmail.com?Subject=Enquiry&body=Hi Team ,\n Myself ... ";
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    ContactusComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/components/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.scss */ "./src/app/components/contactus/contactus.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n <div class=\"row footerrow\" >\r\n    <div class=\"columl col-lg-6 col-md-6 col-sm-12 col-12\">\r\n      <div class=\"logo\">\r\n        SBJ MART\r\n      </div>\r\n      <div class=\"copyrights\">\r\n         Copyrights @ SBJ 2021 | Powered By NEW ERA\r\n      </div>\r\n    </div>\r\n    <div class=\"columr col-lg-6 col-md-6 col-sm-12 col-12\">\r\n      <div class=\"menulinks\">\r\n          <a class=\"\" (click)=\"goToProducts('allproducts','allmetals')\" >{{ts.translate('products')}}</a>\r\n          <a (click)=\"goToCollections('allcollections')\">{{ts.translate('collections')}}</a>\r\n          <a (click)=\"goToPage('goldschemes')\">{{ts.translate('goldschemes')}}</a>\r\n          <a (click)=\"goToPage('aboutus')\">{{ts.translate('aboutus')}}</a>\r\n          <a (click)=\"goToPage('contactus')\">{{ts.translate('contactus')}}</a>\r\n      </div>\r\n      \r\n      \r\n    </div>\r\n  </div>\r\n  <div class=\"socialmodeia martop\">\r\n    <div class=\" col-lg-12 col-md-12 col-sm-12 col-12 flex\">\r\n    <a href=\"https://www.instagram.com/sribalagopalanjewellerymart\" target=\"_blank\"><div class=\"scircle\" >\r\n        <img class=\"scircleImg\" src=\"../../../assets/images/Instasmall.svg\">\r\n      </div>\r\n    </a>\r\n    <a href=\"//api.whatsapp.com/send?phone=919994926518&text=Hi Team !!!\" target=\"_blank\">\r\n      <div class=\"scircle\">\r\n          <img class=\"scircleImg\" src=\"../../../assets/images/whatsappsmall.svg\">\r\n        </div>\r\n      </a>\r\n      <a href=\"https://www.facebook.com/sribalagopalanjewellerymart\" target=\"_blank\">\r\n        <div class=\"scircle\">\r\n            <img class=\"scircleImg\" src=\"../../../assets/images/facebooksmall.svg\">\r\n          </div>\r\n        </a>\r\n        </div>\r\n       \r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  height: 253px;\n  margin: auto;\n  width: 100%;\n  bottom: -30em;\n  background-color: #101010;\n  color: #fff; }\n\n.footerrow {\n  padding: 65px 60px 0 60px; }\n\n.socialmodeia {\n  display: inline-flex;\n  float: right; }\n\n.scircle {\n  padding: 0 12px;\n  cursor: pointer; }\n\n.columr {\n  text-align: right; }\n\n.logo {\n  font-size: 36px;\n  padding-bottom: 63px; }\n\n.copyrights {\n  letter-spacing: 2px;\n  font-size: 10px; }\n\na:hover {\n  cursor: pointer; }\n\n.menulinks {\n  padding-bottom: 63px;\n  text-align: right; }\n\n.menulinks a {\n  text-decoration: none;\n  color: #fff;\n  padding: 0 20px;\n  font-size: 14px; }\n\n.flex {\n  display: inline-flex;\n  flex-direction: row-reverse; }\n\n.martop {\n  padding-right: 60px;\n  margin-top: -3em; }\n\n@media screen and (max-width: 600px) {\n  .footer {\n    height: auto;\n    /* margin: auto; */\n    /* width: 100%; */\n    /* position: relative; */\n    /* bottom: -30em; */\n    background-color: #101010;\n    color: #fff; }\n  .footerrow {\n    padding: 30px 0px 30px 20px; }\n  .columl {\n    padding-left: 36px; }\n  .columr {\n    text-align: left; }\n  .menulinks {\n    padding: 20px 0;\n    text-align: left;\n    display: inline-flex;\n    flex-direction: column; }\n  .logo {\n    font-size: 24px;\n    padding-bottom: 0px; }\n  .copyrights {\n    font-size: 7px; }\n  .menulinks a {\n    text-decoration: none;\n    color: #fff;\n    padding: 10px 20px;\n    font-size: 14px; }\n  .footerrow {\n    padding: 65px 0px 0 20px; }\n  .martop {\n    padding: 3em  0 3em 0;\n    width: 100%;\n    background-color: black; }\n  .flex {\n    display: inline-flex;\n    flex-direction: row-reverse;\n    justify-content: center;\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXERhdGFcXGdvd3RoYW1cXFNCSlxcc2JqLmdpdGh1Yi5pb1xcc2JqL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUVmO0VBRUEseUJBQXdCLEVBQUE7O0FBRXhCO0VBRUksb0JBQW9CO0VBQ3BCLFlBQVksRUFBQTs7QUFFaEI7RUFFSSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUVuQjtFQUVJLGlCQUFpQixFQUFBOztBQUVyQjtFQUVJLGVBQWU7RUFDZixvQkFBb0IsRUFBQTs7QUFFeEI7RUFFSSxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFFSSxvQkFBb0I7RUFDcEIsaUJBQ0osRUFBQTs7QUFFQTtFQUNJLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFbkI7RUFFSSxvQkFBb0I7RUFDcEIsMkJBQTJCLEVBQUE7O0FBRS9CO0VBRUksbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJO0lBRUksWUFBWTtJQUNaLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSx3QkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQXlCO0lBQ3pCLFdBQVcsRUFBQTtFQUdmO0lBRUcsMkJBQTJCLEVBQUE7RUFFOUI7SUFFSSxrQkFBa0IsRUFBQTtFQUV0QjtJQUVJLGdCQUFnQixFQUFBO0VBRXBCO0lBRUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsc0JBQXNCLEVBQUE7RUFFMUI7SUFFSSxlQUFlO0lBQ25CLG1CQUFtQixFQUFBO0VBRW5CO0lBR0EsY0FBYyxFQUFBO0VBRWQ7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7RUFFdkI7SUFFSSx3QkFBd0IsRUFBQTtFQUU1QjtJQUVJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsdUJBQXVCLEVBQUE7RUFFM0I7SUFDSSxvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixXQUFXLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJcclxue1xyXG4gICAgaGVpZ2h0OiAyNTNweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAtMzBlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uZm9vdGVycm93XHJcbntcclxucGFkZGluZzo2NXB4IDYwcHggMCA2MHB4O1xyXG59XHJcbi5zb2NpYWxtb2RlaWFcclxue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnNjaXJjbGVcclxue1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jb2x1bXJcclxue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmxvZ29cclxue1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYzcHg7XHJcbn1cclxuLmNvcHlyaWdodHNcclxue1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5hOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tZW51bGlua3Ncclxue1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodFxyXG59XHJcblxyXG4ubWVudWxpbmtzIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uZmxleFxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG4ubWFydG9wXHJcbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtM2VtO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuZm9vdGVyXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cclxuICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgICAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICAgICAgLyogYm90dG9tOiAtMzBlbTsgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDEwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXJyb3d7XHJcblxyXG4gICAgICAgcGFkZGluZzogMzBweCAwcHggMzBweCAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbHVtbFxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzZweDtcclxuICAgIH1cclxuICAgIC5jb2x1bXJcclxuICAgIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLm1lbnVsaW5rc1xyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAubG9nb1xyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuY29weXJpZ2h0c1xyXG4gICAge1xyXG4gICAgIFxyXG4gICAgZm9udC1zaXplOiA3cHg7XHJcbiAgICB9XHJcbiAgICAubWVudWxpbmtzIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4uZm9vdGVycm93XHJcbntcclxuICAgIHBhZGRpbmc6IDY1cHggMHB4IDAgMjBweDtcclxufVxyXG4ubWFydG9wXHJcbntcclxuICAgIHBhZGRpbmc6IDNlbSAgMCAzZW0gMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuLmZsZXh7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

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
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var FooterComponent = /** @class */ (function () {
    function FooterComponent(ts, sh, router) {
        this.ts = ts;
        this.sh = sh;
        this.router = router;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
    };
    FooterComponent.prototype.goToProducts = function (types, metals) {
        this.sh.setValue(types);
        this.router.navigate(['products', metals]);
    };
    FooterComponent.prototype.goToCollections = function (data) {
        this.sh.setValue(data);
        this.router.navigate(['collections']);
    };
    FooterComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/gold-schemes/gold-schemes.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/gold-schemes/gold-schemes.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"schemewrapper\">\n  <app-header></app-header>\n  <div class=\"schemebody\">\n      <app-todaysrate></app-todaysrate>\n    <div class=\"productheroimgdiv\">\n      <img class=\"productheroimg\" src=\"../../../assets/images/homehero1.jpg\" />\n    </div>\n    <div class=\"schemetext\">\n      <div class=\"bodyHeading\">\n        {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('goldsavingscheme') |  uppercase}}</span>\n    </div>\n    <p>\n      {{ts.translate('goldschemedata')}}\n    </p>\n    <h2> {{ts.translate('flexischemeHead') |  titlecase }}</h2>\n    <p>\n      {{ts.translate('flexip1')}}\n\n    </p>\n    <p>\n      {{ts.translate('flexip2')}}\n    </p>\n    <p>\n      {{ts.translate('flexip3')}} <a href=\"../../../assets/portfolioRequest.json\" download>{{ts.translate('downloadhere')}}</a>\n    </p>\n    <h2> {{ts.translate('happyGoldHead') |  titlecase }}</h2>\n    <p>\n      {{ts.translate('happyGold1')}}\n\n    </p>\n    <p>\n      {{ts.translate('happyGold2')}}<a href=\"../../../assets/portfolioRequest.json\" download>{{ts.translate('downloadhere')}}</a>\n    </p>\n    <p>\n      {{ts.translate('happyGold3')}} \n    </p>\n  \n    \n      \n\n    </div>\n    <app-talktous [talktouscontent]=\"ts.translate('talktousgoldscheme')\"></app-talktous>\n  </div>\n  <div class=\"linkstab\">\n    <a (click)=\"goToPage('home')\"><img class=\"homeimg pointer\" src=\"../../../assets/images/homeicon.svg\"></a>\n    <span class=\"padl15\"> <img class=\"downarrow \" src=\"../../../assets/images/downarrow.png\"/> <span class=\"padl15 pointer\"> <a (click)=\"goToPage('goldschemes')\">{{ts.translate('goldschemes')}}</a></span> </span> \n    \n  </div>\n <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/components/gold-schemes/gold-schemes.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/gold-schemes/gold-schemes.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".schemebody {\n  padding: 7em 0 0em 0;\n  position: relative; }\n\n.productheroimgdiv {\n  width: 100%;\n  height: 50vh;\n  position: relative; }\n\n.productheroimg {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.schemetext {\n  padding: 2em 7em; }\n\n.bodyHeading {\n  padding: 0 0.5em;\n  font-size: 26px;\n  margin: 2em 0;\n  border-left: 8px solid #CC9F08; }\n\n.bold {\n  font-family: opEB; }\n\np {\n  font-size: 18px;\n  line-height: 2em;\n  text-align: justify; }\n\nh2 {\n  font-weight: bold;\n  padding-bottom: 1em;\n  padding-top: 2em; }\n\nol {\n  font-size: 12px;\n  padding: 1em 0 3em 1em; }\n\nh4 {\n  padding-top: 20em; }\n\n.linkstab {\n  display: inline-flex;\n  color: #fff;\n  background-color: #171717;\n  font-size: 14px;\n  font-family: 'opR';\n  width: 100%;\n  padding: 11px 65px; }\n\n.downarrow {\n  height: 12px;\n  transform: rotate(-90deg); }\n\n.padl15 {\n  padding-left: 15px; }\n\n.homeimg {\n  height: 22px;\n  width: 22px; }\n\n.pointer {\n  cursor: pointer; }\n\n@media screen and (max-width: 600px) {\n  .schemetext {\n    padding: 2em; }\n  p {\n    font-size: 14px; }\n  .linkstab {\n    padding: 11px 40px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb2xkLXNjaGVtZXMvQzpcXERhdGFcXGdvd3RoYW1cXFNCSlxcc2JqLmdpdGh1Yi5pb1xcc2JqL3NyY1xcYXBwXFxjb21wb25lbnRzXFxnb2xkLXNjaGVtZXNcXGdvbGQtc2NoZW1lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFvQjtFQUNwQixrQkFBaUIsRUFBQTs7QUFFckI7RUFFSSxXQUFXO0VBQ2YsWUFBVztFQUNYLGtCQUFrQixFQUFBOztBQUdsQjtFQUVJLFlBQVc7RUFDWCxXQUFVO0VBQ1Ysb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBOztBQUVyQjtFQUVJLGdCQUFnQixFQUFBOztBQUdwQjtFQUVFLGdCQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQVk7RUFDWiw4QkFBNkIsRUFBQTs7QUFFL0I7RUFFSSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFFRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUlyQjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBYztFQUNkLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUVJLG9CQUFvQjtFQUNwQixXQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLGtCQUFpQixFQUFBOztBQUVyQjtFQUVJLFlBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFFN0I7RUFFSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFFSSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUlmO0VBRUksZUFBYyxFQUFBOztBQUVsQjtFQUNBO0lBRUUsWUFBVyxFQUFBO0VBR2I7SUFDRSxlQUFjLEVBQUE7RUFFaEI7SUFFSSxrQkFBa0IsRUFBQSxFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ29sZC1zY2hlbWVzL2dvbGQtc2NoZW1lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2hlbWVib2R5XHJcbntcclxuICAgIHBhZGRpbmc6IDdlbSAwIDBlbSAwO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLnByb2R1Y3RoZXJvaW1nZGl2XHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6NTB2aDtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvZHVjdGhlcm9pbWdcclxue1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLnNjaGVtZXRleHRcclxue1xyXG4gICAgcGFkZGluZzogMmVtIDdlbTtcclxufVxyXG5cclxuLmJvZHlIZWFkaW5nXHJcbntcclxuICBwYWRkaW5nOjAgMC41ZW07XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIG1hcmdpbjoyZW0gMDtcclxuICBib3JkZXItbGVmdDo4cHggc29saWQgI0NDOUYwODtcclxufVxyXG4uYm9sZFxyXG4gIHtcclxuICAgIGZvbnQtZmFtaWx5OiBvcEVCO1xyXG4gIH1cclxuXHJcbiAgcFxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBoMntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgfVxyXG5cclxuICBvbHtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgcGFkZGluZzogMWVtIDAgM2VtIDFlbTtcclxuICB9XHJcblxyXG4gIGg0e1xyXG4gICAgcGFkZGluZy10b3A6IDIwZW07XHJcbiAgfVxyXG5cclxuICAubGlua3N0YWJcclxuICB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnb3BSJztcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgcGFkZGluZzoxMXB4IDY1cHg7XHJcbiAgfVxyXG4gIC5kb3duYXJyb3dcclxuICB7XHJcbiAgICAgIGhlaWdodDoxMnB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gIH1cclxuICAucGFkbDE1XHJcbiAge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIC5ob21laW1nXHJcbiAge1xyXG4gICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICBcclxuICB9XHJcbiAgXHJcbiAgLnBvaW50ZXJcclxuICB7XHJcbiAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5zY2hlbWV0ZXh0XHJcbiAge1xyXG4gICAgcGFkZGluZzoyZW07XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gIH07XHJcbiAgLmxpbmtzdGFiXHJcbiAge1xyXG4gICAgICBwYWRkaW5nOiAxMXB4IDQwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/gold-schemes/gold-schemes.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/gold-schemes/gold-schemes.component.ts ***!
  \*******************************************************************/
/*! exports provided: GoldSchemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoldSchemesComponent", function() { return GoldSchemesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var GoldSchemesComponent = /** @class */ (function () {
    function GoldSchemesComponent(ts, sh, router) {
        this.ts = ts;
        this.sh = sh;
        this.router = router;
    }
    GoldSchemesComponent.prototype.ngOnInit = function () {
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    GoldSchemesComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    GoldSchemesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gold-schemes',
            template: __webpack_require__(/*! ./gold-schemes.component.html */ "./src/app/components/gold-schemes/gold-schemes.component.html"),
            styles: [__webpack_require__(/*! ./gold-schemes.component.scss */ "./src/app/components/gold-schemes/gold-schemes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], GoldSchemesComponent);
    return GoldSchemesComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav scrolled\" id=\"myTopnav\">\r\n  <div class=\"logo\" id=\"logo\" (click)=\"goToPage('home')\">\r\n    SBJ Mart\r\n  </div>\r\n<a id=\"products\" class=\"\" (click)=\"goToProducts('allproducts','allmetals')\"  >{{ts.translate('products')}}</a>\r\n<a (click)=\"goToCollections('allcollections')\">{{ts.translate('collections')}}</a>\r\n<a  (click)=\"goToPage('goldschemes')\">{{ts.translate('goldschemes')}}\r\n\r\n</a>\r\n\r\n<a (click)=\"goToPage('aboutus')\">{{ts.translate('aboutus')}}</a>\r\n<a (click)=\"goToPage('contactus')\">{{ts.translate('contactus')}}</a>\r\n<div class=\"lang \">\r\n  <div class=\"phonelink\">9042222681 &nbsp;&nbsp;&nbsp;|</div>\r\n  <mat-form-field class=\"langclass\" appearance=\"none\">\r\n      \r\n      <mat-select id=\"language\" [(ngModel)]=\"languageselect\" (selectionChange)=\"getLang(languageselect)\" name=\"language\">\r\n        <mat-option class=\"droptext\"  *ngFor=\"let lang of langlist\" [value]=\"lang\">\r\n          {{lang}}\r\n        </mat-option>\r\n      \r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n<a href=\"javascript:void(0);\" style=\"font-size:15px;\" class=\"icon\" (click)=\"myFunction()\">&#9776;</a>\r\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topnav {\n  overflow: hidden;\n  font-family: 'opB';\n  text-align: center;\n  position: fixed;\n  width: 100%;\n  transition: 0.3s all ease-in-out;\n  z-index: 2;\n  background: #fff;\n  background-color: #fff;\n  color: black !important;\n  line-height: 5em;\n  height: 80px;\n  box-shadow: 0 0 10px 1px #cfcfcf; }\n  .topnav .lang {\n    padding: 0 2em;\n    font-size: 12px;\n    font-family: 'opR'; }\n  .langclass {\n  width: 5em;\n  padding-top: 1.5em;\n  color: #272727;\n  border: 0; }\n  .logo {\n  float: left;\n  cursor: pointer; }\n  ::ng-deep .mat-form-field-type-mat-select ::ng-deep .mat-form-field-label, ::ng-deep .mat-select-value {\n  color: #272727 !important; }\n  .topnav a, .topnav div {\n  display: inline-flex;\n  color: black;\n  border-bottom: 5px solid transparent;\n  padding: 14px 30px;\n  text-decoration: none;\n  font-size: 17px;\n  transition: 0.3s all ease-in-out; }\n  #products {\n  margin-left: 10em; }\n  .topnav .icon {\n  display: none; }\n  .dropdown {\n  float: left;\n  overflow: hidden; }\n  .dropdown .dropbtn {\n  font-size: 17px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0; }\n  .dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n  .lang {\n  float: right;\n  padding: 0 2em; }\n  .dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left; }\n  .phonelink {\n  font-size: 12px !important;\n  padding-top: 1.4em !important; }\n  .topnav a:hover, .dropdown:hover .dropbtn {\n  border-bottom: 5px solid #CC9F08;\n  color: #CC9F08;\n  cursor: pointer; }\n  .dropdown-content a:hover {\n  background-color: #ddd;\n  color: black; }\n  .dropdown:hover .dropdown-content {\n  display: block; }\n  @media screen and (max-width: 600px) {\n  .topnav a, .dropdown .dropbtn {\n    display: none; }\n  .topnav > .lang {\n    padding: 0;\n    padding-right: 6em; }\n  .topnav > .lang > .phonelink {\n    display: none; }\n  .topnav > .lang > #language {\n    position: absolute;\n    top: 2.5em;\n    z-index: 17;\n    right: 5em; }\n  .topnav a.icon {\n    float: right;\n    display: block; }\n  .homebody > .talktous {\n    font-size: 12px; } }\n  @media screen and (max-width: 600px) {\n  .topnav.responsive {\n    position: fixed; }\n  .topnav.responsive .icon {\n    position: absolute;\n    right: 0;\n    top: 0;\n    transition: 0.3s all ease-in-out; }\n  .topnav a.icon {\n    display: block;\n    position: absolute;\n    right: 0; }\n  .topnav.responsive a {\n    float: none;\n    display: block;\n    text-align: left;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown {\n    float: none;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown-content {\n    position: relative;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown .dropbtn {\n    display: block;\n    width: 100%;\n    text-align: left;\n    transition: 0.3s all ease-in-out; }\n  #products {\n    margin-left: 0em;\n    margin-top: 3em; } }\n  #language {\n  background: transparent;\n  border: 0;\n  color: black; }\n  #language:focus {\n  outline: 0; }\n  #language option {\n  background-color: transparent;\n  border: 5px solid #fff;\n  border-radius: 5em;\n  color: grey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXERhdGFcXGdvd3RoYW1cXFNCSlxcc2JqLmdpdGh1Yi5pb1xcc2JqL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUdoQixrQkFBa0I7RUFDbkIsa0JBQWtCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBR1gsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFHVixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHVCQUFzQjtFQUN0QixnQkFBZ0I7RUFDZCxZQUFZO0VBQ2QsZ0NBQWdDLEVBQUE7RUFuQmxDO0lBdUJJLGNBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7RUFHcEI7RUFFQSxVQUFVO0VBQ1Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxTQUFTLEVBQUE7RUFFWDtFQUVFLFdBQVU7RUFDVixlQUFlLEVBQUE7RUFFakI7RUFDRSx5QkFBeUIsRUFBQTtFQUszQjtFQUNFLG9CQUFvQjtFQUNwQixZQUFXO0VBQ1osb0NBQW9DO0VBQ25DLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdDQUErQixFQUFBO0VBRWpDO0VBRUUsaUJBQWlCLEVBQUE7RUF3Qm5CO0VBQ0UsYUFBYSxFQUFBO0VBR2Y7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7RUFHbEI7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsU0FBUyxFQUFBO0VBR1g7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsK0NBQTRDO0VBQzVDLFVBQVUsRUFBQTtFQUVaO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBQTtFQUdoQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7RUFFbEI7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCLEVBQUE7RUFHL0I7RUFDRSxnQ0FBK0I7RUFDL0IsY0FBYztFQUNkLGVBQWUsRUFBQTtFQUdqQjtFQUNFLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7RUFHZDtFQUNFLGNBQWMsRUFBQTtFQUdoQjtFQUNFO0lBQ0UsYUFBYSxFQUFBO0VBR2Y7SUFFRSxVQUFTO0lBQ1Qsa0JBQWtCLEVBQUE7RUFFcEI7SUFDRSxhQUFhLEVBQUE7RUFFZjtJQUVFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVUsRUFBQTtFQUVaO0lBQ0UsWUFBWTtJQUNaLGNBQWMsRUFBQTtFQUVoQjtJQUVFLGVBQWUsRUFBQSxFQUNoQjtFQU1IO0VBQ0U7SUFBb0IsZUFBZSxFQUFBO0VBQ25DO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sZ0NBQWdDLEVBQUE7RUFFbEM7SUFFRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVEsRUFBQTtFQUVWO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0NBQWdDLEVBQUE7RUFFbEM7SUFBOEIsV0FBVztJQUFHLGdDQUFnQyxFQUFBO0VBQzVFO0lBQXNDLGtCQUFrQjtJQUFHLGdDQUFnQyxFQUFBO0VBQzNGO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0NBQWdDLEVBQUE7RUFHbEM7SUFFRSxnQkFBZ0I7SUFDaEIsZUFBYyxFQUFBLEVBQ2Y7RUFHTDtFQUNDLHVCQUF1QjtFQUN4QixTQUFTO0VBQ1QsWUFBWSxFQUFBO0VBRVo7RUFDRSxVQUFTLEVBQUE7RUFHWDtFQUVFLDZCQUE2QjtFQUM3QixzQkFBcUI7RUFDckIsa0JBQWlCO0VBQ2pCLFdBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BuYXYge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgXHJcbiBcclxuICBmb250LWZhbWlseTogJ29wQic7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gXHJcbiAgXHJcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgei1pbmRleDogMjtcclxuXHJcblxyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiA1ZW07XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4ICNjZmNmY2Y7XHJcblxyXG5cclxuICAubGFuZ3tcclxuICAgIHBhZGRpbmc6MCAyZW07XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogJ29wUic7XHJcbiAgfVxyXG4gIH1cclxuICAubGFuZ2NsYXNzXHJcbntcclxuICB3aWR0aDogNWVtO1xyXG4gICAgcGFkZGluZy10b3A6IDEuNWVtO1xyXG4gICAgY29sb3I6ICMyNzI3Mjc7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuICAubG9nb1xyXG4gIHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtc2VsZWN0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwsIDo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgICBjb2xvcjogIzI3MjcyNyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudG9wbmF2IGF7XHJcblxyXG4gIH1cclxuICAudG9wbmF2IGEgLC50b3BuYXYgZGl2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDE0cHggMzBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRyYW5zaXRpb246MC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gICNwcm9kdWN0c1xyXG4gIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMGVtO1xyXG4gIH1cclxuICAvLyAudG9wbmF2LnNjcm9sbGVkXHJcbiAgLy8ge1xyXG4gIC8vICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIC8vIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgLy8gbGluZS1oZWlnaHQ6IDRlbTtcclxuICAvLyBoZWlnaHQ6IDcuM2VtO1xyXG4gIC8vIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCAjY2ZjZmNmO1xyXG4gIC8vICAgYVxyXG4gIC8vICAge1xyXG4gIC8vICAgICBjb2xvcjpibGFjaztcclxuICAvLyAgIH1cclxuICAvLyAgIGRpdiAsIGRpdiAgI2xhbmd1YWdlXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIGNvbG9yOmJsYWNrO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgLmxhbmd7XHJcbiAgLy8gICAgIHBhZGRpbmc6MCAyZW07XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gIFxyXG4gIFxyXG4gIC50b3BuYXYgLmljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duIC5kcm9wYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDsgICAgXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC5sYW5ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMCAyZW07XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAucGhvbmVsaW5re1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMS40ZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdiBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTo1cHggc29saWQgI0NDOUYwODtcclxuICAgIGNvbG9yOiAjQ0M5RjA4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC50b3BuYXYgYSwgLmRyb3Bkb3duIC5kcm9wYnRuICB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLnRvcG5hdiA+IC5sYW5nIHtcclxuICAgICAgXHJcbiAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgcGFkZGluZy1yaWdodDogNmVtO1xyXG4gICAgfVxyXG4gICAgLnRvcG5hdiA+IC5sYW5nID4gLnBob25lbGlua3tcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC50b3BuYXYgPiAubGFuZyA+ICNsYW5ndWFnZVxyXG4gICAge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMi41ZW07XHJcbiAgICAgIHotaW5kZXg6IDE3O1xyXG4gICAgICByaWdodDogNWVtO1xyXG4gICAgfVxyXG4gICAgLnRvcG5hdiBhLmljb24ge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmhvbWVib2R5ID4gLnRhbGt0b3VzXHJcbiAgICB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgfVxyXG5cclxuIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAudG9wbmF2LnJlc3BvbnNpdmUge3Bvc2l0aW9uOiBmaXhlZDt9XHJcbiAgICAudG9wbmF2LnJlc3BvbnNpdmUgLmljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgLnRvcG5hdiBhLmljb25cclxuICAgIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAudG9wbmF2LnJlc3BvbnNpdmUgYSB7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICAudG9wbmF2LnJlc3BvbnNpdmUgLmRyb3Bkb3duIHtmbG9hdDogbm9uZTsgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O31cclxuICAgIC50b3BuYXYucmVzcG9uc2l2ZSAuZHJvcGRvd24tY29udGVudCB7cG9zaXRpb246IHJlbGF0aXZlOyAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7fVxyXG4gICAgLnRvcG5hdi5yZXNwb25zaXZlIC5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgI3Byb2R1Y3RzXHJcbiAgICB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwZW07XHJcbiAgICAgIG1hcmdpbi10b3A6M2VtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiNsYW5ndWFnZVxyXG57YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbmJvcmRlcjogMDtcclxuY29sb3I6IGJsYWNrO1xyXG59XHJcbiNsYW5ndWFnZTpmb2N1c3tcclxuICBvdXRsaW5lOjA7XHJcbn1cclxuXHJcbiNsYW5ndWFnZSBvcHRpb25cclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjo1cHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOjVlbTtcclxuICBjb2xvcjpncmV5O1xyXG5cclxufSJdfQ== */"

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
        this.langlist = ['LA-EN', 'LA-TA'];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.languageselect = 'LA-EN';
        if (window.sessionStorage.getItem('lang'))
            this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
        else {
            window.sessionStorage.setItem('lang', 'LA-EN');
            this.languageselect = 'LA-EN';
        }
    };
    HeaderComponent.prototype.getLang = function (data) {
        console.log(data);
        this.ts.updateComp1Val(data);
        window.sessionStorage.setItem('lang', data);
    };
    HeaderComponent.prototype.goToProducts = function (types, metals) {
        this.sh.setValue(types);
        this.router.navigate(['products', metals]);
    };
    HeaderComponent.prototype.goToCollections = function (data) {
        this.sh.setValue(data);
        this.router.navigate(['collections']);
    };
    HeaderComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    HeaderComponent.prototype.myFunction = function () {
        var x = document.getElementById("myTopnav");
        var logo = document.getElementById("logo");
        console.log(x.className);
        if (x.className === "topnav" || x.className === "topnav scrolled") {
            if (x.className === "topnav") {
                x.className += " scrolled";
            }
            x.className += " responsive";
            x.style.height = "auto";
            logo.style.display = "none";
        }
        else {
            x.className = "topnav";
            x.className += " scrolled";
            logo.style.display = "block";
            x.style.height = "7em";
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

module.exports = "\r\n<div class=\"wrapper\">\r\n \r\n\r\n  <app-todaysrate></app-todaysrate>\r\n\r\n  <div class=\"topnav\" id=\"myTopnav\">\r\n      <div class=\"logo\" id=\"logo\" (click)=\"goToPage('home')\">\r\n        SBJ Mart\r\n      </div>\r\n    <a id=\"products\" class=\"\" (click)=\"goToProducts('allproducts','allmetals')\" >{{ts.translate('products')}}</a>\r\n    <a (click)=\"goToCollections('allcollections')\">{{ts.translate('collections')}}</a>\r\n    <a  (click)=\"goToPage('goldschemes')\">{{ts.translate('goldschemes')}}\r\n\r\n    </a>\r\n    \r\n    <a (click)=\"goToPage('aboutus')\">{{ts.translate('aboutus')}}</a>\r\n    <a (click)=\"goToPage('contactus')\">{{ts.translate('contactus')}}</a>\r\n    <div class=\"lang \">\r\n      <div class=\"phonelink\" style=\"font-size: 12px;font-family: 'opR';padding-top:1.4em;\">9042222681 &nbsp;&nbsp;&nbsp;|</div>\r\n        <!-- <select name=\"language\" [(ngModel)]=\"languageselect\"  (change)=\"getLang($event)\" id=\"language\">\r\n            <option value=\"LA-EN\">LA-EN</option>\r\n            <option value=\"LA-TA\">LA-TA</option>\r\n           \r\n           \r\n          </select> -->\r\n\r\n          <mat-form-field class=\"langclass\" appearance=\"none\">\r\n      \r\n              <mat-select id=\"language\" [(ngModel)]=\"languageselect\" (selectionChange)=\"getLang(languageselect)\" name=\"language\">\r\n                <mat-option class=\"droptext\"  *ngFor=\"let lang of langlist\" [value]=\"lang\">\r\n                  {{lang}}\r\n                </mat-option>\r\n              \r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n\r\n      </div>\r\n    <a href=\"javascript:void(0);\" style=\"font-size:15px;\" class=\"icon\" (click)=\"myFunction()\">&#9776;</a>\r\n  </div>\r\n\r\n  \r\n<div class=\"homebody\">\r\n\r\n  <div id=\"carouselExampleSlidesOnly herocarosol\" class=\"carousel slide\" data-interval=\"1000\" pause=\"true\" >\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item .item active\">\r\n        <img class=\"d-block w-100 carosolimg img-fluid\" src=\"../../../assets/images/homehero1.jpg\" alt=\"First slide\">\r\n      </div>\r\n      <div class=\"carousel-item .item\">\r\n        <img class=\"d-block w-100 carosolimg img-fluid\" src=\"../../../assets/images/homehero1.jpg\" alt=\"Second slide\">\r\n      </div>\r\n      <div class=\"carousel-item .item\">\r\n        <img class=\"d-block w-100 carosolimg img-fluid\" src=\"../../../assets/images/homehero1.jpg\" alt=\"Third slide\">\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"downarrowdiv\">\r\n    <a (click)=\"scrollToproducts()\"> <span class=\"material-icons downarrow\" >\r\n            expand_more\r\n            </span></a>\r\n       \r\n    </div>\r\n  </div>\r\n  <div id=\"productsec\" class=\"bodyView\" #products data-aos=\"fade-up\" data-aos-once=\"true\">\r\n    <div class=\"bodyHeading\">\r\n        {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('products') |  uppercase}}</span>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-6 padr5\">\r\n            <div class=\"imageContainer\">\r\n              <a (click)=\"goToProducts('allproducts','Gold')\">  <img class=\"collectionGoldImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                <div class=\"bottom-left\"> {{ts.translate('gold') | titlecase }}</div></a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-6 padl5\">\r\n            <div class=\"imageContainer\">\r\n                <a (click)=\"goToProducts('allproducts','Diamond')\">  <img class=\"collectionGoldImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                <div class=\"bottom-left\"> {{ts.translate('diamond') | titlecase }}</div></a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-12\">\r\n            <div class=\"imageContainer silver\">\r\n                <a (click)=\"goToProducts('allproducts','Silver')\"> <img class=\"collectionGoldImage\" src=\"../../../assets/images/homehero1.jpg\">\r\n                <div class=\"bottom-left\"> {{ts.translate('silver') | titlecase }}</div></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bodyView\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n    <div class=\"bodyHeading\" >\r\n        {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('collections') |  uppercase}}</span>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-12\" >\r\n          <div class=\"imageContainer\">\r\n              <a (click)=\"goToCollections('marriage')\"> <img class=\"collectionGoldImage smallheight\" src=\"../../../assets/images/homehero1.jpg\"></a>\r\n              <div class=\"bottom-left\"> {{ts.translate('wedding') | titlecase }}</div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-12\">\r\n          <div class=\"row\">\r\n              <div class=\"imageContainer colimg mar-3 mar-r-1\">\r\n                  <a (click)=\"goToCollections('men')\">  <img  class=\"collectionImage h240 \" src=\"../../../assets/images/homehero1.jpg\"></a>\r\n                  <div class=\"bottom-left lefter bot1\">{{ts.translate('men') | titlecase}}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"imageContainer colimg mar-r-1\">\r\n                    <a (click)=\"goToCollections('women')\"> <img class=\"collectionImage\" src=\"../../../assets/images/homehero1.jpg\"></a>\r\n                    <div class=\"bottom-left lefter bot1\">{{ts.translate('women') | titlecase}}</div>\r\n                </div>\r\n             </div>\r\n         \r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-12\">\r\n          <div class=\"row\">\r\n              <div class=\"imageContainer colimg mar-3 \">\r\n                  <a (click)=\"goToCollections('kids')\"> <img class=\"collectionImage h240 \" src=\"../../../assets/images/homehero1.jpg\"></a>\r\n                  <div class=\"bottom-left lefter bot1\">{{ts.translate('kids')| titlecase }}</div>\r\n              </div>\r\n            </div>\r\n          <div class=\"row\">\r\n             <div class=\"imageContainer colimg\">\r\n                <a (click)=\"goToCollections('gifts')\"> <img class=\"collectionImage\" src=\"../../../assets/images/homehero1.jpg\"></a>\r\n                 <div class=\"bottom-left lefter bot1\">{{ts.translate('gifts') | titlecase}}</div>\r\n             </div>\r\n           </div>\r\n       </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n<div class=\"bodyView\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n  <div class=\"bodyHeading\">\r\n    {{ts.translate('our') |  uppercase}} <span class=\"bold\">{{ts.translate('promises') |  uppercase}}</span>\r\n  </div>\r\n  <div class=\"row marginTop\">\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer\">\r\n            <div class=\"promiseBody\">\r\n              <div>\r\n                <img class=\"width50\" src=\"../../../assets/images/promise1.svg\" />\r\n              </div>\r\n              {{ts.translate('promise1')}}\r\n              \r\n            </div>\r\n            <div class=\"numbering\">1</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer\">\r\n            <div class=\"promiseBody\">\r\n                <div>\r\n                    <img class=\"width50\" src=\"../../../assets/images/promise2.svg\" />\r\n                  </div>\r\n                  {{ts.translate('promise2')}}\r\n              \r\n            </div>\r\n            <div class=\"numbering\">2</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer\">\r\n            <div class=\"promiseBody\">\r\n                <div>\r\n                    <img class=\"width50\" src=\"../../../assets/images/promise3.svg\" />\r\n                  </div>\r\n                  {{ts.translate('promise3')}}\r\n              \r\n            </div>\r\n            <div class=\"numbering\">3</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"PromiseContainer\">\r\n            <div class=\"promiseBody\">\r\n                <div>\r\n                    <img class=\"width50\" src=\"../../../assets/images/promise4.svg\" />\r\n                  </div>\r\n                  {{ts.translate('promise4')}}\r\n              \r\n            </div>\r\n            <div class=\"numbering\">4</div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"bodyView\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n  <div class=\"bodyHeading\">\r\n    {{ts.translate('top') |  uppercase}} <span class=\"bold\">{{ts.translate('sellingjewels') |  uppercase}}</span>\r\n  </div>\r\n<app-topselling></app-topselling>\r\n</div>\r\n<div class=\"bodyView\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n  <div class=\"bodyHeading\">\r\n      {{ts.translate('whatpeople') |  uppercase}} <span class=\"bold\">{{ts.translate('talkaboutus') |  uppercase}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\r\n      <div class=\"userpic\">\r\n        <img class=\"userimg\" src=\"../../../assets/images/homehero1.jpg\" />\r\n        <div class=\"username\">\r\n          <div class=\"name\">User1</div>\r\n          <div class=\"designation\">Buisness Women</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"usercomment\">\r\n        <div>\r\n          <img src=\"../../../assets/images/DoubleQuotes.svg\" class=\"doublequotes\" />\r\n        </div>\r\n        <div class=\"comments\">\r\n            Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: \r\n            a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, \r\n            though, the unity and coherence of ideas among sentences is what constitutes a paragraph.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\r\n        <div class=\"userpic\">\r\n          <img class=\"userimg\" src=\"../../../assets/images/homehero1.jpg\" />\r\n          <div class=\"username\">\r\n            <div class=\"name\">User2</div>\r\n            <div class=\"designation\">Buisness Women</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"usercomment\">\r\n          <div>\r\n            <img src=\"../../../assets/images/DoubleQuotes.svg\" class=\"doublequotes\" />\r\n          </div>\r\n          <div class=\"comments\">\r\n              Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: \r\n              a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, \r\n              though, the unity and coherence of ideas among sentences is what constitutes a paragraph.\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n</div>\r\n<app-talktous [talktouscontent]=\"ts.translate('talktoushome')\"></app-talktous>\r\n\r\n\r\n</div>\r\n<app-footer></app-footer>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css\");\n.wrapper {\n  overflow-x: hidden;\n  position: relative; }\n.carousel {\n  height: 100vh; }\n.herocarosol {\n  position: relative; }\n.carousel-inner {\n  height: 100%; }\n.carousel-item, .item, .carousel-item.active {\n  height: 100%; }\n.downarrow {\n  color: white;\n  position: absolute;\n  /* top: 5em; */\n  font-size: 5em;\n  bottom: 0;\n  left: 50%;\n  -webkit-animation: mymove 1s infinite;\n          animation: mymove 1s infinite;\n  cursor: pointer; }\n@-webkit-keyframes mymove {\n  from {\n    opacity: 0;\n    bottom: 0.5em; }\n  to {\n    opacity: 1;\n    bottom: 0; } }\n@keyframes mymove {\n  from {\n    opacity: 0;\n    bottom: 0.5em; }\n  to {\n    opacity: 1;\n    bottom: 0; } }\n.todaysrate {\n  position: fixed;\n  display: inline-flex;\n  top: 70%;\n  right: 0;\n  text-align: right;\n  z-index: 5;\n  cursor: pointer; }\n.bar {\n  height: 3px;\n  width: 3em;\n  margin-top: 3em;\n  background-color: #A57F00; }\n.circle {\n  height: 60px;\n  width: 60px;\n  padding-top: 14px;\n  font-size: 12px;\n  display: flex;\n  flex: 1;\n  margin: auto 0;\n  padding-left: -10px;\n  text-align: center;\n  overflow-wrap: break-word;\n  white-space: break-spaces;\n  border-radius: 50%;\n  background-color: #A57F00;\n  color: #fff; }\n.circle:hover .goldrate {\n  opacity: 1;\n  transform: scale(1);\n  color: black; }\n.goldrate {\n  width: 15em;\n  font-size: 12px;\n  position: absolute;\n  top: -8em;\n  right: 2em;\n  text-align: left;\n  box-shadow: 0 0 10px 1px grey;\n  background-color: #fff;\n  border-radius: 5px;\n  opacity: 0;\n  transform: scale(1.2);\n  transition: 0.3s all ease-in-out; }\n.goldratehead {\n  background-color: #A57F00;\n  color: #fff;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  padding: 8px; }\n.goldbody {\n  padding: 8px; }\n::ng-deep .mat-form-field-type-mat-select ::ng-deep .mat-form-field-label, ::ng-deep .mat-select-value {\n  color: #fff; }\n.topnav {\n  overflow: hidden;\n  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #272727 100%);\n  color: #fff;\n  font-family: 'opB';\n  text-align: center;\n  position: fixed;\n  width: 100%;\n  line-height: 5em;\n  transition: 0.3s all ease-in-out;\n  z-index: 2; }\n.topnav .lang {\n    padding: 0 2em;\n    font-size: 12px;\n    font-family: 'opR'; }\n.logo {\n  float: left;\n  cursor: pointer; }\n.topnav a, .topnav div {\n  display: inline-flex;\n  color: #f2f2f2;\n  border-bottom: 5px solid transparent;\n  padding: 14px 30px;\n  text-decoration: none;\n  font-size: 17px;\n  transition: 0.3s all ease-in-out; }\n#products {\n  margin-left: 10em; }\n.topnav.scrolled {\n  background: #fff;\n  background-color: #fff;\n  color: #444444 !important;\n  line-height: 5em;\n  height: 80px;\n  box-shadow: 0 0 10px 1px #cfcfcf; }\n.topnav.scrolled a {\n    color: black; }\n.topnav.scrolled div, .topnav.scrolled div #language {\n    color: black; }\n.topnav.scrolled .lang {\n    padding: 0 2em; }\n.topnav.scrolled ::ng-deep .mat-form-field-type-mat-select ::ng-deep .mat-form-field-label, .topnav.scrolled ::ng-deep .mat-select-value {\n    color: #272727 !important; }\n.topnav .icon {\n  display: none; }\n.dropdown {\n  float: left;\n  overflow: hidden; }\n.dropdown .dropbtn {\n  font-size: 17px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0; }\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n.lang {\n  float: right;\n  padding: 0 2em; }\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left; }\n.topnav a:hover, .dropdown:hover .dropbtn {\n  border-bottom: 5px solid #CC9F08;\n  color: #CC9F08;\n  cursor: pointer; }\n.dropdown-content a:hover {\n  background-color: #ddd;\n  color: black; }\n.dropdown:hover .dropdown-content {\n  display: block; }\n#language {\n  background: transparent;\n  border: 0;\n  color: white; }\n#language:focus {\n  outline: 0; }\n#language option {\n  background-color: transparent;\n  border: 5px solid #fff;\n  border-radius: 5em;\n  color: grey; }\n.carosolimg {\n  transition: 0.3s all ease-in-out;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.bodyView {\n  padding: 0em 10em;\n  width: 100%; }\n.bodyHeading {\n  padding: 0 0.5em;\n  font-size: 26px;\n  margin: 80px 0 32px 0;\n  border-left: 8px solid #CC9F08; }\n.bold {\n  font-family: opEB; }\n.imageContainer {\n  position: relative;\n  color: #fff;\n  padding: 0em 2em 0em 0em; }\n.phonelink {\n  font-size: 12px;\n  padding-top: 1.4em; }\n.marbar2 {\n  margin-bottom: 2em; }\n.collectionGoldImage {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 530px;\n  border-radius: 5px;\n  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); }\n.smallheight {\n  height: 522px; }\n.collectionImage {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 250px;\n  border-radius: 5px;\n  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); }\n.weddingcoll {\n  padding: 0; }\n.bottom-left {\n  position: absolute;\n  bottom: 1em;\n  left: 1em;\n  font-family: 'opB';\n  font-size: 2em; }\n.collectionImage:hover, .collectionGoldImage:hover {\n  transform: translate(0, -8px);\n  box-shadow: 0 40px 40px rgba(0, 0, 0, 0.2); }\n.PromiseContainer {\n  background-color: #FFFBEF;\n  height: 144px;\n  text-align: center;\n  width: 100%;\n  padding: 4em;\n  border-radius: 5px;\n  position: relative; }\n.promiseBody {\n  font-family: opB;\n  font-size: 18px; }\n.numbering {\n  position: absolute;\n  top: -1em;\n  left: 2em;\n  width: 24px;\n  height: 24px;\n  background-color: #333333;\n  color: #fff;\n  font-size: 16px;\n  font-family: 'opEB';\n  border-radius: 5px; }\n.marginTop {\n  margin-top: 8em; }\n.userpic {\n  display: inline-flex;\n  height: 100px;\n  position: relative; }\n.userimg {\n  width: 100px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.doublequotes {\n  width: 30px;\n  height: 30px;\n  margin: 1em 0; }\n.username {\n  margin: auto;\n  padding: 0 2em; }\n.name {\n  color: #444444;\n  font-size: 18px; }\n.designation {\n  color: #999999;\n  font-size: 14px; }\n.comments {\n  font-size: 16px;\n  color: #777777; }\n.usercomment {\n  margin: 3em 0; }\n.talktous {\n  background-color: #F6F7F7;\n  color: #666666;\n  height: 146px;\n  margin: auto;\n  padding: 2em 1em;\n  font-size: 20px; }\n.talktousButton {\n  background-color: #CC9F08;\n  color: #fff;\n  border-radius: 5px;\n  margin: 1em;\n  float: right;\n  border: 0;\n  padding: 4px 16px; }\n.mar-3 {\n  margin-bottom: 3em; }\n.mar-r-1 {\n  margin-right: 1em; }\n.h240 {\n  height: 240px; }\n@media screen and (max-width: 600px) {\n  .topnav a, .dropdown .dropbtn {\n    display: none; }\n  .topnav > .lang {\n    padding: 0;\n    padding-right: 6em; }\n  .topnav > .lang > .phonelink {\n    display: none; }\n  .topnav > .lang > #language {\n    position: absolute;\n    top: 2.4em;\n    z-index: 17;\n    right: 5em; }\n  .topnav a.icon {\n    float: right;\n    display: block; }\n  .homebody > .talktous {\n    font-size: 12px; }\n  .imageContainer {\n    padding: 0px; }\n  .collectionGoldImage {\n    height: 13em; }\n  .collectionImage {\n    border-radius: 5px;\n    height: 13em; }\n  .lefter {\n    bottom: 2em;\n    left: 2em; }\n  .padtop10 {\n    padding-top: 10px; }\n  .padl5 {\n    padding-left: 5px; }\n  .padr5 {\n    padding-right: 5px; }\n  .colimg {\n    padding: 1em 1.5em 0; }\n  .bot1 {\n    bottom: 1em; } }\n.width50 {\n  width: 50px; }\n.langclass {\n  width: 5em;\n  padding-top: 1.5em;\n  color: white;\n  border: 0; }\n@media screen and (max-width: 600px) {\n  .topnav.responsive {\n    position: fixed; }\n  .topnav.responsive .icon {\n    position: absolute;\n    right: 0;\n    top: 0;\n    transition: 0.3s all ease-in-out; }\n  .topnav a.icon {\n    display: block;\n    position: absolute;\n    right: 0; }\n  .topnav.responsive a {\n    float: none;\n    display: block;\n    text-align: left;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown {\n    float: none;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown-content {\n    position: relative;\n    transition: 0.3s all ease-in-out; }\n  .topnav.responsive .dropdown .dropbtn {\n    display: block;\n    width: 100%;\n    text-align: left;\n    transition: 0.3s all ease-in-out; }\n  #products {\n    margin-left: 0em;\n    margin-top: 3em; }\n  .PromiseContainer {\n    margin-bottom: 4em; }\n  .downarrow {\n    left: 45%; }\n  .bodyView {\n    padding: 2em 2em;\n    width: 100%; }\n  .weddingcoll {\n    padding: 0 1em; }\n  .circle {\n    right: 1em; }\n  .silver {\n    padding-top: 10px; }\n  .mar-3 {\n    margin-bottom: 0em; }\n  .h240 {\n    height: 13em; }\n  .mar-r-1 {\n    margin-right: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxEYXRhXFxnb3d0aGFtXFxTQkpcXHNiai5naXRodWIuaW9cXHNiai9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5RkFBWTtBQUVaO0VBRUUsa0JBQWtCO0VBRWxCLGtCQUFrQixFQUFBO0FBRXBCO0VBRUEsYUFBWSxFQUFBO0FBR1o7RUFFRSxrQkFBa0IsRUFBQTtBQUVwQjtFQUVFLFlBQVcsRUFBQTtBQUViO0VBQ0UsWUFBVyxFQUFBO0FBSWI7RUFFSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQUE7RUFDQSxjQUFjO0VBQ2QsU0FBUztFQUNULFNBQVM7RUFDVCxxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLGVBQWUsRUFBQTtBQUdqQjtFQUNFO0lBQU0sVUFBVTtJQUNkLGFBQVksRUFBQTtFQUNkO0lBQUksVUFBVTtJQUNaLFNBQVEsRUFBQSxFQUFBO0FBSlo7RUFDRTtJQUFNLFVBQVU7SUFDZCxhQUFZLEVBQUE7RUFDZDtJQUFJLFVBQVU7SUFDWixTQUFRLEVBQUEsRUFBQTtBQUVkO0VBRUUsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixRQUFRO0VBQ1IsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsZUFBZSxFQUFBO0FBRWpCO0VBRUUsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlO0VBQ2YseUJBQXlCLEVBQUE7QUFFM0I7RUFFRSxZQUFZO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLE9BQU87RUFDUCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVyxFQUFBO0FBRWY7RUFHSSxVQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFlBQVcsRUFBQTtBQUdmO0VBRUUsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN4QixrQkFBaUI7RUFDakIsVUFBUztFQUNULHFCQUFxQjtFQUNyQixnQ0FBZ0MsRUFBQTtBQUVoQztFQUVFLHlCQUF5QjtFQUN6QixXQUFXO0VBRVgsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixZQUFZLEVBQUE7QUFHZDtFQUVFLFlBQVcsRUFBQTtBQUViO0VBQ0UsV0FBWSxFQUFBO0FBYWQ7RUFDRSxnQkFBZ0I7RUFDaEIsMEVBQTBFO0VBQzFFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbkIsa0JBQWtCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBRWhCLGdDQUFnQztFQUNoQyxVQUFVLEVBQUE7QUFYWjtJQWFJLGNBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7QUFHcEI7RUFFRSxXQUFVO0VBQ1YsZUFBZSxFQUFBO0FBS2pCO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0NBQStCLEVBQUE7QUFFakM7RUFFRSxpQkFBaUIsRUFBQTtBQUVuQjtFQUVFLGdCQUFnQjtFQUNsQixzQkFBc0I7RUFDdEIseUJBQXdCO0VBQ3hCLGdCQUFnQjtFQUNkLFlBQVk7RUFDZCxnQ0FBZ0MsRUFBQTtBQVBoQztJQVVJLFlBQVcsRUFBQTtBQVZmO0lBY0ksWUFBVyxFQUFBO0FBZGY7SUFpQkksY0FBYSxFQUFBO0FBakJqQjtJQXNCSSx5QkFBeUIsRUFBQTtBQUs3QjtFQUNFLGFBQWEsRUFBQTtBQUdmO0VBQ0UsV0FBVztFQUNYLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLFNBQVMsRUFBQTtBQUdYO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLCtDQUE0QztFQUM1QyxVQUFVLEVBQUE7QUFFWjtFQUNFLFlBQVk7RUFDWixjQUFjLEVBQUE7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsZ0NBQStCO0VBQy9CLGNBQWM7RUFDZCxlQUFlLEVBQUE7QUFHakI7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWSxFQUFBO0FBR2Q7RUFDRSxjQUFjLEVBQUE7QUFNbEI7RUFDQyx1QkFBdUI7RUFDeEIsU0FBUztFQUNULFlBQVksRUFBQTtBQUVaO0VBQ0UsVUFBUyxFQUFBO0FBR1g7RUFFRSw2QkFBNkI7RUFDN0Isc0JBQXFCO0VBQ3JCLGtCQUFpQjtFQUNqQixXQUFVLEVBQUE7QUFJWjtFQUVFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBO0FBSWpCO0VBRUUsaUJBQWdCO0VBQ2hCLFdBQVUsRUFBQTtBQUdaO0VBRUUsZ0JBQWU7RUFDZixlQUFlO0VBQ2YscUJBQW9CO0VBQ3BCLDhCQUE2QixFQUFBO0FBRy9CO0VBRUUsaUJBQWlCLEVBQUE7QUFHbkI7RUFFRSxrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLHdCQUF3QixFQUFBO0FBRTFCO0VBRUUsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0FBRXRCO0VBRUUsa0JBQWtCLEVBQUE7QUFFcEI7RUFFRSxXQUFXO0VBQ1Qsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBR3JCLHVEQUF1RCxFQUFBO0FBRXhEO0VBRUUsYUFBWSxFQUFBO0FBRWQ7RUFFRSxXQUFXO0VBQ1Qsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBR3JCLHVEQUF1RCxFQUFBO0FBRXhEO0VBRUksVUFBVSxFQUFBO0FBRVo7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0FBSWhCO0VBS0UsNkJBQTZCO0VBQzdCLDBDQUEwQyxFQUFBO0FBRzVDO0VBRUUseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFHcEI7RUFFRSxnQkFBZTtFQUNmLGVBQWMsRUFBQTtBQUloQjtFQUVFLGtCQUFrQjtFQUNsQixTQUFRO0VBQ1IsU0FBUTtFQUNSLFdBQVU7RUFDVixZQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVU7RUFDVixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBO0FBR3BCO0VBRUUsZUFBZSxFQUFBO0FBRWpCO0VBRUUsb0JBQW9CO0VBQ3BCLGFBQVk7RUFDWixrQkFBa0IsRUFBQTtBQUVwQjtFQUVFLFlBQVc7RUFDWCxvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7QUFFbkI7RUFFRSxXQUFVO0VBQ1YsWUFBVztFQUNYLGFBQVksRUFBQTtBQUVkO0VBRUUsWUFBWTtFQUNaLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUE7QUFFakI7RUFFRSxjQUFjO0VBQ2QsZUFBZSxFQUFBO0FBRWpCO0VBRUUsZUFBZTtFQUNmLGNBQWMsRUFBQTtBQUVoQjtFQUVFLGFBQWEsRUFBQTtBQUVmO0VBRUUseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFFRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxpQkFBaUIsRUFBQTtBQUdyQjtFQUVFLGtCQUFpQixFQUFBO0FBR25CO0VBRUUsaUJBQWlCLEVBQUE7QUFFbkI7RUFFRSxhQUFZLEVBQUE7QUFJZDtFQUNFO0lBQ0UsYUFBYSxFQUFBO0VBR2Y7SUFFRSxVQUFTO0lBQ1Qsa0JBQWtCLEVBQUE7RUFFcEI7SUFDRSxhQUFhLEVBQUE7RUFFZjtJQUVFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVUsRUFBQTtFQUVaO0lBQ0UsWUFBWTtJQUNaLGNBQWMsRUFBQTtFQUVoQjtJQUVFLGVBQWUsRUFBQTtFQUdqQjtJQUVFLFlBQVksRUFBQTtFQUVkO0lBRUUsWUFBWSxFQUFBO0VBRWY7SUFFQyxrQkFBa0I7SUFDbEIsWUFBWSxFQUFBO0VBRWI7SUFFRSxXQUFVO0lBQ1YsU0FBUSxFQUFBO0VBRVY7SUFFRSxpQkFBZ0IsRUFBQTtFQUVsQjtJQUVFLGlCQUFnQixFQUFBO0VBRWxCO0lBRUUsa0JBQWtCLEVBQUE7RUFFcEI7SUFDQyxvQkFBb0IsRUFBQTtFQUVyQjtJQUVDLFdBQVcsRUFBQSxFQUNYO0FBR0Y7RUFFRSxXQUFXLEVBQUE7QUFHYjtFQUVFLFVBQVU7RUFDUixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVMsRUFBQTtBQUdiO0VBQ0U7SUFBb0IsZUFBZSxFQUFBO0VBQ25DO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sZ0NBQWdDLEVBQUE7RUFFbEM7SUFFRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVEsRUFBQTtFQUVWO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0NBQWdDLEVBQUE7RUFFbEM7SUFBOEIsV0FBVztJQUFHLGdDQUFnQyxFQUFBO0VBQzVFO0lBQXNDLGtCQUFrQjtJQUFHLGdDQUFnQyxFQUFBO0VBQzNGO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0NBQWdDLEVBQUE7RUFHbEM7SUFFRSxnQkFBZ0I7SUFDaEIsZUFBYyxFQUFBO0VBRWhCO0lBRUUsa0JBQWlCLEVBQUE7RUFFbkI7SUFFRSxTQUFTLEVBQUE7RUFFWDtJQUVFLGdCQUFlO0lBQ2YsV0FBVSxFQUFBO0VBR1o7SUFFRSxjQUFjLEVBQUE7RUFJaEI7SUFDRSxVQUFTLEVBQUE7RUFFWDtJQUVFLGlCQUFnQixFQUFBO0VBRWxCO0lBRUUsa0JBQWlCLEVBQUE7RUFFbkI7SUFFRSxZQUFZLEVBQUE7RUFFZDtJQUVFLGVBQWUsRUFBQSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2Nkbi5tYXRlcmlhbGRlc2lnbmljb25zLmNvbS81LjQuNTUvY3NzL21hdGVyaWFsZGVzaWduaWNvbnMubWluLmNzc1wiKTtcclxuXHJcbi53cmFwcGVyXHJcbntcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgLy8gb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2Fyb3VzZWxcclxue1xyXG5oZWlnaHQ6MTAwdmg7XHJcbiAgICBcclxufVxyXG4uaGVyb2Nhcm9zb2xcclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2Fyb3VzZWwtaW5uZXJcclxue1xyXG4gIGhlaWdodDoxMDAlO1xyXG59XHJcbi5jYXJvdXNlbC1pdGVtICwgLml0ZW0gLCAuY2Fyb3VzZWwtaXRlbS5hY3RpdmV7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcblxyXG4uZG93bmFycm93XHJcbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8qIHRvcDogNWVtOyAqL1xyXG4gICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBhbmltYXRpb246IG15bW92ZSAxcyBpbmZpbml0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBteW1vdmUge1xyXG4gICAgZnJvbSB7b3BhY2l0eTogMDtcclxuICAgICAgYm90dG9tOjAuNWVtO31cclxuICAgIHRvIHtvcGFjaXR5OiAxO1xyXG4gICAgICBib3R0b206MDt9XHJcbiAgfVxyXG4udG9kYXlzcmF0ZVxyXG57XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHRvcDogNzAlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5iYXJcclxue1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIHdpZHRoOiAzZW07XHJcbiAgbWFyZ2luLXRvcDogM2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBNTdGMDA7XHJcbn1cclxuLmNpcmNsZVxyXG57XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC0xMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTU3RjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmNpcmNsZTpob3ZlciB7XHJcbiAuZ29sZHJhdGV7XHJcblxyXG4gICAgb3BhY2l0eToxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gfVxyXG59XHJcbi5nb2xkcmF0ZVxyXG57XHJcbiAgd2lkdGg6IDE1ZW07XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC04ZW07XHJcbiAgcmlnaHQ6IDJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCBncmV5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5vcGFjaXR5OjA7XHJcbnRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxudHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmdvbGRyYXRlaGVhZFxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E1N0YwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG5cclxufVxyXG4uZ29sZGJvZHlcclxue1xyXG4gIHBhZGRpbmc6OHB4O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtc2VsZWN0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwsIDo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgY29sb3I6ICNmZmYgO1xyXG59XHJcblxyXG4vLyA6Om5nLWRlZXAgLm1hdC1zZWxlY3Q6Zm9jdXM6bm90KC5tYXQtc2VsZWN0LWRpc2FibGVkKS5tYXQtcHJpbWFyeSBcclxuLy8gOjpuZy1kZWVwIC5tYXQtc2VsZWN0LWFycm93ICwgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXVuZGVybGluZSAsOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXRyaWdnZXIgXHJcbi8vIHtcclxuLy8gICAgIGNvbG9yOiAjNjM5NjFDO1xyXG4vLyB9XHJcblxyXG4vLyAvKiB0byBjaGFuZ2Ugc2VsZWN0ZWQgaXRlbSBjb2xvciBpbiB0aGUgc2VsZWN0IGxpc3QgKi9cclxuLy8gOjpuZy1kZWVwIC5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XHJcbi8vICAgICBjb2xvcjogIzYzOTYxQztcclxuLy8gfVxyXG4udG9wbmF2IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCAjMjcyNzI3IDEwMCUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiAnb3BCJztcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDVlbTtcclxuICBcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICB6LWluZGV4OiAyO1xyXG4gIC5sYW5ne1xyXG4gICAgcGFkZGluZzowIDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BSJztcclxuICB9XHJcbiAgfVxyXG4gIC5sb2dvXHJcbiAge1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnRvcG5hdiBhe1xyXG5cclxuICB9XHJcbiAgLnRvcG5hdiBhICwudG9wbmF2IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgIHBhZGRpbmc6IDE0cHggMzBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRyYW5zaXRpb246MC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gICNwcm9kdWN0c1xyXG4gIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMGVtO1xyXG4gIH1cclxuICAudG9wbmF2LnNjcm9sbGVkXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiM0NDQ0NDQgIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogNWVtO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCAjY2ZjZmNmO1xyXG4gICAgYVxyXG4gICAge1xyXG4gICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuICAgIGRpdiAsIGRpdiAgI2xhbmd1YWdlXHJcbiAgICB7XHJcbiAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgfVxyXG4gICAgLmxhbmd7XHJcbiAgICAgIHBhZGRpbmc6MCAyZW07XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtc2VsZWN0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwsIDo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgICAgIGNvbG9yOiAjMjcyNzI3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC50b3BuYXYgLmljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duIC5kcm9wYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDsgICAgXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC5sYW5ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMCAyZW07XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IGE6aG92ZXIsIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XHJcbiAgICBib3JkZXItYm90dG9tOjVweCBzb2xpZCAjQ0M5RjA4O1xyXG4gICAgY29sb3I6ICNDQzlGMDg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuIFxyXG5cclxuXHJcbiNsYW5ndWFnZVxyXG57YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbmJvcmRlcjogMDtcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcbiNsYW5ndWFnZTpmb2N1c3tcclxuICBvdXRsaW5lOjA7XHJcbn1cclxuXHJcbiNsYW5ndWFnZSBvcHRpb25cclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjo1cHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOjVlbTtcclxuICBjb2xvcjpncmV5O1xyXG5cclxufVxyXG4gXHJcbi5jYXJvc29saW1nXHJcbntcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuIFxyXG5cclxuICAuYm9keVZpZXdcclxuICB7XHJcbiAgICBwYWRkaW5nOjBlbSAxMGVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICB9XHJcblxyXG4gIC5ib2R5SGVhZGluZ1xyXG4gIHtcclxuICAgIHBhZGRpbmc6MCAwLjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIG1hcmdpbjo4MHB4IDAgMzJweCAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6OHB4IHNvbGlkICNDQzlGMDg7XHJcbiAgfVxyXG5cclxuICAuYm9sZFxyXG4gIHtcclxuICAgIGZvbnQtZmFtaWx5OiBvcEVCO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlQ29udGFpbmVyXHJcbiAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHBhZGRpbmc6IDBlbSAyZW0gMGVtIDBlbTtcclxuICB9XHJcbiAgLnBob25lbGlua1xyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctdG9wOiAxLjRlbTtcclxuICB9XHJcbi5tYXJiYXIyXHJcbntcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuLmNvbGxlY3Rpb25Hb2xkSW1hZ2Vcclxue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDUzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcclxufVxyXG4uc21hbGxoZWlnaHRcclxue1xyXG4gIGhlaWdodDo1MjJweDtcclxufVxyXG4uY29sbGVjdGlvbkltYWdlXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcbn1cclxuLndlZGRpbmdjb2xsXHJcbiAge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLmJvdHRvbS1sZWZ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMWVtO1xyXG4gICAgbGVmdDogMWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcEInO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG5cclxuXHJcbiAgLmNvbGxlY3Rpb25JbWFnZTpob3ZlciAsIC5jb2xsZWN0aW9uR29sZEltYWdlOmhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLThweCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC04cHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC04cHgpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLThweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtOHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNDBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcblxyXG4gIC5Qcm9taXNlQ29udGFpbmVyXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkJFRjtcclxuICAgIGhlaWdodDogMTQ0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDRlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLnByb21pc2VCb2R5XHJcbiAge1xyXG4gICAgZm9udC1mYW1pbHk6b3BCO1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgXHJcbiAgfVxyXG5cclxuICAubnVtYmVyaW5nXHJcbiAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOi0xZW07XHJcbiAgICBsZWZ0OjJlbTtcclxuICAgIHdpZHRoOjI0cHg7XHJcbiAgICBoZWlnaHQ6MjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcEVCJztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4gIC5tYXJnaW5Ub3BcclxuICB7XHJcbiAgICBtYXJnaW4tdG9wOiA4ZW07XHJcbiAgfVxyXG4gIC51c2VycGljXHJcbiAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC51c2VyaW1nXHJcbiAge1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgLmRvdWJsZXF1b3Rlc1xyXG4gIHtcclxuICAgIHdpZHRoOjMwcHg7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIG1hcmdpbjoxZW0gMDtcclxuICB9XHJcbiAgLnVzZXJuYW1lXHJcbiAge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAyZW07XHJcbiAgfVxyXG4gIC5uYW1le1xyXG4gICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5kZXNpZ25hdGlvblxyXG4gIHtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAuY29tbWVudHNcclxuICB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxuICB9XHJcbiAgLnVzZXJjb21tZW50XHJcbiAge1xyXG4gICAgbWFyZ2luOiAzZW0gMDtcclxuICB9XHJcbiAgLnRhbGt0b3VzXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjdGNztcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgaGVpZ2h0OiAxNDZweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDJlbSAxZW07XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgIFxyXG4gIH1cclxuICAudGFsa3RvdXNCdXR0b25cclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0M5RjA4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xyXG59XHJcblxyXG4ubWFyLTNcclxue1xyXG4gIG1hcmdpbi1ib3R0b206M2VtO1xyXG4gXHJcbn1cclxuLm1hci1yLTFcclxue1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcbi5oMjQwXHJcbntcclxuICBoZWlnaHQ6MjQwcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC50b3BuYXYgYSwgLmRyb3Bkb3duIC5kcm9wYnRuICB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgXHJcbiAgfVxyXG4gIC50b3BuYXYgPiAubGFuZyB7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDZlbTtcclxuICB9XHJcbiAgLnRvcG5hdiA+IC5sYW5nID4gLnBob25lbGlua3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC50b3BuYXYgPiAubGFuZyA+ICNsYW5ndWFnZVxyXG4gIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMi40ZW07XHJcbiAgICB6LWluZGV4OiAxNztcclxuICAgIHJpZ2h0OiA1ZW07XHJcbiAgfVxyXG4gIC50b3BuYXYgYS5pY29uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuaG9tZWJvZHkgPiAudGFsa3RvdXNcclxuICB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2VDb250YWluZXJcclxuICB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIC5jb2xsZWN0aW9uR29sZEltYWdlXHJcbiAge1xyXG4gICAgaGVpZ2h0OiAxM2VtO1xyXG4gIH1cclxuIC5jb2xsZWN0aW9uSW1hZ2VcclxuIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgaGVpZ2h0OiAxM2VtO1xyXG4gfVxyXG4gLmxlZnRlclxyXG4ge1xyXG4gICBib3R0b206MmVtO1xyXG4gICBsZWZ0OjJlbTtcclxuIH1cclxuIC5wYWR0b3AxMFxyXG4ge1xyXG4gICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gfVxyXG4gLnBhZGw1XHJcbiB7XHJcbiAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiB9XHJcbiAucGFkcjVcclxuIHtcclxuICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gfVxyXG4gLmNvbGltZ3tcclxuICBwYWRkaW5nOiAxZW0gMS41ZW0gMDtcclxuIH1cclxuIC5ib3QxXHJcbiB7XHJcbiAgYm90dG9tOiAxZW07XHJcbiB9XHJcbn1cclxuXHJcbi53aWR0aDUwXHJcbntcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLmxhbmdjbGFzc1xyXG57XHJcbiAgd2lkdGg6IDVlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxLjVlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG4gXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIHtwb3NpdGlvbjogZml4ZWQ7fVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSAuaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAudG9wbmF2IGEuaWNvblxyXG4gIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSBhIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSAuZHJvcGRvd24ge2Zsb2F0OiBub25lOyAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7fVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSAuZHJvcGRvd24tY29udGVudCB7cG9zaXRpb246IHJlbGF0aXZlOyAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7fVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSAuZHJvcGRvd24gLmRyb3BidG4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gICNwcm9kdWN0c1xyXG4gIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwZW07XHJcbiAgICBtYXJnaW4tdG9wOjNlbTtcclxuICB9XHJcbiAgLlByb21pc2VDb250YWluZXJcclxuICB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjRlbTtcclxuICB9XHJcbiAgLmRvd25hcnJvd1xyXG4gIHtcclxuICAgIGxlZnQ6IDQ1JTtcclxuICB9XHJcbiAgLmJvZHlWaWV3XHJcbiAge1xyXG4gICAgcGFkZGluZzoyZW0gMmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICB9XHJcblxyXG4gIC53ZWRkaW5nY29sbFxyXG4gIHtcclxuICAgIHBhZGRpbmc6IDAgMWVtO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLmNpcmNsZXtcclxuICAgIHJpZ2h0OjFlbTtcclxuICB9XHJcbiAgLnNpbHZlclxyXG4gIHtcclxuICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgfVxyXG4gIC5tYXItM1xyXG4gIHtcclxuICAgIG1hcmdpbi1ib3R0b206MGVtO1xyXG4gIH1cclxuICAuaDI0MFxyXG4gIHtcclxuICAgIGhlaWdodDogMTNlbTtcclxuICB9XHJcbiAgLm1hci1yLTFcclxuICB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxufVxyXG4gIFxyXG4gIl19 */"

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
    function HomeComponent(ts, sh, router) {
        this.ts = ts;
        this.sh = sh;
        this.router = router;
        this.list = [];
        this.langlist = ['LA-EN', 'LA-TA'];
    }
    HomeComponent.prototype.aosInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_6__["init"]({
            duration: 1200
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.languageselect = 'LA-EN';
        if (window.sessionStorage.getItem('lang'))
            this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
        else {
            window.sessionStorage.setItem('lang', 'LA-EN');
            this.languageselect = 'LA-EN';
        }
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
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
        console.log(data);
        this.ts.updateComp1Val(data);
        window.sessionStorage.setItem('lang', data);
    };
    HomeComponent.prototype.goToProducts = function (types, metals) {
        this.sh.setValue(types);
        this.router.navigate(['products', metals]);
    };
    HomeComponent.prototype.goToCollections = function (data) {
        this.sh.setValue(data);
        this.router.navigate(['collections']);
    };
    HomeComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    HomeComponent.prototype.scrollToproducts = function () {
        document.getElementById("productsec").scrollIntoView();
    };
    HomeComponent.prototype.toggleDrop = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__("nav ul li ul").fadeToggle(500);
    };
    HomeComponent.prototype.myFunction = function () {
        var x = document.getElementById("myTopnav");
        var logo = document.getElementById("logo");
        console.log(x.className);
        if (x.className === "topnav" || x.className === "topnav scrolled") {
            if (x.className === "topnav") {
                x.className += " scrolled";
            }
            x.className += " responsive";
            x.style.height = "auto";
            logo.style.display = "none";
        }
        else {
            x.className = "topnav";
            x.className += " scrolled";
            logo.style.display = "block";
            x.style.height = "7em";
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

/***/ "./src/app/components/products/dialog-data-example-dialog.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/products/dialog-data-example-dialog.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>Favorite Animal</h1> -->\r\n<div mat-dialog-content style=\"max-height: 100%;overflow: hidden;\">\r\n\r\n  <img style=\"width:100%;height:100%\"\r\n  class=\"productimg\"\r\n  src=\"{{data.url }}\"\r\n\r\n/>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"productwrapper\">\n  <app-header></app-header>\n  <div class=\"productbody\">\n      <app-todaysrate></app-todaysrate>\n    <div class=\"productheroimgdiv\">\n      <img class=\"productheroimg\" src=\"../../../assets/images/homehero1.jpg\" />\n    </div>\n    <div class=\"mainbody \">\n        \n      <div class=\"row w100\">\n      <div class=\"col-lg-3 cent\">\n        \n        <div class=\"findjewels\">\n          {{ ts.translate(\"findyourjewels\") | uppercase }}\n        </div>\n        <div id=\"selectedJewell\" class=\"selectedJewell\">{{ ts.translate(value) | uppercase }}</div>\n        <div class=\"btnGroup\">\n         <label>\n            <input id=\"allproducts\" (change)=\"handleChange($event.target.value)\" type=\"radio\" value=\"allproducts\" name=\"productradio\" />\n            <span>{{ ts.translate(\"allproducts\") | titlecase }}</span>\n          </label>\n\n          <label>\n            <input id=\"maalai\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"maalai\" name=\"productradio\" />\n            <span>{{ ts.translate(\"maalai\") | titlecase }}</span>\n          </label>\n          <label>\n            <input id=\"bangles\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"bangles\" name=\"productradio\" />\n            <span>{{ ts.translate(\"bangles\") | titlecase }}</span>\n          </label>\n\n          <label>\n            <input id=\"necklace\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"necklace\" name=\"productradio\" />\n            <span>{{ ts.translate(\"necklace\") | titlecase }}</span>\n          </label>\n          <label>\n            <input id=\"chains\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"chains\"  name=\"productradio\" />\n            <span>{{ ts.translate(\"chains\") | titlecase }}</span>\n          </label>\n\n          <label>\n            <input id=\"earrings\" type=\"radio\" (change)=\"handleChange($event.target.value)\"  value=\"earrings\" name=\"productradio\" />\n            <span>{{ ts.translate(\"earrings\") | titlecase }}</span>\n          </label>\n          <label>\n            <input id=\"rings\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"rings\"  name=\"productradio\" />\n            <span>{{ ts.translate(\"rings\") | titlecase }}</span>\n          </label>\n\n          <label>\n            <input id=\"bracelet\" type=\"radio\" (change)=\"handleChange($event.target.value)\" value=\"bracelet\"  name=\"productradio\" />\n            <span>{{ ts.translate(\"bracelet\") | titlecase }}</span>\n          </label>\n        </div>\n      \n      </div>\n\n      <div id=\"dropdown\" class=\"dropdown\">\n        <div class=\"staticfield\">\n          <label id=\"findtext\"> {{ ts.translate(\"findyourjewels\") | uppercase }}</label>\n        <mat-form-field appearance=\"outline\">\n      \n        <mat-select class=\"dropdownselect\" [(ngModel)]=\"selectedoption\" (selectionChange)=\"handleChange($event.value)\" name=\"jwelltype\">\n          <mat-option class=\"droptext\" *ngFor=\"let item of types\" [value]=\"item.key\">\n            {{item.value | titlecase }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n      </div>\n\n      <div  id=\"productsLists\" class=\"col-lg-9 productsLists\">\n          <div *ngIf=\"showspinner\" class=\"col-12 col-lg-12 col-md-12 col-sm-12 center\">  <mat-spinner></mat-spinner></div>\n        <div class=\"ImgList col-lg-4 col-md-4 col-sm-6 col-6\" *ngFor=\"let item of tempdata\">\n          <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\n          <a class=\"zoombut\" (click)=\"openDialog(item)\">Click to zoom</a>\n            <!-- <button mat-button (click)=\"openDialog(item)\">Click to Zoom</button> -->\n            <div class=\"procode\">{{item.code}}</div>\n           <div class=\"proname\"> {{ item.name }}</div>\n            <div class=\"imgwrapper\"><img\n              class=\"productimg\"\n              src=\"{{ item.imgsrc }}\"\n            \n            /></div>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n    \n    <app-talktous [talktouscontent]=\"talktouscontent\"></app-talktous>\n  </div>\n  <div class=\"linkstab\">\n    <a (click)=\"goToPage('home')\"><img class=\"homeimg pointer\" src=\"../../../assets/images/homeicon.svg\"></a>\n    <span class=\"padl15\"> <img class=\"downarrow \" src=\"../../../assets/images/downarrow.png\"/> <span class=\"padl15 pointer\"> <a (click)=\"goToProducts('allproducts','allmetals')\"  >{{ts.translate('products')}} </a></span> </span> \n    <span class=\"padl15\" *ngIf=\"selectedMetal!=='allmetals'\"> <img class=\"downarrow \" src=\"../../../assets/images/downarrow.png\"/> <span class=\"padl15 pointer\"> {{ts.translate(selectedMetal) |  titlecase }} </span> </span> \n\n  </div>\n  <app-footer></app-footer>\n  </div>\n \n</div>\n\n  \n \n"

/***/ }),

/***/ "./src/app/components/products/products.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productwrapper {\n  position: relative; }\n\n.productbody {\n  padding: 7em 0 0em 0;\n  position: relative; }\n\n.productheroimgdiv {\n  width: 100%;\n  height: 420px;\n  position: relative; }\n\n.productheroimg {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.filterList {\n  padding: 1em;\n  font-family: opEB;\n  color: black; }\n\n.productfooter {\n  position: absolute;\n  bottom: 0; }\n\n.cent {\n  text-align: center;\n  display: block; }\n\n.btnGroup {\n  display: inline-block;\n  font-size: 20px;\n  background-color: #fff;\n  text-align: left;\n  padding: 0 0 0 5em; }\n\n.dropdown {\n  display: none; }\n\n.fixeddiv {\n  position: fixed;\n  z-index: 99;\n  margin-top: -520px; }\n\n.fixeddiv + .btnGroup {\n  padding-top: 3em; }\n\n.static {\n  position: fixed;\n  z-index: 99;\n  top: 55px;\n  padding-right: 2em !important; }\n\n.static + .staticfield {\n  padding-top: 3em; }\n\n.imgwrapper {\n  height: 250px;\n  width: 250px; }\n\n.findjewels {\n  color: #333333;\n  background-color: #fff;\n  text-align: center;\n  font-size: 24px;\n  padding-left: 3em;\n  font-family: opEB;\n  margin-top: 2em;\n  padding-bottom: 20px; }\n\n.selectedJewell {\n  color: #CC9F08;\n  background-color: #fff;\n  text-align: left;\n  font-size: 24px;\n  width: 100%;\n  padding: 0 0 40px;\n  padding-left: 4.2em;\n  font-family: opEB; }\n\n.ImgList {\n  display: inline-flex; }\n\n.indiImg {\n  margin: 0em 73px 80px 0;\n  display: flex;\n  flex-flow: column-reverse; }\n\n.productimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%; }\n\n:checked + span {\n  color: #CC9F08;\n  transition: 0.3s ease-in-out; }\n\ninput[type=\"radio\"] {\n  display: none; }\n\n/* Optional other stuff just to make it look better */\n\nlabel {\n  display: inline-block;\n  width: 200px;\n  padding: 5px;\n  cursor: pointer;\n  transition: 0.2s ease-in-out; }\n\nspan {\n  transition: 0.3s ease-in-out; }\n\nlabel > span:hover {\n  color: #CC9F08; }\n\n.productsLists {\n  padding-top: 20em; }\n\n.proname {\n  color: #444;\n  font-size: 20px;\n  font-family: 'opR';\n  padding-top: 20px; }\n\n.procode {\n  color: #888888;\n  font-family: 'opR';\n  font-size: 14px; }\n\n.zoombut {\n  text-decoration: underline;\n  cursor: pointer;\n  color: #666666;\n  font-size: 12px;\n  font-family: 'opB';\n  padding-top: 16px; }\n\n#findtext {\n  display: none; }\n\n.w100 {\n  width: 100%; }\n\n.linkstab {\n  display: inline-flex;\n  color: #fff;\n  background-color: #171717;\n  font-size: 14px;\n  font-family: 'opR';\n  width: 100%;\n  padding: 11px 65px; }\n\n.downarrow {\n  height: 12px;\n  transform: rotate(-90deg); }\n\n.padl15 {\n  padding-left: 15px; }\n\n.homeimg {\n  height: 22px;\n  width: 22px; }\n\n.pointer {\n  cursor: pointer; }\n\n.center {\n  display: flex;\n  justify-content: center; }\n\n::ng-deep .mat-progress-spinner circle, ::ng-deep .mat-spinner circle {\n  stroke: #CC9F08; }\n\n@media screen and (max-width: 600px) {\n  .cent {\n    display: none; }\n  #findtext {\n    display: block;\n    transition: 0.5s all ease-in-out; }\n  label {\n    display: inline-block;\n    width: auto;\n    padding: 1em;\n    white-space: nowrap;\n    font-size: 12px;\n    cursor: pointer;\n    transition: 0.2s ease-in-out; }\n  .btnGroup {\n    display: inline-flex;\n    font-size: 20px;\n    background-color: #fff;\n    text-align: left;\n    flex-wrap: nowrap;\n    width: 100%;\n    overflow: auto;\n    padding: 1em 0 0 0; }\n  .findjewels, .selectedJewell {\n    display: none; }\n  .productsLists {\n    padding: 8em 2em;\n    text-align: center; }\n  .indiImg {\n    margin: 5em 1em;\n    display: flex;\n    width: 100%;\n    height: 150px;\n    flex-flow: column-reverse; }\n  .productimg {\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  .zoombut {\n    font-size: 10px;\n    padding-top: 4px; }\n  .procode {\n    font-size: 10px; }\n  .proname {\n    font-size: 14px; }\n  .fixeddiv {\n    padding-top: 0;\n    position: -webkit-sticky;\n    position: sticky; }\n  .imgwrapper {\n    width: 100%;\n    height: 100%; }\n  .w100 {\n    width: auto; }\n  .dropdown {\n    display: block;\n    width: 100%;\n    background-color: #fff;\n    z-index: 1;\n    text-align: center;\n    padding: 3em 5em 0 5em; }\n  mat-form-field {\n    width: 100%;\n    font-size: 18px; }\n  ::ng-deep .mat-form-field-appearance-outline ::ng-deep .mat-form-field-outline {\n    border: 2px solid #A57F00;\n    border-radius: 5px;\n    outline: 0; }\n  ::ng-deep .mat-form-field-appearance-outline:focus ::ng-deep .mat-form-field-appearance-outline:active ::ng-deep .mat-form-field-appearance-outline:visited .mat-form-field-appearance-outline:hover\n::ng-deep .mat-form-field-outline:focus ::ng-deep .mat-form-field-outline:active ::ng-deep .mat-form-field-outline:visited .mat-form-field-outline:hover {\n    outline: 0;\n    border: 2px solid #A57F00;\n    border-radius: 5px; }\n  .dropdownselect .dropdownselect:focus {\n    outline: 0;\n    border: 2px solid #A57F00;\n    border-radius: 5px; }\n  .droptext {\n    color: #A57F00; }\n  .extrapadtop {\n    padding-top: 24em; }\n  .linkstab {\n    padding: 11px 40px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9DOlxcRGF0YVxcZ293dGhhbVxcU0JKXFxzYmouZ2l0aHViLmlvXFxzYmovc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2R1Y3RzXFxwcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGtCQUFrQixFQUFBOztBQUV0QjtFQUVJLG9CQUFvQjtFQUNwQixrQkFBaUIsRUFBQTs7QUFFckI7RUFFSSxXQUFXO0VBQ1gsYUFBYTtFQUNqQixrQkFBa0IsRUFBQTs7QUFHbEI7RUFFSSxZQUFXO0VBQ1gsV0FBVTtFQUNWLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTs7QUFFckI7RUFFSSxZQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVcsRUFBQTs7QUFFZjtFQUVJLGtCQUFrQjtFQUNsQixTQUFRLEVBQUE7O0FBR1o7RUFFSSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFJckI7RUFDSSxhQUFZLEVBQUE7O0FBR2pCO0VBRUksZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFFRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVM7RUFDVCw2QkFBNkIsRUFBQTs7QUFHL0I7RUFFTSxnQkFBZ0IsRUFBQTs7QUFFdEI7RUFFSSxhQUFZO0VBQ1osWUFBVyxFQUFBOztBQUVoQjtFQUVHLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWM7RUFDZCxvQkFBb0IsRUFBQTs7QUFHdkI7RUFFRyxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBSXBCO0VBRUksb0JBQW9CLEVBQUE7O0FBR3hCO0VBRUcsdUJBQXVCO0VBQ3RCLGFBQWE7RUFFYix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDRyxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLFlBQVcsRUFBQTs7QUFHZDtFQUVHLGNBQWM7RUFDZCw0QkFBNEIsRUFBQTs7QUFHaEM7RUFFQyxhQUFZLEVBQUE7O0FBRWIscURBQUE7O0FBQ0E7RUFDRyxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFjO0VBQ2QsNEJBQTRCLEVBQUE7O0FBRS9CO0VBQ0ksNEJBQTRCLEVBQUE7O0FBRWhDO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUVJLGlCQUFnQixFQUFBOztBQUVwQjtFQUVJLFdBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUVyQjtFQUVJLGNBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBYyxFQUFBOztBQUVsQjtFQUVJLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsY0FBYTtFQUNiLGVBQWU7RUFDZixrQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBRUksYUFBWSxFQUFBOztBQUVoQjtFQUVJLFdBQVUsRUFBQTs7QUFFZDtFQUVJLG9CQUFvQjtFQUNwQixXQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLGtCQUFpQixFQUFBOztBQUVyQjtFQUVJLFlBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFFN0I7RUFFSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFFSSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUlmO0VBRUksZUFBYyxFQUFBOztBQUVsQjtFQUNJLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0k7SUFDSSxhQUFZLEVBQUE7RUFFaEI7SUFFSixjQUFhO0lBQ1QsZ0NBQStCLEVBQUE7RUFFL0I7SUFFSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZiw0QkFBNEIsRUFBQTtFQUVoQztJQUVJLG9CQUFvQjtJQUN4QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7SUFFZCxrQkFBa0IsRUFBQTtFQUVsQjtJQUVJLGFBQVksRUFBQTtFQUVoQjtJQUVJLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtFQUd0QjtJQUVJLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUIsRUFBQTtFQUc3QjtJQUVJLFlBQVk7SUFDWixvQkFDSjtPQURJLGlCQUNKLEVBQUE7RUFDQTtJQUVJLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTtFQUVwQjtJQUVJLGVBQWUsRUFBQTtFQUVuQjtJQUVJLGVBQWUsRUFBQTtFQUVuQjtJQUVJLGNBQWE7SUFDYix3QkFBZ0I7SUFBaEIsZ0JBQWdCLEVBQUE7RUFFcEI7SUFFSSxXQUFVO0lBQ1YsWUFBVyxFQUFBO0VBRWhCO0lBRUksV0FBVSxFQUFBO0VBSWQ7SUFFQyxjQUFjO0lBQ2QsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixVQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHNCQUFzQixFQUFBO0VBR3ZCO0lBQ0MsV0FBVztJQUNYLGVBQWUsRUFBQTtFQUdoQjtJQUNDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsVUFBUyxFQUFBO0VBR1Q7O0lBRUksVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTtFQUV0QjtJQUVJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsa0JBQWtCLEVBQUE7RUFFdEI7SUFFSSxjQUFhLEVBQUE7RUFHakI7SUFFSSxpQkFBZ0IsRUFBQTtFQUdwQjtJQUVJLGtCQUFrQixFQUFBLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnByb2R1Y3R3cmFwcGVyXHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucHJvZHVjdGJvZHlcclxue1xyXG4gICAgcGFkZGluZzogN2VtIDAgMGVtIDA7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4ucHJvZHVjdGhlcm9pbWdkaXZcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQyMHB4O1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9kdWN0aGVyb2ltZ1xyXG57XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uZmlsdGVyTGlzdFxyXG57XHJcbiAgICBwYWRkaW5nOjFlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBvcEVCO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuLnByb2R1Y3Rmb290ZXJcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOjA7XHJcbn1cclxuLy9idXR0b24gZ3JvdXBcclxuLmNlbnRcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmJ0bkdyb3Vwe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCA1ZW07XHJcbiAgIFxyXG4gfVxyXG4gXHJcbiAuZHJvcGRvd257XHJcbiAgICAgZGlzcGxheTpub25lO1xyXG4gfVxyXG5cclxuLmZpeGVkZGl2XHJcbntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgbWFyZ2luLXRvcDogLTUyMHB4O1xyXG59XHJcbi5maXhlZGRpdiArIC5idG5Hcm91cCB7XHJcbiAgICBwYWRkaW5nLXRvcDogM2VtO1xyXG4gIH1cclxuXHJcbiAgLnN0YXRpY1xyXG4gIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc3RhdGljICsgLnN0YXRpY2ZpZWxkXHJcbiAge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzZW07XHJcbiAgfVxyXG4gIC5pbWd3cmFwcGVyXHJcbiAge1xyXG4gICAgICBoZWlnaHQ6MjUwcHg7XHJcbiAgICAgIHdpZHRoOjI1MHB4O1xyXG4gIH1cclxuIC5maW5kamV3ZWxzXHJcbiB7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBvcEVCO1xyXG4gICAgbWFyZ2luLXRvcDoyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuIH1cclxuXHJcbiAuc2VsZWN0ZWRKZXdlbGxcclxuIHtcclxuICAgIGNvbG9yOiAjQ0M5RjA4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMCA0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0LjJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBvcEVCO1xyXG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG4gfVxyXG5cclxuIC5JbWdMaXN0XHJcbiB7XHJcbiAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiB9XHJcblxyXG4gLmluZGlJbWdcclxuIHtcclxuICAgIG1hcmdpbjogMGVtIDczcHggODBweCAwO1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBcclxuICAgICBmbGV4LWZsb3c6IGNvbHVtbi1yZXZlcnNlO1xyXG4gfVxyXG5cclxuIC5wcm9kdWN0aW1ne1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuIH1cclxuXHJcbiA6Y2hlY2tlZCArIHNwYW4ge1xyXG4gICBcclxuICAgIGNvbG9yOiAjQ0M5RjA4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdXHJcbntcclxuIGRpc3BsYXk6bm9uZTtcclxufVxyXG4vKiBPcHRpb25hbCBvdGhlciBzdHVmZiBqdXN0IHRvIG1ha2UgaXQgbG9vayBiZXR0ZXIgKi9cclxubGFiZWwge1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIHdpZHRoOiAyMDBweDtcclxuICAgcGFkZGluZzogNXB4O1xyXG4gICBjdXJzb3I6cG9pbnRlcjtcclxuICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5zcGFue1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5sYWJlbCA+IHNwYW46aG92ZXJ7XHJcbiAgICBjb2xvcjogI0NDOUYwODtcclxufVxyXG4ucHJvZHVjdHNMaXN0c1xyXG57XHJcbiAgICBwYWRkaW5nLXRvcDoyMGVtO1xyXG59XHJcbi5wcm9uYW1lXHJcbntcclxuICAgIGNvbG9yOiM0NDQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ29wUic7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4ucHJvY29kZVxyXG57XHJcbiAgICBjb2xvcjojODg4ODg4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcFInO1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbn1cclxuLnpvb21idXRcclxue1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjojNjY2NjY2O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6J29wQic7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG4jZmluZHRleHRcclxue1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcbi53MTAwXHJcbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuLmxpbmtzdGFiXHJcbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ29wUic7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZzoxMXB4IDY1cHg7XHJcbn1cclxuLmRvd25hcnJvd1xyXG57XHJcbiAgICBoZWlnaHQ6MTJweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbn1cclxuLnBhZGwxNVxyXG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmhvbWVpbWdcclxue1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBcclxufVxyXG5cclxuLnBvaW50ZXJcclxue1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuLmNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsIDo6bmctZGVlcCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcclxuICAgIHN0cm9rZTogI0NDOUYwODtcclxuICAgIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY2VudHtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgICAjZmluZHRleHRcclxuICAgIHtcclxuZGlzcGxheTpibG9jazsgIFxyXG4gICAgdHJhbnNpdGlvbjowLjVzIGFsbCBlYXNlLWluLW91dDsgIFxyXG4gICAgfVxyXG4gICAgbGFiZWxcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgLmJ0bkdyb3VwXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgXHJcbiAgICBwYWRkaW5nOiAxZW0gMCAwIDA7XHJcbiAgICB9XHJcbiAgICAuZmluZGpld2VscyAsIC5zZWxlY3RlZEpld2VsbFxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0c0xpc3RzXHJcbiAgICB7XHJcbiAgICAgICAgcGFkZGluZzogOGVtIDJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZGlJbWdcclxuICAgIHtcclxuICAgICAgICBtYXJnaW46IDVlbSAxZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3RpbWdcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXJcclxuICAgIH1cclxuICAgIC56b29tYnV0XHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICB9XHJcbiAgICAucHJvY29kZVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICAgIC5wcm9uYW1lXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmZpeGVkZGl2XHJcbiAgICB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MDtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgfVxyXG4gICAgLmltZ3dyYXBwZXJcclxuICAgIHtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgfVxyXG4gICAudzEwMFxyXG4gICB7XHJcbiAgICAgICB3aWR0aDphdXRvO1xyXG4gICB9XHJcblxyXG4gIFxyXG4gICAuZHJvcGRvd25cclxuICAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzZW0gNWVtIDAgNWVtO1xyXG4gICB9XHJcblxyXG4gICBtYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICB9XHJcbiAgXHJcbiAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0E1N0YwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG91dGxpbmU6MDtcclxuXHJcbiAgICB9XHJcbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZTpmb2N1cyA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZTphY3RpdmUgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmU6dmlzaXRlZCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lOmhvdmVyXHJcbiAgICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lOmZvY3VzIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZTphY3RpdmUgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lOnZpc2l0ZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmU6aG92ZXJ7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjQTU3RjAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIC5kcm9wZG93bnNlbGVjdCAuZHJvcGRvd25zZWxlY3Q6Zm9jdXNcclxuICAgIHtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNBNTdGMDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgLmRyb3B0ZXh0XHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6I0E1N0YwMDtcclxuICAgIH1cclxuXHJcbiAgICAuZXh0cmFwYWR0b3BcclxuICAgIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDoyNGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5rc3RhYlxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmc6IDExcHggNDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(ts, sh, route, router, http, dialog) {
        this.ts = ts;
        this.sh = sh;
        this.route = route;
        this.router = router;
        this.http = http;
        this.dialog = dialog;
        this.talktouscontent = "";
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        this.metals = ['Gold', 'Silver', 'Diamond'];
        this.types = [
            {
                key: 'allproducts',
                value: 'all products'
            },
            {
                key: 'maalai',
                value: 'maalai'
            }, {
                key: 'bangles',
                value: 'bangles'
            }, {
                key: 'necklace',
                value: 'necklace'
            }, {
                key: 'chains',
                value: 'chains'
            }, {
                key: 'earrings',
                value: 'earrings'
            }, {
                key: 'rings',
                value: 'rings'
            }, {
                key: 'bracelet',
                value: 'bracelet'
            },
        ];
        this.showspinner = true;
        this.options = {
            headers: this.httpHeaders
        };
        this.jsondata = [];
        this.value = 'allproducts';
        this.selectedoption = 'allproducts';
        this.tempdata = [];
    }
    ProductsComponent.prototype.openDialog = function (item) {
        console.log(item.imgsrc);
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                url: item.imgsrc,
                name: item.name,
                code: item.code
            },
            height: 'auto',
            width: '95vh'
        });
    };
    ProductsComponent.prototype.aosInit = function () {
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        aos__WEBPACK_IMPORTED_MODULE_7__["init"]({
            duration: 1200
        });
    };
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showspinner = true;
        this.selectedValue = "allproducts";
        this.selectedoption = "allproducts";
        this.selectedMetal = this.route.snapshot.paramMap.get('metal');
        if (!this.selectedMetal) {
            this.selectedMetal = "allmetals";
        }
        if (this.selectedMetal.toLowerCase() == 'gold') {
            this.talktouscontent = this.ts.translate('talktousgold');
        }
        else if (this.selectedMetal.toLowerCase() == 'silver') {
            this.talktouscontent = this.ts.translate('talktoussilver');
        }
        else if (this.selectedMetal.toLowerCase() == 'diamond') {
            this.talktouscontent = this.ts.translate('talktousdiamond');
        }
        else {
            this.talktouscontent = this.ts.translate('talktousproduct');
        }
        //this.selectedMetal="allmetals"
        if (this.sh.getValue()) {
            this.value = this.sh.getValue();
            this.selectedoption = this.value;
            this.selectedValue = this.value;
        }
        // this.value="allproducts"
        this.getAllProducts().subscribe(function (data) {
            _this.showspinner = false;
            _this.jsondata = data;
            _this.tempdata = _this.jsondata;
            console.log(_this.tempdata);
            if (_this.selectedMetal != "allmetals") {
                _this.jsondata = _this.jsondata.filter(function (data) {
                    return data.metal.toLowerCase() == _this.selectedMetal.toLowerCase();
                });
            }
            if (_this.value != 'allproducts') {
                _this.tempdata = _this.jsondata.filter(function (data) {
                    return data.category.toLowerCase() == _this.value;
                });
            }
            else {
                _this.tempdata = _this.jsondata;
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_6__(document).scroll(function () {
            var y = jquery__WEBPACK_IMPORTED_MODULE_6__(document).scrollTop(), //get page y value 
            header = jquery__WEBPACK_IMPORTED_MODULE_6__("#selectedJewell");
            if (y >= 450) {
                header.css({ position: "fixed", "left": "0", "top": "3em", "width": "100%", "background-color": "#fff", "z-index": "2", "padding-top": "2em" });
            }
            else {
                header.css({ "position": "relative", "top": "0em", "background-color": "transparent", "z-index": "2", "width": "auto", "padding-top": "0em" });
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_6__(document).scroll(function () {
            var y = jquery__WEBPACK_IMPORTED_MODULE_6__(document).scrollTop(), //get page y value 
            header = jquery__WEBPACK_IMPORTED_MODULE_6__("#dropdown");
            if (y >= 420) {
                header.css({ position: "fixed", "left": "0", "top": "3em", "width": "100%", "background-color": "#fff", "z-index": "1", "padding": "6em 5em 0em 5em" });
                jquery__WEBPACK_IMPORTED_MODULE_6__('#findtext').css({ 'display': 'none' });
                if (header.css('display') == 'block') {
                    jquery__WEBPACK_IMPORTED_MODULE_6__("#productsLists").css({ "padding-top": "22em" });
                }
            }
            else {
                header.css({ "position": "relative", "top": "0em", "background-color": "transparent", "z-index": "2", "width": "100%", "padding": "3em 5em 0 5em" });
                jquery__WEBPACK_IMPORTED_MODULE_6__('#findtext').css({ 'display': 'block' });
                if (header.css('display') == 'block') {
                    jquery__WEBPACK_IMPORTED_MODULE_6__("#productsLists").css({ "padding-top": "8em" });
                }
            }
        });
        this.aosInit();
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
        document.getElementById(event).checked = true;
        this.aosInit();
        window.scrollTo(0, 0);
        this.value = event;
        this.selectedoption = this.value;
        this.selectedValue = event;
        if (this.value != 'allproducts') {
            this.tempdata = this.jsondata.filter(function (data) {
                return data.category.toLowerCase() == _this.value;
            });
            console.log(this.jsondata);
            console.log(this.tempdata);
        }
        else {
            this.tempdata = this.jsondata;
        }
    };
    ProductsComponent.prototype.goToProducts = function (types, metals) {
        this.sh.setValue(types);
        this.router.navigate(['products', metals]);
    };
    ProductsComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/components/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
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

/***/ "./src/app/components/talktous/talktous.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/talktous/talktous.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"talktous\" data-aos=\"fade-up\" data-aos-once=\"true\">\n    <div class=\"col-lg-9 col-md-9 col-sm-12 col-12\">\n      <div class=\"talktouspara\">\n       {{talktouscontent}}\n      </div>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-12 col-12\">\n      <button (click)=\"goToPage('contactus')\" class=\"talktousButton\">\n        {{ts.translate('talktous')}}\n      </button>\n        \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/talktous/talktous.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/talktous/talktous.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".talktous {\n  background-color: #F6F7F7;\n  color: #666666;\n  height: 146px;\n  margin: auto;\n  padding: 2em 1em;\n  font-size: 20px; }\n\n.talktousButton {\n  background-color: #CC9F08;\n  color: #fff;\n  border-radius: 5px;\n  margin: 1em;\n  float: right;\n  border: 0;\n  padding: 4px 16px; }\n\n@media screen and (max-width: 600px) {\n  .talktous {\n    font-size: 12px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YWxrdG91cy9DOlxcRGF0YVxcZ293dGhhbVxcU0JKXFxzYmouZ2l0aHViLmlvXFxzYmovc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRhbGt0b3VzXFx0YWxrdG91cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUdqQjtFQUVFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULGlCQUFpQixFQUFBOztBQUdyQjtFQUNDO0lBRUMsZUFBZSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YWxrdG91cy90YWxrdG91cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWxrdG91c1xyXG4gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY3Rjc7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIGhlaWdodDogMTQ2cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyZW0gMWVtO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBcclxuICB9XHJcbiAgLnRhbGt0b3VzQnV0dG9uXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDOUYwODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuIC50YWxrdG91c1xyXG57XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/talktous/talktous.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/talktous/talktous.component.ts ***!
  \***********************************************************/
/*! exports provided: TalktousComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalktousComponent", function() { return TalktousComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var TalktousComponent = /** @class */ (function () {
    function TalktousComponent(ts, sh, route, router) {
        this.ts = ts;
        this.sh = sh;
        this.route = route;
        this.router = router;
    }
    TalktousComponent.prototype.ngOnInit = function () {
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
        this.aosInit();
        console.log(this.talktouscontent);
    };
    TalktousComponent.prototype.aosInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_2__["init"]({
            duration: 1200
        });
    };
    TalktousComponent.prototype.goToPage = function (route) {
        this.router.navigate([route]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('talktouscontent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TalktousComponent.prototype, "talktouscontent", void 0);
    TalktousComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-talktous',
            template: __webpack_require__(/*! ./talktous.component.html */ "./src/app/components/talktous/talktous.component.html"),
            styles: [__webpack_require__(/*! ./talktous.component.scss */ "./src/app/components/talktous/talktous.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], TalktousComponent);
    return TalktousComponent;
}());



/***/ }),

/***/ "./src/app/components/todaysrate/todaysrate.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/todaysrate/todaysrate.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todaysrate\">\n    \n  <div class=\"circle\">{{ts.translate('todaysrate')}}\n      <div class=\"goldrate\">\n          <div class=\"goldratehead\">\n              {{ts.translate('todaysrate')}}\n          </div>\n          <div class=\"goldbody\">\n           <div> <span class=\"bold\">Gold 1gm</span> - RS 4800</div>\n           <div> <span class=\"bold\">Silver 1gm</span> - RS 80</div>\n          </div>\n        </div>\n  </div>\n  <div class=\"bar\"></div>\n  \n\n</div>"

/***/ }),

/***/ "./src/app/components/todaysrate/todaysrate.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/todaysrate/todaysrate.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todaysrate {\n  position: fixed;\n  display: inline-flex;\n  top: 70%;\n  right: 0;\n  text-align: right;\n  z-index: 5;\n  cursor: pointer; }\n\n.bar {\n  height: 3px;\n  width: 3em;\n  margin-top: 3em;\n  background-color: #A57F00; }\n\n.circle {\n  height: 60px;\n  width: 60px;\n  padding-top: 14px;\n  font-size: 12px;\n  display: flex;\n  flex: 1;\n  margin: auto 0;\n  padding-left: -10px;\n  text-align: center;\n  overflow-wrap: break-word;\n  white-space: break-spaces;\n  border-radius: 50%;\n  background-color: #A57F00;\n  color: #fff; }\n\n.circle:hover .goldrate {\n  opacity: 1;\n  transform: scale(1);\n  color: black; }\n\n.goldrate {\n  width: 15em;\n  font-size: 12px;\n  position: absolute;\n  top: -8em;\n  right: 2em;\n  text-align: left;\n  box-shadow: 0 0 10px 1px grey;\n  background-color: #fff;\n  border-radius: 5px;\n  opacity: 0;\n  transform: scale(1.2);\n  transition: 0.3s all ease-in-out; }\n\n.goldratehead {\n  background-color: #A57F00;\n  color: #fff;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  padding: 8px; }\n\n.goldbody {\n  padding: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RheXNyYXRlL0M6XFxEYXRhXFxnb3d0aGFtXFxTQkpcXHNiai5naXRodWIuaW9cXHNiai9zcmNcXGFwcFxcY29tcG9uZW50c1xcdG9kYXlzcmF0ZVxcdG9kYXlzcmF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsUUFBUTtFQUNSLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFakI7RUFFRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZix5QkFBeUIsRUFBQTs7QUFFM0I7RUFFRSxZQUFZO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLE9BQU87RUFDUCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUVmO0VBR0ksVUFBUztFQUNULG1CQUFtQjtFQUNuQixZQUFXLEVBQUE7O0FBR2Y7RUFFRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3hCLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGdDQUFnQyxFQUFBOztBQUVoQztFQUVFLHlCQUF5QjtFQUN6QixXQUFXO0VBRVgsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixZQUFZLEVBQUE7O0FBR2Q7RUFFSSxZQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvZGF5c3JhdGUvdG9kYXlzcmF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RheXNyYXRlXHJcbntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgdG9wOiA3MCU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgei1pbmRleDogNTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJhclxyXG57XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgd2lkdGg6IDNlbTtcclxuICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E1N0YwMDtcclxufVxyXG4uY2lyY2xlXHJcbntcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgIHBhZGRpbmctbGVmdDogLTEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBNTdGMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uY2lyY2xlOmhvdmVyIHtcclxuIC5nb2xkcmF0ZXtcclxuXHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiB9XHJcbn1cclxuLmdvbGRyYXRlXHJcbntcclxuICB3aWR0aDogMTVlbTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLThlbTtcclxuICByaWdodDogMmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IGdyZXk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbm9wYWNpdHk6MDtcclxudHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG50cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG4uZ29sZHJhdGVoZWFkXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTU3RjAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcblxyXG59XHJcbi5nb2xkYm9keVxyXG57XHJcbiAgICBwYWRkaW5nOjhweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/todaysrate/todaysrate.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/todaysrate/todaysrate.component.ts ***!
  \***************************************************************/
/*! exports provided: TodaysrateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodaysrateComponent", function() { return TodaysrateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TodaysrateComponent = /** @class */ (function () {
    function TodaysrateComponent(ts, sh, router) {
        this.ts = ts;
        this.sh = sh;
        this.router = router;
    }
    TodaysrateComponent.prototype.ngOnInit = function () {
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
    };
    TodaysrateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todaysrate',
            template: __webpack_require__(/*! ./todaysrate.component.html */ "./src/app/components/todaysrate/todaysrate.component.html"),
            styles: [__webpack_require__(/*! ./todaysrate.component.scss */ "./src/app/components/todaysrate/todaysrate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TodaysrateComponent);
    return TodaysrateComponent;
}());



/***/ }),

/***/ "./src/app/components/topselling/topselling.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/topselling/topselling.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"demo1\" class=\"carousel slide\" data-interval=\"10000\" pause=\"true\" >\r\n\r\n \r\n  \r\n  <!-- The slideshow -->\r\n  <div class=\"carousel-inner no-padding\">\r\n    <div class=\"carousel-item active\">\r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>    \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>   \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>   \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>   \r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>    \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>   \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>   \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 2</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>    \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>   \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>   \r\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-6\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 2</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>\r\n  </div>\r\n  \r\n  <!-- Left and right controls -->\r\n  <!-- <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\"></span>\r\n  </a> -->\r\n  <a class=\"carousel-control-next\" href=\"#demo1\" data-slide=\"next\">\r\n      <div class=\"nextCaro\">\t<img class=\"right\" src=\"../../../assets/images/arrow.png\" /></div>\r\n    <!-- <span class=\"carousel-control-next-icon\"></span> -->\r\n  </a>\r\n</div>\r\n\r\n\r\n<!-- demo 2 -->\r\n\r\n\r\n\r\n<div id=\"demo2\" class=\"carousel slide\" data-interval=\"10000\" pause=\"true\" >\r\n\r\n \r\n  \r\n  <!-- The slideshow -->\r\n  <div class=\"carousel-inner no-padding\">\r\n    <div class=\"carousel-item active\">\r\n      <div class=\"col-sm-12 col-12\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>  \r\n\r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-sm-12 col-12\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>  \r\n\r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-sm-12 col-12\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>  \r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-sm-12 col-12\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>  \r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-sm-12 col-12\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>  \r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-sm-12 col-12\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>  \r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-sm-12 col-12\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>  \r\n    <div class=\"carousel-item\">\r\n      <div class=\"col-sm-12 col-12\">\r\n        <div class=\"indiImg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"procode\">123</div>\r\n         <div class=\"proname\"> Maalai Name 1</div>\r\n          <img\r\n            class=\"productimg\"\r\n            src=\"{{imgsrc[0]}}\"\r\n          \r\n          />\r\n        </div>\r\n      </div>  \r\n    </div>  \r\n\r\n    \r\n  </div>\r\n  \r\n  <!-- Left and right controls -->\r\n  <!-- <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\"></span>\r\n  </a> -->\r\n  <a class=\"carousel-control-next\" href=\"#demo2\" data-slide=\"next\">\r\n      <div class=\"nextCaro\">\t<img class=\"right\" src=\"../../../assets/images/arrow.png\" /></div>\r\n    <!-- <span class=\"carousel-control-next-icon\"></span> -->\r\n  </a>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/topselling/topselling.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/topselling/topselling.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel {\n  margin-top: 60px; }\n\n.carousel-control-next {\n  right: -10%; }\n\n.carousel-control-prev {\n  left: -10%; }\n\n.carousel-control-next-icon,\n.carousel-control-prev-icon {\n  background-color: black;\n  border-radius: 50%;\n  padding: 8px; }\n\n.flexitem {\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap; }\n\n.carousel-inner {\n  display: inline-flex; }\n\n.carousel-control-prev-icon {\n  background-image: url(); }\n\n.left {\n  transform: rotate(90deg); }\n\n.right {\n  transform: rotate(-90deg); }\n\n.indiImg {\n  margin: 4em 2em;\n  display: flex;\n  height: 250px;\n  width: 250px;\n  flex-flow: column-reverse; }\n\n.productsLists {\n  padding-top: 20em; }\n\n.productimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  margin-bottom: 20px; }\n\n.proname {\n  color: #444;\n  font-size: 20px;\n  font-weight: 700;\n  font-family: 'avenirR'; }\n\n.procode {\n  color: #888888;\n  font-family: 'avenirR';\n  font-size: 14px; }\n\n.zoombut {\n  text-decoration: underline;\n  cursor: pointer;\n  color: #666666;\n  font-size: 12px;\n  font-family: 'opB'; }\n\n.nextCaro {\n  padding: 1em;\n  border-radius: 50%;\n  box-shadow: 0 0 10px 1px #b6b6b6; }\n\n#demo1 {\n  display: block; }\n\n#demo2 {\n  display: none; }\n\n@media screen and (max-width: 600px) {\n  .indiImg {\n    margin: 3em 1em;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    flex-flow: column-reverse; }\n  .productimg {\n    height: 77%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  .zoombut {\n    font-size: 10px; }\n  .procode {\n    font-size: 16px; }\n  .proname {\n    font-size: 20px; }\n  #demo1 {\n    display: none; }\n  #demo2 {\n    display: block; }\n  .carousel-control-next {\n    right: 0% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3BzZWxsaW5nL0M6XFxEYXRhXFxnb3d0aGFtXFxTQkpcXHNiai5naXRodWIuaW9cXHNiai9zcmNcXGFwcFxcY29tcG9uZW50c1xcdG9wc2VsbGluZ1xcdG9wc2VsbGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFlLEVBQUE7O0FBRW5CO0VBQ0ksV0FBVyxFQUFBOztBQUViO0VBQ0UsVUFBVSxFQUFBOztBQUdaOztFQUVFLHVCQUF1QjtFQUN2QixrQkFBaUI7RUFDakIsWUFBVyxFQUFBOztBQUViO0VBRUUsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFFbkI7RUFFRSxvQkFBbUIsRUFBQTs7QUFFckI7RUFFRSx1QkFBdUIsRUFBQTs7QUFHekI7RUFFSSx3QkFBd0IsRUFBQTs7QUFFNUI7RUFFSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFFRyxlQUFjO0VBQ2QsYUFBYTtFQUNiLGFBQVk7RUFDWixZQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBRTdCO0VBRUcsaUJBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixZQUFXO0VBQ2YsbUJBQW1CLEVBQUE7O0FBRW5CO0VBRUksV0FBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBRUksY0FBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlLEVBQUE7O0FBRW5CO0VBRUksMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixjQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFpQixFQUFBOztBQUVyQjtFQUVJLFlBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0NBQWdDLEVBQUE7O0FBR3BDO0VBRUksY0FBYSxFQUFBOztBQUdqQjtFQUVJLGFBQVksRUFBQTs7QUFHZjtFQUNHO0lBRUksZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QixFQUFBO0VBRTdCO0lBRUksV0FBVztJQUNYLG9CQUNKO09BREksaUJBQ0osRUFBQTtFQUNBO0lBRUksZUFBZSxFQUFBO0VBRW5CO0lBRUksZUFBZSxFQUFBO0VBRW5CO0lBRUksZUFBZSxFQUFBO0VBRW5CO0lBRUksYUFBWSxFQUFBO0VBRWhCO0lBRUksY0FBYyxFQUFBO0VBRWxCO0lBQ0ksb0JBQW9CLEVBQUEsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvcHNlbGxpbmcvdG9wc2VsbGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOjYwcHg7XHJcbn1cclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgICByaWdodDogLTEwJTtcclxuICB9XHJcbiAgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XHJcbiAgICBsZWZ0OiAtMTAlO1xyXG4gIH1cclxuICBcclxuICAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24sXHJcbiAgLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICBwYWRkaW5nOjhweDtcclxuICB9XHJcbiAgLmZsZXhpdGVtXHJcbiAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1pbm5lclxyXG4gIHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiBcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoKTtcclxuICB9XHJcblxyXG4gIC5sZWZ0XHJcbiAge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZylcclxuICB9XHJcbiAgLnJpZ2h0XHJcbiAge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpXHJcbiAgfVxyXG5cclxuICAuaW5kaUltZ1xyXG4ge1xyXG4gICAgIG1hcmdpbjo0ZW0gMmVtO1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgaGVpZ2h0OjI1MHB4O1xyXG4gICAgIHdpZHRoOjI1MHB4O1xyXG4gICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XHJcbiB9XHJcbiAucHJvZHVjdHNMaXN0c1xyXG57XHJcbiAgICBwYWRkaW5nLXRvcDoyMGVtO1xyXG59XHJcblxyXG4ucHJvZHVjdGltZ3tcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbm1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiB9XHJcbi5wcm9uYW1lXHJcbntcclxuICAgIGNvbG9yOiM0NDQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdhdmVuaXJSJztcclxufVxyXG4ucHJvY29kZVxyXG57XHJcbiAgICBjb2xvcjojODg4ODg4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdhdmVuaXJSJztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uem9vbWJ1dFxyXG57XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiM2NjY2NjY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTonb3BCJztcclxufVxyXG4ubmV4dENhcm9cclxue1xyXG4gICAgcGFkZGluZzoxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggI2I2YjZiNjtcclxufVxyXG5cclxuI2RlbW8xXHJcbntcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuXHJcbiNkZW1vMlxyXG57XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcbiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmluZGlJbWdcclxuICAgIHtcclxuICAgICAgICBtYXJnaW46IDNlbSAxZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIH0gIFxyXG4gICAgLnByb2R1Y3RpbWdcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDc3JTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlclxyXG4gICAgfVxyXG4gICAgLnpvb21idXRcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucHJvY29kZVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5wcm9uYW1lXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgI2RlbW8xXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgI2RlbW8yXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICAgICAgICByaWdodDogMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuIH0iXX0= */"

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
/* harmony import */ var src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");







var TopsellingComponent = /** @class */ (function () {
    function TopsellingComponent(ts, sh, route, router, dialog) {
        this.ts = ts;
        this.sh = sh;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.imgsrc = ["../../../assets/images/chains/chain1.jpg"];
    }
    TopsellingComponent.prototype.ngOnInit = function () {
        this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
        aos__WEBPACK_IMPORTED_MODULE_5__["init"]({
            duration: 1200
        });
    };
    TopsellingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topselling',
            template: __webpack_require__(/*! ./topselling.component.html */ "./src/app/components/topselling/topselling.component.html"),
            styles: [__webpack_require__(/*! ./topselling.component.scss */ "./src/app/components/topselling/topselling.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");


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
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
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
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"]
            ],
            exports: [
                // CommonModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
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
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"]
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
        if (window.sessionStorage.getItem('lang') === 'LA-EN') {
            return src_app_vocabulary_vocabulary_en__WEBPACK_IMPORTED_MODULE_3__["VOCAB_EN"][key];
        }
        else if (window.sessionStorage.getItem('lang') === 'LA-TA') {
            return src_app_vocabulary_vocabulary_ta__WEBPACK_IMPORTED_MODULE_2__["VOCAB_TA"][key];
        }
        else {
            window.sessionStorage.setItem('lang', 'LA-EN');
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
    bracelet: 'bracelet',
    //have to translate
    goldsavingscheme: 'gold saving scheme',
    goldschemedata: 'Investing in gold has never been easier, SBJ Gold scheme is a special scheme that helps you to plan and buy your own dream jewellery as well as maintaining your healthy financial stability. We have two options specially designed to suit your individual levels of saving at your own pace. You will also be rewarded with a special prize when you subscribe to one of our gold schemes.',
    flexischemeHead: 'FLEXIBLE MONEY SCHEME',
    flexip1: 'Under this scheme, You will be able to invest money, which will be credited as cash in your account and the premium by the end of 11th month, will be provided to you with a month bonus.',
    flexip2: 'The current gold cost on the day of purchase will be taken into account when we buy gold with this gold scheme. The gold you purchase will be subject to gold making and wastage charge*.',
    flexip3: 'Note: Under this scheme, you won\'t be able to withdraw the premium as cash, the money which is available in your account only be used to buy gold based on that particular day gold rate',
    downloadhere: 'Download Brochure',
    happyGoldHead: 'HAPPY GOLD SCHEME',
    happyGold1: 'With this scheme, Your money will be invested at the current gold rate and will be accumlated as gold weight rather than cash in your account. ',
    happyGold2: 'By the end of the 11th month, you will be able to buy gold corresponding to the accumulated weight without any making and wastage charges*.',
    happyGold3: '*- Taxes Apply at 3% ',
    termshead: 'Terms and Conditions',
    termsbody1: 'The premium due amount can be paid on any day of the month.',
    termsbody2: 'The savings tenure is 11 months only.',
    termsbody3: 'The premium amount can also be paid through NEFT ( Bank account details are given below )',
    termsbody4: 'while depositing the premium amount though NEFT , do not forget to mention the customer identification number as well as the name of the customer with whom the gold scheme is registered.',
    termsbody5: 'After depositing the amount through bank , kinldy call our customer call number and inform them regarding the transfer.',
    termsbody6: 'The gold scheme once registered is not transferable and the entire gold scheme package cannot be transfered to the other person.',
    termsbody7: 'The gold scheme cannot be closed before the tenure. kinldy bring the gold scheme card while depositing the premium amount directly through cash.',
    termsbody8: 'The premium due amount can be paid on any day of the month. kindly bring the customer registration card when buying the gold corresponding to the premium amount After the tenure completes.',
    termsbody9: 'All the " Happy Gold " customers will be able to buy the gold coressponding to the premium amount with any gold making and wastage charge.',
    termsbody10: 'Taxes Application ( Current GST 3 % ).',
    termsbody11: ' The store has the full privilege to modify / change the above terms and conditions.',
    locations: 'locations',
    storename1: 'Sri Balagopalan Jewellery Mart',
    goldstore: 'Gold Store',
    address: 'Address',
    addressbody1: 'No.2, Jansi Rani Comple , YMCA Building Opposite, Madurai – 625 001.',
    buisnesshours: 'Buisness Hours',
    buisnesshoursbody1: 'Every Day 9AM - 9PM',
    phonenumber: 'Phone Number',
    phonenumberbody1: '+91-99949-26518 \n +91-452-2346518',
    silverstore: 'Silver Store',
    addressbody2: '218, West Masi Street Madurai-625001',
    phonenumberbody2: '+91-99949-26518 \n +91-452-2346518',
    get: 'Get',
    intouch: 'in touch',
    fullname: 'Full Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    enter: 'Enter Your ',
    send: 'Send ',
    connect: 'Connect',
    withus: 'with us',
    allcollections: 'All Collections',
    marriage: 'wedding',
    story: 'story',
    aboutusdata1: 'In 1992, Sri Balagopalan Jewellery Mart has been inaugrated in Small Scale by S.B.Senthilkumar . Each and everyone feel elite on shopping with us in quality, design, price and service . Quality for the end consumer is key priority for us and we are comitted to fulfill our promises!!!',
    Gold: 'gold',
    Diamond: 'diamond',
    Silver: 'silver',
    talktoushome: 'Have questions about our exquisite jewellery collections and can\'t decide what suits your taste! Look no further',
    talktousgold: 'Confused with the gold collection you are looking at? Leave it to us',
    talktousdiamond: 'Confused with the Diamond collection you are looking at? Leave it to us',
    talktoussilver: 'Confused with the Silver collection you are looking at? Leave it to us',
    talktousproduct: 'Can\'t decide between our products? We\'ll make sure that is not a problem, reach out to us',
    talktouscollection: 'Not convinced of our displayed collection here? This is just a tip of iceberg with our collections available at our store, contact us for more info ',
    talktousgoldscheme: ' Not planning to buy gold yet? Invest in our gold scheme to make the most out of your saving. ',
    promise1: 'Certified Pure Gold',
    promise2: 'All Jewels are brand new',
    promise3: 'Transparency in pricing',
    promise4: 'Secure Gold Scheme',
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
    bracelet: 'ப்ராஸ்லெட் ',
    goldsavingscheme: 'தங்க சேமிப்பு திட்டம்',
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