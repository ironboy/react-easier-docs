async function a(a){let e=await(await fetch("https://bundlephobia.com/api/package-history?package="+a,{cache:"no-cache"})).json(),c=Object.keys(e).slice(-1)[0],i=e[c].gzip,t=e[c].size;return i&&t||(a+="@"+c,t=await(await fetch("https://bundlephobia.com/api/size?package="+a,{cache:"no-cache"})).json(),i=t.gzip,t=t.size),i=Math.round(i/102.4)/10+" kB",t=Math.round(t/102.4)/10+" kB",{version:c,size:t,gzipped:i}}export default a;