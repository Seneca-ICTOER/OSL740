"use strict";(self.webpackChunkOSL740=self.webpackChunkOSL740||[]).push([[134],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,g=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2709:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var n=a(3117),r=(a(7294),a(3905));const o={id:"assignment2",title:"Assignment 2",sidebar_position:2,description:"TBD"},i="Assignment 2",s={unversionedId:"B-Assignments/assignment2",id:"B-Assignments/assignment2",title:"Assignment 2",description:"TBD",source:"@site/docs/B-Assignments/assignment2.md",sourceDirName:"B-Assignments",slug:"/B-Assignments/assignment2",permalink:"/OSL740/B-Assignments/assignment2",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OSL740/tree/main/docs/B-Assignments/assignment2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"assignment2",title:"Assignment 2",sidebar_position:2,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Assignment 1",permalink:"/OSL740/B-Assignments/assignment1"},next:{title:"Tips",permalink:"/OSL740/C-ExtraResources/tips"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Important information",id:"important-information",level:2},{value:"Updating and Installing Packages",id:"updating-and-installing-packages",level:2},{value:"Install the following packages using apt",id:"install-the-following-packages-using-apt",level:3},{value:"Configuring Apache",id:"configuring-apache",level:3},{value:"Configuring MariaDB",id:"configuring-mariadb",level:3},{value:"Installing and Configuring Wordpress",id:"installing-and-configuring-wordpress",level:2},{value:"Write-up",id:"write-up",level:2},{value:"Submission",id:"submission",level:2},{value:"Rubric",id:"rubric",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assignment-2"},"Assignment 2"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In Assignment 2 you will install configure a LAMP stack, which is an acronym that originally stood for Linux, Apache, MySQL and PHP. LAMP is a commonly used acronym and combination of technologies for hosting web based applications. In fact, newer technologies that have come along to replace elements of the LAMP stack tend to pick their name based on the letter in the acronym that they are providing services for (ie MariaDB or MongoDB, Perl or Python). You will then use this platform to install and host Wordpress (a popular free and open source content management system or CMS). You will also configure your firewall to further enhance the security of your computer system."),(0,r.kt)("p",null,"This assignment will be completed inside your deb3 VM."),(0,r.kt)("h2",{id:"important-information"},"Important information"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Weight"),": 15% of your overall grade"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Due Date"),": Refer to your section's Blackboard announcements."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Submission"),": You will be submitting your completed work through a series of screenshots on Blackboard. (See below.)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," Do this assignment inside the ",(0,r.kt)("strong",{parentName:"p"},"deb3")," virtual machine and use the user (your user ie: ",(0,r.kt)("strong",{parentName:"p"},"jason.carman")," or ",(0,r.kt)("strong",{parentName:"p"},"ataur.rahman"),") you created in ",(0,r.kt)("strong",{parentName:"p"},"Lab 4"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," It is YOUR responsibility to backup your ",(0,r.kt)("strong",{parentName:"p"},"deb3")," VM for this assignment! You are required to frequently backup your VM prior to exiting a work session during this assignment. Your instructor will NOT accept the fact that your hard disk crashed and lost all of your work. If you properly backed up your VM images and xml configuration files to a USB, then you can purchase a new hard-disk or wipe and recreate your hard disk and restore your VMs."),(0,r.kt)("h2",{id:"updating-and-installing-packages"},"Updating and Installing Packages"),(0,r.kt)("p",null,"Before proceeding make sure you have updated your system using apt."),(0,r.kt)("h3",{id:"install-the-following-packages-using-apt"},"Install the following packages using apt"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"apache2"),": this is the Apache web server software."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"php"),": this is the PHP server software, which allows Apache to run more complex websites."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"php-mysql"),":  this is a PHP extension that allows PHP to use a MySQL server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mariadb-server"),":  this is the database software.")),(0,r.kt)("h3",{id:"configuring-apache"},"Configuring Apache"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Confirm the apache2 service is running using ",(0,r.kt)("strong",{parentName:"p"},"systemctl"),", and that it is set to start automatically on boot. Use the appropriate ",(0,r.kt)("strong",{parentName:"p"},"systemctl")," commands if either of these is not configured.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Confirm that you can connect to your web server using a web browser "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"from centos3 (you can test using ",(0,r.kt)("strong",{parentName:"li"},"lynx"),") "),(0,r.kt)("li",{parentName:"ul"},"from the host (you can test using Firefox with centos3\u2019s IP address). You should see the Apache Test Page."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you can't connect to it from outside the machine - perhaps your firewall is blocking access to the web server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure your firewall (iptables) to allow incoming http traffic:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HINT:")," to figure out which port is required issue the command ",(0,r.kt)("strong",{parentName:"p"},"grep http /etc/services"),". You may need to pipe the output to head to see the top of the list. The required port is the first one listed."))),(0,r.kt)("h3",{id:"configuring-mariadb"},"Configuring MariaDB"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Confirm the mariadb service is running using ",(0,r.kt)("strong",{parentName:"p"},"systemctl"),", and that it is set to start automatically on boot. Use the appropriate ",(0,r.kt)("strong",{parentName:"p"},"systemctl")," commands if either of these is not configured.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run the mysql secure installation script by issuing the command ",(0,r.kt)("strong",{parentName:"p"},"sudo mysql_secure_installation")," and follow the prompts onscreen to:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set the root password to your Seneca username"),(0,r.kt)("li",{parentName:"ul"},"Remove anonymous users"),(0,r.kt)("li",{parentName:"ul"},"Disallow root login remotely"),(0,r.kt)("li",{parentName:"ul"},"Remove the test database and access to it"),(0,r.kt)("li",{parentName:"ul"},"Reload the privilege tables"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This following part is challenging so take your time and read the instructions to make sure you do it properly, we have to set up a dedicated user and database for wordpress:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note: If you decide to download the wordpress package during this section, please use the latest version here (use wget): ",(0,r.kt)("a",{parentName:"li",href:"https://wordpress.org/latest.tar.gz"},"https://wordpress.org/latest.tar.gz")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You will need to run the following commands in a centos3 terminal."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Your adminusername is root"),(0,r.kt)("li",{parentName:"ul"},"Your databasename is myblog"),(0,r.kt)("li",{parentName:"ul"},"Your wordpressusername is your Seneca username"),(0,r.kt)("li",{parentName:"ul"},"The password should also be your Seneca username"),(0,r.kt)("li",{parentName:"ul"},"Your hostname is localhost"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connect to the database using the following command. Type the password when prompted: "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysql \u2013h localhost \u2013u root \u2013p\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create the database: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CREATE DATABASE myblog;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create the new user (change wordpressusername and password to your Seneca username):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CREATE USER wordpressusername@localhost IDENTIFIED BY 'password';\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Grant your new user privileges to that database (change wordpressusername and password to your Seneca username):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GRANT ALL PRIVILEGES ON myblog.* TO wordpressusername@localhost IDENTIFIED BY 'password';\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reload the privilge tables: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"FLUSH PRIVILEGES;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure your firewall (iptables) to allow incoming ssh traffic",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HINT"),": to figure out which port is required issue the command ",(0,r.kt)("strong",{parentName:"li"},"grep ssh /etc/services"),". The required port is the first one listed.")))),(0,r.kt)("h2",{id:"installing-and-configuring-wordpress"},"Installing and Configuring Wordpress"),(0,r.kt)("p",null,"Wordpress (like most web applications) is not available in the Centos repositories, it must be downloaded and installed manually."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the latest version of wordpress to your centos3 VM here (use wget): ",(0,r.kt)("a",{parentName:"p",href:"https://wordpress.org/latest.tar.gz"},"https://wordpress.org/latest.tar.gz")," (If you haven\u2019t downloaded it already)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Extract it into /var/www/html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Now we need to allow Apache to modify the wordpress installation. To do this use chown and chgrp with -R option to make the owner and group of every file and directory inside wordpress "www-data".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check your work so far by pointing your web browser (Firefox on your host) to http://centos3/wordpress/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'If you get an error starting with "There doesn\'t seem to be a wp-config.php file", copy the wp-config-sample.php file to wp-config.php and edit the new file:'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Change the DB_NAME, DB_USER, DB_PASSWORD to the appropriate values. (Do not use the root account for your database connection! Marks will be deducted.)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now go back to http://centos3/wordpress/ - you should see a Wordpress Welcome/Setup page. Follow the prompts on screen and enter the appropriate information."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("strong",{parentName:"li"},"Database Name"),", ",(0,r.kt)("strong",{parentName:"li"},"Username")," and ",(0,r.kt)("strong",{parentName:"li"},"Password")," you configured above in mariadb."),(0,r.kt)("li",{parentName:"ul"},"Set the title to Your Name's Blog. For example for me it would be \"OSL740 Professor's Blog\""),(0,r.kt)("li",{parentName:"ul"},"Set the username to your Seneca ID."),(0,r.kt)("li",{parentName:"ul"},"Set the password to your Seneca ID. You may need to check the box to ",(0,r.kt)("strong",{parentName:"li"},"Confirm use of weak password")),(0,r.kt)("li",{parentName:"ul"},"Set the email to your Seneca email address."),(0,r.kt)("li",{parentName:"ul"},'Click "Install Wordpress", you should see a "Success!" message.')))),(0,r.kt)("h2",{id:"write-up"},"Write-up"),(0,r.kt)("p",null,"Write a blog post on your new blog explaining:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What is Apache, PHP, MySQL, and Wordpress."),(0,r.kt)("li",{parentName:"ul"},"What problems (minor and major) you ran into during the installation and how you solved\nthem.")),(0,r.kt)("p",null,"Write a second post on your blog including for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Are you ready for the exam or not?"),(0,r.kt)("li",{parentName:"ul"},"List the material you are strong on."),(0,r.kt)("li",{parentName:"ul"},"List the material you are worried about."),(0,r.kt)("li",{parentName:"ul"},"List any questions or topics you would like me to address during exam review.")),(0,r.kt)("p",null,"Make your posts look professional. That means use good english, headings, bullet or numbered lists, etc."),(0,r.kt)("h2",{id:"submission"},"Submission"),(0,r.kt)("p",null,"On your ",(0,r.kt)("strong",{parentName:"p"},"deb3")," vm issue the following command to download the check script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/OPS245/a2-check\n")),(0,r.kt)("p",null,"Give the ",(0,r.kt)("strong",{parentName:"p"},"marka2.bash")," script execute permission and run it."),(0,r.kt)("p",null,"Upload the following to the Assignment 2 folder on blackboard:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Output from the Assignment 2 check script (a2output.txt)"),(0,r.kt)("li",{parentName:"ul"},"A screenshot showing your first blog post on wordpress"),(0,r.kt)("li",{parentName:"ul"},"A screenshot showing your second blog post on wordpress")),(0,r.kt)("h2",{id:"rubric"},"Rubric"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Task"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Mark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Correct packages installed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Apache configured and running"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MariaDB configured and running"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Wordpress extracted correctly"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Wordpress configured correctly"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Wordpress showing in Firefox"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Blog accessed using local hostname resolution"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"iptables rules configured correctly"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"First blog post"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Second blog post"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Submitted correctly"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Total")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"20"))))))}m.isMDXComponent=!0}}]);