import React, { Component } from 'react';
import Hammer from 'react-hammerjs';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var button = function button(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "v360-menu-btns",
    onClick: props.clicked
  }, /*#__PURE__*/React.createElement("i", {
    className: props.icon
  }), props.text);
};

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* \n    Document   : style.css\n    Created on : Dec 26, 2019\n    Author     : Rajeev R. Gade\n    Description: Stylesheet for 360 viewer\n*/\nbody,\nhtml {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    font-family: sans-serif;\n}\n\nroot {\n    display: block;\n}\n\n.v360-main {\n    width: 100%;\n    height: 100%;\n    max-width: 1024px;\n    margin: 20px auto;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    align-content: stretch;\n}\n\n/* HEADER */\n\n.v360-header {\n    /* width: calc(100% - 20px); */\n    background-color: #000;\n    padding: 10px;\n    color: #FFFFFF;\n    font-size: 1.5em;\n    text-align: center;\n    font-weight: bold;\n    /* text-shadow: 1px 1px #000000; */\n    flex: 0 1 auto;\n}\n\n/* VIEWER */\n\n#productInsert {\n    background-color: #FFF;\n    width: 100%;\n    height: calc(100vh - 184px);\n    max-height: 768px;\n    position: relative;\n    overflow: hidden;\n}\n\n.v360-fullscreen #productInsert {\n    height: 100vh;\n    max-height: none;\n}\n\n#viewport-wrapper {\n    width: 100%;\n    height: calc(100% - 10px);\n    margin: 5px auto;\n    position: absolute;\n    left: 0;\n    transition: width 0.3s ease;\n}\n.v360-viewport {\n    background-color: #FFF;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    /* position: absolute; */\n    left: 0;\n    /* transition: width 0.3s ease; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#viewport-wrapper.wide {\n    width: 100%;\n}\n\n.v360-viewport iframe {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    /* left: 50%;\n    -webkit-transform: translateX(-50%) translateY(0);\n    -ms-transform: translateX(-50%) translateY(0);\n    transform: translateX(-50%) translateY(0);\n    transform-origin: center center; */\n}\n\n.v360-viewport img {\n    position: relative;\n}\n\n\n/* FULLSCREEN & MENU TOGGLE BUTTONS */\n\n.v360-fullscreen-toggle{\n    width: 30px;\n    height: 30px;\n    margin: 15px;\n    position: absolute;\n    /* color: #999;\n    fill: #999; */\n    float: right;\n    cursor: pointer;\n    top: 0;\n    right: 0;\n    z-index: 150;\n}\n\n.v360-fullscreen-toggle:hover {\n    fill: #000;\n}\n/* \n.v360-fullscreen-toggle div:last-child {\n    display: none;\n} */\n\n.v360-fullscreen {\n    z-index: 9999;\n    width: 100%;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    position: fixed;\n    top: 0;\n    left: 0;\n}\n\n.v360-fullscreen .v360-header,\n.v360-fullscreen #v360-menu-btns {\n    border-radius: 0;\n}\n\n.v360-fullscreen productInsert {\n    height: calc(100vh - 95px);\n    max-height: none;\n}\n\n.ui-accordion-header {\n    background-color: #B0BEC5;\n    outline: none;\n    line-height: 1.5em;\n    transition: all 0.3s ease;\n}\n\n.ui-accordion-header:hover,\n.ui-accordion-header.ui-state-active {\n    background-color: #607D8B;\n    color: #FFF;\n}\n\n/* MENU BUTTONS */\n\n#v360-menu-btns {\n    width: 100%;\n    padding: 5px 0;\n    text-align: center;\n    /* position: absolute; */\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    z-index: 150;\n}\n\n.light{\n    background-color: #fff !important;\n}\n\n.dark{\n    background-color: #000 !important;\n}\n\n.v360-menu-btns {\n    /* background-color: #999; */\n    width: auto;\n    min-height: 20px;\n    margin: 5px 5px;\n    padding: 5px 10px;\n    border-radius: 5px;\n    outline: none;\n    font-size: 1.3em;\n    text-align: center;\n    line-height: 1em;\n    cursor: pointer;\n    user-select: none;\n    position: relative;\n    display: inline-block;\n    opacity: 1;\n}\n/* \n.v360-btn-active{\n    background-color: #000;\n} */\n\n.light .v360-menu-btns {\n    color: #000;\n}\n\n.dark .v360-menu-btns {\n    color: #fff;\n}\n  \n/* .light .v360-btn-active{\n    color: #fff;\n} */\n\n.light .v360-menu-btns:hover {\n    color: #fff;\n    background-color: #000;\n}\n\n.dark .v360-menu-btns:hover {\n    color: #000;\n    background-color: #fff;\n}\n\n.v360-main {\n    filter: alpha(opacity=50);\n    /* opacity: 0.5; */\n    cursor: default;\n    /* pointer-events: none; */\n}\n\n#v360-image-container {\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    position: relative;\n}\n\n.v360-image-container {\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    position: relative;\n}\n\n.v360-product-box-shadow{\n    position: absolute;\n    /* z-index: 99; */\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    box-shadow: rgb(34, 34, 34) 0px 0px 100px inset;\n}\n\n.v360-fullscreen-toggle-btn i{\n    /* background-color: #fff; */\n    font-size: 20px;\n}\n.v360-spinner-grow{\n    display: inline-block;\n    width: 2rem;\n    height: 2rem;\n    vertical-align: text-bottom;\n    background-color: rgb(33, 37, 41);\n    border-radius: 50%;\n    opacity: 0;\n    -webkit-animation: spinner-grow .75s linear infinite;\n    animation: spinner-grow .75s linear infinite;\n}\n.v360-percentage-description{\n    margin-left: 2rem;\n}\n\n\n/* Tooltip */\n\n.tooltip {\n    position: relative;\n    display: inline-block;\n  }\n  \n  .tooltip .tooltiptext {\n    visibility: hidden;\n    width: 120px;\n    background-color: #555;\n    color: #fff;\n    text-align: center;\n    border-radius: 6px;\n    padding: 5px 0;\n    position: absolute;\n    z-index: 1;\n    bottom: 125%;\n    left: 50%;\n    margin-left: -60px;\n    opacity: 0;\n    transition: opacity 0.3s;\n  }\n  \n  .tooltip .tooltiptext::after {\n    content: \"\";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #555 transparent transparent transparent;\n  }\n  \n  .tooltip:hover .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n  }\n  \n  .tooltip{\n    opacity: 1 !important;\n  }\n\n  /* .hotspot-button{\n      position: absolute;\n  } */";
styleInject(css_248z);

var React360Viewer = /*#__PURE__*/function (_Component) {
  _inherits(React360Viewer, _Component);

  var _super = _createSuper(React360Viewer);

  function React360Viewer() {
    var _this;

    _classCallCheck(this, React360Viewer);

    _this = _super.call(this); //this.imageContainerRef = React.createRef();

    _defineProperty(_assertThisInitialized(_this), "startDragging", function (evt) {
      _this.dragging = true;
      document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';

      _this.setLastPositions(evt);

      _this.dragStart = _this.ctx.transformedPoint(_this.state.lastX, _this.state.lastY);
    });

    _defineProperty(_assertThisInitialized(_this), "doDragging", function (evt) {
      _this.setLastPositions(evt);

      if (_this.dragStart) {
        var pt = _this.ctx.transformedPoint(_this.state.lastX, _this.state.lastY);

        _this.ctx.translate(pt.x - _this.dragStart.x, pt.y - _this.dragStart.y); //redraw();


        _this.redraw();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "stopDragging", function (evt) {
      _this.dragging = false;
      _this.dragStart = null;
    });

    _defineProperty(_assertThisInitialized(_this), "prev", function (e) {
      //console.log(this.currentLeftPosition)

      /* this.setState({
          currentLeftPosition: 10
      }) */
      //this.currentLeftPosition = 10
      _this.props.spinReverse ? _this.turnRight() : _this.turnLeft();
    });

    _defineProperty(_assertThisInitialized(_this), "next", function (e) {
      _this.props.spinReverse ? _this.turnLeft() : _this.turnRight();
    });

    _defineProperty(_assertThisInitialized(_this), "resetPosition", function () {
      _this.currentScale = 1;
      _this.activeImage = 1;

      _this.setImage(true);
    });

    _defineProperty(_assertThisInitialized(_this), "zoomImage", function (evt) {
      if (_this.props.disableScrollZoom) return;

      _this.setState({
        lastX: evt.offsetX || evt.pageX - _this.canvas.offsetLeft,
        lastY: evt.offsetY || evt.pageY - _this.canvas.offsetTop
      });

      var delta = evt.wheelDelta ? evt.wheelDelta / 40 : evt.deltaY ? -evt.deltaY : 0;
      if (delta) _this.zoom(delta); //return evt.preventDefault() && false;
    });

    _defineProperty(_assertThisInitialized(_this), "zoomIn", function (evt) {
      _this.setState({
        lastX: _this.centerX,
        lastY: _this.centerY
      }); //this.lastY = this.centerY


      _this.zoom(2);
    });

    _defineProperty(_assertThisInitialized(_this), "zoomOut", function (evt) {
      _this.setState({
        lastX: _this.centerX,
        lastY: _this.centerY
      });

      _this.zoom(-2);
    });

    _defineProperty(_assertThisInitialized(_this), "startMoving", function (evt) {
      _this.movement = true;
      _this.movementStart = evt.pageX;
      _this.viewPortElementRef.style.cursor = 'grabbing';
    });

    _defineProperty(_assertThisInitialized(_this), "doMoving", function (evt) {
      if (_this.movement) {
        _this.onMove(evt.clientX);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "stopMoving", function (evt) {
      _this.movement = false;
      _this.movementStart = 0;
      _this.viewPortElementRef.style.cursor = 'grab';
    });

    _defineProperty(_assertThisInitialized(_this), "touchStart", function (evt) {
      _this.movementStart = evt.touches[0].clientX;
    });

    _defineProperty(_assertThisInitialized(_this), "touchMove", function (evt) {
      _this.onMove(evt.touches[0].clientX);
    });

    _defineProperty(_assertThisInitialized(_this), "touchEnd", function () {
      _this.movementStart = 0;
    });

    _defineProperty(_assertThisInitialized(_this), "play", function (e) {
      _this.setState({
        loopTimeoutId: window.setInterval(function () {
          return _this.loopImages();
        }, 100)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "togglePlay", function (e) {
      _this.setState({
        playing: !_this.state.playing
      });
    });

    _defineProperty(_assertThisInitialized(_this), "togglePanMode", function (e) {
      _this.setState({
        panmode: !_this.state.panmode
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleFullScreen", function (e) {
      _this.setState({
        isFullScreen: !_this.state.isFullScreen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePinch", function (e) {
      if (e.scale < _this.currentScale) {
        // zoom in
        _this.zoomIn();
      } else if (e.scale > _this.currentScale) {
        // zoom out
        _this.zoomOut();
      } //lastScale = e.scale;

    });

    _defineProperty(_assertThisInitialized(_this), "pinchOut", function () {
      _this.currentScale = 1;
    });

    _this.viewPercentageRef = /*#__PURE__*/React.createRef();
    _this.viewPortElementRef = /*#__PURE__*/React.createRef();
    _this.canvas = null;
    _this.ctx = null;
    _this.isMobile = false;
    _this.imageData = [];
    _this.images = [];
    _this.loadedImages = 0;
    _this.viewerPercentage = null;
    _this.currentImage = null;
    _this.currentLeftPosition = _this.currentTopPosition = 0;
    _this.currentCanvasImage = null;
    _this.centerX = 0;
    _this.centerY = 0;
    _this.movementStart = 0;
    _this.movement = false;
    _this.speedFactor = 13;
    _this.activeImage = 1;
    _this.stopAtEdges = false;
    _this.state = {
      lastX: 0,
      lastY: 0,
      minScale: 0.5,
      maxScale: 4,
      scale: 0.2,
      customOffset: 10,
      currentScale: 1,
      currentTopPosition: 0,
      currentLeftPosition: 0,
      selectMenuOption: 1,
      currentImage: null,
      dragging: false,
      canvas: null,
      ctx: null,
      dragStart: null,
      currentCanvasImage: null,
      isFullScreen: false,
      viewPortElementWidth: null,
      movementStart: 0,
      movement: false,
      dragSpeed: 150,
      speedFactor: 13,
      activeImage: 1,
      stopAtEdges: false,
      panmode: false,
      currentLoop: 0,
      loopTimeoutId: 0,
      playing: false,
      imagesLoaded: false
    }; //this.currentLeftPosition = this.currentLeftPosition.bind(this)

    return _this;
  }

  _createClass(React360Viewer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.disableZoomin();
      this.viewerPercentage = this.viewPercentageRef.current; //console.log(this.viewerContainerRef.getElementsByClassName('v360-viewport-container'))

      this.viewPortElementRef = this.viewerContainerRef.getElementsByClassName('v360-viewport-container')[0];
      this.fetchData();
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      for (var i = 1; i <= this.props.amount; i++) {
        var imageIndex = this.props.paddingIndex ? this.lpad(i, "0", 2) : i;
        var fileName = this.props.fileName.replace('{index}', imageIndex);
        var filePath = "".concat(this.props.imagePath, "/").concat(fileName);
        this.imageData.push(filePath);
      }

      this.preloadImages();
    }
  }, {
    key: "lpad",
    value: function lpad(str, padString, length) {
      str = str.toString();

      while (str.length < length) {
        str = padString + str;
      }

      return str;
    }
  }, {
    key: "preloadImages",
    value: function preloadImages() {
      var _this2 = this;

      if (this.imageData.length) {
        try {
          //this.props.amount = this.imageData.length;
          this.imageData.forEach(function (src) {
            _this2.addImage(src);
          });
        } catch (error) {
          console.error("Something went wrong while loading images: ".concat(error.message));
        }
      } else {
        console.log('No Images Found');
      }
    }
  }, {
    key: "addImage",
    value: function addImage(resultSrc) {
      var image = new Image();
      image.src = resultSrc; //image.crossOrigin='anonymous'

      image.onload = this.onImageLoad.bind(this);
      image.onerror = this.onImageLoad.bind(this);
      this.images.push(image);
    }
  }, {
    key: "onImageLoad",
    value: function onImageLoad(event) {
      var percentage = Math.round(this.loadedImages / this.props.amount * 100);
      this.loadedImages += 1;
      this.updatePercentageInLoader(percentage);

      if (this.loadedImages === this.props.amount) {
        this.onAllImagesLoaded(event);
      } else if (this.loadedImages === 1) {
        //this.onFirstImageLoaded(event);
        console.log('load first image');
      }
    }
  }, {
    key: "updatePercentageInLoader",
    value: function updatePercentageInLoader(percentage) {
      /* if (this.loader) {
          this.loader.style.width = percentage + '%';
      }
      if (this.view360Icon) {
          this.view360Icon.innerText = percentage + '%';
      } */
      //console.log(percentage)
      this.viewerPercentage.innerHTML = percentage + '%'; //console.log(percentage + '%')
    }
  }, {
    key: "onAllImagesLoaded",
    value: function onAllImagesLoaded(e) {
      this.setState({
        imagesLoaded: true
      });
      this.initData();
    }
  }, {
    key: "initData",
    value: function initData() {
      //console.log(this.imageContainerRef)
      this.canvas = this.imageContainerRef;
      this.ctx = this.canvas.getContext('2d'); //console.log('initialize data here')

      this.attachEvents();
      this.checkMobile();
      this.loadInitialImage();
      this.setState({
        playing: this.props.autoplay
      });
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      if (this.state.panmode) {
        this.bindPanModeEvents();
      } else {
        this.bind360ModeEvents();
      }
    }
  }, {
    key: "bindPanModeEvents",
    value: function bindPanModeEvents() {
      this.viewPortElementRef.removeEventListener('touchend', this.touchEnd);
      this.viewPortElementRef.removeEventListener('touchstart', this.touchStart);
      this.viewPortElementRef.removeEventListener('touchmove', this.touchMove);
      this.viewPortElementRef.addEventListener('touchend', this.stopDragging);
      this.viewPortElementRef.addEventListener('touchstart', this.startDragging);
      this.viewPortElementRef.addEventListener('touchmove', this.doDragging);
      this.viewPortElementRef.removeEventListener('mouseup', this.stopMoving);
      this.viewPortElementRef.removeEventListener('mousedown', this.startMoving);
      this.viewPortElementRef.removeEventListener('mousemove', this.doMoving);
      this.viewPortElementRef.addEventListener('mouseup', this.stopDragging);
      this.viewPortElementRef.addEventListener('mousedown', this.startDragging);
      this.viewPortElementRef.addEventListener('mousemove', this.doDragging);
    }
  }, {
    key: "bind360ModeEvents",
    value: function bind360ModeEvents() {
      this.viewPortElementRef.removeEventListener('touchend', this.stopDragging);
      this.viewPortElementRef.removeEventListener('touchstart', this.startDragging);
      this.viewPortElementRef.removeEventListener('touchmove', this.doDragging);
      this.viewPortElementRef.addEventListener('touchend', this.touchEnd);
      this.viewPortElementRef.addEventListener('touchstart', this.touchStart);
      this.viewPortElementRef.addEventListener('touchmove', this.touchMove);
      this.viewPortElementRef.removeEventListener('mouseup', this.stopDragging);
      this.viewPortElementRef.removeEventListener('mousedown', this.startDragging);
      this.viewPortElementRef.removeEventListener('mousemove', this.doDragging);
      this.viewPortElementRef.addEventListener('mouseup', this.stopMoving);
      this.viewPortElementRef.addEventListener('mousedown', this.startMoving);
      this.viewPortElementRef.addEventListener('mousemove', this.doMoving);
    }
  }, {
    key: "setLastPositions",
    value: function setLastPositions(evt) {
      if (this.isMobile) {
        this.setState({
          lastX: evt.touches[0].offsetX || evt.touches[0].pageX - this.canvas.offsetLeft,
          lastY: evt.touches[0].offsetY || evt.touches[0].pageY - this.canvas.offsetTop
        });
      } else {
        this.setState({
          lastX: evt.offsetX || evt.pageX - this.canvas.offsetLeft,
          lastY: evt.offsetY || evt.pageY - this.canvas.offsetTop
        });
      }
    }
  }, {
    key: "checkMobile",
    value: function checkMobile() {
      this.isMobile = !!('ontouchstart' in window || navigator.msMaxTouchPoints);
    }
  }, {
    key: "loadInitialImage",
    value: function loadInitialImage() {
      this.currentImage = this.imageData[0];
      this.setImage();
    }
  }, {
    key: "setImage",
    value: function setImage() {
      var _this3 = this;

      var cached = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.currentLeftPosition = this.currentTopPosition = 0;

      if (!cached) {
        this.currentCanvasImage = new Image();
        this.currentCanvasImage.crossOrigin = 'anonymous';
        this.currentCanvasImage.src = this.currentImage;

        this.currentCanvasImage.onload = function () {
          var viewportElement = _this3.viewPortElementRef.getBoundingClientRect();

          _this3.canvas.width = _this3.state.isFullScreen ? viewportElement.width : _this3.currentCanvasImage.width;
          _this3.canvas.height = _this3.state.isFullScreen ? viewportElement.height : _this3.currentCanvasImage.height;

          _this3.trackTransforms(_this3.ctx);

          _this3.redraw();
        };

        this.currentCanvasImage.onerror = function () {
          console.log('cannot load this image');
        };
      } else {
        this.currentCanvasImage = this.images[0];
        var viewportElement = this.viewPortElementRef.getBoundingClientRect();
        this.canvas.width = this.state.isFullScreen ? viewportElement.width : this.currentCanvasImage.width;
        this.canvas.height = this.state.isFullScreen ? viewportElement.height : this.currentCanvasImage.height;
        this.trackTransforms(this.ctx);
        this.redraw();
      }
    }
  }, {
    key: "redraw",
    value: function redraw() {
      try {
        var p1 = this.ctx.transformedPoint(0, 0);
        var p2 = this.ctx.transformedPoint(this.canvas.width, this.canvas.height);
        var hRatio = this.canvas.width / this.currentCanvasImage.width;
        var vRatio = this.canvas.height / this.currentCanvasImage.height;
        var ratio = Math.min(hRatio, vRatio);
        var centerShift_x = (this.canvas.width - this.currentCanvasImage.width * ratio) / 2;
        var centerShift_y = (this.canvas.height - this.currentCanvasImage.height * ratio) / 2;
        this.ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);
        this.centerX = this.currentCanvasImage.width * ratio / 2;
        this.centerY = this.currentCanvasImage.height * ratio / 2; //center image

        this.ctx.drawImage(this.currentCanvasImage, this.currentLeftPosition, this.currentTopPosition, this.currentCanvasImage.width, this.currentCanvasImage.height, centerShift_x, centerShift_y, this.currentCanvasImage.width * ratio, this.currentCanvasImage.height * ratio); //this.addHotspots()
      } catch (e) {
        this.trackTransforms(this.ctx);
      }
    }
  }, {
    key: "trackTransforms",
    value: function trackTransforms(ctx) {
      var _this4 = this;

      return new Promise(function (resolve) {
        var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        var xform = svg.createSVGMatrix();

        _this4.ctx.getTransform = function () {
          return xform;
        };

        var savedTransforms = [];
        var save = ctx.save;

        _this4.ctx.save = function () {
          savedTransforms.push(xform.translate(0, 0));
          return save.call(_this4.ctx);
        };

        var restore = ctx.restore;

        _this4.ctx.restore = function () {
          xform = savedTransforms.pop();
          return restore.call(_this4.ctx);
        };

        var scale = _this4.ctx.scale;

        _this4.ctx.scale = function (sx, sy) {
          xform = xform.scaleNonUniform(sx, sy);
          return scale.call(_this4.ctx, sx, sy);
        };

        var rotate = _this4.ctx.rotate;

        _this4.ctx.rotate = function (radians) {
          xform = xform.rotate(radians * 180 / Math.PI);
          return rotate.call(_this4.ctx, radians);
        };

        var translate = _this4.ctx.translate;

        _this4.ctx.translate = function (dx, dy) {
          xform = xform.translate(dx, dy);
          return translate.call(_this4.ctx, dx, dy);
        };

        var transform = _this4.ctx.transform;

        _this4.ctx.transform = function (a, b, c, d, e, f) {
          var m2 = svg.createSVGMatrix();
          m2.a = a;
          m2.b = b;
          m2.c = c;
          m2.d = d;
          m2.e = e;
          m2.f = f;
          xform = xform.multiply(m2);
          return transform.call(_this4.ctx, a, b, c, d, e, f);
        };

        var setTransform = _this4.ctx.setTransform;

        _this4.ctx.setTransform = function (a, b, c, d, e, f) {
          xform.a = a;
          xform.b = b;
          xform.c = c;
          xform.d = d;
          xform.e = e;
          xform.f = f;
          return setTransform.call(_this4.ctx, a, b, c, d, e, f);
        };

        var pt = svg.createSVGPoint();

        _this4.ctx.transformedPoint = function (x, y) {
          pt.x = x;
          pt.y = y;
          return pt.matrixTransform(xform.inverse());
        };

        resolve(_this4.ctx);
      });
    }
  }, {
    key: "turnLeft",
    value: function turnLeft() {
      this.moveActiveIndexDown(1);
    }
  }, {
    key: "turnRight",
    value: function turnRight() {
      this.moveActiveIndexUp(1);
    }
  }, {
    key: "moveActiveIndexUp",
    value: function moveActiveIndexUp(itemsSkipped) {
      if (this.stopAtEdges) {
        if (this.activeImage + itemsSkipped >= this.props.amount) {
          this.activeImage = this.props.amount;
        } else {
          this.activeImage += itemsSkipped;
        }
      } else {
        this.activeImage = (this.activeImage + itemsSkipped) % this.props.amount || this.props.amount;
      }

      this.update();
    }
  }, {
    key: "moveActiveIndexDown",
    value: function moveActiveIndexDown(itemsSkipped) {
      if (this.stopAtEdges) {
        if (this.activeImage - itemsSkipped <= 1) {
          this.activeImage = 1;
        } else {
          this.activeImage -= itemsSkipped;
        }
      } else {
        if (this.activeImage - itemsSkipped < 1) {
          this.activeImage = this.props.amount + (this.activeImage - itemsSkipped);
        } else {
          this.activeImage -= itemsSkipped;
        }
      }

      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var image = this.images[this.activeImage - 1];
      this.currentCanvasImage = image;
      this.redraw();
    }
  }, {
    key: "zoom",
    value: function zoom(clicks) {
      //console.log(this.lastX + ' - ' + this.lastY)
      var factor = Math.pow(1.01, clicks); //console.log(factor)

      if (factor > 1) {
        this.currentScale += factor;
      } else {
        if (this.currentScale - factor > 1) this.currentScale -= factor;else this.currentScale = 1;
      }

      if (this.currentScale > 1) {
        var pt = this.ctx.transformedPoint(this.state.lastX, this.state.lastY);
        this.ctx.translate(pt.x, pt.y); //console.log(this.currentScale)

        this.ctx.scale(factor, factor);
        this.ctx.translate(-pt.x, -pt.y);
        this.redraw();
      }
    }
  }, {
    key: "disableZoomin",
    value: function disableZoomin() {
      document.addEventListener("gesturestart", function (e) {
        e.preventDefault();
        document.body.style.zoom = 0.99;
      });
      document.addEventListener("gesturechange", function (e) {
        e.preventDefault();
        document.body.style.zoom = 0.99;
      });
      document.addEventListener("gestureend", function (e) {
        e.preventDefault();
        document.body.style.zoom = 1;
      });
    }
  }, {
    key: "onMove",
    value: function onMove(pageX) {
      if (pageX - this.movementStart >= this.speedFactor) {
        var itemsSkippedRight = Math.floor((pageX - this.movementStart) / this.speedFactor) || 1;
        this.movementStart = pageX;

        if (this.props.spinReverse) {
          this.moveActiveIndexDown(itemsSkippedRight);
        } else {
          this.moveActiveIndexUp(itemsSkippedRight);
        }

        this.redraw();
      } else if (this.movementStart - pageX >= this.speedFactor) {
        var itemsSkippedLeft = Math.floor((this.movementStart - pageX) / this.speedFactor) || 1;
        this.movementStart = pageX;

        if (this.props.spinReverse) {
          this.moveActiveIndexUp(itemsSkippedLeft);
        } else {
          this.moveActiveIndexDown(itemsSkippedLeft);
        }

        this.redraw();
      }
    }
  }, {
    key: "onSpin",
    value: function onSpin() {
      if (this.state.playing || this.state.loopTimeoutId) {
        this.stop();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.activeImage === 1) {
        this.setState({
          currentLoop: 0
        });
      }

      this.setState({
        playing: false
      });
      window.clearTimeout(this.state.loopTimeoutId);
    }
  }, {
    key: "loopImages",
    value: function loopImages() {
      var loop = this.props.loop ? this.props.loop : 1;

      if (this.activeImage === 1) {
        if (this.state.currentLoop === loop) {
          this.stop();
        } else {
          this.setState({
            currentLoop: this.state.currentLoop + 1
          });
          this.next();
        }
      } else {
        this.next();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.currentLeftPosition !== prevState.currentLeftPosition) {
        console.log('Left Position Changed');
      }

      if (this.state.panmode !== prevState.panmode) {
        this.attachEvents();
      }

      if (this.state.playing !== prevState.playing) {
        if (!this.state.playing) {
          this.stop();
        } else {
          this.play();
        }
      }

      if (this.state.isFullScreen !== prevState.isFullScreen) {
        if (!this.state.isFullScreen) {
          //exit full screen
          this.viewerContainerRef.classList.remove('v360-main');
          this.viewerContainerRef.classList.remove('v360-fullscreen');
        } else {
          //enter full screen
          this.viewerContainerRef.classList.add('v360-main');
          this.viewerContainerRef.classList.add('v360-fullscreen');
        }

        this.setImage();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "v360-viewer-container",
        ref: function ref(inputEl) {
          _this5.viewerContainerRef = inputEl;
        },
        id: "identifier",
        onWheel: function onWheel(e) {
          return _this5.zoomImage(e);
        }
      }, !this.state.imagesLoaded ? /*#__PURE__*/React.createElement("div", {
        className: "v360-viewport"
      }, /*#__PURE__*/React.createElement("div", {
        className: "v360-spinner-grow"
      }), /*#__PURE__*/React.createElement("p", {
        ref: this.viewPercentageRef,
        className: "v360-percentage-text"
      })) : '', /*#__PURE__*/React.createElement(Hammer, {
        onPinchIn: this.handlePinch,
        onPinchOut: this.handlePinch,
        onPinchEnd: this.pinchOut,
        options: {
          recognizers: {
            pinch: {
              enable: true
            }
          }
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "v360-viewport-container v360-viewport"
      }, /*#__PURE__*/React.createElement("canvas", {
        className: "v360-image-container",
        ref: function ref(inputEl) {
          _this5.imageContainerRef = inputEl;
        }
      }), this.props.boxShadow ? /*#__PURE__*/React.createElement("div", {
        className: "v360-product-box-shadow"
      }) : '')), this.props.hideButtons ? null : /*#__PURE__*/React.createElement("abbr", {
        title: "Fullscreen Toggle"
      }, /*#__PURE__*/React.createElement("div", {
        className: "v360-fullscreen-toggle text-center",
        onClick: this.toggleFullScreen
      }, /*#__PURE__*/React.createElement("div", {
        className: this.props.buttonClass === 'dark' ? 'v360-fullscreen-toggle-btn text-light' : 'v360-fullscreen-toggle-btn text-dark'
      }, /*#__PURE__*/React.createElement("i", {
        className: !this.state.isFullScreen ? 'fas fa-expand text-lg' : 'fas fa-compress text-lg'
      })))), this.props.hideButtons ? null : /*#__PURE__*/React.createElement("div", {
        id: "v360-menu-btns",
        className: this.props.buttonClass
      }, /*#__PURE__*/React.createElement("div", {
        className: "v360-navigate-btns"
      }, /*#__PURE__*/React.createElement(button, {
        clicked: this.togglePlay,
        icon: this.state.playing ? 'fa fa-pause' : 'fa fa-play'
      }), /*#__PURE__*/React.createElement(button, {
        clicked: this.zoomIn,
        icon: "fa fa-search-plus"
      }), /*#__PURE__*/React.createElement(button, {
        clicked: this.zoomOut,
        icon: "fa fa-search-minus"
      }), this.state.panmode ? /*#__PURE__*/React.createElement(button, {
        clicked: this.togglePanMode,
        text: "360\xB0"
      }) : /*#__PURE__*/React.createElement(button, {
        clicked: this.togglePanMode,
        icon: "fa fa-hand-paper"
      }), /*#__PURE__*/React.createElement(button, {
        clicked: this.prev,
        icon: "fa fa-chevron-left"
      }), /*#__PURE__*/React.createElement(button, {
        clicked: this.next,
        icon: "fa fa-chevron-right"
      }), /*#__PURE__*/React.createElement(button, {
        clicked: this.resetPosition,
        icon: "fa fa-sync"
      })))));
    }
  }]);

  return React360Viewer;
}(Component);

export default React360Viewer;
