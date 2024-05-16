function berekenLeeftijd() {
    var leeftijd1 = parseInt(document.getElementById("leeftijd1").value);
    var leeftijd2 = parseInt(document.getElementById("leeftijd2").value);

    // Bereken de minimumleeftijd die persoon 1 mag hebben om een relatie te hebben met persoon 2
    var minimumLeeftijd1 = (leeftijd2 - 7) * 2;

    // Bereken de minimumleeftijd die persoon 2 mag hebben om een relatie te hebben met persoon 1
    var minimumLeeftijd2 = (leeftijd1 - 7) * 2;

    // Toon de minimumleeftijden
    document.getElementById("minimumLeeftijd1").textContent = minimumLeeftijd1;
    document.getElementById("minimumLeeftijd2").textContent = minimumLeeftijd2;

    // Controleer of de leeftijd van een persoon de minimumleeftijd van de andere persoon overschrijdt en toon/verberg de melding dienovereenkomstig
    if (leeftijd1 < minimumLeeftijd2 || leeftijd2 < minimumLeeftijd1) {
        document.getElementById("melding").style.display = "block";
    } else {
        document.getElementById("melding").style.display = "none";
    }
}
