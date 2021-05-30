export default function Markdown(props) {
  marked.setOptions({
    highlight: (code, lang) => {
      let c = Prism.highlight(code, Prism.languages[lang], lang);
      if (c.split('\n').length > 2) {
        c = '<ol><li><div>' + c.replace(/\n */g, x => `</div></li><li style="padding-left:${x.slice(1).length * 9}px"><div><span class="cspaces">${x.slice(1) || ' '}</span>`) + '</div></li></ol>';
      }
      return c;
    }
  });
  return <div dangerouslySetInnerHTML={{
    __html: marked(String(props.children)).replace(/<pre/g, '<div class="copier"><div title="Copy"></div></div><pre').replace(/<a/g, '<a rel="noreferrer" target="_blank"')
  }} />
}