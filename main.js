var typed = new Typed(".text", {
    strings: ["Data Engineer", "Data Analyst", "BI Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



// Ouvrir une modale
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

// Fermer avec la croix
document.querySelectorAll(".modal-close").forEach(button => {
    button.addEventListener("click", () => {
        closeAllModals();
    });
});

// Fermer en cliquant à l'extérieur
document.querySelectorAll(".modal-overlay").forEach(modal => {
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            closeAllModals();
        }
    });
});

// Fermer avec Escape
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeAllModals();
    }
});

function closeAllModals() {
    document.querySelectorAll(".modal-overlay").forEach(modal => {
        modal.classList.remove("active");
    });

    document.body.style.overflow = "";
}
