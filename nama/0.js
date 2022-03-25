var ft1 = ".min.css",
    ft2 = ".min.js";

loadyn(cdn+"css/gen12"+ft1,"css");
loadyn(cdn+"js/gen12"+ft2,"js");

if(!(ls.indexOf("exp=" || "ext2" || "ext3")>-1)){
loadyn(cdn+"css/home9"+ft1,"css");
loadyn(cdn+"js/home53"+ft2,"js");
}

if(ls.match(/\bexp=/)){
loadyn(cdn+"css/exp1"+ft1,"css");
loadyn(cdn+"js/exp34"+ft2,"js");
}

loadyn(cdn+"js/last2"+ft2,"js");
