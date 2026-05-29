function checkLogin() {
    const pw = document.getElementById("passwordInput").value;
    if (pw.trim() === "") {
        alert("Bitte Passwort eingeben!");
        return;
    }
    window.location.href = pw + ".html";
}
