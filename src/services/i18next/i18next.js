import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import cookies from "js-cookie";
import { getLanguageKeys } from "../../utils/formaters";
import { languages } from "./data";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: cookies.get("i18next") || "am",
    supportedLngs: getLanguageKeys(languages),
    debug: false,
    nsSeparator: false,
    keySeparator: false,
    fallbackLng: false,
    detection: {
      order: ["cookie", "path", "htmlTag"],
      caches: ["cookie"],
    },
    react: { useSuspense: true },
    backend: {
      loadPath: "/languages/{{lng}}/translation.json?v="  + new Date().getTime(),
    },
  });
