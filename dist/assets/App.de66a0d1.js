function n(){const n=useStates({md:[],menuItems:[],slugs:[],page:0,version:0,hashGotoOnLoadDone:!1});function e(){n.page=n.slugs.indexOf(location.hash.slice(1)),n.page<0&&(n.page=0),window.scrollTo(0,0)}return useEffect((async()=>{foutFight();let t=await(await fetch("/markdown.md")).text();Object.entries(await npmInfo("react-easier")).forEach((([n,e])=>t=t.split(`//${n}//`).join(e))),t=t.replace(/--/g,"&ndash;"),t=t.split("\n### ").map(((n,e)=>(e?"### ":"")+n)),n.md=t,n.menuItems=t.map((n=>n.split("\n")[0].replace("### ",""))),n.slugs=n.menuItems.map((n=>n.toLowerCase().replace(/[^a-z-0-9]/g,"-").replace(/-{2,}/g,"-").replace(/-$/g,""))),!n.hashGotoOnLoadDone&&e(),n.hashGotoOnLoadDone=!0,window.onhashchange=e}),[]),React.createElement(SFC,{template:n.md.length?React.createElement(React.Fragment,null,React.createElement(MainNav,null),React.createElement("main",{className:"container mt-3"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-lg-3"},React.createElement("div",{className:"contentMenu mt-4",onClick:function(e){let t=n.slugs[n.menuItems.indexOf(e.target.innerHTML)];location.hash=t}},n.menuItems.map(((e,t)=>React.createElement("p",{className:t===n.page?"active":"",key:t},e))))),React.createElement("div",{className:"col-lg-9 page-"+n.page},React.createElement(Markdown,null,n.md[n.page])))),React.createElement(Footer,null)):null,style:"\n\n      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');\n    \n      @global {\n        body {\n          font-family: 'Open Sans';\n          font-size: 17px;\n          line-height: 160%\n        }\n\n        #root {\n          background-color: #fff;\n        }\n\n        .toNada {\n          height: 0 !important;\n          transition: height 500ms;\n        }\n\n        .fadeOut {\n          top: -100vh !important;\n          transition: top 800ms;\n        }\n\n        h1, h2, h3, h4, h5 {\n          font-weight: normal;\n          margin: 20px 0 0;\n        }\n\n        h1 + p, h2 + p, h3 + p, h4 +p, h5 + p {\n          padding-top: 5px;\n        }\n\n        h5 {\n          margin-top: 20px;\n        }\n\n        pre + h5 {\n          margin-top: 35px;\n        }        \n        \n        p {\n          margin: 0;\n          padding: 20px 0 5px;\n        }\n\n        p + p {\n          padding-top: 10px;\n        }\n\n        #root style-wrapper {\n          display: flex;\n          min-height: 100vh;\n          flex-direction: column;\n        }\n\n        main {\n          flex: 1;\n        }\n\n      }\n\n      h3 {\n        color: #2a457a;\n        padding-bottom: 10px;\n        font-weight: bold;\n        border-bottom: 1px solid #2a457a;\n        margin-bottom: 20px;\n      }\n\n      h4 {\n        margin-top: 25px;\n      }\n      \n      pre + h4 {\n        margin-top: 40px;\n      }\n\n      pre + p {\n        padding-top: 10px;\n      }\n\n      pre {\n        background-color: black;\n        color: white;\n        padding: 20px;\n        border-radius: 10px;\n      }\n\n      a {\n        color: #395ca3;\n        font-weight: bold;\n      }\n\n      footer {\n        background-color: #2a457a;\n        font-weight: normal;\n        font-size: 80%;\n        padding: 12px 0 10px;\n        color: #fff;\n        text-align: center;\n      }\n\n      .contentMenu {\n        padding: 10px 20px;\n        background-color: #2a457a;\n        color: #fff;\n        border-radius: 10px;\n        -webkit-user-select: none;\n        user-select: none;\n      }\n\n      .contentMenu p {\n        padding: 10px 5%;\n        cursor: pointer;\n        display: inline-block;\n        width: 50%;\n        text-align: center;\n        padding: 3px 0;\n        vertical-align: top;\n      }\n\n      @media (min-width: 992px) {\n        .contentMenu {\n          width: 90%;\n        }\n        .contentMenu p {\n          text-align: left;\n          display: block;\n          padding: 10px 0;\n          width: 100%;\n        }\n      }\n\n      .contentMenu .active {\n        font-weight: bold;\n        font-size: 95%;\n      }\n\n      .page-2 pre:last-child {\n        margin-top: -30px;\n      }\n\n      .navbar {\n        background-color: #2a457a !important;\n        padding: 20px 0 18px;\n      }\n\n      .navbar-brand {\n        color: #fff !important;\n        padding-left: 30px;\n        -webkit-user-select: none;\n        user-select: none;\n      }\n\n      .navbar-brand i {\n        font-size: 80%;\n        font-weight: normal;\n      }\n\n      @keyframes logo-spin {\n        from {\n          transform: rotate(0deg);\n        }\n        to {\n          transform: rotate(360deg);\n        }\n      }\n\n      @media (prefers-reduced-motion: no-preference) {\n        img[src=\"/logo.svg\"] {\n          position: absolute;\n          right: 15px;\n          top: 15px;\n          width: 70px;\n          animation: logo-spin infinite 20s linear;\n        }\n      }\n\n      .copier {\n        position: absolute;\n        width: calc(100% - 32px);\n      }\n\n      .copier div {\n        width: 28px;\n        height: 28px;\n        position: absolute;\n        right: 20px;\n        top: 20px;\n        background-image: url('/copy-icon.png');\n        background-size: cover;\n        cursor: pointer;\n        opacity: 0.7;\n      }\n\n      .copier div:hover {\n        transition: opacity 200ms;\n        opacity: 1;\n      }\n\n      h5 + .copier + pre {\n        margin-top: 12px;\n      }\n\n      footer a:first-child img {\n        height: 30px;\n        padding-right: 30px;\n      }\n\n      footer a:last-child img {\n        height: 20px;\n        padding-left: 30px;\n      }\n\n      footer a {\n        color: #fff;\n      }\n\n    "})}export default n;
