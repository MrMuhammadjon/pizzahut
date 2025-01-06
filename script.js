let open_menu = document.getElementById("open-menu")
let close_menu = document.getElementById("close-menu")


open_menu.addEventListener("click", function () {

    if (close_menu.classList.contains('open-sidebar-l')) {

        close_menu.classList.remove('menu-siderbar')

    } else {

        close_menu.classList.add('open-sidebar-l')

    }
})


close_menu.addEventListener("click", function () {

    if (open_menu.classList.contains('menu-siderbar')) {

        open_menu.classList.add('menu-siderbar')

    } else {

        close_menu.classList.remove('open-sidebar-l')

    }
})
