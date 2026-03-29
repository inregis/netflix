console.log('✅ index.js carregado');

// Adicionar event listeners a todos os perfis
const profiles = document.querySelectorAll('.profile a');

profiles.forEach(profile => {
    profile.addEventListener('click', (e) => {
        // Se o link aponta para catalogo.html, armazenar dados
        if (profile.href.includes('catalogo.html')) {
            e.preventDefault(); // Previne navegação imediata
            
            // Extrair informações do perfil
            const img = profile.querySelector('img');
            const caption = profile.querySelector('figcaption');
            
            const imagemUrl = img ? img.src : '';
            const nomePerfil = caption ? caption.textContent : 'Usuário';
            
            // Armazenar no localStorage
            localStorage.setItem('perfilAtivoNome', nomePerfil);
            localStorage.setItem('perfilAtivoImagem', imagemUrl);
            
            console.log(`👤 Perfil selecionado: ${nomePerfil}`);
            console.log(`🖼️ Imagem: ${imagemUrl}`);
            
            // Redirecionar para catalogo.html
            window.location.href = profile.href;
        }
    });
});

console.log('✅ Event listeners dos perfis configurados');
