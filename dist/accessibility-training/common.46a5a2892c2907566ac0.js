(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1wBy":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return D}),n.d(e,"c",function(){return T}),n.d(e,"d",function(){return f}),n.d(e,"e",function(){return g}),n.d(e,"f",function(){return w}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return b}),n.d(e,"i",function(){return m}),n.d(e,"j",function(){return E}),n.d(e,"k",function(){return O}),n.d(e,"l",function(){return M}),n.d(e,"m",function(){return a}),n.d(e,"n",function(){return d}),n.d(e,"o",function(){return u}),n.d(e,"p",function(){return r}),n.d(e,"q",function(){return o}),n.d(e,"r",function(){return c}),n.d(e,"s",function(){return s}),n.d(e,"t",function(){return p}),n.d(e,"u",function(){return S}),n.d(e,"v",function(){return v}),n.d(e,"w",function(){return h}),n.d(e,"x",function(){return $}),n.d(e,"y",function(){return y}),n.d(e,"z",function(){return L}),n.d(e,"A",function(){return Y}),n.d(e,"B",function(){return x}),n.d(e,"C",function(){return A}),n.d(e,"D",function(){return R});const r="Enter",i="ArrowRight",o="ArrowLeft",u="Spacebar",a=" ",s="ArrowDown",c="ArrowUp",d="Tab",f="Escape",l={BOLD:66,ITALIC:73,UNDERLINE:85,UNDO:89,REDO:90},h="focus",m="enter",v="hide-tooltip",g="type-from-date",p="type-to-date",w="header-checkbox",M="right-modal-button",b="left-modal-button",D="cancel-modal-button",$="accept-modal-button",y="left-icon-modal-button",E="open-modal-button",L="close-modal-icon-button",S="error-close-icon-button",R="multi-select-apply-button",A="multi-select-clear-button",x="multi-select-left-button",Y="header-icon-button";var T,O;!function(t){t.RED="red",t.YELLOW="yellow",t.BLUE="blue",t.GREEN="green",t.WHITE="white",t.CUSTOM="custom"}(T||(T={})),function(t){t.COMPLETE="complete",t.ACTIVE="active",t.INACTIVE="inactive",t.VISITED="visited"}(O||(O={}))},"4Pza":function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i});var r=n("tzaC"),i=Object(r.b)(function(t,e){t.exports=function(){var t=6e4,e=36e5,n="millisecond",r="second",i="minute",o="hour",u="day",a="week",s="month",c="quarter",d="year",f="date",l="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,s),o=n-i<0,u=e.clone().add(r+(o?-1:1),s);return+(-(r+(n-i)/(o?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:s,y:d,w:a,d:u,D:f,h:o,m:i,s:r,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",M={};M[w]=v;var b="$isDayjsObject",D=function(t){return t instanceof L||!(!t||!t[b])},$=function t(e,n,r){var i;if(!e)return w;if("string"==typeof e){var o=e.toLowerCase();M[o]&&(i=o),n&&(M[o]=n,i=o);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;M[a]=e,i=a}return!r&&i&&(w=i),i||!r&&w},y=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new L(n)},E=p;E.l=$,E.i=D,E.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var L=function(){function v(t){this.$L=$(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[b]=!0}var g=v.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(E.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return E},g.isValid=function(){return!(this.$d.toString()===l)},g.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return y(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<y(t)},g.$g=function(t,e,n){return E.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,c=!!E.u(e)||e,l=E.p(t),h=function(t,e){var r=E.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?r:r.endOf(u)},m=function(t,e){return E.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,g=this.$M,p=this.$D,w="set"+(this.$u?"UTC":"");switch(l){case d:return c?h(1,0):h(31,11);case s:return c?h(1,g):h(0,g+1);case a:var M=this.$locale().weekStart||0,b=(v<M?v+7:v)-M;return h(c?p-b:p+(6-b),g);case u:case f:return m(w+"Hours",0);case o:return m(w+"Minutes",1);case i:return m(w+"Seconds",2);case r:return m(w+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var a,c=E.p(t),l="set"+(this.$u?"UTC":""),h=(a={},a[u]=l+"Date",a[f]=l+"Date",a[s]=l+"Month",a[d]=l+"FullYear",a[o]=l+"Hours",a[i]=l+"Minutes",a[r]=l+"Seconds",a[n]=l+"Milliseconds",a)[c],m=c===u?this.$D+(e-this.$W):e;if(c===s||c===d){var v=this.clone().set(f,1);v.$d[h](m),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[E.p(t)]()},g.add=function(n,c){var f,l=this;n=Number(n);var h=E.p(c),m=function(t){var e=y(l);return E.w(e.date(e.date()+Math.round(t*n)),l)};if(h===s)return this.set(s,this.$M+n);if(h===d)return this.set(d,this.$y+n);if(h===u)return m(1);if(h===a)return m(7);var v=(f={},f[i]=t,f[o]=e,f[r]=1e3,f)[h]||1,g=this.$d.getTime()+n*v;return E.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,u=this.$m,a=this.$M,s=n.weekdays,c=n.months,d=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},f=function(t){return E.s(o%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return E.s(e.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return d(n.monthsShort,a,c,3);case"MMMM":return d(c,a);case"D":return e.$D;case"DD":return E.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,s,2);case"ddd":return d(n.weekdaysShort,e.$W,s,3);case"dddd":return s[e.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return h(o,u,!0);case"A":return h(o,u,!1);case"m":return String(u);case"mm":return E.s(u,2,"0");case"s":return String(e.$s);case"ss":return E.s(e.$s,2,"0");case"SSS":return E.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")})},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,f,l){var h,m=this,v=E.p(f),g=y(n),p=(g.utcOffset()-this.utcOffset())*t,w=this-g,M=function(){return E.m(m,g)};switch(v){case d:h=M()/12;break;case s:h=M();break;case c:h=M()/3;break;case a:h=(w-p)/6048e5;break;case u:h=(w-p)/864e5;break;case o:h=w/e;break;case i:h=w/t;break;case r:h=w/1e3;break;default:h=w}return l?h:E.a(h)},g.daysInMonth=function(){return this.endOf(s).$D},g.$locale=function(){return M[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=$(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return E.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},v}(),S=L.prototype;return y.prototype=S,[["$ms",n],["$s",r],["$m",i],["$H",o],["$W",u],["$M",s],["$y",d],["$D",f]].forEach(function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),y.extend=function(t,e){return t.$i||(t(e,L,y),t.$i=!0),y},y.locale=$,y.isDayjs=D,y.unix=function(t){return y(1e3*t)},y.en=M[w],y.Ls=M,y.p={},y}()}),o=Object(r.b)(function(t,e){t.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,u={},a=function(t){return(t=+t)+(t>68?1900:2e3)},s=function(t){return function(e){this[t]=+e}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],d=function(t){var e=u[t];return e&&(e.indexOf?e:e.s.concat(e.f))},f=function(t,e){var n,r=u.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},l={A:[o,function(t){this.afternoon=f(t,!1)}],a:[o,function(t){this.afternoon=f(t,!0)}],Q:[n,function(t){this.month=3*(t-1)+1}],S:[n,function(t){this.milliseconds=100*+t}],SS:[r,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[i,s("seconds")],ss:[i,s("seconds")],m:[i,s("minutes")],mm:[i,s("minutes")],H:[i,s("hours")],h:[i,s("hours")],HH:[i,s("hours")],hh:[i,s("hours")],D:[i,s("day")],DD:[r,s("day")],Do:[o,function(t){var e=u.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],w:[i,s("week")],ww:[r,s("week")],M:[i,s("month")],MM:[r,s("month")],MMM:[o,function(t){var e=d("months"),n=(d("monthsShort")||e.map(function(t){return t.slice(0,3)})).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(t){var e=d("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(t){this.year=a(t)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c};function h(n){var r;r=u&&u.formats;for(var i=(n=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(e,n,i){var o=i&&i.toUpperCase();return n||r[i]||t[i]||r[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,e,n){return e||n.slice(1)})})).match(e),o=i.length,a=0;a<o;a+=1){var s=i[a],c=l[s],d=c&&c[1];i[a]=d?{regex:c&&c[0],parser:d}:s.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<o;n+=1){var u=i[n];if("string"==typeof u)r+=u.length;else{var a=u.regex,s=u.parser,c=t.slice(r),d=a.exec(c)[0];s.call(e,d),t=t.replace(d,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,o=t.args;this.$u=r;var a=o[1];if("string"==typeof a){var s=!0===o[2],c=!0===o[3],d=s||c,f=o[2];c&&(f=o[2]),u=this.$locale(),!s&&f&&(u=n.Ls[f]),this.$d=function(t,e,n,r){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var i=h(e)(t),o=i.year,u=i.month,a=i.day,s=i.hours,c=i.minutes,d=i.seconds,f=i.milliseconds,l=i.zone,m=i.week,v=new Date,g=a||(o||u?1:v.getDate()),p=o||v.getFullYear(),w=0;o&&!u||(w=u>0?u-1:v.getMonth());var M,b=s||0,D=c||0,$=d||0,y=f||0;return l?new Date(Date.UTC(p,w,g,b,D,$,y+60*l.offset*1e3)):n?new Date(Date.UTC(p,w,g,b,D,$,y)):(M=new Date(p,w,g,b,D,$,y),m&&(M=r(M).week(m).toDate()),M)}catch(t){return new Date("")}}(e,a,r,n),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),d&&e!=this.format(a)&&(this.$d=new Date("")),u={}}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){o[1]=a[m-1];var v=n.apply(this,o);if(v.isValid()){this.$d=v.$d,this.$L=v.$L,this.init();break}m===l&&(this.$d=new Date(""))}else i.call(this,t)}}}()})},"5kGd":function(t,e,n){"use strict";var r,i;n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i}),function(t){t.SOLID="solid",t.OUTLINE="outline",t.TEXT="text",t.ICON="icon"}(r||(r={})),function(t){t.LEFT="left",t.MIDDLE="middle",t.RIGHT="right"}(i||(i={}))},"7xcI":function(t,e,n){"use strict";var r;n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return f}),n.d(e,"e",function(){return s}),n.d(e,"f",function(){return d}),n.d(e,"g",function(){return c}),n.d(e,"h",function(){return i}),n.d(e,"i",function(){return o}),function(t){t.success="success",t.error="error",t.reset="reset",t.saving="saving"}(r||(r={}));const i={savedText:"Saved",savingText:"Saving"},o={bold:"bold",italic:"italic",underline:"underline",bullet:"bullet",ordered:"ordered",undo:"undo",redo:"redo",mathembed:"mathembed"},u={bold:"text-bold",italic:"text-italic",underline:"text-underline",mathembed:"math-palette",bullet:"bullet-list",ordered:"numbered-list",undo:"undo",redo:"redo"},a={bold:"Bold",italic:"Italic",underline:"Underline",mathembed:"Math Keypad",bullet:"Bulleted List",ordered:"Numbered List",undo:"Undo",redo:"Redo"},s=a,c=[{textFormat:["bold","italic","underline"]},{list:["bullet","ordered"]},{math:["mathembed"]},{undoRedo:["undo","redo"]}],d={regularViewPadding:"8px 16px 8px 16px",mobileViewPadding:"7px 5px 7px 5px",size:"regular"},f={defaultMathEditorTagName:"cel-rich-text-math-editor",defaultMathExpressionViewerTagName:"cel-rich-text-math-expression-viewer",defaultMathExpressionMathQuillViewerTagName:"cel-rich-text-math-expression-mathquill-viewer",mathExpressionEmbedViewerClassName:"math-expression-embed-viewer",span:"span",dataset:"dataset",disabled:"disabled",reviwModeAriaLabel:"You are currently in review mode, please select the edit button to access the contents"}},"TFF/":function(t,e,n){"use strict";function r(t,e){return t&&t.length>e&&t.length+e>3?t.slice(0,e)+"...":t}n.d(e,"a",function(){return r})},UVxy:function(t,e,n){"use strict";var r,i,o,u;n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return o}),function(t){t.PRIMARY="primary",t.PRIMARY_SHADE="primary-shade",t.BLACK="black",t.WHITE="white",t.PLUM="plum",t.ERROR="error",t.ERROR_SHADE="error-shade",t.NOTIFICATION="notification",t.CONFIRM="confirm",t.DISABLED="disabled",t.GRAYDARKER="gray-darker",t.GRAYDUSTY="gray-dusty",t.GRAYLIGHT="gray-light",t.GRAYLIGHTER="gray-lighter",t.GRAY="gray",t.FEEDBACKGREEN="feedback-green"}(r||(r={})),function(t){t.CUSTOM="custom",t.XSMALL="xsmall",t.XXSMALL="xxsmall",t.SMALL="small",t.REGULAR="regular",t.MEDIUM="medium",t.MLARGE="mlarge",t.LARGE="large",t.XLARGE="xlarge",t.XXLARGE="xxlarge",t.XXXLARGE="xxlarge"}(i||(i={})),function(t){t.MENU="menu",t.CLOSE="close"}(o||(o={})),function(t){t.SMALL="small",t.MEDIUM="medium",t.LARGE="large"}(u||(u={}))},oVVw:function(t,e,n){"use strict";var r;n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),function(t){t.DESKTOP="d",t.TABLET="t",t.MOBILE="m"}(r||(r={}));const i={disableHamburger:!1,disableSearch:!1,disableBookmark:!1,disableTextsize:!1,disableSettings:!1},o="avatar image"},v90L:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("UVxy");const i=t=>{switch(t){case r.a.PRIMARY:case r.a.BLACK:return r.a.PRIMARY_SHADE;case r.a.ERROR:return r.a.ERROR_SHADE;case r.a.GRAYDARKER:return r.a.PRIMARY_SHADE;default:return t}}},y5zg:function(t,e,n){"use strict";var r;n.d(e,"a",function(){return r}),function(t){t.LEFT="left",t.RIGHT="right"}(r||(r={}))},z81R:function(t,e,n){"use strict";n.d(e,"a",function(){return h}),n.d(e,"b",function(){return f}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return u}),n.d(e,"f",function(){return l}),n.d(e,"g",function(){return d}),n.d(e,"h",function(){return c}),n.d(e,"i",function(){return i}),n.d(e,"j",function(){return s});var r=n("1wBy");function i(t){t.forEach(function(t){t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth?t.setAttribute("title",t.textContent):t.removeAttribute("title")})}const o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!=t):[])(t).forEach(t=>e[t]=!0),e},u=t=>t?{"cel-color":!0,[`cel-color-${t}`]:!0}:null,a=t=>{let e=0,n=0,r=0,i=0;function o(o){(o=o||window.event).preventDefault(),e=r-o.clientX,n=i-o.clientY,r=o.clientX,i=o.clientY,t.style.top=t.offsetTop-n+"px",t.style.left=t.offsetLeft-e+"px"}function u(){t.onmouseup=null,t.onmousemove=null}t.onmousedown=function(e){(e=e||window.event).preventDefault(),r=e.clientX,i=e.clientY,t.onmouseup=u,t.onmousemove=o}},s=(t,e,n)=>{const r=n.tagName.toLowerCase(),[i,o]=r.split(e);return i+t+o},c=(t,e)=>{switch(t.key){case r.s:case r.r:void 0!==e.arrowUpDown&&e.arrowUpDown(t);break;case r.q:case r.a:void 0!==e.arrowLeftRight&&e.arrowLeftRight(t);break;case r.p:case r.o:case r.m:void 0!==e.spaceEnter&&e.spaceEnter();break;case r.d:void 0!==e.escape&&e.escape();case r.n:void 0!==e.tab&&e.tab()}},d=t=>{const e={r:255,g:255,b:255},n=document.createElement("canvas"),r=n.getContext&&n.getContext("2d");let i,o,u,a={r:0,g:0,b:0};if(!r)return e;u=n.height=t.naturalHeight||t.offsetHeight||t.height,o=n.width=t.naturalWidth||t.offsetWidth||t.width,r.drawImage(t,0,0);try{i=r.getImageData(0,0,o,u)}catch(s){return e}return a.r=i.data[0],a.g=i.data[1],a.b=i.data[2],a};function f(t,e,n,i){var o,u,a,s,c;switch(t.key){case r.d:void 0!==i.escape&&i.escape(t);break;case r.n:const d=(null===(o=e.shadowRoot)||void 0===o?void 0:o.activeElement)||(null===(a=null===(u=document.activeElement.shadowRoot)||void 0===u?void 0:u.activeElement.shadowRoot)||void 0===a?void 0:a.activeElement)||(null===(s=document.activeElement.shadowRoot)||void 0===s?void 0:s.activeElement)||document.activeElement;t.shiftKey||d!==n[n.length-1]?t.shiftKey&&d===n[0]&&(t.preventDefault(),(c=n[n.length-1]).shadowRoot?c.shadowRoot.querySelector("button").focus():c.focus(),void 0!==i.shiftTab&&i.shiftTab(t)):(t.preventDefault(),l(n[0]),void 0!==i.tab&&i.tab(t))}}function l(t){t.shadowRoot?t.shadowRoot.querySelector("button").focus():t.focus()}function h(t){return t.shadowRoot?t.shadowRoot.querySelectorAll(".interactive"):t.querySelectorAll(".interactive")}}}]);