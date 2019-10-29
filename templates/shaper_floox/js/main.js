/**
 * @package Helix3 Framework
 * @author JoomShaper http://www.joomshaper.com
 * @copyright Copyright (c) 2010 - 2017 JoomShaper
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
 */

jQuery(function($) {

    // ************    START Helix 1.4 JS    ************** //
    // **************************************************** //

    //Default
    if (typeof sp_offanimation === 'undefined' || sp_offanimation === '') {
        sp_offanimation = 'default';
    }

    if (sp_offanimation == 'default') {
        $('#offcanvas-toggler').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('offcanvas');
        });

        $('<div class="offcanvas-overlay"></div>').insertBefore('.offcanvas-menu');
        $('.close-offcanvas, .offcanvas-overlay').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('offcanvas');
        });
    }

    // Slide Top Menu
    if (sp_offanimation == 'slidetop') {
        $('#offcanvas-toggler').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('slide-top-menu');
        });

        $('<div class="offcanvas-overlay"></div>').insertBefore('.offcanvas-menu');
        $('.close-offcanvas, .offcanvas-overlay').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('slide-top-menu');
        });
    }

    //Full Screen
    if (sp_offanimation == 'fullscreen') {
        $('#offcanvas-toggler').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('full-screen-off-canvas');
        });
        $(document).ready(function() {
            $('.off-canvas-menu-init').addClass('full-screen');
        });
        $('.close-offcanvas, .offcanvas-overlay').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('full-screen-off-canvas');
        });
    }

    //Full screen from top
    if (sp_offanimation == 'fullScreen-top') {
        $('#offcanvas-toggler').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('full-screen-off-canvas-ftop');
        });
        $(document).ready(function() {
            $('.off-canvas-menu-init').addClass('full-screen-ftop');
        });
        $('.close-offcanvas, .offcanvas-overlay').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('full-screen-off-canvas-ftop');
        });
    }

    //Dark with plus
    if (sp_offanimation == 'drarkplus') {
        $('#offcanvas-toggler').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('new-look-off-canvas');
        });
        $('<div class="offcanvas-overlay"></div>').insertBefore('.offcanvas-menu');
        $(document).ready(function() {
            $('.off-canvas-menu-init').addClass('new-look');
        });
        $('.close-offcanvas,.offcanvas-overlay').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('new-look-off-canvas');
        });
    }

    // if sticky header
    if ($("body.sticky-header").length > 0) {
        var fixedSection = $('#sp-header');
        // sticky nav
        var headerHeight = fixedSection.outerHeight();
        var stickyNavTop = fixedSection.offset().top;
        fixedSection.addClass('animated');
        fixedSection.before('<div class="nav-placeholder"></div>');
        $('.nav-placeholder').height('inherit');
        //add class
        fixedSection.addClass('menu-fixed-out');
        var stickyNav = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyNavTop) {
                fixedSection.removeClass('menu-fixed-out').addClass('menu-fixed');
                $('.nav-placeholder').height(headerHeight);
            } else {
                if (fixedSection.hasClass('menu-fixed')) {
                    fixedSection.removeClass('menu-fixed').addClass('menu-fixed-out');
                    $('.nav-placeholder').height('inherit');
                }
            }
        };
        stickyNav();
        $(window).scroll(function() {
            stickyNav();
        });
    }
    // go to top
    if (typeof sp_gotop === 'undefined') {
        sp_gotop = '';
    }

    if (sp_gotop) {
        // go to top
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut(400);
            }
        });

        $('.scrollup').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    } // has go to top

    // Preloader
    if (typeof sp_preloader === 'undefined') {
        sp_preloader = '';
    }

    if (sp_preloader) {
        $(window).on('load', function() {
            if ($('.sp-loader-with-logo').length > 0) {
                move();
            }
            setTimeout(function() {
                $('.sp-pre-loader').fadeOut();
            }, 1000);
        });
    } // has preloader
    //preloader Function
    function move() {
        var elem = document.getElementById("line-load");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    // ************    END:: Helix 1.4 JS    ************** //
    // **************************************************** //

    // **************   START Mega SCRIPT   *************** //
    // **************************************************** //

    //mega menu
    $('.sp-megamenu-wrapper').parent().parent().css('position', 'static').parent().css('position', 'relative');
    $('.sp-menu-full').each(function() {
        $(this).parent().addClass('menu-justify');
    });

    // boxlayout
    if ($("body.layout-boxed").length > 0) {
        var windowWidth = $('#sp-header').parent().outerWidth();
        $("#sp-header").css({ "max-width": windowWidth, "left": "auto" });
    }

    // **************   END:: Mega SCRIPT   *************** //
    // **************************************************** //

    // **************  START Others SCRIPT  *************** //
    // **************************************************** //

    //Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Article Ajax voting
    $(document).on('click', '.sp-rating .star', function(event) {
        event.preventDefault();

        var data = {
            'action': 'voting',
            'user_rating': $(this).data('number'),
            'id': $(this).closest('.post_rating').attr('id')
        };

        var request = {
            'option': 'com_ajax',
            'plugin': 'helix3',
            'data': data,
            'format': 'json'
        };

        $.ajax({
            type: 'POST',
            data: request,
            beforeSend: function() {
                $('.post_rating .ajax-loader').show();
            },
            success: function(response) {
                var data = $.parseJSON(response.data);

                $('.post_rating .ajax-loader').hide();

                if (data.status == 'invalid') {
                    $('.post_rating .voting-result').text('You have already rated this entry!').fadeIn('fast');
                } else if (data.status == 'false') {
                    $('.post_rating .voting-result').text('Somethings wrong here, try again!').fadeIn('fast');
                } else if (data.status == 'true') {
                    var rate = data.action;
                    $('.voting-symbol').find('.star').each(function(i) {
                        if (i < rate) {
                            $(".star").eq(-(i + 1)).addClass('active');
                        }
                    });

                    $('.post_rating .voting-result').text('Thank You!').fadeIn('fast');
                }

            },
            error: function() {
                $('.post_rating .ajax-loader').hide();
                $('.post_rating .voting-result').text('Failed to rate, try again!').fadeIn('fast');
            }
        });
    });

    // **************  END:: Others SCRIPT  *************** //
    // **************************************************** //

    // **************  START FLOOX SCRIPT  *************** //
    // **************************************************** //

    // Top Search
    $(".search-open-icon").on('click', function() {
        $(".top-search-input-wrap, .top-search-overlay").fadeIn(200);
        $(this).hide();
        $('.search-close-icon').show().css('display', 'inline-block');
        $('body.off-canvas-menu-init').css({ 'overflow-y': 'hidden' });
        $('#sp-header').css({ 'z-index': '999' });
        $('.top-search-input-wrap').css('height', '100vh');
    });

    $(".search-close-icon, .top-search-overlay").on('click', function() {
        $(".top-search-input-wrap, .top-search-overlay").fadeOut(200);
        $('.search-close-icon').hide();
        $('.search-open-icon').show();
        $('body.off-canvas-menu-init').css({
            'overflow-y': 'initial'
        });
        $('#sp-header').css({ 'z-index': '99' });
        $('.top-search-input-wrap').css('height', '100%');
    });

    // press esc to hide search
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // esc keycode
            $(".top-search-input-wrap").fadeOut(200);
            $(".search-close-icon").fadeOut(200);
            $(".search-open-icon").delay(200).fadeIn(200);
            $('body.off-canvas-menu-init').css({ 'overflow-y': 'initial' });
        }
    });
    // End Top Search

    // Select
    $(document).on('click', function(e) {
        var selector = $('.sp-select');
        if (!selector.is(e.target) && selector.has(e.target).length === 0) {
            selector.find('ul').slideUp();
            selector.removeClass('active');
        }
    });

    $('.mod-languages select').each(function(event) {
        $(this).hide();
        var $self = $(this);
        var spselect = '<div class="sp-select">';
        spselect += '<div class="sp-select-result">';
        spselect += '<span class="sp-select-text">' + $self.find('option:selected').text() + '</span>';
        spselect += ' <i class="fa fa-angle-down"></i>';
        spselect += '</div>';
        spselect += '<ul class="sp-select-dropdown">';

        $self.children().each(function(event) {
            if ($self.val() == $(this).val()) {
                spselect += '<li class="active" data-val="' + $(this).val() + '">' + $(this).text() + '</li>';
            } else {
                spselect += '<li data-val="' + $(this).val() + '">' + $(this).text() + '</li>';
            }
        });

        spselect += '</ul>';
        spselect += '</div>';
        $(this).after($(spselect));
    });

    $(document).on('click', '.sp-select', function(event) {
        $('.sp-select').not(this).find('ul').slideUp();
        $(this).find('ul').slideToggle();
        $(this).toggleClass('active');
    });

    $(document).on('click', '.sp-select ul li', function(event) {
        var $select = $(this).closest('.sp-select').prev('select');
        $(this).parent().prev('.sp-select-result').find('span').html($(this).text());
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        $select.val($(this).data('val'));
        $select.change();
    });
    // End Select

    $('#sp-bottom .container .row').wrapAll('<div class="bottom-content-wrap"></div>');
    $('.owl-controls').wrapAll('<div class="sppb-container"></div>');

    if ($('body.view-article article #sp-page-builder').length > 0) {
        $('body.view-article').addClass('article-with-sppb')
    }

    if ($('#sp-page-title #sp-title>.sp-column:empty').length > 0) {
        $('body:not(.com-sppagebuilder)').addClass('no-page-title');
    }

    $(document).on('click', '.sppb-addon-title', function(event) {
        event.preventDefault();
        var e = $(this).closest(".sppb-addon-accordion"),
            i = e.find(".sppb-addon-title"),
            n = e.find(".sppb-addon-content");
        $(this).hasClass("active") ? ($(this).removeClass("active"), n.slideUp()) : (i.removeClass("active"), n.slideUp(), $(this).addClass("active").next().slideDown())
    });

    // **************   END:: FLOOX SCRIPT   *************** //
    // **************************************************** //
});


