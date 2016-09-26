/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _cell = __webpack_require__(1);
	
	var _cell2 = _interopRequireDefault(_cell);
	
	var _row = __webpack_require__(2);
	
	var _row2 = _interopRequireDefault(_row);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.Cell = _cell2.default;
	window.Row = _row2.default;
	
	window.init = function () {
	  var ruleThirty = ['100', '011', '010', '001'];
	  var ruleNinety = ['100', '011', '110', '001'];
	  var ruleOneTen = ['001', '011', '110', '101', '010'];
	  var ruleOneEightFour = ['111', '011', '101', '100'];
	
	  var start = [];
	
	  var startToggle = function startToggle(pos) {
	    return function () {
	      var cell = $('#' + pos);
	      cell.toggleClass('black');
	
	      if (cell.hasClass('black')) {
	        cell.css('background-color', '#' + colors[23]);
	      } else {
	        cell.css('background-color', '');
	      }
	      if (start[pos]) {
	        start[pos] = 0;
	      } else {
	        start[pos] = 1;
	      }
	    };
	  };
	
	  window.showInstructions = function () {
	    $('#structions').toggleClass('hidden');
	  };
	  window.showCustom = function () {
	    $('#custom-rule').toggleClass('hidden');
	  };
	
	  var initialRow = function initialRow() {
	    var row = $("<ul>");
	    row.addClass("row");
	    for (var i = 0; i < 51; i++) {
	      var cell = $("<li>");
	      cell.addClass("cell");
	      cell.addClass("cursor");
	      cell.attr('id', '' + i);
	      cell.on('click', startToggle(i));
	      row.append(cell);
	    }
	    return row;
	  };
	  $(".grid").append(initialRow());
	
	  window.x = ruleNinety;
	
	  var arrangements = ['000', '100', '010', '001', '110', '101', '011', '111'];
	
	  var ruleUpdate = function ruleUpdate() {
	    if (x instanceof Array) {
	      arrangements.forEach(function (code) {
	        if (x.indexOf(code) > -1) {
	          $('#' + code).addClass('black');
	        } else {
	          $('#' + code).removeClass('black');
	        }
	      });
	    }
	  };
	
	  ruleUpdate();
	
	  $('#slider').on('change', function () {
	    if (x.int) {
	      x.stop();
	      x.run(1000 / $('#slider').val());
	    }
	  });
	
	  $('#start').on('click', function () {
	    if (x instanceof Array) {
	      window.x = new _row2.default(51, x, start);
	    }
	
	    if (!x.int) {
	      x.run(1000 / $('#slider').val());
	    }
	    for (var i = 0; i < 51; i++) {
	      $('#' + i).unbind();
	      $('#' + i).removeClass('cursor');
	    }
	
	    $('#stop').toggleClass('hidden');
	    $('#start').toggleClass('hidden');
	  });
	  $('#stop').on('click', function () {
	    if (x.int) {
	      x.stop();
	    }
	    $('#stop').toggleClass('hidden');
	    $('#start').toggleClass('hidden');
	  });
	  $('#step').on('click', function () {
	    if (x instanceof Array) {
	      window.x = new _row2.default(51, x, start);
	    }
	    x.step();
	    for (var i = 0; i < 51; i++) {
	      $('#' + i).unbind();
	    }
	  });
	
	  $('#reset').on("click", function () {
	    var rule = void 0;
	    if (x.int) {
	      $('#stop').toggleClass('hidden');
	      $('#start').toggleClass('hidden');
	    }
	
	    if (!(x instanceof Array)) {
	      x.stop();
	      rule = x.auto[0].rule;
	    } else {
	      rule = x;
	    }
	    $('.grid').empty();
	    start = [];
	    $('.grid').append(initialRow());
	    window.x = rule;
	    $('#counter').text('Generation: 0');
	  });
	
	  $('#instructions').on("click", showInstructions);
	  $('#close').on("click", showInstructions);
	
	  $('#custom').on("click", showCustom);
	
	  $('#Rule90').on("click", function () {
	    window.x = ruleNinety;
	    ruleUpdate();
	  });
	  $('#Rule30').on("click", function () {
	    window.x = ruleThirty;
	    ruleUpdate();
	  });
	  $('#Rule110').on("click", function () {
	    window.x = ruleOneTen;
	    ruleUpdate();
	  });
	  $('#Rule184').on("click", function () {
	    window.x = ruleOneEightFour;
	    ruleUpdate();
	  });
	
	  var customArray = [];
	
	  var customHandler = function customHandler(code) {
	    return function () {
	      $('#custom-' + code).toggleClass('black');
	      var i = customArray.indexOf(code);
	      if (i > -1) {
	        customArray.splice(i, 1);
	      } else {
	        customArray.push(code);
	      }
	    };
	  };
	
	  var clearCustom = function clearCustom() {
	    customArray = [];
	    arrangements.forEach(function (code) {
	      $('#custom-' + code).removeClass('black');
	    });
	  };
	
	  arrangements.forEach(function (code) {
	    $('#custom-' + code).on("click", customHandler(code));
	  });
	
	  $('#cancel').on("click", function () {
	    showCustom();
	    clearCustom();
	  });
	
	  $('#create-custom').on('click', function () {
	    showCustom();
	    window.x = customArray;
	    clearCustom();
	    ruleUpdate();
	  });
	
	  $('#random').on('click', function () {
	    if (x instanceof Array) {
	      for (var i = 0; i < 51; i++) {
	        if (Math.random() > 0.5) {
	          startToggle(i)();
	        }
	      }
	    }
	  });
	
	  $('#all-black').on('click', function () {
	    if (x instanceof Array) {
	      for (var i = 0; i < 51; i++) {
	        $('#' + i).addClass('black');
	        $('#' + i).css('background-color', '#' + colors[11]);
	        start[i] = 1;
	      }
	    }
	  });
	
	  $('#cycle-close').on('click', function () {
	    $("#cycle-modal").toggleClass('hidden');
	  });
	
	  $('#cycle-info').on('click', function () {
	    $('#cycle-info-modal').toggleClass('hidden');
	  });
	
	  $('#info-close').on('click', function () {
	    $('#cycle-info-modal').toggleClass('hidden');
	    $('#cycle-modal').toggleClass('hidden');
	  });
	
	  $('#about').on('click', function () {
	    $("#ruc").toggleClass('hidden');
	  });
	  $('#about-close').on('click', function () {
	    $("#ruc").toggleClass('hidden');
	  });
	
	  window.colors = [];
	
	  $('#rainbow').on('click', function () {
	    if (colors[0]) {
	      window.colors = [];
	      $('#rainbow').text('Rainbow Mode');
	      $('.header').css('background-image', 'url(images/circuits.jpg)');
	      $('button').css('background-color', '#cff');
	    } else {
	      window.colors = ['f00', 'f40', 'f80', 'fc0', 'ff0', 'cf0', '8f0', '4f0', '0f0', '0f4', '0f8', '0fc', '0ff', '0cf', '08f', '04f', '00f', '40f', '80f', 'c0f', 'f0f', 'f0c', 'f08', 'f04'];
	      $('#rainbow').text('Monochrome');
	      $('.header').css('background-image', 'url(images/rainbow_circuits.jpg)');
	      $('button').css('background-color', '#ccc');
	    }
	  });
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Cell = function () {
	  function Cell(pos, rule, alive) {
	    _classCallCheck(this, Cell);
	
	    this.pos = pos;
	    this.alive = 0;
	    this.rule = rule;
	
	    if (alive) {
	      this.alive = 1;
	    }
	  }
	
	  _createClass(Cell, [{
	    key: 'update',
	    value: function update(neighbors) {
	      if (this.rule.indexOf(neighbors.join('')) > -1) {
	        this.alive = 1;
	      } else {
	        this.alive = 0;
	      }
	      return this.alive;
	    }
	  }]);
	
	  return Cell;
	}();
	
	exports.default = Cell;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Row = function () {
	  function Row(length, rule, start) {
	    _classCallCheck(this, Row);
	
	    var row = [];
	    for (var i = 0; i < length; i++) {
	      row.push(new Cell(i, rule, start[i]));
	    }
	    this.auto = row;
	    this.int = 0;
	    this.gen = 0;
	    this.color = 0;
	    this.record = {};
	  }
	
	  _createClass(Row, [{
	    key: 'render',
	    value: function render() {
	      return this.auto.map(function (cell) {
	        return cell.alive;
	      });
	    }
	  }, {
	    key: 'cellUpdate',
	    value: function cellUpdate(n, oldRow) {
	      var left = 0;
	      var right = 0;
	
	      if (this.auto[n - 1] && oldRow.auto[n - 1].alive) {
	        left = 1;
	      }
	      if (this.auto[n + 1] && oldRow.auto[n + 1].alive) {
	        right = 1;
	      }
	
	      if (n === 0 && oldRow.auto[oldRow.auto.length - 1].alive) {
	        left = 1;
	      }
	
	      if (n === oldRow.auto.length - 1 && oldRow.auto[0].alive) {
	        right = 1;
	      }
	
	      this.auto[n].update([left, this.auto[n].alive, right]);
	    }
	  }, {
	    key: 'rowCopy',
	    value: function rowCopy() {
	      return new Row(this.auto.length, this.auto[0].rule, this.render());
	    }
	  }, {
	    key: 'step',
	    value: function step() {
	      var _this = this;
	
	      var oldRow = this.rowCopy();
	      this.auto.forEach(function (cell) {
	        _this.cellUpdate(cell.pos, oldRow);
	      });
	      this.append();
	      if (!this.record[this.render().join('')]) {
	        this.record[this.render().join('')] = this.gen + 1;
	      } else {
	        this.stop();
	        $('#start').toggleClass('hidden');
	        $('#stop').toggleClass('hidden');
	        this.period = this.gen + 1 - this.record[this.render().join('')];
	        $('#period').text('' + this.period);
	        $('#cycle-time').text('' + (this.gen + 1 - this.period));
	        $('#cycle-modal').toggleClass('hidden');
	        this.highlight();
	      }
	      this.gen = this.gen + 1;
	      $('#counter').text('Generation: ' + this.gen);
	    }
	  }, {
	    key: 'highlight',
	    value: function highlight() {
	      var timeToCycle = this.gen + 1 - this.period;
	
	      $('.grid ul:nth-child(' + (timeToCycle + 1) + ')').css('background-color', '#888');
	      for (var i = timeToCycle + 2; i < this.gen + 2; i++) {
	        $('.grid ul:nth-child(' + i + ')').css('background-color', '#ccc');
	      }
	      $('.grid ul:nth-child(' + (this.gen + 2) + ')').css('background-color', '#888');
	    }
	  }, {
	    key: 'append',
	    value: function append() {
	      var renderRow = $("<ul>");
	      renderRow.addClass("row");
	
	      for (var i = 0; i < this.auto.length; i++) {
	        var cell = $("<li>").text(" ");
	        cell.addClass("cell");
	        if (this.auto[i].alive) {
	          cell.addClass("black");
	          cell.css('background-color', '#' + colors[this.color % 24]);
	        }
	        renderRow.append(cell);
	      }
	      this.color = this.color + 1;
	      $(".grid").append(renderRow);
	      window.scrollTo(0, document.body.scrollHeight);
	    }
	  }, {
	    key: 'run',
	    value: function run(n) {
	      this.int = setInterval(this.step.bind(this), n);
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      clearInterval(this.int);
	      this.int = 0;
	    }
	  }]);
	
	  return Row;
	}();
	
	exports.default = Row;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map