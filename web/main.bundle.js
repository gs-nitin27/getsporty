webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.username = localStorage.getItem('currentUser');
        this.userid = localStorage.getItem('currentUserid');
        if (this.userid) {
            this.showMenu = true;
        }
        else {
            this.showMenu = false;
        }
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(["main"]);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(249),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_createContent_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_createContent_services__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateContentComponent = (function () {
    function CreateContentComponent(_contents, router) {
        this._contents = _contents;
        this.router = router;
        this.responseStatus = [];
    }
    CreateContentComponent.prototype.ngOnInit = function () {
        //this.contents = new CreateContent(); 
    };
    CreateContentComponent.prototype.Create = function () {
        this._contents.saveContent(this.contents).subscribe(function (data) {
            alert("created");
        }, function (err) { return alert("Hi"); });
    };
    return CreateContentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__model_createContent_module__["a" /* CreateContent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__model_createContent_module__["a" /* CreateContent */]) === "function" && _a || Object)
], CreateContentComponent.prototype, "contents", void 0);
CreateContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-createcontent',
        template: __webpack_require__(250),
        styles: [__webpack_require__(233)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_createContent_services__["a" /* createContentServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_createContent_services__["a" /* createContentServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_createContent_services__["a" /* createContentServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CreateContentComponent);

var _a, _b, _c;
//# sourceMappingURL=createContent.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_viewContent_services__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return viewContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var viewContentComponent = (function () {
    function viewContentComponent(_viewContentServices, formBuilder) {
        this._viewContentServices = _viewContentServices;
        this.formBuilder = formBuilder;
        this.username = localStorage.getItem('currentUser');
        this.userid = localStorage.getItem('currentUserid');
    }
    viewContentComponent.prototype.ngOnInit = function () {
        this.viewcontent();
        $(function () {
            $("#startD").datepicker();
        });
    };
    viewContentComponent.prototype.viewcontent = function () {
        var _this = this;
        this._viewContentServices.loadcontentModel(this.userid).subscribe(function (res) { return _this.Contents = res; });
    };
    viewContentComponent.prototype.editContent = function (contentid) {
        alert(contentid);
    };
    return viewContentComponent;
}());
viewContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-viewcontent',
        template: __webpack_require__(251),
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_viewContent_services__["a" /* viewContentServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_viewContent_services__["a" /* viewContentServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object])
], viewContentComponent);

var _a, _b;
//# sourceMappingURL=viewContent.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(router) {
        this.router = router;
        this.username = localStorage.getItem('currentUser');
        this.userid = localStorage.getItem('currentUserid');
        if (this.userid) {
            this.showMenu = true;
        }
        else {
            this.showMenu = false;
            this.router.navigate(["/login"]);
        }
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(["/login"]);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(252),
        styles: [__webpack_require__(235)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_createEvent_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_createEvent_services__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewEventComponent = (function () {
    function ViewEventComponent(_eventservices, _activatedRoute) {
        this._eventservices = _eventservices;
        this._activatedRoute = _activatedRoute;
        this.termCondition = [];
        this.ticket = [];
        this.viewEvent = new __WEBPACK_IMPORTED_MODULE_1__model_createEvent_module__["a" /* CreateEvent */]();
        this.userid = localStorage.getItem('currentUserid');
    }
    ViewEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.editEvent();
    };
    ViewEventComponent.prototype.editEvent = function () {
        //alert(this.id); 
        //alert(btoa(this.id));
        //alert(atob("NTA="));
        var _this = this;
        var otherdetails = [];
        var ticket_details = [];
        var term_cond = [];
        this._eventservices.getEventDetails(this.id).subscribe(function (res) {
            for (var key in res) {
                if (key == 'ticket_detail') {
                    _this.ticketdetails(res[key]);
                    res['ticket_detail'] = "";
                }
                else if (key == 'terms_cond1') {
                    _this.termcondition(res[key]);
                    res['terms_cond1'] = "";
                }
                else {
                    otherdetails.push(res);
                }
            }
            _this.viewEvent = res;
            _this.term_cond1 = term_cond;
            _this.ticket_details1 = ticket_details;
            _this.otherdetails1 = otherdetails;
            //alert(JSON.stringify(this.viewEvent));
        });
    };
    ViewEventComponent.prototype.Create = function (eventt) {
        alert(JSON.stringify(eventt));
    };
    ViewEventComponent.prototype.termcondition = function (term_cond) {
        if (term_cond) {
            var data = JSON.parse(term_cond);
            var lenght = data.length;
            for (var i = 0; i < lenght; i++) {
                this.termCondition.push(data[i]);
            }
        }
        else {
            this.termCondition.push({ 'term': '' });
        }
    };
    ViewEventComponent.prototype.ticketdetails = function (ticket_data) {
        //alert(JSON.stringify(ticket_data));
        if (ticket_data) {
            var tdata = JSON.parse(ticket_data);
            var tlenght = tdata.length;
            for (var j = 0; j < tlenght; j++) {
                this.ticket.push(tdata[j]);
            }
        }
        else {
            this.ticket.push({ 'ticket_name': '', 'ticket_price': '', 'number': '' });
        }
    };
    return ViewEventComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_createEvent_module__["a" /* CreateEvent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_createEvent_module__["a" /* CreateEvent */]) === "function" && _a || Object)
], ViewEventComponent.prototype, "event", void 0);
ViewEventComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-viewevent',
        template: __webpack_require__(253),
        styles: [__webpack_require__(236)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_createEvent_services__["a" /* createEventServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_createEvent_services__["a" /* createEventServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_createEvent_services__["a" /* createEventServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ViewEventComponent);

var _a, _b, _c;
//# sourceMappingURL=viewEvent.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_createEvent_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_createEvent_services__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateEventComponent = (function () {
    function CreateEventComponent(_event, router, http, _fb) {
        this._event = _event;
        this.router = router;
        this.http = http;
        this._fb = _fb;
        this.sportslist = {};
        this.ticket = {};
        this.terms_cond1 = {};
        this.responseStatus = [];
        // addArray(newName:string) {
        //        const control = <FormArray>this.myForm.controls['myArray'];
        //        this.myGroupName.push(newName);
        //        control.push(this.initArray(newName));
        //    }
        //
        //  removeDataKey(i: number) {
        //       const control = <FormArray>this.myForm.controls['myArray'];
        //       control.removeAt(i);
        //       this.myGroupName.splice(i,1);
        //    }
        //     inittermArray(nameObj:any) {
        //
        //      return  this._fb.group({  
        //                [nameObj]: this._fb.group({
        //            
        //                          term : [''],
        //                          
        //                    })
        //                })  
        //    }
        //
        // addtermArray(newTerm:string) {
        //        const control = <FormArray>this.termForm.controls['myArray'];
        //        this.termCondition.push(newTerm);
        //        control.push(this.inittermArray(newTerm));
        //
        //           
        //    }
        //
        //  removeterm(i: number) {
        //       const control = <FormArray>this.termForm.controls['myArray'];
        //       control.removeAt(i);
        //       this.termCondition.splice(i,1);
        //    }
        //     public myForm12: FormGroup;
        this.termCondition = [{ 'term': '' }];
        this.ticketdetials = [{ 'ticket_name': '', 'ticket_price': '', 'number': '' }];
    }
    CreateEventComponent.prototype.ngOnInit = function () {
        this.myVar = false;
        this.Sportlist();
        this.events = new __WEBPACK_IMPORTED_MODULE_5__model_createEvent_module__["a" /* CreateEvent */]();
        this.events.id = "0";
        //    this.myForm = this._fb.group({
        //            myArray: this._fb.array([
        //                this._fb.group({  
        //                   ticket: this._fb.group({
        //                            TName:[''],Price:[''],Number:[''],})
        //                }), 
        //            ])
        //        }); 
        //    this.termForm = this._fb.group({
        //            myArray: this._fb.array([
        //                this._fb.group({  
        //                   term: this._fb.group({
        //                            term:[''],
        //                            
        //                     
        //                    })
        //                }), 
        //
        //            ])
        //        });
    };
    CreateEventComponent.prototype.Create = function (events) {
        this.myVar = true;
        var inputValue = document.getElementById("myValue").value;
        this.events.ticket_detail = inputValue;
        this.events.userid = localStorage.getItem('currentUserid');
        this.events.id = "0";
        var termvalue = document.getElementById("terms_cond_value1").value;
        this.events.terms_cond1 = termvalue;
        var startdate = document.getElementById("startD").value;
        this.events.start_date = startdate;
        var enddate = document.getElementById("endD").value;
        this.events.end_date = enddate;
        //alert(JSON.stringify(this.events));
        this._event.saveEvent(this.events);
    };
    CreateEventComponent.prototype.Sportlist = function () {
        var _this = this;
        this._event.Sportlist().subscribe(function (data) {
            _this.sports = data;
            console.log(_this.sports);
        });
    };
    CreateEventComponent.prototype.handleFileSelect = function (evt) {
        this.myVar = true;
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    CreateEventComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var _this = this;
        var binaryString = readerEvt.target.result;
        // this._event.uploadimage(btoa(binaryString));
        this._event.uploadimage(btoa(binaryString)).subscribe(function (data) {
            _this.events.image = data;
            _this.myVar = false;
        });
    };
    CreateEventComponent.prototype.initArray = function (nameObj) {
        return this._fb.group((_a = {},
            _a[nameObj] = this._fb.group({
                TName: [''],
                Price: [''],
                Number: [''],
            }),
            _a));
        var _a;
    };
    CreateEventComponent.prototype.addNewRow = function () {
        this.termCondition.push({ 'term': '' });
    };
    CreateEventComponent.prototype.addNewticket = function () {
        this.ticketdetials.push({ 'ticket_name': '', 'ticket_price': '', 'number': '' });
    };
    return CreateEventComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__model_createEvent_module__["a" /* CreateEvent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__model_createEvent_module__["a" /* CreateEvent */]) === "function" && _a || Object)
], CreateEventComponent.prototype, "events", void 0);
CreateEventComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["f" /* Injectable */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_15" /* Component */])({
        selector: 'app-createevent',
        template: __webpack_require__(254),
        styles: [__webpack_require__(237)],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_createEvent_services__["a" /* createEventServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_createEvent_services__["a" /* createEventServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_createEvent_services__["a" /* createEventServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _e || Object])
], CreateEventComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=createEvent.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_createEvent_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_createEvent_services__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditEventComponent = (function () {
    function EditEventComponent(_eventservices, _activatedRoute) {
        this._eventservices = _eventservices;
        this._activatedRoute = _activatedRoute;
        this.termCondition = [];
        this.ticket = [];
        this.viewEvent = new __WEBPACK_IMPORTED_MODULE_1__model_createEvent_module__["a" /* CreateEvent */]();
        this.userid = localStorage.getItem('currentUserid');
    }
    EditEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) { _this.id = +params['id']; });
        this.editEvent();
    };
    EditEventComponent.prototype.editEvent = function () {
        //alert(this.id); 
        //alert(btoa(this.id));
        //alert(atob("NTA="));
        var _this = this;
        var otherdetails = [];
        var ticket_details = [];
        var term_cond = [];
        this._eventservices.getEventDetails(this.id).subscribe(function (res) {
            for (var key in res) {
                if (key == 'ticket_detail') {
                    _this.oldticket(res[key]);
                }
                else if (key == 'terms_cond1') {
                    _this.oldtermcond(res[key]);
                }
                else {
                    otherdetails.push(res);
                }
            }
            _this.viewEvent = res;
        });
    };
    EditEventComponent.prototype.Create = function (event) {
        this.myVar = true;
        var inputValue = document.getElementById("ticketdetails").value;
        if (inputValue) {
            this.viewEvent.ticket_detail = inputValue;
        }
        else {
            this.viewEvent.ticket_detail = JSON.stringify(this.ticket);
            //this.viewEvent.ticket_detail =  inputValue;
        }
        var termvalue = document.getElementById("terms_cond_value").value;
        if (termvalue) {
            this.viewEvent.terms_cond1 = termvalue;
        }
        else {
            this.viewEvent.terms_cond1 = JSON.stringify(this.termCondition);
        }
        var startdate = document.getElementById("startD").value;
        var enddate = document.getElementById("endD").value;
        this.viewEvent.start_date = startdate;
        this.viewEvent.end_date = enddate;
        //alert(JSON.stringify(event));
        this._eventservices.saveEvent(event);
    };
    EditEventComponent.prototype.addNewRow = function () {
        this.termCondition.push({ 'term': '' });
    };
    EditEventComponent.prototype.addNewticket = function () {
        this.ticket.push({ 'ticket_name': '', 'ticket_price': '', 'number': '' });
    };
    EditEventComponent.prototype.oldtermcond = function (term_cond) {
        if (term_cond) {
            var data = JSON.parse(term_cond);
            var lenght = data.length;
            for (var i = 0; i < lenght; i++) {
                this.termCondition.push(data[i]);
            }
        }
        else {
            this.termCondition.push({ 'term': '' });
        }
    };
    EditEventComponent.prototype.oldticket = function (ticket_data) {
        if (ticket_data) {
            var tdata = JSON.parse(ticket_data);
            var tlenght = tdata.length;
            for (var j = 0; j < tlenght; j++) {
                this.ticket.push(tdata[j]);
            }
        }
        else {
            this.ticket.push({ 'ticket_name': '', 'ticket_price': '', 'number': '' });
        }
    };
    EditEventComponent.prototype.handleFileSelect = function (evt) {
        this.myVar = true;
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    EditEventComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var _this = this;
        var binaryString = readerEvt.target.result;
        // this._event.uploadimage(btoa(binaryString));
        this._eventservices.uploadimage(btoa(binaryString)).subscribe(function (data) {
            _this.viewEvent.image = data;
            _this.myVar = false;
        });
    };
    return EditEventComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_createEvent_module__["a" /* CreateEvent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_createEvent_module__["a" /* CreateEvent */]) === "function" && _a || Object)
], EditEventComponent.prototype, "event", void 0);
EditEventComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-editevent',
        template: __webpack_require__(255),
        styles: [__webpack_require__(238)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_createEvent_services__["a" /* createEventServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_createEvent_services__["a" /* createEventServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_createEvent_services__["a" /* createEventServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], EditEventComponent);

var _a, _b, _c;
//# sourceMappingURL=editEvent.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_createEvent_services__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventComponent = (function () {
    function EventComponent(_eventservices, _router) {
        this._eventservices = _eventservices;
        this._router = _router;
        this.userid = localStorage.getItem('currentUserid');
    }
    EventComponent.prototype.ngOnInit = function () {
        this.getCreateEventList();
    };
    EventComponent.prototype.getCreateEventList = function () {
        var _this = this;
        this._eventservices.getCreateEventList(this.userid).subscribe(function (res) { _this.Event = res; });
    };
    EventComponent.prototype.editEvent = function (id) {
        // alert(btoa(id));
        this.para = btoa(id);
        //alert(atob("NTA="));
        this._router.navigate(["/editEvent", id]);
    };
    return EventComponent;
}());
EventComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-event',
        template: __webpack_require__(256),
        styles: [__webpack_require__(239)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_createEvent_services__["a" /* createEventServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_createEvent_services__["a" /* createEventServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_createEvent_services__["a" /* createEventServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], EventComponent);

var _a, _b;
//# sourceMappingURL=event.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_createEvent_services__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_job_services__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(_router, _eventservices, _jobservices) {
        this._router = _router;
        this._eventservices = _eventservices;
        this._jobservices = _jobservices;
        this.userid = localStorage.getItem('currentUserid');
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getEventList();
        this.getJobList();
    };
    HomeComponent.prototype.getJobList = function () {
        var _this = this;
        this._jobservices.getJobList(this.userid).subscribe(function (res) { _this.Job = res; });
    };
    HomeComponent.prototype.getEventList = function () {
        var _this = this;
        this._eventservices.getEventList(this.userid).subscribe(function (res) { _this.Event = res; });
    };
    HomeComponent.prototype.viewjob = function () {
        this._router.navigate(["/editJob", 25]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(257),
        styles: [__webpack_require__(240)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_createEvent_services__["a" /* createEventServices */], __WEBPACK_IMPORTED_MODULE_3__services_job_services__["a" /* JobServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_createEvent_services__["a" /* createEventServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_createEvent_services__["a" /* createEventServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_job_services__["a" /* JobServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_job_services__["a" /* JobServices */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_job_model__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_job_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobComponent = (function () {
    function JobComponent(_JobServices, _http) {
        this._JobServices = _JobServices;
        this._http = _http;
        this.Job = new __WEBPACK_IMPORTED_MODULE_0__model_job_model__["a" /* JobModule */]();
    }
    JobComponent.prototype.ngOnInit = function () {
        this.myVar = false;
        this.Job.userid = localStorage.getItem('currentUserid');
        this.Job.id = "0";
        this.Sportlist();
    };
    JobComponent.prototype.CreateJob = function (job) {
        this._JobServices.CreatJob(job);
    };
    JobComponent.prototype.handleFileSelect = function (evt) {
        this.myVar = true;
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    JobComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var _this = this;
        var binaryString = readerEvt.target.result;
        // this.uploadimage(btoa(binaryString));
        this._JobServices.uploadimage(btoa(binaryString)).subscribe(function (data) {
            _this.Job.image = data;
            _this.myVar = false;
        });
    };
    // uploadimage(binaryString)
    // {
    // this._http.post('http://localhost/testingapp/angularapi.php?act=upload', binaryString)
    // .map(res => res.json())
    // .catch(error => Observable.throw(error))
    // .subscribe(
    //     data => {
    //     this.Job.image = data;
    //    },
    //    error => console.log(error)
    //  ) }
    JobComponent.prototype.Sportlist = function () {
        var _this = this;
        this._JobServices.Sportlist().subscribe(function (data) {
            _this.sports = data;
            console.log(_this.sports);
        });
    };
    return JobComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__model_job_model__["a" /* JobModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__model_job_model__["a" /* JobModule */]) === "function" && _a || Object)
], JobComponent.prototype, "Job", void 0);
JobComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_15" /* Component */])({
        selector: 'app-job',
        template: __webpack_require__(258),
        styles: [__webpack_require__(241)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_job_services__["a" /* JobServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_job_services__["a" /* JobServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_job_services__["a" /* JobServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _c || Object])
], JobComponent);

var _a, _b, _c;
//# sourceMappingURL=job.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_job_model__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_job_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditJobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditJobComponent = (function () {
    function EditJobComponent(_activatedRoute, _JobServices) {
        this._activatedRoute = _activatedRoute;
        this._JobServices = _JobServices;
        //public job  : JobModule;
        this.Job = new __WEBPACK_IMPORTED_MODULE_1__model_job_model__["a" /* JobModule */]();
    }
    EditJobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.myVar = false;
        });
        //alert(this.id);
        this.getJobdetails();
    };
    EditJobComponent.prototype.getJobdetails = function () {
        var _this = this;
        this._JobServices.getJobdetails(this.id).subscribe(function (res) { _this.Job = res; });
    };
    EditJobComponent.prototype.CreateJob = function (job) {
        this.myVar = true;
        //alert(JSON.stringify(job));
        this._JobServices.CreatJob(job);
    };
    EditJobComponent.prototype.handleFileSelect = function (evt) {
        this.myVar = true;
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    EditJobComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var _this = this;
        var binaryString = readerEvt.target.result;
        // this.uploadimage(btoa(binaryString));
        this._JobServices.uploadimage(btoa(binaryString)).subscribe(function (data) {
            _this.Job.image = data;
            _this.myVar = false;
        });
    };
    return EditJobComponent;
}());
EditJobComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-editjob',
        template: __webpack_require__(259),
        styles: [__webpack_require__(242)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_job_services__["a" /* JobServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_job_services__["a" /* JobServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_job_services__["a" /* JobServices */]) === "function" && _b || Object])
], EditJobComponent);

var _a, _b;
//# sourceMappingURL=editJob.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_job_model__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_job_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewJob; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewJob = (function () {
    function ViewJob(_activatedRoute, _JobServices) {
        this._activatedRoute = _activatedRoute;
        this._JobServices = _JobServices;
        this.Job = new __WEBPACK_IMPORTED_MODULE_1__model_job_model__["a" /* JobModule */]();
    }
    ViewJob.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        //alert(this.id);
        this.getJobdetails();
    };
    ViewJob.prototype.getJobdetails = function () {
        var _this = this;
        this._JobServices.getJobdetails(this.id).subscribe(function (res) { _this.Job = res; });
    };
    return ViewJob;
}());
ViewJob = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-viewjob',
        template: __webpack_require__(260),
        styles: [__webpack_require__(243)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_job_services__["a" /* JobServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_job_services__["a" /* JobServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_job_services__["a" /* JobServices */]) === "function" && _b || Object])
], ViewJob);

var _a, _b;
//# sourceMappingURL=viewJob.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=login.model.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_iconfig__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_iconfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__app_iconfig__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return viewContentServices; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var viewContentServices = (function () {
    function viewContentServices(_http, _config) {
        this._http = _http;
        this._config = _config;
        this.baseUrl = this._config.apBaseUrl;
    }
    viewContentServices.prototype.loadcontentModel = function (id) {
        return this._http.get(this.baseUrl + "/angularapi.php?act=contentangularlex" + "&userid=" + id)
            .map(function (res) { return res.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return viewContentServices;
}());
viewContentServices = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__app_iconfig__["IAppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__app_iconfig__["IAppConfig"]) === "function" && _b || Object])
], viewContentServices);

var _a, _b;
//# sourceMappingURL=viewContent.services.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TournamentComponent = (function () {
    function TournamentComponent() {
        this.title = 'My First Angular App';
    }
    TournamentComponent.prototype.ngOnInit = function () {
    };
    return TournamentComponent;
}());
TournamentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-tournament',
        template: __webpack_require__(261),
        styles: [__webpack_require__(244)]
    }),
    __metadata("design:paramtypes", [])
], TournamentComponent);

//# sourceMappingURL=tournament.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_login_model__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_services__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(fb, _accountService, router) {
        this.fb = fb;
        this._accountService = _accountService;
        this.router = router;
        this.loginModel = new __WEBPACK_IMPORTED_MODULE_1__model_login_model__["a" /* User */]();
        this.userid = localStorage.getItem('currentUserid');
        this.form = fb.group({
            email: [''],
            password: ['']
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.userid) {
            this.router.navigate(["/home"]);
        }
    };
    /**
     * Login method, authenticates user is authorized or not
     * @returns void
     */
    LoginComponent.prototype.login = function () {
        var formData = this.form.value;
        this._accountService.login(formData);
    };
    LoginComponent.prototype.logout = function () {
        localStorage.clear();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(262),
        styles: [__webpack_require__(245)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_services__["a" /* loginServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_services__["a" /* loginServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_login_model__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_services__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(fb, _accountService, _router, route) {
        this.fb = fb;
        this._accountService = _accountService;
        this._router = _router;
        this.route = route;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__model_login_model__["a" /* User */]();
        this.headerdetails = new __WEBPACK_IMPORTED_MODULE_3__model_login_model__["a" /* User */]();
        this.userid = localStorage.getItem('currentUserid');
        this.formalEducation = [];
        this.otherCertification = [];
        this.sportEducation = [];
        this.experienceAsPlayer = [];
        this.workExperience = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.profile();
    };
    ProfileComponent.prototype.profile = function () {
        var _this = this;
        this._accountService.profiledata(this.userid).then(function (result) {
            for (var key in result) {
                if (key == "user") {
                    _this.user = result[key];
                }
                else if (key == "HeaderDetails") {
                    _this.headerdetails = result[key];
                }
                else {
                    if (result.hasOwnProperty(key)) {
                        for (var key1 in result[key]) {
                            if (result[key].hasOwnProperty(key1)) {
                                if (key1 == "formalEducation") {
                                    _this.formalEducationdata(result[key][key1]);
                                }
                                else if (key1 == "otherCertification") {
                                    _this.otherCertificationdata(result[key][key1]);
                                }
                                else if (key1 == "sportEducation") {
                                    _this.sportEducationdata(result[key][key1]);
                                }
                                else if (key1 == "experienceAsPlayer") {
                                    _this.experienceAsPlayerdata(result[key][key1]);
                                }
                                else if (key1 == "workExperience") {
                                    _this.workExperiencedata(result[key][key1]);
                                }
                                else {
                                    //alert(JSON.stringify(result[key]));
                                }
                            }
                        }
                    }
                }
            }
        });
    };
    ProfileComponent.prototype.formalEducationdata = function (formal_data) {
        if (formal_data) {
            var formal_lenght = formal_data.length;
            for (var i = 0; i < formal_lenght; i++) {
                this.formalEducation.push(formal_data[i]);
            }
        }
    };
    ProfileComponent.prototype.sportEducationdata = function (sport_data) {
        if (sport_data) {
            var sport_lenght = sport_data.length;
            for (var j = 0; j < sport_lenght; j++) {
                this.sportEducation.push(sport_data[j]);
            }
        }
    };
    ProfileComponent.prototype.otherCertificationdata = function (other_data) {
        if (other_data) {
            var other_length = other_data.length;
            for (var i = 0; i < other_length; i++) {
                this.otherCertification.push(other_data[i]);
            }
        }
    };
    ProfileComponent.prototype.workExperiencedata = function (work_data) {
        if (work_data) {
            var work_length = work_data.length;
            for (var i = 0; i < work_length; i++) {
                this.workExperience.push(work_data[i]);
            }
        }
    };
    ProfileComponent.prototype.experienceAsPlayerdata = function (exp_data) {
        if (exp_data) {
            var exp_length = exp_data.length;
            for (var i = 0; i < exp_length; i++) {
                this.experienceAsPlayer.push(exp_data[i]);
            }
        }
    };
    return ProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__model_login_model__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__model_login_model__["a" /* User */]) === "function" && _a || Object)
], ProfileComponent.prototype, "userdata", void 0);
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__(263),
        styles: [__webpack_require__(246)],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_login_services__["a" /* loginServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_login_services__["a" /* loginServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationComponent = (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('select').material_select();
        });
        $('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 100,
            format: 'dd/mm/yyyy',
            min: 0,
            max: true,
            closeOnSelect: true,
            closeOnClear: true,
        });
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(264),
        styles: [__webpack_require__(247)]
    }),
    __metadata("design:paramtypes", [])
], RegistrationComponent);

//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 168;


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(174);



if (!/localhost/.test(document.location.host)) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_router__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_event_event_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_tournament_tournament_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_job_createJob_job_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_content_view_content_viewContent_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_services_viewContent_services__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_content_create_content_createContent_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_event_createevent_createEvent_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_useraccount_login_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_services_login_services__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_dashboard_dashboard_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_useraccount_registration_registration_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_useraccount_profile_profile_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__userdata_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_event_ViewEvent_viewEvent_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_job_editJob_editJob_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_event_editEvent_editEvent_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_job_viewJob_viewJob_component__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_event_event_component__["a" /* EventComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_tournament_tournament_component__["a" /* TournamentComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_22__userdata_component__["a" /* UserdataComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_useraccount_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_useraccount_registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_content_create_content_createContent_component__["a" /* CreateContentComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_event_createevent_createEvent_component__["a" /* CreateEventComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_useraccount_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_content_view_content_viewContent_component__["a" /* viewContentComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_job_createJob_job_component__["a" /* JobComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_job_editJob_editJob_component__["a" /* EditJobComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_event_editEvent_editEvent_component__["a" /* EditEventComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_event_ViewEvent_viewEvent_component__["a" /* ViewEventComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_job_viewJob_viewJob_component__["a" /* ViewJob */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_router__["a" /* routes */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__components_services_viewContent_services__["a" /* viewContentServices */], __WEBPACK_IMPORTED_MODULE_18__components_services_login_services__["a" /* loginServices */],
            [{ provide: __WEBPACK_IMPORTED_MODULE_7__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* HashLocationStrategy */] }],
            [{ provide: __WEBPACK_IMPORTED_MODULE_14__app_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_14__app_config__["b" /* AppConfig */] }]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_event_event_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tournament_tournament_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_content_view_content_viewContent_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_content_create_content_createContent_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_event_createevent_createEvent_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_useraccount_login_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_job_createJob_job_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_useraccount_registration_registration_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_useraccount_profile_profile_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_event_ViewEvent_viewEvent_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_job_editJob_editJob_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_event_editEvent_editEvent_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_job_viewJob_viewJob_component__ = __webpack_require__(111);
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });

















