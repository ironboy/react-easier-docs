export default async function (pname) {
  let version = Object.keys(await (await fetch(
    'https://bundlephobia.com/api/package-history?package=' + pname, { cache: "no-cache" })).json()).slice(-1)[0];
  pname += '@' + version;
  let size = await (await fetch('https://bundlephobia.com/api/size?package=' + pname, { cache: "no-cache" })).json();
  let gzip = (Math.round(size.gzip / 100) / 10) + ' kB';
  size = (Math.round(size.size / 100) / 10) + ' kB';
  return { version, size, gzipped: gzip };
}