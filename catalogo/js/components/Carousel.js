import { createCard } from './Card.js';

console.log('✅ Carousel.js carregado');

export function createCarousel(category) {
    try {
        console.log(`🎞️ createCarousel chamado para: ${category.title}`);
        const section = document.createElement('div');
        section.className = 'slider-section';

        // Header for Title and Indicators
        const header = document.createElement('div');
        header.className = 'slider-header';

        const title = document.createElement('h2');
        title.className = 'slider-title';
        title.innerText = category.title;

        const indicators = document.createElement('div');
        indicators.className = 'slider-indicators';

        header.appendChild(title);
        header.appendChild(indicators);
        section.appendChild(header);

        const row = document.createElement('div');
        row.className = 'movie-row';

        category.items.forEach(item => {
            const card = createCard(item);
            row.appendChild(card);
        });

        section.appendChild(row);
        return section;
    } catch (error) {
        console.error(`❌ Erro ao criar carousel para ${category.title}:`, error);
        console.error('Stack:', error.stack);
        throw error;
    }
}
