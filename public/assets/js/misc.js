function toggleSubMenu(subMenuId) {
    var subMenu = document.getElementById(subMenuId);
    subMenu.style.display = subMenu.style.display === "none" ? "block" : "none";
}

(function ($) {
    "use strict";
    $(function () {
        var body = $("body");
        var contentWrapper = $(".content-wrapper");
        var scroller = $(".container-scroller");
        var footer = $(".footer");
        var sidebar = $(".sidebar");

        //Add active class to nav-link based on url dynamically
        //Active class can be hard coded directly in html file also as required

     

        var current = location.pathname
            .split("/")
            .slice(-1)[0]
            .replace(/^\/|\/$/g, "");
        $(".nav li a", sidebar).each(function () {
            
        });

        $(".horizontal-menu .nav li a").each(function () {
           
        });

        //Close other submenu in sidebar on opening any
        sidebar.on("show.bs.collapse", ".collapse", function () {
            sidebar.find(".collapse.show").collapse("hide");
        });

        //Change sidebar and content-wrapper height
        applyStyles();

        function applyStyles() {
            //Applying perfect scrollbar
            if (!body.hasClass("rtl")) {
                if (body.hasClass("sidebar-fixed")) {
                    var fixedSidebarScroll = new PerfectScrollbar(
                        "#sidebar .nav"
                    );
                }
            }
        }

        $('[data-toggle="minimize"]').on("click", function () {
            if (
                body.hasClass("sidebar-toggle-display") ||
                body.hasClass("sidebar-absolute")
            ) {
                body.toggleClass("sidebar-hidden");
            } else {
                body.toggleClass("sidebar-icon-only");
            }
        });

        //checkbox and radios
        $(".form-check label,.form-radio label").append(
            '<i class="input-helper"></i>'
        );

        //fullscreen
        $("#fullscreen-button").on("click", function toggleFullScreen() {
            if (
                (document.fullScreenElement !== undefined &&
                    document.fullScreenElement === null) ||
                (document.msFullscreenElement !== undefined &&
                    document.msFullscreenElement === null) ||
                (document.mozFullScreen !== undefined &&
                    !document.mozFullScreen) ||
                (document.webkitIsFullScreen !== undefined &&
                    !document.webkitIsFullScreen)
            ) {
                if (document.documentElement.requestFullScreen) {
                    document.documentElement.requestFullScreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullScreen) {
                    document.documentElement.webkitRequestFullScreen(
                        Element.ALLOW_KEYBOARD_INPUT
                    );
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                }
            } else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        });

        if ($.cookie("purple-free-banner") != "true") {
            document.querySelector("#proBanner").classList.add("d-flex");
            document.querySelector(".navbar").classList.remove("fixed-top");
        } else {
            document.querySelector("#proBanner").classList.add("d-none");
            document.querySelector(".navbar").classList.add("fixed-top");
        }

        if ($(".navbar").hasClass("fixed-top")) {
            document
                .querySelector(".page-body-wrapper")
                .classList.remove("pt-0");
            document.querySelector(".navbar").classList.remove("pt-5");
        } else {
            document.querySelector(".page-body-wrapper").classList.add("pt-0");
            document.querySelector(".navbar").classList.add("pt-5");
            document.querySelector(".navbar").classList.add("mt-3");
        }
        document
            .querySelector("#bannerClose")
            .addEventListener("click", function () {
                document.querySelector("#proBanner").classList.add("d-none");
                document.querySelector("#proBanner").classList.remove("d-flex");
                document.querySelector(".navbar").classList.remove("pt-5");
                document.querySelector(".navbar").classList.add("fixed-top");
                document
                    .querySelector(".page-body-wrapper")
                    .classList.add("proBanner-padding-top");
                document.querySelector(".navbar").classList.remove("mt-3");
                var date = new Date();
                date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
                $.cookie("purple-free-banner", "true", { expires: date });
            });
    });
})(jQuery);
