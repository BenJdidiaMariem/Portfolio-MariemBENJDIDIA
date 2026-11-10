/*var typed = new Typed(".text", {
    strings: ["Data Engineer", "Data Analyst", "BI Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});*/




/* ==============================
   MODALS
============================== */

// Open modal
document.querySelectorAll("[data-modal]").forEach(button => {

    button.addEventListener("click", () => {

        const modalId = button.getAttribute("data-modal");
        const modal = document.getElementById(modalId);

        if (modal) {
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        }

    });

});

// Close modal
function closeAllModals() {

    document.querySelectorAll(".modal-overlay").forEach(modal => {
        modal.classList.remove("active");
    });

    document.body.style.overflow = "";

}

// Close with X
document.querySelectorAll(".modal-close").forEach(button => {

    button.addEventListener("click", closeAllModals);

});

// Close by clicking outside
document.querySelectorAll(".modal-overlay").forEach(modal => {

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            closeAllModals();
        }

    });

});

// Close with Escape
document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeAllModals();
    }

});


/* ==============================
   MOBILE NAVIGATION
============================== */

function hamburg() {

    document.querySelector(".dropdown").style.transform =
        "translateY(0)";

}

function cancel() {

    document.querySelector(".dropdown").style.transform =
        "translateY(-100%)";

}
