import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import lenguageIt from '../src/locales/it/translation.json'
import lenguageEn from '../src/locales/en/translation.json'
import lenguageEs from '../src/locales/es/translation.json'
import lenguageFr from '../src/locales/fr/translation.json'


i18n.use(initReactI18next).init({
    resources: {
        IT: lenguageIt,
        EN: lenguageEn,
        ES: lenguageEs,
        FR: lenguageFr
    },
    fallbackLng: 'IT',
    debug: true,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: '.',
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait: true
    }
});


export default i18n