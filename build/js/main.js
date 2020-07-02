/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfill_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill/polyfill */ "./js/polyfill/polyfill.js");
/* harmony import */ var _modules_count_down_clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/count-down-clock */ "./js/modules/count-down-clock.js");
/* harmony import */ var _modules_form_select_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form/select-category */ "./js/modules/form/select-category.js");
/* harmony import */ var _modules_form_input_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form/input-select */ "./js/modules/form/input-select.js");
/* harmony import */ var _modules_form_validate_phone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form/validate-phone */ "./js/modules/form/validate-phone.js");
/* harmony import */ var _modules_init_sliders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/init-sliders */ "./js/modules/init-sliders.js");





 // Utils

Object(_polyfill_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"])(); // page-main

Object(_modules_form_select_category__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_modules_form_input_select__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_modules_form_validate_phone__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_modules_count_down_clock__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_init_sliders__WEBPACK_IMPORTED_MODULE_5__["default"])();

/***/ }),

/***/ "./js/modules/count-down-clock.js":
/*!****************************************!*\
  !*** ./js/modules/count-down-clock.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var countDownclocks = document.querySelectorAll(".count-down-clock");

var getTimeRemaining = function getTimeRemaining(endtime) {
  var total = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor(total / 1000 % 60);
  var minutes = Math.floor(total / 1000 / 60 % 60);
  var hours = Math.floor(total / (1000 * 60 * 60) % 24);
  return {
    total: total,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
};

var initializeClock = function initializeClock(endtime) {
  var clocks = document.querySelectorAll(".count-down-clock__clockdiv");
  clocks.forEach(function (clock) {
    var hoursSpan = clock.querySelector(".count-down-clock__hours");
    var minutesSpan = clock.querySelector(".count-down-clock__minutes");
    var secondsSpan = clock.querySelector(".count-down-clock__seconds");

    function updateClock() {
      var t = getTimeRemaining(endtime);
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  });
};

var setCountDownClock = function setCountDownClock() {
  if (countDownclocks.length) {
    var deadline = new Date(Date.parse(new Date()) + 24 * 60 * 60 * 1000);
    initializeClock(deadline);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setCountDownClock);

/***/ }),

/***/ "./js/modules/form/change-required-fields.js":
/*!***************************************************!*\
  !*** ./js/modules/form/change-required-fields.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var form = document.querySelector(".js-submit-documents-form");
var requiredPatientFields = ["lastNameAdult", "firstNameAdult", "partonymAdult", "birthDateAdult", "emailAdult", "phoneAdult", "passportSeriesAdult", "passportNumberAdult", "issueDepartmentAdult", "issueDepartmentCodeAdult", "issueDateAdult", "cityAdult", "streetAdult", "houseAdult"];
var requiredChildWithPassportFields = ["lastNameChild", "firstNameChild", "partonymChild", "birthDateChild", "passportSeriesChild", "passportNumberChild", "issueDepartmentChild", "issueDepartmentCodeChild", "issueDateChild", "cityChild", "streetChild", "houseChild", "lastNameParent", "firstNameParent", "partonymParent", "birthDateParent", "emailParent", "phoneParent", "passportSeriesParent", "passportNumberParent", "issueDepartmentParent", "issueDepartmentCodeParent", "issueDateParent", "cityParent", "streetParent", "houseParent"];
var requiredChildWithSertificateFields = ["lastNameChild", "firstNameChild", "partonymChild", "birthDateChild", "birthSertificateSeries", "birthSertificateNumber", "issueDepartmentBirthSertificate", "issueDateBirthSertificate", "cityChild", "streetChild", "houseChild", "lastNameParent", "firstNameParent", "partonymParent", "birthDateParent", "emailParent", "phoneParent", "passportSeriesParent", "passportNumberParent", "issueDepartmentParent", "issueDepartmentCodeParent", "issueDateParent", "cityParent", "streetParent", "houseParent"]; // const requiredParentFields = [`lastNameParent`, `firstNameParent`, `partonymParent`, `birthDateParent`, `emailParent`, `phoneParent`, `passportSeriesParent`, `passportNumberParent`, `issueDepartmentParent`, `issueDepartmentCodeParent`, `issueDateParent`, `cityParent`, `streetParent`, `houseParent`];

var changeRequiredFields = function changeRequiredFields(mode) {
  if (mode === "adult") {
    changeFields(requiredPatientFields);
  } else if (mode === "child") {
    changeFields(requiredChildWithSertificateFields);
  } else if (mode === "passport") {
    changeFields(requiredChildWithPassportFields);
  } else if (mode === "birth\u0421ertificate") {
    changeFields(requiredChildWithSertificateFields);
  }
};

var changeFields = function changeFields(newReqiredFields) {
  var currentlyRequiredFields = form.querySelectorAll("input[required=\"required\"]");

  if (currentlyRequiredFields.length) {
    currentlyRequiredFields.forEach(function (el) {
      el.removeAttribute("required");
    });
  }

  newReqiredFields.forEach(function (el) {
    if (form.querySelector("input[name=\"".concat(el, "\"]"))) {
      form.querySelector("input[name=\"".concat(el, "\"]")).setAttribute("required", "required");
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (changeRequiredFields);

/***/ }),

