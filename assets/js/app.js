(self["webpackChunksingle_page"] = self["webpackChunksingle_page"] || []).push([["app"],{

/***/ "./src/assets/jsx/components/Datetime.js":
/*!***********************************************!*\
  !*** ./src/assets/jsx/components/Datetime.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Datetime)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck/_index.mjs");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass/_index.mjs");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/_index.mjs");




/* 
    Class which correct date by your own [date] and [string format] and return result

    EXAMPLE UNDER:

    PROGRAM INPUT:
        {
            var date = Date.now()
            var format = 'DD, MM dd :: h:i:s'
            var result = Datetime.format(date, format)

            console.log( result )
        }

    OUTPUT: 'Tuesday, March 09 :: 19:03:46'       
*/
var Datetime = /*#__PURE__*/function () {
  function Datetime(date, replaceString) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Datetime);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, "numberZeroFix", function (n) {
      return n < 10 ? '0' + n : n;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, "getMonths", function (id) {
      return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][id];
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, "getDays", function (id) {
      return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][id];
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, "createRegexp", function (sym) {
      return new RegExp("(^".concat(sym, "(?=[^A-Za-z0-9]))|((?<=[^A-Za-z0-9])").concat(sym, "(?=[^A-Za-z0-9]))|((?<=[^A-Za-z0-9])").concat(sym, "$)"), 'g');
    });

    this._date = new Date(date);
    this._replaceString = replaceString;
    this.setup();
    this.give();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Datetime, [{
    key: "setup",
    value: function setup() {
      var date = this._date;
      var correct = this.numberZeroFix.bind(this);
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      var year = date.getFullYear();
      var month = date.getMonth();
      var dayWeek = date.getDay();
      var day = date.getDate();
      this.day = correct(day);
      this.month = correct(month + 1);
      this.year = correct(year);
      this.dayName = this.getDays(dayWeek);
      this.monthName = this.getMonths(month);
      this.hours12 = correct(hours > 12 ? hours - 12 : hours);
      this.hours24 = correct(hours);
      this.minutes = correct(minutes);
      this.seconds = correct(seconds);
      this.meridian = hours > 12 ? 'pm' : 'am';
    } // Correct the number if it's less than 10 (example: 1 => 01) 

  }, {
    key: "give",
    value: function give() {
      var regexp = this.createRegexp.bind(this);
      return this._replaceString.replaceAll(regexp('MM'), this.monthName).replaceAll(regexp('DD'), this.dayName).replaceAll(regexp('YYYY'), this.year).replaceAll(regexp('mm'), this.month).replaceAll(regexp('dd'), this.day).replaceAll(regexp('yyyy'), this.year).replaceAll(regexp('H'), this.hours12).replaceAll(regexp('I'), '').replaceAll(regexp('S'), '').replaceAll(regexp('h'), this.hours24).replaceAll(regexp('i'), this.minutes).replaceAll(regexp('s'), this.seconds).replaceAll(regexp('ME'), this.meridian.toUpperCase()).replaceAll(regexp('me'), this.meridian).replaceAll(/[\[\]]/g, '');
    }
  }], [{
    key: "format",
    value: function format(date, replaceStr) {
      var formatted = new this(date, replaceStr);
      return formatted.give();
    }
  }]);

  return Datetime;
}();



/***/ }),

/***/ "./src/assets/jsx/datafile.js":
/*!************************************!*\
  !*** ./src/assets/jsx/datafile.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "social": () => (/* binding */ social),
/* harmony export */   "contactInfo": () => (/* binding */ contactInfo),
/* harmony export */   "messageHistory": () => (/* binding */ messageHistory),
/* harmony export */   "profileData": () => (/* binding */ profileData)
/* harmony export */ });
var social = [{
  name: 'unknownDoor',
  src: 'assets/images/socials/nomadlist.png'
}, {
  name: 'unknownDots',
  src: 'assets/images/socials/soc-02.png'
}, {
  name: 'unknownP',
  src: 'assets/images/socials/soc-03.png'
}, {
  name: 'dribbble',
  src: 'assets/images/socials/dribbble.png'
}, {
  name: 'unknownUp',
  src: 'assets/images/socials/soc-05.png'
}, {
  name: 'behance',
  src: 'assets/images/socials/behance.png'
}, {
  name: 'unknownBlocks',
  src: 'assets/images/socials/soc-07.png'
}];
var contactInfo = {
  channels: ['general', 'support', 'marketing', 'bali', 'poland', 'australia', 'jobs', 'startups', 'italy', 'freelance'],
  users: [{
    id: 1,
    name: 'Orlando Diggs',
    imagePath: 'assets/images/profiles/users/user-06.png',
    isOnline: true
  }, {
    id: 2,
    name: 'Carmen Velasco',
    imagePath: 'assets/images/profiles/users/user-05.png',
    isOnline: true
  }, {
    id: 3,
    name: 'Marie Jensen',
    imagePath: 'assets/images/profiles/users/user-04.png',
    isOnline: false
  }, {
    id: 4,
    name: 'Alex Lee',
    imagePath: 'assets/images/profiles/users/user-03.png',
    isOnline: false
  }, {
    id: 5,
    name: 'Leo Gill',
    imagePath: 'assets/images/profiles/users/user-02.png',
    isOnline: false
  }, {
    id: 6,
    name: 'Britney Cooper',
    imagePath: 'assets/images/profiles/users/user-01.png',
    isOnline: false
  }]
};
var messageHistory = [{
  author: 'Jeshua Stout',
  avatar: 'assets/images/profiles/users/user-11.png',
  date: 1215158807595,
  message: null,
  extra: {
    link: {
      text: '@pierrhack I dit for 6 days in Iceland',
      href: '/'
    }
  }
}, {
  author: 'Harold Adams',
  avatar: 'assets/images/profiles/users/user-10.png',
  date: 1415158807595,
  message: 'Which country to visit next? This is a photo with my friends - celebrating in Bali',
  extra: {
    img: {
      name: 'my-top-paces.jpg',
      src: 'assets/images/profiles/messages/photo1.png'
    }
  }
}, {
  author: 'Aada Laine',
  avatar: 'assets/images/profiles/users/user-09.png',
  date: 1615487696088,
  message: null,
  extra: {
    link: {
      text: '@har_adams wow it’s amazing, I want to buy a van and travelling next year',
      href: '/'
    }
  }
}, {
  author: 'Nala Hester',
  avatar: 'assets/images/profiles/users/user-08.png',
  date: 1615565507482,
  message: 'Working from a van in Australia isn’t feasible if you need internet. It may have improved over the last years but I spent some time in a camper van around Tasmania and internet was a real problem (and Tasmania is tiny compared to the rest of the country).',
  extra: null
}, {
  author: 'Ramon Bateman',
  avatar: 'assets/images/profiles/users/user-07.png',
  date: 1615565507482,
  message: "What's the reason for the van? Saving money or just like to get outside? If you've got a stable source of income you could always do some short term Airbnbs + buy a truck/topper, build a platform in the back. That way you can always convert it back to a truck and sleep in an apartment if you want.",
  extra: {
    link: {
      text: '@aa_da',
      href: '/'
    }
  }
}];
var profileData = {
  name: "Amilia Luna",
  prof: "UI Designer",
  username: "@amilia_lu",
  email: "a-luna@gmail.com",
  social: {
    skype: "amiluna"
  },
  timezone: "2:21 PM Local time"
};

/***/ }),

/***/ "./src/assets/jsx/index.js":
/*!*********************************!*\
  !*** ./src/assets/jsx/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortMessagesByTime": () => (/* binding */ sortMessagesByTime),
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage),
/* harmony export */   "sortMessagesByDate": () => (/* binding */ sortMessagesByDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/_index.mjs");
/* harmony import */ var _components_Datetime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Datetime.js */ "./src/assets/jsx/components/Datetime.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function sortMessagesByTime(n) {
  var today = new Date(Date.now()).setHours(0, 0, 0, 0);
  var yesterday = new Date(today).setHours(-24);

  if (n >= today) {
    return 'Today';
  } else if (n >= yesterday && n < today) {
    return 'Yesterday';
  }

  return _components_Datetime_js__WEBPACK_IMPORTED_MODULE_1__.default.format(n, 'DD, MM dd[nd]');
}
function sendMessage(value) {
  return {
    author: 'Amilia Luna',
    avatar: 'assets/images/profiles/myprofile/avatar.png',
    date: Date.now(),
    message: value
  };
}
function sortMessagesByDate(arr) {
  if (!Array.isArray(arr)) return;
  return arr.sort(function (a, b) {
    return a.date - b.date;
  }).reduce(function (acc, el) {
    var date = new Date(el.date).setHours(0, 0, 0, 0);
    var item = Array.isArray(acc[date]) ? acc[date].concat([el]) : [el];
    return _objectSpread(_objectSpread({}, acc), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, date, item));
  }, {});
}

/***/ }),

/***/ "./src/assets/jsx/app.jsx":
/*!********************************!*\
  !*** ./src/assets/jsx/app.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/style.scss */ "./src/assets/scss/style.scss");
/* harmony import */ var _datafile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datafile.js */ "./src/assets/jsx/datafile.js");
/* harmony import */ var _contact_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.jsx */ "./src/assets/jsx/contact.jsx");
/* harmony import */ var _navigation_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation.jsx */ "./src/assets/jsx/navigation.jsx");
/* harmony import */ var _messenger_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messenger.jsx */ "./src/assets/jsx/messenger.jsx");
/* harmony import */ var _profile_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile.jsx */ "./src/assets/jsx/profile.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/*   Components   */






