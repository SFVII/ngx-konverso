import { __awaiter, __generator, __values } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../translate.service";
import * as i2 from "../konverso.service";
import * as i3 from "@angular/common";
import * as i4 from "../first-visit/first-visit.component";
import * as i5 from "@angular/forms";
import * as i6 from "../pipe/safe-html.pipe";
function DesktopFullScreenComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    var _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "bot-first-visit", 3);
    i0.ɵɵlistener("ready", function DesktopFullScreenComponent_ng_container_2_Template_bot_first_visit_ready_1_listener($event) { i0.ɵɵrestoreView(_r87); var ctx_r86 = i0.ɵɵnextContext(); return ctx_r86.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r84 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("firstUsageStory", ctx_r84.firstUsageStory)("assets", ctx_r84.assets);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelement(1, "div", 18);
    i0.ɵɵelement(2, "div", 19);
    i0.ɵɵelement(3, "div", 20);
    i0.ɵɵelement(4, "div", 21);
    i0.ɵɵelement(5, "div", 22);
    i0.ɵɵelementEnd();
} }
var _c0 = function (a0) { return { color: a0 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 26);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r95 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction1(4, _c0, ctx_r95.assets == null ? null : ctx_r95.assets.ColorSet == null ? null : ctx_r95.assets.ColorSet.Secondary));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r95.LastUserInput.message, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r95.LastUserInput.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_div_1_Template, 5, 6, "div", 23);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r91 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r91.LastUserInput && (ctx_r91.LastUserInput == null ? null : ctx_r91.LastUserInput.message) != "");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 30);
    i0.ɵɵpipe(1, "safeHtml");
} if (rf & 2) {
    var ctx_r98 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ctx_r98.LastBotAnswer.text), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 31);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_span_1_Template, 2, 3, "span", 28);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_span_2_Template, 1, 0, "span", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r96 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r96.LastBotAnswer.text.includes("loading-dots") && ctx_r96.changed && ctx_r96.showText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r96.LastBotAnswer.text.includes("loading-dots"));
} }
var _c1 = function (a0, a1) { return { borderColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r109 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 36);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r109); var ctx_r108 = i0.ɵɵnextContext(2); var suggest_r101 = ctx_r108.$implicit; var i_r102 = ctx_r108.index; var ctx_r107 = i0.ɵɵnextContext(5); return ctx_r107.byPassUserInput(suggest_r101 == null ? null : suggest_r101.value == null ? null : suggest_r101.value.onClick, i_r102); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var suggest_r101 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r104 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(3, _c1, ctx_r104.assets == null ? null : ctx_r104.assets.ColorSet == null ? null : ctx_r104.assets.ColorSet.Primary, ctx_r104.assets == null ? null : ctx_r104.assets.ColorSet == null ? null : ctx_r104.assets.ColorSet.Primary));
    i0.ɵɵproperty("innerHTML", suggest_r101.label || (suggest_r101.value == null ? null : suggest_r101.value.displayedMessage) || (suggest_r101.value == null ? null : suggest_r101.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r113 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 37);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r113); var ctx_r112 = i0.ɵɵnextContext(2); var suggest_r101 = ctx_r112.$implicit; var i_r102 = ctx_r112.index; var ctx_r111 = i0.ɵɵnextContext(5); return ctx_r111.byPassUserInput(suggest_r101 == null ? null : suggest_r101.value == null ? null : suggest_r101.value.onClick, i_r102); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var suggest_r101 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r105 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(3, _c1, ctx_r105.assets == null ? null : ctx_r105.assets.ColorSet == null ? null : ctx_r105.assets.ColorSet.Primary, ctx_r105.assets == null ? null : ctx_r105.assets.ColorSet == null ? null : ctx_r105.assets.ColorSet.Primary));
    i0.ɵɵproperty("innerHTML", suggest_r101.label || (suggest_r101.value == null ? null : suggest_r101.value.displayedMessage) || (suggest_r101.value == null ? null : suggest_r101.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r117 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 38);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r117); var ctx_r116 = i0.ɵɵnextContext(2); var suggest_r101 = ctx_r116.$implicit; var i_r102 = ctx_r116.index; var ctx_r115 = i0.ɵɵnextContext(5); return ctx_r115.byPassUserInput(suggest_r101 == null ? null : suggest_r101.value == null ? null : suggest_r101.value.onClick, i_r102); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var suggest_r101 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r106 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(3, _c1, ctx_r106.assets == null ? null : ctx_r106.assets.ColorSet == null ? null : ctx_r106.assets.ColorSet.Primary, ctx_r106.assets == null ? null : ctx_r106.assets.ColorSet == null ? null : ctx_r106.assets.ColorSet.Primary));
    i0.ɵɵproperty("innerHTML", suggest_r101.label || (suggest_r101.value == null ? null : suggest_r101.value.displayedMessage) || (suggest_r101.value == null ? null : suggest_r101.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_1_Template, 1, 6, "button", 33);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_2_Template, 1, 6, "button", 34);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_3_Template, 1, 6, "button", 35);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var suggest_r101 = i0.ɵɵnextContext().$implicit;
    var ctx_r103 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r101.value == null ? null : suggest_r101.value.title) == "Terminer" && ctx_r103.changed || (suggest_r101.value == null ? null : suggest_r101.value.title) == "Quit" && ctx_r103.changed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r101.value == null ? null : suggest_r101.value.title) == "Nouvelle Demande" && ctx_r103.changed || (suggest_r101.value == null ? null : suggest_r101.value.title) == "New Request" && ctx_r103.changed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r101.value == null ? null : suggest_r101.value.title) && (suggest_r101.value == null ? null : suggest_r101.value.title) != "Terminer" && (suggest_r101.value == null ? null : suggest_r101.value.title) != "Quit" && (suggest_r101.value == null ? null : suggest_r101.value.title) != "Nouvelle Demande" && (suggest_r101.value == null ? null : suggest_r101.value.title) != "New Request" && ctx_r103.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_Template, 4, 3, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var suggest_r101 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", suggest_r101.format === "button");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r97 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r97.LastBotAnswer.medias[0].required_actions);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 27);
    i0.ɵɵelementContainer(2);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_Template, 3, 2, "ng-container", 2);
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r92 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r92.LastBotAnswer.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r92.LastBotAnswer.medias && ctx_r92.LastBotAnswer.medias.length && ctx_r92.LastBotAnswer.medias[0].required_actions && ctx_r92.LastBotAnswer.medias[0].required_actions.length > 0 && !ctx_r92.LastBotAnswer.text.includes("loading-dots"));
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r123 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 41);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r123); var ctx_r122 = i0.ɵɵnextContext(4); return ctx_r122.userInput = $event; })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_1_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r123); var ctx_r124 = i0.ɵɵnextContext(4); return ctx_r124.userInput && ctx_r124._send(); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_1_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r123); var ctx_r125 = i0.ɵɵnextContext(4); return ctx_r125.userWriting($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r120 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r120.inputType)("ngModel", ctx_r120.userInput)("max", ctx_r120.inputLimit)("placeholder", ctx_r120.currentPlaceHolder);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    var _r127 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 42);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_2_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r127); var ctx_r126 = i0.ɵɵnextContext(4); return ctx_r126.userInput = $event; })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_2_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r127); var ctx_r128 = i0.ɵɵnextContext(4); return ctx_r128.userInput && ctx_r128._send(); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_2_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r127); var ctx_r129 = i0.ɵɵnextContext(4); return ctx_r129.userWriting($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r121 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r121.inputType)("ngModel", ctx_r121.userInput)("maxlength", ctx_r121.inputLimit)("placeholder", ctx_r121.currentPlaceHolder);
} }
var _c2 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r131 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_1_Template, 2, 4, "ng-container", 2);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_2_Template, 2, 4, "ng-container", 2);
    i0.ɵɵelementStart(3, "button", 40);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r131); var ctx_r130 = i0.ɵɵnextContext(3); return ctx_r130._send(); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r93 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r93.inputType === "number");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r93.inputType === "text");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(6, _c2, ctx_r93.assets == null ? null : ctx_r93.assets.ColorSet == null ? null : ctx_r93.assets.ColorSet.Primary, ctx_r93.assets == null ? null : ctx_r93.assets.ColorSet == null ? null : ctx_r93.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r93.userInput);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r93.sendBtn, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵelementStart(1, "i");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r94 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r94.select);
} }
var _c3 = function () { return { "height": "40%" }; };
var _c4 = function () { return { "transform": "translateY(-10vh)" }; };
function DesktopFullScreenComponent_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "div", 9);
    i0.ɵɵelementStart(3, "div", 10);
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_div_4_Template, 6, 0, "div", 11);
    i0.ɵɵelement(5, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 13);
    i0.ɵɵtemplate(7, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(8, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_Template, 5, 2, "ng-container", 2);
    i0.ɵɵelementStart(9, "div", 14);
    i0.ɵɵtemplate(10, DesktopFullScreenComponent_ng_container_3_div_2_div_10_Template, 5, 9, "div", 15);
    i0.ɵɵtemplate(11, DesktopFullScreenComponent_ng_container_3_div_2_div_11_Template, 3, 1, "div", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r88 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction0(7, _c3));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction0(8, _c4));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r88.botListening);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r88.LastUserInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r88.LastBotAnswer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r88.disableUserInput && ctx_r88.showInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r88.disableUserInput);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵelementStart(2, "div", 25);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 26);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var entry_r136 = i0.ɵɵnextContext().$implicit;
    var ctx_r137 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c2, ctx_r137.assets == null ? null : ctx_r137.assets.ColorSet == null ? null : ctx_r137.assets.ColorSet.Primary, ctx_r137.assets == null ? null : ctx_r137.assets.ColorSet == null ? null : ctx_r137.assets.ColorSet.Secondary));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", entry_r136.message, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r136.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 30);
    i0.ɵɵpipe(1, "safeHtml");
} if (rf & 2) {
    var entry_r136 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, entry_r136.text), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template, 2, 3, "span", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r140 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r140.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r150 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 52);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r150); var suggest_r145 = i0.ɵɵnextContext(2).$implicit; var ctx_r148 = i0.ɵɵnextContext(6); return ctx_r148.byPassUserInput(suggest_r145 == null ? null : suggest_r145.value == null ? null : suggest_r145.value.onClick); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var suggest_r145 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r147 = i0.ɵɵnextContext(6);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(3, _c1, ctx_r147.assets == null ? null : ctx_r147.assets.ColorSet == null ? null : ctx_r147.assets.ColorSet.Primary, ctx_r147.assets == null ? null : ctx_r147.assets.ColorSet == null ? null : ctx_r147.assets.ColorSet.Primary));
    i0.ɵɵproperty("innerHTML", suggest_r145.label || (suggest_r145.value == null ? null : suggest_r145.value.displayedMessage) || (suggest_r145.value == null ? null : suggest_r145.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template, 1, 6, "button", 51);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r146 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r146.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var suggest_r145 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", suggest_r145.format === "button");
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var entry_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", entry_r136.medias[0].required_actions);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 27);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var entry_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", entry_r136.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r136.medias && entry_r136.medias.length && entry_r136.medias[0].required_actions && entry_r136.medias[0].required_actions.length);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_1_Template, 6, 7, "ng-container", 2);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template, 4, 2, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var entry_r136 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r136.date);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !entry_r136.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r156 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 40);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r156); var ctx_r155 = i0.ɵɵnextContext(4); return ctx_r155._send(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r154 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c2, ctx_r154.assets == null ? null : ctx_r154.assets.ColorSet == null ? null : ctx_r154.assets.ColorSet.Primary, ctx_r154.assets == null ? null : ctx_r154.assets.ColorSet == null ? null : ctx_r154.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r154.userInput);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r154.sendBtn, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r158 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵelementStart(1, "input", 54);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r158); var ctx_r157 = i0.ɵɵnextContext(3); return ctx_r157.userInput = $event; })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r158); var ctx_r159 = i0.ɵɵnextContext(3); return ctx_r159.userInput && ctx_r159._send(); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r158); var ctx_r160 = i0.ɵɵnextContext(3); return ctx_r160.userWriting($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template, 2, 7, "button", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r134 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r134.userInput)("placeholder", ctx_r134.currentPlaceHolder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r134.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵelementStart(1, "i");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r135 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r135.select);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "div", 45, 46);
    i0.ɵɵelementStart(4, "div", 47);
    i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template, 3, 2, "ng-container", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 14);
    i0.ɵɵtemplate(7, DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template, 3, 3, "div", 48);
    i0.ɵɵtemplate(8, DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template, 3, 1, "div", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 49);
    i0.ɵɵelement(10, "img", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r132 = i0.ɵɵreference(3);
    var ctx_r89 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r89.AssistantMode, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("scrollTop", _r132.scrollTo(0, 9999999));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r89.displayData);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r89.disableUserInput && ctx_r89.showInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r89.disableUserInput);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r89.assets.FullSizeLogo, i0.ɵɵsanitizeUrl);
} }
function DesktopFullScreenComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    var _r162 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 4);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r162); var ctx_r161 = i0.ɵɵnextContext(); return ctx_r161.byPassUserInput("exit", 0); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_Template, 12, 9, "div", 5);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_3_Template, 11, 6, "div", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r85 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r85.AssistantMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r85.AssistantMode);
} }
var _c5 = function () { return { "background-color": "#100652 0% 0% no-repeat padding-box;" }; };
var defaultInputType = 'text';
var defaultInputLimit = 300;
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
        this.botListening = false;
        this.showWrapper = false;
        this.showText = false;
        this.inputType = defaultInputType;
        this.inputLimit = defaultInputLimit;
        this.newMessage = false;
        this.messageCurrent = '';
        this.msgArray = [];
        this.botListeningTimer = 0;
        this.anim_done = false;
        this.reloaded = false;
        service.lang.subscribe(function (r) {
            if (service.locale) {
                _this.sendBtn = translate.translate(service.locale, 'SEND');
                _this.select = translate.translate(service.locale, 'SELECT');
            }
        });
    }
    DesktopFullScreenComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var _a, _b;
        var t = setInterval(function () {
            if (document.querySelectorAll('.bot-answer')) {
                var elems = document.querySelectorAll('.bot-answer');
                if (elems.length > 0) {
                    var index = 0, length_1 = elems.length;
                    var rep = true;
                    for (; index < length_1; index++) {
                        var temp = elems[index];
                        if (temp.style.opacity == '0') {
                            temp.style.opacity = '1';
                        }
                    }
                    _this.anim_done = rep;
                    if (_this.anim_done) {
                        clearInterval(t);
                    }
                }
            }
        }, 100);
        this.changed = false;
        if (document.getElementById('text') && !((_a = this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.text.includes('loading-dots'))) {
            document.getElementById('text').innerHTML = '';
        }
        var displayZone = document.querySelector('.bot-answer');
        if (displayZone && displayZone.querySelector('number')) {
            this.inputType = 'number';
            this.inputLimit = 999;
            this.currentPlaceHolder = this.NumberPlaceHolder[Math.floor(Math.random() * this.NumberPlaceHolder.length)];
        }
        else {
            this.currentPlaceHolder = this.PlaceHolder[Math.floor(Math.random() * this.PlaceHolder.length)];
            this.inputType = defaultInputType;
            this.inputLimit = defaultInputLimit;
        }
        //console.log(this.LastBotAnswer);
        if (!this.anim_done) {
            var t2_1 = setInterval(function () {
                var _a, _b;
                if (_this.LastBotAnswer && !((_a = _this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.text.includes('loading-dots')) && _this.anim_done) {
                    clearInterval(t2_1);
                    var string = (_b = _this.LastBotAnswer) === null || _b === void 0 ? void 0 : _b.text.split('<br/>').join(" ").split('&eacute;').join('é').split('&egrave;').join('è').replace(/<[^>]*>?/gm, '').split('&nbsp;').join('');
                    _this.msgArray = string.split('');
                    if (_this.messageCurrent !== string) {
                        _this.newMessage = true;
                        _this.messageCurrent = string;
                        _this.launchLoop();
                    }
                    //this.looper(array, timer);
                }
            }, 100);
        }
        else {
            var string = (_b = this.LastBotAnswer) === null || _b === void 0 ? void 0 : _b.text.split('<br/>').join(" ").split('&eacute;').join('é').split('&egrave;').join('è').replace(/<[^>]*>?/gm, '').split('&nbsp;').join('');
            this.msgArray = string.split('');
            if (this.messageCurrent !== string && string !== '') {
                this.newMessage = true;
                this.messageCurrent = string;
                this.launchLoop();
            }
        }
        setTimeout(function () {
            _this.changed = true;
        }, 100);
    };
    DesktopFullScreenComponent.prototype.launchLoop = function () {
        var _this = this;
        this.timer = setInterval(function () {
            if (_this.msgArray.length == 0) {
                clearInterval(_this.timer);
            }
            if (_this.newMessage) {
                if (document.getElementById('text')) {
                    document.getElementById('text').innerHTML = '';
                }
                _this.newMessage = false;
                //this.msgArray = this.messageCurrent.split("");
                clearInterval(_this.timer);
                _this.launchLoop();
            }
            _this.looper();
        }, 60);
    };
    DesktopFullScreenComponent.prototype.looper = function () {
        if (this.msgArray.length > 0 && !this.reloaded) {
            if (document.getElementById('text')) {
                document.getElementById('text').innerHTML += this.msgArray.shift();
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
        this.inputType = defaultInputType;
        this.inputLimit = defaultInputLimit;
        if (this.PlaceHolder) {
            this.currentPlaceHolder = this.PlaceHolder[Math.floor(Math.random() * this.PlaceHolder.length)];
            setInterval(function () {
                _this.currentPlaceHolder = _this.PlaceHolder[Math.floor(Math.random() * _this.PlaceHolder.length)];
            }, 3000);
        }
        setTimeout(function () {
            _this.showWrapper = true;
        }, 2000);
        setTimeout(function () {
            _this.showText = true;
        }, 2500);
        var t = setInterval(function () {
            if (document.querySelectorAll('.bot-answer')) {
                var elems = document.querySelectorAll('.bot-answer');
                if (elems.length > 0) {
                    var index = 0, length_2 = elems.length;
                    var rep = true;
                    for (; index < length_2; index++) {
                        var temp = elems[index];
                        if (temp.style.opacity == '0') {
                            rep = false;
                        }
                    }
                    _this.anim_done = rep;
                    if (_this.anim_done) {
                        clearInterval(t);
                    }
                }
            }
        }, 100);
        //run.run();
        setInterval(function () {
            if (_this.botListeningTimer > 0) {
                _this.botListeningTimer -= 1;
                if (_this.botListeningTimer > 0) {
                    document.getElementById('bot').className = 'a-cue-voice speaking';
                    document.getElementById('bot-icon').className = 'a-cue-icon speakingicon';
                }
                else {
                    document.getElementById('bot').className = 'a-cue-voice';
                    document.getElementById('bot-icon').className = 'a-cue-icon';
                }
                _this.botListening = _this.botListeningTimer > 0;
            }
        }, 500);
    };
    DesktopFullScreenComponent.prototype.userWriting = function (key) {
        if (key.code === 'Enter') {
            this.botListening = false;
            this.botListeningTimer = 0;
        }
        else if (key.code === 'Backspace') {
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
        var _a;
        if (((_a = this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.endOfTopic) && this.LastUserInput) {
            this.LastUserInput.message = '';
        }
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
    DesktopFullScreenComponent.ɵfac = function DesktopFullScreenComponent_Factory(t) { return new (t || DesktopFullScreenComponent)(i0.ɵɵdirectiveInject(i1.TranslateService), i0.ɵɵdirectiveInject(i2.KonversoService)); };
    DesktopFullScreenComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DesktopFullScreenComponent, selectors: [["bot-full-screen"]], inputs: { AssistantMode: "AssistantMode", assets: "assets", firstVisit: "firstVisit", firstUsageStory: "firstUsageStory", displayData: "displayData", disableUserInput: "disableUserInput", LastUserInput: "LastUserInput", LastBotAnswer: "LastBotAnswer", PlaceHolder: "PlaceHolder", IsMobile: "IsMobile", showInput: "showInput", NumberPlaceHolder: "NumberPlaceHolder" }, outputs: { readySend: "readySend", send: "send", sendBotCommand: "sendBotCommand", sendEvent: "sendEvent" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [["xmlns", "http://www.w3.org/1999/html", 1, "bot-container"], [1, "bot-view"], [4, "ngIf"], [3, "firstUsageStory", "assets", "ready"], ["id", "exit-btn", 2, "display", "none", 3, "click"], ["class", "bot-assistant-wrapper", 4, "ngIf"], ["class", "bot-chat-wrapper", 4, "ngIf"], [1, "bot-assistant-wrapper"], [1, "bot-logo", "bot-listening", 3, "ngStyle"], [1, "m-carl-notification", 3, "ngStyle"], [1, "m-carl-notification-cue", "m-cue"], ["class", "a-cue-voice", "id", "bot", 4, "ngIf"], ["id", "bot-icon", 1, "a-cue-icon"], [1, "bot-discussion-wrapper", 2, "min-height", "60%", "max-height", "60%", "height", "60%", "/*max-height", "120px"], [1, "bot-input-wrapper"], ["class", "bot-input", "id", "bot-input-div", 4, "ngIf"], ["class", "bot-input-disable", 4, "ngIf"], ["id", "bot", 1, "a-cue-voice"], [1, "a-cue-voice-el", "voice1"], [1, "a-cue-voice-el", "voice2"], [1, "a-cue-voice-el", "voice3"], [1, "a-cue-voice-el", "voice4"], [1, "a-cue-voice-el"], ["class", "user-input", 4, "ngIf"], [1, "user-input"], [1, "data"], [1, "time"], [1, "bot-answer"], ["class", "fade", 3, "innerHTML", 4, "ngIf"], ["class", "fade", "id", "loading-creation", 4, "ngIf"], [1, "fade", 3, "innerHTML"], ["id", "loading-creation", 1, "fade"], [4, "ngFor", "ngForOf"], ["class", "bot-button bot-button-left show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-right show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-grey show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", "bot-button-left", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-right", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-grey", "show-btn", 3, "innerHTML", "click"], ["id", "bot-input-div", 1, "bot-input"], [1, "bot-button", 3, "disabled", "click"], ["min", "2", 3, "type", "ngModel", "max", "placeholder", "ngModelChange", "keyup.enter", "keyup"], [3, "type", "ngModel", "maxlength", "placeholder", "ngModelChange", "keyup.enter", "keyup"], [1, "bot-input-disable"], [1, "bot-chat-wrapper"], [1, "bot-discussion-wrapper", 3, "scrollTop"], ["scrollMe", ""], [1, "bot-chat"], ["class", "bot-input", 4, "ngIf"], [1, "bot-logo"], [3, "src"], ["class", "bot-button fade", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", "fade", 3, "innerHTML", "click"], [1, "bot-input"], ["type", "text", "maxlength", "200", 3, "ngModel", "placeholder", "ngModelChange", "keyup.enter", "keyup"], ["class", "bot-button", 3, "style", "disabled", "click", 4, "ngIf"]], template: function DesktopFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_2_Template, 2, 2, "ng-container", 2);
            i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_Template, 4, 2, "ng-container", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(6, _c5));
            i0.ɵɵclassMap(ctx.IsMobile ? "bot-mobile" : "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.firstVisit && ctx.firstUsageStory);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.firstVisit || !ctx.firstUsageStory);
        } }, directives: [i3.NgIf, i4.FirstVisitComponent, i3.NgStyle, i3.NgForOf, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i5.MaxLengthValidator], pipes: [i6.SafeHtmlPipe], styles: ["@-webkit-keyframes gradient{0%,100%{background-position:50% 0}50%{background-position:50% 100%}}@keyframes gradient{0%,100%{background-position:50% 0}50%{background-position:50% 100%}}@keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}@-webkit-keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}.bot-listening[_ngcontent-%COMP%]{height:100%;background:0 0}.bot-listening[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:0 0}.bot-listening[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:0 0}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification[_ngcontent-%COMP%]{transform:translate(0)!important}}.m-carl-notification[_ngcontent-%COMP%]{position:relative;top:50%}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-icon[_ngcontent-%COMP%]{position:absolute;width:100px;height:100px;transform:translateX(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9d107d 1px,#9d107d 3%,#580b58 60%);box-shadow:0 0 10px 5px rgb(0 0 0 / 25%);-webkit-animation:3.5s infinite pulsebot;animation:3.5s infinite pulsebot}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice[_ngcontent-%COMP%]{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1[_ngcontent-%COMP%]{background:#9a147f!important}.voice2[_ngcontent-%COMP%]{background:#773691!important}.voice3[_ngcontent-%COMP%]{background:#4e5ca8!important}.voice4[_ngcontent-%COMP%]{background:#abc1f1!important}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(1){animation:6s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(2){-webkit-animation:7s infinite both hovering;animation:7s infinite both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(3){animation:8s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(4){-webkit-animation:9s infinite both hovering;animation:9s infinite both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(5){animation:10s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .speaking[_ngcontent-%COMP%]{-webkit-animation:2s infinite pulse;animation:2s infinite pulse}.m-carl-notification[_ngcontent-%COMP%]   .a-caption[_ngcontent-%COMP%]{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification[_ngcontent-%COMP%]   .a-caption.speaking[_ngcontent-%COMP%]{text-shadow:0 0 0;opacity:.4}@-webkit-keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@-webkit-keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}@keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}"] });
    return DesktopFullScreenComponent;
}());
export { DesktopFullScreenComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DesktopFullScreenComponent, [{
        type: Component,
        args: [{
                selector: 'bot-full-screen',
                templateUrl: './desktop-full-screen.component.html',
                styleUrls: ['./desktop-full-screen.component.css']
            }]
    }], function () { return [{ type: i1.TranslateService }, { type: i2.KonversoService }]; }, { AssistantMode: [{
            type: Input
        }], assets: [{
            type: Input
        }], firstVisit: [{
            type: Input
        }], firstUsageStory: [{
            type: Input
        }], displayData: [{
            type: Input
        }], disableUserInput: [{
            type: Input
        }], LastUserInput: [{
            type: Input
        }], LastBotAnswer: [{
            type: Input
        }], PlaceHolder: [{
            type: Input
        }], IsMobile: [{
            type: Input
        }], showInput: [{
            type: Input
        }], NumberPlaceHolder: [{
            type: Input
        }], readySend: [{
            type: Output
        }], send: [{
            type: Output
        }], sendBotCommand: [{
            type: Output
        }], sendEvent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi9kZXNrdG9wLWZ1bGwtc2NyZWVuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50LnRzIiwibGliL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7SUNVcEYsNkJBQ0U7SUFBQSwwQ0FDMEQ7SUFBekMsdU5BQXNCO0lBQUMsaUJBQWtCO0lBQzVELDBCQUFlOzs7SUFGSSxlQUFtQztJQUFuQyx5REFBbUMsMEJBQUE7OztJQWE1QywrQkFDRTtJQUFBLDBCQUF5QztJQUN6QywwQkFBeUM7SUFDekMsMEJBQXlDO0lBQ3pDLDBCQUF5QztJQUN6QywwQkFBa0M7SUFDcEMsaUJBQU07Ozs7SUFPUiwrQkFDRTtJQUFBLCtCQUdFO0lBQUEsWUFDRjtJQUFBLGlCQUFNO0lBQ04sZ0NBQW1CO0lBQUEsWUFBc0I7SUFBQSxpQkFBTztJQUNsRCxpQkFBTTs7O0lBTmMsZUFFVjtJQUZVLHFKQUVWO0lBQ04sZUFDRjtJQURFLDhEQUNGO0lBQ21CLGVBQXNCO0lBQXRCLGdEQUFzQjs7O0lBUDdDLDZCQUNFO0lBQUEsZ0hBQ0U7SUFPSiwwQkFBZTs7O0lBUlcsZUFBcUQ7SUFBckQsNEhBQXFEOzs7SUFrQnpFLDJCQUFrSjs7OztJQUFuRCwrRkFBMkM7OztJQUMxSSwyQkFBb0c7OztJQUx0Ryw2QkFDRTtJQUdBLGlJQUEySTtJQUMzSSxpSUFBNkY7SUFFL0YsMEJBQWU7OztJQUhQLGVBQTJFO0lBQTNFLGtIQUEyRTtJQUMzRSxlQUFtRDtJQUFuRCwwRUFBbUQ7Ozs7O0lBU3JELGtDQUtTO0lBRmdDLHdl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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZWZhdWx0QXNzZXRzLCBPcGVuQ2hhdEJvdFJlc3BvbnNlLCBVc2VySW5wdXR9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XG5pbXBvcnQge0tvbnZlcnNvU2VydmljZX0gZnJvbSAnLi4va29udmVyc28uc2VydmljZSc7XG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJy4uL3RyYW5zbGF0ZS5zZXJ2aWNlJztcbi8vaW1wb3J0ICogYXMgcnVuIGZyb20gJ3Byb2plY3RzL2tvbnZlcnNvL2Fzc2V0cy9hbmltYXRlZGJhY2suanMnO1xuLy9pbXBvcnQge0thd2FzZUJsdXJGaWx0ZXJ9IGZyb20gXCIuLi8uLi9maWx0ZXJzL2thd2FzZS1ibHVyL3NyYy9LYXdhc2VCbHVyRmlsdGVyXCI7XG5kZWNsYXJlIHZhciBQSVhJOiBhbnk7XG5jb25zdCBkZWZhdWx0SW5wdXRUeXBlID0gJ3RleHQnO1xuY29uc3QgZGVmYXVsdElucHV0TGltaXQgPSAzMDA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYm90LWZ1bGwtc2NyZWVuJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGVza3RvcEZ1bGxTY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gICAgQElucHV0KCkgQXNzaXN0YW50TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGFzc2V0czogRGVmYXVsdEFzc2V0cztcbiAgICBASW5wdXQoKSBmaXJzdFZpc2l0OiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZmlyc3RVc2FnZVN0b3J5OiBzdHJpbmdbXTtcbiAgICBASW5wdXQoKSBkaXNwbGF5RGF0YTogKFVzZXJJbnB1dCB8IE9wZW5DaGF0Qm90UmVzcG9uc2UpW107XG4gICAgQElucHV0KCkgZGlzYWJsZVVzZXJJbnB1dDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBMYXN0VXNlcklucHV0OiBVc2VySW5wdXQ7XG4gICAgQElucHV0KCkgTGFzdEJvdEFuc3dlcjogT3BlbkNoYXRCb3RSZXNwb25zZTtcbiAgICBASW5wdXQoKSBQbGFjZUhvbGRlcjogc3RyaW5nW107XG4gICAgQElucHV0KCkgSXNNb2JpbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBzaG93SW5wdXQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgTnVtYmVyUGxhY2VIb2xkZXI6IHN0cmluZ1tdO1xuXG4gICAgQE91dHB1dCgpIHJlYWR5U2VuZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG4gICAgQE91dHB1dCgpIHNlbmQ6IEV2ZW50RW1pdHRlcjxVc2VySW5wdXQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxVc2VySW5wdXQ+KG51bGwpO1xuICAgIEBPdXRwdXQoKSBzZW5kQm90Q29tbWFuZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4obnVsbCk7XG4gICAgQE91dHB1dCgpIHNlbmRFdmVudDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4obnVsbCk7XG4gICAgcHVibGljIHVzZXJJbnB1dDogc3RyaW5nO1xuICAgIHB1YmxpYyBjdXJyZW50UGxhY2VIb2xkZXI6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBzZW5kQnRuID0gJyc7XG4gICAgcHVibGljIHNlbGVjdCA9ICcnO1xuICAgIHB1YmxpYyBjaGFuZ2VkID0gZmFsc2U7XG4gICAgcHVibGljIGJvdExpc3RlbmluZyA9IGZhbHNlO1xuICAgIHB1YmxpYyBzaG93V3JhcHBlciA9IGZhbHNlO1xuICAgIHB1YmxpYyBzaG93VGV4dCA9IGZhbHNlO1xuICAgIHB1YmxpYyBpbnB1dFR5cGU6IHN0cmluZyA9IGRlZmF1bHRJbnB1dFR5cGU7XG4gICAgcHVibGljIGlucHV0TGltaXQ6IG51bWJlciA9IGRlZmF1bHRJbnB1dExpbWl0O1xuICAgIHByaXZhdGUgbmV3TWVzc2FnZSA9IGZhbHNlO1xuICAgIHByaXZhdGUgbWVzc2FnZUN1cnJlbnQgPSAnJztcbiAgICBwcml2YXRlIG1zZ0FycmF5ID0gW107XG4gICAgcHJpdmF0ZSBib3RMaXN0ZW5pbmdUaW1lciA9IDA7XG4gICAgcHJpdmF0ZSBhbmltX2RvbmUgPSBmYWxzZTtcbiAgICBwcml2YXRlIHJlbG9hZGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSB0aW1lcjtcblxuICAgIGNvbnN0cnVjdG9yKHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSwgcHJpdmF0ZSBzZXJ2aWNlOiBLb252ZXJzb1NlcnZpY2UpIHtcbiAgICAgICAgc2VydmljZS5sYW5nLnN1YnNjcmliZSgocikgPT4ge1xuICAgICAgICAgICAgaWYgKHNlcnZpY2UubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQnRuID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTkQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdCA9IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdTRUxFQ1QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIGxldCB0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3QtYW5zd2VyJykpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDAsIGxlbmd0aCA9IGVsZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBlbGVtc1tpbmRleF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcC5zdHlsZS5vcGFjaXR5ID09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1fZG9uZSA9IHJlcDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbV9kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpICYmICF0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQuaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGlzcGxheVpvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm90LWFuc3dlcicpO1xuICAgICAgICBpZiAoZGlzcGxheVpvbmUgJiYgZGlzcGxheVpvbmUucXVlcnlTZWxlY3RvcignbnVtYmVyJykpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRUeXBlID0gJ251bWJlcic7XG4gICAgICAgICAgICB0aGlzLmlucHV0TGltaXQgPSA5OTk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuTnVtYmVyUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5OdW1iZXJQbGFjZUhvbGRlci5sZW5ndGgpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYWNlSG9sZGVyID0gdGhpcy5QbGFjZUhvbGRlcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLlBsYWNlSG9sZGVyLmxlbmd0aCldO1xuICAgICAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSBkZWZhdWx0SW5wdXRUeXBlO1xuICAgICAgICAgICAgdGhpcy5pbnB1dExpbWl0ID0gZGVmYXVsdElucHV0TGltaXQ7XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLkxhc3RCb3RBbnN3ZXIpO1xuXG4gICAgICAgIGlmICghdGhpcy5hbmltX2RvbmUpIHtcbiAgICAgICAgICAgIGxldCB0MiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5MYXN0Qm90QW5zd2VyICYmICF0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQuaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpICYmIHRoaXMuYW5pbV9kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodDIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmcgPSB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnPGJyLz4nKS5qb2luKGAgYClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnJmVhY3V0ZTsnKS5qb2luKCfDqScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyZlZ3JhdmU7Jykuam9pbignw6gnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLzxbXj5dKj4/L2dtLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnJm5ic3A7Jykuam9pbignJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tc2dBcnJheSA9IHN0cmluZy5zcGxpdCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1lc3NhZ2VDdXJyZW50ICE9PSBzdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3TWVzc2FnZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VDdXJyZW50ID0gc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXVuY2hMb29wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmxvb3BlcihhcnJheSwgdGltZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmcgPSB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHRcbiAgICAgICAgICAgICAgICAuc3BsaXQoJzxici8+Jykuam9pbihgIGApXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcmZWFjdXRlOycpLmpvaW4oJ8OpJylcbiAgICAgICAgICAgICAgICAuc3BsaXQoJyZlZ3JhdmU7Jykuam9pbignw6gnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88W14+XSo+Py9nbSwgJycpXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcmbmJzcDsnKS5qb2luKCcnKTtcblxuICAgICAgICAgICAgdGhpcy5tc2dBcnJheSA9IHN0cmluZy5zcGxpdCgnJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlQ3VycmVudCAhPT0gc3RyaW5nICYmIHN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5ld01lc3NhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUN1cnJlbnQgPSBzdHJpbmc7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXVuY2hMb29wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgbGF1bmNoTG9vcCgpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1zZ0FycmF5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm5ld01lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMubmV3TWVzc2FnZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5tc2dBcnJheSA9IHRoaXMubWVzc2FnZUN1cnJlbnQuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhdW5jaExvb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9vcGVyKCk7XG4gICAgICAgIH0sIDYwKTtcbiAgICB9XG5cbiAgICBsb29wZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLm1zZ0FycmF5Lmxlbmd0aCA+IDAgJiYgIXRoaXMucmVsb2FkZWQpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKS5pbm5lckhUTUwgKz0gdGhpcy5tc2dBcnJheS5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LyplbHNlIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH0qL1xuICAgICAgICAvKnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb29wZXIoYXJyYXksIHRpbWVyKTtcbiAgICAgICAgfSwgMzApOyovXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gZGVmYXVsdElucHV0VHlwZTtcbiAgICAgICAgdGhpcy5pbnB1dExpbWl0ID0gZGVmYXVsdElucHV0TGltaXQ7XG4gICAgICAgIGlmICh0aGlzLlBsYWNlSG9sZGVyKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5QbGFjZUhvbGRlci5sZW5ndGgpXTtcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5QbGFjZUhvbGRlci5sZW5ndGgpXTtcbiAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dXcmFwcGVyID0gdHJ1ZTtcbiAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dUZXh0ID0gdHJ1ZTtcbiAgICAgICAgfSwgMjUwMCk7XG5cbiAgICAgICAgbGV0IHQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvdC1hbnN3ZXInKSkge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3QtYW5zd2VyJyk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gMCwgbGVuZ3RoID0gZWxlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGVsZW1zW2luZGV4XSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wLnN0eWxlLm9wYWNpdHkgPT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltX2RvbmUgPSByZXA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1fZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAvL3J1bi5ydW4oKTtcblxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZ1RpbWVyIC09IDE7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdCcpLmNsYXNzTmFtZSA9ICdhLWN1ZS12b2ljZSBzcGVha2luZyc7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3QtaWNvbicpLmNsYXNzTmFtZSA9ICdhLWN1ZS1pY29uIHNwZWFraW5naWNvbic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdCcpLmNsYXNzTmFtZSA9ICdhLWN1ZS12b2ljZSc7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3QtaWNvbicpLmNsYXNzTmFtZSA9ICdhLWN1ZS1pY29uJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZyA9IHRoaXMuYm90TGlzdGVuaW5nVGltZXIgPiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIHVzZXJXcml0aW5nKGtleTogYW55KSB7XG4gICAgICAgIGlmIChrZXkuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm90TGlzdGVuaW5nVGltZXIgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGtleS5jb2RlID09PSAnQmFja3NwYWNlJykge1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZyA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciArPSAyO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyIDwgNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm90TGlzdGVuaW5nVGltZXIgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBlbWl0KCRldmVudCkge1xuICAgICAgICB0aGlzLmZpcnN0VmlzaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWFkeVNlbmQuZW1pdCh0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgX3NlbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLkxhc3RCb3RBbnN3ZXI/LmVuZE9mVG9waWMgJiYgdGhpcy5MYXN0VXNlcklucHV0KSB7XG4gICAgICAgICAgICB0aGlzLkxhc3RVc2VySW5wdXQubWVzc2FnZSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdXNlckRhdGE6IFVzZXJJbnB1dCA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMudXNlcklucHV0LFxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcobmF2aWdhdG9yLmxhbmd1YWdlLCB7XG4gICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlbmQuZW1pdCh1c2VyRGF0YSk7XG4gICAgICAgIHRoaXMudXNlcklucHV0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBzY3JvbGwoc2Nyb2xsSGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPG51bWJlcj4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoMCk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGJ5UGFzc1VzZXJJbnB1dChib3RkYXRhOiBzdHJpbmcsIGk/OiBudW1iZXIpIHtcbiAgICAgICAgLypjb25zdCBidXR0b25zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaG93LWJ0bicpO1xuICAgICAgICBmb3IgKGxldCBidG4gb2YgQXJyYXkuZnJvbShidXR0b25zKSkge1xuICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tYnRuJyk7XG4gICAgICAgIH0qL1xuICAgICAgICBjb25zdCBidXR0b25zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3QtYW5zd2VyJyk7XG4gICAgICAgIGZvciAobGV0IGJ0biBvZiBBcnJheS5mcm9tKGJ1dHRvbnMpKSB7XG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWJ0bicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VuZEJvdENvbW1hbmQuZW1pdChib3RkYXRhKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b25zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3QtYW5zd2VyJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBidG4gb2YgQXJyYXkuZnJvbShidXR0b25zKSkge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tYnRuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cbn1cbiIsIjwhLS08ZGl2IGNsYXNzPVwiYm90LWNvbnRhaW5lclwiICBbY2xhc3NdPVwiSXNNb2JpbGUgPyAnYm90LW1vYmlsZScgOiAnJ1wiIFtzdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InIDogJyMxMDA2NTIgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94Oyd9XCItLT5cblxuICA8IS0tPGNhbnZhcyBjbGFzcz1cIm9yYi1jYW52YXNcIj48L2NhbnZhcz5cbiAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cbiAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheV9faW5uZXJcIj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+LS0+XG4gIDxkaXYgY2xhc3M9XCJib3QtY29udGFpbmVyXCIgIFtjbGFzc109XCJJc01vYmlsZSA/ICdib3QtbW9iaWxlJyA6ICcnXCIgW3N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcicgOiAnIzEwMDY1MiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7J31cIlxuICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkvaHRtbFwiPlxuICA8ZGl2IGNsYXNzPVwiYm90LXZpZXdcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmlyc3RWaXNpdCAmJiBmaXJzdFVzYWdlU3RvcnlcIj5cbiAgICAgIDxib3QtZmlyc3QtdmlzaXQgW2ZpcnN0VXNhZ2VTdG9yeV09XCJmaXJzdFVzYWdlU3RvcnlcIiBbYXNzZXRzXT1cImFzc2V0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgIChyZWFkeSk9XCJlbWl0KCRldmVudClcIj48L2JvdC1maXJzdC12aXNpdD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWZpcnN0VmlzaXQgfHwgIWZpcnN0VXNhZ2VTdG9yeVwiPlxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiYnlQYXNzVXNlcklucHV0KCdleGl0JywgMClcIiBpZD1cImV4aXQtYnRuXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiYm90LWFzc2lzdGFudC13cmFwcGVyXCIgKm5nSWY9XCJBc3Npc3RhbnRNb2RlXCI+XG4gICAgICAgIDwhLS08ZGl2ICpuZ0lmPVwiIWJvdExpc3RlbmluZ1wiIGNsYXNzPVwiYm90LWxvZ29cIiBpZD1cImJvdGxvZ29cIj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwiYXNzZXRzLkZ1bGxTaXplTG9nb1wiPlxuICAgICAgICA8L2Rpdj4tLT5cbiAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJ7J2hlaWdodCc6ICc0MCUnfVwiIGNsYXNzPVwiYm90LWxvZ28gYm90LWxpc3RlbmluZ1wiPlxuICAgICAgICAgIDxkaXYgW25nU3R5bGVdPVwieyd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTB2aCknfVwiIGNsYXNzPVwibS1jYXJsLW5vdGlmaWNhdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tY2FybC1ub3RpZmljYXRpb24tY3VlIG0tY3VlXCI+XG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJib3RMaXN0ZW5pbmdcIiBjbGFzcz1cImEtY3VlLXZvaWNlXCIgaWQ9XCJib3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYS1jdWUtdm9pY2UtZWwgdm9pY2UxXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsIHZvaWNlMlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhLWN1ZS12b2ljZS1lbCB2b2ljZTNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYS1jdWUtdm9pY2UtZWwgdm9pY2U0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYS1jdWUtaWNvblwiIGlkPVwiYm90LWljb25cIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1kaXNjdXNzaW9uLXdyYXBwZXJcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IDYwJTsgbWF4LWhlaWdodDogNjAlOyBoZWlnaHQ6IDYwJTsgLyptYXgtaGVpZ2h0OiAxMjBweDsqL1wiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJMYXN0VXNlcklucHV0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1pbnB1dFwiICpuZ0lmPVwiTGFzdFVzZXJJbnB1dCAmJiBMYXN0VXNlcklucHV0Py5tZXNzYWdlICE9ICcnXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uU2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgICAgICB7e0xhc3RVc2VySW5wdXQubWVzc2FnZX19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpbWVcIj57e0xhc3RVc2VySW5wdXQuZGF0ZX19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIkxhc3RCb3RBbnN3ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3QtYW5zd2VyXCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJMYXN0Qm90QW5zd2VyLnRleHRcIj5cbiAgICAgICAgICAgICAgICA8IS0tPHNwYW4gKm5nSWY9XCIhTGFzdEJvdEFuc3dlci50ZXh0LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKVwiIGlkPVwidGV4dFwiPjwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjaGFuZ2VkICYmIExhc3RCb3RBbnN3ZXIudGV4dC5pbmNsdWRlcygnbG9hZGluZy1kb3RzJylcIiBjbGFzcz1cImZhZGVcIiBbaW5uZXJIVE1MXT1cIkxhc3RCb3RBbnN3ZXIudGV4dCB8IHNhZmVIdG1sXCI+PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICAtLT5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFMYXN0Qm90QW5zd2VyLnRleHQuaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpICYmIGNoYW5nZWQgJiYgc2hvd1RleHRcIiBjbGFzcz1cImZhZGVcIiBbaW5uZXJIVE1MXT1cIkxhc3RCb3RBbnN3ZXIudGV4dCB8IHNhZmVIdG1sXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiTGFzdEJvdEFuc3dlci50ZXh0LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKVwiIGNsYXNzPVwiZmFkZVwiIGlkPVwibG9hZGluZy1jcmVhdGlvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8IS0tPGJyPi0tPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIkxhc3RCb3RBbnN3ZXIubWVkaWFzICYmIExhc3RCb3RBbnN3ZXIubWVkaWFzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICYmIExhc3RCb3RBbnN3ZXIubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAmJiBMYXN0Qm90QW5zd2VyLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAmJiAhTGFzdEJvdEFuc3dlci50ZXh0LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN1Z2dlc3Qgb2YgTGFzdEJvdEFuc3dlci5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9uczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1Z2dlc3QuZm9ybWF0ID09PSAnYnV0dG9uJ1wiICA+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJzdWdnZXN0LnZhbHVlPy50aXRsZSA9PSAnVGVybWluZXInICYmIGNoYW5nZWQgfHwgc3VnZ2VzdC52YWx1ZT8udGl0bGUgPT0gJ1F1aXQnICYmIGNoYW5nZWRcIiBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnlcbiAgICAgICAgICAgICB9XCIgIGNsYXNzPVwiYm90LWJ1dHRvbiBib3QtYnV0dG9uLWxlZnQgc2hvdy1idG5cIiAoY2xpY2spPVwiYnlQYXNzVXNlcklucHV0KHN1Z2dlc3Q/LnZhbHVlPy5vbkNsaWNrLCBpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwic3VnZ2VzdC5sYWJlbHx8IHN1Z2dlc3QudmFsdWU/LmRpc3BsYXllZE1lc3NhZ2UgfHwgc3VnZ2VzdC52YWx1ZT8udGl0bGUgXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwic3VnZ2VzdC52YWx1ZT8udGl0bGUgPT0gJ05vdXZlbGxlIERlbWFuZGUnICYmIGNoYW5nZWQgfHwgc3VnZ2VzdC52YWx1ZT8udGl0bGUgPT0gJ05ldyBSZXF1ZXN0JyAmJiBjaGFuZ2VkXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5XG4gICAgICAgICAgICAgfVwiICBjbGFzcz1cImJvdC1idXR0b24gYm90LWJ1dHRvbi1yaWdodCBzaG93LWJ0blwiIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoc3VnZ2VzdD8udmFsdWU/Lm9uQ2xpY2ssIGkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJzdWdnZXN0LmxhYmVsfHwgc3VnZ2VzdC52YWx1ZT8uZGlzcGxheWVkTWVzc2FnZSB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSBcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJzdWdnZXN0LnZhbHVlPy50aXRsZSAmJiBzdWdnZXN0LnZhbHVlPy50aXRsZSAhPSAnVGVybWluZXInICYmIHN1Z2dlc3QudmFsdWU/LnRpdGxlICE9ICdRdWl0JyAmJiBzdWdnZXN0LnZhbHVlPy50aXRsZSAhPSAnTm91dmVsbGUgRGVtYW5kZScgJiYgc3VnZ2VzdC52YWx1ZT8udGl0bGUgIT0gJ05ldyBSZXF1ZXN0JyAmJiBjaGFuZ2VkXCJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeVxuICAgICAgICAgICAgfVwiICBjbGFzcz1cImJvdC1idXR0b24gYm90LWJ1dHRvbi1ncmV5IHNob3ctYnRuXCIgKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dChzdWdnZXN0Py52YWx1ZT8ub25DbGljaywgaSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwic3VnZ2VzdC5sYWJlbHx8IHN1Z2dlc3QudmFsdWU/LmRpc3BsYXllZE1lc3NhZ2UgfHwgc3VnZ2VzdC52YWx1ZT8udGl0bGUgXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3QtaW5wdXRcIiBpZD1cImJvdC1pbnB1dC1kaXZcIiAqbmdJZj1cIiFkaXNhYmxlVXNlcklucHV0ICYmIHNob3dJbnB1dFwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5wdXRUeXBlID09PSAnbnVtYmVyJ1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBbdHlwZV09XCJpbnB1dFR5cGVcIiBbKG5nTW9kZWwpXT1cInVzZXJJbnB1dFwiIChrZXl1cC5lbnRlcik9XCJ1c2VySW5wdXQgJiYgX3NlbmQoKVwiIChrZXl1cCk9XCJ1c2VyV3JpdGluZygkZXZlbnQpXCIgbWluPVwiMlwiIFttYXhdPVwiaW5wdXRMaW1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjdXJyZW50UGxhY2VIb2xkZXJcIj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgPT09ICd0ZXh0J1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBbdHlwZV09XCJpbnB1dFR5cGVcIiBbKG5nTW9kZWwpXT1cInVzZXJJbnB1dFwiIChrZXl1cC5lbnRlcik9XCJ1c2VySW5wdXQgJiYgX3NlbmQoKVwiIChrZXl1cCk9XCJ1c2VyV3JpdGluZygkZXZlbnQpXCIgW21heGxlbmd0aF09XCJpbnB1dExpbWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImN1cnJlbnRQbGFjZUhvbGRlclwiPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYm90LWJ1dHRvblwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnlcbiAgICAgICAgICAgIH1cIiAoY2xpY2spPVwiX3NlbmQoKVwiIFtkaXNhYmxlZF09XCIhdXNlcklucHV0XCI+e3sgc2VuZEJ0biB9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dC1kaXNhYmxlXCIgKm5nSWY9XCJkaXNhYmxlVXNlcklucHV0XCI+XG4gICAgICAgICAgICAgIDxpPnt7IHNlbGVjdCB9fTwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJvdC1jaGF0LXdyYXBwZXJcIiAqbmdJZj1cIiFBc3Npc3RhbnRNb2RlXCI+XG4gICAgICAgIHt7QXNzaXN0YW50TW9kZX19XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3QtZGlzY3Vzc2lvbi13cmFwcGVyXCIgI3Njcm9sbE1lIFtzY3JvbGxUb3BdPVwic2Nyb2xsTWUuc2Nyb2xsVG8oMCwgOTk5OTk5OSlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWNoYXRcIj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZW50cnkgb2YgZGlzcGxheURhdGFcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVudHJ5LmRhdGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIiBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uU2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbnRyeS5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lXCI+e3tlbnRyeS5kYXRlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWVudHJ5LmRhdGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWFuc3dlclwiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVudHJ5LnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjaGFuZ2VkXCIgY2xhc3M9XCJmYWRlXCIgW2lubmVySFRNTF09XCJlbnRyeS50ZXh0IHwgc2FmZUh0bWxcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08YnI+LS0+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbnRyeS5tZWRpYXMgJiYgZW50cnkubWVkaWFzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICYmIGVudHJ5Lm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgJiYgZW50cnkubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnMubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN1Z2dlc3Qgb2YgZW50cnkubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3VnZ2VzdC5mb3JtYXQgPT09ICdidXR0b24nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY2hhbmdlZFwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnlcbiAgICAgICAgICAgIH1cIiBjbGFzcz1cImJvdC1idXR0b24gZmFkZVwiIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoc3VnZ2VzdD8udmFsdWU/Lm9uQ2xpY2spXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJzdWdnZXN0LmxhYmVsfHwgc3VnZ2VzdC52YWx1ZT8uZGlzcGxheWVkTWVzc2FnZSB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSBcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dFwiICpuZ0lmPVwiIWRpc2FibGVVc2VySW5wdXQgJiYgc2hvd0lucHV0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cInVzZXJJbnB1dFwiIChrZXl1cC5lbnRlcik9XCJ1c2VySW5wdXQgJiYgX3NlbmQoKVwiIChrZXl1cCk9XCJ1c2VyV3JpdGluZygkZXZlbnQpXCIgbWF4bGVuZ3RoPVwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY3VycmVudFBsYWNlSG9sZGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY2hhbmdlZFwiIGNsYXNzPVwiYm90LWJ1dHRvblwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnlcbiAgICAgICAgICAgIH1cIiAoY2xpY2spPVwiX3NlbmQoKVwiIFtkaXNhYmxlZF09XCIhdXNlcklucHV0XCI+e3sgc2VuZEJ0biB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dC1kaXNhYmxlXCIgKm5nSWY9XCJkaXNhYmxlVXNlcklucHV0XCI+XG4gICAgICAgICAgICA8aT57eyBzZWxlY3QgfX08L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWxvZ29cIj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwiYXNzZXRzLkZ1bGxTaXplTG9nb1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=