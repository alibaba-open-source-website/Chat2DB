"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[4489],{232:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(98478),s=n(86010);function i({className:e}){return a.createElement("footer",{className:"bg-secondary-900"},a.createElement("div",{className:(0,s.Z)("mx-auto flex max-w-7xl flex-col gap-4 px-10 py-8 lg:flex-row lg:items-center lg:gap-8",e)},a.createElement("div",{className:"flex items-center"},a.createElement(o.Z,{sources:{light:"/logo/logo.light.svg",dark:"/logo/logo.dark.svg"},alt:"Logo",className:"h-10"})),a.createElement("div",{className:"flex-1 text-zinc-400 lg:text-right"},"Copyright \xa9 Chat2DB since 2023. All rights reserved.")))}},10519:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(67294),o=n(60155),s=n(232),i=n(86010),r=n(20210),c=n(61896),l=n(83206),d=n(9566),m=n(26171);const u=n(1272).ZP.load("#\n# General FAQs\n#\n\n- question: What does Dyte do?\n  tags: ['General']\n  answer: |-\n    Dyte offers a real-time video and voice solution for integrating\n    high-quality video/voice calls into your web, mobile, and desktop\n    applications and websites.\n\n    Call recording, live streaming, webinars,\n    live transcription and translation, chatting, polling, quizzes, and\n    many other features are available with Dyte.\n\n    Dyte includes:\n\n    **Core SDKs:** These SDKs enable you to create high-quality custom\n    video and voice calls with real-time communication. Core SDKs are\n    completely customizable and simple to integrate.\n\n    **UI Kit:** Using Dyte&quot;s prebuilt design library of UI\n    components, you can integrate video and voice calls into your app or\n    website in minutes.\n\n    The following platforms are currently supported:\n\n    - Mobile: Flutter, Android (Java/Kotlin), iOS(Objective-C/Swift), React Native\n    - Web: Javascript Core SDK + UI Kit for React JS, Angular, Web Components for everything else\n    - Desktop: Electron\n\n    For more information, see [Dyte docs](/)\n\n- question: What businesses can use Dyte?\n  tags: ['General']\n  answer: |-\n    Dyte can add value to a wide range of industries, including telehealth, eLearning, gaming, remote working, education, event management, metaverse, adult entertainment, and others.\n\n- question: What is a Developer Portal?\n  tags: ['General']\n  answer: |-\n    To get started with Dyte, you must first register in the developer portal.\n\n    The developer portal provides the following information:\n\n    - Dashboard: A view of your usage, billing, and organization details etc.\n    - API Keys: The API Keys are required to instantiate a meeting.\n      The values for Organization ID, API Key, and Base URL are generated\n      dynamically for your Organization. You require these settings when\n      performing different actions, such as, create a meeting, delete a\n      meeting, add a participant, etc. Learn more: [Web SDKs](/react-ui-kit), [Mobile SDKs](/react-native), [APIs](/api).\n    - Logs and Sample Apps: You can view logs and sample apps in developer portal.\n\n    You can also create a webhook, roles, presets, and so on using the developer portal.\n\n- question: What are Presets?\n  tags: ['General']\n  answer: |-\n    A set of roles, UI elements, buttons, and configurations that determines how the meeting will appear for a specific participant. Learn more: [DytePermissionsPreset](/rn-core/reference/DytePermissionsPreset#module_DytePermissionsPreset).\n\n- question: What are Core SDKs used for?\n  tags: ['General']\n  answer: |-\n    The Dyte Core SDKs are designed to provide developers with an easy way to incorporate real-time communication (RTC) solutions into their apps and websites. With full customization and branding options, you can build your own UI from the ground up without dealing with complicated media layers. \n\n    The Core SDK acts as a data-only layer, offering high-level primitives and abstracting away complex media and networking optimizations. It only provides simple APIs that are user-friendly and easy to work with.\n    See [Dyte docs](/).\n\n- question: What is the UI Kit?\n  tags: ['General']\n  answer: |-\n    Dyte's React UI Kit is a prebuilt design library of UI components that makes it easy to integrate video and voice calls into any app or website within minutes. See [Dyte docs](https://docs.dyte.io/react-ui-kit).\n\n- question: What is the Plugin SDK?\n  tags: ['General']\n  answer: |-\n    You can use Dyte plugin SDKs to add third-party plugins to experience the most immersive, collaborative, and more human interaction right in your video and audio calls. Dyte provides multiple out-of-the-box plugins, for example, YouTube, Miro, WhiteBoard, and so on.\n\n- question: How to access API Keys and other details from the Developer Portal?\n  tags: ['General']\n  answer: |-\n    Log onto [https://dev.dyte.io/apikeys](https://dev.dyte.io/apikeys) with the credentials you used to sign up for Dyte.\n\n- question: How many people can join a Dyte meeting with audio & video turned ON?\n  tags: ['General']\n  answer: |-\n    On Dyte, you can have up to 200 people on the same call with video and voice enabled.\n    However, if you have any specific requirements that require more people joining the same call, please\n    [contact us](https://dyte.io/contact).\n\n    We will support you with your requirements.\n\n- question: How many attendees can be seen on a live grid?'\n  tags: ['General']\n  answer: |-\n    In order to provide the best possible experience, we have limited the number of attendees to 6-9. However, we can tailor it to a maximum of 12 attendees.\n\n- question: How many people can join a Dyte webinar?\n  tags: ['General']\n  answer: |-\n    500 people. One user with the audio-video enabled and everyone else attending\n    the call (aka one host webinar). However, if you have any specific\n    requirements that require more people joining the same call, please \n    [contact us](https://dyte.io/contact).\n\n    We will support you with your requirements.\n\n- question: What is an organization in Dyte?\n  tags: ['General']\n  answer: |-\n    In Dyte, organization allows you to group all of your company's\n    members. This is a top-level entity to which all members of your group\n    are added. Dyte also considers the organization to be a billing unit.\n\n- question: Where can I find my auth token and room name?\n  tags: ['General']\n  answer: |-\n    The Add Participant API call returns your authentication token.\n\n    See [Add a participant](/api#/operations/addParticipant).\n\n    Room name is generated when you create a meeting. You can get the room\n    name from the developer portal or using REST APIs. For example,\n\n    ![Create Meeting response](/static/faq/create-meeting.png)\n\n    For more information, see [Create a meeting](/api#/operations/createMeeting).\n\n- question: Can I join a meeting from the mobile which is started on the web?\n  tags: ['General']\n  answer: |-\n    Yes, you can.\n\n#\n# Technical FAQs\n#\n\n- question: What are the minimum browser and internet requirements for Dyte?\n  tags: ['Technical']\n  answer: |-\n    Browser Requirements:\n    - Chrome (or Chromium based) 74+\n    - Firefox 78+\n    - Opera 64+\n    - Safari 12+\n    - Edge 79+\n    - iOS (Safari) 12.1+\n    - iOS (Non-Safari) 15+\n\n    Internet Requirements:\n    - Downlink (Minimum) 4 Mbps\n    - Downlink (Optimal) 8 Mbps\n    - Uplink (Minimum) 2 Mbps\n    - Uplink (Optimal) 4 Mbps\n\n- question: What is the difference between a meeting and a session?\n  tags: ['Technical']\n  answer: |-\n    Every Dyte communication channel is referred to as a meeting. A meeting is basically a recurring instance of that communication channel, and an ongoing meeting is referred to as a session.\n\n- question: Which part of the meeting is customizable?\n  tags: ['Technical']\n  answer: |-\n    To match your branding, you can change the logo, colors, font, border,\n    and spacing. Design tokens in UI Kit are used to customize these\n    components.\n\n    Our Core SDKs can also be used to create fully customized video/voice\n    calls for your applications.\n\n- question: Can I record a meeting?\n  tags: ['Technical']\n  answer: |-\n    Yes. See [recording a meeting](/cli/recording).\n\n- question: Where are the meeting recordings stored?\n  tags: ['Technical']\n  answer: |-\n    The meeting recordings are saved in your cloud storage that you set up. The supported cloud providers are AWS S3 bucket, DigitalOcean Spaces, Azure Blob storage, and Google Cloud Storage (GCS) buckets. \n\n    For more information on how to configure storage configs for Dyte Recordings, see [Set storage configuration](https://docs.dyte.io/guides/recording/custom-cloud-storage#set-storage-configuration). \n\n    If you haven't set up your storage configurations, Dyte will keep your recordings for 7 days, after which they will expire and become inaccessible.\n\n- question: Where is Dyte hosted?\n  tags: ['Technical']\n  answer: |-\n    Resiliency is important. Dyte uses multi-cloud and multi-region\n    architecture to provide that seamless experience. Dyte is hosted in\n    Mumbai, Virginia (US East), Singapore, and Frankfurt. You can also read\n    through [this](https://dyte.io/blog/multi-region-resiliency/) blog to understand how Dyte manages a multi-region setup.\n\n- question: Can I self-host Dyte on my own servers?\n  tags: ['Technical']\n  answer: No. Dyte is a Software as a Service (SaaS), fully managed and hosted by Dyte.\n\n- question: What platforms, language, and technologies can I build on using Dyte?\n  tags: ['Technical']\n  answer: |-\n    The following are the supported platforms:\n    - Web: React JS, Angular, Javascript\n    - Mobile: Flutter, Kotlin, Swift, React Native\n    - Desktop: Electron\n\n- question: What backend services can I use with Dyte?\n  tags: ['Technical']\n  answer: |-\n    We have no restrictions on our end. Our APIs are HTTP REST APIs and thus\n    can be called from services written in any language or framework. To\n    find your language-specific backend code, refer to our [API reference](/api)\n\n- question: What are webhooks?\n  tags: ['Technical']\n  answer: |-\n    Webhook service enables you to subscribe to server events. These events\n    allow to trigger specific server actions in response to Dyte meeting\n    events and state changes. \n\n    To access the current list of events that can be used with webhooks, see [Webhook Events List](https://docs.dyte.io/guides/webhooks/webhook-events).\n\n- question: How do I set up and transfer a recording to my storage configuration?\n  tags: ['Technical']\n  answer: |-\n    You can pass an optional object storageConfig in the start recording\n    request, and we will publish the recording directly to your cloud provider\n    once it stops. For more information, see [Publishing a recording to your\n    cloud\n    provider](/guides/recording-your-meetings#publishing-a-recording-to-your-cloud-provider).\n\n- question: How do I create a region-specific room?\n  tags: ['Technical']\n  answer: |-\n    To create a meeting in your preferred region, pass preferredRegion in\n    the body of the createMeeting endpoint. For more information, see [Create a meeting](/api#/operations/createMeeting).\n\n- question:\n    Do we record the entire screen, or can we record specific streams or users\n    regardless of who is on screen?\n  tags: ['Technical']\n  answer: Yes, we record the entire screen rather than individual streams or users.\n\n- question: Can I send an attachment via chat in a live session?\n  tags: ['Technical']\n  answer: |-\n    Yes, you can share media files via chat during a live session. You can\n    send files, pdfs, images, and more. You can also use plugins such as Doc\n    sync to view the shared file as a group and annotate the points that you\n    would want to clarify.\n\n- question: Can I retrieve the chat history of a session?\n  tags: ['Technical']\n  answer: |-\n    You can programmatically retrieve all chat messages of a Dyte session using [Chat Replay API](/guides/export-chat-dump).\n    For more information, see [How to Fetch Chat History of a Dyte Session](https://dyte.io/blog/fetch-chat-history-of-a-dyte-session/)\n    blog.\n\n- question: What is the duration for which Dyte keeps chat records?\n  tags: ['Technical']\n  answer: |-\n    Dyte stores chat records for a period of 7 days, only if you've enabled [Chat Replay API](/guides/export-chat-dump) for your organization. You can download the chat using the `chat_download_url` in CSV format from AWS S3.\n    However, it is important to note that this download link is only valid for 24 hours. In case the link has expired, you can request for a new `chat_download_url` by sending an HTTP GET request to the [Chat Replay API](/guides/export-chat-dump).\n\n- question: |-\n    How do I view session metadata such as start time, end time, number of\n    participants, and so on?\n  tags: ['Technical']\n  answer: |-\n    You can use the [Session API](/api?v=v2#/operations/GetSessionDetails) to\n    fetch the metadata for a given session.\n\n- question: Is there a way for me to write on the screen during the meeting?\n  tags: ['Technical']\n  answer: |-\n    Dyte provides multiple out-of-the-box plugins, for example, YouTube, Miro,\n    WhiteBoard, and so on. You can use WhiteBoard for the collaboration.\n\n- question: Can I add participants when creating a meeting only?\n  tags: ['Technical']\n  answer: No, after creating a meeting, use the [Add Participants\n    API](/api/?v=v2#/operations/add_participant) to add participants to the\n    meeting.\n\n- question: |-\n    Can I pass recording parameters such as codec and storage configurations\n    when creating a meeting or create a template that can be used for all the\n    meetings?\n  tags: ['Technical']\n  answer: |-\n    Yes, codec and storage information can be passed through the recording API.\n    Per recording, you can pass the parameters storageConfig and videoConfig.\n    You can also send an email to [dev@dyte.io](mailto:dev.dyte.io) to set the\n    orgs default configuration.\n\n- question: |-\n    What if our server fails to consume the webhook? When will they be fired\n    again, and are they idempotent?\n  tags: ['Technical']\n  answer: |-\n    For timeouts and 5xx errors, we retry three times with a one-second delay\n    between each retry.\n\n- question: Is it possible to get the total running time of a session from the meeting.ended webhook?\n  tags: ['Technical']\n  answer: |-\n    We send `startedAt` and `endedAt` timestamps in a `meeting.ended` webhook\n    that can be used to compute the session's running time.\n\n- question: What is the expected delay in the livestream, and what happens if it exceeds the expected delay?\n  tags: ['Technical', 'Livestreaming']\n  answer: Typically, there is a 3-5 second lag in all livestreams. If the delay exceeds 10 seconds, users can \"Skip to Live,\" which involves dropping frames in order to synchronize the user's video with the live stream. Once the videos are synced, we stop dropping frames until the time exceeds 10 seconds again.\n\n- question: What is the maximum number of hosts and viewers allowed to participate in a livestream?\n  tags: ['Technical', 'Livestreaming']\n  answer: Dyte's Interactive Livestreaming (ILS) can currently accommodate 10,000 viewers and 100 hosts on a single livestream.\n\n- question: What is the maximum number of users that the livestream can handle, and how does this impact its quality?\n  tags: ['Technical', 'Livestreaming']\n  answer: Currently, our platform can support up to 10,000 viewers in a single livestream, and the quality of the stream is not affected by the number of viewers. However, an increase in the number of users may impact other features such as chats and polls.\n\n- question: How do I manage viewer permissions for a livestream?\n  tags: ['Technical', 'Livestreaming']\n  answer: You can manage the permissions for a viewer using presets. For livestreaming, you must create two presets. One preset is for the livestreaming host, while the other is for the livestreaming viewer. For details, see Create [Presets](https://docs.dyte.io/guides/livestream/getting-started-with-livestreaming#step-2-create-presets).\n\n- question: Can I join the livestream as a host in the middle of the livestream?\n  tags: ['Technical', 'Livestreaming']\n  answer: Yes, you can. However, ensure that you've the required preset permissions. For details, see Create [Presets](https://docs.dyte.io/guides/livestream/getting-started-with-livestreaming#step-2-create-presets).\n\n- question: What permissions does a host require to start a livestream?\n  tags: ['Technical', 'Livestreaming']\n  answer: The host requires certain host controls such as the ability to Kick Participants, Mute Audio, Mute Video, and Pin Participant, as well as media permissions like Start Livestream and Admit or remove participants from the livestream. For details, see Create [Presets](https://docs.dyte.io/guides/livestream/getting-started-with-livestreaming#step-2-create-presets).\n\n- question: How much latency can be expected with Dyte's live streams?\n  tags: ['Technical', 'Livestreaming']\n  answer: Dyte provides live streams with a low latency of only 3 to 6 seconds.\n\n- question: Is it necessary to generate new stream keys for each live event?\n  tags: ['Technical', 'Livestreaming']\n  answer: |-\n    No, stream keys can be reused multiple times. However, it's important to keep the stream key private as it grants access to the live stream. Therefore, users should be informed to keep their stream key secure.\n\n    For more information, see [Livestreaming any Video via RTMP](https://docs.dyte.io/guides/livestream/livestream-any-rtmp).\n\n- question: |-\n    I'm encountering audio and video problems while developing a live video\n    solution for my app. I'm using Chrome to test the microphone and camera.\n    What could be causing this?\n  tags: ['Technical']\n  answer: |-\n    The issue could be due to the security features implemented by the\n    browser. Most of the standard browsers with best security practices restrict\n    many features to HTTPS instead of HTTP. You can read about the details of\n    the features that are restricted in Chrome\n    [here](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins).\n\n\n    To troubleshoot, we recommend trying the steps mentioned in this\n    [document](https://web.dev/how-to-use-local-https/). If this does not\n    resolve the issue, you can try using [ngrok](https://ngrok.com/) as an\n    alternative solution.\n\n\n    To use ngrok, download the software and run it with the local port\n    specified. This generates an HTTPS URL that you can use for testing the\n    microphone and camera.\n\n    1. Download ngrok.\n\n    2. Run the command 'ngrok http PUT_LOCAL_PORT_HERE'.\n\n    3. Use the HTTPS URL to test your microphone and camera.\n\n#\n# Pricing FAQs\n#\n\n- question: How do I make a payment?\n  tags: ['Pricing']\n  answer: |-\n    Once Dyte has generated an invoice, you can pay using a link, a saved card, or do a direct bank transfer.\n");var h=n(31984);function g({className:e=""}){return a.createElement("section",{className:"px-4 pt-16"},a.createElement("div",{className:(0,i.Z)("mx-auto max-w-7xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-24 lg:py-20",e)},a.createElement("h2",{className:"mb-12 text-center lg:text-3xl"},"How can we help you today?"),a.createElement("div",{className:"grid grid-cols-1 gap-4 lg:grid-cols-3"},a.createElement("div",{className:"rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900"},a.createElement("img",{src:"/static/landing-page/calendar.svg",alt:"Book a demo",width:"48",height:"48"}),a.createElement("h3",{className:"my-3"},"Book a Demo"),a.createElement("p",{className:"text-zinc-600 dark:text-zinc-400"},"Contact us for a demo. We are looking forward to connecting with you."),a.createElement(h.Z,{href:"https://dyte.io/schedule-demo",className:"text-primary dark:text-primary-100"},"Schedule a Call \u2192")),a.createElement("div",{className:"rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900"},a.createElement("img",{src:"/static/landing-page/customer.svg",alt:"Support",width:"48",height:"48"}),a.createElement("h3",{className:"my-3"},"Support"),a.createElement("p",{className:"text-zinc-600 dark:text-zinc-400"},"Dyte's expert support team is excited to help. Connect for dedicated 1:1 support!"),a.createElement(h.Z,{href:"https://dyte.io/contact",className:"text-primary dark:text-primary-100"},"Contact Us \u2192")),a.createElement("div",{className:"rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900"},a.createElement("img",{src:"/static/landing-page/chat.svg",alt:"FAQs",width:"48",height:"48"}),a.createElement("h3",{className:"my-3"},"FAQs"),a.createElement("p",{className:"text-zinc-600 dark:text-zinc-400"},"Browse through our FAQs to find answers to commonly asked questions."),a.createElement(h.Z,{href:"/faq",className:"text-primary dark:text-primary-100"},"View FAQs \u2192")))))}const p=u.reduce(((e,t)=>{if(!t.tags)return e;for(const n of t.tags)e.includes(n)||e.push(n);return e}),[]);function y({title:e,children:t,open:n,onOpen:o,onClose:s}){const l=(0,d.o)(e),m=l+"-panel",u=()=>{n?(s(),history.pushState({},"","")):(o(),history.pushState({},"","#"+l))};return a.createElement("div",{id:"parent-"+l,className:(0,i.Z)("dyte-accordion cursor-pointer border-0 border-solid last-of-type:border-0",n?"mb-4 rounded-2xl bg-secondary-800":"border-b border-zinc-300 dark:border-zinc-700"),role:"tab","aria-expanded":n,"aria-controls":m},a.createElement("div",{role:"heading",className:(0,i.Z)("flex w-full cursor-pointer select-none items-center justify-between gap-4 border-0 border-solid bg-transparent p-6",n&&"!pb-0 text-primary dark:text-primary-100"),tabIndex:0,onClick:u,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),u())},id:l},a.createElement("h3",{id:l,className:"text-lg font-semibold"},e),a.createElement("div",{className:"text-zinc-300"},a.createElement(r.Z,{className:(0,i.Z)("h-4 w-4 text-zinc-500 dark:text-zinc-300",!n&&"hidden")}),a.createElement(c.Z,{className:(0,i.Z)("h-4 w-4 text-primary-100",n?"hidden":"block")}))),a.createElement("div",{role:"region",id:m,"aria-labelledby":l,className:(0,i.Z)("accordion-content p-6 !pt-0",n?"block":"hidden")},t))}function w(){const[e,t]=(0,a.useState)(""),[n,r]=(0,a.useState)(""),[c,h]=(0,a.useState)("All");(0,a.useEffect)((()=>{if("undefined"==typeof window)return;const e=window.location.hash.substring(1);var n;""!==e&&(t(e),null===(n=document.querySelector("#parent-"+e))||void 0===n||n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}))}),[]);const w=(0,a.useMemo)((()=>""===n.trim()?"All"===c?u:u.filter((e=>e.tags.includes(c))):u.filter((e=>(e.question+" "+e.answer+" "+e.tags.join(" ")).toLowerCase().includes(n.toLowerCase())))),[c,n]);function f({tag:e}){return a.createElement("button",{className:(0,i.Z)("cursor-pointer rounded-md border-none px-3.5 py-1.5 font-jakarta text-sm font-medium",c===e?"bg-primary text-white":"bg-secondary-800 text-black dark:text-white"),"data-tag":e,onClick:()=>h(e)},e)}return a.createElement(o.Z,{wrapperClassName:"faq-page bg-secondary-1000",noFooter:!0},a.createElement("section",{className:"noise-bg px-6 py-24"},a.createElement("div",{className:"mx-auto flex max-w-7xl flex-col place-items-center justify-center"},a.createElement("div",{className:"font-semibold text-zinc-800 dark:text-zinc-300"},"Frequently Asked Questions"),a.createElement("div",{className:"my-8 text-center text-4xl font-bold leading-tight text-zinc-800 dark:text-zinc-100 lg:text-6xl"},a.createElement("div",null,"Any questions?"),a.createElement("div",null,"We got you.")),a.createElement("div",{className:"relative flex w-full max-w-md items-center text-zinc-700 dark:text-white"},a.createElement(l.Z,{className:"z-10 h-5 w-5 translate-x-1.5"}),a.createElement("input",{type:"text",className:"-ml-5 h-10 flex-1 rounded-md border border-solid border-zinc-200 bg-white px-3 pl-8 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-secondary-1000 dark:text-zinc-200",placeholder:"Search your query...(sdk, api, write code)",value:n,onInput:e=>r(e.currentTarget.value)})))),a.createElement("section",{className:"mb-20 px-6 py-12"},a.createElement("div",{className:"mx-auto max-w-7xl"},""!==n.trim()?0===w.length?a.createElement("div",{className:"mb-12 text-2xl font-semibold"},"\ud83d\ude22 Sorry, no results matched your search terms"):a.createElement("div",{className:"mb-12 text-xl font-semibold"},"\ud83d\ude4c Showing ",w.length,' results for "',n,'"'):a.createElement("div",{className:"inline-flex items-center gap-2 rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800"},a.createElement(f,{tag:"All"}),p.map((e=>a.createElement(f,{tag:e,key:e})))),a.createElement("div",{className:"mt-12 flex flex-col gap-3"},w.map((n=>{const o=(0,d.o)(n.question);return a.createElement(y,{title:n.question,tags:n.tags||[],key:n.question,open:e===o,onOpen:()=>{t(o)},onClose:()=>{t("")}},a.createElement(m.D,null,n.answer))}))))),a.createElement(g,{className:"relative z-10 border border-solid border-secondary-700"}),a.createElement(s.Z,{className:"-mt-20 pt-32 pb-12"}))}}}]);