function App() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      channelId = _React$useState2[0],
      selectChannel = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      menuContact = _React$useState4[0],
      toggleContactMenu = _React$useState4[1];

  var layoutClasses = menuContact ? ['chat-layout'] : ['chat-layout', 'contacts-closed'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: layoutClasses.join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navigation_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {
    menuContact: menuContact,
    toggleContactMenu: toggleContactMenu
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contact_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {
    channelId: channelId,
    selectChannel: selectChannel,
    toggleContactMenu: toggleContactMenu
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_messenger_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {
    channelId: channelId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_profile_jsx__WEBPACK_IMPORTED_MODULE_7__.default, _datafile_js__WEBPACK_IMPORTED_MODULE_3__.profileData));
}

react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), document.getElementById('app'));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_8__.hot)(App));

/***/ }),

/***/ "./src/assets/jsx/contact.jsx":
/*!************************************!*\
  !*** ./src/assets/jsx/contact.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _datafile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datafile.js */ "./src/assets/jsx/datafile.js");
/* harmony import */ var _list_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.json */ "./src/assets/jsx/list.json");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var nomadList = _list_json__WEBPACK_IMPORTED_MODULE_2__.NomadList;
var channels = nomadList.channels,
    friends = nomadList.friends;

function Contact(props) {
  var contactRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var isTablet = window.innerWidth <= 768;
  var channelId = props.channelId,
      selectChannel = props.selectChannel,
      toggleContactMenu = props.toggleContactMenu;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return contactBorder(contactRef);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "contacts"
  }, isTablet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "contacts__close",
    onClick: function onClick() {
      return toggleContactMenu(false);
    }
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "contacts__wrapper",
    ref: contactRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "contacts__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "contacts__selector"
  }, "Nomad List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "contacts__settings"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "assets/images/icons/settings.svg",
    alt: "",
    className: "contacts__settings_icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "contacts__threads"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "assets/images/icons/chat.svg",
    alt: "",
    className: "contacts__threads_icon"
  }), "All threads"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ChannelList, {
    channelId: channelId,
    selectChannel: selectChannel,
    toggleContactMenu: toggleContactMenu
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UserList, null)));
}

function contactBorder(element) {
  var notMobile = window.innerWidth > 565;
  var contacts = element.current;
  var fullWidth = contacts.offsetWidth;
  var clientWidth = contacts.clientWidth;

  if (clientWidth === fullWidth && notMobile) {
    contacts.style.paddingRight = '1.6rem';
  }
}

function UserItem(props) {
  var imagePath = props.imagePath,
      name = props.name,
      isOnline = props.isOnline;
  var clsItem = ['users__item', isOnline ? 'online' : ''];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: clsItem.join(' ').trim()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: imagePath,
    alt: name,
    className: "users__avatar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "users__fullname"
  }, name));
}

function UserList(props) {
  var items = friends.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UserItem, _extends({}, item, {
      key: item.id
    }));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(List, {
    name: "Friends",
    items: items,
    cls: "users"
  });
}

function ChannelList(props) {
  var channelId = props.channelId,
      selectChannel = props.selectChannel,
      toggleContactMenu = props.toggleContactMenu;
  var isMobile = window.innerWidth <= 565;
  var items = channels.map(function (item, index) {
    var active = index === channelId;

    var click = function click() {
      if (isMobile) {
        toggleContactMenu(false);
      }

      selectChannel(index);
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ChannelItem, {
      name: item.name,
      active: active,
      click: click,
      key: index
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(List, {
    name: "Channels",
    items: items,
    cls: "channels"
  });
}

function ChannelItem(props) {
  var name = props.name,
      active = props.active,
      click = props.click;
  var clsContact = ['channels__item', active ? 'active' : ''];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: clsContact.join(' ').trim(),
    onClick: click
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "channels__item_btn"
  }, "#", name));
}

function List(props) {
  var name = props.name,
      items = props.items,
      cls = props.cls;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: cls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "list-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "list-title__text"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "list-title__ammount"
  }, items.length)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: cls + '__list'
  }, items));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./src/assets/jsx/messenger.jsx":
/*!**************************************!*\
  !*** ./src/assets/jsx/messenger.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/assets/jsx/index.js");
/* harmony import */ var _components_Datetime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Datetime.js */ "./src/assets/jsx/components/Datetime.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Messenger(props) {
  var channelId = props.channelId;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      data = _React$useState2[0],
      updateData = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      input = _React$useState4[0],
      inputChange = _React$useState4[1];

  var refMessage = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var channelName = data === null || data === void 0 ? void 0 : data.NomadList.channels[channelId].name;
  var messages = data === null || data === void 0 ? void 0 : data.NomadList.channels[channelId].messages;
  var messSorted = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.sortMessagesByDate)(messages);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    /* Get data list */
    fetch('assets/js/list.json').then(function (response) {
      return response.json();
    }).then(function (result) {
      return updateData(result);
    });
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    /* Going down to the latest posts */
    var current = refMessage.current;
    var scrollHeight = current.scrollHeight;
    var height = current.offsetHeight;
    current.scrollTop = scrollHeight - height;
  }, [data, channelId]);

  function submitHandle(event) {
    event.preventDefault();
    if (!input) return;
    var freshData = Object.assign({}, data);
    var freshMess = messages.concat([(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(input)]);
    freshData.NomadList.channels[channelId].messages = freshMess;
    updateData(freshData);
    inputChange('');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "messenger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "messenger__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MessengerHeader, {
    channelName: channelName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "messages",
    ref: refMessage
  }, messSorted && Object.entries(messSorted).map(function (item, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "messages__date-line"
    }, (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.sortMessagesByTime)(+item[0])), item[1].map(function (msg, idx) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Message, _extends({
        key: idx
      }, msg));
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MessengerFooter, {
    input: input,
    change: inputChange,
    submitHandle: submitHandle,
    channelName: channelName
  })));
}

function MessengerHeader(props) {
  var channelName = props.channelName;
  var isTablet = window.innerWidth <= 768;
  var searchForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    action: "/",
    method: "GET",
    className: "header__form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "header__search-input",
    placeholder: "Search..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "header__search-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "assets/images/icons/magnifier.svg",
    alt: "magnifier",
    className: "header__search-btn_icon"
  })));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header__channel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "header__title"
  }, "#", channelName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header__stars"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "assets/images/icons/star.svg",
    alt: "",
    className: "header__icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header__controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header__peoples"
  }, "1,093"), !isTablet && searchForm, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "header__bell"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "assets/images/icons/bell.svg",
    alt: "",
    className: "header__bell_icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "header__more"
  })), isTablet && searchForm);
}

function MessengerFooter(props) {
  var input = props.input,
      change = props.change,
      submitHandle = props.submitHandle,
      channelName = props.channelName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "textfield"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "textfield__file"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "assets/images/icons/clip.svg",
    alt: "",
    className: "textfield__file_icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "textfield__micro"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "assets/images/icons/micro.svg",
    alt: "",
    className: "textfield__micro_icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    action: "/",
    method: "POST",
    className: "textfield__form",
    onSubmit: submitHandle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "textfield__input",
    value: input,
    onChange: function onChange(e) {
      return change(e.target.value);
    },
    placeholder: "message in #".concat(channelName)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "textfield__smile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "assets/images/icons/smile.svg",
    alt: "",
    className: "textfield__smile_icon"
  })));
}

function Message(props) {
  var author = props.author,
      avatar = props.avatar,
      date = props.date,
      message = props.message,
      extra = props.extra;
  var img = extra ? extra.img : null,
      link = extra ? extra.link : null,
      time = _components_Datetime_js__WEBPACK_IMPORTED_MODULE_2__.default.format(date, 'H:i ME');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "messages__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: avatar,
    alt: "",
    className: "messages__avatar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "messages__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "messages__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "messages__name"
  }, author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "messages__date"
  }, time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "messages__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "messages__text"
  }, link && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: link.href,
    className: "messages__extra_link"
  }, link.text), message), img && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: img.src,
    alt: img.name,
    className: "messages__extra_img"
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Messenger);

/***/ }),

/***/ "./src/assets/jsx/navigation.jsx":
/*!***************************************!*\
  !*** ./src/assets/jsx/navigation.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _datafile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datafile.js */ "./src/assets/jsx/datafile.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Navigation(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      socialActive = _React$useState2[0],
      setSocialActive = _React$useState2[1],
      _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      navList = _React$useState4[0],
      toggleNavList = _React$useState4[1],
      menuContact = props.menuContact,
      toggleContactMenu = props.toggleContactMenu,
      navClasses = navList ? ['navigation__selector', 'opened'] : ['navigation__selector'];

  var renderList = function renderList(item, index) {
    var click = function click() {
      setSocialActive(index);
      toggleNavList(false);
    };

    var active = socialActive == index;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavItem, _extends({}, item, {
      click: click,
      active: active,
      key: item.name
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "navigation__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "menu",
    onClick: function onClick() {
      return toggleContactMenu(!menuContact);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__arrow"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__burger"
  }, new Array(3).fill(0).map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      key: index,
      className: "menu__line"
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: navClasses.join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "navigation__selector_btn",
    onClick: function onClick() {
      return toggleNavList(!navList);
    }
  }, "Social"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "navigation__list"
  }, _datafile_js__WEBPACK_IMPORTED_MODULE_1__.social.map(renderList))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "navigation__plus"
  }, "+")));
}

