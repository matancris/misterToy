(this["webpackJsonpmister-toy"]=this["webpackJsonpmister-toy"]||[]).push([[0],{103:function(e,t,n){e.exports=n.p+"static/media/default.5a45102b.jpg"},135:function(e,t,n){e.exports=n(272)},271:function(e,t,n){},272:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=n(13),l=n(19),s=n(20),u=n(22),p=n(21),m=n(23),d=n(17),y=n(40),f=n.n(y),v=n(7),h=n.n(v),g=n(15),b=f.a.create({withCredentials:!0}),E=function(e,t){return k(e,"GET",t)},w=function(e,t){return k(e,"POST",t)},O=function(e,t){return k(e,"PUT",t)},j=function(e,t){return k(e,"DELETE",t)};function k(e){return S.apply(this,arguments)}function S(){return(S=Object(g.a)(h.a.mark((function e(t){var n,a,r,o=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"get",a=o.length>2&&void 0!==o[2]?o[2]:null,e.prev=2,e.next=5,b({url:"".concat("/api/").concat(t),method:n,data:a});case 5:return r=e.sent,e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(t,", with data: ").concat(a)),console.dir(e.t0),e.t0.response&&401===e.t0.response.status&&window.location.assign("/#/login"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var x=function(e){return e.data},C={query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new URLSearchParams;e.name&&t.set("q",e.name);e.inStock&&t.set("inStock",e.inStock);e.type&&t.set("type",e.type);e.type&&t.set("sort",e.sortBy);return f.a.get("".concat("/api/toy","?").concat(t)).then(x)},getById:function(e){return f.a.get("".concat("/api/toy","/").concat(e)).then(x)},remove:function(e){return f.a.delete("".concat("/api/toy","/").concat(e))},save:function(e){return e._id?f.a.put("".concat("/api/toy","/").concat(e._id),e):f.a.post("/api/toy",e).then(x)}};function T(e){return function(t){C.query(e).then((function(e){t({type:"SET_TOYS",toys:e})}))}}function I(e){return function(t){C.save(e).then((function(e){t({type:"ADD_TOY",toy:e}),t({type:"NOTIFY",isShown:!0,msg:"Added seccessfuly"})}))}}var R=Object(d.b)((function(e){return{loggedinUser:e.userReducer.loggedinUser}}))((function(e){var t=e.toy,a=e.loggedinUser;return r.a.createElement("div",{className:"car-preview card flex space-around column align-center"},r.a.createElement("img",{src:t.imgUrl?t.imgUrl:n(103),alt:""}),t.name,r.a.createElement("div",{className:"edit-toy-btns flex"},r.a.createElement(m.b,{to:"/toy/".concat(t._id)},"Details"),a&&a.isAdmin&&r.a.createElement(m.b,{to:"/toy/edit/".concat(t._id)},"Edit"),a&&a.isAdmin&&r.a.createElement("button",{onClick:function(){return e.onDeleteToy(t._id)}},"X")))}));function _(e){var t=e.toys,n=e.onDeleteToy;return r.a.createElement("div",{className:"toy-list flex flex-wrap justify-center"},t.map((function(e){return r.a.createElement(R,{toy:e,key:e._id,onDeleteToy:n})})))}var D=n(37),N=n(6),A=n(309),U=n(312),B=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={filter:{name:"",inStock:!1,type:"",sortBy:""}},e.handleChange=function(t){t.persist();var n="checkbox"===t.target.type?t.target.checked:t.target.value;e.setState((function(e){return{filter:Object(N.a)(Object(N.a)({},e.filter),{},Object(D.a)({},t.target.name,n))}}),(function(){e.props.onSetFilter(e.state.filter)}))},e.onFilter=function(t){t.preventDefault(),e.props.onSetFilter(e.state.filter)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.filter.name;return r.a.createElement("form",{onSubmit:this.onFilter,className:"form-filter flex space-evenely flex-1"},r.a.createElement("label",{htmlFor:""},"By name"),r.a.createElement("input",{type:"text",name:"name",value:e,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:""},"only in stock"),r.a.createElement("input",{type:"checkbox",name:"inStock",onChange:this.handleChange}),r.a.createElement(A.a,{name:"type",id:"select",onChange:this.handleChange},r.a.createElement(U.a,{value:""},"All"),r.a.createElement(U.a,{value:"Educational"},"Educational"),r.a.createElement(U.a,{value:"Funny"},"Funny"),r.a.createElement(U.a,{value:"Adult"},"Adult")),r.a.createElement("select",{name:"sort",id:"",onChange:this.handleChange},r.a.createElement("option",{value:""},"All"),r.a.createElement("option",{value:"name"},"name"),r.a.createElement("option",{value:"price"},"price")),r.a.createElement("button",null,"Filter"))}}]),n}(a.Component),F=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={filterBy:"",sortBy:""},e.onSetFilter=function(t){e.setState({filterBy:t},(function(){return e.props.loadToys(e.state.filterBy)}))},e.onSetSort=function(t){e.setState({sortBy:t},(function(){return e.props.loadToys(e.state.sortBy)}))},e.onDelete=function(t){e.props.removeToy(t)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.loadToys()}},{key:"render",value:function(){var e=this.props,t=e.toys,n=e.loggedinUser;return t?r.a.createElement("div",null,r.a.createElement("div",{className:"add-filter flex align-center space-around"},n&&n.isAdmin&&r.a.createElement(m.b,{to:"/toy/edit",className:"add-btn"},"Add Toy"),r.a.createElement(B,{onSetFilter:this.onSetFilter})),r.a.createElement(_,{toys:t,onDeleteToy:this.onDelete})):r.a.createElement("div",null,"Loading...")}}]),n}(a.Component),M={loadToys:T,removeToy:function(e){return function(t){C.remove(e).then((function(){t({type:"REMOVE_TOY",id:e}),t({type:"NOTIFY",isShown:!0,msg:"Removed seccessfuly"})}))}},addToy:I},L=Object(d.b)((function(e){return{toys:e.toyReducer.toys,loggedinUser:e.userReducer.loggedinUser}}),M)(F),Y={add:function(e){return V.apply(this,arguments)},query:function(e){if(e)var t="?toyId=".concat(e.toyId);return E("review".concat(t||""))},remove:function(e){return j("review/".concat(e))}};function V(){return(V=Object(g.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("review",t);case 2:return n=e.sent,console.log("add -> addedReview",n),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={review:{toyId:"",rate:0,content:""}},e.elInput=r.a.createRef(),e.onInputChange=function(t){e.setState({review:Object(N.a)(Object(N.a)({},e.state.review),{},Object(D.a)({},t.target.name,t.target.value))})},e.submitReview=function(t){t.preventDefault(),console.log("submitReview -> this.state.review",e.state.review),e.props.addReview(e.state.review)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState({review:{toyId:this.props.toyId}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"review-form flex column align-center",onSubmit:this.submitReview},r.a.createElement("h4",null,"rate this toy!"),r.a.createElement("select",{name:"rate",id:"",className:"rating-drop",onChange:this.onInputChange},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")),r.a.createElement("textarea",{name:"content",id:"",cols:"30",rows:"5",placeholder:"write your review here",onChange:this.onInputChange}),r.a.createElement("button",{className:"review-btn"},"submit")))}}]),n}(r.a.Component),P={addReview:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y.add(e);case 3:a=t.sent,console.log("addReview -> addedReview",a),n({type:"REVIEW_ADD",review:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("ReviewActions: err in addReview",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}},q=Object(d.b)((function(e){return{}}),P)(W);function z(e){return e.review?r.a.createElement("ul",{className:"review-container"},r.a.createElement("li",null,r.a.createElement("h2",null,"\u2b50".repeat(e.review.rate)),r.a.createElement("p",null,'"',e.review.content,'"'))):"Be the first one to give a review!"}function H(e){var t=e.reviews;return t.length&&t?r.a.createElement("div",{className:"review-list flex flex-wrap justify-center"},t.map((function(e){return r.a.createElement(z,{review:e,key:e._id})}))):r.a.createElement("div",null,"No reviews yet")}var G=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={toy:null},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.loadToy(),this.loadReviews()}},{key:"loadReviews",value:function(){var e=this.props.match.params.toyId;this.props.loadReviews({toyId:e})}},{key:"loadToy",value:function(){var e=this,t=this.props.match.params.toyId;C.getById(t).then((function(t){e.setState({toy:t})}))}},{key:"render",value:function(){var e=this.state.toy;return e?r.a.createElement("div",null,r.a.createElement("img",{src:e.imgUrl?e.imgUrl:n(103),alt:""}),r.a.createElement("h1",null,"name: ",e.name),r.a.createElement("h1",null,"price ",e.price),r.a.createElement("h1",null,"type: ",e.type),r.a.createElement("h1",null,"in stock? ",e.inStock?"yes":"no"),r.a.createElement(H,{reviews:this.props.reviews}),r.a.createElement(q,{toyId:e._id}),r.a.createElement(m.b,{to:"/toy"},"Back to list")):r.a.createElement("div",null,"Loading...")}}]),a}(a.Component),J={loadReviews:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y.query(e);case 3:a=t.sent,n({type:"SET_REVIEWS",reviews:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("ReviewActions: err in loadReviews",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},X=Object(d.b)((function(e){return{reviews:e.reviewReducer.reviews}}),J)(G),K=n(41),$=n(310),Q=n(306),Z={uploadImg:function(e){return ee.apply(this,arguments)}};function ee(){return(ee=Object(g.a)(h.a.mark((function e(t){var n,a,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"dawzeno7k",n="https://api.cloudinary.com/v1_1/".concat("dawzeno7k","/image/upload"),a=new FormData,console.dir(t.target),a.append("file",t.target.files[0]),a.append("upload_preset","fvxb6by1"),e.prev=6,e.next=9,fetch(n,{method:"POST",body:a});case 9:return r=e.sent,e.next=12,r.json();case 12:return o=e.sent,console.log(o),e.abrupt("return",o);case 17:e.prev=17,e.t0=e.catch(6),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[6,17]])})))).apply(this,arguments)}var te=function(e){return r.a.createElement($.a,Object.assign({variant:"outlined"},e,{label:e.name}))},ne=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={toy:null},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.toyId;t?C.getById(t).then((function(t){e.setState({toy:t})})):this.setState({toy:{name:"",price:"",type:""}})}},{key:"componentDidUpdate",value:function(e,t){var n=this;if(e.match.params.toyId!==this.props.match.params.toyId)return C.getById(this.props.match.params.toyId).then((function(e){n.setState({toy:e})}))}},{key:"onUpdateImg",value:function(){var e=Object(g.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.uploadImg(t);case 2:n=e.sent,(a=Object(N.a)({},this.state.toy)).imgUrl=n.secure_url,this.props.editToy(a);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.toy;return t?r.a.createElement("div",null,r.a.createElement("h1",null,"Add new Toy"),r.a.createElement(K.d,{initialValues:{name:t.name,price:t.price,type:t.type},validate:function(e){},onSubmit:function(n,a){var r=a.setSubmitting;e.setState({toy:Object(N.a)(Object(N.a)({},t),n)},(function(){e.props.addToy(e.state.toy),r(!1)})),e.props.history.push("/toy")}},(function(t){var n=t.isSubmitting;return r.a.createElement(K.c,{className:"flex column justify-center align-center"},r.a.createElement(K.b,{type:"text",name:"name",as:te}),r.a.createElement(K.a,{name:"name",component:"span"}),r.a.createElement(K.b,{type:"number",name:"price",as:te}),r.a.createElement(K.a,{name:"price",component:"span"}),r.a.createElement(K.b,{as:"select",name:"type"},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"Adult"},"Adult"),r.a.createElement("option",{value:"Educational"},"Educational"),r.a.createElement("option",{value:"Funny"},"Funny")),r.a.createElement("label",null," Upload your image to cloudinary!",r.a.createElement("input",{onChange:function(t){return e.onUpdateImg(t)},type:"file"})),r.a.createElement(Q.a,{type:"submit",disabled:n},"Submit"),r.a.createElement(Q.a,{type:"submit",onClick:function(){return e.props.history.goBack()}},"back"))}))):r.a.createElement("h1",null,"loading")}}]),n}(a.Component),ae={loadToys:T,addToy:I,editToy:function(e){return function(t){C.save(e).then((function(e){t({type:"EDIT_TOY",toy:e}),t({type:"NOTIFY",isShown:!0,msg:"Added seccessfuly"})}))}}},re=Object(d.b)((function(e){return{toys:e.toyReducer.toys}}),ae)(ne),oe=n(91),ce=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getToysDataByType=function(){return console.log("getToysDataByType -> this.props",e.props),e.props.toys.reduce((function(e,t){return"Adult"===t.type?e[0]+=+t.price:"Educational"===t.type?e[1]+=+t.price:"Funny"===t.type&&(e[2]+=+t.price),e}),[0,0,0])},e.getToysDataByYear=function(){var t=e.props.toys.reduce((function(e,t){var n=new Date(t.createdAt).getFullYear();return e[n]=e[n]?e[n]+1:1,e}),{});return{years:Object.keys(t),values:Object.values(t)}},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.loadToys()}},{key:"render",value:function(){var e=this.props.toys;if(console.log("render -> toys",e),!e.length)return r.a.createElement("h1",null,"loading");var t={labels:["Adult","Educational","Funny"],datasets:[{label:"Sales per year",backgroundColor:["#b2f0d4","#2d30b4","#88ccd9"],borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"#6ceff0",data:this.getToysDataByType()}]},n=this.getToysDataByYear(),a={labels:n.years,datasets:[{label:"Sales per year",backgroundColor:"lightBlue",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:n.values}]};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"welcome-div flex column"},r.a.createElement("div",{className:"welcome-txt flex column justify-center"},r.a.createElement("h1",null,"Welcome to MisterToy"),r.a.createElement("p",null,"our toys are the best on the planet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum atque dolores optio saepe repellendus, corporis, possimus quod nemo dicta ratione explicabo unde? Minima, nulla ea! Ut vitae repudiandae reiciendis natus."))),r.a.createElement("div",{className:"chart-container flex flex-wrap"},r.a.createElement(oe.Pie,{data:t}),r.a.createElement(oe.Line,{data:a})))}}]),n}(a.Component),ie={loadToys:T,addToy:I},le=Object(d.b)((function(e){return{toys:e.toyReducer.toys}}),ie)(ce),se=n(55),ue=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={center:{},store1Coord:{lat:32.0853,lng:34.7818},store2Coord:{lat:32.790509,lng:34.967076},store3Coord:{lat:33.0042,lng:35.08751}},e.centerByStor=function(t){e.setState({center:e.state[t]})},e.onMarkerClick=function(t,n,a){console.log("props:",t," marker:",n,"event",a);var r={lat:t.position.lat,lng:t.position.lng};e.setState({center:r})},e.onMapClicked=function(t,n,a){console.log("mapProps:",t),console.log("map:",n),console.log("clickEvent:",a),e.setState({lat:a.latLng.lat(),lng:a.latLng.lng()})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"map-container"},r.a.createElement(se.Map,{containerStyle:{position:"relative",width:"100%",height:"500px",border:"2px solid black",marginBottom:"10px",boxShadow:"15px 11px 9px 2px rgba(112,110,112,0.45)"},initialCenter:this.state.store2Coord,center:this.state.center,onClick:this.onMapClicked,google:this.props.google,zoom:8},r.a.createElement(se.Marker,{position:this.state.store1Coord,name:"store 1 location",onClick:function(){return e.onMarkerClick}}),r.a.createElement(se.Marker,{position:this.state.store2Coord,name:"store 2 location",onClick:function(){return e.onMarkerClick}}),r.a.createElement(se.Marker,{position:this.state.store3Coord,name:"store 3 location",onClick:function(){return e.onMarkerClick}}),r.a.createElement("div",{className:"location-btns flex space-around"},r.a.createElement(Q.a,{variant:"contained",color:"primary",onClick:function(){return e.centerByStor("store2Coord")}},"Haifa Stor"),r.a.createElement(Q.a,{variant:"contained",color:"primary",onClick:function(){return e.centerByStor("store3Coord")}},"Naharya Stor"),r.a.createElement(Q.a,{variant:"contained",color:"primary",onClick:function(){return e.centerByStor("store1Coord")}},"TLV Stor"))))}}]),n}(r.a.Component),pe=Object(se.GoogleApiWrapper)({apiKey:"AIzaSyA7wFxeGayDFtxLfft53sDr7sMu9cj7Vio"})(ue);function me(){return r.a.createElement("div",null,r.a.createElement("div",{className:"map-container"},r.a.createElement(pe,null)))}var de=n(307),ye=n(308),fe={login:function(e){return ve.apply(this,arguments)},logout:function(){return ge.apply(this,arguments)},signup:function(e){return he.apply(this,arguments)},getUsers:function(){return E("user")},getById:function(e){return E("user/".concat(e))},remove:function(e){return j("user/".concat(e))},update:function(e){return O("user/".concat(e._id),e)}};function ve(){return(ve=Object(g.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("auth/login",t);case 2:return n=e.sent,e.abrupt("return",be(n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(){return(he=Object(g.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("auth/signup",t);case 2:return n=e.sent,e.abrupt("return",be(n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(){return(ge=Object(g.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("auth/logout");case 2:sessionStorage.clear();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(e){return sessionStorage.setItem("user",JSON.stringify(e)),e}var Ee={logout:function(){return function(){var e=Object(g.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.logout();case 2:t({type:"SET_USER",user:null});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},we=Object(d.b)((function(e){return{loggedinUser:e.userReducer.loggedinUser}}),Ee)(Object(i.f)((function(e){function t(){return(t=Object(g.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.logout();case 2:e.history.push("/");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var n=e.loggedinUser;return console.log("function_Header -> loggedinUser",n),r.a.createElement(de.a,{position:"static",className:"app-material-bar full main-container"},r.a.createElement(ye.a,{className:"main-nav flex space-between"},r.a.createElement(m.b,{to:"/",className:"logo"},"MisterToy"),n&&r.a.createElement("h1",null,"Hello ",n.username,"!"),r.a.createElement("ul",{className:"main-nav flex clean-list"},r.a.createElement(m.b,{to:"/toy"},r.a.createElement("div",{className:"logo"},"toys")),r.a.createElement(m.b,{to:"/about"},r.a.createElement("div",{className:"logo"},"about")),!n&&r.a.createElement(m.b,{to:"/login"},"Login"),n&&r.a.createElement("button",{onClick:function(){return function(){return t.apply(this,arguments)}()}},"Logout"))))}))),Oe=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={user:{username:"",password:""}},e.onChange=function(t){console.log(t),e.setState({user:Object(N.a)(Object(N.a)({},e.state.user),{},Object(D.a)({},t.target.name,t.target.value))})},e.onLogin=function(t){t.preventDefault(),console.log("hi"),e.props.login(e.state.user).then((function(){return e.props.history.push("/toy")}))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex column"},r.a.createElement("form",{className:"flex space-between align-center column",onSubmit:this.onLogin},r.a.createElement("input",{type:"text",name:"username",onChange:this.onChange,placeholder:"Your user name"}),r.a.createElement("input",{type:"password",name:"password",onChange:this.onChange,placeholder:"password"}),r.a.createElement("button",{className:"submit"},"submit")))}}]),n}(r.a.Component),je={login:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fe.login(e);case 2:a=t.sent,n({type:"SET_USER",user:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},ke=Object(d.b)((function(e){return{loggedinUser:e.userReducer.loggedinUser}}),je)(Oe);var Se=function(){return r.a.createElement("div",{className:"App main-container"},r.a.createElement(we,null),r.a.createElement("main",{className:"full main-container"},r.a.createElement(i.c,null,r.a.createElement(i.a,{component:re,path:"/toy/edit/:toyId?"}),r.a.createElement(i.a,{component:X,path:"/toy/:toyId"}),r.a.createElement(i.a,{component:L,path:"/toy"}),r.a.createElement(i.a,{component:ke,path:"/login"}),r.a.createElement(i.a,{component:me,path:"/about"}),r.a.createElement(i.a,{component:le,path:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=n(48),Ce=n(125),Te=n(126),Ie={reviews:[]},Re={toys:[]};var _e={loggedinUser:null};var De=Object(xe.c)({toyReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOYS":return Object(N.a)(Object(N.a)({},e),{},{toys:t.toys});case"REMOVE_TOY":var n=e.toys.filter((function(e){return e._id!==t.id}));return Object(N.a)(Object(N.a)({},e),{},{toys:n});case"ADD_TOY":var a=e.toys.slice();return a.push(t.toy),Object(N.a)(Object(N.a)({},e),{},{toys:a});case"EDIT_TOY":var r=e.toys.findIndex((function(e){return e._id===t.toy._id})),o=e.toys.slice();return o[r]=t.toy,Object(N.a)(Object(N.a)({},e),{},{toys:o});default:return e}},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(N.a)(Object(N.a)({},e),{},{loggedinUser:t.user});case"UPDATE_USER":return Object(N.a)(Object(N.a)({},e),{},{loggedinUser:t.loggedinUser});default:return e}},reviewReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_REVIEWS":return Object(N.a)(Object(N.a)({},e),{},{reviews:t.reviews});case"REVIEW_ADD":return console.log("Reducer",t.review),Object(N.a)(Object(N.a)({},e),{},{reviews:[].concat(Object(Te.a)(e.reviews),[t.review])});case"REVIEW_UPDATE":return Object(N.a)(Object(N.a)({},e),{},{reviews:e.reviews.map((function(e){return e._id===t.review._id?t.review:e}))});default:return e}}}),Ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||xe.d,Ae=Object(xe.e)(De,Ne(Object(xe.a)(Ce.a)));n(271);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:Ae},r.a.createElement(m.a,null,r.a.createElement(Se,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[135,1,2]]]);
//# sourceMappingURL=main.8e96dec0.chunk.js.map