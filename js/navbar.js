const navLinks = document.querySelectorAll(".nav li.group");

navLinks.forEach(nav => {
    nav.addEventListener("click", () => {
        const dropdownItem = nav.querySelector(".dropdown");

        if (dropdownItem) {
            if (dropdownItem.classList.contains("hidden")) {
                dropdownItem.classList.remove("hidden");
                dropdownItem.classList.add("block");
            } else {
                dropdownItem.classList.remove("block");
                dropdownItem.classList.add("hidden");
            }
        } else {
            console.log('no dropdown')
        }
    });
});

window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn')) {

        navLinks.forEach(nav => {
            const dropdownItem = nav.querySelector(".dropdown");

            if (dropdownItem) {
                dropdownItem.classList.remove("block");
                dropdownItem.classList.add("hidden");
            }
        })
    }
}