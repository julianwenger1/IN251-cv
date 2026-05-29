function checkLogin() {
    const pw = document.getElementById("passwordInput").value;
    if (pw.trim() === "") {
        alert("Bitte Passwort eingeben!");
        return;
    }
    window.location.href = pw + ".html";
}

function drawCircle() {
    let radius = parseInt(document.getElementById("radiusInput").value);
    if (radius < 10) radius = 10;
    if (radius > 150) radius = 150;
    
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "#0056b3";
    ctx.fill();
    
    document.getElementById("gadgetOutput").innerText = "Kreis gezeichnet: " + radius + "px";
}
