"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[2486,9660],{49660:(e,t,r)=>{r.r(t),r.d(t,{dyte_channel_creator:()=>o});var a=r(65733),s=(r(21237),r(24555),r(96633)),i=r(20336),n=(r(60804),r(46503));const o=class{constructor(e){(0,a.r)(this,e),this.stateUpdate=(0,a.c)(this,"dyteStateUpdate",7),this.switchChannel=(0,a.c)(this,"switchChannel",7),this.allMembers=new Map,this.inputTextRef=null,this.searchInputTextRef=null,this.focusOnSearch=(e=!1)=>{this.focusedMemberIndex=-1,(0,a.w)((()=>{var t,r;null===(t=this.searchInputTextRef)||void 0===t||t.focus(),e&&(null===(r=this.searchInputTextRef)||void 0===r||r.select())}))},this.onClickHandler=async()=>{if(0!==this.channelName.length){if(1===this.step){const e=this.meeting.participants.all,t=this.meeting.self.userId;return e.filter((e=>e.id!==t)).forEach((e=>this.allMembers.set(e.id,e))),this.step=2,void this.focusOnSearch()}await this.createChannel()}},this.createChannel=async()=>{const e=Array.from(this.selectedMemberIds),t=await this.meeting.chat.createChannel(this.channelName,e,{displayPictureUrl:"",visibility:"public",isDirectMessage:!1});this.switchChannel.emit(t.id),this.stateUpdate.emit({activeChannelCreator:!1}),n.s.activeChannelCreator=!1},this.onMemberAdd=e=>{this.showAllMembersList=!1,this.selectedMemberIds.add(e),this.searchQuery="",this.focusOnSearch()},this.keyDownHandler=(e,t)=>{if("ArrowDown"===e.key)this.focusedMemberIndex=Math.min(this.focusedMemberIndex+1,t.length-1);else if("ArrowUp"===e.key){if(-1===this.focusedMemberIndex)return;if(0===this.focusedMemberIndex)return void this.focusOnSearch(!0);this.focusedMemberIndex=Math.max(this.focusedMemberIndex-1,0)}else if("Enter"===e.key)this.onMemberAdd(t[this.focusedMemberIndex].id);else if("Backspace"===e.key){if(0!==this.searchQuery.length)return;if(0===this.selectedMemberIds.size)return;const e=Array.from(this.selectedMemberIds.values()).at(-1);this.selectedMemberIds.delete(e),(0,a.f)(this.$el)}},this.renderMemberSelector=()=>{const e=Array.from(this.allMembers.values()).filter((e=>!this.selectedMemberIds.has(e.id)&&e.name.toLowerCase().includes(this.searchQuery.toLowerCase()))),t=Array.from(this.selectedMemberIds.values()).map((e=>this.allMembers.get(e))),r=this.selectedMemberIds.size===this.allMembers.size;return(0,a.h)("div",{class:"input-container"},(0,a.h)("ul",{class:"members",onClick:()=>{var e;null===(e=this.searchInputTextRef)||void 0===e||e.focus()}},t.map((e=>(0,a.h)("li",{class:"pill"},(0,a.h)("dyte-avatar",{participant:{name:e.name,picture:e.picture},size:"sm"}),(0,a.h)("span",null,e.name),(0,a.h)("dyte-icon",{icon:this.iconPack.dismiss,iconPack:this.iconPack,t:this.t,onClick:()=>{this.selectedMemberIds.delete(e.id),(0,a.f)(this.$el),this.focusOnSearch()}})))),!r&&(0,a.h)("input",{type:"text",ref:e=>this.searchInputTextRef=e,value:this.searchQuery,placeholder:0===this.selectedMemberIds.size?this.t("chat.member_name"):"",class:{"wide-input":0===this.selectedMemberIds.size},onInput:e=>{this.searchQuery=e.target.value.trim()},onClick:()=>{this.showAllMembersList=!this.showAllMembersList},onKeyDown:t=>this.keyDownHandler(t,e)})),(0!==this.searchQuery.length||this.showAllMembersList)&&(0,a.h)("ul",{class:"search-results"},e.map(((e,t)=>(0,a.h)("li",{class:{member:!0,selected:t===this.focusedMemberIndex},onClick:()=>this.onMemberAdd(e.id),ref:e=>{t===this.focusedMemberIndex&&(0,a.w)((()=>{e&&e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}))}},(0,a.h)("dyte-avatar",{participant:{name:e.name,picture:e.picture},size:"sm"}),(0,a.h)("span",null,e.name)))),0===e.length&&(0,a.h)("li",{class:"member"},(0,a.h)("span",null,this.t("chat.error.empty_results")))))},this.meeting=void 0,this.t=(0,i.u)(),this.iconPack=s.d,this.channelName="",this.searchQuery="",this.step=1,this.loading=!1,this.selectedMemberIds=new Set,this.focusedMemberIndex=-1,this.showAllMembersList=!1}componentDidLoad(){var e;null===(e=this.inputTextRef)||void 0===e||e.focus()}render(){return(0,a.h)(a.H,null,(0,a.h)("header",null,1===this.step?this.t("chat.new_channel"):this.t("chat.add_members")),1===this.step&&(0,a.h)("input",{class:"channel-name-input",type:"text",placeholder:this.t("chat.channel_name"),ref:e=>this.inputTextRef=e,onInput:e=>{this.channelName=e.target.value.trim()}}),2===this.step&&this.renderMemberSelector(),(0,a.h)("footer",null,(0,a.h)("dyte-button",{kind:"button",iconPack:this.iconPack,t:this.t,size:"lg",disabled:0===this.channelName.length,onClick:this.onClickHandler},1===this.step?this.t("chat.add_members"):this.t("create"))))}get $el(){return(0,a.g)(this)}};o.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));display:flex;flex-direction:column;width:var(--dyte-space-96, 384px);padding-left:var(--dyte-space-9, 36px);padding-right:var(--dyte-space-9, 36px);padding-top:var(--dyte-space-10, 40px);padding-bottom:var(--dyte-space-10, 40px)}header{margin-bottom:var(--dyte-space-8, 32px);display:flex;align-items:center;gap:var(--dyte-space-2, 8px);font-size:24px;font-weight:600}.channel-name-input{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;padding:var(--dyte-space-3, 12px);font-size:16px;-webkit-appearance:none;-moz-appearance:none;appearance:none;line-height:1.25;outline:2px solid transparent;outline-offset:2px}.channel-name-input:focus{outline-width:2px;outline-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5)}footer{margin-top:var(--dyte-space-5, 20px);display:flex;justify-content:flex-end}.member{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);padding:var(--dyte-space-2, 8px)}.member dyte-avatar{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.input-container{position:relative;-webkit-appearance:none;-moz-appearance:none;appearance:none;line-height:1.25;outline:2px solid transparent;outline-offset:2px;outline-width:2px;outline-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5);border-radius:var(--dyte-border-radius-sm, 4px)}.input-container .members{margin:var(--dyte-space-0, 0px);max-height:var(--dyte-space-28, 112px);border-radius:var(--dyte-border-radius-sm, 4px);padding:var(--dyte-space-2, 8px);list-style-type:none;display:flex;flex-wrap:wrap;gap:var(--dyte-space-1, 4px);cursor:text;font-size:16px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));overflow-y:auto}.input-container .pill{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);border-radius:var(--dyte-border-radius-sm, 4px);padding:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.input-container .pill dyte-avatar{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);font-size:14px;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.input-container .pill span{max-width:var(--dyte-space-32, 128px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.input-container .pill dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);cursor:pointer}.input-container input{width:var(--dyte-space-24, 96px);border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;padding:var(--dyte-space-1, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px;font-size:16px;line-height:1.25rem}.input-container input.wide-input{width:100%}.search-results{margin:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-1, 4px);max-height:var(--dyte-space-28, 112px);width:100%;padding:var(--dyte-space-0, 0px);position:absolute;list-style-type:none;overflow-y:auto;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));border-radius:var(--dyte-border-radius-md, 8px);--tw-border-spacing-x:var(--dyte-space-2, 8px);--tw-border-spacing-y:var(--dyte-space-2, 8px);border-spacing:var(--tw-border-spacing-x) var(--tw-border-spacing-y);border-style:solid;border-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5)}.search-results .member{cursor:pointer}.search-results .member dyte-avatar{color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.search-results .member:hover,.search-results .member.selected{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-700, 2 70 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}"}}]);