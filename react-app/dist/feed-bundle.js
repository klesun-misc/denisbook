!function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],p=0,h=[];p<i.length;p++)a=i[p],n[a]&&h.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);h.length;)h.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],r=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=s[0]))}return e}var r={},n={1:0},o=[];function a(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=r,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(s,r,function(t){return e[t]}.bind(null,r));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([512,0]),s()}({16:function(e,t,s){"use strict";s.d(t,"a",function(){return i});s(53);var r=s(15),n=s.n(r),o=s(4);function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}const i=e=>{const t=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(s,!0).forEach(function(t){n()(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(s).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}({googleIdToken:(()=>window.auth2.currentUser.get())().Zi.id_token},e);return fetch("https://midiana.lv:8086/?f="+t.func,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>{if(e)return e.json();throw Error("Something bad is happening with server.")}).then(t=>{if((t.error||!t.hasOwnProperty("message"))&&e.hasOwnProperty("componentDispatch")){const s={isError:!0,errorMsg:t.error||"Something went wrong :/"};return e.componentDispatch(Object(o.y)(s)),Promise.reject(t.error)}return t}).catch(e=>{console.error(e)})}},284:function(e,t,s){"use strict";(function(e){var r=s(0),n=s(517),o=s(518),a=s(516),i=s(301),c=s.n(i),l=s(303),u=s.n(l),p=s(285),h=s(296),d=s(6),g=s(4);t.a=Object(d.b)(e=>({error:e.error}))(class extends r.Component{constructor(e){super(e),this.closeSnackbar=this.closeSnackbar.bind(this)}closeSnackbar(){this.props.dispatch(Object(g.y)({isError:!1,errorMsg:""}))}render(){return e.createElement("div",{className:"main-app"},e.createElement(p.a,null),e.createElement(h.a,null),e.createElement(n.a,{open:this.props.error.isError,autoHideDuration:6e3,anchorOrigin:{vertical:"bottom",horizontal:"left"}},e.createElement(o.a,{className:"error-notification",message:e.createElement("span",{className:"error-msg-content"},e.createElement(c.a,{className:"error-msg-icon"}),this.props.error.errorMsg),action:[e.createElement(a.a,{key:"close","aria-label":"Close",color:"inherit",onClick:this.closeSnackbar},e.createElement(u.a,null))]})))}})}).call(this,s(0))},285:function(e,t,s){"use strict";var r=s(15),n=s.n(r),o=s(6),a=s(0),i=s.n(a),c=s(16),l=s(4),u=s(515);function p(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function h(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?p(s,!0).forEach(function(t){n()(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):p(s).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}const d=()=>({position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}),g=()=>({maxHeight:"575px",maxWidth:"100%"});t.a=Object(o.b)(null)(class extends a.Component{constructor(e){super(e),this.state={text:"",pastedImages:[],isError:!1,fullImage:"",newLine:{16:!1,13:!1}},this.onKeyDown=this.onKeyDown.bind(this),this.onInput=this.onInput.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onPaste=this.onPaste.bind(this),this.fullImageClose=this.fullImageClose.bind(this),this.fullImageOpen=this.fullImageOpen.bind(this)}addPost(){const e={text:this.state.text};this.state.pastedImages.length>0&&this.state.pastedImages.forEach(t=>{e.text=e.text+"![](".concat(t,")\n")}),Object(c.a)(h({func:"addPost",componentDispatch:this.props.dispatch},e)).then(t=>{const s=h({rowId:t.rowId,author:t.author},e);this.props.dispatch(Object(l.r)(s))}),this.setState(h({},this.state,{text:"",pastedImages:[]}))}onInput(e){this.setState(h({},this.state,{text:e.target.value,isError:e.target.value.length<1}))}removePreviewImage(e){const t=this.state.pastedImages;t.splice(e,1),this.setState(h({},this.state,{pastedImages:t}))}onPaste(e){const t=(e.clipboardData||e.originalEvent.clipboardData).items;for(let e in t){let s=t[e];if("file"===s.kind){const e=s.getAsFile(),t=new FileReader;t.onload=t=>{const s=t.target.result;Object(c.a)({func:"uploadImage",fileName:e.name,imageBase64:s.substring(s.indexOf("base64,")+7,s.length)}).then(e=>{e&&"ok"===e.message&&this.setState(h({},this.state,{pastedImages:this.state.pastedImages.concat([e.imageUrl])}))})},t.readAsDataURL(e)}}}onKeyUp(e){13!==e.keyCode&&16!==e.keyCode||this.setState(h({},this.state,{newLine:h({},this.state.newLine,{[e.keyCode]:!1})}))}onKeyDown(e){if((16===e.keyCode||13===e.keyCode)&&(this.setState(h({},this.state,{newLine:h({},this.state.newLine,{[e.keyCode]:!0})})),13===e.keyCode&&!this.state.newLine[16]))return e.preventDefault(),e.target.value.length<1&&this.state.pastedImages.length<1?this.setState(h({},this.state,{isError:!0})):this.addPost()}fullImageOpen(e){this.setState(h({},this.state,{fullImage:e}))}fullImageClose(){this.setState(h({},this.state,{fullImage:""}))}render(){const e=[];return this.state.pastedImages.length>0&&this.state.pastedImages.forEach((t,s)=>{e.push(i.a.createElement("div",{className:"preview-image-wrapper",key:s},i.a.createElement("span",{className:"preview-image-remove",onClick:()=>this.removePreviewImage(s)},i.a.createElement("svg",{className:"close-svg",viewBox:"0 0 40 40"},i.a.createElement("path",{className:"close-svg-path",d:"M 10,10 L 30,30 M 30,10 L 10,30"}))),i.a.createElement("img",{src:t,alt:"preview"+s,onClick:e=>this.fullImageOpen(t)})))}),i.a.createElement("div",{className:"create-post"},i.a.createElement("div",{className:"create-post-wrapper"},i.a.createElement("textarea",{value:this.state.text,onPaste:this.onPaste,className:"create-post-text"+(this.state.isError?" error":""),onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,onChange:this.onInput,placeholder:"Type a message..."})),this.state.pastedImages.length>0&&i.a.createElement("div",{className:"create-post-image-preview"},e,i.a.createElement(u.a,{open:this.state.fullImage.length>0,onClose:this.fullImageClose},i.a.createElement("div",{style:d()},i.a.createElement("div",null,i.a.createElement("img",{src:this.state.fullImage,style:g()}))))))}})},296:function(e,t,s){"use strict";s(42),s(57);var r=s(15),n=s.n(r),o=s(0),a=s.n(o),i=s(6),c=s(1),l=s.n(c),u=s(16),p=s(4),h=s(297),d=s.n(h),g=s(298),m=s(299),f=s.n(m),j=s(514),b=s(9);function y(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function O(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?y(s,!0).forEach(function(t){n()(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):y(s).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}const v=Object(b.a)(e=>({root:{backgroundColor:"#e0f2f1",border:"1px solid #c1c5c5",width:48,height:48}}))(j.a);t.a=Object(i.b)(e=>({posts:e.posts,newPost:e.newPost,postsLength:e.postsLength,user:e.user}))(class extends o.Component{constructor(e){super(e),this.postSound=null,this.processingUsers=[],this.isBlurred=!1,this.updateInterval=null,this.state={users:[],play:!1},this.step=1,this.postsLength=35,this.getUserAvatar=this.getUserAvatar.bind(this)}getBlurred(){return this.isBlurred}changeFavIco(e){let{type:t}=e;const s=document.querySelector("link[rel*='icon']")||document.createElement("link");s.type="image/x-icon",s.rel="shortcut icon",s.href=t&&"NEW MESSAGE"===t?"../react-app/src/style/img/favicon-msg.ico":"../react-app/src/style/img/favicon.ico",document.getElementsByTagName("head")[0].appendChild(s)}componentWillMount(){const e=s=>{window.pageYOffset+1200>document.body.clientHeight&&(this.step=this.step+1,window.removeEventListener("scroll",e),t())},t=()=>Object(u.a)({func:"getRelevantPosts",length:this.postsLength*this.step,beforeId:"",componentDispatch:this.props.dispatch}).then(t=>{if(this.props.postsLength>0){const e=new Date(this.props.posts[0].dt).getTime(),s=new Date(t.records[0].dt).getTime();this.props.posts[0].rowId!==t.records[0].rowId&&s>e&&this.getBlurred()&&this.props.posts[0].author!==this.props.user.getBasicProfile().getEmail()&&(this.changeFavIco({type:"NEW MESSAGE"}),this.postSound.play())}this.props.dispatch({type:p.d,posts:t.records||[]}),this.props.dispatch(Object(p.B)({postsLength:this.props.posts.length})),window.addEventListener("scroll",e)});t(),this.updateInterval=setInterval(t,2e3)}getUserAvatar(e){let t=!1;this.state.users.forEach(s=>{s.email===e&&(t=!0)}),!t&&this.processingUsers.indexOf(e)<0&&(this.processingUsers=this.processingUsers.concat([e]),Object(u.a)({func:"getUserData",email:e,componentDispatch:this.props.dispatch}).then(t=>{if(t&&"ok"===t.message){const[s]=this.state.users.filter(e=>t.email===e.email);s||(this.processingUsers=this.processingUsers.filter(t=>t!==e),this.setState(O({},this.state,{users:this.state.users.concat(O({},t))})))}}))}componentDidMount(){window.onblur=e=>this.isBlurred=!0,window.onfocus=e=>{this.isBlurred=!1,this.changeFavIco({type:!1})}}render(){const e=[],t=this.props.user.getBasicProfile();return this.props.posts.length&&this.props.posts.map(s=>{let r,n;if(t.getEmail()===s.author)r=t.getImageUrl(),n=t.getName();else{const[e]=this.state.users.filter(e=>s.author===e.email);e?(r=e.imageUrl,n=e.displayName):this.getUserAvatar(s.author)}const o=l()(new Date).diff(l()(s.dt),"minutes"),i=l()(new Date).diff(l()(s.dt),"hours"),c=o<1?"just now":o<60?o+(o<2?" minute ago":" minutes ago"):i<12?i+(i<2?"hour ago":" hours ago"):l()(s.dt).format("DD MMMM, HH:mm");e.push(a.a.createElement("div",{key:s.rowId,className:"post"},a.a.createElement("div",{className:"post-wrapper"},this.props.user.getBasicProfile().getEmail()===s.author&&a.a.createElement(g.a,{post:s}),a.a.createElement("div",{className:"post-sub-title"},a.a.createElement("div",{className:"post-avatar"},a.a.createElement(v,{src:r})),a.a.createElement("div",{className:"post-user-info"},a.a.createElement("div",{className:"post-author"},a.a.createElement("span",null,n||s.author)),a.a.createElement("div",{className:"post-date"},c))),a.a.createElement("div",{className:"post-body"},a.a.createElement(d.a,{source:s.text})),a.a.createElement("div",{className:"post-footer"},a.a.createElement("div",{className:"footer-icons"},a.a.createElement("span",{className:"icon-like"},a.a.createElement(f.a,{fontSize:"small"})))))))}),a.a.createElement("div",{className:"user-posts"},e,a.a.createElement("audio",{src:"../src/audio/newpost.mp3",ref:e=>this.postSound=e}))}})},298:function(e,t,s){"use strict";(function(e){s.d(t,"a",function(){return o});var r=s(0),n=s(16);class o extends r.Component{constructor(e){super(e),this.onRemove=this.onRemove.bind(this)}onRemove(){Object(n.a)({func:"deletePost",rowId:this.props.post.rowId})}render(){return e.createElement("div",{className:"post-remove",onClick:this.onRemove},"⨯")}}}).call(this,s(0))},4:function(e,t,s){"use strict";s.d(t,"d",function(){return r}),s.d(t,"b",function(){return n}),s.d(t,"i",function(){return o}),s.d(t,"j",function(){return a}),s.d(t,"q",function(){return i}),s.d(t,"k",function(){return c}),s.d(t,"e",function(){return l}),s.d(t,"g",function(){return u}),s.d(t,"h",function(){return p}),s.d(t,"m",function(){return h}),s.d(t,"l",function(){return d}),s.d(t,"a",function(){return g}),s.d(t,"f",function(){return m}),s.d(t,"p",function(){return f}),s.d(t,"c",function(){return j}),s.d(t,"o",function(){return b}),s.d(t,"n",function(){return y}),s.d(t,"w",function(){return O}),s.d(t,"r",function(){return v}),s.d(t,"B",function(){return w}),s.d(t,"C",function(){return E}),s.d(t,"u",function(){return S}),s.d(t,"v",function(){return P}),s.d(t,"x",function(){return I}),s.d(t,"s",function(){return k}),s.d(t,"z",function(){return D}),s.d(t,"t",function(){return N}),s.d(t,"A",function(){return C}),s.d(t,"y",function(){return x});s(80);const r="FETCH POSTS",n="ADD POST",o="LOGGED IN",a="LOG_OUT",i="SET SESSION",c="POSTS TO SHOW",l="INITIAL POSTS STATUS",u="LOAD DIALOGS",p="LOAD MESSAGES",h="SET DIALOG KEY",d="SET CURRENT DIALOG",g="ADD MY MESSAGES",m="INIT MY MESSAGES",f="SET MY MESSAGES",j="CHECK KEYS",b="SET KEYS",y="SET ERROR",O=()=>({type:a,loggedIn:!1,user:{}}),v=e=>({type:n,post:e}),w=e=>{let{postsLength:t}=e;return{type:l,postsLength:t}},E=e=>{let{session:t,user:s}=e;return{session:t,user:s,type:i,loggedIn:!0}},S=e=>{let{dialogs:t}=e;return{type:u,dialogs:t}},P=e=>({type:p,messages:e}),I=e=>({type:d,currentDialog:e}),k=e=>({type:j,keysChecking:e}),D=e=>{let{publicKeyB64:t,privateKeyB64:s}=e;return{type:b,publicKey:t.trim(),privateKey:s.trim()}},N=e=>({type:h,string:e}),C=e=>({type:f,myMessages:e}),x=e=>({type:y,error:e})},406:function(e,t,s){var r={"./af":140,"./af.js":140,"./ar":141,"./ar-dz":142,"./ar-dz.js":142,"./ar-kw":143,"./ar-kw.js":143,"./ar-ly":144,"./ar-ly.js":144,"./ar-ma":145,"./ar-ma.js":145,"./ar-sa":146,"./ar-sa.js":146,"./ar-tn":147,"./ar-tn.js":147,"./ar.js":141,"./az":148,"./az.js":148,"./be":149,"./be.js":149,"./bg":150,"./bg.js":150,"./bm":151,"./bm.js":151,"./bn":152,"./bn.js":152,"./bo":153,"./bo.js":153,"./br":154,"./br.js":154,"./bs":155,"./bs.js":155,"./ca":156,"./ca.js":156,"./cs":157,"./cs.js":157,"./cv":158,"./cv.js":158,"./cy":159,"./cy.js":159,"./da":160,"./da.js":160,"./de":161,"./de-at":162,"./de-at.js":162,"./de-ch":163,"./de-ch.js":163,"./de.js":161,"./dv":164,"./dv.js":164,"./el":165,"./el.js":165,"./en-SG":166,"./en-SG.js":166,"./en-au":167,"./en-au.js":167,"./en-ca":168,"./en-ca.js":168,"./en-gb":169,"./en-gb.js":169,"./en-ie":170,"./en-ie.js":170,"./en-il":171,"./en-il.js":171,"./en-nz":172,"./en-nz.js":172,"./eo":173,"./eo.js":173,"./es":174,"./es-do":175,"./es-do.js":175,"./es-us":176,"./es-us.js":176,"./es.js":174,"./et":177,"./et.js":177,"./eu":178,"./eu.js":178,"./fa":179,"./fa.js":179,"./fi":180,"./fi.js":180,"./fo":181,"./fo.js":181,"./fr":182,"./fr-ca":183,"./fr-ca.js":183,"./fr-ch":184,"./fr-ch.js":184,"./fr.js":182,"./fy":185,"./fy.js":185,"./ga":186,"./ga.js":186,"./gd":187,"./gd.js":187,"./gl":188,"./gl.js":188,"./gom-latn":189,"./gom-latn.js":189,"./gu":190,"./gu.js":190,"./he":191,"./he.js":191,"./hi":192,"./hi.js":192,"./hr":193,"./hr.js":193,"./hu":194,"./hu.js":194,"./hy-am":195,"./hy-am.js":195,"./id":196,"./id.js":196,"./is":197,"./is.js":197,"./it":198,"./it-ch":199,"./it-ch.js":199,"./it.js":198,"./ja":200,"./ja.js":200,"./jv":201,"./jv.js":201,"./ka":202,"./ka.js":202,"./kk":203,"./kk.js":203,"./km":204,"./km.js":204,"./kn":205,"./kn.js":205,"./ko":206,"./ko.js":206,"./ku":207,"./ku.js":207,"./ky":208,"./ky.js":208,"./lb":209,"./lb.js":209,"./lo":210,"./lo.js":210,"./lt":211,"./lt.js":211,"./lv":212,"./lv.js":212,"./me":213,"./me.js":213,"./mi":214,"./mi.js":214,"./mk":215,"./mk.js":215,"./ml":216,"./ml.js":216,"./mn":217,"./mn.js":217,"./mr":218,"./mr.js":218,"./ms":219,"./ms-my":220,"./ms-my.js":220,"./ms.js":219,"./mt":221,"./mt.js":221,"./my":222,"./my.js":222,"./nb":223,"./nb.js":223,"./ne":224,"./ne.js":224,"./nl":225,"./nl-be":226,"./nl-be.js":226,"./nl.js":225,"./nn":227,"./nn.js":227,"./pa-in":228,"./pa-in.js":228,"./pl":229,"./pl.js":229,"./pt":230,"./pt-br":231,"./pt-br.js":231,"./pt.js":230,"./ro":232,"./ro.js":232,"./ru":233,"./ru.js":233,"./sd":234,"./sd.js":234,"./se":235,"./se.js":235,"./si":236,"./si.js":236,"./sk":237,"./sk.js":237,"./sl":238,"./sl.js":238,"./sq":239,"./sq.js":239,"./sr":240,"./sr-cyrl":241,"./sr-cyrl.js":241,"./sr.js":240,"./ss":242,"./ss.js":242,"./sv":243,"./sv.js":243,"./sw":244,"./sw.js":244,"./ta":245,"./ta.js":245,"./te":246,"./te.js":246,"./tet":247,"./tet.js":247,"./tg":248,"./tg.js":248,"./th":249,"./th.js":249,"./tl-ph":250,"./tl-ph.js":250,"./tlh":251,"./tlh.js":251,"./tr":252,"./tr.js":252,"./tzl":253,"./tzl.js":253,"./tzm":254,"./tzm-latn":255,"./tzm-latn.js":255,"./tzm.js":254,"./ug-cn":256,"./ug-cn.js":256,"./uk":257,"./uk.js":257,"./ur":258,"./ur.js":258,"./uz":259,"./uz-latn":260,"./uz-latn.js":260,"./uz.js":259,"./vi":261,"./vi.js":261,"./x-pseudo":262,"./x-pseudo.js":262,"./yo":263,"./yo.js":263,"./zh-cn":264,"./zh-cn.js":264,"./zh-hk":265,"./zh-hk.js":265,"./zh-tw":266,"./zh-tw.js":266};function n(e){var t=o(e);return s(t)}function o(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=406},512:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s.n(r),o=s(10),a=s.n(o),i=s(6),c=s(59),l=s(284),u=s(45),p=(s(42),s(57),s(15)),h=s.n(p),d=s(4);function g(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function m(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?g(s,!0).forEach(function(t){h()(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):g(s).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}const f={loggedIn:!1,user:null,posts:[],showPosts:[],postsLength:0,showPostStep:0,error:{isError:!1,errorMsg:""}};const j=Object(u.b)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.d:return m({},e,{posts:t.posts});case d.b:return m({},e,{newPost:t.post,showPosts:[t.post,...e.showPosts],showPostStep:e.showPostStep+1});case d.e:return m({},e,{postsLength:t.postsLength});case d.k:return m({},e,{showPosts:t.showPosts,showPostStep:t.showPostStep});case d.i:return m({},e,{loggedIn:t.loggedIn,user:t.user});case d.q:return m({},e,{loggedIn:t.loggedIn,session:t.session,user:t.user});case d.j:return m({},e,{loggedIn:t.loggedIn,user:t.user});case d.n:return m({},e,{error:{isError:t.error.isError,errorMsg:t.error.errorMsg}});default:return m({},e)}});j.subscribe(()=>{});var b=class extends r.Component{render(){return n.a.createElement(i.a,{store:j},n.a.createElement(c.a,{body:n.a.createElement(l.a,null)}))}};a.a.render(n.a.createElement(b,null),document.getElementById("main"))},59:function(e,t,s){"use strict";(function(e){var r=s(0),n=s(60),o=s(76),a=s(6),i=s(4);t.a=Object(a.b)(e=>({loggedIn:e.loggedIn,user:e.user}))(class extends r.Component{constructor(e){super(e)}componentDidMount(){let e;const t=this.props.dispatch;gapi.load("auth2",function(){e=gapi.auth2.init({client_id:"521166378127-vhkak167b5ghngfkk5r6ukrq059njoo8.apps.googleusercontent.com"}).then(e=>e.isSignedIn.get()?(window.auth2=e,t(Object(i.C)({session:e,user:e.currentUser.get()}))):t(Object(i.w)()))})}getContext(){return this.props.loggedIn?this.props.body:this.props.user?e.createElement(n.a,null):e.createElement("div",{className:"loader"},e.createElement(o.BarLoader,{color:"#26A69A",width:200,height:5}))}render(){return this.getContext()}})}).call(this,s(0))},60:function(e,t,s){"use strict";(function(e){var r=s(15),n=s.n(r),o=s(0),a=s(6),i=s(4),c=s(16);function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}t.a=Object(a.b)(e=>({loggedIn:e.loggedIn,user:e.user}))(class extends o.Component{constructor(e){super(e)}onSignIn(e){return function(t){const s=gapi.auth2.getAuthInstance();window.auth2=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(s,!0).forEach(function(t){n()(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(s).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}({},s),e(Object(i.C)({session:s,user:t})),Object(c.a)({func:"login"})}}componentDidMount(){const e=this.onSignIn(this.props.dispatch);gapi.signin2.render("google-signin",{scope:"profile email",width:240,height:50,longtitle:!0,theme:"dark",onsuccess:e})}render(){return e.createElement("div",{id:"login-panel"},e.createElement("div",{className:"login-wrapper"},e.createElement("div",{className:"login-title"},e.createElement("h1",null,"Choose login form")),e.createElement("div",{className:"login-body"},e.createElement("div",{id:"google-signin"}))))}})}).call(this,s(0))}});