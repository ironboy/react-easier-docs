export default function App() {

  const s = useStates({
    md: [],
    menuItems: [],
    slugs: [],
    page: 0,
    version: 0,
    hashGotoOnLoadDone: false
  });

  useEffect(async () => {
    foutFight();
    let md = await (await fetch('/markdown.md')).text();
    Object.entries(await npmInfo('react-easier')).forEach(([key, val]) =>
      md = md.split(`//${key}//`).join(val)
    );
    md = md.replace(/--/g, '&ndash;');
    md = md.split('\n### ').map((x, i) => (i ? '### ' : '') + x);
    s.md = md;
    s.menuItems = md.map(x => x.split('\n')[0].replace('### ', ''));
    s.slugs = s.menuItems.map(x => x.toLowerCase()
      .replace(/[^a-z-0-9]/g, '-').replace(/-{2,}/g, '-').replace(/-$/g, ''));
    !s.hashGotoOnLoadDone && gotoHash();
    s.hashGotoOnLoadDone = true;
    window.onhashchange = gotoHash;
  }, []);

  function gotoHash() {
    s.page = s.slugs.indexOf(location.hash.slice(1));
    s.page < 0 && (s.page = 0);
    window.scrollTo(0, 0);
  }

  function menuChoice(e) {
    let slug = s.slugs[s.menuItems.indexOf(e.target.innerHTML)];
    location.hash = slug;
  }

  // single page component
  return <SFC

    template=
    {!s.md.length ? null : <>
      <MainNav />
      <main className="container mt-3">
        <div className="row">
          <div className="col-lg-3" >
            <div className="contentMenu mt-4" onClick={menuChoice}>
              {s.menuItems.map((item, i) => <p className={i === s.page ? 'active' : ''} key={i}>
                {item}
              </p>)}
            </div>
          </div>
          <div className={'col-lg-9 page-' + s.page}>
            <Markdown>{s.md[s.page]}</Markdown>
          </div>
        </div>
      </main>
      <Footer />
    </>}

    style=
    {/*css*/`

      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    
      @global {

        body {
          font-family: 'Open Sans';
          font-size: 17px;
          line-height: 160%;
        }

        #root {
          background-color: #fff;
        }

        .toNada {
          height: 0 !important;
          transition: height 500ms;
        }

        .fadeOut {
          top: -100vh !important;
          transition: top 800ms;
        }

        h1, h2, h3, h4, h5 {
          font-weight: normal;
          margin: 20px 0 0;
        }

        h1 + p, h2 + p, h3 + p, h4 +p, h5 + p {
          padding-top: 5px;
        }

        h5 {
          margin-top: 20px;
        }

        pre + h5 {
          margin-top: 35px;
        }        
        
        p {
          margin: 0;
          padding: 20px 0 5px;
        }

        p + p {
          padding-top: 10px;
        }

        #root style-wrapper {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        }

        main {
          flex: 1;
        }

      }

      h3 {
        color: #2a457a;
        padding-bottom: 10px;
        font-weight: bold;
        border-bottom: 1px solid #2a457a;
        margin-bottom: 20px;
      }

      h4 {
        margin-top: 25px;
      }
      
      pre + h4 {
        margin-top: 40px;
      }

      pre + p {
        padding-top: 10px;
      }

      pre {
        background-color: black;
        color: white;
        padding: 20px;
        border-radius: 10px;
      }

      a {
        color: #395ca3;
        font-weight: bold;
      }

      footer {
        background-color: #2a457a;
        font-weight: normal;
        font-size: 80%;
        padding: 12px 0 10px;
        color: #fff;
        text-align: center;
      }

      .contentMenu {
        padding: 10px 20px;
        background-color: #2a457a;
        color: #fff;
        border-radius: 10px;
        -webkit-user-select: none;
        user-select: none;
      }

      .contentMenu p {
        padding: 10px 5%;
        cursor: pointer;
        display: inline-block;
        width: 50%;
        text-align: center;
        padding: 3px 0;
        vertical-align: middle;
      }

      @media (min-width: 992px) {
        .contentMenu {
          width: 90%;
        }
        .contentMenu p {
          text-align: left;
          display: block;
          padding: 10px 0;
          width: 100%;
        }
      }

      .contentMenu .active {
        font-weight: bold;
        font-size: 95%;
      }

      .navbar {
        background-color: #2a457a !important;
        padding: 20px 0 18px;
      }

      .navbar-brand {
        font-size: 18px;
        color: #fff !important;
        padding-left: 30px;
        -webkit-user-select: none;
        user-select: none;
      }

      .navbar-brand i {
        font-size: 80%;
        font-weight: normal;
      }

      @keyframes logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      img[src="/logo.svg"]{
        position: absolute;
        right: 15px;
        top: 15px;
        width: 70px;
      }

      @media (prefers-reduced-motion: no-preference) {
        img[src="/logo.svg"] {
          animation: logo-spin infinite 20s linear;
        }
      }

      .copier {
        position: absolute;
        z-index: 10;
        width: calc(100% - 32px);
      }

      .copier div {
        width: 28px;
        height: 28px;
        position: absolute;
        right: 20px;
        top: 20px;
        background-image: url('/copy-icon.png');
        background-size: cover;
        cursor: pointer;
        opacity: 0.7;
      }

      .copier div:hover {
        transition: opacity 200ms;
        opacity: 1;
      }

      h5 + .copier + pre {
        margin-top: 12px;
      }

      footer a:first-child img {
        height: 30px;
        padding-right: 30px;
      }

      footer a:last-child img {
        height: 20px;
        padding-left: 30px;
      }

      footer a {
        color: #fff;
      }

      #single-file-components ~ pre ~ pre {
        margin-top: -48px;
      }

      #single-file-components ~ pre ~ pre ~ pre {
        margin-top: 0;
      }

      #single-file-components ~ pre ~ .copier {
        display: none;
      }

      #single-file-components ~ pre ~ pre ~ .copier {
        display: block;
      }

      code, pre {
        white-space:pre-wrap;
      }

      code ol {
        margin-bottom: -32px;
        counter-reset: item;
        list-style-type: none;
      }

      #single-file-components ~ pre ~ pre code ol {
        counter-reset: item 18;
      }

      #single-file-components ~ pre ~ pre ~ pre code ol {
        counter-reset: item;
      }

      code li {
        display:  flex;
        min-height: 20px;
        position: relative;
      }

      code li:before {
        display: block;
        position: absolute;
        left: -40px;
        width: 20px;
        vertical-align: bottom;
        content: counter(item) "  ";
        counter-increment: item;
        color: #bbb;
      }

      code li div {
        text-indent: -18px;
        padding-left: 10px;
      }

      code li:nth-child(-n+9):before {
        left: -31px;
      }

      #single-file-components ~ pre ~ pre code li:nth-child(-n+9):before {
        left: -40px;
      }

      .cspaces {
        display: inline-block;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }

    `}

  />;
}