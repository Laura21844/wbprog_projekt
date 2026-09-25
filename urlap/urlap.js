function UrlapBetoltes() {
    // 1. A form elem létrehozása
    const urlap = document.createElement('form');
    urlap.id = "idopontForm";

    // 2. Elem: Név (szöveges mező validációval)
    const nevLabel = document.createElement('label');
    nevLabel.textContent = "Teljes név: ";
    const nevInput = document.createElement('input');
    nevInput.type = "text";
    nevInput.name = "nev";
    nevInput.id = "nev";
    nevInput.required = true;
    nevInput.minLength = 3; 
    nevLabel.appendChild(nevInput);

    // 3. Elem: E-mail (email mező)
    const emailLabel = document.createElement('label');
    emailLabel.textContent = "E-mail cím: ";
    const emailInput = document.createElement('input');
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.id = "email";
    emailInput.required = true;
    emailLabel.appendChild(emailInput);

    // 4. Elem: Telefonszám (tel mező)
    const telLabel = document.createElement('label');
    telLabel.textContent = "Telefonszám: ";
    const telInput = document.createElement('input');
    telInput.type = "tel";
    telInput.name = "telefon";
    telInput.id = "telefon";
    telInput.placeholder = "+36301234567";
    telInput.required = true;
    telLabel.appendChild(telInput);

    // 5. Elem: Szolgáltatás kiválasztása (Select)
    const szolgalatLabel = document.createElement('label');
    szolgalatLabel.textContent = "Választott szolgáltatás: ";
    const szolgalatSelect = document.createElement('select');
    szolgalatSelect.name = "szolgaltatas";
    szolgalatSelect.id = "szolgaltatas";
    szolgalatSelect.required = true;

    const opcio1 = document.createElement('option');
    opcio1.value = "Esküvői fotózás";
    opcio1.textContent = "Esküvői fotózás";

    const opcio2 = document.createElement('option');
    opcio2.value = "Jegyes fotózás";
    opcio2.textContent = "Jegyes fotózás";

    const opcio3 = document.createElement('option');
    opcio3.value = "Párfotózás";
    opcio3.textContent = "Párfotózás";

    szolgalatSelect.appendChild(opcio1);
    szolgalatSelect.appendChild(opcio2);
    szolgalatSelect.appendChild(opcio3);
    szolgalatLabel.appendChild(szolgalatSelect);

    // 6. Elem: Időpont kiválasztása 
    const datumLabel = document.createElement('label');
    datumLabel.textContent = "Foglalás dátuma: ";
    const datumInput = document.createElement('input');
    datumInput.type = "date";
    datumInput.name = "datum";
    datumInput.id = "datum";
    datumInput.required = true;

    // Dinamikus min. dátum beállítása 
    const ma = new Date().toISOString().split('T')[0];
    datumInput.min = ma;

    datumLabel.appendChild(datumInput);

    // 7. Elem: Megjegyzés / Üzenet 
    const megjegyzesLabel = document.createElement('label');
    megjegyzesLabel.textContent = "Megjegyzés / Részletek: ";
    const megjegyzesTextarea = document.createElement('textarea');
    megjegyzesTextarea.name = "megjegyzes";
    megjegyzesTextarea.id = "megjegyzes";
    megjegyzesTextarea.rows = 4;
    megjegyzesLabel.appendChild(megjegyzesTextarea);

    // 8. Elem: Foglalás gomb
    const kuldesGomb = document.createElement('input');
    kuldesGomb.type = "submit";
    kuldesGomb.value = "Időpont lefoglalása";

    // Elemek csatolása a formhoz
    urlap.appendChild(nevLabel);
    urlap.appendChild(emailLabel);
    urlap.appendChild(telLabel);
    urlap.appendChild(szolgalatLabel);
    urlap.appendChild(datumLabel);
    urlap.appendChild(megjegyzesLabel);
    urlap.appendChild(kuldesGomb);

    // Eseménykezelő az űrlap beküldésére 
    urlap.addEventListener('submit', function (event) {
        event.preventDefault(); // Megakadályozza a lap újratöltését

        const foglalasAdatok = {
            nev: document.getElementById('nev').value,
            email: document.getElementById('email').value,
            telefon: document.getElementById('telefon').value,
            szolgaltatas: document.getElementById('szolgaltatas').value,
            datum: document.getElementById('datum').value,
            megjegyzes: document.getElementById('megjegyzes').value
        };

        // Mentés a böngészőbe
        localStorage.setItem('idopontFoglalas', JSON.stringify(foglalasAdatok));

        // Átirányítás az eredményző oldalra
        window.location.href = 'urlapvisszaigazolo.html';
    });

    // Űrlap beillesztése a tároló elembe
    const container = document.getElementById('urlap-container');
    if (container) {
        container.appendChild(urlap);
    } else {
        document.body.appendChild(urlap);
    }
}