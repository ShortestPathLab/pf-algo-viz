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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/components/base-component.js":
/*!*****************************************!*\
  !*** ./js/components/base-component.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BaseComponent = {
  transitions: [{
    name: 'init',
    from: 'none',
    to: 'ready'
  }, {
    name: 'render',
    from: 'ready',
    to: 'rendered'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (BaseComponent);

/***/ }),

/***/ "./js/components/debugger/component.js":
/*!*********************************************!*\
  !*** ./js/components/debugger/component.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! javascript-state-machine */ "./node_modules/javascript-state-machine/lib/state-machine.js");
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ "./js/components/debugger/template.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/store */ "./js/services/store.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-component */ "./js/components/base-component.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controller */ "./js/controller.js");






/**
* @module components/debugger
* This component handles the uploading of algorithm event debug file.
*/

var DebuggerComponent = new javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default.a(jquery__WEBPACK_IMPORTED_MODULE_3___default.a.extend({}, _base_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
  methods: {
    /**
    * @function onBeforeInit
    * This function creates component div container and appends it to the page.
    */
    onBeforeInit: function onBeforeInit() {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()("#pathfinder").append("<div id='debug-component'></div>");
    },

    /**
    * @function onLeaveNone
    * This function fills the component container with the template file and initiates event binding.
    */
    onLeaveNone: function onLeaveNone() {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()("#debug-component").html(_template__WEBPACK_IMPORTED_MODULE_1__["default"]);
      this.bindEvents();
    },

    /**
    * @function bindEvents
    * This function creates Tracer record from the algorithm debug file, hides map and algorithm upload. It then starts the controller.
    */
    bindEvents: function bindEvents() {
      var _this = this;

      jquery__WEBPACK_IMPORTED_MODULE_3___default()("#load-algo").on('change', function (e) {
        var debugFile = e.target.files[0];
        _services_store__WEBPACK_IMPORTED_MODULE_2__["default"].createRecord('Tracer', debugFile);
        _this.tracer = _services_store__WEBPACK_IMPORTED_MODULE_2__["default"].find('Tracer');
        _controller__WEBPACK_IMPORTED_MODULE_5__["default"].start();
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#map-component").hide();
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#debug-component").hide();
      });
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (DebuggerComponent);

/***/ }),

/***/ "./js/components/debugger/template.js":
/*!********************************************!*\
  !*** ./js/components/debugger/template.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./js/config.js");


var template = function template() {
  return "\n    <label>Algorithm: </label>\n    <input type = 'file' id='load-algo' />\n";
};

/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "./js/components/events-list/component.js":
/*!************************************************!*\
  !*** ./js/components/events-list/component.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! javascript-state-machine */ "./node_modules/javascript-state-machine/lib/state-machine.js");
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ "./js/components/events-list/template.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-component */ "./js/components/base-component.js");
/* harmony import */ var _services_playback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/playback */ "./js/services/playback.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controller */ "./js/controller.js");
/* harmony import */ var _tablet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tablet/component */ "./js/components/tablet/component.js");







/**
* @module components/events-list
* This component handles the display of events of algorithms on the panel
*/

var EventsListComponent = new javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default.a(jquery__WEBPACK_IMPORTED_MODULE_2___default.a.extend({}, _base_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
  data: {
    events: []
  },
  methods: {
    /**
    * @function onBeforeInit
    * This function creates component div container and appends it to the page.
    */
    onBeforeInit: function onBeforeInit() {
      _tablet_component__WEBPACK_IMPORTED_MODULE_6__["default"].display("<div id='events-list-component'></div>");
    },

    /**
    * @function onLeaveNone
    * This function fills the component container with the template file, initiates event binding and callback binding.
    */
    onLeaveNone: function onLeaveNone() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#events-list-component").html(_template__WEBPACK_IMPORTED_MODULE_1__["default"]);
      this.bindCallbacks();
      this.bindEvents();
    },

    /**
    * @function bindCallbacks
    * This function add the playback functions to playback callback service.
    */
    bindCallbacks: function bindCallbacks() {
      _services_playback__WEBPACK_IMPORTED_MODULE_4__["default"].addCallback('init', this.reset.bind(this));
      _services_playback__WEBPACK_IMPORTED_MODULE_4__["default"].addCallback('play', this.play.bind(this));
      _services_playback__WEBPACK_IMPORTED_MODULE_4__["default"].addCallback('pause', this.pause.bind(this));
      _services_playback__WEBPACK_IMPORTED_MODULE_4__["default"].addCallback('reset', this.reset.bind(this));
    },
    bindEvents: function bindEvents() {},

    /**
    * @function play
    * This function hides the event list when algorithm is running.
    */
    play: function play() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#events").hide();
    },

    /**
    * @function pause
    * This function shows the event list when algorithm is paused.
    */
    pause: function pause() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#events").show();
    },

    /**
    * @function reset
    * This function hides the event list when algorithm is stopped.
    */
    reset: function reset() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#events").hide();
    },

    /**
    * @function addEvent
    * This function add li element with the event details passed to it. It also binds retrace history upon clicking on the event.
    * @param {Object} event - It has _id, text
    */
    addEvent: function addEvent(event) {
      this.events.push(event);
      var li = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.parseHTML("<li class=\"event\">".concat(event.text, "</li>"))[0];
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(li).on("click", function (e) {
        _controller__WEBPACK_IMPORTED_MODULE_5__["default"].retraceHistory(event._id);
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#events").append(li);
      window.requestAnimationFrame(function () {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#events-list")[0].scrollTop = jquery__WEBPACK_IMPORTED_MODULE_2___default()("#events-list")[0].scrollHeight;
      });
    },

    /**
    * @function removeEvent
    * This function removes the last event from the list and screen.
    */
    removeEvent: function removeEvent() {
      this.events.pop();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#events .event:last-child').remove();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#events-list")[0].scrollTop = jquery__WEBPACK_IMPORTED_MODULE_2___default()("#events")[0].offsetHeight;
    },

    /**
    * @function clearEvents
    * This function clear all the events up to the id passed.
    * @param {number} id
    */
    clearEvents: function clearEvents(id) {
      var pruneLength = this.events.length - id;
      var pruneEvents = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#events .event').slice(-pruneLength);
      pruneEvents.remove();
      this.events.length = id;
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (EventsListComponent);

/***/ }),

/***/ "./js/components/events-list/template.js":
/*!***********************************************!*\
  !*** ./js/components/events-list/template.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var template = function template() {
  return "\n  <div id='events-list'>\n    <ol id=\"events\">\n    </ol>\n  </div>\n";
};

/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "./js/components/index.js":
/*!********************************!*\
  !*** ./js/components/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _debugger_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debugger/component */ "./js/components/debugger/component.js");
/* harmony import */ var _events_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-list/component */ "./js/components/events-list/component.js");
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/component */ "./js/components/map/component.js");
/* harmony import */ var _monitor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monitor/component */ "./js/components/monitor/component.js");
/* harmony import */ var _playback_controls_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playback-controls/component */ "./js/components/playback-controls/component.js");
/* harmony import */ var _remote_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remote/component */ "./js/components/remote/component.js");
/* harmony import */ var _stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stats/component */ "./js/components/stats/component.js");
/* harmony import */ var _tablet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tablet/component */ "./js/components/tablet/component.js");








var Components = [_monitor_component__WEBPACK_IMPORTED_MODULE_3__["default"], _tablet_component__WEBPACK_IMPORTED_MODULE_7__["default"], _debugger_component__WEBPACK_IMPORTED_MODULE_0__["default"], _events_list_component__WEBPACK_IMPORTED_MODULE_1__["default"], _map_component__WEBPACK_IMPORTED_MODULE_2__["default"], _playback_controls_component__WEBPACK_IMPORTED_MODULE_4__["default"], _stats_component__WEBPACK_IMPORTED_MODULE_6__["default"]];
/* harmony default export */ __webpack_exports__["default"] = (Components);

/***/ }),

/***/ "./js/components/map/component.js":
/*!****************************************!*\
  !*** ./js/components/map/component.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! javascript-state-machine */ "./node_modules/javascript-state-machine/lib/state-machine.js");
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ "./js/components/map/template.js");
/* harmony import */ var _models_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Grid */ "./js/models/Grid.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-component */ "./js/components/base-component.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./js/config.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environment */ "./js/environment.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/store */ "./js/services/store.js");
/* harmony import */ var _services_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/grid */ "./js/services/grid.js");
/* harmony import */ var _services_mesh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/mesh */ "./js/services/mesh.js");
/* harmony import */ var _services_road_network__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/road-network */ "./js/services/road-network.js");











/**
* @module components/map
* This component handles the uploading of map file.
*/

var MapComponent = new javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default.a(jquery__WEBPACK_IMPORTED_MODULE_3___default.a.extend({}, _base_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
  methods: {
    /**
    * @function onBeforeInit
    * This function creates component div container and appends it to the page.
    */
    onBeforeInit: function onBeforeInit() {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()("#pathfinder").append("<div id='map-component'></div>");
    },

    /**
    * @function onLeaveNone
    * This function fills the component container with the template file and initiates event binding.
    */
    onLeaveNone: function onLeaveNone() {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()("#map-component").html(_template__WEBPACK_IMPORTED_MODULE_1__["default"]);
      this.bindEvents();
    },

    /**
    * @function bindEvents
    * This function creates map record from the map fil and hides map upload. It then draws the map on the screen.
    */
    bindEvents: function bindEvents() {
      var _this = this;

      jquery__WEBPACK_IMPORTED_MODULE_3___default()("#load-map").on('change', function (e) {
        if (_this.validateFiles(e.target.files)) {
          _this.processFiles(e.target.files);
        } else {
          alert("Invalid format(s)");
        }
      });
    },
    processFiles: function processFiles(files) {
      if (files.length > 1) {
        var file1 = files[0];
        var file2 = files[1];
        var file1Name = file1.name.split(".");
        var file2Name = file2.name.split(".");
        var file1Type = file1Name.pop();
        file1Name = file1Name.join("");
        var file2Type = file2Name.pop();
        file2Name = file2Name.join("");
        var fileType = 'roadnetwork';
        var fileName = file1Type == "gr" ? file1Name : file2Name;
        var coFile = file1Type == "co" ? file1 : file2;
        var grFile = file1Type == "gr" ? file1 : file2;
        var map = _services_store__WEBPACK_IMPORTED_MODULE_7__["default"].createRecord("Map", {
          fileType: fileType,
          fileName: fileName
        });
        _services_store__WEBPACK_IMPORTED_MODULE_7__["default"].createRecord('RoadNetwork', {
          coFile: coFile,
          grFile: grFile
        });
        _services_road_network__WEBPACK_IMPORTED_MODULE_10__["default"].process();
        _config__WEBPACK_IMPORTED_MODULE_5__["default"].mapType = 'roadnetwork';
      } else {
        var file = files[0];

        var _fileName = file.name.split(".");

        var _fileType = _fileName.pop();

        _fileName = _fileName.join("");

        var _map = _services_store__WEBPACK_IMPORTED_MODULE_7__["default"].createRecord("Map", {
          fileType: _fileType,
          fileName: _fileName
        });

        if (_fileType == "grid") {
          _services_store__WEBPACK_IMPORTED_MODULE_7__["default"].createRecord('Grid', file);
          _services_grid__WEBPACK_IMPORTED_MODULE_8__["default"].process();
          _config__WEBPACK_IMPORTED_MODULE_5__["default"].mapType = 'grid';
        } else if (_fileType == "mesh") {
          _services_store__WEBPACK_IMPORTED_MODULE_7__["default"].createRecord('Mesh', file);
          _services_mesh__WEBPACK_IMPORTED_MODULE_9__["default"].process();
          _config__WEBPACK_IMPORTED_MODULE_5__["default"].mapType = 'mesh';
        }
      }

      jquery__WEBPACK_IMPORTED_MODULE_3___default()("#map-component").hide();
    },
    validateFiles: function validateFiles(files) {
      if (files.length > 1) {
        var file1 = files[0];
        var file2 = files[1];
        var file1Type = file1.name.split(".").pop();
        var file2Type = file2.name.split(".").pop();
        var hasCo = false;
        var hasGr = false;

        if (file1Type == "co" || file2Type == "co") {
          hasCo = true;
        }

        if (file1Type == "gr" || file2Type == "gr") {
          hasGr = true;
        }

        if (hasCo && hasGr) {
          return true;
        } else {
          return false;
        }
      } else {
        var file = files[0];
        var fileType = file.name.split(".").pop();

        if (fileType == "co" || fileType == "gr") {
          return false;
        }

        return true;
      }
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (MapComponent);
/*
let photo = document.getElementById("image-file").files[0];
let formData = new FormData();

formData.append("photo", photo);
fetch('/upload/image', {method: "POST", body: formData});
*/

/***/ }),

/***/ "./js/components/map/template.js":
/*!***************************************!*\
  !*** ./js/components/map/template.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./js/config.js");


var template = function template() {
  return "\n  <label>Map: </label>\n  <input type='file' id='load-map' multiple=true accept='.grid,.mesh,.co,.gr' />\n";
};

/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "./js/components/monitor/component.js":
/*!********************************************!*\
  !*** ./js/components/monitor/component.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! javascript-state-machine */ "./node_modules/javascript-state-machine/lib/state-machine.js");
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ "./js/components/monitor/template.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-component */ "./js/components/base-component.js");




/**
* @module components/monitor
* This component handles the uploading of algorithm event debug file.
*/

var MonitorComponent = new javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default.a(jquery__WEBPACK_IMPORTED_MODULE_2___default.a.extend({}, _base_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
  methods: {
    /**
    * @function onBeforeInit
    * This function creates component div container and appends it to the page.
    */
    onBeforeInit: function onBeforeInit() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#pathfinder").append("<div id='monitor-component'></div>");
    },

    /**
    * @function onLeaveNone
    * This function fills the component container with the template file and initiates event binding.
    */
    onLeaveNone: function onLeaveNone() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#monitor-component").html(_template__WEBPACK_IMPORTED_MODULE_1__["default"]);
      this.bindEvents();
    },
    bindEvents: function bindEvents() {},
    display: function display(content) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#monitor .screen").append(content);
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (MonitorComponent);

/***/ }),

/***/ "./js/components/monitor/template.js":
/*!*******************************************!*\
  !*** ./js/components/monitor/template.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var template = function template() {
  return "\n  <div id=\"monitor\">\n    <div class=\"body\">\n      <div class=\"screen\">\n      </div>\n      <div class=\"logo\"></div>\n    </div>\n    <div class=\"stand\"></div>\n  </div>\n";
};

/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "./js/components/playback-controls/component.js":
/*!******************************************************!*\
  !*** ./js/components/playback-controls/component.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! javascript-state-machine */ "./node_modules/javascript-state-machine/lib/state-machine.js");
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ "./js/components/playback-controls/template.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-component */ "./js/components/base-component.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controller */ "./js/controller.js");
/* harmony import */ var _services_playback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/playback */ "./js/services/playback.js");






/**
* @module components/playback-controls
* This component handles the playback controls buttons.
*/

var PlaybackControlsComponent = new javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default.a(jquery__WEBPACK_IMPORTED_MODULE_2___default.a.extend({}, _base_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
  methods: {
    /**
    * @function onBeforeInit
    * This function creates component div container and appends it to the page.
    */
    onBeforeInit: function onBeforeInit() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#pathfinder").append("<div id='playback-controls-component'></div>");
    },

    /**
    * @function onLeaveNone
    * This function fills the component container with the template file and initiates event binding.
    */
    onLeaveNone: function onLeaveNone() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#playback-controls-component").html(_template__WEBPACK_IMPORTED_MODULE_1__["default"]);
      this.hideAll();
      this.bindCallbacks();
      this.bindEvents();
    },

    /**
    * @function bindCallbacks
    * This function add the playback functions to playback callback service.
    */
    bindCallbacks: function bindCallbacks() {
      _services_playback__WEBPACK_IMPORTED_MODULE_5__["default"].addCallback('init', this.reset.bind(this));
      _services_playback__WEBPACK_IMPORTED_MODULE_5__["default"].addCallback('play', this.play.bind(this));
      _services_playback__WEBPACK_IMPORTED_MODULE_5__["default"].addCallback('pause', this.pause.bind(this));
      _services_playback__WEBPACK_IMPORTED_MODULE_5__["default"].addCallback('reset', this.reset.bind(this));
    },

    /**
    * @function bindEvents
    * This function calls the PlaybackService callbacks as per the button clicked
    */
    bindEvents: function bindEvents() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#play").on('click', function (e) {
        _services_playback__WEBPACK_IMPORTED_MODULE_5__["default"].play();
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#pause").on('click', function (e) {
        _services_playback__WEBPACK_IMPORTED_MODULE_5__["default"].pause();
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#stop").on('click', function (e) {
        _services_playback__WEBPACK_IMPORTED_MODULE_5__["default"].reset();
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#step-forward").on('click', function (e) {
        _controller__WEBPACK_IMPORTED_MODULE_4__["default"].stepForward();
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#step-backward").on('click', function (e) {
        _controller__WEBPACK_IMPORTED_MODULE_4__["default"].stepBackward();
      });
    },

    /**
    * @function hideAll
    * This function hides all the buttons
    */
    hideAll: function hideAll() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#play').hide();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#step-forward').hide();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#step-backward').hide();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#pause').hide();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stop').hide();
    },

    /**
    * @function play
    * This function shows only pause and stop button
    */
    play: function play() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#play').hide();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#step-forward').hide();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#step-backward').hide();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#pause').show();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stop').show();
    },

    /**
    * @function pause
    * This function shows play, step and stop button
    */
    pause: function pause() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#play').show();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#step-forward').show();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#step-backward').show();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#pause').hide();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stop').show();
    },

    /**
    * @function reset
    * This function shows play and step buttons
    */
    reset: function reset() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#play').show();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#step-forward').show();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#step-backward').show();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#pause').hide();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stop').hide();
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (PlaybackControlsComponent);

/***/ }),

/***/ "./js/components/playback-controls/template.js":
/*!*****************************************************!*\
  !*** ./js/components/playback-controls/template.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var template = function template() {
  return "\n  <div id='controls'>\n    <button id='play' title='Play'><i class='fas fa-play'/></button>\n    <button id='pause' title='Pause'><i class='fas fa-pause'/></button>\n    <button id='stop' title='Stop'><i class='fas fa-stop'/></button>\n    <button id='step-backward' title='Step Back'><i class='fas fa-undo'/></button>\n    <button id='step-forward' title='Step Forward'><i class='fas fa-redo'/></button>\n  </div>\n";
};

/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "./js/components/remote/component.js":
/*!*******************************************!*\
  !*** ./js/components/remote/component.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! javascript-state-machine */ "./node_modules/javascript-state-machine/lib/state-machine.js");
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ "./js/components/remote/template.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-component */ "./js/components/base-component.js");




var RemoteComponent = new javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default.a(jquery__WEBPACK_IMPORTED_MODULE_2___default.a.extend({}, _base_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
  methods: {
    onBeforeInit: function onBeforeInit() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#pathfinder").append("<div id='remote-component'></div>");
    },
    onLeaveNone: function onLeaveNone() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#remote-component").html(_template__WEBPACK_IMPORTED_MODULE_1__["default"]);
      this.bindEvents();
    },
    bindEvents: function bindEvents() {}
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (RemoteComponent);

/***/ }),

/***/ "./js/components/remote/template.js":
/*!******************************************!*\
  !*** ./js/components/remote/template.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var template = function template() {
  return "\n  <div id='remote'>\n    <div class=cable></div>\n    <div class=controller>\n      <div class=centerBlue>\n        <div class=centerLeft></div>\n        <div class=centerRight></div>\n      </div>\n      <div class=centerStart>\n        <div class=SLeft></div>\n        <div class=SRight></div>\n      </div>\n      <div class=centerSelect>\n        <div class=SLeft></div>\n        <div class=SRight></div>\n      </div>\n\n      <div class=controllerLeft>\n        <div class=circle></div>\n        <div class=crossCenter>\n          <div class=crossTop></div>\n          <div class=crossBottom></div>\n          <div class=crossLeft></div>\n          <div class=crossRight></div>\n          <div class=crossCircle></div>\n        </div>\n      </div>\n      <div class=controllerRight>\n        <div class=backButton1Center>\n          <div class= cornerLeft1></div>\n          <div class= cornerRight1></div>\n        </div>\n        <div class=backButton2Center>\n          <div class= cornerLeft2></div>\n          <div class= cornerRight2></div>\n        </div>\n      </div>\n    </div>\n  </div>\n";
};

/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "./js/components/stats/component.js":
/*!******************************************!*\
  !*** ./js/components/stats/component.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! javascript-state-machine */ "./node_modules/javascript-state-machine/lib/state-machine.js");
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ "./js/components/stats/template.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-component */ "./js/components/base-component.js");




var StatsComponent = new javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default.a(jquery__WEBPACK_IMPORTED_MODULE_2___default.a.extend({}, _base_component__WEBPACK_IMPORTED_MODULE_3__["default"], {}));
/* harmony default export */ __webpack_exports__["default"] = (StatsComponent);

/***/ }),

/***/ "./js/components/stats/template.js":
/*!*****************************************!*\
  !*** ./js/components/stats/template.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var template = function template() {
  return "\n  <div id='map-stats'></div>\n";
};

/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "./js/components/tablet/component.js":
/*!*******************************************!*\
  !*** ./js/components/tablet/component.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! javascript-state-machine */ "./node_modules/javascript-state-machine/lib/state-machine.js");
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ "./js/components/tablet/template.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-component */ "./js/components/base-component.js");




/**
* @module components/tablet
* This component handles the display of the algorithm steps.
*/

var TabletComponent = new javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default.a(jquery__WEBPACK_IMPORTED_MODULE_2___default.a.extend({}, _base_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
  methods: {
    /**
    * @function onBeforeInit
    * This function creates component div container and appends it to the page.
    */
    onBeforeInit: function onBeforeInit() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#pathfinder").append("<div id='tablet-component'></div>");
    },

    /**
    * @function onLeaveNone
    * This function fills the component container with the template file.
    */
    onLeaveNone: function onLeaveNone() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#tablet-component").html(_template__WEBPACK_IMPORTED_MODULE_1__["default"]);
      this.bindEvents();
    },
    bindEvents: function bindEvents() {},

    /**
    * @function display
    * This function appends the html passed to it in the component.
    * @param {String} content
    */
    display: function display(content) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("#tablet-content").append(content);
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (TabletComponent);

/***/ }),

