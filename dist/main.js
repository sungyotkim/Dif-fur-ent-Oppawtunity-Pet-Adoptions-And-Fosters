/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", e => {\n  const btn = document.querySelector(\"#btn\");\n  const petsUrl = '../dist/data/shelterInfo.json';\n  console.log(\"Test!\");\n  btn.addEventListener('click', reqData);\n\n  function reqData() {\n    fetch(petsUrl).then(res => res.json()).then(data => {\n      console.log(data);\n    }).catch(error => {\n      console.error(error);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYnRuIiwicXVlcnlTZWxlY3RvciIsInBldHNVcmwiLCJjb25zb2xlIiwibG9nIiwicmVxRGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlmLWZ1ci1lbnQtb3BwYXd0dW5pdHktcGV0LWFkb3B0aW9ucy1hbmQtZm9zdGVycy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGUgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0blwiKVxuICBjb25zdCBwZXRzVXJsID0gJy4uL2Rpc3QvZGF0YS9zaGVsdGVySW5mby5qc29uJ1xuXG5cbiAgY29uc29sZS5sb2coXCJUZXN0IVwiKVxuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlcURhdGEpO1xuICBcbiAgZnVuY3Rpb24gcmVxRGF0YSgpIHtcbiAgICBmZXRjaChwZXRzVXJsKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSlcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0MsQ0FBQyxJQUFJO0VBQ2pELE1BQU1DLEdBQUcsR0FBR0gsUUFBUSxDQUFDSSxhQUFULENBQXVCLE1BQXZCLENBQVo7RUFDQSxNQUFNQyxPQUFPLEdBQUcsK0JBQWhCO0VBR0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7RUFFQUosR0FBRyxDQUFDRixnQkFBSixDQUFxQixPQUFyQixFQUE4Qk8sT0FBOUI7O0VBRUEsU0FBU0EsT0FBVCxHQUFtQjtJQUNqQkMsS0FBSyxDQUFDSixPQUFELENBQUwsQ0FDR0ssSUFESCxDQUNRQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQURmLEVBRUdGLElBRkgsQ0FFUUcsSUFBSSxJQUFJO01BQ1pQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTSxJQUFaO0lBQ0QsQ0FKSCxFQUtHQyxLQUxILENBS1VDLEtBQUQsSUFBVztNQUNoQlQsT0FBTyxDQUFDUyxLQUFSLENBQWNBLEtBQWQ7SUFDRCxDQVBIO0VBUUQ7QUFDRixDQW5CRCJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWYtZnVyLWVudC1vcHBhd3R1bml0eS1wZXQtYWRvcHRpb25zLWFuZC1mb3N0ZXJzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;