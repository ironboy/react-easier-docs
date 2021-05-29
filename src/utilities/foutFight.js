export default async function foutFight() {
  // wait for fonts to load before displaying
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  let d = document.createElement('div');
  d.style.visibility = 'hidden';
  d.style.display = 'inline-block';
  d.innerHTML = 'abc';
  document.body.append(d);
  let widths = [];
  while (1) {
    widths = [...widths.slice(-3), d.clientWidth];
    if (widths.length > 2 && [...new Set(widths)].length === 1) { break; }
    await sleep(50);
  }
  d.remove();
  document.querySelector('.wait').classList.add('toNada');
  document.querySelector('.easier-wait').classList.add('fadeOut');
}