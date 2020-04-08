/*sticky menu*/
$(".js-function").waypoint(function (direction) {
    if (direction == "down") {
        $("nav").addClass("sticky");
    } else {
        $("nav").removeClass("sticky");
    }
});

/*smooth-scroll*/
$('a').smoothScroll();



/*mixitup plugin*/
var mixer = mixitup('.port-col-2');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});









/*hamburger - menu*/


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