/***/ "./js/components/tablet/template.js":
/*!******************************************!*\
  !*** ./js/components/tablet/template.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var template = function template() {
  return "\n  <div id='tablet'>\n    <div id='tablet-content'>\n    </div>\n  </div>\n";
};

/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "./js/config.js":
/*!**********************!*\
  !*** ./js/config.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  clientAddr: "http://localhost:8001",
  serverAddr: "http://localhost:8000",
  processGridUrl: "http://localhost:8000/processGrid",
  processRoadNetworkUrl: "http://localhost:8000/processRoadNetwork",
  zooming: true,
  operationsPerSecond: 300,
  lineColor: 0x6B3838,
  wallColor: 0xD3D3D3,
  pathColor: 0xFFFFFF,
  borderColor: 0x000000,
  borderWidth: 0.1,
  nodeSize: 5,
  roadNetworkScale: 0.005,
  nodeAttrs: {
    source: {
      fillColor: 0x00DD00 //green :) 43

    },
    destination: {
      fillColor: 0xE40E40 //red :) 47

    },
    opened: {
      fillColor: 0xAFEEEE //blue :) 80

    },
    frontier: {
      fillColor: 0xFFFF00 //yellow :) 50

    },
    current: {
      fillColor: 0xFF6600 //orange :) 50

    },
    closed: {
      fillColor: 0x8800CC //violet :) 40

    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./js/controller.js":
/*!**************************!*\
  !*** ./js/controller.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! javascript-state-machine */ "./node_modules/javascript-state-machine/lib/state-machine.js");
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./js/components/index.js");
/* harmony import */ var _components_events_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/events-list/component */ "./js/components/events-list/component.js");
/* harmony import */ var _services_playback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/playback */ "./js/services/playback.js");
/* harmony import */ var _services_floatbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/floatbox */ "./js/services/floatbox.js");
/* harmony import */ var _services_frontier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/frontier */ "./js/services/frontier.js");
/* harmony import */ var _services_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/history */ "./js/services/history.js");
/* harmony import */ var _services_search_path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/search-path */ "./js/services/search-path.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/store */ "./js/services/store.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config */ "./js/config.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_insert_node__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/insert-node */ "./js/utils/insert-node.js");
/* harmony import */ var _services_runner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/runner */ "./js/services/runner.js");
/* harmony import */ var _services_renderer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/renderer */ "./js/services/renderer.js");
/* harmony import */ var _services_mouse_tracker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/mouse-tracker */ "./js/services/mouse-tracker.js");
/* harmony import */ var _services_injector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/injector */ "./js/services/injector.js");
















/**
* @module controller
* The controller is the main part which controls the whole app. It is a StateMachine with 3 states: none, ready and running. Init transition changes state from none to ready. Start transition changes state from ready to running.
*/

var Controller = new javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default.a({
  transitions: [{
    name: 'init',
    from: 'none',
    to: 'ready'
  }, {
    name: 'start',
    from: 'ready',
    to: 'running'
  }],

  /**
  * Data of this state machine has keeps all the variables required for functioning.
  */
  data: {
    //runner => The runner is function looper that runs every step of the algorithm serially.
    runner: null,
    //currentId => Id of the current step being run
    currentId: 1,
    //rendered => If the canvas has been rendered on the screen or not.
    rendered: false,
    //app => PIXI.Application object
    app: null,
    //renderer => app.renderer
    renderer: null,
    //stage => app.stage
    stage: null,
    //canvas => DOM element canvas
    canvas: null
  },
  methods: {
    /**
    * @function onInit
    * This function is called when the Controller is initiated(init transition) i.e. none to ready state. It initiates all the components on the page.
    */
    onInit: function onInit() {
      Object(_services_mouse_tracker__WEBPACK_IMPORTED_MODULE_14__["default"])(this);
      _components__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(function (component) {
        component.init();
      });
      _services_history__WEBPACK_IMPORTED_MODULE_6__["default"].init(this);
      _services_frontier__WEBPACK_IMPORTED_MODULE_5__["default"].init(this);
      _services_search_path__WEBPACK_IMPORTED_MODULE_7__["default"].init(this);
    },

    /**
    * @function onReady
    * This function is called when the Controller has entered ready state by init transition. It setup play and reset callback in playback service with Controller context.
    */
    onReady: function onReady() {
      _services_playback__WEBPACK_IMPORTED_MODULE_3__["default"].addCallback('play', this.loop.bind(this));
      _services_playback__WEBPACK_IMPORTED_MODULE_3__["default"].addCallback('reset', this.reset.bind(this));
    },

    /**
    * @function onStart
    * This function is called when Controller is started(start transition) i.e. ready to running state. It is basically called when the algorithm is uploaded and app can be in running state. It calculates total steps in the algorithm, setups runner and initiates Playback and Floatbox services.
    */
    onStart: function onStart() {
      var _this = this;

      this.tracer = _services_store__WEBPACK_IMPORTED_MODULE_8__["default"].find('Tracer');
      var that = this;
      this.tracer.steps.then(function (steps) {
        _this.steps = steps;
        that.setupRenderer();
        _this.totalSteps = Object.keys(_this.steps).length;
        that.runner = _services_runner__WEBPACK_IMPORTED_MODULE_12__["default"].call(that, steps);
        _services_playback__WEBPACK_IMPORTED_MODULE_3__["default"].init();
        _services_floatbox__WEBPACK_IMPORTED_MODULE_4__["default"].init();
      });
    },
    getMap: function getMap() {
      var map = _services_store__WEBPACK_IMPORTED_MODULE_8__["default"].find('Map');

      if (map && map.mapType == "grid") {
        map = _services_store__WEBPACK_IMPORTED_MODULE_8__["default"].find('Grid');
      } else if (map && map.mapType == "mesh") {
        map = _services_store__WEBPACK_IMPORTED_MODULE_8__["default"].find('Mesh');
      } else if (map && map.mapType == "roadnetwork") {
        map = _services_store__WEBPACK_IMPORTED_MODULE_8__["default"].find('RoadNetwork');
      }

      return map;
    },
    getDimensions: function getDimensions() {
      var width, height;
      var map = this.getMap();

      if (map) {
        this.map = map;
        width = map.width;
        height = map.height;
      } else {
        width = this.tracer.width;
        height = this.tracer.height;
      }

      return {
        width: width,
        height: height
      };
    },

    /**
    * @function setupRenderer
    * This function initiates the canvas by map's height and width if it is uploaded. Otherwise, just algorithm's max width and height used. Renderer service is used to render.
    */
    setupRenderer: function setupRenderer() {
      if (!this.rendered) {
        var _this$getDimensions = this.getDimensions(),
            width = _this$getDimensions.width,
            height = _this$getDimensions.height;

        _services_renderer__WEBPACK_IMPORTED_MODULE_13__["default"].render(this, width, height);
      }
    },

    /**
    * @function loop
    * This function is called by playback play control and keeps stepping forward unless paused or stopped.
    */
    loop: function loop() {
      var self = this;

      (function loop() {
        if (!_services_playback__WEBPACK_IMPORTED_MODULE_3__["default"].is("running")) {
          return;
        }

        self.stepForward();
        window.requestAnimationFrame(loop);
      })();
    },

    /**
    * @function retraceHistory
    * This function removes everything from canvas. Draws all the objects from the history. Also draws the line.
    * @param {number} id - id of the step at which algorithm is to be retraced.
    */
    retraceHistory: function retraceHistory(id) {
      this.historyRetraced = true;
      this.cleanCanvas();
      _services_history__WEBPACK_IMPORTED_MODULE_6__["default"].retraceHistory(id);
      _services_frontier__WEBPACK_IMPORTED_MODULE_5__["default"].retraceHistory(id);
      _services_search_path__WEBPACK_IMPORTED_MODULE_7__["default"].retraceHistory(id);
    },

    /**
    * @function clearFutureData
    * This function clears all the data by limiting rectangles, frontierHistory and lines history with currentId.
    */
    clearFutureData: function clearFutureData() {
      if (this.historyRetraced) {
        _services_search_path__WEBPACK_IMPORTED_MODULE_7__["default"].clearFuture();
        _services_history__WEBPACK_IMPORTED_MODULE_6__["default"].clearFuture();
        _services_frontier__WEBPACK_IMPORTED_MODULE_5__["default"].clearFuture();
        _components_events_list_component__WEBPACK_IMPORTED_MODULE_2__["default"].clearEvents(this.currentId - 1);
        this.historyRetraced = false;
      }
    },

    /**
    * @function stepForward
    * This function calls runner to draw the current step and also add step text.
    */
    stepForward: function stepForward() {
      this.clearFutureData();

      if (this.currentId >= this.totalSteps && _services_playback__WEBPACK_IMPORTED_MODULE_3__["default"].state != 'paused') {
        _services_playback__WEBPACK_IMPORTED_MODULE_3__["default"].pause();
      }

      var currentStep = this.steps[this.currentId];
      this.runner();
      _components_events_list_component__WEBPACK_IMPORTED_MODULE_2__["default"].addEvent(currentStep);
    },

    /**
    * @function cleanCanvas
    * This function removes all the rectangles from history, frontierRects and lines from the canvas.
    */
    cleanCanvas: function cleanCanvas() {
      _services_history__WEBPACK_IMPORTED_MODULE_6__["default"].clean();
      _services_frontier__WEBPACK_IMPORTED_MODULE_5__["default"].clean();
      _services_search_path__WEBPACK_IMPORTED_MODULE_7__["default"].clean();
    },

    /**
    * @function reset
    * This function resets everything to the start.
    */
    reset: function reset() {
      this.cleanCanvas();
      _services_history__WEBPACK_IMPORTED_MODULE_6__["default"].reset();
      _services_frontier__WEBPACK_IMPORTED_MODULE_5__["default"].reset();
      _components_events_list_component__WEBPACK_IMPORTED_MODULE_2__["default"].clearEvents(this.currentId);
    },

    /**
    * @function stepBackward
    * This function decrements the current id. It removes the current rectangle. It removes the new frontier rectanges if added in current step or retraces the frontier rectangles that were in the previous step. It also removes the current line and adds the previous line. It also removes the current even text from the list.
    */
    stepBackward: function stepBackward() {
      this.clearFutureData();

      if (this.currentId == 1) {
        return;
      }

      this.currentId -= 1;
      _services_history__WEBPACK_IMPORTED_MODULE_6__["default"].stepBackward();
      _services_frontier__WEBPACK_IMPORTED_MODULE_5__["default"].stepBackward();
      _services_search_path__WEBPACK_IMPORTED_MODULE_7__["default"].stepBackward();
      _components_events_list_component__WEBPACK_IMPORTED_MODULE_2__["default"].removeEvent();
    }
  }
});
_services_injector__WEBPACK_IMPORTED_MODULE_15__["default"].register('controller', Controller);
window.controller = Controller;
/* harmony default export */ __webpack_exports__["default"] = (Controller);

/***/ }),

/***/ "./js/environment.js":
/*!***************************!*\
  !*** ./js/environment.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./js/controller.js");

document.addEventListener('DOMContentLoaded', init, false);

function init() {
  _controller__WEBPACK_IMPORTED_MODULE_0__["default"].init("adsdf");
}

;

/***/ }),

/***/ "./js/models/Circle.js":
/*!*****************************!*\
  !*** ./js/models/Circle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-object */ "./js/models/node-object.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _services_injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/injector */ "./js/services/injector.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/store */ "./js/services/store.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/debounce */ "./js/utils/debounce.js");
/* harmony import */ var _utils_draw_line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/draw-line */ "./js/utils/draw-line.js");
/* harmony import */ var _utils_remove_node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/remove-node */ "./js/utils/remove-node.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var _id = 1;

var Circle =
/*#__PURE__*/
function (_NodeObject) {
  _inherits(Circle, _NodeObject);

  function Circle(options) {
    var _this;

    _classCallCheck(this, Circle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Circle).call(this, options.nodeConf));
    _this._id = _id;
    Object.assign(_assertThisInitialized(_this), options.coordinates);
    _this.r = 0.25 * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize;
    _this.lineSize = 1;

    if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].mapType && _config__WEBPACK_IMPORTED_MODULE_1__["default"].mapType == 'roadnetwork') {
      _this.r = 2;
      _this.lineSize = 0.75;
    }

    _id++;
    return _this;
  }

  _createClass(Circle, [{
    key: "createGraphics",
    value: function createGraphics(attrs) {
      var self = this;

      var _graphics = new PIXI.Graphics();

      _graphics.lineStyle(this.lineSize, attrs.strokeStyle);

      _graphics.beginFill(attrs.fillStyle);

      _graphics.drawCircle(this.cx * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, this.cy * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, this.r);

      _graphics.endFill();

      _graphics.interactive = true;
      _graphics.buttonMode = true;
      _services_injector__WEBPACK_IMPORTED_MODULE_2__["default"].inject(this, ['controller', 'renderer']);

      _graphics.on("mouseover", function (e) {
        _graphics.tint = attrs.fillStyle;
      });

      _graphics.on("mouseout", function () {
        _graphics.tint = "0xFFFFFF";
      });

      self.nodesHidden = true;
      var toggleNodes = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
        var circles = _services_store__WEBPACK_IMPORTED_MODULE_3__["default"].where("Circle", {
          cx: self.cx,
          cy: self.cy
        });

        if (self.nodesHidden) {
          circles.forEach(function (circle) {
            circle.node.showUnPersistedPart();
          });
          self.line = Object(_utils_draw_line__WEBPACK_IMPORTED_MODULE_5__["default"])(self.controller, self.node, 0xF9D276);
          self.nodesHidden = false;
        } else {
          circles.forEach(function (circle) {
            circle.node.hideUnPersistedPart();
          });
          Object(_utils_remove_node__WEBPACK_IMPORTED_MODULE_6__["default"])(self.controller, self.line);
          self.nodesHidden = true;
        }
      });

      _graphics.on("click", function () {
        toggleNodes();
      }); // let texture = this.renderer.generateTexture(_graphics);
      // let circleSprite = new PIXI.Sprite(texture);


      return _graphics;
    }
  }, {
    key: "graphics",
    get: function get() {
      if (!this._graphics) {
        this._graphics = this.createGraphics(this.node.attrs);
      }

      return this._graphics;
    }
  }, {
    key: "center",
    get: function get() {
      return {
        x: _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize * this.cx,
        y: _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize * this.cy
      };
    }
  }, {
    key: "maxX",
    get: function get() {
      return this.cx;
    }
  }, {
    key: "maxY",
    get: function get() {
      return this.cy;
    }
  }]);

  return Circle;
}(_node_object__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Circle);

/***/ }),

/***/ "./js/models/Grid.js":
/*!***************************!*\
  !*** ./js/models/Grid.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _services_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/grid */ "./js/services/grid.js");
/* harmony import */ var _utils_node_resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/node-resize */ "./js/utils/node-resize.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




/** Class representing a grid map */

var Grid =
/*#__PURE__*/
function () {
  /**
  * Create a grid
  * @param {object} gridFile - Grid file uploaded by the user
  */
  function Grid(gridFile) {
    _classCallCheck(this, Grid);

    /**
    * _id is unique id of the grid that is set to 0.
    * @type  {number}
    * @private
    */
    this._id = 0;
    /**
    * gridFile is file of the grid that is set from the param.
    * @type  {object}
    * @public
    */

    this.gridFile = gridFile;
    /**
    * _gridData is cache and promise object that resolves to data contained in grid file.
    * @type {Promise}
    * @private
    */

    this._gridData = null;
    /**
    * _cells is cache and promise object that resolves to array of rows which array of cells in
    * each column that has information of position, width, height, color, border.
    * @type {Promise}
    * @private
    */

    this._cells = null;
    /**
    * width is width of the grid
    * @type {number}
    * @public
    */

    this.width = null;
    /**
    * height is height of the grid
    * @type {number}
    * @public
    */

    this.height = null;
  }
  /**
  * gridData returns _gridData if it is resolved. Else, sets it.
  * @type {object}
  * @public
  */


  _createClass(Grid, [{
    key: "gridData",
    get: function get() {
      if (!this._gridData) {
        var that = this;
        this._gridData = new Promise(function (resolve, reject) {
          try {
            _services_grid__WEBPACK_IMPORTED_MODULE_1__["default"].parser.parse(that.gridFile, function (data) {
              Object(_utils_node_resize__WEBPACK_IMPORTED_MODULE_2__["default"])('grid', Math.max(data.width, data.height));
              that.width = data.width * _config__WEBPACK_IMPORTED_MODULE_0__["default"].nodeSize;
              that.height = data.height * _config__WEBPACK_IMPORTED_MODULE_0__["default"].nodeSize;
              resolve(data);
            });
          } catch (e) {
            reject(e);
          }
        });
      }

      return this._gridData;
    }
    /**
    * cells returns _cells if it is resolved. Else, sets it.
    * @type {object}
    * @public
    */

  }, {
    key: "cells",
    get: function get() {
      if (!this._cells) {
        this._cells = this.gridData.then(function (gridData) {
          return new Promise(function (resolve, reject) {
            _services_grid__WEBPACK_IMPORTED_MODULE_1__["default"].builder.build(gridData, resolve);
          });
        });
      }

      return this._cells;
    }
  }]);

  return Grid;
}();

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./js/models/Line.js":
/*!***************************!*\
  !*** ./js/models/Line.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-object */ "./js/models/node-object.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _services_injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/injector */ "./js/services/injector.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _id = 1;

var Line =
/*#__PURE__*/
function (_NodeObject) {
  _inherits(Line, _NodeObject);

  function Line(options) {
    var _this;

    _classCallCheck(this, Line);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Line).call(this, options.nodeConf));
    Object.assign(_assertThisInitialized(_this), options.coordinates);
    return _this;
  }

  _createClass(Line, [{
    key: "createGraphics",
    value: function createGraphics(attrs) {
      if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].mapType == 'roadnetwork') {
        return null;
      }

      var _graphics = new PIXI.Graphics();

      _graphics.lineStyle(1, attrs.fillStyle);

      _graphics.beginFill(attrs.fillStyle); // _graphics.drawPolygon(this.x1*config.nodeSize, this.y1*config.nodeSize, this.x2*config.nodeSize, this.y2*config.nodeSize);


      _graphics.moveTo(this.x1 * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, this.y1 * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize);

      _graphics.lineTo(this.x2 * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, this.y2 * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize);

      _graphics.endFill();

      _graphics.hitArea = new PIXI.Polygon([this.x1 * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, this.y1 * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize - 1, this.x1 * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, this.y1 * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize + 1, this.x2 * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, this.y2 * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize - 1, this.x2 * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, this.y2 * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize + 1]);
      _graphics.interactive = true;
      _graphics.buttonMode = true;

      _graphics.on("mouseover", function (e) {
        _graphics.tint = attrs.fillStyle;
      });

      _graphics.on("mouseout", function () {
        _graphics.tint = "0xFFFFFF";
      });

      _services_injector__WEBPACK_IMPORTED_MODULE_2__["default"].inject(this, ['renderer']); // let texture = this.renderer.generateTexture(_graphics);
      // let lineSprite = new PIXI.Sprite(texture);

      return _graphics;
    }
  }, {
    key: "graphics",
    get: function get() {
      if (!this._graphics) {
        this._graphics = this.createGraphics(this.node.attrs);
      } // return null;


      return this._graphics;
    }
  }, {
    key: "maxX",
    get: function get() {
      return Math.max(this.x1, this.x2);
    }
  }, {
    key: "maxY",
    get: function get() {
      return Math.max(this.y1, this.y2);
    }
  }]);

  return Line;
}(_node_object__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Line);

/***/ }),

/***/ "./js/models/Map.js":
/*!**************************!*\
  !*** ./js/models/Map.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Class representing a map for the algorithm */
var Map =
/**
* Create a map for the search algorithm
* @param {object} mapType - grid/mesh
*/
function Map(options) {
  _classCallCheck(this, Map);

  /**
  * _id is unique id of the grid that is set to 0.
  * @type  {number}
  * @private
  */
  this._id = 0;
  /**
  * mapType is type of map
  * @type {string}
  * @public
  */

  this.mapType = options.fileType;
  /**
  * mapName is name of map
  * @type {string}
  * @public
  */

  this.mapName = options.fileName;
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./js/models/Mesh.js":
/*!***************************!*\
  !*** ./js/models/Mesh.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _services_mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/mesh */ "./js/services/mesh.js");
/* harmony import */ var _utils_node_resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/node-resize */ "./js/utils/node-resize.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Mesh =
/*#__PURE__*/
function () {
  function Mesh(meshFile) {
    _classCallCheck(this, Mesh);

    this._id = 0;
    this.meshFile = meshFile;
    this._meshData = null;
    this._meshPolygons = null;
  }

  _createClass(Mesh, [{
    key: "meshData",
    get: function get() {
      if (!this._meshData) {
        var that = this;
        this._meshData = new Promise(function (resolve, reject) {
          try {
            _services_mesh__WEBPACK_IMPORTED_MODULE_1__["default"].parser.parse(that.meshFile, function (data) {
              that.width = data.maxX * _config__WEBPACK_IMPORTED_MODULE_0__["default"].nodeSize;
              that.height = data.maxY * _config__WEBPACK_IMPORTED_MODULE_0__["default"].nodeSize;
              resolve(data);
            });
          } catch (e) {
            reject(e);
          }
        });
      }

      return this._meshData;
    }
  }, {
    key: "meshPolygons",
    get: function get() {
      if (!this._meshNodes) {
        this._meshPolygons = this.meshData.then(function (meshData) {
          return new Promise(function (resolve, reject) {
            _services_mesh__WEBPACK_IMPORTED_MODULE_1__["default"].builder.build(meshData, resolve);
          });
        });
      }

      return this._meshPolygons;
    }
  }]);

  return Mesh;
}();

/* harmony default export */ __webpack_exports__["default"] = (Mesh);

/***/ }),

/***/ "./js/models/Node.js":
/*!***************************!*\
  !*** ./js/models/Node.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/store */ "./js/services/store.js");
/* harmony import */ var _services_node_objects_processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/node-objects-processor */ "./js/services/node-objects-processor.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _utils_node_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/node-color */ "./js/utils/node-color.js");
/* harmony import */ var _utils_node_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/node-factory */ "./js/utils/node-factory.js");
/* harmony import */ var _services_injector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/injector */ "./js/services/injector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var _id = 1;
/** Class representing a node */

