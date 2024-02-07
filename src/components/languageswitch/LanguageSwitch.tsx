import i18n from "i18n";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { switchLanguage } from "store/languageSlice";
import { RootState } from "store/store";

export const LanguageSwitch = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.language);
  const { t } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(switchLanguage(event.target.value));
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <label htmlFor="select--change-language" className="dark:text-white">
        {t("LanguageSwitch.ChangeLanguage")}
      </label>
      <select
        className="dark:bg-gray-900 dark:text-white"
        onChange={changeLanguage}
        value={language}
        id="select--change-language"
      >
        <option value="en">English</option>
        <option value="nl">Dutch</option>
      </select>
    </>
  );
};
