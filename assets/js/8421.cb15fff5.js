"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[8421],{84764:(e,t,a)=>{a.d(t,{C:()=>s});var i=a(65733),r=a(72729),o=a(22906);const s=({name:e,time:t,now:a})=>(0,i.h)("div",{class:"head"},(0,i.h)("div",{class:"name"},(0,o.s)((0,o.f)(e),20)),(0,i.h)("div",{class:"time",title:(0,r.f)(t)},(0,r.e)(t,a)))},2515:(e,t,a)=>{a.d(t,{T:()=>o});var i=a(65733);function r(e){const t=/\*([^*]*)\*/g,a=/_([^_]*)_/g,i=/~([^~]*)~/g,r=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;let o=t.exec(e);for(;o;)e=e.replace(o[0],`<b>${o[1]}</b>`),o=t.exec(e);let s=a.exec(e);for(;s;)e=e.replace(s[0],`<i>${s[1]}</i>`),s=a.exec(e);let n=i.exec(e);for(;n;)e=e.replace(n[0],`<s>${n[1]}</s>`),n=i.exec(e);return e=(e=(e=e.split(" ").map((e=>{if(r.test(e)){const t=r.exec(e);return e.replace(t[0],`<a class="link" href="${t[0]}" target="_blank" rel="noopener noreferrer">${t[0]}</a>`)}return e})).join(" ")).split("\n").map((e=>e.split(" ").map(((e,t)=>">"!==e||0!==t&&">"!==e[t-1]?e:'<span class="block-quote"></span>')).join(" "))).join("\n")).split("\n").map((e=>`<p>${e}</p>`)).join("\n")}const o=({message:e})=>(0,i.h)("p",{innerHTML:r(e)})},72729:(e,t,a)=>{a.d(t,{d:()=>i,e:()=>r,f:()=>o});const i=(e,t)=>{const a=t.getTime()-e.getTime();return Math.round(Math.abs(a/1e3/60))},r=(e,t)=>{const a=i(e,t);if(a<2)return"just now";if(a<60)return`${a}m ago`;const r=Math.round(a/60);if(a<90)return`about ${r}h ago`;if(r<24)return`${r}h ago`;const o=Math.round(r/24);if(o<7)return`${o}d ago`;return`${Math.round(o/7)}w ago`},o=e=>e.toDateString()+" "+e.toLocaleTimeString()},48421:(e,t,a)=>{a.r(t),a.d(t,{dyte_chat_message:()=>g,dyte_file_message:()=>b,dyte_image_message:()=>y,dyte_paginated_list:()=>L,dyte_text_message:()=>$});var i=a(65733),r=(a(21237),a(24555),a(96633)),o=a(20336),s=(a(60804),a(84764)),n=a(22906),d=a(96396),c=a(46503),l=a(82321),h=a(49797),p=a(2515);const g=class{constructor(e){(0,i.r)(this,e),this.edit=(0,i.c)(this,"edit",7),this.reply=(0,i.c)(this,"reply",7),this.delete=(0,i.c)(this,"delete",7),this.renderMessage=()=>{switch(this.message.type){case"text":return(0,i.h)("div",{"is-continued":this.isContinued,key:this.message.id},this.isUnread&&(0,i.h)("div",{class:"new-chat-marker",part:"new-chat-marker"},this.t("chat.new")),(0,i.h)("dyte-text-message",{message:this.message,now:this.now,isContinued:this.isContinued,"data-timestamp":this.message.time.getTime(),iconPack:this.iconPack,t:this.t,showBubble:!0}));case"image":return(0,i.h)("div",{"is-continued":this.isContinued,key:this.message.id},this.isUnread&&(0,i.h)("div",{class:"new-chat-marker",part:"new-chat-marker"},this.t("chat.new")),(0,i.h)("dyte-image-message",{message:this.message,now:this.now,isContinued:this.isContinued,iconPack:this.iconPack,"data-timestamp":this.message.time.getTime(),t:this.t,showBubble:!0}));case"file":return(0,i.h)("div",{"is-continued":this.isContinued,key:this.message.id},this.isUnread&&(0,i.h)("div",{class:"new-chat-marker",part:"new-chat-marker"},this.t("chat.new")),(0,i.h)("dyte-file-message",{message:this.message,now:this.now,isContinued:this.isContinued,iconPack:this.iconPack,t:this.t,"data-timestamp":this.message.time.getTime(),showBubble:!0}))}},this.onReply=()=>{this.reply.emit(this.message)},this.onDelete=()=>{this.delete.emit(this.message)},this.onEdit=async()=>{this.edit.emit(this.message)},this.isTouchDevice=()=>"ontouchstart"in window||navigator.maxTouchPoints>0,this.message=void 0,this.isContinued=void 0,this.isUnread=void 0,this.size=void 0,this.iconPack=r.d,this.t=(0,o.u)(),this.isSelf=!1,this.canEdit=!1,this.canDelete=!1,this.disableControls=!1,this.alignRight=!1,this.senderDisplayPicture=void 0,this.hideAvatar=!1,this.now=new Date}renderControls(){if(!this.disableControls)return(0,i.h)("dyte-menu",{placement:this.alignRight?"bottom-end":"bottom-start"},(0,i.h)("button",{slot:"trigger",class:"actions"},(0,i.h)("dyte-icon",{icon:this.iconPack.chevron_down})),(0,i.h)("dyte-menu-list",null,(0,i.h)("dyte-menu-item",{onClick:this.onReply},(0,i.h)("dyte-icon",{icon:this.iconPack.back,slot:"start"}),this.t("chat.reply")),this.canEdit&&(0,i.h)("dyte-menu-item",{onClick:this.onEdit},(0,i.h)("dyte-icon",{icon:this.iconPack.edit,slot:"start"}),this.t("chat.edit_msg")),this.canDelete&&(0,i.h)("dyte-menu-item",{onClick:this.onDelete},(0,i.h)("dyte-icon",{icon:this.iconPack.delete,slot:"start"}),this.t("chat.delete_msg"))))}renderAvatar(){if(!this.hideAvatar)return this.isContinued?(0,i.h)("div",{class:"avatar"}):(0,i.h)("div",{class:"avatar"},(0,i.h)("dyte-avatar",{size:"sm",participant:{name:this.message.displayName,picture:this.senderDisplayPicture}}))}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{class:{"message-wrapper":!0,"align-right":this.alignRight}},this.renderAvatar(),(0,i.h)("div",{class:{message:!0,"show-on-hover":!this.isTouchDevice()},"is-continued":this.isContinued},this.renderMessage(),this.renderControls())))}get $el(){return(0,i.g)(this)}};g.style=".message-wrapper{display:flex;gap:var(--dyte-space-2, 8px);margin-left:var(--dyte-space-4, 16px);margin-right:var(--dyte-space-4, 16px)}.message-wrapper.align-right{flex-direction:row-reverse}.avatar{display:none}.file-picker{display:none}.message{position:relative;display:flex}.show-on-hover dyte-menu{visibility:hidden}.show-on-hover:hover dyte-menu{visibility:visible}.align-right .message{justify-content:flex-end;margin-left:auto}.align-right .message .head{margin-right:var(--dyte-space-1, 4px);margin-left:var(--dyte-space-0, 0px);flex-direction:row-reverse;gap:var(--dyte-space-4, 16px)}.align-right .message dyte-text-message .bubble,.align-right .message dyte-image-message .bubble,.align-right .message dyte-file-message .bubble{padding-right:var(--dyte-space-5, 20px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.align-right .message .actions dyte-icon{color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.align-right dyte-menu{left:auto;right:var(--dyte-space-0, 0px)}.head{margin-bottom:var(--dyte-space-2, 8px);margin-left:var(--dyte-space-1, 4px);display:flex;align-items:center;gap:var(--dyte-space-2, 8px)}.head .name{font-size:14px;font-weight:600}.head .time{font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}dyte-menu{position:absolute;left:var(--dyte-space-0, 0px);top:var(--dyte-space-6, 24px);border-radius:var(--dyte-border-radius-lg, 12px)}dyte-menu dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);cursor:pointer}[is-continued] dyte-menu{top:var(--dyte-space-2, 8px)}.actions{display:flex;align-items:center;justify-content:center;padding:var(--dyte-space-0\\.5, 2px);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent}.actions dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}.body{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);overflow-wrap:break-word;font-size:14px;line-height:1.375}.body .emoji{font-size:24px}.body.bubble{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-1, 4px);max-width:var(--dyte-space-96, 384px);padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);padding-left:var(--dyte-space-5, 20px);padding-right:var(--dyte-space-5, 20px);overflow-wrap:break-word;font-size:14px;line-height:1.375;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.body.bubble p{margin:var(--dyte-space-0, 0px)}p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px)}dyte-text-message,dyte-image-message,dyte-file-message{display:block;font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));box-sizing:border-box}*[is-continued]{margin-top:var(--dyte-space-0, 0px)}.image{position:relative;height:var(--dyte-space-40, 160px);max-width:var(--dyte-space-64, 256px);cursor:pointer}.image img{display:none;height:100%;width:100%;border-radius:var(--dyte-border-radius-sm, 4px);-o-object-fit:cover;object-fit:cover}.image .image-spinner{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.image .image-spinner dyte-spinner{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}.image .image-errored{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);background-color:rgba(var(--dyte-colors-danger, 255 45 45) / 0.1);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.image .actions{display:none;height:var(--dyte-space-8, 32px);align-items:center;position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.image .actions .action{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:var(--dyte-border-radius-none, 0);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.image .actions .action:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.image.loaded img{display:block}.image.loaded .image-spinner{display:none}.image:hover .actions,.image:focus .actions{display:flex}.file{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1\\.5, 6px);padding-bottom:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.file .file-data{flex:1 1 0%}.file .file-data .name{word-break:break-all;color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.file .file-data .file-data-split{margin-top:var(--dyte-space-0\\.5, 2px);display:flex;align-items:center;font-size:12px}.file .file-data .file-data-split .ext{margin-right:var(--dyte-space-2, 8px);text-transform:uppercase;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.file .file-data .file-data-split .divider{height:var(--dyte-space-4, 16px);width:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.file .file-data .file-data-split .size{margin-left:var(--dyte-space-2, 8px)}a{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none}a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.new-chat-marker{display:flex;width:100%;align-items:center;gap:var(--dyte-space-2, 8px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.new-chat-marker::before{content:'';height:1px;flex:1 1 0%;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5)}.show-new-messages-ctr{pointer-events:none;display:flex;justify-content:flex-end;padding:var(--dyte-space-3, 12px);z-index:0;margin-top:calc(var(--dyte-space-14, 56px) * -1)}.show-new-messages{pointer-events:auto;--tw-translate-y:calc(var(--dyte-space-6, 24px) * -1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.show-new-messages.active{--tw-translate-y:var(--dyte-space-0, 0px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.block-quote{--tw-border-spacing-x:1px;--tw-border-spacing-y:1px;border-spacing:var(--tw-border-spacing-x) var(--tw-border-spacing-y);border-top-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-none, 0);border-left-width:var(--dyte-border-width-md, 2px);border-right-width:var(--dyte-border-width-none, 0);border-style:solid;border-left-color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));padding:var(--dyte-space-0\\.5, 2px);padding-left:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px) !important;border-radius:var(--dyte-border-radius-sm, 4px);border-top-left-radius:var(--dyte-border-radius-none, 0);border-bottom-left-radius:var(--dyte-border-radius-none, 0)}.link{color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.align-right .block-quote{border-color:rgb(var(--dyte-colors-text-on-brand-600, var(--dyte-colors-text-600, 255 255 255 / 0.52)));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-bg-opacity))}.align-right .link{color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.align-right .image .actions dyte-icon{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}@media (orientation: landscape) and (min-width: 400px){.avatar{display:flex;width:var(--dyte-space-10, 40px)}.avatar dyte-avatar{height:var(--dyte-space-9, 36px);width:var(--dyte-space-9, 36px)}.message{width:75%}}";const b=class{constructor(e){(0,i.r)(this,e),this.message=void 0,this.now=new Date,this.isContinued=!1,this.iconPack=r.d,this.t=(0,o.u)(),this.showBubble=!1}render(){const e=(0,n.a)(this.message.link);return(0,i.h)(i.H,null,!this.isContinued&&(0,i.h)(s.C,{name:this.message.displayName,time:this.message.time,now:this.now}),(0,i.h)("div",{class:{body:!0,bubble:this.showBubble},part:"body"},(0,i.h)("div",{class:"file"},(0,i.h)("div",{class:"file-data"},(0,i.h)("div",{class:"name"},this.message.name),(0,i.h)("div",{class:"file-data-split"},(0,i.h)("div",{class:"ext"},(0,d.g)(this.message.name)),(0,i.h)("span",{class:"divider"}),(0,i.h)("div",{class:"size"},(0,d.a)(this.message.size)))),(0,i.h)("dyte-button",{variant:"secondary",kind:"icon",iconPack:this.iconPack,t:this.t,onClick:()=>(0,d.d)(e,{name:this.message.name,fallbackName:"file"}),part:"button"},(0,i.h)("dyte-icon",{icon:this.iconPack.download,iconPack:this.iconPack,t:this.t})))))}},y=class{constructor(e){(0,i.r)(this,e),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.message=void 0,this.now=new Date,this.isContinued=!1,this.iconPack=r.d,this.t=(0,o.u)(),this.showBubble=!1,this.status="loading"}render(){return(0,i.h)(i.H,null,!this.isContinued&&(0,i.h)(s.C,{name:this.message.displayName,time:this.message.time,now:this.now}),(0,i.h)("div",{class:{body:!0,bubble:this.showBubble},part:"body"},(0,i.h)("div",{class:{image:!0,loaded:"loaded"===this.status}},(0,i.h)("img",{src:(0,n.a)(this.message.link),onLoad:()=>{this.status="loaded"},onError:()=>{this.status="errored"},onClick:()=>{"loaded"===this.status&&(this.stateUpdate.emit({image:this.message}),c.s.image=this.message)}}),"loading"===this.status&&(0,i.h)("div",{class:"image-spinner",title:this.t("chat.img.loading"),"aria-label":this.t("chat.img.loading")},(0,i.h)("dyte-spinner",{iconPack:this.iconPack,t:this.t})),"errored"===this.status&&(0,i.h)("div",{class:"image-errored",title:this.t("chat.error.img_not_found"),"aria-label":this.t("chat.error.img_not_found")},(0,i.h)("dyte-icon",{icon:this.iconPack.image_off,iconPack:this.iconPack,t:this.t})),"loaded"===this.status&&(0,i.h)("div",{class:"actions"},(0,i.h)("dyte-button",{class:"action",variant:"secondary",kind:"icon",onClick:()=>{this.stateUpdate.emit({image:this.message}),c.s.image=this.message},iconPack:this.iconPack,t:this.t},(0,i.h)("dyte-icon",{icon:this.iconPack.full_screen_maximize})),(0,i.h)("dyte-button",{class:"action",variant:"secondary",kind:"icon",onClick:()=>(0,d.d)(this.message.link,{fallbackName:"image"}),iconPack:this.iconPack,t:this.t},(0,i.h)("dyte-icon",{icon:this.iconPack.download,iconPack:this.iconPack,t:this.t}))))))}};y.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.image-spinner{cursor:wait}.image-errored{cursor:not-allowed}";var m="[object Symbol]";var v=/\s/;var w=/^\s+/;function u(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&v.test(e.charAt(t)););return t}(e)+1).replace(w,""):e}var x=NaN,f=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,T=/^0o[0-7]+$/i,R=parseInt;function P(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||(0,h.a)(e)&&(0,h.b)(e)==m}(e))return x;if((0,h.i)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=(0,h.i)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=u(e);var a=k.test(e);return a||T.test(e)?R(e.slice(2),a?2:8):f.test(e)?x:+e}var N=function(){return h.r.Date.now()},C=Math.max,z=Math.min;function _(e,t,a){var i,r,o,s,n,d,c=0,l=!1,p=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var a=i,o=r;return i=r=void 0,c=t,s=e.apply(o,a)}function y(e){var a=e-d;return void 0===d||a>=t||a<0||p&&e-c>=o}function m(){var e=N();if(y(e))return v(e);n=setTimeout(m,function(e){var a=t-(e-d);return p?z(a,o-(e-c)):a}(e))}function v(e){return n=void 0,g&&i?b(e):(i=r=void 0,s)}function w(){var e=N(),a=y(e);if(i=arguments,r=this,d=e,a){if(void 0===n)return function(e){return c=e,n=setTimeout(m,t),l?b(e):s}(d);if(p)return clearTimeout(n),n=setTimeout(m,t),b(d)}return void 0===n&&(n=setTimeout(m,t)),s}return t=P(t)||0,(0,h.i)(a)&&(l=!!a.leading,o=(p="maxWait"in a)?C(P(a.maxWait)||0,t):o,g="trailing"in a?!!a.trailing:g),w.cancel=function(){void 0!==n&&clearTimeout(n),c=0,i=d=r=n=void 0},w.flush=function(){return void 0===n?s:v(N())},w}const L=class{constructor(e){(0,i.r)(this,e),this.pagesToRender=[[]],this.currentTime=()=>(new Date).getTime(),this.observe=e=>{e&&this.intersectionObserver.observe(e)},this.pageSize=void 0,this.pagesAllowed=void 0,this.fetchData=void 0,this.createNodes=void 0,this.selectedItemId=void 0,this.autoScroll=!0,this.iconPack=r.d,this.t=(0,o.u)(),this.emptyListLabel=null,this.isLoading=!1,this.rerenderBoolean=!1,this.shouldRenderNewNodes=!0,this.hasNewNodesToRender=!1,this.showEmptyListLabel=!1}async onNewNode(e){this.shouldRenderNewNodes?(this.addNodeToRender(e,!1),this.rerender()):this.hasNewNodesToRender=!0}async onNodeDelete(e){const t=this.pagesToRender.flat().length;this.pagesToRender=this.pagesToRender.map((t=>t.filter((t=>t.id!==e)))),t!==this.pagesToRender.flat().length&&this.rerender()}async onNodeUpdate(e,t){let a=!1;this.pagesToRender=this.pagesToRender.map((i=>i.map((i=>i.id===e?(a=!0,t):i)))),a&&this.rerender()}onItemChanged(e,t){e!==t&&(this.pagesToRender=[[]],this.loadFirstPage().then((()=>this.rerender())))}connectedCallback(){this.rerender=_(this.rerender.bind(this),50,{maxWait:200}),this.loadFirstPage(),this.intersectionObserver=new IntersectionObserver((e=>{(0,i.w)((()=>{for(const t of e)"bottom-scroll"===t.target.id&&(t.isIntersecting?this.loadBottom():this.shouldRenderNewNodes=!1),"top-scroll"===t.target.id&&t.isIntersecting&&this.loadTop()}))}))}disconnectedCallback(){this.intersectionObserver.disconnect()}componentDidLoad(){this.observe(this.$topRef),this.observe(this.$bottomRef)}componentDidRender(){this.shouldRenderNewNodes&&this.autoScroll&&(0,l.s)(this.$paginatedList)}loadFirstPage(){return this.loadPage(this.currentTime(),this.pageSize,!0,(e=>{0===e.length&&(this.showEmptyListLabel=!0)}))}loadTop(){if(0===this.pagesToRender.length)return;if(1===this.pagesToRender.length&&this.pagesToRender[0].length<this.pageSize)return;const e=this.pagesToRender[0][0].timeMs;this.loadPage(e-1,this.pageSize,!0,(()=>{}))}loadBottom(){if(0===this.pagesToRender.length)return void(this.shouldRenderNewNodes=!0);if(1===this.pagesToRender.length&&this.pagesToRender[0].length<this.pageSize)return void(this.shouldRenderNewNodes=!0);const e=this.pagesToRender.at(-1).at(-1).timeMs;this.loadPage(e+1,this.pageSize,!1,(()=>(0,l.s)(this.$paginatedList)))}addNodeToRender(e,t){if(t){const t=this.pagesToRender[0];if(t&&(null==t?void 0:t.length)<this.pageSize)t.unshift(e);else{const t=[e];this.pagesToRender.unshift(t),this.removeLastPageIfNeeded(!1)}}else{const[t]=this.pagesToRender.slice(-1);if(t&&(null==t?void 0:t.length)<this.pageSize)t.push(e);else{const t=[e];this.pagesToRender.push(t),this.removeLastPageIfNeeded(!0)}}}async loadPage(e,t,a,i=(()=>{})){this.isLoading=!0;const r=await this.fetchData(e,t,a);if(this.isLoading=!1,!(null==r?void 0:r.length))return a||(this.hasNewNodesToRender=!1,this.shouldRenderNewNodes=!0),void i([]);r.forEach((e=>this.addNodeToRender(e,a))),this.rerender(),i(r)}rerender(){this.rerenderBoolean=!this.rerenderBoolean}removeLastPageIfNeeded(e){this.pagesToRender.length>this.pagesAllowed&&(e?this.pagesToRender.shift():this.pagesToRender.pop())}onDownArrowClicked(){this.loadBottom()}render(){var e;return(0,i.h)(i.H,null,(0,i.h)("div",{class:"scrollbar container",part:"container",ref:e=>this.$paginatedList=e},(0,i.h)("div",{class:"show-new-messages-ctr"},(0,i.h)("dyte-button",{class:{"show-new-messages":!0,active:!this.shouldRenderNewNodes},kind:"icon",part:"show-new-messages",onClick:()=>this.onDownArrowClicked(),iconPack:this.iconPack,t:this.t},(0,i.h)("dyte-icon",{icon:this.iconPack.chevron_down,iconPack:this.iconPack,t:this.t}))),(0,i.h)("div",{class:"smallest-dom-element",id:"bottom-scroll",ref:e=>this.$bottomRef=e}),this.isLoading&&0===this.pagesToRender.flat().length&&(0,i.h)("dyte-spinner",{size:"lg"}),0===this.pagesToRender.flat().length&&this.showEmptyListLabel?(0,i.h)("div",{class:"empty-list"},null!==(e=this.emptyListLabel)&&void 0!==e?e:this.t("list.empty")):(0,i.h)("div",{class:"page-wrapper"},this.pagesToRender.map((e=>this.createNodes(e)))),(0,i.h)("div",{class:"smallest-dom-element",id:"top-scroll",ref:e=>this.$topRef=e})))}static get watchers(){return{selectedItemId:["onItemChanged"]}}};L.style=".scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{position:relative;display:flex;flex-direction:column;flex:1}.container{box-sizing:border-box;display:flex;flex-direction:column-reverse;padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);flex:1 0 0px;overflow-y:scroll;}.file-picker{display:none}.chat *:first-child{margin-top:var(--dyte-space-0, 0px)}.chat .head{display:flex;align-items:center}.chat .head .name{margin-right:var(--dyte-space-4, 16px);font-size:12px;font-weight:700}.chat .head .time{font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.chat .body{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);overflow-wrap:break-word;font-size:14px;line-height:1.375}.chat .body .emoji{font-size:24px}p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px)}dyte-text-message,dyte-image-message,dyte-file-message{margin-top:var(--dyte-space-4, 16px);display:block;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));box-sizing:border-box}*[is-continued]{margin-top:var(--dyte-space-3, 12px)}dyte-text-message[is-continued]{margin-top:var(--dyte-space-2, 8px)}.chat .image{position:relative;height:var(--dyte-space-40, 160px);max-width:var(--dyte-space-64, 256px);cursor:pointer}.chat .image img{display:none;height:100%;width:100%;border-radius:var(--dyte-border-radius-sm, 4px);-o-object-fit:cover;object-fit:cover}.chat .image .image-spinner{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.chat .image .image-spinner dyte-spinner{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}.chat .image .image-errored{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);background-color:rgba(var(--dyte-colors-danger, 255 45 45) / 0.1);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.chat .image .actions{display:none;height:var(--dyte-space-8, 32px);align-items:center;position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.chat .image .actions .action{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:var(--dyte-border-radius-none, 0);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.chat .image .actions .action:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.image.loaded img{display:block}.image.loaded .image-spinner{display:none}.image:hover .actions,.image:focus .actions{display:flex}.chat .file{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1\\.5, 6px);padding-bottom:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.chat .file .file-data{flex:1 1 0%}.chat .file .file-data .name{word-break:break-all;color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.chat .file .file-data .file-data-split{margin-top:var(--dyte-space-0\\.5, 2px);display:flex;align-items:center;font-size:12px}.chat .file .file-data .file-data-split .ext{margin-right:var(--dyte-space-2, 8px);text-transform:uppercase;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.chat .file .file-data .file-data-split .divider{height:var(--dyte-space-4, 16px);width:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.chat .file .file-data .file-data-split .size{margin-left:var(--dyte-space-2, 8px)}.smallest-dom-element{width:1px}#top-scroll{transform:translateY(20vh)}#bottom-scroll{transform:translateY(-20vh)}a{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none}a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.show-new-messages-ctr{pointer-events:none;position:absolute;bottom:var(--dyte-space-2, 8px);right:var(--dyte-space-4, 16px);z-index:0;margin-top:calc(var(--dyte-space-14, 56px) * -1)}.show-new-messages{pointer-events:auto;--tw-translate-y:calc(var(--dyte-space-6, 24px) * -1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.show-new-messages.active{--tw-translate-y:var(--dyte-space-0, 0px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}dyte-spinner,.empty-list{margin:auto}";const $=class{constructor(e){(0,i.r)(this,e),this.message=void 0,this.now=new Date,this.isContinued=!1,this.iconPack=r.d,this.t=(0,o.u)(),this.showBubble=!1}render(){return(0,i.h)(i.H,null,!this.isContinued&&(0,i.h)(s.C,{name:this.message.displayName,time:this.message.time,now:this.now}),(0,i.h)("div",{class:{body:!0,bubble:this.showBubble},part:"body"},(0,i.h)("div",{class:{text:!0,emoji:(0,n.h)(this.message.message)}},(0,i.h)(p.T,{message:this.message.message}))))}}},96396:(e,t,a)=>{a.d(t,{a:()=>o,d:()=>s,g:()=>r});var i=a(22906);const r=e=>e.split(/[#?]/)[0].split(".").pop().trim(),o=e=>{if(!e)return"0 B";const t=Math.floor(Math.log(e)/Math.log(1024));return`${(e/1024**t).toFixed(2)} ${["B","kB","MB","GB","TB"][t]}`},s=async(e,t)=>{e=(0,i.a)(e);let a=null==t?void 0:t.name;const r=await fetch(e);if(!r.ok)return void window.open(e,"_blank");const o=URL.createObjectURL(await r.blob()),s=document.createElement("a");s.href=o,s.download=null!=a?a:((e,t="file")=>{try{const a=new URL(e).pathname.split("/").pop();return"/"!==a?a:t}catch(a){return t}})(e,null==t?void 0:t.fallbackName),s.click()}},82321:(e,t,a)=>{a.d(t,{s:()=>i});const i=(e,t=!0)=>{null!=e&&e.scrollTo({top:e.scrollHeight,behavior:t?"smooth":"auto"})}}}]);