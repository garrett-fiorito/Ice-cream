document.getElementById("ice-cream-form").onsubmit = () => {
    let isValid = true;

    clearErrors();

    // Validate name
    let name = document.getElementById("name").value.trim();

    if (name === "") {
        document.getElementById("err-name").style.display = "block";
        isValid = false;
    }

    // Validate email
    let email = document.getElementById("email").value.trim();

    if (email === "" || !email.includes("@")) {
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    }

    // Validate flavor
    let flavor = document.getElementById("flavor").value;

    if (flavor === "none") {
        document.getElementById("err-flavor").style.display = "block";
        isValid = false;
    }

    // Validate cone selection
    let coneSelected = false;
    let coneButtons = document.getElementsByName("cone");

    for (let i = 0; i < coneButtons.length; i++) {
        if (coneButtons[i].checked) {
            coneSelected = true;
        }
    }

    if (!coneSelected) {
        document.getElementById("err-cone").style.display = "block";
        isValid = false;
    }

    return isValid;
};

function clearErrors() {
    let errors = document.getElementsByClassName("error");

    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}