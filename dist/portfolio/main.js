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

/***/ "./src/app/app-router.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-router.module.ts ***!
  \**************************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/pages/home/home.component */ "./src/app/core/pages/home/home.component.ts");
/* harmony import */ var _core_pages_projects_item_projects_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/pages/projects-item/projects-item.component */ "./src/app/core/pages/projects-item/projects-item.component.ts");






const routes = [
    {
        path: '',
        component: _core_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        pathMatch: 'full',
    },
    {
        path: 'project/:id',
        component: _core_pages_projects_item_projects_item_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsItemComponent"],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
class AppRouterModule {
}
AppRouterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRouterModule });
AppRouterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRouterModule_Factory(t) { return new (t || AppRouterModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRouterModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRouterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_theme_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/theme/theme.service */ "./src/app/core/theme/theme.service.ts");
/* harmony import */ var _core_services_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/filter.service */ "./src/app/core/services/filter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor(themeService, filterService) {
        this.themeService = themeService;
        this.filterService = filterService;
        this.proyectos = [];
        this.tecnologiasPrincipales = [];
        this.tecnologiasSecundarias = [];
        this.tecnologiasDesign = [];
    }
    get attrClass() {
        return this.themeService.theme;
    }
    get filterClass() {
        return this.filterService.filter;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_theme_theme_service__WEBPACK_IMPORTED_MODULE_1__["DevThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostVars: 2, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.attrClass);
    } }, decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _core_theme_theme_service__WEBPACK_IMPORTED_MODULE_1__["DevThemeService"] }, { type: _core_services_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"] }]; }, { attrClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_router_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-router.module */ "./src/app/app-router.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _core_theme_theme_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/theme/theme.module */ "./src/app/core/theme/theme.module.ts");
/* harmony import */ var _core_services_filter_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/services/filter.module */ "./src/app/core/services/filter.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _app_router_module__WEBPACK_IMPORTED_MODULE_3__["AppRouterModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _core_theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["DevThemeModule"],
            _core_services_filter_module__WEBPACK_IMPORTED_MODULE_7__["FilterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_app_router_module__WEBPACK_IMPORTED_MODULE_3__["AppRouterModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
        _core_theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["DevThemeModule"],
        _core_services_filter_module__WEBPACK_IMPORTED_MODULE_7__["FilterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                imports: [
                    _app_router_module__WEBPACK_IMPORTED_MODULE_3__["AppRouterModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                    _core_theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["DevThemeModule"],
                    _core_services_filter_module__WEBPACK_IMPORTED_MODULE_7__["FilterModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class FooterComponent {
    constructor() {
        this.date = new Date();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 16, vars: 4, consts: [[1, "container", "p-grid"], [1, "p-col-5", "item"], ["target", "_blank", "href", "https://nikollsabalu.netlify.app/"], [1, "p-col-3", "copyright", "item"], [1, "p-col-4", "item"], ["target", "_blank", "href", "https://github.com/nikollsabalu"], ["src", "assets/github.svg"], ["target", "_blank", "href", "https://www.linkedin.com/in/nikollsabalu/"], ["src", "assets/linkedin.svg"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This project belongs to my personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " P O R T F O L I O ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "S O C I A L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 1, ctx.date, "y"), " - Developed by Nikoll Sabal\u00FA ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  align-items: center;\n  color: rgba(255, 255, 255, 0.5);\n  text-align: center;\n  height: 5rem;\n  background-color: #070F27;\n  font-size: small;\n  width: 100%;\n  margin: 0px;\n}\n\na[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\na[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:active {\n  text-decoration: none;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.copyright[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.portfolio[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: left;\n}\n\n@media (max-width: 700px) {\n  .item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLHFCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsV0FBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzBGMjc7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbmE6bGluayxcclxuYTp2aXNpdGVkLFxyXG5hOmFjdGl2ZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBvcnRmb2xpbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3MDBweCkge1xyXG4gIC5pdGVtIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/components/loading/loading.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/components/loading/loading.component.ts ***!
  \**************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressspinner.js");



class LoadingComponent {
    constructor() { }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-progressSpinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_progressspinner__WEBPACK_IMPORTED_MODULE_1__["ProgressSpinner"]], styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prime-ng/prime-ng.module */ "./src/app/prime-ng/prime-ng.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/core/components/loading/loading.component.ts");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/projects/projects.component */ "./src/app/core/pages/projects/projects.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/core/pages/about/about.component.ts");
/* harmony import */ var _pages_projects_item_projects_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/projects-item/projects-item.component */ "./src/app/core/pages/projects-item/projects-item.component.ts");
/* harmony import */ var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/experience/experience.component */ "./src/app/core/pages/experience/experience.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/core/pages/home/home.component.ts");












class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_2__["PrimeNgModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _pages_projects_item_projects_item_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsItemComponent"],
        _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"],
        _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_9__["ExperienceComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_2__["PrimeNgModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]], exports: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                    _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                    _pages_projects_item_projects_item_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsItemComponent"],
                    _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"],
                    _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_9__["ExperienceComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_2__["PrimeNgModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]],
                exports: [
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/enums/technologies.ts":
/*!********************************************!*\
  !*** ./src/app/core/enums/technologies.ts ***!
  \********************************************/
/*! exports provided: Technologies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Technologies", function() { return Technologies; });
var Technologies;
(function (Technologies) {
    Technologies["angular"] = "angular";
    Technologies["angularName"] = "Angular";
    Technologies["react"] = "react";
    Technologies["reactName"] = "React";
    Technologies["vue"] = "vue";
    Technologies["vueName"] = "Vue";
})(Technologies || (Technologies = {}));


/***/ }),

/***/ "./src/app/core/enums/theme.ts":
/*!*************************************!*\
  !*** ./src/app/core/enums/theme.ts ***!
  \*************************************/
/*! exports provided: Theme, DarkComponents, LightComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkComponents", function() { return DarkComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightComponents", function() { return LightComponents; });
var Theme;
(function (Theme) {
    Theme["darkTheme"] = "dark-theme";
})(Theme || (Theme = {}));
var DarkComponents;
(function (DarkComponents) {
    DarkComponents["card"] = "dark-card";
    DarkComponents["dialog"] = "dark-dialog";
    DarkComponents["button"] = "dark-button";
    DarkComponents["toolbar"] = "dark-toolbar";
    DarkComponents["chip"] = "dark-chips";
    DarkComponents["dataView"] = "dark-dataview";
    DarkComponents["selectButton"] = "dark-selectButton";
    DarkComponents["menuButton"] = "dark-menuButton";
})(DarkComponents || (DarkComponents = {}));
var LightComponents;
(function (LightComponents) {
    LightComponents["card"] = "light-card";
    LightComponents["dialog"] = "light-dialog";
    LightComponents["button"] = "light-button";
    LightComponents["toolbar"] = "light-toolbar";
    LightComponents["chip"] = "light-chips";
    LightComponents["dataView"] = "light-dataview";
    LightComponents["selectButton"] = "light-selectButton";
    LightComponents["menuButton"] = "light-menuButton";
})(LightComponents || (LightComponents = {}));


/***/ }),

/***/ "./src/app/core/mocks/courses.mock.ts":
/*!********************************************!*\
  !*** ./src/app/core/mocks/courses.mock.ts ***!
  \********************************************/
/*! exports provided: coursesMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coursesMock", function() { return coursesMock; });
const coursesMock = [
    {
        status: 'Nemo enim ipsam',
        date: '2023',
        desc: 'Vue Js',
    },
    {
        status: 'Nemo enim ipsam',
        date: '2022',
        desc: 'React Js',
    },
    {
        status: 'Nemo enim ipsam',
        date: '2021',
        desc: 'UX/UI Design',
    },
    {
        status: 'Nemo enim ipsam',
        date: '2020',
        desc: 'Web Development',
    },
];


/***/ }),

/***/ "./src/app/core/mocks/filters.mock.ts":
/*!********************************************!*\
  !*** ./src/app/core/mocks/filters.mock.ts ***!
  \********************************************/
/*! exports provided: tecnologiesMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tecnologiesMock", function() { return tecnologiesMock; });
const tecnologiesMock = [
    { label: 'Angular', value: 'angular' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'All', value: 'all' },
];


/***/ }),

/***/ "./src/app/core/mocks/menu.mock.ts":
/*!*****************************************!*\
  !*** ./src/app/core/mocks/menu.mock.ts ***!
  \*****************************************/
/*! exports provided: menuItemsMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuItemsMock", function() { return menuItemsMock; });
const menuItemsMock = [
    {
        items: [
            {
                icon: 'pi pi-arrow-right',
                label: 'About',
                url: '#about',
            },
            {
                icon: 'pi pi-arrow-right',
                label: 'Experience',
                url: '#experiencie',
            },
            {
                icon: 'pi pi-arrow-right',
                label: 'Projects',
                url: '#projects',
            },
        ],
    },
];


/***/ }),

