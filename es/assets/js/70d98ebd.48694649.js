"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2213],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2507:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>p,default:()=>m});var r=t(9518),o=t(7344),a=(t(9496),t(9613)),i=["components"],l={id:"git",title:"Trabajando con Git"},c=void 0,s={unversionedId:"git",id:"version-5.x/git",title:"Trabajando con Git",description:"Archivos de bloqueo",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/git.md",sourceDirName:".",slug:"/git",permalink:"/es/5.x/git",editUrl:"https://crowdin.com/project/pnpm/es",tags:[],version:"5.x",frontMatter:{id:"git",title:"Trabajando con Git"},sidebar:"version-5.x/docs",previous:{title:"Only allow pnpm",permalink:"/es/5.x/only-allow-pnpm"},next:{title:"Logotipos",permalink:"/es/5.x/logos"}},p=[{value:"Archivos de bloqueo",id:"archivos-de-bloqueo",children:[{value:"Combinar conflictos",id:"combinar-conflictos",children:[],level:3}],level:2}],u={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"archivos-de-bloqueo"},"Archivos de bloqueo"),(0,a.kt)("p",null,"Siempre debes hacer commit del archivo de bloqueo (",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"). Esto se debe a una multitud de razones, la principal de las cuales es:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"habilita una instalaci\xf3n m\xe1s r\xe1pida para CI y entornos de producci\xf3n, ya que es capaz de omitir la resoluci\xf3n de paquetes"),(0,a.kt)("li",{parentName:"ul"},"impone instalaciones y resoluciones coherentes entre desarrollo y producci\xf3n, lo que significa que los paquetes utilizados en prueba y producci\xf3n ser\xe1n exactamente los mismos que cuando desarroll\xf3 su proyecto")),(0,a.kt)("h3",{id:"combinar-conflictos"},"Combinar conflictos"),(0,a.kt)("p",null,"pnpm puede resolver autom\xe1ticamente los conflictos de combinaci\xf3n en ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),". Si tiene conflictos, simplemente ejecute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," y confirme los cambios."),(0,a.kt)("p",null,"Tenga cuidado, sin embargo. Se recomienda que revise los cambios antes de realizar un commit, porque no podemos garantizar que elegir\xe1 el encabezado correcto - en su lugar se compila con los archivos de bloqueo m\xe1s actualizados, lo que es ideal en la mayor\xeda los casos."))}m.isMDXComponent=!0}}]);