var router = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_useraccount_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'event', component: __WEBPACK_IMPORTED_MODULE_2__components_event_event_component__["a" /* EventComponent */] },
    { path: 'tournament', component: __WEBPACK_IMPORTED_MODULE_3__components_tournament_tournament_component__["a" /* TournamentComponent */] },
    { path: 'contentview', component: __WEBPACK_IMPORTED_MODULE_5__components_content_view_content_viewContent_component__["a" /* viewContentComponent */] },
    { path: 'createcontent', component: __WEBPACK_IMPORTED_MODULE_6__components_content_create_content_createContent_component__["a" /* CreateContentComponent */] },
    { path: 'createevent', component: __WEBPACK_IMPORTED_MODULE_7__components_event_createevent_createEvent_component__["a" /* CreateEventComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_11__components_useraccount_registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_useraccount_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'job', component: __WEBPACK_IMPORTED_MODULE_9__components_job_createJob_job_component__["a" /* JobComponent */] },
    { path: 'viewEvent/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_event_ViewEvent_viewEvent_component__["a" /* ViewEventComponent */] },
    { path: 'editJob/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_job_editJob_editJob_component__["a" /* EditJobComponent */] },
    { path: 'editEvent/:id', component: __WEBPACK_IMPORTED_MODULE_15__components_event_editEvent_editEvent_component__["a" /* EditEventComponent */] },
    { path: 'viewjob/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_job_viewJob_viewJob_component__["a" /* ViewJob */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(router);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateContent; });
var CreateContent = (function () {
    function CreateContent() {
    }
    return CreateContent;
}());

//# sourceMappingURL=createContent.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__xhr_headers__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_iconfig__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_iconfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__app_iconfig__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createContentServices; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var createContentServices = (function () {
    function createContentServices(_http, _config) {
        this._http = _http;
        this._config = _config;
        this.baseUrl = this._config.apBaseUrl;
    }
    createContentServices.prototype.saveContent = function (contents) {
        return this._http.post(this.baseUrl + "/angularapi.php?act=createcontent", contents, __WEBPACK_IMPORTED_MODULE_4__xhr_headers__["a" /* xhrHeaders */]).map(function (res) { return res.json(); });
    };
    createContentServices.prototype.signup = function (contents) {
        return this._http.post(this.baseUrl + "/angularapi.php?act=createcontent", contents)
            .map(function (res) { return res.json(); })
            .map(function (user) {
            alert("asdf");
        }).toPromise();
    };
    return createContentServices;
}());
createContentServices = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__app_iconfig__["IAppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_iconfig__["IAppConfig"]) === "function" && _b || Object])
], createContentServices);

var _a, _b;
//# sourceMappingURL=createContent.services.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserdataComponent = (function () {
    function UserdataComponent() {
    }
    UserdataComponent.prototype.ngOnInit = function () {
    };
    return UserdataComponent;
}());
UserdataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-userdata',
        template: __webpack_require__(265),
        styles: [__webpack_require__(248)]
    }),
    __metadata("design:paramtypes", [])
], UserdataComponent);

