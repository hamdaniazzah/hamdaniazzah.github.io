var ft1 = ".min.css",
    ft2 = ".min.js",
    lh = location.hash;

loadyn(cdn+"css/gen21"+ft1,"css");
loadyn(cdn+"js/gen12"+ft2,"js");

if(
!(ls.match(/\bexp/)) &&
!(ls.match(/\bid=pay$/))
){
loadyn(cdn+"css/home12"+ft1,"css");
loadyn(cdn+"js/home84"+ft2,"js");
}

if(ls.match(/\bexp=/)){
loadyn(cdn+"css/exp1"+ft1,"css");
loadyn(cdn+"js/exp38"+ft2,"js");
}

if(ls.match(/\bid=pay$/)){
loadyn(cdn+"css/pay10"+ft1,"css");
loadyn(cdn+"js/pay20"+ft2,"js");
}

loadyn(cdn+"js/last2"+ft2,"js");
