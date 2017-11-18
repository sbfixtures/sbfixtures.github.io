!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});jQuery.noConflict();
var tm_pb_custom = {
  "ajaxurl":"javascript:void(0);",
  "images_uri":"/assets/",
  "builder_images_uri":"/assets/",
  "tm_frontend_nonce":"a489a2536f",
  "subscription_failed":"Please, check the fields below to make sure you entered the correct information.",
  "fill_message":"Please, fill in the following fields:",
  "contact_error_message":"Please, fix the following errors:",
  "invalid":"Invalid email",
  "captcha":"Captcha",
  "prev":"Prev",
  "previous":"Previous",
  "next":"Next",
  "wrong_captcha":"You entered the wrong number in captcha.",
  "is_builder_plugin_used":"1",
  "is_divi_theme_used":"",
  "widget_search_selector":".widget_search"
  };

var prima = {
  "ajaxurl":"javascript:void(0);",
  "labels": {
    "totop_button":"Top",
    "hidden_menu_items_title":"More"
  }
};

var tm_pg_options = {
  "tm_pg_first_activated":"1",
  "nonce":"3be19291da",
  "site_url":"/",
  "wp_version":"4.7.7",
  "media_url":"/assets",
  "action":"tm_pg_action",
  "post_types":{ "album":"tm_pg_album", "set":"tm_pg_set", "gallery":"tm_pg_gallery", "image":"attachment" },
  "tax_names":{ "category":"tm_pg_category", "tag":"tm_pg_post_tag" },
  "ajax_url":"/",
  "grid_thumb": {
    "grid-medium": {
      "width":"400",
      "height":"300",
      "type":"grid"
    },
    "grid-large":{
      "width":"900",
      "height":"675",
      "type":"grid"
    },
    "grid-small": {
      "width":"475",
      "height":"360",
      "type":"grid"
    }
  },
  "back_img_url":"/assets/back.png"
};

var wp_load_style = [
  "jquery-swiper.css",
  "cherry-services.css",
  "cherry-services-theme.css",
  "cherry-services-grid.css",
  "font-awesome.css",
  "contact-form-7.css",
  "tm-pg-font-awesome.css",
  "tm-pg-material-icons.css",
  "tm-pg-fontello.css",
  "tm-pg-lightgallery.css",
  "tm-pg-style-frontend.css",
  "tm-pg-grid.css",
  "prima-theme-style.css",
  "cherry-handler-css.css",
  "cherry-google-fonts.css",
  "tm-builder-swiper.css",
  "tm-builder-modules-grid.css",
  "tm-builder-modules-style.css",
  "magnific-popup.css"
];
var wp_load_script = [
  "cherry-js-core.js",
  "tm-builder-modules-global-functions-script.js",
  "jquery-swiper.js",
  "contact-form-7.js",
  "prima-theme-script.js",
  "cherry-handler-js.js",
  "cherry-post-formats.js",
  "google-maps-api.js",
  "divi-fitvids.js",
  "waypoints.js",
  "magnific-popup.js",
  "tm-jquery-touch-mobile.js",
  "tm-builder-frontend-closest-descendent.js",
  "tm-builder-frontend-reverse.js",
  "tm-builder-frontend-simple-carousel.js",
  "tm-builder-frontend-simple-slider.js",
  "tm-builder-frontend-easy-pie-chart.js",
  "tm-builder-frontend-tm-hash.js",
  "tm-builder-modules-script.js",
  "tm-builder-swiper.js",
  "fittext.js"
];
var cherry_ajax = "c28c536179";
var ui_init_object = { "auto_init":"false", "targets":[] };
(function($){window.tm_pb_smooth_scroll=function($target,$top_section,speed,easing){var $window_width=$(window).width();if($('body').hasClass('tm_fixed_nav')&&$window_width>980){$menu_offset=$('#top-header').outerHeight()+ $('#main-header').outerHeight()- 1;}else{$menu_offset=-1;}
if($('#wpadminbar').length&&$window_width>600){$menu_offset+=$('#wpadminbar').outerHeight();}
if($top_section){$scroll_position=0;}else{$scroll_position=$target.offset().top- $menu_offset;}
if(typeof easing==='undefined'){easing='swing';}
$('html, body').animate({scrollTop:$scroll_position},speed,easing);}
window.tm_fix_video_wmode=function(video_wrapper){$(video_wrapper).each(function(){if($(this).find('iframe').length){var $this_el=$(this).find('iframe'),src_attr=$this_el.attr('src'),wmode_character=src_attr.indexOf('?')==-1?'?':'&amp;',this_src=src_attr+ wmode_character+'wmode=opaque';$this_el.attr('src',this_src);}});}
window.tm_pb_form_placeholders_init=function($form){$form.find('input:text, textarea').each(function(index,domEle){var $tm_current_input=jQuery(domEle),$tm_comment_label=$tm_current_input.siblings('label'),tm_comment_label_value=$tm_current_input.siblings('label').text();if($tm_comment_label.length){$tm_comment_label.hide();if($tm_current_input.siblings('span.required')){tm_comment_label_value+=$tm_current_input.siblings('span.required').text();$tm_current_input.siblings('span.required').hide();}
$tm_current_input.val(tm_comment_label_value);}}).bind('focus',function(){var tm_label_text=jQuery(this).siblings('label').text();if(jQuery(this).siblings('span.required').length)tm_label_text+=jQuery(this).siblings('span.required').text();if(jQuery(this).val()===tm_label_text)jQuery(this).val("");}).bind('blur',function(){var tm_label_text=jQuery(this).siblings('label').text();if(jQuery(this).siblings('span.required').length)tm_label_text+=jQuery(this).siblings('span.required').text();if(jQuery(this).val()==="")jQuery(this).val(tm_label_text);});}
window.tm_duplicate_menu=function(menu,append_to,menu_id,menu_class,menu_click_event){append_to.each(function(){var $this_menu=$(this),$cloned_nav;if(''!==menu){menu.clone().attr('id',menu_id).removeClass().attr('class',menu_class).appendTo($this_menu);}
$cloned_nav=$this_menu.find('> ul');$cloned_nav.find('.menu_slide').remove();$cloned_nav.find('li:first').addClass('tm_first_mobile_item');$cloned_nav.find('a').on('click',function(){$this_menu.trigger('click');});if('no_click_event'!==menu_click_event){$this_menu.on('click','.mobile_menu_bar',function(){if($this_menu.hasClass('closed')){$this_menu.removeClass('closed').addClass('opened');$cloned_nav.stop().slideDown(500);}else{$this_menu.removeClass('opened').addClass('closed');$cloned_nav.stop().slideUp(500);}
return false;});}});$('#mobile_menu .centered-inline-logo-wrap').remove();}
window.tm_pb_remove_placeholder_text=function($form){$form.find('input:text, textarea').each(function(index,domEle){var $tm_current_input=jQuery(domEle),$tm_label=$tm_current_input.siblings('label'),tm_label_value=$tm_current_input.siblings('label').text();if($tm_label.length&&$tm_label.is(':hidden')){if($tm_label.text()==$tm_current_input.val())
$tm_current_input.val('');}});}
window.tm_fix_fullscreen_section=function(){var $tm_window=$(window);$('section.tm_pb_fullscreen').each(function(){var $this_section=$(this);$.proxy(tm_calc_fullscreen_section,$this_section)();$tm_window.on('resize',$.proxy(tm_calc_fullscreen_section,$this_section));});}})(jQuery)
;
(function($){'use strict';if(typeof _wpcf7=='undefined'||_wpcf7===null){return;}
_wpcf7=$.extend({cached:0},_wpcf7);$.fn.wpcf7InitForm=function(){this.ajaxForm({beforeSubmit:function(arr,$form,options){$form.wpcf7ClearResponseOutput();$form.find('[aria-invalid]').attr('aria-invalid','false');$form.find('.ajax-loader').addClass('is-active');return true;},beforeSerialize:function($form,options){$form.find('[placeholder].placeheld').each(function(i,n){$(n).val('');});return true;},data:{'_wpcf7_is_ajax_call':1},dataType:'json',success:$.wpcf7AjaxSuccess,error:function(xhr,status,error,$form){var e=$('<div class="ajax-error"></div>').text(error.message);$form.after(e);}});if(_wpcf7.cached){this.wpcf7OnloadRefill();}
this.wpcf7ToggleSubmit();this.find('.wpcf7-submit').wpcf7AjaxLoader();this.find('.wpcf7-acceptance').click(function(){$(this).closest('form').wpcf7ToggleSubmit();});this.find('.wpcf7-exclusive-checkbox').wpcf7ExclusiveCheckbox();this.find('.wpcf7-list-item.has-free-text').wpcf7ToggleCheckboxFreetext();this.find('[placeholder]').wpcf7Placeholder();if(_wpcf7.jqueryUi&&!_wpcf7.supportHtml5.date){this.find('input.wpcf7-date[type="date"]').each(function(){$(this).datepicker({dateFormat:'yy-mm-dd',minDate:new Date($(this).attr('min')),maxDate:new Date($(this).attr('max'))});});}
if(_wpcf7.jqueryUi&&!_wpcf7.supportHtml5.number){this.find('input.wpcf7-number[type="number"]').each(function(){$(this).spinner({min:$(this).attr('min'),max:$(this).attr('max'),step:$(this).attr('step')});});}
this.find('.wpcf7-character-count').wpcf7CharacterCount();this.find('.wpcf7-validates-as-url').change(function(){$(this).wpcf7NormalizeUrl();});this.find('.wpcf7-recaptcha').wpcf7Recaptcha();};$.wpcf7AjaxSuccess=function(data,status,xhr,$form){if(!$.isPlainObject(data)||$.isEmptyObject(data)){return;}
var $responseOutput=$form.find('div.wpcf7-response-output');$form.wpcf7ClearResponseOutput();$form.find('.wpcf7-form-control').removeClass('wpcf7-not-valid');$form.removeClass('invalid spam sent failed');if(data.captcha){$form.wpcf7RefillCaptcha(data.captcha);}
if(data.quiz){$form.wpcf7RefillQuiz(data.quiz);}
if(data.invalids){$.each(data.invalids,function(i,n){$form.find(n.into).wpcf7NotValidTip(n.message);$form.find(n.into).find('.wpcf7-form-control').addClass('wpcf7-not-valid');$form.find(n.into).find('[aria-invalid]').attr('aria-invalid','true');});$responseOutput.addClass('wpcf7-validation-errors');$form.addClass('invalid');$(data.into).trigger('wpcf7:invalid');$(data.into).trigger('invalid.wpcf7');}else if(1==data.spam){$form.find('[name="g-recaptcha-response"]').each(function(){if(''==$(this).val()){var $recaptcha=$(this).closest('.wpcf7-form-control-wrap');$recaptcha.wpcf7NotValidTip(_wpcf7.recaptcha.messages.empty);}});$responseOutput.addClass('wpcf7-spam-blocked');$form.addClass('spam');$(data.into).trigger('wpcf7:spam');$(data.into).trigger('spam.wpcf7');}else if(1==data.mailSent){$responseOutput.addClass('wpcf7-mail-sent-ok');$form.addClass('sent');if(data.onSentOk){$.each(data.onSentOk,function(i,n){eval(n)});}
$(data.into).trigger('wpcf7:mailsent');$(data.into).trigger('mailsent.wpcf7');}else{$responseOutput.addClass('wpcf7-mail-sent-ng');$form.addClass('failed');$(data.into).trigger('wpcf7:mailfailed');$(data.into).trigger('mailfailed.wpcf7');}
if(data.onSubmit){$.each(data.onSubmit,function(i,n){eval(n)});}
$(data.into).trigger('wpcf7:submit');$(data.into).trigger('submit.wpcf7');if(1==data.mailSent){$form.resetForm();}
$form.find('[placeholder].placeheld').each(function(i,n){$(n).val($(n).attr('placeholder'));});$responseOutput.append(data.message).slideDown('fast');$responseOutput.attr('role','alert');$.wpcf7UpdateScreenReaderResponse($form,data);};$.fn.wpcf7ExclusiveCheckbox=function(){return this.find('input:checkbox').click(function(){var name=$(this).attr('name');$(this).closest('form').find('input:checkbox[name="'+ name+'"]').not(this).prop('checked',false);});};$.fn.wpcf7Placeholder=function(){if(_wpcf7.supportHtml5.placeholder){return this;}
return this.each(function(){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld');$(this).focus(function(){if($(this).hasClass('placeheld'))
$(this).val('').removeClass('placeheld');});$(this).blur(function(){if(''==$(this).val()){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld');}});});};$.fn.wpcf7AjaxLoader=function(){return this.each(function(){$(this).after('<span class="ajax-loader"></span>');});};$.fn.wpcf7ToggleSubmit=function(){return this.each(function(){var form=$(this);if(this.tagName.toLowerCase()!='form'){form=$(this).find('form').first();}
if(form.hasClass('wpcf7-acceptance-as-validation')){return;}
var submit=form.find('input:submit');if(!submit.length)return;var acceptances=form.find('input:checkbox.wpcf7-acceptance');if(!acceptances.length)return;submit.removeAttr('disabled');acceptances.each(function(i,n){n=$(n);if(n.hasClass('wpcf7-invert')&&n.is(':checked')||!n.hasClass('wpcf7-invert')&&!n.is(':checked')){submit.attr('disabled','disabled');}});});};$.fn.wpcf7ToggleCheckboxFreetext=function(){return this.each(function(){var $wrap=$(this).closest('.wpcf7-form-control');if($(this).find(':checkbox, :radio').is(':checked')){$(this).find(':input.wpcf7-free-text').prop('disabled',false);}else{$(this).find(':input.wpcf7-free-text').prop('disabled',true);}
$wrap.find(':checkbox, :radio').change(function(){var $cb=$('.has-free-text',$wrap).find(':checkbox, :radio');var $freetext=$(':input.wpcf7-free-text',$wrap);if($cb.is(':checked')){$freetext.prop('disabled',false).focus();}else{$freetext.prop('disabled',true);}});});};$.fn.wpcf7CharacterCount=function(){return this.each(function(){var $count=$(this);var name=$count.attr('data-target-name');var down=$count.hasClass('down');var starting=parseInt($count.attr('data-starting-value'),10);var maximum=parseInt($count.attr('data-maximum-value'),10);var minimum=parseInt($count.attr('data-minimum-value'),10);var updateCount=function($target){var length=$target.val().length;var count=down?starting- length:length;$count.attr('data-current-value',count);$count.text(count);if(maximum&&maximum<length){$count.addClass('too-long');}else{$count.removeClass('too-long');}
if(minimum&&length<minimum){$count.addClass('too-short');}else{$count.removeClass('too-short');}};$count.closest('form').find(':input[name="'+ name+'"]').each(function(){updateCount($(this));$(this).keyup(function(){updateCount($(this));});});});};$.fn.wpcf7NormalizeUrl=function(){return this.each(function(){var val=$.trim($(this).val());if(val&&!val.match(/^[a-z][a-z0-9.+-]*:/i)){val=val.replace(/^\/+/,'');val='http://'+ val;}
$(this).val(val);});};$.fn.wpcf7NotValidTip=function(message){return this.each(function(){var $into=$(this);$into.find('span.wpcf7-not-valid-tip').remove();$into.append('<span role="alert" class="wpcf7-not-valid-tip">'+ message+'</span>');if($into.is('.use-floating-validation-tip *')){$('.wpcf7-not-valid-tip',$into).mouseover(function(){$(this).wpcf7FadeOut();});$(':input',$into).focus(function(){$('.wpcf7-not-valid-tip',$into).not(':hidden').wpcf7FadeOut();});}});};$.fn.wpcf7FadeOut=function(){return this.each(function(){$(this).animate({opacity:0},'fast',function(){$(this).css({'z-index':-100});});});};$.fn.wpcf7OnloadRefill=function(){return this.each(function(){var url=$(this).attr('action');if(0<url.indexOf('#')){url=url.substr(0,url.indexOf('#'));}
var id=$(this).find('input[name="_wpcf7"]').val();var unitTag=$(this).find('input[name="_wpcf7_unit_tag"]').val();$.getJSON(url,{_wpcf7_is_ajax_call:1,_wpcf7:id,_wpcf7_request_ver:$.now()},function(data){if(data&&data.captcha){$('#'+ unitTag).wpcf7RefillCaptcha(data.captcha);}
if(data&&data.quiz){$('#'+ unitTag).wpcf7RefillQuiz(data.quiz);}});});};$.fn.wpcf7RefillCaptcha=function(captcha){return this.each(function(){var form=$(this);$.each(captcha,function(i,n){form.find(':input[name="'+ i+'"]').clearFields();form.find('img.wpcf7-captcha-'+ i).attr('src',n);var match=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);form.find('input:hidden[name="_wpcf7_captcha_challenge_'+ i+'"]').attr('value',match[1]);});});};$.fn.wpcf7RefillQuiz=function(quiz){return this.each(function(){var form=$(this);$.each(quiz,function(i,n){form.find(':input[name="'+ i+'"]').clearFields();form.find(':input[name="'+ i+'"]').siblings('span.wpcf7-quiz-label').text(n[0]);form.find('input:hidden[name="_wpcf7_quiz_answer_'+ i+'"]').attr('value',n[1]);});});};$.fn.wpcf7ClearResponseOutput=function(){return this.each(function(){$(this).find('div.wpcf7-response-output').hide().empty().removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked').removeAttr('role');$(this).find('span.wpcf7-not-valid-tip').remove();$(this).find('.ajax-loader').removeClass('is-active');});};$.fn.wpcf7Recaptcha=function(){return this.each(function(){var events='wpcf7:spam wpcf7:mailsent wpcf7:mailfailed';$(this).closest('div.wpcf7').on(events,function(e){if(recaptchaWidgets&&grecaptcha){$.each(recaptchaWidgets,function(index,value){grecaptcha.reset(value);});}});});};$.wpcf7UpdateScreenReaderResponse=function($form,data){$('.wpcf7 .screen-reader-response').html('').attr('role','');if(data.message){var $response=$form.siblings('.screen-reader-response').first();$response.append(data.message);if(data.invalids){var $invalids=$('<ul></ul>');$.each(data.invalids,function(i,n){if(n.idref){var $li=$('<li></li>').append($('<a></a>').attr('href','#'+ n.idref).append(n.message));}else{var $li=$('<li></li>').append(n.message);}
$invalids.append($li);});$response.append($invalids);}
$response.attr('role','alert').focus();}};$.wpcf7SupportHtml5=function(){var features={};var input=document.createElement('input');features.placeholder='placeholder'in input;var inputTypes=['email','url','tel','number','range','date'];$.each(inputTypes,function(index,value){input.setAttribute('type',value);features[value]=input.type!=='text';});return features;};$(function(){_wpcf7.supportHtml5=$.wpcf7SupportHtml5();$('div.wpcf7 > form').wpcf7InitForm();});})(jQuery);
!function(a){a.fn.hoverIntent=function(b,c,d){var e={interval:100,sensitivity:6,timeout:0};e="object"==typeof b?a.extend(e,b):a.isFunction(c)?a.extend(e,{over:b,out:c,selector:d}):a.extend(e,{over:b,out:b,selector:c});var f,g,h,i,j=function(a){f=a.pageX,g=a.pageY},k=function(b,c){return c.hoverIntent_t=clearTimeout(c.hoverIntent_t),Math.sqrt((h-f)*(h-f)+(i-g)*(i-g))<e.sensitivity?(a(c).off("mousemove.hoverIntent",j),c.hoverIntent_s=!0,e.over.apply(c,[b])):(h=f,i=g,c.hoverIntent_t=setTimeout(function(){k(b,c)},e.interval),void 0)},l=function(a,b){return b.hoverIntent_t=clearTimeout(b.hoverIntent_t),b.hoverIntent_s=!1,e.out.apply(b,[a])},m=function(b){var c=a.extend({},b),d=this;d.hoverIntent_t&&(d.hoverIntent_t=clearTimeout(d.hoverIntent_t)),"mouseenter"===b.type?(h=c.pageX,i=c.pageY,a(d).on("mousemove.hoverIntent",j),d.hoverIntent_s||(d.hoverIntent_t=setTimeout(function(){k(c,d)},e.interval))):(a(d).off("mousemove.hoverIntent",j),d.hoverIntent_s&&(d.hoverIntent_t=setTimeout(function(){l(c,d)},e.timeout)))};return this.on({"mouseenter.hoverIntent":m,"mouseleave.hoverIntent":m},e.selector)}}(jQuery);
/**
 * super-guacamole - Super Guacamole! It's a script that hides your menu items if they don't fit the menu width.
 * @version v1.1.5
 * @link https://github.com/dkfiresky/super-guacamole#readme
 * @license GPL-3.0+
*/

!function(t,e){function n(e){var n,i,r=this;n={id:"",href:"",title:"&middot;&middot;&middot;",children:{},templates:{},container:null},i=t.extend(n,e),r.id=i.id,r.href=i.href,r.title=i.title,r.children=i.children,r.templates=i.templates,r.$container=i.container,r.node=null,r.attachedNode=null,r.options={},r.visible=!0}var i={menu:'<li class="%1$s"><a href="%2$s">%3$s</a>%4$s</li>',child_wrap:"<ul>%s</ul>",child:'<li class="%1$s" id="%5$s"><a href="%2$s">%3$s</a><ul class="sub-menu">%4$s</ul></li>'};n.prototype.set=function(t){if(!1==t instanceof n)throw new Error("Invalid argument type");return this.children[t.id]=t,this},n.prototype.push=function(t){return this.set(t)},n.prototype.get=function(t){var e=null;return this.map(t,function(t,n){return e=n,n}),e},n.prototype.map=function(t,e,n){var i={id:t},r=this;return"string"!=typeof t&&(i=t),n=n||this.children,0>=n.length?i:(Object.keys(n).forEach(function(t){child=n[t],i.id===child.id?n[i.id]=e(child):child.children&&0<Object.keys(child.children).length&&(i=r.map(i,e,child.children))}),i)},n.prototype.has=function(t){return e!==this.children[t]},n.prototype.isVisible=function(){return this.visible},n.prototype.forEach=function(t){return this.children.forEach(t)},n.prototype.countVisibleAttachedNodes=function(){var e=this,n=-1;return Object.keys(e.children).forEach(function(i){t(e.children[i].getAttachedNode()).attr("hidden")||n++}),n},n.prototype.countVisibleNodes=function(){var e,n=this,i=0;return Object.keys(n.children).forEach(function(r){e=n.children[r],t(e.getNode()).attr("hidden")||i++}),i},n.prototype.countVisible=function(){var t=this,e=0;return Object.keys(t.children).forEach(function(n){t.children[n].isVisible()&&e++}),e},n.prototype.getNode=function(){return this.node},n.prototype.getAttachedNode=function(){return this.attachedNode},n.prototype.setNode=function(t){this.node=t},n.prototype.attachNode=function(t){this.attachedNode=t},n.prototype.setOptions=function(t){return this.options=t,this},n.prototype.getOptions=function(){return this.options},n.prototype.render=function(){function e(t,n,i){var r=t.replace(new RegExp("\\%"+n+"\\$s","g"),i);return pipes={replace:function(t,n){return e(r,t,n),pipes},get:function(){return r}},pipes}function n(t,i,r){var o="",a=Object.keys(i.children);return r=r||!1,a.forEach(function(t){o+=n("super-guacamole__menu__child",i.children[t])}),e(r?d:c,1,t+" menu-item"+(0<a.length?" menu-item-has-children":"")).replace(2,i.href).replace(3,i.title).replace(4,0<a.length?o:"").replace(5,i.id).get().replace('<ul class="sub-menu"></ul>',"")}function i(t){var e="";return Object.keys(t).forEach(function(i){e+=n("super-guacamole__menu",t[i])}),e}var r,o=this,c=o.templates.menu,d=o.templates.child,a=o.$container;o.options.$menu;return 0<a.length&&(a.append(i([o])),a.find(".super-guacamole__menu__child").each(function(){$current_el=t(this),id=t(this).attr("id"),r=t("#"+id.replace("sg-","")),0<r.length&&o.map(id,function(t){return t.attachNode(r),t.setNode($current_el),t})})),this},n.extract=function(e){var i,r,o,c,d={};return e.each(function(e,a){i=t(a),r=i.find("a[href]:first"),o=new n({id:"sg-"+i.attr("id"),href:r.attr("href"),title:r.get(0).childNodes[0].data}),o.attachNode(i),-1<i.children(".sub-menu").length&&(subMenu=n.extract(i.children(".sub-menu").children(".menu-item")),Object.keys(subMenu).forEach(function(t){c=subMenu[t],o.set(c)})),d[o.id]=o}),d},n.prototype.attachedNodesFit=function(){var e,n,i=this,r=0,o=0,c=i.$container.outerWidth(!0)-i.$container.find(".super-guacamole__menu").outerWidth(!0)-(parseInt(t(".header-container > .container").css("padding-left"),10)+parseInt(t(".header-container > .container").css("padding-left"),10))/2;return Object.keys(i.children).forEach(function(r){n=i.children[r],$attachedNode=t(n.getAttachedNode()),e=t(n.getNode()),$attachedNode.removeAttr("hidden"),e.attr("hidden",!0)}),Object.keys(i.children).forEach(function(d){n=n=i.children[d],$attachedNode=t(n.getAttachedNode()),e=t(n.getNode()),o=$attachedNode.outerWidth(!0),o>0&&$attachedNode.data("width",o),r+=$attachedNode.data("width"),r>c&&($attachedNode.attr("hidden",!0),e.removeAttr("hidden"))}),!0},n.prototype.menuFit=function(e){var n,i=this,r={removeAttr:function(t,e){return t.removeAttr(e)},attr:function(t,e){return t.attr(e,!0)}},o="removeAttr",c=i.options.threshold||768;return e=e||!1,0===i.countVisibleNodes()&&(o="attr"),c-1>=t(window).width()&&(Object.keys(i.children).forEach(function(e){n=i.children[e],$attachedNode=t(n.getAttachedNode()),$node=t(n.getNode()),$attachedNode.removeAttr("hidden"),$node.attr("hidden",!0)}),o="attr"),e||r[o](i.$container.find(".super-guacamole__menu"),"hidden"),"removeAttr"===o},n.prototype.watch=function(e){function n(){r.attachedNodesFit(),r.menuFit()}function i(t){var e;return function(i){function r(){n(),timeout=null}e&&clearTimeout(e),e=setTimeout(r,t)}}var r=this;return(e=e||!1)?(n(),r):(t(window).on("resize",i(10)),t(window).on("orientationchange",i(10)),r)},t.fn.superGuacamole=function(e){var r,o,c,d,a=t(this),h=a.find("#main-menu");r={threshold:544,minChildren:3,childrenFilter:"li",menuTitle:"&middot;&middot;&middot;",menuUrl:"#",templates:i},o=t.extend(r,e),c=h.children(o.childrenFilter+":not(.super-guacamole__menu):not(.super-guacamole__menu__child)"),d=new n({title:o.menuTitle,href:o.menuUrl,templates:o.templates,children:n.extract(c),container:h}),o.$menu=h,window.mikebridge_sg=d,d.setOptions(o).render().watch(!0).watch()}}(jQuery);
!function(n){n.fn.UItoTop=function(o){var e={text:"To Top",min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1200,easingType:"linear"},t=n.extend(e,o),i="#"+t.containerID,a="#"+t.containerHoverID;n("body").append('<a href="#" id="'+t.containerID+'"><span>'+t.text+"</span></a>"),n(i).hide().on("click.UItoTop",function(){return n("html, body").animate({scrollTop:0},t.scrollSpeed,t.easingType),n("#"+t.containerHoverID,this).stop().animate({opacity:0},t.inDelay,t.easingType),!1}).hover(function(){n(a,this).stop().animate({opacity:1},600,"linear")},function(){n(a,this).stop().animate({opacity:0},700,"linear")}),n(window).scroll(function(){var o=n(window).scrollTop();"undefined"==typeof document.body.style.maxHeight&&n(i).css({position:"absolute",top:o+n(window).height()-50}),o>t.min?n(i).fadeIn(t.inDelay):n(i).fadeOut(t.Outdelay)})}}(jQuery);
var CherryJsCore = { utilites: { namespace: function(){} }, status: {}, variable: { $document: jQuery(), $window: jQuery() } };

