function berekenLeeftijd() {
    var leeftijd1 = parseInt(document.getElementById("leeftijd1").value);
    var leeftijd2 = parseInt(document.getElementById("leeftijd2").value);

    // Bereken het resultaat voor persoon 1 ouder dan persoon 2
    var resultaat1 = (leeftijd1 / 2) + 7;

    // Bereken het resultaat voor persoon 2 ouder dan persoon 1
    var resultaat2 = (leeftijd2 / 2) + 7;

    // Als persoon 1 jonger is dan persoon 2, voeg het leeftijdsverschil toe aan het resultaat
    if (leeftijd1 < leeftijd2) {
        resultaat1 += (leeftijd2 - leeftijd1);
    } else if (leeftijd2 < leeftijd1) {
        resultaat2 += (leeftijd1 - leeftijd2);
    }

    // Toon het resultaat
    document.getElementById("resultaat1").textContent = resultaat1;
    document.getElementById("resultaat2").textContent = resultaat2;

    // Controleer of het resultaat groter is dan de leeftijd van de andere persoon en toon/verberg de melding dienovereenkomstig
    if (resultaat1 > leeftijd2 || resultaat2 > leeftijd1) {
        document.getElementById("melding").style.display = "block";
    } else {
        document.getElementById("melding").style.display = "none";
    }
}
