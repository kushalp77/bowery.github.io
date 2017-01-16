$(window).scroll(function(){
						    if($(this).scrollTop() < 80)
	  {
		$('#leftpanel_block').css("top",120);
	  }
	  else
	  {
		 $('#leftpanel_block').css("top",0); 
	  }
						  
						  
						  });
  function gotoblock(s)
  { 
	
    s='#'+s;
	ofset=$(s).offset().top-150;
	$('html,body').animate({scrollTop: ofset},'slow');
	
	$(this).closest("li").addClass("hov");
  }