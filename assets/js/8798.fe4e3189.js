"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[8798,3395],{98798:(t,e,i)=>{i.r(e),i.d(e,{dyte_ai:()=>c});var a=i(67503),s=i(92681),o=i(69750),n=i(24228),r=i(37692),d=i(86466);const c=class{constructor(t){(0,a.r)(this,t),this.stateUpdate=(0,a.c)(this,"dyteStateUpdate",7),this.close=()=>{this.stateUpdate.emit({activeAI:!1}),d.s.activeAI=!1},this.transcriptionHandler=()=>{"transcriptions"!==this.tab&&(this.newTranscriptionAvailable=!0)},this.aiMessageHandler=()=>{"home"!==this.tab&&(this.newAiMessageAvailable=!0)},this.defaultSection="home",this.meeting=void 0,this.middlewares={},this.states=void 0,this.config=r.d,this.iconPack=s.d,this.t=(0,o.u)(),this.size=void 0,this.view="sidebar",this.tab=this.defaultSection,this.newTranscriptionAvailable=!1,this.newAiMessageAvailable=!1}connectedCallback(){var t,e,i,a;this.viewChanged(this.view),null===(e=null===(t=this.middlewares)||void 0===t?void 0:t.speech)||void 0===e||e.on("transcription",this.transcriptionHandler),null===(a=null===(i=this.middlewares)||void 0===i?void 0:i.speech)||void 0===a||a.on("chatGPTReply",this.aiMessageHandler)}disconnectedCallback(){var t,e,i,a;this.keydownListener&&document.removeEventListener("keydown",this.keydownListener),null===(e=null===(t=this.middlewares)||void 0===t?void 0:t.speech)||void 0===e||e.off("transcription",this.transcriptionHandler),null===(a=null===(i=this.middlewares)||void 0===i?void 0:i.speech)||void 0===a||a.off("chatGPTReply",this.aiMessageHandler)}viewChanged(t){"full-screen"===t&&(this.keydownListener=t=>{"Escape"===t.key&&this.close()},document.addEventListener("keydown",this.keydownListener))}tabChanged(t){"transcriptions"===t&&this.newTranscriptionAvailable&&(this.newTranscriptionAvailable=!1),"home"===t&&this.newAiMessageAvailable&&(this.newAiMessageAvailable=!1)}viewSection(t){this.tab=t,d.s.activeSidebar=!0}render(){var t;if(!this.middlewares.speech||!(null===(t=this.states)||void 0===t?void 0:t.activeAI))return null;const e={meeting:this.meeting,config:this.config,states:this.states||d.s,size:this.size,t:this.t,iconPack:this.iconPack,middlewares:this.middlewares},i=this.middlewares.speech;return(0,a.h)(a.H,null,(0,a.h)("h3",{class:"title"},this.t("ai")),(0,a.h)("div",{id:"mobile-header"},(0,a.h)("dyte-button",{variant:"ghost",class:{active:"home"===this.tab},onClick:()=>this.viewSection("home"),iconPack:this.iconPack,t:this.t},this.t("ai.home"),this.newAiMessageAvailable&&(0,a.h)("span",{class:"dot"},".")),(0,a.h)("dyte-button",{variant:"ghost",class:{active:"transcriptions"===this.tab},onClick:()=>this.viewSection("transcriptions"),iconPack:this.iconPack,t:this.t},this.t("ai.transcriptions"),this.newTranscriptionAvailable&&(0,a.h)("span",{class:"dot"},"."))),(0,a.h)("dyte-button",{variant:"ghost",kind:"icon",class:"close",onClick:this.close,"aria-label":this.t("Close"),iconPack:this.iconPack,t:this.t},(0,a.h)("dyte-icon",{icon:this.iconPack.dismiss,iconPack:this.iconPack,t:this.t})),"home"===this.tab&&(0,a.h)(n.R,{element:"dyte-ai-home",defaults:e,props:{aiClient:i,initialMessages:i.aiMesssages,meeting:this.meeting}}),"transcriptions"===this.tab&&(0,a.h)(n.R,{element:"dyte-ai-transcriptions",defaults:e,props:{aiClient:i,initialTranscriptions:i.transcriptions}}),"personal"===this.tab&&(0,a.h)(n.R,{element:"dyte-ai-chat",defaults:e}))}static get watchers(){return{view:["viewChanged"],tab:["tabChanged"]}}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;box-sizing:border-box;display:flex;width:100%;max-width:var(--dyte-space-80, 320px);flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden}.close{position:absolute;top:var(--dyte-space-3, 12px);left:var(--dyte-space-3, 12px)}.title{margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-2, 8px);-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:var(--dyte-space-0, 0px);text-align:center;font-size:16px;font-weight:400}#mobile-header{margin-top:var(--dyte-space-2, 8px);display:flex;align-items:center;justify-content:space-evenly;border-bottom:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}#mobile-header dyte-button{border-bottom:var(--dyte-border-width-md, 2px) solid transparent;position:relative;border-radius:var(--dyte-border-radius-none, 0)}#mobile-header dyte-button:hover{background-color:transparent}#mobile-header dyte-button.active{border-color:rgb(var(--dyte-colors-brand-400, 53 110 253))}#mobile-header dyte-button .dot{font-size:48px;position:absolute;top:-26px;right:calc(var(--dyte-space-1, 4px) * -1);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}dyte-ai-home,dyte-ai-transcriptions,dyte-ai-chat{flex:1}:host([view='sidebar']){margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}:host([view='full-screen']){position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);z-index:50;max-width:100%;border:none}"}}]);