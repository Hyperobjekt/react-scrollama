(this["webpackJsonpreact-scrollama-example"]=this["webpackJsonpreact-scrollama-example"]||[]).push([[0],{13:function(e,t,n){e.exports=n(27)},27:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),i=n.n(o),c=n(7),l=n(8),s=n(12),u=n(11),p=n(10),f=n(1),d=n.n(f);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S=function(e){return"string"===typeof e&&e.includes("px")},y={position:"fixed",left:0,width:"100%",height:0,borderTop:"2px dashed black",zIndex:9999},E={fontSize:"12px",fontFamily:"monospace",margin:0,padding:6},x=function(e){var t=e.offset,n=function(e){return S(e)?e:"".concat(100*e,"%")}(t);return d.a.createElement("div",{style:h(h({},y),{},{top:n})},d.a.createElement("p",{style:E},"trigger: ",t))},w=function(e){var t=e.debug,n=e.children,r=e.offset,a=e.onStepEnter,o=e.onStepExit,i=e.onStepProgress,c=S(r),l=v(d.a.useState(0),2),s=l[0],u=l[1],p=v(d.a.useState(null),2),f=p[0],m=p[1],g=function(e){u(e)},h=function(e){m(window.innerHeight)};d.a.useEffect((function(){if(c)return window.addEventListener("resize",h),function(){window.removeEventListener("resize",h)}}),[]);var b=c?+r.replace("px","")/(f||window.innerHeight):r;return d.a.createElement(d.a.Fragment,null,t&&d.a.createElement(x,{offset:r}),d.a.Children.map(n,(function(e,t){return d.a.cloneElement(e,{scrollamaId:"react-scrollama-".concat(t),offset:b,onStepEnter:a,onStepExit:o,onStepProgress:i,lastScrollTop:s,handleSetLastScrollTop:g})})))};w.defaultProps={onStepProgress:null,onStepEnter:function(){},onStepExit:function(){}};var O=function(e){var t=e.children,n=e.data,r=e.handleSetLastScrollTop,a=e.lastScrollTop,o=e.onStepEnter,i=e.onStepExit,c=e.onStepProgress,l=e.offset,s=e.scrollamaId,u=function(e){var t=e.root,n=void 0===t?null:t,r=e.rootMargin,a=e.threshold,o=void 0===a?0:a,i=v(Object(f.useState)({}),2),c=i[0],l=i[1],s=v(Object(f.useState)(null),2),u=s[0],p=s[1],d=Object(f.useRef)(null);return Object(f.useEffect)((function(){d.current&&d.current.disconnect(),d.current=new window.IntersectionObserver((function(e){var t=v(e,1)[0];return l(t)}),{root:n,rootMargin:r,threshold:o});var e=d.current;return u&&e.observe(u),function(){return e.disconnect()}}),[u,n,r,o]),[p,c]}({rootMargin:function(e){return"-".concat(100*e,"% 0px -").concat(100-100*e,"% 0px")}(l),threshold:0}),p=v(u,2),m=p[0],g=p[1],h=v(d.a.useState(!1),2),b=h[0],S=h[1],y=function(){var e=g.target.getBoundingClientRect(),t=e.height,r=e.top,a=Math.min(1,Math.max(0,(window.innerHeight*l-r)/t));c&&c({progress:a,scrollamaId:s,data:n,element:g.target,entry:g})};return d.a.useEffect((function(){var e=document.documentElement.scrollTop,t=a<e?"down":"up";if(g&&!g.isIntersecting&&b?(i({element:g.target,scrollamaId:s,data:n,entry:g,direction:t}),S(!1),r(e)):g&&g.isIntersecting&&!b&&(S(!0),o({element:g.target,scrollamaId:s,data:n,entry:g,direction:t}),r(e)),g&&g.isIntersecting&&c)return document.addEventListener("scroll",y),function(){document.removeEventListener("scroll",y)}}),[g]),d.a.cloneElement(d.a.Children.only(t),{"data-react-scrollama-id":s,ref:m,entry:g})};O.defaultProps={onStepProgress:null,onStepEnter:function(){},onStepExit:function(){}};var j=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={data:0,steps:[10,20,30],progress:0},e.onStepEnter=function(t){var n=t.data;e.setState({data:n})},e.onStepExit=function(t){var n=t.direction,r=t.data;"up"===n&&r===e.state.steps[0]&&e.setState({data:0})},e.onStepProgress=function(t){var n=t.progress;e.setState({progress:n})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.data,n=e.steps,r=e.progress,o=this.props.classes;return a.a.createElement("div",null,a.a.createElement("div",{className:o.navbar},a.a.createElement("a",{href:"https://github.com/jsonkao/react-scrollama"},"GitHub")),a.a.createElement("p",{className:o.pageTitle},a.a.createElement("a",{href:"https://github.com/jsonkao/react-scrollama"},"React Scrollama")," ","Example"),a.a.createElement("p",{className:o.pageSubtitle},"Scroll \u2193"),a.a.createElement("div",{className:o.graphicContainer},a.a.createElement("div",{className:o.scroller},a.a.createElement(w,{onStepEnter:this.onStepEnter,onStepExit:this.onStepExit,progress:!0,onStepProgress:this.onStepProgress,offset:.4,debug:!0},n.map((function(e){var n=e===t,i=n?"rgba(44,127,184, ".concat(r,")"):"white",c=n?"visible":"hidden";return a.a.createElement(O,{data:e,key:e},a.a.createElement("div",{className:o.step,style:{background:i}},a.a.createElement("p",null,"step value: ",e),a.a.createElement("p",{style:{visibility:c}},Math.round(1e3*r)/10+"%")))})))),a.a.createElement("div",{className:o.graphic},a.a.createElement("p",null,t))))}}]),n}(r.PureComponent),P=Object(p.a)({navbar:{position:"fixed",display:"flex",top:0,right:0,zIndex:1,"& a":{display:"block",fontSize:"20px",padding:"20px"}},pageTitle:{textAlign:"center",fontSize:30,margin:"110px 0 10px"},pageSubtitle:{textAlign:"center",fontSize:"24px",color:"#888"},graphicContainer:{padding:"40vh 2vw 70vh",display:"flex",justifyContent:"space-between"},graphic:{flexBasis:"60%",position:"sticky",width:"100%",height:"60vh",top:"20vh",backgroundColor:"#aaa",display:"flex",alignItems:"center",justifyContent:"center","& p":{fontSize:"5rem",fontWeight:700,textAlign:"center",color:"#fff"}},scroller:{flexBasis:"35%"},step:{margin:"0 auto 3rem auto",padding:"180px 0",border:"1px solid #333","& p":{textAlign:"center",padding:"1rem",fontSize:"1.8rem",margin:0},"&:last-child":{marginBottom:0}}})(j);i.a.render(a.a.createElement(P,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.56ac3837.chunk.js.map