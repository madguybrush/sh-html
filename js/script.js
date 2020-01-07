

	function resized(){
		
		window_width = $( window ).width();
		window_height = $( window ).height();

        hauteurhp1 = $('#pratiques').outerHeight();
        $('#imgpratiques').css('min-height', hauteurhp1);

        hauteurhp2 = $('#studio').outerHeight();
        $('#imgstudio').css('min-height', hauteurhp2);

        hauteurpilates1 = $('#methodepilates').outerHeight();
        //console.log(hauteurpilates1);
        hauteurimgpilates1 = $('#imgmethodepilates').outerHeight();
        //console.log(hauteurimgpilates1);
        
        if (hauteurimgpilates1 > hauteurpilates1){
             $('#methodepilates').css('min-height', hauteurimgpilates1);
        }  else {
        $('#imgmethodepilates').css('min-height', hauteurpilates1);
        }
        
        hauteurblocgris = $('#blocgris').outerHeight();
        $('#imgblocgris').css('min-height', hauteurblocgris);
        
        
        hauteurblocgris1 = $('#blocgris1').outerHeight();
        $('#imgblocgris1').css('min-height', hauteurblocgris1);
         hauteurblocgris2 = $('#blocgris2').outerHeight();
        $('#imgblocgris2').css('min-height', hauteurblocgris2);
        
	}


$(window).on('load', function(){ 

		resized();
});


$( document ).ready( function() {

resized();
    
});




   	$( window ).resize(	function(){
			resized();
		});


	
	$( window ).on( "orientationchange", function( event ) {
		//resized();
	});

	


   

   

$('.fermercredits').on('click',function(){
    $('.popup.credits').hide();

});


	   
   	  // $(window).load(function(){
           
   // PAGE IS FULLY LOADED  
   // FADE OUT YOUR OVERLAYING DIV
		
	/*	$('.container-loader').css('opacity', '0'); 
		$('.container-loader').addClass('d-none ');
		$('.loader').addClass('d-none ');
		
			$('header').removeClass('d-none');
		$('#bienvenue').removeClass('d-none');
		$('.navbar').removeClass('d-none');
		$('footer').removeClass('d-none');
		$('#hp').removeClass('d-none');

		$('#cabinet').removeClass('nopacity');
		$('#conseils').removeClass('nopacity');
		$('#ortho').removeClass('nopacity');
		$('#contact').removeClass('nopacity');
		$('#urgence').removeClass('nopacity');
		$('#patient').removeClass('nopacity');*/

		//$('#sousmenuconseils').removeClass('d-none');


		//resized();

//});





