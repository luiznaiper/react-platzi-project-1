(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(52)},,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(5),c=n.n(r),l=(n(14),n(16),n(2)),u=n(1);function i(){var e=function(e,t){var n=a.a.useState(!0),o=Object(u.a)(n,2),r=o[0],c=o[1],l=a.a.useState(!1),i=Object(u.a)(l,2),d=i[0],s=i[1],m=a.a.useState(!0),f=Object(u.a)(m,2),p=f[0],h=f[1],E=a.a.useState(t),g=Object(u.a)(E,2),T=g[0],v=g[1];return a.a.useEffect(function(){setTimeout(function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=[]),v(n),h(!1),c(!0)}catch(d){s(d)}},1e3)},[r]),{item:T,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),v(t)}catch(d){s(d)}},error:d,loading:p,sincronizeItem:function(){h(!0),c(!1)}}}("TODOS_V1",[]),t=e.item,n=e.saveItem,o=e.sincronizeItem,r=e.loading,c=e.error,i=a.a.useState(""),d=Object(u.a)(i,2),s=d[0],m=d[1],f=a.a.useState(!1),p=Object(u.a)(f,2),h=p[0],E=p[1],g=t.filter(function(e){return e.completed}).length,T=t.length,v=[];v=!s.length>=1?t:t.filter(function(e){var t=e.text.toLowerCase(),n=s.toLowerCase();return t.includes(n)});return{error:c,loading:r,totalTodos:T,completedTodos:g,searchValue:s,setSearchValue:m,searchedTodos:v,toggleCompleteTodo:function(e){var o=t.findIndex(function(t){return t.text===e}),a=Object(l.a)(t);t[o].completed=!a[o].completed,n(a)},addTodo:function(e){var o=Object(l.a)(t);o.push({completed:!1,text:e}),n(o)},deleteTodo:function(e){var o=t.findIndex(function(t){return t.text===e}),a=Object(l.a)(t);a.splice(o,1),n(a)},hideCompletedTodosFn:function(){t.filter(function(e){return e.completed}).forEach(function(e){e.hide=!0});var e=Object(l.a)(t);n(e)},showCompletedTodosFn:function(){t.filter(function(e){return e.completed}).forEach(function(e){e.hide=!1});var e=Object(l.a)(t);n(e)},openModal:h,setOpenModal:E,sincronizeTodos:o}}function d(e){var t=e.children,n=e.loading;return a.a.createElement("header",null,a.a.Children.toArray(t).map(function(e){return a.a.cloneElement(e,{loading:n})}))}n(18);function s(e){var t=e.totalTodos,n=e.completedTodos,o=e.loading;return a.a.createElement("h2",{className:"TodoCounter ".concat(o&&"TodoCounter--loading")},"You have completed ",n," of ",t," Tasks")}n(20);function m(e){var t=e.searchValue,n=e.setSearchValue,o=e.loading;return a.a.createElement("input",{className:"TodoSearch",placeholder:"Search your tasks here!",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)},disabled:o})}n(22);function f(e){var t=e.children||e.render;return a.a.createElement("section",{className:"TodoList-container"},e.error&&e.onError(),e.loading&&e.onLoading(),!e.loading&&!e.totalTodos&&e.onEmptyTodos(),!!e.totalTodos&&!e.searchedTodos.length&&e.onEmptySearchedResults(e.searchValue),!e.loading&&e.completedTodos===e.totalTodos&&e.totalTodos>0&&e.onTodoCongrats(),!e.loading&&!e.error&&e.searchedTodos.map(t))}var p;n(24);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var E,g=function(e){return a.a.createElement("svg",h({width:24,height:24,fillRule:"evenodd",clipRule:"evenodd"},e),p||(p=a.a.createElement("path",{d:"M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"})))};n.p;function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var v=function(e){return a.a.createElement("svg",T({fill:"#000000",viewBox:"0 0 24 24",width:"24px",height:"24px"},e),E||(E=a.a.createElement("path",{d:"M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"})))},C=(n.p,{check:function(e){return a.a.createElement(g,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return a.a.createElement(v,{className:"Icon-svg--delete",fill:e})}});function b(e){var t=e.type,n=e.color,o=void 0===n?"gray":n,r=e.onClick;return a.a.createElement("span",{className:"Icon-container Icon-container--".concat(t),onClick:r},C[t](o))}function y(e){var t=e.completed,n=e.onComplete,o=e.onHide;return a.a.createElement(b,{type:"check",color:t?"#4caf50":"gray",onClick:n,onHide:o})}function O(e){var t=e.onDelete;return a.a.createElement(b,{type:"delete",onClick:t})}n(26);function S(e){return a.a.createElement("li",{className:"TodoItem ".concat(e.hide&&"TodoItem-p--hide")},a.a.createElement(y,{completed:e.completed,onComplete:e.onComplete}),a.a.createElement("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete")},e.text),a.a.createElement(O,{onDelete:e.onDelete}))}n(28);function L(e){var t=e.addTodo,n=e.setOpenModal,o=a.a.useState(""),r=Object(u.a)(o,2),c=r[0],l=r[1],i=function(e){e.preventDefault(),t(c),n(!1)};return a.a.createElement("form",{onSubmit:i},a.a.createElement("label",null,"Write your new task"),a.a.createElement("textarea",{value:c,onChange:function(e){l(e.target.value)},placeholder:"Feed your dog"}),a.a.createElement("div",{className:"TodoForm-buttonContainer"},a.a.createElement("button",{type:"button",className:"TodoForm-button TodoForm-button-cancel",onClick:function(){n(!1)}},"Cancel"),a.a.createElement("button",{type:"submit",className:"TodoForm-button TodoForm-button-add",onClick:i},"Add")))}n(30);function w(e){return a.a.createElement("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal(function(e){return!e})}},"+")}n(32);function N(e){return a.a.createElement("button",{className:"HideCompletedTodos",onClick:e.onHide},"Hide completed")}n(34);function k(e){return a.a.createElement("button",{className:"ShowCompletedTodos",onClick:e.onShow},"Show completed")}n(36);function I(){return a.a.createElement("p",{className:"TodoCongrats"},a.a.createElement("span",null,"Congratulations! ")," You finished all the tasks")}var x=n(3),j=n.n(x);n(38);function V(e){var t=e.children;return j.a.createPortal(a.a.createElement("div",{className:"ModalBackground"},t),document.getElementById("modal"))}n(40);function M(e){e.error;return a.a.createElement("p",null,"We have an error")}n(42);function F(){return a.a.createElement("div",{className:"LoadingTodo-container"},a.a.createElement("span",{className:"LoadingTodo-completeIcon"}),a.a.createElement("p",{className:"LoadingTodo-text"},"Loading Tasks... Wait!"),a.a.createElement("span",{className:"LoadingTodo-deleteIcon"}))}n(44);function z(){return a.a.createElement("p",{className:"empty-todos--p"},"Place your first ",a.a.createElement("span",null,"Task :)"))}n(46);function D(e){var t=e.searchValue;return a.a.createElement("p",{className:"EmptySearchedResults"},a.a.createElement("span",null,"Hey! ")," you don't have any tasks with the name ",a.a.createElement("span",{className:"searchValue"},t))}n(48);function H(e){var t=function(e){var t=a.a.useState(!1),n=Object(u.a)(t,2),o=n[0],r=n[1];return a.a.useEffect(function(){var e=function(e){"TODOS_V1"===e.key&&(console.log("Hubo cambios en TODOS_V1"),r(!0))};return window.addEventListener("storage",e),function(){window.removeEventListener("storage",e)}},[]),{show:o,toggleShow:function(){e(),r(!1)}}}(e.sincronize),n=t.show,o=t.toggleShow;return n?a.a.createElement("div",{className:"ChangeAlert--container"},a.a.createElement("p",null,"We have changes"),a.a.createElement("button",{onClick:function(){return o(!1)}},"Update info")):null}n(50);var R=function(){var e=i(),t=e.error,n=e.loading,o=e.searchedTodos,r=e.toggleCompleteTodo,c=e.deleteTodo,l=e.hideCompletedTodosFn,u=e.showCompletedTodosFn,p=e.openModal,h=e.setOpenModal,E=e.totalTodos,g=e.completedTodos,T=e.searchValue,v=e.setSearchValue,C=e.addTodo,b=e.sincronizeTodos;return a.a.createElement(a.a.Fragment,null,a.a.createElement(d,{loading:n},a.a.createElement(s,{totalTodos:E,completedTodos:g}),a.a.createElement(m,{searchValue:T,setSearchValue:v})),a.a.createElement(f,{error:t,loading:n,searchedTodos:o,completedTodos:g,totalTodos:E,searchValue:T,onError:function(){return a.a.createElement(M,null)},onLoading:function(){return a.a.createElement(F,null)},onEmptyTodos:function(){return a.a.createElement(z,null)},onEmptySearchResults:function(){return a.a.createElement(z,null)},onTodoCongrats:function(){return a.a.createElement(I,null)},onEmptySearchedResults:function(e){return a.a.createElement(D,{searchValue:e})}},function(e){return a.a.createElement(S,{key:e.text,text:e.text,completed:e.completed,onComplete:function(){return r(e.text)},onDelete:function(){return c(e.text)},hide:e.hide})}),!!p&&a.a.createElement(V,null,a.a.createElement(L,{addTodo:C,setOpenModal:h})),a.a.createElement(w,{setOpenModal:h}),a.a.createElement(N,{onHide:function(){return l()}}),a.a.createElement(k,{onShow:function(){return u()}}),a.a.createElement(H,{sincronize:b}))},B=document.getElementById("root");c.a.createRoot(B).render(a.a.createElement(R,null))}],[[6,2,1]]]);
//# sourceMappingURL=main.dacbf6ab.chunk.js.map