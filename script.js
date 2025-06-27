// Tema escuro/claro
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

// Aplicar tema salvo
document.documentElement.setAttribute('data-theme', currentTheme);

// Atualizar ícone do botão
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Dados dos jogos
const topGames = [
    "Elden Ring",
    "God of War Ragnarök",
    "The Legend of Zelda: Tears of the Kingdom",
    "Horizon Forbidden West",
    "Xenoblade Chronicles 3",
    "Stray",
    "A Plague Tale: Requiem",
    "Splatoon 3",
    "Bayonetta 3",
    "Pentiment"
];

// Preencher lista de top jogos
const topGamesList = document.getElementById('top-games');
topGames.forEach(game => {
    const li = document.createElement('li');
    li.textContent = game;
    topGamesList.appendChild(li);
});

// Notícias (simulando API)
const newsData = [
    {
        title: "Novo jogo da FromSoftware anunciado",
        excerpt: "A FromSoftware anunciou seu próximo jogo, prometendo revolucionar o gênero soulslike mais uma vez.",
        date: "15/06/2023",
        image: "https://via.placeholder.com/600x400?text=FromSoftware+Game"
    },
    {
        title: "PlayStation anuncia novo modelo de PS5",
        excerpt: "Sony revela novo modelo do PS5 com design mais compacto e armazenamento expandido.",
        date: "12/06/2023",
        image: "https://via.placeholder.com/600x400?text=New+PS5+Model"
    },
    {
        title: "Nintendo Switch 2: rumores e especulações",
        excerpt: "Novos rumores sugerem que o sucessor do Switch pode ser anunciado ainda este ano.",
        date: "10/06/2023",
        image: "https://via.placeholder.com/600x400?text=Nintendo+Switch+2"
    },
    {
        title: "Xbox Game Pass adiciona 5 novos jogos em junho",
        excerpt: "Confira os jogos que chegaram ao catálogo do Game Pass neste mês.",
        date: "08/06/2023",
        image: "https://via.placeholder.com/600x400?text=Xbox+Game+Pass"
    },
    {
        title: "The Last of Us Part I: análise do remake",
        excerpt: "O remake do aclamado jogo da Naughty Dog chega com gráficos impressionantes.",
        date: "05/06/2023",
        image: "https://via.placeholder.com/600x400?text=The+Last+of+Us+Part+I"
    },
    {
        title: "Indie brasileiro ganha prêmio internacional",
        excerpt: "Jogo desenvolvido por estúdio brasileiro é premiado em festival de games independentes.",
        date: "01/06/2023",
        image: "https://via.placeholder.com/600x400?text=Brazilian+Indie+Game"
    }
];

// Preencher notícias
const newsContainer = document.getElementById('news-container');
newsData.forEach(news => {
    const article = document.createElement('article');
    article.className = 'news-card';
    
    article.innerHTML = `
        <img src="${news.image}" alt="${news.title}">
        <div class="news-content">
            <h3>${news.title}</h3>
            <p>${news.excerpt}</p>
            <span class="news-date">${news.date}</span>
            <a href="#" class="btn">Ler mais</a>
        </div>
    `;
    
    newsContainer.appendChild(article);
});

// Formulário de contato
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simular envio (em um site real, seria uma requisição AJAX)
    console.log('Formulário enviado:', { name, email, message });
    
    alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
    contactForm.reset();
});

// Newsletter
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('input').value;
    
    // Simular cadastro
    console.log('Email cadastrado:', email);
    
    alert('Obrigado por assinar nossa newsletter!');
    newsletterForm.reset();
});

// Smooth scrolling para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Adicionar classe ativa ao menu conforme scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});