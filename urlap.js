function UrlapBetoltes() {
            // A form elem létrehozása
            const urlap = document.createElement('form');
            urlap.action = "#";
            urlap.method = "post";

            // 1. Elem: Név (szöveges mező)
            const nevLabel = document.createElement('label');
            nevLabel.textContent = "Név: ";
            const nevInput = document.createElement('input');
            nevInput.type = "text";
            nevInput.name = "nev";
            nevInput.required = true;
            nevLabel.appendChild(nevInput);

            // 2. Elem: E-mail (email mező)
            const emailLabel = document.createElement('label');
            emailLabel.textContent = " E-mail: ";
            const emailInput = document.createElement('input');
            emailInput.type = "email";
            emailInput.name = "email";
            emailInput.required = true;
            emailLabel.appendChild(emailInput);

            // 3. Elem: Életkor (szám mező)
            const korLabel = document.createElement('label');
            korLabel.textContent = " Életkor: ";
            const korInput = document.createElement('input');
            korInput.type = "number";
            korInput.name = "eletkor";
            korInput.min = "18";
            korLabel.appendChild(korInput);

            // 4. Elem: Téma választása (lenyíló lista / select)
            const temaLabel = document.createElement('label');
            temaLabel.textContent = " Téma: ";
            const temaSelect = document.createElement('select');
            temaSelect.name = "tema";
            
            const opcio1 = document.createElement('option');
            opcio1.value = "altalanos";
            opcio1.textContent = "Általános megkeresés";
            
            const opcio2 = document.createElement('option');
            opcio2.value = "tamogatas";
            opcio2.textContent = "Technikai segítség";

            temaSelect.appendChild(opcio1);
            temaSelect.appendChild(opcio2);
            temaLabel.appendChild(temaSelect);

            // 5. Elem: Üzenet (szövegterület / textarea)
            const uzenetLabel = document.createElement('label');
            uzenetLabel.textContent = " Üzenet: ";
            const uzenetTextarea = document.createElement('textarea');
            uzenetTextarea.name = "uzenet";
            uzenetLabel.appendChild(uzenetTextarea);

            // 6. Elem: Küldés gomb (submit)
            const kuldesGomb = document.createElement('input');
            kuldesGomb.type = "submit";
            kuldesGomb.value = "Küldés";

            // Elemek hozzáadása a form-hoz (soremelésekkel a jobb megjelenésért)
            urlap.appendChild(nevLabel);
            urlap.appendChild(document.createElement('br'));
            urlap.appendChild(document.createElement('br'));

            urlap.appendChild(emailLabel);
            urlap.appendChild(document.createElement('br'));
            urlap.appendChild(document.createElement('br'));

            urlap.appendChild(korLabel);
            urlap.appendChild(document.createElement('br'));
            urlap.appendChild(document.createElement('br'));

            urlap.appendChild(temaLabel);
            urlap.appendChild(document.createElement('br'));
            urlap.appendChild(document.createElement('br'));

            urlap.appendChild(uzenetLabel);
            urlap.appendChild(document.createElement('br'));
            urlap.appendChild(document.createElement('br'));

            urlap.appendChild(kuldesGomb);

            
            document.body.appendChild(urlap);
        }

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

