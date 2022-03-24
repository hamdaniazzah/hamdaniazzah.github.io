var ft1 = ".min.css",
    ft2 = ".min.js";

loadyn(cdn+"css/gen11"+ft1,"css");
loadyn(cdn+"js/gen12"+ft2,"js");

if(!(ls.indexOf("exp=" || "ext2" || "ext3")>-1)){
loadyn(cdn+"css/home7"+ft1,"css");
loadyn(cdn+"js/home51"+ft2,"js");
}

if(ls.match(/\bexp=/)){
loadyn(cdn+"css/exp1"+ft1,"css");
loadyn(cdn+"js/exp34"+ft2,"js");
}

loadyn(cdn+"js/last2"+ft2,"js");
