(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2,3,4,5,6,7,8,9,10],{773:function(t,e,n){t.exports=n.p+"img/island.3f9e632.jpg"},774:function(t,e,n){var content=n(784);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("f9c183c4",content,!0,{sourceMap:!1})},775:function(t,e,n){var map={"./bronze.jpg":776,"./gold.jpg":777,"./island.jpg":773,"./platinum.jpg":778,"./silver.jpg":779};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=775},776:function(t,e,n){t.exports=n.p+"img/bronze.66877db.jpg"},777:function(t,e,n){t.exports=n.p+"img/gold.c95d6e2.jpg"},778:function(t,e,n){t.exports=n.p+"img/platinum.988a205.jpg"},779:function(t,e,n){t.exports=n.p+"img/silver.8916bd0.jpg"},780:function(t,e,n){"use strict";n.r(e);var r={props:["i"],data:function(){return{}},computed:{wallet:function(){return this.$store.state.blockchain.wallet},isWalletConnected:function(){return!this.$store.getters["blockchain/isWalletConnected"]}},methods:{approve:function(){alert("11111")}}},l=n(41),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("c-card",[r("c-card-img",[r("img",{attrs:{src:n(775)("./"+t.i.img+".jpg"),alt:""}})]),t._v(" "),r("c-card-section",[r("c-card-title",[t._v(t._s(t.i.title))]),t._v(" "),r("c-card-subtitle",[t._v(t._s(t.i.subtitle))])],1),t._v(" "),r("c-card-section",[r("button",{on:{click:t.approve}},[t._v("Approve")]),t._v(" "),r("button",[t._v("Stake")]),t._v(" "),r("button",[t._v("Claim")]),t._v(" "),r("button",[t._v("withdraw all")])])],1)}),[],!1,null,null,null);e.default=component.exports},781:function(t,e,n){"use strict";n.r(e);var r={computed:{wallet:function(){return this.$store.state.blockchain.wallet},isWalletConnected:function(){return!this.$store.getters["blockchain/isWalletConnected"]}}},l=n(41),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("c-card",[r("c-card-img",[r("img",{attrs:{src:n(773),alt:""}})]),t._v(" "),r("c-card-section",[r("c-card-title",[t._v("Private Island")]),t._v(" "),r("c-card-subtitle",[t._v("Private island allows to get a passive income from pets and plants.")])],1),t._v(" "),r("c-card-section",[r("button",[t._v("Approve")]),t._v(" "),r("button",[t._v("Stake")]),t._v(" "),r("button",[t._v("Claim")]),t._v(" "),r("button",[t._v("withdraw all")])])],1)}),[],!1,null,null,null);e.default=component.exports},782:function(t,e,n){t.exports=n.p+"img/cover.a86ea3d.jpg"},783:function(t,e,n){"use strict";n(774)},784:function(t,e,n){var r=n(34)(!1);r.push([t.i,".carousel-item[data-v-72e1d68e]{opacity:.5;display:flex;justify-content:center;align-items:center;height:15vh;width:20%}.carousel-item img[data-v-72e1d68e]{max-width:80%}",""]),t.exports=r},785:function(t,e,n){t.exports=n.p+"img/step-1@2x.0972538.png"},786:function(t,e,n){t.exports=n.p+"img/step-2@2x.a571900.png"},787:function(t,e,n){t.exports=n.p+"img/step-3@2x.aa76a0d.png"},788:function(t,e,n){t.exports=n.p+"img/step-4@2x.4dd0efb.png"},789:function(t,e,n){"use strict";n.r(e);var img=n(782),r={data:function(){return{img:img}}},l=n(41),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("c-section-main",{staticClass:"h100 img-cover d-flex d-flex-y-center",style:"background: url("+t.img+")"},[n("div",{staticClass:"text-white center"},[n("h1",{staticClass:"title-1 mb2"},[t._v("Play & Earn "),n("br"),t._v(" $POG every match")]),t._v(" "),n("div",{staticClass:"subtitle mb2"},[t._v("Get for each win from 20 up to 4,378,400 $POG!")]),t._v(" "),n("a",{staticClass:"btn btn-primary",attrs:{href:"https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xfcb0f2d2f83a32a847d8abb183b724c214cd7dd8",target:"_blank"}},[t._v("Buy $POG")])])])}),[],!1,null,null,null);e.default=component.exports},790:function(t,e,n){"use strict";n.r(e);var r=n(780),l=n(781),c={data:function(){return{items:[{id:5,title:"Bronze NFT BOX",subtitle:"Standard chance of dropping NFT items 1-2 levels.",price:250,img:"bronze"},{id:4,title:"Silver NFT BOX",subtitle:"Standard chance of dropping rare items.",price:500,img:"silver"},{id:2,title:"Gold NFT BOX",subtitle:"Increased chance of dropping rare items.",price:1e3,img:"gold"},{id:3,title:"Platinum NFT BOX",subtitle:"High chance of dropping rare items.",price:1500,img:"platinum"}]}},components:{box:r.default,island:l.default}},o=n(41),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-secondary",staticStyle:{"padding-top":"5rem","padding-bottom":"5rem"}},[n("div",{staticClass:"center"},[n("h2",[t._v("Staking")]),t._v(" "),n("c-carousel",[n("island"),t._v(" "),t._l(t.items,(function(i,t){return n("box",{key:t,attrs:{i:i}})}))],2)],1)])}),[],!1,null,null,null);e.default=component.exports},791:function(t,e,n){"use strict";n.r(e);n(58),n(10),n(24),n(79),n(416);var r={data:function(){return{items:[]}},computed:{isReady:function(){return this.items.length>0},favorite:function(){return this.items.slice(0,1)[0]},articles:function(){return this.items.slice(1,3)}},mounted:function(){this.posts()},methods:{posts:function(){var t=this;fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/polygonum-online").then((function(t){return t.json()})).then((function(data){if(data&&data.items){var e=data.items.filter((function(i){return i.categories.length>0&&i.thumbnail}));console.log(e),t.items=e.map((function(i){return{title:i.title,subtitle:i.content.substr(0,i.content.indexOf("</p>")),url:i.link,img:i.thumbnail,date:new Date(i.pubDate).getTime()}}))}}))}}},l=n(41),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section learn"},[n("div",{staticClass:"learn__anchor anchor",attrs:{id:"learn"}}),t._v(" "),n("div",{staticClass:"learn__center center"},[t._m(0),t._v(" "),t.isReady?n("div",{staticClass:"learn__wrapper"},[n("a",{staticClass:"learn__item",attrs:{href:t.favorite.url,taget:"_blank","aria-hidden":"true",tabindex:"0"}},[n("div",{staticClass:"learn__preview"},[n("img",{attrs:{srcset:t.favorite.img+" 2x",src:t.favorite.img,alt:"Card"}})]),t._v(" "),n("div",{staticClass:"learn__line"},[n("div",{staticClass:"learn__wrap"},[n("div",{staticClass:"learn__subtitle",domProps:{innerHTML:t._s(t.favorite.title)}}),t._v(" "),n("div",{staticClass:"learn__content",domProps:{innerHTML:t._s(t.favorite.subtitle)}})])])]),t._v(" "),t._l(t.articles,(function(i,e){return n("a",{key:e,staticClass:"learn__item",attrs:{href:i.url,taget:"_blank","aria-hidden":"true",tabindex:"-1"}},[n("div",{staticClass:"learn__preview"},[n("img",{attrs:{srcset:i.img+" 2x",src:i.img,alt:"Card"}})]),t._v(" "),n("div",{staticClass:"learn__details"},[n("div",{staticClass:"learn__subtitle"},[t._v(t._s(i.title))]),t._v(" "),n("div",{staticClass:"learn__content",domProps:{innerHTML:t._s(i.subtitle)}}),t._v(" "),n("div",{staticClass:"learn__date"},[t._v(t._s(t._f("$moment")(i.date,"MMM DD, YYYY")))])])])}))],2):t._e()])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"learn__head"},[n("div",{staticClass:"learn__wrap"},[n("h2",[t._v("Blog")])]),t._v(" "),n("a",{staticClass:"button-stroke learn__button",attrs:{href:"https://medium.com/polygonum-online"}},[t._v("View more")])])}],!1,null,null,null);e.default=component.exports},792:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{items:[["dao"],["icetea"],["morningstar"],["marcius"],["idoresearch"],["metrix"],["raptor"],["cmc"],["gamefi"],["redkite"]]}}},l=(n(783),n(41)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"border-bottom"},[r("div",{staticClass:"center"},[r("c-carousel",{staticClass:"carousel"},t._l(t.items,(function(i,t){return r("div",{key:t,staticClass:"carousel-item"},[r("img",{attrs:{src:n(417)("./"+i[0]+".svg")}})])})),0)],1)])}),[],!1,null,"72e1d68e",null);e.default=component.exports},793:function(t,e,n){"use strict";n.r(e);n(785),n(786),n(787),n(788);var r={data:function(){return{items:[{icon:"file_download",title:"Download",subtitle:"Get access to the game or ask friend for an invitation."},{icon:"group",title:"Create a team",subtitle:"Gather your friends in a team from 2 to 40 members."},{icon:"emoji_events",title:"Tournaments",subtitle:"Join to competitions, where skills are matter."},{icon:"paid",title:"Earn money",subtitle:"Get for each win from 20 up to 4,378,400 $POG!"}]}}},l=n(41),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section steps"},[n("div",{staticClass:"steps__center center"},[t._m(0),t._v(" "),n("div",{staticClass:"steps__list"},t._l(t.items,(function(i,e){return n("div",{key:e,staticClass:"steps__item"},[n("div",{staticClass:"steps__preview"},[n("c-avatar",{staticClass:"avatar-lg avatar-square"},[n("span",{staticClass:"material-icons"},[t._v(t._s(i.icon))])])],1),t._v(" "),n("div",{staticClass:"steps__number"},[t._v("Step "+t._s(e+1))]),t._v(" "),n("div",{staticClass:"steps__subtitle"},[t._v(t._s(i.title))]),t._v(" "),n("div",{staticClass:"steps__content"},[t._v(t._s(i.subtitle))])])})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"steps__head"},[n("h2",{staticClass:"title-2"},[t._v("How it works")])])}],!1,null,null,null);e.default=component.exports},794:function(t,e,n){"use strict";n.r(e);var r=n(41),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("about")])}),[],!1,null,null,null);e.default=component.exports},795:function(t,e,n){"use strict";n.r(e);var r=n(789),l=n(794),c=n(790),o=n(791),d=n(792),_=n(793);e.default={landingMain:r.default,landingAbout:l.default,landingStaking:c.default,landingBlog:o.default,landingPartners:d.default,landingAction:_.default}},804:function(t,e,n){"use strict";n.r(e);var r={components:n(795).default},l=n(41),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports}}]);