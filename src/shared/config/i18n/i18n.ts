import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// TODO нужно правильно настроить i18n, сейчас появляется ошибка
//  при первой загрузке, когда язык устанвавливается автоматически

i18n
    //.use(Backend)
    //.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: localStorage.getItem('i18nextLng') ?? 'ru',
        debug: __IS_DEV__,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });



export default i18n;