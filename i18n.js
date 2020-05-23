const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en-US',
  otherLanguages: ['es-US'],
});
// adds default languages array so i18n won't complain about it
NextI18NextInstance.i18n.languages = ['en-US', 'es-US'];

module.exports = NextI18NextInstance;
