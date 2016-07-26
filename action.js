/*控制站收起的js*/
function spread()
{
    var addb=document.getElementById("button-fold");
    var but=document.getElementById("button-spread");
    addb.style.display="block";
    but.style.display="none";
}
function fold()
{
    var addb=document.getElementById("button-fold");
    var but=document.getElementById("button-spread");
    addb.style.display="none";
    but.style.display="block";
}

/*控制音乐播放的js*/
function aud_play() {
    document.getElementById("aud").play();
}
function aud_pause() {
    document.getElementById("aud").pause();
}
 

/*页面平滑滚动的js*/
$(document).ready(function(){ 
$('.scrollToTop').click(function(){ 
$('html, body').animate({scrollTop:0}, 'slow'); });
$('.navbar-brand').click(function(){ 
$('html, body').animate({scrollTop:0}, 'slow'); });
$('.scroll_a').click(function(){
$('html,body').animate({scrollTop:$('#libie').offset().top},  'slow');});
$('.scroll_b').click(function(){
$('html,body').animate({scrollTop:$('#tamen').offset().top},  'slow');});
$('.scroll_c').click(function(){
$('html,body').animate({scrollTop:$('#gushi').offset().top},  'slow');});
$('.scroll_d').click(function(){
$('html,body').animate({scrollTop:$('#huiyi').offset().top},  'slow');});
})  
