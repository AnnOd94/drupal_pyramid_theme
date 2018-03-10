/**
 * @file slider.js
 *
 * Provides responsive slider functionality.
 */

(function ($, Drupal, drupalSettings) {
  
  var sliderElements = '[data-slick]';
  var breakpoints = drupalSettings.turbo.breakpoints;
  var mobileBreakpoint = breakpoints['turbo.mobile'];
  var desktopBreakpoint = breakpoints['turbo.wide'];

  /**
   * Initialize a slider.
   * 
   * We use data-slick with parameter to avoid long Javascript coding.
   * 
   * Add "sliderOptions.target" parameter to specify if a child element must be the Slider base div.
   * 
   * Add data-slider-mobile-only="true" if you want the slider to be disabled on Desktop.
   * 
   * @example of markup
    <div class="cheese-images">
      {% if images %}
      {{ attach_library('turbo/slider') }}
      {# Specify a child element to be the slider with 'sliderOptions.target'  #}
      {% set sliderOptions = '"slidesToShow": 1, "slidesToScroll": 1, "dots": true, "infinite": false' %}
      <div class="slider slider-product" data-slick='{ {{ sliderOptions }} }' data-slider-mobile-only="true">
        {{- images -}}
      </div>        
      {% endif %}
    </div>
   * @endcode
   */
  function slider(el, idx) {
    // Get the real targeted element to init/disable a slider on it.
    var dataSlick = $(el).attr('data-slick');
    var target = JSON.parse(dataSlick).target;
    var sliderElement = (target && typeof target !== undefined) ? $(el).find(target) : $(el);

    // Mobile only slider initialization.
    var mobileOnly = $(el).attr('data-slider-mobile-only');
    if (mobileOnly) {
      if (window.matchMedia(mobileBreakpoint).matches) {
        // Activate Slick Slider on Mobile.
        initSlider(sliderElement, idx);
      }
      else if (window.matchMedia(desktopBreakpoint).matches) {
        // Deactivate Slick Slider on Desktop.
        disableSlider(sliderElement, idx);
      }
    }
  }
  
  /**
   * Safely init a slider
   * @param {*} el 
   */
  function initSlider(el, idx) {
    if(!$(el).hasClass('slick-initialized')){
      // Init the targeted DOM element.
      $(el).slick();      
    }
  }

  /**
   * Safely deactivate an initialized Slick slider element
   * @param {*} el  
   */
  function disableSlider(el, idx) {
    if($(el).hasClass('slick-initialized')){
      $(el).slick('unslick');
    }
  }

  Drupal.behaviors.initSliders = {
    attach: function (context) {

      // Activate Slick Slider if mobile.
      $(document).on('ready', function(){
        // Get all sliders on the page.
        $(sliderElements).each(function(idx, item) {
          slider($(this), idx);
        });
      }); // window ready
        
      // On window resize.
      $(window).on('resize', function(){
        // Get all sliders on the page.
        $(sliderElements).each(function(idx, item) {
          slider($(this), idx);
        }); 
      }); // window resize.
    },
    detach: function (context) {
      // Deactivate Slick Slider.
      disableSlider($(this), idx);
    }
  };
 
}(jQuery, Drupal, drupalSettings));
  