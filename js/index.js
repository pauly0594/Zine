$.fn.extend({
  
  // Define the threeBarToggle function by extending the jQuery object
  threeBarToggle: function(options){
    
    // Set the default options
    var defaults = {
      color: 'black',
      width: 30,
      height: 25,
      speed: 400,
      animate: true
    }
    var options = $.extend(defaults, options); 
    
    return this.each(function(){
      
      $(this).empty().css({'width': options.width, 'height': options.height, 'background': 'transparent'});
      $(this).addClass('tb-menu-toggle');
      $(this).prepend('<i></i><i></i><i></i>').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('tb-active-toggle');
        if (options.animate) { $(this).toggleClass('tb-animate-toggle'); }
        $('.tb-mobile-menu').slideToggle(options.speed);
      });
      $(this).children().css('background', options.color);
    });
  },
  
  // Define the accordionMenu() function that adds the sliding functionality
  accordionMenu: function(options){
    
    // Set the default options
    var defaults = {
      speed: 400
    }
    var options =  $.extend(defaults, options);

    return this.each(function(){
      
      $(this).addClass('tb-mobile-menu');
      var menuItems = $(this).children('li');
      menuItems.find('.sub-menu').parent().addClass('tb-parent');
      $('.tb-parent ul').hide();
      $('.tb-parent > a').on('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        $(this).siblings().slideToggle(options.speed);
      });
      
    });
  }
});

// Convert any element into a three bar toggle
// Optional arguments are 'speed' (number in ms, 'slow' or 'fast') and 'animation' (true or false) to disable the animation on the toggle
$('#menu-toggle').threeBarToggle({color: 'white', width: 30, height: 25});

// Make any nested ul-based menu mobile
// Optional arguments are 'speed' and 'accordion' (true or false) to disable the behavior of closing other sub
$('#menu').accordionMenu();




$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: true,
        anchors:['COVER', 'PG01', 'PG02','PG03', 'PG04','PG05', 'PG06','PG07', 'PG08','PG09', 'PG10','PG11', 'PG12','PG13', 'PG14','PG15', 'PG16','PG17', 'PG18','PG19', 'PG20','PG21', 'PG21','PG22', 'PG23','PG24', 'PG25','PG26', 'PG27','PG28', 'PG29','PG30', 'PG31','PG32', 'PG33','PG34', 'PG35' ],
        navigation: false,
        navigationPosition: 'left',
        navigationTooltips: ['COVER', '', 'OVERVIEW', 'INDUSTRYINSIDER', '01','','','','','02','','','','','03','','','','','','','','AUTHOR',''],
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        // css3: true,
        // scrollingSpeed: 500,
        // autoScrolling: true,
        // fitToSection: true,
        // fitToSectionDelay: 820,
        // scrollBar: false,
        // easing: 'easeInOutCubic',
        // easingcss3: 'ease',
        // loopBottom: true,
        // loopTop: false,
        // loopHorizontal: true,
        // continuousVertical: true,
        // continuousHorizontal: false,
        // scrollHorizontally: false,
        // interlockedSlides: true,
        // resetSliders: false,
        // normalScrollElements: '#element1, .element2',
        // scrollOverflow: true,
        // scrollOverflowOptions: null,
        // touchSensitivity: 16,
        // normalScrollElementTouchThreshold: 5,
        // bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: false,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: true,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});