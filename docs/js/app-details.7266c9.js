(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{179:function(e,a,t){},183:function(e,a,t){"use strict";t.r(a);var n=t(27),r=t.n(n),l=t(20),i=t.n(l),s=t(0),c=t.n(s),m=t(2),o=t(48),p=t(55),u=t(28),d=t(32),E=t(53),v=t(54),h=function(e){var a=e.rating;function t(e){return e<=Math.floor(a)?"star_fill":e>Math.ceil(a)?"star":"star_lefthalf_fill"}return(c.a.createElement("div",{className:"rating-stars"},[1,2,3,4,5].map((function(e){return c.a.createElement(d.a,{key:e,f7:t(e)})}))))},g=t(87),f=function(e){var a=e.src,t=e.onClick,n=e.alt,r=Object(s.useState)(!1),l=i()(r,2),m=l[0],o=l[1];return c.a.createElement("img",{style:{opacity:m?1:0,transitionDuration:"600ms"},onLoad:function(){return o(!0)},onClick:t,src:a,alt:n})};t(179);a.default=function(e){var a,t=e.id,n=(e.backText,getAppById(t)),l=Object(s.useRef)(null),N=Object(s.useState)(!1),b=i()(N,2),w=b[0],q=b[1],k={5:500,4:100,3:80,2:50,1:200},y=Object.values(k).reduce((function(e,a){return e+a}));return c.a.createElement(o.a,{onPageInit:function(){l.current=m.a.photoBrowser.create({photos:r()(n.screenshots),toolbar:!1,navbarShowCount:!1})},onPageBeforeRemove:function(){l.current&&l.current.destroy()}},c.a.createElement("div",{className:"block app-header"},c.a.createElement("img",{src:n.icon,alt:n.title,className:"app-header-icon"}),c.a.createElement("div",{className:"app-header-content"},c.a.createElement("div",{className:"app-header-title"},n.title),c.a.createElement("div",{className:"app-header-subtitle"},n.subtitle),c.a.createElement("div",{className:"app-header-actions"},c.a.createElement(p.a,{external:!0,target:"_blank",href:"https://apps.apple.com/app/id".concat(n.id),round:!0,fill:!0},"GET"),c.a.createElement(u.a,{iconF7:"square_arrow_up"})),c.a.createElement("div",{className:"app-header-ratings"},c.a.createElement("div",{className:"app-header-rating"},c.a.createElement("div",{className:"app-header-rating-value"},n.rating),c.a.createElement(h,{rating:n.rating}),c.a.createElement("div",{className:"app-header-rating-sub"},"930 Ratings"))))),c.a.createElement("div",{className:"block app-screenshots"},n.screenshotsThumbs.map((function(e,a){return c.a.createElement(f,{onClick:function(){return function(e){l.current&&l.current.open(e)}(a)},src:e,key:a,alt:"Screenshot"})}))),c.a.createElement("div",{className:"block app-description ".concat(w?"app-description-full":"")},c.a.createElement("div",{className:"app-description-content"},c.a.createElement("div",{className:"app-description-text",dangerouslySetInnerHTML:{__html:(n.description||"").replace(/\n/g,"<br>")}}),c.a.createElement(u.a,{onClick:function(){return q(!0)}},"more"))),c.a.createElement(g.a,{title:"Ratings & Reviews"},c.a.createElement(u.a,null,"See All")),c.a.createElement("div",{className:"block app-ratings"},c.a.createElement("div",{className:"app-ratings-number"},c.a.createElement("b",null,n.rating),c.a.createElement("span",null,"out of 5")),c.a.createElement("div",{className:"app-ratings-votes"},[5,4,3,2,1].map((function(e){return c.a.createElement("div",{className:"app-ratings-votes-row",key:e},c.a.createElement("div",{className:"app-ratings-votes-stars"},Array.from({length:e}).map((function(e,a){return c.a.createElement(d.a,{key:a,f7:"star_fill"})}))),c.a.createElement("div",{className:"app-ratings-votes-progress"},c.a.createElement("span",{style:{width:"".concat(k[e]/y*100,"%")}})))})),c.a.createElement("div",{className:"app-ratings-votes-total"},y," Ratings"))),c.a.createElement("div",{className:"block app-reviews"},c.a.createElement("div",{className:"app-review"},c.a.createElement("div",{className:"app-review-header"},c.a.createElement("span",null,c.a.createElement("b",null,"John")),c.a.createElement("span",null,"2d ago")),c.a.createElement("div",{className:"app-review-header"},c.a.createElement(h,{rating:5}),c.a.createElement("span",null,"johndoe")),c.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum debitis natus cum quae est rerum cupiditate cumque delectus eaque ipsa, accusamus facilis deleniti consequuntur, aliquam soluta minima, eos exercitationem.")),c.a.createElement("div",{className:"app-review"},c.a.createElement("div",{className:"app-review-header"},c.a.createElement("span",null,c.a.createElement("b",null,"Mike")),c.a.createElement("span",null,"3d ago")),c.a.createElement("div",{className:"app-review-header"},c.a.createElement(h,{rating:3}),c.a.createElement("span",null,"johndoe")),c.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur laudantium, laborum sunt adipisci magni in doloremque neque error earum fugiat! Nihil molestias rem tenetur laboriosam illo similique nobis adipisci?")),c.a.createElement("div",{className:"app-review"},c.a.createElement("div",{className:"app-review-header"},c.a.createElement("span",null,c.a.createElement("b",null,"Vladimir")),c.a.createElement("span",null,"3d ago")),c.a.createElement("div",{className:"app-review-header"},c.a.createElement(h,{rating:2}),c.a.createElement("span",null,"johndoe")),c.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, repudiandae minima? Reprehenderit ab placeat delectus necessitatibus suscipit cumque laborum modi, eaque, a consequuntur, pariatur et itaque. Vitae odio necessitatibus amet.")),c.a.createElement("div",{className:"app-review"},c.a.createElement("div",{className:"app-review-header"},c.a.createElement("span",null,c.a.createElement("b",null,"Karoly")),c.a.createElement("span",null,"4d ago")),c.a.createElement("div",{className:"app-review-header"},c.a.createElement(h,{rating:4}),c.a.createElement("span",null,"johndoe")),c.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ab ex! Architecto alias delectus, optio eos nostrum obcaecati repellat distinctio, ab, quam dolores voluptatem ex inventore facere expedita exercitationem repudiandae?")),c.a.createElement("div",{className:"app-review"},c.a.createElement("div",{className:"app-review-header"},c.a.createElement("span",null,c.a.createElement("b",null,"Peter")),c.a.createElement("span",null,"4d ago")),c.a.createElement("div",{className:"app-review-header"},c.a.createElement(h,{rating:5}),c.a.createElement("span",null,"johndoe")),c.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo odit exercitationem eligendi maiores rerum quo, quos ullam quam! Quia facilis consequatur vitae cupiditate molestias maiores odit magnam quo itaque.")),c.a.createElement("div",{className:"app-review"},c.a.createElement("div",{className:"app-review-header"},c.a.createElement("span",null,c.a.createElement("b",null,"Alim")),c.a.createElement("span",null,"5d ago")),c.a.createElement("div",{className:"app-review-header"},c.a.createElement(h,{rating:1}),c.a.createElement("span",null,"johndoe")),c.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ipsa accusantium qui praesentium, obcaecati quae illum, tempora molestias similique nihil sunt in tempore ipsam laborum illo maxime amet quos consectetur!"))),n.versions&&n.versions.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{title:"What's New"}),c.a.createElement("div",{className:"block"},c.a.createElement("p",{className:"display-flex justify-content-space-between",style:{opacity:.55}},c.a.createElement("span",null,"Version ",n.versions[n.versions.length-1].version),c.a.createElement("span",null,(a=n.versions[n.versions.length-1].release_date,new Intl.DateTimeFormat("en",{year:"numeric",month:"short",day:"numeric"}).format(new Date(a))))),c.a.createElement("p",null,n.versions[n.versions.length-1].release_notes||""))),c.a.createElement(g.a,{title:"Information"}),c.a.createElement(E.a,{noHairlines:!0,noChevron:!0,className:"safe-areas-inset app-information-list"},c.a.createElement(v.a,{title:"Provider",after:n.developer.name}),c.a.createElement(v.a,{title:"Size",after:"".concat(Math.floor(n.size/1e6)," MB")}),c.a.createElement(v.a,{title:"Compatibility",after:"Works on this iPhone"}),c.a.createElement(v.a,{title:"Languages",after:"English"}),c.a.createElement(v.a,{title:"Age Rating",after:"12+"}),c.a.createElement(v.a,{title:"In-App Purchases",after:"Yes"}),c.a.createElement(v.a,{title:"Copyright",after:"© ".concat(n.developer.name)}),c.a.createElement(v.a,{link:"https://apps.apple.com/developer/id".concat(n.developer.id),external:!0,target:"_blank",title:"Developer Website"},c.a.createElement(d.a,{slot:"after",f7:"compass"})),c.a.createElement(v.a,{link:"https://apps.apple.com/developer/id".concat(n.developer.id),external:!0,target:"_blank",title:"Privacy Policy"},c.a.createElement(d.a,{slot:"after",f7:"hand_raised_fill"}))))}}}]);
//# sourceMappingURL=app-details.7266c9.js.map