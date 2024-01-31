var lang = {};
// Set current language to the user's browser language or default to Spanish
var currentLang = navigator.language.slice(0,2) || navigator.userLanguage.slice(0,2) || 'es';

// Gets the appropriate text in the current language
function getText(id) {
    var text = '';
    if (lang[currentLang][id]) {
        text = lang[currentLang][id];
    }
    return text;
}

function updatePageLanguage(lang) {
    currentLang = lang ?? currentLang;
    var langIds = document.getElementsByClassName("lang");
    Array.prototype.forEach.call(langIds, function(el, i) {
        el.innerHTML = getText(el.id);
    });
}