jQuery(function($) {
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var newNodes = mutation.addedNodes;
            if (newNodes !== null) {
                var $nodes = $(newNodes);

                $nodes.each(function() {
                    var $node = $(this);
                    $node.find('#slide-fullwidth').each(function() {
                        var $slideFullwidth = $(this);

                        var $autoplay = $slideFullwidth.attr("data-sppb-slide-ride");
                        if ($autoplay == "true") {
                            var $autoplay = true;
                        } else {
                            var $autoplay = false
                        }
                        var $controllers = $slideFullwidth.attr("data-sppb-slidefull-controllers");
                        if ($controllers == "true") {
                            var $controllers = true;
                        } else {
                            var $controllers = false
                        }

                        $slideFullwidth.owlCarousel({
                            margin: 0,
                            loop: true,
                            video: true,
                            autoplay: $autoplay,
                            animateIn: "fadeIn",
                            animateOut: "fadeOut",
                            autoplayHoverPause: true,
                            autoplaySpeed: 1500,
                            responsive: {
                                0: {
                                    items: 1
                                },
                                600: {
                                    items: 1
                                },
                                1000: {
                                    items: 1
                                }
                            },
                            dots: $controllers,
                        });

                        $(".sppbSlidePrev").click(function() {
                            $slideFullwidth.trigger("prev.owl.carousel", [400]);
                        });

                        $(".sppbSlideNext").click(function() {
                            $slideFullwidth.trigger("next.owl.carousel", [400]);
                        });
                        $(".owl-controls").wrapAll("<div class='sppb-container'></div>");

                    });
                });
            }
        });
    });

    var config = {
        childList: true,
        subtree: true
    };

    // Pass in the target node, as well as the observer options
    observer.observe(document.body, config);
});