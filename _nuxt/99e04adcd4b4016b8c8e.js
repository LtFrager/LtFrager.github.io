(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{181:function(t,e,n){},182:function(t,e,n){},183:function(t,e,n){},184:function(t,e,n){},185:function(t,e,n){"use strict";var o=n(181);n.n(o).a},186:function(t,e,n){"use strict";var o=n(182);n.n(o).a},187:function(t,e,n){"use strict";var o=n(183);n.n(o).a},188:function(t,e,n){"use strict";var o={props:["data"]},l=(n(185),n(4)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.data,(function(e,i){return n("div",{key:i},[n("v-parallax",{staticStyle:{height:"auto"},attrs:{src:e.img}},[n("v-container",[n("v-layout",{staticClass:"text-xs-center padding",attrs:{column:"","justify-center":"","align-center":"","fill-height":""}},[n("h2",{staticClass:"std__title ",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[e.subtitle_top?n("span",{staticClass:"subtitle",attrs:{"data-aos":"fade-down","data-aos-duration":"1000","data-aos-delay":"200"}},[t._v(t._s(e.subtitle_top))]):t._e(),t._v("\n                        "+t._s(e.title)+"\n                        "),e.subtitle_bottom?n("span",{staticClass:"subtitle_bottom",attrs:{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"200"}},[t._v(t._s(e.subtitle_bottom))]):t._e()]),t._v(" "),e.text?n("p",{staticClass:"std__text text_grey",attrs:{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"400"}},[t._v("\n                        "+t._s(e.text)+"\n                    ")]):t._e(),t._v(" "),e.link?n("button",{staticClass:"std__button",attrs:{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"600"},on:{click:function(n){return t.$router.push(e.link)}}},[t._v(t._s(e.buttonText))]):t._e()])],1)],1)],1)})),0)}),[],!1,null,"4091ffb0",null);e.a=component.exports},189:function(t,e,n){"use strict";var o={props:["data","titleData"]},l=(n(186),n(4)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"padding"},[n("div",{staticClass:"my-card"},[t._l(t.titleData,(function(e,i){return n("h2",{key:i,staticClass:"std__title text__black",attrs:{"data-aos":"fade-left","data-aos-duration":"600"}},[n("span",{staticClass:"subtitle",attrs:{"data-aos":"fade-down","data-aos-delay":"500","data-aos-duration":"1000"}},[t._v(t._s(e.subtitle))]),t._v("\n            "+t._s(e.title)+"\n        ")])})),t._v(" "),n("ul",{staticClass:"promo__list"},t._l(t.data,(function(e,i){return n("li",{key:i,attrs:{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"200"}},[n("div",[n("div",{staticClass:"list__icon"},[t._v("\n                        "+t._s(e.icon)+"\n                    ")])]),t._v(" "),n("div",{staticClass:"list__text"},[n("p",{staticClass:"text__black std__text"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"std__text"},[t._v(t._s(e.text))])])])})),0)],2)])}),[],!1,null,"7d14f19b",null);e.a=component.exports},190:function(t,e,n){"use strict";var o={props:["data"]},l=(n(187),n(4)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.data,(function(e,i){return n("v-parallax",{key:i,staticStyle:{height:"auto","min-height":"450px"},attrs:{src:e.img}},[n("v-container",[n("v-layout",{staticClass:"padding",class:[e.textLeft?"justify-start":"justify-end"],attrs:{row:"","align-center":"","fill-height":""}},[n("v-flex",{staticClass:"my-card",attrs:{xs12:"",sm8:"",md6:""}},[n("h2",{staticClass:"std__title text__black",attrs:{"data-aos":"fade-left","data-aos-duration":"600"}},[n("span",{staticClass:"subtitle",attrs:{"data-aos":"slide-up","data-aos-delay":"800","data-aos-duration":"1000"}},[t._v(t._s(e.subtitle_top))]),t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("p",{staticClass:"text__black std__text",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[t._v(" "+t._s(e.boldText)+" ")]),t._v(" "),t._l(e.paragrafs,(function(e,i){return n("p",{key:i,staticClass:"std__text",attrs:{"data-aos":"zoom-in-up","data-aos-duration":"1200"}},[t._v("\n            "+t._s(e)+"\n          ")])}))],2)],1)],1)],1)})),1)}),[],!1,null,"15e26c38",null);e.a=component.exports},191:function(t,e,n){"use strict";var o=n(184);n.n(o).a},192:function(t,e,n){"use strict";var o={props:["data"]},l=(n(191),n(4)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},t._l(t.data,(function(e,i){return n("v-flex",{key:i,attrs:{xs12:"",sm4:""}},[n("v-card",{staticClass:"promo__item",attrs:{hover:"","data-aos":"fade-up","data-aos-anchor-placement":"top-bottom","data-aos-duration":"1000","data-aos-delay":"500"}},[n("div",{staticClass:"item__img",style:"background-image:url("+e.img+")"},[n("nuxt-link",{staticClass:"item__img-link",attrs:{to:e.link}})],1),t._v(" "),n("v-card-text",[n("h6",{staticClass:"item__category"},[t._v("\n                        "+t._s(e.category)+"\n                    ")]),t._v(" "),n("h3",{staticClass:"item__title"},[n("nuxt-link",{attrs:{to:e.link}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])],1),t._v(" "),n("p",{staticClass:"item__text"},[t._v("\n                        "+t._s(e.text)+"\n                    ")]),t._v(" "),e.link?n("v-card-actions",[n("v-spacer"),t._v(" "),n("nuxt-link",{staticClass:"item__arrow-link",attrs:{to:e.link}},[t._v("\n                            Read more\n                        ")])],1):t._e()],1)],1)],1)})),1)],1)}),[],!1,null,"674b6864",null);e.a=component.exports},197:function(t,e,n){},212:function(t,e,n){"use strict";var o=n(197);n.n(o).a},225:function(t,e,n){"use strict";n.r(e);var o=n(192),l=n(188),c=n(189),r=n(190),d={data:function(){return{center:{lat:50.4547,lng:30.5238},myActive:1,locationData:[{active:1,title:"Киев",text:"Place 1 active  Plase for text",contactsData:[{contacsTitle:"Adress",contactsContent:["1 4096 N Highland St, Arlington VA 32101, USA"]},{contacsTitle:"Phone",contactsContent:["800 1234 56 78","800 1234 56 78"]},{contacsTitle:"mail",contactsContent:["school@company.com"]}],position:{lat:50.4547,lng:30.5238}},{active:2,title:"Днепропетровск",text:"Place 2 active  Plase for text",contactsData:[{contacsTitle:"Adress",contactsContent:["2 4096 N Highland St, Arlington VA 32101, USA"]},{contacsTitle:"Phone",contactsContent:["800 1234 56 78","800 1234 56 78"]},{contacsTitle:"mail",contactsContent:["school@company.com"]}],position:{lat:50.4547,lng:10.123238}},{active:3,title:"Черкассы",text:"Place 3 active  Plase for text",contactsData:[{contacsTitle:"Adress",contactsContent:["3 4096 N Highland St, Arlington VA 32101, USA"]},{contacsTitle:"Phone",contactsContent:["800 1234 56 78","800 1234 56 78"]},{contacsTitle:"mail",contactsContent:["school@company.com"]}],position:{lat:50.4547,lng:20.5238}},{active:4,title:"Одесса",text:"Place 4 active  Plase for text",contactsData:[{contacsTitle:"Adress",contactsContent:["3 4096 N Highland St, Arlington VA 32101, USA"]},{contacsTitle:"Phone",contactsContent:["800 1234 56 78","800 1234 56 78"]},{contacsTitle:"mail",contactsContent:["school@company.com"]}],position:{lat:54.4547,lng:20.5238}},{active:5,title:"Кировоград",text:"Place 5 active  Plase for text",contactsData:[{contacsTitle:"Adress",contactsContent:["3 4096 N Highland St, Arlington VA 32101, USA"]},{contacsTitle:"Phone",contactsContent:["800 1234 56 78","800 1234 56 78"]},{contacsTitle:"mail",contactsContent:["school@company.com"]}],position:{lat:52.4547,lng:20.5238}},{active:6,title:"Киевская Обласная",text:"Place 6 active  Plase for text",contactsData:[{contacsTitle:"Adress",contactsContent:["1 4096 N Highland St, Arlington VA 32101, USA"]},{contacsTitle:"Phone",contactsContent:["800 1234 56 78","800 1234 56 78"]},{contacsTitle:"mail",contactsContent:["school@company.com"]}],position:{lat:50.4547,lng:31.5238}}],options:{disableDefaultUI:!0,styles:[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#757575"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#181818"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{color:"#1b1b1b"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#2c2c2c"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#373737"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#3c3c3c"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#4e4e4e"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#3d3d3d"}]}]}}}},_=(n(212),n(4)),y=Object(_.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md6:"","data-aos":"fade-right","data-aos-delay":"800","data-aos-duration":"1000"}},[n("h2",{staticClass:"std__title text__black",attrs:{"data-aos":"fade-right","data-aos-duration":"600"}},[n("span",{staticClass:"subtitle",attrs:{"data-aos":"slide-up","data-aos-delay":"800","data-aos-duration":"1000"}},[t._v("контакти ")]),t._v("\n      НФХФУ та обласних фед-цій\n    ")]),t._v(" "),n("ul",{staticClass:"tab_list layout row wrap",attrs:{"data-aos":"slide-right","data-aos-duration":"1000"}},t._l(t.locationData,(function(e,i){return n("li",{key:i,staticClass:"tab",class:{active:t.myActive==e.active},on:{click:function(n){t.myActive=e.active,t.center=e.position}}},[t._v("\n            "+t._s(e.title)+"\n        ")])})),0),t._v(" "),t._l(t.locationData,(function(e,i){return t.myActive==e.active?n("ul",{key:i,staticClass:"location_content"},[n("p",{staticClass:"std__text text_grey"},[t._v("\n                        "+t._s(e.text)+"\n                    ")]),t._v(" "),t._l(e.contactsData,(function(e,i){return n("li",{key:i},[n("h3",{staticClass:"location_content_title"},[t._v("\n                            "+t._s(e.contacsTitle)+"\n                        ")]),t._v(" "),t._l(e.contactsContent,(function(e,i){return n("p",{key:i,staticClass:"std__text text_grey"},[t._v("\n                            "+t._s(e)+"\n                        ")])}))],2)}))],2):t._e()}))],2),t._v(" "),n("v-flex",{attrs:{"data-aos":"fade-up","data-aos-delay":"800","data-aos-duration":"1000"}},[n("GmapMap",{staticClass:"map-size",attrs:{center:t.center,zoom:14,options:t.options}},t._l(t.locationData,(function(e,o){return n("GmapMarker",{key:o,attrs:{position:e.position},on:{click:function(n){t.center=e.position}}})})),1)],1)],1)],1)}),[],!1,null,"5a6cdd83",null).exports,v={components:{PromoCards:o.a,TitlePromo:l.a,ListBlock:c.a,TextBlock:r.a,MyMap:y},data:function(){return{textBlock:[{textLeft:!0,img:"/img/index/index3.jpg",subtitle_top:"Gladiatoria",title:"ГДЕ ПРОХОДЯТ ЗАНЯТИЯ?",boldText:" Club Gladiatoria - это инициативная группа энтузиастов-исследователей и любителей искусства фехтования клинковым оружием. ",paragrafs:[" С 1-го сентября - в зале № 229 спортивного комплекса Киевского университета имени Бориса Гринченко по адресу ул.Маршала Тимошенко 13Б, ст. метро Минская.","В теплое время - на открытой площадке возле ст. метро Оболонь рядом со школой-лицеем №157."]}],titlePromoGoToTraining:[{img:"/img/about/image2.jpg ",subtitle_top:"ЗАПИСАТЬСЯ НА ТРЕНИРОВКУ",title:"Первая тренеровка бесплатно",subtitle_bottom:"Наши телефоны: 068 978-48-85, 095 282-09-67, 073 155-39-07,E-mail: horting.fencing@gmail.com, kendo.obolon@gmail.com "}]}}},f=Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("my-map"),t._v(" "),t._m(0),t._v(" "),n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},t._l(16,(function(e){return n("v-flex",{key:e,attrs:{xs12:"",sm6:"",md4:""}},[n("h3",[t._v("City")]),t._v(" "),n("ul",[n("li",[t._v("\n                        section name\n                    ")]),t._v(" "),n("li",[t._v("\n                        section name\n                    ")]),t._v(" "),n("li",[t._v("\n                        section name\n                    ")]),t._v(" "),n("li",[t._v("\n                        section name\n                    ")])])])})),1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"std__title text__black text-xs-center",attrs:{"data-aos":"zoom-in","data-aos-duration":"1000","data-aos-delay":"300"}},[e("span",{staticClass:"subtitle",attrs:{"data-aos":"slide-up","data-aos-delay":"800","data-aos-duration":"1000"}},[this._v("контакти ")]),this._v("\n        Секцiй\n    ")])}],!1,null,"d43f0ad8",null);e.default=f.exports}}]);