(function($){"use strict";CherryJsCore.utilites.namespace('theme_script');CherryJsCore.theme_script={init:function(){var self=this;if(CherryJsCore.status.is_ready){self.document_ready_render(self);}else{CherryJsCore.variable.$document.on('ready',self.document_ready_render(self));}
if(CherryJsCore.status.on_load){self.window_load_render(self);}else{CherryJsCore.variable.$window.on('load',self.window_load_render(self));}},document_ready_render:function(self){var self=self;self.smart_slider_init(self);self.swiper_carousel_init(self);self.post_formats_custom_init(self);self.navbar_init(self);self.subscribe_init(self);self.search_trigger(self);self.main_menu(self,$('.main-navigation'));self.to_top_init(self);self.mobileMenuDropdown(self);self.sliderCheck(self);self.menuDropdownRediraction(self);},window_load_render:function(self){var self=self;self.page_preloader_init(self);},sliderCheck:function(self){var firstSection=$('.home .tm_pb_section_0').children('.tm_pb_row_0').find('.tm_pb_module'),header=$('.header-container'),home=$('.home');if((firstSection.hasClass('tm_pb_slider'))&&(!home.hasClass('position-one-right-sidebar'))&&(!home.hasClass('position-one-left-sidebar'))){header.css('position','absolute');}},menuDropdownRediraction:function(){var menuItem=$('#main-menu .menu-item'),classRediraction='toleft';menuItem.on("mouseover",function(){var subMenu=$(' > .sub-menu',this),flag;if(subMenu[0]){flag=$(window).width()<(subMenu.offset().left+ subMenu.outerWidth(true));if(flag){$(this).addClass(classRediraction);}else{setTimeout(function(){$(this).removeClass(classRediraction);},200);}}});},smart_slider_init:function(self){$('.prima-smartslider').each(function(){var slider=$(this),sliderId=slider.data('id'),sliderWidth=slider.data('width'),sliderHeight=slider.data('height'),sliderOrientation=slider.data('orientation'),slideDistance=slider.data('slide-distance'),slideDuration=slider.data('slide-duration'),sliderFade=slider.data('slide-fade'),sliderNavigation=slider.data('navigation'),sliderFadeNavigation=slider.data('fade-navigation'),sliderPagination=slider.data('pagination'),sliderAutoplay=slider.data('autoplay'),sliderFullScreen=slider.data('fullscreen'),sliderShuffle=slider.data('shuffle'),sliderLoop=slider.data('loop'),sliderThumbnailsArrows=slider.data('thumbnails-arrows'),sliderThumbnailsPosition=slider.data('thumbnails-position'),sliderThumbnailsWidth=slider.data('thumbnails-width'),sliderThumbnailsHeight=slider.data('thumbnails-height');if($('.smart-slider__items','#'+ sliderId).length>0){$('#'+ sliderId).sliderPro({width:sliderWidth,height:sliderHeight,orientation:sliderOrientation,slideDistance:slideDistance,slideAnimationDuration:slideDuration,fade:sliderFade,arrows:sliderNavigation,fadeArrows:sliderFadeNavigation,buttons:sliderPagination,autoplay:sliderAutoplay,fullScreen:sliderFullScreen,shuffle:sliderShuffle,loop:sliderLoop,waitForLayers:false,thumbnailArrows:sliderThumbnailsArrows,thumbnailsPosition:sliderThumbnailsPosition,thumbnailWidth:sliderThumbnailsWidth,thumbnailHeight:sliderThumbnailsHeight,init:function(){$(this).resize();},sliderResize:function(event){var thisSlider=$('#'+ sliderId),slides=$('.sp-slide',thisSlider);slides.each(function(){if($('.sp-title a',this).width()>$(this).width()){$(this).addClass('text-wrapped');}else{$(this).removeClass('text-wrapped');}});},breakpoints:{992:{height:parseFloat(sliderHeight)*0.75,},768:{height:parseFloat(sliderHeight)*0.5}}});}});},swiper_carousel_init:function(self){jQuery('.prima-carousel').each(function(){var swiper=null,uniqId=jQuery(this).data('uniq-id'),slidesPerView=parseFloat(jQuery(this).data('slides-per-view')),slidesPerGroup=parseFloat(jQuery(this).data('slides-per-group')),slidesPerColumn=parseFloat(jQuery(this).data('slides-per-column')),spaceBetweenSlides=parseFloat(jQuery(this).data('space-between-slides')),durationSpeed=parseFloat(jQuery(this).data('duration-speed')),swiperLoop=jQuery(this).data('swiper-loop'),freeMode=jQuery(this).data('free-mode'),grabCursor=jQuery(this).data('grab-cursor'),mouseWheel=jQuery(this).data('mouse-wheel'),breakpointsSettings={1200:{slidesPerView:Math.floor(slidesPerView*0.75),spaceBetween:Math.floor(spaceBetweenSlides*0.75)},992:{slidesPerView:Math.floor(slidesPerView*0.5),spaceBetween:Math.floor(spaceBetweenSlides*0.5)},769:{slidesPerView:(0!==Math.floor(slidesPerView*0.25))?Math.floor(slidesPerView*0.25):1},};if(1==slidesPerView){breakpointsSettings={}}
var swiper=new Swiper('#'+ uniqId,{slidesPerView:slidesPerView,slidesPerGroup:slidesPerGroup,slidesPerColumn:slidesPerColumn,spaceBetween:spaceBetweenSlides,speed:durationSpeed,loop:swiperLoop,freeMode:freeMode,grabCursor:grabCursor,mousewheelControl:mouseWheel,paginationClickable:true,nextButton:'#'+ uniqId+'-next',prevButton:'#'+ uniqId+'-prev',pagination:'#'+ uniqId+'-pagination',onInit:function(){$('#'+ uniqId+'-next').css({'display':'block'});$('#'+ uniqId+'-prev').css({'display':'block'});},breakpoints:breakpointsSettings});});},post_formats_custom_init:function(self){CherryJsCore.variable.$document.on('cherry-post-formats-custom-init',function(event){if('slider'!==event.object){return;}
var uniqId='#'+ event.item.attr('id'),swiper=new Swiper(uniqId,{pagination:uniqId+' .swiper-pagination',paginationClickable:true,nextButton:uniqId+' .swiper-button-next',prevButton:uniqId+' .swiper-button-prev',spaceBetween:30,onInit:function(){$(uniqId+' .swiper-button-next').css({'display':'block'});$(uniqId+' .swiper-button-prev').css({'display':'block'});},});event.item.data('initalized',true);});var items=[];$('.mini-gallery .post-thumbnail__link').on('click',function(event){event.preventDefault();$(this).parents('.mini-gallery').find('.post-gallery__slides > a[href]').each(function(){items.push({src:$(this).attr('href'),type:'image'});});$.magnificPopup.open({items:items,gallery:{enabled:true}});});},navbar_init:function(self){$(window).load(function(){var $navbar=$('.header-container .main-navigation');if(!$.isFunction(jQuery.fn.stickUp)||!$navbar.length){return!1;}
$navbar.stickUp({correctionSelector:'#wpadminbar',listenSelector:'.listenSelector',pseudo:true,active:true});CherryJsCore.variable.$document.trigger('scroll.stickUp');});},search_trigger:function(self){var toggle=$(".search__toggle"),container=$(".top-panel__wrap");function stopPropagation(event){event.stopPropagation();}
toggle.on("click",function(){container.toggleClass("srch-on");}).on('click touchstart touchend',stopPropagation);$(document).click(function(event){if($(event.target).closest(toggle).length||$(event.target).closest(container).length)
return;if(container.hasClass("srch-on"))
container.removeClass("srch-on");event.stopPropagation();});},subscribe_init:function(self){CherryJsCore.variable.$document.on('click','.subscribe-block__submit',function(event){event.preventDefault();var $this=$(this),form=$this.parents('form'),nonce=form.find('input[name="prima_subscribe"]').val(),mail_input=form.find('input[name="subscribe-mail"]'),mail=mail_input.val(),error=form.find('.subscribe-block__error'),success=form.find('.subscribe-block__success'),hidden='hidden';if(''==mail){mail_input.addClass('error');return!1;}
if($this.hasClass('processing')){return!1;}
$this.addClass('processing');error.empty();if(!error.hasClass(hidden)){error.addClass(hidden);}
if(!success.hasClass(hidden)){success.addClass(hidden);}
$.ajax({url:prima.ajaxurl,type:'post',dataType:'json',data:{action:'prima_subscribe',mail:mail,nonce:nonce},error:function(){$this.removeClass('processing');}}).done(function(response){$this.removeClass('processing');if(true===response.success){success.removeClass(hidden);mail_input.val('');return 1;}
error.removeClass(hidden).html(response.data.message);return!1;});})},main_menu:function(self,target){var menu=target,duration_timeout,closeSubs,hideSub,showSub,init,moreButtonText='&middot; &middot; &middot;',hasimg=false,hasicon=false,index=-1;if('undefined'!==typeof prima&&'undefined'!==typeof prima.labels&&'undefined'!==typeof prima.labels['hidden_menu_items_title']&&''!==prima.labels.hidden_menu_items_title){moreButtonText=prima.labels.hidden_menu_items_title;}
menu.superGuacamole({threshold:768,minChildren:3,childrenFilter:'.menu-item',menuTitle:moreButtonText,menuUrl:'#',templates:{menu:'<li id="%5$s" class="%1$s'+(hasimg?' super-guacamole__menu-with-image':'')+
(hasicon?' super-guacamole__menu-with-icon':'')+'"><a href="%2$s">%3$s</a><ul class="sub-menu">%4$s</ul></li>',child_wrap:'<ul class="%1$s">%2$s</ul>',child:'<li id="%5$s" class="%1$s"><a href="%2$s">%3$s</a><ul class="sub-menu">%4$s</ul></li>'}});closeSubs=function(){$('.menu-hover > a',menu).each(function(){hideSub($(this));});};hideSub=function(anchor){anchor.parent().removeData('index').removeClass('menu-hover').triggerHandler('close_menu');anchor.siblings('ul').addClass('in-transition');clearTimeout(duration_timeout);duration_timeout=setTimeout(function(){anchor.siblings('ul').removeClass('in-transition');},200);};showSub=function(anchor){var item=anchor.parent();item.siblings().find('.menu-hover').addBack('.menu-hover').children('a').each(function(){hideSub($(this),true);});item.addClass('menu-hover').triggerHandler('open_menu');};init=function(){var $mainNavigation=$('.main-navigation'),$mainMenu=$('ul.menu',$mainNavigation),$menuToggle=$('.menu-toggle',$mainNavigation),$liWithChildren=$('li.menu-item-has-children, li.page_item_has_children',menu),$self;$liWithChildren.hoverIntent({over:function(){showSub($(this).children('a'));},out:function(){if($(this).hasClass('menu-hover')){hideSub($(this).children('a'));}},timeout:300});var $parentNode,$self,index=-1;function doubleClickMenu($jqEvent){$self=$(this);if($self.index()!==parseInt($parentNode.data('index'),10)){$jqEvent.preventDefault();}
$parentNode.data('index',$self.index());}
if('ontouchend'in window){$mainNavigation.find('#main-menu li[class*="children"] > a').on('click',doubleClickMenu);CherryJsCore.variable.$document.on('touchend',function($jqEvent){$parentNode=$($jqEvent.target).parent();if($parentNode.hasClass('menu-hover')===false){closeSubs();index=$parentNode.data('index');if(index){$parentNode.data('index',parseInt(index,10)- 1);}}});}
$menuToggle.on('click',function(){$mainNavigation.toggleClass('toggled');});};init();},page_preloader_init:function(self){if($('.page-preloader-cover')[0]){$('.page-preloader-cover').delay(500).fadeTo(500,0,function(){$(this).remove();});}},to_top_init:function(self){if($.isFunction(jQuery.fn.UItoTop)){$().UItoTop({text:prima.labels.totop_button,scrollSpeed:600});}},mobileMenuDropdown:function(){var $btnToggle=$('.main-navigation .menu-toggle'),$itemHasChildren=$('.main-navigation .menu li.menu-item-has-children'),$mobileNavigation=$('.main-navigation .menu');$itemHasChildren.prepend('<span class="sub-menu-toggle"></span>');var $subMenuToggle=$('.sub-menu-toggle');$subMenuToggle.on('click',function(){$(this).toggleClass('active');$(this).parent().toggleClass('sub-menu-open');});$btnToggle.on('click',function(){$mobileNavigation.toggleClass('active');if($subMenuToggle.hasClass('active')){$subMenuToggle.removeClass('active');$itemHasChildren.removeClass('sub-menu-open');}});}}
CherryJsCore.theme_script.init();}(jQuery));
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/

!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
/*! Magnific Popup - v1.0.1 - 2015-12-30
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isIE7=-1!==c.indexOf("MSIE 7."),b.isIE8=-1!==c.indexOf("MSIE 8."),b.isLowIE=b.isIE7||b.isIE8,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(a,c){if(void 0===c||c===!1)return!0;if(e=a.split("_"),e.length>1){var d=b.find(p+"-"+e[0]);if(d.length>0){var f=e[1];"replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c):"img"===f?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(p+"-"+a).html(c)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery",g=Boolean(a.fn.mfpFastClick);return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s),h=g?"mfpFastClick":"click";e[h](function(){b.prev()}),f[h](function(){b.next()}),b.isIE7&&(x("b",e[0],!1,!0),x("a",e[0],!1,!0),x("b",f[0],!1,!0),x("a",f[0],!1,!0)),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowLeft&&g&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){v.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g,h=a(this);if(c){var i,j,k,l,m,n;h.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,v.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0],(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)&&(l=!0,d())}).on("touchend"+f,function(a){d(),l||n>1||(g=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){g=!1},b),e())})})}h.on("click"+f,function(){g||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&v.off("touchmove"+f+" touchend"+f)}}(),A()});
/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */


