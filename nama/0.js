var ft1 = ".min.css",
    ft2 = ".min.js",
    lh = location.hash;

loadyn(cdn+"css/gen13"+ft1,"css");
loadyn(cdn+"js/gen12"+ft2,"js");

if(!(
!ls.match(/\bexp=/) &&
!lh.match(/\bpay$/)
)){
loadyn(cdn+"css/home9"+ft1,"css");
loadyn(cdn+"js/home53"+ft2,"js");
}

if(lh.match(/\bpay$/)){
loadyn(cdn+"css/pay0"+ft1,"css");
loadyn(cdn+"js/pay0"+ft2,"js");
}

if(ls.match(/\bexp=/)){
loadyn(cdn+"css/exp1"+ft1,"css");
loadyn(cdn+"js/exp34"+ft2,"js");
}

loadyn(cdn+"js/last2"+ft2,"js");
