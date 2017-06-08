		$(document).ready(function(){
		$('#nav-icon').click(function(){
			console.log(1);
			$(this).toggleClass('open');
			$('.menu').toggleClass('visible');
		});
	});

		$(function() {
    	$("a[href=#menuExpand]").click(function(e) {
        $(".menu").toggleClass("menu-open");
        e.preventDefault();
    });
	});
