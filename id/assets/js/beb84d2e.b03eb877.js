"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3888],{9613:(e,a,n)=>{n.d(a,{Zo:()=>k,kt:()=>c});var t=n(9496);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},k=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,m=u["".concat(p,".").concat(c)]||u[c]||d[c]||r;return n?t.createElement(m,o(o({ref:a},k),{},{components:n})):t.createElement(m,o({ref:a},k))}));function c(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9119:(e,a,n)=>{n.r(a),n.d(a,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>k,default:()=>u});var t=n(9518),i=n(7344),r=(n(9496),n(9613)),o=["components"],l={id:"workspaces",title:"Workspace (ruang kerja)"},p=void 0,s={unversionedId:"workspaces",id:"version-5.x/workspaces",title:"Workspace (ruang kerja)",description:"pnpm memiliki dukungan bawaan untuk monorepositori (repositori multi paket, repositori multi proyek, atau repositori monolitik). Anda dapat membuat workspace untuk menyatukan beberapa proyek di dalam satu repositori.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-5.x/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/id/5.x/workspaces",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"5.x",frontMatter:{id:"workspaces",title:"Workspace (ruang kerja)"},sidebar:"version-5.x/docs",previous:{title:"pnpmfile.js",permalink:"/id/5.x/pnpmfile"},next:{title:"Aliases",permalink:"/id/5.x/aliases"}},k=[{value:"Protokol workspace (workspace:)",id:"protokol-workspace-workspace",children:[{value:"Merujuk paket workspace melalui alias",id:"merujuk-paket-workspace-melalui-alias",children:[],level:3},{value:"Merujuk paket workspace melalui jalur relatifnya",id:"merujuk-paket-workspace-melalui-jalur-relatifnya",children:[],level:3},{value:"Memublikasikan paket workspace",id:"memublikasikan-paket-workspace",children:[],level:3}],level:2},{value:"Release workflow",id:"release-workflow",children:[],level:2},{value:"Options",id:"options",children:[{value:"link-workspace-packages",id:"link-workspace-packages",children:[],level:3},{value:"prefer-workspace-packages",id:"prefer-workspace-packages",children:[],level:3},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",children:[],level:3},{value:"save-workspace-protocol",id:"save-workspace-protocol",children:[],level:3}],level:2}],d={toc:k};function u(e){var a=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"pnpm memiliki dukungan bawaan untuk monorepositori (repositori multi paket, repositori multi proyek, atau repositori monolitik). Anda dapat membuat workspace untuk menyatukan beberapa proyek di dalam satu repositori."),(0,r.kt)("p",null,"Sebuah workspace haruslah memiliki ",(0,r.kt)("a",{parentName:"p",href:"/id/5.x/pnpm-workspace_yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," di dalam folder akarnya. Sebuah workspace juga mungkin perlu memiliki ",(0,r.kt)("a",{parentName:"p",href:"/id/5.x/npmrc"},(0,r.kt)("inlineCode",{parentName:"a"},".npmrc"))," di dalam folder akarnya."),(0,r.kt)("h2",{id:"protokol-workspace-workspace"},"Protokol workspace (workspace:)"),(0,r.kt)("p",null,"Supported since v3.7.0."),(0,r.kt)("p",null,"Secara asali, pnpm akan menautkan paket dari workspace jika paket tersedia cocok dengan rentang yang dideklarasikan. Misalnya, ",(0,r.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," akan ditautkan ke ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," jika ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," memiliki ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," dalam dependensinya. Namun, jika ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," memiliki ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," dalam dependensi dan ",(0,r.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," tidak ada di workspace, maka ",(0,r.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," akan diinstal dari registri. Perilaku ini memperkenalkan beberapa ketidakpastian."),(0,r.kt)("p",null,"Luckily, pnpm supports the ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol (the same as in Yarn v2). Ketika protokol ini digunakan, pnpm akan menolak untuk menyelesaikan apa pun selain paket workspace lokal. Jadi, jika Anda menyetel ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),", kali ini instalasi akan gagal karena ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," tidak ada di workspace."),(0,r.kt)("p",null,"Protokol ini sangat berguna ketika opsi ",(0,r.kt)("a",{parentName:"p",href:"#link-workspace-packages"},"link-workspace-packages")," disetel ke ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". Dalam hal ini, pnpm hanya akan menautkan paket dari workspace jika protokol ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:")," digunakan."),(0,r.kt)("h3",{id:"merujuk-paket-workspace-melalui-alias"},"Merujuk paket workspace melalui alias"),(0,r.kt)("p",null,"Added in 5.12.0"),(0,r.kt)("p",null,"Katakanlah Anda memiliki paket di workspace bernama ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),". Biasanya, Anda akan mereferensikannya sebagai ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"."),(0,r.kt)("p",null,"Jika Anda ingin menggunakan alias yang berbeda, sintaks berikut juga akan berfungsi: ",(0,r.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"."),(0,r.kt)("p",null,"Sebelum dipublikasikan, alias dikonversi ke dependensi alias biasa. Contoh di atas akan menjadi: ",(0,r.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"."),(0,r.kt)("h3",{id:"merujuk-paket-workspace-melalui-jalur-relatifnya"},"Merujuk paket workspace melalui jalur relatifnya"),(0,r.kt)("p",null,"Added in 5.12.0"),(0,r.kt)("p",null,"Di workspace dengan 2 paket:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bar")," mungkin memiliki ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," dalam dependensinya yang dinyatakan sebagai ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),". Sebelum dipublikasikan, spesifikasi ini dikonversi ke spesifikasi versi reguler yang didukung oleh semua pengelola paket."),(0,r.kt)("h3",{id:"memublikasikan-paket-workspace"},"Memublikasikan paket workspace"),(0,r.kt)("p",null,"Ketika paket workspace dikemas ke dalam sebuah arsip (baik itu melalui ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm pack")," atau salah satu perintah terbitkan seperti ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"), kami secara dinamis menggantikan setiap dependensi ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:")," dengan:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),")"),(0,r.kt)("li",{parentName:"ul"},"The associated semver range (for any other range type)")),(0,r.kt)("p",null,"So for example, if we have a workspace package at version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:^1.2.3"\n    }\n}\n')),(0,r.kt)("p",null,"Will be transformed into:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "^1.2.3"\n    }\n}\n')),(0,r.kt)("p",null,"This feature allows you to depend on your local workspace packages while still being able to publish the resulting packages to the remote registry without needing intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefitting from the guarantees semver offers."),(0,r.kt)("h2",{id:"release-workflow"},"Release workflow"),(0,r.kt)("p",null,"Versioning packages inside a workspace is a complex task and pnpm currently does not provide a built-in solution for it. However, there are 2 well tested tools that handle versioning and support pnpm:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"changesets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,r.kt)("p",null,"For how to set up a repository using Rush, read ",(0,r.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"this page"),"."),(0,r.kt)("p",null,"For using Changesets with pnpm, read ",(0,r.kt)("a",{parentName:"p",href:"/id/5.x/using-changesets"},"this guide"),"."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),(0,r.kt)("p",null,"Added in: v2.14.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"true"),", ",(0,r.kt)("strong",{parentName:"li"},"false"),", ",(0,r.kt)("strong",{parentName:"li"},"deep"))),(0,r.kt)("p",null,"If this is enabled, locally available packages are linked to ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," instead of being downloaded from the registry. This is very convenient in a monorepo. If you need local packages to also be linked to subdependencies, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"deep")," setting (since v5)."),(0,r.kt)("p",null,"Else, packages are downloaded and installed from the registry. However, workspace packages can still be linked by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:")," range protocol."),(0,r.kt)("h3",{id:"prefer-workspace-packages"},"prefer-workspace-packages"),(0,r.kt)("p",null,"Added in: v5.13.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If this is enabled, local packages from the workspace are preferred over packages from the registry, even if there is a newer version of the package in the registry."),(0,r.kt)("p",null,"This setting is only useful if the workspace doesn't use ",(0,r.kt)("inlineCode",{parentName:"p"},"save-workspace-protocol"),"."),(0,r.kt)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),(0,r.kt)("p",null,"Added in: v2.17.0 as ",(0,r.kt)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If this is enabled, pnpm creates a single ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file in the root of the workspace. This also means that all dependencies of workspace packages will be in a single ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," (and get symlinked to their package ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," folder for Node's module resolution)."),(0,r.kt)("p",null,"Advantages of this option:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"every dependency is a singleton"),(0,r.kt)("li",{parentName:"ul"},"faster installations in a monorepo"),(0,r.kt)("li",{parentName:"ul"},"fewer changes in code reviews as they are all in one file")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Even though all the dependencies will be hard linked into the root ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", packages will have access only to those dependencies that are declared in their ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", so pnpm's strictness is preserved. This is a result of the aforementioned symbolic linking."))),(0,r.kt)("h3",{id:"save-workspace-protocol"},"save-workspace-protocol"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If this is enabled, new dependencies will be added with the workspace protocol IF (and only if) they are present in the workspace."),(0,r.kt)("p",null,"You might want to change this setting to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if the tooling in your repository does not understand the workspace protocol (and ideally submit a PR to your tooling to get it added in the future)."))}u.isMDXComponent=!0}}]);