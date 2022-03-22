var ft1 = ".min.css",
    ft2 = ".min.js";

loadyn(cdn+"css/gen8"+ft1,"css");
loadyn(cdn+"js/gen12"+ft2,"js");

if(!(ls.match(
/\bexp=/ || /\bext2=/ || /\bext3=/
))){
loadyn(cdn+"css/home7"+ft1,"css");
loadyn(cdn+"js/home47"+ft2,"js");
}

if(ls.match(/\bexp=/)){
loadyn(cdn+"css/exp1"+ft1,"css");
loadyn(cdn+"js/exp32"+ft2,"js");
}

loadyn(cdn+"js/last2"+ft2,"js");
