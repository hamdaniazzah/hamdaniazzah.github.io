$(".sumberlirik").each(function() {
        $(this).replaceWith('<span style="line-height:40px">Sumber Lirik : <a href="https://www.google.com/url?sa=t&url=https%3A%2F%2Fwww.musixmatch.com" rel="nofollow noopener" target="_blank" title="Musixmatch" style="cursor:none"><img src="https://hamdaniazzah.github.io/img/svg/musixmatch.svg" onContextMenu="return false"/></a></span>')
    })

$("#l3v_yt_a").each(function() {
        $(this).replaceWith('<div class="yt_judul">Dengarkan di YouTube<a href="https://youtu.be/' + $(".l3v_yt").data("id") + '" rel="nofollow noopener" target="_blank"><span id="tau_tan"/></a></div>')
    })

document.getElementById("l3d_judul").innerHTML = "Dengarkan di";

$(".l3d_spotify").each(function() {
        $(this).replaceWith('<div class="l3_dengar"><a href="https://open.spotify.com/track/' + $(this).data("id") + '" rel="nofollow noopener" target="_blank"><img src="https://cdn.statically.io/img/1.bp.blogspot.com/--hZVF_nx2fs/X9atDIA6gaI/AAAAAAAAAdc/vqvaFeezVQsGGFujrgOkX7Yd6Sk7zJwWACNcBGAsYHQ/s44/spotify_44x44.png"/>Spotify</a></div>')
    })
$(".l3d_joox").each(function() {
        $(this).replaceWith('<div class="l3_dengar"><a href="https://www.joox.com/single/' + $(this).data("id") + '" rel="nofollow noopener" target="_blank"><img src="https://cdn.statically.io/img/1.bp.blogspot.com/-NtVXvBcGPHU/X9atGRRH8tI/AAAAAAAAAdg/rodome2Eb8E8XVHiAk1545xu_dySk6iXQCNcBGAsYHQ/s44/joox_44x44.png"/>JOOX</a></div>')
    })
$(".l3d_deezer").each(function() {
        $(this).replaceWith('<div class="l3_dengar"><a href="https://www.deezer.com/track/' + $(this).data("id") + '" rel="nofollow noopener" target="_blank"><img src="https://cdn.statically.io/img/1.bp.blogspot.com/-6Z4uSEzfBoc/X9atJQdJcHI/AAAAAAAAAdk/OfSjRP9J9CAbnwax2G1xXUbLZ7-gLoc7QCNcBGAsYHQ/s44/deezer2_44x44.png"/>Deezer</a></div>')
    })

document.addEventListener('copy', (event) => {
  const pagelink = `\n\n ✔ Lirik Lagu di: LLL.my.id`;
  event.clipboardData.setData('text', document.getSelection() + pagelink);
  event.preventDefault();
});
