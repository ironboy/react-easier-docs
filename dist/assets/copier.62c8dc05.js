document.body.addEventListener("click",(e=>{let n=e.target.closest(".copier div");n&&function(e){let n=document.createElement("textarea");document.body.append(n);let t=e.innerText.trim();t.includes("Then return a SFC with your template and style")&&(t+="\n\n      @global {\n        body {\n          margin: 0\n        }\n      }\n\n      h1 {\n        color: blue;\n      }\n\n    `}\n\n  />;\n}");n.value=t.split("\n \n").join("\n\n").replace(/\n {1,1}(\S)/g,"\n$1"),n.select(),n.setSelectionRange(0,99999),document.execCommand("copy"),n.remove()}(n.parentElement.nextSibling)}));
