import { useSelector } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import fa from "../locale/fa";
import en from "../locale/en";

function TranslateProvider({ children }) {
  const lang = useSelector((state) => state.global.lang);
  i18next.init({
    lng: lang,
    fallbackLng: "en",
    resources: {
      en: {
        translation: en,
      },
      fa: {
        translation: fa,
      },
    },
  });

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}

export default TranslateProvider;