/***/ "./js/modules/form/input-select.js":
/*!*****************************************!*\
  !*** ./js/modules/form/input-select.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./js/modules/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_select_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/select-category */ "./js/modules/form/select-category.js");


var ENTER_KEY_CODE = 13;
var allActivElement = document.querySelectorAll("input, checkbox, a, button, textarea, radio, select, option");
var customSelectsWrapper = document.querySelectorAll(".custom-input__wrapper");
var customSelectsInputs = document.querySelectorAll(".custom-input__wrapper input");
var customSelectsItems = document.querySelectorAll(".custom-input__list li");

var closeAllLists = function closeAllLists() {
  customSelectsWrapper.forEach(function (el) {
    el.classList.remove("custom-input__wrapper--show");
  });
};

var documentClickHandler = function documentClickHandler(evt) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getParent"])(evt.target, "custom-input__wrapper")) {
    closeAllLists();
    document.removeEventListener("click", documentClickHandler);
  }
};

var customSelectAction = function customSelectAction() {
  if (customSelectsWrapper.length) {
    allActivElement.forEach(function (el) {
      el.addEventListener("focus", function () {
        if (!el.parentNode.classList.contains("custom-input__wrapper--show")) {
          closeAllLists();
        }
      });
    });
    customSelectsItems.forEach(function (el) {
      var selectsHandler = function selectsHandler() {
        var parent = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["returnParent"])(el, "custom-input__wrapper");
        parent.querySelector("input").value = el.innerHTML;
        Object(_form_select_category__WEBPACK_IMPORTED_MODULE_1__["default"])();
        closeAllLists();
        var inputWrapper = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["returnParent"])(el, "custom-input__wrapper");
        var input = inputWrapper.querySelector("input");

        if (el.dataset) {
          var key = Object.keys(el.dataset);
          var value = el.dataset[key];
          var atr = "data-".concat(key);
          input.setAttribute(atr, value);
        }

        var changeEv = new Event("change");
        input.dispatchEvent(changeEv);
        var form = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["returnParent"])(el, "form");

        if (form) {
          var formEv = new Event("change");
          form.dispatchEvent(formEv);
        }
      };

      el.addEventListener("click", selectsHandler);
      el.addEventListener("keydown", function (evt) {
        if (evt.keyCode === ENTER_KEY_CODE) {
          selectsHandler();
        }
      });
    });

    var showListOnClick = function showListOnClick(evt) {
      evt.preventDefault();
      document.addEventListener("click", documentClickHandler);

      if (evt.target.parentNode.classList.contains("custom-input__wrapper--show")) {
        closeAllLists();
      } else {
        evt.target.parentNode.classList.add("custom-input__wrapper--show");
      }
    };

    var showListOnKeydown = function showListOnKeydown(evt) {
      document.addEventListener("click", documentClickHandler);

      if (evt.keyCode === ENTER_KEY_CODE) {
        evt.preventDefault();

        if (evt.target.parentNode.classList.contains("custom-input__wrapper--show")) {
          closeAllLists();
        } else {
          evt.target.parentNode.classList.add("custom-input__wrapper--show");
        }
      }
    };

    customSelectsInputs.forEach(function (input) {
      input.addEventListener("click", showListOnClick);
      input.addEventListener("keydown", showListOnKeydown);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (customSelectAction);

/***/ }),

/***/ "./js/modules/form/radio-child-id.js":
/*!*******************************************!*\
  !*** ./js/modules/form/radio-child-id.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _change_required_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-required-fields */ "./js/modules/form/change-required-fields.js");

var form = document.querySelector(".js-submit-documents-form");
var formChildwithPassportClass = "submit-documents__form--child-with-passport";
var isEventListenerExists = false;

