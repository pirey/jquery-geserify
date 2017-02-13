(function($) {

  $.fn.geserify = function(opt) {

    return this.each(function() {

      var _this = $(this);

      opt = $.extend({
        autoPlay: true,
        itemWidth: 600,
        itemHeight: 400,
        interval: 2000
      }, opt || {} );

      var translated = 0;
      var pos = 1;
      var carouselWrap = _this.find('.carousel-wrap');
      var carousel = _this.find('.carousel');
      var childCount = carousel.find('.item').length;
      var nextBtn = _this.find('.next');
      var prevBtn = _this.find('.prev');
      var carouselItems = carousel.find('.item');
      var intervalId;

      carouselWrap.css({
        width: opt.itemWidth + 'px',
        height: opt.itemHeight + 'px'
      });

      carousel.css({
        width: (opt.itemWidth * childCount) + 'px',
        height: opt.itemHeight + 'px' 
      });

      carouselItems.css({
        width: opt.itemWidth + 'px'
      });

      autoPlay();

      function autoPlay() {
        if (opt.autoPlay) {
          intervalId = window.setInterval(next, opt.interval);
        }
      }

      function next(e) {

        window.clearInterval(intervalId);
        autoPlay();

        translated += opt.itemWidth;

        if (pos === childCount) {
          pos = 0;
          translated = 0;
        }

        carousel.css({
          transform: 'translateX(-'+ translated + 'px)'
        });

        pos++;

      }

      function prev(e) {

        window.clearInterval(intervalId);
        autoPlay();

        translated -= opt.itemWidth;

        if (pos === 1) {
          pos = childCount + 1;
          translated = opt.itemWidth * (childCount-1);
        }

        carousel.css('transform', 'translateX(-' + translated + 'px)');

        pos--;

      }

      $(nextBtn).on('click', next);

      $(prevBtn).on('click', prev);

    });

  };

})(jQuery);
