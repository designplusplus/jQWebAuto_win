var $ps = $("#ps");
var x = $ps.offset().left + window.screenX;
var y = $ps.offset().top + window.screenY;
var paste_pos_x = x + $ps.width()/2;
var paste_pos_y = y + $ps.height()/2;
sendCmd({cmd:"pasteString",x:paste_pos_x,y:paste_pos_y,str:"hello world!"});