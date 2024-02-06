import i18n from "i18n";
import { useDispatch, useSelector } from "react-redux";
import { switchLanguage } from "store/languageSlice";
import { RootState } from "store/store";

export const LanguageSwitch = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.language);

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(switchLanguage(event.target.value));
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select
      className="dark:bg-gray-900 dark:text-white"
      onChange={changeLanguage}
      value={language}
    >
      <option value="en">English</option>
      <option value="nl">Dutch</option>
    </select>
  );
};
