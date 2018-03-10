/**
 * @file
 * Header behaviors.
 */
(function ($, Drupal, drupalSettings) {

  'use strict';

  function closeMobileHeader() {
    $('#menu-burger').removeClass('open');
    $("#site-header").removeClass('header--mobile-open');
    $('body, #header').removeClass('layout--noscroll');
  }

  // Initialise the sticky Header.
  Drupal.behaviors.stickyHeader = {
    attach: function (context, settings) {
      // grab an element
      var myElement = document.querySelector("#site-header");
      // construct an instance of Headroom, passing the element
      var headroom = new Headroom(myElement, {
        tolerance : 10
      });
      headroom.init();
    }
  };

  // Burger menu.
  Drupal.behaviors.burgerMenu = {
    attach: function (context, settings) {
      // when user click on one link with the class: '.toggle-dropdown-region'
      $('#menu-burger', context).on('click', function() {
        $(this).toggleClass('open');
        $('body, #site-header').toggleClass('layout--noscroll');
        $('#site-header').toggleClass('header--mobile-open');
        if (!$(this).hasClass('open')) {
          closeMobileHeader();
        }
      });
    }
  };

})(jQuery, Drupal, drupalSettings);
