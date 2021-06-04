export default async function (pname) {
  let f = await (await fetch(
    'https://bundlephobia.com/api/package-history?package=' + pname, { cache: "no-cache" })).json();
  let version = Object.keys(f).slice(-1)[0];
  let gzip = f[version].gzip, size = f[version].size;
  if (!gzip && !size) {
    pname += '@' + version;
    size = await (await fetch('https://bundlephobia.com/api/size?package=' + pname, { cache: "no-cache" })).json();
    gzip = size.gzip;
    size = size.size;
  }
  gzip = (Math.round(gzip / 102.4) / 10) + ' kB';
  size = (Math.round(size / 102.4) / 10) + ' kB';
  return { version, size, gzipped: gzip };
}