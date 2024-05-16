function berekenLeeftijd() {
    var leeftijd1 = parseInt(document.getElementById("leeftijd1").value);
    var leeftijd2 = parseInt(document.getElementById("leeftijd2").value);

    // Bereken het resultaat
    var resultaat = (leeftijd1 / 2) + 7;

    // Toon het resultaat
    document.getElementById("resultaat").textContent = resultaat;

    // Controleer of het resultaat groter is dan leeftijd2 en toon/verberg de melding dienovereenkomstig
    if (resultaat > leeftijd2) {
        document.getElementById("melding").style.display = "block";
    } 
    else
    {
        document.getElementById("melding").style.display = "none";
    }
    elseif (leeftijd2 >= resultaat)
    {
        document.getElementById("melding").style.display = "block";
    }
}
