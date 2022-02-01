"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5459],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},415:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>d});var r=t(9518),o=t(7344),i=(t(9496),t(9613)),a=["components"],s={id:"limitations",title:"Limitaciones"},l=void 0,p={unversionedId:"limitations",id:"version-6.x/limitations",title:"Limitaciones",description:"1. npm-shrinkwrap.json y package-lock.json se ignoran. A diferencia de pnpm, npm puede instalar el mismo nombre@versi\xf3n varias veces y con diferentes conjuntos de dependencias. El archivo de bloqueo de npm est\xe1 dise\xf1ado para reflejar la estructura plana de node_modules sin embargo, ya que pnpm crea una estructura aislada por defecto, no puede respetar el formato de archivo de bloqueo de npm. Vea pnpm import si a pesar de todo desea convertir un archivo de bloqueo al formato de pnpm.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.x/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/es/limitations",editUrl:"https://crowdin.com/project/pnpm/es",tags:[],version:"6.x",frontMatter:{id:"limitations",title:"Limitaciones"},sidebar:"version-6.x/docs",previous:{title:"Logotipos",permalink:"/es/logos"},next:{title:"Symlinked `node_modules` structure",permalink:"/es/symlinked-node-modules-structure"}},c=[],u={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," y ",(0,i.kt)("inlineCode",{parentName:"li"},"package-lock.json")," se ignoran. A diferencia de pnpm, npm puede instalar el mismo ",(0,i.kt)("inlineCode",{parentName:"li"},"nombre@versi\xf3n")," varias veces y con diferentes conjuntos de dependencias. El archivo de bloqueo de npm est\xe1 dise\xf1ado para reflejar la estructura plana de ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," sin embargo, ya que pnpm crea una estructura aislada por defecto, no puede respetar el formato de archivo de bloqueo de npm. Vea ",(0,i.kt)("a",{parentName:"li",href:"/es/cli/import"},"pnpm import")," si a pesar de todo desea convertir un archivo de bloqueo al formato de pnpm."),(0,i.kt)("li",{parentName:"ol"},"Binstubs (files in ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),") are always shell files, not symlinks to JS files. The shell files are created to help pluggable CLI apps in finding their plugins in the unusual ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," structure. This is very rarely an issue and if you expect the file to be a JS file, reference the original file directly instead, as described in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),".")),(0,i.kt)("p",null,"\xbfTienes una idea para solucionar estos problemas? ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Comp\xe1rtelos.")))}d.isMDXComponent=!0}}]);