var Node =
/*#__PURE__*/
function () {
  /**
  * Create a node
  * @param {object} options - configuration to define the node
  */
  function Node(options) {
    _classCallCheck(this, Node);

    /**
    * _id is unique id of the node that is set to _id variable defined outside the class. _id is incremented upon creation of new node.
    * @type  {number}
    * @private
    */
    this._id = _id;
    /**
    * _linePoints is array of all the points from this node to the source node
    * @type {Array}
    * @private
    */

    this._linePoints = null; //assigning the options configuration to the node

    var variables = options.variables;
    delete options.variables;
    Object.assign(this, options);
    variables = {
      variables: this.setVariables(variables)
    };
    Object.assign(this, variables); //setting up node nodeObjects

    this.setNodeObjects(); //incrementing the _id for next object

    _id++;
  }

  _createClass(Node, [{
    key: "setVariables",
    value: function setVariables(variables) {
      return variables || this.generatingNode.variables;
    }
  }, {
    key: "setNodeObjects",
    value: function setNodeObjects() {
      var _this = this;

      this.nodeObjects = _services_node_objects_processor__WEBPACK_IMPORTED_MODULE_1__["default"].process(this);
      return;
      this.step.tracer.nodeStructure.map(function (obj) {
        var nodeConf = JSON.parse(JSON.stringify(obj));
        delete nodeConf.variables;
        nodeConf.node = _this;
        var coordinates = {};
        Object.keys(obj.variables).forEach(function (key) {
          if (key == "points") {
            coordinates['points'] = [];
            obj.variables['points'].forEach(function (pt) {
              coordinates['points'].push(variables[pt]);
            });
          } else {
            coordinates[key] = variables[obj.variables[key]];
          }
        });
        var options = {
          nodeConf: nodeConf,
          coordinates: coordinates
        };

        switch (obj.type) {
          case "rectangle":
            return _services_store__WEBPACK_IMPORTED_MODULE_0__["default"].createRecord('Rectangle', options);

          case "circle":
            return _services_store__WEBPACK_IMPORTED_MODULE_0__["default"].createRecord('Circle', options);

          case "line":
            return _services_store__WEBPACK_IMPORTED_MODULE_0__["default"].createRecord('Line', options);

          case "polygon":
            return _services_store__WEBPACK_IMPORTED_MODULE_0__["default"].createRecord('Polygon', options);
        }
      });
    }
  }, {
    key: "hideUnPersistedPart",
    value: function hideUnPersistedPart() {
      this.unPersistedObjects.forEach(function (nodeObject) {
        return nodeObject.hide();
      });
    }
  }, {
    key: "showUnPersistedPart",
    value: function showUnPersistedPart() {
      this.unPersistedObjects.forEach(function (nodeObject) {
        return nodeObject.show();
      });
    }
    /**
    * attrs is  attributes of node contains its coordinates, size, color, border. These are used to draw the node
    * @type {object}
    * @public
    */

  }, {
    key: "generatingNode",
    get: function get() {
      return _services_store__WEBPACK_IMPORTED_MODULE_0__["default"].where("Node", {
        type: "generating",
        id: this.id
      })[0];
    }
  }, {
    key: "unPersistedObjects",
    get: function get() {
      return this.nodeObjects.filter(function (nodeObject) {
        return !nodeObject.persisted;
      });
    }
  }, {
    key: "persistedObjects",
    get: function get() {
      return this.nodeObjects.filter(function (nodeObject) {
        return nodeObject.persisted;
      });
    }
  }, {
    key: "attrs",
    get: function get() {
      //getting attributes of node based on its type
      var nodeAttrs = _config__WEBPACK_IMPORTED_MODULE_2__["default"].nodeAttrs[_utils_node_color__WEBPACK_IMPORTED_MODULE_3__["default"][this.type]]; //if current node is source, disregard if it is being opened/updated/closed. retain its color

      if (this.id == this.step.tracer.source.node.id) {
        nodeAttrs = _config__WEBPACK_IMPORTED_MODULE_2__["default"].nodeAttrs['source'];
      } //if current node is destination, disregard if it is being opened/updated/closed. retain its color


      if (this.id == this.step.tracer.destination.node.id) {
        nodeAttrs = _config__WEBPACK_IMPORTED_MODULE_2__["default"].nodeAttrs['destination'];
      }

      return {
        fillStyle: nodeAttrs.fillColor,
        strokeStyle: _config__WEBPACK_IMPORTED_MODULE_2__["default"].borderColor,
        strokeWidth: _config__WEBPACK_IMPORTED_MODULE_2__["default"].borderWidth
      };
    }
    /**
    * graphics is PIXI.Graphics object that is a rectangle to drawn on canvas using nodeFactory.
    * @type {PIXI.Graphics}
    * @public
    */

  }, {
    key: "graphics",
    get: function get() {
      if (!this._graphics) {
        var container = new PIXI.Container();
        this.nodeObjects.forEach(function (nodeObject) {
          if (nodeObject.graphics) {
            container.addChild(nodeObject.graphics);
          }
        });
        this._graphics = container;
      }

      return this._graphics;
    }
  }, {
    key: "lineNodeObjects",
    get: function get() {
      return this.nodeObjects.filter(function (nodeObject) {
        return nodeObject.type == "line";
      });
    }
  }, {
    key: "maxX",
    get: function get() {
      return Math.max.apply(Math, this.nodeObjects.map(function (nodeObject) {
        return nodeObject.maxX;
      }));
    }
  }, {
    key: "maxY",
    get: function get() {
      return Math.max.apply(Math, this.nodeObjects.map(function (nodeObject) {
        return nodeObject.maxY;
      }));
    }
    /**
    * step is corresponding step object for this node in the algorithm.
    * @type {Step}
    * public
    */
    // get step(){
    //   return Store.data.Step[this.stepId];
    // }

    /**
    * parentNode is parent node
    * @type {Node}
    * public
    */

  }, {
    key: "parentNode",
    get: function get() {
      var _this2 = this;

      if (!this.pId) {
        return null;
      }

      var pNode = null;
      Object.values(_services_store__WEBPACK_IMPORTED_MODULE_0__["default"].data.Node).forEach(function (node) {
        if (node.id == _this2.pId) {
          pNode = node;
          return;
        }
      });
      return pNode;
    }
  }, {
    key: "pathNodeObject",
    get: function get() {
      return this.nodeObjects.find(function (nodeObject) {
        return nodeObject.drawPath;
      });
    }
    /**
    * center is ceter position of the current node.
    * @type {object}
    * @public
    */

  }, {
    key: "center",
    get: function get() {
      return this.pathNodeObject.center;
    }
    /**
    * linePoints returns cache of array of points from this node to the source node.
    * @type {Array}
    * @public
    */

  }, {
    key: "linePoints",
    get: function get() {
      if (!this._linePoints) {
        if (!this.parentNode) {
          return [this.center];
        }

        var points = this.parentNode.linePoints.slice();
        points.push(this.center);
        this._linePoints = points;
      }

      return this._linePoints;
    }
    /**
    * values is search specific values i.e. type, id, parent id, f, g and h values for that node.
    * @type {object}
    * @public
    */

  }, {
    key: "values",
    get: function get() {
      return {
        id: this.id,
        type: this.type,
        pId: this.pId,
        f: this.f,
        g: this.g,
        h: this.h
      };
    }
    /**
    * h value is calculated by adding f and g value
    * @type {number}
    * @public
    */

  }, {
    key: "h",
    get: function get() {
      return this.f + this.g;
    }
  }, {
    key: "text",
    get: function get() {
      if (!this._text) {
        if (this.type == "source" || this.type == "destination") {
          this._text = "".concat(this.type.toUpperCase(), " Node(id: ").concat(this.id, ", x: ").concat(this.variables.x, ", y: ").concat(this.variables.y, ")");
        } else {
          this._text = "".concat(this.type.toUpperCase(), " Node(id: ").concat(this.id, ", x: ").concat(this.variables.x, ", y: ").concat(this.variables.y, ", f: ").concat(this.f, ", g: ").concat(this.g, ", h: ").concat(this.h, ", pId: ").concat(this.pId, ")");
        }
      }

      return this._text;
    }
  }]);

  return Node;
}();

/* harmony default export */ __webpack_exports__["default"] = (Node);

/***/ }),

/***/ "./js/models/Polygon.js":
/*!******************************!*\
  !*** ./js/models/Polygon.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-object */ "./js/models/node-object.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _services_injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/injector */ "./js/services/injector.js");
/* harmony import */ var _services_floatbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/floatbox */ "./js/services/floatbox.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var _id = 1;

var Polygon =
/*#__PURE__*/
function (_NodeObject) {
  _inherits(Polygon, _NodeObject);

  function Polygon(options) {
    var _this;

    _classCallCheck(this, Polygon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Polygon).call(this, options.nodeConf));
    Object.assign(_assertThisInitialized(_this), options.coordinates);
    return _this;
  }

  _createClass(Polygon, [{
    key: "createGraphics",
    value: function createGraphics(attrs) {
      var self = this;

      var _graphics = new PIXI.Graphics();

      _graphics.lineStyle(1, attrs.fillStyle);

      _graphics.beginFill(attrs.fillStyle);

      _graphics.drawPolygon(this.points.map(function (pt) {
        return pt * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize;
      }));

      _graphics.endFill();

      _graphics.alpha = 0.5;
      _graphics.interactive = true;
      _graphics.buttonMode = true;
      _services_injector__WEBPACK_IMPORTED_MODULE_2__["default"].inject(this, ['controller', 'renderer']);

      _graphics.on("mouseover", function (e) {
        _graphics.tint = attrs.fillStyle;
        var position = {
          x: self.controller.x,
          y: self.controller.y
        };
        _services_floatbox__WEBPACK_IMPORTED_MODULE_3__["default"].execute(e, self.node.values, position);
      });

      _graphics.on("mouseout", function () {
        _graphics.tint = "0xFFFFFF";
      });

      var texture = this.renderer.generateTexture(_graphics);
      var polygonSprite = new PIXI.Sprite(texture);
      polygonSprite = _graphics;
      return polygonSprite;
    }
  }, {
    key: "graphics",
    get: function get() {
      if (!this._graphics) {
        this._graphics = this.createGraphics(this.node.attrs);
      } // return null;


      return this._graphics;
    }
  }, {
    key: "maxX",
    get: function get() {
      var xcoords = this.points.filter(function (a, i) {
        return i % 2 === 0;
      });
      return Math.max.apply(Math, _toConsumableArray(xcoords));
    }
  }, {
    key: "maxY",
    get: function get() {
      var ycoords = this.points.filter(function (a, i) {
        return i % 2 === 1;
      });
      return Math.max.apply(Math, _toConsumableArray(ycoords));
    }
  }]);

  return Polygon;
}(_node_object__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Polygon);

/***/ }),

/***/ "./js/models/Rectangle.js":
/*!********************************!*\
  !*** ./js/models/Rectangle.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-object */ "./js/models/node-object.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _services_injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/injector */ "./js/services/injector.js");
/* harmony import */ var _services_floatbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/floatbox */ "./js/services/floatbox.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var _id = 1;

var Rectangle =
/*#__PURE__*/
function (_NodeObject) {
  _inherits(Rectangle, _NodeObject);

  function Rectangle(options) {
    var _this;

    _classCallCheck(this, Rectangle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rectangle).call(this, options.nodeConf));
    _this._id = _id;
    Object.assign(_assertThisInitialized(_this), options.coordinates);
    _id++;
    return _this;
  }

  _createClass(Rectangle, [{
    key: "createGraphics",
    value: function createGraphics(attrs) {
      var self = this;

      var _graphics = new PIXI.Graphics();

      _graphics.lineStyle(1, attrs.strokeStyle);

      _graphics.beginFill(attrs.fillStyle);

      _graphics.drawRect(this.x * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, this.y * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize);

      _graphics.endFill();

      _graphics.interactive = true;
      _graphics.buttonMode = true;

      _graphics.on("mouseover", function (e) {
        _graphics.tint = attrs.fillStyle;
        var position = {
          x: self.controller.x,
          y: self.controller.y
        };
        _services_floatbox__WEBPACK_IMPORTED_MODULE_3__["default"].execute(e, self.node.values, position);
      });

      _graphics.on("mouseout", function () {
        _graphics.tint = "0xFFFFFF";
      });

      _services_injector__WEBPACK_IMPORTED_MODULE_2__["default"].inject(this, ['controller', 'renderer']);
      return _graphics;
    }
  }, {
    key: "graphics",
    get: function get() {
      if (!this._graphics) {
        this._graphics = this.createGraphics(this.node.attrs);
      }

      return this._graphics;
    }
  }, {
    key: "center",
    get: function get() {
      return {
        x: _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize * (this.x + 0.5),
        y: _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize * (this.y + 0.5)
      };
    }
  }, {
    key: "maxX",
    get: function get() {
      return this.x;
    }
  }, {
    key: "maxY",
    get: function get() {
      return this.y;
    }
  }]);

  return Rectangle;
}(_node_object__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Rectangle);

/***/ }),

/***/ "./js/models/Step.js":
/*!***************************!*\
  !*** ./js/models/Step.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/store */ "./js/services/store.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./js/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var _id = 1;
/** Class representing a step of the algorithm */

var Step =
/*#__PURE__*/
function () {
  /**
  * Create a step
  * @param {object} options - configuration to define the step
  */
  function Step(options) {
    _classCallCheck(this, Step);

    /**
    * _id is unique id of the step that is set to _id variable defined outside the class. _id is incremented upon creation of new step.
    * @type  {number}
    * @private
    */
    this._id = _id;
    /**
    * type is type of the step i.e. source/destination/generating/updating/expanding/closing
    * @type {string}
    * @public
    */

    this.type = options.type;
    this.tracer = options.tracer; //adding step id in the options to refer in the node.

    options['stepId'] = _id;
    options['step'] = this;
    /**
    * node is Node object created corresponding to this step.
    * @type {Node}
    * @public
    */

    this.node = _services_store__WEBPACK_IMPORTED_MODULE_0__["default"].createRecord('Node', options); //incrementing the _id for next object

    _id++;
  }
  /**
  * nodes is cache of array of all the nodes from the starting step of the algorithm till the current step
  * @type {Array}
  * @public
  */


  _createClass(Step, [{
    key: "nodes",
    get: function get() {
      if (!this._nodes) {
        var prevNodes = [];

        if (this.previousStep) {
          prevNodes = this.previousStep.nodes;
        }

        prevNodes.push(this.node);
        this._nodes = prevNodes;
      }

      return this._nodes;
    }
    /**
    * closedNodes is cache of array of all the nodes that have been closed from the starting step of the algorithm till the current step
    * @type {Array}
    * @public
    */

  }, {
    key: "closedNodes",
    get: function get() {
      if (!this._closedNodes) {
        this._closedNodes = this.nodes.filter(function (node) {
          return node.type == "closing";
        });
      }

      return this._closedNodes;
    }
    /**
    * openedNodes is cache of array of all the nodes that are opened from the starting step of the algorithm till the current step
    * @type {Array}
    * @public
    */

  }, {
    key: "openedNodes",
    get: function get() {
      var _this = this;

      if (!this._openedNodes) {
        this._openedNodes = this.nodes.filter(function (node) {
          return !_this.closedNodes.includes(node);
        }).filter(function (node) {
          return !_this.frontierNodes.includes(node);
        });
      }

      return this._openedNodes;
    }
    /**
    * frontierNodes is cache of array of all the nodes that are frontier(i.e. generating/updating) from the starting step of the algorithm till the current step
    * @type {Array}
    * @public
    */

  }, {
    key: "frontierNodes",
    get: function get() {
      if (!this._frontierNodes) {
        if (this.isFrontier) {
          var cIndex = this.nodes.indexOf(this.currentNode);
          this._frontierNodes = this.nodes.slice(cIndex + 1);
        }

        this._frontierNodes = [];
      }

      return this._frontierNodes;
    }
    /**
    * isFrontier tells if the current step creates the node that is generating or updating
    * @type {boolean}
    * @public
    */

  }, {
    key: "isFrontier",
    get: function get() {
      return ["generating", "updating"].indexOf(this.type) != -1;
    }
    /**
    * currentNode is the node that created this node in its expansion.
    * @type {Node}
    * @public
    */

  }, {
    key: "currentNode",
    get: function get() {
      if (!this._currentNode) {
        this._currentNode = this.nodes.slice().reverse().find(function (node) {
          return node.type == "expanding";
        });
      }

      return this._currentNode;
    }
    /**
    * isSource tells if this step suggests the source node.
    * @type {boolean}
    * @public
    */

  }, {
    key: "isSource",
    get: function get() {
      return this.type == "source";
    }
    /**
    * isDestination tells if this step suggests the destination node.
    * @type {boolean}
    * @public
    */

  }, {
    key: "isDestination",
    get: function get() {
      return this.type == "destination";
    }
    /**
    * isFirstStep tells if this is the first step of the algorithm
    * @type {boolean}
    * @public
    */

  }, {
    key: "isFirstStep",
    get: function get() {
      return this._id == 1;
    }
    /**
    * previousStep returns the step previous to this step
    * @type {Step}
    * @public
    */

  }, {
    key: "previousStep",
    get: function get() {
      if (!this._previousStep) {
        if (!this.isFirstStep) {
          this._previousStep = _services_store__WEBPACK_IMPORTED_MODULE_0__["default"].data.Step[this._id - 1];
        }

        this._previousStep = null;
      }

      return this._previousStep;
    }
    /**
    * changeColor suggests if the color of the node in the current step can be changed or not. If the node is frontier and is not source/destination. The, we can change its color.
    * @type {boolean}
    * @public
    */

  }, {
    key: "changeColor",
    get: function get() {
      return this.isFrontier && !this.isSource && !this.isDestination;
    }
    /**
    * text is text corresponding to this step of the algorithm. It contains node id, coordinates, parent, f, g and h value.
    */

  }, {
    key: "text",
    get: function get() {
      return this.node.text;
    }
  }]);

  return Step;
}();

/* harmony default export */ __webpack_exports__["default"] = (Step);

/***/ }),

/***/ "./js/models/Tracer.js":
/*!*****************************!*\
  !*** ./js/models/Tracer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/store */ "./js/services/store.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _utils_tracer_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/tracer-parser */ "./js/utils/tracer-parser.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environment */ "./js/environment.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






/** Class representing a tracer of the algorithm */

var Tracer =
/*#__PURE__*/
function () {
  /**
  * Create a tracer for the search algorithm
  * @param {object} debugFile - Algorithm Debug file uploaded by the user
  */
  function Tracer(debugFile) {
    _classCallCheck(this, Tracer);

    /**
    * _id is unique id of the grid that is set to 0.
    * @type  {number}
    * @private
    */
    this._id = 0;
    /**
    * debugFile is file of the algorithm that is set from the param.
    * @type  {object}
    * @public
    */

    this.debugFile = debugFile;
    /**
    * _debugJson is cache and promise object that resolves to data contained in debug file which is in json format.
    * @type {object}
    * @private
    */

    this._debugJson = null;
    /**
    * _steps is cache and promise object of array of Step object of the algorithm
    * @type {Promise}
    * @private
    */

    this._steps = null;
    /**
    * maxX is maximum value of x explored by the algorithm. Default value is step to -1.
    * @type {number}
    * @public
    */

    this.maxX = -1;
    /**
    * maxY is maximum value of y explored by the algorithm. Default value is step to -1.
    * @type {number}
    * @public
    */

    this.maxY = -1;
  }
  /**
  * debugJson returns _debugJson if it is resolved. Else, sets it.
  * @type {object}
  * @public
  */


  _createClass(Tracer, [{
    key: "checkMax",
    value: function checkMax(node) {
      if (node.maxX > this.maxX) {
        this.maxX = node.maxX;
      }

      if (node.maxY > this.maxY) {
        this.maxY = node.maxY;
      }
    }
    /**
    * width returns width required for visualising the tracer.
    * @type {number}
    * @public
    */

  }, {
    key: "debugJson",
    get: function get() {
      if (!this._debugJson) {
        var that = this;
        this._debugJson = new Promise(function (resolve, reject) {
          try {
            Object(_utils_tracer_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(that.debugFile, resolve);
          } catch (e) {
            reject(e);
          }
        });
      }

      return this._debugJson;
    }
    /**
    * steps returns _steps if it is resolved. Else, sets it. This also sets maxX, maxY, source and destination of the tracer.
    * @type {object}
    * @public
    */

  }, {
    key: "steps",
    get: function get() {
      var _this = this;

      if (!this._steps) {
        this._steps = this.debugJson.then(function (json) {
          _this.nodeStructure = json.nodeStructure;
          var eventsList = json.eventList;
          eventsList.forEach(function (event) {
            event.tracer = _this;
            var step = _services_store__WEBPACK_IMPORTED_MODULE_0__["default"].createRecord('Step', event);

            _this.checkMax(step.node);

            if (event.type == "source") {
              _this.source = step;
            }

            if (event.type == "destination") {
              _this.destination = step;
            }
          });
          return _services_store__WEBPACK_IMPORTED_MODULE_0__["default"].data.Step;
        });
      }

      return this._steps;
    }
  }, {
    key: "width",
    get: function get() {
      return this.maxX * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize;
    }
    /**
    * height returns height required for visualising the tracer.
    * @type {number}
    * @public
    */

  }, {
    key: "height",
    get: function get() {
      return this.maxY * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize;
    }
  }]);

  return Tracer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tracer);

/***/ }),

/***/ "./js/models/index.js":
/*!****************************!*\
  !*** ./js/models/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tracer */ "./js/models/Tracer.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid */ "./js/models/Grid.js");
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map */ "./js/models/Map.js");
/* harmony import */ var _Mesh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Mesh */ "./js/models/Mesh.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Node */ "./js/models/Node.js");
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Step */ "./js/models/Step.js");
/* harmony import */ var _node_object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node-object */ "./js/models/node-object.js");
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Circle */ "./js/models/Circle.js");
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Rectangle */ "./js/models/Rectangle.js");
/* harmony import */ var _road_network__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./road-network */ "./js/models/road-network.js");
/* harmony import */ var _road_co__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./road-co */ "./js/models/road-co.js");
/* harmony import */ var _road_gr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./road-gr */ "./js/models/road-gr.js");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Line */ "./js/models/Line.js");
/* harmony import */ var _Polygon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Polygon */ "./js/models/Polygon.js");















var models = function models() {
  return [_Tracer__WEBPACK_IMPORTED_MODULE_0__["default"], _Grid__WEBPACK_IMPORTED_MODULE_1__["default"], _Map__WEBPACK_IMPORTED_MODULE_2__["default"], _Mesh__WEBPACK_IMPORTED_MODULE_3__["default"], _Node__WEBPACK_IMPORTED_MODULE_4__["default"], _Step__WEBPACK_IMPORTED_MODULE_5__["default"], _node_object__WEBPACK_IMPORTED_MODULE_6__["default"], _Circle__WEBPACK_IMPORTED_MODULE_7__["default"], _Rectangle__WEBPACK_IMPORTED_MODULE_8__["default"], _road_network__WEBPACK_IMPORTED_MODULE_9__["default"], _road_co__WEBPACK_IMPORTED_MODULE_10__["default"], _road_gr__WEBPACK_IMPORTED_MODULE_11__["default"], _Line__WEBPACK_IMPORTED_MODULE_12__["default"], _Polygon__WEBPACK_IMPORTED_MODULE_13__["default"]];
};

/* harmony default export */ __webpack_exports__["default"] = (models);

/***/ }),

/***/ "./js/models/node-object.js":
/*!**********************************!*\
  !*** ./js/models/node-object.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/store */ "./js/services/store.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _utils_node_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/node-color */ "./js/utils/node-color.js");
/* harmony import */ var _utils_node_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/node-factory */ "./js/utils/node-factory.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var _id = 1;

var NodeObject =
/*#__PURE__*/
function () {
  function NodeObject(options) {
    _classCallCheck(this, NodeObject);

    Object.assign(this, options);
  }

  _createClass(NodeObject, [{
    key: "hide",
    value: function hide() {
      this.graphics.visible = false;
    }
  }, {
    key: "show",
    value: function show() {
      this.graphics.visible = true;
    } // get node(){
    //   return Store.data.Node[this.nodeId];
    // }

  }]);

  return NodeObject;
}();

/* harmony default export */ __webpack_exports__["default"] = (NodeObject);

/***/ }),

/***/ "./js/models/road-co.js":
/*!******************************!*\
  !*** ./js/models/road-co.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _services_road_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/road-network */ "./js/services/road-network.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/** Class representing a road coordinates */

var RoadCo =
/*#__PURE__*/
function () {
  /**
  * Create roadCoordinates
  * @param {object} file - roadCoordinates file uploaded by the user
  */
  function RoadCo(_ref) {
    var roadNetwork = _ref.roadNetwork,
        file = _ref.file;

    _classCallCheck(this, RoadCo);

    /**
    * _id is unique id of the road coordinates that is set to 0.
    * @type  {number}
    * @private
    */
    this._id = 0;
    /**
    * roadNetwork is roadNetwork map.
    * @type  {object}
    * @public
    */

    this.roadNetwork = roadNetwork;
    /**
    * file is file of the coordinates that is set from the param.
    * @type  {object}
    * @public
    */

    this.file = file;
    /**
    * _coData is cache and promise object that resolves to data contained in co file.
    * @type {Promise}
    * @private
    */

    this._coData = null;
  }
  /**
  * coData returns _coData if it is resolved. Else, sets it.
  * @type {object}
  * @public
  */


  _createClass(RoadCo, [{
    key: "coData",
    get: function get() {
      if (!this._coData) {
        var that = this;
        this._coData = new Promise(function (resolve, reject) {
          try {
            _services_road_network__WEBPACK_IMPORTED_MODULE_1__["default"].parser.coParse(that.file, function (data) {
              that.roadNetwork.maxX = data.maxX;
              that.roadNetwork.maxY = data.maxY;
              that.roadNetwork.minX = data.minX;
              that.roadNetwork.minY = data.minY;
              that.roadNetwork.width = data.maxX * _config__WEBPACK_IMPORTED_MODULE_0__["default"].roadNetworkScale;
              that.roadNetwork.height = data.maxY * _config__WEBPACK_IMPORTED_MODULE_0__["default"].roadNetworkScale;
              resolve(data);
            });
          } catch (e) {
            reject(e);
          }
        });
      }

      return this._coData;
    }
  }]);

  return RoadCo;
}();