var radioChildIDAction = function radioChildIDAction() {
  var childIDRadioInputs = document.querySelectorAll(".submit-documents__patient-id-radio input");

  if (childIDRadioInputs.length && form) {
    form.classList.remove(formChildwithPassportClass);

    var childIDRadioHandler = function childIDRadioHandler(evt) {
      if (evt.target.value === "passport") {
        form.classList.add(formChildwithPassportClass);
        Object(_change_required_fields__WEBPACK_IMPORTED_MODULE_0__["default"])("passport");
      } else if (evt.target.value === "birth\u0421ertificate") {
        form.classList.remove(formChildwithPassportClass);
        Object(_change_required_fields__WEBPACK_IMPORTED_MODULE_0__["default"])("birth\u0421ertificate");
      }
    };

    if (!isEventListenerExists) {
      childIDRadioInputs.forEach(function (el) {
        el.addEventListener("click", childIDRadioHandler);
        isEventListenerExists = true;
      });
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (radioChildIDAction);

/***/ }),

/***/ "./js/modules/form/select-category.js":
/*!********************************************!*\
  !*** ./js/modules/form/select-category.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_child_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-child-id */ "./js/modules/form/radio-child-id.js");
/* harmony import */ var _change_required_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-required-fields */ "./js/modules/form/change-required-fields.js");


var form = document.querySelector(".js-submit-documents-form");
var patientCategorySelectInput = document.querySelector(".js-category input");
var formClass = "submit-documents__form";
var formModes = ["submit-documents__form--adult", "submit-documents__form--child"];
var selectOptions = {
  'Гражданин РФ, взрослый': "adult",
  'Гражданин РФ, не взрослый': "child",
  'Не гражданин РФ, взрослый': "adult",
  'Не гражданин РФ, не взрослый': "child"
};

var setFormMode = function setFormMode() {
  if (patientCategorySelectInput) {
    var newInputValue = patientCategorySelectInput.value;
    var newFormCalss = "".concat(formClass, "--").concat(selectOptions[newInputValue]);
    formModes.forEach(function (el) {
      form.classList.remove(el);
    });
    Object(_change_required_fields__WEBPACK_IMPORTED_MODULE_1__["default"])(selectOptions[newInputValue]);
    form.classList.add(newFormCalss);

    if (selectOptions[newInputValue] === "child") {
      Object(_radio_child_id__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setFormMode);

/***/ }),

/***/ "./js/modules/form/validate-phone.js":
/*!*******************************************!*\
  !*** ./js/modules/form/validate-phone.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var phoneInputs = document.querySelectorAll(".js-tel input");

var validatePhone = function validatePhone() {
  if (phoneInputs.length) {
    phoneInputs.forEach(function (el) {
      var input = el; // eslint-disable-next-line no-undef

      return new IMask(input, {
        mask: "+{7}(000)000-00-00"
      });
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (validatePhone);

/***/ }),

/***/ "./js/modules/init-sliders.js":
/*!************************************!*\
  !*** ./js/modules/init-sliders.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sliderWrapers = document.querySelectorAll(".swiper-wrapper");
var carouselNavigationModSliders = document.querySelectorAll(".js-carousel-navigation-mod");
var swiperList = [];
var storiesModeSettings2 = {
  // loop: true,
  spaceBetween: 80,
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: ".js-carousel-navigation-mod-pagination",
    clickable: true
  }
};

var initSlider = function initSlider(el, settings) {
  // eslint-disable-next-line no-undef
  var swiper = new Swiper(el, settings);
  swiperList.push(swiper);
};

var breakpoint = window.matchMedia("(max-width:1023px)");

var setSlider = function setSlider() {
  swiperList = [];

  if (sliderWrapers.length) {
    if (carouselNavigationModSliders) {
      if (breakpoint.matches === true) {
        Array.prototype.forEach.call(carouselNavigationModSliders, function (item) {
          initSlider(item, storiesModeSettings2);
        });
      }
    }
  }
};

var checkmobileWidth = function checkmobileWidth() {
  if (breakpoint.matches === true) {
    return true;
  }

  return false;
};

var isMobileWidth = checkmobileWidth();

var resizeSwiper = function resizeSwiper() {
  if (checkmobileWidth() !== isMobileWidth) {
    isMobileWidth = !isMobileWidth;
    swiperList.forEach(function (swiper) {
      if (swiper.length) {
        swiper.forEach(function (el) {
          el.destroy();
        });
      } else {
        swiper.destroy();
      }
    });
    swiperList = [];
    setSlider();
  }
};

window.addEventListener("resize", resizeSwiper);
/* harmony default export */ __webpack_exports__["default"] = (setSlider);

/***/ }),

