(this["webpackJsonpJob-listings-with-filtering"]=this["webpackJsonpJob-listings-with-filtering"]||[]).push([[0],{14:function(e,t,o){},22:function(e,t,o){"use strict";o.r(t);var i=o(1),a=o.n(i),n=o(4),s=o.n(n),r=(o(14),function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,23)).then((function(t){var o=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;o(e),i(e),a(e),n(e),s(e)}))}),c=o(5),l=Object(c.b)({name:"filter",initialState:{isOpen:!1,isEmpty:!0,filterCategoriesElementsArr:[],focused:!1,filterCategories:[]},reducers:{toggleIsOpen:function(e){e.isOpen=!e.isOpen},toggleIsEmpty:function(e){e.isEmpty=!e.isEmpty},toggleFocus:function(e){e.focused=!e.focused},addCategory:function(e,t){e.filterCategoriesElementsArr.push(t.payload)},deleteCateg:function(e,t){var o=e.filterCategoriesElementsArr.indexOf(t.payload);e.filterCategoriesElementsArr.splice(o,1)},clearCategs:function(e){e.filterCategoriesElementsArr=[],e.filterCategories=[]},setFilterCategory:function(e,t){e.filterCategories.push(t.payload)},deleteFilterCategory:function(e,t){var o=e.filterCategories.indexOf(t.payload);e.filterCategories.splice(o,1)}}}),d=l.actions,g=(d.toggleIsEmpty,d.toggleIsOpen),u=d.toggleFocus,p=d.addCategory,f=d.deleteCateg,m=d.clearCategs,j=d.setFilterCategory,v=d.deleteFilterCategory,b=l.reducer,A=Object(c.a)({reducer:{filter:b}}),h=o(2),O=o(3),y=o(8),C=o.p+"static/media/photosnap.5a867c13.svg",x=o.p+"static/media/manage.5a528a96.svg",F=o.p+"static/media/account.903d6cd0.svg",S=o.p+"static/media/myhome.aaaaa430.svg",w=o.p+"static/media/loop-studios.7778c957.svg",J=o.p+"static/media/faceit.54a148ce.svg",N=o.p+"static/media/shortly.3c01b577.svg",E=o.p+"static/media/insure.4d535e7e.svg",k=o.p+"static/media/eyecam-co.0abb14e8.svg",D=o.p+"static/media/the-air-filter-company.9b55f644.svg",I=o(0),T=[],B=function(){var e=Object(h.c)((function(e){return e})),t=[C,x,F,S,w,J,N,E,k,D],o=y;return e.filter.filterCategories.length>0&&(console.log("readed"),o=y.filter((function(t){return e.filter.filterCategories.every((function(e){return[t.role,t.level].concat(Object(O.a)(t.tools),Object(O.a)(t.languages)).includes(e)}))})),console.log(o)),o.map((function(e){var o=e.languages.map((function(e){return Object(I.jsx)("li",{children:e},e)})),i=e.tools.map((function(e){return Object(I.jsx)("li",{children:e},e)})),a=[e.role,e.level].concat(Object(O.a)(e.tools),Object(O.a)(e.languages));return T.push.apply(T,Object(O.a)(a)),Object(I.jsxs)("div",{className:e.featured?"jop border-desaturatedDarkCyan":"jop",children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("img",{src:t[e.id],alt:"jop logo"}),Object(I.jsxs)("ul",{className:"features",children:[Object(I.jsx)("li",{className:"company",children:e.company}),e.new&&Object(I.jsx)("li",{className:"new",children:"NEW!"}),e.featured&&Object(I.jsx)("li",{className:"featured",children:"FEATURED"})]}),Object(I.jsx)("h2",{className:"position",children:e.position}),Object(I.jsxs)("ul",{className:"Characteristics",children:[Object(I.jsx)("li",{children:e.postedAt}),Object(I.jsx)("li",{children:e.contract}),Object(I.jsx)("li",{children:e.location})]})]}),Object(I.jsx)("hr",{}),Object(I.jsxs)("ul",{className:"required-skills",children:[Object(I.jsx)("li",{children:e.role}),Object(I.jsx)("li",{children:e.level}),o,i]})]},e.id)}))},R=o.p+"static/media/icon-remove.70c075ce.svg",H=function(e){var t=e.children,o=Object(h.b)(),i=0;return Object(I.jsxs)("div",{className:"category-container",children:[Object(I.jsx)("div",{children:t}),Object(I.jsx)("img",{src:R,alt:"remove icon",className:"cursor-pointer",onClick:function(){return function(e){o(f(e)),o(v(e))}(t)}})]},i++)},M=function(){var e=Object(h.b)(),t=T.filter((function(e,t){return T.indexOf(e)===t})),o=0;return Object(I.jsx)("ul",{className:"categories-list",children:t.map((function(t){return Object(I.jsx)("li",{onClick:function(){return function(t){e(p(t)),e(j(t))}(t)},children:t},o++)}))})},Y=function(){var e=Object(h.c)((function(e){return e})),t=Object(h.b)(),o=0;return Object(I.jsxs)("div",{className:"filter-container",children:[e.filter.isOpen&&Object(I.jsxs)("div",{tabIndex:"0",className:"filter",onFocus:function(){return t(u())},children:[Object(I.jsx)("div",{className:"filter-categories",id:"filter-categories",children:e.filter.filterCategoriesElementsArr.map((function(e){return Object(I.jsx)(H,{id:o++,children:e})}))}),0!==e.filter.filterCategoriesElementsArr.length&&Object(I.jsx)("button",{className:"clear-categs",onClick:function(){return t(m())},children:"Clear"})]}),e.filter.focused&&e.filter.isOpen&&Object(I.jsx)(M,{}),Object(I.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAHYgAAB2IBOHqZ2wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAC6SURBVEiJ7dXBDQFBFMbxH8HNQQ+c6YKICK24ihp0oADRgCKEHlAAcedgNlnCLkscZP/JZGbem3lvDt+X4R/pYx9G79NihTC30A7rEYYoYoFpxtpLbEphc0YtliyG5oW7+DucnyV62GGLbsbiOX9EA2scMXl0IJJpE50MDQaYY4YVKjiF3I0Psuq9HO5GvqmGGAk+eIe668sPGH+jYM7vSdV5GpFM4/9BnCSdp5H4H0Qk6TyNl3yQ69wFBTIij8uD9FAAAAAASUVORK5CYII=",alt:"filter icon",className:"filter-icon",onClick:function(){t(g())}})]})};function P(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{className:"jops-container ",children:[Object(I.jsx)(Y,{}),Object(I.jsx)(B,{})]})})}var U=function(){return Object(I.jsxs)("div",{className:"font-spartan h-screen",children:[Object(I.jsx)("header",{}),Object(I.jsx)("main",{children:Object(I.jsx)(P,{})})]})};s.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(h.a,{store:A,children:Object(I.jsx)(U,{})})}),document.getElementById("root")),r()},8:function(e){e.exports=JSON.parse('[{"id":0,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[],"categories":["Senior","Frontend","JavaScript","CSS","HTML"]},{"id":1,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"],"categories":["Fullstack","Midweight","Python","React"]},{"id":2,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"],"categories":["Frontend","Junior","JavaScript","React","Sass"]},{"id":3,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[],"categories":["","","",""]},{"id":4,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"],"categories":["","","",""]},{"id":5,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"],"categories":["","","",""]},{"id":6,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"],"categories":["","","",""]},{"id":7,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"],"categories":["","","",""]},{"id":8,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"],"categories":["","","",""]},{"id":9,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"],"categories":["","","",""]}]')}},[[22,1,2]]]);
//# sourceMappingURL=main.c48ba5f6.chunk.js.map