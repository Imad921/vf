document.addEventListener("DOMContentLoaded", () => {

    const tableBody = document.querySelector("#factureTable tbody");

    const sousTotalElement = document.getElementById("sousTotal");

    const moinsRemiseElement = document.getElementById("moinsRemise");

    const taxeTotaleElement = document.getElementById("taxeTotale");

    const soldeFinalElement = document.getElementById("soldeFinal");


    const remiseInput = document.getElementById("remise");

    const taxeInput = document.getElementById("taxe");

    const expeditionInput = document.getElementById("expedition");


    // Ajouter une ligne

    document.getElementById("ajouterLigne").addEventListener("click", () => {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td><input type="text" placeholder="Description"></td>

            <td><input type="number" class="quantite" value="0"></td>

            <td><input type="number" class="prixUnitaire" value="0"></td>

            <td class="total">0.00</td>

        `;

        tableBody.appendChild(row);

    });


    // Remplir automatiquement

    document.getElementById("remplirAuto").addEventListener("click", () => {

        for (let i = 0; i < 3; i++) {

            const row = document.createElement("tr");

            row.innerHTML = `

                <td>Produit ${Math.floor(Math.random() * 100)}</td>

                <td><input type="number" class="quantite" value="${Math.floor(Math.random() * 10) + 1}"></td>

                <td><input type="number" class="prixUnitaire" value="${(Math.random() * 100).toFixed(2)}"></td>

                <td class="total">0.00</td>

            `;

            tableBody.appendChild(row);

        }

    });


    // Calculer les totaux

    document.getElementById("calculer").addEventListener("click", () => {

        let sousTotal = 0;


        tableBody.querySelectorAll("tr").forEach(row => {

            const quantite = parseFloat(row.querySelector(".quantite").value) || 0;

            const prixUnitaire = parseFloat(row.querySelector(".prixUnitaire").value) || 0;

            const total = quantite * prixUnitaire;

            row.querySelector(".total").textContent = total.toFixed(2);

            sousTotal += total;

        });


        const remise = parseFloat(remiseInput.value) || 0;

        const taxe = parseFloat(taxeInput.value) || 0;

        const fraisExpedition = parseFloat(expeditionInput.value) || 0;


        const sousTotalMoinsRemise = sousTotal - (sousTotal * remise / 100);

        const taxeTotale = sousTotal * taxe / 100;

        const soldeFinal = sousTotalMoinsRemise + taxeTotale + fraisExpedition;


        sousTotalElement.textContent = sousTotal.toFixed(2);

        moinsRemiseElement.textContent = sousTotalMoinsRemise.toFixed(2);

        taxeTotaleElement.textContent = taxeTotale.toFixed(2);

        soldeFinalElement.textContent = soldeFinal.toFixed(2);

    });


    // Annuler toutes les lignes

    document.getElementById("annuler").addEventListener("click", () => {

        tableBody.innerHTML = "";

    });

});
function accueil(){
    document.location.href="../index.html";
}
