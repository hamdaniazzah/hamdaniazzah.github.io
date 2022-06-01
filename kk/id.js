if(
!(ls.match(/\bp=/)) &&
!(ls.match(/\bq=/)) &&
!(ls.match(/\bforms=/))
){
//
}

if(ls.match(/\bp=/)){

if(ls.match(/\bp=about$/)){
loadyn(k1+'p/about0.min','b');
}

}

if(ls.match(/\bq=/)){
}

if(ls.match(/\bforms=/)){
}

if (typeof idSetting === 'undefined') {
loadyn(k1+'b/none0.min','b');
}

if (typeof idSetting !== 'undefined') {
loadyn(k1+'b/idlast0.min','b');
}
