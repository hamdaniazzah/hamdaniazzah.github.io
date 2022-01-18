loadyn(cdn+"css/gen4.min.css","css");
loadyn(cdn+"js/gen1.min.js","js");

if(!(ls.indexOf("exp=" || "ext2" || "ext3")>-1)){
loadyn(cdn+"css/home5.min.css","css");
}

if(ls.indexOf("exp=")>-1){
loadyn(cdn+"css/exp1.min.css","css");
loadyn(cdn+"js/exp2.min.js","js");
}

loadyn(cdn+"js/last2.min.js","js");
