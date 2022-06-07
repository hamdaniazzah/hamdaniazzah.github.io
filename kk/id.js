if(
!(ls.match(/\bp=/)) &&
!(ls.match(/\bq=/)) &&
!(ls.match(/\bforms=/))
){
//
}


var mypage = 'p=about';
var re = new RegExp('^'+mypage+'$', 'g');
if(ls.match(re)){
loadynk('p/about1','b');
}

/*
if(ls.match(/\bp=/)){

if(ls.match(/\bp=about$/)){
loadynk('p/about1','b');
}

}
*/

if(ls.match(/\bq=/)){
}

if(ls.match(/\bforms=/)){
}

loadynk('b/idlast6','b');
