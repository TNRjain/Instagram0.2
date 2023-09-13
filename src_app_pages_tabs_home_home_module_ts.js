(self["webpackChunkInstagram_clone"] = self["webpackChunkInstagram_clone"] || []).push([["src_app_pages_tabs_home_home_module_ts"],{

/***/ 4874:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/home/home-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9200);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 6302:
/*!************************************************!*\
  !*** ./src/app/pages/tabs/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 4874);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 9200);







let HomePageModule = class HomePageModule {
    function(jaAJSH) {
    }
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 9200:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 283);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 4239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let HomePage = class HomePage {
    constructor() {
        this.feeds = [
            {
                id: 1,
                logo: 'assets/imgs/jainish.png',
                username: 'kano_jk_07',
                location: 'India',
                src: 'assets/videos/ds.mp4',
                description: 'Hello jainish,',
                likes: 15
            },
            {
                id: 2,
                logo: 'assets/imgs/jainish.png',
                username: 'kano_jk_07',
                location: 'India',
                src: 'assets/imgs/posts/ds.jpg',
                description: 'Hello jainish,',
                likes: 80,
                image: true
            },
            {
                id: 3,
                logo: 'assets/imgs/jainish.png',
                username: 'kano_jk_07',
                location: 'India',
                src: 'assets/videos/video_of_funny_cat (1080p).mp4',
                description: "Hello jainish,",
                likes: 4
            },
            {
                id: 4,
                logo: 'assets/imgs/jainish.png',
                username: 'kano_jk_07',
                location: 'India',
                src: 'assets/videos/kv.mp4',
                description: 'Hello jainish,',
                likes: 56
            },
            {
                id: 5,
                logo: 'assets/imgs/jainish.png',
                username: 'kano_jk_07',
                location: 'India',
                src: 'assets/imgs/posts/ds.jpg',
                description: 'Hello jainish,',
                likes: 150,
                image: true
            },
            {
                id: 6,
                logo: 'assets/imgs/jainish.png',
                username: 'kano_jk_07',
                location: 'India',
                src: 'assets/imgs/posts/ds.jpg',
                description: 'Hello jainish,',
                likes: 200,
                image: true
            },
            {
                id: 7,
                logo: 'assets/imgs/jainish.png',
                username: 'kano_jk_07',
                location: 'India',
                src: 'assets/imgs/posts/ds.jpg',
                description: 'Hello jainish,',
                likes: 100,
                image: true
            }
        ];
        this.nowPlaying = null;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.didScroll();
    }
    toggleWrap(feed) {
        feed.wrap = !feed.wrap;
    }
    isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    }
    didScroll(event) {
        console.log(event);
        if (this.nowPlaying && this.isElementInViewport(this.nowPlaying))
            return;
        else if (this.nowPlaying && !this.isElementInViewport(this.nowPlaying)) {
            this.nowPlaying.pause();
            this.nowPlaying = null;
        }
        this.videos.forEach(player => {
            console.log('player', player);
            if (this.nowPlaying)
                return;
            const nativeElement = player.nativeElement;
            const inView = this.isElementInViewport(nativeElement);
            if (inView) {
                this.nowPlaying = nativeElement;
                this.nowPlaying.muted = true;
                this.nowPlaying.play();
            }
        });
    }
};
HomePage.ctorParameters = () => [];
HomePage.propDecorators = {
    videos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChildren, args: ['instaVideo',] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 4239:
/*!************************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header ion-toolbar ion-title {\n  font-weight: bold;\n  font-family: cursive;\n  font-size: 1.6rem;\n}\n\nion-content .story-list {\n  padding: 16px 0px 8px;\n  border-bottom: 1px solid #ddd;\n}\n\nion-content .horizontal {\n  padding-left: 16px;\n  white-space: nowrap;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n  -webkit-scrollbar-display: none;\n}\n\nion-content .horizontal::-webkit-scrollbar {\n  display: none;\n}\n\nion-content .scroll-item {\n  position: relative;\n  display: inline-block;\n  margin-right: 16px;\n  margin-bottom: 8px;\n  text-align: center;\n}\n\nion-content .item-label {\n  font-size: 13px;\n  margin-top: 8px;\n}\n\nion-content ion-avatar.has-update {\n  padding: 2px;\n  border: 2px solid var(--ion-color-danger);\n}\n\nion-content ion-grid {\n  margin-bottom: 10vh;\n}\n\nion-content ion-grid ion-row {\n  margin-bottom: 5vh;\n}\n\nion-content ion-grid ion-row ion-col ion-item {\n  --inner-padding-end: 0 !important;\n  --padding-start: 10px !important;\n}\n\nion-content ion-grid ion-row ion-col ion-item ion-label {\n  font-size: 0.9rem;\n}\n\nion-content ion-grid ion-row ion-col ion-item ion-label p {\n  font-size: 0.85rem;\n}\n\nion-content ion-grid ion-row ion-col ion-item .iconsStart {\n  margin: 0 5px 0 0 !important;\n}\n\nion-content ion-grid ion-row ion-col ion-item .iconsStart ion-icon {\n  font-size: 1.5rem;\n}\n\nion-content ion-grid ion-row ion-col div.post {\n  width: 100%;\n  height: 30vh !important;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\nion-content ion-grid ion-row ion-col div.videoSize, ion-content ion-grid ion-row ion-col video {\n  background: var(--ion-color-dark);\n  width: 100%;\n  max-height: 50vh;\n}\n\nion-content ion-grid ion-row ion-col ion-item.details {\n  min-height: 0 !important;\n  --padding-start: 10px !important;\n  --padding-end: 10px !important;\n}\n\nion-content ion-grid ion-row ion-col ion-item.details ion-label {\n  margin-top: 0 !important;\n}\n\nion-content ion-grid ion-row ion-col ion-item.details p {\n  margin-top: 3px;\n}\n\nion-content ion-grid ion-row ion-col ion-item.details ion-label, ion-content ion-grid ion-row ion-col ion-item.details p {\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBRFo7O0FBUUk7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0FBTFI7O0FBUUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7QUFOUjs7QUFRSTtFQUNJLGFBQUE7QUFOUjs7QUFVSTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFSUjs7QUFXSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBVFI7O0FBYVk7RUFDSSxZQUFBO0VBQ0EseUNBQUE7QUFYaEI7O0FBZUk7RUFDSSxtQkFBQTtBQWJSOztBQWNRO0VBQ0ksa0JBQUE7QUFaWjs7QUFjZ0I7RUFDSSxpQ0FBQTtFQUNBLGdDQUFBO0FBWnBCOztBQWFvQjtFQUNJLGlCQUFBO0FBWHhCOztBQVl3QjtFQUNJLGtCQUFBO0FBVjVCOztBQWFvQjtFQUNJLDRCQUFBO0FBWHhCOztBQVl3QjtFQUNJLGlCQUFBO0FBVjVCOztBQWNnQjtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQVpwQjs7QUFjZ0I7RUFDSSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVpwQjs7QUFjZ0I7RUFDSSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7QUFacEI7O0FBYW9CO0VBQ0ksd0JBQUE7QUFYeEI7O0FBYW9CO0VBQ0ksZUFBQTtBQVh4Qjs7QUFhb0I7RUFDSSxrQkFBQTtBQVh4QiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgaW9uLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuXG4gICAgLnN0b3J5LWxpc3R7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMHB4IDhweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgfVxuICAgIFxuICAgIC5ob3Jpem9udGFse1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDtcbiAgICAgICAgLXdlYmtpdC1zY3JvbGxiYXItZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmhvcml6b250YWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9ICBcbiAgICBcbiAgICBcbiAgICAuc2Nyb2xsLWl0ZW17XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAuaXRlbS1sYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuICAgIFxuICAgIGlvbi1hdmF0YXJ7XG4gICAgICAgICAgICAmLmhhcy11cGRhdGV7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgICAgfVxuICAgIH0gICBcblxuICAgIGlvbi1ncmlkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gICAgICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaWNvbnNTdGFydCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4IDAgMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpdi5wb3N0IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzB2aCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpdi52aWRlb1NpemUsIHZpZGVvIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTB2aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLWl0ZW0uZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWwsIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0= */");

/***/ }),