(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.preventDefault()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)});
(function($){jQuery.fn.closest_descendent=function(selector){var $found,$current_children=this.children();while($current_children.length){$found=$current_children.filter(selector);if($found.length){break;}
$current_children=$current_children.children();}
return $found;};}(jQuery));
(function($){jQuery.fn.reverse=[].reverse;}(jQuery));
(function($){$.tm_pb_simple_carousel=function(el,options){var settings=$.extend({slide_duration:500,},options);var $tm_carousel=$(el),$carousel_items=$tm_carousel.find('.tm_pb_carousel_items'),$the_carousel_items=$carousel_items.find('.tm_pb_carousel_item');$tm_carousel.tm_animation_running=false;$tm_carousel.addClass('container-width-change-notify').on('containerWidthChanged',function(event){set_carousel_columns($tm_carousel);set_carousel_height($tm_carousel);});$carousel_items.data('items',$the_carousel_items.toArray());$tm_carousel.data('columns_setting_up',false);$carousel_items.prepend('<div class="tm-pb-slider-arrows"><a class="tm-pb-slider-arrow et-pb-arrow-prev" href="#">'+'<span>'+ tm_pb_custom.previous+'</span>'+'</a><a class="tm-pb-slider-arrow et-pb-arrow-next" href="#">'+'<span>'+ tm_pb_custom.next+'</span>'+'</a></div>');set_carousel_columns($tm_carousel);set_carousel_height($tm_carousel);$tm_carousel_next=$tm_carousel.find('.tm-pb-arrow-next');$tm_carousel_prev=$tm_carousel.find('.tm-pb-arrow-prev');$tm_carousel_next.click(function(){if($tm_carousel.tm_animation_running)return false;$tm_carousel.tm_carousel_move_to('next');return false;});$tm_carousel_prev.click(function(){if($tm_carousel.tm_animation_running)return false;$tm_carousel.tm_carousel_move_to('previous');return false;});$tm_carousel.on('swipeleft',function(){$tm_carousel.tm_carousel_move_to('next');});$tm_carousel.on('swiperight',function(){$tm_carousel.tm_carousel_move_to('previous');});function set_carousel_height($the_carousel){var carousel_items_width=$the_carousel_items.width(),carousel_items_height=$the_carousel_items.height();$carousel_items.css('height',carousel_items_height+'px');}
function set_carousel_columns($the_carousel){var columns,$carousel_parent=$the_carousel.parents('.tm_pb_column'),carousel_items_width=$carousel_items.width(),carousel_item_count=$the_carousel_items.length;if($carousel_parent.hasClass('tm_pb_column_4_4')||$carousel_parent.hasClass('tm_pb_column_3_4')||$carousel_parent.hasClass('tm_pb_column_2_3')){if($tm_window.width()<768){columns=3;}else{columns=4;}}else if($carousel_parent.hasClass('tm_pb_column_1_2')||$carousel_parent.hasClass('tm_pb_column_3_8')||$carousel_parent.hasClass('tm_pb_column_1_3')){columns=3;}else if($carousel_parent.hasClass('tm_pb_column_1_4')){if($tm_window.width()>480&&$tm_window.width()<980){columns=3;}else{columns=2;}}
if(columns===$carousel_items.data('portfolio-columns')){return;}
if($the_carousel.data('columns_setting_up')){return;}
$the_carousel.data('columns_setting_up',true);$carousel_items.removeClass('columns-'+ $carousel_items.data('portfolio-columns'));$carousel_items.addClass('columns-'+ columns);$carousel_items.data('portfolio-columns',columns);if($carousel_items.find('.tm-carousel-group').length){$the_carousel_items.appendTo($carousel_items);$carousel_items.find('.tm-carousel-group').remove();}
var the_carousel_items=$carousel_items.data('items'),$carousel_group=$('<div class="tm-carousel-group active">').appendTo($carousel_items);$the_carousel_items.data('position','');if(the_carousel_items.length<=columns){$carousel_items.find('.tm-pb-slider-arrows').hide();}else{$carousel_items.find('.tm-pb-slider-arrows').show();}
for(position=1,x=0;x<the_carousel_items.length;x++,position++){if(x<columns){$(the_carousel_items[x]).show();$(the_carousel_items[x]).appendTo($carousel_group);$(the_carousel_items[x]).data('position',position);$(the_carousel_items[x]).addClass('position_'+ position);}else{position=$(the_carousel_items[x]).data('position');$(the_carousel_items[x]).removeClass('position_'+ position);$(the_carousel_items[x]).data('position','');$(the_carousel_items[x]).hide();}}
$the_carousel.data('columns_setting_up',false);}
$tm_carousel.tm_carousel_move_to=function(direction){var $active_carousel_group=$carousel_items.find('.tm-carousel-group.active'),items=$carousel_items.data('items'),columns=$carousel_items.data('portfolio-columns');$tm_carousel.tm_animation_running=true;var left=0;$active_carousel_group.children().each(function(){$(this).css({'position':'absolute','left':left});left=left+ $(this).outerWidth(true);});if(direction=='next'){var $next_carousel_group,current_position=1,next_position=1,active_items_start=items.indexOf($active_carousel_group.children().first()[0]),active_items_end=active_items_start+ columns,next_items_start=active_items_end,next_items_end=next_items_start+ columns;$next_carousel_group=$('<div class="tm-carousel-group next" style="display: none;left: 100%;position: absolute;top: 0;">').insertAfter($active_carousel_group);$next_carousel_group.css({'width':$active_carousel_group.innerWidth()}).show();for(x=0,total=0;;x++,total++){if(total>=active_items_start&&total<active_items_end){$(items[x]).addClass('changing_position current_position current_position_'+ current_position);$(items[x]).data('current_position',current_position);current_position++;}
if(total>=next_items_start&&total<next_items_end){$(items[x]).data('next_position',next_position);$(items[x]).addClass('changing_position next_position next_position_'+ next_position);if(!$(items[x]).hasClass('current_position')){$(items[x]).addClass('container_append');}else{$(items[x]).clone(true).appendTo($active_carousel_group).hide().addClass('delayed_container_append_dup').attr('id',$(items[x]).attr('id')+'-dup');$(items[x]).addClass('delayed_container_append');}
next_position++;}
if(next_position>columns){break;}
if(x>=(items.length-1)){x=-1;}}
var sorted=$carousel_items.find('.container_append, .delayed_container_append_dup').sort(function(a,b){var el_a_position=parseInt($(a).data('next_position'));var el_b_position=parseInt($(b).data('next_position'));return(el_a_position<el_b_position)?-1:(el_a_position>el_b_position)?1:0;});$(sorted).show().appendTo($next_carousel_group);var left=0;$next_carousel_group.children().each(function(){$(this).css({'position':'absolute','left':left});left=left+ $(this).outerWidth(true);});$active_carousel_group.animate({left:'-100%'},{duration:settings.slide_duration,complete:function(){$carousel_items.find('.delayed_container_append').each(function(){left=$('#'+ $(this).attr('id')+'-dup').css('left');$(this).css({'position':'absolute','left':left});$(this).appendTo($next_carousel_group);});$active_carousel_group.removeClass('active');$active_carousel_group.children().each(function(){position=$(this).data('position');current_position=$(this).data('current_position');$(this).removeClass('position_'+ position+' '+'changing_position current_position current_position_'+ current_position);$(this).data('position','');$(this).data('current_position','');$(this).hide();$(this).css({'position':'','left':''});$(this).appendTo($carousel_items);});$active_carousel_group.remove();}});next_left=$active_carousel_group.width()+ parseInt($the_carousel_items.first().css('marginRight').slice(0,-2));$next_carousel_group.addClass('active').css({'position':'absolute','top':0,left:next_left});$next_carousel_group.animate({left:'0%'},{duration:settings.slide_duration,complete:function(){$next_carousel_group.removeClass('next').addClass('active').css({'position':'','width':'','top':'','left':''});$next_carousel_group.find('.changing_position').each(function(index){position=$(this).data('position');current_position=$(this).data('current_position');next_position=$(this).data('next_position');$(this).removeClass('container_append delayed_container_append position_'+ position+' '+'changing_position current_position current_position_'+ current_position+' next_position next_position_'+ next_position);$(this).data('current_position','');$(this).data('next_position','');$(this).data('position',(index+ 1));});$next_carousel_group.children().css({'position':'','left':''});$next_carousel_group.find('.delayed_container_append_dup').remove();$tm_carousel.tm_animation_running=false;}});}else if(direction=='previous'){var $prev_carousel_group,current_position=columns,prev_position=columns,columns_span=columns- 1,active_items_start=items.indexOf($active_carousel_group.children().last()[0]),active_items_end=active_items_start- columns_span,prev_items_start=active_items_end- 1,prev_items_end=prev_items_start- columns_span;$prev_carousel_group=$('<div class="tm-carousel-group prev" style="display: none;left: 100%;position: absolute;top: 0;">').insertBefore($active_carousel_group);$prev_carousel_group.css({'left':'-'+ $active_carousel_group.innerWidth(),'width':$active_carousel_group.innerWidth()}).show();for(x=(items.length- 1),total=(items.length- 1);;x--,total--){if(total<=active_items_start&&total>=active_items_end){$(items[x]).addClass('changing_position current_position current_position_'+ current_position);$(items[x]).data('current_position',current_position);current_position--;}
if(total<=prev_items_start&&total>=prev_items_end){$(items[x]).data('prev_position',prev_position);$(items[x]).addClass('changing_position prev_position prev_position_'+ prev_position);if(!$(items[x]).hasClass('current_position')){$(items[x]).addClass('container_append');}else{$(items[x]).clone(true).appendTo($active_carousel_group).addClass('delayed_container_append_dup').attr('id',$(items[x]).attr('id')+'-dup');$(items[x]).addClass('delayed_container_append');}
prev_position--;}
if(prev_position<=0){break;}
if(x==0){x=items.length;}}
var sorted=$carousel_items.find('.container_append, .delayed_container_append_dup').sort(function(a,b){var el_a_position=parseInt($(a).data('prev_position'));var el_b_position=parseInt($(b).data('prev_position'));return(el_a_position<el_b_position)?-1:(el_a_position>el_b_position)?1:0;});$(sorted).show().appendTo($prev_carousel_group);var left=0;$prev_carousel_group.children().each(function(){$(this).css({'position':'absolute','left':left});left=left+ $(this).outerWidth(true);});$active_carousel_group.animate({left:'100%'},{duration:settings.slide_duration,complete:function(){$carousel_items.find('.delayed_container_append').reverse().each(function(){left=$('#'+ $(this).attr('id')+'-dup').css('left');$(this).css({'position':'absolute','left':left});$(this).prependTo($prev_carousel_group);});$active_carousel_group.removeClass('active');$active_carousel_group.children().each(function(){position=$(this).data('position');current_position=$(this).data('current_position');$(this).removeClass('position_'+ position+' '+'changing_position current_position current_position_'+ current_position);$(this).data('position','');$(this).data('current_position','');$(this).hide();$(this).css({'position':'','left':''});$(this).appendTo($carousel_items);});$active_carousel_group.remove();}});prev_left=(-1)*$active_carousel_group.width()- parseInt($the_carousel_items.first().css('marginRight').slice(0,-2));$prev_carousel_group.addClass('active').css({'position':'absolute','top':0,left:prev_left});$prev_carousel_group.animate({left:'0%'},{duration:settings.slide_duration,complete:function(){$prev_carousel_group.removeClass('prev').addClass('active').css({'position':'','width':'','top':'','left':''});$prev_carousel_group.find('.delayed_container_append_dup').remove();$prev_carousel_group.find('.changing_position').each(function(index){position=$(this).data('position');current_position=$(this).data('current_position');prev_position=$(this).data('prev_position');$(this).removeClass('container_append delayed_container_append position_'+ position+' '+'changing_position current_position current_position_'+ current_position+' prev_position prev_position_'+ prev_position);$(this).data('current_position','');$(this).data('prev_position','');position=index+ 1;$(this).data('position',position);$(this).addClass('position_'+ position);});$prev_carousel_group.children().css({'position':'','left':''});$tm_carousel.tm_animation_running=false;}});}}}
$.fn.tm_pb_simple_carousel=function(options){return this.each(function(){new $.tm_pb_simple_carousel(this,options);});}}(jQuery));
(function($){$.tm_pb_simple_slider=function(el,options){var settings=$.extend({slide:'.tm-slide',arrows:'.tm-pb-slider-arrows',prev_arrow:'.tm-pb-arrow-prev',next_arrow:'.tm-pb-arrow-next',controls:'.tm-pb-controllers a',carousel_controls:'.tm_pb_carousel_item',control_active_class:'tm-pb-active-control',previous_text:tm_pb_custom.previous,next_text:tm_pb_custom.next,fade_speed:500,use_arrows:true,use_controls:true,manual_arrows:'',append_controls_to:'',controls_below:false,controls_class:'tm-pb-controllers',slideshow:false,slideshow_speed:7000,show_progress_bar:false,tabs_animation:false,use_carousel:false},options);var $tm_slider=$(el),$tm_slide=$tm_slider.closest_descendent(settings.slide),tm_slides_number=$tm_slide.length,tm_fade_speed=settings.fade_speed,tm_active_slide=0,$tm_slider_arrows,$tm_slider_prev,$tm_slider_next,$tm_slider_controls,$tm_slider_carousel_controls,tm_slider_timer,controls_html='',carousel_html='',$progress_bar=null,progress_timer_count=0,$tm_pb_container=$tm_slider.find('.tm_pb_container'),tm_pb_container_width=$tm_pb_container.width(),is_post_slider=$tm_slider.hasClass('tm_pb_post_slider');$tm_slider.tm_animation_running=false;$.data(el,"tm_pb_simple_slider",$tm_slider);$tm_slide.eq(0).addClass('tm-pb-active-slide');if(!settings.tabs_animation){if(!$tm_slider.hasClass('tm_pb_bg_layout_dark')&&!$tm_slider.hasClass('tm_pb_bg_layout_light')){$tm_slider.addClass(tm_get_bg_layout_color($tm_slide.eq(0)));}}
if(settings.use_arrows&&tm_slides_number>1){if(settings.manual_arrows=='')
$tm_slider.append('<div class="tm-pb-slider-arrows"><a class="tm-pb-arrow-prev" href="#">'+'<span>'+settings.previous_text+'</span>'+'</a><a class="tm-pb-arrow-next" href="#">'+'<span>'+ settings.next_text+'</span>'+'</a></div>');else
$tm_slider.append(settings.manual_arrows);$tm_slider_arrows=$tm_slider.find(settings.arrows);$tm_slider_prev=$tm_slider.find(settings.prev_arrow);$tm_slider_next=$tm_slider.find(settings.next_arrow);$tm_slider_next.click(function(){if($tm_slider.tm_animation_running)return false;$tm_slider.tm_slider_move_to('next');return false;});$tm_slider_prev.click(function(){if($tm_slider.tm_animation_running)return false;$tm_slider.tm_slider_move_to('previous');return false;});$tm_slider.find(settings.slide).on('swipeleft',function(){$tm_slider.tm_slider_move_to('next');});$tm_slider.find(settings.slide).on('swiperight',function(){$tm_slider.tm_slider_move_to('previous');});}
if(settings.use_controls&&tm_slides_number>1){for(var i=1;i<=tm_slides_number;i++){controls_html+='<a href="#"'+(i==1?' class="'+ settings.control_active_class+'"':'')+'>'+ i+'</a>';}
controls_html='<div class="'+ settings.controls_class+'">'+
controls_html+'</div>';if(settings.append_controls_to=='')
$tm_slider.append(controls_html);else
$(settings.append_controls_to).append(controls_html);if(settings.controls_below)
$tm_slider_controls=$tm_slider.parent().find(settings.controls);else
$tm_slider_controls=$tm_slider.find(settings.controls);tm_maybe_set_controls_color($tm_slide.eq(0));$tm_slider_controls.click(function(){if($tm_slider.tm_animation_running)return false;$tm_slider.tm_slider_move_to($(this).index());return false;});}
if(settings.use_carousel&&tm_slides_number>1){for(var i=1;i<=tm_slides_number;i++){slide_id=i- 1;image_src=($tm_slide.eq(slide_id).data('image')!==undefined)?'url('+ $tm_slide.eq(slide_id).data('image')+')':'none';carousel_html+='<div class="tm_pb_carousel_item '+(i==1?settings.control_active_class:'')+'" data-slide-id="'+ slide_id+'">'+'<div class="tm_pb_video_overlay" href="#" style="background-image: '+ image_src+';">'+'<div class="tm_pb_video_overlay_hover"><a href="#" class="tm_pb_video_play"></a></div>'+'</div>'+'</div>';}
carousel_html='<div class="tm_pb_carousel">'+'<div class="tm_pb_carousel_items">'+
carousel_html+'</div>'+'</div>';$tm_slider.after(carousel_html);$tm_slider_carousel_controls=$tm_slider.siblings('.tm_pb_carousel').find(settings.carousel_controls);$tm_slider_carousel_controls.click(function(){if($tm_slider.tm_animation_running)return false;var $this=$(this);$tm_slider.tm_slider_move_to($this.data('slide-id'));return false;});}
if(settings.slideshow&&tm_slides_number>1){$tm_slider.hover(function(){if($tm_slider.hasClass('tm_slider_auto_ignore_hover')){return;}
$tm_slider.addClass('tm_slider_hovered');if(typeof tm_slider_timer!='undefined'){clearInterval(tm_slider_timer);}},function(){if($tm_slider.hasClass('tm_slider_auto_ignore_hover')){return;}
$tm_slider.removeClass('tm_slider_hovered');tm_slider_auto_rotate();});}
tm_slider_auto_rotate();function tm_slider_auto_rotate(){if(settings.slideshow&&tm_slides_number>1&&!$tm_slider.hasClass('tm_slider_hovered')){tm_slider_timer=setTimeout(function(){$tm_slider.tm_slider_move_to('next');},settings.slideshow_speed);}}
function tm_stop_video(active_slide){var $tm_video,tm_video_src;if(active_slide.has('iframe').length){$tm_video=active_slide.find('iframe');tm_video_src=$tm_video.attr('src');$tm_video.attr('src','');$tm_video.attr('src',tm_video_src);}else if(active_slide.has('video').length){if(!active_slide.find('.tm_pb_section_video_bg').length){$tm_video=active_slide.find('video');$tm_video[0].pause();}}}
function tm_fix_slider_content_images(){var $this_slider=$tm_slider,$slide_image_container=$this_slider.find('.tm-pb-active-slide .tm_pb_slide_image');$slide_video_container=$this_slider.find('.tm-pb-active-slide .tm_pb_slide_video');$slide=$slide_image_container.closest('.tm_pb_slide'),$slider=$slide.closest('.tm_pb_slider'),slide_height=$slider.innerHeight(),image_height=parseInt(slide_height*0.8),$top_header=$('#top-header'),$main_header=$('#main-header'),$tm_transparent_nav=$('.tm_transparent_nav'),$tm_vertical_nav=$('.tm_vertical_nav');$slide_image_container.find('img').css('maxHeight',image_height+'px');if($slide.hasClass('tm_pb_media_alignment_center')){$slide_image_container.css('marginTop','-'+ parseInt($slide_image_container.height()/ 2 ) + 'px' );
}
$slide_video_container.css('marginTop','-'+ parseInt($slide_video_container.height()/ 2 ) + 'px' );
$slide_image_container.find('img').addClass('active');}
function tm_get_bg_layout_color($slide){if($slide.hasClass('tm_pb_bg_layout_dark')){return'tm_pb_bg_layout_dark';}
return'tm_pb_bg_layout_light';}
function tm_maybe_set_controls_color($slide){var next_slide_dot_color,$arrows,arrows_color;if(typeof $tm_slider_controls!=='undefined'&&$tm_slider_controls.length){next_slide_dot_color=$slide.data('dots_color')||'';if(next_slide_dot_color!==''){$tm_slider_controls.attr('style','background-color: '+ hex_to_rgba(next_slide_dot_color,'0.3')+';')
$tm_slider_controls.filter('.tm-pb-active-control').attr('style','background-color: '+ hex_to_rgba(next_slide_dot_color)+'!important;');}else{$tm_slider_controls.removeAttr('style');}}
if(typeof $tm_slider_arrows!=='undefined'&&$tm_slider_arrows.length){$arrows=$tm_slider_arrows.find('a');arrows_color=$slide.data('arrows_color')||'';if(arrows_color!==''){$arrows.css('color',arrows_color);}else{$arrows.css('color','inherit');}}}
function tm_fix_builder_content(){if(is_post_slider){setTimeout(function(){var $tm_pb_circle_counter=$('.tm_pb_circle_counter'),$tm_pb_number_counter=$('.tm_pb_number_counter');window.tm_fix_testimonial_inner_width();if($tm_pb_circle_counter.length){window.tm_pb_reinit_circle_counters($tm_pb_circle_counter);}
if($tm_pb_number_counter.length){window.tm_pb_reinit_number_counters($tm_pb_number_counter);}
window.tm_reinint_waypoint_modules();},1000);}}
function hex_to_rgba(color,alpha){var color_16=parseInt(color.replace('#',''),16),red=(color_16>>16)&255,green=(color_16>>8)&255,blue=color_16&255,alpha=alpha||1,rgba;rgba=red+','+ green+','+ blue+','+ alpha;rgba='rgba('+ rgba+')';return rgba;}
$tm_window.load(function(){tm_fix_slider_content_images();});$tm_window.resize(function(){tm_fix_slider_content_images();});$tm_slider.tm_slider_move_to=function(direction){var $active_slide=$tm_slide.eq(tm_active_slide),$next_slide;$tm_slider.tm_animation_running=true;$tm_slider.removeClass('tm_slide_transition_to_next tm_slide_transition_to_previous').addClass('tm_slide_transition_to_'+ direction);$tm_slider.find('.tm-pb-moved-slide').removeClass('tm-pb-moved-slide');if(direction=='next'||direction=='previous'){if(direction=='next')
tm_active_slide=(tm_active_slide+ 1)<tm_slides_number?tm_active_slide+ 1:0;else
tm_active_slide=(tm_active_slide- 1)>=0?tm_active_slide- 1:tm_slides_number- 1;}else{if(tm_active_slide==direction){$tm_slider.tm_animation_running=false;return;}
tm_active_slide=direction;}
if(typeof tm_slider_timer!='undefined')
clearInterval(tm_slider_timer);$next_slide=$tm_slide.eq(tm_active_slide);$tm_slider.trigger('simple_slider_before_move_to',{direction:direction,next_slide:$next_slide});$tm_slide.each(function(){$(this).css('zIndex',1);});$active_slide.css('zIndex',2).removeClass('tm-pb-active-slide').addClass('tm-pb-moved-slide');$next_slide.css({'display':'block',opacity:0}).addClass('tm-pb-active-slide');tm_fix_slider_content_images();tm_fix_builder_content();if(settings.use_controls)
$tm_slider_controls.removeClass(settings.control_active_class).eq(tm_active_slide).addClass(settings.control_active_class);if(settings.use_carousel)
$tm_slider_carousel_controls.removeClass(settings.control_active_class).eq(tm_active_slide).addClass(settings.control_active_class);if(!settings.tabs_animation){tm_maybe_set_controls_color($next_slide);$next_slide.animate({opacity:1},tm_fade_speed);$active_slide.addClass('tm_slide_transition').css({'display':'list-item','opacity':1}).animate({opacity:0},tm_fade_speed,function(){var active_slide_layout_bg_color=tm_get_bg_layout_color($active_slide),next_slide_layout_bg_color=tm_get_bg_layout_color($next_slide);$(this).css('display','none').removeClass('tm_slide_transition');tm_stop_video($active_slide);$tm_slider.removeClass(active_slide_layout_bg_color).addClass(next_slide_layout_bg_color);$tm_slider.tm_animation_running=false;$tm_slider.trigger('simple_slider_after_move_to',{next_slide:$next_slide});});}else{$next_slide.css({'display':'none',opacity:0});$active_slide.addClass('tm_slide_transition').css({'display':'block','opacity':1}).animate({opacity:0},tm_fade_speed,function(){$(this).css('display','none').removeClass('tm_slide_transition');$next_slide.css({'display':'block','opacity':0}).animate({opacity:1},tm_fade_speed,function(){$tm_slider.tm_animation_running=false;$tm_slider.trigger('simple_slider_after_move_to',{next_slide:$next_slide});});});}
tm_slider_auto_rotate();}}
$.fn.tm_pb_simple_slider=function(options){return this.each(function(){new $.tm_pb_simple_slider(this,options);});}}(jQuery));
var tm_hash_module_seperator='||',tm_hash_module_param_seperator='|';function process_tm_hashchange(hash){if((hash.indexOf(tm_hash_module_seperator,0))!==-1){modules=hash.split(tm_hash_module_seperator);for(var i=0;i<modules.length;i++){var module_params=modules[i].split(tm_hash_module_param_seperator);var element=module_params[0];module_params.shift();if($('#'+ element).length){$('#'+ element).trigger({type:"tm_hashchange",params:module_params});}}}else{module_params=hash.split(tm_hash_module_param_seperator);var element=module_params[0];module_params.shift();if($('#'+ element).length){$('#'+ element).trigger({type:"tm_hashchange",params:module_params});}}}
function tm_set_hash(module_state_hash){module_id=module_state_hash.split(tm_hash_module_param_seperator)[0];if(!$('#'+ module_id).length){return;}
if(window.location.hash){var hash=window.location.hash.substring(1),new_hash=[];if((hash.indexOf(tm_hash_module_seperator,0))!==-1){modules=hash.split(tm_hash_module_seperator);var in_hash=false;for(var i=0;i<modules.length;i++){var element=modules[i].split(tm_hash_module_param_seperator)[0];if(element===module_id){new_hash.push(module_state_hash);in_hash=true;}else{new_hash.push(modules[i]);}}
if(!in_hash){new_hash.push(module_state_hash);}}else{module_params=hash.split(tm_hash_module_param_seperator);var element=module_params[0];if(element!==module_id){new_hash.push(hash);}
new_hash.push(module_state_hash);}
hash=new_hash.join(tm_hash_module_seperator);}else{hash=module_state_hash;}
var yScroll=document.body.scrollTop;window.location.hash=hash;document.body.scrollTop=yScroll;}
;
'use strict';

var $tm_pb_slider = jQuery('.tm_pb_slider'),
  $tm_pb_tabs = jQuery('.tm_pb_tabs'),
  $tm_pb_tabs_li = $tm_pb_tabs.find('.tm_pb_tabs_controls li'),
  $tm_pb_video_section = jQuery('.tm_pb_section_video_bg'),
  $tm_pb_newsletter_button = jQuery('.tm_pb_newsletter_button'),
  $tm_pb_filterable_portfolio = jQuery('.tm_pb_filterable_portfolio'),
  $tm_pb_fullwidth_portfolio = jQuery('.tm_pb_fullwidth_portfolio'),
  $tm_pb_gallery = jQuery('.tm_pb_gallery'),
  $tm_pb_countdown_timer = jQuery('.tm_pb_countdown_timer'),
  $tm_post_gallery = jQuery('.tm_post_gallery'),
  $tm_lightbox_image = jQuery('.tm_pb_lightbox_image'),
  $tm_pb_map = jQuery('.tm_pb_map_container'),
  $tm_pb_circle_counter = jQuery('.tm_pb_circle_counter_bar'),
  $tm_pb_number_counter = jQuery('.tm_pb_number_counter'),
  $tm_pb_parallax = jQuery('.tm_parallax_bg'),
  $tm_pb_shop = jQuery('.tm_pb_shop'),
  $tm_pb_post_fullwidth = jQuery('.single.tm_pb_pagebuilder_layout.tm_full_width_page'),
  tm_is_mobile_device = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/),
  tm_is_ipad = navigator.userAgent.match(/iPad/),
  $tm_container = !tm_pb_custom.is_builder_plugin_used ? jQuery('.container') : jQuery('.tm_pb_row'),
  tm_container_width = $tm_container.width(),
  tm_is_fixed_nav = jQuery('body').hasClass('tm_fixed_nav'),
  tm_is_vertical_fixed_nav = jQuery('body').hasClass('tm_vertical_fixed'),
  tm_is_rtl = jQuery('body').hasClass('rtl'),
  tm_hide_nav = jQuery('body').hasClass('tm_hide_nav'),
  tm_header_style_left = jQuery('body').hasClass('tm_header_style_left'),
  tm_vertical_navigation = jQuery('body').hasClass('tm_vertical_nav'),
  $top_header = jQuery('#top-header'),
  $main_header = jQuery('#main-header'),
  $main_container_wrapper = jQuery('#page-container'),
  $tm_transparent_nav = jQuery('.tm_transparent_nav'),
  $tm_pb_first_row = jQuery('body.tm_pb_pagebuilder_layout .tm_pb_section:first-child'),
  $tm_main_content_first_row = jQuery('#main-content .container:first-child'),
  $tm_main_content_first_row_meta_wrapper = $tm_main_content_first_row.find('.tm_post_meta_wrapper:first'),
  $tm_main_content_first_row_meta_wrapper_title = $tm_main_content_first_row_meta_wrapper.find('h1'),
  $tm_main_content_first_row_content = $tm_main_content_first_row.find('.entry-content:first'),
  $tm_single_post = jQuery('body.single-post'),
  $tm_window = jQuery(window),
  etRecalculateOffset = false,
  tm_header_height, tm_header_modifier, tm_header_offset, tm_primary_header_top, $tm_vertical_nav = jQuery('.tm_vertical_nav'),
  $tm_header_style_split = jQuery('.tm_header_style_split'),
  $tm_top_navigation = jQuery('#tm-top-navigation'),
  $logo = jQuery('#logo'),
  $tm_sticky_image = jQuery('.tm_pb_image_sticky'),
  $tm_pb_counter_amount = jQuery('.tm_pb_counter_amount'),
  $tm_pb_carousel = jQuery('.tm_pb_carousel'),
  $tm_menu_selector = tm_pb_custom.is_divi_theme_used ? jQuery('ul.nav') : jQuery('.tm_pb_fullwidth_menu ul.nav');

