(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Bl7J:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),o=(n("WF7/"),n("v2Nh")),i=n.n(o),c=(n("PglE"),n("NO0K")),s=n("N8DM"),u=(n("FfUf"),function(){return r.a.createElement(s.ThemeToggler,null,(function(e){var t=e.theme,n=e.toggleTheme;return null===t?null:r.a.createElement("header",null,r.a.createElement("nav",{className:i.a.nav},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:i.a.navContainer},r.a.createElement(l.Link,{to:"/",className:i.a.brand},"Danilo Del Busso"),r.a.createElement("div",{className:i.a.navLinks},r.a.createElement(l.Link,{to:"/blog/"},"Blog"),r.a.createElement(l.Link,{to:"/projects/"},"Projects"),r.a.createElement("div",{className:"modeToggler"},r.a.createElement("button",{onClick:function(){return n("light"===t?"dark":"light")}},r.a.createElement("div",null))))))))}))}),m=function(e){var t=e.children;return r.a.createElement("div",{className:i.a.main},t)},d=function(){return r.a.createElement("footer",{className:i.a.footer},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:i.a.footerLinks},r.a.createElement(c.a,null),r.a.createElement("a",{href:"/rss.xml"},"rss")),r.a.createElement("p",null,"All materials © Danilo Del Busso 2020")))};t.a=function(e){var t=e.children;return r.a.useEffect((function(){var e=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")};e(),window.addEventListener("resize",e)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(m,null,t),r.a.createElement(d,null))}},CHNh:function(e,t,n){e.exports={socialIcon:"social-module--socialIcon--14HmA"}},FfUf:function(e,t,n){},GtdI:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"social":{"twitter":"danilo_delbusso","github":"danilo-delbusso","linkedin":"danilo-delbusso"}}}}}')},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));n("bWfx"),n("ioFf"),n("V+eJ"),n("91GP");var a=n("q1tI"),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(r),o=function(){return(o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};function c(e){return function(t){return a.createElement(s,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return a.createElement(t.tag,o({key:n},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var n,r=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var l=e.attr,c=e.title,s=i(e,["attr","title"]);return a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,s,{className:n,style:o({color:e.color||t.color},t.style,e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==l?a.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}},N8DM:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0;var r=a(n("QL1J"));t.ThemeToggler=r.default},NO0K:function(e,t,n){"use strict";var a=n("GtdI"),r=n("q1tI"),l=n.n(r),o=n("Lnxd"),i=n("ma3e"),c=n("CHNh"),s=n.n(c);t.a=function(){var e=a.data.site.siteMetadata.social;return l.a.createElement("div",null,l.a.createElement(o.b.Provider,{value:{className:s.a.socialIcon}},l.a.createElement("a",{href:"https://twitter.com/"+e.twitter},l.a.createElement(i.d,null)),l.a.createElement("a",{href:"https://github.com/"+e.github},l.a.createElement(i.b,null)),l.a.createElement("a",{href:"https://www.linkedin.com/in/"+e.linkedin+"/"},l.a.createElement(i.c,null))))}},PglE:function(e,t,n){},QL1J:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var r=a(n("PJYZ")),l=a(n("VbXa")),o=a(n("lSNA")),i=a(n("q1tI")),c=a(n("17x9")),s=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return t=e.call.apply(e,[this].concat(a))||this,(0,o.default)((0,r.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,l.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return i.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(i.default.Component);s.propTypes={children:c.default.func.isRequired};var u=s;t.default=u},Vbzp:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),o=n("airr"),i=n.n(o);t.a=function(e){var t=e.title,n=e.path,a=e.isInternal,o=e.headerContent,c=e.description;return r.a.createElement("article",{className:i.a.article,key:t},r.a.createElement("header",null,r.a.createElement("h3",null,a?r.a.createElement(l.Link,{to:n},t):r.a.createElement("a",{href:n,dangerouslySetInnerHTML:{__html:t}})),o),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:c}})))}},"WF7/":function(e,t,n){},Yk0g:function(e,t,n){e.exports={section:"projects-module--section--1-NS7",tagContainer:"projects-module--tagContainer--jW3my"}},airr:function(e,t,n){e.exports={article:"item-module--article--7aN00"}},v2Nh:function(e,t,n){e.exports={nav:"layout-module--nav--2cOrb",navContainer:"layout-module--navContainer--1FuTs",brand:"layout-module--brand--1MhVo",navLinks:"layout-module--navLinks--WNy7z",main:"layout-module--main--1wJek",footer:"layout-module--footer--3NQ74",footerLinks:"layout-module--footerLinks--adBWU",socialIcon:"layout-module--socialIcon--1d6dS"}},vx99:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return u}));n("KKXr");var a=n("q1tI"),r=n.n(a),l=n("Bl7J"),o=n("vrFN"),i=n("Yk0g"),c=n.n(i),s=n("Vbzp");t.default=function(e){var t=e.data.allMarkdownRemark.edges,n=r.a.createElement(r.a.Fragment,null,t.map((function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return r.a.createElement(s.a,{key:t.fields.slug,title:n,path:t.fields.slug,isInternal:!0,headerContent:r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:c.a.tagContainer},t.frontmatter.tags.split("_").map((function(e){return r.a.createElement("small",{key:t.frontmatter.title+"_"+e,dangerouslySetInnerHTML:{__html:e}})}))),r.a.createElement("small",null,t.frontmatter.date)),description:t.frontmatter.description||t.excerpt})})));return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Blog"}),r.a.createElement("section",{className:"page-section"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title"},"Articles"),n)))};var u="3493448931"}}]);
//# sourceMappingURL=component---src-pages-blog-js-38c77900f9d8f520685d.js.map