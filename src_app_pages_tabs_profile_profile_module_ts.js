(self["webpackChunkInstagram_clone"] = self["webpackChunkInstagram_clone"] || []).push([["src_app_pages_tabs_profile_profile_module_ts"],{

/***/ 4901:
/*!***************************************************************!*\
  !*** ./src/app/pages/tabs/profile/option/option.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionComponent": () => (/* binding */ OptionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _raw_loader_option_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./option.component.html */ 5230);
/* harmony import */ var _option_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./option.component.scss */ 4747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let OptionComponent = class OptionComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.options = [
            { icon: 'settings-sharp', label: 'Settings', redirectTo: '' },
            { icon: 'archive-outline', label: 'Archive', redirectTo: '' },
            { icon: 'bar-chart-outline', label: 'Insights', redirectTo: '' },
            { icon: 'time-outline', label: 'Your activity', redirectTo: '' },
            { icon: 'qr-code-outline', label: 'QR Code', redirectTo: '' },
            { icon: 'bookmark-outline', label: 'Saved', redirectTo: '' },
            { icon: 'list-outline', label: 'Close friends', redirectTo: '' },
            { icon: 'person-add-outline', label: 'Discover people', redirectTo: '' },
            { icon: 'heart-circle-outline', label: 'COVID-19 Information Centre', redirectTo: '' },
        ];
    }
    ngOnInit() { }
};
OptionComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
OptionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-option',
        template: _raw_loader_option_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_option_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OptionComponent);



/***/ }),

/***/ 1505:
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 359);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 185:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 1505);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 359);
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./option/option.component */ 4901);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage, _option_option_component__WEBPACK_IMPORTED_MODULE_2__.OptionComponent]
    })
], ProfilePageModule);



/***/ }),

/***/ 359:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 491);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 8816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./option/option.component */ 4901);