/***/ 283:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/home/home.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title mode=\"md\" color=\"dark\"><img src=\"assets/imgs/posts/instagram01.png\" width=\"120px\"></ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\">\n        <ion-icon slot=\"icon-only\" name=\"add-circle-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"didScroll($event)\">\n  <div class=\"story-list\">\n    <div class=\"horizontal\">\n      <div class=\"scroll-item\">\n        <ion-avatar class=\"avatar-md\">\n          <img src=\"assets/imgs/jainish.png\" alt=\"\" style=\"margin:7px 5px 5px 5px;\">\n        </ion-avatar>\n          <div class=\"item-label text-muted\">\n            your story\n          </div>\n      </div>\n      <div class=\"scroll-item \" *ngFor=\"let img of [1,2,3,4,5,6,7,8,9,10] \">\n        <div class=\"item-avatar\" style=\"margin-left: 5px;\">\n          <ion-avatar class=\"avatar-md has-update has-status\">\n            <img src=\"assets/imgs/jainish.png \" alt=\"\">\n          </ion-avatar>\n        </div>\n        <div class=\"item-lable\">\n          jainish\n        </div>\n         </div>\n    </div>\n  </div>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row *ngFor=\"let feed of feeds\">\n      <ion-col size=\"12\">\n        <ion-item lines=\"full\">\n          <ion-avatar slot=\"start\">\n            <ion-img [src]=\"feed?.logo\"></ion-img>\n          </ion-avatar>\n          <ion-label>\n            <strong>{{feed?.username}}</strong>\n            <p>\n              <ion-text>{{feed?.location}}</ion-text>\n            </p>\n          </ion-label>\n          <ion-button slot=\"end\" fill=\"clear\">\n            <ion-icon slot=\"icon-only\" name=\"ellipsis-horizontal\" color=\"dark\"></ion-icon>\n          </ion-button>\n        </ion-item>\n        <div *ngIf=\"feed?.image\" class=\"post\" [style.background-image]=\"'url(' + feed?.src + ')'\"></div>\n        <div *ngIf=\"!feed?.image\" class=\"videoSize\">\n          <video #instaVideo playsinline preload=\"auto\">\n            <source [src]=\"feed?.src\" type=\"video/mp4\" />\n          </video>\n        </div>\n        <ion-item lines=\"none\">\n          <ion-button class=\"iconsStart\" slot=\"start\" fill=\"clear\">\n            <ion-icon slot=\"icon-only\" name=\"heart-outline\" color=\"dark\"></ion-icon>\n          </ion-button>\n          <ion-button class=\"iconsStart\" slot=\"start\" fill=\"clear\">\n            <ion-icon slot=\"icon-only\" name=\"chatbubble-outline\" color=\"dark\"></ion-icon>\n          </ion-button>\n          <ion-button class=\"iconsStart\" slot=\"start\" fill=\"clear\">\n            <ion-icon slot=\"icon-only\" name=\"paper-plane-outline\" color=\"dark\"></ion-icon>\n          </ion-button>\n          <ion-button class=\"iconsStart\" slot=\"end\" fill=\"clear\">\n            <ion-icon slot=\"icon-only\" name=\"bookmark-outline\" color=\"dark\"></ion-icon>\n          </ion-button>          \n        </ion-item>\n        <ion-item lines=\"none\" class=\"details\">\n          <ion-label>\n            <strong *ngIf=\"feed?.likes > 0\">{{feed?.likes}} likes</strong>\n            <p *ngIf=\"feed?.description && feed?.description != ''\" [class]=\"feed?.wrap ? 'ion-text-wrap' : 'ion-text-no-wrap'\">\n              <ion-text color=\"dark\">\n                <strong>{{feed?.username}}</strong> {{feed?.description}}\n              </ion-text>\n            </p>\n            <ion-note *ngIf=\"feed?.description && feed?.description != ''\" (click)=\"toggleWrap(feed)\">\n              \n            </ion-note>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_home_home_module_ts.js.map