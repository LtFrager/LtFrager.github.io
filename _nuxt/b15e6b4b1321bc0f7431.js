(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{151:function(t,e,n){},152:function(t,e,n){},153:function(t,e,n){},154:function(t,e,n){"use strict";var o=n(151);n.n(o).a},155:function(t,e,n){"use strict";var o=n(152);n.n(o).a},157:function(t,e,n){"use strict";var o={props:["data"]},r=(n(154),n(17)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},t._l(t.data,function(e,i){return n("v-flex",{key:i,attrs:{xs12:"",sm4:""}},[n("v-card",{staticClass:"promo__item",attrs:{hover:"","data-aos":"fade-up","data-aos-anchor-placement":"top-bottom","data-aos-duration":"1000","data-aos-delay":"500"}},[n("div",{staticClass:"item__img",style:"background-image:url("+e.img+")"},[n("nuxt-link",{staticClass:"item__img-link",attrs:{to:e.link}})],1),t._v(" "),n("v-card-text",[n("h6",{staticClass:"item__category"},[t._v("\n                        "+t._s(e.category)+"\n                    ")]),t._v(" "),n("h3",{staticClass:"item__title"},[n("nuxt-link",{attrs:{to:e.link}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])],1),t._v(" "),n("p",{staticClass:"item__text"},[t._v("\n                        "+t._s(e.text)+"\n                    ")]),t._v(" "),e.link?n("v-card-actions",[n("v-spacer"),t._v(" "),n("nuxt-link",{staticClass:"item__arrow-link",attrs:{to:e.link}},[t._v("\n                            Read more\n                        ")])],1):t._e()],1)],1)],1)}),1)],1)},[],!1,null,"674b6864",null);e.a=component.exports},158:function(t,e,n){"use strict";var o={props:["data"]},r=(n(155),n(17)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.data,function(e,i){return n("div",{key:i},[n("v-parallax",{staticStyle:{height:"auto"},attrs:{src:e.img}},[n("v-container",[n("v-layout",{staticClass:"text-xs-center padding",attrs:{column:"","justify-center":"","align-center":"","fill-height":""}},[n("h2",{staticClass:"std__title ",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[e.subtitle_top?n("span",{staticClass:"subtitle",attrs:{"data-aos":"fade-down","data-aos-duration":"1000","data-aos-delay":"200"}},[t._v(t._s(e.subtitle_top))]):t._e(),t._v("\n                        "+t._s(e.title)+"\n                        "),e.subtitle_bottom?n("span",{staticClass:"subtitle_bottom",attrs:{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"200"}},[t._v(t._s(e.subtitle_bottom))]):t._e()]),t._v(" "),e.text?n("p",{staticClass:"std__text text_grey",attrs:{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"400"}},[t._v("\n                        "+t._s(e.text)+"\n                    ")]):t._e(),t._v(" "),e.link?n("button",{staticClass:"std__button",attrs:{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"600"},on:{click:function(n){return t.$router.push(e.link)}}},[t._v(t._s(e.buttonText))]):t._e()])],1)],1)],1)}),0)},[],!1,null,"4091ffb0",null);e.a=component.exports},159:function(t,e,n){"use strict";var o=n(153);n.n(o).a},161:function(t,e,n){"use strict";var o={props:["data","titleData"]},r=(n(159),n(17)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"padding"},[t._l(t.titleData,function(e,i){return n("h2",{key:i,staticClass:"std__title text__black",attrs:{"data-aos":"fade-left","data-aos-duration":"600"}},[n("span",{staticClass:"subtitle",attrs:{"data-aos":"fade-down","data-aos-delay":"500","data-aos-duration":"1000"}},[t._v(t._s(e.subtitle))]),t._v("\n        "+t._s(e.title)+"\n    ")])}),t._v(" "),n("ul",{staticClass:"promo__list"},t._l(t.data,function(e,i){return n("li",{key:i,attrs:{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"200"}},[n("div",[n("div",{staticClass:"list__icon"},[t._v("\n                    "+t._s(e.icon)+"\n                ")])]),t._v(" "),n("div",{staticClass:"list__text"},[n("p",{staticClass:"text__black std__text"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"text_grey std__text"},[t._v(t._s(e.text))])])])}),0)],2)},[],!1,null,"14275747",null);e.a=component.exports},191:function(t,e,n){"use strict";n.r(e);var o=n(157),r=n(158),l=n(161),d={components:{PromoCards:o.a,TitlePromo:r.a,ListBlock:l.a},data:function(){return{titlePromoData_1:[{img:"/img/about/image2.jpg ",title:"Рандомный факт о кендо пару слов",subtitle_bottom:"Мы с радостью готовы поделиться с вами секретами мастерства в искусстве фехтования и создали для этого все необходимые условия!"}],titlePromoData_2:[{img:"/img/about/image2.jpg ",title:"JOIN OUR CLUB",subtitle_top:"REQUEST A FREE TRAINING",text:"You have an exclusive chance to become the member of our club and receive all those bonuses we offer! Just fill in the form below and we’ll get back to you!",link:"/"}],ListBlockTitle:[{subtitle:"Кэндо подходит как мужчинам, так и женщинам всех возрастов. А также детям от 5 лет и старше.",title:"Кэндо полезно всем, но особенно тем, у кого:"}],ListBlockData:[{icon:"1",title:"",text:"есть трудности с самовыражением и с дисциплиной;"},{icon:"2",title:"",text:"проблемы с самооценкой и уверенностью в себе;"},{icon:"3",title:"",text:"есть потребность в физическом развитии и в коррекции осанки;"},{icon:"4",title:"",text:"хроническое перенапряжение - стресс;"},{icon:"5",title:"",text:"дисбаланс между духовной и интеллектуальной сферами жизни;"},{icon:"6",title:"",text:"творческий и духовный кризис, повышенная тревожностьи раздражительность;"},{icon:"7",title:"",text:"стоит вопрос, куда отдать ребенка, чтобы укрепить его духовно и физически?"}]}}},c=n(17),component=Object(c.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-parallax",{staticStyle:{height:"auto"},attrs:{src:"/img/about/image1.jpg"}},[n("v-container",[n("v-layout",{attrs:{row:"","align-center":"","fill-height":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[n("h2",{staticClass:"std__title text__black",attrs:{"data-aos":"fade-right","data-aos-duration":"600"}},[n("span",{staticClass:"subtitle",attrs:{"data-aos":"slide-up","data-aos-delay":"800","data-aos-duration":"1000"}},[t._v("JIYU\n                            KENSHI KAI")]),t._v("\n                        ЧТО ТАКОЕ КЭНДО?\n                    ")]),t._v(" "),n("p",{staticClass:"text__black std__text",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[t._v("Кэндо, это\n                        современное японское боевое искусство, сочетающее в себе спорт, многовековую\n                        культуру и историю , а самое главное – мощную, выработанную веками,\n                        психологопедагогическую систему, направленную на развитие силы воли, боевого духа, на\n                        укрепление характера, здоровья и на воспитаниегармоничной, высоконравственной личности.")]),t._v(" "),n("p",{staticClass:"text_grey std__text",attrs:{"data-aos":"zoom-in-up","data-aos-duration":"1200"}})])],1)],1)],1),t._v(" "),n("v-container",[n("div",[n("p",{staticClass:"std__text",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[t._v("\n                О сновным принципом Кэндо являетсяединство духа (Ки), меча (Кэн) итела (Тай), что всовременной\n                трактовке соответствует эмоциям и чувствам, интеллекту (мечкаксимвол разума) и телесному\n                здоровью (в том числе моторике, координации и сенсорике). То есть в процессе тренировок\n                происходит\n                гармоничное развитие как физических, так и психологических аспектов личности. Преодолевая\n                кажущееся неразрешеннимым противоречие между духовным и материальным началами современного\n                человека, Кэндо соединяетих в единую систему, позволяя наилучшим образом раскрыть и\n                реализовать\n                заложенный в человеке потенциал.\n            ")]),t._v(" "),n("p",{staticClass:"std__text",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[t._v("\n                We create content that engages and informs, and we complement it with practical tools to make\n                living healthy an easier and sustainable process. We started a tradition when our doors first\n                opened in 2007 of doing introductions at the beginning of each class – a tradition which has been\n                adopted by Sportek gyms all over the country. Also, while many of our workouts are timed and\n                competitive, it is all done in a supportive and team-oriented environment. Welcome!\n            ")]),t._v(" "),n("img",{staticStyle:{"max-width":"50%",float:"left",margin:"12px"},attrs:{src:"/img/about/trainers/team-1.jpg",alt:"img","data-aos":"fade-right","data-aos-duration":"1000"}}),t._v(" "),n("p",{staticClass:"std__text",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[t._v("\n                There’s nothing better than having your very own coach and mentor. Need an extra push? Our personal\n                trainers are certified experts in exercise physiology, anatomy, training program development,\n                exercise application and fitness assessments. They work for you no matter your age or fitness\n                level.\n            ")]),t._v(" "),n("p",{staticClass:"std__text",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[t._v('\n                The importance of will-power is recognized by most men, yet few deliberately give any time or\n                thought to its development. Why we resist one thing and yield to another may be due to "the\n                strongest motive," but what more particularly concerns us in the study of self-confidence is in\n                what way this mighty power can be built and directed.\n            ')]),t._v(" "),n("p",{staticClass:"std__text",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[t._v("\n                Gym caters for all levels of fitness. Among its most impressive aspects are the variety of classes\n                such as spinning for cardio fitness and Body Pump for burning off the excess weight. The gym\n                instructors are another plus point – professional, knowledgeable, dedicated and friendly. The\n                equipment is all brand new and state of the art.\n            ")]),t._v(" "),n("p",{staticClass:"std__text",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[t._v('\n                 The importance of will-power is recognized by most men, yet few deliberately give any time or\n                thought to its development. Why we resist one thing and yield to another may be due to "the\n                strongest motive," but what more particularly concerns us in the study of self-confidence is in\n                what way this mighty power can be built and directed.\n            ')]),t._v(" "),n("p",{staticClass:"std__text",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[t._v("\n                Gym caters for all levels of fitness. Among its most impressive aspects are the variety of classes\n                such as spinning for cardio fitness and Body Pump for burning off the excess weight. The gym\n                instructors are another plus point – professional, knowledgeable, dedicated and friendly. The\n                equipment is all brand new and state of the art.\n            ")]),t._v(" "),n("p",{staticClass:"std__text",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[t._v("\n                 We create content that engages and informs, and we complement it with practical tools to make\n                living healthy an easier and sustainable process. We started a tradition when our doors first\n                opened in 2007 of doing introductions at the beginning of each class – a tradition which has been\n                adopted by Sportek gyms all over the country. Also, while many of our workouts are timed and\n                competitive, it is all done in a supportive and team-oriented environment. Welcome!\n            ")]),t._v(" "),n("p",{staticClass:"std__text",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[t._v("\n                Gym caters for all levels of fitness. Among its most impressive aspects are the variety of classes\n                such as spinning for cardio fitness and Body Pump for burning off the excess weight. The gym\n                instructors are another plus point – professional, knowledgeable, dedicated and friendly. The\n                equipment is all brand new and state of the art.\n            ")])])]),t._v(" "),n("title-promo",{attrs:{data:t.titlePromoData_1}}),t._v(" "),n("v-parallax",{staticStyle:{height:"auto"},attrs:{src:"/img/about/image4.jpg"}},[n("v-container",[n("v-layout",{attrs:{row:"","justify-end":"","align-center":"","fill-height":""}},[n("v-flex",{attrs:{xs12:"",sm7:"",md6:""}},[n("list-block",{attrs:{data:t.ListBlockData,titleData:t.ListBlockTitle}})],1)],1)],1)],1),t._v(" "),n("title-promo",{attrs:{data:t.titlePromoData_2}})],1)},[],!1,null,null,null);e.default=component.exports}}]);