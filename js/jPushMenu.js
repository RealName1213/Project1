(function($) {
    $.fn.jPushMenu = function(customOptions) {
        var o = $.extend({}, $.fn.jPushMenu.defaultOptions, customOptions);

        $('body').addClass(o.pushBodyClass);

        $(this).addClass('jPushMenuBtn');

        $(this).click(function(e) {
            e.stopPropagation();

            var target     = '',
            push_direction = '';

            if ($(this).is('.' + o.showLeftClass)) {
                target         = '.nav-menu-left';
                push_direction = 'toright';
            }
            else if ($(this).is('.' + o.showRightClass)) {
                target         = '.nav-menu-right';
                push_direction = 'toleft';
            }
            else if ($(this).is('.' + o.showTopClass)) {
                target = '.nav-menu-top';
            }
            else if ($(this).is('.' + o.showBottomClass)) {
                target = '.nav-menu-bottom';
            }

            if (target == '') {
                return;
            }

            $(this).toggleClass(o.activeClass);
            $(target).toggleClass(o.menuOpenClass);

            if ($(this).is('.' + o.pushBodyClass) && push_direction != '') {
                $('body').toggleClass(o.pushBodyClass + '-' + push_direction);
            }

            $('.jPushMenuBtn').not($(this)).toggleClass('disabled');

            return;
        });

        var jPushMenu = {
            close: function (o) {
                $('.jPushMenuBtn,body,.nav-menu')
                    .removeClass('disabled ' + o.activeClass + ' ' + o.menuOpenClass + ' ' + o.pushBodyClass + '-toleft ' + o.pushBodyClass + '-toright');
            }
        }

        if (o.closeOnClickOutside) {
             $(document).click(function() {
                jPushMenu.close(o);
             });
         }

        if (o.closeOnClickLink) {
            $('.nav-menu a').on('click',function() {
                jPushMenu.close(o);
            });
        }
    };

    $.fn.jPushMenu.defaultOptions = {
        pushBodyClass      : 'push-body',
        showLeftClass      : 'menu-left',
        showRightClass     : 'menu-right',
        showTopClass       : 'menu-top',
        showBottomClass    : 'menu-bottom',
        activeClass        : 'menu-active',
        menuOpenClass      : 'menu-open',
        closeOnClickOutside: true,
        closeOnClickLink   : true
    };
})(jQuery);
