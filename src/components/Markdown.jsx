export default function Markdown(props) {
  marked.setOptions({
    highlight: (code, lang) => Prism.highlight(code, Prism.languages[lang], lang)
  });
  return <div dangerouslySetInnerHTML={{
    __html: marked(String(props.children)).replace(/<pre/g, '<div class="copier"><div title="Copy"></div></div><pre').replace(/<a/g, '<a target="_blank"')
  }} />
}