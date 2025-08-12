// Скрипт для быстрого добавления атрибутов data-translate в price.html

const updates = [
    // Toggle
    { old: 'Ежемесячно', new: '<span data-translate="price.monthly">Ежемесячно</span>' },
    { old: 'Ежегодно', new: '<span data-translate="price.yearly">Ежегодно</span>' },
    
    // START plan
    { old: '🛒 START', new: '<span data-translate="price.start.title">🛒 START</span>' },
    { old: 'Идеально для новичков в e-commerce', new: '<span data-translate="price.start.desc">Идеально для новичков в e-commerce</span>' },
    
    // PRO plan  
    { old: '📈 PRO', new: '<span data-translate="price.pro.title">📈 PRO</span>' },
    { old: 'Для амбициозного роста бизнеса', new: '<span data-translate="price.pro.desc">Для амбициозного роста бизнеса</span>' },
    
    // ULTIMATE plan
    { old: '🏆 ULTIMATE', new: '<span data-translate="price.ultimate.title">🏆 ULTIMATE</span>' },
    { old: 'Для лидеров рынка', new: '<span data-translate="price.ultimate.desc">Для лидеров рынка</span>' },
    
    // FAQ
    { old: 'Часто задаваемые вопросы', new: '<span data-translate="price.faq.title">Часто задаваемые вопросы</span>' },
    
    // Period
    { old: '/ месяц', new: '<span data-translate="price.period">/ месяц</span>' },
    
    // Popular badge
    { old: 'ПОПУЛЯРНЫЙ', new: '<span data-translate="price.popular">ПОПУЛЯРНЫЙ</span>' },
    
    // FAQ Questions
    { old: 'Можно ли изменить план в любое время?', new: '<span data-translate="price.faq.change_plan">Можно ли изменить план в любое время?</span>' },
    { old: 'Есть ли бесплатный пробный период?', new: '<span data-translate="price.faq.free_trial">Есть ли бесплатный пробный период?</span>' },
    { old: 'Какие способы оплаты вы принимаете?', new: '<span data-translate="price.faq.payment_methods">Какие способы оплаты вы принимаете?</span>' }
];

console.log('Список обновлений для price.html готов');