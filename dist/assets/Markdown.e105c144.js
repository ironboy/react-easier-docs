function e(e){return marked.setOptions({highlight:(e,i)=>Prism.highlight(e,Prism.languages[i],i)}),React.createElement("div",{dangerouslySetInnerHTML:{__html:marked(String(e.children)).replace(/<pre/g,'<div class="copier"><div title="Copy"></div></div><pre')}})}export default e;
