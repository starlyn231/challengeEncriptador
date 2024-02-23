function showSnackbar(message) {
    var snackBar = document.getElementById("snackbar");
    var snackBarContent = document.getElementById("snackbar-content");

    // Set the message content
    snackBarContent.textContent = message;

    // Dynamically Adding class to HTML element
    snackBar.classList.add("show-bar");

    setTimeout(function () {
        // Dynamically Removing the Class from HTML element
        // By Replacing it with an Empty String after 5 seconds
        snackBar.classList.remove("show-bar");
    }, 5000);
}