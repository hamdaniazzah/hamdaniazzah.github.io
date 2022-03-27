var ft1 = ".min.css",
    ft2 = ".min.js",
    lh = location.hash;
/*
function addAfter(newNode,existingNode){existingNode.parentNode.insertBefore(newNode,existingNode.nextSibling)}
*/

loadyn(cdn+"css/gen18"+ft1,"css");
loadyn(cdn+"js/gen12"+ft2,"js");

if(
!(ls.match(/\bexp/)) &&
!(lh.match(/\bpay$/))
){
loadyn(cdn+"css/home12"+ft1,"css");
loadyn(cdn+"js/home59"+ft2,"js");
}

if(ls.match(/\bexp=/)){
loadyn(cdn+"css/exp1"+ft1,"css");
loadyn(cdn+"js/exp35"+ft2,"js");
}

if(lh.match(/\bpay$/)){
loadyn(cdn+"css/pay6"+ft1,"css");
loadyn(cdn+"js/pay11"+ft2,"js");
}

loadyn(cdn+"js/last2"+ft2,"js");
