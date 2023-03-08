"use strict";(self.webpackChunkdigital_travellers=self.webpackChunkdigital_travellers||[]).push([[473],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),p=s(n),c=r,k=p["".concat(d,".").concat(c)]||p[c]||u[c]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[p]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6082:(t,e,n)=>{n.d(e,{VY:()=>i,H1:()=>a.H1,H2:()=>a.H2,H3:()=>a.H3,H4:()=>a.H4,H5:()=>a.H5,sr:()=>a.sr,rU:()=>a.rU,xv:()=>a.xv});var a=n(6554),r=n(7294);const l=["Where travel and documentation meet innovation!","Discover the future of travel documentation!","Step into the future of seamless travel docs!","Don't let documentation hold you back from travel!"],i=()=>r.createElement(a.W2,null,r.createElement(a.H1,{content:l[Math.floor(Math.random()*l.length)]}),r.createElement(a.xv,{content:r.createElement(r.Fragment,null,"Welcome to our docs! Feel free to contribute or open an issue in our"," ",r.createElement(a.rU,{target:"_blank",href:"https://github.com/digital-travellers/docs/issues"},"repo"),"!")}),r.createElement(a.H3,{content:"\ud83d\udc7e Start point"}),r.createElement(a.sr,{items:[{title:"Working agreements",description:"Our organization working agreements!",to:"/docs/working-agreements"},{title:"Modifying the docs",description:"Want to change anything? Read this to have a clearer idea!",to:"/docs/contribution"}]}),r.createElement(a.H3,{content:"\ud83d\uddc4\ufe0f Repositories"}),r.createElement(a.sr,{items:[{title:"Documentation",description:"Documentation about the actual documentation",href:"https://github.com/digital-travellers/docs"},{title:"Frontend - Web",description:"Repository for our frontend application (TBD)",href:"https://github.com/digital-travellers"},{title:"Backend - X",description:"Repository for our X backed application (TBD)",href:"https://github.com/digital-travellers"},{title:"Backend - Y",description:"Repository for our Y backed application (TBD)",href:"https://github.com/digital-travellers"}]}))},6554:(t,e,n)=>{n.d(e,{W2:()=>r,H1:()=>o,H2:()=>d,H3:()=>s,H4:()=>m,H5:()=>p,sr:()=>g,rU:()=>k,xv:()=>h});var a=n(7294);const r=t=>{let{children:e}=t;return a.createElement("div",{className:"container mx-auto"},e)};var l=n(2949);const i=()=>{const{colorMode:t}=(0,l.I)();return"dark"===t?"text-neutral-100":"text-neutral-700"},o=t=>{let{id:e,content:n}=t;const r=i();return a.createElement("h1",{id:e,className:`mb-4 text-4xl font-bold ${r}`},n)},d=t=>{let{id:e,content:n}=t;const r=i();return a.createElement("h2",{id:e,className:`mb-4 text-3xl font-bold ${r}`},n)},s=t=>{let{id:e,content:n}=t;const r=i();return a.createElement("h3",{id:e,className:`mb-4 text-2xl font-semibold ${r}`},n)},m=t=>{let{id:e,content:n}=t;const r=i();return a.createElement("h4",{id:e,className:`mb-2 text-xl font-semibold ${r}`},n)},p=t=>{let{id:e,content:n}=t;const r=i();return a.createElement("h5",{id:e,className:`mb-2 text-lg font-semibold ${r}`},n)};var u=n(7462),c=n(9960);const k=t=>{let{isTitle:e,...n}=t;return a.createElement(c.Z,(0,u.Z)({},n,{className:`hover:text-${e?"gray":"green"}-700${e?" hover:decoration-wavy":""}`,activeClassName:`hover:text-${e?"gray":"green"}-700${e?" hover:decoration-wavy":""}`}))},h=t=>{let{content:e,children:n,noMargin:r}=t;return a.createElement("p",{className:"text-neutral-700 "+(r?"!m-0":"")},e??n)},g=t=>{let{items:e,withSidebar:n}=t;return e.length?a.createElement("div",{className:`grid grid-cols-1 gap-3 lg:grid-cols-${n?"2":"3"} lg:gap-8 md:grid-cols-2 md:gap-6 mb-8`},e.map((t=>{let{title:e,description:n,to:r,href:l}=t;return a.createElement("div",{id:r,className:"py-3 px-4 rounded-lg border border-gray-200 border-solid shadow-lg shadow-gray-100 hover:shadow-gray-200 hover:transition-shadow ease-in-out duration-200"},a.createElement(k,{to:r,href:l,isTitle:!0},a.createElement(m,{content:e})),n?a.createElement(h,{content:n}):null)}))):null}},1500:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),l=n(6082);const i={title:"Contributing to the docs",hide_title:!0,slug:"/contribution"},o=void 0,d={unversionedId:"team/contribution",id:"team/contribution",title:"Contributing to the docs",description:"The documentation is written using the docusaurus, a static-site generator",source:"@site/docs/team/contribution.mdx",sourceDirName:"team",slug:"/contribution",permalink:"/rts-docs/docs/contribution",draft:!1,editUrl:"https://github.com/digital-travellers/docs/tree/main/packages/create-docusaurus/templates/shared/docs/team/contribution.mdx",tags:[],version:"current",frontMatter:{title:"Contributing to the docs",hide_title:!0,slug:"/contribution"},sidebar:"sidebar",previous:{title:"Working agreements",permalink:"/rts-docs/docs/working-agreements"},next:{title:"Repositories",permalink:"/rts-docs/docs/repositories"}},s={},m=[],p={toc:m},u="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.H1,{content:"Contributing to the documentation",mdxType:"H1"}),(0,r.kt)(l.xv,{mdxType:"Text"},"The documentation is written using the docusaurus, a static-site generator that uses React under the hood (while allowing us to use React aswell). No only that, but has many benefits and utilities so that teams can develop proper documentation."),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"info"},"  ",(0,r.kt)(l.xv,{mdxType:"Text"},"If you haven't heard about docusaurus, make sure to give a read to their docs: ",(0,r.kt)(l.rU,{href:"https://www.docusaurus.io",mdxType:"Link"},"Docusaurus docs"))),(0,r.kt)(l.H2,{content:"React and markdown",mdxType:"H2"}),(0,r.kt)(l.H3,{content:"Component based docs",mdxType:"H3"}),(0,r.kt)(l.xv,{mdxType:"Text"},"A good thing about docusaurus is that allows you to use React inside Markdown (in ",(0,r.kt)("code",null,".mdx")," files). This allows us to have a more flexible documentation, but it is also a challenge for use to keep the style equal on each page.",(0,r.kt)("br",null)),(0,r.kt)("br",null),(0,r.kt)(l.xv,{mdxType:"Text"},"With this in mind, the structure of this repository has been set so that documentation pages are written using the little system design of components that resides inside ",(0,r.kt)("code",null,"@src/components/shared"),". The goal of this folder is to store the components that are reusable all around the documentation, such as the headers, this text that you are reading and so on. Also, the goal is that it has a similar look to what the front-end application will look, in order to have a more unified style. At the same time, it is important that, whenever a member modifies a component or creates one, such changes are reflected in the documentation."),(0,r.kt)("br",null),(0,r.kt)(l.xv,{mdxType:"Text"},"In order to style the components, this project uses TailwindCSS, which lighter and efficient way of using CSS. You can find more information in their"," ",(0,r.kt)(l.rU,{href:"https://www.tailwind.css/docs",mdxType:"Link"},"documentation"),"."),(0,r.kt)(l.H3,{content:"Component API",mdxType:"H3"}),(0,r.kt)("admonition",{type:"tip"},"  ",(0,r.kt)(l.xv,{mdxType:"Text"},"Save the link so that you know where to find the API of the different components that can be used.")),(0,r.kt)(l.H4,{content:"Container",mdxType:"H4"}),(0,r.kt)(l.xv,{mdxType:"Text"},"Used to display content in a limited responsive page, mostly used in pages, not in ",(0,r.kt)("code",null,"doc")," filetypes."),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"children")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)(l.H4,{content:"Headers",mdxType:"H4"}),(0,r.kt)(l.xv,{mdxType:"Text"},"Set of headers that share the same props. From ",(0,r.kt)("code",null,"H1")," to",(0,r.kt)("code",null,"H5"),", which correspond to the ",(0,r.kt)("code",null,"h1")," to ",(0,r.kt)("code",null,"h5"),"html headers."),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content")),(0,r.kt)("td",{parentName:"tr",align:null},"Text displayed as the header"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)(l.H4,{content:"ItemList",mdxType:"H4"}),(0,r.kt)(l.xv,{mdxType:"Text"},"List of items that are used to display a set of elements."),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"items")),(0,r.kt)("td",{parentName:"tr",align:null},"List of items to display"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Item[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"required"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"withSidebar")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the list is displayed alongside the sidebar"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)(l.xv,{mdxType:"Text"},"The ",(0,r.kt)("code",null,"Item")," type has the following structure:"),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"Title of the item"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"required"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the item. Not displayed if ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:null},"Relative URL passed to the ",(0,r.kt)("inlineCode",{parentName:"td"},"Link")," component. Should not exist if ",(0,r.kt)("inlineCode",{parentName:"td"},"href")," is defined"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \u23ae never")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"href")),(0,r.kt)("td",{parentName:"tr",align:null},"External URL passed to the ",(0,r.kt)("inlineCode",{parentName:"td"},"Link")," component. Should not exist if ",(0,r.kt)("inlineCode",{parentName:"td"},"to")," is defined"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \u23ae never")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)(l.H4,{content:"Link",mdxType:"H4"}),(0,r.kt)(l.xv,{mdxType:"Text"},"Wrapper around the ",(0,r.kt)("code",null,"Link")," from docusaurus. It has the same props as the ",(0,r.kt)("code",null,"@docusaurus/Link"),"."),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isTitle")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds title styling"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)(l.xv,{mdxType:"Text"},"Make sure you read through the ",(0,r.kt)(l.rU,{href:"https://www.docusaurus.io/docs/docusaurus-core#link",mdxType:"Link"},(0,r.kt)("code",null,"@docusaurus/Link"))," documentation.")),(0,r.kt)(l.H4,{content:"Text",mdxType:"H4"}),(0,r.kt)(l.xv,{mdxType:"Text"},"Component to display text in following the docs styles. Content can be passed through the ",(0,r.kt)("code",null,"content")," property or as a ",(0,r.kt)("code",null,"children"),", which allows more flexibility on what to display."),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content")),(0,r.kt)("td",{parentName:"tr",align:null},"String to be displayed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"children")),(0,r.kt)("td",{parentName:"tr",align:null},"Flexible alternative to ",(0,r.kt)("inlineCode",{parentName:"td"},"content")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"noMargin")),(0,r.kt)("td",{parentName:"tr",align:null},"Disabled the ",(0,r.kt)("inlineCode",{parentName:"td"},"margin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))))}c.isMDXComponent=!0}}]);