/***/ "./src/app/core/pages/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/pages/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mocks_courses_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mocks/courses.mock */ "./src/app/core/mocks/courses.mock.ts");
/* harmony import */ var _fire_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../fire-store.service */ "./src/app/fire-store.service.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/timeline */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-timeline.js");
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tag */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tag.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressbar.js");
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/chip */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-chip.js");











function AboutComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.bio["imagen"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AboutComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-tag", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-progressBar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tech_r5.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, tech_r5.nivel / 100))("rounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tech_r5.nivel)("showValue", false);
} }
function AboutComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-tag", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-progressBar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const design_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](design_r6.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, design_r6.nivel / 100))("rounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", design_r6.nivel)("showValue", false);
} }
function AboutComponent_p_chip_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-chip", 25);
} if (rf & 2) {
    const tech_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", tech_r7)("styleClass", ctx_r3.chipStyle);
} }
function AboutComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r8.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r8.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r8.status);
} }
class AboutComponent {
    constructor(firestoreService) {
        this.firestoreService = firestoreService;
        this.bio = [];
        this.mainTechnologies = [];
        this.secondTechnologies = [];
        this.technologiesDesign = [];
        this.displayBasic = false;
        this.certificate = '';
        this.isloading = true;
    }
    ngOnInit() {
        this.getData();
        this.courses = _mocks_courses_mock__WEBPACK_IMPORTED_MODULE_1__["coursesMock"];
    }
    getData() {
        this.firestoreService.getBio().subscribe((catsSnapshot) => {
            catsSnapshot.forEach((catData) => {
                this.bio = catData.payload.doc.data();
            });
        });
        this.firestoreService.getTechnologies().subscribe((catsSnapshot) => {
            catsSnapshot.forEach((catData) => {
                this.secondTechnologies = catData.payload.doc.data().otras;
                this.mainTechnologies = catData.payload.doc.data().principales;
                this.technologiesDesign = catData.payload.doc.data().design;
            });
        });
    }
    showBasicDialog(img) {
        this.displayBasic = true;
        this.isloading = true;
        this.certificate = img;
        setInterval(() => {
            this.isloading = false;
        }, 500);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fire_store_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], inputs: { cardStyle: "cardStyle", chipStyle: "chipStyle", bodyPie: "bodyPie", buttonstyle: "buttonstyle" }, decls: 31, vars: 13, consts: [[1, "container", "p-grid"], [1, "p-col-4", "about"], [3, "header", "subheader", "styleClass"], ["pTemplate", "header"], [1, "bio-description"], [1, "pi", "pi-phone"], [1, "pi", "pi-envelope"], ["header", "Front-end Skills", 3, "styleClass"], [1, "p-grid"], ["class", "p-col-12 card-tecnologias", 4, "ngFor", "ngForOf"], ["header", "Design Skills", 3, "styleClass"], ["class", "p-col-12", 4, "ngFor", "ngForOf"], [1, "p-col-12"], [1, "chips"], [3, "label", "styleClass", 4, "ngFor", "ngForOf"], [1, "card-container", "p-col-4", "courses"], ["header", "Education", "subheader", "& courses", 3, "styleClass"], [1, "card"], ["align", "alternate", 3, "value"], ["pTemplate", "content"], ["alt", "Foto de perfil", 1, "imagen", 2, "padding", "10px 20px", 3, "src"], [1, "p-col-12", "card-tecnologias"], [1, "progress"], ["styleClass", "p-mr-2", "severity", "success", 1, "tag-progressbar", 3, "value", "rounded"], ["mode", "determinate", 1, "progressbar", 3, "value", "showValue"], [3, "label", "styleClass"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AboutComponent_ng_template_3_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AboutComponent_div_15_Template, 7, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AboutComponent_div_19_Template, 7, 7, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Other technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AboutComponent_p_chip_25_Template, 1, 2, "p-chip", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p-timeline", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AboutComponent_ng_template_30_Template, 6, 3, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.bio["nombre"])("subheader", ctx.bio["profesion"])("styleClass", ctx.cardStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bio["descripcion"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", ctx.bio["telefono"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", ctx.bio["correo"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", ctx.cardStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mainTechnologies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", ctx.cardStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.technologiesDesign);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.secondTechnologies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", ctx.cardStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.courses);
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_3__["Card"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], primeng_timeline__WEBPACK_IMPORTED_MODULE_6__["Timeline"], primeng_tag__WEBPACK_IMPORTED_MODULE_7__["Tag"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_8__["ProgressBar"], primeng_chip__WEBPACK_IMPORTED_MODULE_9__["Chip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["PercentPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-top: 85px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 10px;\n  display: flex;\n  width: 100%;\n}\n\n.container-technologies[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.bio-description[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.progress[_ngcontent-%COMP%] {\n  text-align: center !important;\n  align-items: stretch;\n  display: flex;\n  line-height: 50%;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.progress-spinner[_ngcontent-%COMP%] {\n  height: 100%;\n  text-align: center !important;\n  align-items: stretch;\n  display: flex;\n  line-height: 50%;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.tag-progressbar[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n}\n\n.center[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.center[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n  .p-progressbar .p-progressbar-value {\n  border: 0 none;\n  margin: 0;\n  background: #808DAD;\n}\n\n  .p-tag.p-tag-success {\n  background: #EB4A4A;\n}\n\n  .p-progressbar {\n  background: #a3a8ac98;\n}\n\n@media (max-width: 750px) {\n  .about[_ngcontent-%COMP%], .courses[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (min-width: 751px) and (max-width: 950px) {\n  .about[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n\n  .courses[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDRTtFQUNFLFdBQUE7QUFDSjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGOztBQUlBO0VBRUU7O0lBRUUsV0FBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFFRTtJQUNFLFVBQUE7RUFKRjs7RUFPQTtJQUNFLFdBQUE7RUFKRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiA4NXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXItdGVjaG5vbG9naWVzIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uYmlvLWRlc2NyaXB0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbGluZS1oZWlnaHQ6IDUwJTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLnByb2dyZXNzLXNwaW5uZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MCU7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi50YWctcHJvZ3Jlc3NiYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wLXByb2dyZXNzYmFyIC5wLXByb2dyZXNzYmFyLXZhbHVlIHtcclxuICBib3JkZXI6IDAgbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZDogIzgwOERBRDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wLXRhZy5wLXRhZy1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kOiAjRUI0QTRBO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnAtcHJvZ3Jlc3NiYXIge1xyXG4gIGJhY2tncm91bmQ6ICNhM2E4YWM5ODtcclxufVxyXG5cclxuLy8gTWVkaWEgcXVlcmllc1xyXG5AbWVkaWEgKG1heC13aWR0aDo3NTBweCkge1xyXG5cclxuICAuYWJvdXQsXHJcbiAgLmNvdXJzZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo3NTFweClhbmQobWF4LXdpZHRoOjk1MHB4KSB7XHJcblxyXG4gIC5hYm91dCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvdXJzZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss'],
            }]
    }], function () { return [{ type: _fire_store_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] }]; }, { cardStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chipStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bodyPie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttonstyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/pages/experience/experience.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/pages/experience/experience.component.ts ***!
  \***************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fire_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../fire-store.service */ "./src/app/fire-store.service.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");






function ExperienceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-panel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exp_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r1.empresa);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r1.periodo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", exp_r1.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", exp_r1.cargo)("collapsed", true)("toggleable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp_r1.descripcionCargo, " ");
} }
class ExperienceComponent {
    constructor(firestoreService) {
        this.firestoreService = firestoreService;
        this.experience = [];
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.firestoreService.geExperience().subscribe((catsSnapshot) => {
            catsSnapshot.forEach((catData) => {
                this.experience = catData.payload.doc.data().experiencia;
            });
        });
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fire_store_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreService"])); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], inputs: { cardStyle: "cardStyle" }, decls: 3, vars: 2, consts: [[1, "container"], ["header", "Experience", 3, "styleClass"], [4, "ngFor", "ngForOf"], [1, "p-grid"], [1, "p-col-4"], ["alt", "company logo", 3, "src"], [1, "p-col-8"], [3, "header", "collapsed", "toggleable"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExperienceComponent_div_2_Template, 12, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", ctx.cardStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experience);
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_2__["Card"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], primeng_panel__WEBPACK_IMPORTED_MODULE_4__["Panel"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 20px;\n  width: 100%;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n  .p-panel .p-panel-header,   .p-panel .p-panel-content {\n  border: 0px;\n  background: transparent;\n  color: #757575;\n}\n\n  .p-panel .p-panel-header .p-panel-title,   .p-panel .p-panel-header .p-panel-header-icon {\n  color: #757575;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n  .p-panel .p-panel-header .p-panel-header-icon:enabled:hover {\n  color: #EB4A4A;\n}\n\n  .p-panel,   .p-panel .p-component,   .p-panel .p-panel-toggleable {\n  box-shadow: 0 0px 0px 0px, 0 0px 0px 0 rgba(0, 0, 0, 0.14), 0 0px 0px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBOztFQUVFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTs7RUFFRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLHVFQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3BhZ2VzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnAtcGFuZWwgLnAtcGFuZWwtaGVhZGVyLFxyXG46Om5nLWRlZXAgLnAtcGFuZWwgLnAtcGFuZWwtY29udGVudCB7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucC1wYW5lbCAucC1wYW5lbC1oZWFkZXIgLnAtcGFuZWwtdGl0bGUsXHJcbjo6bmctZGVlcCAucC1wYW5lbCAucC1wYW5lbC1oZWFkZXIgLnAtcGFuZWwtaGVhZGVyLWljb24ge1xyXG4gIGNvbG9yOiAjNzU3NTc1O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wLXBhbmVsIC5wLXBhbmVsLWhlYWRlciAucC1wYW5lbC1oZWFkZXItaWNvbjplbmFibGVkOmhvdmVyIHtcclxuICBjb2xvcjogI0VCNEE0QTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wLXBhbmVsLFxyXG46Om5nLWRlZXAgLnAtcGFuZWwgLnAtY29tcG9uZW50LFxyXG46Om5nLWRlZXAgLnAtcGFuZWwgLnAtcGFuZWwtdG9nZ2xlYWJsZSB7XHJcbiAgYm94LXNoYWRvdzogMCAwcHggMHB4IDBweCwgMCAwcHggMHB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAwcHggMHB4IDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.scss'],
            }]
    }], function () { return [{ type: _fire_store_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreService"] }]; }, { cardStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/pages/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/pages/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _enums_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/theme */ "./src/app/core/enums/theme.ts");
/* harmony import */ var _mocks_menu_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mocks/menu.mock */ "./src/app/core/mocks/menu.mock.ts");
/* harmony import */ var _theme_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/theme.service */ "./src/app/core/theme/theme.service.ts");
/* harmony import */ var _fire_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../fire-store.service */ "./src/app/fire-store.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/loading/loading.component */ "./src/app/core/components/loading/loading.component.ts");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toolbar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toolbar.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputswitch.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-sidebar.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-menu.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/ripple */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-ripple.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../about/about.component */ "./src/app/core/pages/about/about.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../experience/experience.component */ "./src/app/core/pages/experience/experience.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../projects/projects.component */ "./src/app/core/pages/projects/projects.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");




















function HomeComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-toolbar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Dark mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p-inputSwitch", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function HomeComponent_div_1_Template_p_inputSwitch_onChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.changeTheme(); })("ngModelChange", function HomeComponent_div_1_Template_p_inputSwitch_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.checked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-sidebar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function HomeComponent_div_1_Template_p_sidebar_visibleChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.visibleSidebar = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p-menu", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_p_menu_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.closeSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_p_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r7.visibleSidebar = true; return ctx_r7.openSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addStyle("btnAbout"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addStyle("btnProject"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.addStyle("btnExperience"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-about", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-experience", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-projects", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", ctx_r1.toolbarStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", ctx_r1.menuButtonStyle)("visible", ctx_r1.visibleSidebar)("baseZIndex", 100)("modal", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", ctx_r1.menuButtonStyle)("model", ctx_r1.items)("baseZIndex", 1000);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", ctx_r1.menuButtonStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bodyPie", ctx_r1.toolbarStyle)("cardStyle", ctx_r1.cardStyle)("chipStyle", ctx_r1.chipStyle)("claseButton", ctx_r1.claseButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardStyle", ctx_r1.cardStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardStyle", ctx_r1.cardStyle)("dataviewStyle", ctx_r1.dataviewStyle)("chipStyle", ctx_r1.chipStyle)("selectButtonStyle", ctx_r1.selectButtonStyle);
} }
class HomeComponent {
    constructor(theme, firestoreService, primengConfig) {
        this.theme = theme;
        this.firestoreService = firestoreService;
        this.primengConfig = primengConfig;
        this.isLoading = true;
        this.bioLoaded = false;
        this.technologiesLoaded = false;
        this.projectsLoaded = false;
        this.isDarkMode = true;
        this.darkMode = theme.theme;
        if (this.darkMode === _enums_theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].darkTheme) {
            this.isDarkMode = false;
            this.checked = true;
        }
        else {
            this.isDarkMode = true;
            this.checked = false;
        }
        this.getData();
        this.changeTheme();
    }
    ngOnInit() {
        this.primengConfig.ripple = true;
        this.items = _mocks_menu_mock__WEBPACK_IMPORTED_MODULE_2__["menuItemsMock"];
    }
    getData() {
        this.firestoreService.getProjects().subscribe((catsSnapshot) => {
            catsSnapshot.forEach((catData) => {
                this.isLoading = false;
                catData.payload.doc.data().proyectos;
            });
        });
        this.isLoading = true;
        this.firestoreService.getBio().subscribe((catsSnapshot) => {
            catsSnapshot.forEach((catData) => {
                catData.payload.doc.data();
            });
        });
        this.firestoreService.getTechnologies().subscribe((catsSnapshot) => {
            catsSnapshot.forEach((catData) => {
                catData.payload.doc.data().otras;
                catData.payload.doc.data().principales;
                catData.payload.doc.data().design;
            });
        });
    }
    changeTheme() {
        if (this.isDarkMode === false) {
            this.isDarkMode = true;
            this.theme.setDarkTheme();
            this.dialogStyle = _enums_theme__WEBPACK_IMPORTED_MODULE_1__["DarkComponents"].dialog;
            this.cardStyle = _enums_theme__WEBPACK_IMPORTED_MODULE_1__["DarkComponents"].card;
            this.buttonStyle = _enums_theme__WEBPACK_IMPORTED_MODULE_1__["DarkComponents"].button;
            this.toolbarStyle = _enums_theme__WEBPACK_IMPORTED_MODULE_1__["DarkComponents"].toolbar;
            this.dataviewStyle = _enums_theme__WEBPACK_IMPORTED_MODULE_1__["DarkComponents"].dataView;
            this.chipStyle = _enums_theme__WEBPACK_IMPORTED_MODULE_1__["DarkComponents"].chip;
            this.selectButtonStyle = _enums_theme__WEBPACK_IMPORTED_MODULE_1__["DarkComponents"].selectButton;
            this.menuButtonStyle = _enums_theme__WEBPACK_IMPORTED_MODULE_1__["DarkComponents"].menuButton;
        }
        else {
            this.isDarkMode = false;
            this.theme.setLightTheme();
            this.dialogStyle = _enums_theme__WEBPACK_IMPORTED_MODULE_1__["LightComponents"].dialog;
            this.cardStyle = _enums_theme__WEBPACK_IMPORTED_MODULE_1__["LightComponents"].card;
            this.buttonStyle = _enums_theme__WEBPACK_IMPORTED_MODULE_1__["LightComponents"].button;
            this.toolbarStyle = _enums_theme__WEBPACK_IMPORTED_MODULE_1__["LightComponents"].toolbar;
            this.dataviewStyle = _enums_theme__WEBPACK_IMPORTED_MODULE_1__["LightComponents"].dataView;
            this.chipStyle = _enums_theme__WEBPACK_IMPORTED_MODULE_1__["LightComponents"].chip;
            this.selectButtonStyle = _enums_theme__WEBPACK_IMPORTED_MODULE_1__["LightComponents"].selectButton;
            this.menuButtonStyle = _enums_theme__WEBPACK_IMPORTED_MODULE_1__["LightComponents"].menuButton;
        }
    }
    closeSidebar() {
        document.getElementById('sidebar').style.display = 'none';
    }
    openSidebar() {
        document.getElementById('sidebar').style.display = 'block';
    }
    addStyle(id) {
        var btnAbout = document.getElementById('btnAbout');
        var btnProject = document.getElementById('btnProject');
        var btnExperience = document.getElementById('btnExperience');
        if (id === 'btnAbout') {
            btnAbout.className += ' linkActive';
            btnProject.classList.remove('linkActive');
            btnExperience.classList.remove('linkActive');
        }
        if (id === 'btnProject') {
            btnProject.className += ' linkActive';
            btnAbout.classList.remove('linkActive');
            btnExperience.classList.remove('linkActive');
        }
        if (id === 'btnExperience') {
            btnExperience.className += ' linkActive';
            btnProject.classList.remove('linkActive');
            btnAbout.classList.remove('linkActive');
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__["DevThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fire_store_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeNGConfig"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "styleClass"], [1, "p-toolbar-group-left"], [1, "p-mr-2"], [1, "pi", "pi-moon"], [3, "ngModel", "onChange", "ngModelChange"], [1, "p-toolbar-group-right"], [1, "buttons-mobile"], ["id", "sidebar", "position", "right", 3, "styleClass", "visible", "baseZIndex", "modal", "visibleChange"], [3, "styleClass", "model", "baseZIndex", "click"], ["type", "button", "icon", "pi pi-bars", 1, "p-mr-2", 3, "styleClass", "click"], [1, "buttons-web"], ["href", "#about", "pButton", "", "pRipple", "", "type", "button", "label", "About me", "id", "btnAbout", 1, "p-button", "p-button-primary", "p-button-text", "toolbar-button", 3, "click"], ["href", "#projects", "pButton", "", "pRipple", "", "type", "button", "label", "Projects", "id", "btnProject", 1, "p-button", "p-button-primary", "p-button-text", "toolbar-button", 3, "click"], ["href", "#experience", "pButton", "", "pRipple", "", "type", "button", "label", "Experience", "id", "btnExperience", 1, "p-button", "p-button-primary", "p-button-text", "toolbar-button", 3, "click"], ["id", "about", 3, "bodyPie", "cardStyle", "chipStyle", "claseButton"], [1, "p-grid", "projects"], ["id", "experience", 1, "p-col-4", "proj-exp", 3, "cardStyle"], ["id", "projects", 1, "p-col-8", "proj-exp", 3, "cardStyle", "dataviewStyle", "chipStyle", "selectButtonStyle"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 21, 19, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__["Toolbar"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_9__["InputSwitch"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_11__["Sidebar"], primeng_menu__WEBPACK_IMPORTED_MODULE_12__["Menu"], primeng_button__WEBPACK_IMPORTED_MODULE_13__["Button"], primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonDirective"], primeng_ripple__WEBPACK_IMPORTED_MODULE_14__["Ripple"], _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_16__["ExperienceComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_17__["ProjectsComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"]], styles: ["a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:active {\n  text-decoration: none;\n}\n\n.linkActive[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background: #EB4A4A;\n  z-index: -1;\n}\n\n.toolbar-button[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.menu-toogle-button[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {\n  background: rgba(235, 74, 74, 0.5);\n}\n\n  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {\n  background: #EB4A4A;\n}\n\n  .p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover .p-inputswitch-slider {\n  background: rgba(235, 74, 74, 0.5);\n}\n\n[_nghost-%COMP%]     .dark-toolbar.p-toolbar {\n  position: fixed;\n  border: 0px;\n  width: 100%;\n  z-index: 100;\n  background: #0E1630;\n  padding: 0px 15px;\n  box-shadow: 2px 2px 15px 5px rgba(131, 131, 131, 0.1);\n}\n\n[_nghost-%COMP%]     .dark-toolbar.p-toolbar h5, [_nghost-%COMP%]     .dark-toolbar.p-toolbar i, [_nghost-%COMP%]     .dark-toolbar.p-toolbar a {\n  color: white;\n}\n\n[_nghost-%COMP%]     .dark-button.p-button {\n  background: transparent;\n}\n\n[_nghost-%COMP%]     .dark-button.p-button .p-button-label {\n  color: #FBC02D;\n}\n\n[_nghost-%COMP%]     .dark-menuButton.p-button {\n  color: white;\n  background: transparent;\n}\n\n[_nghost-%COMP%]     .dark-menuButton.p-menu {\n  background: #0E1630;\n  border: none;\n}\n\n[_nghost-%COMP%]     .dark-menuButton.p-menu .p-submenu-header {\n  display: none;\n}\n\n[_nghost-%COMP%]     .dark-menuButton.p-menu .p-menuitem-text {\n  color: white;\n}\n\n[_nghost-%COMP%]     .dark-menuButton.p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n  color: #EB4A4A;\n}\n\n[_nghost-%COMP%]     .dark-menuButton.p-menu .p-menuitem-icon {\n  color: white;\n}\n\n[_nghost-%COMP%]     .dark-menuButton.p-menu .p-menu-item {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .dark-menuButton.p-sidebar {\n  background: #0E1630;\n}\n\n[_nghost-%COMP%]     .dark-menuButton.p-sidebar .p-sidebar-header {\n  color: #9e9e9e;\n  background: #0E1630;\n}\n\n[_nghost-%COMP%]     .dark-menuButton.p-sidebar .p-sidebar-close-icon {\n  color: white;\n}\n\n[_nghost-%COMP%]     .dark-menuButton.p-sidebar .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n  color: #EB4A4A;\n}\n\n[_nghost-%COMP%]     .dark-card.p-card {\n  background: #171F38;\n  color: white;\n  margin: 5px;\n}\n\n[_nghost-%COMP%]     .dark-card.p-card .p-card-subtitle {\n  color: white;\n}\n\n[_nghost-%COMP%]     .dark-dataview.p-dataview .p-dataview-content, [_nghost-%COMP%]     .dark-dataview.p-dataview .p-paginator {\n  background: transparent;\n}\n\n[_nghost-%COMP%]     .dark-dataview.p-dataview .p-paginator .p-paginator-first, [_nghost-%COMP%]     .dark-dataview.p-dataview .p-paginator .p-paginator-prev, [_nghost-%COMP%]     .dark-dataview.p-dataview .p-paginator .p-paginator-next, [_nghost-%COMP%]     .dark-dataview.p-dataview .p-paginator .p-paginator-last, [_nghost-%COMP%]     .dark-dataview.p-dataview .p-paginator .p-paginator-pages .p-paginator-page {\n  color: white;\n}\n\n[_nghost-%COMP%]     .dark-dataview.p-dataview .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {\n  background: rgba(63, 81, 181, 0.12);\n  border-color: rgba(63, 81, 181, 0.12);\n}\n\n[_nghost-%COMP%]     .dark-dataview.p-dataview .p-paginator-bottom {\n  border-width: 0 0 0px 0;\n}\n\n[_nghost-%COMP%]     .dark-chips.p-chip {\n  background: rgba(116, 116, 116, 0.12);\n  color: white;\n  font-size: 12px;\n  margin: 2px;\n}\n\n[_nghost-%COMP%]     .dark-selectButton.p-selectbutton .p-button {\n  color: white;\n  background: #0E1630;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n[_nghost-%COMP%]     .dark-selectButton.p-selectbutton .p-button.p-highlight {\n  background: rgba(116, 116, 116, 0.568);\n  color: white;\n}\n\n[_nghost-%COMP%]     .light-toolbar.p-toolbar {\n  position: fixed;\n  border: 0px;\n  width: 100%;\n  z-index: 100;\n  background: #ffff;\n  padding: 0px 15px;\n  box-shadow: 2px 2px 15px 5px rgba(0, 0, 0, 0.2);\n}\n\n[_nghost-%COMP%]     .light-toolbar.p-toolbar h5, [_nghost-%COMP%]     .light-toolbar.p-toolbar i, [_nghost-%COMP%]     .light-toolbar.p-toolbar a {\n  color: #252525;\n}\n\n[_nghost-%COMP%]     .light-toolbar.p-toolbar .toolbar-button:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background: #EB4A4A;\n  z-index: -1;\n}\n\n[_nghost-%COMP%]     .light-button.p-button {\n  background: transparent;\n}\n\n[_nghost-%COMP%]     .light-button.p-button .p-button-label {\n  color: #8444dc;\n}\n\n[_nghost-%COMP%]     .light-menuButton.p-button {\n  color: #0E1630;\n  background: transparent;\n}\n\n[_nghost-%COMP%]     .light-menuButton.p-menu {\n  border: none;\n}\n\n[_nghost-%COMP%]     .light-menuButton.p-menu .p-submenu-header {\n  display: none;\n}\n\n[_nghost-%COMP%]     .light-menuButton.p-sidebar .p-sidebar-header {\n  color: #9e9e9e;\n}\n\n[_nghost-%COMP%]     .light-menuButton.p-sidebar .p-sidebar-close-icon {\n  color: #0E1630;\n}\n\n[_nghost-%COMP%]     .light-card.p-card {\n  background: white;\n  color: #252525;\n  margin: 5px;\n}\n\n[_nghost-%COMP%]     .light-card.p-card .p-card-subtitle {\n  color: #252525;\n}\n\n[_nghost-%COMP%]     .light-dataview.p-dataview .p-dataview-content, [_nghost-%COMP%]     .light-dataview.p-dataview .p-paginator {\n  background: transparent;\n}\n\n[_nghost-%COMP%]     .light-dataview.p-dataview .p-paginator-bottom {\n  border-width: 0 0 0px 0;\n}\n\n[_nghost-%COMP%]     .light-chips.p-chip {\n  color: #252525;\n  font-size: 12px;\n  margin: 2px;\n}\n\n[_nghost-%COMP%]     .light-selectButton.p-selectbutton {\n  color: #252525;\n  font-size: 12px;\n}\n\n.p-grid[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.bio[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.projects[_ngcontent-%COMP%] {\n  padding-top: 2%;\n  max-width: 100vw;\n}\n\n.buttons-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 750px) {\n  .proj-exp[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .buttons-web[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .buttons-mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtDQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0NBQUE7QUFBRjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7QUFERjs7QUFHRTs7O0VBR0UsWUFBQTtBQURKOztBQUtBO0VBQ0UsdUJBQUE7QUFGRjs7QUFJRTtFQUNFLGNBQUE7QUFGSjs7QUFNQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBSEY7O0FBS0U7RUFDRSxhQUFBO0FBSEo7O0FBTUU7RUFDRSxZQUFBO0FBSko7O0FBT0U7RUFDRSxjQUFBO0FBTEo7O0FBUUU7RUFDRSxZQUFBO0FBTko7O0FBU0U7RUFDRSxXQUFBO0FBUEo7O0FBV0E7RUFDRSxtQkFBQTtBQVJGOztBQVVFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBUko7O0FBV0U7RUFDRSxZQUFBO0FBVEo7O0FBWUU7RUFDRSxjQUFBO0FBVko7O0FBY0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBWEY7O0FBYUU7RUFDRSxZQUFBO0FBWEo7O0FBaUJFOztFQUVFLHVCQUFBO0FBZEo7O0FBaUJFOzs7OztFQUtFLFlBQUE7QUFmSjs7QUFrQkU7RUFDRSxtQ0FBQTtFQUNBLHFDQUFBO0FBaEJKOztBQW1CRTtFQUNFLHVCQUFBO0FBakJKOztBQXNCQTtFQUNFLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBbkJGOztBQXVCRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0FBcEJKOztBQXVCRTtFQUNFLHNDQUFBO0VBQ0EsWUFBQTtBQXJCSjs7QUEyQkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtDQUFBO0FBeEJGOztBQTBCRTs7O0VBR0UsY0FBQTtBQXhCSjs7QUEyQkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBekJKOztBQThCQTtFQUNFLHVCQUFBO0FBM0JGOztBQTZCRTtFQUNFLGNBQUE7QUEzQko7O0FBK0JBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0FBNUJGOztBQStCQTtFQUNFLFlBQUE7QUE1QkY7O0FBOEJFO0VBQ0UsYUFBQTtBQTVCSjs7QUFpQ0U7RUFDRSxjQUFBO0FBOUJKOztBQWlDRTtFQUNFLGNBQUE7QUEvQko7O0FBbUNBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQWhDRjs7QUFrQ0U7RUFDRSxjQUFBO0FBaENKOztBQXVDRTs7RUFFRSx1QkFBQTtBQXBDSjs7QUF1Q0U7RUFDRSx1QkFBQTtBQXJDSjs7QUF5Q0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF0Q0Y7O0FBeUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUF0Q0Y7O0FBeUNBO0VBQ0UsV0FBQTtBQXRDRjs7QUF5Q0E7RUFDRSxhQUFBO0FBdENGOztBQXlDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXRDRjs7QUF5Q0E7RUFDRSxhQUFBO0FBdENGOztBQTBDQTtFQUVFO0lBQ0UsV0FBQTtFQXhDRjs7RUEyQ0E7SUFDRSxhQUFBO0VBeENGOztFQTJDQTtJQUNFLGNBQUE7RUF4Q0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYTpsaW5rLFxyXG5hOnZpc2l0ZWQsXHJcbmE6YWN0aXZlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5saW5rQWN0aXZlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kOiAjRUI0QTRBO1xyXG4gIHotaW5kZXg6IC0xO1xyXG5cclxufVxyXG5cclxuLnRvb2xiYXItYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4ubWVudS10b29nbGUtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wLWlucHV0c3dpdGNoLnAtaW5wdXRzd2l0Y2gtY2hlY2tlZCAucC1pbnB1dHN3aXRjaC1zbGlkZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMzUsIDc0LCA3NCwgMC41KTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wLWlucHV0c3dpdGNoLnAtaW5wdXRzd2l0Y2gtY2hlY2tlZCAucC1pbnB1dHN3aXRjaC1zbGlkZXI6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjRUI0QTRBO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnAtaW5wdXRzd2l0Y2gucC1pbnB1dHN3aXRjaC1jaGVja2VkOm5vdCgucC1kaXNhYmxlZCk6aG92ZXIgLnAtaW5wdXRzd2l0Y2gtc2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjM1LCA3NCwgNzQsIDAuNSk7XHJcbn1cclxuXHJcbi8vIERhcmsgVGhlbWVcclxuOmhvc3QgOjpuZy1kZWVwIC5kYXJrLXRvb2xiYXIucC10b29sYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQ6ICMwRTE2MzA7XHJcbiAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4IDVweCByZ2JhKDEzMSwgMTMxLCAxMzEsIDAuMSk7XHJcblxyXG4gIGg1LFxyXG4gIGksXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRhcmstYnV0dG9uLnAtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgLnAtYnV0dG9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjRkJDMDJEO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kYXJrLW1lbnVCdXR0b24ucC1idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kYXJrLW1lbnVCdXR0b24ucC1tZW51IHtcclxuICBiYWNrZ3JvdW5kOiAjMEUxNjMwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgLnAtc3VibWVudS1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5wLW1lbnVpdGVtLXRleHQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnAtbWVudWl0ZW0tbGluazpub3QoLnAtZGlzYWJsZWQpOmhvdmVyIC5wLW1lbnVpdGVtLXRleHQge1xyXG4gICAgY29sb3I6ICNFQjRBNEE7XHJcbiAgfVxyXG5cclxuICAucC1tZW51aXRlbS1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5wLW1lbnUtaXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZGFyay1tZW51QnV0dG9uLnAtc2lkZWJhciB7XHJcbiAgYmFja2dyb3VuZDogIzBFMTYzMDtcclxuXHJcbiAgLnAtc2lkZWJhci1oZWFkZXIge1xyXG4gICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEUxNjMwO1xyXG4gIH1cclxuXHJcbiAgLnAtc2lkZWJhci1jbG9zZS1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5wLW1lbnVpdGVtLWxpbms6bm90KC5wLWRpc2FibGVkKTpob3ZlciAucC1tZW51aXRlbS10ZXh0IHtcclxuICAgIGNvbG9yOiAjRUI0QTRBO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kYXJrLWNhcmQucC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjMTcxRjM4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDVweDtcclxuXHJcbiAgLnAtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRhcmstZGF0YXZpZXcucC1kYXRhdmlldyB7XHJcblxyXG4gIC5wLWRhdGF2aWV3LWNvbnRlbnQsXHJcbiAgLnAtcGFnaW5hdG9yIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLnAtcGFnaW5hdG9yIC5wLXBhZ2luYXRvci1maXJzdCxcclxuICAucC1wYWdpbmF0b3IgLnAtcGFnaW5hdG9yLXByZXYsXHJcbiAgLnAtcGFnaW5hdG9yIC5wLXBhZ2luYXRvci1uZXh0LFxyXG4gIC5wLXBhZ2luYXRvciAucC1wYWdpbmF0b3ItbGFzdCxcclxuICAucC1wYWdpbmF0b3IgLnAtcGFnaW5hdG9yLXBhZ2VzIC5wLXBhZ2luYXRvci1wYWdlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5wLXBhZ2luYXRvciAucC1wYWdpbmF0b3ItcGFnZXMgLnAtcGFnaW5hdG9yLXBhZ2UucC1oaWdobGlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg2MywgODEsIDE4MSwgMC4xMik7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNjMsIDgxLCAxODEsIDAuMTIpO1xyXG4gIH1cclxuXHJcbiAgLnAtcGFnaW5hdG9yLWJvdHRvbSB7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuICB9XHJcblxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRhcmstY2hpcHMucC1jaGlwIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDExNiwgMTE2LCAxMTYsIDAuMTIpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZGFyay1zZWxlY3RCdXR0b24ucC1zZWxlY3RidXR0b24ge1xyXG4gIC5wLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEUxNjMwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKVxyXG4gIH1cclxuXHJcbiAgLnAtYnV0dG9uLnAtaGlnaGxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTE2LCAxMTYsIDExNiwgMC41NjgpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIExpZ2h0IFRoZW1lXHJcbjpob3N0IDo6bmctZGVlcCAubGlnaHQtdG9vbGJhci5wLXRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3JkZXI6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4gIGg1LFxyXG4gIGksXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzI1MjUyNTtcclxuICB9XHJcblxyXG4gIC50b29sYmFyLWJ1dHRvbjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUI0QTRBO1xyXG4gICAgei1pbmRleDogLTE7XHJcblxyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5saWdodC1idXR0b24ucC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAucC1idXR0b24tbGFiZWwge1xyXG4gICAgY29sb3I6ICM4NDQ0ZGM7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmxpZ2h0LW1lbnVCdXR0b24ucC1idXR0b24ge1xyXG4gIGNvbG9yOiAjMEUxNjMwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmxpZ2h0LW1lbnVCdXR0b24ucC1tZW51IHtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG4gIC5wLXN1Ym1lbnUtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmxpZ2h0LW1lbnVCdXR0b24ucC1zaWRlYmFyIHtcclxuICAucC1zaWRlYmFyLWhlYWRlciB7XHJcbiAgICBjb2xvcjogIzllOWU5ZTtcclxuICB9XHJcblxyXG4gIC5wLXNpZGViYXItY2xvc2UtaWNvbiB7XHJcbiAgICBjb2xvcjogIzBFMTYzMDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubGlnaHQtY2FyZC5wLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGNvbG9yOiAjMjUyNTI1O1xyXG4gIG1hcmdpbjogNXB4O1xyXG5cclxuICAucC1jYXJkLXN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAjMjUyNTI1O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubGlnaHQtZGF0YXZpZXcucC1kYXRhdmlldyB7XHJcblxyXG4gIC5wLWRhdGF2aWV3LWNvbnRlbnQsXHJcbiAgLnAtcGFnaW5hdG9yIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLnAtcGFnaW5hdG9yLWJvdHRvbSB7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubGlnaHQtY2hpcHMucC1jaGlwIHtcclxuICBjb2xvcjogIzI1MjUyNTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubGlnaHQtc2VsZWN0QnV0dG9uLnAtc2VsZWN0YnV0dG9uIHtcclxuICBjb2xvcjogIzI1MjUyNTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5wLWdyaWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYmlvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucHJvamVjdHMge1xyXG4gIHBhZGRpbmctdG9wOiAyJTtcclxuICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4uYnV0dG9ucy1tb2JpbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8vIE1lZGlhIHF1ZXJpZXNcclxuQG1lZGlhIChtYXgtd2lkdGg6NzUwcHgpIHtcclxuXHJcbiAgLnByb2otZXhwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbnMtd2ViIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9ucy1tb2JpbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _theme_theme_service__WEBPACK_IMPORTED_MODULE_3__["DevThemeService"] }, { type: _fire_store_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeNGConfig"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/pages/projects-item/projects-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/pages/projects-item/projects-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProjectsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsItemComponent", function() { return ProjectsItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fire_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../fire-store.service */ "./src/app/fire-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/loading/loading.component */ "./src/app/core/components/loading/loading.component.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-ripple.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");









function ProjectsItemComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function ProjectsItemComponent_div_1_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const caracteristica_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", caracteristica_r4, " ");
} }
function ProjectsItemComponent_div_1_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tech_r5.nombre, " ");
} }
const _c0 = function () { return ["/"]; };
function ProjectsItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Main features:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectsItemComponent_div_1_p_10_Template, 3, 1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Developed with the following technologies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProjectsItemComponent_div_1_p_18_Template, 3, 1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.project["nombre"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx_r1.project.nombre)("src", ctx_r1.project["portada"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.project["caracteristicas"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.project.longDescripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.project["tecnologias"]);
} }
class ProjectsItemComponent {
    constructor(firestoreService, router, activatedRoute) {
        this.firestoreService = firestoreService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.project = [];
        this.isLoading = true;
        this.hasDemo = true;
    }
    ngOnInit() {
        this.getUrl();
        this.getData();
    }
    getData() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.firestoreService.getProjects().subscribe((catsSnapshot) => {
            this.isLoading = false;
            catsSnapshot.forEach((catData) => {
                this.project = catData.payload.doc.data().proyectos[id];
            });
        });
        this.isLoading = true;
    }
    getUrl() {
        const url = this.router.parseUrl(this.router.url);
        this.urlValue = url.queryParams['id'];
    }
}
ProjectsItemComponent.ɵfac = function ProjectsItemComponent_Factory(t) { return new (t || ProjectsItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fire_store_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ProjectsItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsItemComponent, selectors: [["app-projects-item"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "container"], ["icon", "pi pi-arrow-left", "pButton", "", "pRipple", "", "type", "button", "label", "Back", "id", "back-arrow", 1, "p-button-text", 3, "routerLink"], [1, "p-grid"], [1, "p-col-8", "item"], [1, "image", 3, "alt", "src"], [4, "ngFor", "ngForOf"], [1, "p-col-4", "item"], [1, "description"], [1, "pi", "pi-minus"], [1, "pi", "pi-angle-right"]], template: function ProjectsItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectsItemComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsItemComponent_div_1_Template, 20, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonDirective"], primeng_ripple__WEBPACK_IMPORTED_MODULE_6__["Ripple"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 5%;\n}\n\na[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:active {\n  text-decoration: none;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 2%;\n}\n\n.features[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.description[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n[_nghost-%COMP%]     .p-menu {\n  padding: 0rem 0;\n  width: 6rem;\n  background-color: transparent;\n  border-radius: 25px;\n  border-width: 0px;\n  color: #8444dc;\n}\n\n[_nghost-%COMP%]     .p-menu .p-menuitem-link, [_nghost-%COMP%]     .p-menu .p-menuitem-text, [_nghost-%COMP%]     .p-menu .p-menuitem-icon, [_nghost-%COMP%]     .p-menu .p-menuitem-link-active {\n  color: #EB4A4A;\n}\n\n  .p-button.p-button-text {\n  color: #fff;\n}\n\n@media (max-width: 600px) {\n  .item[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9wcm9qZWN0cy1pdGVtL3Byb2plY3RzLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBRUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFFRTs7OztFQUlFLGNBQUE7QUFBSjs7QUFLQTtFQUNFLFdBQUE7QUFGRjs7QUFNQTtFQUVFO0lBQ0UsV0FBQTtFQUpGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3BhZ2VzL3Byb2plY3RzLWl0ZW0vcHJvamVjdHMtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG5hOmxpbmssXHJcbmE6dmlzaXRlZCxcclxuYTphY3RpdmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuLmZlYXR1cmVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucC1tZW51IHtcclxuICBwYWRkaW5nOiAwcmVtIDA7XHJcbiAgd2lkdGg6IDZyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgY29sb3I6ICM4NDQ0ZGM7XHJcblxyXG4gIC5wLW1lbnVpdGVtLWxpbmssXHJcbiAgLnAtbWVudWl0ZW0tdGV4dCxcclxuICAucC1tZW51aXRlbS1pY29uLFxyXG4gIC5wLW1lbnVpdGVtLWxpbmstYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjRUI0QTRBO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbjo6bmctZGVlcCAucC1idXR0b24ucC1idXR0b24tdGV4dCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8vIE1lZGlhIHF1ZXJpZXNcclxuQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpIHtcclxuXHJcbiAgLml0ZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects-item',
                templateUrl: './projects-item.component.html',
                styleUrls: ['./projects-item.component.scss'],
            }]
    }], function () { return [{ type: _fire_store_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/pages/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/pages/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _enums_technologies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/technologies */ "./src/app/core/enums/technologies.ts");
/* harmony import */ var _mocks_filters_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mocks/filters.mock */ "./src/app/core/mocks/filters.mock.ts");
/* harmony import */ var _fire_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../fire-store.service */ "./src/app/fire-store.service.ts");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/filter.service */ "./src/app/core/services/filter.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/badge */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-badge.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-selectbutton.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/chip */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-chip.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/ripple */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-ripple.js");

















