import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

console.log('✅ main.js carregado');
console.log('📦 Categorias importadas:', categories);

function initCarousel() {
    try {
        console.log('🎬 Iniciando carrossel...');
        const container = document.getElementById('main-content');
        
        if (!container) {
            console.error('❌ Container #main-content não encontrado');
            return;
        }

        if (!categories || categories.length === 0) {
            console.error('❌ Categorias não carregadas');
            return;
        }

        categories.forEach(category => {
            console.log(`📺 Criando carousel para: ${category.title}`);
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
        
        console.log('✅ Carrossel inicializado com sucesso!');
    } catch (error) {
        console.error('❌ Erro ao inicializar carrossel:', error);
        console.error('Stack:', error.stack);
    }
}

// Se o DOM já está pronto, executar imediatamente
if (document.readyState === 'loading') {
    console.log('⏳ DOM ainda está carregando, aguardando DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', initCarousel);
} else {
    console.log('⚡ DOM já está pronto, inicializando carrossel...');
    initCarousel();
}

// Atualizar perfil do localStorage
try {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
        console.log('👤 Perfil atualizado:', nomePerfil);
    }
} catch (error) {
    console.warn('⚠️ Erro ao atualizar perfil:', error);
}
