if(
!(ls.match(/\bp=/)) &&
!(ls.match(/\bq=/)) &&
!(ls.match(/\bforms=/))
){
//
}

function loadid(f,n,e){
  var s=doc.createElement('script');
    s.async=!1;
    s.crossOrigin='anonymous';
    s.src=tls+kk1+f+'/'+n+e+'.min.js'+ver;
    s.type='text/javascript';
  if(typeof s!=='undefined' && ls==='?'+f+'='+n){
    doc.head.appendChild(s);
  }
};

loadid('p','about',1);

/*
var mypage = 'p=about';
var re = new RegExp('\\b'+mypage+'$', 'g');
if(ls.match(re)){
loadynk('p/about1','b');
}

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