let ProfilePage = class ProfilePage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.slideOpts = {};
        this.stories = [];
        this.buttonValue = 'grid';
        this.buttonItems = [];
        this.posts = [];
    }
    ngOnInit() {
        this.stories = [
            { name: 'New' },
            { name: '1', src: 'assets/imgs/circles/logo1.png' },
            { name: '2', src: 'assets/imgs/circles/logo2.png' },
            { name: '3', src: 'assets/imgs/circles/logo3.png' },
            { name: '4', src: 'assets/imgs/circles/logo4.png' },
            { name: '5', src: 'assets/imgs/circles/logo5.png' },
            { name: '6', src: 'assets/imgs/circles/logo6.png' },
            { name: '7', src: 'assets/imgs/circles/logo5.png' },
        ];
        this.slideOpts = {
            slidesPerView: this.checkScreen(),
            slideShadows: true
        };
        this.buttonItems = [
            { value: 'grid', icon: 'grid' },
            { value: 'reels', icon: 'film' },
            { value: 'photos', icon: 'images' },
        ];
        this.posts = [
            { id: 1, url: 'assets/imgs/posts/n7.gif' },
            { id: 2, url: 'assets/imgs/posts/n2.jpg' },
            { id: 3, url: 'assets/imgs/posts/n1.jpg' },
            { id: 4, url: 'assets/imgs/posts/n4.jpg' },
            { id: 9, url: 'assets/imgs/posts/n5.gif' },
            { id: 6, url: 'assets/imgs/posts/n6.gif' },
            { id: 5, url: 'assets/imgs/posts/n7.gif' },
            { id: 8, url: 'assets/imgs/posts/n1.jpg' },
            { id: 7, url: 'assets/imgs/posts/n2.jpg' },
            { id: 10, url: 'assets/imgs/posts/n6.gif' },
            { id: 11, url: 'assets/imgs/posts/n6.gif' },
            { id: 12, url: 'assets/imgs/posts/n5.gif' },
        ];
    }
    checkScreen() {
        let innerWidth = window.innerWidth;
        console.log(innerWidth);
        switch (true) {
            case 340 > innerWidth:
                return this.checkLength(5.5);
            case 340 <= innerWidth && innerWidth <= 500:
                return this.checkLength(5.5);
            case 401 <= innerWidth && innerWidth <= 700:
                return this.checkLength(6.5);
            case 701 <= innerWidth && innerWidth <= 900:
                return this.checkLength(7.5);
            case 901 <= innerWidth:
                return this.checkLength(9.5);
        }
    }
    checkLength(val) {
        let length = this.stories.length;
        return val < length ? val : length;
    }
    buttonsChanged(event) {
        console.log(event.detail.value);
        this.buttonValue = event.detail.value;
    }
    options() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const options = {
                component: _option_option_component__WEBPACK_IMPORTED_MODULE_2__.OptionComponent,
                cssClass: 'custom-modal',
                swipeToClose: true //ios only
            };
            const modal = yield this.modalCtrl.create(options);
            yield modal.present();
            // const {data} = await modal.onWillDismiss();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 4747:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/profile/option/option.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".drawer-pull {\n  background: lightgray;\n  height: 4px;\n  width: 50px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6Im9wdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcmF3ZXItcHVsbCB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgIGhlaWdodDogNHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ 8816:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header ion-toolbar ion-title {\n  font-size: 1rem;\n}\nion-header ion-toolbar ion-title ion-icon {\n  margin-bottom: -3px;\n}\nion-content ion-grid ion-row .thumbnail {\n  text-align: -webkit-center;\n}\nion-content ion-grid ion-row .thumbnail ion-thumbnail {\n  position: relative;\n  min-width: 4rem;\n  min-height: 4rem;\n  border-radius: 20px;\n  padding: 5px;\n}\nion-content ion-grid ion-row .thumbnail ion-thumbnail img {\n  border-radius: 20px;\n}\nion-content ion-grid ion-row .thumbnail ion-thumbnail::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 20px;\n  padding: 3px;\n  background: linear-gradient(0deg, #00fcff 0%, #fe0000 100%);\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: destination-out;\n  mask-composite: exclude;\n}\nion-content ion-grid ion-row .thumbnail ion-fab {\n  margin: 0 -10px -14px 10px;\n  width: 20px;\n  height: 20px;\n}\nion-content ion-grid ion-row .thumbnail ion-fab ion-fab-button {\n  width: 20px;\n  height: 20px;\n  --background: linear-gradient(0deg, rgba(0,252,255,1) 0%, rgba(254,0,0,1) 100%);\n}\nion-content ion-grid ion-row ion-col {\n  align-self: center;\n}\nion-content ion-grid ion-row ion-col ion-label {\n  font-size: 0.9rem;\n  font-weight: bold;\n}\nion-content ion-grid ion-row ion-col ion-label .info {\n  font-size: 0.75rem;\n  font-weight: normal;\n}\nion-content ion-grid ion-row ion-col ion-label .description {\n  margin: 5px 5px 0 0;\n  font-size: 0.75rem;\n}\nion-content ion-grid ion-row ion-col ion-label .description a {\n  text-decoration: none;\n}\nion-content ion-grid ion-row ion-slides ion-slide ion-col {\n  text-align: -webkit-center;\n}\nion-content ion-grid ion-row ion-slides ion-slide ion-col ion-thumbnail {\n  min-width: 3rem;\n  min-height: 3rem;\n  border-radius: 20px;\n  margin: 0;\n  border: 1px solid var(--ion-color-light);\n}\nion-content ion-grid ion-row ion-slides ion-slide ion-col ion-thumbnail ion-icon {\n  transform: translateY(1.6vh);\n  font-size: 1.6rem;\n}\nion-content ion-grid ion-row ion-slides ion-slide ion-col ion-thumbnail img {\n  border-radius: 20px;\n}\nion-content ion-grid ion-row ion-slides ion-slide ion-col p {\n  margin: 0;\n}\nion-content ion-grid ion-row ion-slides ion-slide ion-col p ion-text {\n  font-size: 0.65rem;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-weight: 300;\n}\nion-content ion-grid ion-row.marginTop {\n  margin: 5px;\n}\nion-content .photo-grid {\n  margin: 8px 5px 10vh 5px;\n  padding: 0;\n  border-radius: 20px;\n}\nion-content .photo-grid ion-col {\n  padding: 2px;\n}\nion-content .photo-grid .image-container {\n  background-size: cover;\n  min-height: 100px;\n}\nion-content .photo-grid .image-container1 {\n  min-height: 200px;\n}\nion-content .photo-grid .ct1 {\n  min-height: 98.5px;\n  margin-bottom: 2.5px;\n}\nion-content .photo-grid .ct2 {\n  min-height: 99px;\n  margin-top: 2.5px;\n}\nion-content .noPadding {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksZUFBQTtBQURaO0FBRVk7RUFDSSxtQkFBQTtBQUFoQjtBQVNZO0VBQ0ksMEJBQUE7QUFOaEI7QUFPZ0I7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUxwQjtBQU1vQjtFQUNJLG1CQUFBO0FBSnhCO0FBT2dCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDJEQUFBO0VBQ0EsOEVBQUE7RUFDQSx1Q0FBQTtFQUNBLHVCQUFBO0FBTHBCO0FBT2dCO0VBQ0ksMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxwQjtBQU1vQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0VBQUE7QUFKeEI7QUFTWTtFQUNJLGtCQUFBO0FBUGhCO0FBUWdCO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQU5wQjtBQU9vQjtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFMeEI7QUFPb0I7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBTHhCO0FBTXdCO0VBQ0kscUJBQUE7QUFKNUI7QUFXb0I7RUFDSSwwQkFBQTtBQVR4QjtBQVV3QjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO0FBUjVCO0FBUzRCO0VBQ0ksNEJBQUE7RUFDQSxpQkFBQTtBQVBoQztBQVM0QjtFQUNJLG1CQUFBO0FBUGhDO0FBVXdCO0VBQ0ksU0FBQTtBQVI1QjtBQVM0QjtFQUNJLGtCQUFBO0VBQ0EsMkhBQUE7RUFDQSxnQkFBQTtBQVBoQztBQWNRO0VBQ0ksV0FBQTtBQVpaO0FBZ0JJO0VBQ0ksd0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFkUjtBQWVRO0VBQ0ksWUFBQTtBQWJaO0FBZVE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0FBYlo7QUFlUTtFQUNJLGlCQUFBO0FBYlo7QUFlUTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFiWjtBQWVRO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQWJaO0FBaUJJO0VBQ0ksVUFBQTtBQWZSIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBpb24tdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBpb24tZ3JpZCB7XG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gICAgICAgICAgICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0cmVtO1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0cmVtO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi10aHVtYm5haWw6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsMjUyLDI1NSwxKSAwJSwgcmdiYSgyNTQsMCwwLDEpIDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LW1hc2s6IGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCkgY29udGVudC1ib3gsIGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbWFzay1jb21wb3NpdGU6IGRlc3RpbmF0aW9uLW91dDsgXG4gICAgICAgICAgICAgICAgICAgIG1hc2stY29tcG9zaXRlOiBleGNsdWRlOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLWZhYiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAtMTBweCAtMTRweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwyNTIsMjU1LDEpIDAlLCByZ2JhKDI1NCwwLDAsMSkgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCA1cHggMCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLXNsaWRlcyB7XG4gICAgICAgICAgICAgICAgaW9uLXNsaWRlIHtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogM3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMS42dmgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWUtTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZSBMaWdodFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXJvdy5tYXJnaW5Ub3Age1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucGhvdG8tZ3JpZCB7IFxuICAgICAgICBtYXJnaW46IDhweCA1cHggMTB2aCA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgLmltYWdlLWNvbnRhaW5lcjEge1xuICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmN0MSB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA5OC41cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjVweDtcbiAgICAgICAgfVxuICAgICAgICAuY3QyIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDk5cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyLjVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAubm9QYWRkaW5nIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ 5230:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/profile/option/option.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-button fill=\"clear\" expand=\"full\" class=\"ion-text-center\">\n    <div class=\"drawer-pull\" (click)=\"modalCtrl.dismiss()\"></div>\n  </ion-button>  \n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item class=\"ion-margin-bottom\" *ngFor=\"let item of options\">\n      <ion-icon color=\"dark\" slot=\"start\" [name]=\"item?.icon\"></ion-icon>\n      <ion-label>{{ item?.label }}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ 491:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/profile/profile.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title color=\"dark\" mode=\"md\">\n      kano_jk_07\n      <ion-icon name=\"chevron-down-outline\"></ion-icon>\n    </ion-title>\n    <ion-buttons slot=\"end\">      \n      <ion-button fill=\"clear\" color=\"dark\">\n        <ion-icon slot=\"icon-only\" name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" color=\"dark\">\n        <ion-icon slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\" class=\"thumbnail\">\n        <ion-fab vertical=\"bottom\" horizontal=\"right\">\n          <ion-fab-button>\n            <ion-icon name=\"add\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n        <ion-thumbnail>\n          <img src=\"assets/imgs/jainish.png\" />\n        </ion-thumbnail>\n      </ion-col>\n      <ion-col size=\"3\" class=\"ion-text-center\">\n        <ion-label>\n          <strong>81</strong>\n          <p>\n            <ion-text color=\"medium\">Posts</ion-text>\n          </p>\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"3\" class=\"ion-text-center\">\n        <ion-label>\n          <strong>23.6K</strong>\n          <p>\n            <ion-text color=\"medium\">Followers</ion-text>\n          </p>\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"3\" class=\"ion-text-center\">\n        <ion-label>\n          <strong>488</strong>\n          <p>\n            <ion-text color=\"medium\">Following</ion-text>\n          </p>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"marginTop\">\n      <ion-col>\n        <ion-label>\n         rano ranani rite\n          <ion-text color=\"medium\" class=\"ion-margin-start info\">lion always lion</ion-text>\n          <ion-row>\n            <ion-text color=\"medium\" class=\"ion-text-justify description\">\n              lion always lionlion always lionlion always lionlion always lionlion always lionlion always lionlion always lionlion always lionlion always lionlion always lion<a href=\"https://www.instagram.com/\">@kano_jk_07</a>\n            </ion-text>\n          </ion-row>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"marginTop\">\n      <ion-col size=\"4\">\n        <ion-button mode=\"ios\" expand=\"block\" size=\"small\" fill=\"outline\" color=\"medium\" style=\"background-color: rgb(48, 136, 252);border-radius:5px;\">\n          <ion-text color=\"dark\"style=\"color: rgb(255, 255, 255);\">Edit Profile</ion-text>\n        </ion-button>      \n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button mode=\"ios\" expand=\"block\" size=\"small\" fill=\"outline\" color=\"medium\" style=\"background-color: rgb(48, 136, 252);border-radius:5px;\">\n          <ion-text color=\"dark\"style=\"color: rgb(255, 255, 255);\">Statistics</ion-text>\n        </ion-button>      \n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button mode=\"ios\" expand=\"block\" size=\"small\" fill=\"outline\" color=\"medium\" style=\"background-color: rgb(48, 136, 252);border-radius:5px;\">\n          <ion-text color=\"dark\" style=\"color: rgb(255, 255, 255);\">Contact</ion-text>\n        </ion-button>      \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of stories; let i = index\">\n          <ion-col>\n            <ion-thumbnail>\n              <ion-icon *ngIf=\"i == 0\" name=\"add\" color=\"dark\"></ion-icon>\n              <img *ngIf=\"i > 0\" [src]=\"item?.src\" />\n            </ion-thumbnail>\n            <p>\n              <ion-text color=\"dark\">{{item?.name}}</ion-text>\n            </p>\n          </ion-col>\n        </ion-slide>\n      </ion-slides>\n    </ion-row>    \n    <ion-row class=\"images\" (ionChange)=\"buttonsChanged($event)\">\n      <ion-segment mode=\"md\" [value]=\"buttonValue\">\n        <ion-segment-button [value]=\"item?.value\" *ngFor=\"let item of buttonItems\">\n          <ion-icon [name]=\"buttonValue == item?.value ? item?.icon : item?.icon + '-outline'\"></ion-icon>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-row>    \n  </ion-grid>\n\n  <div [ngSwitch]=\"buttonValue\">\n    <ion-list lines=\"none\" *ngSwitchCase=\"'grid'\" class=\"photo-grid\">\n      <div *ngFor=\"let item of posts; let i = index\">\n        <ion-grid *ngIf=\"i%3 == 0\" class=\"noPadding\">\n          <ion-row *ngIf=\"i%9 == 0\">\n            <ion-col size=\"4\">\n              <div class=\"image-container image-container1\" [style.background-image]=\"'url(' + item?.url + ')'\"></div>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div *ngIf=\"posts[i + 1]\" class=\"image-container ct1\" [style.background-image]=\"'url(' + posts[i + 1]?.url + ')'\"></div>\n              <div *ngIf=\"posts[i + 2]\" class=\"image-container ct2\" [style.background-image]=\"'url(' + posts[i + 2]?.url + ')'\"></div>\n            </ion-col>\n             <ion-col size=\"4\">\n              <div *ngIf=\"posts[i + 1]\" class=\"image-container ct1\" [style.background-image]=\"'url(' + posts[i + 1]?.url + ')'\"></div>\n              <div *ngIf=\"posts[i + 2]\" class=\"image-container ct2\" [style.background-image]=\"'url(' + posts[i + 2]?.url + ')'\"></div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf=\"i%9 == 0\">\n            <ion-col size=\"4\">\n              <div *ngIf=\"posts[i + 1]\" class=\"image-container ct1\" [style.background-image]=\"'url(' + posts[i + 1]?.url + ')'\"></div>\n              <div *ngIf=\"posts[i + 2]\" class=\"image-container ct2\" [style.background-image]=\"'url(' + posts[i + 2]?.url + ')'\"></div>\n            </ion-col>\n             <ion-col size=\"4\">\n              <div *ngIf=\"posts[i + 1]\" class=\"image-container ct1\" [style.background-image]=\"'url(' + posts[i + 1]?.url + ')'\"></div>\n              <div *ngIf=\"posts[i + 2]\" class=\"image-container ct2\" [style.background-image]=\"'url(' + posts[i + 2]?.url + ')'\"></div>\n            </ion-col> \n            <ion-col size=\"4\">\n              <div class=\"image-container image-container1\" [style.background-image]=\"'url(' + item?.url + ')'\"></div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-list>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_profile_profile_module_ts.js.map