/* harmony default export */ __webpack_exports__["default"] = (RoadCo);

/***/ }),

/***/ "./js/models/road-gr.js":
/*!******************************!*\
  !*** ./js/models/road-gr.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _services_road_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/road-network */ "./js/services/road-network.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/** Class representing a road graph */

var RoadGr =
/*#__PURE__*/
function () {
  /**
  * Create roadGraph
  * @param {object} file - roadGraph file uploaded by the user
  */
  function RoadGr(_ref) {
    var roadNetwork = _ref.roadNetwork,
        file = _ref.file;

    _classCallCheck(this, RoadGr);

    /**
    * _id is unique id of the road graph that is set to 0.
    * @type  {number}
    * @private
    */
    this._id = 0;
    /**
    * roadNetwork is roadNetwork map.
    * @type  {object}
    * @public
    */

    this.roadNetwork = roadNetwork;
    /**
    * file is file of the road graph that is set from the param.
    * @type  {object}
    * @public
    */

    this.file = file;
    /**
    * _grData is cache and promise object that resolves to data contained in gr file.
    * @type {Promise}
    * @private
    */

    this._grData = null;
  }
  /**
  * grData returns _grData if it is resolved. Else, sets it.
  * @type {object}
  * @public
  */


  _createClass(RoadGr, [{
    key: "grData",
    get: function get() {
      if (!this._grData) {
        var that = this;
        this._grData = new Promise(function (resolve, reject) {
          try {
            _services_road_network__WEBPACK_IMPORTED_MODULE_1__["default"].parser.grParse(that.file, function (data) {
              resolve(data);
            });
          } catch (e) {
            reject(e);
          }
        });
      }

      return this._grData;
    }
  }]);

  return RoadGr;
}();

/* harmony default export */ __webpack_exports__["default"] = (RoadGr);

/***/ }),

/***/ "./js/models/road-network.js":
/*!***********************************!*\
  !*** ./js/models/road-network.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/store */ "./js/services/store.js");
/* harmony import */ var _utils_node_resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/node-resize */ "./js/utils/node-resize.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




/** Class representing a road network */

var RoadNetwork =
/*#__PURE__*/
function () {
  /**
  * Create a grid
  * @param {object} files - RoadNetwork files(co and gr) uploaded by the user
  */
  function RoadNetwork(_ref) {
    var coFile = _ref.coFile,
        grFile = _ref.grFile;

    _classCallCheck(this, RoadNetwork);

    /**
    * _id is unique id of the road network that is set to 0.
    * @type  {number}
    * @private
    */
    this._id = 0;
    /**
    * coFile is file of the coordinates that is set from the param.
    * @type  {object}
    * @public
    */

    this.coFile = coFile;
    /**
    * grFile is file of the graph that is set from the param.
    * @type  {object}
    * @public
    */

    this.grFile = grFile;
    this.setupMap();
  }

  _createClass(RoadNetwork, [{
    key: "setupMap",
    value: function setupMap() {
      Object(_utils_node_resize__WEBPACK_IMPORTED_MODULE_2__["default"])('roadnetwork');
      this.roadCoordinates = _services_store__WEBPACK_IMPORTED_MODULE_1__["default"].createRecord("RoadCo", {
        roadNetwork: this,
        file: this.coFile
      });
      this.roadGraph = _services_store__WEBPACK_IMPORTED_MODULE_1__["default"].createRecord("RoadGr", {
        roadNetwork: this,
        file: this.grFile
      });
    }
  }]);

  return RoadNetwork;
}();

/* harmony default export */ __webpack_exports__["default"] = (RoadNetwork);

/***/ }),

/***/ "./js/services/error-notifier.js":
/*!***************************************!*\
  !*** ./js/services/error-notifier.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var errorNotifier = function errorNotifier(error) {
  console.log(error);
};

/* harmony default export */ __webpack_exports__["default"] = (errorNotifier);

/***/ }),

/***/ "./js/services/floatbox.js":
/*!*********************************!*\
  !*** ./js/services/floatbox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! javascript-state-machine */ "./node_modules/javascript-state-machine/lib/state-machine.js");
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/debounce */ "./js/utils/debounce.js");



/** @module services/floatbox
* This service is responsible for showing node information on mouse hover. It is a StateMachine with 3 states: none, hidden and shown. Init transition changes state from none to hidden. Show transition changes state from hidden to shown. Hide transition changes state from shown to hidden.
*/

var FloatboxService = new javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default.a({
  transitions: [{
    name: 'init',
    from: 'none',
    to: 'hidden'
  }, {
    name: 'show',
    from: 'hidden',
    to: 'shown'
  }, {
    name: 'hide',
    from: 'shown',
    to: 'hidden'
  }],
  data: {
    values: null
  },
  methods: {
    /**
    * @function onInit
    * This lifecycle function is called when this service is initiated. It creates menu div element and appends it to the body. It also sets show and hide function for the div.
    */
    onInit: function onInit() {
      var view = document.createElement('div');
      view.id = 'context-menu';
      view.style.display = 'none';
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').append(view);
      this.execute = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_2__["default"])(this.showMenu);
      this.bindHide();
    },

    /**
    * @function onHide
    * This lifecycle function hides the context menu
    */
    onHide: function onHide() {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()("#context-menu").hide();
    },

    /**
    * @function onShow
    * This lifecycle function shows the context menu
    */
    onShow: function onShow(transition, event, values, position) {
      this.values = values;
      jquery__WEBPACK_IMPORTED_MODULE_1___default()("#context-menu").html(this.htmlStr());
      jquery__WEBPACK_IMPORTED_MODULE_1___default()("#context-menu").css("left", position.x);
      jquery__WEBPACK_IMPORTED_MODULE_1___default()("#context-menu").css("top", position.y);
      jquery__WEBPACK_IMPORTED_MODULE_1___default()("#context-menu").show();
    },

    /**
    * @function bindHide
    * This function hides the menu when the mouse is clicked outside the menu and when the state is hidden.
    */
    bindHide: function bindHide() {
      var _this = this;

      jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on("click", function () {
        if (_this.state != "hidden") {
          _this.hide();
        }
      });
    },

    /**
    * @function showMenu
    * This function hides previous menu(if any). Loads the menu witht he new information and shows it.
    */
    showMenu: function showMenu(event, values, position) {
      if (this.state != "hidden") {
        this.hide();
      }

      this.show(event, values, position);
    },

    /**
    * @function htmlStr
    * This function returns ul element with latest values loaded.
    */
    htmlStr: function htmlStr() {
      return "\n          <ul id='node-details'>\n            <li>id: ".concat(this.values.id, "</li>\n            <li>type: ").concat(this.values.type, "</li>\n            <li>pId: ").concat(this.values.pId, "</li>\n            <li>f: ").concat(this.values.f, "</li>\n            <li>g: ").concat(this.values.g, "</li>\n            <li>h: ").concat(this.values.h, "</li>\n          </ul>\n        ");
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (FloatboxService);

/***/ }),

/***/ "./js/services/frontier.js":
/*!*********************************!*\
  !*** ./js/services/frontier.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller */ "./js/controller.js");
/* harmony import */ var _utils_insert_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/insert-node */ "./js/utils/insert-node.js");
/* harmony import */ var _utils_remove_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/remove-node */ "./js/utils/remove-node.js");




var FrontierService = {
  init: function init(context) {
    this.context = context; //history => This is array of all the frontier nodes at each step of the algorithm

    this.history = []; //current => This is list of graphics object that are currently rendered on the screen.

    this.current = [];
  },

  get currentId() {
    return this.context.currentId;
  },

  /**
  * @function add
  * This function checks if the node can be frontier. If so, it adds it changes it creates a new node with frontier color and node attributes and renders it on the screen. Additionally, it adds it to the current and history as well.
  * @param {Node} node
  */
  add: function add(node) {
    if (node.step.changeColor) {
      var attrs = node.attrs;
      attrs['fillStyle'] = _config__WEBPACK_IMPORTED_MODULE_0__["default"].nodeAttrs['frontier'].fillColor;
      var graphicsContainer = new PIXI.Container();
      node.nodeObjects.forEach(function (nodeObject) {
        var graphics = nodeObject.createGraphics(attrs);

        if (graphics) {
          graphicsContainer.addChild(graphics);
        }
      });
      Object(_utils_insert_node__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context, graphicsContainer);
      this.current.push(graphicsContainer);
    }

    this.history[this.currentId] = this.current.slice();
  },

  /**
  * @function clearCurrent
  * This function remove all the current from the screen, current and history.
  */
  clearCurrent: function clearCurrent() {
    this.clean();
    this.current = [];
    this.history[this.currentId] = [];
  },
  clean: function clean() {
    var _this = this;

    this.current.forEach(function (graphicsContainer) {
      Object(_utils_remove_node__WEBPACK_IMPORTED_MODULE_3__["default"])(_this.context, graphicsContainer);
    });
  },
  clearFuture: function clearFuture() {
    this.history.length = this.currentId;
  },
  reset: function reset() {
    this.current = [];
    this.history = [];
  },
  retraceHistory: function retraceHistory(id) {
    var _this2 = this;

    this.current = this.history[id];
    this.current.forEach(function (graphicsContainer) {
      Object(_utils_insert_node__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2.context, graphicsContainer);
    });
  },
  stepBackward: function stepBackward() {
    var _this3 = this;

    var frontiers = this.history.pop();
    var prevFrontiers = this.history[this.currentId - 1];
    this.current = prevFrontiers;

    if (frontiers.length) {
      var difference = frontiers.filter(function (x) {
        return !prevFrontiers.includes(x);
      });
      difference.forEach(function (graphicsContainer) {
        Object(_utils_remove_node__WEBPACK_IMPORTED_MODULE_3__["default"])(_this3.context, graphicsContainer);
      });
    } else if (prevFrontiers.length) {
      prevFrontiers.forEach(function (graphicsContainer) {
        Object(_utils_insert_node__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3.context, graphicsContainer);
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FrontierService);

/***/ }),

/***/ "./js/services/grid.js":
/*!*****************************!*\
  !*** ./js/services/grid.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./js/services/store.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environment */ "./js/environment.js");
/* harmony import */ var _error_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-notifier */ "./js/services/error-notifier.js");
/* harmony import */ var _utils_node_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/node-factory */ "./js/utils/node-factory.js");
/* harmony import */ var _utils_insert_node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/insert-node */ "./js/utils/insert-node.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controller */ "./js/controller.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);








/** @module services/grid
* This service is responsible for: parsing grid file, building grid cells and drawing grid on canvas.
*/

/* harmony default export */ __webpack_exports__["default"] = ({
  renderMap: function renderMap() {
    var grid = _store__WEBPACK_IMPORTED_MODULE_0__["default"].find("Grid");
    var map = _store__WEBPACK_IMPORTED_MODULE_0__["default"].find("Map");
    grid.gridData.then(function (gridData) {
      _controller__WEBPACK_IMPORTED_MODULE_6__["default"].setupRenderer();
      var mapSprite = new PIXI.Sprite.from("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].clientAddr, "/maps/images/").concat(map.mapName, ".png"));
      mapSprite.width = gridData.width * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize;
      mapSprite.height = gridData.height * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize;
      Object(_utils_insert_node__WEBPACK_IMPORTED_MODULE_5__["default"])(_controller__WEBPACK_IMPORTED_MODULE_6__["default"], mapSprite);
    });
  },
  checkMap: function checkMap() {
    var map = _store__WEBPACK_IMPORTED_MODULE_0__["default"].find("Map");
    var img = new Image();
    var self = this;

    img.onerror = function () {
      //send request to server
      self.sendToServer();
    };

    img.onload = function () {
      //load map from image directly
      self.renderMap();
      img = null;
    };

    img.src = "".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].clientAddr, "/maps/images/").concat(map.mapName, ".png");
  },
  sendToServer: function sendToServer() {
    var _this = this;

    var grid = _store__WEBPACK_IMPORTED_MODULE_0__["default"].find("Grid");
    var map = _store__WEBPACK_IMPORTED_MODULE_0__["default"].find("Map");
    grid.gridData.then(function (gridData) {
      fetch(_config__WEBPACK_IMPORTED_MODULE_1__["default"].processGridUrl, {
        method: "POST",
        body: JSON.stringify({
          width: gridData.width,
          height: gridData.height,
          gridStr: gridData.gridStr,
          fileName: map.mapName
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        if (data.done) {
          _this.renderMap();
        }
      });
    });
  },

  /**
  * Parser parses the grid map file by extracting height, width and structure of map and passing this into callback.
  * @public
  */
  parser: {
    parse: function parse(file, callback) {
      var gridReader = new FileReader();
      gridReader.addEventListener("load", function (event) {
        //TODO: Take only first 2 lines and leave the rest as such.
        var textFile = event.target;
        var data = textFile.result.split(/\n|\r\n/);
        data.shift();
        var height = Number(data.shift().split(' ').pop());
        var width = Number(data.shift().split(' ').pop());
        data.shift();
        var gridStr = data.reduce(function (f, e) {
          return f + e;
        }, ''); // console.log("gridData", width, height, gridStr);

        var gridData = {
          height: height,
          width: width,
          gridStr: gridStr
        };
        callback(gridData);
      }); //Read the text file

      gridReader.readAsText(file);
    }
  },

  /**
  * Builder takes the gridData and builds all the cells of the grid map. Each cell has property of coordinates, dimensions, color, border.
  * @public
  */
  builder: {
    cells: [],
    width: null,
    height: null,
    gridStr: null,
    build: function build(gridData, callback) {
      var _this2 = this;

      //Is object creation required?
      //Is Promises required?
      //Draw white background. Draw only black obstacles later.
      this.gridStr = gridData.gridStr;
      this.width = gridData.width;
      this.height = gridData.height;
      var tasks = [];

      for (var i = 0; i < this.width; ++i) {
        tasks.push(this.createRowTask(i));
      }

      Promise.all(tasks).then(function () {
        callback(_this2.cells.flat());
      });
    },
    createRowTask: function createRowTask(rowId) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.cells[rowId] = [];

        for (var colId = 0; colId < _this3.width; ++colId) {
          var x = colId * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize;
          var y = rowId * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize;
          var stringIndex = rowId * _this3.width + colId;
          var fillColor = _config__WEBPACK_IMPORTED_MODULE_1__["default"].pathColor;

          if (_this3.gridStr[stringIndex] == '@') {
            fillColor = _config__WEBPACK_IMPORTED_MODULE_1__["default"].wallColor;
          }

          var attrs = {
            x: x,
            y: y,
            width: _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize,
            height: _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize,
            fillStyle: fillColor,
            strokeStyle: _config__WEBPACK_IMPORTED_MODULE_1__["default"].borderColor
          };

          _this3.cells[rowId].push(attrs);
        }

        resolve();
      });
    }
  },

  /**
  * Drawer draws the map on the canvas. It takes the cells from the Grid Model created by the builder and constructs PIXI.Graphics object and finally renders on the canvas.
  * @public
  */
  drawer: {
    draw: function draw() {
      var mapContainer = new PIXI.Container();
      var grid = _store__WEBPACK_IMPORTED_MODULE_0__["default"].find('Grid');
      grid.cells.then(function (cells) {
        _controller__WEBPACK_IMPORTED_MODULE_6__["default"].setupRenderer();
        grid.gridData.then(function (gridData) {
          cells.forEach(function (cell) {
            cell.isMap = true;
            var cellElement = Object(_utils_node_factory__WEBPACK_IMPORTED_MODULE_4__["default"])(cell);
            mapContainer.addChild(cellElement);
          });
          Object(_utils_insert_node__WEBPACK_IMPORTED_MODULE_5__["default"])(_controller__WEBPACK_IMPORTED_MODULE_6__["default"], mapContainer);
        });
      }, function (err) {
        Object(_error_notifier__WEBPACK_IMPORTED_MODULE_3__["default"])(err);
      });
    }
  },
  process: function process() {
    this.checkMap();
  },
  processMe: function processMe() {
    var grid = _store__WEBPACK_IMPORTED_MODULE_0__["default"].find('Grid');
    grid.gridData.then(function (gridData) {
      var height = gridData.height;
      var width = gridData.width;
      var gridStr = gridData.gridStr;
      _controller__WEBPACK_IMPORTED_MODULE_6__["default"].setupRenderer();
      var canvas = document.createElement("canvas"); // canvas.id = "map-canvas";
      // let screen = document.getElementsByClassName("screen")[0];
      // screen.appendChild(canvas);
      // let canvas = document.getElementById("map-canvas");

      var webglCanvas = document.getElementById("canvas"); // canvas.style.position = 'absolute';

      canvas.width = width * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize;
      canvas.height = height * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize; // canvas.style.top = 0;
      // canvas.style.left = 0;

      var ctx = canvas.getContext('2d');
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";

      for (var y = 0; y <= height; y++) {
        for (var x = 0; x <= width; x++) {
          var stringIndex = y * width + x;

          if (gridStr[stringIndex] == '@') {
            ctx.fillRect(x * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, y * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize);
          }
        }
      }

      ctx.fillStyle = "green";

      for (var y = 0; y <= height; y++) {
        for (var x = 0; x <= width; x++) {
          var stringIndex = y * width + x;

          if (gridStr[stringIndex] == 'T') {
            ctx.fillRect(x * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, y * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize);
          }
        }
      }

      for (var i = 0; i <= width; i++) {
        var line = new PIXI.Graphics();
        var x1 = void 0,
            x2 = void 0,
            y1 = void 0,
            y2 = void 0;
        x1 = i * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize;
        x2 = i * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize;
        y1 = 0;
        y2 = height * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize;

        if (i == 0) {
          x1 += 1;
          x2 += 1;
        }

        if (i == width) {
          x1 -= 1;
          x2 -= 1;
        }

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      for (var i = 0; i <= height; i++) {
        var _line = new PIXI.Graphics();

        var _x = void 0,
            _x2 = void 0,
            _y = void 0,
            _y2 = void 0;

        _y = i * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize;
        _y2 = i * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize;
        _x = 0;
        _x2 = width * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize;

        if (i == 0) {
          _y += 1;
          _y2 += 1;
        }

        if (i == height) {
          _y -= 1;
          _y2 -= 1;
        }

        ctx.beginPath();
        ctx.moveTo(_x, _y);
        ctx.lineTo(_x2, _y2);
        ctx.stroke();
      }

      var data = canvas.toDataURL();
      var img = new Image();
      img.src = data;

      img.onload = function () {
        var baseTexture = new PIXI.BaseTexture(img);
        var texture = new PIXI.Texture(baseTexture);
        var mapSprite = PIXI.Sprite.from(texture); // mapSprite.width = 800;
        // mapSprite.height = 500;

        Object(_utils_insert_node__WEBPACK_IMPORTED_MODULE_5__["default"])(_controller__WEBPACK_IMPORTED_MODULE_6__["default"], mapSprite); // document.body.appendChild(img);
      }; // let mapSprite = PIXI.Sprite.from("maps/tfs.png");
      // insertNode(Controller, mapSprite);

    });
  }
});

/***/ }),

/***/ "./js/services/history.js":
/*!********************************!*\
  !*** ./js/services/history.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller */ "./js/controller.js");
/* harmony import */ var _utils_insert_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/insert-node */ "./js/utils/insert-node.js");
/* harmony import */ var _utils_remove_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/remove-node */ "./js/utils/remove-node.js");




var HistoryService = {
  init: function init(context) {
    this.context = context; //history => History is array of all the nodes at each step of the algorithm

    this.history = [];
  },

  get currentId() {
    return this.context.currentId;
  },

  /**
  * @function updateNodes
  * This function adds the node graphicsContainer as the current history node identified by the current id.
  */
  update: function update() {
    //hide non persisted previous step node
    if (this.currentId > 1) {
      var previousStep = this.context.steps[this.currentId - 1];
      previousStep.node.hideUnPersistedPart();
    }

    var step = this.context.steps[this.currentId];
    var node = step.node;
    var graphicsContainer = node.graphics;
    Object(_utils_insert_node__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context, graphicsContainer);
    this.history[this.currentId] = node.graphics;
    return step;
  },

  /**
  * @function updateId
  * This function increments the running currentId
  */
  updateId: function updateId() {
    this.context.currentId += 1;
  },
  retraceHistory: function retraceHistory(id) {
    for (var i = 1; i <= id; i++) {
      var graphicsContainer = this.history[i];
      Object(_utils_insert_node__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context, graphicsContainer);
    }

    this.context.currentId = id + 1;
  },
  clearFuture: function clearFuture() {
    this.history.length = this.currentId;
  },
  clean: function clean() {
    for (var i = 1; i <= this.currentId; i++) {
      var graphicsContainer = this.history[i];
      Object(_utils_remove_node__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context, graphicsContainer);
    }
  },
  reset: function reset() {
    this.context.currentId = 1;
    this.history = [];
  },
  stepBackward: function stepBackward() {
    var graphicsContainer = this.history.pop();
    Object(_utils_remove_node__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context, graphicsContainer);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (HistoryService);

/***/ }),

/***/ "./js/services/injector.js":
/*!*********************************!*\
  !*** ./js/services/injector.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InjectorService =
/*#__PURE__*/
function () {
  function InjectorService() {
    _classCallCheck(this, InjectorService);

    this.dependencies = {};
  }

  _createClass(InjectorService, [{
    key: "register",
    value: function register(key, value) {
      this.dependencies[key] = value;
    }
  }, {
    key: "inject",
    value: function inject(context, keys) {
      var _this = this;

      keys.forEach(function (key) {
        context[key] = _this.dependencies[key];
      });
    }
  }]);

  return InjectorService;
}();

var Injector = new InjectorService();
/* harmony default export */ __webpack_exports__["default"] = (Injector);

/***/ }),

/***/ "./js/services/mesh.js":
/*!*****************************!*\
  !*** ./js/services/mesh.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./js/services/store.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environment */ "./js/environment.js");
/* harmony import */ var _error_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-notifier */ "./js/services/error-notifier.js");
/* harmony import */ var _utils_polygon_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/polygon-factory */ "./js/utils/polygon-factory.js");
/* harmony import */ var _utils_insert_node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/insert-node */ "./js/utils/insert-node.js");
/* harmony import */ var _utils_insert_edges__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/insert-edges */ "./js/utils/insert-edges.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controller */ "./js/controller.js");
/* harmony import */ var _utils_node_resize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/node-resize */ "./js/utils/node-resize.js");









/** @module services/mesh
* This service is responsible for: parsing mesh file, building grid poylgons and drawing mesh on canvas.
*/

