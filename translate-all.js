// Автоматический перевод всего сайта
function addTranslateAttributes() {
    // Добавляем атрибуты ко всем текстовым элементам
    const elementsToTranslate = [
        // Navigation
        { selector: '.nav a[href="#about"]', key: 'nav.about' },
        { selector: '.nav a[href="#features"]', key: 'nav.features' },
        { selector: '.nav a[href*="price"]', key: 'nav.pricing' },
        { selector: '.btn-cta span', key: 'cta.start' },
        { selector: '.mobile-nav a[href="#about"]', key: 'nav.about' },
        { selector: '.mobile-nav a[href="#features"]', key: 'nav.features' },
        { selector: '.mobile-nav a[href*="price"]', key: 'nav.pricing' },
        
        // Hero section
        { selector: '.hero-badge span', key: 'hero.badge' },
        { selector: '.hero-subtitle', key: 'hero.subtitle' },
        { selector: '.subtitle', key: 'hero.description' },
        { selector: '.btn-main', key: 'hero.btn.start' },
        { selector: '.btn-secondary', key: 'hero.btn.learn' },
        { selector: '.stat-label:nth-of-type(1)', key: 'hero.stat.commission' },
        { selector: '.stat-label:nth-of-type(2)', key: 'hero.stat.month' },
        { selector: '.stat-label:nth-of-type(3)', key: 'hero.stat.support' },
        
        // Features
        { selector: '.section-title', key: 'features.title' },
        { selector: '.section-subtitle', key: 'features.subtitle' },
        
        // Footer
        { selector: '.footer-content h2', key: 'footer.title' },
        { selector: '.footer-tagline', key: 'footer.subtitle' },
        { selector: '.large-btn', key: 'footer.btn' }
    ];
    
    elementsToTranslate.forEach(item => {
        const element = document.querySelector(item.selector);
        if (element && !element.hasAttribute('data-translate')) {
            element.setAttribute('data-translate', item.key);
        }
    });
}

// Функция полного перевода страницы
function translateFullPage(lang) {
    // Переводим все элементы с data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Переводим элементы без атрибутов (прямой перевод по содержимому)
    const directTranslations = {
        ru: {
            'Узнать больше': 'Узнать больше',
            'Комиссия с продаж': 'Комиссия с продаж',
            'Первый месяц': 'Первый месяц',
            'AI-поддержка': 'AI-поддержка',
            'AI-помощник': 'AI-помощник',
            'Интеграция с Telegram': 'Интеграция с Telegram',
            'Честные условия': 'Честные условия',
            'Уникальные ниши': 'Уникальные ниши',
            'Эко-товары': 'Эко-товары',
            'Редкие коллекционные вещи': 'Редкие коллекционные вещи'
        },
        uz: {
            'Узнать больше': 'Batafsil bilish',
            'Комиссия с продаж': 'Sotuv komissiyasi',
            'Первый месяц': 'Birinchi oy',
            'AI-поддержка': 'AI-yordam',
            'AI-помощник': 'AI-yordamchi',
            'Интеграция с Telegram': 'Telegram bilan integratsiya',
            'Честные условия': 'Halol shartlar',
            'Уникальные ниши': 'Noyob nishalar',
            'Эко-товары': 'Eko-mahsulotlar',
            'Редкие коллекционные вещи': 'Noyob kolleksiya buyumlari'
        }
    };
    
    // Применяем прямые переводы
    Object.keys(directTranslations[lang] || {}).forEach(ruText => {
        const elements = document.querySelectorAll('*');
        elements.forEach(el => {
            if (el.children.length === 0 && el.textContent.trim() === ruText) {
                el.textContent = directTranslations[lang][ruText];
            }
        });
    });
    
    document.documentElement.lang = lang;
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    addTranslateAttributes();
});