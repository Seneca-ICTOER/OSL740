"use strict";(self.webpackChunkOSL740=self.webpackChunkOSL740||[]).push([[134],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2709:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const o={id:"assignment2",title:"Assignment 2",sidebar_position:2,description:"OSL740 Assignment"},l="Assignment 2",i={unversionedId:"B-Assignments/assignment2",id:"B-Assignments/assignment2",title:"Assignment 2",description:"OSL740 Assignment",source:"@site/docs/B-Assignments/assignment2.md",sourceDirName:"B-Assignments",slug:"/B-Assignments/assignment2",permalink:"/OSL740/B-Assignments/assignment2",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OSL740/tree/main/docs/B-Assignments/assignment2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"assignment2",title:"Assignment 2",sidebar_position:2,description:"OSL740 Assignment"},sidebar:"courseNotesSidebar",previous:{title:"Assignment 1",permalink:"/OSL740/B-Assignments/assignment1"},next:{title:"Tips",permalink:"/OSL740/C-ExtraResources/tips"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Important information",id:"important-information",level:2},{value:"Setting your Ubuntu VM to command line",id:"setting-your-ubuntu-vm-to-command-line",level:2},{value:"Setting a static IP &amp; hostname",id:"setting-a-static-ip--hostname",level:2},{value:"Set a static IP on your Ubuntu VM:",id:"set-a-static-ip-on-your-ubuntu-vm",level:3},{value:"Configuring local hostname resolution",id:"configuring-local-hostname-resolution",level:3},{value:"Updating and Installing Packages",id:"updating-and-installing-packages",level:2},{value:"Install the following packages using apt",id:"install-the-following-packages-using-apt",level:3},{value:"Configuring Your Firewall (nftables)",id:"configuring-your-firewall-nftables",level:3},{value:"Configuring Apache",id:"configuring-apache",level:3},{value:"Configuring MariaDB",id:"configuring-mariadb",level:3},{value:"Configuring Wordpress",id:"configuring-wordpress",level:2},{value:"Write-up",id:"write-up",level:2},{value:"Submission",id:"submission",level:2},{value:"Rubric",id:"rubric",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assignment-2"},"Assignment 2"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In Assignment 2 you will install configure a LAMP stack, which is an acronym that originally stood for Linux, Apache, MySQL and PHP. LAMP is a commonly used acronym and combination of technologies for hosting web based applications. In fact, newer technologies that have come along to replace elements of the LAMP stack tend to pick their name based on the letter in the acronym that they are providing services for (ie MariaDB or MongoDB, Perl or Python). You will then use this platform to install and host Wordpress (a popular free and open source content management system or CMS). You will also configure your firewall to further enhance the security of your computer system."),(0,r.kt)("p",null,"This assignment will be completed inside your Ubuntu VM from Assignment 1."),(0,r.kt)("h2",{id:"important-information"},"Important information"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Weight"),": 15% of your overall grade"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Due Date"),": Refer to your section's Blackboard announcements."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Submission"),": You will be submitting your completed work through a series of screenshots on Blackboard. (See below.)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," Do this assignment inside the ",(0,r.kt)("strong",{parentName:"p"},"ubuntu")," virtual machine and use your user (ie: ",(0,r.kt)("strong",{parentName:"p"},"jason.carman")," or ",(0,r.kt)("strong",{parentName:"p"},"ataur.rahman"),") you created in ",(0,r.kt)("strong",{parentName:"p"},"Assignment 1"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," It is YOUR responsibility to backup your ",(0,r.kt)("strong",{parentName:"p"},"ubuntu")," VM for this assignment! You are required to frequently backup your VM prior to exiting a work session during this assignment. Your instructor will NOT accept the fact that your hard disk crashed and lost all of your work. If you properly backed up your VM images and xml configuration files to a USB, then you can purchase a new hard-disk or wipe and recreate your hard disk and restore your VMs."),(0,r.kt)("h2",{id:"setting-your-ubuntu-vm-to-command-line"},"Setting your Ubuntu VM to command line"),(0,r.kt)("p",null,"Using the appropriate systemctl commands, set your Ubuntu vm to boot into CLI (multi-user.target) by default. Either reboot or use isolate to set it to CLI. Do the rest of the assignment using this interface."),(0,r.kt)("h2",{id:"setting-a-static-ip--hostname"},"Setting a static IP & hostname"),(0,r.kt)("h3",{id:"set-a-static-ip-on-your-ubuntu-vm"},"Set a static IP on your Ubuntu VM:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"edit /etc/netplan/99_config.yaml (remember to use sudo)"),(0,r.kt)("li",{parentName:"ul"},"substitute enp1s0 with the interface on your VM (confirm with ip a)"),(0,r.kt)("li",{parentName:"ul"},"add the following configuration to the file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"network:\n  version: 2\n  renderer: networkd\n  ethernets:\n    enp1s0:\n      addressess:\n        - 192.168.245.5/24\n      routes:\n        - to: default\n          via: 192.168.245.1\n      nameservers:\n        addresses: [192.168.245.1]\n")),(0,r.kt)("p",null,"Issue the following command to apply the changes. If you receive any error messages, check your configuration file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo netplan apply\n")),(0,r.kt)("h3",{id:"configuring-local-hostname-resolution"},"Configuring local hostname resolution"),(0,r.kt)("p",null,"Edit /etc/hosts (on your Ubuntu VM and debhost) to allow local hostname resolution for ",(0,r.kt)("strong",{parentName:"p"},"username-ubuntu")," to ",(0,r.kt)("strong",{parentName:"p"},"192.168.245.5")),(0,r.kt)("p",null,"Test your network connectivity (both internally and to the internet) using ping before continuing."),(0,r.kt)("h2",{id:"updating-and-installing-packages"},"Updating and Installing Packages"),(0,r.kt)("p",null,"Before proceeding make sure you have updated your system using apt."),(0,r.kt)("h3",{id:"install-the-following-packages-using-apt"},"Install the following packages using apt"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"apache2"),": this is the Apache web server software."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"php"),": this is the PHP server software, which allows Apache to run more complex websites."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"php-mysql"),": this is a PHP extension that allows PHP to use a MySQL server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mariadb-server"),": this is the database software."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"wordpress"),": a popular LAMP application used to build websites."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nftables"),": a firewall designed as a replacement for iptables. It supports iptables syntax and translates them into nftables rules.")),(0,r.kt)("h3",{id:"configuring-your-firewall-nftables"},"Configuring Your Firewall (nftables)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use systemctl to:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"stop ufw and prevent it from starting automatically on boot"),(0,r.kt)("li",{parentName:"ul"},"start nftables and configure it to start automatically on boot"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure your firewall with the following rules:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add a rule to allow incoming http traffic."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HINT"),": to figure out which port is required issue the command ",(0,r.kt)("strong",{parentName:"li"},"grep http /etc/services"),". You may need to pipe the output to head to see the top of the list. The required port is the first one listed."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add a rule to allow incoming ssh traffic."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HINT"),": to figure out which port is required issue the command ",(0,r.kt)("strong",{parentName:"li"},"grep ssh /etc/services"),". You may need to pipe the output to head to see the top of the list."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set the default policy to ",(0,r.kt)("strong",{parentName:"p"},"drop"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the following rules to allow apt through the firewall, so you can install software and update the system."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bash sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bash sudo iptables -A INPUT -p udp --dport 53 -j ACCEPT"),"  "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Save your firewall configuration"))))),(0,r.kt)("h3",{id:"configuring-apache"},"Configuring Apache"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Confirm the apache2 service is running using ",(0,r.kt)("strong",{parentName:"p"},"systemctl"),", and that it is set to start automatically on boot. Use the appropriate ",(0,r.kt)("strong",{parentName:"p"},"systemctl")," commands if either of these is not configured.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Confirm that you can connect to your web server using a web browser. ",(0,r.kt)("strong",{parentName:"p"},"Note:")," If you can't connect to it from outside the machine - perhaps your firewall is blocking access to the web server."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"from your Ubuntu VM (you can test using ",(0,r.kt)("strong",{parentName:"li"},"lynx"),")"),(0,r.kt)("li",{parentName:"ul"},"from the host (you can test using Firefox with your Ubuntu VM\u2019s IP address). You should see the Apache Test Page.")))),(0,r.kt)("h3",{id:"configuring-mariadb"},"Configuring MariaDB"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Confirm the mariadb service is running using ",(0,r.kt)("strong",{parentName:"p"},"systemctl"),", and that it is set to start automatically on boot. Use the appropriate ",(0,r.kt)("strong",{parentName:"p"},"systemctl")," commands if either of these is not configured.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run the mysql secure installation script by issuing the command ",(0,r.kt)("strong",{parentName:"p"},"sudo mysql_secure_installation")," and follow the prompts onscreen to:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set the root password to your Seneca username"),(0,r.kt)("li",{parentName:"ul"},"Remove anonymous users"),(0,r.kt)("li",{parentName:"ul"},"Disallow root login remotely"),(0,r.kt)("li",{parentName:"ul"},"Remove the test database and access to it"),(0,r.kt)("li",{parentName:"ul"},"Reload the privilege tables"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This following part is challenging so take your time and read the instructions to make sure you do it properly, we have to set up a dedicated user and database for wordpress:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You will need to run the following commands in a terminal on your Ubuntu VM."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Your adminusername is root"),(0,r.kt)("li",{parentName:"ul"},"Your databasename is myblog"),(0,r.kt)("li",{parentName:"ul"},"Your wordpressusername is your Seneca username"),(0,r.kt)("li",{parentName:"ul"},"The password should also be your Seneca username"),(0,r.kt)("li",{parentName:"ul"},"Your hostname is localhost"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connect to the database using the following command. Type the password when prompted:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysql \u2013h localhost \u2013u root \u2013p\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create the database:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CREATE DATABASE myblog;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create the new user (change wordpressusername and password to your Seneca username):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CREATE USER wordpressusername@localhost IDENTIFIED BY 'password';\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Grant your new user privileges to that database (change wordpressusername and password to your Seneca username):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GRANT ALL PRIVILEGES ON myblog.* TO wordpressusername@localhost IDENTIFIED BY 'password';\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reload the privilege tables:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"FLUSH PRIVILEGES;\n")),(0,r.kt)("h2",{id:"configuring-wordpress"},"Configuring Wordpress"),(0,r.kt)("p",null,"Create a virtual host file in ",(0,r.kt)("strong",{parentName:"p"},"/etc/apache2/sites-available/wordpress.conf")," with the following contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Alias /blog /usr/share/wordpress\n<Directory /usr/share/wordpress>\n    Options FollowSymLinks\n    AllowOverride Limit Options FileInfo\n    DirectoryIndex index.php\n    Order allow,deny\n    Allow from all\n</Directory>\n<Directory /usr/share/wordpress/wp-content>\n    Options FollowSymLinks\n    Order allow,deny\n    Allow from all\n</Directory>\n")),(0,r.kt)("p",null,"Enable the new WordPress site"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo a2ensite wordpress\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use systemctl to restart the apache service.")),(0,r.kt)("p",null,"Edit the file ",(0,r.kt)("strong",{parentName:"p"},"/etc/wordpress/config-username-ubuntu.php")," where username is your Seneca username. Add the following contents (changing username to your Seneca username where appropriate)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\ndefine('DB_NAME', 'myblog');\ndefine('DB_USER', 'username');\ndefine('DB_PASSWORD', 'username');\ndefine('DB_HOST', 'localhost');\ndefine('WP_CONTENT_DIR', '/usr/share/wordpress/wp-content');\n>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open a web browser (ie Firefox) on your host and enter the following url: http://username-ubuntu/blog/wp-admin/install.php"),(0,r.kt)("li",{parentName:"ul"},"You should see a Wordpress Welcome/Setup page. Follow the prompts on screen and enter the appropriate information.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("strong",{parentName:"li"},"Database Name"),", ",(0,r.kt)("strong",{parentName:"li"},"Username")," and ",(0,r.kt)("strong",{parentName:"li"},"Password")," you configured above in mariadb."),(0,r.kt)("li",{parentName:"ul"},"Set the title to Your Name's Blog. For example for me it would be \"OSL740 Professor's Blog\""),(0,r.kt)("li",{parentName:"ul"},"Set the username to your Seneca ID."),(0,r.kt)("li",{parentName:"ul"},"Set the password to your Seneca ID. You may need to check the box to ",(0,r.kt)("strong",{parentName:"li"},"Confirm use of weak password")),(0,r.kt)("li",{parentName:"ul"},"Set the email to your Seneca email address."),(0,r.kt)("li",{parentName:"ul"},'Click "Install Wordpress", you should see a "Success!" message.')))),(0,r.kt)("h2",{id:"write-up"},"Write-up"),(0,r.kt)("p",null,"Write a blog post on your new blog explaining:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What is Apache, PHP, MySQL, and Wordpress."),(0,r.kt)("li",{parentName:"ul"},"What problems (minor and major) you ran into during the installation and how you solved\nthem.")),(0,r.kt)("p",null,"Write a second post on your blog including for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Are you ready for the exam or not?"),(0,r.kt)("li",{parentName:"ul"},"List the material you are strong on."),(0,r.kt)("li",{parentName:"ul"},"List the material you are worried about."),(0,r.kt)("li",{parentName:"ul"},"List any questions or topics you would like me to address during exam review.")),(0,r.kt)("p",null,"Make your posts look professional. That means use good english, headings, bullet or numbered lists, etc."),(0,r.kt)("h2",{id:"submission"},"Submission"),(0,r.kt)("p",null,"On your ",(0,r.kt)("strong",{parentName:"p"},"Ubuntu")," vm issue the following command to download the check script. You may need to install git using apt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/jmcarman/a2-check\n")),(0,r.kt)("p",null,"Give the ",(0,r.kt)("strong",{parentName:"p"},"marka2.bash")," script execute permission and run it."),(0,r.kt)("p",null,"Upload the following to the Assignment 2 folder on blackboard:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Output from the Assignment 2 check script (a2output.txt)"),(0,r.kt)("li",{parentName:"ul"},"A screenshot showing your first blog post on wordpress"),(0,r.kt)("li",{parentName:"ul"},"A screenshot showing your second blog post on wordpress")),(0,r.kt)("h2",{id:"rubric"},"Rubric"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Task"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Mark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"System set to boot in multi-user.target (CLI)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Static IP applied"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nftables installed and configured correctly"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Apache configured and running"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MariaDB configured and running"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Wordpress configured correctly"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Wordpress showing in Firefox"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Blog accessed using local hostname resolution"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"First blog post"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Second blog post"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Submitted correctly"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Total")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"20"))))))}m.isMDXComponent=!0}}]);