"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[9497,1324],{11324:(t,e,r)=>{r.r(e),r.d(e,{dyte_participants:()=>d});var a=r(67503),s=r(92681),i=r(69750),o=r(24228),c=r(86466),n=r(37692);r(21237),r(24555),r(60804);const d=class{constructor(t){(0,a.r)(this,t),this.onSearchInput=t=>{this.search=t.target.value},this.meeting=void 0,this.states=void 0,this.config=n.d,this.size=void 0,this.iconPack=s.d,this.t=(0,i.u)(),this.search=""}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){this.meeting}meetingChanged(t){}render(){const t={meeting:this.meeting,states:this.states||c.s,config:this.config,size:this.size,iconPack:this.iconPack,t:this.t};return(0,a.h)(a.H,null,(0,a.h)("div",{class:"search",part:"search"},(0,a.h)("dyte-icon",{icon:this.iconPack.search,part:"search-icon",iconPack:this.iconPack,t:this.t}),(0,a.h)("input",{type:"search",autocomplete:"off",placeholder:"Search",onInput:this.onSearchInput,part:"search-input"})),(0,a.h)("div",{class:"ctr scrollbar",part:"container"},(0,a.h)(o.R,{element:"dyte-participants-waiting-list",defaults:t}),(0,a.h)(o.R,{element:"dyte-participants-stage-queue",defaults:t}),(0,a.h)(o.R,{element:"dyte-participants-stage-list",defaults:t,props:{search:this.search}}),(0,a.h)(o.R,{element:"dyte-participants-viewer-list",defaults:t,props:{search:this.search}})))}static get watchers(){return{meeting:["meetingChanged"]}}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{display:flex;height:100%;width:100%;flex-direction:column;font-size:14px}*{box-sizing:border-box}.ctr{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);box-sizing:border-box;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-0, 0px);padding-bottom:var(--dyte-space-0, 0px);overflow-y:auto;flex-grow:1;flex-basis:0}.search{position:-webkit-sticky;position:sticky;box-sizing:border-box;display:flex;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));margin-left:var(--dyte-space-3, 12px);margin-right:var(--dyte-space-3, 12px);margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px)}.search dyte-icon{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.search input{box-sizing:border-box;height:var(--dyte-space-9, 36px);width:100%;padding-right:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px;border-radius:var(--dyte-border-radius-sm, 4px);font-size:14px}.search input::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.search input::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}:host([size='md']) .search{margin-top:var(--dyte-space-4, 16px) !important;margin-bottom:var(--dyte-space-4, 16px) !important}:host([size='sm']) .search{margin-top:var(--dyte-space-4, 16px) !important;margin-bottom:var(--dyte-space-4, 16px) !important}"}}]);