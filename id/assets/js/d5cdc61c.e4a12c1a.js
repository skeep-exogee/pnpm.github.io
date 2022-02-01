"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8667],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),f=i,v=s["".concat(p,".").concat(f)]||s[f]||u[f]||l;return n?r.createElement(v,a(a({ref:t},d),{},{components:n})):r.createElement(v,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1763:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>s});var r=n(9518),i=n(7344),l=(n(9496),n(9613)),a=["components"],o={id:"why",title:"pnpm why"},p=void 0,c={unversionedId:"cli/why",id:"version-6.x/cli/why",title:"pnpm why",description:"Menampilkan semua paket yang bergantung pada paket tertentu.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-6.x/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/id/cli/why",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"6.x",frontMatter:{id:"why",title:"pnpm why"},sidebar:"version-6.x/docs",previous:{title:"pnpm outdated",permalink:"/id/cli/outdated"},next:{title:"pnpm run",permalink:"/id/cli/run"}},d=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--json",id:"--json",children:[],level:3},{value:"--long",id:"--long",children:[],level:3},{value:"--parseable",id:"--parseable",children:[],level:3},{value:"--global",id:"--global",children:[],level:3},{value:"--prod, -P",id:"--prod--p",children:[],level:3},{value:"--dev, -D",id:"--dev--d",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],u={toc:d};function s(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Menampilkan semua paket yang bergantung pada paket tertentu."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Show the dependency tree for the specified package on every package in subdirectories or on every workspace package when executed inside a workspace."),(0,l.kt)("h3",{id:"--json"},"--json"),(0,l.kt)("p",null,"Added in: 3.7.0"),(0,l.kt)("p",null,"Show information in JSON format."),(0,l.kt)("h3",{id:"--long"},"--long"),(0,l.kt)("p",null,"Show verbose output."),(0,l.kt)("h3",{id:"--parseable"},"--parseable"),(0,l.kt)("p",null,"Show parseable output instead of tree view."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"List packages in the global install directory instead of in the current project."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Only display the dependency tree for packages in ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Only display the dependency tree for packages in ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/id/filtering"},"Read more about filtering.")))}s.isMDXComponent=!0}}]);