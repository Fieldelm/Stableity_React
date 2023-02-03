import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import  LanguageDetector from "i18next-browser-languagedetector";



import engTrans from "./en/translation.json";
import hunTrans from "./hu/translation.json";


const resources = {
  en:{
    translation : engTrans
  },
  hu:{
    translation : hunTrans
  }
}

//export const availableLangs = Object.keys(resources);

i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
    resources,
    fallbackLng: 'en', 
    detection: {
      order: ['cookie','htmlTag', 'path' ],
      caches: ['cookie']
    }
});

export default i18next;

//https://medium.com/ms-club-of-sliit/internationalization-using-i18next-with-react-typescript-d7c443df3be4