function ProjectsComponent_ng_template_11_ng_template_2_p_chip_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", tech_r8.nombre)("styleClass", ctx_r7.chipStyle);
} }
function ProjectsComponent_ng_template_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsComponent_ng_template_11_ng_template_2_p_chip_2_Template, 2, 2, "p-chip", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r4.portada, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r4.tecnologias);
} }
const _c0 = function () { return { "margin-left": ".7em" }; };
function ProjectsComponent_ng_template_11_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_ng_template_11_ng_template_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const project_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.viewProjectDetail(project_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function ProjectsComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsComponent_ng_template_11_ng_template_2_Template, 3, 2, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectsComponent_ng_template_11_ng_template_3_Template, 3, 3, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", project_r4.nombre)("subheader", project_r4.descripcion)("styleClass", ctx_r1.cardStyle);
} }
function ProjectsComponent_ng_template_14_p_chip_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", tech_r15.nombre)("styleClass", ctx_r14.chipStyle);
} }
function ProjectsComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectsComponent_ng_template_14_p_chip_3_Template, 2, 2, "p-chip", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_ng_template_14_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const project_r13 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.viewProjectDetail(project_r13.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r13 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", project_r13.nombre)("subheader", project_r13.desCorta)("styleClass", ctx_r3.cardStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r13.tecnologias);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r13.portada, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r13.githubUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProjectsComponent {
    constructor(firestoreService, filter, primeNGConfig, router) {
        this.firestoreService = firestoreService;
        this.filter = filter;
        this.primeNGConfig = primeNGConfig;
        this.router = router;
        this.projects = [];
        this.technologies = [];
        this.projectsCopy = [];
        this.angular = [];
        this.react = [];
        this.vue = [];
        this.filters = [];
    }
    ngOnInit() {
        this.primeNGConfig.ripple = true;
        this.getData();
        this.filters = _mocks_filters_mock__WEBPACK_IMPORTED_MODULE_2__["tecnologiesMock"];
    }
    getData() {
        this.firestoreService.getProjects().subscribe((catsSnapshot) => {
            catsSnapshot.forEach((catData) => {
                this.projects = catData.payload.doc.data().proyectos;
                this.projectsCopy = this.projects;
                this.projects.map((project) => {
                    let cadena = project.tecnologias[0]['nombre'];
                    if (cadena.includes(_enums_technologies__WEBPACK_IMPORTED_MODULE_1__["Technologies"].angularName))
                        this.angular.push(project);
                    if (cadena.includes(_enums_technologies__WEBPACK_IMPORTED_MODULE_1__["Technologies"].reactName))
                        this.react.push(project);
                    if (cadena.includes(_enums_technologies__WEBPACK_IMPORTED_MODULE_1__["Technologies"].vueName))
                        this.vue.push(project);
                });
                this.filterProjects(this.filter.filter);
            });
        });
    }
    filterProjects(name) {
        let filter = name.toLowerCase();
        switch (filter) {
            case _enums_technologies__WEBPACK_IMPORTED_MODULE_1__["Technologies"].angular:
                this.filter.setAngular();
                this.projects = this.angular;
                break;
            case _enums_technologies__WEBPACK_IMPORTED_MODULE_1__["Technologies"].react:
                this.projects = this.react;
                this.filter.setReact();
                break;
            case _enums_technologies__WEBPACK_IMPORTED_MODULE_1__["Technologies"].vue:
                this.filter.setVue();
                this.projects = this.vue;
                break;
            default:
                this.filter.setAll();
                this.projects = this.projectsCopy;
        }
    }
    viewProjectDetail(id) {
        this.router.navigate(['/project', id]);
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fire_store_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeNGConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], inputs: { cardStyle: "cardStyle", dataviewStyle: "dataviewStyle", chipStyle: "chipStyle", selectButtonStyle: "selectButtonStyle" }, decls: 15, vars: 17, consts: [[1, "container", "dark-body"], [1, "projects-title"], [3, "styleClass"], [1, "card-filter"], [1, "projects-cabecera"], ["styleClass", "p-ml-2", "severity", "primary", 3, "value"], ["optionValue", "value", 1, "p-ml-5", 3, "styleClass", "options", "ngModel", "ngModelChange", "click"], ["id", "project-web", "layout", "grid", 3, "value", "paginator", "rows", "sortField", "sortOrder", "styleClass"], ["dw", ""], ["pTemplate", "gridItem"], ["id", "project-mobile", "layout", "grid", 3, "value", "paginator", "rows", "sortField", "sortOrder", "styleClass"], ["dm", ""], [1, "p-col-6"], [3, "header", "subheader", "styleClass"], ["pTemplate", "header"], ["pTemplate", "footer"], ["alt", "Card", 3, "src"], [1, "chips"], [3, "label", "styleClass", 4, "ngFor", "ngForOf"], [3, "label", "styleClass"], [1, "pi", "pi-angle-right"], [1, "btn-github"], ["pButton", "", "pRipple", "", "type", "button", "label", "View more", 1, "p-button-rounded", 3, "click"], ["target", "_blank", "icon", "pi pi-github", "pButton", "", "pRipple", "", "type", "button", "label", "Github", 1, "p-button-rounded", "p-button-outlined"], [1, "p-col-12"], [1, "flex-list"], ["alt", "Card", 1, "list-img", 3, "src"], ["target", "_blank", "icon", "pi pi-github", "pButton", "", "pRipple", "", "type", "button", "label", "Ver en Github", 1, "p-button-rounded", "p-button-outlined", 3, "href"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p-badge", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p-selectButton", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_p_selectButton_ngModelChange_8_listener($event) { return ctx.defaultValue = $event; })("click", function ProjectsComponent_Template_p_selectButton_click_8_listener() { return ctx.filterProjects(ctx.defaultValue); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-dataView", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectsComponent_ng_template_11_Template, 4, 3, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-dataView", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProjectsComponent_ng_template_14_Template, 10, 9, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", ctx.cardStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.projects.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", ctx.selectButtonStyle)("options", ctx.filters)("ngModel", ctx.defaultValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.projects)("paginator", true)("rows", 2)("sortField", ctx.campo)("sortOrder", ctx.order)("styleClass", ctx.dataviewStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.projects)("paginator", true)("rows", 2)("sortField", ctx.campo)("sortOrder", ctx.order)("styleClass", ctx.dataviewStyle);
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_7__["Card"], primeng_badge__WEBPACK_IMPORTED_MODULE_8__["Badge"], primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9__["SelectButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], primeng_dataview__WEBPACK_IMPORTED_MODULE_11__["DataView"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], primeng_chip__WEBPACK_IMPORTED_MODULE_13__["Chip"], primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonDirective"], primeng_ripple__WEBPACK_IMPORTED_MODULE_15__["Ripple"]], styles: ["a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:active {\n  text-decoration: none;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  width: 100%;\n}\n\n.container-projects[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.projects-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.chips[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.list-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.flex-list[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#project-web[_ngcontent-%COMP%] {\n  display: block;\n}\n\n#project-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n  .p-paginator {\n  width: 100%;\n  padding: 0px;\n}\n\n[_nghost-%COMP%]     .p-menu {\n  padding: 0rem 0;\n  width: 6rem;\n  background-color: #8444dc;\n  border-radius: 25px;\n  border-width: 0px;\n}\n\n[_nghost-%COMP%]     .p-menu .p-menuitem-link, [_nghost-%COMP%]     .p-menu .p-menuitem-text {\n  color: white;\n}\n\n.btn-github[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.card-filter[_ngcontent-%COMP%], .projects-cabecera[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.card-filter[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n  .p-badge {\n  background: #EB4A4A;\n}\n\n  .p-button.p-button-outlined {\n  background-color: transparent;\n  color: #EB4A4A;\n  border: 1px solid;\n}\n\n  .p-button {\n  color: white;\n  background: #EB4A4A;\n}\n\n  .p-card .p-card-content {\n  padding: 0rem 0;\n}\n\n@media (max-width: 400px) {\n  .chips[_ngcontent-%COMP%] {\n    padding: 5px 0px;\n  }\n}\n\n@media (max-width: 600px) {\n  .card-filter[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    flex-direction: row;\n    align-content: center;\n    justify-content: flex-start;\n  }\n\n  #project-web[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #project-mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNFOztFQUVFLFlBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUlBO0VBQ0U7SUFDRSxnQkFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFFRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EsMkJBQUE7RUFIRjs7RUFNQTtJQUNFLGFBQUE7RUFIRjs7RUFNQTtJQUNFLGNBQUE7RUFIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImE6bGluayxcclxuYTp2aXNpdGVkLFxyXG5hOmFjdGl2ZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5jb250YWluZXItcHJvamVjdHMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2plY3RzLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jaGlwcyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmxpc3QtaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZsZXgtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuI3Byb2plY3Qtd2ViIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI3Byb2plY3QtbW9iaWxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnAtcGFnaW5hdG9yIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucC1tZW51IHtcclxuICBwYWRkaW5nOiAwcmVtIDA7XHJcbiAgd2lkdGg6IDZyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0NDRkYztcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlci13aWR0aDogMHB4O1xyXG5cclxuICAucC1tZW51aXRlbS1saW5rLFxyXG4gIC5wLW1lbnVpdGVtLXRleHQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1naXRodWIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jYXJkLWZpbHRlcixcclxuLnByb2plY3RzLWNhYmVjZXJhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWZpbHRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnAtYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICNFQjRBNEE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucC1idXR0b24ucC1idXR0b24tb3V0bGluZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjRUI0QTRBO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnAtYnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogI0VCNEE0QTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wLWNhcmQgLnAtY2FyZC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAwcmVtIDA7XHJcbn1cclxuXHJcbi8vIE1lZGlhIFF1ZXJpZXNcclxuQG1lZGlhIChtYXgtd2lkdGg6NDAwcHgpIHtcclxuICAuY2hpcHMge1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KSB7XHJcblxyXG4gIC5jYXJkLWZpbHRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAjcHJvamVjdC13ZWIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICNwcm9qZWN0LW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss'],
            }]
    }], function () { return [{ type: _fire_store_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] }, { type: _services_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeNGConfig"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { cardStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataviewStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chipStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectButtonStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/services/filter.module.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/filter.module.ts ***!
  \************************************************/
/*! exports provided: FilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterModule", function() { return FilterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FilterModule {
}
FilterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FilterModule });
FilterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FilterModule_Factory(t) { return new (t || FilterModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/services/filter.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/filter.service.ts ***!
  \*************************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _filter_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.module */ "./src/app/core/services/filter.module.ts");



class FilterService {
    constructor() {
        this.angular = false;
        this.react = false;
        this.vue = false;
        this.all = true;
    }
    get filter() {
        return this.all ? 'all' :
            this.angular ? 'angular' :
                this.react ? 'react' : 'vue';
    }
    setAngular() {
        this.all = false;
        this.react = false;
        this.vue = false;
        this.angular = true;
    }
    setReact() {
        this.all = false;
        this.vue = false;
        this.angular = false;
        this.react = true;
    }
    setVue() {
        this.all = false;
        this.react = false;
        this.angular = false;
        this.vue = true;
    }
    setAll() {
        this.all = true;
        this.react = false;
        this.angular = false;
        this.vue = false;
    }
}
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(); };
FilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac, providedIn: _filter_module__WEBPACK_IMPORTED_MODULE_1__["FilterModule"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: _filter_module__WEBPACK_IMPORTED_MODULE_1__["FilterModule"]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/theme/theme.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/theme/theme.module.ts ***!
  \********************************************/
/*! exports provided: DevThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevThemeModule", function() { return DevThemeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DevThemeModule {
}
DevThemeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DevThemeModule });
DevThemeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DevThemeModule_Factory(t) { return new (t || DevThemeModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevThemeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/theme/theme.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/theme/theme.service.ts ***!
  \*********************************************/
/*! exports provided: DevThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevThemeService", function() { return DevThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.module */ "./src/app/core/theme/theme.module.ts");



