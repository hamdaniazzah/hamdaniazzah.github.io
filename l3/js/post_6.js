$("#l3author").insertBefore(".l3_endpost");

$(".l3gp").each(function() {
        $(this).replaceWith('<amp-img alt="Temukan di Google Play" src="https://1.bp.blogspot.com/-Pyj4lEAF42U/X-dAwbfjDUI/AAAAAAAAAlY/oxboSFCigywYeC0i2gpBeY_WU-xQkl_JACNcBGAsYHQ/s1600/temukan-di-google-play.png" width="323" height="125" layout="fixed"></amp-img>')
    })

$(".l3v_yt").each(function() {
        $(this).replaceWith('<amp-youtube data-videoid="' + $(this).data("id") + '" layout="responsive" width="480" height="270" autoplay></amp-youtube>')
    })

$(".l3s_ig").each(function() {
        $(this).replaceWith('<amp-instagram data-shortcode="' + $(this).data("id") + '" data-captioned width="1" height="1" layout="responsive"></amp-instagram>')
    })

$(".faqnya").each(function() {
        $(this).replaceWith('<div class="l3_faq"><input type="checkbox" id="' + $(this).data("q") + '"><label class="l3_faq-label" for="' + $(this).data("q") + '">' + $(this).data("q") + '</label><div class="l3_faq-content">' + $(this).data("a") + '</div></div>')
    })

$("#l3author").each(function(){$(this).replaceWith('<div class="l3author teks_stroke">Penulis:</div><div class="l3_author"><amp-img alt="Penulis: ' + $(this).data("name") + '" src="' + $(this).data("img") + '" width="50" height="50" layout="responsive" onContextMenu="return false"></amp-img><div><a href="' + $(this).data("url") + '" rel="nofollow noopener" target="_blank">' + $(this).data("name") + '</a><div>' + $(this).data("job") + '</div></div></div>')})

$("<div class='as_1'></div>").insertAfter("#as_1");
$("<div class='as_2'></div>").insertAfter("#as_2");
$(".as_1").replaceWith('<div class="l3_as" align="center"><amp-ad width="100vw" height="320" type="adsense" data-ad-client="ca-pub-4881038805263910" data-ad-slot="4117181124" data-auto-format="rspv" data-full-width=""><div overflow=""></div></amp-ad></div>');
$(".as_2").replaceWith('<div class="l3_as" align="center"><amp-ad width="100vw" height="320" type="adsense" data-ad-client="ca-pub-4881038805263910" data-ad-slot="8314945422" data-auto-format="rspv" data-full-width=""><div overflow=""></div></amp-ad></div>');
