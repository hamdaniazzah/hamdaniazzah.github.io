var l3findNU = navigator.userAgent;
var l3findUC = l3findNU.search("UCBrowser");
if(l3findUC>1) {
var L3notinUC = window.location.assign("googlechrome://navigate?url="+ window.location.href);
var l3niUChead = L3notinUC;document.getElementsByTagName('head')[0].appendChild(l3niUChead);}

document.getElementById('footby').innerHTML = 'Blogger'
document.body.insertAdjacentHTML("beforeend",'<div id="l3load_page" class="l3load_hide"><div class="l3loadnya l3anim_spin-1s"></div></div>'),window.addEventListener("beforeunload",function(){const d=document.getElementById("l3load_page");setTimeout(function(){d.style.display="block"},1),setTimeout(function(){d.classList.remove("l3load_hide"),d.classList.add("l3load_show")},200)});
