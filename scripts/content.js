$(document).on('ready', function(){
  $('.item-container').hover(function(ev){
    $(ev.currentTarget).children('.el-info').show();
    $(ev.currentTarget).children('.img-el').hide();
  }, function(ev){
    $(ev.currentTarget).children('.el-info').hide();
    $(ev.currentTarget).children('.img-el').show();
  });
});
