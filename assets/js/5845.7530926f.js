"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[5845,4667],{4667:(e,t,i)=>{i.r(t),i.d(t,{dyte_chat:()=>o});var s=i(67503),a=i(92681),n=i(69750),r=i(62270),d=i(85114),h=i(37692),c=(i(21237),i(59348));i(24555),i(60804);const o=class{constructor(e){(0,s.r)(this,e),this.disconnectMeeting=e=>{var t;this.isPrivateChatSupported()&&(null==e||e.participants.joined.removeListener("participantsUpdate",this.onParticipantUpdate),null==e||e.participants.joined.removeListener("participantLeft",this.onParticipantUpdate)),null===(t=null==e?void 0:e.chat)||void 0===t||t.removeListener("chatUpdate",this.chatUpdateListener)},this.onParticipantUpdate=()=>{this.participants=this.meeting.participants.joined.toArray().filter((e=>0===this.privatePresetFilter.length||this.privatePresetFilter.includes(e.presetName))),this.selectedParticipant&&!this.participants.includes(this.selectedParticipant)&&(this.selectedParticipant=null,this.chatRecipientId=this.selectedGroup="everyone")},this.usePaginatedChat=()=>(0,c.u)(this.meeting),this.updateUnreadCountGroups=e=>{this.unreadCountGroups=Object.assign(Object.assign({},this.unreadCountGroups),e)},this.isPrivateChatSupported=()=>{var e,t,i;return this.canPrivateMessage&&!this.disablePrivateChat&&"socket-service"===(null===(i=null===(t=null===(e=this.meeting)||void 0===e?void 0:e.__internals__)||void 0===t?void 0:t.features)||void 0===i?void 0:i.getFeatureValue("chat_socket_server"))},this.updateRecipients=e=>{if("string"==typeof e.detail)this.chatRecipientId="everyone",this.selectedParticipant=null;else{const{userId:t}=e.detail;this.chatRecipientId=t,this.selectedParticipant=this.participants.find((e=>e.userId===t))}if("everyone"!==this.chatRecipientId){const e=[this.chatRecipientId,this.meeting.self.userId],t=(0,r.g)(e);this.selectedGroup=t}else this.selectedGroup="everyone";this.updateUnreadCountGroups({[this.selectedGroup]:0})},this.isTextMessagingAllowed=()=>"everyone"===this.chatRecipientId?this.canSend&&this.canSendTextMessage:this.canPrivateMessage&&this.canSendPrivateTexts,this.isFileMessagingAllowed=()=>"everyone"===this.chatRecipientId?this.canSend&&this.canSendFiles:this.canPrivateMessage&&this.canSendPrivateFiles,this.meeting=void 0,this.config=h.d,this.size=void 0,this.iconPack=a.d,this.t=(0,n.u)(),this.disablePrivateChat=!1,this.privatePresetFilter=[],this.unreadCountGroups={},this.chatGroups={everyone:[]},this.selectedGroup="everyone",this.now=new Date,this.dropzoneActivated=!1,this.showLatestMessageButton=!1,this.canSend=!1,this.canSendTextMessage=!1,this.canSendFiles=!1,this.canPrivateMessage=!1,this.canSendPrivateTexts=!1,this.canSendPrivateFiles=!1,this.emojiPickerEnabled=!1,this.chatRecipientId="everyone",this.participants=[],this.selectedParticipant=void 0}connectedCallback(){this.meetingChanged(this.meeting),this.meeting&&!this.meeting.chat||this.isFileMessagingAllowed()&&(this.host.addEventListener("dragover",(e=>{e.preventDefault(),this.dropzoneActivated=!0})),this.host.addEventListener("dragleave",(()=>{this.dropzoneActivated=!1})),this.host.addEventListener("drop",(e=>{e.preventDefault(),this.dropzoneActivated=!1,(0,r.h)(e.dataTransfer.items,((e,t)=>{var i,s,a,n;switch(e){case"image":this.isFileMessagingAllowed()&&(null===(s=null===(i=this.meeting)||void 0===i?void 0:i.chat)||void 0===s||s.sendImageMessage(t,this.getRecipientPeerIds()));break;case"file":this.isFileMessagingAllowed()&&(null===(n=null===(a=this.meeting)||void 0===a?void 0:a.chat)||void 0===n||n.sendFileMessage(t,this.getRecipientPeerIds()))}}))})))}disconnectedCallback(){this.disconnectMeeting(this.meeting)}meetingChanged(e,t){var i,s,a,n,r;null!=t&&this.disconnectMeeting(t),e&&!e.chat||null!=e&&(this.canSend=e.self.permissions.chatPublic.canSend,this.canSendTextMessage=e.self.permissions.chatPublic.text,this.canSendFiles=e.self.permissions.chatPublic.files,this.canPrivateMessage=(null===(i=e.self.permissions.chatPrivate)||void 0===i?void 0:i.canSend)||(null===(s=e.self.permissions.chatPrivate)||void 0===s?void 0:s.canReceive),this.canSendPrivateTexts=null===(a=e.self.permissions.chatPrivate)||void 0===a?void 0:a.text,this.canSendPrivateFiles=null===(n=e.self.permissions.chatPrivate)||void 0===n?void 0:n.files,this.initializeChatGroups(),this.chatGroups=Object.assign({},this.chatGroups),this.chatUpdateListener=({message:e})=>{this.addToChatGroup(e),this.chatGroups=Object.assign({},this.chatGroups)},this.onParticipantUpdate(),this.usePaginatedChat()||null===(r=e.chat)||void 0===r||r.addListener("chatUpdate",this.chatUpdateListener),this.isPrivateChatSupported()&&(e.participants.joined.addListener("participantJoined",this.onParticipantUpdate),e.participants.joined.addListener("participantLeft",this.onParticipantUpdate)))}chatGroupsChanged(e){var t,i;if(!this.isPrivateChatSupported())return;const s={};for(const a in e){const n=null!==(t=d.c[a])&&void 0!==t?t:0;s[a]=e[a].filter((e=>"chat"==e.type&&e.message.time>n&&e.message.userId!==this.meeting.self.userId)).length,(a===(0,r.g)([this.meeting.self.userId,null===(i=this.selectedParticipant)||void 0===i?void 0:i.userId])||"everyone"===a&&null===this.selectedParticipant)&&(s[a]=0,d.c[a]=new Date)}this.updateUnreadCountGroups(s)}initializeChatGroups(){var e;null===(e=this.meeting.chat)||void 0===e||e.messages.forEach((e=>{this.addToChatGroup(e)}))}addToChatGroup(e){var t;const i=(0,r.p)(e);let s="everyone";if((null===(t=i.targetUserIds)||void 0===t?void 0:t.length)>0){const e=new Set([i.userId,...i.targetUserIds]);s=(0,r.g)(Array.from(e))}void 0===this.chatGroups[s]&&(this.chatGroups[s]=[]),this.chatGroups[s]=[...this.chatGroups[s],{type:"chat",message:i}]}getRecipientPeerIds(){let e=[];return"everyone"!==this.chatRecipientId&&(e=[this.selectedParticipant.id]),e}render(){var e,t,i,a;const n={iconPack:this.iconPack,t:this.t,size:this.size},r=null===(e=this.meeting)||void 0===e?void 0:e.self.userId,d=this.chatGroups[this.selectedGroup]||[];return(0,s.h)(s.H,null,this.isFileMessagingAllowed()&&(0,s.h)("div",{id:"dropzone",class:{active:this.dropzoneActivated},part:"dropzone"},(0,s.h)("dyte-icon",{icon:this.iconPack.attach,iconPack:this.iconPack,t:this.t}),(0,s.h)("p",null,this.t("Drop files/images to send"))),this.isPrivateChatSupported()&&(0,s.h)("dyte-chat-selector-ui",Object.assign({selfUserId:r,groups:this.participants,selectedGroupId:null===(t=this.selectedParticipant)||void 0===t?void 0:t.userId,unreadCounts:this.unreadCountGroups,onDyteChatGroupChanged:this.updateRecipients},n)),this.usePaginatedChat()?(0,s.h)("dyte-chat-messages-ui-paginated",{meeting:this.meeting,size:this.size,iconPack:this.iconPack,t:this.t}):(0,s.h)("dyte-chat-messages-ui",Object.assign({messages:d,selfUserId:r,selectedGroup:this.selectedGroup},n)),(0,s.h)("dyte-chat-composer-ui",Object.assign({canSendTextMessage:this.isTextMessagingAllowed(),canSendFiles:this.isFileMessagingAllowed(),disableEmojiPicker:!!(null===(a=null===(i=this.meeting)||void 0===i?void 0:i.__internals__)||void 0===a?void 0:a.features.hasFeature(c.F.DISABLE_EMOJI_PICKER)),onDyteNewMessage:e=>{var t,i,s,a,n,r;const d=e.detail;switch(d.type){case"text":null===(i=null===(t=this.meeting)||void 0===t?void 0:t.chat)||void 0===i||i.sendTextMessage(d.message,this.getRecipientPeerIds());break;case"image":null===(a=null===(s=this.meeting)||void 0===s?void 0:s.chat)||void 0===a||a.sendImageMessage(d.file,this.getRecipientPeerIds());break;case"file":null===(r=null===(n=this.meeting)||void 0===n?void 0:n.chat)||void 0===r||r.sendFileMessage(d.file,this.getRecipientPeerIds())}}},n),(0,s.h)("slot",{name:"chat-addon",slot:"chat-addon"})))}get host(){return(0,s.g)(this)}static get watchers(){return{meeting:["meetingChanged"],chatGroups:["chatGroupsChanged"]}}};o.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;height:100%;width:100%;flex-direction:column;font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}h3{margin:var(--dyte-space-0, 0px);display:flex;height:var(--dyte-space-12, 48px);align-items:center;justify-content:center;font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}#dropzone{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);z-index:10;display:none;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}#dropzone.active{display:flex;-webkit-animation:0.2s slide-up ease-in;animation:0.2s slide-up ease-in}dyte-chat-messages-ui{flex:1 0 0}"}}]);