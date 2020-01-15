

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
        
        
      /*  hauteurblocrose = $('#blocrose').outerHeight();
        $('#imgblocrose').css('min-height', hauteurblocrose);*/
        
        hauteurblocrose = $('#blocrose').outerHeight();
        hauteurimgblocrose = $('#imgblocrose').outerHeight();
        
        if (hauteurimgblocrose > hauteurblocrose){
             $('#blocrose').css('min-height', hauteurimgblocrose);
            $('#imgblocrose').css('min-height', hauteurimgblocrose);
        }  else {
        $('#imgblocrose').css('min-height', hauteurblocrose);
            $('#blocrose').css('min-height', hauteurblocrose);
        }
                
        
        hauteurblocplanningblanc = $('#blocplanningblanc').outerHeight();
       console.log(hauteurblocplanningblanc);
        hauteurblocbleu1 = $('#blocbleu1').outerHeight();
    console.log(hauteurblocbleu1);
        
        if (hauteurblocplanningblanc > hauteurblocbleu1){
             $('#blocbleu1').css('min-height', hauteurblocplanningblanc);
            $('#blocplanningblanc').css('min-height', hauteurblocplanningblanc);
           // $('#rowplanning1').css('background-color', '#2B3441');

        }  else {
        $('#blocplanningblanc').css('min-height', hauteurblocbleu1);
             $('#blocbleu1').css('min-height', hauteurblocbleu1);

        }
        
    
        hauteurblocblanc = $('#blocblanc').delay(300).outerHeight();
        hauteurimgblocblanc = $('#imgblocblanc').delay(300).outerHeight();

        if (hauteurimgblocblanc > hauteurblocblanc){
             $('#blocblanc').css('min-height', hauteurimgblocblanc);
        }  else {
        $('#imgblocblanc').css('min-height', hauteurblocblanc);
            $('#blocblanc').css('min-height', hauteurblocblanc);
        }
                
        
        hauteurblocplanningrose = $('#blocplanningrose').outerHeight();
        hauteurblocbleu2 = $('#blocbleu2').outerHeight();
        
        if (hauteurblocplanningrose > hauteurblocbleu2){
             $('#blocbleu2').css('min-height', hauteurblocplanningrose);
               $('#blocplanningrose').css('min-height', hauteurblocplanningrose);
           // $('#rowplanning2').css('background-color', '#F2E9E1');

        }  else {
        $('#blocplanningrose').css('min-height', hauteurblocbleu2);
              $('#blocbleu2').css('min-height', hauteurblocbleu2);

        }
        
        
        
	}


  // $(window).ready(function(){
$( window ).on('load', function(){ 
       
   // PAGE IS FULLY LOADED  
   // FADE OUT YOUR OVERLAYING DIV
		
		$('.container-loader').css('opacity', '0'); 
		$('.container-loader').addClass('d-none ');


    $('.loader').addClass('d-none ');
    $('.content').removeClass('d-none ');
    $('.navbar').removeClass('d-none ');


		resized();
});


//$( document ).ready( function() {
//resized();
//});




   	$( window ).resize(	function(){
			resized();
		});


	
	$( window ).on( "orientationchange", function( event ) {
		resized();
	});









popinactive = 0;	

function popin(){
    
     $('#popup').show(); 
    //$('#popup').css('display', 'block');
    //popinactive = 1;
}


$('.popup').on('click',function(){
    $('#popup').hide(); 

});

$('.popupcontent').on('click',function(e){
    e.stopPropagation();

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





