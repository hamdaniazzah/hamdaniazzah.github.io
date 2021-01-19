var listOff = [
  "https://www.google.com/url?sa=t&url=https%3A%2F%2F",
  "https://www.google.co.id/url?sa=t&url=https%3A%2F%2F"
];
var randomOff = listOff[Math.floor(Math.random()*listOff.length)];
var listAlt = [
  "https://top.lll.my.id/p/lagu.html",
  "https://top.lll.my.id/p/lagu.html",
  "https://top.lll.my.id/p/lagu.html"
];
var randomAlt = listAlt[Math.floor(Math.random()*listAlt.length)];
var date=new Date,thn=date.getFullYear(),bln=date.getMonth(),tgl=date.getDate();switch(bln){case 0:bln="02";case 1:bln="03";case 2:bln="04";case 3:bln="05";case 4:bln="06";case 5:bln="07";case 6:bln="08";case 7:bln="09";case 8:bln="10";case 9:bln="11";case 10:bln="12";case 11:bln="01"}
$(".mengantuk").each(function(){$(this).replaceWith('<div class="unduhbutton"><div class="unduhofficial"><a href="' + randomOff + $(this).data("off") + '" target="_blank" rel="nofollow noopener">' + $(this).data("title") + ' [Official]</a></div><div class="unduhmirror"><a href="' + randomAlt + '?utm-source=link3&id='+thn+bln+tgl+'&alt='+ $(this).data("alt") + '" target="_blank" rel="nofollow noopener">' + $(this).data("title") + ' [Alternative]</a></div><div class="l3uk-class" data-id="' + $(this).data("key") + '"><a onclick="l3ukclick()">Buka Kunci</a></div><div id="l3uk-time"></div><a href="/p/alt-link.html" target="_blank"><div class="unduhinfo"><svg x="0px"><path d="M7.5,1.5a6,6,0,1,0,0,12a6,6,0,1,0,0,-12m0,1a5,5,0,1,1,0,10a5,5,0,1,1,0,-10ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75a1,1,0,1,0,0,2a1,1,0,1,0,0,-2Z"></path></svg>Info</div></a></div>')});
function counter(time){
  var interval = setInterval(function(){
    $('#l3uk-time').text(time);
    time = time - 1;
    if(time == -1){
      $("#l3uk-time").hide();
      clearInterval(interval);
      $(".l3uk-class").each(function(){
        $(this).replaceWith('<div class="l3uk-isi"><pre><code>' + $(this).data("id") + '</code></pre></div>')});
    }
  }, 2500);
};
function l3ukclick(){
  $(".l3uk-class").hide()
  $("#l3uk-time").show();
  counter(10);
};