class DevThemeService {
    constructor() {
        this.isDark = true;
    }
    get theme() {
        return this.isDark ? 'dark-theme' : '';
    }
    setDarkTheme() {
        this.isDark = true;
    }
    setLightTheme() {
        this.isDark = false;
    }
}
DevThemeService.ɵfac = function DevThemeService_Factory(t) { return new (t || DevThemeService)(); };
DevThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DevThemeService, factory: DevThemeService.ɵfac, providedIn: _theme_module__WEBPACK_IMPORTED_MODULE_1__["DevThemeModule"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: _theme_module__WEBPACK_IMPORTED_MODULE_1__["DevThemeModule"]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/fire-store.service.ts":
/*!***************************************!*\
  !*** ./src/app/fire-store.service.ts ***!
  \***************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");



class FirestoreService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getProjects() {
        return this.firestore.collection('proyectos').snapshotChanges();
    }
    getTechnologies() {
        return this.firestore.collection('tecnologias').snapshotChanges();
    }
    getBio() {
        return this.firestore.collection('sobreMi').snapshotChanges();
    }
    geExperience() {
        return this.firestore.collection('experiencia').snapshotChanges();
    }
}
FirestoreService.ɵfac = function FirestoreService_Factory(t) { return new (t || FirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
FirestoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FirestoreService, factory: FirestoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirestoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/prime-ng/prime-ng.module.ts":
/*!*********************************************!*\
  !*** ./src/app/prime-ng/prime-ng.module.ts ***!
  \*********************************************/
/*! exports provided: PrimeNgModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeNgModule", function() { return PrimeNgModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/avatar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-avatar.js");
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/avatargroup */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-avatargroup.js");
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/badge */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-badge.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-carousel.js");
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/chip */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-chip.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-confirmdialog.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputswitch.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressbar.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressspinner.js");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/ripple */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-ripple.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-splitbutton.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/timeline */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-timeline.js");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/toolbar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toolbar.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tooltip.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-selectbutton.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-sidebar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/menubar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-menubar.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-menu.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/tag */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tag.js");




