//# sourceMappingURL=userdata.component.js.map

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".brand-logo{\n\tmargin-left:50px;\n}\n.mr50{\n\tmargin-right: 50px;\n}\n.mr1{\n\tmargin-right: 1%;\n}\n@media only screen and (max-width: 992px)\n{\nnav .brand-logo {\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    margin-left: 0px;\n}\n}\n\n.nav-wrapper{\n\tbackground-color: #27A7FF;\n}\n\n.ml20{\n\tmargin-left: 20px;\n}\n\n.tabs .tab a:hover, .tabs .tab a.active{\n  color: white;\n}\n.tabs .indicator {\n    \n    background-color: rgb(43, 209, 226);\n    height:3px;\n    \n}\n.input-field label{\n\tcolor:#01579b;\n}\n.tabs{\n\tbackground-color: rgba(30, 30, 30, 0.88);\n\n}\n.tabs .tab a{\n\tcolor: rgba(255, 255, 255, 0.57);\n}\n.tabs .tab{\n\tmargin:0 15px 0px 15px;\n}\n.btn1,.btn1:hover,.btn1:focus{\n\tbackground-color: #01579b;\n\n}\n.backform{\n\t    background-color: rgba(0, 0, 0, 0.10)!important;\n       margin-top: -20px;\n    padding-top: 20px;\n}\n.create{\n\t    font-size: 40px;\n    font-family: 'Slabo 27px', serif;\n    font-weight:600;\n}\n.fs30{\n\t    font-size: 30px;\n}\n.pd50{\n\tpadding-left: 50px;\n\tbackground-color: #f2f2f2\n}\n.backform1{\n\t    background-color: rgba(0, 0, 0, 0.10)!important;\n       margin-top: -20px;\n    padding-top: 20px;\n    padding-bottom: 45px;\n}\n.side-nav{\n\twidth:230px;\n}\n.border{\n\tborder:2px solid black;\n}\n\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 14px;\n  color: #FFF;\n}\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%;\n}\n.loginBtn:focus {\n  outline: none;\n}\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\n}\n\n\n/* Facebook */\n.loginBtn--facebook {\n  background-color: #4C69BA;\n  background-image: linear-gradient(#4C69BA, #3B55A0);\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #354C8C;\n}\n.loginBtn--facebook:before {\n  border-right: #364e92 1px solid;\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\n}\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1);\n}\n.side-nav li>a {\n    color: rgba(255, 255, 255, 0.7);\n    display: block;\n    font-size: 14px;\n    font-weight: 500;\n    height: 48px;\n    line-height: 48px;\n    padding: 0 32px;\n}\n\n.side-nav li>a:hover {\n    background-color: rgba(0, 0, 0, 0.25);\n    color: white;\n}\n\n/* Google */\n.loginBtn--google {\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n  background: #DD4B39;\n}\n.loginBtn--google:before {\n  border-right: #BB3F30 1px solid;\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\n}\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37;\n}\n\n.input-field1{\n\t    margin-top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n\n\n.input {\n  position: relative;\n  z-index: 1;\n  display: inline-block;\n  margin: 5px;\n  width: calc(100% - 2em);\n  vertical-align: top;\n}\n\n.input__field {\n  position: relative;\n  display: block;\n  float: right;\n  padding: 0.8em;\n  width: 60%;\n  border: none;\n  border-radius: 0;\n  background: #f0f0f0;\n  color: #aaa;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-appearance: none; /* for box shadows to show on iOS */\n}\n\n.input__field:focus {\n  outline: none;\n}\n\n.input__label {\n  display: inline-block;\n  float: right;\n  padding: 0 1em;\n  width: 40%;\n  color: #717070;\n  font-weight: 100;\n  font-size: 70.25%;\n  -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-size: 14px;\n}\n\n.input__label-content {\n  position: relative;\n  display: block;\n  padding: 1.6em 0;\n  width: 100%;\n}\n\n.graphic {\n  position: absolute;\n  top: 0;\n  left: 0;\n  fill: none;\n}\n\n.icon {\n  color: #ddd;\n  font-size: 150%;\n}\n/* Hoshi */\n.input--hoshi {\n  overflow: hidden;\n \n}\n\n.input__field--hoshi {\n  margin-top: 1em;\n  padding: 0.85em 0.15em;\n  width: 100%;   \n  background: transparent;\n  color: #312a2a;\n   font-size: 19.5px;\n}\n\n.input__label--hoshi {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0 0.25em;\n  width: 100%;\n  height: calc(100% - 1em);\n  text-align: left;\n  pointer-events: none;\n  font-size: 14px;\n}\n\n.input__label-content--hoshi {\n  position: absolute;\n}\n\n.input__label--hoshi::before,\n.input__label--hoshi::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 10px);\n  border-bottom: 1px solid #B9C1CA;\n}\n\n.input__label--hoshi::after {\n  \n  border-bottom: 1px solid red;\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.input__label--hoshi-color-1::after {\n  border-color: #5f5d5d;\n}\n\n\n.input__field--hoshi:focus + .input__label--hoshi::after,\n.input--filled .input__label--hoshi::after {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n\n}\n\n.input__field--hoshi:focus + .input__label--hoshi .input__label-content--hoshi,\n.input--filled .input__label-content--hoshi {\n  -webkit-animation: anim-1 0.3s forwards;\n  animation: anim-1 0.3s forwards;\n}\n\n@-webkit-keyframes anim-1 {\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(1em, 0, 0);\n    transform: translate3d(1em, 0, 0);\n  }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-1em, -40%, 0);\n    transform: translate3d(-1em, -40%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -40%, 0);\n    transform: translate3d(0, -40%, 0);\n  }\n}\n\n@keyframes anim-1 {\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(1em, 0, 0);\n    transform: translate3d(1em, 0, 0);\n  }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-1em, -40%, 0);\n    transform: translate3d(-1em, -40%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -40%, 0);\n    transform: translate3d(0, -40%, 0);\n  }\n}\n.nooutline:focus{\n\toutline:none;\n}\na{\n    color: white;\n    background-color: #09c4e4;\n    text-decoration: none;\n}\n.nav-tabs{\n\tborder-bottom:none;\n  display: -webkit-box;\n}\n.nav>li{\n\t    display: -webkit-inline-box;\n}\n.nav-tabs>li>a {\n\nborder-radius: 2.5px;\nborder:none;\ntext-align: -webkit-center;\nwidth: 100%;\n    font-size: 14px;\n\t}\n @media screen and (max-width: 450px) {\n .nav-tabs>li>a {\n\n    font-size: 10px;\n  }\n}\n\t.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {\n    color: white;\n    cursor: default;\n    background-color: #03A9F4;\n    border: none; \n   \n    border-bottom-color: transparent;\n    box-shadow: inset 0 -10px 10px -11px #5d5b5b;\n}\n.nav-tabs>li>a:hover {\n    /* border-color: #eee #eee #ddd; */\n    background-color: #4acee4;\n    color: white;\n}\n.box1{\n   \n    border-bottom: none;\n    padding: 10px;\n   \n    margin-bottom: 20px;\n    background-color: #fff;\n   border-radius: 4px 4px 0px 0px;\n    box-shadow: 0 0px 0px rgba(0,0,0,.05);\n}\n.mr5{\n\t    margin-left: 5px;\n\n}\n.pd0{\n\tpadding-right: 0px;\n\tpadding-left: 0px;\n}\n.nav-tabs>li {\n \n    width: 33.14%;\n    margin-right: 0.25%;\n\n\t}\n\t.wd60{\n\t\twidth: 50%;\n\t}\n\t.fr{\n\t\tfloat: right;\n\t}\n\t.fl{\n\t\tfloat: left;\n\t}\n  .files1{\n        position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".card {\n    margin-top: 20px; \n    padding: 30px;\n    background-color: rgba(214, 224, 226, 0.2);\n    -moz-border-top-left-radius:5px;\n    border-top-left-radius:5px;\n    -moz-border-top-right-radius:5px;\n    border-top-right-radius:5px;\n    box-sizing: border-box;\n}\n.card.hovercard {\n    position: relative;\n    padding-top: 0;\n    overflow: hidden;\n    text-align: center;\n    background-color: #fff;\n    background-color: rgba(255, 255, 255, 1);\n       background-color: #efefef;\n}\n.card.hovercard .card-background {\n    height: 130px;\n\n}\n.card-background img {\n    -webkit-filter: blur(25px);\n    -moz-filter: blur(25px);\n    -o-filter: blur(25px);\n    -ms-filter: blur(25px);\n    filter: blur(25px);\n    margin-left: -100px;\n    margin-top: -200px;\n    min-width: 130%;\n}\n.card.hovercard .useravatar {\n    position: absolute;\n    top: 15px;\n    left: 0;\n    right: 0;\n\n}\n.card.hovercard .useravatar img {\n    width: 100px;\n    height: 100px;\n    max-width: 100px;\n    max-height: 100px;\n    border-radius: 50%;\n    border: 5px solid rgba(255, 255, 255, 0.5);\n}\n.card.hovercard .card-info {\n    position: absolute;\n    bottom: 14px;\n    left: 0;\n    right: 0;\n}\n.card.hovercard .card-name {\n    position: absolute;\n    bottom: 0px;\n    left: 0;\n    right: 0;\n    top :140px;\n}\n.card.hovercard .card-info .card-title {\n    padding:0 5px;\n    font-size: 20px;\n    line-height: 1;\n    color: #262626;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 4px;\n}\n.card.hovercard .card-info {\n    overflow: hidden;\n    font-size: 12px;\n    line-height: 20px;\n    color: #737373;\n    text-overflow: ellipsis;\n}\n.card.hovercard .bottom {\n    padding: 0 20px;\n    margin-bottom: 17px;\n}\n.btn-pref .btn {\n    -webkit-border-radius:0 !important;\n}\n.input {\n  position: relative;\n  z-index: 1;\n  display: inline-block;\n  margin: 5px;\n  width: calc(100% - 2em);\n  vertical-align: top;\n}\n\n.input__field {\n  position: relative;\n  display: block;\n  float: right;\n  padding: 0.8em;\n  width: 60%;\n  border: none;\n  border-radius: 0;\n  background: #f0f0f0;\n  color: #aaa;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-appearance: none; /* for box shadows to show on iOS */\n}\n\n.input__field:focus {\n  outline: none;\n}\n\n.input__label {\n  display: inline-block;\n  float: right;\n  padding: 0 1em;\n  width: 40%;\n  color: #717070;\n  font-weight: 100;\n  font-size: 70.25%;\n  -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-size: 14px;\n}\n\n.input__label-content {\n  position: relative;\n  display: block;\n  padding: 1.6em 0;\n  width: 100%;\n}\n\n.graphic {\n  position: absolute;\n  top: 0;\n  left: 0;\n  fill: none;\n}\n\n.icon {\n  color: #ddd;\n  font-size: 150%;\n}\n/* Hoshi */\n.input--hoshi {\n  overflow: hidden;\n \n}\n\n.input__field--hoshi {\n  margin-top: 1em;\n  padding: 0.85em 0.15em;\n  width: 100%;   \n  background: transparent;\n  color: #312a2a;\n   font-size: 19.5px;\n}\n\n.input__label--hoshi {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0 0.25em;\n  width: 100%;\n  height: calc(100% - 1em);\n  text-align: left;\n  pointer-events: none;\n  font-size: 14px;\n}\n\n.input__label-content--hoshi {\n  position: absolute;\n}\n\n.input__label--hoshi::before,\n.input__label--hoshi::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 10px);\n  border-bottom: 1px solid #B9C1CA;\n}\n\n.input__label--hoshi::after {\n  \n  border-bottom: 1px solid red;\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.input__label--hoshi-color-1::after {\n  border-color: #5f5d5d;\n}\n\n\n.input__field--hoshi:focus + .input__label--hoshi::after,\n.input--filled .input__label--hoshi::after {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n\n}\n\n.input__field--hoshi:focus + .input__label--hoshi .input__label-content--hoshi,\n.input--filled .input__label-content--hoshi {\n  -webkit-animation: anim-1 0.3s forwards;\n  animation: anim-1 0.3s forwards;\n}\n\n@-webkit-keyframes anim-1 {\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(1em, 0, 0);\n    transform: translate3d(1em, 0, 0);\n  }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-1em, -40%, 0);\n    transform: translate3d(-1em, -40%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -40%, 0);\n    transform: translate3d(0, -40%, 0);\n  }\n}\n\n@keyframes anim-1 {\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(1em, 0, 0);\n    transform: translate3d(1em, 0, 0);\n  }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-1em, -40%, 0);\n    transform: translate3d(-1em, -40%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -40%, 0);\n    transform: translate3d(0, -40%, 0);\n  }\n}\n.btn-default {\n    color: white;\n    background-color: #2bb1ee;\n    border-color: #efefef;\n}\n.btn-default:hover{\n  color: white;\n    background-color: #2bb1ee;\n    border-color: #efefef;\n}\n\n\n\n.btn-primary {\n    color: white;\n    background-color: #ffc107;\n    border-color: #ffc107;\n    outline-color: transparent;\n}\n.btn-primary:hover {\n    color: #2bb1ee;\n    background-color: #ffc107;\n    border-color: #ffc107;\n    outline-color: transparent;\n}\n.btn-primary.active, .btn-primary:active, .open>.dropdown-toggle.btn-primary {\n    color: white;\n    background-color: #ffc107;\n    border-color: #ffc107;\n    outline-color: transparent;\n}\n.btn-primary.focus,.btn-default:focus, .btn-primary:focus {\n    color: white;\n    background-color: #ffc107;\n    border-color: #ffc107;\n    outline-color: transparent;\n}\n.btn-default.focus, .btn-default:focus {\n    color: white;\n    background-color: #ffc107;\n    border-color: #ffc107;\n    outline-color: transparent;\n}\n.btn-primary.active.focus, .btn-primary.active:focus, .btn-primary.active:hover, .btn-primary:active.focus, .btn-primary:active:focus, .btn-primary:active:hover,.btn-default:active:hover .open>.dropdown-toggle.btn-primary.focus, .open>.dropdown-toggle.btn-primary:focus, .open>.dropdown-toggle.btn-primary:hover {\n    color: white;\n    background-color: #ffc107;\n    border-color: #ffc107;\n    outline-color: transparent;\n}\n  .btn-primary:active:focus {\n    color: white;\n    background-color: #ffc107;\n    border-color: #ffc107;\n    outline-color: transparent;\n}\n.btn-default:active:hover{\n    color: #2bb1ee;\n    background-color: #ffc107;\n    border-color: #ffc107;\n    outline-color: transparent;\n}\n\n\n.navv{\n  max-height: 70px;\n    background-color: #03a9f4;\n    padding-bottom: 18px;\n    border-radius: 0px;\n    webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n    color: #fff;\n  \n    margin-bottom: 0px;\n}\n.navbar-nav{\n  list-style: none;\n}\n.ulclass{\n      float: right;\n    list-style: none;\n    padding-top: 10px;\n    padding-right: 25px;\n}\n.liclass{\n  font-size: 18px;\n    color: #fff;\n    transition: .35s;\n    padding-right: 20px;\n    position: relative;\n    cursor: pointer;\n    overflow: hidden;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n   \n    background: transparent !important ;\n}\n.liclass:hover, .liclass:focus{\n  color:#333;\n}\n.liclass:active,.licalss:visited{\n  color:white;\n}\n\n@media (max-width: 768px){\n.navbar-nav>li>a {\n    padding-top: 0px;\n    \n}\n}\n.box-footer{\n  margin-bottom: 30px;\n}\n.panel{\n  border-radius: 2px;\n}\n.btn1,.btn1:active,.btn1:focus,.btn1:focus:active{\n      background-color: #f1bc1d;;\n    border-radius: 2px;\n    border-color: #f1bc1d;;\n}\n.btn1:hover{\n      background-color: #ffc107;\n    border-radius: 2px;\n    border-color: #ffc107;\n}\n.panel-primary {\n    border-color: #03a9f4;\n}\n.panel-primary>.panel-heading {\n    color: #fff;\n    background-color: #03a9f4;\n    border-color: #03a9f4;\n}\n.subbtn{\n      background-color: #03a9f4;\n    color: white;\n    padding: 7px 16px;\n    border-radius: 5px;\n}\n.subbtn,.subbtn:active,.subbtn:focus,.subbtn:focus:active{\n      background-color: #14b0f7;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/*.brand-logo{\n  margin-left:50px;\n}\n.mr50{\n  margin-right: 50px;\n}\n.mr1{\n  margin-right: 1%;\n}\n@media only screen and (max-width: 992px)\n{\nnav .brand-logo {\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    margin-left: 0px;\n}\n}\n\n.nav-wrapper{\n  background-color: #27A7FF;\n}\n\n.ml20{\n  margin-left: 20px;\n}\n\n.tabs .tab a:hover, .tabs .tab a.active{\n  color: white;\n}\n.tabs .indicator {\n    \n    background-color: rgb(43, 209, 226);\n    height:3px;\n    \n}\n.input-field label{\n  color:#01579b;\n}\n.tabs{\n  background-color: rgba(30, 30, 30, 0.88);\n\n}\n.tabs .tab a{\n  color: rgba(255, 255, 255, 0.57);\n}\n.tabs .tab{\n  margin:0 15px 0px 15px;\n}\n.btn1,.btn1:hover,.btn1:focus{\n  background-color: #01579b;\n\n}\n.backform{\n      background-color: rgba(0, 0, 0, 0.10)!important;\n       margin-top: -20px;\n    padding-top: 20px;\n}\n.create{\n      font-size: 40px;\n    font-family: 'Slabo 27px', serif;\n    font-weight:600;\n}\n.fs30{\n      font-size: 30px;\n}\n.pd50{\n  padding-left: 50px;\n  background-color: #f2f2f2\n}\n.backform1{\n      background-color: rgba(0, 0, 0, 0.10)!important;\n       margin-top: -20px;\n    padding-top: 20px;\n    padding-bottom: 45px;\n}\n.side-nav{\n  width:230px;\n}\n.border{\n  border:2px solid black;\n}\n\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 14px;\n  color: #FFF;\n}\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%;\n}\n.loginBtn:focus {\n  outline: none;\n}\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\n}\n.loginBtn--facebook {\n  background-color: #4C69BA;\n  background-image: linear-gradient(#4C69BA, #3B55A0);\n  text-shadow: 0 -1px 0 #354C8C;\n}\n.loginBtn--facebook:before {\n  border-right: #364e92 1px solid;\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\n}\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1);\n}\n.side-nav li>a {\n    color: rgba(255, 255, 255, 0.7);\n    display: block;\n    font-size: 14px;\n    font-weight: 500;\n    height: 48px;\n    line-height: 48px;\n    padding: 0 32px;\n}\n\n.side-nav li>a:hover {\n    background-color: rgba(0, 0, 0, 0.25);\n    color: white;\n}\n\n.loginBtn--google {\n  background: #DD4B39;\n}\n.loginBtn--google:before {\n  border-right: #BB3F30 1px solid;\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\n}\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37;\n}\n\n.input-field1{\n      margin-top: 0;\n}\n*/\n\n@media (min-width: 768px) {\n  .navbar-nav.navbar-center {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translatex(-50%);\n            transform: translatex(-50%);\n  }\n}\n.navbar-login\n{\n    width: 305px;\n    padding: 10px;\n    padding-bottom: 0px;\n}\n\n.navbar-login-session\n{\n    padding: 10px;\n    padding-bottom: 0px;\n    padding-top: 0px;\n}\n\n.icon-size\n{\n    font-size: 87px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/* W3.CSS 4.04 Apr 2017 by Jan Egil and Borge Refsnes */\nhtml{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\nhtml{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}\naudio,canvas,progress,video{display:inline-block}progress{vertical-align:baseline}\naudio:not([controls]){display:none;height:0}[hidden],template{display:none}\na{background-color:transparent;-webkit-text-decoration-skip:objects}\na:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\ndfn{font-style:italic}mark{background:#ff0;color:#000}\nsmall{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\nsub{bottom:-0.25em}sup{top:-0.5em}figure{margin:1em 40px}img{border-style:none}svg:not(:root){overflow:hidden}\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}\nbutton,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:bold}\nbutton,input{overflow:visible}button,select{text-transform:none}\nbutton,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}\nbutton::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner{border-style:none;padding:0}\nbutton:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring{outline:1px dotted ButtonText}\nfieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}\nlegend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}\n[type=checkbox],[type=radio]{padding:0}\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\n[type=search]{-webkit-appearance:textfield;outline-offset:-2px}\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}\n::-webkit-input-placeholder{color:inherit;opacity:0.54}\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n/* End extract */\nhtml,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}html{overflow-x:hidden}\nh1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}.w3-serif{font-family:serif}\nh1,h2,h3,h4,h5,h6{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide{letter-spacing:4px}\nhr{border:0;border-top:1px solid #eee;margin:20px 0}\n.w3-image{max-width:100%;height:auto}img{margin-bottom:-5px}a{color:inherit}\n.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}.w3-table-all{border:1px solid #ccc}\n.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}\n.w3-table-all tr:nth-child(odd){background-color:#fff}.w3-table-all tr:nth-child(even){background-color:#f1f1f1}\n.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}.w3-centered tr th,.w3-centered tr td{text-align:center}\n.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}\n.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}\n.w3-btn,.w3-button{border:none;display:inline-block;outline:0;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}\n.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}\n.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}   \n.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}\n.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}\n.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}\n.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}\n.w3-tooltip,.w3-display-container{position:relative}.w3-tooltip .w3-text{display:none}.w3-tooltip:hover .w3-text{display:inline-block}\n.w3-ripple:active{opacity:0.5}.w3-ripple{transition:opacity 0s}\n.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}\n.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}\n.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}\n.w3-dropdown-hover:hover .w3-dropdown-content{display:block;z-index:1}\n.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}\n.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}\n.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0}\n.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}\n.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}\n.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}\n.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}\n.w3-main,#main{transition:margin-left .4s}\n.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}\n.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}\n.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}\n.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;outline:none;display:block}\n.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}\n.w3-bar .w3-button{white-space:normal}\n.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;outline:none;white-space:normal;float:none}\n.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}\n.w3-responsive{overflow-x:auto}\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\n.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}\n.w3-col.s1{width:8.33333%}.w3-col.s2{width:16.66666%}.w3-col.s3{width:24.99999%}.w3-col.s4{width:33.33333%}\n.w3-col.s5{width:41.66666%}.w3-col.s6{width:49.99999%}.w3-col.s7{width:58.33333%}.w3-col.s8{width:66.66666%}\n.w3-col.s9{width:74.99999%}.w3-col.s10{width:83.33333%}.w3-col.s11{width:91.66666%}.w3-col.s12{width:99.99999%}\n@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}\n.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}\n.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}\n@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}\n.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}\n.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}\n.w3-content{max-width:980px;margin:auto}.w3-rest{overflow:hidden}\n.w3-cell-row{display:table;width:100%}.w3-cell{display:table-cell}\n.w3-cell-top{vertical-align:top}.w3-cell-middle{vertical-align:middle}.w3-cell-bottom{vertical-align:bottom}\n.w3-hide{display:none!important}.w3-show-block,.w3-show{display:block!important}.w3-show-inline-block{display:inline-block!important}\n@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}\n.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}  \n.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}\n.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}\n@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}\n@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}\n@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}\n@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}}\n.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}.w3-top{top:0}.w3-bottom{bottom:0}\n.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}\n.w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}\n.w3-display-bottomleft{position:absolute;left:0;bottom:0}.w3-display-bottomright{position:absolute;right:0;bottom:0}\n.w3-display-middle{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}\n.w3-display-left{position:absolute;top:50%;left:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}\n.w3-display-right{position:absolute;top:50%;right:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}\n.w3-display-topmiddle{position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\n.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\n.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}\n.w3-display-position{position:absolute}\n.w3-circle{border-radius:50%}\n.w3-round-small{border-radius:2px}.w3-round,.w3-round-medium{border-radius:4px}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}\n.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}\n.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}\n.w3-code,.w3-codespan{font-family:Consolas,\"courier new\";font-size:16px}\n.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}\n.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}\n.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}\n.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}\n.w3-spin{-webkit-animation:w3-spin 2s infinite linear;animation:w3-spin 2s infinite linear}@-webkit-keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\n.w3-animate-fading{-webkit-animation:fading 10s infinite;animation:fading 10s infinite}@-webkit-keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\n.w3-animate-opacity{-webkit-animation:opac 0.8s;animation:opac 0.8s}@-webkit-keyframes opac{from{opacity:0} to{opacity:1}}@keyframes opac{from{opacity:0} to{opacity:1}}\n.w3-animate-top{position:relative;-webkit-animation:animatetop 0.4s;animation:animatetop 0.4s}@-webkit-keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\n.w3-animate-left{position:relative;-webkit-animation:animateleft 0.4s;animation:animateleft 0.4s}@-webkit-keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\n.w3-animate-right{position:relative;-webkit-animation:animateright 0.4s;animation:animateright 0.4s}@-webkit-keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\n.w3-animate-bottom{position:relative;-webkit-animation:animatebottom 0.4s;animation:animatebottom 0.4s}@-webkit-keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\n.w3-animate-zoom {-webkit-animation:animatezoom 0.6s;animation:animatezoom 0.6s}@-webkit-keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}\n.w3-animate-input{transition:width 0.4s ease-in-out}.w3-animate-input:focus{width:100%!important}\n.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}\n.w3-opacity-max{opacity:0.25}.w3-opacity-min{opacity:0.75}\n.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{-webkit-filter:grayscale(100%);filter:grayscale(100%)}\n.w3-greyscale,.w3-grayscale{-webkit-filter:grayscale(75%);filter:grayscale(75%)}.w3-greyscale-min,.w3-grayscale-min{-webkit-filter:grayscale(50%);filter:grayscale(50%)}\n.w3-sepia{-webkit-filter:sepia(75%);filter:sepia(75%)}.w3-sepia-max,.w3-hover-sepia:hover{-webkit-filter:sepia(100%);filter:sepia(100%)}.w3-sepia-min{-webkit-filter:sepia(50%);filter:sepia(50%)}\n.w3-tiny{font-size:10px!important}.w3-small{font-size:12px!important}.w3-medium{font-size:15px!important}.w3-large{font-size:18px!important}\n.w3-xlarge{font-size:24px!important}.w3-xxlarge{font-size:36px!important}.w3-xxxlarge{font-size:48px!important}.w3-jumbo{font-size:64px!important}\n.w3-left-align{text-align:left!important}.w3-right-align{text-align:right!important}.w3-justify{text-align:justify!important}.w3-center{text-align:center!important}\n.w3-border-0{border:0!important}.w3-border{border:1px solid #ccc!important}\n.w3-border-top{border-top:1px solid #ccc!important}.w3-border-bottom{border-bottom:1px solid #ccc!important}\n.w3-border-left{border-left:1px solid #ccc!important}.w3-border-right{border-right:1px solid #ccc!important}\n.w3-topbar{border-top:6px solid #ccc!important}.w3-bottombar{border-bottom:6px solid #ccc!important}\n.w3-leftbar{border-left:6px solid #ccc!important}.w3-rightbar{border-right:6px solid #ccc!important}\n.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}\n.w3-margin{margin:16px!important}.w3-margin-top{margin-top:16px!important}.w3-margin-bottom{margin-bottom:16px!important}\n.w3-margin-left{margin-left:16px!important}.w3-margin-right{margin-right:16px!important}\n.w3-padding-small{padding:4px 8px!important}.w3-padding{padding:8px 16px!important}.w3-padding-large{padding:12px 24px!important}\n.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}\n.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}\n.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}\n.w3-left{float:left!important}.w3-right{float:right!important}\n.w3-button:hover{color:#000!important;background-color:#ccc!important}\n.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}\n.w3-hover-none:hover{box-shadow:none!important}\n/* Colors */\n.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}\n.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}\n.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}\n.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}\n.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}\n.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}\n.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\n.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}\n.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}\n.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}\n.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}\n.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}\n.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}\n.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}\n.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}\n.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}\n.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}\n.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}\n.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}\n.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}\n.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}\n.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}\n.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#bbb!important}\n.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}\n.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}\n.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}\n.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}\n.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}\n.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}\n.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}\n.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}\n.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}\n.w3-text-yellow,.w3-hover-text-yellow:hover{color:#ffeb3b!important}\n.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}\n.w3-text-black,.w3-hover-text-black:hover{color:#000!important}\n.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}\n.w3-text-amber{color:#ffc107!important}\n.w3-text-aqua{color:#00ffff!important}\n.w3-text-light-blue{color:#87CEEB!important}\n.w3-text-brown{color:#795548!important}\n.w3-text-cyan{color:#00bcd4!important}\n.w3-text-blue-grey,.w3-text-blue-gray{color:#607d8b!important}\n.w3-text-light-green{color:#8bc34a!important}\n.w3-text-indigo{color:#3f51b5!important}\n.w3-text-khaki{color:#b4aa50!important}\n.w3-text-lime{color:#cddc39!important}\n.w3-text-orange{color:#ff9800!important}\n.w3-text-deep-orange{color:#ff5722!important}\n.w3-text-pink{color:#e91e63!important}\n.w3-text-purple{color:#9c27b0!important}\n.w3-text-deep-purple{color:#673ab7!important}\n.w3-text-sand{color:#fdf5e6!important}\n.w3-text-teal{color:#009688!important}\n.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}\n.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}\n.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}\n.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}\n.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}\n.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}\n.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}\n.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}\n.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#bbb!important}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "  .brand-logo{\n\tmargin-left:50px;\n}\n.mr50{\n\tmargin-right: 50px;\n}\n.mr1{\n\tmargin-right: 1%;\n}\n@media only screen and (max-width: 992px)\n{\nnav .brand-logo {\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    margin-left: 0px;\n}\n}\n.nav-wrapper{\n\tbackground-color: #27A7FF;\n}\n.ml20{\n\tmargin-left: 20px;\n}\n\n.tabs .tab a:hover, .tabs .tab a.active{\n  color: white;\n}\n.tabs .indicator {\n    background-color: rgb(43, 209, 226);\n    height:3px;\n}\n.input-field label{\n\tcolor:#01579b;\n}\n.tabs{\n\tbackground-color: rgba(30, 30, 30, 0.88);\n\n}\n.tabs .tab a{\n\tcolor: rgba(255, 255, 255, 0.57);\n}\n.tabs .tab{\n\tmargin:0 15px 0px 15px;\n}\n.btn1,.btn1:hover,.btn1:focus{\n\tbackground-color: #01579b;\n\n}\n.backform{\n\t    background-color: rgba(0, 0, 0, 0.10)!important;\n       margin-top: -20px;\n    padding-top: 20px;\n}\n.create{\n\t    font-size: 40px;\n    font-family: 'Slabo 27px', serif;\n    font-weight:600;\n}\n.fs30{\n\t    font-size: 30px;\n}\n.pd50{\n\tpadding-left: 50px;\n\tbackground-color: #f2f2f2\n}\n.backform1{\n\t    background-color: rgba(0, 0, 0, 0.10)!important;\n       margin-top: -20px;\n    padding-top: 20px;\n    padding-bottom: 45px;\n}\n.side-nav{\n\twidth:230px;\n}\n.border{\n\tborder:2px solid black;\n}\n\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 14px;\n  color: #FFF;\n}\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%;\n}\n.loginBtn:focus {\n  outline: none;\n}\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\n}\n\n\n/* Facebook */\n.loginBtn--facebook {\n  background-color: #4C69BA;\n  background-image: linear-gradient(#4C69BA, #3B55A0);\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #354C8C;\n}\n.loginBtn--facebook:before {\n  border-right: #364e92 1px solid;\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\n}\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1);\n}\n.side-nav li>a {\n    color: rgba(255, 255, 255, 0.7);\n    display: block;\n    font-size: 14px;\n    font-weight: 500;\n    height: 48px;\n    line-height: 48px;\n    padding: 0 32px;\n}\n\n.side-nav li>a:hover {\n    background-color: rgba(0, 0, 0, 0.25);\n    color: white;\n}\n\n/* Google */\n.loginBtn--google {\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n  background: #DD4B39;\n}\n.loginBtn--google:before {\n  border-right: #BB3F30 1px solid;\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\n}\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37;\n}\n\n.input-field1{\n\t    margin-top: 0;\n}\n\n\n\n.input {\n  position: relative;\n  z-index: 1;\n  display: inline-block;\n  margin: 5px;\n  width: calc(100% - 2em);\n  vertical-align: top;\n}\n\n.input__field {\n  position: relative;\n  display: block;\n  float: right;\n  padding: 0.8em;\n  width: 60%;\n  border: none;\n  border-radius: 0;\n  background: #f0f0f0;\n  color: #aaa;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-appearance: none; /* for box shadows to show on iOS */\n}\n\n.input__field:focus {\n  outline: none;\n}\n\n.input__label {\n  display: inline-block;\n  float: right;\n  padding: 0 1em;\n  width: 40%;\n  color: #717070;\n  font-weight: 100;\n  font-size: 70.25%;\n  -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-size: 14px;\n}\n\n.input__label-content {\n  position: relative;\n  display: block;\n  padding: 1.6em 0;\n  width: 100%;\n}\n\n.graphic {\n  position: absolute;\n  top: 0;\n  left: 0;\n  fill: none;\n}\n\n.icon {\n  color: #ddd;\n  font-size: 150%;\n}\n/* Hoshi */\n.input--hoshi {\n  overflow: hidden;\n \n}\n\n.input__field--hoshi {\n  margin-top: 1em;\n  padding: 0.85em 0.15em;\n  width: 100%;   \n  background: transparent;\n  color: #312a2a;\n   font-size: 19.5px;\n}\n\n.input__label--hoshi {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0 0.25em;\n  width: 100%;\n  height: calc(100% - 1em);\n  text-align: left;\n  pointer-events: none;\n  font-size: 14px;\n}\n\n.input__label-content--hoshi {\n  position: absolute;\n}\n\n.input__label--hoshi::before,\n.input__label--hoshi::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 10px);\n  border-bottom: 1px solid #B9C1CA;\n}\n\n.input__label--hoshi::after {\n  \n  border-bottom: 1px solid red;\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n  transition:-webkit-transform 0.3s;\n  transition:transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.input__label--hoshi-color-1::after {\n  border-color: #5f5d5d;\n}\n\n\n.input__field--hoshi:focus + .input__label--hoshi::after,\n.input--filled .input__label--hoshi::after {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n\n}\n\n.input__field--hoshi:focus + .input__label--hoshi .input__label-content--hoshi,\n.input--filled .input__label-content--hoshi {\n  -webkit-animation: anim-1 0.3s forwards;\n  animation: anim-1 0.3s forwards;\n}\n\n@-webkit-keyframes anim-1 {\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(1em, 0, 0);\n    transform: translate3d(1em, 0, 0);\n  }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-1em, -40%, 0);\n    transform: translate3d(-1em, -40%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -40%, 0);\n    transform: translate3d(0, -40%, 0);\n  }\n}\n\n@keyframes anim-1 {\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(1em, 0, 0);\n    transform: translate3d(1em, 0, 0);\n  }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-1em, -40%, 0);\n    transform: translate3d(-1em, -40%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -40%, 0);\n    transform: translate3d(0, -40%, 0);\n  }\n}\n.nooutline:focus{\n  outline:none;\n}\na{\n    color: white;\n    background-color: #09c4e4;\n    text-decoration: none;\n}\n.nav-tabs{\n  border-bottom:none;\n  display: -webkit-box;\n}\n.nav>li{\n      display: -webkit-inline-box;\n}\n.nav-tabs>li>a {\n\nborder-radius: 2.5px;\nborder:none;\ntext-align: -webkit-center;\nwidth: 100%;\n    font-size: 14px;\n  }\n @media screen and (max-width: 450px) {\n .nav-tabs>li>a {\n\n    font-size: 10px;\n  }\n}\n  .nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {\n    color: white;\n    cursor: default;\n    background-color: #03A9F4;\n    border: none; \n   \n    border-bottom-color: transparent;\n    box-shadow: inset 0 -10px 10px -11px #5d5b5b;\n}\n.nav-tabs>li>a:hover {\n    /* border-color: #eee #eee #ddd; */\n    background-color: #4acee4;\n    color: white;\n}\n.box1{\n    border: 1px solid black;\n    padding: 10px;\n    border-color: #ddd;\n    margin-bottom: 20px;\n    background-color: #fff;\n    border-radius: 4px;\n    box-shadow: 0 1px 1px rgba(0,0,0,.05);\n}\n.mr5{\n      margin-left: 5px;\n\n}\n.pd0{\n  padding-right: 0px;\n  padding-left: 0px;\n}\n.nav-tabs>li {\n \n    width: 24.751%;\n    margin-right: 0.25%;\n\n  }\n  .wd60{\n    width: 50%;\n  }\n  .fr{\n    float: right;\n  }\n  .fl{\n    float: left;\n  }/*\n  .button{\n        outline: none;\n        color:white;\n    border: none;\n    background-color: #09c4e4;\n    margin: 15px 0px;\n        padding: 6px 12px;\n        line-height: 1.42857143;\n        text-align: center;\n            border-radius: 4px;\n                cursor: pointer;\n  }\n.button:hover{\n  background-color: #33c9e2;}*/\n\n.btn-primary {\n    background: #03A9F4;\n    border:none;\n}\n.btn-primary:hover{\n      background-color: #4FC3F7!important;\n}\n.btn{\n      transition: .2s ease-out;\n      box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "  .brand-logo{\n\tmargin-left:50px;\n}\n.mr50{\n\tmargin-right: 50px;\n}\n.mr1{\n\tmargin-right: 1%;\n}\n@media only screen and (max-width: 992px)\n{\nnav .brand-logo {\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    margin-left: 0px;\n}\n}\n.nav-wrapper{\n\tbackground-color: #27A7FF;\n}\n.ml20{\n\tmargin-left: 20px;\n}\n\n.tabs .tab a:hover, .tabs .tab a.active{\n  color: white;\n}\n.tabs .indicator {\n    background-color: rgb(43, 209, 226);\n    height:3px;\n}\n.input-field label{\n\tcolor:#01579b;\n}\n.tabs{\n\tbackground-color: rgba(30, 30, 30, 0.88);\n\n}\n.tabs .tab a{\n\tcolor: rgba(255, 255, 255, 0.57);\n}\n.tabs .tab{\n\tmargin:0 15px 0px 15px;\n}\n.btn1,.btn1:hover,.btn1:focus{\n\tbackground-color: #01579b;\n\n}\n.backform{\n\t    background-color: rgba(0, 0, 0, 0.10)!important;\n       margin-top: -20px;\n    padding-top: 20px;\n}\n.create{\n\t    font-size: 40px;\n    font-family: 'Slabo 27px', serif;\n    font-weight:600;\n}\n.fs30{\n\t    font-size: 30px;\n}\n.pd50{\n\tpadding-left: 50px;\n\tbackground-color: #f2f2f2\n}\n.backform1{\n\t    background-color: rgba(0, 0, 0, 0.10)!important;\n       margin-top: -20px;\n    padding-top: 20px;\n    padding-bottom: 45px;\n}\n.side-nav{\n\twidth:230px;\n}\n.border{\n\tborder:2px solid black;\n}\n\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 14px;\n  color: #FFF;\n}\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%;\n}\n.loginBtn:focus {\n  outline: none;\n}\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\n}\n\n\n/* Facebook */\n.loginBtn--facebook {\n  background-color: #4C69BA;\n  background-image: linear-gradient(#4C69BA, #3B55A0);\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #354C8C;\n}\n.loginBtn--facebook:before {\n  border-right: #364e92 1px solid;\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\n}\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1);\n}\n.side-nav li>a {\n    color: rgba(255, 255, 255, 0.7);\n    display: block;\n    font-size: 14px;\n    font-weight: 500;\n    height: 48px;\n    line-height: 48px;\n    padding: 0 32px;\n}\n\n.side-nav li>a:hover {\n    background-color: rgba(0, 0, 0, 0.25);\n    color: white;\n}\n\n/* Google */\n.loginBtn--google {\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n  background: #DD4B39;\n}\n.loginBtn--google:before {\n  border-right: #BB3F30 1px solid;\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\n}\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37;\n}\n\n.input-field1{\n\t    margin-top: 0;\n}\n\n\n\n.input {\n  position: relative;\n  z-index: 1;\n  display: inline-block;\n  margin: 5px;\n  width: calc(100% - 2em);\n  vertical-align: top;\n}\n\n.input__field {\n  position: relative;\n  display: block;\n  float: right;\n  padding: 0.8em;\n  width: 60%;\n  border: none;\n  border-radius: 0;\n  background: #f0f0f0;\n  color: #aaa;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-appearance: none; /* for box shadows to show on iOS */\n}\n\n.input__field:focus {\n  outline: none;\n}\n\n.input__label {\n  display: inline-block;\n  float: right;\n  padding: 0 1em;\n  width: 40%;\n  color: #717070;\n  font-weight: 100;\n  font-size: 70.25%;\n  -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-size: 14px;\n}\n\n.input__label-content {\n  position: relative;\n  display: block;\n  padding: 1.6em 0;\n  width: 100%;\n}\n\n.graphic {\n  position: absolute;\n  top: 0;\n  left: 0;\n  fill: none;\n}\n\n.icon {\n  color: #ddd;\n  font-size: 150%;\n}\n/* Hoshi */\n.input--hoshi {\n  overflow: hidden;\n \n}\n\n.input__field--hoshi {\n  margin-top: 1em;\n  padding: 0.85em 0.15em;\n  width: 100%;   \n  background: transparent;\n  color: #312a2a;\n   font-size: 19.5px;\n}\n\n.input__label--hoshi {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0 0.25em;\n  width: 100%;\n  height: calc(100% - 1em);\n  text-align: left;\n  pointer-events: none;\n  font-size: 14px;\n}\n\n.input__label-content--hoshi {\n  position: absolute;\n}\n\n.input__label--hoshi::before,\n.input__label--hoshi::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 10px);\n  border-bottom: 1px solid #B9C1CA;\n}\n\n.input__label--hoshi::after {\n  \n  border-bottom: 1px solid red;\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n  transition:-webkit-transform 0.3s;\n  transition:transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.input__label--hoshi-color-1::after {\n  border-color: #5f5d5d;\n}\n\n\n.input__field--hoshi:focus + .input__label--hoshi::after,\n.input--filled .input__label--hoshi::after {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n\n}\n\n.input__field--hoshi:focus + .input__label--hoshi .input__label-content--hoshi,\n.input--filled .input__label-content--hoshi {\n  -webkit-animation: anim-1 0.3s forwards;\n  animation: anim-1 0.3s forwards;\n}\n\n@-webkit-keyframes anim-1 {\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(1em, 0, 0);\n    transform: translate3d(1em, 0, 0);\n  }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-1em, -40%, 0);\n    transform: translate3d(-1em, -40%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -40%, 0);\n    transform: translate3d(0, -40%, 0);\n  }\n}\n\n@keyframes anim-1 {\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(1em, 0, 0);\n    transform: translate3d(1em, 0, 0);\n  }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-1em, -40%, 0);\n    transform: translate3d(-1em, -40%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -40%, 0);\n    transform: translate3d(0, -40%, 0);\n  }\n}\n.nooutline:focus{\n  outline:none;\n}\na{\n    color: white;\n    background-color: #09c4e4;\n    text-decoration: none;\n}\n.nav-tabs{\n  border-bottom:none;\n  display: -webkit-box;\n}\n.nav>li{\n      display: -webkit-inline-box;\n}\n.nav-tabs>li>a {\n\nborder-radius: 2.5px;\nborder:none;\ntext-align: -webkit-center;\nwidth: 100%;\n    font-size: 14px;\n  }\n @media screen and (max-width: 450px) {\n .nav-tabs>li>a {\n\n    font-size: 10px;\n  }\n}\n  .nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {\n    color: white;\n    cursor: default;\n    background-color: #03A9F4;\n    border: none; \n   \n    border-bottom-color: transparent;\n    box-shadow: inset 0 -10px 10px -11px #5d5b5b;\n}\n.nav-tabs>li>a:hover {\n    /* border-color: #eee #eee #ddd; */\n    background-color: #4acee4;\n    color: white;\n}\n.box1{\n    border: 1px solid black;\n    padding: 10px;\n    border-color: #ddd;\n    margin-bottom: 20px;\n    background-color: #fff;\n    border-radius: 4px;\n    box-shadow: 0 1px 1px rgba(0,0,0,.05);\n}\n.mr5{\n      margin-left: 5px;\n\n}\n.pd0{\n  padding-right: 0px;\n  padding-left: 0px;\n}\n.nav-tabs>li {\n \n    width: 24.751%;\n    margin-right: 0.25%;\n\n  }\n  .wd60{\n    width: 50%;\n  }\n  .fr{\n    float: right;\n  }\n  .fl{\n    float: left;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".brand-logo{\n    margin-left:50px;\n}\n.mr50{\n    margin-right: 50px;\n}\n.mr1{\n    margin-right: 1%;\n}\n@media only screen and (max-width: 992px)\n{\nnav .brand-logo {\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    margin-left: 0px;\n}\n}\n\n.nav-wrapper{\n    background-color: #27A7FF;\n}\n\n.ml20{\n    margin-left: 20px;\n}\n\n.tabs .tab a:hover, .tabs .tab a.active{\n  color: white;\n}\n.tabs .indicator {\n    \n    background-color: rgb(43, 209, 226);\n    height:3px;\n    \n}\n.input-field label{\n    color:#01579b;\n}\n.tabs{\n    background-color: rgba(30, 30, 30, 0.88);\n\n}\n.tabs .tab a{\n    color: rgba(255, 255, 255, 0.57);\n}\n.tabs .tab{\n    margin:0 15px 0px 15px;\n}\n.btn1,.btn1:hover,.btn1:focus{\n    background-color: #01579b;\n\n}\n.backform{\n        background-color: rgba(0, 0, 0, 0.10)!important;\n       margin-top: -20px;\n    padding-top: 20px;\n}\n.create{\n        font-size: 40px;\n    font-family: 'Slabo 27px', serif;\n    font-weight:600;\n}\n.fs30{\n        font-size: 30px;\n}\n.pd50{\n    padding-left: 50px;\n    background-color: #f2f2f2\n}\n.pd30{\n  padding-top: 30px;\n}\n.backform1{\n        background-color: rgba(0, 0, 0, 0.10)!important;\n       margin-top: -20px;\n    padding-top: 20px;\n    padding-bottom: 45px;\n}\n\n.border{\n    border:2px solid black;\n}\n\n\n\n.input-field1{\n        margin-top: 0;\n}\n.card {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.card {\n  margin-top: 10px;\n  box-sizing: border-box;\n  border-radius: 2px;\n  background-clip: padding-box;\n}\n.card span.card-title {\n    color: #fff;\n    font-size: 24px;\n    font-weight: 300;\n    text-transform: uppercase;\n}\n\n.card .card-image {\n  position: relative;\n  overflow: hidden;\n}\n.card .card-image img {\n  border-radius: 2px 2px 0 0;\n  background-clip: padding-box;\n  position: relative;\n  z-index: -1;\n}\n.card .card-image span.card-title {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 16px;\n}\n.card .card-content {\n  padding: 16px;\n  border-radius: 0 0 2px 2px;\n  background-clip: padding-box;\n  box-sizing: border-box;\n}\n.card .card-content p {\n  margin: 0;\n  color: inherit;\n}\n.card .card-content span.card-title {\n  line-height: 48px;\n}\n.card .card-action {\n  border-top: 1px solid rgba(160, 160, 160, 0.2);\n  padding: 16px;\n}\n.card .card-action a {\n  color: #ffab40;\n  margin-right: 16px;\n  transition: color 0.3s ease;\n  text-transform: uppercase;\n}\n.card .card-action a:hover {\n  color: #ffd8a6;\n  text-decoration: none;\n}\n.connecting-line {\n    height: 2px;\n    background: #e0e0e0;\n    position: absolute;\n    width: 80%;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    top: 50%;\n   \n} .posrel{   position: relative; }\n\n .nav-tabs>li {\n    width: 33.33%;\n border-radius: 2px;   \n  color:white;\n      \n        \n        background-color: white;\n         }\n\n.nav-tabs>li>a{\n  text-align: center;\n  margin-right: 0px;\n  color: #000;\n  border-radius: 2px;\n  padding: 15px 0px;\n  border:none;\n}\n  .nav-tabs {\n     border-bottom: none;\n   }\n.mr30{\n  margin-top: 30px;\n}\n.nav-tabs{\n    background: white;\n   \n}\n.blue{\n  background-color: #aed581;\n\n}\n.yellow{\n  background-color: #ffcc80;\n\n}\n.red{\n  background-color: #ff8a65;\n\n}\n.blue:hover {\n  background-color: #8ac14a;\n\n}\n.yellow:hover {\n  background-color: #ffb950;\n\n}\n.red:hover {\n  background-color: #f56436;\n\n}\n\n.nav-tabs>li.active>.blue, .nav-tabs>li.active>.blue:focus, .nav-tabs>li.active>.blue:hover{\n  border:none;\n  background-color: #8ac14a;\n  box-shadow: 0 2px 15px 0 rgba(0,0,0,.2), 0 0px 15px 0 rgba(0,0,0,.19);\n}\n.nav-tabs>li.active>.yellow, .nav-tabs>li.active>.yellow:focus, .nav-tabs>li.active>.ywllow:hover{\n  border:none;\n  background-color: #ffb950;\n  box-shadow: 0 2px 15px 0 rgba(0,0,0,.2), 0 0px 15px 0 rgba(0,0,0,.19);\n}\n.nav-tabs>li.active>.red, .nav-tabs>li.active>.red:focus, .nav-tabs>li.active>.red:hover{\n  border:none;\n  background-color: #f56436;\n  box-shadow: 0 2px 15px 0 rgba(0,0,0,.2), 0 0px 15px 0 rgba(0,0,0,.19);\n}\n.nav>li>.blue:focus, .nav>li>.blue:hover{\n  background-color: #8ac14a;\n\n}\n.nav>li>.yellow:focus, .nav>li>.yellow:hover{\n  background-color: #ffb950;\n\n}\n.nav>li>.red:focus, .nav>li>.red:hover{\n  background-color: #f56436;\n\n}\n.shadow{\n      padding-top: 25px;\n  box-shadow: 0 2px 15px 0 rgba(0,0,0,.2), 0 0px 15px 0 rgba(0,0,0,.19);\n}\n.btn-primary {\n    background: #03A9F4;\n    border:none;\n}\n.btn-primary:hover{\n      background-color: #4FC3F7!important;\n}\n.btn{\n      transition: .2s ease-out;\n      box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n}\n.carousel-control{\n  width:1%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n\n\n.input {\n  position: relative;\n  z-index: 1;\n  display: inline-block;\n  margin: 5px;\n  width: calc(100% - 2em);\n  vertical-align: top;\n}\n\n.input__field {\n  position: relative;\n  display: block;\n  float: right;\n  padding: 0.8em;\n  width: 60%;\n  border: none;\n  border-radius: 0;\n  background: #f0f0f0;\n  color: #aaa;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-appearance: none; /* for box shadows to show on iOS */\n}\n\n.input__field:focus {\n  outline: none;\n}\n\n.input__label {\n  display: inline-block;\n  float: right;\n  padding: 0 1em;\n  width: 40%;\n  color: #717070;\n  font-weight: 100;\n  font-size: 70.25%;\n  -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-size: 14px;\n}\n\n.input__label-content {\n  position: relative;\n  display: block;\n  padding: 1.6em 0;\n  width: 100%;\n}\n\n.graphic {\n  position: absolute;\n  top: 0;\n  left: 0;\n  fill: none;\n}\n\n.icon {\n  color: #ddd;\n  font-size: 150%;\n}\n/* Hoshi */\n.input--hoshi {\n  overflow: hidden;\n \n}\n\n.input__field--hoshi {\n  margin-top: 1em;\n  padding: 0.85em 0.15em;\n  width: 100%;   \n  background: transparent;\n  color: #312a2a;\n   font-size: 19.5px;\n}\n\n.input__label--hoshi {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0 0.25em;\n  width: 100%;\n  height: calc(100% - 1em);\n  text-align: left;\n  pointer-events: none;\n  font-size: 14px;\n}\n\n.input__label-content--hoshi {\n  position: absolute;\n}\n\n.input__label--hoshi::before,\n.input__label--hoshi::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 10px);\n  border-bottom: 1px solid #B9C1CA;\n}\n\n.input__label--hoshi::after {\n  \n  border-bottom: 1px solid red;\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.input__label--hoshi-color-1::after {\n  border-color: #5f5d5d;\n}\n\n\n.input__field--hoshi:focus + .input__label--hoshi::after,\n.input--filled .input__label--hoshi::after {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n\n}\n\n.input__field--hoshi:focus + .input__label--hoshi .input__label-content--hoshi,\n.input--filled .input__label-content--hoshi {\n  -webkit-animation: anim-1 0.3s forwards;\n  animation: anim-1 0.3s forwards;\n}\n\n@-webkit-keyframes anim-1 {\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(1em, 0, 0);\n    transform: translate3d(1em, 0, 0);\n  }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-1em, -40%, 0);\n    transform: translate3d(-1em, -40%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -40%, 0);\n    transform: translate3d(0, -40%, 0);\n  }\n}\n\n@keyframes anim-1 {\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(1em, 0, 0);\n    transform: translate3d(1em, 0, 0);\n  }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-1em, -40%, 0);\n    transform: translate3d(-1em, -40%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -40%, 0);\n    transform: translate3d(0, -40%, 0);\n  }\n}\n.nooutline:focus{\n\toutline:none;\n}\na{\n    color: white;\n    background-color: #09c4e4;\n    text-decoration: none;\n}\n.nav-tabs{\n\tborder-bottom:none;\n  display: -webkit-box;\n}\n.nav>li{\n\t    display: -webkit-inline-box;\n}\n.nav-tabs>li>a {\n\nborder-radius: 2.5px;\nborder:none;\ntext-align: -webkit-center;\nwidth: 100%;\n    font-size: 14px;\n\t}\n @media screen and (max-width: 450px) {\n .nav-tabs>li>a {\n\n    font-size: 10px;\n  }\n}\n\t.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {\n    color: white;\n    cursor: default;\n    background-color: #03A9F4;\n    border: none; \n   \n    border-bottom-color: transparent;\n    box-shadow: inset 0 -10px 10px -11px #5d5b5b;\n}\n.nav-tabs>li>a:hover {\n    /* border-color: #eee #eee #ddd; */\n    background-color: #4acee4;\n    color: white;\n}\n.box1{\n   \n    border-bottom: none;\n    padding: 10px;\n   \n    margin-bottom: 20px;\n    background-color: #fff;\n   border-radius: 4px 4px 0px 0px;\n    box-shadow: 0 0px 0px rgba(0,0,0,.05);\n}\n.mr5{\n\t    margin-left: 5px;\n\n}\n.pd0{\n\tpadding-right: 0px;\n\tpadding-left: 0px;\n}\n.nav-tabs>li {\n \n    width: 33.14%;\n    margin-right: 0.25%;\n\n\t}\n\t.wd60{\n\t\twidth: 50%;\n\t}\n\t.fr{\n\t\tfloat: right;\n\t}\n\t.fl{\n\t\tfloat: left;\n\t}\n  .files1{\n        position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n\n\n.input {\n  position: relative;\n  z-index: 1;\n  display: inline-block;\n  margin: 5px;\n  width: calc(100% - 2em);\n  vertical-align: top;\n}\n\n.input__field {\n  position: relative;\n  display: block;\n  float: right;\n  padding: 0.8em;\n  width: 60%;\n  border: none;\n  border-radius: 0;\n  background: #f0f0f0;\n  color: #aaa;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-appearance: none; /* for box shadows to show on iOS */\n}\n\n.input__field:focus {\n  outline: none;\n}\n\n.input__label {\n  display: inline-block;\n  float: right;\n  padding: 0 1em;\n  width: 40%;\n  color: #717070;\n  font-weight: 100;\n  font-size: 70.25%;\n  -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-size: 14px;\n}\n\n.input__label-content {\n  position: relative;\n  display: block;\n  padding: 1.6em 0;\n  width: 100%;\n}\n\n.graphic {\n  position: absolute;\n  top: 0;\n  left: 0;\n  fill: none;\n}\n\n.icon {\n  color: #ddd;\n  font-size: 150%;\n}\n/* Hoshi */\n.input--hoshi {\n  overflow: hidden;\n \n}\n\n.input__field--hoshi {\n  margin-top: 1em;\n  padding: 0.85em 0.15em;\n  width: 100%;   \n  background: transparent;\n  color: #312a2a;\n   font-size: 19.5px;\n}\n\n.input__label--hoshi {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0 0.25em;\n  width: 100%;\n  height: calc(100% - 1em);\n  text-align: left;\n  pointer-events: none;\n  font-size: 14px;\n}\n\n.input__label-content--hoshi {\n  position: absolute;\n}\n\n.input__label--hoshi::before,\n.input__label--hoshi::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 10px);\n  border-bottom: 1px solid #B9C1CA;\n}\n\n.input__label--hoshi::after {\n  \n  border-bottom: 1px solid red;\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.input__label--hoshi-color-1::after {\n  border-color: #5f5d5d;\n}\n\n\n.input__field--hoshi:focus + .input__label--hoshi::after,\n.input--filled .input__label--hoshi::after {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n\n}\n\n.input__field--hoshi:focus + .input__label--hoshi .input__label-content--hoshi,\n.input--filled .input__label-content--hoshi {\n  -webkit-animation: anim-1 0.3s forwards;\n  animation: anim-1 0.3s forwards;\n}\n\n@-webkit-keyframes anim-1 {\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(1em, 0, 0);\n    transform: translate3d(1em, 0, 0);\n  }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-1em, -40%, 0);\n    transform: translate3d(-1em, -40%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -40%, 0);\n    transform: translate3d(0, -40%, 0);\n  }\n}\n\n@keyframes anim-1 {\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(1em, 0, 0);\n    transform: translate3d(1em, 0, 0);\n  }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-1em, -40%, 0);\n    transform: translate3d(-1em, -40%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -40%, 0);\n    transform: translate3d(0, -40%, 0);\n  }\n}\n.nooutline:focus{\n\toutline:none;\n}\na{\n    color: white;\n    background-color: #09c4e4;\n    text-decoration: none;\n}\n.nav-tabs{\n\tborder-bottom:none;\n  display: -webkit-box;\n}\n.nav>li{\n\t    display: -webkit-inline-box;\n}\n.nav-tabs>li>a {\n\nborder-radius: 2.5px;\nborder:none;\ntext-align: -webkit-center;\nwidth: 100%;\n    font-size: 14px;\n\t}\n @media screen and (max-width: 450px) {\n .nav-tabs>li>a {\n\n    font-size: 10px;\n  }\n}\n\t.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {\n    color: white;\n    cursor: default;\n    background-color: #03A9F4;\n    border: none; \n   \n    border-bottom-color: transparent;\n    box-shadow: inset 0 -10px 10px -11px #5d5b5b;\n}\n.nav-tabs>li>a:hover {\n    /* border-color: #eee #eee #ddd; */\n    background-color: #4acee4;\n    color: white;\n}\n.box1{\n   \n    border-bottom: none;\n    padding: 10px;\n   \n    margin-bottom: 20px;\n    background-color: #fff;\n   border-radius: 4px 4px 0px 0px;\n    box-shadow: 0 0px 0px rgba(0,0,0,.05);\n}\n.mr5{\n\t    margin-left: 5px;\n\n}\n.pd0{\n\tpadding-right: 0px;\n\tpadding-left: 0px;\n}\n.nav-tabs>li {\n \n    width: 33.14%;\n    margin-right: 0.25%;\n\n\t}\n\t.wd60{\n\t\twidth: 50%;\n\t}\n\t.fr{\n\t\tfloat: right;\n\t}\n\t.fl{\n\t\tfloat: left;\n\t}\n  .files1{\n        position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/* W3.CSS 4.04 Apr 2017 by Jan Egil and Borge Refsnes */\nhtml{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\nhtml{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}\naudio,canvas,progress,video{display:inline-block}progress{vertical-align:baseline}\naudio:not([controls]){display:none;height:0}[hidden],template{display:none}\na{background-color:transparent;-webkit-text-decoration-skip:objects}\na:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\ndfn{font-style:italic}mark{background:#ff0;color:#000}\nsmall{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\nsub{bottom:-0.25em}sup{top:-0.5em}figure{margin:1em 40px}img{border-style:none}svg:not(:root){overflow:hidden}\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}\nbutton,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:bold}\nbutton,input{overflow:visible}button,select{text-transform:none}\nbutton,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}\nbutton::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner{border-style:none;padding:0}\nbutton:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring{outline:1px dotted ButtonText}\nfieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}\nlegend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}\n[type=checkbox],[type=radio]{padding:0}\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\n[type=search]{-webkit-appearance:textfield;outline-offset:-2px}\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}\n::-webkit-input-placeholder{color:inherit;opacity:0.54}\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n/* End extract */\nhtml,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}html{overflow-x:hidden}\nh1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}.w3-serif{font-family:serif}\nh1,h2,h3,h4,h5,h6{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide{letter-spacing:4px}\nhr{border:0;border-top:1px solid #eee;margin:20px 0}\n.w3-image{max-width:100%;height:auto}img{margin-bottom:-5px}a{color:inherit}\n.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}.w3-table-all{border:1px solid #ccc}\n.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}\n.w3-table-all tr:nth-child(odd){background-color:#fff}.w3-table-all tr:nth-child(even){background-color:#f1f1f1}\n.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}.w3-centered tr th,.w3-centered tr td{text-align:center}\n.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}\n.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}\n.w3-btn,.w3-button{border:none;display:inline-block;outline:0;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}\n.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}\n.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}   \n.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}\n.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}\n.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}\n.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}\n.w3-tooltip,.w3-display-container{position:relative}.w3-tooltip .w3-text{display:none}.w3-tooltip:hover .w3-text{display:inline-block}\n.w3-ripple:active{opacity:0.5}.w3-ripple{transition:opacity 0s}\n.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}\n.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}\n.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}\n.w3-dropdown-hover:hover .w3-dropdown-content{display:block;z-index:1}\n.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}\n.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}\n.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0}\n.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}\n.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}\n.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}\n.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}\n.w3-main,#main{transition:margin-left .4s}\n.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}\n.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}\n.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}\n.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;outline:none;display:block}\n.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}\n.w3-bar .w3-button{white-space:normal}\n.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;outline:none;white-space:normal;float:none}\n.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}\n.w3-responsive{overflow-x:auto}\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\n.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}\n.w3-col.s1{width:8.33333%}.w3-col.s2{width:16.66666%}.w3-col.s3{width:24.99999%}.w3-col.s4{width:33.33333%}\n.w3-col.s5{width:41.66666%}.w3-col.s6{width:49.99999%}.w3-col.s7{width:58.33333%}.w3-col.s8{width:66.66666%}\n.w3-col.s9{width:74.99999%}.w3-col.s10{width:83.33333%}.w3-col.s11{width:91.66666%}.w3-col.s12{width:99.99999%}\n@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}\n.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}\n.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}\n@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}\n.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}\n.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}\n.w3-content{max-width:980px;margin:auto}.w3-rest{overflow:hidden}\n.w3-cell-row{display:table;width:100%}.w3-cell{display:table-cell}\n.w3-cell-top{vertical-align:top}.w3-cell-middle{vertical-align:middle}.w3-cell-bottom{vertical-align:bottom}\n.w3-hide{display:none!important}.w3-show-block,.w3-show{display:block!important}.w3-show-inline-block{display:inline-block!important}\n@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}\n.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}  \n.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}\n.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}\n@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}\n@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}\n@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}\n@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}}\n.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}.w3-top{top:0}.w3-bottom{bottom:0}\n.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}\n.w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}\n.w3-display-bottomleft{position:absolute;left:0;bottom:0}.w3-display-bottomright{position:absolute;right:0;bottom:0}\n.w3-display-middle{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}\n.w3-display-left{position:absolute;top:50%;left:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}\n.w3-display-right{position:absolute;top:50%;right:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}\n.w3-display-topmiddle{position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\n.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\n.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}\n.w3-display-position{position:absolute}\n.w3-circle{border-radius:50%}\n.w3-round-small{border-radius:2px}.w3-round,.w3-round-medium{border-radius:4px}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}\n.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}\n.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}\n.w3-code,.w3-codespan{font-family:Consolas,\"courier new\";font-size:16px}\n.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}\n.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}\n.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}\n.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}\n.w3-spin{-webkit-animation:w3-spin 2s infinite linear;animation:w3-spin 2s infinite linear}@-webkit-keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\n.w3-animate-fading{-webkit-animation:fading 10s infinite;animation:fading 10s infinite}@-webkit-keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\n.w3-animate-opacity{-webkit-animation:opac 0.8s;animation:opac 0.8s}@-webkit-keyframes opac{from{opacity:0} to{opacity:1}}@keyframes opac{from{opacity:0} to{opacity:1}}\n.w3-animate-top{position:relative;-webkit-animation:animatetop 0.4s;animation:animatetop 0.4s}@-webkit-keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\n.w3-animate-left{position:relative;-webkit-animation:animateleft 0.4s;animation:animateleft 0.4s}@-webkit-keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\n.w3-animate-right{position:relative;-webkit-animation:animateright 0.4s;animation:animateright 0.4s}@-webkit-keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\n.w3-animate-bottom{position:relative;-webkit-animation:animatebottom 0.4s;animation:animatebottom 0.4s}@-webkit-keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\n.w3-animate-zoom {-webkit-animation:animatezoom 0.6s;animation:animatezoom 0.6s}@-webkit-keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}\n.w3-animate-input{transition:width 0.4s ease-in-out}.w3-animate-input:focus{width:100%!important}\n.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}\n.w3-opacity-max{opacity:0.25}.w3-opacity-min{opacity:0.75}\n.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{-webkit-filter:grayscale(100%);filter:grayscale(100%)}\n.w3-greyscale,.w3-grayscale{-webkit-filter:grayscale(75%);filter:grayscale(75%)}.w3-greyscale-min,.w3-grayscale-min{-webkit-filter:grayscale(50%);filter:grayscale(50%)}\n.w3-sepia{-webkit-filter:sepia(75%);filter:sepia(75%)}.w3-sepia-max,.w3-hover-sepia:hover{-webkit-filter:sepia(100%);filter:sepia(100%)}.w3-sepia-min{-webkit-filter:sepia(50%);filter:sepia(50%)}\n.w3-tiny{font-size:10px!important}.w3-small{font-size:12px!important}.w3-medium{font-size:15px!important}.w3-large{font-size:18px!important}\n.w3-xlarge{font-size:24px!important}.w3-xxlarge{font-size:36px!important}.w3-xxxlarge{font-size:48px!important}.w3-jumbo{font-size:64px!important}\n.w3-left-align{text-align:left!important}.w3-right-align{text-align:right!important}.w3-justify{text-align:justify!important}.w3-center{text-align:center!important}\n.w3-border-0{border:0!important}.w3-border{border:1px solid #ccc!important}\n.w3-border-top{border-top:1px solid #ccc!important}.w3-border-bottom{border-bottom:1px solid #ccc!important}\n.w3-border-left{border-left:1px solid #ccc!important}.w3-border-right{border-right:1px solid #ccc!important}\n.w3-topbar{border-top:6px solid #ccc!important}.w3-bottombar{border-bottom:6px solid #ccc!important}\n.w3-leftbar{border-left:6px solid #ccc!important}.w3-rightbar{border-right:6px solid #ccc!important}\n.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}\n.w3-margin{margin:16px!important}.w3-margin-top{margin-top:16px!important}.w3-margin-bottom{margin-bottom:16px!important}\n.w3-margin-left{margin-left:16px!important}.w3-margin-right{margin-right:16px!important}\n.w3-padding-small{padding:4px 8px!important}.w3-padding{padding:8px 16px!important}.w3-padding-large{padding:12px 24px!important}\n.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}\n.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}\n.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}\n.w3-left{float:left!important}.w3-right{float:right!important}\n.w3-button:hover{color:#000!important;background-color:#ccc!important}\n.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}\n.w3-hover-none:hover{box-shadow:none!important}\n/* Colors */\n.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}\n.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}\n.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}\n.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}\n.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}\n.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}\n.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\n.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}\n.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}\n.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}\n.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}\n.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}\n.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}\n.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}\n.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}\n.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}\n.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}\n.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}\n.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}\n.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}\n.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}\n.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}\n.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#bbb!important}\n.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}\n.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}\n.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}\n.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}\n.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}\n.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}\n.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}\n.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}\n.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}\n.w3-text-yellow,.w3-hover-text-yellow:hover{color:#ffeb3b!important}\n.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}\n.w3-text-black,.w3-hover-text-black:hover{color:#000!important}\n.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}\n.w3-text-amber{color:#ffc107!important}\n.w3-text-aqua{color:#00ffff!important}\n.w3-text-light-blue{color:#87CEEB!important}\n.w3-text-brown{color:#795548!important}\n.w3-text-cyan{color:#00bcd4!important}\n.w3-text-blue-grey,.w3-text-blue-gray{color:#607d8b!important}\n.w3-text-light-green{color:#8bc34a!important}\n.w3-text-indigo{color:#3f51b5!important}\n.w3-text-khaki{color:#b4aa50!important}\n.w3-text-lime{color:#cddc39!important}\n.w3-text-orange{color:#ff9800!important}\n.w3-text-deep-orange{color:#ff5722!important}\n.w3-text-pink{color:#e91e63!important}\n.w3-text-purple{color:#9c27b0!important}\n.w3-text-deep-purple{color:#673ab7!important}\n.w3-text-sand{color:#fdf5e6!important}\n.w3-text-teal{color:#009688!important}\n.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}\n.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}\n.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}\n.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}\n.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}\n.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}\n.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}\n.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}\n.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#bbb!important}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".brand-logo{\n\tmargin-left:50px;\n}\n.mr50{\n\tmargin-right: 50px;\n}\n.mr1{\n\tmargin-right: 1%;\n}\n@media only screen and (max-width: 992px)\n{\nnav .brand-logo {\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    margin-left: 0px;\n}\n}\n\n.nav-wrapper{\n\tbackground-color: #27A7FF;\n}\n\n.ml20{\n\tmargin-left: 20px;\n}\n\n.tabs .tab a:hover, .tabs .tab a.active{\n  color: white;\n}\n.tabs .indicator {\n    \n    background-color: rgb(43, 209, 226);\n    height:3px;\n    \n}\n.input-field label{\n\tcolor:#01579b;\n}\n.tabs{\n\tbackground-color: rgba(30, 30, 30, 0.88);\n\n}\n.tabs .tab a{\n\tcolor: rgba(255, 255, 255, 0.57);\n}\n.tabs .tab{\n\tmargin:0 15px 0px 15px;\n}\n.btn1,.btn1:hover,.btn1:focus{\n\tbackground-color: #01579b;\n\n}\n.backform{\n\t    background-color: rgba(0, 0, 0, 0.10)!important;\n       margin-top: -20px;\n    padding-top: 20px;\n}\n.create{\n\t    font-size: 40px;\n    font-family: 'Slabo 27px', serif;\n    font-weight:600;\n}\n.fs30{\n\t    font-size: 30px;\n}\n.pd50{\n\tpadding-left: 50px;\n\tbackground-color: #f2f2f2\n}\n.backform1{\n\t    background-color: rgba(0, 0, 0, 0.10)!important;\n       margin-top: -20px;\n    padding-top: 20px;\n    padding-bottom: 45px;\n}\n.side-nav{\n\twidth:230px;\n}\n.border{\n\tborder:2px solid black;\n}\n\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 14px;\n  color: #FFF;\n}\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%;\n}\n.loginBtn:focus {\n  outline: none;\n}\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\n}\n\n\n/* Facebook */\n.loginBtn--facebook {\n  background-color: #4C69BA;\n  background-image: linear-gradient(#4C69BA, #3B55A0);\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #354C8C;\n}\n.loginBtn--facebook:before {\n  border-right: #364e92 1px solid;\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\n}\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1);\n}\n.side-nav li>a {\n    color: rgba(255, 255, 255, 0.7);\n    display: block;\n    font-size: 14px;\n    font-weight: 500;\n    height: 48px;\n    line-height: 48px;\n    padding: 0 32px;\n}\n\n.side-nav li>a:hover {\n    background-color: rgba(0, 0, 0, 0.25);\n    color: white;\n}\n\n/* Google */\n.loginBtn--google {\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n  background: #DD4B39;\n}\n.loginBtn--google:before {\n  border-right: #BB3F30 1px solid;\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\n}\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37;\n}\n\n.input-field1{\n\t    margin-top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".brand-logo{\n    margin-left:50px;\n}\n.mr50{\n    margin-right: 50px;\n}\n.mr1{\n    margin-right: 1%;\n}\n@media only screen and (max-width: 992px)\n{\nnav .brand-logo {\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    margin-left: 0px;\n}\n}\n\n.nav-wrapper{\n    background-color: #27A7FF;\n}\n\n.ml20{\n    margin-left: 20px;\n}\n\n.tabs .tab a:hover, .tabs .tab a.active{\n  color: white;\n}\n.tabs .indicator {\n    \n    background-color: rgb(43, 209, 226);\n    height:3px;\n    \n}\n.input-field label{\n    color:#01579b;\n}\n.tabs{\n    background-color: rgba(30, 30, 30, 0.88);\n\n}\n.tabs .tab a{\n    color: rgba(255, 255, 255, 0.57);\n}\n.tabs .tab{\n    margin:0 15px 0px 15px;\n}\n.btn1,.btn1:hover,.btn1:focus{\n    background-color: #01579b;\n\n}\n.backform{\n        background-color: rgba(0, 0, 0, 0.10)!important;\n       margin-top: -20px;\n    padding-top: 20px;\n}\n.create{\n        font-size: 40px;\n    font-family: 'Slabo 27px', serif;\n    font-weight:600;\n}\n.fs30{\n        font-size: 30px;\n}\n.pd50{\n    padding-left: 50px;\n    background-color: #f2f2f2\n}\n.backform1{\n        background-color: rgba(0, 0, 0, 0.10)!important;\n       margin-top: -20px;\n    padding-top: 20px;\n    padding-bottom: 45px;\n}\n.side-nav{\n    width:230px;\n}\n.border{\n    border:2px solid black;\n}\n\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 14px;\n  color: #FFF;\n}\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%;\n}\n.loginBtn:focus {\n  outline: none;\n}\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\n}\n\n\n/* Facebook */\n.loginBtn--facebook {\n  background-color: #4C69BA;\n  background-image: linear-gradient(#4C69BA, #3B55A0);\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #354C8C;\n}\n.loginBtn--facebook:before {\n  border-right: #364e92 1px solid;\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\n}\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1);\n}\n.side-nav li>a {\n    color: rgba(255, 255, 255, 0.7);\n    display: block;\n    font-size: 14px;\n    font-weight: 500;\n    height: 48px;\n    line-height: 48px;\n    padding: 0 32px;\n}\n\n.side-nav li>a:hover {\n    background-color: rgba(0, 0, 0, 0.25);\n    color: white;\n}\n\n/* Google */\n.loginBtn--google {\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n  background: #DD4B39;\n}\n.loginBtn--google:before {\n  border-right: #BB3F30 1px solid;\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\n}\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37;\n}\n\n.input-field1{\n        margin-top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/* W3.CSS 4.04 Apr 2017 by Jan Egil and Borge Refsnes */\nhtml{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\nhtml{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}\naudio,canvas,progress,video{display:inline-block}progress{vertical-align:baseline}\naudio:not([controls]){display:none;height:0}[hidden],template{display:none}\na{background-color:transparent;-webkit-text-decoration-skip:objects}\na:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\ndfn{font-style:italic}mark{background:#ff0;color:#000}\nsmall{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\nsub{bottom:-0.25em}sup{top:-0.5em}figure{margin:1em 40px}img{border-style:none}svg:not(:root){overflow:hidden}\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}\nbutton,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:bold}\nbutton,input{overflow:visible}button,select{text-transform:none}\nbutton,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}\nbutton::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner{border-style:none;padding:0}\nbutton:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring{outline:1px dotted ButtonText}\nfieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}\nlegend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}\n[type=checkbox],[type=radio]{padding:0}\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\n[type=search]{-webkit-appearance:textfield;outline-offset:-2px}\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}\n::-webkit-input-placeholder{color:inherit;opacity:0.54}\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n/* End extract */\nhtml,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}html{overflow-x:hidden}\nh1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}.w3-serif{font-family:serif}\nh1,h2,h3,h4,h5,h6{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide{letter-spacing:4px}\nhr{border:0;border-top:1px solid #eee;margin:20px 0}\n.w3-image{max-width:100%;height:auto}img{margin-bottom:-5px}a{color:inherit}\n.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}.w3-table-all{border:1px solid #ccc}\n.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}\n.w3-table-all tr:nth-child(odd){background-color:#fff}.w3-table-all tr:nth-child(even){background-color:#f1f1f1}\n.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}.w3-centered tr th,.w3-centered tr td{text-align:center}\n.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}\n.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}\n.w3-btn,.w3-button{border:none;display:inline-block;outline:0;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}\n.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}\n.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}   \n.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}\n.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}\n.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}\n.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}\n.w3-tooltip,.w3-display-container{position:relative}.w3-tooltip .w3-text{display:none}.w3-tooltip:hover .w3-text{display:inline-block}\n.w3-ripple:active{opacity:0.5}.w3-ripple{transition:opacity 0s}\n.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}\n.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}\n.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}\n.w3-dropdown-hover:hover .w3-dropdown-content{display:block;z-index:1}\n.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}\n.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}\n.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0}\n.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}\n.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}\n.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}\n.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}\n.w3-main,#main{transition:margin-left .4s}\n.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}\n.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}\n.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}\n.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;outline:none;display:block}\n.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}\n.w3-bar .w3-button{white-space:normal}\n.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;outline:none;white-space:normal;float:none}\n.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}\n.w3-responsive{overflow-x:auto}\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\n.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}\n.w3-col.s1{width:8.33333%}.w3-col.s2{width:16.66666%}.w3-col.s3{width:24.99999%}.w3-col.s4{width:33.33333%}\n.w3-col.s5{width:41.66666%}.w3-col.s6{width:49.99999%}.w3-col.s7{width:58.33333%}.w3-col.s8{width:66.66666%}\n.w3-col.s9{width:74.99999%}.w3-col.s10{width:83.33333%}.w3-col.s11{width:91.66666%}.w3-col.s12{width:99.99999%}\n@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}\n.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}\n.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}\n@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}\n.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}\n.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}\n.w3-content{max-width:980px;margin:auto}.w3-rest{overflow:hidden}\n.w3-cell-row{display:table;width:100%}.w3-cell{display:table-cell}\n.w3-cell-top{vertical-align:top}.w3-cell-middle{vertical-align:middle}.w3-cell-bottom{vertical-align:bottom}\n.w3-hide{display:none!important}.w3-show-block,.w3-show{display:block!important}.w3-show-inline-block{display:inline-block!important}\n@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}\n.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}  \n.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}\n.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}\n@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}\n@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}\n@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}\n@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}}\n.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}.w3-top{top:0}.w3-bottom{bottom:0}\n.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}\n.w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}\n.w3-display-bottomleft{position:absolute;left:0;bottom:0}.w3-display-bottomright{position:absolute;right:0;bottom:0}\n.w3-display-middle{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}\n.w3-display-left{position:absolute;top:50%;left:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}\n.w3-display-right{position:absolute;top:50%;right:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}\n.w3-display-topmiddle{position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\n.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\n.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}\n.w3-display-position{position:absolute}\n.w3-circle{border-radius:50%}\n.w3-round-small{border-radius:2px}.w3-round,.w3-round-medium{border-radius:4px}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}\n.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}\n.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}\n.w3-code,.w3-codespan{font-family:Consolas,\"courier new\";font-size:16px}\n.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}\n.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}\n.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}\n.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}\n.w3-spin{-webkit-animation:w3-spin 2s infinite linear;animation:w3-spin 2s infinite linear}@-webkit-keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\n.w3-animate-fading{-webkit-animation:fading 10s infinite;animation:fading 10s infinite}@-webkit-keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\n.w3-animate-opacity{-webkit-animation:opac 0.8s;animation:opac 0.8s}@-webkit-keyframes opac{from{opacity:0} to{opacity:1}}@keyframes opac{from{opacity:0} to{opacity:1}}\n.w3-animate-top{position:relative;-webkit-animation:animatetop 0.4s;animation:animatetop 0.4s}@-webkit-keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\n.w3-animate-left{position:relative;-webkit-animation:animateleft 0.4s;animation:animateleft 0.4s}@-webkit-keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\n.w3-animate-right{position:relative;-webkit-animation:animateright 0.4s;animation:animateright 0.4s}@-webkit-keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\n.w3-animate-bottom{position:relative;-webkit-animation:animatebottom 0.4s;animation:animatebottom 0.4s}@-webkit-keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\n.w3-animate-zoom {-webkit-animation:animatezoom 0.6s;animation:animatezoom 0.6s}@-webkit-keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}\n.w3-animate-input{transition:width 0.4s ease-in-out}.w3-animate-input:focus{width:100%!important}\n.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}\n.w3-opacity-max{opacity:0.25}.w3-opacity-min{opacity:0.75}\n.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{-webkit-filter:grayscale(100%);filter:grayscale(100%)}\n.w3-greyscale,.w3-grayscale{-webkit-filter:grayscale(75%);filter:grayscale(75%)}.w3-greyscale-min,.w3-grayscale-min{-webkit-filter:grayscale(50%);filter:grayscale(50%)}\n.w3-sepia{-webkit-filter:sepia(75%);filter:sepia(75%)}.w3-sepia-max,.w3-hover-sepia:hover{-webkit-filter:sepia(100%);filter:sepia(100%)}.w3-sepia-min{-webkit-filter:sepia(50%);filter:sepia(50%)}\n.w3-tiny{font-size:10px!important}.w3-small{font-size:12px!important}.w3-medium{font-size:15px!important}.w3-large{font-size:18px!important}\n.w3-xlarge{font-size:24px!important}.w3-xxlarge{font-size:36px!important}.w3-xxxlarge{font-size:48px!important}.w3-jumbo{font-size:64px!important}\n.w3-left-align{text-align:left!important}.w3-right-align{text-align:right!important}.w3-justify{text-align:justify!important}.w3-center{text-align:center!important}\n.w3-border-0{border:0!important}.w3-border{border:1px solid #ccc!important}\n.w3-border-top{border-top:1px solid #ccc!important}.w3-border-bottom{border-bottom:1px solid #ccc!important}\n.w3-border-left{border-left:1px solid #ccc!important}.w3-border-right{border-right:1px solid #ccc!important}\n.w3-topbar{border-top:6px solid #ccc!important}.w3-bottombar{border-bottom:6px solid #ccc!important}\n.w3-leftbar{border-left:6px solid #ccc!important}.w3-rightbar{border-right:6px solid #ccc!important}\n.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}\n.w3-margin{margin:16px!important}.w3-margin-top{margin-top:16px!important}.w3-margin-bottom{margin-bottom:16px!important}\n.w3-margin-left{margin-left:16px!important}.w3-margin-right{margin-right:16px!important}\n.w3-padding-small{padding:4px 8px!important}.w3-padding{padding:8px 16px!important}.w3-padding-large{padding:12px 24px!important}\n.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}\n.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}\n.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}\n.w3-left{float:left!important}.w3-right{float:right!important}\n.w3-button:hover{color:#000!important;background-color:#ccc!important}\n.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}\n.w3-hover-none:hover{box-shadow:none!important}\n/* Colors */\n.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}\n.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}\n.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}\n.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}\n.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}\n.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}\n.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\n.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}\n.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}\n.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}\n.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}\n.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}\n.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}\n.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}\n.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}\n.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}\n.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}\n.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}\n.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}\n.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}\n.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}\n.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}\n.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#bbb!important}\n.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}\n.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}\n.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}\n.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}\n.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}\n.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}\n.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}\n.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}\n.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}\n.w3-text-yellow,.w3-hover-text-yellow:hover{color:#ffeb3b!important}\n.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}\n.w3-text-black,.w3-hover-text-black:hover{color:#000!important}\n.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}\n.w3-text-amber{color:#ffc107!important}\n.w3-text-aqua{color:#00ffff!important}\n.w3-text-light-blue{color:#87CEEB!important}\n.w3-text-brown{color:#795548!important}\n.w3-text-cyan{color:#00bcd4!important}\n.w3-text-blue-grey,.w3-text-blue-gray{color:#607d8b!important}\n.w3-text-light-green{color:#8bc34a!important}\n.w3-text-indigo{color:#3f51b5!important}\n.w3-text-khaki{color:#b4aa50!important}\n.w3-text-lime{color:#cddc39!important}\n.w3-text-orange{color:#ff9800!important}\n.w3-text-deep-orange{color:#ff5722!important}\n.w3-text-pink{color:#e91e63!important}\n.w3-text-purple{color:#9c27b0!important}\n.w3-text-deep-purple{color:#673ab7!important}\n.w3-text-sand{color:#fdf5e6!important}\n.w3-text-teal{color:#009688!important}\n.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}\n.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}\n.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}\n.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}\n.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}\n.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}\n.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}\n.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}\n.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#bbb!important}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".brand-logo{\n  margin-left:50px;\n}\n.mr50{\n  margin-right: 50px;\n}\n.mr1{\n  margin-right: 1%;\n}\n@media only screen and (max-width: 992px)\n{\nnav .brand-logo {\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    margin-left: 0px;\n}\n}\n\n.nav-wrapper{\n  background-color: #27A7FF;\n}\n\n.ml20{\n  margin-left: 20px;\n}\n\n.tabs .tab a:hover, .tabs .tab a.active{\n  color: white;\n}\n.tabs .indicator {\n    \n    background-color: rgb(43, 209, 226);\n    height:3px;\n    \n}\n.input-field label{\n  color:#01579b;\n}\n.tabs{\n  background-color: rgba(30, 30, 30, 0.88);\n\n}\n.tabs .tab a{\n  color: rgba(255, 255, 255, 0.57);\n}\n.tabs .tab{\n  margin:0 15px 0px 15px;\n}\n.btn1,.btn1:hover,.btn1:focus{\n  background-color: #01579b;\n\n}\n.backform{\n      background-color: rgba(0, 0, 0, 0.10)!important;\n       margin-top: -20px;\n    padding-top: 20px;\n}\n.create{\n      font-size: 40px;\n    font-family: 'Slabo 27px', serif;\n    font-weight:600;\n}\n.fs30{\n      font-size: 30px;\n}\n.pd50{\n  padding-left: 50px;\n  background-color: #f2f2f2\n}\n.backform1{\n      background-color: rgba(0, 0, 0, 0.10)!important;\n       margin-top: -20px;\n    padding-top: 20px;\n    padding-bottom: 45px;\n}\n.side-nav{\n  width:230px;\n}\n.border{\n  border:2px solid black;\n}\n\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 14px;\n  color: #FFF;\n}\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%;\n}\n.loginBtn:focus {\n  outline: none;\n}\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\n}\n\n\n/* Facebook */\n.loginBtn--facebook {\n  background-color: #4C69BA;\n  background-image: linear-gradient(#4C69BA, #3B55A0);\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #354C8C;\n}\n.loginBtn--facebook:before {\n  border-right: #364e92 1px solid;\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\n}\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1);\n}\n.side-nav li>a {\n    color: rgba(255, 255, 255, 0.7);\n    display: block;\n    font-size: 14px;\n    font-weight: 500;\n    height: 48px;\n    line-height: 48px;\n    padding: 0 32px;\n}\n\n.side-nav li>a:hover {\n    background-color: rgba(0, 0, 0, 0.25);\n    color: white;\n        border-left: 3px solid #8e55fb;\n}\n\n/* Google */\n.loginBtn--google {\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n  background: #DD4B39;\n}\n.loginBtn--google:before {\n  border-right: #BB3F30 1px solid;\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\n}\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37;\n}\n\n.input-field1{\n      margin-top: 0;\n}\n.event{\n  font-size: 27px;\n    padding-left: 10px;\n    padding-top: 20px;\n    font-weight: 300;\n}\ni.left {\n    float: left;\n    margin-right: 5px;\n}\n.input-field input[type=date]:focus + label,\n    .input-field input[type=text]:focus + label,\n    .input-field input[type=email]:focus + label,\n    .input-field input[type=password]:focus + label {\n      color: #01579b;\n    }\n\n    .input-field input[type=date]:focus,\n    .input-field input[type=text]:focus,\n    .input-field input[type=email]:focus,\n    .input-field input[type=password]:focus {\n      border-bottom: 2px solid #01579b;\n      box-shadow: none;\n    }\n    i.left1 {\n    float: left;\n    margin-right: 5px;\n    margin-top: 13px;\n}\n\n.input-field .prefix.active{\n  color:#01579b;\n}\nlabel{\n      font-size: 13px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "\n<app-dashboard></app-dashboard>\n<div style=\" background-color: #d8f3ff;      margin-top: -2%;padding-top: 2%;\">\n<div class=\"container\">\n  <h2>Create Jobs</h2>\n   <div style=\"background-color: white;border-right: 1px solid #ddd;border-left: 1px solid #ddd;border-bottom: 1px solid #ddd;margin-bottom: 20px;\">\n  <ul class=\"nav nav-tabs\">\n    <li class=\"active\"><a class=\"nooutline\" data-toggle=\"tab\" href=\"#home\">Job Details</a></li>\n    <li><a class=\"nooutline\" data-toggle=\"tab\" href=\"#menu1\">Organization</a></li>\n    <li><a class=\"nooutline\" data-toggle=\"tab\" href=\"#menu2\">Requirements</a></li>\n    \n  </ul>\n  <div class=\"tab-content\">\n\n   <div id=\"home\" class=\"tab-pane fade in active\">\n   \n<div class=\"box1\">\n<h2>Job Details:</h2>\n <div class=\"form-group\">\n \n  \n \n  <input type=\"hidden\" name=\"title\"    required=\"\"><a href=\"#\" class=\" icon user\"></a>\n  </div >\n  <div>\n  <span class=\"input input--hoshi\">\n  \n  <input class='input__field input__field--hoshi'  type=\"text\" name=\"title\">\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"   for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Job Title</span></label></span>\n  </div >\n  <div>\n    <span class=\"input input--hoshi\">\n\n  \n  <input class='input__field input__field--hoshi' type=\"text\" name=\"desciption\">\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"desciption\"><span class=\"input__label-content input__label-content--hoshi\">Job Description</span></label>\n  </span>\n  </div >\n\n   <div class=\"form-group\">\n \n    <label style=\"    font-weight: 100;margin-left: 10px; color:#717070;}\" for=\"game\">Event Sport</label>\n      <select class=\"form-control mr5\" name=\"game\"  style=\" width: 98.5%; border-radius: 0;     padding-left: 0px;  border: none;border-bottom: 1px solid   #5f5d5d; box-shadow: none;\" required>\n        <option> Select</option>\n          <option> Part Time</option>\n            <option> Full Time</option>\n      </select>\n      \n      \n    </div>\n    <div class=\"form-group\">\n \n    <label style=\"    font-weight: 100;margin-left: 10px; color:#717070;}\" for=\"game\">Event Category</label>\n      <select class=\"form-control mr5\" name=\"game\"  style=\" width: 98.5%; border-radius: 0;    padding-left: 0px;   border: none;border-bottom: 1px solid   #5f5d5d; box-shadow: none;\" required>\n        <option> Select</option>\n          <option> Cricket</option>\n            <option> Football</option>\n             <option> Hockey</option>\n      </select>\n      \n      \n    </div>\n\n  <div>\n<span class=\"input input--hoshi\">\n\n  <input class='input__field input__field--hoshi' type=\"text\" name=\"title\">\n\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Address line 1</span></label>\n  </span>\n  </div >\n  <div>\n<span class=\"input input--hoshi\">\n\n  <input class='input__field input__field--hoshi' type=\"text\" name=\"title\">\n\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Address line 2</span></label>\n  </span>\n  </div >\n  <div>\n<span class=\"input input--hoshi\">\n\n  <input class='input__field input__field--hoshi' type=\"text\" name=\"title\">\n\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Job Location</span></label>\n  </span>\n  </div >\n  <div class=\" wd60 pd0 fl\">\n       <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' type=\"text\" name=\"title\">\n    <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">State</span></label>\n    </span>\n  </div >\n  <div class=\"wd60 pd0 fr\">\n   <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' type=\"text\" name=\"title\" >\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">PIN</span></label>\n  </span>\n  </div >\n  <div>\n<span class=\"input input--hoshi\">\n\n  <input class='input__field input__field--hoshi' type=\"text\" name=\"title\">\n\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Job Link</span></label>\n  </span>\n  </div >\n<div >\n    \n  </div>\n  </div>\n    </div>\n\n       <!-- Tab 2 start -->\n    \n\n    <div id=\"menu1\" class=\"tab-pane fade\">  \n    \n<div class=\"box1\">\n<h2>Organisation Details:</h2>\n  <div>\n  <span class=\"input input--hoshi\">\n \n  <input class='input__field input__field--hoshi' type=\"text\" name=\"title\">\n   <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Organisation Name</span></label>\n  </span>\n  </div >\n    <div>\n       <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' type=\"text\" name=\"title\">\n    <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">About Organisation</span></label>\n    </span>\n  </div >\n  <div>\n   <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' type=\"text\" name=\"title\">\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Address Line 1</span></label>\n  </span>\n  </div >\n  \n  <div>\n   <span class=\"input input--hoshi\">\n  <input type=\"text\" name=\"title\"  class=\"input__field input__field--hoshi validate datepicker\">\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Address Line 2</span></label>\n  </span>\n  </div >\n   \n  <div class=\" wd60 pd0 fl\">\n       <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' type=\"text\" name=\"title\">\n    <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Job Location</span></label>\n    </span>\n  </div >\n  <div class=\"wd60 pd0 fr\">\n   <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' type=\"text\" name=\"title\">\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">State</span></label>\n  </span>\n  </div >\n  <div class=\" wd60 pd0 fl\">\n       <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' type=\"text\" name=\"title\">\n    <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Mobile No.</span></label>\n    </span>\n  </div >\n  <div class=\"wd60 pd0 fr\">\n   <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' type=\"text\" name=\"title\">\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">PIN</span></label>\n  </span>\n  </div >\n  \n  \n  <div>\n   <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' type=\"text\" name=\"title\"    onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = '';}\" >\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Email</span></label>\n  </span>\n  </div >\n  \n</div>\n    </div>\n\n<!-- new Tab 3 -->\n\n\n  <div id=\"menu2\" class=\"tab-pane fade\">\n   \n  <div class=\"box1\">\n  <h2>Requirement:</h2>\n  <div>\n  <span class=\"input input--hoshi\">\n  <input  type=\"text\" name=\"title\"  class=\"input__field input__field--hoshi validate datepicker\" >\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Work Experience</span></label>\n  </span>\n  </div >\n  <div>\n  <span class=\"input input--hoshi\">\n  <input type=\"text\" name=\"title\"  class=\"input__field input__field--hoshi validate datepicker\" >\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Qualification</span></label>\n  </span>\n  </div >\n  <div>\n  <span class=\"input input--hoshi\">\n  <input type=\"text\" name=\"title\"  class=\"input__field input__field--hoshi validate datepicker\" >\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Desired Skill</span></label>\n  </span>\n  </div >\n  <div>\n  <span class=\"input input--hoshi\">\n  <input  type=\"text\" name=\"title\"  class=\"input__field input__field--hoshi validate datepicker\" >\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Key Requirements</span></label>\n  </span>\n  </div>\n  <div class=\"form-group\">\n  <label style=\"    font-weight: 100;margin-left: 10px; color:#717070;}\" for=\"game\">Event Sport</label>\n  <select class=\"form-control mr5\" name=\"game\"  style=\" width: 98.5%; border-radius: 0;     padding-left: 0px;  border: none;border-bottom: 1px solid   #5f5d5d; box-shadow: none;\" required>\n  <option> Select</option>\n  <option> Male</option>\n  <option> Female</option>\n  </select>\n  </div>\n  </div>\n  </div>\n  </div>\n  <div class=\"container\">\n  <div class=\"row\">    \n  <div class=\"col-xs-6 col-md-4 col-md-offset-2 col-sm-6 col-sm-offset-2\" style=\"margin-bottom: 20px;   float: left;margin-left: 0%;\">  \n            <!-- image-preview-filename input [CUT FROM HERE]-->\n  <div class=\"input-group image-preview\">\n  <input type=\"text\" class=\"form-control image-preview-filename\" disabled=\"disabled\"> <!-- don't give a name === doesn't send on POST/GET -->\n                <span class=\"input-group-btn\">\n                    <!-- image-preview-clear button -->\n                    <button type=\"button\" class=\"btn btn-default image-preview-clear\" style=\"display:none;\">\n                        <span class=\"glyphicon glyphicon-remove\"></span> Clear\n                    </button>\n                    <!-- image-preview-input -->\n                    <div class=\"btn btn-default image-preview-input\">\n                        <span class=\"glyphicon glyphicon-folder-open\"></span>\n                        <span class=\"image-preview-input-title\">Browse</span>\n                        <input class=\"files1\" type=\"file\" accept=\"image/png, image/jpeg, image/gif\" id=\"Jimage\" name=\"file\"  />\n                        \n                         <!-- rename it -->\n                    </div>\n                     <input id=\"button\" type=\"submit\" class=\"btn btn-danger\" value=\"Upload Image\" name=\"submit\" style=\"    background-color: #03a9f4; border-color: #03a9f4;\">\n                </span>\n            </div><!-- /input-group image-preview [TO HERE]--> \n        </div>\n    </div>\n</div>\n   <div class=\"p-container\">\n    <input style=\"outline: none;    margin-left: 15px;margin-bottom: 15px;\" type=\"submit\" (click) =\"Create(events)\" class=\"btn btn-primary\" value=\"Submit\" >\n    <div class=\"clear\"> </div>\n    </div>\n  </div>\n</div>\n\n</div>"

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<!-- <section class=\"content-header\">\n   <h1>\n     List Content \n      <small></small>\n   </h1>\n   <h1>{{username}}</h1>\n</section>\n<section class=\"content\">\n   <div class=\"row\">\n      <div class=\"col-md-12\">\n         <div class=\"nav-tabs-custom\">\n            <ul class=\"nav nav-tabs\">\n               <li class=\"active\"><a href=\"#content\" data-toggle=\"tab\">Content</a></li>\n               <li class=\"pull-right\"><a routerLink=\"/tournament\" class=\"btn btn-info\"><i class=\"fa fa-plus-square\"></i> ADD</a></li>\n            </ul>\n            <div class=\"tab-content\">\n               <div class=\"tab-pane active\" id=\"content\">\n                  <div class=\"box-body\">\n                     <table id=\"example2\" class=\"table table-bordered table-hover\">\n                        <thead>\n                           <tr>\n                              <th class=\"text-center\" >title</th>\n                              <th class=\"text-center\" >content</th>\n                              <th class=\"text-center\" >userid</th>\n                              <th class=\"text-center\" >publish</th>\n                              <th class=\"text-center\" >url</th>\n                              <th class=\"text-center\" ></th>\n                           </tr>\n                        </thead>\n                        <tbody >\n                           <tr *ngFor='let content of Contents' >\n                              <td class=\"text-center\">{{ content.title }}</td>\n                              <td class=\"text-center\">{{ content.content }}</td>\n                              <td class=\"text-center\">{{ content.userid }}</td>\n                              <td class=\"text-center\">{{ content.publish }}</td>\n                              <td class=\"text-center\">{{ content.url }}</td>\n                              <td class=\"text-center\"><a href=\"javascript:void(0)\" (click)= \"editContent(content.id)\">Edit</a></td>\n                           </tr>\n                        </tbody>\n                     </table>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</section>\n<div class=\"form-group\">\n<label for=\"link\">Start Date</label>\n<input type=\"text\" class=\"form-control\"  id=\"startD\" placeholder=\"Enter Start Date\">\n<label id=\"start_date_error\" hidden>Start Date is required .</label> \n</div >\n <input type=\"date\" name=\"\" class=\"form-control\"> -->\n\n\n\n<div class=\"wrapper\" style=\"background-color: #efefef; margin-top: 50px;\">\n<div class=\"content-wrapper\">\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-lg-11 col-sm-11\">\n    <div class=\"card hovercard\">\n        <div class=\"card-background\">\n\n             \n          <!--   <img class=\"card-bkimg\" alt=\"\" src=\"http://lorempixel.com/100/100/people/9/\"> -->\n            <!-- http://lorempixel.com/850/280/people/9/ -->\n             <img class=\"card-bkimg\" alt=\"\" src=\"#\" alt=\"User profile picture\">\n        </div>\n        <div class=\"useravatar\">\n\n           <img class=\"card-bkimg\" alt=\"\" src=\"#\" alt=\"User profile picture\">\n                <img class=\"card-bkimg\" alt=\"\" src=\"#\" alt=\"User profile picture\">\n\n          <img class=\"card-bkimg\" alt=\"\" src=\"#\" alt=\"User profile picture\">\n         \n        </div>\n        <div class=\"card-info\"><span class=\"card-title\">Harshvardhan</span></div>\n    \n         <div class=\"card-name\" ><span ><b>Coach</b></span></div>\n         \n    </div>\n    <div class=\"btn-pref btn-group btn-group-justified btn-group-lg\" role=\"group\" aria-label=\"...\">\n        <div class=\"btn-group\" role=\"group\">\n            <button type=\"button\" id=\"stars\" class=\"btn btn-primary\" href=\"#tab1\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>\n                <div class=\"hidden-xs\">Education</div>\n            </button>\n        </div>\n        <div class=\"btn-group\" role=\"group\">\n            <button type=\"button\" id=\"favorites\" class=\"btn btn-default\" href=\"#tab2\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span>\n                <div class=\"hidden-xs\">Experience</div>\n            </button>\n        </div>\n        <div class=\"btn-group\" role=\"group\">\n            <button type=\"button\" id=\"following\" class=\"btn btn-default\" href=\"#tab3\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                <div class=\"hidden-xs\">Others</div>\n            </button>\n        </div>\n        <!-- <div class=\"btn-group\" role=\"group\">\n            <button type=\"button\" id=\"basic\" class=\"btn btn-default\" href=\"#tab4\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-heart\" aria-hidden=\"true\"></span>\n                <div class=\"hidden-xs\">Favorites</div>\n            </button>\n        </div> -->\n    </div>\n\n\n      <div class=\"tab-content\">\n       <div class=\"tab-pane fade in active\" id=\"tab1\">\n           \n          <div class=\"row\">\n          <div class=\"col-md-12\">\n          <div class=\"box box-primary\" style=\"margin-top:5%;\">\n          <div class=\"box-body box-profile\">\n          <input type=\"hidden\" name=\"userid\" id=\"uid\" value=\"\">\n           <input type=\"hidden\" name=\"prof_id\" id=\"prof_id\" value=\"\">\n\n           <div class=\"panel panel-primary\">\n              <div class=\"panel-heading clearfix\">\n\n              <div>\n                <h4 class=\"panel-title\" style=\"font-weight: bold;font-size: 17px;\">Sports Education</h4>\n                </div>\n                 <div> \n                    <div class=\"box-header with-border\">\n                     <div id=\"SportTicket\" >\n                     </div>\n                     </div>\n                    </div>\n                <div class=\"btn-group pull-right\">\n                  <input type=\"button\" id=\"addSportEdu\" class=\"btn btn-danger btn1\" value=\"Add Sport Education\" />\n                </div>\n              </div>\n    </div>\n          \n          \n\n               \n      <div class=\"panel panel-primary\">\n      <div class=\"panel-heading clearfix\">\n      <div>\n      <h4 class=\"panel-title\" style=\"font-weight: bold;font-size: 17px;\">Formal Education</h4>\n      </div>\n      <div>\n      <div class=\"box-header with-border\">\n      <div id=\"FormalEducation\" ></div>\n      </div>\n      </div>   \n      <div class=\"btn-group pull-right\">\n      <input type=\"button\" id=\"addSportFormal\" class=\"btn btn-danger btn1\" value=\"Add Formal Education\" />\n      </div>\n      </div>\n      </div>\n               \n               \n          \n          \n\n <div class=\"panel panel-primary\">\n    <div class=\"panel-heading clearfix\">\n    <div>\n    <h4 class=\"panel-title\" style=\"font-weight: bold;font-size: 17px;\">Certification</h4>\n    </div>\n    <div>\n    <div class=\"box-header with-border\">  \n    <div id=\"OtherEducation\" ></div>\n    </div>\n    </div>\n    <div class=\"btn-group pull-right\">\n    <input type=\"button\" id=\"addothereducation\" class=\"btn btn-danger btn1\" value=\"Add Certification\" />\n    </div>\n    </div>\n    </div>\n\n\n\n            \n            </div>\n          </div>\n         \n\n</div>\n     \n            </div>\n\n        </div>\n        <div class=\"tab-pane fade in\" id=\"tab2\">\n        <div class=\"row\"> \n        <div class=\"col-md-12\">\n        <div class=\"box box-primary\" style=\"margin-top:5%;\">\n            <div class=\"box-header with-border\">\n          \n\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading clearfix\">\n\n    <div>\n      <h4 class=\"panel-title\" style=\"font-weight: bold;font-size: 17px;\">Work Experience</h4>\n      </div>\n      <div id=\"workexpericence\"></div>\n      <div class=\"btn-group pull-right\">\n        <input type=\"button\" id=\"workexp\" class=\"btn btn-danger btn1\" value=\"Add Work Experience\" />\n      </div>\n\n    </div>\n    </div>\n\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading clearfix\">\n\n    <div>\n      <h4 class=\"panel-title\" style=\"font-weight: bold;font-size: 17px;\">Experience as a Player</h4>\n\n      </div>\n      <div id=\"playerexp\"></div>\n      <div class=\"btn-group pull-right\">\n       <input type=\"button\" id=\"asplayerexp\" class=\"btn btn-danger btn1\" value=\"Add Experience as player\" />\n      </div>\n    </div>\n    </div>\n           \n            \n         \n          </div>\n         </div>\n         </div>\n            \n            </div>\n             \n        </div>\n        <div class=\"tab-pane fade in\" id=\"tab3\">\n        <div class=\"row\"> \n        <div class=\"col-md-12\">\n        <div class=\"box box-primary\" style=\"margin-top:5%;\">\n        <div class=\"box-header with-border\">\n        <div class='box-body'  style='background-color: white; border-color: black; border-radius: 4px;padding: 10px 20px;margin-bottom: 30px;margin-top: 10px; box-shadow: 0px 0px 3px #bbbdbd;    -webkit-box-shadow: 0px 0px 3px #bbbdbd;'>\n\n        <div>\n          <span class=\"input input--hoshi\">\n        \n        <input type=\"text\" class='input__field input__field--hoshi' name=\"dob\" id=\"dob\" value=\"<?php echo $value['dob'];?>\" disabled>\n        <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"dob\"><span class=\"input__label-content input__label-content--hoshi\">Date Of Birth</span></label>\n        </span>\n        </div>\n         \n\n        <div>\n          <span class=\"input input--hoshi\">\n        \n        <input type=\"text\" class='input__field input__field--hoshi' name=\"prof_language\" id=\"prof_language\" value=\"<?php echo $value['prof_language'];?>\"  >\n        <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"prof_language\"><span class=\"input__label-content input__label-content--hoshi\">Language Known</span></label>\n        </span>\n        </div>\n\n        <div>\n          <span class=\"input input--hoshi\">\n       \n        <input type=\"text\" class='input__field input__field--hoshi' name=\"rurl\" id=\"rurl\" >\n         <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"exampleInputEmail1\"><span class=\"input__label-content input__label-content--hoshi\">Age Group Coach</span></label>\n        </span>\n        </div>\n\n        <div>\n          <span class=\"input input--hoshi\">\n        \n        <input type=\"text\" class='input__field input__field--hoshi' name=\"prof_name\" id=\"prof_name\" value=\"<?php echo $value['prof_name'];?>\" disabled>\n        <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"prof_name\"><span class=\"input__label-content input__label-content--hoshi\">Profession</span></label>\n        </span>\n        </div>\n        <div>\n          <span class=\"input input--hoshi\">\n        \n        <input type=\"text\" class='input__field input__field--hoshi' name=\"sport\" id=\"sport\" value=\"<?php echo $value['sport'];?>\"  disabled>\n        <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"sport\"><span class=\"input__label-content input__label-content--hoshi\">Sport</span></label>\n        </span>\n        </div>\n        <div>\n          <span class=\"input input--hoshi\">\n       \n        <input type=\"text\" class='input__field input__field--hoshi' name=\"gender\" id=\"gender\" value=\"<?php echo $value['gender'];?>\"  disabled>\n         <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"gender\"><span class=\"input__label-content input__label-content--hoshi\">Gender</span></label>\n        </span>\n        </div>\n        <div>\n          <span class=\"input input--hoshi\">\n       \n        <input type=\"text\" class='input__field input__field--hoshi' name=\"rurl\" id=\"rurl\" >\n         <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"exampleInputEmail1\"><span class=\"input__label-content input__label-content--hoshi\">Link to personal Website</span></label>\n        </span>\n        </div>\n\n\n        <div>\n          <span class=\"input input--hoshi\">\n        \n        <input type=\"text\" class='input__field input__field--hoshi' name=\"academy_name\" id=\"academy_name\" >\n        <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"academy_name\"><span class=\"input__label-content input__label-content--hoshi\">Academy / Business Name</span></label>\n        </span>\n        </div>\n        <div>\n          <span class=\"input input--hoshi\">\n       \n        <input type=\"text\" class='input__field input__field--hoshi' name=\"Location\" id=\"location\" >\n         <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"location\"><span class=\"input__label-content input__label-content--hoshi\">Location</span></label>\n        </span>\n        </div>\n        <div>\n          <span class=\"input input--hoshi\">\n       \n        <input type=\"text\" class='input__field input__field--hoshi' name=\"Description\" id=\"description\" >\n        <input type=\"hidden\" class='input__field input__field--hoshi' name=\"Prof\" id=\"prof_name\" value=\"\">\n         <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"description\"><span class=\"input__label-content input__label-content--hoshi\">Description</span></label>\n        </span>\n        </div>\n        </div>\n        </div>\n        </div>\n        </div>\n        </div>\n        \n        </div>\n      </div>\n\n      <div class=\"box-footer\">\n      <input type=\"button\" class=\"btn btn-lg btn-primary\" id=\"save\" onclick=\"\" value=\"Submit\" name=\"Submit\">\n      </div>\n\n\n    </div>\n     </div>\n      </div>\n    </div>\n    \n    </div>\n "

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-default\" style=\"background-color: #1d8587\" role=\"navigation\" *ngIf=\"showMenu\">\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n     \n    </button>    \n  </div>\n  <div class=\"navbar-collapse collapse\">\n  \n    <ul class=\"nav navbar-nav\">\n    <a routerLink=\"/home\" ><img style=\"width:15%\" src=\"http://www.getsporty.in/img/logo.png\"></a>\n      <!-- <a href=\"\" class=\"brand-logo\">Company's logo</a> -->\n    </ul>\n\n    <ul class=\"nav navbar-nav navbar-center\">\n      <h2><span class=\"label label-primary\">MyCreation</span></h2>\n    </ul>\n\n  <ul class=\"nav navbar-nav navbar-right\">\n  <li class=\"dropdown\">\n  <a style=\"color: #fff\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n  <span class=\"glyphicon glyphicon-user\"></span> \n  <span class=\"glyphicon glyphicon-chevron-down\"></span>\n  </a>\n  <ul class=\"dropdown-menu\">\n  <li>\n  <div class=\"navbar-login\">\n  <div class=\"row\">\n                                    <div class=\"col-lg-4\">\n                                        <p class=\"text-center\">\n                                            <span class=\"glyphicon glyphicon-user icon-size\"></span>\n                                        </p>\n                                    </div>\n                                    <div class=\"col-lg-8\">\n                                        <p class=\"text-left\"><strong></strong></p>\n                                        <p class=\"text-left small\"></p>\n                                        <p class=\"text-left\">\n                                         <a routerLink=\"/profile\" class=\"btn btn-primary btn-block btn-sm\">Profile</a>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"navbar-login navbar-login-session\">\n                                <div class=\"row\">\n                                    <div class=\"col-lg-12\">\n                                        <p>\n                                            <a href=\"#\" (click)= \"logout()\" class=\"btn btn-danger btn-block\">Logout ?</a>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n\n\n\n<!-- <ul class=\"nav navbar-nav navbar-right\">\n<li><a style=\"color: #fff\" routerLink=\"/profile\">Profile</a></li>\n<li><a style=\"color: #fff\" (click)= \"logout()\"><span class=\"glyphicon glyphicon-log-out\" ></span>Logout ?</a></li>\n</ul> -->\n  </div>\n</nav>\n\n<!-- <div class=\"loading\" id=\"imagelodar\"  >Loading&#8230;\n\n<div class=\"loader\">\n  <div class=\"inner one\"></div>\n  <div class=\"inner two\"></div>\n  <div class=\"inner three\"></div>\n</div>\n\n</div> -->\n\n\n\n<!-- \n<nav class=\"navbar navbar-default\" *ngIf=\"showMenu\">\n\n\n    <div class=\"container-fluid\">\n     <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">Company's logo</a>\n       </div>\n   \n       \n      <ul id=\"nav-mobile\"  class=\"nav navbar-nav navbar-right\">\n      <li><a routerLink=\"/createevent\">Create Event</a></li> \n\n\n     <li><h2><span class=\"label label-primary\">MyCreation</span></h2></li>\n      <li><a routerLink=\"/event\">Veiw Event</a></li>\n       <li><a routerLink=\"/viewEvent/129\">View Content</a></li> \n       \n        <li><a routerLink=\"/tournament\">Tournament</a></li>\n        <li><a routerLink=\"/contentview\">View Content</a></li>   \n        <li><a routerLink=\"/createcontent\">Create Content</a></li>\n        <li><a routerLink=\"/profile\">Profile</a></li>\n        \n      <li><a routerLink =\"/job\">Job</a></li>\n      <li><a (click)= \"logout()\" >Logout</a></li>    \n      </ul>\n     \n\n\n\n    </div>\n\n  </nav>\n   -->"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"w3-content w3-margin-top\" style=\"max-width:1400px;\">\n  <div class=\"w3-row-padding\">\n    <div class=\"w3-third\">\n      <div class=\"w3-white w3-text-grey w3-card-4\">\n        <div class=\"w3-display-container\">\n          <img src=\"assets/images/avatar_hat.jpg\" style=\"width:100%\" alt=\"Avatar\">\n          <div class=\"w3-display-bottomleft w3-container w3-text-white\">\n          <h2>{{viewEvent.name}}</h2>\n          </div>\n        </div>\n        <div class=\"w3-container\">\n           \n           <h5 class=\"w3-opacity\"><b>Event Type </b></h5>\n          <p>{{viewEvent.type}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n\n           <h5 class=\"w3-opacity\"><b>Sport </b></h5>\n          <p>{{viewEvent.sport_name}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n\n           <h5 class=\"w3-opacity\"><b>Email </b></h5>\n          <p>{{viewEvent.email_app_collection}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n\n           <h5 class=\"w3-opacity\"><b>Contact No </b></h5>\n          <p>{{viewEvent.mobile}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n\n           <h5 class=\"w3-opacity\"><b>Event Start Date </b></h5>\n          <h6 class=\"w3-text-teal\"><span class=\"w3-tag w3-green w3-round\">{{viewEvent.start_date}}</span></h6>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n\n           <h5 class=\"w3-opacity\"><b>Event End Date </b></h5>\n          <h6 class=\"w3-text-teal\"><span class=\"w3-tag w3-red w3-round\">{{viewEvent.end_date}}</span></h6>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n          <hr>\n\n          <p class=\"w3-large\"><b><i class=\"fa fa-asterisk fa-fw w3-margin-right w3-text-teal\"></i>Address Details</b></p>\n          <h5 class=\"w3-opacity\"><b>Address  </b></h5>\n          <p>{{viewEvent.address_1}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n            <!-- <div class=\"w3-container w3-center w3-round-xlarge w3-teal\" style=\"width:90%\">90%</div> -->\n          </div>\n          <h5 class=\"w3-opacity\"><b>Location  </b></h5>\n          <p>{{viewEvent.location}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n            <div class=\"w3-container w3-center w3-round-xlarge w3-teal\" style=\"width:80%\">\n             <!--  <div class=\"w3-center w3-text-white\">80%</div> -->\n            </div>\n          </div>\n          <h5 class=\"w3-opacity\"><b>State</b></h5>\n          <p>{{viewEvent.state}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          \n          </div>\n          <br>\n\n      <!--     <p class=\"w3-large w3-text-theme\"><b><i class=\"fa fa-globe fa-fw w3-margin-right w3-text-teal\"></i>Other Details</b></p>\n          <h5 class=\"w3-opacity\"><b>Event Description</b></h5>\n          <p>{{viewEvent.description}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n          <h5 class=\"w3-opacity\"><b>Event Link </b></h5>\n          <p>{{viewEvent.event_links}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n          <h5 class=\"w3-opacity\"><b>Eligibility</b></h5>\n          <p>{{viewEvent.eligibility1}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div> -->\n          <br>\n        </div>\n      </div><br>\n\n    <!-- End Left Column -->\n    </div>\n\n    <!-- Right Column -->\n    <div class=\"w3-twothird\">\n    \n      <div class=\"w3-container w3-card-2 w3-white w3-margin-bottom\">\n        <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Other Details</h2>\n        <div class=\"w3-container\">\n          <h6 class=\"w3-text-teal\"><b>Event Link - </b>{{viewEvent.event_links}}</h6>\n           <h6 class=\"w3-text-teal\"><b>Eligibility - </b>{{viewEvent.eligibility1}}</h6>\n           <h5 class=\"w3-opacity\"><b>Event Description</b></h5>\n          <p>{{viewEvent.description}}</p>\n          <hr>\n       </div>\n      </div>\n\n\n      <div *ngIf = 'viewEvent.type == \"Paid\"'>\n      <div class=\"w3-container w3-card-2 w3-white w3-margin-bottom\">\n        <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Ticket Details</h2>\n        <div *ngFor = 'let tickets of ticket' >\n        <div class=\"w3-container\">\n          <h5 class=\"w3-opacity\"><b>Ticket Name -</b>{{tickets.ticket_name}}</h5>\n          <h6 class=\"w3-text-teal\"><b>Ticket Price -</b>{{tickets.ticket_price}}</h6>\n           <h6 class=\"w3-text-teal\"><b>Ticket Price -</b>{{tickets.number}}</h6>\n          <!-- <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p> -->\n          <hr>\n        </div>\n       </div>\n      </div>\n     </div>\n  \n      <div class=\"w3-container w3-card-2 w3-white\">\n        <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Term And Conditions</h2>\n        \n         \n       <div *ngFor = 'let term of termCondition'>\n        <div class=\"w3-container\">\n          <p>{{term.term}}</p>\n          <hr>\n        </div>\n        </div>\n      </div>\n    <!-- End Right Column -->\n    </div>\n    \n  <!-- End Grid -->\n  </div>\n  \n  <!-- End Page Container -->\n</div>"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"loading\" id=\"imagelodar\" *ngIf='myVar' >Loading&#8230;\n<div class=\"loader\">\n  <div class=\"inner one\"></div>\n  <div class=\"inner two\"></div>\n  <div class=\"inner three\"></div>\n</div>\n </div>\n<div style=\" background-color: #d8f3ff;margin-top: -2%;padding-top: 2%;\">\n<div class=\"container\">\n  <h2>Create Event</h2>\n  <ul class=\"nav nav-tabs\">\n    <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Home</a></li>\n    <li><a data-toggle=\"tab\" href=\"#menu1\">Organization Address</a></li>\n    <li><a data-toggle=\"tab\" href=\"#menu2\">Eligibility Criteria:</a></li>\n    <li><a data-toggle=\"tab\" href=\"#menu3\">Ticket Details</a></li>\n  </ul>\n<div class=\"tab-content\">\n \n<div id=\"home\" class=\"tab-pane fade in active\">\n<div class=\"box1\">\n<div class=\"form-group\">\n \n  \n \n  <input type=\"hidden\" name=\"title\" [(ngModel)]=\"events.userid\" class=\"form-control\" value=\"title\" required=\"\">\n  <input type=\"hidden\" name=\"title\" [(ngModel)]=\"events.id\" class=\"form-control\" value=\"0\" required=\"\">\n  </div >\n  <div>\n  <span class=\"input input--hoshi\">\n  \n  <input id=\"first\" class='input__field input__field--hoshi' [(ngModel)]=\"events.name\" type=\"text\" name=\"description\" onblur=\"hi()\">\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"   for=\"description\"><span class=\"input__label-content input__label-content--hoshi\">Event Name</span></label></span>\n  </div >\n  <div>\n    <span class=\"input input--hoshi\">\n\n  \n  <input class='input__field input__field--hoshi' [(ngModel)]=\"events.description\" type=\"text\" name=\"title\" >\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event Description</span></label>\n  </span>\n  </div >\n\n\n\n  <div class=\"form-group\">\n  <label style=\"    font-weight: 100;margin-left: 10px; color:#717070;}\" for=\"game\">Entry Type</label>\n  <select class=\"form-control mr5\" name=\"game\"  [(ngModel)] = \"events.type\" style=\" width: 98.5%; border-radius: 0;     padding-left: 0px;  border: none;border-bottom: 1px solid   #5f5d5d; box-shadow: none;\" required>\n  <option> Select</option>\n  <option> Free</option>\n  <option> Paid </option>\n  </select>\n  </div>\n\n\n\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' type=\"text\" name=\"title\"  [(ngModel)]=\"events.event_links\" value=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event Link</span></label>\n</span>\n</div>\n<div>\n<div *ngIf=\"sports\">\n<div class=\"form-group\">\n<label style=\"    font-weight: 100;margin-left: 10px; color:#717070;}\" for=\"game\">Event Sport</label>\n<select class=\"form-control mr5\" name=\"game\" [(ngModel)]=\"events.sport_name\" style=\"     padding-left: 0px; width: 98.5%; border-radius: 0;   border: none;border-bottom: 1px solid   #5f5d5d; box-shadow: none;\" required>\n<option *ngFor=\"let sport of sports\" [ngValue]=\"sport.sports\" > {{sport.sports}} </option>\n</select>\n</div>\n</div>\n</div>\n</div>\n<div class=\"form-group\">\n<input type=\"file\" (change)=\"handleFileSelect($event)\" required class=\"form-control \" name=\"attach_file\" id=\"attach_file\">\n</div>  \n<div class=\"form-group\">\n<input type=\"hidden\"  name=\"image\" [(ngModel)]=\"events.image\" class=\"form-control\" value=\"{{image}}\">\n</div>\n\n</div>\n       <!-- Tab 2 start -->\n<div id=\"menu1\" class=\"tab-pane fade\">        \n<div class=\"box1\">\n<div>\n<span class=\"input input--hoshi\"> \n<input class='input__field input__field--hoshi' [(ngModel)]=\"events.address_1\" type=\"text\" name=\"title\"  value=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event Address</span></label>\n</span>\n</div>\n<div class=\" wd60 pd0 fl\">\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)]=\"events.location\" type=\"text\" name=\"title\"   value=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event City</span></label>\n</span>\n</div>\n<div class=\"wd60 pd0 fr\">\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)]=\"events.state\" type=\"text\" name=\"title\"  value=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event State</span></label>\n</span>\n</div >\n<div class=\"wd60 pd0 fl\">\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi validate datepicker' [(ngModel)]=\"events.start_date\" type=\"date\" name=\"title\"  id=\"startD\" >\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event Start Date</span></label>\n</span>\n</div>\n<div class=\"wd60 pd0 fr\">\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi validate datepicker' [(ngModel)]=\"events.end_date\" type=\"date\" name=\"title\"  id=\"endD\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event End Date</span></label>\n</span>\n</div>\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)]=\"events.email_app_collection\" type=\"text\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event Organizer Email</span></label>\n</span>\n</div>\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)]=\"events.mobile\"  type=\"text\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event Mobile</span></label>\n</span>\n</div >\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)]=\"events.eligibility1\" type=\"text\" name=\"title\"   value=\"title\" >\n <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event Eligibility</span></label>\n</span>\n</div>\n</div>\n</div>\n\n<!-- new Tab 3 -->\n\n\n<div id=\"menu2\" class=\"tab-pane fade\">\n\n \n<div *ngFor=\"let events of termCondition; let i = index\" class=\"\">\n<div class=\"box1\">\n<div>\n<span class=\"input input--hoshi\">\n<input type=\"text\" class=\"class='input__field input__field--hoshi\" required [(ngModel)]=\"events.term\" value=\"{{events.term}}\" name=\"term\" style=\"border:none; outline:none;\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"term\"><span class=\"input__label-content input__label-content--hoshi\">Terms & Condition {{i + 1}}</span></label>\n<!-- =======\n<div class=\"form-group\">\n<span class=\"input input hoshi\">Terms & Condition {{i + 1}}\n<input type=\"text\" class=\"form-control\" required [(ngModel)]=\"events.term\" value=\"{{events.term}}\" name=\"term\">\n>>>>>>> c65c8283e582b8dd616f8ece5183c94c9295e349 -->\n</span>\n</div>\n<input type=\"hidden\" id=\"terms_cond_value1\" [(ngModel)]=\"this.events.termCondition\" value=\"{{termCondition | json}}\">\n\n\n<div>\n<input type=\"hidden\"  name=\"terms_cond\" [(ngModel)]=\"events.terms_cond1\"  value=\"{{terms_cond1}}\">\n</div>\n</div>\n</div>\n<div class=\"p-container\">\n<input  style=\"outline: none;\" type=\"submit\" (click)=\"addNewRow()\" class=\"btn btn-primary\" value=\"Add Term & Condition\" >\n<div class=\"clear\"> \n</div>\n\n\n\n</div>\n</div>\n\n\n<!-- new Tab 4 -->\n\n<div id=\"menu3\" class=\"tab-pane fade\">\n\n<div *ngIf = 'events.type == \"Paid\"'>\n\n<div *ngFor=\"let events of ticketdetials; let i = index\" class=\"\">\n<div class=\"box1\">\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' type=\"text\"  [(ngModel)] = \"events.ticket_name\" >\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"><span class=\"input__label-content input__label-content--hoshi\">Ticket Name</span></label>\n</span>\n</div>\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' type=\"text\"  [(ngModel)] = \"events.ticket_price\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"><span class=\"input__label-content input__label-content--hoshi\">Price</span></label>\n</span>\n</div> \n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' type=\"text\" [(ngModel)]= \"events.number\" >\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"><span class=\"input__label-content input__label-content--hoshi\">Number</span></label>\n</span>\n</div>\n</div>\n</div>\n <div class=\"p-container\">\n<input  style=\"outline: none;\" type=\"submit\" (click)=\"addNewticket()\" class=\"btn btn-primary\" value=\"Add Ticket\" >\n<div class=\"clear\"> \n</div>\n</div>\n\n</div>\n\n<div class=\"form-group\">\n<input type=\"hidden\"  name=\"ticket\" [(ngModel)]=\"events.ticket_detail\" class=\"form-control\" value=\"{{ticket_detail}}\">\n</div>\n\n<div class=\"form-group\">\n<input type=\"hidden\" id=\"myValue\" class=\"form-control\" [(ngModel)]=\"this.events.ticket\" value=\"{{ticketdetials | json}}\">\n</div>\n\n\n</div>\n\n<div class=\"p-container\">\n<input  style=\"outline: none; margin: 20px 0px;\" type=\"submit\" (click) =\"Create(events)\" class=\"btn btn-primary\" value=\"Submit\" >\n<div class=\"clear\"> \n</div>\n</div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n<!-- {{viewEvent | json}}\n -->\n <div class=\"loading\" id=\"imagelodar\" *ngIf='myVar' >Loading&#8230;\n<div class=\"loader\">\n  <div class=\"inner one\"></div>\n  <div class=\"inner two\"></div>\n  <div class=\"inner three\"></div>\n</div>\n </div>\n\n<div style=\" background-color: #d8f3ff;      margin-top: -2%;padding-top: 2%;\">\n<div class=\"container\">\n<h2>Create Event</h2>\n<ul class=\"nav nav-tabs\">\n<li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Home</a></li>\n<li><a data-toggle=\"tab\" href=\"#menu1\">Organization Address</a></li>\n<li><a data-toggle=\"tab\" href=\"#menu2\">Eligibility Criteria:</a></li>\n<li><a data-toggle=\"tab\" href=\"#menu3\">Ticket Details</a></li>\n</ul>\n<div class=\"tab-content\"> \n<div id=\"home\" class=\"tab-pane fade in active\">\n<div class=\"box1\">\n<div class=\"form-group\">\n<input type=\"hidden\" name=\"id\" [(ngModel)]=\"viewEvent.id\" class=\"form-control\"  required=\"\">\n<input type=\"hidden\" name=\"title\" [(ngModel)]=\"viewEvent.userid\" class=\"form-control\"  required=\"\">\n</div>\n<div>\n<span class=\"input input--hoshi\">  \n<input id=\"first\" class='input__field input__field--hoshi' [(ngModel)]=\"viewEvent.name\" type=\"text\" name=\"description\" onblur=\"hi()\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"   for=\"description\"><span class=\"input__label-content input__label-content--hoshi\">Event Name</span></label></span>\n</div >\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)]=\"viewEvent.description\" type=\"text\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event Description</span></label>\n</span>\n</div >\n<div>\n<span class=\"input input--hoshi\">  \n<input class='input__field input__field--hoshi' type=\"text\"  [(ngModel)]=\"viewEvent.type\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"sport\"><span class=\"input__label-content input__label-content--hoshi\">Entry Type</span></label>\n</span>\n</div >\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' type=\"text\" name=\"title\"  [(ngModel)]=\"viewEvent.event_links\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event Link</span></label>\n</span>\n</div>\n<div>\n<div *ngIf=\"sports\">\n<div class=\"form-group\">\n<label style=\"    font-weight: 100;margin-left: 10px; color:#717070;}\" for=\"game\">Event Sport</label>\n<select class=\"form-control mr5\" name=\"game\" [(ngModel)]=\"viewEvent.sport\" style=\"     padding-left: 0px; width: 98.5%; border-radius: 0;   border: none;border-bottom: 1px solid   #5f5d5d; box-shadow: none;\" required>\n<option *ngFor=\"let sport of sports\" [ngValue]=\"sport.sports\" > {{sport.sports}} </option>\n</select>\n</div>\n</div>\n</div>\n</div>\n<!-- <img src=\"http://localhost/getsporty/php/{{viewEvent.image}}\" style=\"width:100%\" alt=\"Avatar\"> -->\n<div class=\"form-group\">\n<input type=\"file\" (change)=\"handleFileSelect($event)\" required class=\"form-control \" name=\"attach_file\" id=\"attach_file\">\n</div>  \n<div class=\"form-group\">\n<input type=\"hidden\"  name=\"image\" [(ngModel)]=\"viewEvent.image\" class=\"form-control\" value=\"{{image}}\">\n</div>\n</div>\n       <!-- Tab 2 start -->\n<div id=\"menu1\" class=\"tab-pane fade\">        \n<div class=\"box1\">\n<div>\n<span class=\"input input--hoshi\"> \n<input class='input__field input__field--hoshi' [(ngModel)]=\"viewEvent.address_1\" type=\"text\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event Address</span></label>\n</span>\n</div>\n<div class=\" wd60 pd0 fl\">\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)]=\"viewEvent.location\" type=\"text\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event City</span></label>\n</span>\n</div>\n<div class=\"wd60 pd0 fr\">\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)]=\"viewEvent.state\" type=\"text\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event State</span></label>\n</span>\n</div >\n<div class=\"wd60 pd0 fl\">\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi validate datepicker' [(ngModel)]=\"viewEvent.start_date\" type=\"date\" name=\"title\" id=\"startD\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event Start Date</span></label>\n</span>\n</div>\n<div class=\"wd60 pd0 fr\">\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi validate datepicker' [(ngModel)]=\"viewEvent.end_date\" type=\"date\" name=\"title\" id=\"endD\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event End Date</span></label>\n</span>\n</div>\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)]=\"viewEvent.email_app_collection\" type=\"text\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event Organizer Email</span></label>\n</span>\n</div>\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)]=\"viewEvent.mobile\"  type=\"text\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event Mobile</span></label>\n</span>\n</div >\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)]=\"viewEvent.eligibility1\" type=\"text\" name=\"title\">\n <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Event Eligibility</span></label>\n</span>\n</div>\n</div>\n</div>\n\n<!-- new Tab 3 -->\n\n<div id=\"menu2\" class=\"tab-pane fade\">\n\n<div *ngFor=\"let viewEvent of termCondition; let i = index\" class=\"\">\n<div class=\"box1\">\n\n<div>\n<span class=\"input input--hoshi\">\n<input type=\"text\" class=\"class='input__field input__field--hoshi\" required [(ngModel)]=\"viewEvent.term\" value=\"{{viewEvent.term}}\" name=\"term\" style=\"border:none; outline:none;\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"term\"><span class=\"input__label-content input__label-content--hoshi\">Terms & Condition {{i + 1}}</span></label>\n<!-- =======\n<div class=\"form-group\">\n<span class=\"input input hoshi\">Terms & Condition {{i + 1}}\n<input type=\"text\" class=\"form-control\" required [(ngModel)]=\"events.term\" value=\"{{events.term}}\" name=\"term\">\n>>>>>>> c65c8283e582b8dd616f8ece5183c94c9295e349 -->\n</span>\n</div>\n\n\n<!-- <span class=\"input input--hoshi\">Terms & Condition {{i + 1}}\n<input type=\"text\" class=\"form-control\" required [(ngModel)]=\"viewEvent.term\" value=\"{{viewEvent.term}}\" name=\"term\">\n</span> -->\n\n<input type=\"hidden\" id=\"terms_cond_value\" class=\"form-control\" [(ngModel)]=\"viewEvent.termCondition\" value=\"{{termCondition | json}}\">\n<div class=\"form-group\">\n<input type=\"hidden\"  name=\"terms_cond\" [(ngModel)]=\"viewEvent.terms_cond1\" class=\"form-control\" value=\"{{terms_cond1}}\">\n</div>\n</div>\n</div>\n<div class=\"p-container\">\n<input  style=\"outline: none;\" type=\"submit\" (click)=\"addNewRow()\" class=\"btn btn-primary\" value=\"Add term & Condition\" >\n<div class=\"clear\"> \n</div>\n</div>\n</div>\n\n\n<!-- new Tab 4 -->\n\n<div id=\"menu3\" class=\"tab-pane fade\">\n<div class=\"row\">\n<div class=\"form-group\">\n<h2>Ticket Details</h2>\n</div>\n<div *ngFor=\"let viewEvent of ticket; let i = index\" class= \"\">\n\n\n<div class=\"box1\">\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' type=\"text\"  [(ngModel)]=\"viewEvent.ticket_name\" value=\"{{viewEvent.ticket_name}}\" >\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"><span class=\"input__label-content input__label-content--hoshi\">Ticket Name</span></label>\n</span>\n</div>\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' type=\"text\"   [(ngModel)]=\"viewEvent.ticket_price\" value=\"{{viewEvent.ticket_price}}\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"><span class=\"input__label-content input__label-content--hoshi\">Price</span></label>\n</span>\n</div> \n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' type=\"text\" [(ngModel)]=\"viewEvent.number\" value=\"{{viewEvent.number}}\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"><span class=\"input__label-content input__label-content--hoshi\">Number</span></label>\n</span>\n</div>\n</div>\n\n<!-- <div class=\"form-group\">\n<span class=\"input input--hoshi\">Ticket {{i + 1}}\n<div class=\"form-group\">\n<input type=\"text\" class=\"form-control\" required [(ngModel)]=\"viewEvent.ticket_name\" value=\"{{viewEvent.ticket_name}}\" name=\"term\">\n</div>\n<div class=\"form-group\">\n<input type=\"text\" class=\"form-control\" required [(ngModel)]=\"viewEvent.ticket_price\" value=\"{{viewEvent.ticket_price}}\" name=\"term\">\n</div>\n<div class=\"form-group\">\n<input type=\"text\" class=\"form-control\" required [(ngModel)]=\"viewEvent.number\" value=\"{{viewEvent.number}}\" name=\"term\">\n</div>\n</span>\n</div> -->\n\n\n<input type=\"hidden\" id=\"ticketdetails\" class=\"form-control\" [(ngModel)]=\"viewEvent.ticket\" value=\"{{ticket | json}}\">\n<div class=\"form-group\">\n<input type=\"hidden\"  name=\"terms_cond\" [(ngModel)]=\"viewEvent.ticket_detail\" class=\"form-control\" value=\"{{ticket_detail}}\">\n</div> \n</div>\n\n <div class=\"p-container\">\n<input  style=\"outline: none;\" type=\"submit\" (click)=\"addNewticket()\" class=\"btn btn-primary\" value=\"Add Ticket\" >\n<div class=\"clear\"> \n</div>\n</div>\n</div>\n\n</div>\n\n<div class=\"p-container\">\n<input  style=\"outline: none; margin: 20px 0px;\" type=\"submit\" (click) =\"Create(viewEvent)\" class=\"btn btn-primary\" value=\"Submit\" >\n<div class=\"clear\"> \n</div>\n</div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<section class=\"content-header\">\n<h1>\n     List Events \n<small></small>\n</h1>\n</section>\n<section class=\"content\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n         <!-- Custom Tabs -->\n<div class=\"nav-tabs-custom\">\n            <ul class=\"nav nav-tabs\">\n               <li class=\"active\"><a href=\"#content\" data-toggle=\"tab\">Events</a></li>\n               <li class=\"pull-right\"><a routerLink=\"/createevent\" class=\"btn btn-info\"><i class=\"fa fa-plus-square\"></i> ADD</a></li>\n            </ul>\n            <div class=\"tab-content\">\n               <div class=\"tab-pane active\" id=\"content\">\n                  <div class=\"box-body\">\n                     <table id=\"example2\" class=\"table table-bordered table-hover\">\n                        <thead>\n                           <tr>\n                              <th class=\"text-center\" >#</th>\n                              <th class=\"text-center\" >Name</th>\n                              <th class=\"text-center\" >Location</th>\n                              <th class=\"text-center\" >Sport</th>\n                            <!--   <th class=\"text-center\" >url</th> -->\n                              <th class=\"text-center\" ></th>\n                           </tr>\n                        </thead>\n                        <tbody >\n                           <tr *ngFor='let events of Event' >\n                              <td class=\"text-center\">{{ events.id }}</td>\n                              <td class=\"text-center\">{{ events.name }}</td>\n                              <td class=\"text-center\">{{ events.location }}</td>\n                              <td class=\"text-center\">{{ events.sport_name }}</td>\n                            <!--   <td class=\"text-center\">{{ events. }}</td> -->\n                              <td class=\"text-center\"><a href=\"javascript:void(0)\" (click)= \"editEvent(events.id)\">Edit</a></td>\n                           </tr>\n                        </tbody>\n                     </table>\n                  </div>\n               </div>\n\n               <!-- /.tab-pane -->\n            </div>\n            <!-- /.tab-content -->\n         </div>\n         <!-- nav-tabs-custom -->\n      </div>\n      <!-- /.col -->\n   </div>\n</section>\n<!-- /.content -->"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"posrel\"> \n\n<ul class=\"nav nav-tabs\">\n  <li class=\"active\"><a  class=\"blue\" data-toggle=\"tab\" href=\"#home\">Create Event</a></li>\n  \n    <li><a class=\"yellow\" data-toggle=\"tab\" href=\"#menu2\">Create Tornaments</a></li>\n    <li><a  class=\"red\" data-toggle=\"tab\" href=\"#menu3\">Create Jobs</a></li>\n  </ul>\n  </div>   \n<div class=\"tab-content\">\n\n<div id=\"home\" class=\"tab-pane fade in active\">\n<div class=\"container shadow\">\n<div class=\"row\">\n   \n<div class=\"col-md-12\">\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  \n\n<!-- <div *ngIf=\"Event\">   -->\n<div *ngIf=\"Event ; else elseBlock\">\n<div class=\"carousel-inner\">\n<div class=\"item active\">\n<div class=\"container\">\n<div class=\"row\">\n\n<div *ngFor = 'let evt of Event ; let i = index' class= ''>\n\n<div class=\"col-md-4\" *ngIf = 'i<3'>\n<div class=\"card\" >\n<div class=\"card-image\">\n <img class=\"img-responsive\" src=\"assets/images/event.jpg\">\n<span class=\"card-title\">{{evt.name}} </span>\n</div>  \n<div class=\"card-content\">\n                    <p>{{evt.description}}</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a routerLink =\"/viewEvent/{{evt.id}}\">View</a>\n                    <a routerLink =\"/editEvent/{{evt.id}}\">Edit</a>\n                    <!-- <a href=\"#\" target=\"new_blank\">Link</a> -->  \n                \n                </div>\n            </div>\n      </div>\n      </div>\n\n      </div>\n      </div>\n      </div>\n\n   \n      <div class=\"item\">\n      <div class=\"container\">\n      <div class=\"row\">\n     \n      <div *ngFor = 'let evt of Event ; let j = index' id= ''>\n      <div class=\"col-md-4\"  *ngIf = 'j>2'>\n      <div class=\"card\">\n      <div class=\"card-image\">\n       <img class=\"img-responsive\" src=\"assets/images/event.jpg\">\n      <span class=\"card-title\">{{evt.name}}</span>\n      </div>\n      <div class=\"card-content\">\n      <p>{{evt.description}}</p>\n      </div>        \n      <div class=\"card-action\">\n      <a routerLink =\"/viewEvent/{{evt.id}}\">View</a>\n      <a routerLink =\"/editEvent/{{evt.id}}\">View</a>\n     <!--  <a href=\"#\" target=\"new_blank\">Link</a>  --> \n      </div>\n      </div>\n      </div>\n\n      \n      </div>\n  <!--     <div>\n        <div class=\"item\">\n        {{j}}\n        <img src=\"http://aztecmm.com/wp-content/uploads/2015/01/sports-large-2.jpg\" alt=\"Chicago\" style=\"width:100%; height: 450px !important;\">\n      </div>\n      </div> -->\n      </div>\n       </div>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #elseBlock>\n   <!--   <div *ngIf=\"!Event\"> -->\n      \n   <div class=\"carousel-inner\">\n      <div class=\"item active\">\n        <img src=\"https://www.entrytime.com/wp-content/uploads/2015/07/Marathon.jpg\" alt=\"Los Angeles\" style=\"width:100%; height: 450px !important;\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"http://aztecmm.com/wp-content/uploads/2015/01/sports-large-2.jpg\" alt=\"Chicago\" style=\"width:100%; height: 450px !important;\">\n      </div>\n    \n      <div class=\"item\">\n        <img src=\"http://www.evertrue.com/app/uploads/2013/10/fenway_park_2009.jpg\" alt=\"New york\" style=\"width:100%; height: 450px !important;\">\n      </div>\n    </div>\n</ng-template>\n<!--     </div> -->\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  </div>\n\n</div>\n    \n    <div class=\"row\">\n  \n<div class=\"col-md-12\" style=\"text-align: right;\">   \n<a routerLink=\"/createevent\"  class=\"btn btn-primary\" style=\"    padding: 10px 20px; outline: none; margin: 20px 0px;\" >Create Event</a>\n</div>  \n</div> \n</div>\n</div>\n\n\n<div id=\"menu2\" class=\"tab-pane fade\">   \n<div class=\"container shadow\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n<div id=\"myCarousel1\" class=\"carousel slide\" data-ride=\"carousel\">\n    \n\n    <!-- Wrapper for slides -->\n    <!-- <div class=\"carousel-inner\">\n      <div class=\"item active\">\n        <img src=\"https://www.entrytime.com/wp-content/uploads/2015/07/Marathon.jpg\" alt=\"Los Angeles\" style=\"width:100%; height: 450px !important;\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"http://aztecmm.com/wp-content/uploads/2015/01/sports-large-2.jpg\" alt=\"Chicago\" style=\"width:100%; height: 450px !important;\">\n      </div>\n    \n      <div class=\"item\">\n        <img src=\"http://www.evertrue.com/app/uploads/2013/10/fenway_park_2009.jpg\" alt=\"New york\" style=\"width:100%; height: 450px !important;\">\n      </div>\n    </div>\n -->\n\n\n <!-- OR-->\n\n\n<div class=\"carousel-inner\">\n<div class=\"item active\">\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-4\">\n<div class=\"card\">\n                <div class=\"card-image\">\n                    <img class=\"img-responsive\" src=\"assets/images/tournament.jpg\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n      </div>\n      <div class=\"col-md-4\">\n      <div class=\"card\">\n                <div class=\"card-image\">\n                    <img class=\"img-responsive\" src=\"assets/images/tournament.jpg\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n\n      </div>\n      <div class=\"col-md-4\">\n      <div class=\"card\">\n                <div class=\"card-image\">\n                   <img class=\"img-responsive\" src=\"assets/images/tournament.jpg\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n      </div>\n      </div>\n      </div>\n      </div>\n\n      <div class=\"item\">\n      <div class=\"container\">\n      <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"card\">\n                <div class=\"card-image\">\n                    <img class=\"img-responsive\" src=\"assets/images/tournament.jpg\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n      </div>\n      <div class=\"col-md-4\">\n      <div class=\"card\">\n                <div class=\"card-image\">\n                   <img class=\"img-responsive\" src=\"assets/images/tournament.jpg\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n\n      </div>\n      <div class=\"col-md-4\">\n      <div class=\"card\">\n                <div class=\"card-image\">\n                    <img class=\"img-responsive\" src=\"assets/images/tournament.jpg\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n      </div>\n      </div>\n      </div>\n       \n      </div>\n    \n      <div class=\"item\">\n      <div class=\"container\">\n      <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"card\">\n                <div class=\"card-image\">\n                   <img class=\"img-responsive\" src=\"assets/images/tournament.jpg\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n      </div>\n      <div class=\"col-md-4\">\n      <div class=\"card\">\n                <div class=\"card-image\">\n                  <img class=\"img-responsive\" src=\"assets/images/tournament.jpg\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n\n      </div>\n      <div class=\"col-md-4\">\n      <div class=\"card\">\n                <div class=\"card-image\">\n                    <img class=\"img-responsive\" src=\"assets/images/tournament.jpg\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n      </div>\n      </div>\n      </div>\n       \n      </div>\n    </div>\n\n\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel1\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel1\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  </div>\n \n  </div>\n   <div class=\"row\">\n  \n    <div class=\"col-md-12\" style=\"text-align: right;\">\n    <input  class=\"btn btn-primary\" style=\"    padding: 10px 20px; outline: none; margin: 20px 0px;\" type=\"submit\" value=\"Create Tournament\">\n    </div>\n    \n    </div>\n  </div>\n  </div>\n\n   \n<div id=\"menu3\" class=\"tab-pane fade\">\n    \n\n<div class=\"container shadow\">\n<div class=\"row\">\n   \n<div class=\"col-md-12\">\n<div id=\"myCarousel2\" class=\"carousel slide\" data-ride=\"carousel\">\n  \n\n<div *ngIf=\"Job\"> \n\n\n<div class=\"carousel-inner\">\n<div class=\"item active\">\n<div class=\"container\">\n<div class=\"row\">\n\n<div *ngFor = 'let job of Job ; let i = index' class= ''>\n\n<div class=\"col-md-4\" *ngIf = 'i<3' >\n<div class=\"card\">\n<div class=\"card-image\">\n <img class=\"img-responsive\" src=\"assets/images/job.jpg\">\n<span class=\"card-title\">{{job.title}} </span>\n</div>  \n<div class=\"card-content\">\n                    <p>{{job.description}}</p>\n                </div>\n                \n                <div class=\"card-action\">\n                <a routerLink=\"/viewjob/{{job.id}}\">View</a>\n                <a routerLink=\"/editJob/{{job.id}}\">Edit</a>\n                \n               <!--      <a href=\"#\" target=\"new_blank\">Link</a>  -->\n                \n                </div>\n            </div>\n      </div>\n      </div>\n      </div>\n      </div>\n      </div>\n\n \n      <div class=\"item\">\n      <div class=\"container\">\n      <div class=\"row\">\n      <div *ngFor = 'let job of Job ; let j = index' id= ''>\n      <div class=\"col-md-4\"  *ngIf = 'j>2'>\n      <div class=\"card\">\n      <div class=\"card-image\">\n      <img class=\"img-responsive\" src=\"assets/images/job.jpg\">\n      <span class=\"card-title\">{{job.title}}</span>\n      </div>\n      <div class=\"card-content\">\n      <p>{{job.description}}</p>\n      </div>        \n      <div class=\"card-action\">\n      <a routerLink=\"/viewjob/{{job.id}}\">View</a>\n      <a routerLink=\"/editJob/{{job.id}}\">Edit</a>\n    <!--   <a href=\"#\" target=\"new_blank\">Link</a>    -->\n      </div>\n      </div>\n      </div>\n      </div>\n      </div>\n       </div>\n      </div>\n    </div>\n  </div>\n    <div *ngIf=\"!Job\">\n      \n   <div class=\"carousel-inner\">\n      <div class=\"item active\">\n        <img src=\"assets/images/job.jpg\" alt=\"Los Angeles\" style=\"width:100%; height: 450px !important;\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"assets/images/tournament1.jpg\" alt=\"Chicago\" style=\"width:100%; height: 450px !important;\">\n      </div>\n    \n      <div class=\"item\">\n        <img src=\"http://www.evertrue.com/app/uploads/2013/10/fenway_park_2009.jpg\" alt=\"New york\" style=\"width:100%; height: 450px !important;\">\n      </div>\n    </div>\n\n    </div>\n\n\n\n\n\n\n\n\n    <!-- Left and right controls -->\n  <a class=\"left carousel-control\" href=\"#myCarousel2\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel2\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  </div>\n\n</div>\n    \n    <div class=\"row\">\n  \n<div class=\"col-md-12\" style=\"text-align: right;\">   \n<a routerLink=\"/job\"  class=\"btn btn-primary\" style=\"    padding: 10px 20px; outline: none; margin: 20px 0px;\" >Create Job</a>\n</div>  \n</div> \n</div>\n\n\n\n\n<!-- <div class=\"container shadow\">\n<div class=\"row\">\n  \n    <div class=\"col-md-12\">\n<div id=\"myCarousel2\" class=\"carousel slide\" data-ride=\"carousel\">\n   \n\n    <div class=\"carousel-inner\">\n      <div class=\"item active\">\n        <img src=\"https://www.entrytime.com/wp-content/uploads/2015/07/Marathon.jpg\" alt=\"Los Angeles\" style=\"width:100%; height: 450px !important;\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"http://aztecmm.com/wp-content/uploads/2015/01/sports-large-2.jpg\" alt=\"Chicago\" style=\"width:100%; height: 450px !important;\">\n      </div>\n    \n      <div class=\"item\">\n        <img src=\"http://www.evertrue.com/app/uploads/2013/10/fenway_park_2009.jpg\" alt=\"New york\" style=\"width:100%; height: 450px !important;\">\n      </div>\n    </div> -->\n\n\n\n<!-- OR-->\n\n\n\n<!-- \n\n  <div class=\"carousel-inner\">\n      <div class=\"item active\">\n      <div class=\"container\">\n      <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"card\">\n                <div class=\"card-image\">\n                    <img class=\"img-responsive\" src=\"http://material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7TDlCYzRROE84YWM/materialdesign_introduction.png\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n      </div>\n      <div class=\"col-md-4\">\n      <div class=\"card\">\n                <div class=\"card-image\">\n                    <img class=\"img-responsive\" src=\"http://material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7TDlCYzRROE84YWM/materialdesign_introduction.png\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n\n      </div>\n      <div class=\"col-md-4\">\n      <div class=\"card\">\n                <div class=\"card-image\">\n                    <img class=\"img-responsive\" src=\"http://material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7TDlCYzRROE84YWM/materialdesign_introduction.png\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n      </div>\n      </div>\n      </div>\n      </div>\n\n      <div class=\"item\">\n      <div class=\"container\">\n      <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"card\">\n                <div class=\"card-image\">\n                    <img class=\"img-responsive\" src=\"http://material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7TDlCYzRROE84YWM/materialdesign_introduction.png\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n      </div>\n      <div class=\"col-md-4\">\n      <div class=\"card\">\n                <div class=\"card-image\">\n                    <img class=\"img-responsive\" src=\"http://material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7TDlCYzRROE84YWM/materialdesign_introduction.png\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n\n      </div>\n      <div class=\"col-md-4\">\n      <div class=\"card\">\n                <div class=\"card-image\">\n                    <img class=\"img-responsive\" src=\"http://material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7TDlCYzRROE84YWM/materialdesign_introduction.png\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n      </div>\n      </div>\n      </div>\n       \n      </div>\n    \n      <div class=\"item\">\n      <div class=\"container\">\n      <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"card\">\n                <div class=\"card-image\">\n                    <img class=\"img-responsive\" src=\"http://material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7TDlCYzRROE84YWM/materialdesign_introduction.png\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n      </div>\n      <div class=\"col-md-4\">\n      <div class=\"card\">\n                <div class=\"card-image\">\n                    <img class=\"img-responsive\" src=\"http://material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7TDlCYzRROE84YWM/materialdesign_introduction.png\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n\n      </div>\n      <div class=\"col-md-4\">\n      <div class=\"card\">\n                <div class=\"card-image\">\n                    <img class=\"img-responsive\" src=\"http://material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7TDlCYzRROE84YWM/materialdesign_introduction.png\">\n                    <span class=\"card-title\">Material Cards</span>\n                </div>\n                \n                <div class=\"card-content\">\n                    <p>Cards for display in portfolio style material design by Google.</p>\n                </div>\n                \n                <div class=\"card-action\">\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    <a href=\"#\" target=\"new_blank\">Link</a>\n                    \n                </div>\n            </div>\n      </div>\n      </div>\n      </div>\n       \n      </div>\n    </div> -->\n\n\n    <!-- Left and right controls -->\n\n\n\n\n\n\n\n<!--     <a class=\"left carousel-control\" href=\"#myCarousel2\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel2\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  </div>\n \n   </div>\n    <div class=\"row\">\n   \n   \n    <div class=\"col-md-12\" style=\"text-align: right;\">\n    <input  class=\"btn btn-primary\" style=\"padding: 10px 20px;outline: none; margin: 20px 0px;\" type=\"submit\" value=\"Create Jobs\" (click)=viewjob()>\n    </div>\n    \n    </div>\n  </div> -->\n  </div>\n\n</div>\n    </div>\n    </div>\n\n \n \n\n"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n\n<div class=\"loading\" id=\"imagelodar\" *ngIf='myVar' >Loading&#8230;\n<div class=\"loader\">\n  <div class=\"inner one\"></div>\n  <div class=\"inner two\"></div>\n  <div class=\"inner three\"></div>\n</div>\n </div>\n\n<div style=\" background-color: #d8f3ff;      margin-top: -2%;padding-top: 2%;\">\n<div class=\"container\">\n<h2>Create Jobs</h2>\n<div style=\"background-color: white;border-right: 1px solid #ddd;border-left: 1px solid #ddd;border-bottom: 1px solid #ddd;margin-bottom: 20px;\">\n<ul class=\"nav nav-tabs\">\n<li class=\"active\"><a class=\"nooutline\" data-toggle=\"tab\" href=\"#home\">Job Details</a></li>\n<li><a class=\"nooutline\" data-toggle=\"tab\" href=\"#menu1\">Organization</a></li>\n<li><a class=\"nooutline\" data-toggle=\"tab\" href=\"#menu2\">Requirements</a></li>  \n</ul>\n<div class=\"tab-content\">\n<div id=\"home\" class=\"tab-pane fade in active\">\n<div class=\"box1\">\n<h2>Job Details:</h2>\n<div class=\"form-group\">\n<input type=\"hidden\" name=\"title\"    required=\"\"><a href=\"#\" class=\" icon user\"></a>\n</div>\n<input type=\"hidden\" name=\"title\" [(ngModel)]=\"Job.userid\" class=\"form-control\"  required=\"\">\n<input type=\"hidden\"  [(ngModel)]=\"Job.id\" class=\"form-control\"  required=\"\">\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi'  [(ngModel)]=\"Job.title\" type=\"text\" onblur=\"hi()\"  id=\"first\" value=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"   for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Job Title</span></label></span>\n</div >\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' type=\"text\" [(ngModel)] = \"Job.description\" name=\"desciption\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"desciption\"><span class=\"input__label-content input__label-content--hoshi\">Job Description</span></label>\n</span>\n</div >\n<div class=\"form-group\">\n<label style=\"    font-weight: 100;margin-left: 10px; color:#717070;}\" for=\"game\">Job Type</label>\n<select class=\"form-control mr5\" name=\"game\"  [(ngModel)] = \"Job.type\" style=\" width: 98.5%; border-radius: 0;     padding-left: 0px;  border: none;border-bottom: 1px solid   #5f5d5d; box-shadow: none;\" required>\n<option> Select</option>\n<option> Part Time</option>\n<option> Full Time</option>\n</select>  \n</div>\n<div *ngIf=\"sports\">\n<div class=\"form-group\">\n<label style=\"    font-weight: 100;margin-left: 10px; color:#717070;}\" for=\"game\">Job Sport</label>\n<select class=\"form-control mr5\" name=\"game\" [(ngModel)]=\"Job.sport\" style=\"     padding-left: 0px; width: 98.5%; border-radius: 0;   border: none;border-bottom: 1px solid   #5f5d5d; box-shadow: none;\" required>\n<option *ngFor=\"let sport of sports\" [ngValue]=\"sport.sports\" > {{sport.sports}} </option>\n</select>\n</div>\n</div>\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' type=\"text\" [(ngModel)] = \"Job.address1\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Address line 1</span></label>\n</span>\n</div >\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)] = \"Job.address2\" type=\"text\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Address line 2</span></label>\n</span>\n</div >\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)] = \"Job.location\" type=\"text\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Job Location</span></label>\n</span>\n</div>\n<div class=\" wd60 pd0 fl\">\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)] = \"Job.state\" type=\"text\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">State</span></label>\n</span>\n</div >\n<div class=\"wd60 pd0 fr\">\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)] = \"Job.pin\" type=\"text\" name=\"title\" >\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">PIN</span></label>\n</span>\n</div >\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)] = \"Job.job_link\" type=\"text\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Job Link</span></label>\n</span>\n</div >\n<div >\n</div>\n</div>\n</div>\n\n       <!-- Tab 2 start -->\n    \n\n    <div id=\"menu1\" class=\"tab-pane fade\">  \n    \n<div class=\"box1\">\n<h2>Organisation Details:</h2>\n  <div>\n  <span class=\"input input--hoshi\">\n \n  <input class='input__field input__field--hoshi' [(ngModel)] = \"Job.organisation_name\" type=\"text\" name=\"title\">\n   <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Organisation Name</span></label>\n  </span>\n  </div >\n    <div>\n       <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' type=\"text\" [(ngModel)] = \"Job.about\" name=\"title\">\n    <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">About Organisation</span></label>\n    </span>\n  </div >\n  <div>\n   <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' type=\"text\" [(ngModel)] = \"Job.org_address1\" name=\"title\">\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Address Line 1</span></label>\n  </span>\n  </div >\n  \n  <div>\n   <span class=\"input input--hoshi\">\n  <input type=\"text\" name=\"title\" [(ngModel)] = \"Job.org_address2\"  class=\"input__field input__field--hoshi validate datepicker\">\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Address Line 2</span></label>\n  </span>\n  </div >\n   \n  <div class=\" wd60 pd0 fl\">\n       <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' [(ngModel)] = \"Job.org_city\" type=\"text\" name=\"title\">\n    <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Job Location</span></label>\n    </span>\n  </div >\n  <div class=\"wd60 pd0 fr\">\n   <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' [(ngModel)] = \"Job.org_state\" type=\"text\" name=\"title\">\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">State</span></label>\n  </span>\n  </div >\n  <div class=\" wd60 pd0 fl\">\n       <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' [(ngModel)] = \"Job.contact\" type=\"text\" name=\"title\">\n    <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Mobile No.</span></label>\n    </span>\n  </div >\n  <div class=\"wd60 pd0 fr\">\n   <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' [(ngModel)] = \"Job.org_pin\" type=\"text\" name=\"title\">\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">PIN</span></label>\n  </span>\n  </div >\n  \n  \n  <div>\n   <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' type=\"text\" name=\"title\"  [(ngModel)] = \"Job.email\">\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Email</span></label>\n  </span>\n  </div >\n  \n</div>\n    </div>\n\n<!-- new Tab 3 -->\n\n\n  <div id=\"menu2\" class=\"tab-pane fade\">\n   \n  <div class=\"box1\">\n  <h2>Requirement:</h2>\n  <div>\n  <span class=\"input input--hoshi\">\n  <input  type=\"text\" name=\"title\"  [(ngModel)] = \"Job.work_experience\" class=\"input__field input__field--hoshi validate datepicker\" >\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Work Experience</span></label>\n  </span>\n  </div >\n  <div>\n  <span class=\"input input--hoshi\">\n  <input type=\"text\" name=\"title\"  [(ngModel)] = \"Job.qualification\" class=\"input__field input__field--hoshi validate datepicker\" >\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Qualification</span></label>\n  </span>\n  </div >\n  <div>\n  <span class=\"input input--hoshi\">\n  <input type=\"text\" name=\"title\" [(ngModel)] = \"Job.desired_skills\"  class=\"input__field input__field--hoshi validate datepicker\" >\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Desired Skill</span></label>\n  </span>\n  </div >\n  <div>\n  <span class=\"input input--hoshi\">\n  <input  type=\"text\" name=\"title\"  [(ngModel)] = \"Job.key_requirement\" class=\"input__field input__field--hoshi validate datepicker\" >\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Key Requirements</span></label>\n  </span>\n  </div>\n  <div class=\"form-group\">\n  <label style=\"    font-weight: 100;margin-left: 10px; color:#717070;}\" for=\"game\">Gender</label>\n  <select class=\"form-control mr5\" name=\"game\"  [(ngModel)] = \"Job.gender\" style=\" width: 98.5%; border-radius: 0;     padding-left: 0px;  border: none;border-bottom: 1px solid   #5f5d5d; box-shadow: none;\" required>\n  <option> Select</option>\n  <option> Male</option>\n  <option> Female</option>\n  </select>\n  </div>\n  </div>\n  </div>\n  </div>\n  <div class=\"container\">\n  <div class=\"row\">    \n  <div class=\"col-xs-6 col-md-4 col-md-offset-2 col-sm-6 col-sm-offset-2\" style=\"margin-bottom: 20px;   float: left;margin-left: 0%;\">  \n            <!-- image-preview-filename input [CUT FROM HERE]-->\n  <div class=\"input-group image-preview\">\n  <input type=\"text\" class=\"form-control image-preview-filename\" disabled=\"disabled\"> <!-- don't give a name === doesn't send on POST/GET -->\n                <span class=\"input-group-btn\">\n                    <!-- image-preview-clear button -->\n                    <button type=\"button\" class=\"btn btn-default image-preview-clear\" style=\"display:none;\">\n                        <span class=\"glyphicon glyphicon-remove\"></span> Clear\n                    </button>\n                    <!-- image-preview-input -->\n                    <div class=\"btn btn-default image-preview-input\">\n                        <span class=\"glyphicon glyphicon-folder-open\"></span>\n                        <span class=\"image-preview-input-title\">Browse</span>\n                        <input class=\"files1\" (change)=\"handleFileSelect($event)\" type=\"file\" accept=\"image/png, image/jpeg, image/gif\" id=\"Jimage\" name=\"file\"  />\n                        \n                         <!-- rename it -->\n                    </div>\n                     <input id=\"button\" type=\"submit\" class=\"btn btn-danger\" value=\"Upload Image\" name=\"submit\" style=\"    background-color: #03a9f4; border-color: #03a9f4;\">\n                    \n                </span>\n            </div><!-- /input-group image-preview [TO HERE]--> \n        </div>\n    </div>\n</div>\n\n<!--    <div class=\"col-md-2 mediaContainer\">\n <ul>\n    <div class=\"loader\" [hidden]=\"myVar\"></div>\n  </ul>\n</div> -->\n\n <input type=\"hidden\" name=\"image\"  [(ngModel)] = \"Job.image\" class=\"form-control\">\n   <div class=\"p-container\">\n    <input style=\"outline: none;    margin-left: 15px;margin-bottom: 15px;\" type=\"submit\" (click) =\"CreateJob(Job)\" class=\"btn btn-primary\" value=\"Submit\" >\n    <div class=\"clear\"> </div>\n    </div>\n  </div>\n</div>\n\n</div>"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n<div class=\"loading\" id=\"imagelodar\" *ngIf='myVar' >Loading&#8230;\n<div class=\"loader\">\n<div class=\"inner one\"></div>\n<div class=\"inner two\"></div>\n<div class=\"inner three\"></div>\n</div>\n</div>\n\n<div style=\" background-color: #d8f3ff;      margin-top: -2%;padding-top: 2%;\">\n<div class=\"container\">\n<h2>Create Jobs</h2>\n<div style=\"background-color: white;border-right: 1px solid #ddd;border-left: 1px solid #ddd;border-bottom: 1px solid #ddd;margin-bottom: 20px;\">\n<ul class=\"nav nav-tabs\">\n<li class=\"active\"><a class=\"nooutline\" data-toggle=\"tab\" href=\"#home\">Job Details</a></li>\n<li><a class=\"nooutline\" data-toggle=\"tab\" href=\"#menu1\">Organization</a></li>\n<li><a class=\"nooutline\" data-toggle=\"tab\" href=\"#menu2\">Requirements</a></li>  \n</ul>\n<div class=\"tab-content\">\n<div id=\"home\" class=\"tab-pane fade in active\">\n<div class=\"box1\">\n<h2>Job Details:</h2>\n<div class=\"form-group\">\n<input type=\"hidden\" name=\"title\"    required=\"\"><a href=\"#\" class=\" icon user\"></a>\n</div>\n<input type=\"hidden\" name=\"title\" [(ngModel)]=\"Job.userid\" class=\"form-control\" value=\"title\" required=\"\">\n<div>\n\n\n\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi'  [(ngModel)]=\"Job.title\" type=\"text\" onblur=\"hi()\"  id=\"first\" value=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"   for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Job Title</span></label></span>\n</div >\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' type=\"text\" [(ngModel)] = \"Job.description\" name=\"desciption\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"desciption\"><span class=\"input__label-content input__label-content--hoshi\">Job Description</span></label>\n</span>\n</div >\n<div class=\"form-group\">\n<label style=\"    font-weight: 100;margin-left: 10px; color:#717070;}\" for=\"game\">Job Type</label>\n<select class=\"form-control mr5\" name=\"game\"  [(ngModel)] = \"Job.type\" style=\" width: 98.5%; border-radius: 0;     padding-left: 0px;  border: none;border-bottom: 1px solid   #5f5d5d; box-shadow: none;\" required>\n<option> Select</option>\n<option> Part Time</option>\n<option> Full Time</option>\n</select>  \n</div>\n<div *ngIf=\"sports\">\n<div class=\"form-group\">\n<label style=\"    font-weight: 100;margin-left: 10px; color:#717070;}\" for=\"game\">Job Sport</label>\n<select class=\"form-control mr5\" name=\"game\" [(ngModel)]=\"Job.sport\" style=\"     padding-left: 0px; width: 98.5%; border-radius: 0;   border: none;border-bottom: 1px solid   #5f5d5d; box-shadow: none;\" required>\n<option *ngFor=\"let sport of sports\" [ngValue]=\"sport.sports\" > {{sport.sports}} </option>\n</select>\n</div>\n</div>\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' type=\"text\" [(ngModel)] = \"Job.address1\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Address line 1</span></label>\n</span>\n</div >\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)] = \"Job.address2\" type=\"text\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Address line 2</span></label>\n</span>\n</div >\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)] = \"Job.location\" type=\"text\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Job Location</span></label>\n</span>\n</div>\n<div class=\" wd60 pd0 fl\">\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)] = \"Job.state\" type=\"text\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">State</span></label>\n</span>\n</div >\n<div class=\"wd60 pd0 fr\">\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)] = \"Job.pin\" type=\"text\" name=\"title\" >\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">PIN</span></label>\n</span>\n</div >\n<div>\n<span class=\"input input--hoshi\">\n<input class='input__field input__field--hoshi' [(ngModel)] = \"Job.job_link\" type=\"text\" name=\"title\">\n<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Job Link</span></label>\n</span>\n</div >\n<div >\n</div>\n</div>\n</div>\n\n       <!-- Tab 2 start -->\n    \n\n    <div id=\"menu1\" class=\"tab-pane fade\">  \n    \n<div class=\"box1\">\n<h2>Organisation Details:</h2>\n  <div>\n  <span class=\"input input--hoshi\">\n \n  <input class='input__field input__field--hoshi' [(ngModel)] = \"Job.organisation_name\" type=\"text\" name=\"title\">\n   <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Organisation Name</span></label>\n  </span>\n  </div >\n    <div>\n       <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' type=\"text\" [(ngModel)] = \"Job.about\" name=\"title\">\n    <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">About Organisation</span></label>\n    </span>\n  </div >\n  <div>\n   <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' type=\"text\" [(ngModel)] = \"Job.org_address1\" name=\"title\">\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Address Line 1</span></label>\n  </span>\n  </div >\n  \n  <div>\n   <span class=\"input input--hoshi\">\n  <input type=\"text\" name=\"title\" [(ngModel)] = \"Job.org_address2\"  class=\"input__field input__field--hoshi validate datepicker\">\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Address Line 2</span></label>\n  </span>\n  </div >\n   \n  <div class=\" wd60 pd0 fl\">\n       <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' [(ngModel)] = \"Job.org_city\" type=\"text\" name=\"title\">\n    <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Job Location</span></label>\n    </span>\n  </div >\n  <div class=\"wd60 pd0 fr\">\n   <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' [(ngModel)] = \"Job.org_state\" type=\"text\" name=\"title\">\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">State</span></label>\n  </span>\n  </div >\n  <div class=\" wd60 pd0 fl\">\n       <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' [(ngModel)] = \"Job.contact\" type=\"text\" name=\"title\">\n    <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Mobile No.</span></label>\n    </span>\n  </div >\n  <div class=\"wd60 pd0 fr\">\n   <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' [(ngModel)] = \"Job.org_pin\" type=\"text\" name=\"title\">\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">PIN</span></label>\n  </span>\n  </div >\n  \n  \n  <div>\n   <span class=\"input input--hoshi\">\n  <input class='input__field input__field--hoshi' type=\"text\" name=\"title\"  [(ngModel)] = \"Job.email\">\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Email</span></label>\n  </span>\n  </div >\n  \n</div>\n    </div>\n\n<!-- new Tab 3 -->\n\n\n  <div id=\"menu2\" class=\"tab-pane fade\">\n   \n  <div class=\"box1\">\n  <h2>Requirement:</h2>\n  <div>\n  <span class=\"input input--hoshi\">\n  <input  type=\"text\" name=\"title\"  [(ngModel)] = \"Job.work_experience\" class=\"input__field input__field--hoshi validate datepicker\" >\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Work Experience</span></label>\n  </span>\n  </div >\n  <div>\n  <span class=\"input input--hoshi\">\n  <input type=\"text\" name=\"title\"  [(ngModel)] = \"Job.qualification\" class=\"input__field input__field--hoshi validate datepicker\" >\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Qualification</span></label>\n  </span>\n  </div >\n  <div>\n  <span class=\"input input--hoshi\">\n  <input type=\"text\" name=\"title\" [(ngModel)] = \"Job.desired_skills\"  class=\"input__field input__field--hoshi validate datepicker\" >\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Desired Skill</span></label>\n  </span>\n  </div >\n  <div>\n  <span class=\"input input--hoshi\">\n  <input  type=\"text\" name=\"title\"  [(ngModel)] = \"Job.key_requirement\" class=\"input__field input__field--hoshi validate datepicker\" >\n  <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"title\"><span class=\"input__label-content input__label-content--hoshi\">Key Requirements</span></label>\n  </span>\n  </div>\n  <div class=\"form-group\">\n  <label style=\"    font-weight: 100;margin-left: 10px; color:#717070;}\" for=\"game\">Gender</label>\n  <select class=\"form-control mr5\" name=\"game\"  [(ngModel)] = \"Job.gender\" style=\" width: 98.5%; border-radius: 0;     padding-left: 0px;  border: none;border-bottom: 1px solid   #5f5d5d; box-shadow: none;\" required>\n  <option> Select</option>\n  <option> Male</option>\n  <option> Female</option>\n  </select>\n  </div>\n  </div>\n  </div>\n  </div>\n  <div class=\"container\">\n  <div class=\"row\">    \n  <div class=\"col-xs-6 col-md-4 col-md-offset-2 col-sm-6 col-sm-offset-2\" style=\"margin-bottom: 20px;   float: left;margin-left: 0%;\">  \n            <!-- image-preview-filename input [CUT FROM HERE]-->\n  <div class=\"input-group image-preview\">\n  <input type=\"text\" class=\"form-control image-preview-filename\" disabled=\"disabled\"> <!-- don't give a name === doesn't send on POST/GET -->\n                <span class=\"input-group-btn\">\n                    <!-- image-preview-clear button -->\n                    <button type=\"button\" class=\"btn btn-default image-preview-clear\" style=\"display:none;\">\n                        <span class=\"glyphicon glyphicon-remove\"></span> Clear\n                    </button>\n                    <!-- image-preview-input -->\n                    <div class=\"btn btn-default image-preview-input\">\n                        <span class=\"glyphicon glyphicon-folder-open\"></span>\n                        <span class=\"image-preview-input-title\">Browse</span>\n                        <input class=\"files1\" (change)=\"handleFileSelect($event)\" type=\"file\" accept=\"image/png, image/jpeg, image/gif\" id=\"Jimage\" name=\"file\"  />\n                        \n                         <!-- rename it -->\n                    </div>\n                     <input id=\"button\" type=\"submit\" class=\"btn btn-danger\" value=\"Upload Image\" name=\"submit\" style=\"    background-color: #03a9f4; border-color: #03a9f4;\">\n                    \n                </span>\n            </div><!-- /input-group image-preview [TO HERE]--> \n        </div>\n    </div>\n</div>\n <input type=\"hidden\" name=\"image\"  [(ngModel)] = \"Job.image\" class=\"form-control\">\n   <div class=\"p-container\">\n    <input style=\"outline: none;    margin-left: 15px;margin-bottom: 15px;\" type=\"submit\" (click) =\"CreateJob(Job)\" class=\"btn btn-primary\" value=\"Submit\" >\n    <div class=\"clear\"> </div>\n    </div>\n  </div>\n</div>\n\n</div>"

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<!-- {{Job | json}} -->\n\n<div class=\"w3-content w3-margin-top\" style=\"max-width:1400px;\">\n  <div class=\"w3-row-padding\">\n    <div class=\"w3-third\">\n      <div class=\"w3-white w3-text-grey w3-card-4\">\n        <div class=\"w3-display-container\">\n          <img src=\"assets/images/avatar_hat.jpg\" style=\"width:100%\" alt=\"Avatar\">\n          <div class=\"w3-display-bottomleft w3-container w3-text-white\">\n          <h2>{{Job.organisation_name}}</h2>\n          </div>\n        </div>\n        <div class=\"w3-container\">\n           <h5 class=\"w3-opacity\"><b>Job Title </b></h5>\n          <p>{{Job.title}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n           <h5 class=\"w3-opacity\"><b>Job Location </b></h5>\n          <p>{{Job.location}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n\n           <h5 class=\"w3-opacity\"><b>Gender </b></h5>\n          <p>{{Job.gender}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n\n           <h5 class=\"w3-opacity\"><b>Sport </b></h5>\n          <p>{{Job.sport}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n\n           <h5 class=\"w3-opacity\"><b>Job Type </b></h5>\n          <p>{{Job.type}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n\n           <h5 class=\"w3-opacity\"><b>Qualification</b></h5>\n          <h6 class=\"w3-text-teal\"><span class=\"w3-tag w3-green w3-round\">{{Job.qualification}}</span></h6>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n\n           <h5 class=\"w3-opacity\"><b>Key Requirement </b></h5>\n          <h6 class=\"w3-text-teal\"><span class=\"w3-tag w3-red w3-round\">{{Job.key_requirement}}</span></h6>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n          <hr>\n\n          \n          <br>\n\n          <br>\n        </div>\n      </div><br>\n\n    <!-- End Left Column -->\n    </div>\n\n    <!-- Right Column -->\n    <div class=\"w3-twothird\">\n    \n      <div class=\"w3-container w3-card-2 w3-white w3-margin-bottom\">\n        <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Other Details</h2>\n        <div class=\"w3-container\">\n        <h6 class=\"w3-text-teal\"><b>Email- </b>{{Job.email}}</h6>\n          <h6 class=\"w3-text-teal\"><b>Job Link - </b>{{Job.work_experience}}</h6>\n           <h6 class=\"w3-text-teal\"><b>Job Eligibility - </b>{{Job.desired_skills}}</h6>\n           <h5 class=\"w3-opacity\"><b>Job Description</b></h5>\n          <p>{{Job.description}}</p>\n          <hr>\n       </div>\n      </div>\n\n\n <div class=\"w3-container w3-card-2 w3-white\">\n        <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Organization Address Details</h2>\n        \n         <p class=\"w3-large\"><b><i class=\"fa fa-asterisk fa-fw w3-margin-right w3-text-teal\"></i> </b></p>\n          <h5 class=\"w3-opacity\"><b>Address  </b></h5>\n          <p>{{Job.org_address1}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n          <h5 class=\"w3-opacity\"><b>Address  </b></h5>\n          <p>{{Job.org_address2}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n           \n          </div>\n          <h5 class=\"w3-opacity\"><b>Organization Location  </b></h5>\n          <p>{{Job.org_city}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n            <div class=\"w3-container w3-center w3-round-xlarge w3-teal\" style=\"width:80%\">\n            </div>\n          </div>\n           <h5 class=\"w3-opacity\"><b>Organization State  </b></h5>\n          <p>{{Job.org_state}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n            <div class=\"w3-container w3-center w3-round-xlarge w3-teal\" style=\"width:80%\">\n            </div>\n          </div>\n          <h5 class=\"w3-opacity\"><b>Pin</b></h5>\n          <p>{{Job.org_pin}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          \n          </div>\n   \n      </div> \n  \n    </div>\n    \n  <!-- End Grid -->\n  </div>\n  \n  <!-- End Page Container -->\n</div>"

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"pd50\">\n  <span class=\"create\">Create Event</span>\n\n</div>\n\n<ul id=\"tabs-swipe-demo\" class=\"tabs\">\n    <li class=\"tab col s3\"><a class=\"active active1\" href=\"#home\">Home</a></li>\n    <li class=\"tab col s3\"><a href=\"#menu1\">Menu 1</a></li>\n    <li class=\"tab col s3\"><a  href=\"#menu2\">Menu 2</a></li>\n    <li class=\"tab col s3\"><a href=\"#menu3\">Menu 3</a></li>\n  </ul>\n  <div id=\"home\" class=\"backform col s12\"><div class=\"row\">\n   <h4 class=\"ml20 fs30\">HOME</h4>\n    <form class=\"col s12\">\n      <div class=\"row\">\n       \n        <div class=\"input-field col s12 l9\">\n          <input type=\"text\"  id=\"add1\" class=\"validate\">\n          <label for=\"address1\">Address Line1</label>\n           <label id=\"address_line1_error\" hidden>Address Line1 is required .</label> \n        </div>\n         <div class=\"input-field col s12 l9\">\n          <input type=\"text\"  id=\"add1\" class=\"validate\">\n          <label for=\"address1\">Address Line1</label>\n           <label id=\"address_line1_error\" hidden>Address Line1 is required .</label> \n        </div>\n         <div class=\"input-field col s12 l9\">\n          <input type=\"text\"  id=\"add1\" class=\"validate\">\n          <label for=\"address1\">Address Line1</label>\n           <label id=\"address_line1_error\" hidden>Address Line1 is required .</label> \n        </div>\n         <div class=\"input-field col s12 l9\">\n          <input type=\"text\"  id=\"add1\" class=\"validate\">\n          <label for=\"address1\">Address Line1</label>\n           <label id=\"address_line1_error\" hidden>Address Line1 is required .</label> \n        </div>\n       \n      </div></form>\n</div>\n</div>\n  <div id=\"menu1\" class=\"backform col s12\"><div class=\"row\">\n  <h4 class=\"ml20 fs30\">MENU 1</h4>\n  <form class=\"col s12\">\n      <div class=\"row\">\n <div class=\"input-field col s12 l9\">\n            <input type=\"text\"  id=\"add1\" class=\"validate\">\n          <label for=\"address1\">Address Line1</label>\n           <label id=\"address_line1_error\" hidden>Address Line1 is required .</label> \n        </div>\n         <div class=\"input-field col s12 l9\">\n          <input type=\"text\"  id=\"add1\" class=\"validate\">\n          <label for=\"address1\">Address Line1</label>\n           <label id=\"address_line1_error\" hidden>Address Line1 is required .</label> \n        </div>\n         <div class=\"input-field col s12 l9\">\n          <input type=\"text\"  id=\"add1\" class=\"validate\">\n          <label for=\"address1\">Address Line1</label>\n           <label id=\"address_line1_error\" hidden>Address Line1 is required .</label> \n        </div>\n         <div class=\"input-field col s12 l9\">\n          <input type=\"text\"  id=\"add1\" class=\"validate\">\n          <label for=\"address1\">Address Line1</label>\n           <label id=\"address_line1_error\" hidden>Address Line1 is required .</label> \n        </div>\n       \n      </div></form>\n</div>\n</div>\n  <div id=\"menu2\" class=\"backform col s12\"> <div class=\"row\">\n  <h4 class=\"ml20 fs30\">MENU 2</h4>\n\n<form class=\"col s12\">\n      <div class=\"row\">\n  <div class=\"input-field col s12 l9\">\n            <input type=\"text\"  id=\"add1\" class=\"validate\">\n          <label for=\"address1\">Address Line1</label>\n           <label id=\"address_line1_error\" hidden>Address Line1 is required .</label> \n        </div>\n         <div class=\"input-field col s12 l9\">\n          <input type=\"text\"  id=\"add1\" class=\"validate\">\n          <label for=\"address1\">Address Line1</label>\n           <label id=\"address_line1_error\" hidden>Address Line1 is required .</label> \n        </div>\n         <div class=\"input-field col s12 l9\">\n          <input type=\"text\"  id=\"add1\" class=\"validate\">\n          <label for=\"address1\">Address Line1</label>\n           <label id=\"address_line1_error\" hidden>Address Line1 is required .</label> \n        </div>\n         <div class=\"input-field col s12 l9\">\n          <input type=\"text\"  id=\"add1\" class=\"validate\">\n          <label for=\"address1\">Address Line1</label>\n           <label id=\"address_line1_error\" hidden>Address Line1 is required .</label> \n        </div>\n        \n  \n      </div></form>\n</div>\n</div>\n  <div id=\"menu3\" class=\"backform col s12\"><div class=\"row\">\n  <h4 class=\"ml20 fs30\">MENU 3</h4>\n\n<form class=\"col s12\">\n      <div class=\"row\">\n   <div class=\"input-field col s12 l9\">\n\n          <input type=\"text\"  id=\"add1\" class=\"validate\">\n          <label for=\"address1\">Address Line1</label>\n           <label id=\"address_line1_error\" hidden>Address Line1 is required .</label> \n        </div>\n         <div class=\"input-field col s12 l9\">\n          <input type=\"text\"  id=\"add1\" class=\"validate\">\n          <label for=\"address1\">Address Line1</label>\n           <label id=\"address_line1_error\" hidden>Address Line1 is required .</label> \n        </div>\n         <div class=\"input-field col s12 l9\">\n          <input type=\"text\"  id=\"add1\" class=\"validate\">\n          <label for=\"address1\">Address Line1</label>\n           <label id=\"address_line1_error\" hidden>Address Line1 is required .</label> \n        </div>\n         <div class=\"input-field col s12 l9\">\n          <input type=\"text\"  id=\"add1\" class=\"validate\">\n          <label for=\"address1\">Address Line1</label>\n           <label id=\"address_line1_error\" hidden>Address Line1 is required .</label> \n        </div>\n       \n      </div></form>\n</div>\n</div>\n \n <div class=\"input-field col s12 l9 backform1\">\n        <button class=\"ml20 btn waves-effect waves-light btn1\" type=\"submit\" name=\"action\">Submit\n    <i class=\"material-icons right\">send</i>\n    </button>\n    </div>"

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "\n <div class=\"section\"></div>\n <div style=\"text-align:center;\">\n  <main>\n\n      <img class=\"responsive-img\"  src=\"http://portal.getsporty.in/img/logo.png\" />\n      <div class=\"section\"></div>\n      <div class=\"section\"></div>\n\n      <div class=\"container\">\n        <div class=\"z-depth-1 grey lighten-4 row\" style=\"display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;\">\n          <form class=\"col s12\" [formGroup]=\"form\" role=\"form\" (ngSubmit)=\"login()\" >\n            <div class='row'>\n              <div class='col s12'>\n              </div>\n            </div>\n\n            <div class='row'>\n            \n              <div class='input-field col s12'>\n\n               <input id=\"email\" #email autocomplete=\"off\" type=\"email\" class=\"validate\"  [(ngModel)]=\"loginModel.email\" formControlName=\"email\"   placeholder=\"Email\" [class.invalid]=\"form.controls['email'].touched && !form.controls['email'].valid\">\n                <label for='email'>Username</label>\n              </div>\n\n            </div>\n\n            <div class='row'>\n              <div class='input-field col s12'>\n              <input id=\"password\" type=\"password\" class=\"validate\" #password [(ngModel)]=\"loginModel.password\" formControlName=\"password\" placeholder=\"Password\" [class.invalid]=\"form.controls['password'].touched && !form.controls['password'].valid\">\n                <label for='password'>Password</label>\n              </div>\n              \n              \n            </div>\n\n            <br />\n     \n              <div class='row'>\n                <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Login</button>\n              </div>\n\n \n\n\n             <label style='float: left;'>\n             <a class='pink-text' routerLink=\"/registration\"><b>Register</b></a>\n              </label>\n\n              <label style='float: right;'>\n                <a class='pink-text' href='#!'><b>Forgot Password?</b></a>\n              </label>\n       \n          </form>\n        </div>\n      </div>\n      \n\n\n\n  </main>\n  </div>\n\n\n\n\n"

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"w3-content w3-margin-top\" style=\"max-width:1400px;\">\n<div class=\"w3-row-padding\">\n<div class=\"w3-third\">\n<div class=\"w3-white w3-text-grey w3-card-4\">\n<div class=\"w3-display-container\">\n<img src=\"assets/images/avatar_hat.jpg\" style=\"width:100%\" alt=\"Avatar\">\n<div class=\"w3-display-bottomleft w3-container w3-text-white\">\n          <h2>{{user.name}}</h2>\n          </div>\n        </div>\n        <div class=\"w3-container\">\n           <h5 class=\"w3-opacity\"><b>Profession - </b>{{user.prof_name}}</h5>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n           <h5 class=\"w3-opacity\"><b>Email - </b> {{user.email}}</h5>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n           <h5 class=\"w3-opacity\"><b>Contact No - </b>{{user.contact_no}}</h5>\n          <p></p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n           <h5 class=\"w3-opacity\"><b>Sport - </b>{{user.sport}}</h5>\n          <p></p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n           <h5 class=\"w3-opacity\"><b>Gender - </b>{{user.gender}}</h5>\n          <p></p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n           <h5 class=\"w3-opacity\"><b>DOB</b></h5>\n          <h6 class=\"w3-text-teal\"><span class=\"w3-tag w3-green w3-round\">{{user.dob}}</span></h6>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n          <hr>\n          <p class=\"w3-large\"><b><i class=\"fa fa-asterisk fa-fw w3-margin-right w3-text-teal\"></i>Address Details</b></p>\n          <h5 class=\"w3-opacity\"><b>Location  </b></h5>\n          <p>{{user.location}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n          <h5 class=\"w3-opacity\"><b>Languages Known  </b></h5>\n          <p>{{user.languages_known}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n            <div class=\"w3-container w3-center w3-round-xlarge w3-teal\" style=\"width:80%\">\n            </div>\n          </div>\n          <h5 class=\"w3-opacity\"><b>acamedy</b></h5>\n          <p>{{headerdetails.acamedy}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n          <h5 class=\"w3-opacity\"><b>description</b></h5>\n          <p>{{headerdetails.description}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n          <h5 class=\"w3-opacity\"><b>designation</b></h5>\n          <p>{{headerdetails.designation}}</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\">\n          </div>\n          <br>\n          <br>\n        </div>\n      </div><br>\n    </div>\n    <div class=\"w3-twothird\">\n    <div class=\"w3-container w3-card-2 w3-white w3-margin-bottom\">\n    <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Formal Educations</h2>\n    <div *ngFor = 'let formalEducations of formalEducation' >\n    <div class=\"w3-container\">\n    <h5 class=\"w3-opacity\"><b>Degree Name -</b> {{formalEducations.degree}} </h5>\n    <h6 class=\"w3-text-teal\"><b>Organisation Name -</b>{{formalEducations.organisation}}</h6>\n    <h6 class=\"w3-text-teal\"><b>Stream  -</b> {{formalEducations.stream}}</h6>\n    <h6 class=\"w3-text-teal\"><b>Course Duration -</b> {{formalEducations.courseDuration}}</h6>\n    <hr>\n    </div>\n    </div>\n    </div>\n    <div class=\"w3-container w3-card-2 w3-white w3-margin-bottom\">\n    <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Sport Educations</h2>\n    <div *ngFor = 'let sportEducations of sportEducation'> \n    <div class=\"w3-container\">\n    <h5 class=\"w3-opacity\"><b>Degree Name -</b> {{sportEducations.degree}} </h5>\n    <h6 class=\"w3-text-teal\"><b>Organisation Name -</b>{{sportEducations.organisation}}</h6>\n    <h6 class=\"w3-text-teal\"><b>Stream  -</b> {{sportEducations.stream}}</h6>\n    <h6 class=\"w3-text-teal\"><b>Course Duration -</b> {{sportEducations.courseDuration}}</h6>\n    <hr>\n    </div>\n    </div>\n    </div>\n    <div class=\"w3-container w3-card-2 w3-white w3-margin-bottom\">\n    <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Other Educations</h2>\n    <div *ngFor = 'let otherCertifications of otherCertification'> \n    <div class=\"w3-container\">\n    <h5 class=\"w3-opacity\"><b>Degree Name -</b> {{otherCertifications.degree}} </h5>\n    <h6 class=\"w3-text-teal\"><b>Organisation Name -</b>{{otherCertifications.organisation}}</h6>\n    <h6 class=\"w3-text-teal\"><b>Stream  -</b> {{otherCertifications.stream}}</h6>\n    <h6 class=\"w3-text-teal\"><b>Course Duration -</b> {{otherCertifications.courseDuration}}</h6>\n    <hr>\n    </div>\n    </div>\n    </div>\n    <div class=\"w3-container w3-card-2 w3-white w3-margin-bottom\">\n    <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Work Experience </h2>\n    <div *ngFor = 'let workExperiences of workExperience'> \n    <div class=\"w3-container\">\n    <h5 class=\"w3-opacity\"><b>Designation Name -</b> {{workExperiences.designation}} </h5>\n    <h6 class=\"w3-text-teal\"><b>Organisation Name -</b>{{workExperiences.organisationName}}</h6>\n    <h6 class=\"w3-text-teal\"><b>Description  -</b> {{workExperiences.description}}</h6>\n    <h6 class=\"w3-text-teal\"><b>From -</b> {{workExperiences.dateFrom}}</h6>\n    <h6 class=\"w3-text-teal\"><b>To -</b> {{workExperiences.dateTo}}</h6>\n    <hr>\n    </div>\n    </div>\n    </div>\n    <div class=\"w3-container w3-card-2 w3-white w3-margin-bottom\">\n    <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Experience As Player </h2>\n    <div *ngFor = 'let experienceAsPlayers of experienceAsPlayer'> \n    <div class=\"w3-container\">\n    <h5 class=\"w3-opacity\"><b>Designation Name -</b> {{experienceAsPlayers.designation}} </h5>\n    <h6 class=\"w3-text-teal\"><b>Organisation Name -</b>{{experienceAsPlayers.organisationName}}</h6>\n    <h6 class=\"w3-text-teal\"><b>Description  -</b> {{experienceAsPlayers.description}}</h6>\n    <h6 class=\"w3-text-teal\"><b>From -</b> {{experienceAsPlayers.dateFrom}}</h6>\n    <h6 class=\"w3-text-teal\"><b>To -</b> {{experienceAsPlayers.dateTo}}</h6>\n    <hr>\n    </div>\n    </div>\n    </div>\n    </div>\n    </div>\n    </div>"

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports = "<main>\n    <div style=\"text-align: center;\">\n      <img class=\"responsive-img\"  src=\"http://portal.getsporty.in/img/logo.png\" />\n      <div class=\"section\"></div>\n\n    \n\n      <div class=\"container\">\n        <div class=\"z-depth-4 grey lighten-4 row\" style=\" display: inline-block; padding: 4% 4% 4% 4%; border: 1px solid #EEE;\">\n<div class=\"row\">\n\n<h4> Register</h4>\n          <div class=\"row\">\n              <form class=\"col s12\">\n\n                   \n                <div class=\"row\">\n                      <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">account_circle</i>\n          <input id=\"icon_prefix\" type=\"text\" class=\"validate\">\n          <label for=\"icon_prefix\">Name</label>\n        </div></div>\n                <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">email</i>\n          <input id=\"icon_prefix\" type=\"text\" class=\"validate\">\n          <label for=\"icon_prefix\">Email</label>\n        </div></div>\n                 <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">phonelink_ring</i>\n          <input id=\"icon_prefix\" type=\"text\" class=\"validate\">\n          <label for=\"icon_prefix\">Phone No</label>\n        </div></div>\n                <div class=\"row\">\n        \n                  <div class=\"input-field col s6\">\n                     <i class=\"material-icons prefix\"></i> \n                      <select>\n                              <option value=\"\" disabled selected>Choose your option</option>\n                                <option value=\"1\">Option 1</option>\n                                 <option value=\"2\">Option 2</option>\n                                 <option value=\"3\">Option 3</option>\n                       </select>\n                      <label>Choose sports</label>\n                    </div>\n        <div class=\"input-field col s6\">\n          <input id=\"email\"  type=\"email\" class=\"validate datepicker\">\n          <label for=\"email\" data-error=\"wrong\" data-success=\"right\">Date Of Birth</label>\n        </div>\n  </div>\n                <div class=\"row\">\n         <div class=\"input-field col s6\">\n        <i class=\"material-icons prefix\"></i> \n    <select>\n      <option value=\"\" disabled selected>Choose your option</option>\n      <option value=\"1\">Option 1</option>\n      <option value=\"2\">Option 2</option>\n      <option value=\"3\">Option 3</option>\n    </select>\n    <label>Choose profession</label>\n  </div>\n         <div class=\"input-field col s6\">\n       \n    <select>\n      <option value=\"\" disabled selected>Choose your option</option>\n      <option value=\"1\">Option 1</option>\n      <option value=\"2\">Option 2</option>\n      <option value=\"3\">Option 3</option>\n    </select>\n    <label>Gender</label>\n  </div></div>\n                 <div class=\"row\">\n                           <div class=\"input-field col s4\">\n                           <label style='float: right;'>\n                <a class='pink-text' href='#!'><b>Already registered?</b></a>\n              </label>\n                          </div>\n\n                          <div class=\"input-field col s8\">\n                            <button class=\"btn cyan waves-effect waves-light right\" type=\"submit\" name=\"action\">Sign UP\n                              \n                            </button>\n                          </div>\n                        </div>\n                    \n                    </form>\n                  </div>\n        </div>\n      </div>\n      \n    \n    <div class=\"section\"></div>\n    <div class=\"section\"></div>\n    </div>\n\n  </div>\n\n\n  \n  </main>"

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppConfig; });

