function berekenLeeftijd() {
    var leeftijd1 = parseInt(document.getElementById("leeftijd1").value);
    var leeftijd2 = parseInt(document.getElementById("leeftijd2").value);

    var minleeftijd1 = leeftijd1 / 2 + 7;
    var minleeftijd2 = leeftijd2 / 2 + 7;

    if (minleeftijd1 < minleeftijd2 || minleeftijd1 > leeftijd2) {
        document.getElementById("melding").style.display = "block";
    } else {
        document.getElementById("melding").style.display = "none";
    }
}
