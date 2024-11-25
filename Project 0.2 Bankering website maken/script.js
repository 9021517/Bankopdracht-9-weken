// script.js
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Voorkom standaard navigatie
        const page = this.getAttribute('href'); // Haal de pagina op
        loadContent(page);
    });
});

function loadContent(page) {
    // Simuleer het laden van een pagina-inhoud
    const content = document.getElementById('content');
    content.innerHTML = `<h1>${page.replace('.html', '')}</h1><p>Inhoud wordt hier geladen...</p>`;
}
