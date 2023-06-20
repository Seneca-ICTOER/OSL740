"use strict";(self.webpackChunkOSL740=self.webpackChunkOSL740||[]).push([[27],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2294:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var n=a(3117),r=(a(7294),a(3905));const i={id:"bash-shell-tips",title:"Bash Shell Tips",sidebar_position:5,description:"Bash Shell Tips"},s="Bash Shell Tips",o={unversionedId:"C-ExtraResources/bash-shell-tips",id:"C-ExtraResources/bash-shell-tips",title:"Bash Shell Tips",description:"Bash Shell Tips",source:"@site/docs/C-ExtraResources/bash-shell-tips.md",sourceDirName:"C-ExtraResources",slug:"/C-ExtraResources/bash-shell-tips",permalink:"/OSL740/C-ExtraResources/bash-shell-tips",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OSL740/tree/main/docs/C-ExtraResources/bash-shell-tips.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"bash-shell-tips",title:"Bash Shell Tips",sidebar_position:5,description:"Bash Shell Tips"},sidebar:"courseNotesSidebar",previous:{title:"Bash Shell Reference Guide",permalink:"/OSL740/C-ExtraResources/bash-shell-reference-guide"},next:{title:"Bash Shell Scripting Tips",permalink:"/OSL740/C-ExtraResources/bash-shell-scripting-tips"}},l={},p=[{value:"For Lab 2 - Investigation 3 Part 3",id:"for-lab-2---investigation-3-part-3",level:2},{value:"Data Input",id:"data-input",level:3},{value:"Mathematical Expressions",id:"mathematical-expressions",level:3},{value:"For Lab 3 - Investigation 3 Part 3",id:"for-lab-3---investigation-3-part-3",level:2},{value:"Using sed to Manipulate Text",id:"using-sed-to-manipulate-text",level:3}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bash-shell-tips"},"Bash Shell Tips"),(0,r.kt)("h2",{id:"for-lab-2---investigation-3-part-3"},"For Lab 2 - Investigation 3 Part 3"),(0,r.kt)("h3",{id:"data-input"},"Data Input"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A shell can obtain data from a number of methods: ",(0,r.kt)("strong",{parentName:"li"},"reading input files"),", using ",(0,r.kt)("strong",{parentName:"li"},"arguments when issuing command")," (positional parameters), or ",(0,r.kt)("strong",{parentName:"li"},"prompting for data to store in a variable"),". The later method can be accomplished by using the ",(0,r.kt)("strong",{parentName:"li"},"read")," command."),(0,r.kt)("li",{parentName:"ul"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'read -p "Enter your name: " userName.\n')),(0,r.kt)("h3",{id:"mathematical-expressions"},"Mathematical Expressions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the bash shell, data is stored in variable as text, not other data types (ints, floats, chars, etc) like in compiled programs like C or Java. In order to have a shell perform ",(0,r.kt)("strong",{parentName:"li"},"mathematical operations"),", number or variable need to be surrounded by two sets of parenthesis ",(0,r.kt)("strong",{parentName:"li"},"((..))")," in order to convert a number stored as text to a binary number."),(0,r.kt)("li",{parentName:"ul"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'var1=5;var2=10\necho "$var1 + $var2 = $((var1+var2))"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": shell does not perform floating point calculations (like ",(0,r.kt)("strong",{parentName:"p"},"5/10"),"). Instead, other commands like ",(0,r.kt)("strong",{parentName:"p"},"awk")," or ",(0,r.kt)("strong",{parentName:"p"},"bc")," would be required for floating point calculations (decimals)"),(0,r.kt)("h2",{id:"for-lab-3---investigation-3-part-3"},"For Lab 3 - Investigation 3 Part 3"),(0,r.kt)("h3",{id:"using-sed-to-manipulate-text"},"Using sed to Manipulate Text"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Linux command ",(0,r.kt)("strong",{parentName:"li"},"sed")," stands for ",(0,r.kt)("strong",{parentName:"li"},"S"),"treaming ",(0,r.kt)("strong",{parentName:"li"},"Ed"),'itor which is an effective way to manipulate a text file, output sent from a command, or from within a "here document". This command can manipulate matching text on a variety of criteria (such as ',(0,r.kt)("strong",{parentName:"li"},"line number(s)"),", ",(0,r.kt)("strong",{parentName:"li"},"regular expression match"),", etc). Commands can then be used for manipulation such as ",(0,r.kt)("strong",{parentName:"li"},"omitting, printing, substituting, adding"),", and ",(0,r.kt)("strong",{parentName:"li"},"inserting")," text."),(0,r.kt)("li",{parentName:"ul"},"The sed option ",(0,r.kt)("strong",{parentName:"li"},"-n")," suppresses display of text so the print (",(0,r.kt)("strong",{parentName:"li"},"p"),") command can be used; otherwise, the text will be displayed (with edits via the sed command instructions)."),(0,r.kt)("li",{parentName:"ul"},"Results of text manipulation with sed can be stored in a variable using command substitution, or redirected to a file. ",(0,r.kt)("strong",{parentName:"li"},"NEVER redirect the stdout from a sed command to the same input file (or the input file will be destroyed)!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sed 's/|/ /g' <<+\nI|like|weekends!\n+\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sed 's/$/\\n/g' <<+\nThis text\nshould be\ndouble-spaced!\n+\n")))}c.isMDXComponent=!0}}]);