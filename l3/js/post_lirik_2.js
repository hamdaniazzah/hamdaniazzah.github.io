$(".sumberlirik").replaceWith('<span style="line-height:40px">Sumber Lirik : <a href="https://www.google.com/url?sa=t&url=https%3A%2F%2Fwww.musixmatch.com" rel="nofollow noopener" target="_blank" title="Musixmatch" style="cursor:none"><img src="https://hamdaniazzah.github.io/img/svg/musixmatch.svg" onContextMenu="return false"/></a></span>');

$(".l3d_yt").each(function(){
  $(this).replaceWith('<div class="l3d_ytclass"><div class="yt_judul">Dengarkan di YouTube<a href="https://youtu.be/' + $(this).data("id") + '" rel="nofollow noopener" target="_blank"><span id="tau_tan"/></a></div><amp-youtube data-videoid="' + $(this).data("id") + '" layout="responsive" width="480" height="270" autoplay></amp-youtube></div>')})

$("<div class='dengarkan'></div>").insertAfter(".l3d_ytclass");

$(".dengarkan").prepend("<div class='l3d_judul'>Dengarkan di</div>");

var imgspotify44 = '<img src="https://cdn.statically.io/img/1.bp.blogspot.com/--hZVF_nx2fs/X9atDIA6gaI/AAAAAAAAAdc/vqvaFeezVQsGGFujrgOkX7Yd6Sk7zJwWACNcBGAsYHQ/s44/spotify_44x44.png"/>';
var imgjoox44 = '<img src="https://cdn.statically.io/img/1.bp.blogspot.com/-NtVXvBcGPHU/X9atGRRH8tI/AAAAAAAAAdg/rodome2Eb8E8XVHiAk1545xu_dySk6iXQCNcBGAsYHQ/s44/joox_44x44.png"/>';
var imgdeezer44 = '<img src="https://cdn.statically.io/img/1.bp.blogspot.com/-6Z4uSEzfBoc/X9atJQdJcHI/AAAAAAAAAdk/OfSjRP9J9CAbnwax2G1xXUbLZ7-gLoc7QCNcBGAsYHQ/s44/deezer2_44x44.png"/>';

$(".l3d_spotify").each(function(){
  $(this).replaceWith('<div class="l3_dengar"><a href="https://open.spotify.com/track/' + $(this).data("id") + '" rel="nofollow noopener" target="_blank">'+imgspotify44+'Spotify</a></div>')})
$(".l3d_joox").each(function(){
  $(this).replaceWith('<div class="l3_dengar"><a href="https://www.joox.com/single/' + $(this).data("id") + '" rel="nofollow noopener" target="_blank">'+imgjoox44+'JOOX</a></div>')})
$(".l3d_deezer").each(function(){
  $(this).replaceWith('<div class="l3_dengar"><a href="https://www.deezer.com/track/' + $(this).data("id") + '" rel="nofollow noopener" target="_blank">'+imgdeezer44+'Deezer</a></div>')})

$(".l3d_spotifyalbum").each(function(){
  $(this).replaceWith('<div class="l3_dengar"><a href="https://open.spotify.com/album/' + $(this).data("id") + '" rel="nofollow noopener" target="_blank">'+imgspotify44+'Spotify</a></div>')})
$(".l3d_jooxalbum").each(function(){
  $(this).replaceWith('<div class="l3_dengar"><a href="https://www.joox.com/album/' + $(this).data("id") + '" rel="nofollow noopener" target="_blank">'+imgjoox44+'JOOX</a></div>')})
$(".l3d_deezeralbum").each(function(){
  $(this).replaceWith('<div class="l3_dengar"><a href="https://www.deezer.com/track/' + $(this).data("id") + '" rel="nofollow noopener" target="_blank">'+imgdeezer44+'Deezer</a></div>')})

$(".l3_dengar").appendTo(".dengarkan");
