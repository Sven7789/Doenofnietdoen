function berekenLeeftijd() {
    var leeftijd1 = parseInt(document.getElementById("leeftijd1").value);
    var leeftijd2 = parseInt(document.getElementById("leeftijd2").value);

    // Bereken de minimumleeftijd die beide personen mogen hebben om een relatie te hebben
    var minimumLeeftijd = Math.min((leeftijd1 / 2) + 7, (leeftijd2 / 2) + 7);

    // Toon de minimumleeftijd
    document.getElementById("minimumLeeftijd").textContent = minimumLeeftijd;

    // Controleer of de leeftijd van een persoon de minimumleeftijd overschrijdt en toon/verberg de melding dienovereenkomstig
    if (leeftijd1 < minimumLeeftijd || leeftijd2 < minimumLeeftijd) {
        document.getElementById("melding").style.display = "block";
    } else {
        document.getElementById("melding").style.display = "none";
    }
}
