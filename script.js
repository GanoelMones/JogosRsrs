// Tema escuro/claro - Versão melhorada
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

// Aplicar tema salvo com verificação de preferência do sistema
function applyTheme() {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = localStorage.getItem('theme') || (systemPrefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}

// Atualizar ícone do botão com animação
function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.style.transform = 'rotate(180deg)';
    icon.style.opacity = '0';
    
    setTimeout(() => {
        if (theme === 'dark') {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
        
        icon.style.transform = 'rotate(0)';
        icon.style.opacity = '1';
    }, 150);
}

// Alternar tema com animação
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Aplicar tema inicial
applyTheme();

// Observar mudanças de preferência de tema do sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        applyTheme();
    }
});

// Dados dos jogos - Versão melhorada com mais informações
const topGames = [
    { name: "Elden Ring", year: 2022, developer: "FromSoftware" },
    { name: "God of War Ragnarök", year: 2022, developer: "Santa Monica Studio" },
    { name: "The Legend of Zelda: Tears of the Kingdom", year: 2023, developer: "Nintendo" },
    { name: "Horizon Forbidden West", year: 2022, developer: "Guerrilla Games" },
    { name: "Xenoblade Chronicles 3", year: 2022, developer: "Monolith Soft" },
    { name: "Stray", year: 2022, developer: "BlueTwelve Studio" },
    { name: "A Plague Tale: Requiem", year: 2022, developer: "Asobo Studio" },
    { name: "Splatoon 3", year: 2022, developer: "Nintendo" },
    { name: "Bayonetta 3", year: 2022, developer: "PlatinumGames" },
    { name: "Pentiment", year: 2022, developer: "Obsidian Entertainment" }
];