var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* OpaqueToken */]("app.config");
var AppConfig = {
    applocalhostUrl: "http://localhost/getsporty/php",
    apBaseUrl: "http://getsporty.in/testingapp",
    loginUrl: "http://localhost/testingapp/angularapi.php?act=angulartest",
    viewcontenturl: "http://localhost/testingapp/angularapi.php?act=contentangularlex",
    createcontenturl: "http://localhost/testingapp",
    createeventurl: "http://localhost/testingapp/angularapi.php?act=createevent",
    sportlist: "http://localhost/testingapp/angularapi.php?act=sportlisting",
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

//# sourceMappingURL=app.iconfig.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__xhr_headers__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_iconfig__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_iconfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__app_iconfig__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createEventServices; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











var createEventServices = (function () {
    function createEventServices(_http, _config, router) {
        this._http = _http;
        this._config = _config;
        this.router = router;
        this.createeventurl = this._config.apBaseUrl;
        this.sportlistUrl = this._config.apBaseUrl + "/angularapi.php?act=sportlisting";
    }
    createEventServices.prototype.Sportlist = function () {
        return this._http.get(this.sportlistUrl)
            .map(function (res) { return res.json(); });
    };
    createEventServices.prototype.saveEvent = function (events) {
        var _this = this;
        return this._http.post(this.createeventurl + "/angularapi.php?act=createevent", events, __WEBPACK_IMPORTED_MODULE_3__xhr_headers__["a" /* xhrHeaders */])
            .map((function (res) { return res.json(); })).subscribe(function (data) { _this.router.navigate(["/home"]); }, function (err) { return console.log("An Error Occured While Processing Your Request"); });
    };
    createEventServices.prototype.getCreateEventList = function (id) {
        return this._http.get(this.createeventurl + "/angularapi.php?act=getuserevent&userid=" + id).map(function (res) { return res.json(); });
    };
    createEventServices.prototype.getEventDetails = function (id) {
        return this._http.get(this.createeventurl + "/angularapi.php?act=geteventdetails&id=" + id).map(function (res) { return res.json(); });
    };
    createEventServices.prototype.getEventList = function (id) {
        return this._http.get(this.createeventurl + "/angularapi.php?act=getuserdashboardevent&userid=" + id).map(function (res) { return res.json(); });
    };
    createEventServices.prototype.uploadimage = function (binaryString) {
        return this._http.post(this.createeventurl + "/angularapi.php?act=upload", binaryString)
            .map(function (res) { return res.json(); });
    };
    return createEventServices;
}());
createEventServices = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Inject */])(__WEBPACK_IMPORTED_MODULE_9__app_config__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__app_iconfig__["IAppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__app_iconfig__["IAppConfig"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], createEventServices);

var _a, _b, _c;
//# sourceMappingURL=createEvent.services.js.map

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(169);


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__xhr_headers__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_iconfig__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_iconfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__app_iconfig__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobServices; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











var JobServices = (function () {
    function JobServices(_http, _config, router) {
        this._http = _http;
        this._config = _config;
        this.router = router;
        this.baseurl = this._config.apBaseUrl;
        this.sportlistUrl = this._config.apBaseUrl + "/angularapi.php?act=sportlisting";
    }
    JobServices.prototype.CreatJob = function (job) {
        var _this = this;
        return this._http.post(this.baseurl + "/angularapi.php?act=createjob", job, __WEBPACK_IMPORTED_MODULE_3__xhr_headers__["a" /* xhrHeaders */]).map((function (res) { return res.json(); })).subscribe(function (data) { _this.router.navigate(["/home"]); }, function (err) { return alert("failed"); });
    };
    JobServices.prototype.Sportlist = function () {
        return this._http.get(this.sportlistUrl)
            .map(function (res) { return res.json(); });
    };
    JobServices.prototype.getJobdetails = function (id) {
        return this._http.get(this.baseurl + "/angularapi.php?act=getjobdetails&id=" + id).map(function (res) { return res.json(); });
    };
    JobServices.prototype.getJobList = function (userid) {
        return this._http.get(this.baseurl + "/angularapi.php?act=getjoblist&id=" + userid).map(function (res) { return res.json(); });
    };
    JobServices.prototype.uploadimage = function (binaryString) {
        return this._http.post(this.baseurl + "/angularapi.php?act=upload", binaryString)
            .map(function (res) { return res.json(); });
    };
    return JobServices;
}());
JobServices = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Inject */])(__WEBPACK_IMPORTED_MODULE_9__app_config__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__app_iconfig__["IAppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__app_iconfig__["IAppConfig"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], JobServices);

var _a, _b, _c;
//# sourceMappingURL=job.services.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(18);
/* harmony export (immutable) */ __webpack_exports__["a"] = xhrHeaders;

/**
 * xhrHeaders function to create http options data
 */
function xhrHeaders() {
    var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Content-Type", "*");
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    return { headers: headers };
}
//# sourceMappingURL=xhr-headers.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEvent; });
var CreateEvent = (function () {
    function CreateEvent() {
    }
    return CreateEvent;
}());

//# sourceMappingURL=createEvent.module.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobModule; });
var JobModule = (function () {
    function JobModule() {
    }
    return JobModule;
}());

//# sourceMappingURL=job.model.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__xhr_headers__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_iconfig__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_iconfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__app_iconfig__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginServices; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













var loginServices = (function () {
    function loginServices(_http, _config, router) {
        this._http = _http;
        this._config = _config;
        this.router = router;
        this.baseUrl = this._config.apBaseUrl;
    }
    loginServices.prototype.saveEvent = function (events) {
        return this._http.post(this.baseUrl + "/angularapi.php?act=createevent", events, __WEBPACK_IMPORTED_MODULE_9__xhr_headers__["a" /* xhrHeaders */]).map(function (res) { return res.json(); }).share();
    };
    loginServices.prototype.Sportlist = function () {
        return this._http.get(this.baseUrl + "/angularapi.php?act=sportlisting")
            .map(function (res) { return res.json(); });
    };
    loginServices.prototype.login = function (login) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var url = this.baseUrl + "/angularapi.php?act=angulartest" + "&email=" + login['email'] + "&password=" + login['password'];
        this._http.get(url, options).map((function (res) { return res.json(); }))
            .subscribe(function (data) {
            if (data != null) {
                var user = data;
                if (user) {
                    localStorage.clear();
                    localStorage.setItem('currentUser', data.customer);
                    localStorage.setItem('currentUserid', data.userId);
                }
                _this.router.navigate(["/home"]);
            }
            else {
                _this.router.navigate(["/login"]);
            }
        }, function (err) { return console.log("Error" + err); });
    };
    loginServices.prototype.profiledata = function (id) {
        return this._http.get(this.baseUrl + '/angularapi.php?act=getUserProfile&userid=' + id + '&prof_id=2')
            .toPromise()
            .then(function (res) { return res.json().data; });
    };
    return loginServices;
}());
loginServices = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Inject */])(__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__app_iconfig__["IAppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__app_iconfig__["IAppConfig"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], loginServices);

var _a, _b, _c;
//# sourceMappingURL=login.services.js.map

/***/ })

},[527]);
//# sourceMappingURL=main.bundle.js.map