class PrimeNgModule {
}
PrimeNgModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PrimeNgModule });
PrimeNgModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PrimeNgModule_Factory(t) { return new (t || PrimeNgModule)(); }, imports: [primeng_avatar__WEBPACK_IMPORTED_MODULE_1__["AvatarModule"],
        primeng_avatargroup__WEBPACK_IMPORTED_MODULE_2__["AvatarGroupModule"],
        primeng_badge__WEBPACK_IMPORTED_MODULE_3__["BadgeModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
        primeng_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
        primeng_chip__WEBPACK_IMPORTED_MODULE_7__["ChipModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogModule"],
        primeng_dataview__WEBPACK_IMPORTED_MODULE_9__["DataViewModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"],
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__["InputSwitchModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__["ProgressBarModule"],
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__["ProgressSpinnerModule"],
        primeng_ripple__WEBPACK_IMPORTED_MODULE_14__["RippleModule"],
        primeng_selectbutton__WEBPACK_IMPORTED_MODULE_20__["SelectButtonModule"],
        primeng_sidebar__WEBPACK_IMPORTED_MODULE_21__["SidebarModule"],
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_15__["SplitButtonModule"],
        primeng_tabview__WEBPACK_IMPORTED_MODULE_16__["TabViewModule"],
        primeng_timeline__WEBPACK_IMPORTED_MODULE_17__["TimelineModule"],
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_18__["ToolbarModule"],
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipModule"],
        primeng_menubar__WEBPACK_IMPORTED_MODULE_23__["MenubarModule"],
        primeng_menu__WEBPACK_IMPORTED_MODULE_24__["MenuModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_25__["PanelModule"],
        primeng_tag__WEBPACK_IMPORTED_MODULE_26__["TagModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrimeNgModule, { exports: [primeng_avatar__WEBPACK_IMPORTED_MODULE_1__["AvatarModule"],
        primeng_avatargroup__WEBPACK_IMPORTED_MODULE_2__["AvatarGroupModule"],
        primeng_badge__WEBPACK_IMPORTED_MODULE_3__["BadgeModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
        primeng_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
        primeng_chip__WEBPACK_IMPORTED_MODULE_7__["ChipModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogModule"],
        primeng_dataview__WEBPACK_IMPORTED_MODULE_9__["DataViewModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"],
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__["InputSwitchModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__["ProgressBarModule"],
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__["ProgressSpinnerModule"],
        primeng_ripple__WEBPACK_IMPORTED_MODULE_14__["RippleModule"],
        primeng_selectbutton__WEBPACK_IMPORTED_MODULE_20__["SelectButtonModule"],
        primeng_sidebar__WEBPACK_IMPORTED_MODULE_21__["SidebarModule"],
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_15__["SplitButtonModule"],
        primeng_tabview__WEBPACK_IMPORTED_MODULE_16__["TabViewModule"],
        primeng_timeline__WEBPACK_IMPORTED_MODULE_17__["TimelineModule"],
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_18__["ToolbarModule"],
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipModule"],
        primeng_menubar__WEBPACK_IMPORTED_MODULE_23__["MenubarModule"],
        primeng_menu__WEBPACK_IMPORTED_MODULE_24__["MenuModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_25__["PanelModule"],
        primeng_tag__WEBPACK_IMPORTED_MODULE_26__["TagModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimeNgModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                exports: [
                    primeng_avatar__WEBPACK_IMPORTED_MODULE_1__["AvatarModule"],
                    primeng_avatargroup__WEBPACK_IMPORTED_MODULE_2__["AvatarGroupModule"],
                    primeng_badge__WEBPACK_IMPORTED_MODULE_3__["BadgeModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
                    primeng_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
                    primeng_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
                    primeng_chip__WEBPACK_IMPORTED_MODULE_7__["ChipModule"],
                    primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogModule"],
                    primeng_dataview__WEBPACK_IMPORTED_MODULE_9__["DataViewModule"],
                    primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"],
                    primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__["InputSwitchModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                    primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__["ProgressBarModule"],
                    primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__["ProgressSpinnerModule"],
                    primeng_ripple__WEBPACK_IMPORTED_MODULE_14__["RippleModule"],
                    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_20__["SelectButtonModule"],
                    primeng_sidebar__WEBPACK_IMPORTED_MODULE_21__["SidebarModule"],
                    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_15__["SplitButtonModule"],
                    primeng_tabview__WEBPACK_IMPORTED_MODULE_16__["TabViewModule"],
                    primeng_timeline__WEBPACK_IMPORTED_MODULE_17__["TimelineModule"],
                    primeng_toolbar__WEBPACK_IMPORTED_MODULE_18__["ToolbarModule"],
                    primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipModule"],
                    primeng_menubar__WEBPACK_IMPORTED_MODULE_23__["MenubarModule"],
                    primeng_menu__WEBPACK_IMPORTED_MODULE_24__["MenuModule"],
                    primeng_panel__WEBPACK_IMPORTED_MODULE_25__["PanelModule"],
                    primeng_tag__WEBPACK_IMPORTED_MODULE_26__["TagModule"]
                ]
            }]
    }], null, null); })();


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
    production: false,
    firebase: {
        apiKey: 'AIzaSyC0Txy1aoJJAEURHsHCF0j0jg35vWjc-xs',
        authDomain: 'portafoliobd-7f0a9.firebaseapp.com',
        projectId: 'portafolio-proyecto-8ce65',
        storageBucket: 'portafolio-proyecto-8ce65.appspot.com',
        messagingSenderId: '595859270000',
        appId: '1:595859270000:web:d141f505bec891712207b5',
        measurementId: 'G-FK662J9X0W'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\CSABALUO\Desktop\Archivos\CURSOS\Angular\portfolio-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map