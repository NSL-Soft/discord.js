webpackJsonp([2,0],[function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e){return e.replace(/(?:^\w|[A-Z]|\b\w)/g,function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()}).replace(/\s+/g,"")}var n=o(24),a=r(n),i=o(148),c=r(i),l=o(147),p=r(l),u=o(50),d=r(u),f=o(49),v=r(f),m=o(23),h=r(m),y=o(107),x=r(y);o(106),c.default.use(p.default),c.default.component("app-navbar",v.default.AppNavbar),c.default.component("app-footer",v.default.AppFooter),c.default.component("container",v.default.Container),c.default.component("slide",v.default.Slide),c.default.component("github-star",v.default.GitHubButton),c.default.component("lib-stats",v.default.Stats),c.default.component("docs-bar",v.default.DocsNavbar);var b=c.default.extend({data:function(){return{store:h.default.data}},methods:{resolveReference:function(e){var t=this.store.docs[this.$route.params.tag];if(t){var o=t.links[e];if("class"===o)return{name:"classview",params:{class:e}};if("interface"===o)return null;if("typedef"===o)return{name:"typedefview",params:{typedef:e}};if(o)return o}return null}}});c.default.filter("marked",function(e){var t=e||"error! I'm not set!";return t=t.replace(/<(info|warn)>([\s\S]+)<\/\1>/gi,'<div class="$1">$2</div>'),(0,x.default)(t)}),c.default.filter("joinParams",function(e){return e=e||[],e.map(function(e){return e.name}).join(", ")}),c.default.filter("normalise",function(e){var t=(e||"error! I'm not set!").trim(),o=t.charAt(0),r=t.charAt(t.length-1).toLowerCase();return o===o.toLowerCase()&&o!==o.toUpperCase()&&(t=o.toUpperCase()+t.substr(1)),"abcdefghijklmnopqrstuvwxyz".indexOf(r)>=0&&(t+="."),t}),c.default.filter("camel",function(e){return s(e)});var g=new p.default;g.map({"/":{component:d.default.Index},"/docs":{component:function(e,t){a.default.all([h.default.fetchBranches(),h.default.fetchTags()]).then(function(){e(d.default.Docs)}).catch(t)},subRoutes:{"/tag/:tag":{component:v.default.DocsViewer,name:"docview",subRoutes:{"/file/:category/:file":{component:v.default.FileViewer,name:"fileview"},"/class/:class":{component:v.default.ClassViewer,name:"classview"},"/typedef/:typedef":{component:v.default.TypeDefViewer,name:"typedefview"}}}}}}),g.redirect({"/docs":"/docs/tag/master/file/general/Welcome"}),g.beforeEach(function(e){window.scrollTo(0,0),e.next()}),g.start(b,"#vue-root")},,,,,,function(e,t,o){var r,s,n={};r=o(68),s=o(128),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},,,,,,,,,function(e,t,o){var r,s,n={};r=o(64),s=o(124),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},,,,,,,,function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e){var t={string:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",number:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",boolean:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",Array:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",Map:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",Object:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",Date:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",Promise:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",EventEmitter:"https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter",Timeout:"https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout"};e.classes=e.classes.sort(function(e,t){return e.name.localeCompare(t.name)}),e.typedefs=e.typedefs.sort(function(e,t){return e.name.localeCompare(t.name)});var o=!0,r=!1,s=void 0;try{for(var n,a=(0,l.default)(e.classes);!(o=(n=a.next()).done);o=!0){var i=n.value;t[i.name]="class",i.events&&(i.events=i.events.sort(function(e,t){return e.name.localeCompare(t.name)})),i.properties&&(i.properties=i.properties.sort(function(e,t){return e.name.localeCompare(t.name)})),i.methods&&(i.methods=i.methods.sort(function(e,t){return e.name.localeCompare(t.name)}))}}catch(e){r=!0,s=e}finally{try{!o&&a.return&&a.return()}finally{if(r)throw s}}var c=!0,p=!1,u=void 0;try{for(var d,f=(0,l.default)(e.typedefs);!(c=(d=f.next()).done);c=!0){var v=d.value;t[v.name]="typedef"}}catch(e){p=!0,u=e}finally{try{!c&&f.return&&f.return()}finally{if(p)throw u}}return e.links=t,e}function n(e){try{return JSON.parse(e)}catch(e){return alert(e)}}var a=o(24),i=r(a),c=o(7),l=r(c),p=o(41),u=o(40),d=["gh-pages","gh-pages-dev","docs","v8","indev-old"],f={branches:null,tags:null,latestTag:"0.0.0",docs:{}},v={data:f,fetchBranches:function(){return new i.default(function(e,t){return f.branches?void e(f.branches):void p.get("https://api.github.com/repos/hydrabolt/discord.js/branches").end(function(o,r){if(o)return void t(o);f.branches=r.body;for(var s=0;s<f.branches.length;)d.includes(f.branches[s].name)?f.branches.splice(s,1):s++;e(f.branches)})})},fetchTags:function(){return new i.default(function(e,t){return f.tags?void e(f.tags):void p.get("https://api.github.com/repos/hydrabolt/discord.js/tags").end(function(o,r){if(o)return void t(o);f.tags=r.body;for(var s=0;s<f.tags.length;){var n=f.tags[s].name.replace(/^v/,"");u.gt(n,f.latestTag)&&(f.latestTag=f.tags[s].name),u.lt(n,"9.0.0")?f.tags.splice(s,1):s++}e(f.tags)})})},fetchDocs:function(e){return new i.default(function(t,o){return f.docs[e]?void t(f.docs[e]):void p.get("https://raw.githubusercontent.com/hydrabolt/discord.js/docs/"+e+".json").end(function(r,a){return r?void o(r):(f.docs[e]=s(a.body||n(a.text)),void t(f.docs[e]))})})}};e.exports=v},,,,,,,,,,,,,,,,,,,,function(e,t,o){var r,s,n={};r=o(58),s=o(118),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(61),s=o(121),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(62),s=o(122),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(63),s=o(123),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(66),s=o(126),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(67),s=o(127),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var s=o(134),n=r(s),a=o(135),i=r(a),c=o(137),l=r(c),p=o(136),u=r(p),d=o(138),f=r(d),v=o(133),m=r(v),h=o(139),y=r(h),x=o(140),b=r(x),g=o(43),_=r(g),w=o(143),j=r(w),k=o(141),M=r(k),O=o(144),P=r(O);e.exports={AppNavbar:n.default,Container:i.default,Slide:l.default,GitHubButton:u.default,Stats:f.default,AppFooter:m.default,DocsNavbar:y.default,DocsViewer:b.default,DocsSidebar:_.default,FileViewer:j.default,ClassViewer:M.default,TypeDefViewer:P.default}},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var s=o(146),n=r(s),a=o(145),i=r(a);e.exports={Index:n.default,Docs:i.default}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(){i.get("https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/discord.js").end(function(e,t){if(!e){c.downloads=0;var o=!0,r=!1,s=void 0;try{for(var n,i=(0,a.default)(t.body.downloads);!(o=(n=i.next()).done);o=!0){var l=n.value;c.downloads+=l.downloads}}catch(e){r=!0,s=e}finally{try{!o&&i.return&&i.return()}finally{if(r)throw s}}c.downloads=c.downloads.toLocaleString()}}),i.get("https://api.github.com/repos/hydrabolt/discord.js").end(function(e,t){e||(c.stars=(""+t.body.stargazers_count).toLocaleString())}),i.get("https://api.github.com/repos/hydrabolt/discord.js/contributors").end(function(e,t){e||(c.contributors=(""+t.body.length).toLocaleString())})}Object.defineProperty(t,"__esModule",{value:!0});var n=o(7),a=r(n),i=o(41),c={downloads:"80,000+ ",stars:"500+ ",contributors:"30+ "};t.default={data:function(){return s(),c}}},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(40),n=r(s);t.default={data:function(){return this.$route.params.tag||this.$router.go({path:"/docs/tag/master"}),{choice:n.default.valid(this.$route.params.tag)?"tag":"branch",chosenTag:this.$route.params.tag?this.$route.params.tag:"master"}},methods:{select:function(e){this.choice=e}},watch:{chosenTag:function(e){e&&this.$router.go({path:"/docs/tag/"+e})}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["docs"],data:function(){return{sidebarVisible:!1}},computed:{publicClasses:function(){return this.docs.classes.filter(function(e){return"private"!==e.access})}},methods:{toggle:function(){this.sidebarVisible=!this.sidebarVisible}},route:{canReuse:function(){return!1}}}},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(23),n=r(s),a=o(43),i=r(a);t.default={components:{Sidebar:i.default},data:function(){return{docs:n.default.data.docs[this.$route.params.tag],viewPrivate:this.$route.query.private}},ready:function(){"docview"===this.$route.name&&this.$router.go({name:"fileview",params:{category:"general",file:"Welcome"}})},route:{canActivate:function(e){n.default.fetchDocs(e.to.params.tag).then(function(){e.next()}).catch(function(t){e.abort(),alert("Couldn't load docs for "+e.to.params.tag+" - "+t),console.log(t)})},canReuse:function(){return!1}},events:{toggleShowPrivate:function(){this.viewPrivate=!this.viewPrivate}}}},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e){e=e.split("+").join(" ");for(var t={},o=void 0,r=/[?&]?([^=]+)=([^&]*)/g;o=r.exec(e);)t[decodeURIComponent(o[1])]=decodeURIComponent(o[2]);return t}Object.defineProperty(t,"__esModule",{value:!0});var n=o(7),a=r(n),i=o(46),c=r(i),l=o(47),p=r(l),u=o(45),d=r(u),f=o(44),v=r(f),m=o(15),h=r(m),y=o(48),x=r(y);t.default={components:{Overview:c.default,PropRenderer:p.default,MethodRenderer:d.default,EventRenderer:v.default,ParamTable:h.default,SingleTypeRenderer:x.default},props:["docs"],data:function(){var e=this.$route.params,t=!0,o=!1,r=void 0;try{for(var s,n=(0,a.default)(this.docs.classes);!(t=(s=n.next()).done);t=!0){var i=s.value;if(i.name===e.class)return{jsclass:i}}}catch(e){o=!0,r=e}finally{try{!t&&n.return&&n.return()}finally{if(o)throw r}}return{}},computed:{publicProperties:function(){return this.$data.jsclass.properties.filter(function(e){return"private"!==e.access})},publicMethods:function(){return this.$data.jsclass.methods.filter(function(e){return"private"!==e.access})}},route:{canReuse:function(){return!1}},ready:function(){var e=!0,t=!1,o=void 0;try{for(var r,n=(0,a.default)(this.$el.querySelectorAll("pre code"));!(e=(r=n.next()).done);e=!0){var i=r.value;window.hljs.highlightBlock(i)}}catch(e){t=!0,o=e}finally{try{!e&&n.return&&n.return()}finally{if(t)throw o}}var c=window.location.href.split("?")[1];c&&(c=s(c),c.scrollto&&!function(){var e=document.getElementById("doc_for_"+c.scrollto);e.setAttribute("data-selected",!0),setTimeout(function(){return e.removeAttribute("data-selected")},1),e.scrollIntoView(!0),window.scrollBy(0,-100)}())}}},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(6),n=r(s),a=o(142),i=r(a);t.default={components:{TypeRenderer:n.default,ParamTable:i.default},props:["event"]}},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(6),n=r(s),a=o(15),i=r(a);t.default={components:{TypeRenderer:n.default,ParamTable:i.default},props:["method"]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["jsclass"],computed:{publicProperties:function(){return this.jsclass.properties.filter(function(e){return"private"!==e.access})},publicMethods:function(){return this.jsclass.methods.filter(function(e){return"private"!==e.access})}},methods:{scroll:function(e){this.$router.go({name:"classview",query:{scrollto:e}});var t=document.getElementById("doc_for_"+e);t.setAttribute("data-selected",!0),setTimeout(function(){return t.removeAttribute("data-selected")},1),t.scrollIntoView(!0),window.scrollBy(0,-100)}},route:{canReuse:function(){return!1}}}},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(6),n=r(s);t.default={components:{TypeRenderer:n.default},props:["params"]}},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(6),n=r(s);t.default={components:{TypeRenderer:n.default},props:["params"]}},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(6),n=r(s),a=o(15),i=r(a);t.default={components:{TypeRenderer:n.default,ParamTable:i.default},props:["prop"]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["type"],data:function(){var e=this.$root.resolveReference(this.type[0]);return"string"!=typeof e&&console.log(this.type[0],e),{link:this.$root.resolveReference(this.type[0])}}}},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(48),n=r(s);t.default={components:{SingleTypeRenderer:n.default},props:["names"]}},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e){e=e.split("+").join(" ");for(var t={},o=void 0,r=/[?&]?([^=]+)=([^&]*)/g;o=r.exec(e);)t[decodeURIComponent(o[1])]=decodeURIComponent(o[2]);return t}Object.defineProperty(t,"__esModule",{value:!0});var n=o(7),a=r(n);t.default={props:["docs"],data:function(){var e=this.$route.params,t=!0,o=!1,r=void 0;try{for(var s,n=(0,a.default)(this.docs.custom[e.category]);!(t=(s=n.next()).done);t=!0){var i=s.value;if(i.name===e.file)return{file:i}}}catch(e){o=!0,r=e}finally{try{!t&&n.return&&n.return()}finally{if(o)throw r}}return{}},ready:function(){var e=!0,t=!1,o=void 0;try{for(var r,n=(0,a.default)(this.$el.querySelectorAll("pre code"));!(e=(r=n.next()).done);e=!0){var i=r.value;window.hljs.highlightBlock(i)}}catch(e){t=!0,o=e}finally{try{!e&&n.return&&n.return()}finally{if(t)throw o}}var c=window.location.href.split("?")[1];c&&(c=s(c),c.scrollto&&!function(){var e=document.getElementById("doc_for_"+c.scrollto);e.setAttribute("data-selected",!0),setTimeout(function(){return e.removeAttribute("data-selected")},1),e.scrollIntoView(!0),window.scrollBy(0,-100)}())},route:{canReuse:function(){return!1}}}},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e){e=e.split("+").join(" ");for(var t={},o=void 0,r=/[?&]?([^=]+)=([^&]*)/g;o=r.exec(e);)t[decodeURIComponent(o[1])]=decodeURIComponent(o[2]);return t}Object.defineProperty(t,"__esModule",{value:!0});var n=o(7),a=r(n),i=o(6),c=r(i),l=o(46),p=r(l),u=o(47),d=r(u),f=o(45),v=r(f),m=o(44),h=r(m),y=o(15),x=r(y);t.default={props:["docs"],components:{TypeRenderer:c.default,Overview:p.default,PropRenderer:d.default,MethodRenderer:v.default,EventRenderer:h.default,ParamTable:x.default},data:function(){var e=this.$route.params,t=!0,o=!1,r=void 0;try{for(var s,n=(0,a.default)(this.docs.typedefs);!(t=(s=n.next()).done);t=!0){var i=s.value;if(i.name===e.typedef)return{typedef:i}}}catch(e){o=!0,r=e}finally{try{!t&&n.return&&n.return()}finally{if(o)throw r}}return{}},route:{canReuse:function(){return!1}},ready:function(){var e=!0,t=!1,o=void 0;try{for(var r,n=(0,a.default)(this.$el.querySelectorAll("pre code"));!(e=(r=n.next()).done);e=!0){var i=r.value;window.hljs.highlightBlock(i)}}catch(e){t=!0,o=e}finally{try{!e&&n.return&&n.return()}finally{if(t)throw o}}var c=window.location.href.split("?")[1];c&&(c=s(c),c.scrollto&&!function(){var e=document.getElementById("doc_for_"+c.scrollto);e.setAttribute("data-selected",!0),setTimeout(function(){return e.removeAttribute("data-selected")},1),e.scrollIntoView(!0),window.scrollBy(0,-100)}())}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={};t.default={data:function(){return{branchData:o}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},,,,,function(e,t){e.exports=" <footer> <container> <a href=https://github.com/hydrabolt/discord.js><b>discord.js</b></a> </container> </footer> "},function(e,t){e.exports=" <div class=navbar> <container> <a v-link=\"{ path: '/' }\" class=title>discord.js</a> <div class=links> <a v-link=\"{ path: '/docs' }\" class=link>Documentation</a> <a href=https://github.com/hydrabolt/discord.js class=link>GitHub</a> </div> </container> </div> "},function(e,t){e.exports=" <div class=container> <slot></slot> </div> "},function(e,t){e.exports=" <div class=github-button> </div> "},function(e,t){e.exports=" <div class=slide> <container> <slot></slot> </container> </div> "},function(e,t){e.exports=" <slide> <h2>Stats</h2> <div class=stat><strong>{{ downloads }}</strong> downloads</div> <div class=stat><strong>{{ stars }}</strong> stars</div> <div class=stat><strong>{{ contributors }}</strong> contributors</div> </slide> "},function(e,t){e.exports=' <div class=docs-navbar> <container> <div class=choices> Select docs from <span class=choice @click=\'select("tag")\'>Release</span> or <span class=choice @click=\'select("branch")\'>Branch</span> </div> <div class=branchSelect v-if="choice==\'tag\'"> <select v-model=chosenTag> <option v-for="tag in $root.store.tags" v-bind:value=tag.name :selected="tag.name==($route.params.tag || $root.store.latestTag)">{{ tag.name }}</option> </select> </div> <div class=branchSelect v-if="choice==\'branch\'"> <select v-model=chosenTag> <option v-for="branch in $root.store.branches" v-bind:value=branch.name :selected="branch.name==($route.params.tag || \'master\')">{{ branch.name }}</option> </select> </div> </container> </div> '},function(e,t){e.exports=' <div class=docs-sidebar> <div class=mob-button @click=toggle><i class="fa fa-bars"></i></div> <div class=\'content {{ sidebarVisible ? "on" : "off" }}\'> <div class=mob-back @click=toggle> <i class="fa fa-arrow-left" aria-hidden=true></i> </div> <ul v-for="(category, catFiles) in docs.custom"> <li>{{ category }}</li> <li v-for="file in catFiles"><a v-link=\'{ name:"fileview", params:{category:category, file:file.name} }\' @click=toggle>{{ file.name }}</a></li> </ul> <ul> <li>Classes</li> <li v-for="_class in publicClasses"><a v-link=\'{ name:"classview", params:{class:_class.name} }\' @click=toggle>{{ _class.name }}</a></li> </ul> <ul> <li>TypeDefs</li> <li v-for="typedef in docs.typedefs"><a v-link=\'{ name:"typedefview", params:{typedef:typedef.name} }\' @click=toggle>{{ typedef.name }}</a></li> </ul> </div> </div> '},function(e,t){e.exports=" <div class=docs-viewer> <container> <sidebar :docs=docs></sidebar> <router-view :docs=docs></router-view> </container> </div> "},function(e,t){e.exports=' <span class=classViewer> <span class=title>{{* jsclass.name }} <span class=extendDetails v-if=jsclass.extends> extends <single-type-renderer :type=jsclass.extends></single-type-renderer> </span> </span> <p class=classdesc>{{{* jsclass.description | normalise | marked }}}</p> <div class=classConstructor v-if=jsclass.classConstructor> <span class=title>Constructor</span> <div class=classConstructor> <pre>\n        <code class=lang-js>new Discord.{{{* jsclass.name }}}(<span class=constructorParam v-for="param in jsclass.classConstructor.params">{{* param.name }}</span>);</code>\n      </pre> <param-table :params=jsclass.classConstructor.params></param-table> </div> </div> <overview :jsclass=jsclass></overview> <span class=title v-if="publicProperties.length > 0">Properties</span> <prop-renderer v-for="prop in publicProperties" :prop=prop></prop-renderer> <span class=title v-if="publicMethods.length > 0">Methods</span> <method-renderer v-for="method in publicMethods" :method=method></method-renderer> <span class=title v-if="jsclass.events.length > 0">Events</span> <event-renderer v-for="event in jsclass.events" :event=event></event-renderer> </span> '},function(e,t){e.exports=' <div class=classEvent id="doc_for_{{* event.name }}"> <div class=eventName><a v-link=\'{ name:"classview", query:{scrollto:event.name}}\'>.{{* event.name }}</a></div> <p class=eventDescription>{{{* event.description | normalise | marked }}}</p> <pre class=eventUsage><code class=lang-js>{{* event.memberof | camel }}.on(\'{{* event.name }}\', ({{* event.params | joinParams }}) => {<br/>&nbsp;&nbsp;//do stuff<br/>});</code></pre> <param-table v-if="event.params.length > 0" :params=event.params></param-table> </div> '},function(e,t){e.exports=' <div class=classMethod id="doc_for_{{* method.name }}"> <div class=methodName><a v-link=\'{ name:"classview", query:{scrollto:method.name}}\'>.{{* method.name }}(<span v-for="param in method.params" class="param {{* param.optional ? \'optional\' : \'\' }}">{{* param.name }}</span>)</a></div> <div class=methodDescription>{{{* method.description | normalise | marked }}}</div> <param-table v-if="method.params.length > 0" :params=method.params></param-table> <div class=methodReturn>Returns: <type-renderer v-for="return in method.returns.types" :names=return></type-renderer></div> <div v-if="method.examples && method.examples.length > 0" class=methodExamples> <b>Examples:</b> <div v-for="example in method.examples" class=example>{{{* \'```js\\n\'+example+\'```\' | marked }}}</div> </div> </div> '},function(e,t){e.exports=' <div class=classOverview> <div class=col v-if="publicProperties.length > 0"> <span class=title>Properties</span> <ul> <li v-for="property in publicProperties"> <a v-link="{ name: \'classview\', query: { scrollto: property.name } }" @click=scroll(property.name)>{{ property.name }}</a> </li> </ul> </div> <div class=col v-if="publicMethods.length > 0"> <span class=title>Methods</span> <ul> <li v-for="method in publicMethods"> <a v-link="{ name: \'classview\', query: { scrollto: method.name } }" @click=scroll(method.name)>{{ method.name }}</a> </li> </ul> </div> <div class=col v-if="jsclass.events.length > 0"> <span class=title>Events</span> <ul> <li v-for="event in jsclass.events"> <a v-link="{ name: \'classview\', query: { scrollto: event.name } }" @click=scroll(event.name)>{{ event.name }}</a> </li> </ul> </div> </div> '},function(e,t){e.exports=" <div class=paramTableWrapper> <table class=paramTable> <tbody> <tr> <th>Parameter</th> <th>Type</th> <th>Optional</th> <th>Description</th> </tr> <tr v-for=\"param in params\"> <td>{{* param.name }}</td> <td><type-renderer v-for=\"type in param.type.types\" :names=type></type-renderer></td> <td>{{* param.optional ? 'yes' : ''}}</td> <td>{{{* param.description | normalise | marked }}}</td> </tr> </tbody> </table> </div> "},function(e,t){e.exports=' <div class=paramTableWrapper> <table class=paramTable> <tbody> <tr> <th>Parameter</th> <th>Type</th> <th>Description</th> </tr> <tr v-for="param in params"> <td>{{* param.name }}</td> <td><type-renderer v-for="type in param.type.types" :names=type></type-renderer></td> <td>{{{* param.description | normalise | marked }}}</td> </tr> </tbody> </table> </div> '},function(e,t){e.exports=' <div class=classProp id="doc_for_{{* prop.name }}"> <div class=propName><a v-link=\'{ name:"classview", query:{scrollto:prop.name}}\'>.{{* prop.name }}</a></div> <div class=propDescription>{{{* prop.description | normalise | marked }}}</div> <param-table :params=prop.props v-if="prop.props.length > 0"></param-table> <div class=propType><b>Type:</b> <type-renderer v-for="type in prop.type.types" :names=type></type-renderer></div> </div> '},function(e,t){e.exports=" <a v-if=\"typeof link !== 'string'\" v-link=link class=typeLink>{{* type[0] }}</a><a v-else :href=link class=typeLink>{{* type[0] }}</a><span class=typeRest>{{* type[1] }}</span> "},function(e,t){e.exports='<span class=type><single-type-renderer v-for="type in names" :type=type></single-type-renderer></span>'},function(e,t){e.exports=" <div class=fileViewer> {{{* file.data | normalise | marked }}} </div> "},function(e,t){e.exports=' <span class=typeDefViewer> <span class=title> {{* typedef.name }} </span> <p class=typeDefDesc>{{{* typedef.description | normalise | marked }}}</p> <b class=typeDefType>Types:</b> <ul> <li v-for="type in typedef.type.types"><type-renderer :names=type></type-renderer></li> </ul> <div v-if="typedef.properties && typedef.properties.length > 0"> <param-table :params=typedef.properties></param-table> <prop-renderer v-for="prop in typedef.properties" :prop=prop></prop-renderer> </div> </span> '},function(e,t){e.exports=" <docs-bar></docs-bar> <router-view></router-view> "},function(e,t){e.exports=" <div class=indexView> <slide> <h1>discord.js</h1> <div class=code>npm install --save discord.js</div> <github-star></github-star> </slide> <slide> <h2>About</h2> <p> discord.js is a JavaScript library that wraps around the <a href=https://discordapp.com/developers/docs/intro>Discord API</a> so you can make your own Bots and Applications for Discord. It handles all the communication and provides an easy-to-use interface so you can focus on doing actual work. </p> </slide> <lib-stats></lib-stats> </div> "},function(e,t,o){var r,s,n={};r=o(51),s=o(111),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(52),s=o(112),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(53),s=o(113),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(54),s=o(114),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(55),s=o(115),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(56),s=o(116),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(57),s=o(117),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(59),s=o(119),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(60),s=o(120),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(65),s=o(125),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(69),s=o(129),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(70),s=o(130),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(71),s=o(131),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];
a.computed[e]=function(){return t}})},function(e,t,o){var r,s,n={};r=o(72),s=o(132),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})}]);
//# sourceMappingURL=app.1de5b432f163e6adc2ac.js.map