/***/ "./js/modules/utils.js":
/*!*****************************!*\
  !*** ./js/modules/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const body = document.querySelector(`body`);
// const getScrollbarWidth = () => {
//   const outer = document.createElement(`div`);
//   outer.style.visibility = `hidden`;
//   outer.style.overflow = `scroll`;
//   outer.style.msOverflowStyle = `scrollbar`;
//   body.appendChild(outer);
//   const inner = document.createElement(`div`);
//   outer.appendChild(inner);
//   const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
//   outer.parentNode.removeChild(outer);
//   return scrollbarWidth;
// };
// const getBodyScrollTop = () => {
//   return (
//     self.pageYOffset ||
//     (document.documentElement && document.documentElement.ScrollTop) ||
//     (document.body && document.body.scrollTop)
//   );
// };
// const disableScrolling = () => {
//   const scrollWidth = getScrollbarWidth();
//   body.setAttribute(`style`, `padding-right: ` + scrollWidth + `px;`);
//   body.dataset.scrollY = `${getBodyScrollTop()}`;
//   body.style.top = `-${document.body.dataset.scrollY}px`;
//   body.classList.add(`scroll-lock`);
// };
// const enableScrolling = () =>{
//   body.removeAttribute(`style`);
//   body.classList.remove(`scroll-lock`);
//   window.scrollTo(0, +document.body.dataset.scrollY);
// };
// const getParent = (el, cssClass) => {
//   let flag = false;
//   let element = el;
//   const cls = cssClass;
//   while (!element.classList.contains(cls)) {
//     element = element.parentElement;
//     if (!element) {
//       flag = true;
//       break;
//     }
//   }
//   return flag;
// };
// const returnParent = (el, cssClass) => {
//   let element = el;
//   const cls = cssClass;
//   while (!element.classList.contains(cls) && !element.matches(cls)) {
//     element = element.parentElement;
//     if (!element) {
//       break;
//     }
//   }
//   return element;
// };
// const onWindowScrollAnimation = (block, height, fn, fn2) => {
//   window.addEventListener(`scroll`, () => {
//     if (block) {
//       const offset = window.pageYOffset;
//       const topSkillsContainer = block.getBoundingClientRect().top + offset - height;
//       if (offset >= topSkillsContainer) {
//         fn();
//       } else if (fn2) {
//         fn2();
//       }
//     }
//   });
// };
// const RenderPosition = {
//   AFTERBEGIN: `prepend`,
//   AFTEREND: `afterend`,
//   BEFOREEND: `beforeend`
// };
// const createElement = (template) => {
//   const newElement = document.createElement(`div`);
//   newElement.innerHTML = template;
//   return newElement.firstChild;
// };
// const renderElement = (container, component, place = RenderPosition.BEFOREEND) => {
//   switch (place) {
//     case RenderPosition.AFTERBEGIN:
//       container.prepend(component);
//       break;
//     case RenderPosition.AFTEREND:
//       container.after(component);
//       break;
//     case RenderPosition.BEFOREEND:
//       container.append(component);
//       break;
//   }
// };
// export {disableScrolling, enableScrolling, getParent, returnParent, onWindowScrollAnimation, createElement, renderElement, RenderPosition};

/***/ }),

/***/ "./js/polyfill/polyfill.js":
/*!*********************************!*\
  !*** ./js/polyfill/polyfill.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var initPolyfill = function initPolyfill() {
  // Source: https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  } // Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s);
      var i = matches.length; // eslint-disable-next-line no-empty

      while (--i >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  } // Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) {
          return el;
        }

        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  } // Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("prepend")) {
        return;
      }

      Object.defineProperty(item, "prepend", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/append()/append().md


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("append")) {
        return;
      }

      Object.defineProperty(item, "append", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.appendChild(docFrag);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // Source: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/before()/before().md


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("before")) {
        return;
      }

      Object.defineProperty(item, "before", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function before() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.parentNode.insertBefore(docFrag, this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // Source: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("remove")) {
        return;
      }

      Object.defineProperty(item, "remove", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          if (this.parentNode !== null) {
            this.parentNode.removeChild(this);
          }
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


  if (!String.prototype.startsWith) {
    // eslint-disable-next-line no-extend-native
    Object.defineProperty(String.prototype, "startsWith", {
      value: function value(search, rawPos) {
        var pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
      }
    });
  } // Source: ie11Download


  var ie11Download = function ie11Download(el) {
    if (el.href === "") {
      throw Error("The element has no href value.");
    }

    var filename = el.getAttribute("download");

    if (filename === null || filename === "") {
      var tmp = el.href.split("/");
      filename = tmp[tmp.length - 1];
    }

    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      var xhr = new XMLHttpRequest();

      xhr.onloadstart = function () {
        xhr.responseType = "blob";
      };

      xhr.onload = function () {
        navigator.msSaveOrOpenBlob(xhr.response, filename);
      };

      xhr.open("GET", el.href, true);
      xhr.send();
    });
  };

  if (window.navigator.msSaveBlob) {
    var downloadLinks = document.querySelectorAll("a[download]");

    if (downloadLinks.length) {
      downloadLinks.forEach(function (el) {
        ie11Download(el);
      });
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (initPolyfill);

/***/ })

/******/ });