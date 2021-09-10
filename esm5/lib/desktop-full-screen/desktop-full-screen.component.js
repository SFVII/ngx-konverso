import { __awaiter, __decorate, __generator, __values } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KonversoService } from '../konverso.service';
import { TranslateService } from '../translate.service';
/*declare var pixi: any;
import {KawaseBlurFilter} from '@pixi/filter-kawase-blur';
import SimplexNoise from 'simplex-noise';
//import hsl from "https://cdn.skypack.dev/hsl-to-hex";
declare var hsl;
//import debounce from "https://cdn.skypack.dev/debounce";
declare var debounce;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function map(n, start1, end1, start2, end2) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

const simplex = new SimplexNoise();

class ColorPalette {
  public hue;
  public complimentaryHue1;
  public complimentaryHue2;
  public saturation;
  public lightness;
  public baseColor;
  public complimentaryColor1;
  public complimentaryColor2;
  public colorChoices;
  constructor() {
    this.setColors();
    this.setCustomProperties();
  }

  setColors() {
    // pick a random hue somewhere between 220 and 360
    //this.hue = ~~random(220, 360);
    this.hue = 250;
    this.complimentaryHue1 = this.hue + 30;
    this.complimentaryHue2 = this.hue + 60;
    // define a fixed saturation and lightness
    this.saturation = 95;
    this.lightness = 50;

    // define a base color
    this.baseColor = hsl(this.hue, this.saturation, this.lightness);
    // define a complimentary color, 30 degress away from the base
    this.complimentaryColor1 = hsl(
      this.complimentaryHue1,
      this.saturation,
      this.lightness
    );
    // define a second complimentary color, 60 degrees away from the base
    this.complimentaryColor2 = hsl(
      this.complimentaryHue2,
      this.saturation,
      this.lightness
    );

    // store the color choices in an array so that a random one can be picked later
    this.colorChoices = [
      this.baseColor,
      this.complimentaryColor1,
      this.complimentaryColor2
    ];
  }

  randomColor() {
    // pick a random color
    return this.colorChoices[~~random(0, this.colorChoices.length)].replace(
      "#",
      "0x"
    );
  }

  setCustomProperties() {
    // set CSS custom properties so that the colors defined here can be used throughout the UI
    document.documentElement.style.setProperty("--hue", this.hue);
    document.documentElement.style.setProperty(
      "--hue-complimentary1",
      this.complimentaryHue1
    );
    document.documentElement.style.setProperty(
      "--hue-complimentary2",
      this.complimentaryHue2
    );
  }
}

class Orb {
  public bounds;
  public x;
  public y;
  public scale;
  public fill;
  public radius;
  public xOff;
  public yOff;
  public inc;
  public graphics;
  // Pixi takes hex colors as hexidecimal literals (0x rather than a string with '#')
  constructor(fill = 0x000000) {
    // bounds = the area an orb is "allowed" to move within
    this.bounds = this.setBounds();
    // initialise the orb's { x, y } values to a random point within it's bounds
    this.x = random(this.bounds["x"].min, this.bounds["x"].max);
    this.y = random(this.bounds["y"].min, this.bounds["y"].max);

    // how large the orb is vs it's original radius (this will modulate over time)
    this.scale = 1;

    // what color is the orb?
    this.fill = fill;

    // the original radius of the orb, set relative to window height
    this.radius = random(window.innerHeight / 6, window.innerHeight / 3);

    // starting points in "time" for the noise/self similar random values
    this.xOff = random(0, 1000);
    this.yOff = random(0, 1000);
    // how quickly the noise/self similar random values step through time
    this.inc = 0.002;

    // PIXI.Graphics is used to draw 2d primitives (in this case a circle) to the canvas
    this.graphics = new pixi.Graphics();
    this.graphics.alpha = 0.825;

    // 250ms after the last window resize event, recalculate orb positions.
    window.addEventListener(
      "resize",
      debounce(() => {
        this.bounds = this.setBounds();
      }, 250)
    );
  }

  setBounds() {
    // how far from the { x, y } origin can each orb move
    const maxDist =
      window.innerWidth < 1000 ? window.innerWidth / 3 : window.innerWidth / 5;
    // the { x, y } origin for each orb (the bottom right of the screen)
    const originX = window.innerWidth / 1.25;
    const originY =
      window.innerWidth < 1000
        ? window.innerHeight
        : window.innerHeight / 1.375;

    // allow each orb to move x distance away from it's x / y origin
    return {
      x: {
        min: originX - maxDist,
        max: originX + maxDist
      },
      y: {
        min: originY - maxDist,
        max: originY + maxDist
      }
    };
  }

  update() {
    // self similar "psuedo-random" or noise values at a given point in "time"
    const xNoise = simplex.noise2D(this.xOff, this.xOff);
    const yNoise = simplex.noise2D(this.yOff, this.yOff);
    const scaleNoise = simplex.noise2D(this.xOff, this.yOff);

    // map the xNoise/yNoise values (between -1 and 1) to a point within the orb's bounds
    this.x = map(xNoise, -1, 1, this.bounds["x"].min, this.bounds["x"].max);
    this.y = map(yNoise, -1, 1, this.bounds["y"].min, this.bounds["y"].max);
    // map scaleNoise (between -1 and 1) to a scale value somewhere between half of the orb's original size, and 100% of it's original size
    this.scale = map(scaleNoise, -1, 1, 0.5, 1);

    // step through "time"
    this.xOff += this.inc;
    this.yOff += this.inc;
  }

  render() {
    // update the PIXI.Graphics position and scale values
    this.graphics.x = this.x;
    this.graphics.y = this.y;
    this.graphics.scale.set(this.scale);

    // clear anything currently drawn to graphics
    this.graphics.clear();

    // tell graphics to fill any shapes drawn after this with the orb's fill color
    this.graphics.beginFill(this.fill);
    // draw a circle at { 0, 0 } with it's size set by this.radius
    this.graphics.drawCircle(0, 0, this.radius);
    // let graphics know we won't be filling in any more shapes
    this.graphics.endFill();
  }
}

const app = new pixi.Application({
  // render to <canvas class="orb-canvas"></canvas>
  view: document.querySelector(".orb-canvas"),
  // auto adjust size to fit the current window
  resizeTo: window,
  // transparent background, we will be creating a gradient background later using CSS
  transparent: true
});

// Create colour palette
const colorPalette = new ColorPalette();

app.stage.filters = [new KawaseBlurFilter(30, 10, true)];

// Create orbs
const orbs = [];

for (let i = 0; i < 10; i++) {
  const orb = new Orb(colorPalette.randomColor());

  app.stage.addChild(orb.graphics);

  orbs.push(orb);
}

// Animate!
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  app.ticker.add(() => {
    orbs.forEach((orb) => {
      orb.update();
      orb.render();
    });
  });
} else {
  orbs.forEach((orb) => {
    orb.update();
    orb.render();
  });
}*/
var DesktopFullScreenComponent = /** @class */ (function () {
    function DesktopFullScreenComponent(translate, service) {
        var _this = this;
        this.service = service;
        this.AssistantMode = false;
        this.firstVisit = false;
        this.IsMobile = false;
        this.readySend = new EventEmitter(false);
        this.send = new EventEmitter(null);
        this.sendBotCommand = new EventEmitter(null);
        this.sendEvent = new EventEmitter(null);
        this.currentPlaceHolder = '';
        this.sendBtn = '';
        this.select = '';
        this.changed = false;
        this.newMessage = false;
        this.messageCurrent = '';
        this.msgArray = [];
        this.botListening = false;
        this.botListeningTimer = 0;
        service.lang.subscribe(function (r) {
            if (service.locale) {
                _this.sendBtn = translate.translate(service.locale, 'SEND');
                _this.select = translate.translate(service.locale, 'SELECT');
            }
        });
    }
    DesktopFullScreenComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var _a, _b, _c;
        this.changed = false;
        if (document.getElementById('text') && !((_a = this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.text.includes("loading-dots"))) {
            document.getElementById('text').innerHTML = '';
        }
        console.log(this.LastBotAnswer);
        if (this.LastBotAnswer && !((_b = this.LastBotAnswer) === null || _b === void 0 ? void 0 : _b.text.includes("loading-dots"))) {
            var string = (_c = this.LastBotAnswer) === null || _c === void 0 ? void 0 : _c.text.split('<br/>').join(" ").split('&eacute;').join('é').split('&egrave;').join('è').replace(/<[^>]*>?/gm, '').split('&nbsp;').join('');
            if (this.messageCurrent != string) {
                this.newMessage = true;
                this.messageCurrent = string;
                this.launchLoop();
            }
            this.msgArray = string.split("");
            var timer;
            //this.looper(array, timer);
        }
        setTimeout(function () {
            _this.changed = true;
        }, 100);
    };
    DesktopFullScreenComponent.prototype.launchLoop = function () {
        var _this = this;
        var timer = setInterval(function () {
            if (_this.msgArray.length == 0) {
                clearInterval(timer);
            }
            if (_this.newMessage) {
                if (document.getElementById('text')) {
                    document.getElementById('text').innerHTML = '';
                }
                _this.newMessage = false;
                _this.msgArray = _this.messageCurrent.split("");
                clearInterval(timer);
                _this.launchLoop();
            }
            _this.looper(_this.msgArray);
        }, 30);
    };
    DesktopFullScreenComponent.prototype.looper = function (array) {
        if (array.length > 0) {
            if (document.getElementById('text')) {
                document.getElementById('text').innerHTML += array.shift();
            }
        } /*else {
          clearTimeout(timer);
        }*/
        /*timer = setTimeout(() => {
          this.looper(array, timer);
        }, 30);*/
    };
    DesktopFullScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.PlaceHolder) {
            setInterval(function () {
                _this.currentPlaceHolder = _this.PlaceHolder[Math.floor(Math.random() * _this.PlaceHolder.length)];
            }, 3000);
        }
        setInterval(function () {
            if (_this.botListeningTimer > 0) {
                _this.botListeningTimer -= 1;
                _this.botListening = _this.botListeningTimer > 0;
            }
        }, 500);
    };
    DesktopFullScreenComponent.prototype.userWriting = function (key) {
        if (key.code == 'Enter') {
            this.botListening = false;
            this.botListeningTimer = 0;
        }
        else if (key.code == 'Backspace') {
        }
        else {
            this.botListening = true;
            if (this.botListeningTimer == 0) {
                this.botListeningTimer += 2;
            }
            else if (this.botListeningTimer < 5) {
                this.botListeningTimer += 1;
            }
        }
    };
    DesktopFullScreenComponent.prototype.emit = function ($event) {
        this.firstVisit = false;
        this.readySend.emit(true);
    };
    DesktopFullScreenComponent.prototype._send = function () {
        this.botListening = false;
        var userData = {
            message: this.userInput,
            date: new Date().toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        this.send.emit(userData);
        this.userInput = null;
    };
    DesktopFullScreenComponent.prototype.scroll = function (scrollHeight) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve(0);
                        }, 300);
                    })];
            });
        });
    };
    DesktopFullScreenComponent.prototype.byPassUserInput = function (botdata, i) {
        var e_1, _a;
        /*const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('.show-btn');
        for (let btn of Array.from(buttons)) {
          btn.classList.add('hidden-btn');
        }*/
        var buttons = document.querySelectorAll('.bot-answer');
        try {
            for (var _b = __values(Array.from(buttons)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var btn = _c.value;
                btn.classList.add('hidden-btn');
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.sendBotCommand.emit(botdata);
        setTimeout(function () {
            var e_2, _a;
            var buttons = document.querySelectorAll('.bot-answer');
            try {
                for (var _b = __values(Array.from(buttons)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var btn = _c.value;
                    btn.classList.remove('hidden-btn');
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }, 1000);
    };
    DesktopFullScreenComponent.ctorParameters = function () { return [
        { type: TranslateService },
        { type: KonversoService }
    ]; };
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "AssistantMode", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "assets", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "firstVisit", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "firstUsageStory", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "displayData", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "disableUserInput", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "LastUserInput", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "LastBotAnswer", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "PlaceHolder", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "IsMobile", void 0);
    __decorate([
        Output()
    ], DesktopFullScreenComponent.prototype, "readySend", void 0);
    __decorate([
        Output()
    ], DesktopFullScreenComponent.prototype, "send", void 0);
    __decorate([
        Output()
    ], DesktopFullScreenComponent.prototype, "sendBotCommand", void 0);
    __decorate([
        Output()
    ], DesktopFullScreenComponent.prototype, "sendEvent", void 0);
    DesktopFullScreenComponent = __decorate([
        Component({
            selector: 'bot-full-screen',
            template: "<!--<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"-->\n  <!-- Canvas -->\n  <canvas class=\"orb-canvas\"></canvas>\n  <!-- Overlay -->\n  <div class=\"overlay\">\n    <!-- Overlay inner wrapper -->\n    <div class=\"overlay__inner\">\n      <!-- Buttons -->\n    </div>\n  </div>\n  <div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"\n     xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"bot-view\">\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\n                       (ready)=\"emit($event)\"></bot-first-visit>\n    </ng-container>\n    <ng-container *ngIf=\"!firstVisit\">\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\n        <div *ngIf=\"!botListening\" class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n        <div *ngIf=\"botListening\" class=\"bot-listening\">\n          <div class=\"m-carl-notification\">\n            <div class=\"m-carl-notification-cue m-cue\">\n              <div class=\"a-cue-voice\">\n                <div class=\"a-cue-voice-el\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n              </div>\n              <div class=\"a-cue-icon\"></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"bot-discussion-wrapper\">\n          <ng-container *ngIf=\"LastUserInput\">\n            <div class=\"user-input\" *ngIf=\"LastUserInput\">\n              <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                {{LastUserInput.message}}\n              </div>\n              <span class=\"time\">{{LastUserInput.date}}</span>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"LastBotAnswer\">\n            <div class=\"bot-answer\">\n              <ng-container>\n\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.text\">\n                <span *ngIf=\"!LastBotAnswer.text.includes('loading-dots')\" id=\"text\"></span><br>\n                <span *ngIf=\"changed && LastBotAnswer.text.includes('loading-dots')\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\n                   && LastBotAnswer.medias[0].required_actions\n                   && LastBotAnswer.medias[0].required_actions.length > 0\n                   && !LastBotAnswer.text.includes('loading-dots')\">\n                <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\n                  <ng-container *ngIf=\"suggest.format === 'button'\"  >\n                    <button *ngIf=\"suggest.value?.title == 'Terminer' && changed || suggest.value?.title == 'Quit' && changed\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-left show-btn c\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title == 'Nouvelle Demande' && changed || suggest.value?.title == 'New Request' && changed\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-right show-btn fade\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title && suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request' && changed\" \n                    [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\"  class=\"bot-button bot-button-grey show-btn fade\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                            [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                  </ng-container>\n                </ng-container>\n              </ng-container>\n\n            </div>\n          </ng-container>\n          <div class=\"bot-input-wrapper\">\n            <div class=\"bot-input\" id=\"bot-input-div\" *ngIf=\"!disableUserInput\">\n              <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" maxlength=\"200\"\n                     [placeholder]=\"currentPlaceHolder\">\n              <button class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n              </button>\n            </div>\n            <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n              <i>{{ select }}</i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\n        {{AssistantMode}}\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\n          <div class=\"bot-chat\">\n\n            <ng-container *ngFor=\"let entry of displayData\">\n              <ng-container *ngIf=\"entry.date\">\n                <div class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                    {{entry.message}}\n                  </div>\n                  <span class=\"time\">{{entry.date}}</span>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!entry.date\">\n                <div class=\"bot-answer\">\n                  <ng-container *ngIf=\"entry.text\">\n                    <span *ngIf=\"changed\" class=\"fade\" [innerHTML]=\"entry.text | safeHtml\"></span><br>\n                  </ng-container>\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\n                   && entry.medias[0].required_actions\n                   && entry.medias[0].required_actions.length\">\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button *ngIf=\"changed\" [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\" class=\"bot-button fade\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\n                      </ng-container>\n                    </ng-container>\n                  </ng-container>\n\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"bot-input-wrapper\">\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput\">\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" maxlength=\"200\"\n                   [placeholder]=\"currentPlaceHolder\">\n            <button *ngIf=\"changed\" class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n            </button>\n          </div>\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n            <i>{{ select }}</i>\n          </div>\n        </div>\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n      </div>\n    </ng-container>\n\n  </div>\n</div>\n",
            styles: [".bot-listening{height:100%;background:linear-gradient(135deg,#dbecf8 0,#e4f0f8 85%,#ebf3f9 100%)}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:rgba(238,238,238,.04)}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:rgba(238,238,238,.04)}.m-carl-notification{position:relative;top:50%;transform:translateY(-60%)}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:163px;height:163px;transform:translateX(5px) translateY(5px);border-radius:50%;background:linear-gradient(180deg,#5bcade 0,#39a3d7 100%);box-shadow:0 0 0 10px rgba(255,255,255,.5)}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:168px;height:168px;border-radius:50%;background:#fff;opacity:.2}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:6s infinite reverse both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){-webkit-animation:7s infinite both hovering;animation:7s infinite both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:8s infinite reverse both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){-webkit-animation:9s infinite both hovering;animation:9s infinite both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:10s infinite reverse both hovering}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:168px;width:168px;position:absolute;-webkit-animation:2s infinite pulse;animation:2s infinite pulse}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0 0 0;opacity:.4}@-webkit-keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@-webkit-keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}@keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}"]
        })
    ], DesktopFullScreenComponent);
    return DesktopFullScreenComponent;
}());
export { DesktopFullScreenComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi9kZXNrdG9wLWZ1bGwtc2NyZWVuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3T0c7QUFPSDtJQTJCRSxvQ0FBWSxTQUEyQixFQUFVLE9BQXdCO1FBQXpFLGlCQU9DO1FBUGdELFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBMUJoRSxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBTzVCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFekIsY0FBUyxHQUEwQixJQUFJLFlBQVksQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNwRSxTQUFJLEdBQTRCLElBQUksWUFBWSxDQUFZLElBQUksQ0FBQyxDQUFDO1FBQ2xFLG1CQUFjLEdBQXlCLElBQUksWUFBWSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQ3RFLGNBQVMsR0FBeUIsSUFBSSxZ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UixLQUFLLEVBQUU7a0VBQTZCO0lBQzVCO1FBQVIsS0FBSyxFQUFFO3VFQUEyQjtJQUMxQjtRQUFSLEtBQUssRUFBRTttRUFBa0Q7SUFDakQ7UUFBUixLQUFLLEVBQUU7d0VBQTJCO0lBQzFCO1FBQVIsS0FBSyxFQUFFO3FFQUEwQjtJQUN6QjtRQUFSLEtBQUssRUFBRTtxRUFBb0M7SUFDbkM7UUFBUixLQUFLLEVBQUU7bUVBQXVCO0lBQ3RCO1FBQVIsS0FBSyxFQUFFO2dFQUEyQjtJQUV6QjtRQUFULE1BQU0sRUFBRTtpRUFBcUU7SUFDcEU7UUFBVCxNQUFNLEVBQUU7NERBQW1FO0lBQ2xFO1FBQVQsTUFBTSxFQUFFO3NFQUF1RTtJQUN0RTtRQUFULE1BQU0sRUFBRTtpRUFBa0U7SUFmaEUsMEJBQTBCO1FBTHRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsMnVSQUFtRDs7U0FFcEQsQ0FBQztPQUNXLDBCQUEwQixDQStLdEM7SUFBRCxpQ0FBQztDQUFBLEFBL0tELElBK0tDO1NBL0tZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVmYXVsdEFzc2V0cywgT3BlbkNoYXRCb3RSZXNwb25zZSwgVXNlcklucHV0fSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvS29udmVyc29JbnRlcmZhY2UnO1xuaW1wb3J0IHsgS29udmVyc29TZXJ2aWNlIH0gZnJvbSAnLi4va29udmVyc28uc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuLypkZWNsYXJlIHZhciBwaXhpOiBhbnk7XG5pbXBvcnQge0thd2FzZUJsdXJGaWx0ZXJ9IGZyb20gJ0BwaXhpL2ZpbHRlci1rYXdhc2UtYmx1cic7XG5pbXBvcnQgU2ltcGxleE5vaXNlIGZyb20gJ3NpbXBsZXgtbm9pc2UnO1xuLy9pbXBvcnQgaHNsIGZyb20gXCJodHRwczovL2Nkbi5za3lwYWNrLmRldi9oc2wtdG8taGV4XCI7XG5kZWNsYXJlIHZhciBoc2w7XG4vL2ltcG9ydCBkZWJvdW5jZSBmcm9tIFwiaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvZGVib3VuY2VcIjtcbmRlY2xhcmUgdmFyIGRlYm91bmNlO1xuXG5mdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cblxuZnVuY3Rpb24gbWFwKG4sIHN0YXJ0MSwgZW5kMSwgc3RhcnQyLCBlbmQyKSB7XG4gIHJldHVybiAoKG4gLSBzdGFydDEpIC8gKGVuZDEgLSBzdGFydDEpKSAqIChlbmQyIC0gc3RhcnQyKSArIHN0YXJ0Mjtcbn1cblxuY29uc3Qgc2ltcGxleCA9IG5ldyBTaW1wbGV4Tm9pc2UoKTtcblxuY2xhc3MgQ29sb3JQYWxldHRlIHtcbiAgcHVibGljIGh1ZTtcbiAgcHVibGljIGNvbXBsaW1lbnRhcnlIdWUxO1xuICBwdWJsaWMgY29tcGxpbWVudGFyeUh1ZTI7XG4gIHB1YmxpYyBzYXR1cmF0aW9uO1xuICBwdWJsaWMgbGlnaHRuZXNzO1xuICBwdWJsaWMgYmFzZUNvbG9yO1xuICBwdWJsaWMgY29tcGxpbWVudGFyeUNvbG9yMTtcbiAgcHVibGljIGNvbXBsaW1lbnRhcnlDb2xvcjI7XG4gIHB1YmxpYyBjb2xvckNob2ljZXM7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2V0Q29sb3JzKCk7XG4gICAgdGhpcy5zZXRDdXN0b21Qcm9wZXJ0aWVzKCk7XG4gIH1cblxuICBzZXRDb2xvcnMoKSB7XG4gICAgLy8gcGljayBhIHJhbmRvbSBodWUgc29tZXdoZXJlIGJldHdlZW4gMjIwIGFuZCAzNjBcbiAgICAvL3RoaXMuaHVlID0gfn5yYW5kb20oMjIwLCAzNjApO1xuICAgIHRoaXMuaHVlID0gMjUwO1xuICAgIHRoaXMuY29tcGxpbWVudGFyeUh1ZTEgPSB0aGlzLmh1ZSArIDMwO1xuICAgIHRoaXMuY29tcGxpbWVudGFyeUh1ZTIgPSB0aGlzLmh1ZSArIDYwO1xuICAgIC8vIGRlZmluZSBhIGZpeGVkIHNhdHVyYXRpb24gYW5kIGxpZ2h0bmVzc1xuICAgIHRoaXMuc2F0dXJhdGlvbiA9IDk1O1xuICAgIHRoaXMubGlnaHRuZXNzID0gNTA7XG5cbiAgICAvLyBkZWZpbmUgYSBiYXNlIGNvbG9yXG4gICAgdGhpcy5iYXNlQ29sb3IgPSBoc2wodGhpcy5odWUsIHRoaXMuc2F0dXJhdGlvbiwgdGhpcy5saWdodG5lc3MpO1xuICAgIC8vIGRlZmluZSBhIGNvbXBsaW1lbnRhcnkgY29sb3IsIDMwIGRlZ3Jlc3MgYXdheSBmcm9tIHRoZSBiYXNlXG4gICAgdGhpcy5jb21wbGltZW50YXJ5Q29sb3IxID0gaHNsKFxuICAgICAgdGhpcy5jb21wbGltZW50YXJ5SHVlMSxcbiAgICAgIHRoaXMuc2F0dXJhdGlvbixcbiAgICAgIHRoaXMubGlnaHRuZXNzXG4gICAgKTtcbiAgICAvLyBkZWZpbmUgYSBzZWNvbmQgY29tcGxpbWVudGFyeSBjb2xvciwgNjAgZGVncmVlcyBhd2F5IGZyb20gdGhlIGJhc2VcbiAgICB0aGlzLmNvbXBsaW1lbnRhcnlDb2xvcjIgPSBoc2woXG4gICAgICB0aGlzLmNvbXBsaW1lbnRhcnlIdWUyLFxuICAgICAgdGhpcy5zYXR1cmF0aW9uLFxuICAgICAgdGhpcy5saWdodG5lc3NcbiAgICApO1xuXG4gICAgLy8gc3RvcmUgdGhlIGNvbG9yIGNob2ljZXMgaW4gYW4gYXJyYXkgc28gdGhhdCBhIHJhbmRvbSBvbmUgY2FuIGJlIHBpY2tlZCBsYXRlclxuICAgIHRoaXMuY29sb3JDaG9pY2VzID0gW1xuICAgICAgdGhpcy5iYXNlQ29sb3IsXG4gICAgICB0aGlzLmNvbXBsaW1lbnRhcnlDb2xvcjEsXG4gICAgICB0aGlzLmNvbXBsaW1lbnRhcnlDb2xvcjJcbiAgICBdO1xuICB9XG5cbiAgcmFuZG9tQ29sb3IoKSB7XG4gICAgLy8gcGljayBhIHJhbmRvbSBjb2xvclxuICAgIHJldHVybiB0aGlzLmNvbG9yQ2hvaWNlc1t+fnJhbmRvbSgwLCB0aGlzLmNvbG9yQ2hvaWNlcy5sZW5ndGgpXS5yZXBsYWNlKFxuICAgICAgXCIjXCIsXG4gICAgICBcIjB4XCJcbiAgICApO1xuICB9XG5cbiAgc2V0Q3VzdG9tUHJvcGVydGllcygpIHtcbiAgICAvLyBzZXQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIHNvIHRoYXQgdGhlIGNvbG9ycyBkZWZpbmVkIGhlcmUgY2FuIGJlIHVzZWQgdGhyb3VnaG91dCB0aGUgVUlcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWh1ZVwiLCB0aGlzLmh1ZSk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCItLWh1ZS1jb21wbGltZW50YXJ5MVwiLFxuICAgICAgdGhpcy5jb21wbGltZW50YXJ5SHVlMVxuICAgICk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCItLWh1ZS1jb21wbGltZW50YXJ5MlwiLFxuICAgICAgdGhpcy5jb21wbGltZW50YXJ5SHVlMlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgT3JiIHtcbiAgcHVibGljIGJvdW5kcztcbiAgcHVibGljIHg7XG4gIHB1YmxpYyB5O1xuICBwdWJsaWMgc2NhbGU7XG4gIHB1YmxpYyBmaWxsO1xuICBwdWJsaWMgcmFkaXVzO1xuICBwdWJsaWMgeE9mZjtcbiAgcHVibGljIHlPZmY7XG4gIHB1YmxpYyBpbmM7XG4gIHB1YmxpYyBncmFwaGljcztcbiAgLy8gUGl4aSB0YWtlcyBoZXggY29sb3JzIGFzIGhleGlkZWNpbWFsIGxpdGVyYWxzICgweCByYXRoZXIgdGhhbiBhIHN0cmluZyB3aXRoICcjJylcbiAgY29uc3RydWN0b3IoZmlsbCA9IDB4MDAwMDAwKSB7XG4gICAgLy8gYm91bmRzID0gdGhlIGFyZWEgYW4gb3JiIGlzIFwiYWxsb3dlZFwiIHRvIG1vdmUgd2l0aGluXG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLnNldEJvdW5kcygpO1xuICAgIC8vIGluaXRpYWxpc2UgdGhlIG9yYidzIHsgeCwgeSB9IHZhbHVlcyB0byBhIHJhbmRvbSBwb2ludCB3aXRoaW4gaXQncyBib3VuZHNcbiAgICB0aGlzLnggPSByYW5kb20odGhpcy5ib3VuZHNbXCJ4XCJdLm1pbiwgdGhpcy5ib3VuZHNbXCJ4XCJdLm1heCk7XG4gICAgdGhpcy55ID0gcmFuZG9tKHRoaXMuYm91bmRzW1wieVwiXS5taW4sIHRoaXMuYm91bmRzW1wieVwiXS5tYXgpO1xuXG4gICAgLy8gaG93IGxhcmdlIHRoZSBvcmIgaXMgdnMgaXQncyBvcmlnaW5hbCByYWRpdXMgKHRoaXMgd2lsbCBtb2R1bGF0ZSBvdmVyIHRpbWUpXG4gICAgdGhpcy5zY2FsZSA9IDE7XG5cbiAgICAvLyB3aGF0IGNvbG9yIGlzIHRoZSBvcmI/XG4gICAgdGhpcy5maWxsID0gZmlsbDtcblxuICAgIC8vIHRoZSBvcmlnaW5hbCByYWRpdXMgb2YgdGhlIG9yYiwgc2V0IHJlbGF0aXZlIHRvIHdpbmRvdyBoZWlnaHRcbiAgICB0aGlzLnJhZGl1cyA9IHJhbmRvbSh3aW5kb3cuaW5uZXJIZWlnaHQgLyA2LCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAzKTtcblxuICAgIC8vIHN0YXJ0aW5nIHBvaW50cyBpbiBcInRpbWVcIiBmb3IgdGhlIG5vaXNlL3NlbGYgc2ltaWxhciByYW5kb20gdmFsdWVzXG4gICAgdGhpcy54T2ZmID0gcmFuZG9tKDAsIDEwMDApO1xuICAgIHRoaXMueU9mZiA9IHJhbmRvbSgwLCAxMDAwKTtcbiAgICAvLyBob3cgcXVpY2tseSB0aGUgbm9pc2Uvc2VsZiBzaW1pbGFyIHJhbmRvbSB2YWx1ZXMgc3RlcCB0aHJvdWdoIHRpbWVcbiAgICB0aGlzLmluYyA9IDAuMDAyO1xuXG4gICAgLy8gUElYSS5HcmFwaGljcyBpcyB1c2VkIHRvIGRyYXcgMmQgcHJpbWl0aXZlcyAoaW4gdGhpcyBjYXNlIGEgY2lyY2xlKSB0byB0aGUgY2FudmFzXG4gICAgdGhpcy5ncmFwaGljcyA9IG5ldyBwaXhpLkdyYXBoaWNzKCk7XG4gICAgdGhpcy5ncmFwaGljcy5hbHBoYSA9IDAuODI1O1xuXG4gICAgLy8gMjUwbXMgYWZ0ZXIgdGhlIGxhc3Qgd2luZG93IHJlc2l6ZSBldmVudCwgcmVjYWxjdWxhdGUgb3JiIHBvc2l0aW9ucy5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwicmVzaXplXCIsXG4gICAgICBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5zZXRCb3VuZHMoKTtcbiAgICAgIH0sIDI1MClcbiAgICApO1xuICB9XG5cbiAgc2V0Qm91bmRzKCkge1xuICAgIC8vIGhvdyBmYXIgZnJvbSB0aGUgeyB4LCB5IH0gb3JpZ2luIGNhbiBlYWNoIG9yYiBtb3ZlXG4gICAgY29uc3QgbWF4RGlzdCA9XG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMDAgPyB3aW5kb3cuaW5uZXJXaWR0aCAvIDMgOiB3aW5kb3cuaW5uZXJXaWR0aCAvIDU7XG4gICAgLy8gdGhlIHsgeCwgeSB9IG9yaWdpbiBmb3IgZWFjaCBvcmIgKHRoZSBib3R0b20gcmlnaHQgb2YgdGhlIHNjcmVlbilcbiAgICBjb25zdCBvcmlnaW5YID0gd2luZG93LmlubmVyV2lkdGggLyAxLjI1O1xuICAgIGNvbnN0IG9yaWdpblkgPVxuICAgICAgd2luZG93LmlubmVyV2lkdGggPCAxMDAwXG4gICAgICAgID8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgIDogd2luZG93LmlubmVySGVpZ2h0IC8gMS4zNzU7XG5cbiAgICAvLyBhbGxvdyBlYWNoIG9yYiB0byBtb3ZlIHggZGlzdGFuY2UgYXdheSBmcm9tIGl0J3MgeCAvIHkgb3JpZ2luXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHtcbiAgICAgICAgbWluOiBvcmlnaW5YIC0gbWF4RGlzdCxcbiAgICAgICAgbWF4OiBvcmlnaW5YICsgbWF4RGlzdFxuICAgICAgfSxcbiAgICAgIHk6IHtcbiAgICAgICAgbWluOiBvcmlnaW5ZIC0gbWF4RGlzdCxcbiAgICAgICAgbWF4OiBvcmlnaW5ZICsgbWF4RGlzdFxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgLy8gc2VsZiBzaW1pbGFyIFwicHN1ZWRvLXJhbmRvbVwiIG9yIG5vaXNlIHZhbHVlcyBhdCBhIGdpdmVuIHBvaW50IGluIFwidGltZVwiXG4gICAgY29uc3QgeE5vaXNlID0gc2ltcGxleC5ub2lzZTJEKHRoaXMueE9mZiwgdGhpcy54T2ZmKTtcbiAgICBjb25zdCB5Tm9pc2UgPSBzaW1wbGV4Lm5vaXNlMkQodGhpcy55T2ZmLCB0aGlzLnlPZmYpO1xuICAgIGNvbnN0IHNjYWxlTm9pc2UgPSBzaW1wbGV4Lm5vaXNlMkQodGhpcy54T2ZmLCB0aGlzLnlPZmYpO1xuXG4gICAgLy8gbWFwIHRoZSB4Tm9pc2UveU5vaXNlIHZhbHVlcyAoYmV0d2VlbiAtMSBhbmQgMSkgdG8gYSBwb2ludCB3aXRoaW4gdGhlIG9yYidzIGJvdW5kc1xuICAgIHRoaXMueCA9IG1hcCh4Tm9pc2UsIC0xLCAxLCB0aGlzLmJvdW5kc1tcInhcIl0ubWluLCB0aGlzLmJvdW5kc1tcInhcIl0ubWF4KTtcbiAgICB0aGlzLnkgPSBtYXAoeU5vaXNlLCAtMSwgMSwgdGhpcy5ib3VuZHNbXCJ5XCJdLm1pbiwgdGhpcy5ib3VuZHNbXCJ5XCJdLm1heCk7XG4gICAgLy8gbWFwIHNjYWxlTm9pc2UgKGJldHdlZW4gLTEgYW5kIDEpIHRvIGEgc2NhbGUgdmFsdWUgc29tZXdoZXJlIGJldHdlZW4gaGFsZiBvZiB0aGUgb3JiJ3Mgb3JpZ2luYWwgc2l6ZSwgYW5kIDEwMCUgb2YgaXQncyBvcmlnaW5hbCBzaXplXG4gICAgdGhpcy5zY2FsZSA9IG1hcChzY2FsZU5vaXNlLCAtMSwgMSwgMC41LCAxKTtcblxuICAgIC8vIHN0ZXAgdGhyb3VnaCBcInRpbWVcIlxuICAgIHRoaXMueE9mZiArPSB0aGlzLmluYztcbiAgICB0aGlzLnlPZmYgKz0gdGhpcy5pbmM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gdXBkYXRlIHRoZSBQSVhJLkdyYXBoaWNzIHBvc2l0aW9uIGFuZCBzY2FsZSB2YWx1ZXNcbiAgICB0aGlzLmdyYXBoaWNzLnggPSB0aGlzLng7XG4gICAgdGhpcy5ncmFwaGljcy55ID0gdGhpcy55O1xuICAgIHRoaXMuZ3JhcGhpY3Muc2NhbGUuc2V0KHRoaXMuc2NhbGUpO1xuXG4gICAgLy8gY2xlYXIgYW55dGhpbmcgY3VycmVudGx5IGRyYXduIHRvIGdyYXBoaWNzXG4gICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuXG4gICAgLy8gdGVsbCBncmFwaGljcyB0byBmaWxsIGFueSBzaGFwZXMgZHJhd24gYWZ0ZXIgdGhpcyB3aXRoIHRoZSBvcmIncyBmaWxsIGNvbG9yXG4gICAgdGhpcy5ncmFwaGljcy5iZWdpbkZpbGwodGhpcy5maWxsKTtcbiAgICAvLyBkcmF3IGEgY2lyY2xlIGF0IHsgMCwgMCB9IHdpdGggaXQncyBzaXplIHNldCBieSB0aGlzLnJhZGl1c1xuICAgIHRoaXMuZ3JhcGhpY3MuZHJhd0NpcmNsZSgwLCAwLCB0aGlzLnJhZGl1cyk7XG4gICAgLy8gbGV0IGdyYXBoaWNzIGtub3cgd2Ugd29uJ3QgYmUgZmlsbGluZyBpbiBhbnkgbW9yZSBzaGFwZXNcbiAgICB0aGlzLmdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgfVxufVxuXG5jb25zdCBhcHAgPSBuZXcgcGl4aS5BcHBsaWNhdGlvbih7XG4gIC8vIHJlbmRlciB0byA8Y2FudmFzIGNsYXNzPVwib3JiLWNhbnZhc1wiPjwvY2FudmFzPlxuICB2aWV3OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9yYi1jYW52YXNcIiksXG4gIC8vIGF1dG8gYWRqdXN0IHNpemUgdG8gZml0IHRoZSBjdXJyZW50IHdpbmRvd1xuICByZXNpemVUbzogd2luZG93LFxuICAvLyB0cmFuc3BhcmVudCBiYWNrZ3JvdW5kLCB3ZSB3aWxsIGJlIGNyZWF0aW5nIGEgZ3JhZGllbnQgYmFja2dyb3VuZCBsYXRlciB1c2luZyBDU1NcbiAgdHJhbnNwYXJlbnQ6IHRydWVcbn0pO1xuXG4vLyBDcmVhdGUgY29sb3VyIHBhbGV0dGVcbmNvbnN0IGNvbG9yUGFsZXR0ZSA9IG5ldyBDb2xvclBhbGV0dGUoKTtcblxuYXBwLnN0YWdlLmZpbHRlcnMgPSBbbmV3IEthd2FzZUJsdXJGaWx0ZXIoMzAsIDEwLCB0cnVlKV07XG5cbi8vIENyZWF0ZSBvcmJzXG5jb25zdCBvcmJzID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICBjb25zdCBvcmIgPSBuZXcgT3JiKGNvbG9yUGFsZXR0ZS5yYW5kb21Db2xvcigpKTtcblxuICBhcHAuc3RhZ2UuYWRkQ2hpbGQob3JiLmdyYXBoaWNzKTtcblxuICBvcmJzLnB1c2gob3JiKTtcbn1cblxuLy8gQW5pbWF0ZSFcbmlmICghd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKVwiKS5tYXRjaGVzKSB7XG4gIGFwcC50aWNrZXIuYWRkKCgpID0+IHtcbiAgICBvcmJzLmZvckVhY2goKG9yYikgPT4ge1xuICAgICAgb3JiLnVwZGF0ZSgpO1xuICAgICAgb3JiLnJlbmRlcigpO1xuICAgIH0pO1xuICB9KTtcbn0gZWxzZSB7XG4gIG9yYnMuZm9yRWFjaCgob3JiKSA9PiB7XG4gICAgb3JiLnVwZGF0ZSgpO1xuICAgIG9yYi5yZW5kZXIoKTtcbiAgfSk7XG59Ki9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90LWZ1bGwtc2NyZWVuJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEZXNrdG9wRnVsbFNjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KCkgQXNzaXN0YW50TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBhc3NldHM6IERlZmF1bHRBc3NldHM7XG4gIEBJbnB1dCgpIGZpcnN0VmlzaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZmlyc3RVc2FnZVN0b3J5OiBzdHJpbmdbXTtcbiAgQElucHV0KCkgZGlzcGxheURhdGE6IChVc2VySW5wdXQgfCBPcGVuQ2hhdEJvdFJlc3BvbnNlKVtdO1xuICBASW5wdXQoKSBkaXNhYmxlVXNlcklucHV0OiBib29sZWFuO1xuICBASW5wdXQoKSBMYXN0VXNlcklucHV0OiBVc2VySW5wdXQ7XG4gIEBJbnB1dCgpIExhc3RCb3RBbnN3ZXI6IE9wZW5DaGF0Qm90UmVzcG9uc2U7XG4gIEBJbnB1dCgpIFBsYWNlSG9sZGVyOiBzdHJpbmdbXTtcbiAgQElucHV0KCkgSXNNb2JpbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgcmVhZHlTZW5kOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcbiAgQE91dHB1dCgpIHNlbmQ6IEV2ZW50RW1pdHRlcjxVc2VySW5wdXQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxVc2VySW5wdXQ+KG51bGwpO1xuICBAT3V0cHV0KCkgc2VuZEJvdENvbW1hbmQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KG51bGwpO1xuICBAT3V0cHV0KCkgc2VuZEV2ZW50OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihudWxsKTtcbiAgcHVibGljIHVzZXJJbnB1dDogc3RyaW5nO1xuICBwdWJsaWMgY3VycmVudFBsYWNlSG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHNlbmRCdG4gPSAnJztcbiAgcHVibGljIHNlbGVjdCA9ICcnO1xuICBwdWJsaWMgY2hhbmdlZCA9IGZhbHNlO1xuICBwcml2YXRlIG5ld01lc3NhZ2UgPSBmYWxzZTtcbiAgcHJpdmF0ZSBtZXNzYWdlQ3VycmVudCA9ICcnO1xuICBwcml2YXRlIG1zZ0FycmF5ID0gW107XG4gIHB1YmxpYyBib3RMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBib3RMaXN0ZW5pbmdUaW1lciA9IDA7XG5cbiAgY29uc3RydWN0b3IodHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwcml2YXRlIHNlcnZpY2U6IEtvbnZlcnNvU2VydmljZSkge1xuICAgIHNlcnZpY2UubGFuZy5zdWJzY3JpYmUoKHIpID0+IHtcbiAgICAgIGlmIChzZXJ2aWNlLmxvY2FsZSkge1xuICAgICAgICB0aGlzLnNlbmRCdG4gPSB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnU0VORCcpO1xuICAgICAgICB0aGlzLnNlbGVjdCA9IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdTRUxFQ1QnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykgJiYgIXRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dC5pbmNsdWRlcyhcImxvYWRpbmctZG90c1wiKSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKS5pbm5lckhUTUwgPSAnJztcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5MYXN0Qm90QW5zd2VyKTtcblxuICAgIGlmICh0aGlzLkxhc3RCb3RBbnN3ZXIgJiYgIXRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dC5pbmNsdWRlcyhcImxvYWRpbmctZG90c1wiKSkge1xuICAgICAgdmFyIHN0cmluZyA9IHRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dFxuICAgICAgICAuc3BsaXQoJzxici8+Jykuam9pbihgIGApXG4gICAgICAgIC5zcGxpdCgnJmVhY3V0ZTsnKS5qb2luKCfDqScpXG4gICAgICAgIC5zcGxpdCgnJmVncmF2ZTsnKS5qb2luKCfDqCcpXG4gICAgICAgIC5yZXBsYWNlKC88W14+XSo+Py9nbSwgJycpXG4gICAgICAgIC5zcGxpdCgnJm5ic3A7Jykuam9pbignJyk7XG5cbiAgICAgIGlmICh0aGlzLm1lc3NhZ2VDdXJyZW50ICE9IHN0cmluZykge1xuICAgICAgICB0aGlzLm5ld01lc3NhZ2UgPSB0cnVlO1xuICAgICAgICB0aGlzLm1lc3NhZ2VDdXJyZW50ID0gc3RyaW5nO1xuICAgICAgICB0aGlzLmxhdW5jaExvb3AoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubXNnQXJyYXkgPSBzdHJpbmcuc3BsaXQoXCJcIik7XG4gICAgICB2YXIgdGltZXI7XG4gICAgICAvL3RoaXMubG9vcGVyKGFycmF5LCB0aW1lcik7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBsYXVuY2hMb29wKCkge1xuICAgIGxldCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm1zZ0FycmF5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubmV3TWVzc2FnZSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubmV3TWVzc2FnZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1zZ0FycmF5ID0gdGhpcy5tZXNzYWdlQ3VycmVudC5zcGxpdChcIlwiKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgIHRoaXMubGF1bmNoTG9vcCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5sb29wZXIodGhpcy5tc2dBcnJheSk7XG4gICAgfSwgMzApO1xuICB9XG5cbiAgbG9vcGVyKGFycmF5KSB7XG4gICAgICBpZiggYXJyYXkubGVuZ3RoID4gMCApIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVySFRNTCArPSBhcnJheS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICB9LyplbHNlIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH0qL1xuICAgICAgLyp0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmxvb3BlcihhcnJheSwgdGltZXIpO1xuICAgICAgfSwgMzApOyovXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5QbGFjZUhvbGRlcikge1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5QbGFjZUhvbGRlci5sZW5ndGgpXTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyID4gMCkge1xuICAgICAgICB0aGlzLmJvdExpc3RlbmluZ1RpbWVyIC09IDE7XG5cbiAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmcgPSB0aGlzLmJvdExpc3RlbmluZ1RpbWVyID4gMDtcbiAgICAgIH1cbiAgICB9LCA1MDApXG4gIH1cblxuICB1c2VyV3JpdGluZyhrZXkpIHtcbiAgICBpZiAoa2V5LmNvZGUgPT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5ib3RMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuYm90TGlzdGVuaW5nVGltZXIgPSAwO1xuICAgIH0gZWxzZSBpZiAoa2V5LmNvZGUgPT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvdExpc3RlbmluZyA9IHRydWU7XG4gICAgICBpZiAodGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA9PSAwKSB7XG4gICAgICAgIHRoaXMuYm90TGlzdGVuaW5nVGltZXIgKz0gMjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA8IDUpIHtcbiAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBlbWl0KCRldmVudCkge1xuICAgIHRoaXMuZmlyc3RWaXNpdCA9IGZhbHNlO1xuICAgIHRoaXMucmVhZHlTZW5kLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgX3NlbmQoKSB7XG4gICAgdGhpcy5ib3RMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICBjb25zdCB1c2VyRGF0YTogVXNlcklucHV0ID0ge1xuICAgICAgbWVzc2FnZTogdGhpcy51c2VySW5wdXQsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHtcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICBtaW51dGU6ICcyLWRpZ2l0J1xuICAgICAgfSlcbiAgICB9O1xuICAgIHRoaXMuc2VuZC5lbWl0KHVzZXJEYXRhKTtcbiAgICB0aGlzLnVzZXJJbnB1dCA9IG51bGw7XG4gIH1cblxuICBhc3luYyBzY3JvbGwoc2Nyb2xsSGVpZ2h0OiBudW1iZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoMCk7XG4gICAgICB9LCAzMDApO1xuICAgIH0pO1xuXG4gIH1cblxuICBieVBhc3NVc2VySW5wdXQoYm90ZGF0YTogc3RyaW5nLCBpPzogbnVtYmVyKSB7XG4gICAgLypjb25zdCBidXR0b25zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaG93LWJ0bicpO1xuICAgIGZvciAobGV0IGJ0biBvZiBBcnJheS5mcm9tKGJ1dHRvbnMpKSB7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWJ0bicpO1xuICAgIH0qL1xuICAgIGNvbnN0IGJ1dHRvbnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvdC1hbnN3ZXInKTtcbiAgICBmb3IgKGxldCBidG4gb2YgQXJyYXkuZnJvbShidXR0b25zKSkge1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1idG4nKTtcbiAgICB9XG4gICAgdGhpcy5zZW5kQm90Q29tbWFuZC5lbWl0KGJvdGRhdGEpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpO1xuICAgICAgZm9yIChsZXQgYnRuIG9mIEFycmF5LmZyb20oYnV0dG9ucykpIHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1idG4nKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuIl19