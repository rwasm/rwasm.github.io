"use strict";(self.webpackChunkrwasm_github_io=self.webpackChunkrwasm_github_io||[]).push([[551],{3733:function(e,a,n){var t=n(7294),r=n(9615);a.Z=function(e){var a=e.author;return t.createElement("div",{className:"author-info"},t.createElement("span",{className:"author",title:a.url,onClick:function(){return(0,r.go)(a.url)}},t.createElement("img",{src:a.avatarUrl,alt:a.login}),t.createElement("span",null,a.login)),e.date&&t.createElement("i",{className:"date"},(0,r.G$)(e.date)),e.extra)}},9294:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7294),r=n(1597),s={zap:"⚡",gear:"⚙️",beer:"🍺",star:"⭐",fire:"🔥",tada:"🎉",ninja:"🥷",mega:"📣",crab:"🦀",rocket:"🚀",warning:"⚠️",unicorn:"🦄",lobster:"🦞",cyclone:"🌀",rainbow:"🌈",computer:"💻",nail_care:"💅",sunglasses:"😎",see_no_evil:"🙈",crystal_ball:"🔮",monocle_face:"🧐",speech_balloon:"💬",exploding_head:"🤯",hammer_and_wrench:"🛠️",globe_with_meridians:"🌐",page_facing_up:"📄",thinking:"🤔",sparkling_heart:"💖",boom:"💥",collision:"💥",anger:"💢",book:"📖",open_book:"📖",books:"📚",game_die:"🎲"},l=n(9615),o=function(e){var a=e.data,n=e.go;return a&&null!=a&&a.name?t.createElement(r.Link,{className:"gg-category",to:n||"/category/"+(0,l.FL)(a.name,!0),target:n?"_blank":"_self"},function(e){return s[e.slice(1,-1)]||""}(a.emoji)," ",a.name):null}},7478:function(e,a,n){var t=n(7294),r=n(5505),s=n(9615),l=n(1745);a.Z=function(e){var a,n=(0,l.Z)();return a="issues"===n.type?"https://github.com/"+n.issues_owner+"/"+n.issues_repo+"/issues/"+e.number:"https://github.com/"+n.owner+"/"+n.repo+"/discussions/"+e.number,t.createElement("a",{className:(0,r.Z)("number issues-num",e.className),href:a,target:"_blank"},e.len?(0,s.K0)(e.number,e.len):"#"+e.number)}},3873:function(e,a,n){n.r(a),n.d(a,{default:function(){return u}});var t=n(7294),r=n(1597),s=n(8813),l=n(3733),o=n(9294),i=n(7478);function u(e){return t.createElement(s.Z,{className:"home-page"},t.createElement("div",{className:"markdown-body issues-list"},t.createElement("div",null,e.data.allDiscussionsJson.nodes.map((function(e){var a=e.node;if(!a)return null;var n=null==a?void 0:a.category;return t.createElement("div",{className:"item",key:a.number},t.createElement(l.Z,{author:a.author,date:a.updatedAt,extra:t.createElement(i.Z,{number:a.number})}),t.createElement("div",{className:"post-info"},t.createElement(o.Z,{data:n}),t.createElement(r.Link,{className:"title",to:"/issues/"+a.number},a.title)))})))))}}}]);
//# sourceMappingURL=component---src-templates-archives-tsx-1ff9335044c4a35495f4.js.map