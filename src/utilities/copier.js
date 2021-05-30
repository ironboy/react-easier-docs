document.body.addEventListener('click', e => {
  let el = e.target.closest('.copier div');
  if (!el) { return; }
  copier(el.parentElement.nextSibling);
});

function copier(el) {
  let temp = document.createElement('textarea');
  document.body.append(temp);
  let content = el.innerText.trim();
  if (content.includes('Then return a SFC with your template and style')) {
    content += '\n\n      @global {\n        body {\n          margin: 0\n        }\n      }\n\n      h1 {\n        color: blue;\n      }\n\n    `}\n\n  />;\n}';
  }
  temp.value = content.split('\n \n').join('\n\n').replace(/\n {1,1}(\S)/g, '\n$1');
  temp.select();
  temp.setSelectionRange(0, 99999);
  document.execCommand("copy");
  temp.remove();
}