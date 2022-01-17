loadyn(cdn+"css/gen3.min.css","css");

if(!(ls.indexOf("exp=" || "ext2" || "ext3")>-1)){
loadyn(cdns+gh0+"css/home5.min.css","css");
}

if(ls.indexOf("exp=")>-1){
loadyn(cdns+"css/exp1.min.css","css");
loadyn(cdns+"js/exp2.min.js","js");
}

setTimeout(function(){const e=doc.getElementById("preloader").style,t=(t,o)=>e.setProperty(t,o),o="transition",i="4.5s",s="visible";t("-webkit-"+o,i),t("-moz-"+o,i),t("-ms-"+o,i),t("-o-"+o,i),t(o,i),t("opacity","0"),t("overflow",s),t("visibility","hidden"),doc.getElementsByTagName("body")[0].style.overflow=s},1500);
