(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),i=a.n(c),o=(a(16),a(2)),l=a(5),m=a(7),h=(a(1),a(18),a(6)),s=a.n(h),g=function(){return n.a.createElement("img",{src:s.a,className:"avater"})},d=function(){return n.a.createElement("div",{className:"card--body"},n.a.createElement("div",{className:"name"},"Thura Sitt Naing"),n.a.createElement("div",{className:"job"},"Web Developer"),n.a.createElement("div",{className:"link"},n.a.createElement("a",{href:"https://coding2am.github.io/portfolio/",target:"_blank"},"thurasittnaing.me")),n.a.createElement("div",{className:"btn--group"},n.a.createElement("a",{href:"mailto: coding2am@gmail.com",target:"_blank"},n.a.createElement("button",null,n.a.createElement("i",{class:"fa-solid fa-at"})," E-mail")),n.a.createElement("a",{href:"https://www.linkedin.com/in/thura-sitt-naing-3b15421a5",target:"_blank"},n.a.createElement("button",{className:"linkedinBtn"},n.a.createElement("i",{class:"fa-brands fa-linkedin-in"})," Linkedin"))),n.a.createElement("div",{className:"about"},n.a.createElement("h3",null,"About"),n.a.createElement("p",null,"I am a frontend developer with a particular interest in making things is simple and automating daily tasks. I try to keep up with security and best practise, and I always looking for new things to learn.")),n.a.createElement("div",{className:"interests"},n.a.createElement("h3",null,"Interests"),n.a.createElement("p",null,"Food expert. Music scholar. Interenet fanatic. Coffee fanatic. Active Coder. Anime Lover.")))},u=function(e){return n.a.createElement("footer",{className:"card--footer",style:{background:e.background}},n.a.createElement("a",{href:"https://twitter.com/eddith_nk21",target:"_blank"},n.a.createElement("i",{className:"fa-brands fa-twitter"})),n.a.createElement("a",{href:"https://www.facebook.com/thurasittnaing.me/",target:"_blank"},n.a.createElement("i",{className:"fa-brands fa-facebook"})),n.a.createElement("a",{href:"https://www.instagram.com/eddith_nk21/",target:"_blank"},n.a.createElement("i",{className:"fa-brands fa-instagram"})),n.a.createElement("a",{href:"https://github.com/coding2am",target:"_blank"},n.a.createElement("i",{className:"fa-brands fa-github"})))},f=function(e){return n.a.createElement("div",{className:"card",style:{background:e.theme,boxShadow:e.boxShadow}},n.a.createElement(g,null),n.a.createElement(d,null),n.a.createElement(u,{background:e.footerBg}))},k=function(e){return n.a.createElement("div",{className:"themeSwitcher"},n.a.createElement("span",null,"Dark Mode"),n.a.createElement("i",{className:"fa-solid fa-power-off",onClick:e.clickedFunc,style:{color:e.switchColor}}))},b={isDarkTheme:!0,currentSwitcherColor:"#297FE5",currentFontColor:"#fff",cardTheme:"#1A1B21",currentBoxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",currentThemeBg1:"#0f0c29",currentThemeBg2:"-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)",currentThemeBg3:"linear-gradient(to right, #24243e, #302b63, #0f0c29)",currentFooterBg:"#161619"},w={switcherOn:"#297FE5",switcherOff:"#fff",blackFont:"#000",whiteFont:"#fff",darkCard:"#1A1B21",lightCard:"#F5F5F5",darkBoxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",lightBoxShadow:"rgba(255, 255, 255, 0.24) 0px 3px 8px",darkThemeBg1:"#0f0c29",darkThemeBg2:"-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)",darkThemeBg3:"linear-gradient(to right, #24243e, #302b63, #0f0c29)",lightThemeBg1:"#C9FFBF",lightThemeBg2:"-webkit-linear-gradient(to right, #FFAFBD, #C9FFBF)",lightThemeBg3:"linear-gradient(to right, #FFAFBD, #C9FFBF)",darkFooterBg:"#161619",lightFooterBg:"#D5D4D8"};var B=function(){var e,t=Object(r.useState)(b),a=Object(m.a)(t,2),c=a[0],i=a[1],h=c.isDarkTheme?w.switcherOff:w.switcherOn,s=c.isDarkTheme?w.lightThemeBg1:w.darkThemeBg1,g=c.isDarkTheme?w.lightThemeBg2:w.darkThemeBg2,d=c.isDarkTheme?w.lightThemeBg3:w.darkThemeBg3,u=c.isDarkTheme?w.lightCard:w.darkCard,B=c.isDarkTheme?w.lightFooterBg:w.darkFooterBg,E=c.isDarkTheme?w.blackFont:w.whiteFont,F=c.isDarkTheme?w.darkBoxShadow:w.lightBoxShadow;return n.a.createElement("main",{style:(e={background:c.currentThemeBg1},Object(o.a)(e,"background",c.currentThemeBg2),Object(o.a)(e,"background",c.currentThemeBg3),Object(o.a)(e,"color",c.currentFontColor),e)},n.a.createElement(k,{switchColor:c.currentSwitcherColor,clickedFunc:function(){i(function(e){return Object(l.a)({},e,{isDarkTheme:!c.isDarkTheme,currentSwitcherColor:h,currentThemeBg1:s,currentThemeBg2:g,currentThemeBg3:d,cardTheme:u,currentFooterBg:B,currentFontColor:E,currentBoxShadow:F})})}}),n.a.createElement(f,{theme:c.cardTheme,footerBg:c.currentFooterBg,boxShadow:c.currentBoxShadow}))},E=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,21)).then(function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(B,null))),E()},6:function(e,t,a){e.exports=a.p+"static/media/avater.94d0d7b0.jpg"},8:function(e,t,a){e.exports=a(20)}},[[8,3,2]]]);
//# sourceMappingURL=main.9553bfe1.chunk.js.map