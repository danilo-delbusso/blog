(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),o=r(a("VbXa")),s=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),p=function(e){var t=c(e),a=h(t);return g[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+d+o+s+a+r+t+i+n+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=d.default.createElement(R,(0,l.default)({ref:t,src:a},i,{ariaHidden:o}));return r.length>1?d.default.createElement("picture",null,n(r),s):s})),R=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,h=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":h,sizes:a,srcSet:r,src:n},m,{onLoad:o,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));R.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=h(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,h=e.placeholderClassName,g=e.fluid,p=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,S=e.loading,O=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,l.default)({opacity:k?1:0,transition:C?"opacity "+b+"ms":"none"},s),_="boolean"==typeof v?"lightgray":v,z={transitionDelay:b+"ms"},P=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&z,s,f),V={title:t,alt:this.state.isVisible?"":a,style:P,className:h,itemProp:E};if(g){var W=g,q=m(g);return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),_&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&z)}),q.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:V,imageVariants:W,generateSources:N}),q.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:V,imageVariants:W,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,w(W),d.default.createElement(R,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:S},q,{imageVariants:W}))}}))}if(p){var j=p,M=m(p),H=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete H.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},_&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:_,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},C&&z)}),M.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:V,imageVariants:j,generateSources:N}),M.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:V,imageVariants:j,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,w(j),d.default.createElement(R,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:S},M,{imageVariants:j}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),_=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});C.propTypes={resolutions:T,sizes:_,fixed:u.default.oneOfType([T,u.default.arrayOf(T)]),fluid:u.default.oneOfType([_,u.default.arrayOf(_)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var z=C;t.default=z},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),o=(a("WF7/"),a("v2Nh")),s=a.n(o),l=(a("PglE"),a("NO0K")),d=a("N8DM"),u=(a("FfUf"),function(){return n.a.createElement(d.ThemeToggler,null,(function(e){var t=e.theme,a=e.toggleTheme;return null===t?null:n.a.createElement("header",null,n.a.createElement("nav",{className:s.a.nav},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:s.a.navContainer},n.a.createElement(i.Link,{to:"/",className:s.a.brand},"🏠"),n.a.createElement("div",{className:s.a.navLinks},n.a.createElement(i.Link,{to:"/blog/"},"Blog"),n.a.createElement(i.Link,{to:"/projects/"},"Projects"),n.a.createElement(i.Link,{to:"/articles/"},"Published Stuff"),n.a.createElement("div",{className:"modeToggler"},n.a.createElement("button",{onClick:function(){return a("light"===t?"dark":"light")}},n.a.createElement("div",null))))))))}))}),c=function(e){var t=e.children;return n.a.createElement("div",{className:s.a.main},t)},f=function(){return n.a.createElement("footer",{className:s.a.footer},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:s.a.footerLinks},n.a.createElement(l.a,null)),n.a.createElement("p",null,"All materials © Danilo Del Busso 2020")))};t.a=function(e){var t=e.children;return n.a.useEffect((function(){var e=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")};e(),window.addEventListener("resize",e)}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(u,null),n.a.createElement(c,null,t),n.a.createElement(f,null))}},CHNh:function(e,t,a){e.exports={socialIcon:"social-module--socialIcon--14HmA"}},EK0E:function(e,t,a){"use strict";var r,n=a("dyZX"),i=a("CkkT")(0),o=a("KroJ"),s=a("Z6vF"),l=a("czNK"),d=a("ZD67"),u=a("0/R4"),c=a("s5qY"),f=a("s5qY"),h=!n.ActiveXObject&&"ActiveXObject"in n,m=s.getWeak,g=Object.isExtensible,p=d.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(u(e)){var t=m(e);return!0===t?p(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return d.def(c(this,"WeakMap"),e,t)}},y=e.exports=a("4LiD")("WeakMap",v,b,d,!0,!0);f&&h&&(l((r=d.getConstructor(v,"WeakMap")).prototype,b),s.NEED=!0,i(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];o(t,e,(function(t,n){if(u(t)&&!g(t)){this._f||(this._f=new r);var i=this._f[e](t,n);return"set"==e?this:i}return a.call(this,t,n)}))})))},FfUf:function(e,t,a){},GtdI:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"social":{"twitter":"danilo_delbusso","github":"danilo-delbusso","linkedin":"danilo-delbusso"}}}}}')},INYr:function(e,t,a){"use strict";var r=a("XKFU"),n=a("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(i)},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i}));a("bWfx"),a("ioFf"),a("V+eJ"),a("91GP");var r=a("q1tI"),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(n),o=function(){return(o=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};function l(e){return function(t){return r.createElement(d,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.createElement(t.tag,o({key:a},t.attr),e(t.child))}))}(e.child))}}function d(e){var t=function(t){var a,n=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var i=e.attr,l=e.title,d=s(e,["attr","title"]);return r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,d,{className:a,style:o({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(n)}},N8DM:function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0;var n=r(a("QL1J"));t.ThemeToggler=n.default},NO0K:function(e,t,a){"use strict";var r=a("GtdI"),n=a("q1tI"),i=a.n(n),o=a("Lnxd"),s=a("ma3e"),l=a("CHNh"),d=a.n(l);t.a=function(){var e=r.data.site.siteMetadata.social;return i.a.createElement("div",null,i.a.createElement(o.b.Provider,{value:{className:d.a.socialIcon}},i.a.createElement("a",{href:"https://twitter.com/"+e.twitter},i.a.createElement(s.d,null)),i.a.createElement("a",{href:"https://github.com/"+e.github},i.a.createElement(s.b,null)),i.a.createElement("a",{href:"https://www.linkedin.com/in/"+e.linkedin+"/"},i.a.createElement(s.c,null))))}},OGtf:function(e,t,a){var r=a("XKFU"),n=a("eeVq"),i=a("vhPU"),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},PglE:function(e,t,a){},QL1J:function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n=r(a("PJYZ")),i=r(a("VbXa")),o=r(a("lSNA")),s=r(a("q1tI")),l=r(a("17x9")),d=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,(0,o.default)((0,n.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},a.toggleTheme=function(e){window.__setPreferredTheme(e)},a.render=function(){return s.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(s.default.Component);d.propTypes={children:l.default.func.isRequired};var u=d;t.default=u},"WF7/":function(e,t,a){},ZD67:function(e,t,a){"use strict";var r=a("3Lyj"),n=a("Z6vF").getWeak,i=a("y3w9"),o=a("0/R4"),s=a("9gX7"),l=a("SlkY"),d=a("CkkT"),u=a("aagx"),c=a("s5qY"),f=d(5),h=d(6),m=0,g=function(e){return e._l||(e._l=new p)},p=function(){this.a=[]},v=function(e,t){return f(e.a,(function(e){return e[0]===t}))};p.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var a=v(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=h(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,i){var d=e((function(e,r){s(e,d,t,"_i"),e._t=t,e._i=m++,e._l=void 0,null!=r&&l(r,a,e[i],e)}));return r(d.prototype,{delete:function(e){if(!o(e))return!1;var a=n(e);return!0===a?g(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!o(e))return!1;var a=n(e);return!0===a?g(c(this,t)).has(e):a&&u(a,this._i)}}),d},def:function(e,t,a){var r=n(i(t),!0);return!0===r?g(e).set(t,a):r[e._i]=a,e},ufstore:g}},v2Nh:function(e,t,a){e.exports={nav:"layout-module--nav--2cOrb",navContainer:"layout-module--navContainer--1FuTs",brand:"layout-module--brand--1MhVo",navLinks:"layout-module--navLinks--WNy7z",main:"layout-module--main--1wJek",footer:"layout-module--footer--3NQ74",footerLinks:"layout-module--footerLinks--adBWU",socialIcon:"layout-module--socialIcon--1d6dS"}}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-202f4df8391c697be9e5.js.map