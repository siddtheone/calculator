(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return initialState})),__webpack_require__.d(__webpack_exports__,"a",(function(){return reducer}));var D_calc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),D_calc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),initialState={toCalc:[],screen:"0",isCalculated:!1},operators=["+","-","X","/"];function reducer(state,_ref){var action=_ref.action,payload=_ref.payload;switch(action){case"reset":return Object(D_calc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(D_calc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},initialState),{},{toCalc:[]});case"enter":var screen=state.screen,toCalc=state.toCalc,isCalculated=state.isCalculated;if([0,1,2,3,4,5,6,7,8,9,"."].indexOf(payload)>-1){var newScreen,toCalcCopy=toCalc.slice();if("0"===screen&&0===payload||screen.includes(".")&&"."===payload)newScreen=state.screen;else{if(isCalculated)return Object(D_calc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(D_calc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},initialState),{},{screen:payload.toString()});"0"===screen&&payload>0?newScreen=payload.toString():operators.indexOf(screen)>-1?(newScreen=payload.toString(),toCalcCopy.push(screen)):newScreen=screen+payload}return{toCalc:toCalcCopy,screen:newScreen,isCalculated:!1}}if(operators.indexOf(payload)>-1)return isCalculated?{toCalc:[screen],screen:payload,isCalculated:!1}:isNaN(screen)&&"-"!==payload?"-"!==screen?Object(D_calc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(D_calc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},state),{},{screen:payload}):{toCalc:Object(D_calc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(toCalc.slice(0,-1)),screen:payload}:{toCalc:[].concat(Object(D_calc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(toCalc),[screen]),screen:payload};break;case"calc":if(state.isCalculated)return state;var x=[].concat(Object(D_calc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(state.toCalc),[state.screen]);return operators.indexOf(x[x.length-1])>-1&&x.pop(),{toCalc:x,isCalculated:!0,screen:eval(x.map((function(e){return"X"===e?"*":e})).join(" ")).toString()};default:return state}}},21:function(e,a,t){e.exports=t(29)},26:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),_=t.n(l),o=(t(26),t(1)),c=t(2);function i(){var e=Object(o.a)(["\n    grid-column: 1 / -1;\n    grid-row: span 2;\n    background: var(--screenBG);\n    color: var(--screen);\n    text-align: right;\n    word-break: break-word;\n\n    div {\n      padding-right: 5px;\n    }\n\n    #display {\n      font-weight: bold;\n      font-size: 1.2em;\n    }\n"]);return i=function(){return e},e}function s(){var e=Object(o.a)(["\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: auto repeat(6, 50px);\n    max-width: 320px;\n    margin: 100px auto;\n    grid-gap: 3px;\n"]);return s=function(){return e},e}var u=c.b.div(s()),d=c.b.div(i()),b=t(4);function p(){var e=Object(o.a)(["\n    font-family: inherit;\n    font-size: inherit;\n    border: 0;\n    outline: none;\n    transition: .5s;\n    cursor: pointer;\n    background-image: var(",");\n    color: var(--buttonsText);\n    grid-column: span ",";\n    grid-row: span ",";\n\n    &:active {\n      transform: scale(.9)\n    }\n\n"]);return p=function(){return e},e}var m=c.b.button(p(),(function(e){var a=e.id;return"clear"===a?"--buttonClearBG":"equals"===a?"--buttonEqualBG":"--buttonsBG"}),(function(e){var a=e.id;return["clear","zero"].indexOf(a)>-1?"2":"1"}),(function(e){return"equals"===e.id?"2":"1"})),f=r.a.createContext({}),C=f.Provider,E=(f.Consumer,f),h=[{label:"AC",id:"clear"},{label:"/",id:"divide"},{label:"X",id:"multiply"},{label:"7",id:"seven"},{label:"8",id:"eight"},{label:"9",id:"nine"},{label:"-",id:"subtract"},{label:"4",id:"four"},{label:"5",id:"five"},{label:"6",id:"six"},{label:"+",id:"add"},{label:"1",id:"one"},{label:"2",id:"two"},{label:"3",id:"three"},{label:"=",id:"equals"},{label:"0",id:"zero"},{label:".",id:"decimal"}];function v(){var e=r.a.useContext(E),a=Object(b.a)(e,2)[1],t=function(e){var t=e.target.value;return a({action:"AC"===t?"reset":"="===t?"calc":"enter",payload:isNaN(t)?t:+t})};return r.a.createElement(r.a.Fragment,null,h.map((function(e){return r.a.createElement(m,{id:e.id,key:e.id,onClick:t,value:e.label},e.label)})))}function O(){var e=r.a.useContext(E),a=Object(b.a)(e,1)[0].screen;return r.a.createElement("div",{id:"display"},a)}function g(){var e=r.a.useContext(E),a=Object(b.a)(e,1)[0].toCalc;return r.a.createElement("div",{id:"eq"},a.join(" ")||0)}var y=t(17),w=t(18),D=t(20),x=t(19),j=function(e){Object(D.a)(t,e);var a=Object(x.a)(t);function t(e){var n;return Object(y.a)(this,t),(n=a.call(this,e)).state={hasError:!1},n}return Object(w.a)(t,[{key:"componentDidCatch",value:function(e,a){this.setState({error:e,errorInfo:a})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}(r.a.Component),S=t(10);function M(){var e=Object(o.a)(["\n:root {\n  --screenBG: linear-gradient(to right, #ffb347 0%, #ffcc33 51%, #ffb347 100%);\n  --screen: white;\n  --buttonsBG: linear-gradient(to right, #41295a 0%, #2F0743 51%, #41295a 100%);\n  --buttonClearBG: linear-gradient(to right, #f85032 0%, #e73827 51%, #f85032 100%);\n  --buttonEqualBG: linear-gradient(to right, #141E30 0%, #243B55 51%, #141E30 100%);\n  --buttonsText: white;\n}\n*, *::after, *::before {\n  box-sizing: border-box;\n}\nbody {\n  font-family: 'Atomic Age', cursive;\n  font-size: 30px;\n}\n"]);return M=function(){return e},e}var P=Object(c.a)(M());var B=function(){return r.a.createElement(C,{value:r.a.useReducer(S.a,S.b)},r.a.createElement(j,null,r.a.createElement("div",{className:"App"},r.a.createElement(P,null),r.a.createElement(u,null,r.a.createElement(d,null,r.a.createElement(g,null),r.a.createElement(O,null)),r.a.createElement(v,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));_.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.7fe6ede8.chunk.js.map