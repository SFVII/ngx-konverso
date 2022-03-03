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
        var _a, _b, _c, _d, _e, _f;
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
        console.log('-------> enter', ((_b = this.LastBotAnswer) === null || _b === void 0 ? void 0 : _b.text.includes('<number>')) && ((_c = this.LastBotAnswer) === null || _c === void 0 ? void 0 : _c.text.includes('</number>')));
        if (((_d = this.LastBotAnswer) === null || _d === void 0 ? void 0 : _d.text.includes('<number>')) && ((_e = this.LastBotAnswer) === null || _e === void 0 ? void 0 : _e.text.includes('</number>'))) {
            this.inputType = 'number';
            this.inputLimit = 999;
            this.currentPlaceHolder = this.NumberPlaceHolder[Math.floor(Math.random() * this.NumberPlaceHolder.length)];
        }
        else {
            this.currentPlaceHolder = this.PlaceHolder[Math.floor(Math.random() * this.PlaceHolder.length)];
            this.inputType = defaultInputType;
            this.inputLimit = defaultInputLimit;
        }
        console.log('TYPE %s MAX %d', this.inputType, this.inputLimit, this.currentPlaceHolder);
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
            var string = (_f = this.LastBotAnswer) === null || _f === void 0 ? void 0 : _f.text.split('<br/>').join(" ").split('&eacute;').join('é').split('&egrave;').join('è').replace(/<[^>]*>?/gm, '').split('&nbsp;').join('');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi9kZXNrdG9wLWZ1bGwtc2NyZWVuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50LnRzIiwibGliL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7SUNVcEYsNkJBQ0U7SUFBQSwwQ0FDMEQ7SUFBekMsdU5BQXNCO0lBQUMsaUJBQWtCO0lBQzVELDBCQUFlOzs7SUFGSSxlQUFtQztJQUFuQyx5REFBbUMsMEJBQUE7OztJQWE1QywrQkFDRTtJQUFBLDBCQUF5QztJQUN6QywwQkFBeUM7SUFDekMsMEJBQXlDO0lBQ3pDLDBCQUF5QztJQUN6QywwQkFBa0M7SUFDcEMsaUJBQU07Ozs7SUFPUiwrQkFDRTtJQUFBLCtCQUdFO0lBQUEsWUFDRjtJQUFBLGlCQUFNO0lBQ04sZ0NBQW1CO0lBQUEsWUFBc0I7SUFBQSxpQkFBTztJQUNsRCxpQkFBTTs7O0lBTmMsZUFFVjtJQUZVLHFKQUVWO0lBQ04sZUFDRjtJQURFLDhEQUNGO0lBQ21CLGVBQXNCO0lBQXRCLGdEQUFzQjs7O0lBUDdDLDZCQUNFO0lBQUEsZ0hBQ0U7SUFPSiwwQkFBZTs7O0lBUlcsZUFBcUQ7SUFBckQsNEhBQXFEOzs7SUFrQnpFLDJCQUFrSjs7OztJQUFuRCwrRkFBMkM7OztJQUMxSSwyQkFBb0c7OztJQUx0Ryw2QkFDRTtJQUdBLGlJQUEySTtJQUMzSSxpSUFBNkY7SUFFL0YsMEJBQWU7OztJQUhQLGVBQTJFO0lBQTNFLGtIQUEyRTtJQUMzRSxlQUFtRDtJQUFuRCwwRUFBbUQ7Ozs7O0lBU3JELGtDQUtTO0lBRmdDLHdl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LEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNyRDs7a0JBRUksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVmYXVsdEFzc2V0cywgT3BlbkNoYXRCb3RSZXNwb25zZSwgVXNlcklucHV0fSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvS29udmVyc29JbnRlcmZhY2UnO1xuaW1wb3J0IHtLb252ZXJzb1NlcnZpY2V9IGZyb20gJy4uL2tvbnZlcnNvLnNlcnZpY2UnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICcuLi90cmFuc2xhdGUuc2VydmljZSc7XG4vL2ltcG9ydCAqIGFzIHJ1biBmcm9tICdwcm9qZWN0cy9rb252ZXJzby9hc3NldHMvYW5pbWF0ZWRiYWNrLmpzJztcbi8vaW1wb3J0IHtLYXdhc2VCbHVyRmlsdGVyfSBmcm9tIFwiLi4vLi4vZmlsdGVycy9rYXdhc2UtYmx1ci9zcmMvS2F3YXNlQmx1ckZpbHRlclwiO1xuZGVjbGFyZSB2YXIgUElYSTogYW55O1xuY29uc3QgZGVmYXVsdElucHV0VHlwZSA9ICd0ZXh0JztcbmNvbnN0IGRlZmF1bHRJbnB1dExpbWl0ID0gMzAwO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2JvdC1mdWxsLXNjcmVlbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERlc2t0b3BGdWxsU2NyZWVuQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICAgIEBJbnB1dCgpIEFzc2lzdGFudE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBhc3NldHM6IERlZmF1bHRBc3NldHM7XG4gICAgQElucHV0KCkgZmlyc3RWaXNpdDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGZpcnN0VXNhZ2VTdG9yeTogc3RyaW5nW107XG4gICAgQElucHV0KCkgZGlzcGxheURhdGE6IChVc2VySW5wdXQgfCBPcGVuQ2hhdEJvdFJlc3BvbnNlKVtdO1xuICAgIEBJbnB1dCgpIGRpc2FibGVVc2VySW5wdXQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgTGFzdFVzZXJJbnB1dDogVXNlcklucHV0O1xuICAgIEBJbnB1dCgpIExhc3RCb3RBbnN3ZXI6IE9wZW5DaGF0Qm90UmVzcG9uc2U7XG4gICAgQElucHV0KCkgUGxhY2VIb2xkZXI6IHN0cmluZ1tdO1xuICAgIEBJbnB1dCgpIElzTW9iaWxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgc2hvd0lucHV0OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIE51bWJlclBsYWNlSG9sZGVyOiBzdHJpbmdbXTtcblxuICAgIEBPdXRwdXQoKSByZWFkeVNlbmQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIEBPdXRwdXQoKSBzZW5kOiBFdmVudEVtaXR0ZXI8VXNlcklucHV0PiA9IG5ldyBFdmVudEVtaXR0ZXI8VXNlcklucHV0PihudWxsKTtcbiAgICBAT3V0cHV0KCkgc2VuZEJvdENvbW1hbmQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KG51bGwpO1xuICAgIEBPdXRwdXQoKSBzZW5kRXZlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KG51bGwpO1xuICAgIHB1YmxpYyB1c2VySW5wdXQ6IHN0cmluZztcbiAgICBwdWJsaWMgY3VycmVudFBsYWNlSG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgc2VuZEJ0biA9ICcnO1xuICAgIHB1YmxpYyBzZWxlY3QgPSAnJztcbiAgICBwdWJsaWMgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHB1YmxpYyBib3RMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICBwdWJsaWMgc2hvd1dyYXBwZXIgPSBmYWxzZTtcbiAgICBwdWJsaWMgc2hvd1RleHQgPSBmYWxzZTtcbiAgICBwdWJsaWMgaW5wdXRUeXBlOiBzdHJpbmcgPSBkZWZhdWx0SW5wdXRUeXBlO1xuICAgIHB1YmxpYyBpbnB1dExpbWl0OiBudW1iZXIgPSBkZWZhdWx0SW5wdXRMaW1pdDtcbiAgICBwcml2YXRlIG5ld01lc3NhZ2UgPSBmYWxzZTtcbiAgICBwcml2YXRlIG1lc3NhZ2VDdXJyZW50ID0gJyc7XG4gICAgcHJpdmF0ZSBtc2dBcnJheSA9IFtdO1xuICAgIHByaXZhdGUgYm90TGlzdGVuaW5nVGltZXIgPSAwO1xuICAgIHByaXZhdGUgYW5pbV9kb25lID0gZmFsc2U7XG4gICAgcHJpdmF0ZSByZWxvYWRlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgdGltZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgc2VydmljZTogS29udmVyc29TZXJ2aWNlKSB7XG4gICAgICAgIHNlcnZpY2UubGFuZy5zdWJzY3JpYmUoKHIpID0+IHtcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEJ0biA9IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdTRU5EJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QgPSB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnU0VMRUNUJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICBsZXQgdCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvdC1hbnN3ZXInKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAwLCBsZW5ndGggPSBlbGVtcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gZWxlbXNbaW5kZXhdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXAuc3R5bGUub3BhY2l0eSA9PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltX2RvbmUgPSByZXA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1fZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSAmJiAhdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tPiBlbnRlcicsIHRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dC5pbmNsdWRlcygnPG51bWJlcj4nKSAmJiB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQuaW5jbHVkZXMoJzwvbnVtYmVyPicpKTtcbiAgICAgICAgaWYgKHRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dC5pbmNsdWRlcygnPG51bWJlcj4nKSAmJiB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQuaW5jbHVkZXMoJzwvbnVtYmVyPicpKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0VHlwZSA9ICdudW1iZXInO1xuICAgICAgICAgICAgdGhpcy5pbnB1dExpbWl0ID0gOTk5O1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxhY2VIb2xkZXIgPSB0aGlzLk51bWJlclBsYWNlSG9sZGVyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTnVtYmVyUGxhY2VIb2xkZXIubGVuZ3RoKV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5QbGFjZUhvbGRlci5sZW5ndGgpXTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRUeXBlID0gZGVmYXVsdElucHV0VHlwZTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRMaW1pdCA9IGRlZmF1bHRJbnB1dExpbWl0O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1RZUEUgJXMgTUFYICVkJywgdGhpcy5pbnB1dFR5cGUsICB0aGlzLmlucHV0TGltaXQsIHRoaXMuY3VycmVudFBsYWNlSG9sZGVyKVxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuTGFzdEJvdEFuc3dlcik7XG5cbiAgICAgICAgaWYgKCF0aGlzLmFuaW1fZG9uZSkge1xuICAgICAgICAgICAgbGV0IHQyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLkxhc3RCb3RBbnN3ZXIgJiYgIXRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dC5pbmNsdWRlcygnbG9hZGluZy1kb3RzJykgJiYgdGhpcy5hbmltX2RvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0Mik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCc8YnIvPicpLmpvaW4oYCBgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcmZWFjdXRlOycpLmpvaW4oJ8OpJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnJmVncmF2ZTsnKS5qb2luKCfDqCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPFtePl0qPj8vZ20sICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcmbmJzcDsnKS5qb2luKCcnKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1zZ0FycmF5ID0gc3RyaW5nLnNwbGl0KCcnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWVzc2FnZUN1cnJlbnQgIT09IHN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUN1cnJlbnQgPSBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhdW5jaExvb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMubG9vcGVyKGFycmF5LCB0aW1lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dFxuICAgICAgICAgICAgICAgIC5zcGxpdCgnPGJyLz4nKS5qb2luKGAgYClcbiAgICAgICAgICAgICAgICAuc3BsaXQoJyZlYWN1dGU7Jykuam9pbignw6knKVxuICAgICAgICAgICAgICAgIC5zcGxpdCgnJmVncmF2ZTsnKS5qb2luKCfDqCcpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLzxbXj5dKj4/L2dtLCAnJylcbiAgICAgICAgICAgICAgICAuc3BsaXQoJyZuYnNwOycpLmpvaW4oJycpO1xuXG4gICAgICAgICAgICB0aGlzLm1zZ0FycmF5ID0gc3RyaW5nLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1lc3NhZ2VDdXJyZW50ICE9PSBzdHJpbmcgJiYgc3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMubmV3TWVzc2FnZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ3VycmVudCA9IHN0cmluZztcbiAgICAgICAgICAgICAgICB0aGlzLmxhdW5jaExvb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cbiAgICBsYXVuY2hMb29wKCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubXNnQXJyYXkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubmV3TWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy90aGlzLm1zZ0FycmF5ID0gdGhpcy5tZXNzYWdlQ3VycmVudC5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMubGF1bmNoTG9vcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb29wZXIoKTtcbiAgICAgICAgfSwgNjApO1xuICAgIH1cblxuICAgIGxvb3BlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubXNnQXJyYXkubGVuZ3RoID4gMCAmJiAhdGhpcy5yZWxvYWRlZCkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVySFRNTCArPSB0aGlzLm1zZ0FycmF5LnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0vKmVsc2Uge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfSovXG4gICAgICAgIC8qdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvb3BlcihhcnJheSwgdGltZXIpO1xuICAgICAgICB9LCAzMCk7Ki9cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSBkZWZhdWx0SW5wdXRUeXBlO1xuICAgICAgICB0aGlzLmlucHV0TGltaXQgPSBkZWZhdWx0SW5wdXRMaW1pdDtcbiAgICAgICAgaWYgKHRoaXMuUGxhY2VIb2xkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYWNlSG9sZGVyID0gdGhpcy5QbGFjZUhvbGRlcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLlBsYWNlSG9sZGVyLmxlbmd0aCldO1xuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYWNlSG9sZGVyID0gdGhpcy5QbGFjZUhvbGRlcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLlBsYWNlSG9sZGVyLmxlbmd0aCldO1xuICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1dyYXBwZXIgPSB0cnVlO1xuICAgICAgICB9LCAyMDAwKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RleHQgPSB0cnVlO1xuICAgICAgICB9LCAyNTAwKTtcblxuICAgICAgICBsZXQgdCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvdC1hbnN3ZXInKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAwLCBsZW5ndGggPSBlbGVtcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gZWxlbXNbaW5kZXhdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXAuc3R5bGUub3BhY2l0eSA9PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1fZG9uZSA9IHJlcDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbV9kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgIC8vcnVuLnJ1bigpO1xuXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm90TGlzdGVuaW5nVGltZXIgLT0gMTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90JykuY2xhc3NOYW1lID0gJ2EtY3VlLXZvaWNlIHNwZWFraW5nJztcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdC1pY29uJykuY2xhc3NOYW1lID0gJ2EtY3VlLWljb24gc3BlYWtpbmdpY29uJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90JykuY2xhc3NOYW1lID0gJ2EtY3VlLXZvaWNlJztcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdC1pY29uJykuY2xhc3NOYW1lID0gJ2EtY3VlLWljb24nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYm90TGlzdGVuaW5nID0gdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA+IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgdXNlcldyaXRpbmcoa2V5OiBhbnkpIHtcbiAgICAgICAgaWYgKGtleS5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5LmNvZGUgPT09ICdCYWNrc3BhY2UnKSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYm90TGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZ1RpbWVyICs9IDI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYm90TGlzdGVuaW5nVGltZXIgPCA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGVtaXQoJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZmlyc3RWaXNpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlYWR5U2VuZC5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBfc2VuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuTGFzdEJvdEFuc3dlcj8uZW5kT2ZUb3BpYyAmJiB0aGlzLkxhc3RVc2VySW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dC5tZXNzYWdlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvdExpc3RlbmluZyA9IGZhbHNlO1xuICAgICAgICBjb25zdCB1c2VyRGF0YTogVXNlcklucHV0ID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy51c2VySW5wdXQsXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHtcbiAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VuZC5lbWl0KHVzZXJEYXRhKTtcbiAgICAgICAgdGhpcy51c2VySW5wdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIHNjcm9sbChzY3JvbGxIZWlnaHQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgwKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgYnlQYXNzVXNlcklucHV0KGJvdGRhdGE6IHN0cmluZywgaT86IG51bWJlcikge1xuICAgICAgICAvKmNvbnN0IGJ1dHRvbnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3ctYnRuJyk7XG4gICAgICAgIGZvciAobGV0IGJ0biBvZiBBcnJheS5mcm9tKGJ1dHRvbnMpKSB7XG4gICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1idG4nKTtcbiAgICAgICAgfSovXG4gICAgICAgIGNvbnN0IGJ1dHRvbnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvdC1hbnN3ZXInKTtcbiAgICAgICAgZm9yIChsZXQgYnRuIG9mIEFycmF5LmZyb20oYnV0dG9ucykpIHtcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tYnRuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZW5kQm90Q29tbWFuZC5lbWl0KGJvdGRhdGEpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvdC1hbnN3ZXInKTtcbiAgICAgICAgICAgIGZvciAobGV0IGJ0biBvZiBBcnJheS5mcm9tKGJ1dHRvbnMpKSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1idG4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxufVxuIiwiPCEtLTxkaXYgY2xhc3M9XCJib3QtY29udGFpbmVyXCIgIFtjbGFzc109XCJJc01vYmlsZSA/ICdib3QtbW9iaWxlJyA6ICcnXCIgW3N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcicgOiAnIzEwMDY1MiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7J31cIi0tPlxuXG4gIDwhLS08Y2FudmFzIGNsYXNzPVwib3JiLWNhbnZhc1wiPjwvY2FudmFzPlxuICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxuICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5X19pbm5lclwiPlxuICAgIDwvZGl2PlxuICA8L2Rpdj4tLT5cbiAgPGRpdiBjbGFzcz1cImJvdC1jb250YWluZXJcIiAgW2NsYXNzXT1cIklzTW9iaWxlID8gJ2JvdC1tb2JpbGUnIDogJydcIiBbc3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJyA6ICcjMTAwNjUyIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDsnfVwiXG4gICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS9odG1sXCI+XG4gIDxkaXYgY2xhc3M9XCJib3Qtdmlld1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaXJzdFZpc2l0ICYmIGZpcnN0VXNhZ2VTdG9yeVwiPlxuICAgICAgPGJvdC1maXJzdC12aXNpdCBbZmlyc3RVc2FnZVN0b3J5XT1cImZpcnN0VXNhZ2VTdG9yeVwiIFthc3NldHNdPVwiYXNzZXRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKHJlYWR5KT1cImVtaXQoJGV2ZW50KVwiPjwvYm90LWZpcnN0LXZpc2l0PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZmlyc3RWaXNpdCB8fCAhZmlyc3RVc2FnZVN0b3J5XCI+XG4gICAgICA8YnV0dG9uIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoJ2V4aXQnLCAwKVwiIGlkPVwiZXhpdC1idG5cIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9idXR0b24+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJib3QtYXNzaXN0YW50LXdyYXBwZXJcIiAqbmdJZj1cIkFzc2lzdGFudE1vZGVcIj5cbiAgICAgICAgPCEtLTxkaXYgKm5nSWY9XCIhYm90TGlzdGVuaW5nXCIgY2xhc3M9XCJib3QtbG9nb1wiIGlkPVwiYm90bG9nb1wiPlxuICAgICAgICAgIDxpbWcgW3NyY109XCJhc3NldHMuRnVsbFNpemVMb2dvXCI+XG4gICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogJzQwJSd9XCIgY2xhc3M9XCJib3QtbG9nbyBib3QtbGlzdGVuaW5nXCI+XG4gICAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJ7J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xMHZoKSd9XCIgY2xhc3M9XCJtLWNhcmwtbm90aWZpY2F0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibS1jYXJsLW5vdGlmaWNhdGlvbi1jdWUgbS1jdWVcIj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImJvdExpc3RlbmluZ1wiIGNsYXNzPVwiYS1jdWUtdm9pY2VcIiBpZD1cImJvdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhLWN1ZS12b2ljZS1lbCB2b2ljZTFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYS1jdWUtdm9pY2UtZWwgdm9pY2UyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsIHZvaWNlM1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhLWN1ZS12b2ljZS1lbCB2b2ljZTRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYS1jdWUtdm9pY2UtZWxcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhLWN1ZS1pY29uXCIgaWQ9XCJib3QtaWNvblwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWRpc2N1c3Npb24td3JhcHBlclwiIHN0eWxlPVwibWluLWhlaWdodDogNjAlOyBtYXgtaGVpZ2h0OiA2MCU7IGhlaWdodDogNjAlOyAvKm1heC1oZWlnaHQ6IDEyMHB4OyovXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIkxhc3RVc2VySW5wdXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWlucHV0XCIgKm5nSWY9XCJMYXN0VXNlcklucHV0ICYmIExhc3RVc2VySW5wdXQ/Lm1lc3NhZ2UgIT0gJydcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIiBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgICAgIHt7TGFzdFVzZXJJbnB1dC5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGltZVwiPnt7TGFzdFVzZXJJbnB1dC5kYXRlfX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiTGFzdEJvdEFuc3dlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1hbnN3ZXJcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIkxhc3RCb3RBbnN3ZXIudGV4dFwiPlxuICAgICAgICAgICAgICAgIDwhLS08c3BhbiAqbmdJZj1cIiFMYXN0Qm90QW5zd2VyLnRleHQuaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpXCIgaWQ9XCJ0ZXh0XCI+PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNoYW5nZWQgJiYgTGFzdEJvdEFuc3dlci50ZXh0LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKVwiIGNsYXNzPVwiZmFkZVwiIFtpbm5lckhUTUxdPVwiTGFzdEJvdEFuc3dlci50ZXh0IHwgc2FmZUh0bWxcIj48L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIUxhc3RCb3RBbnN3ZXIudGV4dC5pbmNsdWRlcygnbG9hZGluZy1kb3RzJykgJiYgY2hhbmdlZCAmJiBzaG93VGV4dFwiIGNsYXNzPVwiZmFkZVwiIFtpbm5lckhUTUxdPVwiTGFzdEJvdEFuc3dlci50ZXh0IHwgc2FmZUh0bWxcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJMYXN0Qm90QW5zd2VyLnRleHQuaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpXCIgY2xhc3M9XCJmYWRlXCIgaWQ9XCJsb2FkaW5nLWNyZWF0aW9uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwhLS08YnI+LS0+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiTGFzdEJvdEFuc3dlci5tZWRpYXMgJiYgTGFzdEJvdEFuc3dlci5tZWRpYXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgJiYgTGFzdEJvdEFuc3dlci5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICYmIExhc3RCb3RBbnN3ZXIubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICYmICFMYXN0Qm90QW5zd2VyLnRleHQuaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3VnZ2VzdCBvZiBMYXN0Qm90QW5zd2VyLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3VnZ2VzdC5mb3JtYXQgPT09ICdidXR0b24nXCIgID5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInN1Z2dlc3QudmFsdWU/LnRpdGxlID09ICdUZXJtaW5lcicgJiYgY2hhbmdlZCB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSA9PSAnUXVpdCcgJiYgY2hhbmdlZFwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeVxuICAgICAgICAgICAgIH1cIiAgY2xhc3M9XCJib3QtYnV0dG9uIGJvdC1idXR0b24tbGVmdCBzaG93LWJ0blwiIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoc3VnZ2VzdD8udmFsdWU/Lm9uQ2xpY2ssIGkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJzdWdnZXN0LmxhYmVsfHwgc3VnZ2VzdC52YWx1ZT8uZGlzcGxheWVkTWVzc2FnZSB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSBcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJzdWdnZXN0LnZhbHVlPy50aXRsZSA9PSAnTm91dmVsbGUgRGVtYW5kZScgJiYgY2hhbmdlZCB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSA9PSAnTmV3IFJlcXVlc3QnICYmIGNoYW5nZWRcIiBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnlcbiAgICAgICAgICAgICB9XCIgIGNsYXNzPVwiYm90LWJ1dHRvbiBib3QtYnV0dG9uLXJpZ2h0IHNob3ctYnRuXCIgKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dChzdWdnZXN0Py52YWx1ZT8ub25DbGljaywgaSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInN1Z2dlc3QubGFiZWx8fCBzdWdnZXN0LnZhbHVlPy5kaXNwbGF5ZWRNZXNzYWdlIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlIFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInN1Z2dlc3QudmFsdWU/LnRpdGxlICYmIHN1Z2dlc3QudmFsdWU/LnRpdGxlICE9ICdUZXJtaW5lcicgJiYgc3VnZ2VzdC52YWx1ZT8udGl0bGUgIT0gJ1F1aXQnICYmIHN1Z2dlc3QudmFsdWU/LnRpdGxlICE9ICdOb3V2ZWxsZSBEZW1hbmRlJyAmJiBzdWdnZXN0LnZhbHVlPy50aXRsZSAhPSAnTmV3IFJlcXVlc3QnICYmIGNoYW5nZWRcIlxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5XG4gICAgICAgICAgICB9XCIgIGNsYXNzPVwiYm90LWJ1dHRvbiBib3QtYnV0dG9uLWdyZXkgc2hvdy1idG5cIiAoY2xpY2spPVwiYnlQYXNzVXNlcklucHV0KHN1Z2dlc3Q/LnZhbHVlPy5vbkNsaWNrLCBpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJzdWdnZXN0LmxhYmVsfHwgc3VnZ2VzdC52YWx1ZT8uZGlzcGxheWVkTWVzc2FnZSB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSBcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3QtaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dFwiIGlkPVwiYm90LWlucHV0LWRpdlwiICpuZ0lmPVwiIWRpc2FibGVVc2VySW5wdXQgJiYgc2hvd0lucHV0XCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgPT09ICdudW1iZXInXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IFt0eXBlXT1cImlucHV0VHlwZVwiIFsobmdNb2RlbCldPVwidXNlcklucHV0XCIgKGtleXVwLmVudGVyKT1cInVzZXJJbnB1dCAmJiBfc2VuZCgpXCIgKGtleXVwKT1cInVzZXJXcml0aW5nKCRldmVudClcIiBtaW49XCIyXCIgW21heF09XCJpbnB1dExpbWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImN1cnJlbnRQbGFjZUhvbGRlclwiPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlucHV0VHlwZSA9PT0gJ3RleHQnXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IFt0eXBlXT1cImlucHV0VHlwZVwiIFsobmdNb2RlbCldPVwidXNlcklucHV0XCIgKGtleXVwLmVudGVyKT1cInVzZXJJbnB1dCAmJiBfc2VuZCgpXCIgKGtleXVwKT1cInVzZXJXcml0aW5nKCRldmVudClcIiBbbWF4bGVuZ3RoXT1cImlucHV0TGltaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY3VycmVudFBsYWNlSG9sZGVyXCI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJib3QtYnV0dG9uXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlNlY29uZGFyeVxuICAgICAgICAgICAgfVwiIChjbGljayk9XCJfc2VuZCgpXCIgW2Rpc2FibGVkXT1cIiF1c2VySW5wdXRcIj57eyBzZW5kQnRuIH19XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWlucHV0LWRpc2FibGVcIiAqbmdJZj1cImRpc2FibGVVc2VySW5wdXRcIj5cbiAgICAgICAgICAgICAgPGk+e3sgc2VsZWN0IH19PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYm90LWNoYXQtd3JhcHBlclwiICpuZ0lmPVwiIUFzc2lzdGFudE1vZGVcIj5cbiAgICAgICAge3tBc3Npc3RhbnRNb2RlfX1cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1kaXNjdXNzaW9uLXdyYXBwZXJcIiAjc2Nyb2xsTWUgW3Njcm9sbFRvcF09XCJzY3JvbGxNZS5zY3JvbGxUbygwLCA5OTk5OTk5KVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3QtY2hhdFwiPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBlbnRyeSBvZiBkaXNwbGF5RGF0YVwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW50cnkuZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VudHJ5Lm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpbWVcIj57e2VudHJ5LmRhdGV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZW50cnkuZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3QtYW5zd2VyXCI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW50cnkudGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNoYW5nZWRcIiBjbGFzcz1cImZhZGVcIiBbaW5uZXJIVE1MXT1cImVudHJ5LnRleHQgfCBzYWZlSHRtbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxicj4tLT5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVudHJ5Lm1lZGlhcyAmJiBlbnRyeS5tZWRpYXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgJiYgZW50cnkubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAmJiBlbnRyeS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9ucy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3VnZ2VzdCBvZiBlbnRyeS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWdnZXN0LmZvcm1hdCA9PT0gJ2J1dHRvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjaGFuZ2VkXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeVxuICAgICAgICAgICAgfVwiIGNsYXNzPVwiYm90LWJ1dHRvbiBmYWRlXCIgKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dChzdWdnZXN0Py52YWx1ZT8ub25DbGljaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInN1Z2dlc3QubGFiZWx8fCBzdWdnZXN0LnZhbHVlPy5kaXNwbGF5ZWRNZXNzYWdlIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlIFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWlucHV0XCIgKm5nSWY9XCIhZGlzYWJsZVVzZXJJbnB1dCAmJiBzaG93SW5wdXRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwidXNlcklucHV0XCIgKGtleXVwLmVudGVyKT1cInVzZXJJbnB1dCAmJiBfc2VuZCgpXCIgKGtleXVwKT1cInVzZXJXcml0aW5nKCRldmVudClcIiBtYXhsZW5ndGg9XCIyMDBcIlxuICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjdXJyZW50UGxhY2VIb2xkZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjaGFuZ2VkXCIgY2xhc3M9XCJib3QtYnV0dG9uXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlNlY29uZGFyeVxuICAgICAgICAgICAgfVwiIChjbGljayk9XCJfc2VuZCgpXCIgW2Rpc2FibGVkXT1cIiF1c2VySW5wdXRcIj57eyBzZW5kQnRuIH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWlucHV0LWRpc2FibGVcIiAqbmdJZj1cImRpc2FibGVVc2VySW5wdXRcIj5cbiAgICAgICAgICAgIDxpPnt7IHNlbGVjdCB9fTwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3QtbG9nb1wiPlxuICAgICAgICAgIDxpbWcgW3NyY109XCJhc3NldHMuRnVsbFNpemVMb2dvXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==