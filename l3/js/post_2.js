$("#l3author").insertBefore(".l3_endpost");
$(".l3v_yt").each(function() {
        $(this).replaceWith('<amp-youtube data-videoid="' + $(this).data("id") + '" layout="responsive" width="480" height="270" autoplay></amp-youtube>')
    })
$("#l3author").each(function(){$(this).replaceWith('<div class="l3author teks_stroke">Penulis:</div><div class="l3_author"><amp-img alt="Penulis: ' + $(this).data("name") + '" src="' + $(this).data("img") + '" width="50" height="50" layout="responsive" onContextMenu="return false"></amp-img><div><a href="' + $(this).data("url") + '" rel="nofollow noopener" target="_blank">' + $(this).data("name") + '</a><div>' + $(this).data("job") + '</div></div></div>')})