/* harmony default export */ __webpack_exports__["default"] = ({
  /**
  * Parser parses the mesh map file by extracting totalPoints, totalPolygons and structure of map and passing this into callback.
  * @public
  */
  parser: {
    parse: function parse(file, callback) {
      var meshReader = new FileReader();
      meshReader.addEventListener("load", function (event) {
        var textFile = event.target;
        var data = textFile.result.split(/\n|\r\n/);
        data.shift();
        data.shift();
        var totalPoints = Number(data[0].split(' ')[0]);
        var totalPolygons = Number(data[0].split(' ')[1]);
        Object(_utils_node_resize__WEBPACK_IMPORTED_MODULE_8__["default"])('mesh', totalPolygons);
        data.shift();
        var pointsArr = data.slice(0, totalPoints).map(function (pointLine) {
          return pointLine.split(" ").slice(0, 2);
        }).map(function (pt) {
          return [parseInt(pt[0]), parseInt(pt[1])];
        });
        var maxX = Math.max.apply(null, pointsArr.map(function (p) {
          return p[0];
        }));
        var maxY = Math.max.apply(null, pointsArr.map(function (p) {
          return p[1];
        }));
        var polygonData = data.slice(totalPoints, data.length - 1);
        var polygonsArr = [];
        polygonData.forEach(function (polygonLine) {
          var pts = polygonLine.split(" ");
          var totalPolygonPoints = parseInt(pts[0]);
          var firstPoint;
          var points = [];
          pts.slice(1, totalPolygonPoints + 1).forEach(function (pt, index) {
            var point = pointsArr[parseInt(pt)];

            if (index == 0) {
              firstPoint = point;
            }

            points.push(point[0] * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, point[1] * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize);
          });
          points.push(firstPoint[0] * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize, firstPoint[1] * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize);
          polygonsArr.push(points);
        });
        console.log("meshData", totalPoints, totalPolygons, pointsArr, polygonsArr, maxX, maxY);
        var meshData = {
          totalPoints: totalPoints,
          totalPolygons: totalPolygons,
          pointsArr: pointsArr,
          polygonsArr: polygonsArr,
          maxX: maxX,
          maxY: maxY
        };
        callback(meshData);
      }); //Read the text file

      meshReader.readAsText(file);
    }
  },

  /**
  * Builder takes the meshData and builds all the polygons of the mesh map. Each polygon has property of points coordinates, color, border.
  * @public
  */
  builder: {
    polygons: [],
    build: function build(meshData, callback) {
      var _this = this;

      var polygonsArr = meshData.polygonsArr;
      var tasks = [];

      for (var i = 0; i < polygonsArr.length; ++i) {
        tasks.push(this.createPolygonTask(polygonsArr[i]));
      }

      Promise.all(tasks).then(function () {
        callback(_this.polygons);
      });
    },
    createPolygonTask: function createPolygonTask(coordinates) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var points = coordinates.flat();
        var polygon = {
          points: points.concat(points.slice(0, 2)).map(function (pt) {
            return pt * _config__WEBPACK_IMPORTED_MODULE_1__["default"].nodeSize;
          }),
          fillStyle: _config__WEBPACK_IMPORTED_MODULE_1__["default"].pathColor,
          strokeStyle: _config__WEBPACK_IMPORTED_MODULE_1__["default"].borderColor
        };

        _this2.polygons.push(polygon);

        resolve();
      });
    }
  },

  /**
  * Drawer draws the map on the canvas. It takes the polygons from the Mesh Model created by the builder and constructs PIXI.Graphics object and finally renders on the canvas.
  * @public
  */
  drawer: {
    draw: function draw() {
      var mesh = _store__WEBPACK_IMPORTED_MODULE_0__["default"].find('Mesh');
      mesh.meshPolygons.then(function (meshPolygons) {
        _controller__WEBPACK_IMPORTED_MODULE_7__["default"].setupRenderer();
        mesh.meshData.then(function (meshData) {
          meshPolygons.forEach(function (polygonObj) {
            var polygon = Object(_utils_polygon_factory__WEBPACK_IMPORTED_MODULE_4__["default"])(polygonObj);
            Object(_utils_insert_node__WEBPACK_IMPORTED_MODULE_5__["default"])(_controller__WEBPACK_IMPORTED_MODULE_7__["default"], polygon);
          });
        });
      }, function (err) {
        Object(_error_notifier__WEBPACK_IMPORTED_MODULE_3__["default"])(err);
      });
    }
  },
  process: function process() {
    var mesh = _store__WEBPACK_IMPORTED_MODULE_0__["default"].find('Mesh');
    mesh.meshData.then(function (meshData) {
      _controller__WEBPACK_IMPORTED_MODULE_7__["default"].setupRenderer();
      var container = new PIXI.Container();

      for (var i = 0; i < meshData.polygonsArr.length; ++i) {
        var points = meshData.polygonsArr[i];
        var polygon = new PIXI.Graphics();
        polygon.lineStyle(1, 0x000000);
        polygon.beginFill(0xFFFFFF);
        polygon.drawPolygon(points);
        polygon.endFill();
        container.addChild(polygon);
      }

      Object(_utils_insert_node__WEBPACK_IMPORTED_MODULE_5__["default"])(_controller__WEBPACK_IMPORTED_MODULE_7__["default"], container);
    });
  }
});

/***/ }),

/***/ "./js/services/mouse-tracker.js":
/*!**************************************!*\
  !*** ./js/services/mouse-tracker.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** @module services/mouse-tracker
* This service is responsible for setting up latest x and y position of mouse on the context.
*/
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  document.addEventListener('mousemove', onMouseUpdate, false);
  document.addEventListener('mouseenter', onMouseUpdate, false);

  function onMouseUpdate(e) {
    context.x = e.pageX;
    context.y = e.pageY;
  }
});

/***/ }),

/***/ "./js/services/node-objects-processor.js":
/*!***********************************************!*\
  !*** ./js/services/node-objects-processor.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./js/services/store.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./js/config.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  process: function process(node) {
    var _this = this;

    return node.step.tracer.nodeStructure.map(function (obj) {
      var map = _store__WEBPACK_IMPORTED_MODULE_0__["default"].find('Map');
      var mapType;

      if (map) {
        mapType = map.mapType;
      }

      var nodeConf = JSON.parse(JSON.stringify(obj));
      delete nodeConf.variables;
      nodeConf.node = node;

      _this.preprocess(node, mapType);

      var coordinates = {};
      Object.keys(obj.variables).forEach(function (key) {
        if (key == "points") {
          coordinates['points'] = [];
          obj.variables['points'].forEach(function (pt) {
            coordinates['points'].push(node.variables[pt]);
          });
        } else {
          if (obj.variables[key].indexOf("parent:") == -1) {
            coordinates[key] = node.variables[obj.variables[key]];
          } else {
            var parentNode = node.parentNode;
            var prop = obj.variables[key].split("parent:")[1];

            if (parentNode) {
              coordinates[key] = parentNode.variables[prop];
            } else {
              coordinates[key] = node.variables[prop];
            }
          }
        }
      });
      var options = {
        nodeConf: nodeConf,
        coordinates: coordinates
      };

      switch (obj.type) {
        case "rectangle":
          return _store__WEBPACK_IMPORTED_MODULE_0__["default"].createRecord('Rectangle', options);

        case "circle":
          return _store__WEBPACK_IMPORTED_MODULE_0__["default"].createRecord('Circle', options);

        case "line":
          return _store__WEBPACK_IMPORTED_MODULE_0__["default"].createRecord('Line', options);

        case "polygon":
          return _store__WEBPACK_IMPORTED_MODULE_0__["default"].createRecord('Polygon', options);
      }
    });
  },
  preprocess: function preprocess(node, mapType) {
    if (!mapType) {
      return;
    }

    if (mapType == 'roadnetwork') {
      var roadNetwork = _store__WEBPACK_IMPORTED_MODULE_0__["default"].find('RoadNetwork');
      var minX = roadNetwork.minX;
      var minY = roadNetwork.minY;
      node.variables.x -= minX;
      node.variables.y -= minY;
      node.variables.x *= _config__WEBPACK_IMPORTED_MODULE_1__["default"].roadNetworkScale;
      node.variables.y *= _config__WEBPACK_IMPORTED_MODULE_1__["default"].roadNetworkScale;
    }
  }
});

/***/ }),

/***/ "./js/services/playback.js":
/*!*********************************!*\
  !*** ./js/services/playback.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! javascript-state-machine */ "./node_modules/javascript-state-machine/lib/state-machine.js");
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__);

/** @module services/playback
* This service is responsible for giving playback controls to the app. It is a StateMachine with 4 states: none, ready, paused and running. Init transition changes state from none to ready. Play transition changes state from ready/paused to running. Pause transition changes state from running to paused. Reset transition changes state to ready.
*/

var PlaybackService = new javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default.a({
  transitions: [{
    name: 'init',
    from: 'none',
    to: 'ready'
  }, {
    name: 'play',
    from: ['ready', 'paused'],
    to: 'running'
  }, {
    name: 'pause',
    from: 'running',
    to: 'paused'
  }, {
    name: 'reset',
    from: '*',
    to: 'ready'
  }],

  /**
  * Data of this state machine has callbacks corresponding to each transition
  */
  data: {
    initCallbacks: [],
    playCallbacks: [],
    pauseCallbacks: [],
    resetCallbacks: []
  },
  methods: {
    /**
    * @function onInit
    * This lifecycle function is called when this service is initiated. It calls and the callbacks function corresponding to this transition
    */
    onInit: function onInit() {
      this.runCallbacks('init');
    },

    /**
    * @function onPlay
    * This lifecycle function is called when this service is played. It calls and the callbacks function corresponding to this transition
    */
    onPlay: function onPlay() {
      this.runCallbacks('play');
    },

    /**
    * @function onPause
    * This lifecycle function is called when this service is paused. It calls and the callbacks function corresponding to this transition
    */
    onPause: function onPause() {
      this.runCallbacks('pause');
    },

    /**
    * @function onReset
    * This lifecycle function is called when this service is reset. It calls and the callbacks function corresponding to this transition
    */
    onReset: function onReset() {
      this.runCallbacks('reset');
    },

    /**
    * @function runCallbacks
    * This funciton runs all the callbacks corresponding to the transition type passed to it.
    * @param {string} type - type of transition
    */
    runCallbacks: function runCallbacks(type) {
      var callbacks;

      switch (type) {
        case "init":
          callbacks = this.initCallbacks;
          break;

        case "play":
          callbacks = this.playCallbacks;
          break;

        case "pause":
          callbacks = this.pauseCallbacks;
          break;

        case "reset":
          callbacks = this.resetCallbacks;
          break;
      }

      callbacks.forEach(function (callback) {
        callback();
      });
    },

    /**
    * @function addCallback
    * This function adds callback function to the callbacks array of corresponding transition type
    * @param {string} type - type of transition
    * @param {function} callback - callback funciton
    */
    addCallback: function addCallback(type, callback) {
      switch (type) {
        case "init":
          this.initCallbacks.push(callback);
          break;

        case "play":
          this.playCallbacks.push(callback);
          break;

        case "pause":
          this.pauseCallbacks.push(callback);
          break;

        case "reset":
          this.resetCallbacks.push(callback);
          break;
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (PlaybackService);

/***/ }),

/***/ "./js/services/renderer.js":
/*!*********************************!*\
  !*** ./js/services/renderer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./js/services/injector.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./js/config.js");



/** @module services/renderer
* This service is responsible for rendering the canvas onto the DOM.
*/

/* harmony default export */ __webpack_exports__["default"] = ({
  /**
  * @function render
  * This function creates a canvas element of height and width specified and appends it to div with class screen. Additionally, it also sets PIXI.Application as app on the context object, renderer and stage as well. It then sets rendered flag as true on the context object.
  */
  render: function render(context, width, height) {
    context.canvas = document.createElement("canvas");
    context.canvas.id = "canvas";
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".screen").append(context.canvas);
    context.app = new PIXI.Application({
      width: width,
      height: height,
      view: context.canvas,
      transparent: true,
      forceCanvas: true,
      antialias: true
    });
    var viewport;

    if (_config__WEBPACK_IMPORTED_MODULE_2__["default"].zooming) {
      viewport = new Viewport.Viewport({
        screenWidth: width,
        screenHeight: height,
        worldWidth: width * 2,
        worldHeight: height * 2,
        interaction: context.app.renderer.plugins.interaction,
        stopPropagation: true
      });
      viewport.drag().pinch().wheel().decelerate(); // .on("drag-end", function(){
      //   if(this.getVisibleBounds().x > 0 || this.getVisibleBounds().y > 0){
      //     this.ensureVisible(0,0);
      //   }
      // })
      // .on("zoomed", function(){
      //   if(this.lastViewport.scaleX < 1 || this.lastViewport.scaleY < 1){
      //     let self = this;
      //     this.ensureVisible(0,0);
      //     setTimeout(() => {
      //       self.fit(false, width, height);
      //     }, 100);
      //   }
      // });
    } else {
      viewport = new PIXI.Container();
    }

    context.renderer = context.app.renderer;
    context.stage = viewport;
    context.renderer.render(context.app.stage);
    context.app.stage.addChild(context.stage);
    context.rendered = true;
    _injector__WEBPACK_IMPORTED_MODULE_1__["default"].register('renderer', context.renderer);
  }
});

/***/ }),

/***/ "./js/services/road-network.js":
/*!*************************************!*\
  !*** ./js/services/road-network.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./js/services/store.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller */ "./js/controller.js");
/* harmony import */ var _utils_insert_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/insert-node */ "./js/utils/insert-node.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./js/config.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  parser: {
    coParse: function coParse(file, callback) {
      var coReader = new FileReader();
      coReader.addEventListener("load", function (event) {
        var textFile = event.target;
        var data = textFile.result.split(/\n|\r\n/);
        var coordinates = [];
        var minX, minY;
        var maxX, maxY;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var line = _step.value;

            if (line[0] == 'v') {
              var vline = line.split(" ");
              var x = Number(vline[2]);
              var y = Number(vline[3]);

              if (!minX || minX > x) {
                minX = x;
              }

              if (!minY || minY > y) {
                minY = y;
              }

              if (!maxX || maxX < x) {
                maxX = x;
              }

              if (!maxY || maxY < y) {
                maxY = y;
              }

              coordinates.push({
                x: x,
                y: y
              });
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        maxX -= minX;
        maxY -= minY;
        coordinates = coordinates.map(function (c) {
          return {
            x: c.x - minX,
            y: c.y - minY
          };
        });
        coordinates.unshift(-1);
        callback({
          maxX: maxX,
          maxY: maxY,
          minX: minX,
          minY: minY,
          coordinates: coordinates
        });
      });
      coReader.readAsText(file);
    },
    grParse: function grParse(file, callback) {
      var grReader = new FileReader();
      grReader.addEventListener("load", function (event) {
        var textFile = event.target;
        var data = textFile.result.split(/\n|\r\n/);
        var lines = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var line = _step2.value;

            if (line[0] == 'a') {
              var aline = line.split(" ");
              var from = aline[1];
              var to = aline[2];
              lines.push([from, to]);
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        callback({
          lines: lines
        });
      });
      grReader.readAsText(file);
    }
  },
  renderMap: function renderMap() {
    var roadNetwork = _store__WEBPACK_IMPORTED_MODULE_0__["default"].find('RoadNetwork');
    roadNetwork.roadCoordinates.coData.then(function (coData) {
      roadNetwork.roadGraph.grData.then(function (grData) {
        _controller__WEBPACK_IMPORTED_MODULE_1__["default"].setupRenderer();
        var mapSprite = new PIXI.Sprite.from("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"].clientAddr, "/maps/images/ny.png"));
        mapSprite.width = _controller__WEBPACK_IMPORTED_MODULE_1__["default"].getDimensions().width;
        mapSprite.height = _controller__WEBPACK_IMPORTED_MODULE_1__["default"].getDimensions().height;
        mapSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        mapSprite.texture.baseTexture.mipmap = true;
        Object(_utils_insert_node__WEBPACK_IMPORTED_MODULE_2__["default"])(_controller__WEBPACK_IMPORTED_MODULE_1__["default"], mapSprite);
      });
    });
  },
  sendToServer: function sendToServer() {
    var _this = this;

    // this.renderMap();
    // return;
    var roadNetwork = _store__WEBPACK_IMPORTED_MODULE_0__["default"].find('RoadNetwork');
    roadNetwork.roadCoordinates.coData.then(function (coData) {
      roadNetwork.roadGraph.grData.then(function (grData) {
        fetch(_config__WEBPACK_IMPORTED_MODULE_3__["default"].processRoadNetworkUrl, {
          method: "POST",
          body: JSON.stringify({
            coData: coData,
            grData: grData
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          if (data.done) {
            _this.renderMap();
          }
        });
      });
    });
  },
  checkMap: function checkMap() {
    var map = _store__WEBPACK_IMPORTED_MODULE_0__["default"].find("Map");
    var img = new Image();
    var self = this;

    img.onerror = function () {
      //send request to server
      self.sendToServer();
    };

    img.onload = function () {
      //load map from image directly
      self.renderMap();
      img = null;
    };

    img.src = "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"].clientAddr, "/maps/images/ny.png");
  },
  process: function process() {
    this.checkMap();
    return;
    var roadNetwork = _store__WEBPACK_IMPORTED_MODULE_0__["default"].find('RoadNetwork');
    var container = new PIXI.Container();
    roadNetwork.roadCoordinates.coData.then(function (coData) {
      roadNetwork.roadGraph.grData.then(function (grData) {
        _controller__WEBPACK_IMPORTED_MODULE_1__["default"].setupRenderer();
        var point = new PIXI.Graphics();
        coData.coordinates.forEach(function (p) {
          point.lineStyle(1, 0x000000);
          point.beginFill(0x000000);
          point.drawCircle(p.x * 0.01, p.y * 0.01, 0.5);
          point.endFill();
        });
        container.addChild(point);
        var line = new PIXI.Graphics();
        line.lineStyle(0.25, 0x000000);
        grData.lines.forEach(function (l) {
          var from = coData.coordinates[l[0]];
          var to = coData.coordinates[l[1]];
          line.moveTo(from.x * 0.01, from.y * 0.01);
          line.lineTo(to.x * 0.01, to.y * 0.01);
        });
        container.addChild(line);
        Object(_utils_insert_node__WEBPACK_IMPORTED_MODULE_2__["default"])(_controller__WEBPACK_IMPORTED_MODULE_1__["default"], container);
      });
    });
  }
});

/***/ }),

/***/ "./js/services/runner.js":
/*!*******************************!*\
  !*** ./js/services/runner.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_frontier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/frontier */ "./js/services/frontier.js");
/* harmony import */ var _services_search_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/search-path */ "./js/services/search-path.js");
/* harmony import */ var _services_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/history */ "./js/services/history.js");


 //history
//clear the canvas
//trace all the nodes till now
//create the frontier nodes as per the array of frontier nodes.
//put rectangles that are extra - this includes. removing the frontier nodes as well - only when closing
//when generating/updating - first opened node and then frontier node
//source, destination, expanding, frontier, opened, closed
//source and destination remain untouched
//expanding is current - its color is coming directly.
//frontier - all generating/updating nodes that come between 2 expanding
//opened - all the nodes that are not closed or expanded
//closed - the one that is closed
//source, destination, expanding, closed, opened are mentioned. Only frontier is tricky

/**
* @function runnerFactory
* This function return the runner function that visualises the current step of the algorithm. It inserts the current node, add or clear frontier nodes if applicable, update the history, update the line and update the id.
* @param {Array} steps - array of steps of the algorithm
* @returns {function} runner - returns the runner function
*/

var runnerFactory = function runnerFactory(steps) {
  var self = this;
  var startTime = new Date();

  var runner = function runner() {
    var id = self.currentId;

    if (id > self.totalSteps) {
      var endTime = new Date();
      alert(endTime - startTime);
      return;
    } //update history


    var step = _services_history__WEBPACK_IMPORTED_MODULE_2__["default"].update();
    _services_frontier__WEBPACK_IMPORTED_MODULE_0__["default"].add(step.node);

    if (step.type == 'closing') {
      _services_frontier__WEBPACK_IMPORTED_MODULE_0__["default"].clearCurrent();
    } //update search path


    _services_search_path__WEBPACK_IMPORTED_MODULE_1__["default"].update(step.node); //update id

    _services_history__WEBPACK_IMPORTED_MODULE_2__["default"].updateId();
  };

  return runner;
};

/* harmony default export */ __webpack_exports__["default"] = (runnerFactory);

/***/ }),

/***/ "./js/services/search-path.js":
/*!************************************!*\
  !*** ./js/services/search-path.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller */ "./js/controller.js");
/* harmony import */ var _utils_insert_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/insert-node */ "./js/utils/insert-node.js");
/* harmony import */ var _utils_remove_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/remove-node */ "./js/utils/remove-node.js");
/* harmony import */ var _utils_draw_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/draw-line */ "./js/utils/draw-line.js");





var SearchPathService = {
  init: function init(context) {
    this.context = context; //history => history is history of lines drawn at each step.

    this.history = []; //current => The current is line PIXI.Graphics object which is basically a line drawn from current node to the source.

    this.current = null;
  },

  get currentId() {
    return this.context.currentId;
  },

  /**
  * @function update
  * This function removes the previous line drawn and adds the current line on the screen. Line is from source to the current node.
  * @param {Node} node
  */
  update: function update(node) {
    Object(_utils_remove_node__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context, this.history[this.currentId - 1]);
    this.current = Object(_utils_draw_line__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context, node);
    this.history[this.currentId] = this.current;
  },
  retraceHistory: function retraceHistory(id) {
    Object(_utils_remove_node__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context, this.current);
    this.current = this.history[id];
    Object(_utils_insert_node__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context, this.current);
  },
  clearFuture: function clearFuture() {
    this.history.length = this.currentId;
  },
  clean: function clean() {
    for (var i = 1; i <= this.currentId; i++) {
      var line = this.history[i];
      Object(_utils_remove_node__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context, line);
    }
  },
  reset: function reset() {
    this.context.currentId = 1;
    this.history = [];
  },
  stepBackward: function stepBackward() {
    var line = this.history.pop();
    Object(_utils_remove_node__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context, line);
    Object(_utils_insert_node__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context, this.history[this.history.length - 1]);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SearchPathService);

/***/ }),

/***/ "./js/services/store.js":
/*!******************************!*\
  !*** ./js/services/store.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ "./js/models/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var getModel = function getModel(modelName) {
  var referredModel;
  Object(_models__WEBPACK_IMPORTED_MODULE_0__["default"])().forEach(function (model) {
    if (model.name == modelName) {
      referredModel = model;
      return;
    }
  });

  if (referredModel) {
    return referredModel;
  } else {//throw error saying wrong model name passed
  }
};

var instance = null;
/** @module services/store
* this is data store implementation. Store is a singleton class. the values are stored in data. and it has common functions like createRecord, findAll, findBy, find, getRecord, relationships(hasMany, belongsTo)
*/

var StoreSingleton =
/*#__PURE__*/
function () {
  function StoreSingleton() {
    _classCallCheck(this, StoreSingleton);

    if (!instance) {
      instance = this;
      this.data = {};
    }

    return instance;
  }

  _createClass(StoreSingleton, [{
    key: "createRecord",
    value: function createRecord(modelName, attributes) {
      this.data[modelName] = this.data[modelName] || {};
      var model = getModel(modelName);
      var record = new model(attributes);
      this.data[modelName][record._id] = record;
      return record;
    }
  }, {
    key: "find",
    value: function find(modelName) {
      try {
        return this.data[modelName][0];
      } catch (e) {
        return null;
      }
    }
  }, {
    key: "where",
    value: function where(modelName, condition) {
      return Object.values(this.data[modelName]).filter(function (record) {
        return Object.keys(condition).every(function (key) {
          return record[key] == condition[key];
        });
      });
    }
  }]);

  return StoreSingleton;
}();

var Store = new StoreSingleton();
window.store = Store;
/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./js/utils/debounce.js":
/*!******************************!*\
  !*** ./js/utils/debounce.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @function debounce
 * This function is debounce implementation
 * @param {function} func
 * @param {number} wait
 * @param {boolean} immediate
*/
/* harmony default export */ __webpack_exports__["default"] = (function (func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait || 200);

    if (callNow) {
      func.apply(context, args);
    }
  };
});

/***/ }),

/***/ "./js/utils/draw-line.js":
/*!*******************************!*\
  !*** ./js/utils/draw-line.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./js/config.js");

/**
 * @function drawLine
 * This function draws the line from the node passed to its source via its linePoints property
 * @param {Controller} context
 * @param {Node} node
 * @return {PIXI.Graphics}
*/

