(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{14:function(e,r,t){},15:function(e,r,t){},17:function(e,r,t){"use strict";t.r(r);var n=t(1),c=t.n(n),a=t(8),i=t.n(a),o=(t(14),t(9)),s=t(2),l=(t(15),t(5)),d=t(7),m=t(0);function u(e){var r;return Object(m.jsx)("button",Object(d.a)(Object(d.a)({},e),{},{className:"btn "+(null!==(r=e.className)&&void 0!==r?r:"")}))}function h(e){var r=e.words,t=e.clickedWords,c=e.handleSelection,a=function(){return r[Number.parseInt(Math.random()*r.length)]},i=function(){for(var e,r=new Set;r.size<4;)r.add(a());do{e=a()}while(t.includes(e));var n=Array.from(r);return n[Math.floor(4*Math.random())]=e,n},o=Object(n.useState)(i()),l=Object(s.a)(o,2),d=l[0],h=l[1];return Object(m.jsx)("div",{className:"game-play-container",children:Object(m.jsx)("section",{className:"word-selector",children:d.map((function(e,r){return Object(m.jsx)(u,{onClick:function(){return function(e){c(e),h(i())}(e)},children:e},e+r)}))})})}function j(e){var r=e.clickedWords,t=e.score,n=e.highScore,c=e.maxScore,a=e.restart,i=e.goHome,o=t===c?"Impressive! Wow! Good job!":t===n?"Congratulations! New high score!":"Aww, better luck next time! :)";return Object(m.jsxs)("section",{className:"game-over",children:[Object(m.jsx)("p",{children:o}),Object(m.jsxs)("p",{className:"game-over__score",children:[t,"/",c]}),Object(m.jsxs)("p",{children:["Highscore: ",n]}),Object(m.jsx)("p",{style:{fontSize:"1rem",marginTop:".5rem"},children:"You clicked on these words:"}),Object(m.jsx)("div",{className:"game-over__word-list-spacer",children:Object(m.jsx)("ol",{className:"game-over__word-list",children:r.map((function(e){return Object(m.jsx)("li",{children:e},e)}))})}),Object(m.jsx)(u,{onClick:a,children:"Play Again?"}),Object(m.jsx)(u,{onClick:i,children:"Go to homepage"})]})}function b(e){var r=e.handleStart;return Object(m.jsxs)("section",{children:[Object(m.jsx)("h1",{children:"Rules:"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Click on the words/phrases."}),Object(m.jsx)("li",{children:"Don't click on the same word/phrase again."})]}),Object(m.jsx)(u,{onClick:function(){return r()},children:"Start Game!"})]})}function g(e){var r=e.score,t=e.highScore,n=e.maxScore;return Object(m.jsxs)("div",{className:"score-board",children:[Object(m.jsx)("p",{children:"Current Score:"}),Object(m.jsxs)("p",{className:"score-board__current-score",children:[r,"/",n]}),Object(m.jsxs)("p",{children:["High Score: ",t]})]})}var O="start",x="active",f="end";function S(){var e,r=Object(n.useState)(O),t=Object(s.a)(r,2),c=t[0],a=t[1],i=Object(n.useState)(null!==(e=localStorage.getItem("highScore"))&&void 0!==e?e:0),d=Object(s.a)(i,2),u=d[0],S=d[1],p=Object(n.useState)([]),v=Object(s.a)(p,2),w=v[0],N=v[1],y=function(){return w.length};Object(n.useEffect)((function(){localStorage.setItem("highScore",u)}),[u]);var k=function(e){w.includes(e)?(y()>u&&S(y()),a(f)):N((function(r){return[].concat(Object(o.a)(r),[e])}))};return Object(m.jsx)("div",{className:"game-container",children:function(){switch(c){case O:return Object(m.jsx)(b,{handleStart:function(){return a(x)}});case x:return Object(m.jsxs)("div",{className:"game-active",children:[Object(m.jsx)(g,{score:y(),highScore:u,maxScore:l.length}),Object(m.jsx)(h,{words:l,clickedWords:w,handleSelection:k})]});case f:return Object(m.jsx)(j,{clickedWords:w,score:y(),highScore:u,maxScore:l.length,restart:function(){N([]),a(x)},goHome:function(){N([]),a(O)}});default:throw new Error("Unhandled game state ".concat(c))}}()})}var p=function(){console.log("localStorage cleared!"),localStorage.clear(),location.reload()};function v(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("span",{children:"Memory Test"}),Object(m.jsx)("button",{className:"gh-icon-placeholder",onClick:p,children:"mc"})]}),Object(m.jsx)(S,{}),Object(m.jsx)("footer",{children:Object(m.jsx)("a",{href:"https://github.com/isaiahaiasi/memory-card",target:"_blank",rel:"noreferrer",children:"created by isaiahaiasi w/ :heart:"})})]})}i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('["Interface","Model View Controller","Dynamic Programming","Big O Notation","Callback","Closure","Compiler","Abstraction","Inheritance","Discrete Mathematics","Branching","Flow Control","Concatenation","Conditional","Template Literal","Daemon","Debugging","Divide and Conquer","Minimax Algorithm","Pass by Reference","Pass by Value","Domain Name System","Floating Point Number","Encryption","Salting","Hashing","Event-Driven Programming","Data Flow","Executable","Minimum Viable Product","Expression","Declarative Programming","Functional Programming","Exception Handling","Getters & Setters","For Loop","Game Theory","SOLID","Open-Closed Principle","DRY","Heap","Stack","IDE","VIM","GNOME","Kernel","Imperative Programming","REPL","Integer","Library","Linked List","Matrix","Method","Merge Sort","Number Theory","JSON","Pair Programming","Pointer","Lambda","Precondition","Postcondition","Primitive","Queue","Procedural Programming","Quantum Computing","Quicksort","Redis","Relational Database","Recursion","Regression Testing","Test Driven Design","Requirements Analysis","Off-By-One Error","Run Time","Semantics","AST","Serialization","String","Subroutine","Syntax","Binary Tree","Algorithm","Virtual Machine","Waterfall Model","AGILE Development","Web Crawler"]')}},[[17,1,2]]]);
//# sourceMappingURL=main.d299cfc5.chunk.js.map