function NavItem(props) {
  var name = props.name,
      src = props.src,
      active = props.active,
      click = props.click;
  var cls = ['navigation__item'];

  if (active) {
    cls.push('active');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: cls.join(' '),
    title: name,
    onClick: click
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: src,
    alt: name,
    className: "navigation__item_icon"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./src/assets/jsx/profile.jsx":
/*!************************************!*\
  !*** ./src/assets/jsx/profile.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Profile(props) {
  var _social$skype;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      toggle = _React$useState2[1],
      profileClasses = ['profile'];

  var name = props.name,
      prof = props.prof,
      username = props.username,
      email = props.email,
      social = props.social,
      timezone = props.timezone;

  var click = function click() {
    return toggle(!open);
  };

  if (open) {
    profileClasses.push('opened');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: profileClasses.join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "profile__open",
    onClick: click
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "profile__avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "assets/images/profiles/myprofile/avatar.png",
    alt: "",
    className: "profile__avatar_img"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "profile__description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "profile__name"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "profile__proff"
  }, prof), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "profile__message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "profile__message-btn"
  }, "Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "profile__actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "profile__actions_icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Social, social), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "information"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "information__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "information__ctg"
  }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "information__data"
  }, username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "information__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "information__ctg"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "information__data"
  }, email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "information__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "information__ctg"
  }, "Skype"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "information__data"
  }, (_social$skype = social.skype) !== null && _social$skype !== void 0 ? _social$skype : '---')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "information__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "information__ctg"
  }, "Timezone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "information__data"
  }, timezone)))));
}

function Social(props) {
  var facebook = props.facebook,
      twitter = props.twitter,
      instagram = props.instagram,
      linkeind = props.linkeind;
  var profileFB = "https://facebook.com/".concat(facebook !== null && facebook !== void 0 ? facebook : '').trim(),
      twitterFB = "https://twitter.com/".concat(twitter !== null && twitter !== void 0 ? twitter : '').trim(),
      instagramFB = "https://instagram.com/".concat(instagram !== null && instagram !== void 0 ? instagram : '').trim(),
      linkeindFB = "https://linkedin.com/".concat(linkeind !== null && linkeind !== void 0 ? linkeind : '').trim();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pf-social"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: profileFB,
    className: "pf-social__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "assets/images/socials/fb.svg",
    alt: "",
    className: "pf-social__icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: twitterFB,
    className: "pf-social__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "assets/images/socials/twit.svg",
    alt: "",
    className: "pf-social__icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: instagramFB,
    className: "pf-social__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "assets/images/socials/inst.svg",
    alt: "",
    className: "pf-social__icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: linkeindFB,
    className: "pf-social__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "assets/images/socials/linkedin.svg",
    alt: "",
    className: "pf-social__icon"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/style.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/style.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fonts_Lato_Regular_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/assets/fonts/Lato-Regular.ttf");
/* harmony import */ var _fonts_Lato_Bold_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/Lato-Bold.ttf */ "./src/assets/fonts/Lato-Bold.ttf");
/* harmony import */ var _img_back_social_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/back/social.png */ "./src/assets/img/back/social.png");
/* harmony import */ var _img_back_navigation_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/back/navigation.png */ "./src/assets/img/back/navigation.png");
/* harmony import */ var _img_icons_user_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/icons/user.svg */ "./src/assets/img/icons/user.svg");
/* harmony import */ var _img_back_profile_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/back/profile.png */ "./src/assets/img/back/profile.png");
// Imports










