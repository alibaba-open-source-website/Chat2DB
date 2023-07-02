"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[9246,7412],{43367:(e,t,i)=>{var o;i.d(t,{R:()=>o}),function(e){e.REQUEST_RECEIVED="REQUEST_RECEIVED",e.REQUEST_SENT="REQUEST_SENT",e.INCOMING_REQUEST_ACCEPTED="INCOMING_REQUEST_ACCEPTED",e.OUTGOING_REQUEST_ACCEPTED="OUTGOING_REQUEST_ACCEPTED",e.INCOMING_REQUEST_ENDED="INCOMING_REQUEST_ENDED",e.OUTGOING_REQUEST_ENDED="OUTGOING_REQUEST_ENDED"}(o||(o={}))},89246:(e,t,i)=>{i.r(t),i.d(t,{dyte_screenshare_view:()=>d});var o=i(65733),n=i(96633),s=i(20336),a=i(43367),r=i(30099);const d=class{constructor(e){(0,o.r)(this,e),this.stateUpdate=(0,o.c)(this,"dyteStateUpdate",7),this.fullScreenListener=()=>{this.isFullScreen=(0,r.i)()},this.onRemoteUpdate=({payload:e,type:t})=>{var i,o;let n="";if(t===a.R.INCOMING_REQUEST_ACCEPTED){n=`${this.meeting.participants.joined.get(e.request.remotePeerId).name} is controlling your screen.`}if(t===a.R.OUTGOING_REQUEST_ACCEPTED){n=`You are controlling ${this.meeting.participants.joined.get(e.request.hostPeerId).name}'s screen.`}t!==a.R.INCOMING_REQUEST_ENDED&&t!==a.R.OUTGOING_REQUEST_ENDED||(n=""),t!==a.R.REQUEST_RECEIVED||Boolean(null===(o=null===(i=this.meeting)||void 0===i?void 0:i.remote)||void 0===o?void 0:o.active)||this.stateUpdate.emit({activeRemoteAccessManager:!0}),this.remoteControlInfo=n},this.onMouseEvent=e=>{var t,i;this.shouldSkipEventTrigger()||(e.stopPropagation(),e.preventDefault(),null===(i=null===(t=this.meeting)||void 0===t?void 0:t.remote)||void 0===i||i.mouseEvent(e,this.videoEl))},this.onKeyDown=e=>{var t,i;this.shouldSkipEventTrigger()||null===(i=null===(t=this.meeting)||void 0===t?void 0:t.remote)||void 0===i||i.keyboardEvent(e)},this.toggleFullScreen=()=>{this.isFullScreen?((0,r.e)(),this.isFullScreen=!1):((0,r.r)(this.host),this.isFullScreen=!0)},this.hideFullScreenButton=!1,this.nameTagPosition="bottom-left",this.participant=void 0,this.meeting=void 0,this.variant="solid",this.size=void 0,this.iconPack=n.d,this.t=(0,s.u)(),this.videoExpanded=!1,this.screenShareEnabled=!1,this.isFullScreen=!1,this.remoteControlInfo=void 0}connectedCallback(){null===window||void 0===window||window.addEventListener("fullscreenchange",this.fullScreenListener),null===window||void 0===window||window.addEventListener("webkitfullscreenchange",this.fullScreenListener)}componentDidLoad(){this.participantChanged(this.participant)}disconnectedCallback(){var e,t,i;this.screenShareListener&&(null===(e=this.participant)||void 0===e||e.removeListener("screenShareUpdate",this.screenShareListener)),null===(i=null===(t=this.meeting)||void 0===t?void 0:t.remote)||void 0===i||i.removeListener("remoteUpdate",this.onRemoteUpdate),null===window||void 0===window||window.removeEventListener("fullscreenchange",this.fullScreenListener),null===window||void 0===window||window.removeEventListener("webkitfullscreenchange",this.fullScreenListener)}participantChanged(e){var t,i,n,s,a;null!=e&&(this.screenShareListener=({screenShareEnabled:e,screenShareTracks:t})=>{const i=e&&null!=t.video;if((0,o.w)((()=>{this.screenShareEnabled=i})),i){const e=new MediaStream;e.addTrack(t.video),null!=this.videoEl&&(this.videoEl.srcObject=e,this.videoEl.play())}else null!=this.videoEl&&(this.videoEl.srcObject=void 0)},this.screenShareListener(e),Boolean(null===(i=null===(t=this.meeting)||void 0===t?void 0:t.remote)||void 0===i?void 0:i.active)&&[this.meeting.remote.active.hostPeerId,this.meeting.remote.active.remotePeerId].includes(null==e?void 0:e.id)&&this.onRemoteUpdate({payload:{request:this.meeting.remote.active},type:(null===(n=this.meeting.remote.active)||void 0===n?void 0:n.hostPeerId)===this.meeting.self.id?"INCOMING_REQUEST_ACCEPTED":"OUTGOING_REQUEST_ACCEPTED"}),e.addListener("screenShareUpdate",this.screenShareListener),null===(a=null===(s=this.meeting)||void 0===s?void 0:s.remote)||void 0===a||a.addListener("remoteUpdate",this.onRemoteUpdate))}shouldSkipEventTrigger(){var e,t,i;return null==this.meeting||null==this.participant||(!Boolean(null===(e=this.meeting.remote)||void 0===e?void 0:e.active)||!Boolean(this.meeting.participants.joined.get(null===(t=this.meeting.remote)||void 0===t?void 0:t.active.hostPeerId))||(null===(i=this.meeting.remote)||void 0===i?void 0:i.active.hostPeerId)!=this.participant.id)}render(){var e,t,i,n,s,a,d,l;const c=(null===(e=this.participant)||void 0===e?void 0:e.id)===(null===(t=this.meeting)||void 0===t?void 0:t.self.id),h=this.isFullScreen?this.t("full_screen.exit"):this.t("full_screen"),p=this.isFullScreen?this.iconPack.full_screen_minimize:this.iconPack.full_screen_maximize;return(0,o.h)(o.H,{class:{isSelf:c}},Boolean((null===(n=null===(i=this.meeting)||void 0===i?void 0:i.remote)||void 0===n?void 0:n.active)&&this.remoteControlInfo)&&(0,o.h)("div",{id:"remote-control-self",key:"remote-control-self"},(0,o.h)("p",{class:"remote-control-message"},this.remoteControlInfo),(0,o.h)("dyte-button",{onClick:()=>{var e;return null===(e=this.meeting.remote)||void 0===e?void 0:e.endControl()},iconPack:this.iconPack,t:this.t},(null===(a=null===(s=this.meeting.remote)||void 0===s?void 0:s.active)||void 0===a?void 0:a.hostPeerId)===this.meeting.self.id?"Revoke access":"Stop")),(0,o.h)("div",{key:"video-container",id:"video-container",class:{expand:this.videoExpanded},contentEditable:Boolean(null===(d=this.meeting.remote)||void 0===d?void 0:d.active),onKeyDown:this.onKeyDown},(0,o.h)("video",{ref:e=>this.videoEl=e,class:{visible:this.screenShareEnabled,"fit-in-container":this.participant.supportsRemoteControl},playsInline:!0,autoPlay:!0,muted:!0,id:`screen-share-video-${this.participant.id}`,onMouseMove:this.onMouseEvent,onClick:this.onMouseEvent,onContextMenu:this.onMouseEvent})),(0,o.h)("div",{id:"controls",key:"controls"},!this.hideFullScreenButton&&!c&&(0,r.a)()&&(0,o.h)("dyte-tooltip",{label:h,iconPack:this.iconPack,t:this.t},(0,o.h)("dyte-button",{id:"full-screen-btn",kind:"icon",onClick:this.toggleFullScreen,title:h,iconPack:this.iconPack,t:this.t},(0,o.h)("dyte-icon",{icon:p,"aria-hidden":!0,tabIndex:-1,iconPack:this.iconPack,t:this.t}))),!0===(null===(l=this.participant)||void 0===l?void 0:l.supportsRemoteControl)&&(0,o.h)("dyte-menu",{id:"menu",key:"menu",iconPack:this.iconPack,t:this.t},(0,o.h)("dyte-button",{variant:"secondary",kind:"icon",slot:"trigger",iconPack:this.iconPack,t:this.t},(0,o.h)("dyte-icon",{icon:this.iconPack.more_vertical,iconPack:this.iconPack,t:this.t})),(0,o.h)("dyte-menu-list",{iconPack:this.iconPack,t:this.t},!c&&(0,o.h)("dyte-menu-item",{style:{cursor:this.participant.supportsRemoteControl?"pointer":"not-allowed"},iconPack:this.iconPack,t:this.t,onClick:()=>{var e,t;(null===(e=this.participant)||void 0===e?void 0:e.supportsRemoteControl)&&(null===(t=this.meeting.remote)||void 0===t||t.requestControl(this.participant.id))}},"Request remote control"),c&&(0,o.h)("dyte-menu-item",{iconPack:this.iconPack,t:this.t,onClick:()=>this.stateUpdate.emit({activeRemoteAccessManager:!0})},"Manage remote control requests")))),c&&(0,o.h)("div",{id:"self-message",key:"self-message"},(0,o.h)("h3",null,this.t("screenshare.shared")),(0,o.h)("div",{class:"actions"},null!=this.meeting&&(0,o.h)("dyte-button",{variant:"danger",onClick:()=>{this.meeting.self.disableScreenShare()},iconPack:this.iconPack,t:this.t},(0,o.h)("dyte-icon",{icon:this.iconPack.share_screen_stop,slot:"start",iconPack:this.iconPack,t:this.t}),this.t("screenshare.stop")),(0,o.h)("dyte-button",{variant:"secondary",id:"expand-btn",iconPack:this.iconPack,t:this.t,onClick:()=>{this.videoExpanded=!this.videoExpanded}},(0,o.h)("dyte-icon",{icon:this.videoExpanded?this.iconPack.full_screen_minimize:this.iconPack.full_screen_maximize,slot:"start",iconPack:this.iconPack,t:this.t}),this.videoExpanded?this.t("screenshare.min_preview"):this.t("screenshare.max_preview")))),(0,o.h)("slot",null))}get host(){return(0,o.g)(this)}static get watchers(){return{participant:["participantChanged"]}}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{height:100%;width:100%;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-video-bg, 24 24 24) / var(--tw-bg-opacity))}::slotted(dyte-name-tag){position:absolute;left:var(--dyte-space-3, 12px);bottom:var(--dyte-space-3, 12px);opacity:0.8}#video-container{position:absolute;display:block;height:100%;width:100%}#video-container .fit-in-container{-o-object-fit:fill;object-fit:fill}video{height:100%;width:100%;-o-object-fit:contain;object-fit:contain}:host([variant='gradient']) ::slotted(dyte-audio-visualizer){position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px)}:host([variant='gradient']) ::slotted(dyte-name-tag){bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);display:flex;width:100%;align-items:center;justify-content:center;text-align:center;background-color:transparent;background-image:linear-gradient(to top, var(--tw-gradient-stops));--tw-gradient-from:rgb(var(--dyte-colors-background-1000, 8 8 8));--tw-gradient-to:rgba(var(--dyte-colors-background-1000, 8 8 8) / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:transparent}:host([size='sm'][variant='gradient']) ::slotted(dyte-audio-visualizer){height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}video.visible{-webkit-animation:video-fadein 0.4s ease;animation:video-fadein 0.4s ease}#controls{display:none;position:absolute;top:var(--dyte-space-3, 12px);right:var(--dyte-space-3, 12px);align-items:center;justify-content:flex-end;gap:var(--dyte-space-2, 8px)}:host(:hover) #controls,:host(:active) #controls,:host(:focus-visible) #controls{display:flex}#full-screen-btn{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}h3{margin-top:var(--dyte-space-10, 40px);margin-bottom:var(--dyte-space-6, 24px);text-align:center;font-size:20px;font-weight:500}:host([size='sm']) h3{font-size:16px}#self-message{padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}:host(.isSelf) #self-view{flex:1 1 0%}:host(.isSelf) #video-container{position:static;aspect-ratio:auto;height:auto;width:50%;max-width:var(--dyte-space-96, 384px);border-radius:var(--dyte-border-radius-md, 8px);transition:0.6s ease}:host(.isSelf) #video-container.expand{width:60%;max-width:100%}.actions{display:flex;align-items:center;justify-content:center;gap:var(--dyte-space-2, 8px)}:host([size='sm'].isSelf) #video-container,:host([size='md'].isSelf) #video-container,:host([size='sm'].isSelf) #expand-btn,:host([size='md'].isSelf) #expand-btn{display:none}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.remote-control{z-index:10;height:100%;max-height:100%;flex:0 1 auto}#remote-control-self{position:absolute;top:var(--dyte-space-0, 0px);left:50%;z-index:10;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:100%;box-sizing:border-box;display:flex;height:var(--dyte-space-8, 32px);align-items:center;overflow:hidden;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-warning, 255 205 7) / var(--tw-bg-opacity));font-size:12px;color:rgb(var(--dyte-colors-text-1000, 255 255 255));transform:translateX(-50%)}#remote-control-self p{padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px)}#remote-control-self dyte-button{height:100%;border-radius:var(--dyte-border-radius-none, 0);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-bg-opacity));font-size:12px}:host([size='sm']) #remote-control-self{height:auto;flex-direction:column}:host([size='sm']) #remote-control-self dyte-button{width:100%;padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px)}:host([name-tag-position='bottom-right']) ::slotted(dyte-name-tag){left:auto;right:var(--dyte-space-3, 12px)}:host([name-tag-position='bottom-center']) ::slotted(dyte-name-tag){left:auto;right:auto}:host([name-tag-position='top-left']) ::slotted(dyte-name-tag){top:var(--dyte-space-3, 12px);bottom:auto}:host([name-tag-position='top-right']) ::slotted(dyte-name-tag){top:var(--dyte-space-3, 12px);right:var(--dyte-space-3, 12px);left:auto;bottom:auto}:host([name-tag-position='top-center']) ::slotted(dyte-name-tag){left:auto;right:auto;bottom:auto;top:var(--dyte-space-3, 12px)}@-webkit-keyframes video-fadein{0%{opacity:0;transform:scale(1.4) translateY(20px)}100%{opacity:1;transform:scale(1) translateY(0)}}@keyframes video-fadein{0%{opacity:0;transform:scale(1.4) translateY(20px)}100%{opacity:1;transform:scale(1) translateY(0)}}::slotted(dyte-network-indicator){position:absolute;right:var(--dyte-space-3, 12px);bottom:var(--dyte-space-3, 12px)}"},30099:(e,t,i)=>{i.d(t,{a:()=>a,e:()=>n,i:()=>s,r:()=>o});const o=e=>{null!=e&&(null!=e.requestFullscreen?e.requestFullscreen():null!=e.mozRequestFullScreen?e.mozRequestFullScreen():null!=e.webkitRequestFullscreen?e.webkitRequestFullscreen():null!=e.msRequestFullscreen&&e.msRequestFullscreen())},n=()=>{null!=document.exitFullscreen?document.exitFullscreen():null!=document.mozExitFullScreen?document.mozExitFullScreen():null!=document.webkitExitFullscreen?document.webkitExitFullscreen():null!=document.msExitFullscreen&&document.msExitFullscreen()},s=()=>null!=document.fullscreenElement||null!=document.webkitCurrentFullScreenElement,a=()=>"undefined"!=typeof document&&(document.fullscreenEnabled||document.mozFullscreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled)}}]);