document.body.addEventListener('click', e => {
  let el = e.target.closest('.copier div');
  if (!el) { return; }
  copier(el.parentElement.nextSibling);
});

function copier(el) {
  let temp = document.createElement('textarea');
  document.body.append(temp);
  temp.value = el.innerText;
  temp.select();
  temp.setSelectionRange(0, 99999);
  document.execCommand("copy");
  temp.remove();
}