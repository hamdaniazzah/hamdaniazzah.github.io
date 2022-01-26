var ft1 = ".min.css",
    ft2 = ".min.js";

loadyn(cdn+"css/gen6"+ft1,"css");
loadyn(cdn+"js/gen4"+ft2,"js");

if(!(ls.indexOf("exp=" || "ext2" || "ext3")>-1)){
loadyn(cdn+"css/home6"+ft1,"css");
loadyn(cdn+"js/home11"+ft2,"js");
}

if(ls.indexOf("exp=")>-1){
loadyn(cdn+"css/exp1"+ft1,"css");
loadyn(cdn+"js/exp10"+ft2,"js");
}

loadyn(cdn+"js/last2"+ft2,"js");
