export default async function foutFight() {
  let sleep = ms => new Promise(res => setTimeout(res, ms));
  let d = document.createElement('div');
  d.innerHTML = '<b>giItT1WQy@!-/#</b>';
  d.style = 'font-size:100px;position:absolute;left:-10000px';
  d.className = 'fontMeasure';
  document.body.appendChild(d);
  let el = d.querySelector('b');
  let orgWidth = el.offsetWidth;
  document.body.classList.add('font');
  while (orgWidth === el.offsetWidth) {
    await sleep(10);
    console.log('Waiting')
  }
  d.remove();
  document.querySelector('.wait').classList.add('toNada');
  document.querySelector('.easier-wait').classList.add('fadeOut');
}