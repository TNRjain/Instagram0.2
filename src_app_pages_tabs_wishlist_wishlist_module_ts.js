(self["webpackChunkInstagram_clone"] = self["webpackChunkInstagram_clone"] || []).push([["src_app_pages_tabs_wishlist_wishlist_module_ts"],{

/***/ 4637:
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/wishlist/wishlist-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishlistPageRoutingModule": () => (/* binding */ WishlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.page */ 9283);




const routes = [
    {
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_0__.WishlistPage
    }
];
let WishlistPageRoutingModule = class WishlistPageRoutingModule {
};
WishlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WishlistPageRoutingModule);



/***/ }),

/***/ 5170:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/wishlist/wishlist.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishlistPageModule": () => (/* binding */ WishlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist-routing.module */ 4637);
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlist.page */ 9283);







let WishlistPageModule = class WishlistPageModule {
};
WishlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.WishlistPageRoutingModule
        ],
        declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_1__.WishlistPage]
    })
], WishlistPageModule);



/***/ }),

/***/ 9283:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/wishlist/wishlist.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishlistPage": () => (/* binding */ WishlistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _raw_loader_wishlist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./wishlist.page.html */ 5996);
/* harmony import */ var _wishlist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlist.page.scss */ 7335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);





let WishlistPage = class WishlistPage {
    constructor() {
        this.slideOpts = {};
        this.slides = [];
        this.activeTab = 0;
        this.activities = [];
    }
    ngOnInit() {
        this.slides = [
            { id: 1, name: 'All activity' },
            { id: 2, name: 'Likes', notifications: 805 },
            { id: 3, name: 'Comments', notifications: 970 },
            { id: 4, name: 'Mentions' },
        ];
        this.slideOpts = {
            slidesPerView: this.checkScreen(),
            slideShadows: true
        };
        this.activities = [
            { id: 1, username: 'Radha_07', user_profile: 'assets/imgs/2.png', time: '1 min', activity: 'follow' },
            { id: 2, username: 'divyesh_512', user_profile: 'assets/imgs/6.png', time: '5 mins', activity: 'comment', comments: 'Great content without a doubt. I am your big fan of you.', post: 'assets/imgs/posts/2.jpg' },
            { id: 3, username: 'rano_55', user_profile: 'assets/imgs/4.png', time: '1d', activity: 'follow' },
            { id: 4, username: 'nikita.chaurasia.14', user_profile: 'assets/imgs/3.png', time: '1w', activity: 'follow' },
            { id: 5, username: 'ruchita_08', user_profile: 'assets/imgs/5.png', time: '5 mins', activity: 'comment', comments: 'Nice design. It\'s good to see different layouts and design for such commons elements. Good job!.', post: 'assets/imgs/posts/2.jpg' },
            { id: 6, username: 'er_kano_025', user_profile: 'assets/imgs/1.png', time: '3w', activity: 'follow' },
        ];
    }
    checkScreen() {
        let innerWidth = window.innerWidth;
        console.log(innerWidth);
        switch (true) {
            case 340 > innerWidth:
                return this.checkLength(3.6);
            case 340 <= innerWidth && innerWidth <= 400:
                return this.checkLength(3.6);
            case 401 <= innerWidth && innerWidth <= 700:
                return this.checkLength(4.6);
            case 701 <= innerWidth && innerWidth <= 900:
                return this.checkLength(5.6);
            case 901 <= innerWidth:
                return this.checkLength(6.6);
        }
    }
    checkLength(val) {
        let length = this.slides.length;
        return val < length ? val : length;
    }
    changeTab(index) {
        this.activeTab = index;
        this.ionSlides.slideTo(index);
    }
    likeComment(item) {
        item.like = !(item === null || item === void 0 ? void 0 : item.like);
    }
};
WishlistPage.ctorParameters = () => [];
WishlistPage.propDecorators = {
    ionSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSlides,] }]
};
WishlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-wishlist',
        template: _raw_loader_wishlist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_wishlist_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WishlistPage);



/***/ }),