var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__.default);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_fonts_Lato_Regular_ttf__WEBPACK_IMPORTED_MODULE_4__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_fonts_Lato_Bold_ttf__WEBPACK_IMPORTED_MODULE_5__.default);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_img_back_social_png__WEBPACK_IMPORTED_MODULE_6__.default);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_img_back_navigation_png__WEBPACK_IMPORTED_MODULE_7__.default);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_img_icons_user_svg__WEBPACK_IMPORTED_MODULE_8__.default);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_img_back_profile_png__WEBPACK_IMPORTED_MODULE_9__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\n/* remember to define focus styles! */\n:focus {\n  outline: 0;\n}\n\n/* remember to highlight inserts somehow! */\nins {\n  text-decoration: none;\n}\n\ndel {\n  text-decoration: line-through;\n}\n\n/* tables still need 'cellspacing=\"0\"' in the markup */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\na {\n  display: block;\n  text-decoration: none;\n  color: inherit;\n}\n\ninput {\n  font-family: inherit;\n}\n\nbutton {\n  display: block;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  outline: 0;\n  padding: 0;\n  font-family: inherit;\n}\n\nimg {\n  display: block;\n}\n\n@font-face {\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-family: \"Lato\";\n  font-weight: 400;\n}\n@font-face {\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-family: \"Lato\";\n  font-weight: 700;\n}\nhtml {\n  font-size: 10px;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: Lato, sans-serif;\n}\n\n.chat-layout {\n  display: flex;\n  height: 100vh;\n  padding-left: 7.2rem;\n  transition: padding 0.3s linear;\n}\n.chat-layout.contacts-closed {\n  padding-left: 7.2rem;\n}\n.chat-layout.contacts-closed .menu__arrow {\n  margin-left: -100%;\n}\n.chat-layout.contacts-closed .contacts {\n  left: -33.3rem;\n}\n@media (max-width: 565px) {\n  .chat-layout.contacts-closed .contacts {\n    left: -100%;\n  }\n}\n@media (max-width: 992px) {\n  .chat-layout.contacts-closed {\n    padding-left: 0;\n  }\n}\n@media (min-width: 1403px) {\n  .chat-layout {\n    padding-right: 20rem;\n  }\n}\n@media (min-width: 1403px) {\n  .chat-layout {\n    padding-left: 33.3rem;\n  }\n}\n@media (max-width: 992px) {\n  .chat-layout {\n    padding-left: 0;\n  }\n}\n\n.menu {\n  width: 26px;\n  height: 23px;\n  margin: 0 auto 1rem;\n  display: flex;\n  overflow: hidden;\n}\n@media (max-width: 992px) {\n  .menu {\n    margin: 0;\n  }\n}\n.menu__burger {\n  flex: 0 0 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n  transition: margin 0.2s linear;\n}\n.menu__line, .menu__arrow {\n  background-color: #616161;\n  transition: background 0.2s linear, margin 0.2s linear;\n}\n.menu__line {\n  display: block;\n  width: 100%;\n  height: 4px;\n  border-radius: 5px;\n}\n.menu__arrow {\n  flex: 0 0 100%;\n  height: 100%;\n  clip-path: polygon(28% 10%, 40% 0, 80% 50%, 40% 100%, 29% 90%, 60% 50%);\n  transform: rotate(-180deg);\n}\n.menu:hover .menu__line, .menu:hover .menu__arrow {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n.navigation {\n  width: 7.2rem;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 600;\n  background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\n  background-size: cover;\n}\n@media (max-width: 992px) {\n  .navigation {\n    width: 100%;\n    height: 5rem;\n  }\n}\n.navigation__wrapper {\n  padding: 1.5rem 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 992px) {\n  .navigation__wrapper {\n    padding: 0.5rem 1.5rem;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n.navigation__selector_btn {\n  display: none;\n}\n@media (max-width: 992px) {\n  .navigation__selector_btn {\n    display: block;\n    color: #b6b6b6;\n    font-size: 2rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n  }\n  .navigation__selector_btn:after {\n    content: \"\";\n    display: block;\n    width: 16px;\n    height: 16px;\n    clip-path: polygon(28% 10%, 40% 0, 80% 50%, 40% 100%, 29% 90%, 60% 50%);\n    background-color: #b6b6b6;\n    transform: rotate(90deg);\n    margin-left: 1rem;\n    transition: transform 0.2s linear;\n  }\n}\n.navigation__selector.opened .navigation__selector_btn:after {\n  transform: rotate(-90deg);\n}\n.navigation__selector.opened .navigation__list {\n  width: 100%;\n  height: auto;\n  border-top: 1px solid #fff;\n  padding: 2rem 0;\n  top: 5rem;\n  background-color: #43413f;\n}\n.navigation__list {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: top 1s linear;\n}\n@media (max-width: 992px) {\n  .navigation__list {\n    position: fixed;\n    top: -100rem;\n    left: 0;\n    z-index: -1;\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: center;\n  }\n}\n@media (max-width: 565px) {\n  .navigation__list {\n    padding: 0 2rem;\n    flex-wrap: wrap;\n  }\n}\n.navigation__item {\n  width: 100%;\n  padding: 1rem 0;\n  transition: background 0.1s linear;\n  position: relative;\n}\n.navigation__item_icon {\n  max-width: 4rem;\n  margin: 0 auto;\n  opacity: 0.7;\n}\n@media (min-width: 992px) {\n  .navigation__item:before {\n    content: \"\";\n    display: none;\n    width: 8px;\n    height: 8px;\n    background-color: #8f8f8f;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    left: -4px;\n    transform: translateY(-50%);\n  }\n}\n@media (max-width: 565px) {\n  .navigation__item {\n    margin-top: 1rem;\n  }\n}\n.navigation__item:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.navigation__item.active:before {\n  display: block;\n}\n.navigation__item.active .navigation__item_icon {\n  opacity: 1;\n}\n@media (max-width: 992px) {\n  .navigation__item {\n    width: auto;\n    padding: 0 0.75rem;\n  }\n}\n.navigation__plus {\n  width: 4.15rem;\n  height: 4.15rem;\n  border-radius: 50%;\n  flex-shrink: 0;\n  font-size: 3rem;\n  margin: auto auto 0;\n  color: rgba(255, 255, 255, 0.4);\n  transition: color 0.2s ease-in-out;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.navigation__plus:hover {\n  color: rgba(255, 255, 255, 0.7);\n}\n@media (max-width: 992px) {\n  .navigation__plus {\n    width: 3.3rem;\n    height: 3.3rem;\n    line-height: 3.3rem;\n    margin: 0;\n  }\n}\n\n.contacts {\n  width: 33.3rem;\n  padding-left: 7.2rem;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 400;\n  background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat;\n  background-size: cover;\n  transition: left 0.3s linear;\n}\n@media (max-width: 992px) {\n  .contacts {\n    padding-left: 0;\n    z-index: 800;\n  }\n}\n@media (max-width: 565px) {\n  .contacts {\n    width: 100%;\n  }\n}\n.contacts__wrapper {\n  width: 100%;\n  height: 100%;\n  padding-top: 3.5rem;\n  padding-left: 2.6rem;\n  background-color: rgba(37, 39, 42, 0.75);\n  overflow: hidden auto;\n  color: rgba(255, 255, 255, 0);\n  transition: color 0.2s linear;\n  /* ScrollBar */\n}\n@media (max-width: 565px) {\n  .contacts__wrapper {\n    padding: 2rem;\n    padding-top: 4rem;\n  }\n}\n.contacts__wrapper::-webkit-scrollbar, .contacts__wrapper::-webkit-scrollbar-thumb {\n  width: 25px;\n  border-radius: 20px;\n  border: 10px solid transparent;\n  background-clip: padding-box;\n}\n.contacts__wrapper::-webkit-scrollbar-thumb {\n  box-shadow: inset 0 0 0 10px;\n}\n.contacts__wrapper:hover {\n  color: rgba(255, 255, 255, 0.2);\n}\n.contacts__close {\n  position: absolute;\n  top: 0;\n  right: 1rem;\n  font-size: 4rem;\n  line-height: 1;\n  font-weight: 700;\n  color: #d4d4d4;\n}\n.contacts__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 3rem;\n}\n.contacts__selector {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #fff;\n  display: flex;\n  align-items: center;\n}\n.contacts__selector:after {\n  content: \"\";\n  display: block;\n  width: 12px;\n  height: 12px;\n  clip-path: polygon(28% 10%, 40% 0, 80% 50%, 40% 100%, 29% 90%, 60% 50%);\n  transform: rotate(90deg);\n  margin-left: 1rem;\n  opacity: 0.65;\n  transition: opacity 0.2s ease-in-out;\n  background-color: #fff;\n}\n.contacts__selector:hover::after {\n  opacity: 1;\n}\n.contacts__settings {\n  opacity: 0.8;\n  transition: opacity 0.2s ease-in-out;\n}\n.contacts__settings_icon {\n  display: block;\n  max-width: 1.6rem;\n}\n.contacts__settings:hover {\n  opacity: 1;\n}\n.contacts__threads {\n  display: flex;\n  align-items: center;\n  font-size: 1.4rem;\n  color: #b5b5b5;\n  margin-bottom: 3rem;\n}\n.contacts__threads_icon {\n  margin-right: 0.5rem;\n}\n\n.channels {\n  margin-bottom: 1rem;\n}\n.channels__item {\n  color: #b5b5b5;\n  margin-bottom: 0.1rem;\n}\n.channels__item.active, .channels__item:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  border-radius: 5px;\n}\n.channels__item_btn {\n  width: 100%;\n  padding: 4px 13px 9px;\n  font-size: 1.4rem;\n  font-weight: 400;\n  text-align: left;\n  color: inherit;\n}\n\n.users__item {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.2rem;\n}\n.users__item:before {\n  content: \"\";\n  display: block;\n  width: 0.6rem;\n  height: 0.6rem;\n  border-radius: 50%;\n  margin-right: 0.8rem;\n  background-color: #666666;\n}\n.users__item.online:before {\n  background-color: #70cc16;\n}\n.users__fullname {\n  font-size: 1.4rem;\n  font-weight: 400;\n  color: #b5b5b5;\n}\n.users__avatar {\n  margin-right: 1.2rem;\n}\n\n.list-title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.4rem;\n}\n.list-title__text, .list-title__ammount {\n  color: #919191;\n  font-size: 1.2rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.messenger {\n  flex: 1 0;\n  display: flex;\n}\n.messenger__wrapper {\n  margin: 0 auto;\n  flex: 0 0 87rem;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 992px) {\n  .messenger__wrapper {\n    flex: auto;\n    height: auto;\n  }\n}\n@media (max-width: 992px) {\n  .messenger {\n    padding-top: 5rem;\n  }\n}\n\n.messages {\n  padding: 3rem 2.2rem;\n  flex: 1 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  color: rgba(0, 0, 0, 0);\n  transition: color 0.2s linear;\n  /* ScrollBar */\n}\n@media (max-width: 768px) {\n  .messages {\n    padding: 3rem 1rem;\n  }\n}\n.messages::-webkit-scrollbar, .messages::-webkit-scrollbar-thumb {\n  width: 25px;\n  border-radius: 20px;\n  border: 10px solid transparent;\n  background-clip: padding-box;\n}\n.messages::-webkit-scrollbar-thumb {\n  box-shadow: inset 0 0 0 10px;\n}\n.messages:hover {\n  color: rgba(0, 0, 0, 0.2);\n}\n.messages__date-line {\n  height: 1.8rem;\n  line-height: 1.8rem;\n  background-color: #fff;\n  font-size: 1.3rem;\n  font-weight: 400;\n  color: #8d8d8d;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.messages__date-line::before, .messages__date-line::after {\n  content: \"\";\n  display: block;\n  flex: 1 1;\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.16);\n}\n.messages__date-line::before {\n  margin-right: 1.4rem;\n}\n.messages__date-line::after {\n  margin-left: 1.4rem;\n}\n.messages__item {\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: flex-start;\n}\n.messages__avatar {\n  max-width: 3.2rem;\n  display: block;\n  height: auto;\n}\n.messages__body {\n  margin-left: 1.2rem;\n}\n.messages__title {\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n}\n.messages__name {\n  font-weight: 700;\n  color: #000;\n}\n.messages__date {\n  font-weight: 400;\n  margin-left: 0.8rem;\n  color: #8d8d8d;\n}\n.messages__text {\n  font-size: 1.3rem;\n  font-weight: 400;\n  line-height: 1.8rem;\n  color: #000;\n  overflow-wrap: anywhere;\n}\n.messages__extra_img {\n  display: block;\n  max-width: 30rem;\n  margin-top: 1.5rem;\n  border-radius: 10px;\n}\n@media (max-width: 565px) {\n  .messages__extra_img {\n    max-width: 20rem;\n  }\n}\n.messages__extra_link {\n  display: inline-block;\n  margin-right: 0.5rem;\n  font: inherit;\n  color: #3577ef;\n}\n.messages__extra_link:hover {\n  text-decoration: underline;\n}\n\n.textfield {\n  height: 7.25rem;\n  border-top: 1px solid rgba(0, 0, 0, 0.24);\n  display: flex;\n  align-items: center;\n  padding: 0 1.5rem;\n}\n.textfield__file, .textfield__micro {\n  margin-right: 1.5rem;\n}\n.textfield__file_icon, .textfield__micro_icon {\n  max-width: 2rem;\n}\n.textfield__form {\n  flex: 1 1;\n}\n.textfield__input {\n  width: 100%;\n  border: none;\n  font-size: 1.4rem;\n  font-weight: 400;\n  color: #8d8d8d;\n}\n.textfield__smile {\n  margin-left: 1.5rem;\n}\n.textfield__smile_icon {\n  width: 2rem;\n  height: 2rem;\n}\n\n.header {\n  padding: 3.1rem 2.3rem 1.4rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.24);\n}\n.header, .header__channel, .header__controls {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (max-width: 768px) {\n  .header {\n    padding-top: 1.5rem;\n    flex-wrap: wrap;\n  }\n}\n.header__title {\n  font-size: 2rem;\n  font-weight: 700;\n}\n.header__stars {\n  margin-left: 0.5rem;\n  display: flex;\n  align-items: center;\n}\n.header__icon {\n  display: block;\n  max-width: 1.5rem;\n}\n+ .header__icon__icon {\n  margin-left: 0.5rem;\n}\n.header__peoples {\n  position: relative;\n  padding-left: 1.7rem;\n  font-size: 1.4rem;\n  font-weight: 400;\n  color: #a4a4a4;\n  margin-right: 2.4rem;\n}\n.header__peoples::before {\n  content: \"\";\n  display: block;\n  width: 1.1rem;\n  height: 1.6rem;\n  background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") center no-repeat;\n  background-size: contain;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n}\n.header__form {\n  position: relative;\n  margin-right: 2.3rem;\n}\n@media (max-width: 768px) {\n  .header__form {\n    margin-top: 1rem;\n    flex: 0 0 100%;\n  }\n}\n.header__search-input {\n  width: 24.1rem;\n  height: 3.3rem;\n  border: 1px solid rgba(0, 0, 0, 0.24);\n  border-radius: 0.5rem;\n  padding-left: 1.65rem;\n  padding-right: 3rem;\n  font-family: inherit;\n  font-size: 1.4rem;\n  font-weight: 400;\n  color: #8d8d8d;\n}\n@media (max-width: 768px) {\n  .header__search-input {\n    width: 100%;\n  }\n}\n.header__search-btn {\n  position: absolute;\n  top: 50%;\n  right: 1rem;\n  transform: translateY(-50%);\n}\n.header__search-btn_icon {\n  display: block;\n  max-width: 100%;\n}\n.header__bell {\n  position: relative;\n  width: 1.6rem;\n  height: 1.8rem;\n  margin-right: 2rem;\n}\n.header__bell:after {\n  content: \"\";\n  display: block;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background-color: #fd4948;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.header__bell_icon {\n  display: block;\n  max-width: 100%;\n}\n.header__more {\n  position: relative;\n}\n.header__more, .header__more::before, .header__more::after {\n  display: block;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.header__more::before, .header__more::after {\n  content: \"\";\n  position: absolute;\n}\n.header__more::before {\n  left: 0;\n  top: -120%;\n}\n.header__more::after {\n  left: 0;\n  top: 120%;\n}\n\n.profile {\n  width: 20rem;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 500;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s linear;\n}\n@media (max-width: 1402px) {\n  .profile {\n    right: -20rem;\n  }\n  .profile__open {\n    width: 2.5rem;\n    height: 2.5rem;\n    border-radius: 50%;\n    position: absolute;\n    top: 10%;\n    left: -1.75rem;\n    z-index: 30;\n    background-color: #fff;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n  }\n  .profile__open::after {\n    content: \"\";\n    display: block;\n    width: 12px;\n    height: 12px;\n    clip-path: polygon(28% 10%, 40% 0, 80% 50%, 40% 100%, 29% 90%, 60% 50%);\n    transform: rotate(180deg);\n    margin: auto;\n    opacity: 0.65;\n    transition: opacity 0.2s ease-in-out, transform 0.2s linear;\n    background-color: #000;\n  }\n  .profile.opened .profile__open {\n    left: -1.25rem;\n  }\n  .profile.opened .profile__open::after {\n    transform: rotate(0);\n  }\n  .profile.opened {\n    right: 0;\n    z-index: 800;\n  }\n}\n.profile__avatar {\n  width: 20rem;\n  height: 20rem;\n  overflow: hidden;\n  position: relative;\n  pointer-events: none;\n}\n.profile__avatar_img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.profile__description {\n  position: relative;\n  flex: 1 0;\n  overflow: hidden;\n  padding: 2rem;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.profile__description::before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat;\n  background-size: cover;\n  filter: blur(40px);\n}\n.profile__name {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #000;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.profile__name:after {\n  content: \"\";\n  display: block;\n  width: 0.6rem;\n  height: 0.6rem;\n  border-radius: 50%;\n  margin-right: 0.8rem;\n  background-color: #70cc16;\n  margin-top: 0.25rem;\n  margin-left: 0.5rem;\n}\n.profile__proff {\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: #5f6164;\n  margin-bottom: 2rem;\n}\n.profile__message {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.4rem;\n}\n.profile__message-btn, .profile__actions {\n  height: 2.5rem;\n  border-radius: 5px;\n  background-color: #3577ef;\n  transition: background 0.2s ease-in-out;\n}\n.profile__message-btn:hover, .profile__actions:hover {\n  background-color: #1d67ed;\n}\n.profile__message-btn {\n  width: 13.35rem;\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #fff;\n}\n.profile__actions {\n  width: 2.55rem;\n  margin-left: 0.25rem;\n}\n.profile__actions_icon {\n  display: block;\n  width: 7px;\n  height: 5px;\n  clip-path: polygon(0 0, 100% 0, 50% 100%);\n  background-color: #fff;\n  margin: auto;\n}\n\n.pf-social {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.85rem;\n}\n.pf-social__item {\n  width: 2.2rem;\n  height: 2.2rem;\n  border-radius: 50%;\n  background-color: #e8e8eb;\n  transition: background 0.2s ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pf-social__item:hover {\n  background-color: #dadadf;\n}\n.pf-social__item + .pf-social__item {\n  margin-left: 0.65rem;\n}\n.pf-social__icon {\n  max-width: 100%;\n}\n\n.information {\n  display: flex;\n  flex-direction: column;\n}\n.information__item {\n  margin-bottom: 1.15rem;\n}\n.information__ctg {\n  display: block;\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: #5f6164;\n  margin-bottom: 0.3rem;\n}\n.information__data {\n  display: block;\n  font-size: 1.4rem;\n  font-weight: 400;\n  color: #000;\n}", "",{"version":3,"sources":["webpack://./src/assets/scss/reset.scss","webpack://./src/assets/scss/style.scss","webpack://./src/assets/scss/fonts.scss","webpack://./src/assets/scss/menu.scss","webpack://./src/assets/scss/navigation.scss","webpack://./src/assets/scss/contacts.scss","webpack://./src/assets/scss/vars.scss","webpack://./src/assets/scss/messenger.scss","webpack://./src/assets/scss/hat.scss","webpack://./src/assets/scss/profile.scss"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\toutline: 0;\r\n\tfont-size: 100%;\r\n\tvertical-align: baseline;\r\n\tbackground: transparent;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\n\r\n/* remember to define focus styles! */\r\n:focus {\r\n\toutline: 0;\r\n}\r\n\r\n/* remember to highlight inserts somehow! */\r\nins {\r\n\ttext-decoration: none;\r\n}\r\ndel {\r\n\ttext-decoration: line-through;\r\n}\r\n\r\n/* tables still need 'cellspacing=\"0\"' in the markup */\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\na{\r\n\tdisplay: block;\r\n\ttext-decoration: none;\r\n\tcolor: inherit;\r\n}\r\n\r\ninput{\r\n\tfont-family: inherit;\r\n}\r\n\r\nbutton{\r\n\tdisplay: block;\r\n\tcursor: pointer;\r\n\tbackground-color: transparent;\r\n\tborder: none;\r\n\toutline: 0;\r\n\tpadding: 0;\r\n\r\n\tfont-family: inherit;\r\n}\r\n\r\nimg{\r\n\tdisplay: block;\r\n}","@import \"~normalize.css\";\r\n@import \"reset.scss\";\r\n@import \"fonts.scss\";\r\n@import \"vars.scss\";\r\n\r\nhtml {\r\n  font-size: 10px;\r\n}\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: Lato, sans-serif;\r\n}\r\n\r\n.chat-layout {\r\n  display: flex;\r\n  height: 100vh;\r\n  padding-left: 7.2rem;\r\n  transition: padding 0.3s linear;\r\n \r\n\r\n  &.contacts-closed {\r\n    padding-left: 7.2rem;\r\n\r\n    .menu__arrow {\r\n      margin-left: -100%;\r\n    }\r\n    .contacts {\r\n      left: -33.3rem;\r\n      @media(max-width: $bp-mobile){\r\n        left: -100%;\r\n      }\r\n    }\r\n\r\n    @media(max-width: $bp-medium){\r\n      padding-left: 0;\r\n    }\r\n  }\r\n\r\n  @media (min-width: $bp-max) {\r\n    padding-right: 20rem;\r\n  }\r\n\r\n  @media (min-width: $bp-max) {\r\n    padding-left: 33.3rem;\r\n  }\r\n\r\n  @media(max-width: $bp-medium){\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n@import \"menu.scss\";\r\n@import \"navigation.scss\";\r\n@import \"contacts.scss\";\r\n@import \"messenger.scss\";\r\n@import \"hat.scss\";\r\n@import \"chat.scss\";\r\n@import \"profile.scss\";\r\n","@font-face {\r\n  src: url(\"../fonts/Lato-Regular.ttf\");\r\n  font-family: \"Lato\";\r\n  font-weight: 400;\r\n}\r\n\r\n@font-face {\r\n  src: url(\"../fonts/Lato-Bold.ttf\");\r\n  font-family: \"Lato\";\r\n  font-weight: 700;\r\n}\r\n",".menu {\r\n  width: 26px;\r\n  height: 23px;\r\n\r\n  margin: 0 auto 1rem;\r\n  display: flex;\r\n\r\n  overflow: hidden;\r\n\r\n  @media(max-width: $bp-medium){\r\n   margin: 0;\r\n  }\r\n  \r\n  &__burger {\r\n    flex: 0 0 100%;\r\n    height: 100%;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    overflow: hidden;\r\n    transition: margin 0.2s linear;\r\n  }\r\n\r\n  &__line,\r\n  &__arrow {\r\n    background-color: rgb(97, 97, 97);\r\n    transition: background 0.2s linear, margin 0.2s linear;\r\n  }\r\n\r\n  &__line {\r\n    display: block;\r\n    width: 100%;\r\n    height: 4px;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  &__arrow {\r\n    flex: 0 0 100%;\r\n    height: 100%;\r\n    clip-path: polygon(28% 10%, 40% 0, 80% 50%, 40% 100%, 29% 90%, 60% 50%);\r\n    transform: rotate(-180deg);\r\n  }\r\n\r\n  &:hover &__line,\r\n  &:hover &__arrow {\r\n    background-color: rgba(#fff, 0.7);\r\n  }\r\n}\r\n",".navigation {\r\n  width: 7.2rem;\r\n  height: 100vh;\r\n\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 600;\r\n\r\n  background: transparent url(\"../img/back/social.png\") no-repeat;\r\n  background-size: cover;\r\n\r\n  @media(max-width: $bp-medium){\r\n    width: 100%;\r\n    height: 5rem;\r\n  }  \r\n\r\n  &__wrapper {\r\n    padding: 1.5rem 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba($black, 0.7);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    @media(max-width: $bp-medium){\r\n      padding: .5rem 1.5rem;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      justify-content: space-between;\r\n    }\r\n  }\r\n\r\n  &__selector{\r\n    \r\n    &_btn{\r\n      display: none;\r\n\r\n      @media(max-width: $bp-medium){\r\n        display: block;\r\n        color: rgb(182, 182, 182);\r\n        font-size: 2rem;\r\n        font-weight: 700;\r\n\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        &:after{\r\n          content: '';\r\n          display: block;\r\n          width: 16px;\r\n          height: 16px;\r\n          clip-path: polygon(28% 10%, 40% 0, 80% 50%, 40% 100%, 29% 90%, 60% 50%);\r\n          background-color: rgb(182, 182, 182);\r\n          transform: rotate(90deg);\r\n          margin-left: 1rem;\r\n          transition: transform .2s linear;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__selector.opened &__selector_btn:after{\r\n    transform: rotate(-90deg);\r\n  }\r\n  \r\n  &__selector.opened &__list{\r\n    width: 100%;\r\n    height: auto;\r\n    border-top: 1px solid $white;\r\n    padding: 2rem 0;\r\n\r\n    top: 5rem;\r\n    background-color: #43413f;\r\n  }\r\n\r\n  &__list {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    transition: top 1s linear;\r\n\r\n    @media(max-width: $bp-medium){\r\n      position: fixed;\r\n      top: -100rem;\r\n      left: 0;\r\n      z-index: -1;\r\n\r\n      flex-direction: row;\r\n      align-items: flex-start;\r\n      justify-content: center;\r\n    }\r\n    @media(max-width: $bp-mobile){\r\n      padding: 0 2rem;\r\n      flex-wrap: wrap;\r\n     }\r\n  }\r\n\r\n  &__item {\r\n    width: 100%;\r\n    padding: 1rem 0;\r\n    transition: background 0.1s linear;\r\n    position: relative;\r\n\r\n    &_icon {\r\n      max-width: 4rem;\r\n      margin: 0 auto;\r\n      opacity: 0.7;\r\n    }\r\n\r\n    @media(min-width: $bp-medium){\r\n      \r\n      &:before {\r\n        content: \"\";\r\n        display: none;\r\n        width: 8px;\r\n        height: 8px;\r\n        background-color: #8f8f8f;\r\n        border-radius: 50%;\r\n\r\n        position: absolute;\r\n        top: 50%;\r\n        left: -4px;\r\n        transform: translateY(-50%);\r\n      }\r\n    }\r\n    @media(max-width: $bp-mobile){\r\n      margin-top: 1rem;\r\n    }\r\n\r\n    &:hover {\r\n      background-color: rgba($white, 0.05);\r\n    }\r\n\r\n    &.active:before {\r\n      display: block;\r\n    }\r\n\r\n    &.active &_icon {\r\n      opacity: 1;\r\n    }\r\n\r\n    @media(max-width: $bp-medium){\r\n     width: auto;\r\n     padding: 0 .75rem;\r\n    }\r\n  }\r\n\r\n  &__plus {\r\n    width: 4.15rem;\r\n    height: 4.15rem;\r\n    border-radius: 50%;\r\n    flex-shrink: 0;\r\n\r\n    font-size: 3rem;\r\n    margin: auto auto 0;\r\n\r\n    color: rgba(#fff, 0.4);\r\n    transition: color 0.2s ease-in-out;\r\n    background-color: rgba(#fff, 0.1);\r\n\r\n    &:hover {\r\n      color: rgba(#fff, 0.7);\r\n    }\r\n\r\n    @media(max-width: $bp-medium){\r\n     width: 3.3rem;\r\n     height: 3.3rem;\r\n     line-height: 3.3rem;\r\n     margin: 0;\r\n    }\r\n  }\r\n}\r\n",".contacts {\r\n  width: 33.3rem;\r\n  padding-left: 7.2rem;\r\n  height: 100vh;\r\n\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 400;\r\n\r\n  background: transparent url(\"../img/back/navigation.png\") no-repeat;\r\n  background-size: cover;\r\n  transition: left 0.3s linear;\r\n\r\n  @media(max-width: $bp-medium){\r\n    padding-left: 0;\r\n    z-index: 800;\r\n  }\r\n\r\n  @media(max-width: $bp-mobile){\r\n    width: 100%;\r\n  }\r\n\r\n  &__wrapper {\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-top: 3.5rem;\r\n    padding-left: 2.6rem;\r\n\r\n    background-color: rgba(#25272a, 0.75);\r\n    overflow: hidden auto;\r\n\r\n    color: rgba(#fff, 0);\r\n    transition: color 0.2s linear;\r\n\r\n    @media(max-width: $bp-mobile){\r\n      padding: 2rem; \r\n      padding-top: 4rem;\r\n    }\r\n\r\n    /* ScrollBar */\r\n\r\n    &::-webkit-scrollbar,\r\n    &::-webkit-scrollbar-thumb {\r\n      width: 25px;\r\n      border-radius: 20px;\r\n      border: 10px solid transparent;\r\n      background-clip: padding-box;\r\n    }\r\n\r\n    &::-webkit-scrollbar-thumb {\r\n      box-shadow: inset 0 0 0 10px;\r\n    }\r\n\r\n    &:hover {\r\n      color: rgba(#fff, 0.2);\r\n    }\r\n  }\r\n\r\n  &__close{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 1rem;\r\n    font-size: 4rem;\r\n    line-height: 1;\r\n    font-weight: 700;\r\n    color: rgb(212, 212, 212);\r\n  }\r\n\r\n  &__header {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    margin-bottom: 3rem;\r\n  }\r\n\r\n  &__selector {\r\n    font-size: 2rem;\r\n    font-weight: 700;\r\n    color: $white;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    &:after {\r\n      content: \"\";\r\n      display: block;\r\n      width: 12px;\r\n      height: 12px;\r\n      clip-path: polygon(28% 10%, 40% 0, 80% 50%, 40% 100%, 29% 90%, 60% 50%);\r\n      transform: rotate(90deg);\r\n      margin-left: 1rem;\r\n\r\n      opacity: 0.65;\r\n      transition: opacity 0.2s ease-in-out;\r\n      background-color: $white;\r\n    }\r\n\r\n    &:hover::after {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  &__settings {\r\n    opacity: 0.8;\r\n    transition: opacity 0.2s ease-in-out;\r\n\r\n    &_icon {\r\n      display: block;\r\n      max-width: 1.6rem;\r\n    }\r\n\r\n    &:hover {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  &__threads {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    font-size: 1.4rem;\r\n    color: $gray;\r\n\r\n    &_icon {\r\n      margin-right: 0.5rem;\r\n    }\r\n\r\n    margin-bottom: 3rem;\r\n  }\r\n}\r\n\r\n.channels {\r\n  margin-bottom: 1rem;\r\n\r\n  &__item {\r\n    color: $gray;\r\n    margin-bottom: 0.1rem;\r\n\r\n    // transition:\r\n    //     background 0.1s ease-in-out,\r\n    //     color 0.1s ease-in-out,\r\n    //     border 0.1s ease-in-out;\r\n    // Nice without transition:)\r\n\r\n    &.active,\r\n    &:hover {\r\n      background-color: rgba($white, 0.2);\r\n      color: $white;\r\n      border-radius: 5px;\r\n    }\r\n\r\n    &_btn {\r\n      width: 100%;\r\n      padding: 4px 13px 9px;\r\n\r\n      font-size: 1.4rem;\r\n      font-weight: 400;\r\n      text-align: left;\r\n\r\n      color: inherit;\r\n    }\r\n  }\r\n}\r\n\r\n.users {\r\n  &__item {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    margin-bottom: 1.2rem;\r\n\r\n    &:before {\r\n      content: \"\";\r\n      display: block;\r\n      width: 0.6rem;\r\n      height: 0.6rem;\r\n      border-radius: 50%;\r\n      margin-right: 0.8rem;\r\n\r\n      background-color: #666666;\r\n    }\r\n\r\n    &.online:before {\r\n      background-color: #70cc16;\r\n    }\r\n  }\r\n\r\n  &__fullname {\r\n    font-size: 1.4rem;\r\n    font-weight: 400;\r\n    color: $gray;\r\n  }\r\n\r\n  &__avatar {\r\n    margin-right: 1.2rem;\r\n  }\r\n}\r\n\r\n.list-title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  &__text,\r\n  &__ammount {\r\n    color: $lt_text;\r\n    font-size: 1.2rem;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n  }\r\n  margin-bottom: 1.4rem;\r\n}\r\n","$white: #fff;\r\n$black: #000;\r\n$lt_text: #919191;\r\n$gray: #b5b5b5;\r\n\r\n$bp-max: 1403px;\r\n$bp-medium: 992px;\r\n$bp-tablet: 768px;\r\n$bp-mobile: 565px;",".messenger {\r\n  flex: 1 0;\r\n  display: flex;\r\n\r\n  &__wrapper {\r\n    margin: 0 auto;\r\n    flex: 0 0 87rem;\r\n    height: 100vh;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    @media(max-width: $bp-medium){\r\n      flex: auto;\r\n      height: auto;\r\n    }\r\n  }\r\n\r\n  @media(max-width: $bp-medium){\r\n    padding-top: 5rem;\r\n  }\r\n}\r\n\r\n.messages {\r\n  padding: 3rem 2.2rem;\r\n  flex: 1 1;\r\n\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  color: rgba(#000, 0);\r\n  transition: color .2s linear;\r\n\r\n  @media (max-width: $bp-tablet) {\r\n    padding: 3rem 1rem;   \r\n  }\r\n\r\n  /* ScrollBar */\r\n\r\n  &::-webkit-scrollbar,\r\n  &::-webkit-scrollbar-thumb {\r\n    width: 25px;\r\n    border-radius: 20px;\r\n    border: 10px solid transparent;\r\n    background-clip: padding-box;\r\n  }\r\n\r\n  &::-webkit-scrollbar-thumb {\r\n    box-shadow: inset 0 0 0 10px;\r\n  }\r\n\r\n  &:hover {\r\n    color: rgba(#000, 0.2);\r\n  }\r\n\r\n  &__date-line {\r\n    height: 1.8rem;\r\n    line-height: 1.8rem;\r\n    background-color: $white;\r\n\r\n    font-size: 1.3rem;\r\n    font-weight: 400;\r\n    color: #8d8d8d;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    margin-bottom: 1rem;\r\n\r\n    &::before,\r\n    &::after {\r\n      content: \"\";\r\n      display: block;\r\n      flex: 1 1;\r\n      height: 1px;\r\n\r\n      background-color: rgba($black, 0.16);\r\n    }\r\n\r\n    &::before {\r\n      margin-right: 1.4rem;\r\n    }\r\n\r\n    &::after {\r\n      margin-left: 1.4rem;\r\n    }\r\n  }\r\n\r\n  &__item {\r\n    margin-bottom: 1.5rem;\r\n    display: flex;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  &__avatar {\r\n    max-width: 3.2rem;\r\n    display: block;\r\n    height: auto;\r\n  }\r\n  &__body {\r\n    margin-left: 1.2rem;\r\n  }\r\n  &__title {\r\n    font-size: 1.2rem;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n  &__name {\r\n    font-weight: 700;\r\n    color: $black;\r\n  }\r\n  &__date {\r\n    font-weight: 400;\r\n    margin-left: 0.8rem;\r\n    color: #8d8d8d;\r\n  }\r\n  &__content {\r\n  }\r\n  &__text {\r\n    font-size: 1.3rem;\r\n    font-weight: 400;\r\n    line-height: 1.8rem;\r\n    color: $black;\r\n    overflow-wrap: anywhere;\r\n  }\r\n  &__extra {\r\n    &_img {\r\n      display: block;\r\n      max-width: 30rem;\r\n      margin-top: 1.5rem;\r\n      border-radius: 10px;\r\n      \r\n      @media (max-width: $bp-mobile) {\r\n        max-width: 20rem;\r\n      }\r\n    }\r\n    &_link {\r\n      display: inline-block;\r\n      margin-right: 0.5rem;\r\n      font: inherit;\r\n      color: #3577ef;\r\n\r\n      &:hover {\r\n        text-decoration: underline;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.textfield {\r\n  height: 7.25rem;\r\n  border-top: 1px solid rgba($black, 0.24);\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 1.5rem;\r\n\r\n  &__file,\r\n  &__micro {\r\n    margin-right: 1.5rem;\r\n    &_icon {\r\n      max-width: 2rem;\r\n    }\r\n  }\r\n  &__form {\r\n    flex: 1 1;\r\n  }\r\n  &__input {\r\n    width: 100%;\r\n\r\n    border: none;\r\n\r\n    font-size: 1.4rem;\r\n    font-weight: 400;\r\n    color: #8d8d8d;\r\n  }\r\n\r\n  &__smile {\r\n    margin-left: 1.5rem;\r\n    &_icon {\r\n      width: 2rem;\r\n      height: 2rem;\r\n    }\r\n  }\r\n}\r\n",".header {\r\n  padding: 3.1rem 2.3rem 1.4rem;\r\n  border-bottom: 1px solid rgba($black, 0.24);\r\n\r\n  &,\r\n  &__channel,\r\n  &__controls {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  @media (max-width: $bp-tablet) {\r\n    padding-top: 1.5rem;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 2rem;\r\n    font-weight: 700;\r\n  }\r\n\r\n  &__stars {\r\n    margin-left: 0.5rem;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  &__icon {\r\n    display: block;\r\n    max-width: 1.5rem;\r\n\r\n    + &__icon {\r\n      margin-left: 0.5rem;\r\n    }\r\n  }\r\n\r\n  &__peoples {\r\n    position: relative;\r\n    padding-left: 1.7rem;\r\n\r\n    font-size: 1.4rem;\r\n    font-weight: 400;\r\n    color: #a4a4a4;\r\n\r\n    margin-right: 2.4rem;\r\n\r\n    &::before {\r\n      content: \"\";\r\n      display: block;\r\n      width: 1.1rem;\r\n      height: 1.6rem;\r\n      background: transparent url(\"../img/icons/user.svg\") center no-repeat;\r\n      background-size: contain;\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 0;\r\n      transform: translateY(-50%);\r\n    }\r\n  }\r\n  &__form {\r\n    position: relative;\r\n    margin-right: 2.3rem;\r\n\r\n    @media (max-width: $bp-tablet) {\r\n      margin-top: 1rem;\r\n      flex: 0 0 100%; \r\n    }\r\n  }\r\n  &__search-input {\r\n    width: 24.1rem;\r\n    height: 3.3rem;\r\n    border: 1px solid rgba(#000, 0.24);\r\n    border-radius: 0.5rem;\r\n    padding-left: 1.65rem;\r\n    padding-right: 3rem;\r\n\r\n    font-family: inherit;\r\n    font-size: 1.4rem;\r\n    font-weight: 400;\r\n    color: #8d8d8d;\r\n\r\n    @media (max-width: $bp-tablet) {\r\n      width: 100%;\r\n    }\r\n  }\r\n  &__search-btn {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 1rem;\r\n    transform: translateY(-50%);\r\n\r\n    &_icon {\r\n      display: block;\r\n      max-width: 100%;\r\n    }\r\n  }\r\n\r\n  &__bell {\r\n    position: relative;\r\n    width: 1.6rem;\r\n    height: 1.8rem;\r\n    margin-right: 2rem;\r\n\r\n    &:after {\r\n      content: \"\";\r\n      display: block;\r\n      width: 5px;\r\n      height: 5px;\r\n      border-radius: 50%;\r\n      background-color: #fd4948;\r\n\r\n      position: absolute;\r\n      top: 0;\r\n      right: 0;\r\n    }\r\n\r\n    &_icon {\r\n      display: block;\r\n      max-width: 100%;\r\n    }\r\n  }\r\n  &__more {\r\n    position: relative;\r\n\r\n    &,\r\n    &::before,\r\n    &::after {\r\n      display: block;\r\n      width: 5px;\r\n      height: 5px;\r\n      border-radius: 50%;\r\n      background-color: rgba($black, 0.2);\r\n    }\r\n\r\n    &::before,\r\n    &::after {\r\n      content: \"\";\r\n      position: absolute;\r\n    }\r\n\r\n    &::before {\r\n      left: 0;\r\n      top: -120%;\r\n    }\r\n    &::after {\r\n      left: 0;\r\n      top: 120%;\r\n    }\r\n  }\r\n}\r\n",".profile {\r\n  width: 20rem;\r\n  height: 100vh;\r\n\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 500;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  transition: all 0.3s linear;\r\n\r\n  @media (max-width: $bp-max - 1px) {\r\n    & {\r\n      right: -20rem;\r\n    }\r\n    &__open {\r\n      width: 2.5rem;\r\n      height: 2.5rem;\r\n      border-radius: 50%;\r\n\r\n      position: absolute;\r\n      top: 10%;\r\n      left: -1.75rem;\r\n      z-index: 30;\r\n\r\n      background-color: $white;\r\n      box-shadow: 0 0 3px rgba($black, 0.3);\r\n\r\n      &::after {\r\n        content: \"\";\r\n        display: block;\r\n        width: 12px;\r\n        height: 12px;\r\n        clip-path: polygon(28% 10%, 40% 0, 80% 50%, 40% 100%, 29% 90%, 60% 50%);\r\n        transform: rotate(180deg);\r\n        margin: auto;\r\n\r\n        opacity: 0.65;\r\n        transition: opacity 0.2s ease-in-out, transform 0.2s linear;\r\n        background-color: $black;\r\n      }\r\n    }\r\n\r\n    &.opened &__open {\r\n      left: -1.25rem;\r\n\r\n      &::after{\r\n        transform: rotate(0);\r\n      }\r\n    }\r\n\r\n    &.opened {\r\n      right: 0;\r\n      z-index: 800;\r\n    }\r\n  }\r\n\r\n  @media (max-width: $bp-max) {\r\n    // & {\r\n    //   left: 100%;\r\n    // }\r\n  }\r\n\r\n  &__avatar {\r\n    width: 20rem;\r\n    height: 20rem;\r\n    overflow: hidden;\r\n    position: relative;\r\n    pointer-events: none;\r\n\r\n    &_img {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n      height: 100%;\r\n    }\r\n  }\r\n  &__description {\r\n    position: relative;\r\n    flex: 1 0;\r\n    overflow: hidden;\r\n    padding: 2rem;\r\n\r\n    background-color: rgba($white, 0.8);\r\n\r\n    &::before {\r\n      content: \"\";\r\n      display: block;\r\n      width: 100%;\r\n      height: 100%;\r\n\r\n      position: absolute;\r\n      bottom: 0;\r\n      left: 0;\r\n      z-index: -1;\r\n      background: transparent url(\"../img/back/profile.png\") no-repeat;\r\n      background-size: cover;\r\n      filter: blur(40px);\r\n    }\r\n  }\r\n\r\n  &__name {\r\n    font-size: 1.8rem;\r\n    font-weight: 700;\r\n    color: $black;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    &:after {\r\n      content: \"\";\r\n      display: block;\r\n      width: 0.6rem;\r\n      height: 0.6rem;\r\n      border-radius: 50%;\r\n      margin-right: 0.8rem;\r\n      background-color: #70cc16;\r\n\r\n      margin-top: 0.25rem;\r\n      margin-left: 0.5rem;\r\n    }\r\n\r\n    margin-bottom: 0.5rem;\r\n  }\r\n\r\n  &__proff {\r\n    font-size: 1.2rem;\r\n    font-weight: 400;\r\n    color: #5f6164;\r\n\r\n    margin-bottom: 2rem;\r\n  }\r\n\r\n  &__message {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 1.4rem;\r\n  }\r\n\r\n  &__message-btn,\r\n  &__actions {\r\n    height: 2.5rem;\r\n\r\n    border-radius: 5px;\r\n    background-color: #3577ef;\r\n    transition: background 0.2s ease-in-out;\r\n\r\n    &:hover {\r\n      background-color: darken(#3577ef, 5%);\r\n    }\r\n  }\r\n\r\n  &__message-btn {\r\n    width: 13.35rem;\r\n\r\n    font-size: 1.3rem;\r\n    font-weight: 700;\r\n    color: $white;\r\n  }\r\n\r\n  &__actions {\r\n    width: 2.55rem;\r\n    margin-left: 0.25rem;\r\n\r\n    &_icon {\r\n      display: block;\r\n      width: 7px;\r\n      height: 5px;\r\n      clip-path: polygon(0 0, 100% 0, 50% 100%);\r\n      background-color: $white;\r\n      margin: auto;\r\n    }\r\n  }\r\n}\r\n\r\n.pf-social {\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  margin-bottom: 1.85rem;\r\n\r\n  &__item {\r\n    width: 2.2rem;\r\n    height: 2.2rem;\r\n    border-radius: 50%;\r\n    background-color: #e8e8eb;\r\n    transition: background 0.2s ease-in-out;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    &:hover {\r\n      background-color: darken(#e8e8eb, 5%);\r\n    }\r\n  }\r\n  &__item + &__item {\r\n    margin-left: 0.65rem;\r\n  }\r\n  &__icon {\r\n    max-width: 100%;\r\n  }\r\n}\r\n\r\n.information {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  &__item {\r\n    margin-bottom: 1.15rem;\r\n  }\r\n\r\n  &__ctg {\r\n    display: block;\r\n    font-size: 1.2rem;\r\n    font-weight: 400;\r\n    color: #5f6164;\r\n    margin-bottom: 0.3rem;\r\n  }\r\n  &__data {\r\n    display: block;\r\n    font-size: 1.4rem;\r\n    font-weight: 400;\r\n    color: $black;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/fonts/Lato-Bold.ttf":
/*!****************************************!*\
  !*** ./src/assets/fonts/Lato-Bold.ttf ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "5dd5aa0269395f0ea92763e6cb3bc07a.ttf");

/***/ }),

