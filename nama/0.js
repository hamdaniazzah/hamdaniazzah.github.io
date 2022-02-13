var ft1 = ".min.css",
    ft2 = ".min.js";
loadyn(cdn+"css/gen8"+ft1,"css");
loadyn(cdn+"js/gen11"+ft2,"js");
if(!(ls.indexOf("exp=" || "ext2" || "ext3")>-1)){
loadyn(cdn+"css/home7"+ft1,"css");
loadyn(cdn+"js/home37"+ft2,"js");
}
if(ls.indexOf("exp=")>-1){
loadyn(cdn+"css/exp1"+ft1,"css");
loadyn(cdn+"js/exp25"+ft2,"js");
}
loadyn(cdn+"js/last2"+ft2,"js");
