// Așteptăm ca DOM-ul să fie complet încărcat
document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('add-card-form');
    const cardsContainer = document.getElementById('cards-container');

    recipeForm.addEventListener('submit', (e) => {
        // Prevenim reîncărcarea paginii la trimiterea formularului
        e.preventDefault();

        // Preluăm valorile din câmpuri
        const titleInput = document.getElementById('card-title');
        const descInput = document.getElementById('card-desc');

        const titleText = titleInput.value.trim();
        const descText = descInput.value.trim();

        if (titleText !== '' && descText !== '') {
            // Creăm elementul pentru noul card
            const card = document.createElement('div');
            card.className = 'dynamic-card';

            // Introducem conținutul HTML în card
            card.innerHTML = `
                <h4>${titleText}</h4>
                <p>${descText}</p>
            `;

            // Adăugăm cardul în containerul din pagină
            cardsContainer.appendChild(card);

            // Resetăm câmpurile formularului
            titleInput.value = '';
            descInput.value = '';
        }
    });
});