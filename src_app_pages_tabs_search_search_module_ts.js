(self["webpackChunkInstagram_clone"] = self["webpackChunkInstagram_clone"] || []).push([["src_app_pages_tabs_search_search_module_ts"],{

/***/ 3214:
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/search/search-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageRoutingModule": () => (/* binding */ SearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page */ 1978);




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ 9311:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/search/search.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageModule": () => (/* binding */ SearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-routing.module */ 3214);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page */ 1978);







let SearchPageModule = class SearchPageModule {
};
SearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchPageRoutingModule
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage]
    })
], SearchPageModule);



/***/ }),

/***/ 1978:
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/search/search.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./search.page.html */ 7948);
/* harmony import */ var _search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page.scss */ 735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let SearchPage = class SearchPage {
    constructor() { }
    ngOnInit() {
    }
};
SearchPage.ctorParameters = () => [];
SearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-search',
        template: _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SearchPage);



/***/ }),

/***/ 735:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/search/search.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYSxtQkFBQTtBQUViIiwiZmlsZSI6InNlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7Ym9yZGVyLXJhZGl1czo1MHB4O30iXX0= */");

/***/ }),

/***/ 7948:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/search/search.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-searchbar value=\"search\"></ion-searchbar>\n<ion-content>\n<ion-row>\n    <ion-col size=\"3\">\n      <div><img src=\"assets/imgs/posts/n1.gif\" alt=\"\"></div>\n      <div><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n    </ion-col>\n     <ion-col size=\"3\">\n      <div ><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n      <div ><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n    </ion-col> \n    <ion-col size=\"6\">\n      <div ><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n    </ion-col>\n  </ion-row>\n<ion-row>\n    <ion-col size=\"6\">\n        <div ><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n      </ion-col>\n    <ion-col size=\"3\">\n      <div><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n      <div><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n    </ion-col>\n     <ion-col size=\"3\">\n      <div ><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n      <div ><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n    </ion-col> \n   \n  </ion-row>\n  <ion-row>\n    <ion-col size=\"3\">\n      <div><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n      <div><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n    </ion-col>\n     <ion-col size=\"3\">\n      <div ><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n      <div ><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n    </ion-col> \n    <ion-col size=\"6\">\n      <div ><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n    </ion-col>\n  </ion-row>\n<ion-row>\n    <ion-col size=\"6\">\n        <div ><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n      </ion-col>\n    <ion-col size=\"3\">\n      <div><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n      <div><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n    </ion-col>\n     <ion-col size=\"3\">\n      <div ><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n      <div ><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n    </ion-col> \n   \n  </ion-row>\n        <ion-row>\n            <ion-col size=\"3\">\n              <div><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n              <div><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n            </ion-col>\n             <ion-col size=\"3\">\n              <div ><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n              <div ><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n            </ion-col> \n            <ion-col size=\"6\">\n              <div ><img src=\"assets/imgs/posts/n7.gif\" alt=\"\"></div>\n            </ion-col>\n          </ion-row>\n        </ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_search_search_module_ts.js.map