jQuery(document).ready(function($) {
  var $tm_top_menu = $tm_menu_selector,
    tm_parent_menu_longpress_limit = 300,
    tm_parent_menu_longpress_start, tm_parent_menu_click = true;
  $('.tm_pb_posts').each(function() {
    var $item = $(this),
      loader = '<div class="tm-pb-spinner tm-pb-spinner-double-bounce"><div class="tm-pb-double-bounce1"></div><div class="tm-pb-double-bounce2"></div></div>';
    $item.on('click', '.tm_pb_ajax_more', function(event) {
      var $this = $(this),
        $result = $item.find('.tm-posts_listing .row'),
        pages = $item.data('pages'),
        data = new Object();
      event.preventDefault();
      if ($this.hasClass('in-progress')) {
        return;
      }
      data.page = $item.data('page');
      data.atts = $item.data('atts');
      data.action = 'tm_pb_load_more';
      $this.addClass('in-progress').after(loader);
      $.ajax({
        url: window.tm_pb_custom.ajaxurl,
        type: 'post',
        dataType: 'json',
        data: data,
        error: function() {
          $this.removeClass('in-progress').next('.tm-pb-spinner').remove();
        }
      }).done(function(response) {
        $result.append(response.data.result);
        $item.data('page', response.data.page);
        $this.removeClass('in-progress').next('.tm-pb-spinner').remove();
        if (response.data.page == pages) {
          $this.addClass('btn-hidden');
        }
      });
    });
  });
  if ($('.tm_pb_row').length) {
    $('.tm_pb_row').each(function() {
      var $this_row = $(this),
        row_class = '';
      row_class = tm_get_column_types($this_row.find('>.tm_pb_column'));
      if ('' !== row_class && (-1 !== row_class.indexOf('1-4') || '_4col' === row_class)) {
        $this_row.addClass('tm_pb_row' + row_class);
      }
      if ($this_row.find('.tm_pb_row_inner').length) {
        $this_row.find('.tm_pb_row_inner').each(function() {
          var $this_row_inner = $(this);
          row_class = tm_get_column_types($this_row_inner.find('.tm_pb_column'));
          if ('' !== row_class && -1 !== row_class.indexOf('1-4')) {
            $this_row_inner.addClass('tm_pb_row' + row_class);
          }
        });
      }
    });
  }

  function tm_get_column_types($columns) {
    var row_class = '';
    if ($columns.length) {
      $columns.each(function() {
        var $this_column = $(this),
          column_type = $this_column.attr('class').split('tm_pb_column_')[1],
          column_type_clean = column_type.split(' ', 1)[0],
          column_type_updated = column_type_clean.replace('_', '-').trim();
        row_class += '_' + column_type_updated;
      });
      row_class = '_1-4_1-4_1-4_1-4' === row_class ? '_4col' : row_class;
    }
    return row_class;
  }
  $tm_top_menu.find('li').hover(function() {
    if (!$(this).closest('li.mega-menu').length || $(this).hasClass('mega-menu')) {
      $(this).addClass('tm-show-dropdown');
      $(this).removeClass('tm-hover').addClass('tm-hover');
    }
  }, function() {
    var $this_el = $(this);
    $this_el.removeClass('tm-show-dropdown');
    setTimeout(function() {
      if (!$this_el.hasClass('tm-show-dropdown')) {
        $this_el.removeClass('tm-hover');
      }
    }, 200);
  });
  $tm_top_menu.find('.menu-item-has-children > a').on('touchstart', function() {
    tm_parent_menu_longpress_start = new Date().getTime();
  }).on('touchend', function() {
    var tm_parent_menu_longpress_end = new Date().getTime()
    if (tm_parent_menu_longpress_end >= tm_parent_menu_longpress_start + tm_parent_menu_longpress_limit) {
      tm_parent_menu_click = true;
    } else {
      tm_parent_menu_click = false;
      var $tm_parent_menu = $(this).parent('li');
      if ($tm_parent_menu.hasClass('tm-hover')) {
        $tm_parent_menu.trigger('mouseleave');
      } else {
        $tm_parent_menu.trigger('mouseenter');
      }
    }
    tm_parent_menu_longpress_start = 0;
  }).click(function() {
    if (tm_parent_menu_click) {
      return true;
    }
    return false;
  });
  $tm_top_menu.find('li.mega-menu').each(function() {
    var $li_mega_menu = $(this),
      $li_mega_menu_item = $li_mega_menu.children('ul').children('li'),
      li_mega_menu_item_count = $li_mega_menu_item.length;
    if (li_mega_menu_item_count < 4) {
      $li_mega_menu.addClass('mega-menu-parent mega-menu-parent-' + li_mega_menu_item_count);
    }
  });
  $tm_sticky_image.each(function() {
    var $this_el = $(this),
      $row = $this_el.closest('.tm_pb_row'),
      $section = $row.closest('.tm_pb_section'),
      $column = $this_el.closest('.tm_pb_column'),
      sticky_class = 'tm_pb_section_sticky',
      sticky_mobile_class = 'tm_pb_section_sticky_mobile';
    if (!$row.is(':last-child')) {
      return true;
    }
    if (!$this_el.is(':last-child')) {
      return true;
    }
    if (!$section.hasClass(sticky_class)) {
      $section.addClass(sticky_class);
    }
    $column.addClass('tm_pb_row_sticky');
    if (!$section.hasClass(sticky_mobile_class) && $column.is(':last-child')) {
      $section.addClass(sticky_mobile_class);
    }
  });
  if (tm_is_mobile_device) {
    $('.tm_pb_section_video_bg').each(function() {
      var $this_el = $(this);
      $this_el.css('visibility', 'hidden').closest('.tm_pb_preload').removeClass('tm_pb_preload')
    });
    $('body').addClass('tm_mobile_device');
    if (!tm_is_ipad) {
      $('body').addClass('tm_mobile_device_not_ipad');
    }
  }
  if ($tm_pb_video_section.length) {
    $tm_pb_video_section.find('video').mediaelementplayer({
      pauseOtherPlayers: false,
      success: function(mediaElement, domObject) {
        mediaElement.addEventListener('loadeddata', function() {
          tm_pb_resize_section_video_bg($(domObject));
          tm_pb_center_video($(domObject));
        }, false);
        mediaElement.addEventListener('canplay', function() {
          $(domObject).closest('.tm_pb_preload').removeClass('tm_pb_preload');
        }, false);
      }
    });
  }
  if ($tm_post_gallery.length) {
    var magnificPopup = $.magnificPopup.instance;
    $('body').on('swiperight', '.mfp-container', function() {
      magnificPopup.prev();
    });
    $('body').on('swipeleft', '.mfp-container', function() {
      magnificPopup.next();
    });
    $tm_post_gallery.each(function() {
      $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 500,
        gallery: {
          enabled: true,
          navigateByImgClick: true
        },
        mainClass: 'mfp-fade',
        zoom: {
          enabled: true,
          duration: 500,
          opener: function(element) {
            return element.find('img');
          }
        }
      });
    });
    $tm_post_gallery.find('a').unbind('click');
  }
  if ($tm_lightbox_image.length) {
    $tm_lightbox_image.unbind('click');
    $tm_lightbox_image.bind('click');
    $tm_lightbox_image.magnificPopup({
      type: 'image',
      removalDelay: 500,
      mainClass: 'mfp-fade',
      zoom: {
        enabled: true,
        duration: 500,
        opener: function(element) {
          return element.find('img');
        }
      }
    });
  }
  if ($tm_pb_slider.length) {
    $tm_pb_slider.each(function() {
      var $this_slider = $(this),
        tm_slider_settings = {
          fade_speed: 700,
          slide: !$this_slider.hasClass('tm_pb_gallery') ? '.tm_pb_slide' : '.tm_pb_gallery_item'
        }
      if ($this_slider.hasClass('tm_pb_slider_no_arrows'))
        tm_slider_settings.use_arrows = false;
      if ($this_slider.hasClass('tm_pb_slider_no_pagination'))
        tm_slider_settings.use_controls = false;
      if ($this_slider.hasClass('tm_slider_auto')) {
        var tm_slider_autospeed_class_value = /tm_slider_speed_(\d+)/g;
        tm_slider_settings.slideshow = true;
        tm_slider_autospeed = tm_slider_autospeed_class_value.exec($this_slider.attr('class'));
        tm_slider_settings.slideshow_speed = tm_slider_autospeed[1];
      }
      if ($this_slider.parent().hasClass('tm_pb_video_slider')) {
        tm_slider_settings.controls_below = true;
        tm_slider_settings.append_controls_to = $this_slider.parent();
        setTimeout(function() {
          $('.tm_pb_preload').removeClass('tm_pb_preload');
        }, 500);
      }
      if ($this_slider.hasClass('tm_pb_slider_carousel'))
        tm_slider_settings.use_carousel = true;
      $this_slider.tm_pb_simple_slider(tm_slider_settings);
    });
  }
  $tm_pb_carousel = $('.tm_pb_carousel');
  if ($tm_pb_carousel.length) {
    $tm_pb_carousel.each(function() {
      var $this_carousel = $(this),
        tm_carousel_settings = {
          fade_speed: 1000
        };
      $this_carousel.tm_pb_simple_carousel(tm_carousel_settings);
    });
  }
  if ($tm_pb_fullwidth_portfolio.length) {
    function set_fullwidth_portfolio_columns($the_portfolio, carousel_mode) {
      var columns, $portfolio_items = $the_portfolio.find('.tm_pb_portfolio_items'),
        portfolio_items_width = $portfolio_items.width(),
        $the_portfolio_items = $portfolio_items.find('.tm_pb_portfolio_item'),
        portfolio_item_count = $the_portfolio_items.length;
      if (portfolio_items_width >= 1600) {
        columns = 5;
      } else if (portfolio_items_width >= 1024) {
        columns = 4;
      } else if (portfolio_items_width >= 768) {
        columns = 3;
      } else if (portfolio_items_width >= 480) {
        columns = 2;
      } else {
        columns = 1;
      }
      portfolio_item_width = portfolio_items_width / columns;
      portfolio_item_height = portfolio_item_width * .75;
      if (carousel_mode) {
        $portfolio_items.css({
          'height': portfolio_item_height
        });
      }
      $the_portfolio_items.css({
        'height': portfolio_item_height
      });
      if (columns === $portfolio_items.data('portfolio-columns')) {
        return;
      }
      if ($the_portfolio.data('columns_setting_up')) {
        return;
      }
      $the_portfolio.data('columns_setting_up', true);
      var portfolio_item_width_percentage = (100 / columns) + '%';
      $the_portfolio_items.css({
        'width': portfolio_item_width_percentage
      });
      $portfolio_items.removeClass('columns-' + $portfolio_items.data('portfolio-columns'));
      $portfolio_items.addClass('columns-' + columns);
      $portfolio_items.data('portfolio-columns', columns);
      if (!carousel_mode) {
        return $the_portfolio.data('columns_setting_up', false);
      }
      if ($portfolio_items.find('.tm_pb_carousel_group').length) {
        $the_portfolio_items.appendTo($portfolio_items);
        $portfolio_items.find('.tm_pb_carousel_group').remove();
      }
      var the_portfolio_items = $portfolio_items.data('items'),
        $carousel_group = $('<div class="tm_pb_carousel_group active">').appendTo($portfolio_items);
      $the_portfolio_items.data('position', '');
      if (the_portfolio_items.length <= columns) {
        $portfolio_items.find('.tm-pb-slider-arrows').hide();
      } else {
        $portfolio_items.find('.tm-pb-slider-arrows').show();
      }
      for (position = 1, x = 0; x < the_portfolio_items.length; x++, position++) {
        if (x < columns) {
          $(the_portfolio_items[x]).show();
          $(the_portfolio_items[x]).appendTo($carousel_group);
          $(the_portfolio_items[x]).data('position', position);
          $(the_portfolio_items[x]).addClass('position_' + position);
        } else {
          position = $(the_portfolio_items[x]).data('position');
          $(the_portfolio_items[x]).removeClass('position_' + position);
          $(the_portfolio_items[x]).data('position', '');
          $(the_portfolio_items[x]).hide();
        }
      }
      $the_portfolio.data('columns_setting_up', false);
    }

    function tm_carousel_auto_rotate($carousel) {
      if ('on' === $carousel.data('auto-rotate') && $carousel.find('.tm_pb_portfolio_item').length > $carousel.find('.tm_pb_carousel_group .tm_pb_portfolio_item').length && !$carousel.hasClass('tm_carousel_hovered')) {
        tm_carousel_timer = setTimeout(function() {
          $carousel.find('.tm-pb-arrow-next').click();
        }, $carousel.data('auto-rotate-speed'));
        $carousel.data('tm_carousel_timer', tm_carousel_timer);
      }
    }
    $tm_pb_fullwidth_portfolio.each(function() {
      var $the_portfolio = $(this),
        $portfolio_items = $the_portfolio.find('.tm_pb_portfolio_items');
      $portfolio_items.data('items', $portfolio_items.find('.tm_pb_portfolio_item').toArray());
      $the_portfolio.data('columns_setting_up', false);
      if ($the_portfolio.hasClass('tm_pb_fullwidth_portfolio_carousel')) {
        $portfolio_items.prepend('<div class="tm-pb-slider-arrows"><a class="tm-pb-arrow-prev" href="#">' + '<span>' + tm_pb_custom.previous + '</span>' + '</a><a class="tm-pb-arrow-next" href="#">' + '<span>' + tm_pb_custom.next + '</span>' + '</a></div>');
        set_fullwidth_portfolio_columns($the_portfolio, true);
        tm_carousel_auto_rotate($the_portfolio);
        $the_portfolio.on('swiperight', function() {
          $(this).find('.tm-pb-arrow-prev').click();
        });
        $the_portfolio.on('swipeleft', function() {
          $(this).find('.tm-pb-arrow-next').click();
        });
        $the_portfolio.hover(function() {
          $(this).addClass('tm_carousel_hovered');
          if (typeof $(this).data('tm_carousel_timer') != 'undefined') {
            clearInterval($(this).data('tm_carousel_timer'));
          }
        }, function() {
          $(this).removeClass('tm_carousel_hovered');
          tm_carousel_auto_rotate($(this));
        });
        $the_portfolio.data('carouseling', false);
        $the_portfolio.on('click', '.tm-pb-slider-arrows a', function(e) {
          var $the_portfolio = $(this).parents('.tm_pb_fullwidth_portfolio'),
            $portfolio_items = $the_portfolio.find('.tm_pb_portfolio_items'),
            $the_portfolio_items = $portfolio_items.find('.tm_pb_portfolio_item'),
            $active_carousel_group = $portfolio_items.find('.tm_pb_carousel_group.active'),
            slide_duration = 700,
            items = $portfolio_items.data('items'),
            columns = $portfolio_items.data('portfolio-columns'),
            item_width = $active_carousel_group.innerWidth() / columns, //$active_carousel_group.children().first().innerWidth(),
            original_item_width = (100 / columns) + '%';
          e.preventDefault();
          if ($the_portfolio.data('carouseling')) {
            return;
          }
          $the_portfolio.data('carouseling', true);
          $active_carousel_group.children().each(function() {
            $(this).css({
              'width': $(this).innerWidth() + 1,
              'position': 'absolute',
              'left': ($(this).innerWidth() * ($(this).data('position') - 1))
            });
          });
          if ($(this).hasClass('tm-pb-arrow-next')) {
            var $next_carousel_group, current_position = 1,
              next_position = 1,
              active_items_start = items.indexOf($active_carousel_group.children().first()[0]),
              active_items_end = active_items_start + columns,
              next_items_start = active_items_end,
              next_items_end = next_items_start + columns;
            $next_carousel_group = $('<div class="tm_pb_carousel_group next" style="display: none;left: 100%;position: absolute;top: 0;">').insertAfter($active_carousel_group);
            $next_carousel_group.css({
              'width': $active_carousel_group.innerWidth()
            }).show();
            for (x = 0, total = 0;; x++, total++) {
              if (total >= active_items_start && total < active_items_end) {
                $(items[x]).addClass('changing_position current_position current_position_' + current_position);
                $(items[x]).data('current_position', current_position);
                current_position++;
              }
              if (total >= next_items_start && total < next_items_end) {
                $(items[x]).data('next_position', next_position);
                $(items[x]).addClass('changing_position next_position next_position_' + next_position);
                if (!$(items[x]).hasClass('current_position')) {
                  $(items[x]).addClass('container_append');
                } else {
                  $(items[x]).clone(true).appendTo($active_carousel_group).hide().addClass('delayed_container_append_dup').attr('id', $(items[x]).attr('id') + '-dup');
                  $(items[x]).addClass('delayed_container_append');
                }
                next_position++;
              }
              if (next_position > columns) {
                break;
              }
              if (x >= (items.length - 1)) {
                x = -1;
              }
            }
            sorted = $portfolio_items.find('.container_append, .delayed_container_append_dup').sort(function(a, b) {
              var el_a_position = parseInt($(a).data('next_position'));
              var el_b_position = parseInt($(b).data('next_position'));
              return (el_a_position < el_b_position) ? -1 : (el_a_position > el_b_position) ? 1 : 0;
            });
            $(sorted).show().appendTo($next_carousel_group);
            $next_carousel_group.children().each(function() {
              $(this).css({
                'width': item_width,
                'position': 'absolute',
                'left': (item_width * ($(this).data('next_position') - 1))
              });
            });
            $active_carousel_group.animate({
              left: '-100%'
            }, {
              duration: slide_duration,
              complete: function() {
                $portfolio_items.find('.delayed_container_append').each(function() {
                  $(this).css({
                    'width': item_width,
                    'position': 'absolute',
                    'left': (item_width * ($(this).data('next_position') - 1))
                  });
                  $(this).appendTo($next_carousel_group);
                });
                $active_carousel_group.removeClass('active');
                $active_carousel_group.children().each(function() {
                  position = $(this).data('position');
                  current_position = $(this).data('current_position');
                  $(this).removeClass('position_' + position + ' ' + 'changing_position current_position current_position_' + current_position);
                  $(this).data('position', '');
                  $(this).data('current_position', '');
                  $(this).hide();
                  $(this).css({
                    'position': '',
                    'width': '',
                    'left': ''
                  });
                  $(this).appendTo($portfolio_items);
                });
                $active_carousel_group.remove();
                tm_carousel_auto_rotate($the_portfolio);
              }
            });
            $next_carousel_group.addClass('active').css({
              'position': 'absolute',
              'top': 0,
              left: '100%'
            });
            $next_carousel_group.animate({
              left: '0%'
            }, {
              duration: slide_duration,
              complete: function() {
                setTimeout(function() {
                  $next_carousel_group.removeClass('next').addClass('active').css({
                    'position': '',
                    'width': '',
                    'top': '',
                    'left': ''
                  });
                  $next_carousel_group.find('.delayed_container_append_dup').remove();
                  $next_carousel_group.find('.changing_position').each(function(index) {
                    position = $(this).data('position');
                    current_position = $(this).data('current_position');
                    next_position = $(this).data('next_position');
                    $(this).removeClass('container_append delayed_container_append position_' + position + ' ' + 'changing_position current_position current_position_' + current_position + ' next_position next_position_' + next_position);
                    $(this).data('current_position', '');
                    $(this).data('next_position', '');
                    $(this).data('position', (index + 1));
                  });
                  $next_carousel_group.children().css({
                    'position': '',
                    'width': original_item_width,
                    'left': ''
                  });
                  $the_portfolio.data('carouseling', false);
                }, 100);
              }
            });
          } else {
            var $prev_carousel_group, current_position = columns,
              prev_position = columns,
              columns_span = columns - 1,
              active_items_start = items.indexOf($active_carousel_group.children().last()[0]),
              active_items_end = active_items_start - columns_span,
              prev_items_start = active_items_end - 1,
              prev_items_end = prev_items_start - columns_span;
            $prev_carousel_group = $('<div class="tm_pb_carousel_group prev" style="display: none;left: 100%;position: absolute;top: 0;">').insertBefore($active_carousel_group);
            $prev_carousel_group.css({
              'left': '-' + $active_carousel_group.innerWidth(),
              'width': $active_carousel_group.innerWidth()
            }).show();
            for (x = (items.length - 1), total = (items.length - 1);; x--, total--) {
              if (total <= active_items_start && total >= active_items_end) {
                $(items[x]).addClass('changing_position current_position current_position_' + current_position);
                $(items[x]).data('current_position', current_position);
                current_position--;
              }
              if (total <= prev_items_start && total >= prev_items_end) {
                $(items[x]).data('prev_position', prev_position);
                $(items[x]).addClass('changing_position prev_position prev_position_' + prev_position);
                if (!$(items[x]).hasClass('current_position')) {
                  $(items[x]).addClass('container_append');
                } else {
                  $(items[x]).clone(true).appendTo($active_carousel_group).addClass('delayed_container_append_dup').attr('id', $(items[x]).attr('id') + '-dup');
                  $(items[x]).addClass('delayed_container_append');
                }
                prev_position--;
              }
              if (prev_position <= 0) {
                break;
              }
              if (x == 0) {
                x = items.length;
              }
            }
            sorted = $portfolio_items.find('.container_append, .delayed_container_append_dup').sort(function(a, b) {
              var el_a_position = parseInt($(a).data('prev_position'));
              var el_b_position = parseInt($(b).data('prev_position'));
              return (el_a_position < el_b_position) ? -1 : (el_a_position > el_b_position) ? 1 : 0;
            });
            $(sorted).show().appendTo($prev_carousel_group);
            $prev_carousel_group.children().each(function() {
              $(this).css({
                'width': item_width,
                'position': 'absolute',
                'left': (item_width * ($(this).data('prev_position') - 1))
              });
            });
            $active_carousel_group.animate({
              left: '100%'
            }, {
              duration: slide_duration,
              complete: function() {
                $portfolio_items.find('.delayed_container_append').reverse().each(function() {
                  $(this).css({
                    'width': item_width,
                    'position': 'absolute',
                    'left': (item_width * ($(this).data('prev_position') - 1))
                  });
                  $(this).prependTo($prev_carousel_group);
                });
                $active_carousel_group.removeClass('active');
                $active_carousel_group.children().each(function() {
                  position = $(this).data('position');
                  current_position = $(this).data('current_position');
                  $(this).removeClass('position_' + position + ' ' + 'changing_position current_position current_position_' + current_position);
                  $(this).data('position', '');
                  $(this).data('current_position', '');
                  $(this).hide();
                  $(this).css({
                    'position': '',
                    'width': '',
                    'left': ''
                  });
                  $(this).appendTo($portfolio_items);
                });
                $active_carousel_group.remove();
              }
            });
            $prev_carousel_group.addClass('active').css({
              'position': 'absolute',
              'top': 0,
              left: '-100%'
            });
            $prev_carousel_group.animate({
              left: '0%'
            }, {
              duration: slide_duration,
              complete: function() {
                setTimeout(function() {
                  $prev_carousel_group.removeClass('prev').addClass('active').css({
                    'position': '',
                    'width': '',
                    'top': '',
                    'left': ''
                  });
                  $prev_carousel_group.find('.delayed_container_append_dup').remove();
                  $prev_carousel_group.find('.changing_position').each(function(index) {
                    position = $(this).data('position');
                    current_position = $(this).data('current_position');
                    prev_position = $(this).data('prev_position');
                    $(this).removeClass('container_append delayed_container_append position_' + position + ' ' + 'changing_position current_position current_position_' + current_position + ' prev_position prev_position_' + prev_position);
                    $(this).data('current_position', '');
                    $(this).data('prev_position', '');
                    position = index + 1;
                    $(this).data('position', position);
                    $(this).addClass('position_' + position);
                  });
                  $prev_carousel_group.children().css({
                    'position': '',
                    'width': original_item_width,
                    'left': ''
                  });
                  $the_portfolio.data('carouseling', false);
                }, 100);
              }
            });
          }
          return false;
        });
      } else {
        set_fullwidth_portfolio_columns($the_portfolio, false);
      }
    });
  }

  function tm_audio_module_set() {
    if ($('.tm_pb_audio_module .mejs-audio').length || $('.tm_audio_content .mejs-audio').length) {
      $('.tm_audio_container').each(function() {
        var $this_player = $(this),
          $time_rail = $this_player.find('.mejs-time-rail'),
          $time_slider = $this_player.find('.mejs-time-slider');
        $time_rail.removeAttr('style');
        $time_slider.removeAttr('style');
        var $count_timer = $this_player.find('div.mejs-currenttime-container'),
          player_width = $this_player.width(),
          controls_play_width = $this_player.find('.mejs-play').outerWidth(),
          time_width = $this_player.find('.mejs-currenttime-container').outerWidth(),
          volume_icon_width = $this_player.find('.mejs-volume-button').outerWidth(),
          volume_bar_width = $this_player.find('.mejs-horizontal-volume-slider').outerWidth(),
          new_time_rail_width;
        $count_timer.addClass('custom');
        $this_player.find('.mejs-controls div.mejs-duration-container').replaceWith($count_timer);
        new_time_rail_width = player_width - (controls_play_width + time_width + volume_icon_width + volume_bar_width + 100);
        if (0 < new_time_rail_width) {
          $time_rail.attr('style', 'min-width: ' + new_time_rail_width + 'px;');
          $time_slider.attr('style', 'min-width: ' + new_time_rail_width + 'px;');
        }
      });
    }
  }
  if ($('.tm_pb_section_video').length) {
    window._wpmejsSettings.pauseOtherPlayers = false;
  }
  if ($tm_pb_filterable_portfolio.length) {
    $(window).load(function() {
      $tm_pb_filterable_portfolio.each(function() {
        var $the_portfolio = $(this),
          $the_portfolio_items = $the_portfolio.find('.tm_pb_portfolio_items'),
          $left_orientatation = true == $the_portfolio.data('rtl') ? false : true;
        $the_portfolio.show();
        set_filterable_grid_items($the_portfolio);
        $the_portfolio.on('click', '.tm_pb_portfolio_filter a', function(e) {
          e.preventDefault();
          var category_slug = $(this).data('category-slug');
          $the_portfolio_items = $(this).parents('.tm_pb_filterable_portfolio').find('.tm_pb_portfolio_items');
          if ('all' == category_slug) {
            $the_portfolio.find('.tm_pb_portfolio_filter a').removeClass('active');
            $the_portfolio.find('.tm_pb_portfolio_filter_all a').addClass('active');
            $the_portfolio.find('.tm_pb_portfolio_item').removeClass('active inactive');
            $the_portfolio.find('.tm_pb_portfolio_item').show();
            $the_portfolio.find('.tm_pb_portfolio_item').addClass('active');
          } else {
            $the_portfolio.find('.tm_pb_portfolio_filter_all').removeClass('active');
            $the_portfolio.find('.tm_pb_portfolio_filter a').removeClass('active');
            $the_portfolio.find('.tm_pb_portfolio_filter_all a').removeClass('active');
            $(this).addClass('active');
            $the_portfolio_items.find('.tm_pb_portfolio_item').hide();
            $the_portfolio_items.find('.tm_pb_portfolio_item').addClass('inactive');
            $the_portfolio_items.find('.tm_pb_portfolio_item').removeClass('active');
            $the_portfolio_items.find('.tm_pb_portfolio_item.project_category_' + $(this).data('category-slug')).show();
            $the_portfolio_items.find('.tm_pb_portfolio_item.project_category_' + $(this).data('category-slug')).addClass('active').removeClass('inactive');
          }
          set_filterable_grid_items($the_portfolio);
          setTimeout(function() {
            set_filterable_portfolio_hash($the_portfolio);
          }, 500);
        });
        $(this).on('tm_hashchange', function(event) {
          var params = event.params;
          $the_portfolio = $('#' + event.target.id);
          if (!$the_portfolio.find('.tm_pb_portfolio_filter a[data-category-slug="' + params[0] + '"]').hasClass('active')) {
            $the_portfolio.find('.tm_pb_portfolio_filter a[data-category-slug="' + params[0] + '"]').click();
          }
          if (params[1]) {
            setTimeout(function() {
              if (!$the_portfolio.find('.tm_pb_portofolio_pagination a.page-' + params[1]).hasClass('active')) {
                $the_portfolio.find('.tm_pb_portofolio_pagination a.page-' + params[1]).addClass('active').click();
              }
            }, 300);
          }
        });
      });
    });

    function set_filterable_grid_items($the_portfolio) {
      var active_category = $the_portfolio.find('.tm_pb_portfolio_filter > a.active').data('category-slug'),
        container_width = $the_portfolio.find('.tm_pb_portfolio_items').innerWidth(),
        item_width = $the_portfolio.find('.tm_pb_portfolio_item').outerWidth(true),
        last_item_margin = item_width - $the_portfolio.find('.tm_pb_portfolio_item').outerWidth(),
        columns_count = Math.round((container_width + last_item_margin) / item_width),
        counter = 1,
        first_in_row = 1;
      $the_portfolio.find('.tm_pb_portfolio_item').removeClass('last_in_row first_in_row');
      $the_portfolio.find('.tm_pb_portfolio_item').each(function() {
        var $this_el = $(this);
        if (!$this_el.hasClass('inactive')) {
          if (first_in_row === counter) {
            $this_el.addClass('first_in_row');
          }
          if (0 === counter % columns_count) {
            $this_el.addClass('last_in_row');
            first_in_row = counter + 1;
          }
          counter++;
        }
      });
      if ('all' === active_category) {
        $the_portfolio_visible_items = $the_portfolio.find('.tm_pb_portfolio_item');
      } else {
        $the_portfolio_visible_items = $the_portfolio.find('.tm_pb_portfolio_item.project_category_' + active_category);
      }
      var visible_grid_items = $the_portfolio_visible_items.length,
        posts_number = $the_portfolio.data('posts-number'),
        pages = Math.ceil(visible_grid_items / posts_number);
      set_filterable_grid_pages($the_portfolio, pages);
      var visible_grid_items = 0;
      var _page = 1;
      $the_portfolio.find('.tm_pb_portfolio_item').data('page', '');
      $the_portfolio_visible_items.each(function(i) {
        visible_grid_items++;
        if (0 === parseInt(visible_grid_items % posts_number)) {
          $(this).data('page', _page);
          _page++;
        } else {
          $(this).data('page', _page);
        }
      });
      $the_portfolio_visible_items.filter(function() {
        return $(this).data('page') == 1;
      }).show();
      $the_portfolio_visible_items.filter(function() {
        return $(this).data('page') != 1;
      }).hide();
    }

    function set_filterable_grid_pages($the_portfolio, pages) {
      $pagination = $the_portfolio.find('.tm_pb_portofolio_pagination');
      if (!$pagination.length) {
        return;
      }
      $pagination.html('<ul></ul>');
      if (pages <= 1) {
        return;
      }
      $pagination_list = $pagination.children('ul');
      $pagination_list.append('<li class="prev" style="display:none;"><a href="#" data-page="prev" class="page-prev">' + tm_pb_custom.prev + '</a></li>');
      for (var page = 1; page <= pages; page++) {
        var first_page_class = page === 1 ? ' active' : '',
          last_page_class = page === pages ? ' last-page' : '',
          hidden_page_class = page >= 5 ? ' style="display:none;"' : '';
        $pagination_list.append('<li' + hidden_page_class + ' class="page page-' + page + '"><a href="#" data-page="' + page + '" class="page-' + page + first_page_class + last_page_class + '">' + page + '</a></li>');
      }
      $pagination_list.append('<li class="next"><a href="#" data-page="next" class="page-next">' + tm_pb_custom.next + '</a></li>');
    }
    $tm_pb_filterable_portfolio.on('click', '.tm_pb_portofolio_pagination a', function(e) {
      e.preventDefault();
      var to_page = $(this).data('page'),
        $the_portfolio = $(this).parents('.tm_pb_filterable_portfolio'),
        $the_portfolio_items = $the_portfolio.find('.tm_pb_portfolio_items');
      tm_pb_smooth_scroll($the_portfolio, false, 800);
      if ($(this).hasClass('page-prev')) {
        to_page = parseInt($(this).parents('ul').find('a.active').data('page')) - 1;
      } else if ($(this).hasClass('page-next')) {
        to_page = parseInt($(this).parents('ul').find('a.active').data('page')) + 1;
      }
      $(this).parents('ul').find('a').removeClass('active');
      $(this).parents('ul').find('a.page-' + to_page).addClass('active');
      var current_index = $(this).parents('ul').find('a.page-' + to_page).parent().index(),
        total_pages = $(this).parents('ul').find('li.page').length;
      $(this).parent().nextUntil('.page-' + (current_index + 3)).show();
      $(this).parent().prevUntil('.page-' + (current_index - 3)).show();
      $(this).parents('ul').find('li.page').each(function(i) {
        if (!$(this).hasClass('prev') && !$(this).hasClass('next')) {
          if (i < (current_index - 3)) {
            $(this).hide();
          } else if (i > (current_index + 1)) {
            $(this).hide();
          } else {
            $(this).show();
          }
          if (total_pages - current_index <= 2 && total_pages - i <= 5) {
            $(this).show();
          } else if (current_index <= 3 && i <= 4) {
            $(this).show();
          }
        }
      });
      if (to_page > 1) {
        $(this).parents('ul').find('li.prev').show();
      } else {
        $(this).parents('ul').find('li.prev').hide();
      }
      if ($(this).parents('ul').find('a.active').hasClass('last-page')) {
        $(this).parents('ul').find('li.next').hide();
      } else {
        $(this).parents('ul').find('li.next').show();
      }
      $the_portfolio.find('.tm_pb_portfolio_item').hide();
      $the_portfolio.find('.tm_pb_portfolio_item').filter(function(index) {
        return $(this).data('page') === to_page;
      }).show();
      setTimeout(function() {
        set_filterable_portfolio_hash($the_portfolio);
      }, 500);
    });

    function set_filterable_portfolio_hash($the_portfolio) {
      if (!$the_portfolio.attr('id')) {
        return;
      }
      var this_portfolio_state = [];
      this_portfolio_state.push($the_portfolio.attr('id'));
      this_portfolio_state.push($the_portfolio.find('.tm_pb_portfolio_filter > a.active').data('category-slug'));
      if ($the_portfolio.find('.tm_pb_portofolio_pagination a.active').length) {
        this_portfolio_state.push($the_portfolio.find('.tm_pb_portofolio_pagination a.active').data('page'));
      } else {
        this_portfolio_state.push(1);
      }
      this_portfolio_state = this_portfolio_state.join(tm_hash_module_param_seperator);
      tm_set_hash(this_portfolio_state);
    }
  }
  if ($tm_pb_gallery.length) {
    function set_gallery_grid_items($the_gallery) {
      var $the_gallery_items_container = $the_gallery.find('.tm_pb_gallery_items'),
        $the_gallery_items = $the_gallery_items_container.find('.tm_pb_gallery_item');
      var total_grid_items = $the_gallery_items.length,
        posts_number = $the_gallery_items_container.data('per_page'),
        pages = Math.ceil(total_grid_items / posts_number);
      set_gallery_grid_pages($the_gallery, pages);
      var total_grid_items = 0;
      var _page = 1;
      $the_gallery_items.data('page', '');
      $the_gallery_items.each(function(i) {
        total_grid_items++;
        if (0 === parseInt(total_grid_items % posts_number)) {
          $(this).data('page', _page);
          _page++;
        } else {
          $(this).data('page', _page);
        }
      });
      var visible_items = $the_gallery_items.filter(function() {
        return $(this).data('page') == 1;
      }).show();
      $the_gallery_items.filter(function() {
        return $(this).data('page') != 1;
      }).hide();
    }

    function set_gallery_grid_pages($the_gallery, pages) {
      $pagination = $the_gallery.find('.tm_pb_gallery_pagination');
      if (!$pagination.length) {
        return;
      }
      $pagination.html('<ul></ul>');
      if (pages <= 1) {
        $pagination.hide();
        return;
      }
      $pagination_list = $pagination.children('ul');
      $pagination_list.append('<li class="prev" style="display:none;"><a href="#" data-page="prev" class="page-prev">' + tm_pb_custom.prev + '</a></li>');
      for (var page = 1; page <= pages; page++) {
        var first_page_class = page === 1 ? ' active' : '',
          last_page_class = page === pages ? ' last-page' : '',
          hidden_page_class = page >= 5 ? ' style="display:none;"' : '';
        $pagination_list.append('<li' + hidden_page_class + ' class="page page-' + page + '"><a href="#" data-page="' + page + '" class="page-' + page + first_page_class + last_page_class + '">' + page + '</a></li>');
      }
      $pagination_list.append('<li class="next"><a href="#" data-page="next" class="page-next">' + tm_pb_custom.next + '</a></li>');
    }

    function set_gallery_hash($the_gallery) {
      if (!$the_gallery.attr('id')) {
        return;
      }
      var this_gallery_state = [];
      this_gallery_state.push($the_gallery.attr('id'));
      if ($the_gallery.find('.tm_pb_gallery_pagination a.active').length) {
        this_gallery_state.push($the_gallery.find('.tm_pb_gallery_pagination a.active').data('page'));
      } else {
        this_gallery_state.push(1);
      }
      this_gallery_state = this_gallery_state.join(tm_hash_module_param_seperator);
      tm_set_hash(this_gallery_state);
    }
    $tm_pb_gallery.each(function() {
      var $the_gallery = $(this);
      if ($the_gallery.hasClass('tm_pb_gallery_grid')) {
        $the_gallery.show();
        set_gallery_grid_items($the_gallery);
        $the_gallery.on('tm_hashchange', function(event) {
          var params = event.params;
          $the_gallery = $('#' + event.target.id);
          if (page_to = params[0]) {
            if (!$the_gallery.find('.tm_pb_gallery_pagination a.page-' + page_to).hasClass('active')) {
              $the_gallery.find('.tm_pb_gallery_pagination a.page-' + page_to).addClass('active').click();
            }
          }
        });
      }
    });
    $tm_pb_gallery.data('paginating', false);
    $tm_pb_gallery.on('click', '.tm_pb_gallery_pagination a', function(e) {
      e.preventDefault();
      var to_page = $(this).data('page'),
        $the_gallery = $(this).parents('.tm_pb_gallery'),
        $the_gallery_items_container = $the_gallery.find('.tm_pb_gallery_items'),
        $the_gallery_items = $the_gallery_items_container.find('.tm_pb_gallery_item');
      if ($the_gallery.data('paginating')) {
        return;
      }
      $the_gallery.data('paginating', true);
      if ($(this).hasClass('page-prev')) {
        to_page = parseInt($(this).parents('ul').find('a.active').data('page')) - 1;
      } else if ($(this).hasClass('page-next')) {
        to_page = parseInt($(this).parents('ul').find('a.active').data('page')) + 1;
      }
      $(this).parents('ul').find('a').removeClass('active');
      $(this).parents('ul').find('a.page-' + to_page).addClass('active');
      var current_index = $(this).parents('ul').find('a.page-' + to_page).parent().index(),
        total_pages = $(this).parents('ul').find('li.page').length;
      $(this).parent().nextUntil('.page-' + (current_index + 3)).show();
      $(this).parent().prevUntil('.page-' + (current_index - 3)).show();
      $(this).parents('ul').find('li.page').each(function(i) {
        if (!$(this).hasClass('prev') && !$(this).hasClass('next')) {
          if (i < (current_index - 3)) {
            $(this).hide();
          } else if (i > (current_index + 1)) {
            $(this).hide();
          } else {
            $(this).show();
          }
          if (total_pages - current_index <= 2 && total_pages - i <= 5) {
            $(this).show();
          } else if (current_index <= 3 && i <= 4) {
            $(this).show();
          }
        }
      });
      if (to_page > 1) {
        $(this).parents('ul').find('li.prev').show();
      } else {
        $(this).parents('ul').find('li.prev').hide();
      }
      if ($(this).parents('ul').find('a.active').hasClass('last-page')) {
        $(this).parents('ul').find('li.next').hide();
      } else {
        $(this).parents('ul').find('li.next').show();
      }
      $the_gallery_items.hide();
      var visible_items = $the_gallery_items.filter(function(index) {
        return $(this).data('page') === to_page;
      }).show();
      $the_gallery.data('paginating', false);
      setTimeout(function() {
        set_gallery_hash($the_gallery);
      }, 100);
      $('html, body').animate({
        scrollTop: $the_gallery.offset().top - 200
      }, 200);
    });
  }
  if ($tm_pb_counter_amount.length) {
    $tm_pb_counter_amount.each(function() {
      var $bar_item = $(this),
        bar_item_width = $bar_item.attr('data-width'),
        bar_item_padding = Math.ceil(parseFloat($bar_item.css('paddingLeft'))) + Math.ceil(parseFloat($bar_item.css('paddingRight'))),
        $bar_item_text = $bar_item.children('.tm_pb_counter_amount_number'),
        bar_item_text_width = $bar_item_text.width() + bar_item_padding;
      $bar_item.css({
        'width': bar_item_width,
        'min-width': bar_item_text_width
      });
    });
  }

  function tm_countdown_timer(timer) {
    var end_date = parseInt(timer.data('end-timestamp')),
      current_date = new Date().getTime() / 1000,
      seconds_left = (end_date - current_date);
    days = parseInt(seconds_left / 86400);
    days = days > 0 ? days : 0;
    seconds_left = seconds_left % 86400;
    hours = parseInt(seconds_left / 3600);
    hours = hours > 0 ? hours : 0;
    seconds_left = seconds_left % 3600;
    minutes = parseInt(seconds_left / 60);
    minutes = minutes > 0 ? minutes : 0;
    seconds = parseInt(seconds_left % 60);
    seconds = seconds > 0 ? seconds : 0;
    if (days == 0) {
      if (!timer.find('.days > .value').parent('.section').hasClass('zero')) {
        timer.find('.days > .value').html('00').parent('.section').addClass('zero').next().addClass('zero');
      }
    } else {
      days_slice = days.toString().length >= 2 ? days.toString().length : 2;
      timer.find('.days > .value').html(('00' + days).slice(-days_slice));
    }
    if (days == 0 && hours == 0) {
      if (!timer.find('.hours > .value').parent('.section').hasClass('zero')) {
        timer.find('.hours > .value').html('00').parent('.section').addClass('zero').next().addClass('zero');
      }
    } else {
      timer.find('.hours > .value').html(('0' + hours).slice(-2));
    }
    if (days == 0 && hours == 0 && minutes == 0) {
      if (!timer.find('.minutes > .value').parent('.section').hasClass('zero')) {
        timer.find('.minutes > .value').html('00').parent('.section').addClass('zero').next().addClass('zero');
      }
    } else {
      timer.find('.minutes > .value').html(('0' + minutes).slice(-2));
    }
    if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
      if (!timer.find('.seconds > .value').parent('.section').hasClass('zero')) {
        timer.find('.seconds > .value').html('00').parent('.section').addClass('zero');
      }
    } else {
      timer.find('.seconds > .value').html(('0' + seconds).slice(-2));
    }
  }

  function tm_countdown_timer_labels(timer) {
    if (timer.closest('.tm_pb_column_3_8').length || timer.closest('.tm_pb_column_1_4').length || timer.children('.tm_pb_countdown_timer_container').width() <= 400) {
      timer.find('.days .label').html(timer.find('.days').data('short'));
      timer.find('.hours .label').html(timer.find('.hours').data('short'));
      timer.find('.minutes .label').html(timer.find('.minutes').data('short'));
      timer.find('.seconds .label').html(timer.find('.seconds').data('short'));
    } else {
      timer.find('.days .label').html(timer.find('.days').data('full'));
      timer.find('.hours .label').html(timer.find('.hours').data('full'));
      timer.find('.minutes .label').html(timer.find('.minutes').data('full'));
      timer.find('.seconds .label').html(timer.find('.seconds').data('full'));
    }
  }
  if ($tm_pb_countdown_timer.length) {
    $tm_pb_countdown_timer.each(function() {
      var timer = $(this);
      tm_countdown_timer_labels(timer);
      tm_countdown_timer(timer);
      setInterval(function() {
        tm_countdown_timer(timer);
      }, 1000);
    });
  }
  if ($tm_pb_tabs.length) {
    $tm_pb_tabs.tm_pb_simple_slider({
      use_controls: false,
      use_arrows: false,
      slide: '.tm_pb_all_tabs > div',
      tabs_animation: true
    }).on('tm_hashchange', function(event) {
      var params = event.params;
      var $the_tabs = $('#' + event.target.id);
      var active_tab = params[0];
      if (!$the_tabs.find('.tm_pb_tabs_controls li').eq(active_tab).hasClass('tm_pb_tab_active')) {
        $the_tabs.find('.tm_pb_tabs_controls li').eq(active_tab).click();
      }
    });
    $tm_pb_tabs_li.click(function() {
      var $this_el = $(this),
        $tabs_container = $this_el.closest('.tm_pb_tabs').data('tm_pb_simple_slider');
      if ($tabs_container.tm_animation_running) return false;
      $this_el.addClass('tm_pb_tab_active').siblings().removeClass('tm_pb_tab_active');
      $tabs_container.data('tm_pb_simple_slider').tm_slider_move_to($this_el.index());
      if ($this_el.closest('.tm_pb_tabs').attr('id')) {
        var tab_state = [];
        tab_state.push($this_el.closest('.tm_pb_tabs').attr('id'));
        tab_state.push($this_el.index());
        tab_state = tab_state.join(tm_hash_module_param_seperator);
        tm_set_hash(tab_state);
      }
      return false;
    });
  }
  if ($tm_pb_map.length) {
    google.maps.event.addDomListener(window, 'load', function() {
      $tm_pb_map.each(function() {
        var $this_map_container = $(this),
          $this_map = $this_map_container.children('.tm_pb_map'),
          this_map_grayscale = $this_map_container.data('grayscale') || 0,
          infowindow_active, marker_icon = $this_map.data('marker-icon') || [tm_pb_custom.builder_images_uri + '/marker.png', 34, 53, false],
          map_style = $this_map.data('map-style');
        if (this_map_grayscale !== 0) {
          this_map_grayscale = '-' + this_map_grayscale.toString();
        }
        $this_map_container.data('map', new google.maps.Map($this_map[0], {
          zoom: parseInt($this_map.data('zoom')),
          center: new google.maps.LatLng(parseFloat($this_map.data('center-lat')), parseFloat($this_map.data('center-lng'))),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: $this_map.data('mouse-wheel') == 'on' ? true : false,
          panControlOptions: {
            position: $this_map_container.is('.tm_beneath_transparent_nav') ? google.maps.ControlPosition.LEFT_BOTTOM : google.maps.ControlPosition.LEFT_TOP
          },
          zoomControlOptions: {
            position: $this_map_container.is('.tm_beneath_transparent_nav') ? google.maps.ControlPosition.LEFT_BOTTOM : google.maps.ControlPosition.LEFT_TOP
          },
          styles: map_style
        }));
        $this_map_container.data('bounds', new google.maps.LatLngBounds());
        $this_map_container.find('.tm_pb_map_pin').each(function() {
          var $this_marker = $(this),
            position = new google.maps.LatLng(parseFloat($this_marker.data('lat')), parseFloat($this_marker.data('lng')));
          $this_map_container.data('bounds').extend(position);
          var marker = new google.maps.Marker({
            position: position,
            map: $this_map_container.data('map'),
            title: $this_marker.data('title'),
            icon: {
              url: marker_icon[0],
              size: new google.maps.Size(marker_icon[1], marker_icon[2]),
              anchor: new google.maps.Point(marker_icon[1] / 2, marker_icon[2])
            },
            animation: google.maps.Animation.DROP
          });
          if ($this_marker.find('.infowindow').length) {
            var infowindow = new google.maps.InfoWindow({
              content: $this_marker.html()
            });
            google.maps.event.addListener($this_map_container.data('map'), 'click', function() {
              infowindow.close();
            });
            google.maps.event.addListener(marker, 'click', function() {
              if (infowindow_active) {
                infowindow_active.close();
              }
              infowindow_active = infowindow;
              infowindow.open($this_map_container.data('map'), marker);
            });
          }
        });
        google.maps.event.addListener($this_map_container.data('map'), 'bounds_changed', function() {
          if (!$this_map_container.data('map').getBounds().contains($this_map_container.data('bounds').getNorthEast()) || !$this_map_container.data('map').getBounds().contains($this_map_container.data('bounds').getSouthWest())) {
            $this_map_container.data('map').fitBounds($this_map_container.data('bounds'));
          }
        });
      });
    });
  }
  if ($tm_pb_shop.length) {
    $tm_pb_shop.each(function() {
      var $this_el = $(this),
        icon = $this_el.data('icon') || '';
      if (icon === '') {
        return true;
      }
      $this_el.find('.tm_overlay').attr('data-icon', icon).addClass('tm_pb_inline_icon');
    });
  }
  if ($tm_pb_circle_counter.length) {
    window.tm_pb_circle_counter_init = function($the_counter, animate) {
      if (0 === $the_counter.width()) {
        return;
      }
      $the_counter.easyPieChart({
        animate: {
          duration: 1800,
          enabled: true
        },
        size: 0 !== $the_counter.width() ? $the_counter.width() : 10,
        barColor: $the_counter.data('bar-bg-color'),
        trackColor: $the_counter.data('color') || '#000000',
        trackAlpha: $the_counter.data('alpha') || '0.1',
        lineWidth: $the_counter.data('circle-width') || '5',
        size: $the_counter.data('circle-size') || '110',
        scaleColor: false,
        lineCap: $the_counter.data('bar-type') || 'round',
        onStart: function() {
          $(this.el).find('.percent p').css({
            'visibility': 'visible'
          });
        },
        onStep: function(from, to, percent) {
          $(this.el).find('.percent-value').text(Math.round(parseInt(percent)));
        },
        onStop: function(from, to) {
          $(this.el).find('.percent-value').text($(this.el).data('number-value'));
        }
      });
    }
    window.tm_pb_reinit_circle_counters = function($tm_pb_circle_counter) {
      $tm_pb_circle_counter.each(function() {
        var $the_counter = $(this);
        window.tm_pb_circle_counter_init($the_counter, false);
        $the_counter.on('containerWidthChanged', function(event) {
          $the_counter = $(event.target);
          $the_counter.find('canvas').remove();
          $the_counter.removeData('easyPieChart');
          window.tm_pb_circle_counter_init($the_counter, true);
        });
      });
    }
    window.tm_pb_reinit_circle_counters($tm_pb_circle_counter);
  }
  if ($tm_pb_number_counter.length) {
    window.tm_pb_reinit_number_counters = function($tm_pb_number_counter) {
      if ($.fn.fitText) {
        $tm_pb_number_counter.find('.percent').fitText(0.3);
      }
      $tm_pb_number_counter.each(function() {
        var $this_counter = $(this);
        $this_counter.easyPieChart({
          animate: {
            duration: 1800,
            enabled: true
          },
          size: 0,
          trackColor: false,
          scaleColor: false,
          lineWidth: 0,
          onStart: function() {
            $(this.el).find('.percent').css({
              'visibility': 'visible'
            });
          },
          onStep: function(from, to, percent) {
            if (percent != to)
              $(this.el).find('.percent-value').text(Math.round(parseInt(percent)));
          },
          onStop: function(from, to) {
            $(this.el).find('.percent-value').text($(this.el).data('number-value'));
          }
        });
      });
    }
    window.tm_pb_reinit_number_counters($tm_pb_number_counter);
  }

  function tm_apply_parallax() {
    var $this = $(this),
      element_top = $this.offset().top,
      window_top = $tm_window.scrollTop(),
      y_pos = (((window_top + $tm_window.height()) - element_top) * 0.3),
      main_position;
    main_position = 'translate(0, ' + y_pos + 'px)';
    $this.find('.tm_parallax_bg').css({
      '-webkit-transform': main_position,
      '-moz-transform': main_position,
      '-ms-transform': main_position,
      'transform': main_position
    });
  }

  function tm_parallax_set_height() {
    var $this = $(this),
      bg_height;
    bg_height = ($tm_window.height() * 0.3 + $this.innerHeight());
    $this.find('.tm_parallax_bg').css({
      'height': bg_height
    });
  }
  $('.tm_pb_toggle_title').click(function() {
    var $this_heading = $(this),
      $module = $this_heading.closest('.tm_pb_toggle'),
      $section = $module.parents('.tm_pb_section'),
      $content = $module.find('.tm_pb_toggle_content'),
      $accordion = $module.closest('.tm_pb_accordion'),
      is_accordion = $accordion.length,
      is_accordion_toggling = $accordion.hasClass('tm_pb_accordion_toggling'),
      $accordion_active_toggle;
    if (is_accordion) {
      if ($module.hasClass('tm_pb_toggle_open') || is_accordion_toggling) {
        return false;
      }
      $accordion.addClass('tm_pb_accordion_toggling');
      $accordion_active_toggle = $module.siblings('.tm_pb_toggle_open');
    }
    if ($content.is(':animated')) {
      return;
    }
    $content.slideToggle(700, function() {
      if ($module.hasClass('tm_pb_toggle_close')) {
        $module.removeClass('tm_pb_toggle_close').addClass('tm_pb_toggle_open');
      } else {
        $module.removeClass('tm_pb_toggle_open').addClass('tm_pb_toggle_close');
      }
      if ($section.hasClass('tm_pb_section_parallax') && !$section.children().hasClass('tm_pb_parallax_css')) {
        $.proxy(tm_parallax_set_height, $section)();
      }
    });
    if (is_accordion) {
      $accordion_active_toggle.find('.tm_pb_toggle_content').slideToggle(700, function() {
        $accordion_active_toggle.removeClass('tm_pb_toggle_open').addClass('tm_pb_toggle_close');
        $accordion.removeClass('tm_pb_accordion_toggling');
      });
    }
  });
  var $tm_contact_container = $('.tm_pb_contact_form_container');
  if ($tm_contact_container.length) {
    $tm_contact_container.each(function() {
      var $this_contact_container = $(this),
        $tm_contact_form = $this_contact_container.find('form'),
        $tm_contact_submit = $this_contact_container.find('input.tm_pb_contact_submit'),
        $tm_inputs = $tm_contact_form.find('input[type=text],textarea'),
        tm_email_reg = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/,
        redirect_url = typeof $this_contact_container.data('redirect_url') !== 'undefined' ? $this_contact_container.data('redirect_url') : '';

      $tm_contact_form.on('submit', function(event) {
        var $this_contact_form = $(this),
          $this_inputs = $this_contact_form.find('.tm_pb_contact_form_input, .tm_pb_contact_captcha'),
          this_tm_contact_error = false,
          $tm_contact_message = $this_contact_form.closest('.tm_pb_contact_form_container').find('.tm-pb-contact-message'),
          tm_message = '',
          tm_fields_message = '',
          $this_contact_container = $this_contact_form.closest('.tm_pb_contact_form_container'),
          $captcha_field = $this_contact_form.find('.tm_pb_contact_captcha'),
          form_unique_id = typeof $this_contact_container.data('form_unique_num') !== 'undefined' ? $this_contact_container.data('form_unique_num') : 0,
          inputs_list = [];
        tm_message = '<ul>';
        $this_inputs.removeClass('tm_contact_error');
        $this_inputs.each(function() {
          var $this_el = $(this),
            this_val = $this_el.val(),
            this_label = $this_el.siblings('label').text(),
            field_type = typeof $this_el.data('field_type') !== 'undefined' ? $this_el.data('field_type') : 'text',
            required_mark = typeof $this_el.data('required_mark') !== 'undefined' ? $this_el.data('required_mark') : 'not_required',
            original_id = typeof $this_el.data('original_id') !== 'undefined' ? $this_el.data('original_id') : '',
            field_name;
          if (typeof $this_el.attr('id') !== 'undefined') {
            inputs_list.push({
              'field_id': $this_el.attr('id'),
              'original_id': original_id,
              'required_mark': required_mark,
              'field_type': field_type,
              'field_label': this_label
            });
          }
          if ('required' === required_mark && ('' === this_val || this_label === this_val || null === this_val)) {
            $this_el.addClass('tm_contact_error');
            this_tm_contact_error = true;
            field_name = $this_el.data('original_title');
            if (!field_name) {
              field_name = $this_el.attr('name');
            }
            tm_fields_message += '<li>' + field_name + '</li>';
          }
          if ('email' === field_type && '' !== this_val && this_label !== this_val && !tm_email_reg.test(this_val)) {
            $this_el.addClass('tm_contact_error');
            this_tm_contact_error = true;
            if (!tm_email_reg.test(this_val)) {
              tm_message += '<li>' + tm_pb_custom.invalid + '</li>';
            }
          }
        });
        if ($captcha_field.length && '' !== $captcha_field.val()) {
          var first_digit = parseInt($captcha_field.data('first_digit')),
            second_digit = parseInt($captcha_field.data('second_digit'));
          if (parseInt($captcha_field.val()) !== first_digit + second_digit) {
            tm_message += '<li>' + tm_pb_custom.wrong_captcha + '</li>';
            this_tm_contact_error = true;
            first_digit = Math.floor((Math.random() * 15) + 1);
            second_digit = Math.floor((Math.random() * 15) + 1);
            $captcha_field.data('first_digit', first_digit);
            $captcha_field.data('second_digit', second_digit);
            $this_contact_form.find('.tm_pb_contact_captcha_question').empty().append(first_digit + ' + ' + second_digit);
          }
        }
        if (!this_tm_contact_error) {
          var $href = $(this).attr('action'),
            form_data = $(this).serializeArray();
          form_data.push({
            'name': 'tm_pb_contact_email_fields_' + form_unique_id,
            'value': JSON.stringify(inputs_list)
          });
          $tm_contact_message.text('');
          $tm_contact_form.trigger('tm_form:validated');
        }
        tm_message += '</ul>';
        if ('' !== tm_fields_message) {
          if (tm_message != '<ul></ul>') {
            tm_message = '<p class="tm_normal_padding">' + tm_pb_custom.contact_error_message + '</p>' + tm_message;
          }
          tm_fields_message = '<ul>' + tm_fields_message + '</ul>';
          tm_fields_message = '<p>' + tm_pb_custom.fill_message + '</p>' + tm_fields_message;
          tm_message = tm_fields_message + tm_message;
        }
        if (tm_message != '<ul></ul>') {
          $tm_contact_message.html(tm_message);
        }
        event.preventDefault();
      });
    });
  }
  $('.tm_pb_video .tm_pb_video_overlay, .tm_pb_video_wrap .tm_pb_video_overlay').click(function() {
    var $this = $(this),
      $video_image = $this.closest('.tm_pb_video_overlay');
    $video_image.fadeTo(500, 0, function() {
      var $image = $(this);
      $image.css('display', 'none');
    });
    return false;
  });

  function tm_pb_resize_section_video_bg($video) {
    $element = typeof $video !== 'undefined' ? $video.closest('.tm_pb_section_video_bg') : $('.tm_pb_section_video_bg');
    $element.each(function() {
      var $this_el = $(this),
        ratio = (typeof $this_el.attr('data-ratio') !== 'undefined') ? $this_el.attr('data-ratio') : $this_el.find('video').attr('width') / $this_el.find('video').attr('height'),
        $video_elements = $this_el.find('.mejs-video, video, object').css('margin', 0),
        $container = $this_el.closest('.tm_pb_section_video').length ? $this_el.closest('.tm_pb_section_video') : $this_el.closest('.tm_pb_slides'),
        body_width = $container.width(),
        container_height = $container.innerHeight(),
        width, height;
      if (typeof $this_el.attr('data-ratio') == 'undefined')
        $this_el.attr('data-ratio', ratio);
      if (body_width / container_height < ratio) {
        width = container_height * ratio;
        height = container_height;
      } else {
        width = body_width;
        height = body_width / ratio;
      }
      $video_elements.width(width).height(height);
    });
  }

  function tm_pb_center_video($video) {
    $element = typeof $video !== 'undefined' ? $video : $('.tm_pb_section_video_bg .mejs-video');
    $element.each(function() {
      var $video_width = $(this).width() / 2;
      var $video_width_negative = 0 - $video_width;
      $(this).css("margin-left", $video_width_negative);
      if (typeof $video !== 'undefined') {
        if ($video.closest('.tm_pb_slider').length && !$video.closest('.tm_pb_first_video').length)
          return false;
      }
    });
  }

  function tm_fix_slider_height() {
    if (!$tm_pb_slider.length) return;
    $tm_pb_slider.each(function() {
      var $slide_section = $(this).parent('.tm_pb_section'),
        $slide = $(this).find('.tm_pb_slide'),
        $slide_container = $slide.find('.tm_pb_container'),
        max_height = 0;
      if ($slide_section.is('.tm_pb_section_first')) {
        return true;
      }
      $slide_container.css('min-height', 0);
      $slide.each(function() {
        var $this_el = $(this),
          height = $this_el.innerHeight();
        if (max_height < height)
          max_height = height;
      });
      $slide_container.css('min-height', max_height);
    });
  }

  function tm_fix_nav_direction() {
    window_width = $(window).width();
    $('.nav li.tm-reverse-direction-nav').removeClass('tm-reverse-direction-nav');
    $('.nav li li ul').each(function() {
      var $dropdown = $(this),
        dropdown_width = $dropdown.width(),
        dropdown_offset = $dropdown.offset(),
        $parents = $dropdown.parents('.nav > li');
      if (dropdown_offset.left > (window_width - dropdown_width)) {
        $parents.addClass('tm-reverse-direction-nav');
      }
    });
  }
  tm_fix_nav_direction();
  tm_pb_form_placeholders_init($('.tm_pb_newsletter_form'));
  $('.tm_pb_fullwidth_menu ul.nav').each(function(i) {
    i++;
    tm_duplicate_menu($(this), $(this).parents('.tm_pb_row').find('div .mobile_nav'), 'mobile_menu' + i, 'tm_mobile_menu');
  });
  window.tm_fix_testimonial_inner_width = function() {
    var window_width = $(window).width();
    if (window_width > 767) {
      $('.tm_pb_testimonial').each(function() {
        if (!$(this).is(':visible')) {
          return;
        }
        var $testimonial = $(this),
          testimonial_width = $testimonial.width(),
          $portrait = $testimonial.find('.tm_pb_testimonial_portrait'),
          portrait_width = $portrait.width(),
          $testimonial_inner = $testimonial.find('.tm_pb_testimonial_description_inner'),
          $outer_column = $testimonial.closest('.tm_pb_column'),
          testimonial_inner_width = testimonial_width,
          subtract = !($outer_column.hasClass('tm_pb_column_1_3') || $outer_column.hasClass('tm_pb_column_1_4') || $outer_column.hasClass('tm_pb_column_3_8')) ? portrait_width + 31 : 0;
        $testimonial_inner.width(testimonial_inner_width - subtract);
      });
    } else {
      $('.tm_pb_testimonial_description_inner').removeAttr('style');
    }
  }
  window.tm_fix_testimonial_inner_width();
  window.tm_reinint_waypoint_modules = function() {
    if ($.fn.waypoint) {
      var $tm_pb_circle_counter = $('.tm_pb_circle_counter_bar'),
        $tm_pb_number_counter = $('.tm_pb_number_counter');
      $('.tm_pb_counter_container, .tm-waypoint').waypoint({
        offset: '75%',
        handler: function() {
          $(this.element).addClass('tm-animated');
        }
      });
      if ($tm_pb_circle_counter.length) {
        $tm_pb_circle_counter.each(function() {
          var $this_counter = $(this);
          if (!$this_counter.is(':visible')) {
            return;
          }
          $this_counter.waypoint({
            offset: '65%',
            handler: function() {
              $this_counter.data('easyPieChart').update($this_counter.data('number-value'));
            }
          });
        });
      }
      if ($tm_pb_number_counter.length) {
        $tm_pb_number_counter.each(function() {
          var $this_counter = $(this);
          $this_counter.waypoint({
            offset: '75%',
            handler: function() {
              $this_counter.data('easyPieChart').update($this_counter.data('number-value'));
            }
          });
        });
      }
    }
  }
  window.tm_calc_fullscreen_section = function() {
    var $tm_window = $(window),
      $body = $('body'),
      $wpadminbar = $('#wpadminbar'),
      tm_is_vertical_nav = $body.hasClass('tm_vertical_nav'),
      $this_section = $(this),
      this_section_index = $this_section.index('.tm_pb_fullwidth_header'),
      $header = $this_section.children('.tm_pb_fullwidth_header_container'),
      $header_content = $header.children('.header-content-container'),
      $header_image = $header.children('.header-image-container'),
      sectionHeight = $tm_window.height(),
      $wpadminbar = $('#wpadminbar'),
      $top_header = $('#top-header'),
      $main_header = $('#main-header'),
      tm_header_height, secondary_nav_height;
    secondary_nav_height = $top_header.length && $top_header.is(':visible') ? $top_header.innerHeight() : 0;
    tm_header_height = $main_header.length ? $main_header.innerHeight() + secondary_nav_height : 0;
    var calc_header_offset = ($wpadminbar.length) ? tm_header_height + $wpadminbar.innerHeight() - 1 : tm_header_height - 1;
    if ($body.hasClass('tm_vertical_nav')) {
      if ($tm_window.width() >= 980 && $top_header.length) {
        sectionHeight -= $top_header.height();
      }
      if ($wpadminbar.length) {
        sectionHeight -= $wpadminbar.height();
      }
    } else {
      if ($body.hasClass('tm_hide_nav')) {
        if ($wpadminbar.length) {
          sectionHeight -= $wpadminbar.height();
        }
        if ($tm_window.width() < 981 && !$body.hasClass('tm_transparent_nav')) {
          sectionHeight -= $('#main-header').height();
        }
      } else {
        if ($this_section.offset().top <= calc_header_offset + 3) {
          if (tm_is_vertical_nav) {
            var $top_header = $('#top-header'),
              top_header_height = ($top_header.length && 0 === $this_section.index('.tm_pb_fullscreen')) ? $top_header.height() : 0,
              wpadminbar_height = ($wpadminbar.length && 0 === $this_section.index('.tm_pb_fullscreen')) ? $wpadminbar.height() : 0,
              calc_header_offset_vertical = wpadminbar_height + top_header_height;
            sectionHeight -= calc_header_offset_vertical;
          } else {
            sectionHeight -= calc_header_offset;
          }
        }
      }
    }
    if ($body.hasClass('tm_transparent_nav') && $body.hasClass('tm_hide_nav') && 0 === this_section_index) {
      $this_section.css('padding-top', '');
    }
    $this_section.css('min-height', sectionHeight + 'px');
    $header.css('min-height', sectionHeight + 'px');
    if ($header.hasClass('center') && $header_content.hasClass('bottom') && $header_image.hasClass('bottom')) {
      $header.addClass('bottom-bottom');
    }
    if ($header.hasClass('center') && $header_content.hasClass('center') && $header_image.hasClass('center')) {
      $header.addClass('center-center');
    }
    if ($header.hasClass('center') && $header_content.hasClass('center') && $header_image.hasClass('bottom')) {
      $header.addClass('center-bottom');
      var contentHeight = sectionHeight - $header_image.outerHeight(true);
      if (contentHeight > 0) {
        $header_content.css('min-height', contentHeight + 'px');
      }
    }
    if ($header.hasClass('center') && $header_content.hasClass('bottom') && $header_image.hasClass('center')) {
      $header.addClass('bottom-center');
    }
    if (($header.hasClass('left') || $header.hasClass('right')) && !$header_content.length && $header_image.length) {
      $header.css('justify-content', 'flex-end');
    }
    if ($header.hasClass('center') && $header_content.hasClass('bottom') && !$header_image.length) {
      $header_content.find('.header-content').css('margin-bottom', 80 + 'px');
    }
    if ($header_content.hasClass('bottom') && $header_image.hasClass('center')) {
      $header_image.find('.header-image').css('margin-bottom', 80 + 'px');
      $header_image.css('align-self', 'flex-end');
    }
  }
  $(window).resize(function() {
    var window_width = $tm_window.width(),
      tm_container_css_width = $tm_container.css('width'),
      tm_container_width_in_pixel = (typeof tm_container_css_width !== 'undefined') ? tm_container_css_width.substr(-1, 1) !== '%' : '',
      tm_container_actual_width = (tm_container_width_in_pixel) ? $tm_container.width() : (($tm_container.width() / 100) * window_width), // $tm_container.width() doesn't recognize pixel or percentage unit. It's our duty to understand what it returns and convert it properly
      containerWidthChanged = tm_container_width !== tm_container_actual_width;
    tm_pb_resize_section_video_bg();
    tm_pb_center_video();
    tm_fix_slider_height();
    tm_fix_nav_direction();
    $tm_pb_fullwidth_portfolio.each(function() {
      set_container_height = $(this).hasClass('tm_pb_fullwidth_portfolio_carousel') ? true : false;
      set_fullwidth_portfolio_columns($(this), set_container_height);
    });
    if (containerWidthChanged) {
      $('.container-width-change-notify').trigger('containerWidthChanged');
      setTimeout(function() {
        $tm_pb_filterable_portfolio.each(function() {
          set_filterable_grid_items($(this));
        });
        $tm_pb_gallery.each(function() {
          if ($(this).hasClass('tm_pb_gallery_grid')) {
            set_gallery_grid_items($(this));
          }
        });
      }, 100);
      tm_container_width = tm_container_actual_width;
      etRecalculateOffset = true;
      if ($tm_pb_circle_counter.length) {
        $tm_pb_circle_counter.each(function() {
          var $this_counter = $(this);
          if (!$this_counter.is(':visible')) {
            return;
          }
          $this_counter.data('easyPieChart').update($this_counter.data('number-value'));
        });
      }
      if ($tm_pb_countdown_timer.length) {
        $tm_pb_countdown_timer.each(function() {
          var timer = $(this);
          tm_countdown_timer_labels(timer);
        });
      }
    }
    window.tm_fix_testimonial_inner_width();
    tm_audio_module_set();
  });
  $(window).ready(function() {
    if ($.fn.fitVids) {
      $('.tm_pb_slide_video').fitVids();
      $('.tm_pb_module').fitVids({
        customSelector: "iframe[src^='http://www.hulu.com'], iframe[src^='http://www.dailymotion.com'], iframe[src^='http://www.funnyordie.com'], iframe[src^='https://embed-ssl.ted.com'], iframe[src^='http://embed.revision3.com'], iframe[src^='https://flickr.com'], iframe[src^='http://blip.tv'], iframe[src^='http://www.collegehumor.com']"
      });
    }
    tm_fix_video_wmode('.fluid-width-video-wrapper');
    tm_fix_slider_height();
  });
  $(window).load(function() {
    tm_fix_fullscreen_section();
    $('section.tm_pb_fullscreen').each(function() {
      var $this_section = $(this);
      $.proxy(tm_calc_fullscreen_section, $this_section)();
      $tm_window.on('resize', $.proxy(tm_calc_fullscreen_section, $this_section));
    });
    $('.tm_pb_fullwidth_header_scroll a').click(function(event) {
      event.preventDefault();
      var $this_section = $(this).parents('section'),
        is_next_fullscreen = $this_section.next().hasClass('tm_pb_fullscreen'),
        $wpadminbar = $('#wpadminbar'),
        wpadminbar_height = ($wpadminbar.length && !is_next_fullscreen) ? $wpadminbar.height() : 0,
        main_header_height = is_next_fullscreen || !tm_is_fixed_nav ? 0 : $main_header.height(),
        top_header_height = is_next_fullscreen || !tm_is_fixed_nav ? 0 : $top_header.height(),
        section_bottom = $this_section.offset().top + $this_section.outerHeight(true) - (wpadminbar_height + top_header_height + main_header_height);
      if ($this_section.length) {
        $('html, body').animate({
          scrollTop: section_bottom
        }, 800);
        if (!$('#main-header').hasClass('tm-fixed-header') && $('body').hasClass('tm_fixed_nav') && $(window).width() > 980) {
          setTimeout(function() {
            var section_offset_top = $this_section.offset().top,
              section_height = $this_section.outerHeight(true),
              main_header_height = is_next_fullscreen ? 0 : $main_header.height(),
              section_bottom = section_offset_top + section_height - (main_header_height + top_header_height + wpadminbar_height);
            $('html, body').animate({
              scrollTop: section_bottom
            }, 280, 'linear');
          }, 780);
        }
      }
    });
    setTimeout(function() {
      $('.tm_pb_preload').removeClass('tm_pb_preload');
    }, 500);
    if ($.fn.hashchange) {
      $(window).hashchange(function() {
        var hash = window.location.hash.substring(1);
        process_tm_hashchange(hash);
      });
      $(window).hashchange();
    }
    if ($tm_pb_parallax.length && !tm_is_mobile_device) {
      $tm_pb_parallax.each(function() {
        if ($(this).hasClass('tm_pb_parallax_css')) {
          return;
        }
        var $this_parent = $(this).parent();
        $.proxy(tm_parallax_set_height, $this_parent)();
        $.proxy(tm_apply_parallax, $this_parent)();
        $tm_window.on('scroll', $.proxy(tm_apply_parallax, $this_parent));
        $tm_window.on('resize', $.proxy(tm_parallax_set_height, $this_parent));
        $tm_window.on('resize', $.proxy(tm_apply_parallax, $this_parent));
        $this_parent.find('.tm-learn-more .heading-more').click(function() {
          setTimeout(function() {
            $.proxy(tm_parallax_set_height, $this_parent)();
          }, 300);
        });
      });
    }
    tm_audio_module_set();
    window.tm_reinint_waypoint_modules();
  });
  if ($('.tm_section_specialty').length) {
    $('.tm_section_specialty').each(function() {
      var this_row = $(this).find('.tm_pb_row');
      this_row.find('>.tm_pb_column:not(.tm_pb_specialty_column)').addClass('tm_pb_column_single');
    });
  }
  if ($('.tm_pb_section_parallax').length && $('.tm_pb_map').length) {
    $('body').addClass('parallax-map-support');
  }
  $('.tm_pb_widget_area ' + tm_pb_custom.widget_search_selector).each(function() {
    var $search_wrap = $(this),
      $search_input_submit = $search_wrap.find('input[type="submit"]'),
      search_input_submit_text = $search_input_submit.attr('value'),
      $search_button = $search_wrap.find('button'),
      search_button_text = $search_button.text(),
      has_submit_button = $search_input_submit.length || $search_button.length ? true : false,
      min_column_width = 150;
    if (!$search_wrap.find('input[type="text"]').length && !$search_wrap.find('input[type="search"]').length) {
      return;
    }
    if (!has_submit_button) {
      $search_wrap.addClass('tm-no-submit-button');
    }
    if ($search_wrap.width() < 150) {
      $search_wrap.addClass('tm-narrow-wrapper');
    }
    if ($search_input_submit.length && (typeof search_input_submit_text == 'undefined' || search_input_submit_text === '')) {
      $search_input_submit.remove();
      $search_wrap.addClass('tm-no-submit-button');
    }
    if ($search_button.length && (typeof search_button_text == 'undefined' || search_button_text === '')) {
      $search_button.remove();
      $search_wrap.addClass('tm-no-submit-button');
    }
  });
  if ($('.tm_pb_search').length) {
    $('.tm_pb_search').each(function() {
      var $this_module = $(this),
        $input_field = $this_module.find('.tm_pb_s'),
        $button = $this_module.find('.tm_pb_searchsubmit'),
        input_padding = $this_module.hasClass('tm_pb_text_align_right') ? 'paddingLeft' : 'paddingRight',
        disabled_button = $this_module.hasClass('tm_pb_hide_search_button');
      if ($button.innerHeight() > $input_field.innerHeight()) {
        $input_field.height($button.innerHeight());
      }
      if (!disabled_button) {
        $input_field.css(input_padding, $button.innerWidth() + 10);
      }
    });
  }
  if ($('.tm_pb_comments_module').length) {
    $('.tm_pb_comments_module').each(function() {
      var $comments_module = $(this),
        $comments_module_button = $comments_module.find('.comment-reply-link');
      if ($comments_module_button.length) {
        $comments_module_button.addClass('tm_pb_button');
        if (typeof $comments_module.data('icon') !== 'undefined') {
          $comments_module_button.attr('data-icon', $comments_module.data('icon'));
          $comments_module_button.addClass('tm_pb_custom_button_icon');
        }
      }
    });
  }
  if ($('.tm_pb_swiper')[0]) {
    $('.tm_pb_swiper').each(function() {
      var $this = $(this),
        settings = $this.data('settings'),
        pagination = ('on' === settings['pagination']) ? true : false,
        navigateButton = ('on' === settings['navigateButton']) ? true : false,
        autoplay = ('on' === settings['autoplay']) ? 3500 : false,
        centeredSlides = ('on' === settings['centeredSlides']) ? true : false,
        spaceBetweenSlides = settings['spaceBetweenSlides'] || 0,
        slidesPerView = settings['slidesPerView'],
        swiperContainer = $('.swiper-container', $this),
        swiper = new Swiper(swiperContainer, {
          slidesPerView: +slidesPerView,
          autoplay: autoplay,
          centeredSlides: centeredSlides,
          mousewheelControl: false,
          paginationClickable: true,
          spaceBetween: +spaceBetweenSlides,
          speed: 500,
          nextButton: (navigateButton) ? $('.swiper-button-next', $this) : null,
          prevButton: (navigateButton) ? $('.swiper-button-prev', $this) : null,
          pagination: (pagination) ? $('.swiper-pagination', $this) : null,
          onInit: function() {
            if (!navigateButton) {
              $('.swiper-button-next, .swiper-button-prev', $this).remove();
            }
            if (!pagination) {
              $('.swiper-pagination', $this).remove();
            }
          },
          breakpoints: {
            1200: {
              slidesPerView: Math.floor(slidesPerView * 0.75),
              spaceBetween: Math.floor(spaceBetweenSlides * 0.75)
            },
            992: {
              slidesPerView: Math.floor(slidesPerView * 0.5),
              spaceBetween: Math.floor(spaceBetweenSlides * 0.5)
            },
            769: {
              slidesPerView: (0 !== Math.floor(slidesPerView * 0.25)) ? Math.floor(slidesPerView * 0.25) : 1
            },
          }
        });
    });
    $(window).on('load', loadHandler);

    function loadHandler() {
      $('.tm_pb_swiper').css({
        'opacity': '1'
      });
    }
  }
});
(function($){$.fn.fitText=function(kompressor,options){var compressor=kompressor||1,settings=$.extend({'minFontSize':Number.NEGATIVE_INFINITY,'maxFontSize':$(this).css('font-size')},options);return this.each(function(){var $this=$(this);var resizer=function(){$this.css('font-size',Math.max(Math.min($this.width()/ (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
};resizer();$(window).on('resize.fittext orientationchange.fittext',resizer);});};})(jQuery);
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
window.Registry=(function(){"use strict";var modules={};var mode='grid';function _testModule(module){if(module.getInstance&&typeof module.getInstance==='function'){return true;}else{return false;}}
function register(name,module){if(_testModule(module)){modules[name]=module;}else{throw new Error('Invalide module "'+ name+'". The function "getInstance" is not defined.');}}
function registryMap(map){for(var name in map){if(!map.hasOwnProperty(name)){continue;}
if(_testModule(map[name])){modules[name]=map[name];}else{throw new Error('Invalide module "'+ name+'" inside the collection. The function "getInstance" is not defined.');}}}
function unregister(name){delete modules[name];}
function _get(name){var module=modules[name];if(!module){throw new Error('The module "'+ name+'" has not been registered or it was unregistered.');}
if(typeof module.getInstance!=='function'){throw new Error('The module "'+ name+'" can not be instantiated. '+'The function "getInstance" is not defined.');}
return modules[name].getInstance();}
function getMode(){return mode;}
function setMode(modeName){mode=modeName;return mode;}
return{register:register,unregister:unregister,_get:_get,registryMap:registryMap,getMode:getMode,setMode:setMode};})();
!function(e,t,s,i){"use strict";function l(t,i){if(this.el=t,this.$el=e(t),this.s=e.extend({},o,i),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in s.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=e(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(e(this.s.selector)):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}var o={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};l.prototype.init=function(){var s=this;s.s.preload>s.$items.length&&(s.s.preload=s.$items.length);var i=t.location.hash;i.indexOf("lg="+this.s.galleryId)>0&&(s.index=parseInt(i.split("&slide=")[1],10),e("body").addClass("lg-from-hash"),e("body").hasClass("lg-on")||setTimeout(function(){s.build(s.index),e("body").addClass("lg-on")})),s.s.dynamic?(s.$el.trigger("onBeforeOpen.lg"),s.index=s.s.index||0,e("body").hasClass("lg-on")||setTimeout(function(){s.build(s.index),e("body").addClass("lg-on")})):s.$items.on("click.lgcustom",function(t){try{t.preventDefault(),t.preventDefault()}catch(i){t.returnValue=!1}s.$el.trigger("onBeforeOpen.lg"),s.index=s.s.index||s.$items.index(this),e("body").hasClass("lg-on")||(s.build(s.index),e("body").addClass("lg-on"))})},l.prototype.build=function(t){var s=this;s.structure(),e.each(e.fn.lightGallery.modules,function(t){s.modules[t]=new e.fn.lightGallery.modules[t](s.el)}),s.slide(t,!1,!1),s.s.keyPress&&s.keyPress(),s.$items.length>1&&(s.arrow(),setTimeout(function(){s.enableDrag(),s.enableSwipe()},50),s.s.mousewheel&&s.mousewheel()),s.counter(),s.closeGallery(),s.$el.trigger("onAfterOpen.lg"),s.$outer.on("mousemove.lg click.lg touchstart.lg",function(){s.$outer.removeClass("lg-hide-items"),clearTimeout(s.hideBartimeout),s.hideBartimeout=setTimeout(function(){s.$outer.addClass("lg-hide-items")},s.s.hideBarsDelay)})},l.prototype.structure=function(){var s,i="",l="",o=0,a="",n=this;for(e("body").append('<div class="lg-backdrop"></div>'),e(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),o=0;o<this.$items.length;o++)i+='<div class="lg-item"></div>';if(this.s.controls&&this.$items.length>1&&(l='<div class="lg-actions"><div class="lg-prev lg-icon">'+this.s.prevHtml+'</div><div class="lg-next lg-icon">'+this.s.nextHtml+"</div></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(a='<div class="lg-sub-html"></div>'),s='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+i+'</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>'+l+a+"</div></div>",e("body").append(s),this.$outer=e(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),n.setTop(),e(t).on("resize.lg orientationchange.lg",function(){setTimeout(function(){n.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&this.$items.length>1&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var d=this.$outer.find(".lg-inner");d.css("transition-timing-function",this.s.cssEasing),d.css("transition-duration",this.s.speed+"ms")}e(".lg-backdrop").addClass("in"),setTimeout(function(){n.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=e(t).scrollTop()},l.prototype.setTop=function(){if("100%"!==this.s.height){var s=e(t).height(),i=(s-parseInt(this.s.height,10))/2,l=this.$outer.find(".lg");s>=parseInt(this.s.height,10)?l.css("top",i+"px"):l.css("top","0px")}},l.prototype.doCss=function(){var e=function(){var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],t=s.documentElement,i=0;for(i=0;i<e.length;i++)if(e[i]in t.style)return!0};return e()?!0:!1},l.prototype.isVideo=function(e,t){var s;if(s=this.s.dynamic?this.s.dynamicEl[t].html:this.$items.eq(t).attr("data-html"),!e&&s)return{html5:!0};var i=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),l=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),o=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),a=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return i?{youtube:i}:l?{vimeo:l}:o?{dailymotion:o}:a?{vk:a}:void 0},l.prototype.counter=function(){this.s.counter&&e(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},l.prototype.addHtml=function(t){var s,i=null;if(this.s.dynamic?this.s.dynamicEl[t].subHtmlUrl?s=this.s.dynamicEl[t].subHtmlUrl:i=this.s.dynamicEl[t].subHtml:this.$items.eq(t).attr("data-sub-html-url")?s=this.$items.eq(t).attr("data-sub-html-url"):(i=this.$items.eq(t).attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!i&&(i=this.$items.eq(t).attr("title")||this.$items.eq(t).find("img").first().attr("alt"))),!s)if("undefined"!=typeof i&&null!==i){var l=i.substring(0,1);("."===l||"#"===l)&&(i=e(i).html())}else i="";".lg-sub-html"===this.s.appendSubHtmlTo?s?this.$outer.find(this.s.appendSubHtmlTo).load(s):this.$outer.find(this.s.appendSubHtmlTo).html(i):s?this.$slide.eq(t).load(s):this.$slide.eq(t).append(i),"undefined"!=typeof i&&null!==i&&(""===i?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[t])},l.prototype.preload=function(e){var t=1,s=1;for(t=1;t<=this.s.preload&&!(t>=this.$items.length-e);t++)this.loadContent(e+t,!1,0);for(s=1;s<=this.s.preload&&!(0>e-s);s++)this.loadContent(e-s,!1,0)},l.prototype.loadContent=function(s,i,l){var o,a,n,d,r,g,h=this,u=!1,c=function(s){for(var i=[],l=[],o=0;o<s.length;o++){var n=s[o].split(" ");""===n[0]&&n.splice(0,1),l.push(n[0]),i.push(n[1])}for(var d=e(t).width(),r=0;r<i.length;r++)if(parseInt(i[r],10)>d){a=l[r];break}};if(h.s.dynamic){if(h.s.dynamicEl[s].poster&&(u=!0,n=h.s.dynamicEl[s].poster),g=h.s.dynamicEl[s].html,a=h.s.dynamicEl[s].src,h.s.dynamicEl[s].responsive){var m=h.s.dynamicEl[s].responsive.split(",");c(m)}d=h.s.dynamicEl[s].srcset,r=h.s.dynamicEl[s].sizes}else{if(h.$items.eq(s).attr("data-poster")&&(u=!0,n=h.$items.eq(s).attr("data-poster")),g=h.$items.eq(s).attr("data-html"),a=h.$items.eq(s).attr("href")||h.$items.eq(s).attr("data-src"),h.$items.eq(s).attr("data-responsive")){var p=h.$items.eq(s).attr("data-responsive").split(",");c(p)}d=h.$items.eq(s).attr("data-srcset"),r=h.$items.eq(s).attr("data-sizes")}var f=!1;h.s.dynamic?h.s.dynamicEl[s].iframe&&(f=!0):"true"===h.$items.eq(s).attr("data-iframe")&&(f=!0);var v=h.isVideo(a,s);if(!h.$slide.eq(s).hasClass("lg-loaded")){if(f)h.$slide.eq(s).prepend('<div class="lg-video-cont" style="max-width:'+h.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+a+'"  allowfullscreen="true"></iframe></div></div>');else if(u){var $="";$=v&&v.youtube?"lg-has-youtube":v&&v.vimeo?"lg-has-vimeo":"lg-has-html5",h.$slide.eq(s).prepend('<div class="lg-video-cont '+$+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+n+'" /></div></div>')}else v?(h.$slide.eq(s).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),h.$el.trigger("hasVideo.lg",[s,a,g])):h.$slide.eq(s).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+a+'" /></div>');if(h.$el.trigger("onAferAppendSlide.lg",[s]),o=h.$slide.eq(s).find(".lg-object"),r&&o.attr("sizes",r),d){o.attr("srcset",d);try{picturefill({elements:[o[0]]})}catch(y){console.error("Make sure you have included Picturefill version 2")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&h.addHtml(s),h.$slide.eq(s).addClass("lg-loaded")}h.$slide.eq(s).find(".lg-object").on("load.lg error.lg",function(){var t=0;l&&!e("body").hasClass("lg-from-hash")&&(t=l),setTimeout(function(){h.$slide.eq(s).addClass("lg-complete"),h.$el.trigger("onSlideItemLoad.lg",[s,l||0])},t)}),v&&v.html5&&!u&&h.$slide.eq(s).addClass("lg-complete"),i===!0&&(h.$slide.eq(s).hasClass("lg-complete")?h.preload(s):h.$slide.eq(s).find(".lg-object").on("load.lg error.lg",function(){h.preload(s)}))},l.prototype.slide=function(t,s,i){var l=this.$outer.find(".lg-current").index(),o=this;if(!o.lGalleryOn||l!==t){var a=this.$slide.length,n=o.lGalleryOn?this.s.speed:0,d=!1,r=!1;if(!o.lgBusy){if(this.s.download){var g;g=o.s.dynamic?o.s.dynamicEl[t].downloadUrl!==!1&&(o.s.dynamicEl[t].downloadUrl||o.s.dynamicEl[t].src):"false"!==o.$items.eq(t).attr("data-download-url")&&(o.$items.eq(t).attr("data-download-url")||o.$items.eq(t).attr("href")||o.$items.eq(t).attr("data-src")),g?(e("#lg-download").attr("href",g),o.$outer.removeClass("lg-hide-download")):o.$outer.addClass("lg-hide-download")}if(this.$el.trigger("onBeforeSlide.lg",[l,t,s,i]),o.lgBusy=!0,clearTimeout(o.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){o.addHtml(t)},n),this.arrowDisable(t),s){var h=t-1,u=t+1;0===t&&l===a-1?(u=0,h=a-1):t===a-1&&0===l&&(u=0,h=a-1),this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),o.$slide.eq(h).addClass("lg-prev-slide"),o.$slide.eq(u).addClass("lg-next-slide"),o.$slide.eq(t).addClass("lg-current")}else o.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),l>t?(r=!0,0!==t||l!==a-1||i||(r=!1,d=!0)):t>l&&(d=!0,t!==a-1||0!==l||i||(r=!0,d=!1)),r?(this.$slide.eq(t).addClass("lg-prev-slide"),this.$slide.eq(l).addClass("lg-next-slide")):d&&(this.$slide.eq(t).addClass("lg-next-slide"),this.$slide.eq(l).addClass("lg-prev-slide")),setTimeout(function(){o.$slide.removeClass("lg-current"),o.$slide.eq(t).addClass("lg-current"),o.$outer.removeClass("lg-no-trans")},50);o.lGalleryOn?(setTimeout(function(){o.loadContent(t,!0,0)},this.s.speed+50),setTimeout(function(){o.lgBusy=!1,o.$el.trigger("onAfterSlide.lg",[l,t,s,i])},this.s.speed)):(o.loadContent(t,!0,o.s.backdropDuration),o.lgBusy=!1,o.$el.trigger("onAfterSlide.lg",[l,t,s,i])),o.lGalleryOn=!0,this.s.counter&&e("#lg-counter-current").text(t+1)}}},l.prototype.goToNextSlide=function(e){var t=this;t.lgBusy||(t.index+1<t.$slide.length?(t.index++,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1)):t.s.loop?(t.index=0,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(t.$outer.addClass("lg-right-end"),setTimeout(function(){t.$outer.removeClass("lg-right-end")},400)))},l.prototype.goToPrevSlide=function(e){var t=this;t.lgBusy||(t.index>0?(t.index--,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1)):t.s.loop?(t.index=t.$items.length-1,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(t.$outer.addClass("lg-left-end"),setTimeout(function(){t.$outer.removeClass("lg-left-end")},400)))},l.prototype.keyPress=function(){var s=this;this.$items.length>1&&e(t).on("keyup.lg",function(e){s.$items.length>1&&(37===e.keyCode&&(e.preventDefault(),s.goToPrevSlide()),39===e.keyCode&&(e.preventDefault(),s.goToNextSlide()))}),e(t).on("keydown.lg",function(e){s.s.escKey===!0&&27===e.keyCode&&(e.preventDefault(),s.$outer.hasClass("lg-thumb-open")?s.$outer.removeClass("lg-thumb-open"):s.destroy())})},l.prototype.arrow=function(){var e=this;this.$outer.find(".lg-prev").on("click.lg",function(){e.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){e.goToNextSlide()})},l.prototype.arrowDisable=function(e){!this.s.loop&&this.s.hideControlOnEnd&&(e+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),e>0?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},l.prototype.setTranslate=function(e,t,s){this.s.useLeft?e.css("left",t):e.css({transform:"translate3d("+t+"px, "+s+"px, 0px)"})},l.prototype.touchMove=function(t,s){var i=s-t;Math.abs(i)>15&&(this.$outer.addClass("lg-dragging"),this.setTranslate(this.$slide.eq(this.index),i,0),this.setTranslate(e(".lg-prev-slide"),-this.$slide.eq(this.index).width()+i,0),this.setTranslate(e(".lg-next-slide"),this.$slide.eq(this.index).width()+i,0))},l.prototype.touchEnd=function(e){var t=this;"lg-slide"!==t.s.mode&&t.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){t.$outer.removeClass("lg-dragging"),0>e&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):e>0&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):Math.abs(e)<5&&t.$el.trigger("onSlideClick.lg"),t.$slide.removeAttr("style")}),setTimeout(function(){t.$outer.hasClass("lg-dragging")||"lg-slide"===t.s.mode||t.$outer.removeClass("lg-slide")},t.s.speed+100)},l.prototype.enableSwipe=function(){var e=this,t=0,s=0,i=!1;e.s.enableSwipe&&e.isTouch&&e.doCss()&&(e.$slide.on("touchstart.lg",function(s){e.$outer.hasClass("lg-zoomed")||e.lgBusy||(s.preventDefault(),e.manageSwipeClass(),t=s.originalEvent.targetTouches[0].pageX)}),e.$slide.on("touchmove.lg",function(l){e.$outer.hasClass("lg-zoomed")||(l.preventDefault(),s=l.originalEvent.targetTouches[0].pageX,e.touchMove(t,s),i=!0)}),e.$slide.on("touchend.lg",function(){e.$outer.hasClass("lg-zoomed")||(i?(i=!1,e.touchEnd(s-t)):e.$el.trigger("onSlideClick.lg"))}))},l.prototype.enableDrag=function(){var s=this,i=0,l=0,o=!1,a=!1;s.s.enableDrag&&!s.isTouch&&s.doCss()&&(s.$slide.on("mousedown.lg",function(t){s.$outer.hasClass("lg-zoomed")||(e(t.target).hasClass("lg-object")||e(t.target).hasClass("lg-video-play"))&&(t.preventDefault(),s.lgBusy||(s.manageSwipeClass(),i=t.pageX,o=!0,s.$outer.scrollLeft+=1,s.$outer.scrollLeft-=1,s.$outer.removeClass("lg-grab").addClass("lg-grabbing"),s.$el.trigger("onDragstart.lg")))}),e(t).on("mousemove.lg",function(e){o&&(a=!0,l=e.pageX,s.touchMove(i,l),s.$el.trigger("onDragmove.lg"))}),e(t).on("mouseup.lg",function(t){a?(a=!1,s.touchEnd(l-i),s.$el.trigger("onDragend.lg")):(e(t.target).hasClass("lg-object")||e(t.target).hasClass("lg-video-play"))&&s.$el.trigger("onSlideClick.lg"),o&&(o=!1,s.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},l.prototype.manageSwipeClass=function(){var e=this.index+1,t=this.index-1,s=this.$slide.length;this.s.loop&&(0===this.index?t=s-1:this.index===s-1&&(e=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),t>-1&&this.$slide.eq(t).addClass("lg-prev-slide"),this.$slide.eq(e).addClass("lg-next-slide")},l.prototype.mousewheel=function(){var e=this;e.$outer.on("mousewheel.lg",function(t){t.deltaY&&(t.deltaY>0?e.goToPrevSlide():e.goToNextSlide(),t.preventDefault())})},l.prototype.closeGallery=function(){var t=this,s=!1;this.$outer.find(".lg-close").on("click.lg",function(){t.destroy()}),t.s.closable&&(t.$outer.on("mousedown.lg",function(t){s=e(t.target).is(".lg-outer")||e(t.target).is(".lg-item ")||e(t.target).is(".lg-img-wrap")?!0:!1}),t.$outer.on("mouseup.lg",function(i){(e(i.target).is(".lg-outer")||e(i.target).is(".lg-item ")||e(i.target).is(".lg-img-wrap")&&s)&&(t.$outer.hasClass("lg-dragging")||t.destroy())}))},l.prototype.destroy=function(s){var i=this;s||i.$el.trigger("onBeforeClose.lg"),e(t).scrollTop(i.prevScrollTop),s&&(i.s.dynamic||this.$items.off("click.lg click.lgcustom"),e.removeData(i.el,"lightGallery")),this.$el.off(".lg.tm"),e.each(e.fn.lightGallery.modules,function(e){i.modules[e]&&i.modules[e].destroy()}),this.lGalleryOn=!1,clearTimeout(i.hideBartimeout),this.hideBartimeout=!1,e(t).off(".lg"),e("body").removeClass("lg-on lg-from-hash"),i.$outer&&i.$outer.removeClass("lg-visible"),e(".lg-backdrop").removeClass("in"),setTimeout(function(){i.$outer&&i.$outer.remove(),e(".lg-backdrop").remove(),s||i.$el.trigger("onCloseAfter.lg")},i.s.backdropDuration+50)},e.fn.lightGallery=function(t){return this.each(function(){if(e.data(this,"lightGallery"))try{e(this).data("lightGallery").init()}catch(s){console.error("lightGallery has not initiated properly")}else e.data(this,"lightGallery",new l(this,t))})},e.fn.lightGallery.modules={}}(jQuery,window,document);
!function(e,t,s,i){"use strict";var l={autoplay:!1,pause:5e3,progressBar:!0,fourceAutoplay:!1,autoplayControls:!0,appendAutoplayControlsTo:".lg-toolbar"},o=function(t){return this.core=e(t).data("lightGallery"),this.$el=e(t),this.core.$items.length<2?!1:(this.core.s=e.extend({},l,this.core.s),this.interval=!1,this.fromAuto=!0,this.canceledOnTouch=!1,this.fourceAutoplayTemp=this.core.s.fourceAutoplay,this.core.doCss()||(this.core.s.progressBar=!1),this.init(),this)};o.prototype.init=function(){var e=this;e.core.s.autoplayControls&&e.controls(),e.core.s.progressBar&&e.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),e.progress(),e.core.s.autoplay&&e.startlAuto(),e.$el.on("onDragstart.lg.tm touchstart.lg.tm",function(){e.interval&&(e.cancelAuto(),e.canceledOnTouch=!0)}),e.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm",function(){!e.interval&&e.canceledOnTouch&&(e.startlAuto(),e.canceledOnTouch=!1)})},o.prototype.progress=function(){var e,t,s=this;s.$el.on("onBeforeSlide.lg.tm",function(){s.core.s.progressBar&&s.fromAuto&&(e=s.core.$outer.find(".lg-progress-bar"),t=s.core.$outer.find(".lg-progress"),s.interval&&(t.removeAttr("style"),e.removeClass("lg-start"),setTimeout(function(){t.css("transition","width "+(s.core.s.speed+s.core.s.pause)+"ms ease 0s"),e.addClass("lg-start")},20))),s.fromAuto||s.core.s.fourceAutoplay||s.cancelAuto(),s.fromAuto=!1})},o.prototype.controls=function(){var t=this,s='<span class="lg-autoplay-button lg-icon"></span>';e(this.core.s.appendAutoplayControlsTo).append(s),t.core.$outer.find(".lg-autoplay-button").on("click.lg",function(){e(t.core.$outer).hasClass("lg-show-autoplay")?(t.cancelAuto(),t.core.s.fourceAutoplay=!1):t.interval||(t.startlAuto(),t.core.s.fourceAutoplay=t.fourceAutoplayTemp)})},o.prototype.startlAuto=function(){var e=this;e.core.$outer.find(".lg-progress").css("transition","width "+(e.core.s.speed+e.core.s.pause)+"ms ease 0s"),e.core.$outer.addClass("lg-show-autoplay"),e.core.$outer.find(".lg-progress-bar").addClass("lg-start"),e.interval=setInterval(function(){e.core.index+1<e.core.$items.length?e.core.index=e.core.index:e.core.index=-1,e.core.index++,e.fromAuto=!0,e.core.slide(e.core.index,!1,!1)},e.core.s.speed+e.core.s.pause)},o.prototype.cancelAuto=function(){clearInterval(this.interval),this.interval=!1,this.core.$outer.find(".lg-progress").removeAttr("style"),this.core.$outer.removeClass("lg-show-autoplay"),this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")},o.prototype.destroy=function(){this.cancelAuto(),this.core.$outer.find(".lg-progress-bar").remove()},e.fn.lightGallery.modules.autoplay=o}(jQuery,window,document);
!function(e,t,s,i){"use strict";var l={fullScreen:!0},o=function(t){return this.core=e(t).data("lightGallery"),this.$el=e(t),this.core.s=e.extend({},l,this.core.s),this.init(),this};o.prototype.init=function(){var e="";if(this.core.s.fullScreen){if(!(s.fullscreenEnabled||s.webkitFullscreenEnabled||s.mozFullScreenEnabled||s.msFullscreenEnabled))return;e='<span class="lg-fullscreen lg-icon"></span>',this.core.$outer.find(".lg-toolbar").append(e),this.fullScreen()}},o.prototype.requestFullscreen=function(){var e=s.documentElement;e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},o.prototype.exitFullscreen=function(){s.exitFullscreen?s.exitFullscreen():s.msExitFullscreen?s.msExitFullscreen():s.mozCancelFullScreen?s.mozCancelFullScreen():s.webkitExitFullscreen&&s.webkitExitFullscreen()},o.prototype.fullScreen=function(){var t=this;e(s).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg",function(){t.core.$outer.toggleClass("lg-fullscreen-on")}),this.core.$outer.find(".lg-fullscreen").on("click.lg",function(){s.fullscreenElement||s.mozFullScreenElement||s.webkitFullscreenElement||s.msFullscreenElement?t.exitFullscreen():t.requestFullscreen()})},o.prototype.destroy=function(){this.exitFullscreen(),e(s).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")},e.fn.lightGallery.modules.fullscreen=o}(jQuery,window,document);
!function(e,t,s,i){"use strict";var l={thumbnail:!0,animateThumb:!0,currentPagerPosition:"middle",thumbWidth:100,thumbContHeight:100,thumbMargin:5,exThumbImage:!1,showThumbByDefault:!0,toogleThumb:!0,pullCaptionUp:!0,enableThumbDrag:!0,enableThumbSwipe:!0,swipeThreshold:50,loadYoutubeThumbnail:!0,youtubeThumbSize:1,loadVimeoThumbnail:!0,vimeoThumbSize:"thumbnail_small",loadDailymotionThumbnail:!0},o=function(t){return this.core=e(t).data("lightGallery"),this.core.s=e.extend({},l,this.core.s),this.$el=e(t),this.$thumbOuter=null,this.thumbOuterWidth=0,this.thumbTotalWidth=this.core.$items.length*(this.core.s.thumbWidth+this.core.s.thumbMargin),this.thumbIndex=this.core.index,this.left=0,this.init(),this};o.prototype.init=function(){var e=this;this.core.s.thumbnail&&this.core.$items.length>1&&(this.core.s.showThumbByDefault&&setTimeout(function(){e.core.$outer.addClass("lg-thumb-open")},700),this.core.s.pullCaptionUp&&this.core.$outer.addClass("lg-pull-caption-up"),this.build(),this.core.s.animateThumb?(this.core.s.enableThumbDrag&&!this.core.isTouch&&this.core.doCss()&&this.enableThumbDrag(),this.core.s.enableThumbSwipe&&this.core.isTouch&&this.core.doCss()&&this.enableThumbSwipe(),this.thumbClickable=!1):this.thumbClickable=!0,this.toogle(),this.thumbkeyPress())},o.prototype.build=function(){function s(e,t,s){var i,r=l.core.isVideo(e,s)||{},n="";r.youtube||r.vimeo||r.dailymotion?r.youtube?i=l.core.s.loadYoutubeThumbnail?"//img.youtube.com/vi/"+r.youtube[1]+"/"+l.core.s.youtubeThumbSize+".jpg":t:r.vimeo?l.core.s.loadVimeoThumbnail?(i="//i.vimeocdn.com/video/error_"+a+".jpg",n=r.vimeo[1]):i=t:r.dailymotion&&(i=l.core.s.loadDailymotionThumbnail?"//www.dailymotion.com/thumbnail/video/"+r.dailymotion[1]:t):i=t,o+='<div data-vimeo-id="'+n+'" class="lg-thumb-item" style="width:'+l.core.s.thumbWidth+"px; margin-right: "+l.core.s.thumbMargin+'px"><img src="'+i+'" /></div>',n=""}var i,l=this,o="",a="",r='<div class="lg-thumb-outer"><div class="lg-thumb group"></div></div>';switch(this.core.s.vimeoThumbSize){case"thumbnail_large":a="640";break;case"thumbnail_medium":a="200x150";break;case"thumbnail_small":a="100x75"}if(l.core.$outer.addClass("lg-has-thumb"),l.core.$outer.find(".lg").append(r),l.$thumbOuter=l.core.$outer.find(".lg-thumb-outer"),l.thumbOuterWidth=l.$thumbOuter.width(),l.core.s.animateThumb&&l.core.$outer.find(".lg-thumb").css({width:l.thumbTotalWidth+"px",position:"relative"}),this.core.s.animateThumb&&l.$thumbOuter.css("height",l.core.s.thumbContHeight+"px"),l.core.s.dynamic)for(var n=0;n<l.core.s.dynamicEl.length;n++)s(l.core.s.dynamicEl[n].src,l.core.s.dynamicEl[n].thumb,n);else l.core.$items.each(function(t){l.core.s.exThumbImage?s(e(this).attr("href")||e(this).attr("data-src"),e(this).attr(l.core.s.exThumbImage),t):s(e(this).attr("href")||e(this).attr("data-src"),e(this).find("img").attr("src"),t)});l.core.$outer.find(".lg-thumb").html(o),i=l.core.$outer.find(".lg-thumb-item"),i.each(function(){var t=e(this),s=t.attr("data-vimeo-id");s&&e.getJSON("//www.vimeo.com/api/v2/video/"+s+".json?callback=?",{format:"json"},function(e){t.find("img").attr("src",e[0][l.core.s.vimeoThumbSize])})}),i.eq(l.core.index).addClass("active"),l.core.$el.on("onBeforeSlide.lg.tm",function(){i.removeClass("active"),i.eq(l.core.index).addClass("active")}),i.on("click.lg touchend.lg",function(){var t=e(this);setTimeout(function(){(l.thumbClickable&&!l.core.lgBusy||!l.core.doCss())&&(l.core.index=t.index(),l.core.slide(l.core.index,!1,!0))},50)}),l.core.$el.on("onBeforeSlide.lg.tm",function(){l.animateThumb(l.core.index)}),e(t).on("resize.lg.thumb orientationchange.lg.thumb",function(){setTimeout(function(){l.animateThumb(l.core.index),l.thumbOuterWidth=l.$thumbOuter.width()},200)})},o.prototype.setTranslate=function(e){this.core.$outer.find(".lg-thumb").css({transform:"translate3d(-"+e+"px, 0px, 0px)"})},o.prototype.animateThumb=function(e){var t=this.core.$outer.find(".lg-thumb");if(this.core.s.animateThumb){var s;switch(this.core.s.currentPagerPosition){case"left":s=0;break;case"middle":s=this.thumbOuterWidth/2-this.core.s.thumbWidth/2;break;case"right":s=this.thumbOuterWidth-this.core.s.thumbWidth}this.left=(this.core.s.thumbWidth+this.core.s.thumbMargin)*e-1-s,this.left>this.thumbTotalWidth-this.thumbOuterWidth&&(this.left=this.thumbTotalWidth-this.thumbOuterWidth),this.left<0&&(this.left=0),this.core.lGalleryOn?(t.hasClass("on")||this.core.$outer.find(".lg-thumb").css("transition-duration",this.core.s.speed+"ms"),this.core.doCss()||t.animate({left:-this.left+"px"},this.core.s.speed)):this.core.doCss()||t.css("left",-this.left+"px"),this.setTranslate(this.left)}},o.prototype.enableThumbDrag=function(){var s=this,i=0,l=0,o=!1,a=!1,r=0;s.$thumbOuter.addClass("lg-grab"),s.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb",function(e){s.thumbTotalWidth>s.thumbOuterWidth&&(e.preventDefault(),i=e.pageX,o=!0,s.core.$outer.scrollLeft+=1,s.core.$outer.scrollLeft-=1,s.thumbClickable=!1,s.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))}),e(t).on("mousemove.lg.thumb",function(e){o&&(r=s.left,a=!0,l=e.pageX,s.$thumbOuter.addClass("lg-dragging"),r-=l-i,r>s.thumbTotalWidth-s.thumbOuterWidth&&(r=s.thumbTotalWidth-s.thumbOuterWidth),0>r&&(r=0),s.setTranslate(r))}),e(t).on("mouseup.lg.thumb",function(){a?(a=!1,s.$thumbOuter.removeClass("lg-dragging"),s.left=r,Math.abs(l-i)<s.core.s.swipeThreshold&&(s.thumbClickable=!0)):s.thumbClickable=!0,o&&(o=!1,s.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))})},o.prototype.enableThumbSwipe=function(){var e=this,t=0,s=0,i=!1,l=0;e.core.$outer.find(".lg-thumb").on("touchstart.lg",function(s){e.thumbTotalWidth>e.thumbOuterWidth&&(s.preventDefault(),t=s.originalEvent.targetTouches[0].pageX,e.thumbClickable=!1)}),e.core.$outer.find(".lg-thumb").on("touchmove.lg",function(o){e.thumbTotalWidth>e.thumbOuterWidth&&(o.preventDefault(),s=o.originalEvent.targetTouches[0].pageX,i=!0,e.$thumbOuter.addClass("lg-dragging"),l=e.left,l-=s-t,l>e.thumbTotalWidth-e.thumbOuterWidth&&(l=e.thumbTotalWidth-e.thumbOuterWidth),0>l&&(l=0),e.setTranslate(l))}),e.core.$outer.find(".lg-thumb").on("touchend.lg",function(){e.thumbTotalWidth>e.thumbOuterWidth&&i?(i=!1,e.$thumbOuter.removeClass("lg-dragging"),Math.abs(s-t)<e.core.s.swipeThreshold&&(e.thumbClickable=!0),e.left=l):e.thumbClickable=!0})},o.prototype.toogle=function(){var e=this;e.core.s.toogleThumb&&(e.core.$outer.addClass("lg-can-toggle"),e.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'),e.core.$outer.find(".lg-toogle-thumb").on("click.lg",function(){e.core.$outer.toggleClass("lg-thumb-open")}))},o.prototype.thumbkeyPress=function(){var s=this;e(t).on("keydown.lg.thumb",function(e){38===e.keyCode?(e.preventDefault(),s.core.$outer.addClass("lg-thumb-open")):40===e.keyCode&&(e.preventDefault(),s.core.$outer.removeClass("lg-thumb-open"))})},o.prototype.destroy=function(){this.core.s.thumbnail&&this.core.$items.length>1&&(e(t).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"),this.$thumbOuter.remove(),this.core.$outer.removeClass("lg-has-thumb"))},e.fn.lightGallery.modules.Thumbnail=o}(jQuery,window,document);
(function($){"use strict";$(document).ready(function(){$('.tm-pg_frontend').each(function(){var id=$(this).attr('data-id');Registry._get("grid").init(id);});var select=$('.filter-select');$(document).on('click','.filter-select .filter-select__panel',function(){if(select.hasClass('open')){select.removeClass('open');}else{select.addClass('open');}});$(document).on('click',function(event){if($(event.target).closest(select).length||$(event.target).closest(select).length){return;}
if(select.hasClass('open')){select.removeClass('open');}
event.stopPropagation();});});})(jQuery);
Registry.register("grid",(function($){"use strict";var state,prefix='.tm-pg_frontend';function __$(value){return $(__s(value));}
function __s(value){if(_.isUndefined(state.ID)){return prefix+' '+ value;}else{return prefix+'[data-id="'+ state.ID+'"] '+ value;}}
function __(value){return Registry._get(value);}
function _onClick(selector,callback){$(document).off('click',__s(selector)).on('click',__s(selector),function(e){e.preventDefault();if(!_.isUndefined(callback)&&_.isFunction(callback)){callback(this,e);}});}
function createInstance(){return{body:$('html, body'),wpadminbar:$('#wpadminbar'),ID:0,_item:'.tm_pg_gallery-item',_item_wrapper:'.tm_pg_gallery-item-wrapper',_preloader:'.tm-pg_front_gallery-preloader',_load:{grid:'.tm_pg_gallery-item_show-more',btn:'.load-more-button'},_content:{gallery:'.tm-pg_front_gallery',grid:'.tm-pg_front_gallery-grid .row',masonry:'.tm-pg_front_gallery-masonry',justify:'.tm-pg_front_gallery-justify'},_pagination:{content:'.tm-pg_front_gallery-navigation',numbers:'.tm-pg_front_gallery-navigation nav'},_filter:{line:{item:'.tm-pg_front_gallery-tabs li a',content:'.tm-pg_front_gallery-tabs'},dropdown:{item:'.filter-select__list li a',content:'.filter-select'}},_input:{term_id:'input[name="term_id"]',term_type:'input[name="term_type"]',offset:'input[name="offset"]',per_page:'input[name="images_per_page"]',count:'input[name="all_count"]'},getID:function($this){return $this.parents(prefix).data('id');},clickPagination:function(page,$parent,callback){var $offset=$parent.siblings(state._input.offset),$images_per_page=$parent.siblings(state._input.per_page);$parent.find('a').removeClass('current');page--;$offset.val(parseInt($images_per_page.val(),10)*page);state.ID=state.getID($parent);state.loadMore('replase',function(){if(page>0){$parent.find('a.prev').show();}else{$parent.find('a.prev').hide();}
page++;if(page<$parent.find('nav').data('count')){$parent.find('a.next').show();}else{$parent.find('a.next').hide();}
if(!_.isUndefined(callback)&&_.isFunction(callback)){callback();}});},init:function(id){var view,gallery;state.ID=id;state.checkLoadMore();state.initEvents();__('slider').init(id);view=$(prefix+'[data-id="'+ state.ID+'"]').data('view');gallery=__$(state._content[view]);gallery.imagesLoaded(function(){if('grid'===view){state.setLoadMoreGirdHeight();$(window).resize(function(){state.gridBtnHeight=0;state.setLoadMoreGirdHeight();});}
if('masonry'===view){gallery.masonry({itemSelector:state._item,});}
if('justify'===view){state.justifiedLayoutRender();}});},initEvents:function(){var container=prefix+'[data-id="'+ state.ID+'"]';$(container).on('click',state._load.grid+' a',state.onClickLoadMore.bind(this));$(container).on('click',state._load.btn+' a',state.onClickLoadMoreBtn.bind(this));$(container).on('click',state._pagination.content+' a',state.onClickPagination.bind(this));$(container).on('click',state._filter.dropdown.item,state.onClickFilterItem.bind(this));$(container).on('click',state._filter.line.item,state.onClickFilterItem.bind(this));},onLoadGrid:function(e){console.log(e);},onClickFilterItem:function(e){e.preventDefault();state.sortGrid($(e.currentTarget));},onClickPagination:function(e){e.preventDefault();var $this=$(e.currentTarget),$parent=$this.parents(state._pagination.content);if($this.hasClass('current')){return false;}
if($this.hasClass('next')){var page=$parent.find('a.current').text();state.clickPagination(++page,$parent,function(){$parent.find('a[data-pos="'+ page+'"]').addClass('current');});}else if($this.hasClass('prev')){var page=$parent.find('a.current').text();state.clickPagination(--page,$parent,function(){$parent.find('a[data-pos="'+ page+'"]').addClass('current');});}else{state.clickPagination($this.text(),$parent,function(){$this.addClass('current');});}},onClickLoadMore:function(e){e.preventDefault();state.ID=state.getID($(e.currentTarget));state.loadMore('append');},onClickLoadMoreBtn:function(e){e.preventDefault();state.ID=state.getID($(e.currentTarget));state.loadMore('append');},updateURLParameter:function(param,paramVal){if(history.pushState){var newurl=window.location.protocol+"//"+ window.location.host+ window.location.pathname+'?'+ param+'='+ paramVal;window.history.pushState({path:newurl},'',newurl);}},loadMore:function(type,callback){if(_.isUndefined(type)){type='append';}
var $offset=__$(state._input.offset),$images_per_page=__$(state._input.per_page),$term_id=__$(state._input.term_id),$term_type=__$(state._input.term_type),view=$(prefix+'[data-id="'+ state.ID+'"]').data('view'),gallery=__$(state._content[view]),preloader=__$(state._preloader),topOffset,wpadminbarHeight,loadMoreGrid=__$(state._load.grid),newItems=[];if(_.isEqual(type,'append')){loadMoreGrid.addClass('tm_pg_loading');loadMoreGrid.find('.preloader').show();if(!$offset.val()){$offset.val(Number($offset.val())+ Number($images_per_page.val()));}}
if(_.isEqual(type,'replase')){gallery.css('height',gallery.height());wpadminbarHeight=state.wpadminbar.length>0?state.wpadminbar.height():0;topOffset=__$(state._content.gallery).offset().top- wpadminbarHeight;state.body.stop().animate({scrollTop:topOffset},350);if(loadMoreGrid.length){loadMoreGrid.fadeTo(350,0,function(){loadMoreGrid.remove();});}
state.hideAnimation(state._content[view]+' '+ state._item_wrapper,50);preloader.removeClass('tm-pg_hidden');}
state.getContent($offset.val(),$images_per_page.val(),$term_id.val(),$term_type.val(),function($html){if(_.isEqual(type,'append')){loadMoreGrid.fadeTo(350,0,function(){loadMoreGrid.remove();});}
if(_.isEqual(type,'replase')){__$(state._content[view]).html('');}
$.each($html,function(key,value){var $value=$(value);$value.find(state._item_wrapper).addClass('animate-cycle-show');__$(state._content[view]).append($value);newItems.push($value);});if('masonry'!==view){setTimeout(function(){gallery.css('height','');},100);}
preloader.addClass('tm-pg_hidden');state.checkLoadMore(newItems.length*50);__('slider').init(state.ID);if(__$(state._pagination.content).length){var $current=__$('a.current',state._pagination.numbers).last().next();$current.addClass('current');__$('a.next',state._pagination.numbers).hide();__$('a.prev',state._pagination.numbers).hide();}
if(!_.isUndefined(callback)&&_.isFunction(callback)){callback();}
gallery.imagesLoaded(function(){if('masonry'===view){gallery.masonry('reloadItems');setTimeout(function(){gallery.masonry();},400);setTimeout(function(){state.showAnimation(newItems,50);},500);}
if('justify'===view){state.justifiedLayoutRender();}
if('masonry'!==view){state.showAnimation(newItems,50);}});});},checkLoadMore:function(timeout){var view=$(prefix+'[data-id="'+ state.ID+'"]').data('view'),$offset=__$(state._input.offset),$images_per_page=__$(state._input.per_page),timeout=timeout?timeout+ 350:0,$term_id=__$(state._input.term_id),total_count=Number(__$('a[data-id="'+ $term_id.val()+'"]').data('count'));total_count=_.isNaN(total_count)?__$(state._input.count).val():total_count;$offset.val(parseInt($offset.val(),10)+ parseInt($images_per_page.val(),10));if(parseInt($offset.val(),10)>=parseInt(total_count,10)){__$(state._load.btn).hide(350);__$(state._load.grid).hide(350);}else{if('grid'===view){state.setLoadMoreGirdHeight();}
__$(state._load.btn).fadeTo(500,1);__$(state._load.grid).delay(timeout).fadeTo(500,1);}},setLoadMoreGirdHeight:function(){var loadMoreGrid=__$(state._load.grid);if(loadMoreGrid.length){if(!state.gridBtnHeight){state.gridBtnHeight=__$(state._item).first().height();}
loadMoreGrid.height(state.gridBtnHeight);}},sortGrid:function($this){state.ID=state.getID($this);var term_id=$this.attr('data-id'),type=$this.attr('data-type'),view=$(prefix+'[data-id="'+ state.ID+'"]').data('view'),gallery=__$(state._content[view]),preloader=__$(state._preloader),newItems=[],loadMoreGrid=__$(state._load.grid);state.hideAnimation(state._content[view]+' '+ state._item_wrapper,50);if(loadMoreGrid.length){var itemsCount=gallery.find('.tm_pg_gallery-item').length- 1;loadMoreGrid.delay((itemsCount*50)+ 100).fadeTo(350,0,function(){loadMoreGrid.remove();});}
preloader.removeClass('tm-pg_hidden');__$(state._filter.dropdown.content).removeClass('open');__$(state._filter.dropdown.content).find('li').removeClass('active');state.filterContent(term_id,type,function($data){__$(state._filter.line.content).find('li').removeClass('active');$this.parents('li').addClass('active');__$(state._content[view]).html('');$.each($data,function(key,value){var $value=$(value);$value.find(state._item_wrapper).addClass('animate-cycle-show');__$(state._content[view]).append($value);newItems.push($value);});preloader.addClass('tm-pg_hidden');__$(state._input.term_id).val(term_id);__$(state._input.term_type).val(type);__$(state._input.offset).val(0);if(__$(state._pagination.content).data('load-more-page')){state.getPagination(term_id,type,function(html){__$(state._pagination.content).html(html);state.checkLoadMore(newItems.length*50);__('slider').init(state.ID);});}else{state.checkLoadMore(newItems.length*50);__('slider').init(state.ID);}
gallery.imagesLoaded(function(){if('masonry'===view){gallery.masonry('reloadItems');gallery.masonry();}
if('justify'===view){state.justifiedLayoutRender();}
state.showAnimation(newItems,50);});});},filterContent:function(term_id,type,callback){var $params={action:'tm_pg_f',post_id:__$('').data('post-id'),fields:'all'},$images_per_page=__$(state._input.per_page);$params[window.tm_pg_options.action]='filter_grid';$params.controller='grid';$params.term_id=term_id;$params.id=state.ID;$params.type=type;$params.images_per_page=$images_per_page.val();$params.tm_pg_nonce=window.tm_pg_options.nonce;$.post(window.tm_pg_options.ajax_url,$params,function(data){if(!_.isUndefined(callback)&&_.isFunction(callback)){callback(data.data);}});},getContent:function(offset,images_per_page,term_id,type,callback){var $params={action:'tm_pg_f',controller:'grid',shortcode:'grid',fields:'all',post_id:__$('').data('post-id'),term_id:term_id,type:type,id:state.ID,offset:offset,images_per_page:images_per_page};$params.tm_pg_nonce=window.tm_pg_options.nonce;$params[window.tm_pg_options.action]='get_content';$.post(window.tm_pg_options.ajax_url,$params,function(data){if(data.success&&!_.isUndefined(callback)&&_.isFunction(callback)){callback(data.data);}});},getPagination:function(term_id,type,callback){var $params={action:'tm_pg_f'};$params[window.tm_pg_options.action]='get_pagination';$params.controller='grid';$params.id=state.ID;$params.term_id=term_id;$params.type=type;$params.tm_pg_nonce=window.tm_pg_options.nonce;$.post(window.tm_pg_options.ajax_url,$params,function(data){if(data.success&&!_.isUndefined(callback)&&_.isFunction(callback)){callback(data.data);}});},showAnimation:function(items,delta){items.forEach(function(item,i){var delay=delta*i+ 350,timeOutInterval;timeOutInterval=setTimeout(function(){item.find(state._item_wrapper).removeClass('animate-cycle-show');},delay);});},hideAnimation:function(selector,delta){__$(selector).each(function(index,el){var $this=$(el),delay=delta*(index+ 1),timeOutInterval;timeOutInterval=setTimeout(function(){$this.addClass('animate-cycle-hide');},delay);});},justifiedLayoutRender:function(){var projectsListWrap=$(state._content.justify),projectsList=$(state._item,projectsListWrap),moreGridBtn=$(state._load.grid,projectsListWrap),fixedHeight=projectsListWrap.data('fixed-height');if(moreGridBtn.length){moreGridBtn.css({'min-height':fixedHeight});moreGridBtn.find('.tm_pg_gallery-item_link_show-more').css({'min-height':fixedHeight});}
projectsList.each(function(){var $this=$(this),imageWidth=$this.data('image-width'),imageHeight=$this.data('image-height'),imageRatio=+imageWidth/+imageHeight,flexValue=Math.round(imageRatio*100),newWidth=Math.round(fixedHeight*imageRatio),newHeight='auto';$this.css({'flex-grow':flexValue,'flex-basis':newWidth,'max-width':imageWidth});});}};}
return{getInstance:function(){if(!state){state=createInstance();}
return state;}};})(jQuery));
Registry.register("slider",(function($){"use strict";var state,prefix='.tm-pg_frontend';function __(value){return Registry._get(value);}
function createInstance(){return{container:'',gallery:{},_content:{grid:'.tm-pg_front_gallery-grid',masonry:'.tm-pg_front_gallery-masonry',justify:'.tm-pg_front_gallery-justify'},_item:'div.tm_pg_gallery-item[data-type="img"] a',__$:function(value){return $(state.container+' '+ value);},init:function(parent_id){state.container=prefix+'[data-id="'+ parent_id+'"]';var view=$(state.container).data('view'),gallery=state.__$(state._content[view]);if(undefined!==gallery.data('lightGallery')){gallery.data('lightGallery').destroy(true);}
gallery.lightGallery({autoplayControls:gallery.data('lightbox-autoplay')===false?false:true,thumbnail:gallery.data('lightbox-thumbnails')===false?false:true,fullScreen:gallery.data('lightbox-fullscreen')===false?false:true,controls:gallery.data('lightbox-arrows')===false?false:true,selector:state._item,animateThumb:true,showThumbByDefault:true,toogleThumb:true,thumbContHeight:80});gallery.on('onBeforeOpen.lg',function(event){$('#wpadminbar').css('z-index','0');});gallery.on('onCloseAfter.lg',function(event){$('#wpadminbar').css('z-index','');});state.gallery=gallery.data('lightGallery');},};}
return{getInstance:function(){if(!state){state=createInstance();}
return state;}};})(jQuery));
/*!
 * imagesLoaded PACKAGED v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */


!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}(this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||[];return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
/*!
 * Masonry PACKAGED v4.1.1
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */


!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);r.isBoxSizeOuter=s=200==t(o.width),i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,E=a.borderTopWidth+a.borderBottomWidth,z=d&&s,b=t(r.width);b!==!1&&(a.width=b+(z?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(z?0:g+E)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+E),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?t():document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var r=i.toDashed(o),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(n&&n.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,o,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=this.layout.size,s=-1!=n.indexOf("%")?parseFloat(n)/100*r.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*r.height:parseInt(o,10);s=isNaN(s)?0:s,a=isNaN(a)?0:a,s-=e?r.paddingLeft:r.paddingRight,a-=i?r.paddingTop:r.paddingBottom,this.position.x=s,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,h=e-n,u={};u.transform=this.getTranslate(a,h),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");return i.compatOptions.fitWidth="isFitWidth",i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},i.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this._getColGroup(n),r=Math.min.apply(Math,o),s=o.indexOf(r),a={x:this.columnWidth*s,y:r},h=r+t.size.outerHeight,u=this.cols+1-o.length,d=0;u>d;d++)this.colYs[s+d]=h;return a},i.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},i.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});
'use strict';

(function(window, $){
  $(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  var formHandler = function(form, url) {
    var btn          = $('button', form),
        responseCont = $('.response-cont', form),
        responses    = $('.response', responseCont);
    var fetchData = function() {
      return {
        name:     $('.name',     form).val(),
        email:    $('.email',    form).val(),
        phone:    $('.phone',    form).val(),
        message:  $('.message',  form).val(),
        honeypot: $('.honeypot', form).val()
      };
    };

    var handleResponse = function(success) {
      if (success) {
        $('.success', responseCont).removeClass('hidden')
        form.trigger('reset');
      } else {
        $('.failure', responseCont).removeClass('hidden');
      }

      btn.prop('disabled', false);
    };

    form.on('tm_form:validated', function(e){
      var data = fetchData();
      if(data.honeypot) return;

      $('.response', responseCont).addClass('hidden');
      btn.prop('disabled', true);

      $.post(url, data)
        .done(function(resp){
          handleResponse(true);
        })
        .fail(function(resp){
          handleResponse(false);
        });
    });
  };

  formHandler($('#contact-form'), 'https://formspree.io/info@shahkaars.com');
})(window, jQuery);































