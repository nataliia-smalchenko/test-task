"use strict";(self.webpackChunktest_task=self.webpackChunktest_task||[]).push([[801],{7609:function(e,i,s){s(2791);i.Z=s.p+"static/media/sprite.882cbf6d277cb5230d1c8970692009bb.svg"},9894:function(e,i,s){s.d(i,{Z:function(){return r}});var t="Button_button__wiIYs",a="Button_load-more__kB-BP",n=s(184),r=function(e){return(0,n.jsx)("button",{className:e.class+" "+(e.loadMore?a:t),type:e.type,onClick:e.onClick,children:e.text})}},3954:function(e,i,s){s.d(i,{Z:function(){return u}});var t=s(1594),a=s(7609),n={card:"CamperCard_card__mU4dA",img:"CamperCard_img__TWdLt","title-wrapper":"CamperCard_title-wrapper__CmL3O",title:"CamperCard_title__XBCaP","price-wrapper":"CamperCard_price-wrapper__8iZgn",price:"CamperCard_price__vil4d","favorite-button":"CamperCard_favorite-button__8CNeT","icon-favorite":"CamperCard_icon-favorite__JeQl2",active:"CamperCard_active__6iMy3","loc-price-wrapper":"CamperCard_loc-price-wrapper__8vkFH",tag:"CamperCard_tag__TMIXq",icon:"CamperCard_icon__n-XRo",rating:"CamperCard_rating__Zxlcs",descr:"CamperCard_descr__TGLm9",details:"CamperCard_details__nnwF-"},r=s(9894),c=s(4420),l=s(1506),d=s(2829),o=s(7740),m=s(184),u=function(e){var i,s=(0,c.I0)(),u=(0,c.v9)(d.Tc);return(0,m.jsxs)("div",{className:n.card,children:[(0,m.jsx)("img",{className:n.img,src:null!==(i=e.item.gallery[0])&&void 0!==i?i:"../../images/no-image.jpg",alt:""}),(0,m.jsxs)("div",{className:n["descr-wrapper"],children:[(0,m.jsxs)("div",{className:n["title-wrapper"],children:[(0,m.jsx)("h3",{className:n.title,children:e.item.name}),(0,m.jsxs)("div",{className:n["price-wrapper"],children:[(0,m.jsx)("span",{className:n.price,children:"\u20ac"+e.item.price.toFixed(2)}),(0,m.jsx)("button",{className:n["favorite-button"],onClick:function(){s((0,l.j)(e.item._id))},children:(0,m.jsx)("svg",{className:u.includes(e.item._id)?"".concat(n["icon-favorite"]," ").concat(n.active):n["icon-favorite"],width:"24",height:"24",children:(0,m.jsx)("use",{href:a.Z+"#icon-heart"})})})]})]}),(0,m.jsxs)("div",{className:n["loc-price-wrapper"],children:[(0,m.jsxs)("div",{className:n.tag,children:[(0,m.jsx)("svg",{className:n.icon,width:"16",height:"16",children:(0,m.jsx)("use",{href:a.Z+"#icon-star"})}),(0,m.jsx)("span",{className:n.rating,children:"".concat(e.item.rating," (").concat(e.item.reviews.length," Reviews)")})]}),(0,m.jsxs)("div",{className:n.tag,children:[(0,m.jsx)("svg",{className:n.icon,width:"16",height:"16",children:(0,m.jsx)("use",{href:a.Z+"#icon-map-pin"})}),(0,m.jsx)("span",{children:e.item.location})]})]}),(0,m.jsx)("p",{className:n.descr,children:e.item.description}),(0,m.jsxs)("ul",{className:n.details,children:[(0,m.jsx)(t.Z,{icon:"#icon-peoples",text:e.item.adults+(e.item.adults>1?" adults":" adult")}),(0,m.jsx)(t.Z,{icon:"#icon-transmission",text:e.item.transmission}),(0,m.jsx)(t.Z,{icon:"#icon-engine",text:e.item.engine}),e.item.details.kitchen>0&&(0,m.jsx)(t.Z,{icon:"#icon-kitchen",text:"kitchen"}),(0,m.jsx)(t.Z,{icon:"#icon-beds",text:e.item.details.beds+(e.item.details.beds>1?" beds":" bed")}),e.item.details.airConditioner>0&&(0,m.jsx)(t.Z,{icon:"#icon-air",text:"AC"})]}),(0,m.jsx)(r.Z,{text:"Show more",type:"button",loadMore:"",onClick:function(){s((0,o.$J)(e.item._id))}})]})]})}},825:function(e,i,s){s.d(i,{Z:function(){return h}});var t=s(9439),a=s(7609),n={backdrop:"Modal_backdrop__xTnIT",modal:"Modal_modal__DJDMv",scrolled:"Modal_scrolled__S38ci",close:"Modal_close__V34Fj",gallery:"Modal_gallery__-0-Fw",title:"Modal_title__3HkNf","loc-price-wrapper":"Modal_loc-price-wrapper__fy0+T",price:"Modal_price__L7oyL",img:"Modal_img__20InI",tag:"Modal_tag__MB6xD",icon:"Modal_icon__2UpwH",rating:"Modal_rating__VqVBA",descr:"Modal_descr__OIW3t","radio-list":"Modal_radio-list__CZCr0","radio-label":"Modal_radio-label__w03m8",checked:"Modal_checked__8N-zB",line:"Modal_line__tPcoa"},r=s(4420),c=s(2791),l=s(7740),d=s(184),o=function(e){return(0,d.jsx)("form",{})},m={details:"Features_details__pn+v5"},u=s(1594),_=function(e){return(0,d.jsx)("div",{className:m.features,children:(0,d.jsxs)("ul",{className:m.details,children:[(0,d.jsx)(u.Z,{icon:"#icon-peoples",text:e.item.adults+(e.item.adults>1?" adults":" adult")}),(0,d.jsx)(u.Z,{icon:"#icon-transmission",text:e.item.transmission}),(0,d.jsx)(u.Z,{icon:"#icon-engine",text:e.item.engine}),e.item.details.kitchen>0&&(0,d.jsx)(u.Z,{icon:"#icon-kitchen",text:"kitchen"}),(0,d.jsx)(u.Z,{icon:"#icon-beds",text:e.item.details.beds+(e.item.details.beds>1?" beds":" bed")}),e.item.details.airConditioner>0&&(0,d.jsx)(u.Z,{icon:"#icon-air",text:"AC"})]})})},h=function(e){var i,s,m,u=(0,r.I0)(),h=(0,c.useState)("features"),p=(0,t.Z)(h,2),x=p[0],g=p[1];document.documentElement.classList.add("no-scroll");var j=function(e){e.target!==e.currentTarget&&"svg"!==e.target.nodeName&&"use"!==e.target.nodeName||(document.documentElement.classList.remove("no-scroll"),u((0,l.$J)("")))},v=function(e){e.target.classList.toggle("checked"),g("features")},f=function(e){e.target.classList.toggle("checked"),g("reviews")};return(0,c.useEffect)((function(){g("features");var e=function(e){"Escape"===e.code&&(document.documentElement.classList.remove("no-scroll"),u((0,l.$J)("")))};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[u]),(0,d.jsx)("div",{className:n.backdrop,onClick:j,children:(0,d.jsx)("div",{className:n.modal,children:(0,d.jsxs)("div",{className:n.scrolled,children:[(0,d.jsx)("button",{className:n.close,onClick:j,children:(0,d.jsx)("svg",{className:n.icon,width:"32",height:"32",children:(0,d.jsx)("use",{href:a.Z+"#icon-close"})})}),(0,d.jsx)("h3",{className:n.title,children:e.item.name}),(0,d.jsxs)("div",{className:n["loc-price-wrapper"],children:[(0,d.jsxs)("div",{className:n.tag,children:[(0,d.jsx)("svg",{className:n.icon,width:"16",height:"16",children:(0,d.jsx)("use",{href:a.Z+"#icon-star"})}),(0,d.jsx)("span",{className:n.rating,children:"".concat(e.item.rating," (").concat(e.item.reviews.length," Reviews)")})]}),(0,d.jsxs)("div",{className:n.tag,children:[(0,d.jsx)("svg",{className:n.icon,width:"16",height:"16",children:(0,d.jsx)("use",{href:a.Z+"#icon-map-pin"})}),(0,d.jsx)("span",{children:e.item.location})]})]}),(0,d.jsx)("p",{className:n.price,children:"\u20ac"+e.item.price.toFixed(2)}),(0,d.jsxs)("ul",{className:n.gallery,children:[(0,d.jsx)("li",{children:(0,d.jsx)("img",{className:n.img,src:null!==(i=e.item.gallery[0])&&void 0!==i?i:"../../images/no-image.jpg",alt:""})}),(0,d.jsx)("li",{children:(0,d.jsx)("img",{className:n.img,src:null!==(s=e.item.gallery[1])&&void 0!==s?s:"../../images/no-image.jpg",alt:""})}),(0,d.jsx)("li",{children:(0,d.jsx)("img",{className:n.img,src:null!==(m=e.item.gallery[2])&&void 0!==m?m:"../../images/no-image.jpg",alt:""})})]}),(0,d.jsx)("p",{className:n.descr,children:e.item.description}),(0,d.jsxs)("ul",{className:n["radio-list"],children:[(0,d.jsx)("li",{children:(0,d.jsxs)("label",{className:n["radio-label"],htmlFor:"features",onClick:v,children:[(0,d.jsx)("input",{className:n.radio+" visually-hidden",type:"radio",name:"view",id:"features",value:"features",onChange:v,checked:!0}),"Features"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("label",{className:n["radio-label"],htmlFor:"reviews",onClick:f,children:[(0,d.jsx)("input",{className:n.radio+" visually-hidden",type:"radio",name:"view",id:"reviews",value:"reviews",onChange:f}),"Reviews"]})})]}),(0,d.jsx)("hr",{className:n.line}),(0,d.jsxs)("div",{className:n["descr-wrapper"],children:["features"===x&&(0,d.jsx)(_,{item:e.item}),"reviews"===x&&(0,d.jsx)("div",{className:n.reviews,children:"reviews"}),(0,d.jsx)(o,{children:" "})]})]})})})}},1594:function(e,i,s){s.d(i,{Z:function(){return r}});var t={tag:"Tag_tag__vfKro"},a=s(7609),n=s(184),r=function(e){return(0,n.jsxs)("li",{className:t.tag,children:[(0,n.jsx)("svg",{className:t.icon,width:"20",height:"20",children:(0,n.jsx)("use",{href:a.Z+e.icon})}),(0,n.jsx)("span",{children:e.text})]})}},2829:function(e,i,s){s.d(i,{OG:function(){return a},Tc:function(){return l},ab:function(){return d},eE:function(){return c},rE:function(){return o},xU:function(){return n},zh:function(){return r}});var t=s(3553),a=function(e){return e.adverts.items},n=function(e){return e.adverts.isLoading},r=function(e){return e.adverts.error},c=function(e){return e.adverts.modalShowId},l=function(e){return e.favorites.favoriteCampersIds},d=(0,t.P1)([c,a],(function(e,i){return i.find((function(i){return i._id===e}))})),o=(0,t.P1)([a,l],(function(e,i){return e.filter((function(e){return i.includes(e._id)}))}))}}]);
//# sourceMappingURL=801.a8bee034.chunk.js.map