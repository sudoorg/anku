jQuery( document ).ready( function( $ ) {
	
	"use strict";
	
	/* START */
	
	/* Scroll to top */
	$('.btn-to-top').click( function() {
		
		$('html, body').animate( { scrollTop: 0 }, 500 );
		return false;
		
	} );
		
	/* Fitvids */
	$('.bxslider-vid').fitVids();
	/* */

	/* Added to avoid iframe confuse on Chrome, Safari and Opera */
	$('iframe').each( function() {
		
        this.src = this.src;
		
    } );
	/* */
	
	/* MailChimp Label Class */
	$( '.mc4wp-checkbox-wp-comment-form' ).addClass( 'blake-von-hauer-font-2 fs14' );
	/* */
	
	/* Search */
	// WP Search box focus	
	var blake_von_hauer_searchDefaultVal = $('#s').val();

	$('.search-box').focus( function() {
									 
		if ( $(this).val() == blake_von_hauer_searchDefaultVal ) {
			
			$(this).val('');
			
		}							   
		
	} );
	
	$('.search-box').focusout( function() {
									 
		if ( $(this).val() == '' ) {
			
			$(this).val(blake_von_hauer_searchDefaultVal);
			
		}							   
		
	} );
	
	// Custom Search box focus	
	var blake_von_hauer_searchDefaultVal_custom = $('#s_custom').val();
	
	$('.search-widget-input').focus( function() {
									 
		if ( $(this).val() == blake_von_hauer_searchDefaultVal_custom ) {
			
			$(this).val('');
			
		}							   
		
	} );
	
	$('.search-widget-input').focusout( function() {
									 
		if ( $(this).val() == '' ) {
			
			$(this).val(blake_von_hauer_searchDefaultVal_custom);
			
		}							   
		
	} );
	
	$('.search-widget-s-icon').click( function() {
		
		window.location = $('#siteUrl').html() + '/?s=' + $(this).parent().find('.search-widget-input').val();
		
	} );
	/* */
	
	/* Top Search */
	var searchOpenBO = true;
	var blake_von_hauer_top_search_container = $( '.top-search' );
		
	$( '.blake-von-hauer-top-search-button' ).click( function() {
	
		$( '#site-menu' ).slicknav( 'close' );
		
		if ( searchOpenBO ) {
		
			searchOpenBO = false;
			blake_von_hauer_top_search_container.css( 'display', 'none' );
		
		} else {
		
			searchOpenBO = true;
			blake_von_hauer_top_search_container.css( 'display', 'block' );
		
		}
			
	} );
	
	/* */

	/* Menu Button */
	$( '.blake-von-hauer-menu-button' ).click( function() {
		
		$( '#site-menu' ).slicknav( 'toggle' );
		searchOpenBO = false;
		blake_von_hauer_top_search_container.css( 'display', 'none' );
		
	} );
	/* */

	/* Body Mouse Move */
	$( 'body' ).mousemove( function( event ) {
	  		
		if ( searchOpenBO ) {
		  							
			if ( event.pageX >= $( '.blake-von-hauer-top-search-button' ).offset().left + 40 || event.pageX < $( '.blake-von-hauer-top-search-button' ).offset().left - 300 || event.pageY >= $( '.blake-von-hauer-top-search-button' ).offset().top + 40 || event.pageY < $( '.blake-von-hauer-top-search-button' ).offset().top - 40 ) {
				
				blake_von_hauer_top_search_container.css( 'display', 'none' );
				searchOpenBO = false;
				
			}
		  
		} else {
		  
			blake_von_hauer_top_search_container.css( 'display', 'none' );
			searchOpenBO = false;
		  
		}
		
	} );
	/* */
	
	/* Apply Slicknav */
	$( '#site-menu' ).slicknav( {
		
		label: '',
		prependTo: '#touch-menu',
		allowParentLinks: true,
		closedSymbol: '<i class="fa fa-angle-right" style="font-size: 16px;"></i>',
		openedSymbol: '<i class="fa fa-angle-down" style="font-size: 16px;"></i>',
		init: blake_von_hauer_appendSocialIcons,
		open: blake_von_hauer_showSocialIcons
		
	} );
	/* */
	
	/* Append social icons to Slicknav */
	function blake_von_hauer_appendSocialIcons() {
				
		if ( $('.header-social').html() != 'undefined' && $('.header-social').html() != undefined && $('.header-social').html() != '' ) {
		
			$('#touch-menu .slicknav_menu').append( '<div class="social-accounts-touch">' + $('.header-social').html() + '</div>' );
			$('.social-accounts-touch').hide();
		
		}
		
		if ( $('.top-search').html() != 'undefined' && $('.top-search').html() != undefined && $('.top-search').html() != '' ) {
		
			$('#touch-menu .slicknav_menu').append( '<div class="top-search-touch"><i class="fa fa-search"></i>' + $('.top-search').html() + '</div>' );
			$('.top-search-touch').hide();
		
		}

		if ( $('.header-menu-outer').html() != 'undefined' && $('.header-menu-outer').html() != undefined && $('.header-menu-outer').html() != '' && $('.header-menu-outer .assign-menu').html() != 'Please assign a Header menu.' ) {
		
			$('#touch-menu .slicknav_menu').append( '<div class="header-menu-touch clearfix">' + $('.header-menu-outer').html() + '</div>' );
			$('.header-menu-touch').hide();
		
		}
		
	}
	
	$('.blake-von-hauer-menu-button').click( function() {
		
		$('.social-accounts-touch, .top-search-touch, .header-menu-touch').hide();
		
	} );
	
	function blake_von_hauer_showSocialIcons() {
		
		$('.social-accounts-touch, .top-search-touch, .header-menu-touch').show();
		
	}
	
	// Top Search Box Focus
	var blake_von_hauer_topSearchDefaultVal_custom = $( '#s_top' ).val();
	
	$( '.top-search-input' ).focus( function() {
									 
		if ( $( this ).val() == blake_von_hauer_topSearchDefaultVal_custom ) {
			
			$( this ).val( '' );
			
		}							   
		
	} );
	
	$( '.top-search-input' ).focusout( function() {
									 
		if ( $( this ).val() == '' ) {
			
			$( this ).val( blake_von_hauer_topSearchDefaultVal_custom );
			
		}							   
		
	} );
	
	$( '.top-search-input' ).keyup( function( event ) {
			
		if ( event.which == 13 ) {	  
			//ENTER
			window.location = $( '#siteUrl' ).html() + '/?s=' + $( this ).val();
		}
	  
	} );
	/* */
		
	/* Sticky Menu Trigger */
	$( window ).scroll( function() {
		
		if ( $(this).scrollTop() > $( '#trigger-sticky-value' ).html() ) {
		
			$( '#sticky-menu' ).addClass( 'menu-sticky' );
			
		} else {
			
			$( '#sticky-menu' ).removeClass( 'menu-sticky' );
			
		}
	
	} );
	/* */
	
	/* Instagram Slider Widget - Text Position */
	function blake_von_hauer_instagram() {
				
		if ( $( 'footer .jr-insta-thumb' ).width() > 0 ) {
		
			$( '.instagram-label' ).offset( { top: $( 'footer .jr-insta-thumb' ).offset().top + ( $( 'footer .jr-insta-thumb' ).height() / 2 ) - ( $( '.instagram-label' ).outerHeight() / 2 ), left: ( $( window ).width() / 2 ) - ( $( '.instagram-label' ).outerWidth() / 2 ) } );
			$( '.instagram-label' ).css( 'opacity', 1 );
		
		}
		
	}
	setTimeout( blake_von_hauer_instagram, 5000 );
	/* */
	
	function blake_von_hauer_resizing() {
		
		if( $( window ).width() <= 960 ) {
						
			blake_von_hauer_top_search_container.css( 'display', 'none' );
			searchOpenBO = false;
			
		}
		
		blake_von_hauer_instagram();
							
	}
		
	$( window ).resize( blake_von_hauer_resizing );
	
	/* END */
	
	/* DEMO */
	$( '.brnhmbx-passive' ).find( 'a' ).removeAttr( 'href' );
	/* */
	
} );