var element = document.getElementsByClassName('screen')[0];
var done = false;
/* harmony default export */ __webpack_exports__["default"] = (function (context, node, color) {
  if (!element) {
    element = document.getElementsByClassName('screen')[0];
  }

  var line = new PIXI.Graphics();
  var lineColor = color ? color : _config__WEBPACK_IMPORTED_MODULE_0__["default"].lineColor;
  line.lineStyle(1.5, lineColor);
  node.linePoints.forEach(function (point, index) {
    if (index == 0) {
      line.moveTo(point.x, point.y);

      if (!done) {
        element.scroll(point.x - 200, point.y - 200);
        done = true;
      }
    } else {
      line.lineTo(point.x, point.y);
    }
  });
  context.stage.addChild(line);
  return line;
});

/***/ }),

/***/ "./js/utils/insert-edges.js":
/*!**********************************!*\
  !*** ./js/utils/insert-edges.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller */ "./js/controller.js");
//Used while using Viva.js

/* harmony default export */ __webpack_exports__["default"] = (function (context, node) {
  [node.up, node.down, node.left, node.right].forEach(function (neighbour) {
    if (neighbour) {
      context.graph.addLink(node.id, neighbour); // let linkId = node.id + '👉 ' + neighbour;
      // let line = Controller.graphics.getLinkUI(linkId);
      // line.color = 0xFFFFFFff;
    }
  });
});

/***/ }),

/***/ "./js/utils/insert-node.js":
/*!*********************************!*\
  !*** ./js/utils/insert-node.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @function insertNode
 * This function add the Graphics object to the stage and renders it.
 * @param {Controller} context
 * @param {PIXI.Graphics} graphics
*/
/* harmony default export */ __webpack_exports__["default"] = (function (context, graphics) {
  context.stage.addChild(graphics);
});

/***/ }),

/***/ "./js/utils/node-color.js":
/*!********************************!*\
  !*** ./js/utils/node-color.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
* This object is dictionary for type of node to its color type.
*/
/* harmony default export */ __webpack_exports__["default"] = ({
  'source': 'source',
  'destination': 'destination',
  'generating': 'opened',
  'expanding': 'current',
  'closing': 'closed',
  'updating': 'opened',
  'end': 'destination'
});

/***/ }),

/***/ "./js/utils/node-factory.js":
/*!**********************************!*\
  !*** ./js/utils/node-factory.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _services_floatbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/floatbox */ "./js/services/floatbox.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller */ "./js/controller.js");



/**
 * @function nodeFactory
 * This function creates a PIXI.Graphics object with given attributes, binds floatbox service with the given values and bind mouseout and mouseover events.
 * @param {Object} attrs
 * @param {Object} attrs
 * @return {PIXI.Graphics}
*/

/* harmony default export */ __webpack_exports__["default"] = (function (attrs, values) {
  var rectangle = new PIXI.Graphics();
  rectangle.lineStyle(1, attrs.strokeStyle);
  rectangle.beginFill(attrs.fillStyle);
  rectangle.drawRect(attrs.x, attrs.y, attrs.width, attrs.height);
  rectangle.endFill();

  if (!attrs.isMap) {
    rectangle.interactive = true;
    rectangle.buttonMode = true;
    rectangle.on("mouseover", function (e) {
      rectangle.tint = attrs.fillStyle;
      var position = {
        x: _controller__WEBPACK_IMPORTED_MODULE_2__["default"].x,
        y: _controller__WEBPACK_IMPORTED_MODULE_2__["default"].y
      };
      _services_floatbox__WEBPACK_IMPORTED_MODULE_1__["default"].execute(e, values, position);
    });
    rectangle.on("mouseout", function () {
      rectangle.tint = "0xFFFFFF";
    });
  }

  return rectangle;
});
;

/***/ }),

/***/ "./js/utils/node-resize.js":
/*!*********************************!*\
  !*** ./js/utils/node-resize.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./js/config.js");

/* harmony default export */ __webpack_exports__["default"] = (function (mapType, dimension) {
  if (mapType == 'grid') {
    if (dimension <= 128) {
      _config__WEBPACK_IMPORTED_MODULE_0__["default"].nodeSize = 20;
    } else if (dimension <= 256) {
      _config__WEBPACK_IMPORTED_MODULE_0__["default"].nodeSize = 15;
    } else if (dimension <= 512) {
      _config__WEBPACK_IMPORTED_MODULE_0__["default"].nodeSize = 10;
    } else {
      _config__WEBPACK_IMPORTED_MODULE_0__["default"].nodeSize = 5;
    }
  }

  if (mapType == 'mesh') {
    if (dimension <= 5000) {
      _config__WEBPACK_IMPORTED_MODULE_0__["default"].nodeSize = 20;
    } else if (dimension <= 10000) {
      _config__WEBPACK_IMPORTED_MODULE_0__["default"].nodeSize = 15;
    } else if (dimension <= 15000) {
      _config__WEBPACK_IMPORTED_MODULE_0__["default"].nodeSize = 10;
    } else {
      _config__WEBPACK_IMPORTED_MODULE_0__["default"].nodeSize = 5;
    }
  }

  if (mapType == 'roadnetwork') {
    _config__WEBPACK_IMPORTED_MODULE_0__["default"].nodeSize = 1;
  }
});

/***/ }),

/***/ "./js/utils/polygon-factory.js":
/*!*************************************!*\
  !*** ./js/utils/polygon-factory.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./js/config.js");
/* harmony import */ var _services_floatbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/floatbox */ "./js/services/floatbox.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller */ "./js/controller.js");



/* harmony default export */ __webpack_exports__["default"] = (function (attrs) {
  var polygon = new PIXI.Graphics();
  polygon.lineStyle(1, attrs.strokeStyle);
  polygon.beginFill(attrs.fillStyle);
  polygon.drawPolygon(attrs.points);
  polygon.endFill();
  return polygon;
});
;

/***/ }),

/***/ "./js/utils/remove-node.js":
/*!*********************************!*\
  !*** ./js/utils/remove-node.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @function removeNode
 * This function removes the Graphics object from the stage.
 * @param {Controller} context
 * @param {PIXI.Graphics} graphics
*/
/* harmony default export */ __webpack_exports__["default"] = (function (context, graphics) {
  if (graphics) {
    context.stage.removeChild(graphics); // graphics.visible = false;
  }
});

/***/ }),

/***/ "./js/utils/tracer-parser.js":
/*!***********************************!*\
  !*** ./js/utils/tracer-parser.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
* @function tracerParser
* This function reads the algorithm debug file and parse it by extracting json and passing it to the callback
* @param {File} file
* @param {Function} callback
*/
/* harmony default export */ __webpack_exports__["default"] = (function (file, callback) {
  var tracerReader = new FileReader();
  tracerReader.addEventListener("load", function (event) {
    var textFile = event.target;
    var data = JSON.parse(textFile.result);
    callback(data);
  }); //Read the text file

  tracerReader.readAsText(file);
});

/***/ }),

