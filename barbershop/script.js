document.addEventListener("DOMContentLoaded", function () {

    const phoneInput = document.getElementById("phone");
    const bookingForm = document.querySelector("#booking form");
    const timeInput = bookingForm.querySelector('input[type="time"]');

    if (!phoneInput || !bookingForm || !timeInput) return;

    phoneInput.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
        if (this.value.length > 9) {
            this.value = this.value.slice(0, 9);
        }
    });

    timeInput.min = "09:00";
    timeInput.max = "19:30";

    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Kontroll telefoni
        if (phoneInput.value.length !== 9) {
            alert("Numri i telefonit duhet të ketë saktësisht 9 shifra.");
            phoneInput.focus();
            return;
        }

        if (timeInput.value < "09:00" || timeInput.value > "19:30") {
            alert("Orari i rezervimit duhet të jetë mes 09:00 dhe 19:30.");
            timeInput.focus();
            return;
        }

        showSuccessMessage();
        bookingForm.reset();
    });

    function showSuccessMessage() {
        let msg = document.createElement("div");
        msg.className = "alert alert-success text-center mt-4";
        msg.innerText = "✅ Rezervimi u dërgua me sukses! Ju faleminderit.";

        bookingForm.appendChild(msg);

        setTimeout(() => {
            msg.remove();
        }, 4000);
    }

});

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("staffSearch");
    const staffCards = document.querySelectorAll(".staff-card");
    const noResultText = document.getElementById("noStaffResult");

    if (!searchInput) return;

    searchInput.addEventListener("input", function () {
        const value = this.value.toLowerCase();
        let found = false;

        staffCards.forEach(card => {
            const name = card
                .querySelector(".card-title")
                .innerText
                .toLowerCase();

            if (name.includes(value)) {
                card.parentElement.style.display = "block";
                found = true;
            } else {
                card.parentElement.style.display = "none";
            }
        });
        // shfaq ose fshih mesazhin
        if (!found && value !== "") {
            noResultText.style.display = "block";
        } else {
            noResultText.style.display = "none";
        }
    });
});