/***/ "./src/assets/fonts/Lato-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/assets/fonts/Lato-Regular.ttf ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "9919edff6283018571add043109dc20b.ttf");

/***/ }),

/***/ "./src/assets/img/back/navigation.png":
/*!********************************************!*\
  !*** ./src/assets/img/back/navigation.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/extra/images/navigation.png");

/***/ }),

/***/ "./src/assets/img/back/profile.png":
/*!*****************************************!*\
  !*** ./src/assets/img/back/profile.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/extra/images/profile.png");

/***/ }),

/***/ "./src/assets/img/back/social.png":
/*!****************************************!*\
  !*** ./src/assets/img/back/social.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/extra/images/social.png");

/***/ }),

/***/ "./src/assets/img/icons/user.svg":
/*!***************************************!*\
  !*** ./src/assets/img/icons/user.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/extra/images/user.svg");

/***/ }),

/***/ "./src/assets/scss/style.scss":
/*!************************************!*\
  !*** ./src/assets/scss/style.scss ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/style.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/style.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/assets/jsx/list.json":
/*!**********************************!*\
  !*** ./src/assets/jsx/list.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"NomadList":{"channels":[{"name":"general","messages":[{"author":"Jeshua Stout","avatar":"assets/images/profiles/users/user-11.png","date":1215158807595,"message":null,"extra":{"link":{"text":"@pierrhack I dit for 6 days in Iceland","href":"/"}}},{"author":"Harold Adams","avatar":"assets/images/profiles/users/user-10.png","date":1415158807595,"message":"Which country to visit next? This is a photo with my friends - celebrating in Bali","extra":{"img":{"name":"my-top-paces.jpg","src":"assets/images/profiles/messages/photo1.png"}}},{"author":"Aada Laine","avatar":"assets/images/profiles/users/user-09.png","date":1515158807595,"message":null,"extra":{"link":{"text":"@har_adams wow it’s amazing, I want to buy a van and travelling next year","href":"/"}}},{"author":"Nala Hester","avatar":"assets/images/profiles/users/user-08.png","date":1615158807595,"message":"Working from a van in Australia isn’t feasible if you need internet. It may have improved over the last years but I spent some time in a camper van around Tasmania and internet was a real problem (and Tasmania is tiny compared to the rest of the country).","extra":null},{"author":"Ramon Bateman","avatar":"assets/images/profiles/users/user-07.png","date":1615158807595,"message":"What\'s the reason for the van? Saving money or just like to get outside? If you\'ve got a stable source of income you could always do some short term Airbnbs + buy a truck/topper, build a platform in the back. That way you can always convert it back to a truck and sleep in an apartment if you want.","extra":{"link":{"text":"@aa_da","href":"/"}}}]},{"name":"support","messages":[{"author":"Harold Adams","avatar":"assets/images/profiles/users/user-10.png","date":1434158807595,"message":"Hello, what\'s up?","extra":{}},{"author":"Dina Rouee","avatar":"assets/images/profiles/users/user-03.png","date":1415158807595,"message":"Hi, what are you talking about? I\'m good","extra":{}},{"author":"Harold Adams","avatar":"assets/images/profiles/users/user-10.png","date":1434558807595,"message":"I\'ve heard you got at the hospital","extra":{}},{"author":"Dina Rouee","avatar":"assets/images/profiles/users/user-03.png","date":1415158807595,"message":"Ahhh...it was accident. We were playing in volleyball when I fall down and hurt my leg. Now I\'m good and already at home ","extra":{}},{"author":"Harold Adams","avatar":"assets/images/profiles/users/user-10.png","date":1437558807595,"message":"I\'m glad to hear that you\'re good. What did say you doctor?","extra":{}},{"author":"Dina Rouee","avatar":"assets/images/profiles/users/user-03.png","date":1438558807595,"message":"He told me to lie in my bad 4-5 days, not working, not going and go to him 15 at 12.00","extra":{}},{"author":"Harold Adams","avatar":"assets/images/profiles/users/user-10.png","date":1450558807595,"message":"Do you want me to go with you?","extra":{}},{"author":"Dina Rouee","avatar":"assets/images/profiles/users/user-03.png","date":1438558807595,"message":"If you want it..","extra":{}},{"author":"Harold Adams","avatar":"assets/images/profiles/users/user-10.png","date":1451558807595,"message":"Ok, see you:)","extra":{}}]},{"name":"marketing","messages":[{"author":"Jeshua Stout","avatar":"assets/images/profiles/users/user-11.png","date":1216158807595,"message":"photo1","extra":{}},{"author":"Harold Adams","avatar":"assets/images/profiles/users/user-10.png","date":1414158807595,"message":"Which country to visit next? This is a photo with my friends - celebrating in Bali","extra":{}},{"author":"Harold Adams","avatar":"assets/images/profiles/users/user-10.png","date":1414158807595,"message":"Advise me pls","extra":{"img":{"name":"my-top-paces.jpg","src":"assets/images/profiles/messages/photo1.png"}}},{"author":"Aada Laine","avatar":"assets/images/profiles/users/user-09.png","date":1517158807595,"message":"Which country to visit next?","extra":{}}]},{"name":"bali","messages":[{"author":"Jeshua Stout","avatar":"assets/images/profiles/users/user-11.png","date":1216158807595,"message":"celebrating in Bali","extra":{}},{"author":"Harold Adams","avatar":"assets/images/profiles/users/user-10.png","date":1414158807595,"message":"Which country to visit next? This is a photo with my friends - celebrating in Bali","extra":{}}]},{"name":"poland","messages":[{"author":"Jeshua Stout","avatar":"assets/images/profiles/users/user-11.png","date":1216158807595,"message":"Which country to visit next? This is a photo with my friends - celebrating in Bali","extra":{}},{"author":"Harold Adams","avatar":"assets/images/profiles/users/user-10.png","date":1414158807595,"message":"Which country to visit next? This is a photo with my friends - celebrating in Bali","extra":{}},{"author":"Jeshua Stout","avatar":"assets/images/profiles/users/user-11.png","date":1216158807595,"message":"I want to buy a van and travelling next year","extra":{}},{"author":"Harold Adams","avatar":"assets/images/profiles/users/user-10.png","date":1414158807595,"message":"Which country to visit next? This is a photo with my friends - celebrating in Bali","extra":{}}]},{"name":"australia","messages":[{"author":"Aada Laine","avatar":"assets/images/profiles/users/user-09.png","date":1515158807595,"message":"What\'s the reason for the van? Saving money or just like to get outside?","extra":{"link":{"text":"@har_adams wow it’s amazing, I want to buy a van and travelling next year","href":"/"}}},{"author":"Nala Hester","avatar":"assets/images/profiles/users/user-08.png","date":1615158807595,"message":"Working from a van in Australia isn’t feasible if you need internet. It may have improved over the last years but I spent some time in a camper van around Tasmania and internet was a real problem (and Tasmania is tiny compared to the rest of the country).","extra":null},{"author":"Aada Laine","avatar":"assets/images/profiles/users/user-09.png","date":1535158807595,"message":null,"extra":{"link":{"text":"@har_adams wow it’s amazing, I want to buy a van and travelling next year","href":"/"}}},{"author":"Nala Hester","avatar":"assets/images/profiles/users/user-08.png","date":1655158807595,"message":"Working from a van in Australia isn’t feasible if you need internet. It may have improved over the last years but I spent some time in a camper van around Tasmania and internet was a real problem (and Tasmania is tiny compared to the rest of the country).","extra":null}]},{"name":"jobs","messages":[{}]},{"name":"startups","messages":[{}]},{"name":"italy","messages":[{}]},{"name":"freelance","messages":[{}]}],"friends":[{"id":1,"name":"Orlando Diggs","imagePath":"assets/images/profiles/users/user-06.png","isOnline":true},{"id":2,"name":"Carmen Velasco","imagePath":"assets/images/profiles/users/user-05.png","isOnline":true},{"id":3,"name":"Marie Jensen","imagePath":"assets/images/profiles/users/user-04.png","isOnline":false},{"id":4,"name":"Alex Lee","imagePath":"assets/images/profiles/users/user-03.png","isOnline":false},{"id":5,"name":"Leo Gill","imagePath":"assets/images/profiles/users/user-02.png","isOnline":false},{"id":6,"name":"Britney Cooper","imagePath":"assets/images/profiles/users/user-01.png","isOnline":false}]}}');

/***/ })

},
0,[["./node_modules/@babel/polyfill/lib/index.js","runtime","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_babel_runtime_helpers_classCall-e1a0c4"],["./src/assets/jsx/app.jsx","runtime","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_babel_runtime_helpers_classCall-e1a0c4"]]]);
//# sourceMappingURL=app.js.map