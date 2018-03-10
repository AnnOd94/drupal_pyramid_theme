/**
 * @file
 * Product Details Sticky behaviors.
 */
(function($, Drupal, drupalSettings) {
  "use strict";

  Drupal.behaviors.stickInParent = {
    attach: function(context) {
      var breakpoints = drupalSettings.turbo.breakpoints;
      var desktopBreakpoint = breakpoints['turbo.wide'];
      var params = {spacer: false}; // This prevent some weird behaviors.

      if (window.matchMedia(desktopBreakpoint).matches) {
        $(".sticky").stick_in_parent(params).once('sticky');
      }
      $(window).resize(function() {
        if (window.matchMedia(desktopBreakpoint).matches) {
          $(".sticky").stick_in_parent(params).once('sticky');
        }
        else {
          // Detach the sticky behavior.
          $(".sticky").trigger("sticky_kit:detach");
        }
      });
    }
  }
})(jQuery, Drupal, drupalSettings);
