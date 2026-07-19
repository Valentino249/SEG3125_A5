import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            title: "Food Dashboard",
            data_1_title: "Price of Beef Cuts (per kg) First Half of 2026",
            data_2_title: "Price of Various Beef Cuts (per kg) 2026",
            stewing: "Stewing",
            top_sirloin: "Top Sirloin",
            striploin: "Striploin",
            rib: "Rib",
            jan: "January",
            feb: "February",
            mar: "March",
            apr: "April",
            may: "May"
        }
    },
    jp: {
        translation: {
            title: "食品情報ダッシュボード",
            data_1_title: "牛肉部位別価格（1kgあたり） 2026年上半期",
            data_2_title: "牛肉の部位別価格（1kgあたり）2026年",
            stewing: "煮込み",
            top_sirloin: "トップサーロイン",
            striploin: "ストリップロイン",
            rib: "リブ",
            jan: "1月",
            feb: "2月",
            mar: "3月",
            apr: "4月",
            may: "5月"
        }
    }
};

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;