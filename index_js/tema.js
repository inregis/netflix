// Dark/Light Mode Toggle Script

// Obter o botão de toggle
const themeToggle = document.getElementById('themeToggle');

// Função para definir o tema
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateToggleButton(theme);
}

// Função para atualizar o texto do botão
function updateToggleButton(theme) {
  if (theme === 'dark') {
    themeToggle.textContent = '☀️ Modo Claro';
    themeToggle.setAttribute('title', 'Alternar para modo claro');
  } else {
    themeToggle.textContent = '🌙 Modo Escuro';
    themeToggle.setAttribute('title', 'Alternar para modo escuro');
  }
}

// Função para obter o tema
function getTheme() {
  // 1. Verificar localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }

  // 2. Verificar preferência do sistema
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  // 3. Padrão: dark mode
  return 'dark';
}

// Função para toggle do tema
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Inicializar o tema ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  const initialTheme = getTheme();
  setTheme(initialTheme);
});

// Listener para mudanças de preferência do sistema
if (window.matchMedia) {
  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeQuery.addEventListener('change', (e) => {
    // Apenas aplicar se o usuário não tiver uma preferência salva
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    }
  });
}

// Event listener para o botão
themeToggle.addEventListener('click', toggleTheme);

// Suportar atalho de teclado (opcional): Ctrl+Shift+T
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === 'T') {
    e.preventDefault();
    toggleTheme();
  }
});
