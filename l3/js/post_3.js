$("#l3author").insertBefore(".l3_endpost");

$(".l3gp").each(function() {
        $(this).replaceWith('<amp-img alt="Temukan di Google Play" src="https://1.bp.blogspot.com/-Pyj4lEAF42U/X-dAwbfjDUI/AAAAAAAAAlY/oxboSFCigywYeC0i2gpBeY_WU-xQkl_JACNcBGAsYHQ/s1600/temukan-di-google-play.png" width="323" height="125" layout="fixed"></amp-img>')
    })

$(".l3v_yt").each(function() {
        $(this).replaceWith('<amp-youtube data-videoid="' + $(this).data("id") + '" layout="responsive" width="480" height="270" autoplay></amp-youtube>')
    })

$(".faqnya").each(function() {
        $(this).replaceWith('<div class="l3_faq"><input type="checkbox" id="' + $(this).data("q") + '"><label class="l3_faq-label" for="' + $(this).data("q") + '">' + $(this).data("q") + '</label><div class="l3_faq-content">' + $(this).data("a") + '</div></div>')
    })

$("#l3author").each(function(){$(this).replaceWith('<div class="l3author teks_stroke">Penulis:</div><div class="l3_author"><amp-img alt="Penulis: ' + $(this).data("name") + '" src="' + $(this).data("img") + '" width="50" height="50" layout="responsive" onContextMenu="return false"></amp-img><div><a href="' + $(this).data("url") + '" rel="nofollow noopener" target="_blank">' + $(this).data("name") + '</a><div>' + $(this).data("job") + '</div></div></div>')})