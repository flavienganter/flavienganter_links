function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    updateTitle(lang);
}

function updateTitle(lang) {
    const titleElement = document.querySelector('title');  // Changé ici
    const metaTitle = document.querySelector(`meta[name="title-${lang}"]`);
    if (metaTitle) {
        const newTitle = metaTitle.getAttribute('content');
        titleElement.textContent = newTitle;
        document.title = newTitle;
    } else {
        console.warn(`Title for language ${lang} not found`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);
});
