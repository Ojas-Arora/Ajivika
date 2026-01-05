function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

function toggleTranslate() {
    const translateElement = document.getElementById("google_translate_element");
    if (translateElement) {
        translateElement.style.display = (translateElement.style.display === "block") ? "none" : "block";
    }
}

// Google Translate Init
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,es,fr,de,it,ja,zh-CN',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
    }, 'google_translate_element');
}

// Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-switch__checkbox');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark');
        if (themeToggle) themeToggle.checked = true;
    } else {
        document.body.classList.remove('dark');
        if (themeToggle) themeToggle.checked = false;
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                document.body.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Initialize google translate script if not already present
    if (!document.querySelector('script[src*="translate.google.com"]')) {
        const script = document.createElement('script');
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);
    }
});