// Preencher lista de top jogos com mais informações
const topGamesList = document.getElementById('top-games');
topGames.forEach((game, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${game.name}</strong>
        <span class="game-info">${game.year} | ${game.developer}</span>
        <span class="game-rank">${index + 1}º lugar</span>
    `;
    topGamesList.appendChild(li);
});

// Notícias (simulando API) - Versão melhorada com async/await
async function loadNews() {
    try {
        // Simulando uma requisição assíncrona
        const newsData = await new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {
                        title: "Novo jogo da FromSoftware anunciado",
                        excerpt: "A FromSoftware anunciou seu próximo jogo, prometendo revolucionar o gênero soulslike mais uma vez.",
                        date: "15/06/2023",
                        image: "https://via.placeholder.com/600x400?text=FromSoftware+Game",
                        category: "Anúncios"
                    },
                    {
                        title: "PlayStation anuncia novo modelo de PS5",
                        excerpt: "Sony revela novo modelo do PS5 com design mais compacto e armazenamento expandido.",
                        date: "12/06/2023",
                        image: "https://via.placeholder.com/600x400?text=New+PS5+Model",
                        category: "Hardware"
                    },
                    {
                        title: "Nintendo Switch 2: rumores e especulações",
                        excerpt: "Novos rumores sugerem que o sucessor do Switch pode ser anunciado ainda este ano.",
                        date: "10/06/2023",
                        image: "https://via.placeholder.com/600x400?text=Nintendo+Switch+2",
                        category: "Rumores"
                    },
                    {
                        title: "Xbox Game Pass adiciona 5 novos jogos em junho",
                        excerpt: "Confira os jogos que chegaram ao catálogo do Game Pass neste mês.",
                        date: "08/06/2023",
                        image: "https://via.placeholder.com/600x400?text=Xbox+Game+Pass",
                        category: "Serviços"
                    },
                    {
                        title: "The Last of Us Part I: análise do remake",
                        excerpt: "O remake do aclamado jogo da Naughty Dog chega com gráficos impressionantes.",
                        date: "05/06/2023",
                        image: "https://via.placeholder.com/600x400?text=The+Last+of+Us+Part+I",
                        category: "Análises"
                    },
                    {
                        title: "Indie brasileiro ganha prêmio internacional",
                        excerpt: "Jogo desenvolvido por estúdio brasileiro é premiado em festival de games independentes.",
                        date: "01/06/2023",
                        image: "https://via.placeholder.com/600x400?text=Brazilian+Indie+Game",
                        category: "Indie"
                    }
                ]);
            }, 800); // Simula um delay de rede
        });

        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = ''; // Limpar loading se houver

        newsData.forEach(news => {
            const article = document.createElement('article');
            article.className = 'news-card';
            
            article.innerHTML = `
                <img src="${news.image}" alt="${news.title}" loading="lazy">
                <div class="news-content">
                    <span class="news-category">${news.category}</span>
                    <h3>${news.title}</h3>
                    <p>${news.excerpt}</p>
                    <div class="news-footer">
                        <span class="news-date">${news.date}</span>
                        <a href="#" class="btn">Ler mais</a>
                    </div>
                </div>
            `;
            
            newsContainer.appendChild(article);
        });

    } catch (error) {
        console.error('Erro ao carregar notícias:', error);
        document.getElementById('news-container').innerHTML = `
            <p class="error-message">Não foi possível carregar as notícias. Tente recarregar a página.</p>
        `;
    }
}

// Carregar notícias quando a página carregar
document.addEventListener('DOMContentLoaded', loadNews);

// Formulário de contato - Versão melhorada com validação
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validação básica
    if (!name || !email || !message) {
        showAlert('Por favor, preencha todos os campos.', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showAlert('Por favor, insira um email válido.', 'error');
        return;
    }
    
    try {
        // Simular envio assíncrono
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log('Formulário enviado:', { name, email, message });
        showAlert('Obrigado por sua mensagem! Entraremos em contato em breve.', 'success');
        contactForm.reset();
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        showAlert('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.', 'error');
    }
});

// Newsletter - Versão melhorada
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const emailInput = newsletterForm.querySelector('input');
    const email = emailInput.value.trim();
    
    if (!validateEmail(email)) {
        showAlert('Por favor, insira um email válido.', 'error');
        return;
    }
    
    try {
        // Simular cadastro assíncrono
        await new Promise(resolve => setTimeout(resolve, 800));
        
        console.log('Email cadastrado:', email);
        showAlert('Obrigado por assinar nossa newsletter!', 'success');
        newsletterForm.reset();
    } catch (error) {
        console.error('Erro ao cadastrar email:', error);
        showAlert('Ocorreu um erro ao cadastrar seu email. Tente novamente mais tarde.', 'error');
    }
});

// Questionário de Pesquisa - Nova funcionalidade
const quizForm = document.getElementById('quiz-form');
const gastoRange = document.getElementById('gasto-range');
const gastoValue = document.getElementById('gasto-value');

// Atualizar valor do range
if (gastoRange && gastoValue) {
    gastoRange.addEventListener('input', () => {
        gastoValue.textContent = `R$${gastoRange.value}`;
    });
}

// Validar e enviar questionário
if (quizForm) {
    quizForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validar ranking (apenas até 3 itens selecionados)
        const rankingSelects = document.querySelectorAll('.ranking-select');
        const selectedItems = {};
        let rankingError = false;
        
        rankingSelects.forEach(select => {
            const value = select.value;
            if (value !== '0') {
                if (selectedItems[value]) {
                    rankingError = true;
                }
                selectedItems[value] = true;
            }
        });
        
        if (rankingError) {
            showAlert('Por favor, selecione no máximo um item para cada posição no ranking (1º, 2º, 3º)', 'error');
            return;
        }
        
        // Coletar dados do formulário
        const formData = new FormData(quizForm);
        const data = {
            genero: formData.get('genero'),
            frequencia: formData.get('frequencia'),
            plataforma: formData.getAll('plataforma'),
            gasto: gastoRange.value,
            comentarios: formData.get('comentarios'),
            ranking: {}
        };
        
        rankingSelects.forEach(select => {
            const feature = select.parentElement.querySelector('span').textContent;
            const position = select.value;
            if (position !== '0') {
                data.ranking[feature] = position;
            }
        });
        
        try {
            // Simular envio assíncrono
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            console.log('Respostas do questionário:', data);
            showAlert('Obrigado por participar da nossa pesquisa! Suas respostas foram registradas.', 'success');
            
            // Resetar formulário
            quizForm.reset();
            gastoValue.textContent = 'R$100';
            gastoRange.value = 100;
            
            // Resetar selects de ranking
            rankingSelects.forEach(select => {
                select.value = '0';
            });
            
        } catch (error) {
            console.error('Erro ao enviar questionário:', error);
            showAlert('Ocorreu um erro ao enviar suas respostas. Tente novamente mais tarde.', 'error');
        }
    });
}

// Funções auxiliares
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.classList.add('fade-out');
        setTimeout(() => alertDiv.remove(), 500);
    }, 3000);
}

// Smooth scrolling para links internos - Versão melhorada
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Atualizar URL sem recarregar a página
            history.pushState(null, null, targetId);
        }
    });
});

// Adicionar classe ativa ao menu conforme scroll - Versão melhorada
function updateActiveMenu() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let current = '';
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Debounce para melhorar performance
function debounce(func, wait = 100) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}

window.addEventListener('scroll', debounce(updateActiveMenu));

// Atualizar menu ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    updateActiveMenu();
    
    // Se houver hash na URL, rolar para a seção
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            setTimeout(() => {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: targetPosition });
            }, 100);
        }
    }
});

// Carregamento lazy para imagens - Melhoria de performance
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}