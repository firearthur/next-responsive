const NextI18Next = require('next-i18next').default;

const languages = process.env.AVAILABLE_LANGUAGES;
const availableLanguages = typeof languages === 'string'
  ? languages.split(' ')
  : Array.isArray(languages)
    ? languages.map(l => l.code)
    : [];

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: availableLanguages[0],
  otherLanguages: availableLanguages.slice(1),
});
// adds default languages array so i18n won't complain about it
NextI18NextInstance.i18n.languages = availableLanguages;

module.exports = NextI18NextInstance;
