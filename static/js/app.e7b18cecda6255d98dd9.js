webpackJsonp([5,3],[function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=a(9),o=n(i),s=a(27),r=n(s),l=a(73),c=n(l),d=a(43),u=n(d);o.default.use(u.default);var f=new u.default({routes:[{path:"/p1",component:function(t){a.e(2,function(e){var a=[e(32)];t.apply(null,a)}.bind(this))}},{path:"/p2",component:function(t){a.e(1,function(e){var a=[e(34)];t.apply(null,a)}.bind(this))}},{path:"/p3",component:function(t){a.e(0,function(e){var a=[e(33)];t.apply(null,a)}.bind(this))}},{path:"*",redirect:"/p2"}]});new o.default({store:c.default,router:f,el:"#app",template:"<App/>",components:{App:r.default}}),function(){for(var t=0,e=["webkit","moz"],a=0,n=e.length;a<n&&!window.requestAnimationFrame;a++)window.requestAnimationFrame=window[e[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[a]+"CancelAnimationFrame"]||window[e[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var a=+new Date,n=Math.max(0,16.7-(a-t)),i=window.setTimeout(function(){e()},n);return t=a+n,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}()},,,,,,,function(t,e,a){t.exports=a.p+"static/img/default-pattern.c166991.png"},,,,,,,,function(t,e){t.exports=window.$},,,,function(t,e){},function(t,e){},,,,function(t,e){},function(t,e){},function(t,e){},function(t,e,a){var n,i;a(20),n=a(74);var o=a(36);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=n},function(t,e,a){var n,i;a(25),n=a(75);var o=a(41);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-a2df7c56",t.exports=n},function(t,e,a){var n,i;a(24),n=a(76);var o=a(40);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-74c28bf1",t.exports=n},function(t,e,a){var n,i;a(26),n=a(77);var o=a(42);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-d416203a",t.exports=n},function(t,e,a){var n,i;a(19),n=a(78);var o=a(35);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-0682bd96",t.exports=n},,,,function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"menus"},[t._l(t.menus,function(e){return t._h("span",{staticClass:"menu",class:{active:t.curRouter===e.router.toLowerCase()},on:{click:function(a){t.go(e.router)}}},[t._s(e.text)])})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",{attrs:{id:"app"}},[t._h("div",{staticClass:"app-container"},[t._h("app-header")," ",t._h("app-menu")," ",t._h("div",{staticClass:"app-content-wrapper",attrs:{id:"appContentWrapper"}},[t._h("div",{staticClass:"global-note blue"},["说明：文章内容来源于互联网"])," ",t._h("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"routers"},[t._h("router-view")])])," ",t._h("app-footer")])," ",t._h("div",{staticClass:"app-facilities"},[t._h("ball")])])},staticRenderFns:[]}},,,,function(t,e){t.exports={render:function(){var t=this;return t._m(0)},staticRenderFns:[function(){var t=this;return t._h("div",{staticClass:"app-footer"},[t._h("p",{staticClass:"text"},["No Rights Reserved · Yakima Teng | 滕运锋"])," ",t._h("p",{staticClass:"text"},["UI参考自WordPress Theme: Natural Lite by ",t._h("a",{staticClass:"link",attrs:{href:"http://organicthemes.com/",rel:"designer"}},["Organic Themes"])])])}]}},function(t,e){t.exports={render:function(){var t=this;return t._h("transition",{attrs:{name:"fade"}},[t._h("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"utils-ball"},[t._h("div",{directives:[{name:"show",rawName:"v-show",value:"vertical"===t.direction,expression:"direction === 'vertical'"}],staticClass:"vertical"},[t._l(t.totalBalls,function(e){return t._h("span",{staticClass:"ball ball-DNA1",style:{"animation-delay":-(6e3/t.totalBalls)*e+"ms","background-color":["navy","skyblue","orange","brown"][e%4],top:Math.ceil(100/(t.totalBalls+1)*e)+"%"},attrs:{"data-key":e}})})," ",t._l(t.totalBalls,function(e){return t._h("span",{staticClass:"ball ball-DNA1",style:{"animation-delay":-(6e3/t.totalBalls)*e-1e3+"ms","background-color":["navy","skyblue","orange","brown"][e%4],top:Math.ceil(100/(t.totalBalls+1)*e)+"%"},attrs:{"data-key":e}})})])," ",t._h("div",{directives:[{name:"show",rawName:"v-show",value:"horizontal"===t.direction,expression:"direction === 'horizontal'"}],staticClass:"horizontal"},[t._l(t.totalBalls,function(e){return t._h("span",{staticClass:"ball ball-DNA2",style:{"animation-delay":-(6e3/t.totalBalls)*e+"ms","background-color":["navy","skyblue","orange","brown"][e%4],width:t.horizontalBallWidth+"px","margin-left":-t.horizontalBallWidth/2+"px",left:Math.ceil(100/(t.totalBalls+1)*e)+"%"},attrs:{"data-key":e}})})," ",t._l(t.totalBalls,function(e){return t._h("span",{staticClass:"ball ball-DNA2",style:{"animation-delay":-(6e3/t.totalBalls)*e-1e3+"ms","background-color":["navy","skyblue","orange","brown"][e%4],width:t.horizontalBallWidth+"px","margin-left":-t.horizontalBallWidth/2+"px",left:Math.ceil(100/(t.totalBalls+1)*e)+"%"},attrs:{"data-key":e}})})])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._m(0)},staticRenderFns:[function(){var t=this;return t._h("div",{staticClass:"canvas-header-wrapper"},[t._h("canvas",{staticClass:"canvas-header",attrs:{id:"canvasHeader",width:"900",height:"300"}},["Your browser does not support HTML5 Canvas, please use a modern browser."])])}]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(9),o=n(i),s=a(8),r=n(s);o.default.use(r.default);var l={states:{isLoading:!0}},c={load:function(t,e){t.states.isLoading=e}},d={},u={states:function(t){return t.states}};e.default=new r.default.Store({state:l,getters:u,actions:d,mutations:c})},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(72),o=n(i),s=a(28),r=n(s),l=a(30),c=n(l),d=a(31),u=n(d),f=a(29),h=n(f),p=a(8),v=a(15),m=n(v);e.default={name:"app",data:function(){return{}},computed:{isLoading:function(){return this.$store.state.states.isLoading}},methods:(0,o.default)({},(0,p.mapMutations)(["load"])),mounted:function(){function t(){2===++o&&setTimeout(function(){e.load(!1)},5e3)}var e=this,n=new window.Image,i=new window.Image,o=0;n.src=a(7),i.src="./static/star.jpg",n.onload=function(){(0,m.default)("body").css({"background-image":'url("'+a(7)+'")'}),t()},i.onload=t},components:{Ball:r.default,AppHeader:c.default,AppMenu:u.default,AppFooter:h.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ball",data:function(){return{totalBalls:10,direction:"vertical",horizontalBallWidth:""}},computed:{isLoading:function(){return this.$store.state.states.isLoading}},methods:{resetBalls:function(){var t=this,e=window.innerHeight,a=window.innerWidth;if(e>a){t.direction="vertical";var n=Math.ceil(a/50);t.totalBalls=Math.floor(e/n)}else t.direction="horizontal",t.horizontalBallWidth=Math.ceil(e/50),t.totalBalls=Math.floor(a/50)}},mounted:function(){var t=this;t.$nextTick(function(){t.resetBalls(),window.addEventListener("resize",t.resetBalls,!1)})},beforeDestroy:function(){var t=this;window.removeEventListener("resize",t.resetBalls,!1)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app-footer",data:function(){return{year:(new Date).getFullYear()}}}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(15),o=n(i);e.default={name:"app-header",data:function(){return{canvas:"",context:"",canvasWidth:"",canvasHeight:"",backgroundImage:"",title:"PLAY BADMINTON"}},methods:{init:function(){var t=this;t.context.clearRect(0,0,t.canvasWidth,t.canvasHeight),t.context.fillStyle="#fff",t.context.fillRect(0,0,t.canvasWidth,t.canvasHeight),t.context.drawImage(t.backgroundImage,12,12,t.canvasWidth-24,t.canvasHeight-24),t.context.fillStyle="#fff",t.context.font="48px _sans",t.context.fillText(t.title,t.calculateXOffsetForCenteredText(t.title),t.canvasHeight/2+12)},calculateXOffsetForCenteredText:function(t){var e=this,a=e.context.measureText(t),n=a.width;return e.canvasWidth/2-n/2},skyCanvas:function(){function t(t,e){if(arguments.length<2&&(e=t,t=0),t>e){var a=e;e=t,t=a}return Math.floor(Math.random()*(e-t+1))+t}function e(t,e){var a=Math.max(t,e),n=Math.round(Math.sqrt(a*a+a*a));return n/2}function a(){var t=new window.Image;t.src="./static/star.jpg",t.onload=function(){s.drawImage(t,0,0),window.requestAnimationFrame(a)},s.drawImage(t,0,0),n.context.fillStyle="#fff",n.context.font="48px _sans",n.context.fillText(n.title,n.calculateXOffsetForCenteredText(n.title),n.canvasHeight/2+12);for(var e=1,i=c.length;i>e;e++)c[e].draw()}var n=this,i=document.getElementById("canvasHeader"),s=i.getContext("2d"),r=i.width=(0,o.default)(".canvas-header-wrapper").width(),l=i.height;n.context=s,n.canvasWidth=r,n.canvasHeight=l;var c=[],d=0,u=300,f=document.createElement("canvas"),h=f.getContext("2d");f.width=100,f.height=100;var p=f.width/2,v=h.createRadialGradient(p,p,3,p,p,26);v.addColorStop(.025,"#87c0f6"),v.addColorStop(.25,"#11417a"),v.addColorStop(1,"transparent"),h.fillStyle=v,h.beginPath(),h.arc(p,p,p,0,2*Math.PI),h.fill();var m=function(){this.orbitRadius=t(e(r,l)),this.radius=t(60,this.orbitRadius)/12,this.orbitX=r/2,this.orbitY=l/2,this.timePassed=t(0,u),this.speed=t(this.orbitRadius)/9e5,this.alpha=t(2,10)/10,d++,c[d]=this};m.prototype.draw=function(){var e=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,a=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,n=t(10);1===n&&this.alpha>0?this.alpha-=.05:2===n&&this.alpha<1&&(this.alpha+=.05),s.globalAlpha=this.alpha,s.drawImage(f,e-this.radius/2,a-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(var w=0;u>w;w++)new m;a()}},mounted:function(){var t=this;t.$nextTick(function(){t.skyCanvas()}),(0,o.default)(window).resize(t.skyCanvas)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app-menu",data:function(){return{menus:[{text:"速度与力量",router:"p1"},{text:"阅读与判断",router:"p2"},{text:"双打与配合",router:"p3"}]}},computed:{curRouter:function(){var t=this;return t.$route.path.split("/")[1]}},methods:{go:function(t){this.$router.push({path:"/"+t.toLowerCase()})}}}}]);