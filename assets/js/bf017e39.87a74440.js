"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[1776],{96681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>b,frontMatter:()=>c,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={title:"SQL\u8bed\u6cd5\u8f6c\u6362",sidebar_position:11,description:"Chat2DB\u4e00\u4e2a\u96c6\u6210\u4e86AI\u80fd\u529b\u7684\u3001\u652f\u6301Mysql\u3001Oracle\u7b49\u591a\u79cd\u6570\u636e\u5e93\u7ba1\u7406\u7684\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u5de5\u5177"},a=void 0,l={unversionedId:"ai/sqlconversion",id:"ai/sqlconversion",title:"SQL\u8bed\u6cd5\u8f6c\u6362",description:"Chat2DB\u4e00\u4e2a\u96c6\u6210\u4e86AI\u80fd\u529b\u7684\u3001\u652f\u6301Mysql\u3001Oracle\u7b49\u591a\u79cd\u6570\u636e\u5e93\u7ba1\u7406\u7684\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u5de5\u5177",source:"@site/docs/ai/sqlconversion.md",sourceDirName:"ai",slug:"/ai/sqlconversion",permalink:"/docs/ai/sqlconversion",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/ai/sqlconversion.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"SQL\u8bed\u6cd5\u8f6c\u6362",sidebar_position:11,description:"Chat2DB\u4e00\u4e2a\u96c6\u6210\u4e86AI\u80fd\u529b\u7684\u3001\u652f\u6301Mysql\u3001Oracle\u7b49\u591a\u79cd\u6570\u636e\u5e93\u7ba1\u7406\u7684\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u5de5\u5177"},sidebar:"docSidebar",previous:{title:"SQL\u6027\u80fd\u4f18\u5316",permalink:"/docs/ai/sqloptimization"},next:{title:"\u652f\u6301\u7684\u6570\u636e\u5e93",permalink:"/docs/dbsupport/"}},u={},p=[{value:"\u529f\u80fd\u56db\uff1aSQL\u8f6c\u6362",id:"\u529f\u80fd\u56dbsql\u8f6c\u6362",level:2}],d={toc:p},O="wrapper";function b(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(O,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u529f\u80fd\u56dbsql\u8f6c\u6362"},"\u529f\u80fd\u56db\uff1aSQL\u8f6c\u6362"),(0,r.kt)("p",null,"\u4e0d\u540c\u6570\u636e\u5e93SQL\u9884\u53d1\u95f4\u6709\u7565\u5fae\u7684\u5dee\u5f02\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7Chat2DB\u8ba9\u4ed6\u5e2e\u6211\u4eec\u53bb\u8f6c\u6362\u8fd9\u4e2aSQL\u7684\u8bed\u6cd5\u3002\n\u6bd4\u5982\u5c06\u5982\u4e0b\u7684\u5206\u9875\u4eceMysql\u8bed\u6cd5\u8f6c\u6362\u6210Oracle\u7684\u8bed\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"## ---BEGIN---\n## SELECT s.name, SUM(sc.score) AS total_score\nFROM student s\nINNER JOIN student_course sc ON s.id = sc.student_id\nGROUP BY s.id\nORDER BY total_score DESC\nLIMIT 10;\n## ---SQL\u8f6c\u6362:---\nSQL\u8f6c\u6362:\n\nSELECT s.name, SUM(sc.score) AS total_score\nFROM student s\nINNER JOIN student_course sc ON s.id = sc.student_id\nGROUP BY s.id, s.name\nORDER BY total_score DESC\nFETCH FIRST 10 ROWS ONLY;\n## --- END ---\n")))}b.isMDXComponent=!0}}]);