/***/ 7335:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/wishlist/wishlist.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  background: var(--ion-color-light);\n}\nion-header ion-slides ion-slide ion-fab {\n  margin: -11px 0 0 -6px;\n  width: 20px;\n  height: 20px;\n}\nion-header ion-slides ion-slide ion-fab ion-fab-button {\n  width: 20px;\n  height: 20px;\n  font-size: 0.7rem;\n}\nion-header ion-slides ion-slide ion-button {\n  height: 2.2em;\n}\nion-header ion-slides ion-slide ion-button ion-text {\n  font-size: 0.8rem;\n}\nion-header ion-slides ion-slide .active-tab:active {\n  transition-timing-function: linear;\n  transition-timing-function: cubic-bezier(0, 0, 1, 1);\n  transition-timing-function: ease;\n  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n  transition-timing-function: ease-in-out;\n  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);\n  transition-timing-function: ease-in;\n  transition-timing-function: cubic-bezier(0.42, 0, 1, 1);\n  transition-timing-function: ease-out;\n  transition-timing-function: cubic-bezier(0, 0, 0.58, 1);\n}\nion-header ion-slides ion-slide .active-tab:active ion-text {\n  font-size: 1.2rem;\n}\nion-content {\n  --background: var(--ion-color-light);\n}\nion-content ion-list {\n  background: var(--ion-color-light);\n  padding: 0;\n  margin-bottom: 10vh;\n}\nion-content ion-list ion-item {\n  width: 95%;\n  margin: auto;\n  margin-bottom: 1.5vh;\n  border-radius: 20px;\n  --inner-padding-end: 5px;\n}\nion-content ion-list ion-item ion-thumbnail.photo {\n  align-self: flex-start;\n  position: relative;\n  min-width: 2rem;\n  min-height: 2rem;\n  border-radius: 20px;\n  padding: 5px;\n}\nion-content ion-list ion-item ion-thumbnail.photo img {\n  border-radius: 20px;\n}\nion-content ion-list ion-item ion-thumbnail.photo::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 20px;\n  padding: 3px;\n  background: linear-gradient(to bottom, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80);\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: destination-out;\n  mask-composite: exclude;\n}\nion-content ion-list ion-item ion-label {\n  font-weight: bold;\n  font-size: 0.9rem;\n}\nion-content ion-list ion-item ion-label p ion-text {\n  font-size: 0.75rem;\n}\nion-content ion-list ion-item ion-label p ion-text span {\n  color: gray;\n}\nion-content ion-list ion-item ion-label p .time {\n  color: lightgray;\n}\nion-content ion-list ion-item ion-label ion-row {\n  margin-top: 5px;\n}\nion-content ion-list ion-item ion-label ion-row ion-icon {\n  font-size: 1.3rem;\n}\nion-content ion-list ion-item ion-label ion-row .like:active {\n  font-size: 3rem;\n  transition: all 0.3s ease;\n}\nion-content ion-list ion-item ion-button {\n  height: 3em;\n  --border-radius: 15px;\n  margin-left: 20px;\n}\nion-content ion-list ion-item ion-thumbnail.post {\n  align-self: flex-start;\n  min-width: 4rem;\n  min-height: 4rem;\n  border-radius: 20px;\n}\nion-content ion-list ion-item ion-thumbnail.post img {\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpc2hsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFBO0FBQ0o7QUFFWTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBaEI7QUFDZ0I7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQXBCO0FBR1k7RUFDSSxhQUFBO0FBRGhCO0FBRWdCO0VBQ0ksaUJBQUE7QUFBcEI7QUFHWTtFQUlJLGtDQUFBO0VBQ0Esb0RBQUE7RUFFQSxnQ0FBQTtFQUNBLDREQUFBO0VBRUEsdUNBQUE7RUFDQSwwREFBQTtFQUVBLG1DQUFBO0VBQ0EsdURBQUE7RUFFQSxvQ0FBQTtFQUNBLHVEQUFBO0FBUmhCO0FBUmdCO0VBQ0ksaUJBQUE7QUFVcEI7QUFXQTtFQUNJLG9DQUFBO0FBUko7QUFTSTtFQUNJLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBUFI7QUFRUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBTlo7QUFPWTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFMaEI7QUFNZ0I7RUFDSSxtQkFBQTtBQUpwQjtBQU9ZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFHQUFBO0VBQ0EsOEVBQUE7RUFDQSx1Q0FBQTtFQUNBLHVCQUFBO0FBTGhCO0FBT1k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBTGhCO0FBT29CO0VBQ0ksa0JBQUE7QUFMeEI7QUFNd0I7RUFDSSxXQUFBO0FBSjVCO0FBT29CO0VBQ0ksZ0JBQUE7QUFMeEI7QUFRZ0I7RUFDSSxlQUFBO0FBTnBCO0FBT29CO0VBQ0ksaUJBQUE7QUFMeEI7QUFPb0I7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUFMeEI7QUFTWTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBUGhCO0FBU1k7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUGhCO0FBUWdCO0VBQ0ksbUJBQUE7QUFOcEIiLCJmaWxlIjoid2lzaGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBpb24tc2xpZGVzIHtcbiAgICAgICAgaW9uLXNsaWRlIHtcbiAgICAgICAgICAgIGlvbi1mYWIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogLTExcHggMCAwIC02cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiAjREQyQTdCO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuMmVtO1xuICAgICAgICAgICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFjdGl2ZS10YWI6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMSwgMSk7XG5cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG5cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQyLCAwLCAwLjU4LCAxKTtcblxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40MiwgMCwgMSwgMSk7XG5cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBpb24tbGlzdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA1cHg7XG4gICAgICAgICAgICBpb24tdGh1bWJuYWlsLnBob3RvIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDJyZW07XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDoycmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLXRodW1ibmFpbC5waG90bzo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0MxMzU4NCwgI0UxMzA2QywgI0ZEMUQxRCwgI0Y1NjA0MCwgI0Y3NzczNywgI0ZDQUY0NSwgI0ZGREM4MCk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1tYXNrOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiAwIDApIGNvbnRlbnQtYm94LCBsaW5lYXItZ3JhZGllbnQoI2ZmZiAwIDApO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtbWFzay1jb21wb3NpdGU6IGRlc3RpbmF0aW9uLW91dDsgXG4gICAgICAgICAgICAgICAgbWFzay1jb21wb3NpdGU6IGV4Y2x1ZGU7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnRpbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5saWtlOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLXRodW1ibmFpbC5wb3N0IHtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNHJlbTtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjRyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 5996:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/wishlist/wishlist.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"light\">\n    <ion-title class=\"ion-text-center\">Activity</ion-title>\n  </ion-toolbar>\n  <ion-row>\n    <ion-slides [options]=\"slideOpts\" *ngIf=\"slides?.length > 0\">\n      <ion-slide *ngFor=\"let item of slides; let i = index\">\n        <ion-col (click)=\"changeTab(i)\">\n          <ion-fab vertical=\"top\" horizontal=\"center\" *ngIf=\"item?.notifications\">\n            <ion-fab-button color=\"danger\">\n              {{item?.notifications}}\n            </ion-fab-button>\n          </ion-fab>\n          <ion-button \n            [class.active-tab]=\"activeTab == i\"\n            [color]=\"activeTab == i ? 'dark' : 'white'\"\n            expand=\"block\" mode=\"ios\" shape=\"round\">\n            <ion-text>{{item?.name}}</ion-text>\n          </ion-button>\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n\n  <ion-list lines=\"none\" *ngIf=\"activeTab == 0\">\n    <ion-list-header>\n      <ion-label>\n        <strong>New (64)</strong>\n      </ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let item of activities\">\n      <ion-thumbnail slot=\"start\" class=\"photo\">\n        <img [src]=\"item?.user_profile\" />\n      </ion-thumbnail>\n\n      <ion-label>\n        {{item?.username}}\n        <p class=\"ion-text-wrap\">\n          <ion-text color=\"medium\" *ngIf=\"item?.activity == 'follow'\">\n            started following you.\n          </ion-text>\n          <ion-text color=\"medium\" *ngIf=\"item?.activity == 'comment'\">\n            <span>Commented:</span> {{item?.comments}}\n          </ion-text>\n          <ion-text class=\"time\">{{item?.time}}</ion-text>\n        </p>\n        <ion-row *ngIf=\"item?.activity == 'comment'\">\n          <ion-icon \n            [class.like]=\"item?.like\"\n            (click)=\"likeComment(item)\"\n            [color]=\"item?.like ? 'primary' : 'medium'\" \n            [name]=\"item?.like ? 'heart' : 'heart-outline'\">\n          </ion-icon>\n          <ion-icon color=\"medium\" class=\"ion-margin-start\" name=\"chatbubble-ellipses-outline\"></ion-icon>\n        </ion-row>\n      </ion-label>\n\n      <ion-button *ngIf=\"item?.activity == 'follow'\" mode=\"ios\" slot=\"end\" color=\"primary\">Follow back</ion-button>\n      <ion-thumbnail *ngIf=\"item?.activity == 'comment'\" slot=\"end\" class=\"post\">\n        <img [src]=\"item?.post\" />\n      </ion-thumbnail>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_wishlist_wishlist_module_ts.js.map