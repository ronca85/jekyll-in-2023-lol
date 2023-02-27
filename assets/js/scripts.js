var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

// custom
document.getElementById("js-copyright-year").innerHTML = new Date().getFullYear();

var mobileDropdownToggleButtons = [...document.querySelectorAll(".js-mobile-dropdown-toggle")]
var mobileDropdownPanels = [...document.querySelectorAll(".js-mobile-dropdown-panel")]

function handleClickMobileDropdownToggle(el) {
    
    var panel = el.target.nextElementSibling;

    if (!panel.classList.contains('active')) {
        panel.classList.add('active');
        panel.style.height = 'auto';
    
        var height = panel.clientHeight + 'px';
    
        panel.style.height = '0px';
    
        setTimeout(function () {
            panel.style.height = height;
        }, 0);
    } else {
        panel.style.height = '0px';
    
        panel.addEventListener('transitionend', function () {
            panel.classList.remove('active');
        }, {
            once: true
        });
    }
}

mobileDropdownToggleButtons.forEach((item) => {
    item.addEventListener("click", handleClickMobileDropdownToggle)
})
