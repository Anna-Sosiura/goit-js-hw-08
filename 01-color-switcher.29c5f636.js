const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(n){t.setAttribute("disabled","pointer-events: none;"),e.disabled=!1;const o=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,e.addEventListener("click",(function(n){e.setAttribute("disabled","pointer-events: none;"),t.disabled=!1,setTimeout((()=>{clearInterval(o)}))}))}),1e3)}));
//# sourceMappingURL=01-color-switcher.29c5f636.js.map
