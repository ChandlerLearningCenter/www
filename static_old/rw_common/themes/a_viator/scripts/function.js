jQuery.noConflict();
jQuery(document).ready(function($){

	// Navigation
	
	$('nav ul').removeClass('nojs');
	$('nav li').hover(function() { $(this).find('ul:first').stop('true','true').animate({opacity: 'toggle', height: 'toggle'}, + dropSpeed);});
	$('nav li li:first-child').each(function(){$(this).find('a:first').addClass( 'first_item' );});
	$('nav li li:last-child').each(function(){$(this).find('a:first').addClass( 'last_item' );});

	// Extra Content
	
	var extraContent =  (function() {
		var ecValue = 10;
		for (i=1;i<=ecValue;i++)
		{
			$('#myExtraContent'+i+' script').remove();
			$('#myExtraContent'+i).appendTo('#extraContainer'+i);
		}
	})();
	
	// Text Revolver

	$('#revolve li');
	setInterval(function(){
		$('#revolve li').filter(':visible').fadeOut(800,function(){
			if($(this).next('li').size()){ $(this).next().fadeIn(800); }
			else{ $('#revolve li').eq(0).fadeIn(800); }
		});
	},4000);
	
	// A Vaitor Specific Formatting
	
	$('#asideTitle:empty, #asidePlug:empty').remove();
	$('footer li:last-child').each(function(){$(this).addClass( 'last_item' );});
	$('.album-description, .movie-page-description, .album-title, .movie-page-title, .filesharing-description, .message-text').prependTo('#extraContainer2');
	
	// Lightbox Photo Album
	
	$('section').has('.album-wrapper').each(function(){ 
		$('.thumbnail-frame').each(function(){
	        $('a',this).attr({
	            'href' : $('a img',this).attr('src').replace(/thumb/i,'full'),
	            'rel' : 'prettyPhoto[gallery]',
	            'title' : $('.thumbnail-caption',this).text()
	        });
	    });
		$('a[rel^=prettyPhoto]').prettyPhoto({
		    theme : 'light_square',
		    show_title : false
		});
	});
});