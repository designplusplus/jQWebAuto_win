var $cb = $("#cb");
var x = $cb.offset().left + window.screenX;
var y = $cb.offset().top + window.screenY;
var click_pos_x = x + $cb.width()/2;
var click_pos_y = y + $cb.height()/2;
sendCmd({cmd:"setClickPos",x:click_pos_x,y:click_pos_y});