/***/ "./node_modules/javascript-state-machine/lib/state-machine.js":
/*!********************************************************************!*\
  !*** ./node_modules/javascript-state-machine/lib/state-machine.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // identity function for calling harmony imports with the correct context

      /******/

      __webpack_require__.i = function (value) {
        return value;
      };
      /******/

      /******/
      // define getter function for harmony exports

      /******/


      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 5);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      module.exports = function (target, sources) {
        var n, source, key;

        for (n = 1; n < arguments.length; n++) {
          source = arguments[n];

          for (key in source) {
            if (source.hasOwnProperty(key)) target[key] = source[key];
          }
        }

        return target;
      };
      /***/

    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict"; //-------------------------------------------------------------------------------------------------

      var mixin = __webpack_require__(0); //-------------------------------------------------------------------------------------------------


      module.exports = {
        build: function build(target, config) {
          var n,
              max,
              plugin,
              plugins = config.plugins;

          for (n = 0, max = plugins.length; n < max; n++) {
            plugin = plugins[n];
            if (plugin.methods) mixin(target, plugin.methods);
            if (plugin.properties) Object.defineProperties(target, plugin.properties);
          }
        },
        hook: function hook(fsm, name, additional) {
          var n,
              max,
              method,
              plugin,
              plugins = fsm.config.plugins,
              args = [fsm.context];
          if (additional) args = args.concat(additional);

          for (n = 0, max = plugins.length; n < max; n++) {
            plugin = plugins[n];
            method = plugins[n][name];
            if (method) method.apply(plugin, args);
          }
        } //-------------------------------------------------------------------------------------------------

        /***/

      };
    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict"; //-------------------------------------------------------------------------------------------------

      function camelize(label) {
        if (label.length === 0) return label;
        var n,
            result,
            word,
            words = label.split(/[_-]/); // single word with first character already lowercase, return untouched

        if (words.length === 1 && words[0][0].toLowerCase() === words[0][0]) return label;
        result = words[0].toLowerCase();

        for (n = 1; n < words.length; n++) {
          result = result + words[n].charAt(0).toUpperCase() + words[n].substring(1).toLowerCase();
        }

        return result;
      } //-------------------------------------------------------------------------------------------------


      camelize.prepended = function (prepend, label) {
        label = camelize(label);
        return prepend + label[0].toUpperCase() + label.substring(1);
      }; //-------------------------------------------------------------------------------------------------


      module.exports = camelize;
      /***/
    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict"; //-------------------------------------------------------------------------------------------------

      var mixin = __webpack_require__(0),
          camelize = __webpack_require__(2); //-------------------------------------------------------------------------------------------------


      function Config(options, StateMachine) {
        options = options || {};
        this.options = options; // preserving original options can be useful (e.g visualize plugin)

        this.defaults = StateMachine.defaults;
        this.states = [];
        this.transitions = [];
        this.map = {};
        this.lifecycle = this.configureLifecycle();
        this.init = this.configureInitTransition(options.init);
        this.data = this.configureData(options.data);
        this.methods = this.configureMethods(options.methods);
        this.map[this.defaults.wildcard] = {};
        this.configureTransitions(options.transitions || []);
        this.plugins = this.configurePlugins(options.plugins, StateMachine.plugin);
      } //-------------------------------------------------------------------------------------------------


      mixin(Config.prototype, {
        addState: function addState(name) {
          if (!this.map[name]) {
            this.states.push(name);
            this.addStateLifecycleNames(name);
            this.map[name] = {};
          }
        },
        addStateLifecycleNames: function addStateLifecycleNames(name) {
          this.lifecycle.onEnter[name] = camelize.prepended('onEnter', name);
          this.lifecycle.onLeave[name] = camelize.prepended('onLeave', name);
          this.lifecycle.on[name] = camelize.prepended('on', name);
        },
        addTransition: function addTransition(name) {
          if (this.transitions.indexOf(name) < 0) {
            this.transitions.push(name);
            this.addTransitionLifecycleNames(name);
          }
        },
        addTransitionLifecycleNames: function addTransitionLifecycleNames(name) {
          this.lifecycle.onBefore[name] = camelize.prepended('onBefore', name);
          this.lifecycle.onAfter[name] = camelize.prepended('onAfter', name);
          this.lifecycle.on[name] = camelize.prepended('on', name);
        },
        mapTransition: function mapTransition(transition) {
          var name = transition.name,
              from = transition.from,
              to = transition.to;
          this.addState(from);
          if (typeof to !== 'function') this.addState(to);
          this.addTransition(name);
          this.map[from][name] = transition;
          return transition;
        },
        configureLifecycle: function configureLifecycle() {
          return {
            onBefore: {
              transition: 'onBeforeTransition'
            },
            onAfter: {
              transition: 'onAfterTransition'
            },
            onEnter: {
              state: 'onEnterState'
            },
            onLeave: {
              state: 'onLeaveState'
            },
            on: {
              transition: 'onTransition'
            }
          };
        },
        configureInitTransition: function configureInitTransition(init) {
          if (typeof init === 'string') {
            return this.mapTransition(mixin({}, this.defaults.init, {
              to: init,
              active: true
            }));
          } else if (_typeof(init) === 'object') {
            return this.mapTransition(mixin({}, this.defaults.init, init, {
              active: true
            }));
          } else {
            this.addState(this.defaults.init.from);
            return this.defaults.init;
          }
        },
        configureData: function configureData(data) {
          if (typeof data === 'function') return data;else if (_typeof(data) === 'object') return function () {
            return data;
          };else return function () {
            return {};
          };
        },
        configureMethods: function configureMethods(methods) {
          return methods || {};
        },
        configurePlugins: function configurePlugins(plugins, builtin) {
          plugins = plugins || [];
          var n, max, plugin;

          for (n = 0, max = plugins.length; n < max; n++) {
            plugin = plugins[n];
            if (typeof plugin === 'function') plugins[n] = plugin = plugin();
            if (plugin.configure) plugin.configure(this);
          }

          return plugins;
        },
        configureTransitions: function configureTransitions(transitions) {
          var i,
              n,
              transition,
              from,
              to,
              wildcard = this.defaults.wildcard;

          for (n = 0; n < transitions.length; n++) {
            transition = transitions[n];
            from = Array.isArray(transition.from) ? transition.from : [transition.from || wildcard];
            to = transition.to || wildcard;

            for (i = 0; i < from.length; i++) {
              this.mapTransition({
                name: transition.name,
                from: from[i],
                to: to
              });
            }
          }
        },
        transitionFor: function transitionFor(state, transition) {
          var wildcard = this.defaults.wildcard;
          return this.map[state][transition] || this.map[wildcard][transition];
        },
        transitionsFor: function transitionsFor(state) {
          var wildcard = this.defaults.wildcard;
          return Object.keys(this.map[state]).concat(Object.keys(this.map[wildcard]));
        },
        allStates: function allStates() {
          return this.states;
        },
        allTransitions: function allTransitions() {
          return this.transitions;
        }
      }); //-------------------------------------------------------------------------------------------------

      module.exports = Config; //-------------------------------------------------------------------------------------------------

      /***/
    },
    /* 4 */

    /***/
    function (module, exports, __webpack_require__) {
      var mixin = __webpack_require__(0),
          Exception = __webpack_require__(6),
          plugin = __webpack_require__(1),
          UNOBSERVED = [null, []]; //-------------------------------------------------------------------------------------------------


      function JSM(context, config) {
        this.context = context;
        this.config = config;
        this.state = config.init.from;
        this.observers = [context];
      } //-------------------------------------------------------------------------------------------------


      mixin(JSM.prototype, {
        init: function init(args) {
          mixin(this.context, this.config.data.apply(this.context, args));
          plugin.hook(this, 'init');
          if (this.config.init.active) return this.fire(this.config.init.name, []);
        },
        is: function is(state) {
          return Array.isArray(state) ? state.indexOf(this.state) >= 0 : this.state === state;
        },
        isPending: function isPending() {
          return this.pending;
        },
        can: function can(transition) {
          return !this.isPending() && !!this.seek(transition);
        },
        cannot: function cannot(transition) {
          return !this.can(transition);
        },
        allStates: function allStates() {
          return this.config.allStates();
        },
        allTransitions: function allTransitions() {
          return this.config.allTransitions();
        },
        transitions: function transitions() {
          return this.config.transitionsFor(this.state);
        },
        seek: function seek(transition, args) {
          var wildcard = this.config.defaults.wildcard,
              entry = this.config.transitionFor(this.state, transition),
              to = entry && entry.to;
          if (typeof to === 'function') return to.apply(this.context, args);else if (to === wildcard) return this.state;else return to;
        },
        fire: function fire(transition, args) {
          return this.transit(transition, this.state, this.seek(transition, args), args);
        },
        transit: function transit(transition, from, to, args) {
          var lifecycle = this.config.lifecycle,
              changed = this.config.options.observeUnchangedState || from !== to;
          if (!to) return this.context.onInvalidTransition(transition, from, to);
          if (this.isPending()) return this.context.onPendingTransition(transition, from, to);
          this.config.addState(to); // might need to add this state if it's unknown (e.g. conditional transition or goto)

          this.beginTransit();
          args.unshift({
            // this context will be passed to each lifecycle event observer
            transition: transition,
            from: from,
            to: to,
            fsm: this.context
          });
          return this.observeEvents([this.observersForEvent(lifecycle.onBefore.transition), this.observersForEvent(lifecycle.onBefore[transition]), changed ? this.observersForEvent(lifecycle.onLeave.state) : UNOBSERVED, changed ? this.observersForEvent(lifecycle.onLeave[from]) : UNOBSERVED, this.observersForEvent(lifecycle.on.transition), changed ? ['doTransit', [this]] : UNOBSERVED, changed ? this.observersForEvent(lifecycle.onEnter.state) : UNOBSERVED, changed ? this.observersForEvent(lifecycle.onEnter[to]) : UNOBSERVED, changed ? this.observersForEvent(lifecycle.on[to]) : UNOBSERVED, this.observersForEvent(lifecycle.onAfter.transition), this.observersForEvent(lifecycle.onAfter[transition]), this.observersForEvent(lifecycle.on[transition])], args);
        },
        beginTransit: function beginTransit() {
          this.pending = true;
        },
        endTransit: function endTransit(result) {
          this.pending = false;
          return result;
        },
        failTransit: function failTransit(result) {
          this.pending = false;
          throw result;
        },
        doTransit: function doTransit(lifecycle) {
          this.state = lifecycle.to;
        },
        observe: function observe(args) {
          if (args.length === 2) {
            var observer = {};
            observer[args[0]] = args[1];
            this.observers.push(observer);
          } else {
            this.observers.push(args[0]);
          }
        },
        observersForEvent: function observersForEvent(event) {
          // TODO: this could be cached
          var n = 0,
              max = this.observers.length,
              observer,
              result = [];

          for (; n < max; n++) {
            observer = this.observers[n];
            if (observer[event]) result.push(observer);
          }

          return [event, result, true];
        },
        observeEvents: function observeEvents(events, args, previousEvent, previousResult) {
          if (events.length === 0) {
            return this.endTransit(previousResult === undefined ? true : previousResult);
          }

          var event = events[0][0],
              observers = events[0][1],
              pluggable = events[0][2];
          args[0].event = event;
          if (event && pluggable && event !== previousEvent) plugin.hook(this, 'lifecycle', args);

          if (observers.length === 0) {
            events.shift();
            return this.observeEvents(events, args, event, previousResult);
          } else {
            var observer = observers.shift(),
                result = observer[event].apply(observer, args);

            if (result && typeof result.then === 'function') {
              return result.then(this.observeEvents.bind(this, events, args, event)).catch(this.failTransit.bind(this));
            } else if (result === false) {
              return this.endTransit(false);
            } else {
              return this.observeEvents(events, args, event, result);
            }
          }
        },
        onInvalidTransition: function onInvalidTransition(transition, from, to) {
          throw new Exception("transition is invalid in current state", transition, from, to, this.state);
        },
        onPendingTransition: function onPendingTransition(transition, from, to) {
          throw new Exception("transition is invalid while previous transition is still in progress", transition, from, to, this.state);
        }
      }); //-------------------------------------------------------------------------------------------------

      module.exports = JSM; //-------------------------------------------------------------------------------------------------

      /***/
    },
    /* 5 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict"; //-----------------------------------------------------------------------------------------------

      var mixin = __webpack_require__(0),
          camelize = __webpack_require__(2),
          plugin = __webpack_require__(1),
          Config = __webpack_require__(3),
          JSM = __webpack_require__(4); //-----------------------------------------------------------------------------------------------


      var PublicMethods = {
        is: function is(state) {
          return this._fsm.is(state);
        },
        can: function can(transition) {
          return this._fsm.can(transition);
        },
        cannot: function cannot(transition) {
          return this._fsm.cannot(transition);
        },
        observe: function observe() {
          return this._fsm.observe(arguments);
        },
        transitions: function transitions() {
          return this._fsm.transitions();
        },
        allTransitions: function allTransitions() {
          return this._fsm.allTransitions();
        },
        allStates: function allStates() {
          return this._fsm.allStates();
        },
        onInvalidTransition: function onInvalidTransition(t, from, to) {
          return this._fsm.onInvalidTransition(t, from, to);
        },
        onPendingTransition: function onPendingTransition(t, from, to) {
          return this._fsm.onPendingTransition(t, from, to);
        }
      };
      var PublicProperties = {
        state: {
          configurable: false,
          enumerable: true,
          get: function get() {
            return this._fsm.state;
          },
          set: function set(state) {
            throw Error('use transitions to change state');
          }
        } //-----------------------------------------------------------------------------------------------

      };

      function StateMachine(options) {
        return apply(this || {}, options);
      }

      function factory() {
        var cstor, options;

        if (typeof arguments[0] === 'function') {
          cstor = arguments[0];
          options = arguments[1] || {};
        } else {
          cstor = function cstor() {
            this._fsm.apply(this, arguments);
          };

          options = arguments[0] || {};
        }

        var config = new Config(options, StateMachine);
        build(cstor.prototype, config);
        cstor.prototype._fsm.config = config; // convenience access to shared config without needing an instance

        return cstor;
      } //-------------------------------------------------------------------------------------------------


      function apply(instance, options) {
        var config = new Config(options, StateMachine);
        build(instance, config);

        instance._fsm();

        return instance;
      }

      function build(target, config) {
        if (_typeof(target) !== 'object' || Array.isArray(target)) throw Error('StateMachine can only be applied to objects');
        plugin.build(target, config);
        Object.defineProperties(target, PublicProperties);
        mixin(target, PublicMethods);
        mixin(target, config.methods);
        config.allTransitions().forEach(function (transition) {
          target[camelize(transition)] = function () {
            return this._fsm.fire(transition, [].slice.call(arguments));
          };
        });

        target._fsm = function () {
          this._fsm = new JSM(this, config);

          this._fsm.init(arguments);
        };
      } //-----------------------------------------------------------------------------------------------


      StateMachine.version = '3.0.1';
      StateMachine.factory = factory;
      StateMachine.apply = apply;
      StateMachine.defaults = {
        wildcard: '*',
        init: {
          name: 'init',
          from: 'none'
        } //===============================================================================================

      };
      module.exports = StateMachine;
      /***/
    },
    /* 6 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      module.exports = function (message, transition, from, to, current) {
        this.message = message;
        this.transition = transition;
        this.from = from;
        this.to = to;
        this.current = current;
      };
      /***/

    }])
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
(function (global, factory) {
  "use strict";

  if (( false ? undefined : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }

      return factory(w);
    };
  } else {
    factory(global);
  } // Pass this if window is not defined yet

})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";

  var arr = [];
  var document = window.document;
  var getProto = Object.getPrototypeOf;
  var _slice = arr.slice;
  var concat = arr.concat;
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};

  var isFunction = function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    return typeof obj === "function" && typeof obj.nodeType !== "number";
  };

  var isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
  };

  var preservedScriptAttributes = {
    type: true,
    src: true,
    noModule: true
  };

  function DOMEval(code, doc, node) {
    doc = doc || document;
    var i,
        script = doc.createElement("script");
    script.text = code;

    if (node) {
      for (i in preservedScriptAttributes) {
        if (node[i]) {
          script[i] = node[i];
        }
      }
    }

    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  function toType(obj) {
    if (obj == null) {
      return obj + "";
    } // Support: Android <=2.3 only (functionish RegExp)


    return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module


  var version = "3.3.1",
      // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  },
      // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function toArray() {
      return _slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      // Return all the elements in a clean array
      if (num == null) {
        return _slice.call(this);
      } // Return just the one element from the set


      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function each(callback) {
      return jQuery.each(this, callback);
    },
    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (_typeof(target) !== "object" && !isFunction(target)) {
      target = {};
    } // Extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          src = target[name];
          copy = options[name]; // Prevent never-ending loop

          if (target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && Array.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            } // Never move original objects, clone them


            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function error(msg) {
      throw new Error(msg);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function isEmptyObject(obj) {
      /* eslint-disable no-unused-vars */
      // See https://github.com/eslint/eslint/issues/6125
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    // Evaluates a script in a global context
    globalEval: function globalEval(code) {
      DOMEval(code);
    },
    each: function each(obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;

        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },
    // Support: Android <=4.0 only
    trim: function trim(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function inArray(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function merge(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      for (; j < len; j++) {
        first[i++] = second[j];
      }

      first.length = i;
      return first;
    },
    grep: function grep(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);

        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },
    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = []; // Go through the array, translating each of the items to their new values

      if (isArrayLike(elems)) {
        length = elems.length;

        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      } // Flatten any nested arrays


      return concat.apply([], ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  } // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.3
   * https://sizzlejs.com/
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2016-08-08
   */
  function (window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        // Local document vars
    setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        // Instance-specific data
    expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        sortOrder = function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
      }

      return 0;
    },
        // Instance methods
    hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf as it's faster than native
    // https://jsperf.com/thor-indexof-vs-for/5
    indexOf = function indexOf(list, elem) {
      var i = 0,
          len = list.length;

      for (; i < len; i++) {
        if (list[i] === elem) {
          return i;
        }
      }

      return -1;
    },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        // Regular expressions
    // http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = "[\\x20\\t\\r\\n\\f]",
        // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
    identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
    ".*" + ")\\)|)",
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
      "ID": new RegExp("^#(" + identifier + ")"),
      "CLASS": new RegExp("^\\.(" + identifier + ")"),
      "TAG": new RegExp("^(" + identifier + "|[*])"),
      "ATTR": new RegExp("^" + attributes),
      "PSEUDO": new RegExp("^" + pseudos),
      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
      "bool": new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    },
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        // CSS escapes
    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function funescape(_, escaped, escapedWhitespace) {
      var high = "0x" + escaped - 0x10000; // NaN means non-codepoint
      // Support: Firefox<24
      // Workaround erroneous numeric interpretation of +"0x"

      return high !== high || escapedWhitespace ? escaped : high < 0 ? // BMP codepoint
      String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
      String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    },
        // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
        if (ch === "\0") {
          return "\uFFFD";
        } // Control characters and (dependent upon position) numbers get escaped as code points


        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      } // Other potentially-special ASCII characters get backslash-escaped


      return "\\" + ch;
    },
        // Used for iframes
    // See setDocument()
    // Removing the function wrapper causes a "Permission Denied"
    // error in IE
    unloadHandler = function unloadHandler() {
      setDocument();
    },
        disabledAncestor = addCombinator(function (elem) {
      return elem.disabled === true && ("form" in elem || "label" in elem);
    }, {
      dir: "parentNode",
      next: "legend"
    }); // Optimize for push.apply( _, NodeList )


    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
      // Detect silently failing push.apply

      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply: arr.length ? // Leverage slice if possible
        function (target, els) {
          push_native.apply(target, slice.call(els));
        } : // Support: IE<9
        // Otherwise append directly
        function (target, els) {
          var j = target.length,
              i = 0; // Can't trust NodeList.length

          while (target[j++] = els[i++]) {}

          target.length = j - 1;
        }
      };
    }

    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          // nodeType defaults to 9, since context defaults to document
      nodeType = context ? context.nodeType : 9;
      results = results || []; // Return early from calls with invalid selector or context

      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      } // Try to shortcut find operations (as opposed to filters) in HTML documents


      if (!seed) {
        if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
          setDocument(context);
        }

        context = context || document;

        if (documentIsHTML) {
          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist)
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            // ID selector
            if (m = match[1]) {
              // Document context
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                } // Element context

              } else {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } // Type selector

            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results; // Class selector
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          } // Take advantage of querySelectorAll


          if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            if (nodeType !== 1) {
              newContext = context;
              newSelector = selector; // qSA looks outside Element context, which is not what we want
              // Thanks to Andrew Dupont for this workaround technique
              // Support: IE <=8
              // Exclude object elements
            } else if (context.nodeName.toLowerCase() !== "object") {
              // Capture the context ID, setting it first if necessary
              if (nid = context.getAttribute("id")) {
                nid = nid.replace(rcssescape, fcssescape);
              } else {
                context.setAttribute("id", nid = expando);
              } // Prefix every selector in the list


              groups = tokenize(selector);
              i = groups.length;

              while (i--) {
                groups[i] = "#" + nid + " " + toSelector(groups[i]);
              }

              newSelector = groups.join(","); // Expand context for sibling selectors

              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            }

            if (newSelector) {
              try {
                push.apply(results, newContext.querySelectorAll(newSelector));
                return results;
              } catch (qsaError) {} finally {
                if (nid === expando) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        }
      } // All others


      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */


    function createCache() {
      var keys = [];

      function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key + " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }

        return cache[key + " "] = value;
      }

      return cache;
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */


    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */


    function assert(fn) {
      var el = document.createElement("fieldset");

      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        // Remove from its parent by default
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        } // release memory in IE


        el = null;
      }
    }
    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */


    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;

      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */


    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

      if (diff) {
        return diff;
      } // Check if b follows a


      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    }
    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */


    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */


    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */


    function createDisabledPseudo(disabled) {
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function (elem) {
        // Only certain elements can match :enabled or :disabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if ("form" in elem) {
          // Check for inherited disabledness on relevant non-disabled elements:
          // * listed form-associated elements in a disabled fieldset
          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
          // * option elements in a disabled optgroup
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
          // All such elements have a "form" property.
          if (elem.parentNode && elem.disabled === false) {
            // Option elements defer to a parent optgroup if present
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            } // Support: IE 6 - 11
            // Use the isDisabled shortcut property to check for disabled fieldset ancestors


            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

            /* jshint -W018 */
            elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
          }

          return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        } // Remaining elements are neither :enabled nor :disabled


        return false;
      };
    }
    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */


    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length; // Match elements found at the specified indexes

          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */


    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    } // Expose support vars for convenience


    support = Sizzle.support = {};
    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */

    isXML = Sizzle.isXML = function (elem) {
      // documentElement is verified for cases where it doesn't yet exist
      // (such as loading iframes in IE - #4833)
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return documentElement ? documentElement.nodeName !== "HTML" : false;
    };
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */


    setDocument = Sizzle.setDocument = function (node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected

      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      } // Update global variables


      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document); // Support: IE 9-11, Edge
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)

      if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        // Support: IE 11, Edge
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      }
      /* Attributes
      ---------------------------------------------------------------------- */
      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)


      support.attributes = assert(function (el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      /* getElement(s)By*
      ---------------------------------------------------------------------- */
      // Check if getElementsByTagName("*") returns only elements

      support.getElementsByTagName = assert(function (el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      }); // Support: IE<9

      support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test

      support.getById = assert(function (el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      }); // ID filter and find

      if (support.getById) {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };

        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        }; // Support: IE 6 - 7 only
        // getElementById is not reliable as a find shortcut


        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);

            if (elem) {
              // Verify the id attribute
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              } // Fall back on getElementsByName


              elems = context.getElementsByName(id);
              i = 0;

              while (elem = elems[i++]) {
                node = elem.getAttributeNode("id");

                if (node && node.value === id) {
                  return [elem];
                }
              }
            }

            return [];
          }
        };
      } // Tag


      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,
            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName(tag); // Filter out possible comments

        if (tag === "*") {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }

        return results;
      }; // Class

      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */
      // QSA and matchesSelector support
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


      rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378

      rbuggyQSA = [];

      if (support.qsa = rnative.test(document.querySelectorAll)) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (el) {
          // Select is set to empty string on purpose
          // This is to test IE's treatment of not explicitly
          // setting a boolean content attribute,
          // since its presence should be enough
          // https://bugs.jquery.com/ticket/12359
          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
          // Nothing should be selected when empty strings follow ^= or $= or *=
          // The test attribute must be unknown in Opera but "safe" for WinRT
          // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          } // Support: IE8
          // Boolean attributes and "value" are not treated correctly


          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          } // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests


          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          } // Support: Safari 8+, iOS 8+
          // https://bugs.webkit.org/show_bug.cgi?id=136851
          // In-page `selector#id sibling-combinator selector` fails


          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        });
        assert(function (el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
          // The type and name attributes are restricted during .innerHTML assignment

          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D"); // Support: IE8
          // Enforce case-sensitivity of name attribute

          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests


          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: IE9-11+
          // IE's :disabled selector does not pick up the children of disabled fieldsets


          docElem.appendChild(el).disabled = true;

          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Opera 10-11 does not throw on post-comma invalid pseudos


          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
        assert(function (el) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
          // Gecko does not error, returns false instead

          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      /* Contains
      ---------------------------------------------------------------------- */

      hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself

      contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }

        return false;
      };
      /* Sorting
      ---------------------------------------------------------------------- */
      // Document order sorting

      sortOrder = hasCompare ? function (a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true;
          return 0;
        } // Sort on method existence if only one input has compareDocumentPosition


        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

        if (compare) {
          return compare;
        } // Calculate position if both inputs belong to the same document


        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
        1; // Disconnected nodes

        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
          // Choose the first element that is related to our preferred document
          if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
            return -1;
          }

          if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
            return 1;
          } // Maintain original order


          return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }

        return compare & 4 ? -1 : 1;
      } : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b]; // Parentless nodes are either documents or disconnected

        if (!aup || !bup) {
          return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        } // Otherwise we need full lists of their ancestors for comparison


        cur = a;

        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }

        cur = b;

        while (cur = cur.parentNode) {
          bp.unshift(cur);
        } // Walk down the tree looking for a discrepancy


        while (ap[i] === bp[i]) {
          i++;
        }

        return i ? // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
        ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      };
      return document;
    };

    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      } // Make sure that attribute selectors are quoted


      expr = expr.replace(rattributeQuotes, "='$1']");

      if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {}
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
      // Set document vars if needed
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }

      return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }

      var fn = Expr.attrHandle[name.toLowerCase()],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
      val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };

    Sizzle.escape = function (sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };

    Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */


    Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0; // Unless we *know* we can detect duplicates, assume their presence

      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);

      if (hasDuplicate) {
        while (elem = results[i++]) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }

        while (j--) {
          results.splice(duplicates[j], 1);
        }
      } // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225


      sortInput = null;
      return results;
    };
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */


    getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]) {
          // Do not traverse comment nodes
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (jQuery #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      } // Do not include comment or processing instruction nodes


      return ret;
    };

    Expr = Sizzle.selectors = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        "ATTR": function ATTR(match) {
          match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }

          return match.slice(0, 4);
        },
        "CHILD": function CHILD(match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase();

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            } // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1


            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },
        "PSEUDO": function PSEUDO(match) {
          var excess,
              unquoted = !match[6] && match[2];

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          } // Accept quoted arguments as-is


          if (match[3]) {
            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          } // Return only captures needed by the pseudo filter method (type and argument)


          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function TAG(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function CLASS(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function ATTR(name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);

            if (result == null) {
              return operator === "!=";
            }

            if (!operator) {
              return true;
            }

            result += "";
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        "CHILD": function CHILD(type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;

                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  } // Reverse direction for :only-* (if we haven't yet done so)


                  start = dir = type === "only" && !start && "nextSibling";
                }

                return true;
              }

              start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                // ...in a gzip-friendly way
                node = parent;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];

                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                } // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                if (diff === false) {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)

                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }

                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              } // Incorporate the offset, then check against cycle size


              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        "PSEUDO": function PSEUDO(pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does

          if (fn[expando]) {
            return fn(argument);
          } // But maintain support for old signatures


          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;

              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length; // Match elements unmatched by `matcher`

            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results); // Don't keep the element (issue #299)

            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function (text) {
          text = text.replace(runescape, funescape);
          return function (elem) {
            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang) {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }

          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;

            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);

            return false;
          };
        }),
        // Miscellaneous
        "target": function target(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function root(elem) {
          return elem === docElem;
        },
        "focus": function focus(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function checked(elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        "selected": function selected(elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },
        // Contents
        "empty": function empty(elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
          //   but not by others (comment: 8; processing instruction: 7; etc.)
          // nodeType < 6 works because attributes (2) do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }

          return true;
        },
        "parent": function parent(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        // Element/input types
        "header": function header(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function input(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function button(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function text(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        // Position-in-collection
        "first": createPositionalPseudo(function () {
          return [0];
        }),
        "last": createPositionalPseudo(function (matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; --i >= 0;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; ++i < length;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }

    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    } // Easy API for creating new setFilters


    function setFilters() {}

    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;

      while (soFar) {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }

          groups.push(tokens = []);
        }

        matched = false; // Combinators

        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        } // Filters


        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }

        if (!matched) {
          break;
        }
      } // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens


      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
      tokenCache(selector, groups).slice(0);
    };

    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";

      for (; i < len; i++) {
        selector += tokens[i].value;
      }

      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }

        return false;
      } : // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                if (newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }

        return false;
      };
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;

        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }

        return true;
      } : matchers[0];
    }

    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;

      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }

      return results;
    }

    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);

            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }

      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }

      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            // Get initial elements from seed or context
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
        [] : // ...otherwise use results directly
        results : matcherIn; // Find primary matches

        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        } // Apply postFilter


        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

          i = temp.length;

          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;

              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }

              postFinder(null, matcherOut = [], temp, xml);
            } // Move matched elements from seed to results to keep them synchronized


            i = matcherOut.length;

            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          } // Add elements to results, through postFinder if defined

        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
        return indexOf(checkContext, elem) > -1;
      }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

        checkContext = null;
        return ret;
      }];

      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;

            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }

            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1).concat({
              value: tokens[i - 2].type === " " ? "*" : ""
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }

          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function superMatcher(seed, context, xml, results, outermost) {
        var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
            // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
            len = elems.length;

        if (outermost) {
          outermostContext = context === document || context || outermost;
        } // Add elements passing elementMatchers directly to results
        // Support: IE<9, Safari
        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


        for (; i !== len && (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0;

            if (!context && elem.ownerDocument !== document) {
              setDocument(elem);
              xml = !documentIsHTML;
            }

            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document, xml)) {
                results.push(elem);
                break;
              }
            }

            if (outermost) {
              dirruns = dirrunsUnique;
            }
          } // Track unmatched elements for set filters


          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = !matcher && elem) {
              matchedCount--;
            } // Lengthen the array for every element, matched or not


            if (seed) {
              unmatched.push(elem);
            }
          }
        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
        // makes the latter nonnegative.


        matchedCount += i; // Apply set filters to unmatched elements
        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
        // no element matchers and no seed.
        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
        // numerically zero.

        if (bySet && i !== matchedCount) {
          j = 0;

          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            } // Discard index placeholder values to get only actual matches


            setMatched = condense(setMatched);
          } // Add matches to results


          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        } // Override manipulation of globals by nested matchers


        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = Sizzle.compile = function (selector, match
    /* Internal Use Only */
    ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
          match = tokenize(selector);
        }

        i = match.length;

        while (i--) {
          cached = matcherFromTokens(match[i]);

          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        } // Cache the compiled function


        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

        cached.selector = selector;
      }

      return cached;
    };
    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */


    select = Sizzle.select = function (selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)

      if (match.length === 1) {
        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0);

        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

          if (!context) {
            return results; // Precompiled matchers will still verify ancestry, so step up a level
          } else if (compiled) {
            context = context.parentNode;
          }

          selector = selector.slice(tokens.shift().value.length);
        } // Fetch a seed set for right-to-left matching


        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

        while (i--) {
          token = tokens[i]; // Abort if we hit a combinator

          if (Expr.relative[type = token.type]) {
            break;
          }

          if (find = Expr.find[type]) {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);

              if (!selector) {
                push.apply(results, seed);
                return results;
              }

              break;
            }
          }
        }
      } // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above


      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    }; // One-time assignments
    // Sort stability


    support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function

    support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

    setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*

    support.sortDetached = assert(function (el) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    }); // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

    if (!assert(function (el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function (elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    } // Support: IE<9
    // Use defaultValue in place of getAttribute("value")


    if (!support.attributes || !assert(function (el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function (elem, name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    } // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies


    if (!assert(function (el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function (elem, name, isXML) {
        var val;

        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }

    return Sizzle;
  }(window);

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors; // Deprecated

  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;

  var dir = function dir(elem, _dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[_dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }

        matched.push(elem);
      }
    }

    return matched;
  };

  var _siblings = function siblings(n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };

  var rneedsContext = jQuery.expr.match.needsContext;

  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  ;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    } // Single element


    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    } // Arraylike of elements (jQuery, arguments, Array)


    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    } // Filtered directly for both simple and complex selectors


    return jQuery.filter(qualifier, elements, not);
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function find(selector) {
      var i,
          ret,
          len = this.length,
          self = this;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = this.pushStack([]);

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function is(selector) {
      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  }); // Initialize a jQuery object
  // A central reference to the root jQuery(document)

  var rootjQuery,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)


    root = root || rootjQuery; // Handle HTML strings

    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }

          return this;
        } // HANDLE: $(expr, $(...))

      } else if (!context || context.jquery) {
        return (context || root).find(selector); // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function has(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function () {
        var i = 0;

        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function closest(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function index(elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // Index in selector


      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      } // Locate the position of the desired element


      return indexOf.call(this, // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function add(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

    return cur;
  }

  jQuery.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return _siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return _siblings(elem.firstChild);
    },
    contents: function contents(elem) {
      if (nodeName(elem, "iframe")) {
        return elem.contentDocument;
      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.


      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }

      return jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        } // Reverse order for parents* and prev-derivatives


        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }

      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value for non-forgettable lists
    memory,
        // Flag to know if list was already fired
    _fired,
        // Flag to prevent firing
    _locked,
        // Actual callback list
    list = [],
        // Queue of execution data for repeatable lists
    queue = [],
        // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
        // Fire callbacks
    fire = function fire() {
      // Enforce single-firing
      _locked = _locked || options.once; // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes

      _fired = firing = true;

      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();

        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      } // Forget the data if we're done with it


      if (!options.memory) {
        memory = false;
      }

      firing = false; // Clean up if we're done firing for good

      if (_locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []; // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function add() {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function remove() {
        jQuery.each(arguments, function (_, arg) {
          var index;

          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1); // Handle firing indexes

            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function empty() {
        if (list) {
          list = [];
        }

        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function disable() {
        _locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function disabled() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function lock() {
        _locked = queue = [];

        if (!memory && !firing) {
          list = memory = "";
        }

        return this;
      },
      locked: function locked() {
        return !!_locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function fireWith(context, args) {
        if (!_locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);

          if (!firing) {
            fire();
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function fire() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function fired() {
        return !!_fired;
      }
    };

    return self;
  };

  function Identity(v) {
    return v;
  }

  function Thrower(ex) {
    throw ex;
  }

  function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject); // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject); // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      } // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.

    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }

  jQuery.extend({
    Deferred: function Deferred(func) {
      var tuples = [// action, add listener, callbacks,
      // ... .then handlers, argument index, [final state]
      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          _state = "pending",
          _promise = {
        state: function state() {
          return _state;
        },
        always: function always() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function _catch(fn) {
          return _promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function pipe()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function then(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;

          function resolve(depth, deferred, handler, special) {
            return function () {
              var that = this,
                  args = arguments,
                  mightThrow = function mightThrow() {
                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts

                if (depth < maxDepth) {
                  return;
                }

                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48

                if (returned === deferred.promise()) {
                  throw new TypeError("Thenable self-resolution");
                } // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve `then` only once


                then = returned && ( // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                _typeof(returned) === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                  } // Handle all other returned values

                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  } // Process the value(s)
                  // Default process is resolve


                  (special || deferred.resolveWith)(that, args);
                }
              },
                  // Only normal processors (resolve) catch and reject exceptions
              process = special ? mightThrow : function () {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                  } // Support: Promises/A+ section 2.3.3.3.4.1
                  // https://promisesaplus.com/#point-61
                  // Ignore post-resolution exceptions


                  if (depth + 1 >= maxDepth) {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }

                    deferred.rejectWith(that, args);
                  }
                }
              }; // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors


              if (depth) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }

                window.setTimeout(process);
              }
            };
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function promise(obj) {
          return obj != null ? jQuery.extend(obj, _promise) : _promise;
        }
      },
          deferred = {}; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[5]; // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add

        _promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            _state = stateString;
          }, // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable, // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable, // progress_callbacks.lock
          tuples[0][2].lock, // progress_handlers.lock
          tuples[0][3].lock);
        } // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire


        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }

        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        }; // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith


        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      _promise.promise(deferred); // Call given func if any


      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function when(singleValue) {
      var // count of uncompleted subordinates
      remaining = arguments.length,
          // count of unprocessed arguments
      i = remaining,
          // subordinate fulfillment data
      resolveContexts = Array(i),
          resolveValues = _slice.call(arguments),
          // the master Deferred
      master = jQuery.Deferred(),
          // subordinate callback factory
      updateFunc = function updateFunc(i) {
        return function (value) {
          resolveContexts[i] = this;
          resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;

          if (! --remaining) {
            master.resolveWith(resolveContexts, resolveValues);
          }
        };
      }; // Single- and empty arguments are adopted like Promise.resolve


      if (remaining <= 1) {
        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

        if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return master.then();
        }
      } // Multiple arguments are aggregated like Promise.all array elements


      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), master.reject);
      }

      return master.promise();
    }
  }); // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.

  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  }; // The deferred used on DOM ready


  var readyList = jQuery.Deferred();

  jQuery.fn.ready = function (fn) {
    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    .catch(function (error) {
      jQuery.readyException(error);
    });
    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function ready(wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  } // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon


  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

    window.addEventListener("load", completed);
  } // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function


  var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null; // Sets many values

    if (toType(key) === "object") {
      chainable = true;

      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      } // Sets one value

    } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null; // ...except when executing function values
        } else {
          bulk = fn;

          fn = function fn(elem, key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    if (chainable) {
      return elems;
    } // Gets


    if (bulk) {
      return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
  }; // Matches dashed string for camelizing


  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

  function fcamelCase(all, letter) {
    return letter.toUpperCase();
  } // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)


  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }

  var acceptData = function acceptData(owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };

  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;
  Data.prototype = {
    cache: function cache(owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando]; // If not, create one

      if (!value) {
        value = {}; // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.

        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }

      return value;
    },
    set: function set(owner, data, value) {
      var prop,
          cache = this.cache(owner); // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)

      if (typeof data === "string") {
        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }

      return cache;
    },
    get: function get(owner, key) {
      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function access(owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      } // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //


      this.set(owner, key, value); // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]

      return value !== undefined ? value : key;
    },
    remove: function remove(owner, key) {
      var i,
          cache = owner[this.expando];

      if (cache === undefined) {
        return;
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key); // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace

          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }

        i = key.length;

        while (i--) {
          delete cache[key[i]];
        }
      } // Remove the expando if there's no more data


      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function hasData(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data(); //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;

  function getData(data) {
    if (data === "true") {
      return true;
    }

    if (data === "false") {
      return false;
    }

    if (data === "null") {
      return null;
    } // Only convert to a number if it doesn't change the string


    if (data === +data + "") {
      return +data;
    }

    if (rbrace.test(data)) {
      return JSON.parse(data);
    }

    return data;
  }

  function dataAttr(elem, key, data) {
    var name; // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute

    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {} // Make sure we set the data so it isn't changed later


        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  jQuery.extend({
    hasData: function hasData(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function data(elem, name, _data) {
      return dataUser.access(elem, name, _data);
    },
    removeData: function removeData(elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function _data(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function _removeData(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function data(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);

          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;

            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }

            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (_typeof(key) === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }

      return access(this, function (value) {
        var data; // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.

        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);

          if (data !== undefined) {
            return data;
          } // Attempt to "discover" the data in
          // HTML5 custom data-* attrs


          data = dataAttr(elem, key);

          if (data !== undefined) {
            return data;
          } // We tried really hard, but the data doesn't exist.


          return;
        } // Set the data...


        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function removeData(key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function queue(elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function dequeue(elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // Clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];

  var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem; // Inline style trumps all

    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
  };

  var swap = function swap(elem, options, callback, args) {
    var ret,
        name,
        old = {}; // Remember the old values, and insert the new ones

    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.apply(elem, args || []); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        // Starting value computation is required for potential unit mismatches
    initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2; // Trust units reported by jQuery.css

      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

      initialInUnit = +initial || 1;

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit);

        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }

        initialInUnit = initialInUnit / scale;
      }

      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

      valueParts = valueParts || [];
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }

    return adjusted;
  }

  var defaultDisplayMap = {};

  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
      return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);

    if (display === "none") {
      display = "block";
    }

    defaultDisplayMap[nodeName] = display;
    return display;
  }

  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length; // Determine new display value for elements that need to change

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      display = elem.style.display;

      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;

          if (!values[index]) {
            elem.style.display = "";
          }
        }

        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none"; // Remember what we're overwriting

          dataPriv.set(elem, "display", display);
        }
      }
    } // Set the display of the elements in a second loop to avoid constant reflow


    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i; // We have to close these tags to support XHTML (#13200)

  var wrapMap = {
    // Support: IE <=9 only
    option: [1, "<select multiple='multiple'>", "</select>"],
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  }; // Support: IE <=9 only

  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;

  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }

    return ret;
  } // Mark scripts as having already been evaluated


  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }

  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        contains,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

          j = wrap[0];

          while (j--) {
            tmp = tmp.lastChild;
          } // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit


          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

          tmp.textContent = "";
        }
      }
    } // Remove wrapper from fragment


    fragment.textContent = "";
    i = 0;

    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      contains = jQuery.contains(elem.ownerDocument, elem); // Append to fragment

      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

      if (contains) {
        setGlobalEval(tmp);
      } // Capture executables


      if (scripts) {
        j = 0;

        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    return fragment;
  }

  (function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)

    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input); // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments

    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned

    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
  })();

  var documentElement = document.documentElement;
  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  } // Support: IE <=9 only
  // See #13393 for more info


  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function _on(elem, types, selector, data, fn, one) {
    var origFn, type; // Types can be a map of types/handlers

    if (_typeof(types) === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }

      for (type in types) {
        _on(elem, type, selector, data, types[type], one);
      }

      return elem;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;

      fn = function fn(event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      }; // Use same guid so caller can remove using origFn


      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }

    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)

      if (!elemData) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      } // Handle multiple events separated by a space


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove data and the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function dispatch(nativeEvent) {
      // Make a writable jQuery.Event from the native event object
      var event = jQuery.event.fix(nativeEvent);
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // Triggered event must either 1) have no namespace, or 2) have namespace(s)
          // a subset or equal to those in the bound event (both can have no namespace).
          if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target; // Find delegate handlers

      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};

            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }

            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      cur = this;

      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: _handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    addProp: function addProp(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function set(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function fix(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      focus: {
        // Fire native event if possible so blur/focus sequence is correct
        trigger: function trigger() {
          if (this !== safeActiveElement() && this.focus) {
            this.focus();
            return false;
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === safeActiveElement() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      click: {
        // For checkbox, fire native event so checked state will be right
        trigger: function trigger() {
          if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
            this.click();
            return false;
          }
        },
        // For cross-browser consistency, don't fire native .click() on links
        _default: function _default(event) {
          return nodeName(event.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  };

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)

      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Includes all common event props including KeyEvent and MouseEvent specific props

  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function which(event) {
      var button = event.button; // Add which for key events

      if (event.which == null && rkeyEvent.test(event.type)) {
        return event.charCode != null ? event.charCode : event.keyCode;
      } // Add which for click: 1 === left; 2 === middle; 3 === right


      if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
        if (button & 1) {
          return 1;
        }

        if (button & 2) {
          return 3;
        }

        if (button & 4) {
          return 2;
        }

        return 0;
      }

      return event.which;
    }
  }, jQuery.event.addProp); // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function on(types, selector, data, fn) {
      return _on(this, types, selector, data, fn);
    },
    one: function one(types, selector, data, fn) {
      return _on(this, types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (_typeof(types) === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var
  /* eslint-disable max-len */
  // See https://github.com/eslint/eslint/issues/3229
  rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

  /* eslint-enable */
  // Support: IE <=10 - 11, Edge 12 - 13 only
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
      return;
    } // 1. Copy private data: events, handlers, etc.


    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.access(src);
      pdataCur = dataPriv.set(dest, pdataOld);
      events = pdataOld.events;

      if (events) {
        delete pdataCur.handle;
        pdataCur.events = {};

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    } // 2. Copy user data


    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  } // Fix IE bugs, see support tests


  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = concat.apply([], args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);

        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }

        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      } // Require either new content or an interest in ignored elements to invoke the callback


      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length; // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).

        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl) {
                  jQuery._evalUrl(node.src);
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), doc, node);
              }
            }
          }
        }
      }
    }

    return collection;
  }

  function _remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && jQuery.contains(node.ownerDocument, node)) {
          setGlobalEval(getAll(node, "script"));
        }

        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function htmlPrefilter(html) {
      return html.replace(rxhtmlTag, "<$1></$2>");
    },
    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = jQuery.contains(elem.ownerDocument, elem); // Fix IE cloning issues

      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      } // Return the cloned set


      return clone;
    },
    cleanData: function cleanData(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove


            elem[dataPriv.expando] = undefined;
          }

          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function detach(selector) {
      return _remove(this, selector, true);
    },
    remove: function remove(selector) {
      return _remove(this, selector);
    },
    text: function text(value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function append() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function prepend() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function before() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function after() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function empty() {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

          elem.textContent = "";
        }
      }

      return this;
    },
    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function html(value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {
              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function replaceWith() {
      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));

          if (parent) {
            parent.replaceChild(elem, this);
          }
        } // Force callback invocation

      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit

        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

  var getStyles = function getStyles(elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  };

  var rboxStyle = new RegExp(cssExpand.join("|"), "i");

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }

      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't

      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements

      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)

      div.style.position = "absolute";
      scrollboxSizeVal = div.offsetWidth === 36 || "absolute";
      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed

      div = null;
    }

    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }

    var pixelPositionVal,
        boxSizingReliableVal,
        scrollboxSizeVal,
        pixelBoxStylesVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div"); // Finish early in limited (non-browser) environments

    if (!div.style) {
      return;
    } // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)


    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function boxSizingReliable() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function pixelPosition() {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function scrollboxSize() {
        computeStyleTests();
        return scrollboxSizeVal;
      }
    });
  })();

  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
    computed = computed || getStyles(elem); // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)

    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
        ret = jQuery.style(elem, name);
      } // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values


      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width; // Revert the changed values

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret !== undefined ? // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }

  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function get() {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        } // Hook needed; redefine it so that the support test is not executed again.


        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  var // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style; // Return a css property mapped to a potentially vendor prefixed property

  function vendorPropName(name) {
    // Shortcut for names that are not vendor prefixed
    if (name in emptyStyle) {
      return name;
    } // Check for vendor prefixed names


    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  } // Return a property mapped along what jQuery.cssProps suggests or to
  // a vendor prefixed property.


  function finalPropName(name) {
    var ret = jQuery.cssProps[name];

    if (!ret) {
      ret = jQuery.cssProps[name] = vendorPropName(name) || name;
    }

    return ret;
  }

  function setPositiveNumber(elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }

  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0; // Adjustment may not be necessary

    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === "margin") {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"

      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // For "content" or "padding", subtract border


        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    } // Account for positive content-box scroll gutter when requested by providing computedVal


    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5));
    }

    return delta;
  }

  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
        val = curCSS(elem, dimension, styles),
        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox; // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.

    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }

      val = "auto";
    } // Check for style in case a browser which returns unreliable values
    // for getComputedStyle silently falls back to the reliable elem.style


    valueIsBorderBox = valueIsBorderBox && (support.boxSizingReliable() || val === elem.style[dimension]); // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)

    if (val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") {
      val = elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)]; // offsetWidth/offsetHeight provide border-box values

      valueIsBorderBox = true;
    } // Normalize "" and auto


    val = parseFloat(val) || 0; // Adjust for the element's box model

    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),
          style = elem.style; // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Gets hook for the prefixed version, then unprefixed version


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

      if (value !== undefined) {
        type = _typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)

        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret); // Fixes bug #9237

          type = "number";
        } // Make sure that null and NaN values aren't set (#7116)


        if (value == null || value !== value) {
          return;
        } // If a number was passed in, add the unit (except for certain CSS properties)


        if (type === "number") {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        } // background-* props affect original clone's values


        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function css(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Try prefixed name followed by the unprefixed name


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = curCSS(elem, name, styles);
      } // Convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      } // Make numeric if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }

      return val;
    }
  });
  jQuery.each(["height", "width"], function (i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function get(elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function set(elem, value, extra) {
        var matches,
            styles = getStyles(elem),
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            subtract = extra && boxModelAdjustment(elem, dimension, extra, isBorderBox, styles); // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)

        if (isBorderBox && support.scrollboxSize() === styles.position) {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
        } // Convert to pixels if value adjustment is needed


        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }

        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft: 0
      }, function () {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  }); // These hooks are used by animate to expand properties

  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function expand(value) {
        var i = 0,
            expanded = {},
            // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (prefix !== "margin") {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function css(name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (Array.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function cur() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function run(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function get(tween) {
        var result; // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.

        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        } // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.


        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function set(tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  }; // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function set(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function linear(p) {
      return p;
    },
    swing: function swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

  jQuery.fx.step = {};
  var fxNow,
      inProgress,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;

  function schedule() {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, jQuery.fx.interval);
      }

      jQuery.fx.tick();
    }
  } // Animations created synchronously will run synchronously


  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  } // Generate parameters to create a standard animation


  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {
      height: type
    }; // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right

    includeWidth = includeWidth ? 1 : 0;

    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;

    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        // We're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");

      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;

        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }

      hooks.unqueued++;
      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // Detect show/hide animations


    for (prop in props) {
      value = props[prop];

      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";

        if (value === (hidden ? "hide" : "show")) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true; // Ignore all other no-op show/hide data
          } else {
            continue;
          }
        }

        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    } // Bail out if this is a no-op like .hide().hide()


    propTween = !jQuery.isEmptyObject(props);

    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    } // Restrict "overflow" and "display" styles during box animations


    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

      restoreDisplay = dataShow && dataShow.display;

      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }

      display = jQuery.css(elem, "display");

      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      } // Animate inline elements as inline-block


      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay;
            });

            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }

          style.display = "inline-block";
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    } // Implement show/hide animations


    propTween = false;

    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          });
        } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


        if (toggle) {
          dataShow.hidden = !hidden;
        } // Show elements before animating them


        if (hidden) {
          showHide([elem], true);
        }
        /* eslint-disable no-loop-func */


        anim.done(function () {
          /* eslint-enable no-loop-func */
          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem]);
          }

          dataPriv.remove(elem, "fxshow");

          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      } // Per-property setup


      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;

        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];

      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];

      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function tick() {
      if (stopped) {
        return false;
      }

      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

      if (percent < 1 && length) {
        return remaining;
      } // If this was an empty animation, synthesize a final progress notification


      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      } // Resolve the animation and report its conclusion


      deferred.resolveWith(elem, [animation]);
      return false;
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function createTween(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function stop(gotoEnd) {
        var index = 0,
            // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;

        if (stopped) {
          return this;
        }

        stopped = true;

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // Resolve when we played the last frame; otherwise, reject


        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }

        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    } // Attach callbacks from options


    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function tweener(props, callback) {
      if (isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function prefilter(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && _typeof(speed) === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }; // Go to the end state if fx are off

    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    } // Normalize opt.queue - true/undefined/null -> "fx"


    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    } // Queueing


    opt.old = opt.complete;

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function fadeTo(speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function animate(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function doAnimation() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }

      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        } // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function finish(type) {
      if (type !== false) {
        type = type || "fx";
      }

      return this.each(function () {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0; // Enable finishing flag on private data

        data.finish = true; // Empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        } // Look for any active animations, and finish them


        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // Look for any animations in the old queue and finish them


        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // Turn off finishing flag


        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function (i, name) {
    var cssFn = jQuery.fn[name];

    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  }); // Generate shortcuts for custom animations

  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];

  jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = Date.now();

    for (; i < timers.length; i++) {
      timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (inProgress) {
      return;
    }

    inProgress = true;
    schedule();
  };

  jQuery.fx.stop = function () {
    inProgress = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }; // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);

      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };

  (function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox"; // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"

    support.checkOn = input.value !== ""; // Support: IE <=11 only
    // Must access selectedIndex to make default options select

    support.optSelected = opt.selected; // Support: IE <=11 only
    // An input loses its value after becoming a radio

    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();

  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function attr(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function removeAttr(name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function attr(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      } // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined


      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }

        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        elem.setAttribute(name, value + "");
        return value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function set(elem, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);

            if (val) {
              elem.value = val;
            }

            return value;
          }
        }
      }
    },
    removeAttr: function removeAttr(elem, value) {
      var name,
          i = 0,
          // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match(rnothtmlwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem.removeAttribute(name);
        }
      }
    }
  }); // Hooks for boolean attributes

  boolHook = {
    set: function set(elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }

      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }

      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function prop(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function removeProp(name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function prop(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        return elem[name] = value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function get(elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          if (tabindex) {
            return parseInt(tabindex, 10);
          }

          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }

          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }); // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop

  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function get(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }

        return null;
      },
      set: function set(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }

  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  }); // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }

  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }

  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }

    return [];
  }

  jQuery.fn.extend({
    addClass: function addClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }

      if (!arguments.length) {
        return this.attr("class", "");
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(value, stateVal) {
      var type = _typeof(value),
          isValidValue = type === "string" || Array.isArray(value);

      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }

      return this.each(function () {
        var className, i, self, classNames;

        if (isValidValue) {
          // Toggle individual class names
          i = 0;
          self = jQuery(this);
          classNames = classesToArray(value);

          while (className = classNames[i++]) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          } // Toggle whole class name

        } else if (value === undefined || type === "boolean") {
          className = getClass(this);

          if (className) {
            // Store className if set
            dataPriv.set(this, "__className__", className);
          } // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function hasClass(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";

      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }

      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function val(value) {
      var hooks,
          ret,
          valueIsFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value; // Handle most common string cases

          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } // Handle cases where value is null/undef or number


          return ret == null ? "" : ret;
        }

        return;
      }

      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function get(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery.text(elem));
        }
      },
      select: {
        get: function get(elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;

          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          } // Loop through all the selected options


          for (; i < max; i++) {
            option = options[i]; // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = jQuery(option).val(); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function set(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;

          while (i--) {
            option = options[i];
            /* eslint-disable no-cond-assign */

            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
            /* eslint-enable no-cond-assign */

          } // Force browsers to behave consistently when non-matching value is set


          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return values;
        }
      }
    }
  }); // Radios and checkboxes getter/setter

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function set(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };

    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  }); // Return jQuery for attributes-only inclusion

  support.focusin = "onfocusin" in window;

  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function stopPropagationCallback(e) {
    e.stopPropagation();
  };

  jQuery.extend(jQuery.event, {
    trigger: function trigger(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          lastElement,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, _typeof(event) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);

          if (event.result === false) {
            event.preventDefault();
          }
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }

            elem[type]();

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function simulate(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  }); // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function handler(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };

      jQuery.event.special[fix] = {
        setup: function setup() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }

          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function teardown() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }

  var location = window.location;
  var nonce = Date.now();
  var rquery = /\?/; // Cross-browser xml parsing

  jQuery.parseXML = function (data) {
    var xml;

    if (!data || typeof data !== "string") {
      return null;
    } // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.


    try {
      xml = new window.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }

    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }

    return xml;
  };

  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (_typeof(v) === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  } // Serialize an array of form elements or a set of
  // key/values into a query string


  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    }; // If an array was passed in, assume that it is an array of form elements.


    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&");
  };

  jQuery.fn.extend({
    serialize: function serialize() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (i, elem) {
        var val = jQuery(this).val();

        if (val == null) {
          return null;
        }

        if (Array.isArray(val)) {
          return jQuery.map(val, function (val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }

        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"),
      // Anchor tag for parsing the document origin
  originAnchor = document.createElement("a");
  originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }
  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */


  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }

        if (!firstDataType) {
          firstDataType = type;
        }
      } // Or just use first one


      finalDataType = finalDataType || firstDataType;
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  }
  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */


  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift(); // Convert to each sequential dataType

    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      } // Apply the dataFilter if provided


      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === "*") {
          current = prev; // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s.throws) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }

    return {
      state: "success",
      data: response
    };
  }

  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function ajaxSetup(target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function ajax(url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (_typeof(url) === "object") {
        options = url;
        url = undefined;
      } // Force options to be an object


      options = options || {};

      var transport,
          // URL without anti-cache param
      cacheURL,
          // Response headers
      responseHeadersString,
          responseHeaders,
          // timeout handle
      timeoutTimer,
          // Url cleanup var
      urlAnchor,
          // Request state (becomes false upon send and true upon completion)
      completed,
          // To know if global events are to be dispatched
      fireGlobals,
          // Loop variable
      i,
          // uncached part of the url
      uncached,
          // Create the final options object
      s = jQuery.ajaxSetup({}, options),
          // Callbacks context
      callbackContext = s.context || s,
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          // Status-dependent callbacks
      _statusCode = s.statusCode || {},
          // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},
          // Default abort message
      strAbort = "canceled",
          // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function getResponseHeader(key) {
          var match;

          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {};

              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase()] = match[2];
              }
            }

            match = responseHeaders[key.toLowerCase()];
          }

          return match == null ? null : match;
        },
        // Raw string
        getAllResponseHeaders: function getAllResponseHeaders() {
          return completed ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function setRequestHeader(name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function overrideMimeType(type) {
          if (completed == null) {
            s.mimeType = type;
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function statusCode(map) {
          var code;

          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                _statusCode[code] = [_statusCode[code], map[code]];
              }
            }
          }

          return this;
        },
        // Cancel the request
        abort: function abort(statusText) {
          var finalText = statusText || strAbort;

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }; // Attach deferreds


      deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/

        try {
          urlAnchor.href = s.url; // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative

          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        }
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (completed) {
        return jqXHR;
      } // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


      fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = s.type.toUpperCase(); // Determine if request has content

      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation

      cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add or update anti-cache param if needed


        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
        } // Put hash and anti-cache on the URL that will be requested (gh-1732)


        s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // Aborting is no longer a cancellation


      strAbort = "abort"; // Install callbacks on deferreds

      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error); // Get transport

      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1; // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // If request was aborted inside ajaxSend, stop there


        if (completed) {
          return jqXHR;
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e;
          } // Propagate others as results


          done(-1, e);
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText; // Ignore repeat invocations

        if (completed) {
          return;
        }

        completed = true; // Clear timeout if it exists

        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = undefined; // Cache response headers

        responseHeadersString = headers || ""; // Set readyState

        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        } // Convert no matter what (that way responseXXX fields are always set)


        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");

            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }

            modified = jqXHR.getResponseHeader("etag");

            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          } // if no content


          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent"; // if not modified
          } else if (status === 304) {
            statusText = "notmodified"; // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;

          if (status || !statusText) {
            statusText = "error";

            if (status < 0) {
              status = 0;
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(_statusCode);
        _statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getJSON: function getJSON(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function getScript(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function (i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      } // The url can be an options object (which then must have .url)


      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });

  jQuery._evalUrl = function (url) {
    return jQuery.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      "throws": true
    });
  };

  jQuery.fn.extend({
    wrapAll: function wrapAll(html) {
      var wrap;

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        } // The elements to wrap the target around


        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function wrap(html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function unwrap(selector) {
      this.parent(selector).not("body").each(function () {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };

  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };

  var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options) {
    var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest


    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function send(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          } // Override mime type if needed


          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          } // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.


          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          } // Set headers


          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          } // Callback


          _callback = function callback(type) {
            return function () {
              if (_callback) {
                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete( // File: protocol always yields status 0; see #8605, #14207
                    xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  } : {
                    text: xhr.responseText
                  }, xhr.getAllResponseHeaders());
                }
              }
            };
          }; // Listen to events


          xhr.onload = _callback();
          errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts

          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (_callback) {
                    errorCallback();
                  }
                });
              }
            };
          } // Create the abort callback


          _callback = _callback("abort");

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (_callback) {
              throw e;
            }
          }
        },
        abort: function abort() {
          if (_callback) {
            _callback();
          }
        }
      };
    }
  }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  }); // Install script dataType

  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and crossDomain

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }

    if (s.crossDomain) {
      s.type = "GET";
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain requests
    if (s.crossDomain) {
      var script, _callback2;

      return {
        send: function send(_, complete) {
          script = jQuery("<script>").prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", _callback2 = function callback(evt) {
            script.remove();
            _callback2 = null;

            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          }); // Use native DOM manipulation to avoid our domManip AJAX trickery

          document.head.appendChild(script[0]);
        },
        abort: function abort() {
          if (_callback2) {
            _callback2();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
      this[callback] = true;
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }; // Force json dataType


      s.dataTypes[0] = "json"; // Install callback

      overwritten = window[callbackName];

      window[callbackName] = function () {
        responseContainer = arguments;
      }; // Clean-up function (fires after converters)


      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        } // Save back as free


        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      }); // Delegate to script

      return "script";
    }
  }); // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337

  support.createHTMLDocument = function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }(); // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string


  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }

    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }

    var base, parsed, scripts;

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)

        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && []; // Single tag

    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };
  /**
   * Load a url into a page
   */


  jQuery.fn.load = function (url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    } // If it's a function


    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined; // Otherwise, build a param string
    } else if (params && _typeof(params) === "object") {
      type = "POST";
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }

    return this;
  }; // Attach a bunch of functions for handling common AJAX events


  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };

  jQuery.offset = {
    setOffset: function setOffset(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {}; // Set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }

      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function offset(options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }

      var rect,
          win,
          elem = this[0];

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function position() {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          doc,
          elem = this[0],
          parentOffset = {
        top: 0,
        left: 0
      }; // position:fixed elements are offset from the viewport, which itself always has zero offset

      if (jQuery.css(elem, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified

        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;

        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }

        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
        }
      } // Subtract parent offsets and element margins


      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function offsetParent() {
      return this.map(function () {
        var offsetParent = this.offsetParent;

        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        var win;

        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here

  jQuery.each(["top", "left"], function (i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

  jQuery.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function (elem, type, value) {
          var doc;

          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({
    hover: function hover(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.fn.extend({
    bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    }
  }); // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon

  jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    } // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.


    if (!isFunction(fn)) {
      return undefined;
    } // Simulated bind


    args = _slice.call(arguments, 2);

    proxy = function proxy() {
      return fn.apply(context || this, args.concat(_slice.call(arguments)));
    }; // Set the guid of unique handler to the same of original handler, so it can be removed


    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };

  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  }; // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon


  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return jQuery;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  }; // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)


  if (!noGlobal) {
    window.jQuery = window.$ = jQuery;
  }

  return jQuery;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./js/main.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./js/main.js */"./js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map